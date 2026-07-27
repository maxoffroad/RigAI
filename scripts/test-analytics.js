import {
  ANALYTICS_CONSENT_KEY,
  bindAnalytics,
  eventParameters,
  hasAnalyticsConsent,
  normalizedPagePath,
  sendPageView,
  trackEvent,
  updateAnalyticsConsent
} from "../src/analytics.js";

const calls = [];
const storedValues = new Map();
const windowLike = {
  __RIGAI_ANALYTICS__: {
    enabled: true,
    consent: "denied",
    pageViewSent: false,
    storageKey: ANALYTICS_CONSENT_KEY
  },
  gtag: (...args) => calls.push(args),
  localStorage: {
    setItem: (key, value) => storedValues.set(key, value)
  },
  location: {
    pathname: "/vehicles/toyota-4runner/suspension"
  }
};
const documentLike = {
  location: {
    pathname: "/vehicles/toyota-4runner/suspension",
    search: "?utm_source=test",
    hash: "#fitment"
  },
  body: {
    dataset: {
      pageType: "article",
      vehicleSlug: "toyota-4runner"
    }
  }
};
const element = {
  dataset: {
    analyticsLocation: "article_cta"
  }
};

const params = eventParameters(element, "build_setup_click", documentLike);

if (trackEvent("build_setup_click", params, windowLike) || calls.length !== 0) {
  throw new Error("Analytics events must be blocked while consent is denied.");
}

if (sendPageView(documentLike, windowLike)) {
  throw new Error("Page views must be blocked while consent is denied.");
}

if (!updateAnalyticsConsent("granted", documentLike, windowLike)) {
  throw new Error("Expected analytics consent to update to granted.");
}

if (!hasAnalyticsConsent(windowLike)) {
  throw new Error("Granted analytics consent was not applied.");
}

if (storedValues.get(ANALYTICS_CONSENT_KEY) !== "granted") {
  throw new Error("Granted analytics consent was not persisted.");
}

const pageViewCalls = () =>
  calls.filter(
    ([command, eventName]) => command === "event" && eventName === "page_view"
  );

if (pageViewCalls().length !== 1) {
  throw new Error("Accepting analytics must send exactly one page_view.");
}

if (!trackEvent("build_setup_click", params, windowLike)) {
  throw new Error("Expected a consented CTA event.");
}

const buildSetupCall = calls.find(
  ([command, eventName]) =>
    command === "event" && eventName === "build_setup_click"
);

if (
  !buildSetupCall ||
  JSON.stringify(buildSetupCall[2]) !==
    JSON.stringify({
      cta_location: "article_cta",
      page_type: "article",
      vehicle_slug: "toyota-4runner"
    })
) {
  throw new Error("Analytics event payload is invalid.");
}

if (
  JSON.stringify(buildSetupCall[2]).includes("utm_source") ||
  JSON.stringify(buildSetupCall[2]).includes("#fitment")
) {
  throw new Error("Analytics event payload includes query or hash data.");
}

updateAnalyticsConsent("granted", documentLike, windowLike);
if (pageViewCalls().length !== 1) {
  throw new Error("Repeated consent updates must not duplicate page_view.");
}

for (const eventName of [
  "example_build_click",
  "guide_click",
  "vehicle_guide_click",
  "faq_open"
]) {
  if (!trackEvent(eventName, {}, windowLike)) {
    throw new Error(`${eventName} must be sent after analytics consent.`);
  }
}

const tacomaVehicleCard = {
  dataset: {
    analyticsLocation: "homepage_vehicle_card",
    vehicleSlug: "toyota-tacoma"
  }
};
const homeDocument = {
  location: { pathname: "/" },
  body: { dataset: { pageType: "home" } }
};
windowLike.__RIGAI_ANALYTICS__.consent = "granted";
const tacomaVehicleParams = eventParameters(
  tacomaVehicleCard,
  "vehicle_guide_click",
  homeDocument
);

if (
  JSON.stringify(tacomaVehicleParams) !==
  JSON.stringify({
    vehicle_slug: "toyota-tacoma",
    cta_location: "homepage_vehicle_card",
    page_type: "home",
    page_path: "/"
  })
) {
  throw new Error("Tacoma homepage vehicle-card analytics payload is invalid.");
}

const directoryDocument = {
  location: { pathname: "/vehicles" },
  body: { dataset: { pageType: "vehicle_directory" } }
};
const directoryVehicleCard = {
  dataset: {
    analyticsLocation: "vehicles_directory_card",
    vehicleSlug: "toyota-tacoma"
  }
};
const directoryVehicleParams = eventParameters(
  directoryVehicleCard,
  "vehicle_guide_click",
  directoryDocument
);
if (
  JSON.stringify(directoryVehicleParams) !==
  JSON.stringify({
    vehicle_slug: "toyota-tacoma",
    cta_location: "vehicles_directory_card",
    page_type: "vehicle_directory",
    page_path: "/vehicles"
  })
) {
  throw new Error("Tacoma directory vehicle-card analytics payload is invalid.");
}

const vehicleGuideCallsBefore = calls.filter(
  ([command, eventName]) =>
    command === "event" && eventName === "vehicle_guide_click"
).length;
if (!trackEvent("vehicle_guide_click", tacomaVehicleParams, windowLike)) {
  throw new Error("Tacoma homepage vehicle-card event was not sent.");
}
const vehicleGuideCalls = calls.filter(
  ([command, eventName]) =>
    command === "event" && eventName === "vehicle_guide_click"
);
if (
  vehicleGuideCalls.length !== vehicleGuideCallsBefore + 1 ||
  JSON.stringify(vehicleGuideCalls.at(-1)[2]) !==
    JSON.stringify(tacomaVehicleParams)
) {
  throw new Error("Tacoma homepage vehicle-card click must send exactly one event.");
}

const directoryVehicleCallsBefore = vehicleGuideCalls.length;
if (!trackEvent("vehicle_guide_click", directoryVehicleParams, windowLike)) {
  throw new Error("Tacoma directory vehicle-card event was not sent.");
}
const directoryVehicleCalls = calls.filter(
  ([command, eventName]) =>
    command === "event" && eventName === "vehicle_guide_click"
);
if (
  directoryVehicleCalls.length !== directoryVehicleCallsBefore + 1 ||
  JSON.stringify(directoryVehicleCalls.at(-1)[2]) !==
    JSON.stringify(directoryVehicleParams)
) {
  throw new Error("Tacoma directory vehicle-card click must send exactly one event.");
}

updateAnalyticsConsent("denied", documentLike, windowLike);
if (hasAnalyticsConsent(windowLike)) {
  throw new Error("Reject must set effective analytics consent to denied.");
}

if (storedValues.get(ANALYTICS_CONSENT_KEY) !== "denied") {
  throw new Error("Denied analytics consent was not persisted.");
}

if (trackEvent("guide_click", {}, windowLike)) {
  throw new Error("Custom events must stop after analytics consent is rejected.");
}

if (normalizedPagePath({ pathname: "privacy" }) !== "/privacy") {
  throw new Error("Page path normalization failed.");
}

if (trackEvent("unknown_event", { email: "private@example.com" }, windowLike)) {
  throw new Error("Unknown analytics events must be ignored.");
}

function mockControl(dataset = {}) {
  const listeners = new Map();
  return {
    dataset,
    blurred: false,
    focusOptions: null,
    addEventListener: (type, listener) => listeners.set(type, listener),
    blur() {
      this.blurred = true;
    },
    focus(options) {
      this.focusOptions = options;
    },
    click() {
      let defaultPrevented = false;
      listeners.get("click")?.({
        preventDefault: () => {
          defaultPrevented = true;
        }
      });
      return defaultPrevented;
    }
  };
}

const acceptButton = mockControl({ consentChoice: "granted" });
const rejectButton = mockControl({ consentChoice: "denied" });
const settingsButton = mockControl();
const consentBanner = {
  hidden: true,
  querySelector: () => acceptButton
};
const scrollCalls = [];
const consentWindow = {
  __RIGAI_ANALYTICS__: {
    enabled: true,
    consent: "denied",
    savedChoice: "denied",
    pageViewSent: false,
    listenersBound: false,
    storageKey: ANALYTICS_CONSENT_KEY
  },
  gtag: () => {},
  localStorage: {
    setItem: (key, value) => storedValues.set(key, value)
  },
  location: { pathname: "/" },
  scrollX: 0,
  scrollY: 420,
  requestAnimationFrame: (callback) => callback(),
  scrollTo: (x, y) => {
    scrollCalls.push([x, y]);
    consentWindow.scrollX = x;
    consentWindow.scrollY = y;
  }
};
const consentDocument = {
  location: { pathname: "/" },
  body: { dataset: {} },
  querySelector: (selector) => {
    if (selector === "[data-analytics-consent]") return consentBanner;
    if (selector === "[data-analytics-settings]") return settingsButton;
    return null;
  },
  querySelectorAll: (selector) => {
    if (selector === "[data-consent-choice]") {
      return [acceptButton, rejectButton];
    }
    return [];
  },
  addEventListener: () => {}
};

bindAnalytics(consentDocument, consentWindow);

if (!settingsButton.click() || consentBanner.hidden) {
  throw new Error("Analytics settings must open the consent banner with a button click.");
}

if (acceptButton.focusOptions?.preventScroll !== true) {
  throw new Error("Opening consent settings must focus without scrolling.");
}

if (!acceptButton.click() || !consentBanner.hidden || !acceptButton.blurred) {
  throw new Error("Accept must close the consent banner without moving focus to the footer.");
}

if (consentWindow.scrollY !== 420 || scrollCalls.length !== 0) {
  throw new Error("Accept must preserve an unchanged scroll position.");
}

consentWindow.scrollY = 777;
settingsButton.click();
rejectButton.click();

if (consentWindow.scrollY !== 777 || scrollCalls.length !== 0) {
  throw new Error("Reject must preserve an unchanged scroll position.");
}

const delegatedCalls = [];
let delegatedClickListener;
let delegatedListenerCount = 0;
const delegatedWindow = {
  __RIGAI_ANALYTICS__: {
    enabled: true,
    consent: "granted",
    savedChoice: "granted",
    pageViewSent: true,
    listenersBound: false,
    storageKey: ANALYTICS_CONSENT_KEY
  },
  gtag: (...args) => delegatedCalls.push(args),
  location: { pathname: "/vehicles/toyota-4runner" }
};
const delegatedElement = {
  dataset: {
    analyticsEvent: "build_setup_click",
    analyticsLocation: "article_cta"
  },
  matches: () => false
};
const delegatedDocument = {
  location: { pathname: "/vehicles/toyota-4runner" },
  body: {
    dataset: {
      pageType: "vehicle_hub",
      vehicleSlug: "toyota-4runner"
    }
  },
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener: (type, listener) => {
    if (type === "click") {
      delegatedListenerCount += 1;
      delegatedClickListener = listener;
    }
  }
};

bindAnalytics(delegatedDocument, delegatedWindow);
bindAnalytics(delegatedDocument, delegatedWindow);

delegatedClickListener?.({
  target: {
    closest: (selector) =>
      selector === "[data-analytics-event]" ? delegatedElement : null
  },
  preventDefault: () => {
    throw new Error("CTA analytics must not prevent navigation.");
  }
});

const delegatedBuildCalls = delegatedCalls.filter(
  ([command, eventName]) =>
    command === "event" && eventName === "build_setup_click"
);

if (delegatedListenerCount !== 1 || delegatedBuildCalls.length !== 1) {
  throw new Error("One delegated CTA click must produce exactly one build_setup_click.");
}

if (
  JSON.stringify(delegatedBuildCalls[0][2]) !==
  JSON.stringify({
    cta_location: "article_cta",
    page_type: "vehicle_hub",
    vehicle_slug: "toyota-4runner"
  })
) {
  throw new Error("Delegated CTA event parameters are invalid.");
}

console.log(
  "Analytics test passed: consent, scroll safety, and one delegated CTA event verified."
);

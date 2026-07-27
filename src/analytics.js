const EVENT_PARAMETERS = Object.freeze({
  build_setup_click: [
    "cta_location",
    "page_type",
    "page_path",
    "vehicle_context",
    "destination_type"
  ],
  example_build_click: ["cta_location", "page_type", "page_path"],
  vehicle_guide_click: ["vehicle_slug", "link_location", "page_path"],
  guide_click: ["guide_slug", "vehicle_slug", "link_location", "page_path"],
  app_store_click: ["store", "cta_location", "page_path"],
  affiliate_click: [
    "merchant",
    "product_category",
    "page_path",
    "link_location"
  ],
  faq_open: ["faq_id", "page_path"],
  outbound_link_click: ["destination_domain", "link_location", "page_path"]
});

const DATASET_KEYS = Object.freeze({
  cta_location: "analyticsLocation",
  page_type: "pageType",
  vehicle_context: "vehicleContext",
  destination_type: "destinationType",
  vehicle_slug: "vehicleSlug",
  guide_slug: "guideSlug",
  link_location: "analyticsLocation",
  store: "store",
  merchant: "merchant",
  product_category: "productCategory",
  faq_id: "faqId",
  destination_domain: "destinationDomain"
});

export const ANALYTICS_CONSENT_KEY = "rigai_analytics_consent";
const CONSENT_VALUES = new Set(["granted", "denied"]);

function cleanValue(value) {
  if (value === undefined || value === null) return undefined;
  const normalized = String(value).trim().slice(0, 100);
  return normalized || undefined;
}

export function normalizedPagePath(locationLike = globalThis.location) {
  const pathname = locationLike?.pathname || "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

function destinationDomain(element) {
  if (element.dataset.destinationDomain) {
    return element.dataset.destinationDomain;
  }

  try {
    return new URL(element.href, globalThis.location?.origin).hostname;
  } catch {
    return undefined;
  }
}

export function eventParameters(element, eventName, documentLike = document) {
  const allowedParameters = EVENT_PARAMETERS[eventName];
  if (!allowedParameters) return {};

  const bodyData = documentLike.body?.dataset || {};
  const params = {};

  for (const parameter of allowedParameters) {
    let value;

    if (parameter === "page_path") {
      value = normalizedPagePath(documentLike.location || globalThis.location);
    } else if (parameter === "destination_domain") {
      value = destinationDomain(element);
    } else {
      const datasetKey = DATASET_KEYS[parameter];
      value = element.dataset[datasetKey] ?? bodyData[datasetKey];
    }

    const cleaned = cleanValue(value);
    if (cleaned !== undefined) params[parameter] = cleaned;
  }

  return params;
}

export function hasAnalyticsConsent(windowLike = globalThis.window) {
  return windowLike?.__RIGAI_ANALYTICS__?.consent === "granted";
}

export function sendPageView(
  documentLike = globalThis.document,
  windowLike = globalThis.window
) {
  const runtime = windowLike?.__RIGAI_ANALYTICS__;
  if (
    !runtime?.enabled ||
    !hasAnalyticsConsent(windowLike) ||
    runtime.pageViewSent ||
    typeof windowLike.gtag !== "function"
  ) {
    return false;
  }

  windowLike.gtag("event", "page_view", {
    page_path: normalizedPagePath(documentLike?.location || windowLike.location)
  });
  runtime.pageViewSent = true;
  return true;
}

export function updateAnalyticsConsent(
  choice,
  documentLike = globalThis.document,
  windowLike = globalThis.window
) {
  const runtime = windowLike?.__RIGAI_ANALYTICS__;
  if (
    !runtime?.enabled ||
    !CONSENT_VALUES.has(choice) ||
    typeof windowLike.gtag !== "function"
  ) {
    return false;
  }

  try {
    windowLike.localStorage?.setItem(
      runtime.storageKey || ANALYTICS_CONSENT_KEY,
      choice
    );
  } catch {
    // Consent still applies for the current page when browser storage is unavailable.
  }

  runtime.consent = choice;
  runtime.savedChoice = choice;
  windowLike.gtag("consent", "update", {
    analytics_storage: choice,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });

  if (choice === "granted") {
    sendPageView(documentLike, windowLike);
  }

  return true;
}

export function trackEvent(name, params = {}, windowLike = globalThis.window) {
  if (
    !EVENT_PARAMETERS[name] ||
    !windowLike?.__RIGAI_ANALYTICS__?.enabled ||
    !hasAnalyticsConsent(windowLike) ||
    typeof windowLike.gtag !== "function"
  ) {
    return false;
  }

  const allowed = new Set(EVENT_PARAMETERS[name]);
  const safeParams = Object.fromEntries(
    Object.entries(params)
      .filter(([key, value]) => allowed.has(key) && cleanValue(value) !== undefined)
      .map(([key, value]) => [key, cleanValue(value)])
  );

  windowLike.gtag("event", name, safeParams);
  return true;
}

function bindConsentControls(documentLike, windowLike) {
  const runtime = windowLike.__RIGAI_ANALYTICS__;
  const banner = documentLike.querySelector("[data-analytics-consent]");
  const settingsButton = documentLike.querySelector("[data-analytics-settings]");
  const choiceButtons = documentLike.querySelectorAll("[data-consent-choice]");

  if (!banner || !settingsButton || choiceButtons.length !== 2) return;

  const showBanner = ({ moveFocus = false } = {}) => {
    banner.hidden = false;
    if (moveFocus) {
      banner.querySelector('[data-consent-choice="granted"]')?.focus();
    }
  };

  const hideBanner = () => {
    banner.hidden = true;
  };

  settingsButton.addEventListener("click", () => {
    showBanner({ moveFocus: true });
  });

  for (const button of choiceButtons) {
    button.addEventListener("click", () => {
      if (
        updateAnalyticsConsent(
          button.dataset.consentChoice,
          documentLike,
          windowLike
        )
      ) {
        hideBanner();
        settingsButton.focus();
      }
    });
  }

  if (!runtime.savedChoice) {
    showBanner();
  }
}

export function bindAnalytics(documentLike = document, windowLike = window) {
  if (
    !windowLike?.__RIGAI_ANALYTICS__?.enabled ||
    windowLike.__RIGAI_ANALYTICS__.listenersBound
  ) {
    return;
  }

  windowLike.__RIGAI_ANALYTICS__.listenersBound = true;
  bindConsentControls(documentLike, windowLike);

  documentLike.addEventListener("click", (event) => {
    const element = event.target.closest?.("[data-analytics-event]");
    if (!element || element.matches("details, summary")) return;

    const eventName = element.dataset.analyticsEvent;
    trackEvent(
      eventName,
      eventParameters(element, eventName, documentLike),
      windowLike
    );
  });

  const openedFaqItems = new WeakSet();
  for (const details of documentLike.querySelectorAll(
    'details[data-analytics-event="faq_open"]'
  )) {
    details.addEventListener("toggle", () => {
      if (!details.open || openedFaqItems.has(details)) return;
      openedFaqItems.add(details);
      trackEvent(
        "faq_open",
        eventParameters(details, "faq_open", documentLike),
        windowLike
      );
    });
  }
}

if (typeof document !== "undefined" && typeof window !== "undefined") {
  bindAnalytics();
}

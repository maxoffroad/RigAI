import {
  eventParameters,
  normalizedPagePath,
  trackEvent
} from "../src/analytics.js";

const calls = [];
const windowLike = {
  __RIGAI_ANALYTICS__: { enabled: true },
  gtag: (...args) => calls.push(args)
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
      vehicleContext: "toyota-4runner"
    }
  }
};
const element = {
  dataset: {
    analyticsLocation: "article_cta",
    destinationType: "internal_section"
  }
};

const params = eventParameters(element, "build_setup_click", documentLike);
const tracked = trackEvent("build_setup_click", params, windowLike);

if (!tracked || calls.length !== 1) {
  throw new Error("Expected exactly one mocked gtag event.");
}

if (
  calls[0][0] !== "event" ||
  calls[0][1] !== "build_setup_click" ||
  calls[0][2].page_path !== "/vehicles/toyota-4runner/suspension"
) {
  throw new Error("Analytics event payload is invalid.");
}

if (
  JSON.stringify(calls[0][2]).includes("utm_source") ||
  JSON.stringify(calls[0][2]).includes("#fitment")
) {
  throw new Error("Analytics event payload includes query or hash data.");
}

if (normalizedPagePath({ pathname: "privacy" }) !== "/privacy") {
  throw new Error("Page path normalization failed.");
}

if (trackEvent("unknown_event", { email: "private@example.com" }, windowLike)) {
  throw new Error("Unknown analytics events must be ignored.");
}

console.log("Analytics helper test passed: mocked gtag received one privacy-safe event.");

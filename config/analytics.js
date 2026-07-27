const measurementId = (process.env.GA4_MEASUREMENT_ID || "").trim().toUpperCase();
const measurementIdPattern = /^G-[A-Z0-9]+$/;
const placeholderMeasurementIdPattern = /^G-(?:X+|0+)$/;

if (
  measurementId &&
  (!measurementIdPattern.test(measurementId) ||
    placeholderMeasurementIdPattern.test(measurementId))
) {
  throw new Error(
    "GA4_MEASUREMENT_ID must be a valid non-placeholder GA4 Measurement ID."
  );
}

export const analyticsConfig = Object.freeze({
  ga4MeasurementId: measurementId,
  enabled: Boolean(measurementId),
  debug: process.env.ANALYTICS_DEBUG === "true"
});

export { measurementIdPattern, placeholderMeasurementIdPattern };

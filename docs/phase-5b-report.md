# RigAI Phase 5B Report

## Summary

Phase 5B adds optional, privacy-limited GA4 page-view and conversion tracking to the static RigAI website. Analytics is disabled when `GA4_MEASUREMENT_ID` is empty. No Measurement ID is hardcoded.

## Initial State

- Static multi-page Cloudflare Pages build
- No GA4, GTM, pixel, session recording, consent banner, or analytics helper
- Build My Setup linked to an internal Coming Soon section
- No real Google Play URL
- No published affiliate product/search links
- Existing build and validation passed
- Baseline output: 44 files and 1,002,263 bytes

## Analytics Architecture

- `config/analytics.js` is the build-time source of truth.
- `scripts/page-template.js` conditionally injects the official async Google tag.
- `src/analytics.js` binds one delegated click listener plus first-open FAQ listeners.
- Markup uses stable `data-analytics-*` attributes instead of text or CSS selectors.
- Event parameters use an explicit allowlist.

## Measurement ID Configuration

`GA4_MEASUREMENT_ID` is read from the build environment. Empty means disabled. Non-empty values must match `^G-[A-Z0-9]+$`; obvious all-X or all-zero placeholders are rejected.

`ANALYTICS_DEBUG=true` adds GA4 debug mode only to an explicitly built environment. There is no public production query switch.

### Production injection repair

The first production check did not contain GA4 because the Phase 5B implementation existed only in the local working tree while Cloudflare built the older `main` revision. That deployed revision had no analytics config or tag generator, so the Cloudflare variable had no consumer.

The repaired build now imports the validated analytics config directly in `scripts/build.js`, passes it explicitly to the page renderer, logs only whether analytics is enabled, and validates every generated page inside `npm run build`. This makes a missing, duplicate, placeholder, or leaked analytics configuration a build failure before Cloudflare uploads `dist`.

## Google Tag

When enabled, each generated page contains:

- One async `gtag.js` loader
- One initialization block
- One standard config call with automatic page view
- `allow_google_signals: false`
- `allow_ad_personalization_signals: false`
- Analytics storage, ad storage, ad user data, and ad personalization consent defaults set to denied

No SPA page tracking or custom `page_view` event is added.

## Events Implemented

- `build_setup_click`
- `example_build_click`
- `vehicle_guide_click`
- `guide_click`
- `faq_open`
- `outbound_link_click`

The helper and validator support `app_store_click` and `affiliate_click`, but those events are not attached because no real store or affiliate destination exists.

## CTA Instrumentation

Instrumented:

- Header Build My Setup
- Hero Build My Setup
- Hero See an Example Build
- Toyota 4Runner vehicle card
- Published homepage guide cards
- Contextual and related SEO guide links
- Article and vehicle-hub app availability CTA
- FAQ first-open actions
- Article source links

Not instrumented:

- Static final Coming Soon controls
- Planned vehicle cards
- Legal footer links
- Language labels

## Key Event Recommendations

Mark `build_setup_click` as a key event after GA4 receives it. Mark `app_store_click` only after a real official app-store destination is published and the event is received.

## Custom Dimensions

Manual event-scoped dimensions are documented for `cta_location`, `page_type`, `vehicle_context`, `vehicle_slug`, `guide_slug`, `link_location`, `store`, `merchant`, `product_category`, and `destination_type`.

## Privacy

The privacy policy now names Google Analytics 4, describes technical and usage measurement, states that sensitive user-entered data is not intentionally sent, explains possible cookie/browser-storage use, and avoids claiming complete anonymity.

## Consent Limitation

No consent UI exists in Phase 5B. The implementation does not claim or set granted consent. Analytics storage and advertising-related storage/personalization are denied by default. GA4 may send consent-aware cookieless pings. Phase 5C is still required for a real consent choice where applicable, especially for EEA/UK traffic.

## Performance

- The Google loader is async.
- No analytics request occurs when the Measurement ID is absent.
- An enabled page adds one third-party script request; GA4 then controls its measurement requests.
- No GTM container or render-blocking analytics script is used.
- Baseline build: 44 files, 1,002,263 bytes.
- Analytics-disabled Phase 5B build: 45 files, 1,037,937 bytes (`+35,674` bytes, including helper, instrumentation, privacy copy, and generated output).
- Synthetic-ID Phase 5B build: 45 files, 1,058,877 bytes (`+20,940` bytes across 30 generated HTML files compared with the disabled build).
- Browser JavaScript changed from a 1,005-byte entry to a 1,031-byte entry plus a 4,220-byte analytics helper (`+4,246` bytes uncompressed).

## Validation

Local validation checks:

- Measurement ID format and placeholder rejection
- Tag and config call count
- Disabled build contains no analytics initialization
- Privacy defaults and automatic page-view config
- Helper existence and one delegated click binding
- Valid events and required data attributes
- No events on legal or planned cards
- No prohibited PII parameter names
- Correct Google Play and Amazon event requirements when such URLs exist
- No internal UTM parameters

## Files Changed

- Analytics config, helper, test, template integration, CTA/article markup
- Privacy Policy in English and Russian
- Build validation and npm scripts
- Phase 5B planning, setup, and report documentation

Generated `dist` files are created only by the build.

## Commands Run

- `git status`
- `git diff --stat`
- `git log -8 --oneline`
- `npm run build`
- `npm run validate`
- `npm run test:analytics`
- `npm audit --audit-level=moderate`
- Empty-ID and synthetic-ID build verification
- Local preview route and interaction checks

## Local Verification

Release verification covers:

- Analytics-disabled output
- Syntactically valid synthetic-ID output
- One tag per page
- Mocked `gtag` event payload
- Query/hash exclusion
- No click navigation blocking
- Home, vehicle hub, article, privacy, disclosure, and 404 routes

Production Realtime and DebugView remain manual and must not be reported as passed before a real deployment is verified.

## Manual GA4 Actions

1. Create the GA4 property and web stream.
2. Add the real Measurement ID to Cloudflare Production.
3. Deploy.
4. Verify Realtime, DebugView, and `g/collect`.
5. Mark approved key events.
6. Create required custom dimensions.

## Known Limitations

- No consent banner or preference center yet.
- No real Google Play destination.
- No published affiliate links.
- Build My Setup currently measures intent to view the internal Coming Soon section, not install conversion.
- Browser privacy tools may block GA4.

## Phase 5C Readiness

The tag initializes consent defaults before GA4 config and can accept a future consent update from a real preference UI. Phase 5C should define regions, consent categories, storage behavior, withdrawal, and policy/UI alignment.

## Recommended Commit Message

`feat: add privacy-safe GA4 conversion tracking`

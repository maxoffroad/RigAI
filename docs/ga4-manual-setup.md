# RigAI GA4 Manual Setup

## Create GA4 Property

Create a Google Analytics 4 property for RigAI in the correct organization and timezone. Do not enable Google Ads linking, advertising personalization, User-ID, cross-domain measurement, or server-side Measurement Protocol for Phase 5B.

## Create Web Data Stream

Create one web data stream for:

`https://rigai-offroad.com`

Keep Enhanced Measurement settings under review. The website sends automatic page views through the standard Google tag config and does not send a second custom `page_view`.

## Copy Measurement ID

Copy the stream Measurement ID in the form `G-...`. Do not paste it into source files or templates.

## Add Cloudflare Environment Variable

In Cloudflare Pages, open the RigAI project and add:

```text
GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace the example with the real Measurement ID. Add it to Production. Prefer leaving Preview unset, or use a separate test data stream. Do not send preview traffic to the production property.

Optional local-only debug build:

```text
ANALYTICS_DEBUG=true
```

Never enable debug mode for all production visitors.

## Trigger New Deployment

Trigger a new Cloudflare Pages deployment after the environment variable is saved. The static build reads the variable at build time. A deployment built without the variable intentionally contains no Google tag.

## Verify Realtime

Open the production website in a browser, then confirm one page view in Realtime. Navigate to a second page and confirm one additional page view. Verify that page views are not duplicated.

## Verify DebugView

Use a local or dedicated preview build with `ANALYTICS_DEBUG=true` and a test stream. Confirm event names and parameters in DebugView. Do not use a public production query parameter to activate debug mode.

## Events to Expect

- `page_view`
- `build_setup_click`
- `example_build_click`
- `vehicle_guide_click`
- `guide_click`
- `faq_open`
- `outbound_link_click`
- `app_store_click` only after an official store URL exists
- `affiliate_click` only after a real affiliate link exists

## Mark Key Events

After GA4 first receives the event, mark:

- `build_setup_click`
- `app_store_click` when applicable

This is a GA4 Admin action and is not configured by website code.

## Create Custom Dimensions

Create event-scoped custom dimensions for:

| Dimension name | Event parameter |
|---|---|
| CTA location | `cta_location` |
| Page type | `page_type` |
| Vehicle slug | `vehicle_slug` |
| Vehicle slug | `vehicle_slug` |
| Guide slug | `guide_slug` |
| Link location | `link_location` |
| Store | `store` |
| Merchant | `merchant` |
| Product category | `product_category` |

`page_path` is already available through standard page dimensions and does not need a redundant custom dimension.

## Data Retention

Choose the shortest retention period that still supports RigAI reporting needs. Review this setting with the product owner and privacy requirements before launch.

## Internal Traffic

Define and test an internal-traffic rule for the team only when stable office or test IP conditions make it reliable. Do not collect or send IP addresses manually from website code.

## Unwanted Referrals

Leave unwanted-referral and cross-domain settings unchanged unless a real payment, authentication, or external app flow creates a documented attribution issue.

## Consent Limitation

RigAI defaults analytics storage, ad storage, ad user data, and ad personalization to denied. The site asks visitors to accept or reject optional analytics, stores only that choice under `rigai_analytics_consent`, and lets visitors change it from the footer. Analytics events and page views are sent only after analytics consent is granted.

Advertising consent remains denied, Google Signals and ad-personalization signals remain disabled, and no choice is preselected. Legal requirements can vary by region, so the consent flow and policy should still be reviewed when RigAI expands into new jurisdictions.

## Troubleshooting

1. Confirm the Cloudflare Production variable is named exactly `GA4_MEASUREMENT_ID`.
2. Confirm the deployment was built after the variable was added.
3. View page source and confirm one `gtag/js?id=G-...` script.
4. Confirm `src/main.js?v=phase-5b` and `src/analytics.js` load without console errors.
5. In DevTools Network, filter for `gtag/js` and `g/collect`.
6. Confirm browser extensions or privacy settings are not blocking Google Analytics.
7. Confirm a click target has one `data-analytics-event` attribute.
8. Confirm Preview is using a test stream or analytics is disabled.

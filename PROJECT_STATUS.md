# RigAI Website - Project Status

> Read this file and inspect the current repository state before making any
> changes. Treat repository code and the live site as the source of truth if
> this document becomes stale.

Last updated: 2026-08-20

Production URL: https://rigai-offroad.com

Google Play:
https://play.google.com/store/apps/details?id=com.maxkz.rigai

## Current Production Status

RigAI's public website is live at https://rigai-offroad.com.

The Android app is already publicly released on Google Play at:
https://play.google.com/store/apps/details?id=com.maxkz.rigai

Hosting/deployment model:
- Cloudflare Pages
- Static HTML/CSS/JS website
- Build command: `npm run build`
- Output directory: `dist`
- No React, Next, Vite, SPA router, or client-side route fallback

Verified live production routes on 2026-08-20:
- `/` returns HTTP 200
- `/privacy` returns HTTP 200
- `/privacy/` redirects/canonicalizes to `/privacy` and returns HTTP 200
- `/terms` returns HTTP 200
- `/about` returns HTTP 200
- `/support` returns HTTP 200
- `/app-ads.txt` returns HTTP 200 as `text/plain`
- `/robots.txt` returns HTTP 200 as `text/plain`
- `/sitemap.xml` returns HTTP 200 as `application/xml`

Current public route families include:
- `/`
- `/vehicles`
- `/vehicles/<vehicle>`
- `/vehicles/<vehicle>/<guide>`
- `/privacy`
- `/terms`
- `/affiliate-disclosure`
- `/contact`
- `/support`
- `/about`
- `/app-ads.txt`
- `/robots.txt`
- `/sitemap.xml`

The vehicle SEO cluster currently includes Toyota 4Runner, Toyota Tacoma,
Toyota Tundra, Nissan Frontier, Jeep Wrangler JL, Ford Bronco, Jeep Gladiator,
Chevrolet Colorado, Ford Ranger, and Ford F-150 routes.

## Website Architecture

This repository is only for the public RigAI website.

Important source files:
- Homepage legacy source shell: `index.html`
- Homepage rendered source: `src/components/home/index.js`
- Homepage content data: `src/content/home.js`
- Privacy source: `public/privacy.html`
- Terms source: `public/terms.html`
- About source: `public/about.html`
- Support source: `public/support.html`
- Contact source: `public/contact.html`
- Affiliate disclosure source: `public/affiliate-disclosure.html`
- 404 source: `public/404.html`
- Global CSS: `src/styles.css`
- Main JS entry: `src/main.js`
- Analytics helper: `src/analytics.js`
- Analytics build config: `config/analytics.js`
- Page/route config: `scripts/site-config.js`
- Page template and shared footer/header/analytics injection: `scripts/page-template.js`
- Build script: `scripts/build.js`
- Build validation script: `scripts/validate-build.js`
- Production SEO verifier: `scripts/verify-production-seo.js`
- Analytics unit-style test: `scripts/test-analytics.js`

Static/public assets:
- `public/app-ads.txt`
- `public/favicon.svg`
- `public/assets/rigai-og-image.png`
- `public/images/vehicles/*.webp`
- `src/assets/rigai-garage-bg.jpg`

Generated output examples:
- `dist/index.html`
- `dist/privacy/index.html`
- `dist/terms/index.html`
- `dist/about/index.html`
- `dist/support/index.html`
- `dist/app-ads.txt`
- `dist/robots.txt`
- `dist/sitemap.xml`
- `dist/src/styles.css`
- `dist/src/main.js`
- `dist/src/analytics.js`

## Routing Constraints

This section is critical.

The website uses static/file-based routing. Do not introduce SPA routing.

Do not:
- Introduce React Router or any client-side route router.
- Add a wildcard SPA fallback such as `/* /index.html 200`.
- Convert the site into a React, Next, Vite, or other framework app.
- Break `/privacy` or `/privacy/`.
- Route `app-ads.txt` through HTML or JavaScript.
- Modify Cloudflare DNS/config from this repository unless explicitly asked.

`public/_redirects` is intentionally used as a static canonical redirect map.
It currently redirects `.html` and trailing-slash URLs to clean canonical paths.
It must not be replaced with a wildcard SPA fallback.

Important routing behavior:
- `/privacy` must remain accessible.
- `/privacy/` must continue to work and canonicalize safely.
- `/app-ads.txt` must remain directly accessible from the root domain.
- `app-ads.txt` must stay a plain text file, not an HTML page.

Previous production work was sensitive to static route behavior, so routing
changes should be treated as higher risk than ordinary copy changes.

## Google Play CTA

Required Google Play URL:
https://play.google.com/store/apps/details?id=com.maxkz.rigai

Current CTA locations:
- Homepage hero CTA in `src/components/home/index.js`
- Homepage final CTA in `src/components/home/index.js`
- Shared footer Google Play link in `scripts/page-template.js`
- Generated footer links across built pages

Current English CTA text:
- `Get it on Google Play`
- Footer link: `Google Play`

Current Russian legal pages mention the app and legal/privacy concepts, but the
primary public website CTA is English.

Current status:
- Google Play links point to the public production app listing.
- Links use `target="_blank"` and `rel="noopener noreferrer"`.
- No stale "coming soon", "beta", "closed testing", or "early access" language
  was found in the checked website source or live homepage.

Future edits must not accidentally reintroduce app-not-published language.

## app-ads.txt

Public URL:
https://rigai-offroad.com/app-ads.txt

Expected authorized seller line:

```text
google.com, pub-2472553113866612, DIRECT, f08c47fec0942fa0
```

This publisher ID is intentionally public.

Source file:
- `public/app-ads.txt`

Generated file:
- `dist/app-ads.txt`

Purpose:
- AdMob app verification / authorized seller declaration.

Rules:
- Must remain plain text at the root domain.
- Must not be wrapped in HTML.
- Must not be intercepted by SPA fallback routing.
- Must not redirect through a client-side app.

## Privacy / Legal

Current Privacy Policy source:
- `public/privacy.html`

Current generated route:
- `/privacy`
- `/privacy/` canonicalizes to `/privacy`

The current Privacy Policy includes English and Russian sections.

Verified coverage:
- Google AdMob
- Google consent/privacy messaging
- Device identifiers and advertising identifiers
- IP-derived approximate location
- App interactions
- Diagnostics and crash logs
- Personalized, non-personalized, and limited ads
- Third-party processing
- No sale of personal data
- Amazon affiliate disclosure
- Sentry where used
- Supabase/backend infrastructure where used
- AI provider/backend processing where used

Related legal pages:
- `/terms`
- `/affiliate-disclosure`
- `/contact`
- `/support`
- `/about`

## Analytics

Production GA4 is installed on the live site.

Production measurement ID currently observed in live HTML:
- `G-QKL2Y9Q1YK`

This ID is not a private credential, but do not add private analytics account
credentials or API secrets to the repository.

Implementation files:
- `config/analytics.js`
- `scripts/page-template.js`
- `src/analytics.js`
- `src/main.js`
- `scripts/test-analytics.js`
- `scripts/validate-build.js`

Build behavior:
- `GA4_MEASUREMENT_ID` enables analytics during build.
- Without `GA4_MEASUREMENT_ID`, local `npm run build` reports analytics disabled.
- Production appears to have the environment variable configured.

Page view behavior:
- Analytics storage is denied by default.
- The consent banner allows users to accept or reject analytics.
- `send_page_view: false` is used in the GA4 config.
- `src/analytics.js` sends a manual `page_view` only after analytics consent is
  granted.

Outbound and CTA tracking:
- Delegated click tracking exists in `src/analytics.js`.
- Current Google Play CTA event name is `google_play_click`.
- Current event properties include `placement` and `language`.
- Current Google Play CTA locations include `hero`, `final_cta`, and
  `footer_product`.

Google Play CTA properties:
- `placement = hero / final_cta / footer_product`
- `language = en / ru` from existing `lang` state, not IP or browser geography

UTM support:
- GA4 can attribute inbound traffic using standard UTM parameters.
- Avoid adding UTM parameters to internal links.
- Recommended external campaign examples:
  - TikTok: `utm_source=tiktok&utm_medium=social&utm_campaign=organic_launch`
  - Instagram: `utm_source=instagram&utm_medium=social&utm_campaign=organic_launch`
  - YouTube: `utm_source=youtube&utm_medium=social&utm_campaign=organic_launch`

## SEO

Current SEO implementation includes:
- Per-page `<title>`
- Per-page meta description
- Self-referencing canonical URLs
- `robots.txt`
- `sitemap.xml`
- Open Graph metadata
- Twitter/social metadata
- Favicon
- One H1 per generated page
- JSON-LD structured data

Structured data:
- Homepage includes `Organization`, `WebSite`, and `SoftwareApplication`.
- Vehicle pages include structured data generated from page/content config.
- Do not add fake ratings, fake review counts, fake pricing, or fake download
  counts.

Search Console / verification:
- Homepage includes an `impact-site-verification` meta tag.
- Docs include Search Console setup notes in `docs/google-search-console-setup.md`.

Target search themes, not guaranteed rankings:
- 4Runner suspension
- Toyota 4Runner suspension setup
- SUV suspension setup
- off-road setup
- overlanding
- lift/suspension recommendations
- vehicle-specific first upgrades

Production SEO verifier:
- `npm run verify:production-seo` exists.
- Recent run with network access showed the production site passing all checked
  critical SEO/routes, with a known warning that `https://www.rigai-offroad.com/`
  returns 404 instead of redirecting to the apex domain.

## Current Content / Brand

Brand spelling:
- Use `RigAI`.
- Do not use `RigAi`, `Rigai`, or `RIGAI` unless intentionally part of a visual
  style or acronym treatment.

Current positioning:
- RigAI is an AI off-road setup assistant and SUV/off-road build planner.
- Main value proposition: RigAI creates personalized off-road upgrade plans for
  SUVs based on vehicle, terrain, goals, and budget.
- Supporting messages include prioritized upgrade order, beginner-friendly
  explanations, compatibility/fitment reminders, and budget-aware guidance.

Important launch truth:
- RigAI is live on Google Play.
- Future edits must not accidentally reintroduce:
  - `coming soon`
  - `beta`
  - `closed testing`
  - `early access`
  - `not available`
  unless intentionally referring to something else.

## Responsive / Design Status

Recent verified responsive status:
- Mobile: PASS at common widths including 360, 390, and 412 px.
- Tablet: PASS at 768 px.
- Desktop: PASS at 1440 px.

Current design direction:
- Static marketing/product website with SEO guide content.
- Homepage emphasizes product explanation, example build plan, trust/value
  points, vehicle guide content, and Google Play conversion.
- Vehicle pages are content/SEO guides with local WebP vehicle images.

CTA visibility:
- Hero Google Play CTA is visible in the first viewport on tested mobile,
  tablet, and desktop sizes.

Known verified responsive issues:
- None currently verified as blockers.

## Analytics / Conversion Status

Current measurement capability:
- Site visitors: AVAILABLE after analytics consent; consent-gated.
- Source/medium: AVAILABLE through GA4 for consented traffic and standard UTMs.
- Page views: AVAILABLE after analytics consent.
- Google Play clicks: AVAILABLE as `google_play_click` after analytics consent.
- CTA placement: AVAILABLE through current `data-analytics-location` values.
- Conversion to Play Store: PARTIAL; outbound click can be measured, install
  conversion requires Google Play / app analytics correlation outside this site.

Marketing channels:
- TikTok: PARTIAL via UTMs and consented GA4 sessions.
- Instagram: PARTIAL via UTMs and consented GA4 sessions.
- YouTube: PARTIAL via UTMs and consented GA4 sessions.
- Google Search: AVAILABLE/PARTIAL via organic source data and Search Console,
  depending on indexing and GA4/Search Console access.

## Deployment Workflow

Safe process:

1. Edit source files only.
2. Run `npm run build`.
3. Run `npm run validate`.
4. Verify expected `dist/` outputs.
5. Run `git diff --check`.
6. Review `git diff`.
7. Commit.
8. Push.
9. Cloudflare Pages deploys from the pushed repository state.
10. Verify live URLs after deployment.

Additional optional checks:
- `npm run test:analytics`
- `npm run verify:production-seo` when live network access is available

Do not deploy manually from Codex unless explicitly asked.

## Important Validation Routes

Smoke-test these after deployment:

- https://rigai-offroad.com/
- https://rigai-offroad.com/privacy
- https://rigai-offroad.com/privacy/
- https://rigai-offroad.com/app-ads.txt
- https://rigai-offroad.com/terms
- https://rigai-offroad.com/about
- https://rigai-offroad.com/support
- https://rigai-offroad.com/contact
- https://rigai-offroad.com/affiliate-disclosure
- https://rigai-offroad.com/robots.txt
- https://rigai-offroad.com/sitemap.xml

Also smoke-test one or two vehicle routes when SEO/content changes are made,
for example:
- https://rigai-offroad.com/vehicles/toyota-4runner
- https://rigai-offroad.com/vehicles/toyota-4runner/suspension

## Git State

Inspected on 2026-08-20 before this document was created:

Branch: `main`

HEAD before this handoff commit:
`77d41c2 fix: add AdMob app-ads.txt verification`

Origin:
`HEAD...origin/main` ahead/behind count was `0 0`

Working tree before this document:
clean

Important recent website commits:
- `77d41c2 fix: add AdMob app-ads.txt verification`
- `468a951 feat: add Google Play download link`
- `c57657e docs: update website privacy policy for AdMob`
- `6bb5de3 chore: final production verification and Search Console launch preparation`
- `6fd7f9b chore: complete RigAI production readiness audit`
- `4e4e883 refactor: refine vehicle directory card design`
- `2cac63e fix: improve vehicle card text readability; fix: correct vehicle image sizing and cropping`
- `7a0b6b0 feat: add stock vehicle images to cards and hubs`
- `1836a00 feat: add Nissan Frontier SEO cluster`
- `88e4a40 feat: add Toyota Tundra SEO cluster`

## Known Issues / Next Tasks

P0:
- None currently verified.

P1:
- Local builds disable GA4 unless `GA4_MEASUREMENT_ID` is present; this is
  intentional but important to remember during verification.

P2:
- `https://www.rigai-offroad.com/` returns 404 instead of redirecting to the
  apex production URL. Fixing this likely belongs in Cloudflare/DNS, not this
  repository.
- Consider adding richer product walkthrough/app screenshot content for
  conversion and search intent.
- Consider adding stable visible FAQ content and `FAQPage` structured data only
  if the FAQ is actually present on the page.
- Continue monitoring Search Console indexing and app-ads.txt AdMob crawler
  verification.

P3:
- Consider Content Security Policy hardening later.
- Consider font optimization or self-hosting if performance work becomes a
  priority.

## Starting a new Codex session

Use:

> Read `PROJECT_STATUS.md` and inspect the current repository state before
> making any changes. Continue from the current project status.

Before implementation:
1. read this file
2. inspect `git status`
3. inspect relevant source files
4. verify live site when relevant
5. then proceed

Repository/live production state wins if this document is stale.

## Maintenance Rule

Update `PROJECT_STATUS.md` after meaningful changes to:

- deployment architecture
- routes
- Google Play destination
- analytics
- SEO infrastructure
- Privacy Policy
- AdMob/app-ads.txt
- major conversion flow
- major production issues

Do not update for trivial text/style changes.

## Validation Notes

This handoff intentionally includes no secrets.

The production app is public on Google Play. Do not assume the app is still in
closed testing or unavailable.

Commands confirmed in `package.json`:
- `npm run build`
- `npm run validate`
- `npm run test:analytics`
- `npm run verify:production-seo`

The `app-ads.txt` entry in this file exactly matches `public/app-ads.txt` and
the verified production response.

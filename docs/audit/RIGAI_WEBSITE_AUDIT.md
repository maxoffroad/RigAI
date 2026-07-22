# RigAI Website Audit

## 1. Executive Summary

RigAI website is a plain static multi-page website for `rigai-offroad.com`, built with vanilla HTML, CSS, and a small JavaScript header scroll helper. It is separate from the RigAI mobile app and does not contain backend API or mobile app code.

The site currently works as a compact product landing page with public legal/support pages. Local production build succeeds, all known public routes resolve locally, and the main content is present directly in HTML, so search engines can read it without JavaScript execution.

The main launch blockers are SEO infrastructure and future content architecture, not basic build stability. The current site lacks `robots.txt`, `sitemap.xml`, Twitter Card metadata, schema.org structured data, Open Graph images, analytics/conversion tracking, and a scalable content system for the planned SEO acquisition channel.

Critical findings:

- No `robots.txt` or `sitemap.xml`; `/robots.txt` and `/sitemap.xml` return 404 locally.
- No schema.org JSON-LD for Organization, WebSite, or SoftwareApplication/MobileApplication.
- No Twitter Card metadata and no Open Graph image.
- Legal pages combine English and Russian content in the same document while the page language is `en`, which is not ideal for SEO or accessibility.
- The current architecture can support a small static site, but manual HTML duplication will become a maintenance risk once Toyota 4Runner SEO clusters and vehicle hubs are added.

Recommended first implementation phase:

1. Add `robots.txt`, `sitemap.xml`, `_headers`, and basic JSON-LD schema.
2. Normalize metadata, Twitter Cards, OG image, and language strategy.
3. Create a simple reusable page template or generation step before adding SEO pages.
4. Add Google Search Console verification and minimal privacy-conscious analytics.
5. Build the Toyota 4Runner cluster gradually, starting with a vehicle hub and 4-6 high-intent guides.

## 2. Current Architecture

### Project Type

- Framework: none.
- Language: HTML, CSS, JavaScript.
- Rendering: static HTML.
- SSR/SSG/CSR: no SSR, no framework SSG, no client-side routing.
- JavaScript dependency: only `src/main.js`, used for header scroll styling.

### Build System

Source files:

- `index.html`
- `public/*.html`
- `public/favicon.svg`
- `public/_redirects`
- `src/styles.css`
- `src/main.js`
- `src/assets/rigai-garage-bg.jpg`

Build script:

- `scripts/build.js`

Build behavior:

- Deletes and recreates `dist`.
- Copies `public` contents into `dist`.
- Copies `index.html` and `src` into `dist`.
- Creates route folders for clean URLs:
  - `dist/privacy/index.html`
  - `dist/terms/index.html`
  - `dist/affiliate-disclosure/index.html`
  - `dist/contact/index.html`
  - `dist/support/index.html`
  - `dist/about/index.html`

Package scripts:

- `npm run dev`
- `npm run build`
- `npm run preview`

Cloudflare Pages expected setup:

- Build command: `npm run build`
- Output folder: `dist`

Cloudflare project settings, environment variables, custom domain, SSL/TLS, and cache rules are not stored in this repository. Unable to verify locally.

### Routing

Routing is file-based static routing, not React Router, Next.js, or Expo Router. Clean routes work because the build generates real folders with `index.html`.

`public/_redirects` is empty. This is appropriate for the current static multi-page setup and avoids SPA fallback conflicts.

### Static Assets

- `src/assets/rigai-garage-bg.jpg`: 235,504 bytes in `dist`.
- `src/styles.css`: 12,647 bytes in `dist`.
- `src/main.js`: 270 bytes in `dist`.
- `favicon.svg`: 295 bytes.

No `<img>` tags are used. The main visual asset is a CSS background image.

### Dependencies

`package.json` has no runtime dependencies. `npm audit --audit-level=moderate` found 0 vulnerabilities.

## 3. Build and Code Quality

Commands run:

```text
npm.cmd run build
npm.cmd audit --audit-level=moderate
```

Results:

- Production build completed successfully.
- `dist` generated successfully.
- `npm audit` reported 0 vulnerabilities.

No lint, type-check, or test scripts are defined in `package.json`; therefore those checks could not be run.

Code quality observations:

- The site is small and understandable.
- The build script is simple and deterministic.
- Repeated header/footer HTML exists across pages. This is acceptable for 6-7 pages but will become error-prone for SEO scaling.
- There is no shared metadata/template layer, so future pages may drift in title, canonical, footer links, language, and legal disclaimers.

## 4. Cloudflare Pages and Routing

Current routing model is safe for static Cloudflare Pages:

- Clean routes are real folders in `dist`.
- `_redirects` is empty.
- No SPA fallback exists.
- No rewrite from `/privacy` to `/privacy.html`.
- No rewrite from `/*` to `/index.html`.

Local route verification:

```text
/                              200  RigAI - AI Offroad Upgrade Planner
/privacy                       200  Privacy Policy - RigAI
/privacy/                      200  Privacy Policy - RigAI
/terms                         200  Terms of Service - RigAI
/terms/                        200  Terms of Service - RigAI
/affiliate-disclosure          200  Affiliate Disclosure - RigAI
/affiliate-disclosure/         200  Affiliate Disclosure - RigAI
/contact                       200  Contact - RigAI
/contact/                      200  Contact - RigAI
/support                       200  Support - RigAI
/support/                      200  Support - RigAI
/about                         200  About - RigAI
/about/                        200  About - RigAI
/robots.txt                    404
/sitemap.xml                   404
/missing-page                  404
```

Why pages can exist in GitHub and build successfully but fail on Cloudflare Pages:

- Cloudflare serves only the configured build output directory, not necessarily the repository root.
- If output directory is misconfigured, pages may exist in GitHub but not in the deployed artifact.
- A `_redirects` file can rewrite valid static routes to another file and mask route problems.
- SPA fallback rules like `/* /index.html 200` can conflict with static pages.
- Case-sensitive URLs matter on Cloudflare even if local Windows paths are forgiving.
- Relative asset paths can break on nested clean URLs.

Current project avoids the previous redirect-loop risk by using real route folders and an empty `_redirects`.

## 5. Technical SEO

### Strengths

- Static HTML content is visible without JavaScript.
- Each public page has a `<title>`.
- Each public page has a meta description.
- Each public page has a canonical URL.
- Each public page has basic Open Graph title/description/type/url.
- Clean URLs are available.
- Favicon exists.

### Gaps

- `robots.txt` missing.
- `sitemap.xml` missing.
- `_headers` missing.
- Twitter Card metadata missing.
- Open Graph image missing.
- Schema.org JSON-LD missing.
- No `hreflang` strategy.
- No robots meta tags; default indexability is likely fine, but it is not explicit.
- No 404 page.
- No article/content templates for SEO guide pages.
- No breadcrumbs.
- No internal linking system beyond global nav/footer.
- No vehicle hub pages.

### Page-Level SEO Notes

Home page:

- Title: `RigAI - AI Offroad Upgrade Planner`
- H1: `AI offroad upgrade planner for your SUV`
- Strong product fit, but it does not yet capture broader search demand such as Toyota 4Runner, lift kits, suspension, tire size, KDSS, first upgrades, or overland equipment.

Legal/support/about pages:

- They are indexable by default and have canonical URLs.
- They are thin but acceptable for trust/compliance pages.
- Privacy, Terms, and Affiliate Disclosure include both English and Russian sections in the same document.

## 6. Homepage UX Audit

### What Works

- The hero explains who the app is for: SUV owners starting offroad upgrades.
- The CTA is clear: `Coming soon on Google Play`.
- App concepts are present:
  - Get my recommendation
  - Buy first
  - Why this helps
  - Do not buy yet
  - Search for parts
  - Save vehicle plan
  - Check trip readiness
  - Compare saved vehicle plans
- The copy is beginner-friendly and avoids unsupported stores.
- The Amazon affiliate explanation is present but not visually over-dominant.

### Issues

- There is no real Google Play link yet, so the main conversion action is not measurable or actionable.
- There are no actual mobile app screenshots; the app-style preview is manually built HTML.
- The page does not yet answer enough search-intent questions for SEO visitors looking for specific vehicle upgrades.
- There is no supported vehicles section on the current homepage.
- There is no FAQ section.
- There is no direct path from homepage to future guide content because guide pages do not exist yet.

## 7. Visual Design Audit

The site matches the requested direction reasonably well:

- Dark clean UI.
- Orange primary CTA.
- Rounded dark cards.
- Compact typography.
- Offroad/SUV visual tone.

Areas to improve:

- The garage background is subtle, but the visual system still depends on one background image rather than real app screenshots.
- Legal/support pages use the same card style, but their content density and bilingual blocks can feel long on mobile.
- The current design has no visual examples of actual vehicle inputs, supported vehicles, or saved plans.
- There is no OG/social image asset that matches the visual identity.

## 8. Mobile Audit

Static CSS includes responsive breakpoints at `940px` and `620px`.

Likely mobile strengths:

- Header nav wraps on small screens.
- Buttons expand to full width.
- Cards collapse to single-column grids.
- Touch targets are generally reasonable due to padding and card spacing.

Potential mobile issues:

- The fixed header can take substantial vertical space when nav wraps.
- Long legal pages with two languages may feel heavy.
- No hamburger menu; wrapping nav is acceptable now but will not scale when more content sections are added.
- No real-device visual test was performed. Unable to verify locally.

## 9. Performance

Measured from local file inventory only:

- Largest static asset: `rigai-garage-bg.jpg`, 235,504 bytes.
- CSS: 12,647 bytes.
- JS: 270 bytes.
- No large JavaScript bundle.
- No app framework runtime.

Performance risks:

- Google Fonts are loaded from external domains and can add render latency.
- Background image is loaded via CSS; ensure it is compressed and cached well in production.
- No `_headers` file means cache-control policy is not defined in the repo.
- No preload strategy for the hero/background image.

Unable to verify Core Web Vitals, Lighthouse scores, CDN cache headers, or production image compression locally.

## 10. Accessibility

Strengths:

- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` are used.
- Nav has `aria-label`.
- Keyboard focus styles exist in CSS via `a:focus-visible`.
- Text is mostly real HTML, not canvas or image text.
- No images are missing alt text because there are no `<img>` elements.

Issues:

- Pages with English and Russian content still use `<html lang="en">`; mixed-language blocks have `lang="ru"` on many elements, but the page-level language remains English.
- Multiple H1 elements exist on bilingual legal pages: English H1 and Russian H1.
- No skip link to main content.
- No `prefers-reduced-motion` rule for smooth scrolling or hover transitions.
- Mobile nav wrapping may be usable but is not an ideal accessible menu pattern for larger navs.

## 11. Analytics and Conversion

Current status:

- No Google Analytics found.
- No Cloudflare Web Analytics script found.
- No Google Search Console verification found, except a Meta/Impact verification tag in `index.html`.
- No CTA click tracking.
- No Google Play click tracking.
- No article CTA tracking.
- No UTM strategy.

Minimal future event set:

- `hero_download_click`
- `build_setup_click`
- `vehicle_guide_open`
- `article_cta_click`
- `google_play_click`
- `language_change`
- `supported_vehicle_click`

Do not implement analytics until privacy and consent approach is confirmed.

## 12. Recommended Information Architecture

Recommended top-level structure:

```text
/
/how-it-works
/vehicles
/guides
/build-examples
/about
/download
/privacy
/terms
/support
/affiliate-disclosure
```

Recommended first vehicle cluster:

```text
/vehicles/toyota-4runner
/vehicles/toyota-4runner/suspension
/vehicles/toyota-4runner/lift-kit
/vehicles/toyota-4runner/tire-size
/vehicles/toyota-4runner/kdss
/vehicles/toyota-4runner/first-upgrades
/vehicles/toyota-4runner/overland-build
```

Recommended language strategy:

```text
/...
/ru/...
```

Reason:

- English should remain at root because the main international market is English-speaking, especially the United States.
- Russian content can live under `/ru/` for Kazakhstan and Russian-speaking audiences.
- This avoids mixing English and Russian on the same SEO URL.
- It makes hreflang easier:
  - `en`: root URL
  - `ru`: `/ru/...`
  - `x-default`: root URL

## 13. Recommended Homepage Structure

Recommended hero heading:

```text
Your SUV.
Your terrain.
The right build.
```

Alternative:

```text
Plan your first offroad upgrades with AI.
```

Recommended homepage sections:

1. Header
   - Purpose: navigation and brand trust.
   - CTA: Download / Coming soon on Google Play.
   - Visual: compact dark sticky header.
   - Mobile: collapsible menu once nav grows.
   - SEO value: internal links to key sections and pages.

2. Hero
   - Purpose: immediate product clarity.
   - Example copy: "Tell RigAI your SUV, terrain, budget, and experience. Get a practical first upgrade plan."
   - CTA: Get my recommendation / Coming soon on Google Play.
   - Visual: real app screenshot or app result card.
   - Mobile: CTA visible above the fold.
   - SEO value: primary product keywords.

3. User Problem
   - Purpose: validate beginner confusion.
   - Example copy: "Most upgrade advice starts with parts. RigAI starts with your vehicle and use case."
   - CTA: See how it works.
   - Visual: before/after decision cards.
   - SEO value: captures beginner intent.

4. How RigAI Works
   - Purpose: explain flow.
   - Blocks: Choose vehicle, describe driving, get recommendation, save plan.
   - CTA: Build my plan.
   - Visual: step cards.
   - SEO value: product understanding.

5. Upgrade Categories
   - Purpose: show scope.
   - Categories: suspension, tires, skid plates, recovery gear, lighting, cargo, roof racks.
   - CTA: Explore categories.
   - Visual: icon grid.
   - SEO value: category keywords.

6. Example Build Plan
   - Purpose: demonstrate output.
   - Blocks: Buy first, why this helps, do not buy yet, search for parts.
   - CTA: Get my recommendation.
   - Visual: app-style result card.
   - SEO value: long-tail terms.

7. App Screenshots
   - Purpose: app trust.
   - Visual: real screenshots.
   - Mobile: carousel or stacked screenshots.
   - SEO value: conversion support.

8. Supported Vehicles
   - Purpose: connect to vehicle hubs.
   - CTA: View Toyota 4Runner guide.
   - Visual: vehicle list cards.
   - SEO value: vehicle keywords.

9. Vehicle Guides
   - Purpose: bridge to SEO content.
   - CTA: Read guides.
   - Visual: article cards.
   - SEO value: internal linking.

10. Trust and Safety
    - Purpose: set expectations.
    - Copy: informational recommendations, verify fitment, qualified installer review.
    - SEO value: trust.

11. Final CTA
    - Purpose: conversion.
    - CTA: Download / Coming soon on Google Play.

12. FAQ
    - Purpose: answer objections.
    - Questions: fitment, Amazon links, beginners, supported vehicles, saved plans.
    - SEO value: FAQ snippets where appropriate.

13. Footer
    - Purpose: legal and support.
    - Links: Privacy, Terms, Affiliate Disclosure, Contact, Support, About.

## 14. SEO Content Strategy

Create pages gradually. Do not publish hundreds of AI-generated pages.

Recommended first 18 pages:

1. `/vehicles/toyota-4runner`
   - Intent: vehicle hub.
   - Main query: Toyota 4Runner offroad upgrades.
   - Audience: 4Runner owners starting upgrades.
   - CTA: Get a personalized 4Runner plan.
   - Priority: P0.

2. `/vehicles/toyota-4runner/first-upgrades`
   - Intent: beginner commercial investigation.
   - Main query: best first upgrades for Toyota 4Runner.
   - Priority: P0.

3. `/vehicles/toyota-4runner/suspension`
   - Intent: suspension research.
   - Main query: suspension for Toyota 4Runner.
   - Priority: P0.

4. `/vehicles/toyota-4runner/lift-kit`
   - Intent: lift-kit comparison.
   - Main query: best lift kit for 4Runner.
   - Priority: P0.

5. `/vehicles/toyota-4runner/tire-size`
   - Intent: sizing education.
   - Main query: Toyota 4Runner tire size offroad.
   - Priority: P1.

6. `/vehicles/toyota-4runner/kdss`
   - Intent: technical fitment education.
   - Main query: 4Runner KDSS suspension.
   - Priority: P1.

7. `/vehicles/toyota-4runner/overland-build`
   - Intent: build example.
   - Main query: Toyota 4Runner overland build.
   - Priority: P1.

8. `/guides/offroad-upgrades-for-beginners`
   - Intent: education.
   - Main query: offroad upgrades for beginners.
   - Priority: P1.

9. `/guides/what-to-upgrade-first`
   - Intent: decision support.
   - Main query: what offroad upgrade should I do first.
   - Priority: P1.

10. `/guides/all-terrain-tires-vs-mud-terrain`
    - Intent: comparison.
    - Main query: all terrain vs mud terrain tires.
    - Priority: P1.

11. `/guides/lift-kit-vs-leveling-kit`
    - Intent: comparison.
    - Main query: lift kit vs leveling kit.
    - Priority: P1.

12. `/guides/recovery-gear-for-beginners`
    - Intent: education/commercial.
    - Main query: recovery gear for beginners.
    - Priority: P1.

13. `/guides/skid-plates-explained`
    - Intent: education.
    - Main query: do I need skid plates.
    - Priority: P2.

14. `/guides/rock-sliders-vs-side-steps`
    - Intent: comparison.
    - Main query: rock sliders vs side steps.
    - Priority: P2.

15. `/build-examples/beginner-weekend-trail-suv`
    - Intent: example plan.
    - Main query: beginner weekend trail SUV build.
    - Priority: P2.

16. `/build-examples/daily-driver-overland-suv`
    - Intent: example plan.
    - Main query: daily driver overland SUV build.
    - Priority: P2.

17. `/vehicles/lexus-gx460`
    - Intent: vehicle hub.
    - Main query: Lexus GX460 offroad upgrades.
    - Priority: P2.

18. `/vehicles/jeep-wrangler`
    - Intent: vehicle hub.
    - Main query: Jeep Wrangler first offroad upgrades.
    - Priority: P2.

## 15. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---:|---:|---|
| Wrong part compatibility expectations | Medium | High | Add fitment disclaimer near every recommendation and require verification before purchase. |
| AI recommendations affect vehicle safety | Medium | High | Avoid safety guarantees; recommend qualified installer review. |
| Affiliate trust issues | Medium | Medium | Keep Amazon disclosure clear and close to search links. |
| Thin SEO pages | High | High | Publish fewer, higher-quality pages with clear sources and scenario-based guidance. |
| Duplicate bilingual content | Medium | Medium | Move Russian content to `/ru/` with hreflang. |
| Manual HTML duplication | High | Medium | Add templates or a static generator before scaling content. |
| Cloudflare route regression | Medium | High | Keep real route folders; avoid SPA fallback rewrites. |
| Missing robots/sitemap delays indexing | High | Medium | Add `robots.txt` and `sitemap.xml`. |
| No conversion measurement | High | Medium | Add minimal analytics only after privacy review. |

## 16. Final Recommendations

Keep the current static stack for now. It is fast, simple, and SEO-readable. Do not migrate to Next.js or Astro until content volume or template maintenance becomes painful.

Immediate priorities:

1. Add SEO foundation files and schema.
2. Establish `/ru/` language strategy.
3. Add a lightweight HTML generation/template step.
4. Add real app screenshots.
5. Create Toyota 4Runner hub and first-upgrades pages as the first SEO cluster.

Unable to verify locally:

- Cloudflare Pages dashboard settings.
- Production cache headers.
- Google Search Console status.
- Real indexing status.
- Lighthouse/Core Web Vitals.
- Actual Google Play listing URL.

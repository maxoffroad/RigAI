# RigAI Phase 4A Report

## Summary

Phase 4A adds the first vehicle-specific SEO cluster for Toyota 4Runner. It includes a model hub, a 5th Gen suspension guide, a 5th Gen first-upgrades guide, research notes, reusable build-time article components, structured data, internal linking, homepage published states, and extended validation.

## Initial Repository State

- Working tree: clean.
- Latest commit: `fff893a style: align RigAI homepage with final Figma design`.
- Existing architecture: static multi-page build with page configuration, shared template, shared CSS, generated clean-route directories, sitemap generation, and no SPA fallback.
- Initial `npm run build`: PASS.
- Initial `npm run validate`: PASS.
- Initial `npm audit --audit-level=moderate`: PASS, zero vulnerabilities.

## Research Process

Research used seven official Toyota sources and two supporting component-manufacturer technical resources. Each important technical claim is mapped to a source in `docs/research/toyota-4runner-phase-4a-research.md`.

No forum, marketplace, affiliate page, random search image, or single owner comment was used as the basis for a technical claim.

## Search Intent Map

| URL | Intent | Page role |
| --- | --- | --- |
| `/vehicles/toyota-4runner` | General 4Runner upgrade planning | Broad hub and decision map |
| `/vehicles/toyota-4runner/suspension` | How to choose 4Runner suspension | Detailed suspension framework |
| `/vehicles/toyota-4runner/first-upgrades` | What to upgrade first | Scenario-based early priorities |

The pages avoid cannibalization by keeping the hub broad, the suspension page system-specific, and the first-upgrades page focused on early sequence decisions.

## Vehicle Scope

Toyota identifies the 5th Gen as model years 2010-2024 and the 2025 model as the start of the 6th Gen. All three pages show a scope callout. The technical guides primarily cover 5th Gen and do not transfer guidance to the 6th Gen, Prado, or Lexus GX.

## Pages Created

- `/vehicles/toyota-4runner`
- `/vehicles/toyota-4runner/suspension`
- `/vehicles/toyota-4runner/first-upgrades`

All are English, static, indexable, canonical, and present in `dist` at nested clean-route paths.

## 4Runner Hub

The hub provides:

- Direct planning answer.
- Four use-case scenarios.
- Connected upgrade-system map.
- A cautious mixed-use planning sequence.
- 4Runner-specific generation, trim, drivetrain, KDSS, load, alignment, tire-clearance, and use inputs.
- Published and planned guide states.
- Visible FAQ without FAQ schema.
- Safety, fitment, editorial, and source notes.

## Suspension Guide

The suspension guide covers:

- When stock suspension may be sufficient.
- When condition, load, control, or terrain can justify an upgrade.
- Ride height vs suspension performance.
- High-level damper and spring types.
- Added-weight dependency chain.
- KDSS as a separate fitment input.
- Geometry and supporting-system checks.
- Accessible use-case decision table.
- Verification checklist and common mistakes.

No universal lift number, tire size, component mandate, brand ranking, or kit fitment is published.

## First Upgrades Guide

The guide provides:

- A direct non-universal answer.
- Baseline-condition checklist.
- Six-category priority framework.
- Scenario comparison table.
- Items that often should not be purchased first.
- Non-price budget/readiness levels.
- Clearly labeled example-only order.

## Internal Linking

- Hub links to both guides.
- Suspension links to the hub and first-upgrades guide.
- First upgrades links to the hub and suspension guide.
- Contextual links and related-guide cards are both present.
- Homepage links to the hub and both published guides.
- No future route receives an `href`.

## Homepage Updates

The existing composition and design were preserved. Only content states changed:

- Toyota 4Runner card is a real link and retains `Initial coverage`.
- Suspension and first-upgrades cards are published links with `Read guide`.
- Reading time is calculated from actual article content at 225 words per minute.
- Remaining guide and vehicle cards remain non-interactive planned states.

## Structured Data

- Hub: `WebPage`, `BreadcrumbList`, `Organization`, `WebSite`.
- Guides: `Article`, `BreadcrumbList`, `Organization`, `WebSite`.
- Visible and structured breadcrumbs match.
- Production URLs, real content dates, RigAI editorial responsibility, and the existing production-safe OG image are used.
- No Product, Offer, Review, AggregateRating, HowTo, or FAQPage data is present.

## Metadata

Each page has a unique title, description, Open Graph title/description/URL/image, Twitter metadata, self-referencing canonical, English language, and clean URL without `.html`.

## Sitemap

The sitemap generator includes all three routes exactly once. It excludes the four future topics and trailing-slash duplicates.

## Accessibility

- One H1 per page.
- Skip link and `main#main-content`.
- Visible breadcrumb navigation.
- Crawlable TOC anchors with `scroll-margin-top`.
- Logical H2/H3 hierarchy.
- Captions and row/column headers on comparison tables.
- Keyboard-focusable horizontally scrollable table regions.
- Visible focus states.
- Non-table summaries and prose preserve important information.
- Reduced-motion behavior is inherited from the design system.

## Performance

- No framework or runtime library was added.
- Articles render to static HTML at build time.
- Shared CSS and the existing font setup are reused.
- No new image download or vehicle logo was added.
- The article visual is CSS-only and does not create CLS.
- No client-side article rendering is required.

## Validation

`scripts/validate-build.js` now checks:

- Nested output routes.
- One H1, metadata, canonical, English language, indexability, skip link, and main target.
- Breadcrumbs, TOC, scope, safety disclaimer, app CTA, editorial notes, and dates.
- Expected JSON-LD types, valid JSON, centralized dates, and prohibited schema.
- Sitemap inclusion/exclusion and duplicate URLs.
- Required cross-links and absence of future links.
- Internal route and fragment targets.
- Prohibited absolute claims and local asset existence.
- Homepage published-content links.

## Sources and Claim Review

- Official/primary sources: 7.
- Supporting technical sources: 2.
- Excluded claim categories: 10.
- Unverified fitment claims published: no.

## Files Changed

Source and build configuration:

- `src/content/toyota-4runner.js`
- `src/components/articles/index.js`
- `src/content/home.js`
- `src/components/home/index.js`
- `src/styles.css`
- `scripts/build.js`
- `scripts/site-config.js`
- `scripts/page-template.js`
- `scripts/validate-build.js`
- `public/design-system.html`

Documentation:

- `docs/research/toyota-4runner-phase-4a-research.md`
- `docs/page-authoring.md`
- `docs/phase-4a-report.md`

Generated `dist` files are updated only by `npm run build`; they were not edited manually.

## Commands Run

```text
git status --short
git diff --stat
git log -5 --oneline
npm run build
npm run validate
npm audit --audit-level=moderate
git diff --check
npm run preview
```

No `lint` or `test` script is defined in `package.json`.

## Verification Results

- Initial production build: PASS.
- Initial build validation: PASS.
- Initial npm audit: PASS.
- Post-implementation production build: PASS.
- Post-implementation build validation: PASS.
- Post-implementation npm audit: PASS, zero vulnerabilities.
- 4Runner hub: PASS, HTTP 200 and browser-rendered content verified.
- Suspension guide: PASS, HTTP 200 and browser-rendered content verified.
- First-upgrades guide: PASS, HTTP 200 and browser-rendered content verified.
- Internal links: PASS; homepage cards, contextual links, breadcrumbs, related links, and TOC clicks were exercised.
- Structured data: PASS through build validation.
- Sitemap and robots: PASS, HTTP 200.
- Mobile viewports: PASS at 320, 375, 390, 768, 1024, and 1440 CSS pixels with no document-level horizontal overflow.
- Mobile menu: PASS at 390 px; visible after interaction and `aria-expanded` changed to `true`.
- Browser console: PASS, no warnings or errors.
- Unknown route handling: PASS, HTTP 404.
- Visual review: PASS for the first viewport at 390 and 1440 px; no visible overlap was found.

## Known Limitations

- Phase 4A does not include part-specific fitment or product comparisons.
- The app CTA leads to the existing homepage availability block until a real store URL exists.
- No dedicated licensed 4Runner image was available, so the article hero uses a lightweight neutral CSS system visual.
- Future lift-kit, tire-size, KDSS, and overland-build pages remain planned and unlinked.

## Excluded Claims

The phase excludes universal lift limits, universal tire sizes, exact component mandates by lift height, exact load thresholds, universally best damper types, universal KDSS availability, guaranteed clearance/capability, fixed modification order, product rankings, and undated budget amounts.

## Phase 4B Readiness

The reusable article renderer, content model, metadata/schema generation, homepage published states, sitemap integration, research workflow, and validation guards can support future 4Runner pages. Each future page still requires its own intent research, evidence review, unique content, and real route before publication.

## Recommended Commit Message

`feat: add Toyota 4Runner SEO foundation`

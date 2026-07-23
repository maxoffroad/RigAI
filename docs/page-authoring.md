# RigAI Page Authoring

## How to Add a New Page

RigAI pages are generated at build time from two parts:

- Page metadata in `scripts/site-config.js`
- Static HTML content in `index.html` or `public/*.html`

The build script reads the source page, extracts its `<main>...</main>` content, and wraps it with the shared head, header, footer, social metadata, and accessibility markup from `scripts/page-template.js`.

## Required Page Fields

Add a page definition to `pages` in `scripts/site-config.js` with:

- `key`: stable internal page id
- `route`: clean public route, such as `/support`
- `source`: source HTML file
- `output`: root HTML output file
- `title`: unique browser title
- `description`: unique meta description
- `socialTitle`: Open Graph and Twitter title
- `socialDescription`: Open Graph and Twitter description
- `nav`: navigation link set
- `footerLinks`: footer link set
- `includeInSitemap`: `true` for indexable public pages

Use `robots: "noindex, follow"` for utility pages that should not be indexed, such as `404.html`.

## Route and Canonical Rules

- Use clean routes without `.html`.
- Use no trailing slash except for `/`.
- The canonical URL is generated from `site.domain` and the page route.
- The `og:url` value must match the canonical URL.
- Do not point every page canonical to the homepage.

## Language Rules

The default site language is configured in `site.defaultLanguage`.

Do not add hreflang links until real alternate-language URLs exist. When a real alternate-language page is created, add it to the page definition and make sure the alternate page links back reciprocally.

Do not mix two full SEO targets on one new indexable page. Existing legal pages may contain translated legal text, but future SEO pages should use one primary language per URL.

## Sitemap Rules

For each new indexable page:

- Set `includeInSitemap: true`.
- Confirm the route is a real public page.
- Run `npm run build`.
- Run `npm run validate`.

Do not add:

- `.html` URLs
- `dist/` paths
- `/404`
- future pages that do not exist yet
- duplicate trailing-slash versions

## Navigation Rules

Add navigation links only when the target exists:

- Header section links must point to real IDs on the same page.
- Header page links must point to real routes.
- Footer links must point to real public pages.
- Do not use `href="#"`, disabled links, or placeholder buttons for navigation.

## Design System Components

Use shared layout classes from `src/styles.css`:

- `.container` for standard content width
- `.container.narrow` for legal, article, and support content
- `.ds-section` for reusable sections
- `.ds-grid` for responsive card grids
- `.ds-stack` for vertical rhythm
- `.ds-cluster` for wrapping inline groups

Use `.card` and `.card.compact` for new grouped content. Existing home page cards can stay on their current classes until Phase 3.

Use button variants intentionally:

- `.button.primary` for the main action
- `.button.secondary` for secondary actions
- `.button.ghost` for low-emphasis actions

Use `.breadcrumb` for future guide pages, vehicle pages, and internal reference pages. Use `.callout` for fitment, affiliate, informational recommendation, or safety disclaimers.

Use design tokens from `src/styles.css` for new CSS:

- `--color-*`
- `--font-*`
- `--space-*`
- `--radius-*`
- `--shadow-*`
- `--container-*`

Do not hard-code new colors or spacing values when an existing token fits.

## Mobile and Showcase Checks

Before deployment, check that the header menu opens and closes, Escape closes the mobile menu, `aria-expanded` changes, touch targets are comfortable, and no horizontal scroll appears.

Open `/design-system` after `npm run build` and `npm run preview` to inspect tokens and reusable components. This page is internal, noindex, and excluded from the sitemap.

## Homepage Sections

The production homepage is generated from `src/components/home/index.js` and content arrays in `src/content/home.js`.

Required homepage section anchors:

- `home-hero`
- `home-trust-strip`
- `home-problem`
- `home-how-it-works`
- `home-build-result`
- `home-categories`
- `home-recommendation`
- `home-app-preview`
- `home-vehicles`
- `home-guides`
- `home-trust-safety`
- `home-faq`
- `home-final-cta`

Each section should also keep its matching `data-figma-section` value for Figma handoff.

## Future States and CTAs

Do not link to unpublished `/vehicles/...` or `/guides/...` routes. Use a static label, a real existing route, or an anchor to an existing homepage section.

When Google Play or a web configurator URL is unavailable, use explanatory copy and point the primary CTA to `#home-final-cta`. Do not invent an external app store URL.

## App Preview and Result Examples

App preview cards should look intentional and product-like, but remain clearly maintainable placeholders until final screenshots arrive. Recommendation examples must include fitment verification language and must not claim guaranteed compatibility.

## Safety Claims

Vehicle upgrade guidance must stay informational. Include reminders to verify fitment before purchasing and avoid language that sounds like professional mechanic or engineering advice.

## SEO Page Rules

Each new indexable SEO page must have:

- One primary search intent
- One H1
- Unique title
- Unique description
- Self-referencing canonical
- Correct language
- Crawlable static HTML
- Internal links
- Open Graph metadata
- Twitter Card metadata
- Affiliate disclosure near affiliate links
- Recommendation disclaimer when vehicle recommendations are discussed

Do not include:

- Generic mass-produced AI pages
- Copied text reused across many vehicle pages
- Hidden SEO text
- Keyword stuffing
- Fake reviews
- Fake ratings
- Guaranteed fitment claims
- Unsupported stores
- Product schema without a real product
- FAQ schema without a visible FAQ
- `.html` in canonical URLs

## Build and Validation

Run:

```bash
npm run build
npm run validate
npm run preview
```

Before deployment, verify clean routes, metadata, JSON-LD, sitemap output, and unknown route handling.

## Vehicle Hub Rules

A vehicle hub should:

- Serve one real vehicle family and clearly separate generations.
- State the primary generation used by RigAI without claiming unsupported coverage.
- Answer the broad planning intent without duplicating detailed guide content.
- Link only to published guides.
- Show future topics as non-interactive planned states.
- Include a visible vehicle-scope callout, safety disclaimer, and editorial notes.
- Use `WebPage` and visible `BreadcrumbList` structured data only.

Do not treat related platforms, such as Prado or Lexus GX, as interchangeable with the vehicle in the page title.

## Vehicle Guide Rules

A vehicle guide should:

- Have one narrow search intent and a unique H1, title, and description.
- Define the generation and configuration boundary near the top.
- Give a direct answer before background detail.
- Explain decisions and tradeoffs rather than publish a universal shopping list.
- Include a crawlable table of contents for long content.
- Use accessible tables only when a comparison benefits from a table.
- Include contextual links to the parent hub and sibling guide.
- Use `Article` and visible `BreadcrumbList` structured data.

## Research and Claim Verification

Before drafting a vehicle page:

1. Create a research file under `docs/research/`.
2. Prefer official manufacturer manuals, product documents, technical-system pages, and primary component documentation.
3. Record each important claim with its source, source type, verification status, where it is used, and notes.
4. Use owner communities only as supporting context, never as the sole source for a safety or fitment claim.
5. Exclude a claim when it cannot be verified reliably.

Do not invent sources, specifications, compatibility, or historical dates.

## Generation and Fitment Scope

- Record the generation boundary from an official source.
- Do not mix generations as though suspension, drivetrain, safety systems, and fitment are identical.
- Treat model year, trim, drivetrain, factory systems, existing modifications, load, tires, and intended use as separate inputs.
- Distinguish planning guidance from part-specific manufacturer fitment confirmation.
- Never publish a universal lift limit or tire size without reliable, configuration-specific evidence.

## Article Dates and Editorial Responsibility

- Store `datePublished` and `dateModified` in centralized page content or configuration.
- Use the actual creation date; do not invent an older date.
- Change `dateModified` only for a substantive content update.
- Use `RigAI Editorial Team` only when RigAI accepts and documents editorial responsibility.
- Show a human-readable last-reviewed date on technical pages.

## Reading Time

Reading time is calculated from the article's actual content at 225 words per minute and rounded up to the next whole minute. Navigation, metadata, footer content, routes, IDs, and source URLs are excluded. Do not store an arbitrary reading-time label.

## Sources and Safety

Technical guides should include a compact visible `Editorial and fitment notes` section that states:

- Guidance is informational.
- Vehicle configurations vary.
- Manufacturer fitment data is final.
- The page was reviewed against available technical sources.
- The last-reviewed date.

Keep the complete source inventory in the research document. Do not place affiliate links in source lists.

## Published and Planned States

- Published vehicle and guide cards use a real clean-route `href` and a visible action label.
- Planned cards are non-interactive and have no `href`.
- Do not create empty future routes to satisfy navigation.
- Update both homepage state and internal related-guide blocks when a page is published.

## Vehicle Structured Data

- Vehicle hubs may use `WebPage` and `BreadcrumbList`.
- Technical guides may use `Article` and `BreadcrumbList`.
- Structured breadcrumbs must match visible breadcrumbs.
- Article dates must match centralized content dates.
- Use the production canonical URL for `mainEntityOfPage`.
- Do not add Product, Offer, Review, AggregateRating, HowTo, or FAQPage data without corresponding verified content and a separate schema review.

## Adding Vehicle URLs to the Sitemap

1. Add the real page to the build-time `pages` configuration.
2. Set `includeInSitemap: true`.
3. Use a clean route with no `.html` and no trailing slash.
4. Build the site so sitemap generation includes the route.
5. Confirm the route appears exactly once and the output file exists.
6. Confirm planned routes remain absent.
## Phase 4B cluster publishing rules

### Prevent keyword cannibalization

- Give each closely related guide one primary query family and one unique answer.
- Keep a page inside its declared intent boundary; link to the adjacent guide instead of restating it.
- Use unique titles, descriptions, H1s, direct answers, tables, and CTA context.

### Separate related intents

- Suspension covers springs, damping, condition, load, and system selection.
- Lift kit covers height objectives, geometry, leveling, and lift trade-offs.
- Tire size covers placard data, exact tire and wheel specifications, and dynamic clearance.
- KDSS covers system identification and KDSS-specific planning.
- Overland build covers trip profile, operating load, recovery, cargo, and comfort.

### Fitment tables

- A table may organize verification factors, but it must not promise a part, tire, or height combination.
- Do not publish “fits all,” clearance guarantees, or an inches-to-tire-size matrix.
- Identify the exact vehicle and manufacturer documentation required for each decision.

### Tire-size safety

- Start with the door placard and exact owner documentation.
- Distinguish nominal size from model-specific measured dimensions.
- Require wheel width, offset, load rating, tire load index, approved rim-width range, alignment, spare storage, and dynamic-clearance checks.

### Lift-height safety

- Treat advertised lift as product- and vehicle-specific.
- Do not assign one best height or imply that lift settles tire clearance.
- Include load, alignment, operating angles, travel, line routing, KDSS, access, and daily-use trade-offs.

### KDSS verification

- Verify KDSS from a build sheet, VIN-based specification, option list, owner documentation, or qualified physical inspection.
- Do not infer equipment solely from trim name.
- Require a current manufacturer statement for KDSS compatibility and procedure.

### Overland payload language

- Use “operating load” and direct readers to the exact vehicle label and official documentation.
- Do not publish one payload or roof-load number across years and configurations.
- Separate constant equipment, passengers, trip cargo, water, and roof load.

### Publishing workflow

- Update the vehicle hub from planned to published and add a real route.
- Update the homepage guide card with its route and calculated reading time.
- Add the new route to the sitemap and remove it from future-route validation.
- Every article must link to the hub, include 2-4 contextual cluster links, and show a related-guides block.
- Related cards must use the shared reading-time calculation for article destinations.

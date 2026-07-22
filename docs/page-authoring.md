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

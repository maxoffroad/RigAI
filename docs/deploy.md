# RigAI Cloudflare Pages Deployment

## Project Type

RigAI is a static multi-page website. It uses plain HTML, CSS, and JavaScript with no runtime framework.

## Required Cloudflare Pages Settings

- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

Cloudflare Pages must publish the generated `dist` folder.

## Routing Model

Clean routes are real static folders generated during the build:

- `/privacy` publishes as `dist/privacy/index.html`
- `/terms` publishes as `dist/terms/index.html`
- `/affiliate-disclosure` publishes as `dist/affiliate-disclosure/index.html`
- `/contact` publishes as `dist/contact/index.html`
- `/support` publishes as `dist/support/index.html`
- `/about` publishes as `dist/about/index.html`

The `public/_redirects` file is intentionally empty. This site does not use an SPA fallback.

Do not add:

```text
/* /index.html 200
```

That rewrite makes missing URLs look like the home page and can break the distinction between real pages and missing pages.

## Build-Time Templates

The site uses a small Node.js build-time template system:

- `scripts/site-config.js` stores routes, metadata, canonical URLs, navigation sets, footer links, and language preparation.
- `scripts/page-template.js` renders the shared head, header, footer, social metadata, skip link, and homepage JSON-LD.
- Existing HTML files provide the crawlable `<main>` content.

This keeps the website static while avoiding duplicated metadata and navigation.

## Cloudflare Pages Headers

Cloudflare Pages headers are defined in:

```text
public/_headers
```

The build copies this file to:

```text
dist/_headers
```

Current headers include basic security headers and conservative cache rules for unhashed assets. Assets under `/src/*`, `/assets/*`, and `/favicon.svg` use `Cache-Control: public, max-age=86400`. HTML routes use revalidation instead of long immutable cache.

Content Security Policy is not enforced in Phase 1 because the site uses external Google Fonts and may add analytics later. Add CSP in a separate task after external resources are finalized and tested.

To verify production headers after deployment, use browser DevTools or:

```bash
curl -I https://rigai-offroad.com/
curl -I https://rigai-offroad.com/assets/rigai-og-image.png
```

Do not mark production headers verified unless the live Cloudflare deployment was checked.

## Social Metadata

All generated public pages include:

- Open Graph title, description, URL, image, image size, and image alt text
- Twitter Card metadata using `summary_large_image`
- Canonical URL matching `og:url`

The social preview image is:

```text
https://rigai-offroad.com/assets/rigai-og-image.png
```

Expected size:

```text
1200x630
```

## Structured Data

The homepage includes JSON-LD with:

- `Organization`
- `WebSite`
- `SoftwareApplication`

The schema does not include fake ratings, reviews, or guaranteed fitment claims.

Verify locally after build by inspecting `dist/index.html` or by running:

```bash
npm run validate
```

## Language Architecture

The default language is configured as English in `scripts/site-config.js`.

No `/ru/...` routes are published in Phase 1. Do not add hreflang until real alternate-language pages exist and reciprocal links can be verified.

## Sitemap Update Process

The sitemap is generated from `scripts/site-config.js` during build. When adding a new indexable page:

- Add the page definition.
- Set `includeInSitemap: true`.
- Ensure the page has a real route folder after build.
- Run `npm run build`.
- Run `npm run validate`.

Do not add future or non-existent URLs to the sitemap.

## Required Production Checks

After each production deployment, verify:

- Custom domain `rigai-offroad.com` is active.
- HTTPS is active.
- Cloudflare Pages build command is `npm run build`.
- Cloudflare Pages output directory is `dist`.
- `/robots.txt` returns 200.
- `/sitemap.xml` returns 200.
- `/assets/rigai-og-image.png` returns 200.
- `/privacy`, `/terms`, `/affiliate-disclosure`, `/contact`, `/support`, and `/about` open directly.
- An unknown URL returns a 404 response.
- CSS and assets load correctly on nested URLs.
- Metadata title, description, canonical, Open Graph, and Twitter tags are present.
- Homepage JSON-LD parses as valid JSON.
- `dist/_headers` is present in the deployed build.

Useful commands:

```bash
npm run build
npm run validate
npm run preview
```

Production smoke-check URLs:

```text
/
/robots.txt
/sitemap.xml
/assets/rigai-og-image.png
/privacy
/this-page-does-not-exist
```

## Troubleshooting

Common causes of routing or SEO file issues:

- Cloudflare Pages is publishing the wrong output directory.
- A stale deployment is still active.
- A file exists in the repository but was not copied into `dist`.
- A path has the wrong letter case.
- `_redirects` contains a conflicting rewrite.
- An SPA fallback rewrites real or missing URLs to `/index.html`.
- Assets use relative paths that break on nested URLs.
- The wrong branch, domain, or Cloudflare Pages project is deployed.

## Adding New Public Pages

When adding a new public indexable page:

- Add the clean canonical URL to `public/sitemap.xml`.
- Ensure the build creates a real route folder in `dist`.
- Run `npm run build`.
- Run `npm run validate`.

A more complex sitemap generator is not needed yet.

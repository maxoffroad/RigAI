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

## Required Production Checks

After each production deployment, verify:

- Custom domain `rigai-offroad.com` is active.
- HTTPS is active.
- Cloudflare Pages build command is `npm run build`.
- Cloudflare Pages output directory is `dist`.
- `/robots.txt` returns 200.
- `/sitemap.xml` returns 200.
- `/privacy`, `/terms`, `/affiliate-disclosure`, `/contact`, `/support`, and `/about` open directly.
- An unknown URL returns a 404 response.
- CSS and assets load correctly on nested URLs.

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

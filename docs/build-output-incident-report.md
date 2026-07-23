# RigAI Build Output Incident Report

## Incident summary

The latest reported Cloudflare Pages deployment uploaded only 12 files. Those files match the static contents copied from `public`, while the generated homepage, shared `src` assets, clean-route directories, and Toyota 4Runner pages were absent.

The current repository build can generate the complete website, but before this repair it printed `Build complete: dist` without checking that mandatory outputs existed. `npm run build` did not invoke `npm run validate`, so Cloudflare could accept any zero-exit partial artifact.

## User-visible impact

- `/` returned the custom 404 page because `dist/index.html` was absent.
- The 404 page was unstyled because `/src/styles.css` and `/src/main.js` were absent.
- Clean legal, support, and company routes were absent.
- Toyota 4Runner hub and article routes were absent.
- Phase 3 and Phase 3.1 homepage work was not present in production.

## Root cause

The historical comparison identified an architectural transition:

- Commit `75cde6a` copied root `index.html` and `src` directly, then created clean-route copies for six flat pages.
- Commit `38dd65b` moved page output to a registry and shared template.
- Commits `c88c0e0` and `d1ee299` added the generated Phase 3 homepage and Phase 4A article renderer.
- In the modern pipeline, the homepage and clean routes depend on the `pages` registry and render loop. Only `public` and `src` are copied directly.

The current checkout does not reproduce the 12-file artifact: a fresh build generates 37 files. The reported 12-file list corresponds to the `public` payload without the later copy/render stages. The screenshots alone cannot distinguish whether the deployed build used mismatched source, a stale build context, or otherwise bypassed the later stages.

The confirmed repository defect was the missing output contract. The build logged success unconditionally and had no mandatory postconditions for `index.html`, assets, route output, or file count. That made an incomplete artifact deployable whenever the expected generation path was bypassed.

## Why Cloudflare showed deployment success

Cloudflare Pages treats a build as successful when the configured command exits successfully and the output directory can be uploaded. It does not know that RigAI requires a homepage, CSS, JavaScript, or a specific route set. Before this repair, those requirements existed only in a separately invoked validation command.

## Missing build outputs

The reported broken deployment omitted:

- `index.html`
- `src/styles.css`
- `src/main.js`
- `src/assets/rigai-garage-bg.jpg`
- All clean-route directories
- The Toyota 4Runner hub
- Phase 4A suspension and first-upgrades articles
- Current Phase 4B articles

## Files changed

- `scripts/build-contract.js`
- `scripts/build.js`
- `scripts/validate-build.js`
- `scripts/dev-server.js`
- `docs/build-output-incident-report.md`

Existing uncommitted Phase 4B work was preserved and was not reverted.

## Build pipeline repair

The build still uses the current registry, Figma-aligned homepage renderer, article renderer, shared template, and asset-copy logic. No old build script was restored.

After rendering, `scripts/build.js` now runs a shared output contract before printing success. A contract failure throws an error and makes `npm run build` exit non-zero.

The final success message records generated file count and total bytes, making a public-only artifact visible in Cloudflare logs.

## New mandatory assertions

The build now requires:

- `dist/index.html`
- `dist/404.html`
- `dist/robots.txt`
- `dist/sitemap.xml`
- `dist/src/styles.css`
- `dist/src/main.js`
- The 4Runner hub
- Phase 4A suspension and first-upgrades routes
- Every route currently registered in `pages`
- More than the known broken 12-file output and at least 18 files
- Exactly one homepage H1
- Root-safe homepage CSS and JavaScript references
- Root-safe 404 asset references
- Every local HTML stylesheet, script, image, favicon, or font reference
- Every local asset referenced with `url(...)` from generated CSS

## Validation added

`scripts/validate-build.js` now runs the same shared output contract before its detailed metadata, sitemap, route, schema, content, and link checks.

A negative test removed `dist/index.html`; validation exited with code 1 and reported the missing mandatory homepage. A fresh build then restored the output and validation passed.

## Local verification

Fresh output:

- Generated files: 37
- Total size: 824,059 bytes
- Homepage: generated from the Phase 3/3.1 renderer
- Shared CSS and JavaScript: present
- Clean legal/support routes: present
- Phase 4A routes: present
- Phase 4B routes: present
- Legacy flat compatibility outputs: retained for intentionally configured public pages

Preview verification covers the homepage, legal/support pages, design system, Phase 4A routes, assets, and intentional 404 response.

The preview server now serves the generated `404.html` with HTTP 404 for an unknown route instead of returning an unstyled plain-text response. It also sends explicit XML and text MIME types for sitemap and robots output.

## Cloudflare redeployment checklist

1. Commit and push the repaired source files.
2. Confirm Cloudflare production branch points to that commit.
3. Keep the build command as `npm run build`.
4. Keep the output directory as `dist`.
5. Review the build log for `Build complete: dist (37 files, ... bytes)` or a higher current count.
6. Confirm the upload contains `index.html`, `src/styles.css`, `src/main.js`, clean-route directories, and Toyota 4Runner routes.
7. Purge or retry the deployment only after confirming the deployed commit SHA.
8. Open `/`, `/vehicles/toyota-4runner`, and an unknown route on the production domain.

## Known limitations

- The screenshots do not expose the deployed commit SHA or full Cloudflare build context, so the external trigger for skipping the modern copy/render stages cannot be proven from repository history alone.
- The minimum file-count guard is an incident safeguard, not a substitute for the explicit mandatory route and asset assertions.
- External Google Fonts availability is outside the local build contract.

## Recommended commit message

`fix: restore complete production build output`

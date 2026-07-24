# Phase 5A.2 Deployment Verification

Use this checklist after the Phase 5A.2 commit is pushed. A successful local build does not prove that production has deployed the same revision.

## Git and Cloudflare

- [ ] Record the latest Git commit hash: `git rev-parse HEAD`
- [ ] Confirm the commit contains the intended homepage source, content, CSS, validation, and documentation changes.
- [ ] Confirm the Cloudflare Pages production branch is `main`.
- [ ] Confirm the Cloudflare Pages build command is `npm run build`.
- [ ] Confirm the Cloudflare Pages output directory is `dist`.
- [ ] Confirm the latest Cloudflare deployment commit hash matches the Git commit hash.
- [ ] Inspect the Cloudflare build log and confirm that validation completed successfully.
- [ ] Record the deployment URL and custom-domain URL.

## Uploaded Output

- [ ] Confirm `index.html` was uploaded.
- [ ] Confirm `src/styles.css` was uploaded.
- [ ] Confirm `src/main.js` was uploaded.
- [ ] Confirm all clean-route directories and Toyota 4Runner route directories were uploaded.
- [ ] Compare the uploaded file count with the local clean-build file count.

## Browser Checks

- [ ] Open the unique Cloudflare Pages deployment URL in a private window.
- [ ] Open the custom domain in a private window.
- [ ] Hard reload both URLs.
- [ ] Compare the deployment URL with the custom domain to rule out stale edge or browser cache.
- [ ] Confirm the four-item hero value strip is visible.
- [ ] Confirm the value strip uses 4 columns at 1200px and wider, 2 columns from 700px to 1199px, and 1 column below 700px.
- [ ] Confirm the hero describes plans for SUVs, not only Toyota 4Runner.
- [ ] Confirm the hero plan is clearly labeled as one example.
- [ ] Confirm the recommendation section is clearly labeled as an example profile.
- [ ] Confirm the app preview shows multiple vehicle choices.
- [ ] Confirm the vehicle cards use `Detailed guide available`, `Supported in app`, or `Limited support`.
- [ ] Confirm only Toyota 4Runner links to a detailed vehicle guide.
- [ ] Confirm the reassurance callout and its `#how-it-works` link work.
- [ ] Confirm the guide section explains that Toyota 4Runner is the first detailed guide collection.

## Production SEO Verification

- [ ] After the new deployment is live, run `npm run verify:production-seo`.
- [ ] Confirm the production verification command targets the intended production origin.
- [ ] Confirm all expected production routes return the expected content.
- [ ] Do not mark the deployment verified if the command was run only against localhost.

## Sign-Off

- Production commit:
- Cloudflare deployment URL:
- Custom domain:
- Uploaded file count:
- Production verification result:
- Verified by:
- Verification date:

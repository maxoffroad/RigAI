# RigAI Homepage Clarity Refinement

## Summary

Refined four homepage areas without changing routes, SEO metadata, structured data, articles, site navigation, or the build architecture.

## Hero Example Label

- Replaced the large status treatment with a compact, non-interactive `EXAMPLE PLAN` label.
- Separated the driving profile and approximate budget so the vehicle name remains readable.
- Updated the disclaimer to describe vehicle, market, and selected-product variation.

## Trust Strip

- Replaced the four panel-like statements with a compact value strip.
- Removed the Amazon statement from this location.
- Added decorative, hidden-from-assistive-technology check marks.

## Process Section

- Kept one sequence using `01` through `04` inside the cards.
- Removed circular number styling.
- Expanded the final step with a clearly labeled example result and no prices.

## Vehicle Platforms

- Added a clear explanation of current and future vehicle coverage.
- Made Toyota 4Runner the only linked vehicle card and labeled it `Available now`.
- Labeled all non-interactive vehicle cards `Future coverage`.
- Kept the existing intentional CSS vehicle silhouettes because no suitable licensed vehicle photography is available in the repository.

## Responsive Verification

Rendered browser verification passed at 320, 375, 390, 768, 1024, and 1440 pixels.

- Mobile: one-column trust and Process layouts.
- Tablet: 2x2 trust and Process layouts.
- Desktop: four-column trust and Process layouts.
- The hero label and vehicle badges do not overlap headings.
- Long Land Cruiser names wrap inside their cards.
- No page-level horizontal overflow was found.

## Accessibility

- The example label and trust points are not interactive.
- Decorative trust icons use `aria-hidden="true"`.
- Toyota 4Runner remains keyboard accessible through a semantic link.
- Future vehicle cards remain semantic articles without links.
- Global link focus styling provides a visible two-pixel outline, and the Toyota card adds a branded focus border.

## Files Changed

- `src/components/home/index.js`
- `src/content/home.js`
- `src/styles.css`
- `scripts/validate-build.js`
- `docs/homepage-clarity-refinement-report.md`

## Commands Run

- `npm run build`
- `npm run validate`
- `npm audit --audit-level=moderate`
- `npm run preview`
- Local HTTP checks for `/`, `/vehicles/toyota-4runner`, and `/this-page-does-not-exist`
- Rendered browser checks at 320, 375, 390, 768, 1024, and 1440 pixels

The production build and validation passed, npm reported zero vulnerabilities, the homepage and Toyota guide returned 200, and the unknown route returned 404. Browser console logs were empty.

## Known Limitations

The repository does not contain production-safe, model-specific images for all vehicle cards, so the section uses intentional CSS silhouettes rather than unverified photography.

## Recommended Commit Message

`style: clarify homepage process and vehicle coverage`

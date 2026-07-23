# RigAI Phase 3 Figma Alignment Report

## Summary
Phase 3.1 aligns the existing static homepage with the supplied Figma screenshots without rewriting the architecture, adding a framework, changing legal content, or introducing SPA fallback behavior.

## Initial State
- `git status --short`: clean before edits.
- Latest commit: `c88c0e0 feat: redesign RigAI homepage`.
- Build before edits: passed.
- Validation before edits: passed.
- Audit before edits: 0 vulnerabilities.
- Assets before edits: `src/assets/rigai-garage-bg.jpg` and `public/assets/rigai-og-image.png`.
- CSS before edits: 25,304 bytes.
- JS before edits: 1,005 bytes.

## Figma Reference Set
The attached screenshots were used as visual references for section composition, spacing, typography hierarchy, surfaces, cards, hero, build result, app screens, vehicle cards, guide previews, transparency, FAQ, final CTA, and footer. Binary Figma assets were not copied into the repository.

## Gap Audit
| Section | Current implementation | Figma reference | Gap | Required change | Risk |
| --- | --- | --- | --- | --- | --- |
| Header | Floating rounded header with old `#home-*` anchors | Compact flat dark header, centered nav, right CTA | Shape and anchors differed | Use Figma nav labels, real anchors, header CTA | Low |
| Hero | Abstract CSS vehicle preview | Large media frame with overlaid example plan | Visual felt less automotive | Use local media frame and plan card | Medium: final licensed image still needed |
| Problem | Generic card grid | Three numbered columns with labels and callout | Too generic | Add numbered cards and callout | Low |
| Process | Three simple cards | Four-step timeline with final emphasis | Missing timeline and fourth step | Add static accessible timeline | Low |
| Build Result | Transformation cards | Scenario, static tabs, wide image, outcome card | Layout mismatch | Add non-interactive segmented labels and result card | Low |
| Coverage | Pills | 5x2 technical category matrix | Too lightweight | Add category cards and relationship note | Low |
| Recommendation | General result grid | Detailed Buy First result with side panels | Missing app-like structure | Add main recommendation, context, progress | Low |
| App Screens | Three simple phone cards | Four readable phone previews | Too few screens | Add four HTML/CSS example screens | Medium: not real screenshots |
| Vehicles | Text cards | Six visual platform cards | Needed platform strip | Use non-link visual cards and safe placeholders | Medium: model images missing |
| Guides | Generic planned guide cards | Editorial grid, coming soon | Needed exact topics | Add non-interactive guide grid | Low |
| Transparency | Bullet list | Quiet bordered panel | Too simple | Add four limitation items | Low |
| FAQ | Details list | Centered Figma FAQ | Mostly matched | Align width/spacing and remove unconfirmed saved-plan question | Low |
| Final CTA | Support-focused card | Split CTA with example output card | Positioning mismatch | Add `#download` section with static availability | Low |
| Footer | Simple legal link row | Brand + Product/Support/Legal columns | Too thin and less clickable | Add column footer, current year, non-link language labels | Low |

## Header
Header links now use `#how-it-works`, `#vehicles`, `#guides`, and `/about`. The CTA points to `#download`. Mobile navigation keeps the existing `aria-expanded`, Escape close, and link-close behavior.

## Hero
The hero now uses the Figma headline, orange third line, local media frame, and overlaid example plan card. Prices are marked as example ranges, not market data.

## Problem
Three numbered cards now match the Figma sequence/compatibility/purpose structure with a bottom explanatory callout.

## Process
The section now has four steps and a static progress line. It is intentionally not interactive.

## Build Result
The tabs are non-interactive segmented labels to avoid fake controls without three real states. The section shows the Target Setup example and an expected outcome card.

## Coverage
Coverage is now a 5x2 desktop matrix with subtle metadata codes and a system relationship callout.

## Recommendation
The result card now includes Buy First, Upgrade, Why this helps, Do not buy yet, Verify first, Search compatible parts, Vehicle Context, and Plan Progress.

## App Screens
Four HTML/CSS phone previews show an example app flow. They are documented as example previews, not screenshots of a released app.

## Vehicles
Vehicle cards are non-link cards, so planned vehicles cannot lead to 404. CSS placeholders are used until verified licensed model-specific images exist.

## Guides
Guide cards are non-interactive and marked Coming soon / Guide in development. No fake guide routes were created.

## Transparency
The legal caution content remains quiet and informative: informational only, verify fitment, professional review, and no fitment guarantees.

## FAQ
FAQ remains real `<details>` / `<summary>` HTML. The unconfirmed saved-plan question was removed.

## Final CTA
The final section now uses `#download`, static availability labels, and an example output card with an explicit example disclaimer.

## Footer
Footer uses a Figma-like brand/product/support/legal layout. EN/RU controls are non-interactive labels because global localized homepage routes do not exist.

## Typography
Two font families are used: Inter for UI/body and Oswald for large display headings only.

## Colors and Contrast
Secondary text was kept brighter than the screenshots where needed for readability. Orange remains the primary CTA/action accent, green is reserved for positive recommendation states, and amber is reserved for verification/caution states.

## Responsive Behavior
CSS includes breakpoints for desktop, tablet, and mobile. Narrow layouts stack cards, make the phone previews horizontally scrollable with snap, and keep the hero plan card as a normal card below the image.

## Accessibility
Maintained skip link, one H1, real anchors, details/summary FAQ, visible focus states, non-link planned cards, and no placeholder `href="#"`.

## Performance
No new JS libraries, UI frameworks, carousel packages, remote images, or large binary assets were added. External font request now includes Inter and Oswald with `display=swap`.

## Assets Manifest
See `docs/figma-assets-manifest.md`.

## Validation
Validation was expanded for Phase 3.1 section IDs, anchors, local assets, hero image dimensions, lazy loading, example labels, guide planned states, no hardcoded 2024, no placeholder domains, and no SPA fallback.

## Files Changed
- `scripts/site-config.js`
- `scripts/page-template.js`
- `scripts/validate-build.js`
- `src/content/home.js`
- `src/components/home/index.js`
- `src/styles.css`
- `public/design-system.html`
- `docs/figma-assets-manifest.md`
- `docs/phase-3-figma-alignment-report.md`

## Commands Run
- `git status --short`
- `git diff --stat`
- `git log -5 --oneline`
- `npm.cmd run build`
- `npm.cmd run validate`
- `npm.cmd audit --audit-level=moderate`

## Known Limitations
- Browser screenshot verification depends on a local browser automation runtime. Earlier Playwright verification was blocked by a missing Chromium binary.
- Current vehicle visuals are production-safe placeholders, not final model-specific images.
- App screen previews are HTML/CSS examples, not confirmed screenshots from the released mobile app.

## Remaining Asset Replacements
- Licensed hero SUV image.
- Licensed build result SUV image.
- Verified model-specific vehicle card images.
- Confirmed mobile app screenshots, if the product team wants real app UI instead of example previews.

## Recommended Commit Message
`feat: align homepage with final RigAI Figma direction`

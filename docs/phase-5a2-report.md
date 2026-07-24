# RigAI Phase 5A.2 Report

## Summary

Phase 5A.2 refines the existing homepage positioning so RigAI is presented as a multi-vehicle SUV planning product while keeping Toyota 4Runner as the first detailed website guide collection. The homepage structure, routes, SEO architecture, Toyota content, and build architecture remain unchanged.

## Verified Vehicle Support

| Vehicle | Selectable in app | Recommendation generation supported | Detailed website guide exists | Status confirmed | Evidence |
| --- | --- | --- | --- | --- | --- |
| Toyota 4Runner | Yes | Yes | Yes | Detailed guide available | Mobile `app/form.tsx`; generic request validation in `server.js`; seven published website routes |
| Land Cruiser Prado | Yes, as Toyota Prado | Yes | No | Supported in app | Mobile Toyota model list and generic recommendation flow |
| Land Cruiser 200 | Generic Toyota Land Cruiser only | Yes, without an exact 200-series distinction | No | Limited support | Mobile exposes `Land Cruiser`, but not an exact `Land Cruiser 200` option |
| Lexus GX | Yes, including GX 460, GX 470, and GX 550 | Yes | No | Supported in app | Mobile Lexus model list and generic recommendation flow |
| Jeep Wrangler | Yes | Yes | No | Supported in app | Mobile Jeep model list and generic recommendation flow |
| Ford Bronco | Yes | Yes | No | Supported in app | Mobile Ford model list and generic recommendation flow |

These labels describe current product evidence conservatively. They do not imply guaranteed fitment, equal recommendation depth for every configuration, or a published website guide for every vehicle.

## Source of Truth

Vehicle selection evidence comes from the mobile app's configured make/model options in `app/form.tsx`. The recommendation endpoint accepts a nonempty vehicle and year rather than enforcing a Toyota-only model allowlist in `server.js`. The app also contains a generic recommendation flow based on vehicle and use inputs.

Website guide availability comes from this repository's page registry and generated routes. Only Toyota 4Runner currently has a detailed website cluster.

## Hero Value Strip

The existing four product benefits remain:

- Prioritized upgrade plan
- Beginner-friendly explanations
- Compatibility reminders
- Budget-aware recommendations

The strip now uses equal-height items and a 4/2/1 responsive grid: four columns at 1200px and wider, two columns from 700px to 1199px, and one column below 700px.

## Hero Messaging

The hero supporting copy now describes personalized off-road upgrade plans for SUVs. The established headline, CTA hierarchy, composition, and visual direction are unchanged.

## Example Profile Positioning

The hero result card now states that it is one example of a personalized RigAI plan. Its disclaimer also names vehicle configuration as a factor that can change recommendations and estimated costs.

## Recommendation Positioning

The recommendation section is explicitly labeled `EXAMPLE RECOMMENDATION` and explains that the visible Toyota 4Runner result is one profile using planning logic shared across supported vehicle configurations.

## Application Mockup

The first application screen now presents a compact vehicle-selection example with Toyota 4Runner, Land Cruiser Prado, Lexus GX, Jeep Wrangler, and an additional-vehicles line. It no longer makes the application preview appear Toyota-only.

## Vehicle Platforms

The platform introduction now separates app support from website guide depth. Toyota 4Runner is labeled `Detailed guide available`; supported app selections are labeled `Supported in app`; Land Cruiser 200 is labeled `Limited support` because the current app exposes a generic Land Cruiser choice rather than an exact 200-series option.

## Guide Context

The guide section now says that the first detailed guide collection focuses on Toyota 4Runner and that vehicle-specific guides will follow as coverage expands.

## Reassurance Callout

A compact, non-card callout addresses unlisted SUVs without promising universal coverage. Its real link points to the existing `#how-it-works` section.

## Responsive Verification

Exact browser viewport measurements covered 320, 375, 390, 768, 1024, 1280, 1366, and 1440 pixels.

| Viewport | Value-strip columns | Item width | Item height | Horizontal overflow | App screen overflow | Vehicle badge collision |
| --- | --- | --- | --- | --- | --- | --- |
| 320 | 1 | 281px | 72px | None | None | None |
| 375 | 1 | 336px | 72px | None | None | None |
| 390 | 1 | 351px | 72px | None | None | None |
| 768 | 2 | 348px | 72px | None | None | None |
| 1024 | 2 | 466px | 72px | None | None | None |
| 1280 | 4 | 288px | 72px | None | None | None |
| 1366 | 4 | 293px | 72px | None | None | None |
| 1440 | 4 | 293px | 72px | None | None | None |

The four items have equal width within each grid state and equal height at every tested width. A small-screen hero overflow exposed during visual QA was fixed by allowing the orange headline phrase to wrap below 700px.

## Accessibility

The new reassurance heading is associated with its region through `aria-labelledby`. The link is a real anchor, preserves keyboard focus behavior, and has visible hover and focus treatments. Automated DOM checks confirmed:

- Four value items and zero links or buttons inside them.
- All decorative checks use `aria-hidden="true"`.
- The Toyota 4Runner card has a descriptive link label.
- Five nonlinked vehicle cards are absent from the tab order.
- Vehicle statuses are present as visible text.
- The reassurance link navigates to the real `#how-it-works` target.
- No duplicate IDs or heading-level skips.
- No browser console errors.

## Local Build Verification

The final clean build generated 44 files and 1,002,121 bytes in `dist`. `npm run build`, `npm run validate`, and `npm audit --audit-level=moderate` passed. The audit reported zero vulnerabilities.

Local HTTP checks returned:

- `200` for `/`
- `200` for all seven Toyota 4Runner routes
- `200` for `/robots.txt`
- `200` for `/sitemap.xml`
- `404` for `/route-that-does-not-exist`

## Dist Content Verification

The build validator now requires the Phase 5A.2 value-strip, example, multi-vehicle, reassurance, and guide-context phrases in `dist/index.html`.

- Main CSS: `dist/src/styles.css`
- Main JavaScript: `dist/src/main.js`
- Homepage modification markers: actual content strings in `dist/index.html`
- Required Phase 4 routes: present
- Sitemap, robots, and 404 output: present
- `Budget-aware recommendations`: present
- `Your SUV is not listed?`: present
- `Our first detailed guide collection focuses on Toyota 4Runner`: present

## Deployment Verification Checklist

See `docs/phase-5a2-deployment-verification.md`. Production is not considered verified until a new Cloudflare deployment is matched to the intended Git commit and checked through its deployment URL and custom domain.

## Files Changed

- `src/components/home/index.js` - multi-vehicle positioning, example context, vehicle statuses, reassurance callout, and guide context.
- `src/content/home.js` - compact app vehicle selection and evidence-based platform statuses.
- `src/styles.css` - responsive value strip and presentation for the new contextual content.
- `scripts/validate-build.js` - assertions that Phase 5A.2 content reaches the generated homepage.
- `docs/phase-5a2-deployment-verification.md` - post-deployment verification checklist.
- `docs/phase-5a2-report.md` - implementation and QA report.

## Commands Run

- `npm run build`
- `npm run validate`
- `npm audit --audit-level=moderate`
- Recursive `dist` file, size, route, and content checks
- Local HTTP route checks against the generated `dist`
- In-browser DOM, click, focus-rule, heading, and console checks
- Exact Chromium viewport measurements at all eight required widths
- Visual screenshots at mobile, tablet, and desktop widths
- `git diff`, `git diff --stat`, and `git status`

## Known Limitations

- Land Cruiser 200 is not an exact selectable app model; support is represented conservatively as limited.
- Only Toyota 4Runner has detailed website guides.
- Vehicle availability does not guarantee part fitment or identical recommendation depth.
- Production deployment cannot be verified before a new revision is deployed.

## Manual Production Actions

1. Review and commit the Phase 5A.2 changes.
2. Push the commit to the Cloudflare Pages production branch.
3. Complete `docs/phase-5a2-deployment-verification.md`.
4. Run the production SEO verification only after the new deployment is live.

## Recommended Commit Message

`feat: clarify multi-vehicle positioning on homepage`

# RigAI Phase 5A.1 UI Fix Report

## Summary

The homepage and Toyota 4Runner article layout were refined in place without changing routes, content, metadata, canonical URLs, sitemap, robots, schema, or build architecture. The result is more compact, less panel-heavy, and responsive from 320px through 1440px.

## Initial State

- Container: 1140px.
- Homepage section padding: 72px.
- Hero: 760px minimum height with a 5.1rem maximum H1.
- Problem/process cards: 280px and 375px minimum heights.
- Article header: 480px minimum height; 360px visual column.
- Breakpoints: 1100/900/760/620/520 plus earlier legacy breakpoints.
- CSS: 59,078 bytes.
- JavaScript: 1,005 bytes.
- Local bitmap assets: 316,696 bytes.

## Screenshot Review

The supplied/current production view showed an overly tall hero, heavy cards, duplicated process numbering, loose vertical rhythm, and a tire-focused hero asset. The implementation fixes layout issues. The tire image remains because no production-safe SUV bitmap exists in the repository.

## Global Layout

Added stable tokens for a 1220px primary container, 1240px wide container, responsive gutters, section rhythm, card gaps, and readable content measure.

## Header

Reduced vertical padding, CTA height, nav spacing, and border weight. Increased logo presence slightly. The 44px menu target, focus styles, Escape handling, and `aria-expanded` behavior remain.

## Hero

Reduced minimum height to 650px, narrowed copy, lowered H1 maximum scale, tightened buttons, and kept “The right build.” on one line across tested viewports.

## Problem

Reduced card minimum height, internal padding, label prominence, and bottom callout weight.

## Process

Removed the duplicate progress-track numbering. Cards now provide the only numbers and share one connecting line; mobile uses a vertical line and logical DOM order.

## Build Result

Reduced split gap, sidebar width, card padding, list spacing, and segmented-label dimensions. The state labels remain non-interactive.

## Coverage

Reduced heading-to-grid spacing and category cell height/padding. The grid remains 5x2 on desktop, 2 columns on tablet, and 1 column on mobile.

## Recommendation

Applied a stable 3:1 main/sidebar ratio, reduced card and action padding, and tightened context/progress stacks. Tablet and mobile remain single-column.

## Application

Phone screens now have consistent elevated backgrounds, taller equal shells, tighter captions, and less surrounding gap. Tablet uses 2x2; mobile retains dependency-free horizontal scroll snap.

## Vehicles

Replaced blurry radial placeholders with controlled angular automotive silhouettes. Planned cards remain readable and non-linked; the published card retains hover and focus feedback.

## Guides

Reduced card height, padding, and badge spacing while preserving published URLs and bottom-aligned read actions.

## Transparency

Reduced panel padding and column gaps without changing disclaimer copy.

## FAQ

Reduced summary/open-state spacing and added a clear focus-visible treatment. Native `details` and `summary` remain.

## Final CTA

Restored the existing split composition as a compact, left-aligned block with a smaller heading and result card. Mobile stacks the card after the CTA content.

## Footer

Reduced top/bottom padding, column gaps, link spacing, and language-label weight while preserving readable legal text.

## Article Pages

All seven Toyota 4Runner routes continue using the shared template. Header height, title scale, visual column, article measure, TOC width, section rhythm, callouts, related guides, CTA, and mobile spacing were refined. Tables remain intentionally scrollable inside their focusable container.

## Typography

Condensed type remains limited to major H1/H2 display roles. Card titles, navigation, labels, body text, and UI use the neutral sans-serif role. Major headings use `clamp()`.

## Responsive Behavior

Browser-rendered checks covered 320, 375, 390, 768, 1024, 1280, and 1440px for the homepage and tire-size article template. Every required section stayed within the viewport and no page-level horizontal overflow was detected.

## Accessibility

Mobile menu click and Escape close behavior passed; `aria-expanded` changed correctly. Focus-visible states, native details/summary, table focus/scroll behavior, heading order, skip link, reduced-motion rule, and touch targets remain intact.

## Performance

- CSS: 59,078 -> 60,716 bytes (+1,638 bytes).
- JavaScript: unchanged at 1,005 bytes.
- Local bitmap assets: unchanged at 316,696 bytes.
- No framework, package, font, icon, animation, or image request was added.

## Validation

`npm run build` and `npm run validate` pass with 44 generated files. Routes, mandatory sections, metadata, canonicals, sitemap, schema, assets, and Phase 4 pages remain covered by existing validation.

## Files Changed

- `src/styles.css`
- `src/components/home/index.js`
- `docs/phase-5a1-ui-gap-audit.md`
- `docs/phase-5a1-ui-fix-report.md`

Generated `dist` files were not edited manually.

## Commands Run

Repository audit, build, validation, npm audit, local preview, route checks, responsive browser checks, mobile-menu interaction, console inspection, file-size comparison, and git diff/status checks.

## Visual Verification

Screenshots were created in `tmp/ui-audit/` for homepage 1440/1024/768/390 and article 1440/390. During QA, an external/user-authored commit `bff9f4d` appeared and included these files. This task did not run `git add`, `git commit`, or `git push`, and did not rewrite that concurrent commit.

## Known Limitations

- The only local hero/build bitmap is tire-focused, not SUV-focused.
- Visual QA used a same-origin exact-width iframe harness in the connected browser; screenshots show the tested viewport inside the browser canvas.
- No field performance data or production deployment was changed in this phase.
- Commit `bff9f4d` includes generated `dist`, tracked `node_modules`, and QA screenshots. Review repository hygiene separately before pushing; the commit was not reset or amended automatically.

## Asset Replacements Still Needed

Replace `src/assets/rigai-garage-bg.jpg` with an approved, licensed, production-safe SUV/off-road vehicle image. Preserve the current 1200x800 slot, explicit dimensions, and dark focal treatment.

## Recommended Commit Message

`style: refine RigAI homepage and responsive layouts`

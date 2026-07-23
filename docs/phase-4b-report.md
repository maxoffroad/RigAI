# RigAI Phase 4B Report

## Summary

Phase 4B expands the Toyota 4Runner cluster with four static English guides and connects all seven published cluster routes.

## Initial Repository State

The worktree was clean. Phase 4A was present in commit `d1ee299`, and the initial build, validation, and npm audit passed.

## Phase 4A Verification

The hub, suspension guide, and first-upgrades guide existed as nested static output. Metadata, sitemap entries, breadcrumbs, JSON-LD, internal links, research notes, calculated reading time, and planned-route guards were present.

## Research Process

Research prioritized Toyota material, the owner manual, NHTSA tire guidance, and manufacturer technical guidance. Claims were mapped to page intent and excluded when they could not support generation-wide wording.

## Intent Separation

- KDSS: system identification and modification planning.
- Lift kit: height objective, geometry, load, and trade-offs.
- Tire size: placard baseline, exact specifications, and clearance factors.
- Overland build: trip profile, operating load, recovery, cargo, and comfort.

## Pages Created

- `/vehicles/toyota-4runner/kdss`
- `/vehicles/toyota-4runner/lift-kit`
- `/vehicles/toyota-4runner/tire-size`
- `/vehicles/toyota-4runner/overland-build`

## KDSS Guide

Explains KDSS at a sourced high level, safe identification methods, lift and suspension checks, decision factors, verification, and common planning mistakes.

## Lift Kit Guide

Separates leveling from suspension lift, defines height factors, documents geometry and load dependencies, and keeps tire clearance as a separate fitment decision.

## Tire Size Guide

Explains tire-size syntax, placard baseline, nominal versus measured dimensions, clearance, wheels, load and speed capacity, and trade-offs without a universal fitment table.

## Overland Build Guide

Organizes travel planning around trip profile, operating load, reliability, recovery, protection, suspension, roof load, electrical needs, comfort, and removable equipment.

## Hub Updates

All six guides are shown as published. Planned labels for the Phase 4B routes were removed, and travel planning links to the overland guide.

## Homepage Updates

The existing six-card guide area now links to Suspension, First Upgrades, Lift Kit, Tire Size, KDSS, and Overland Build. Reading time is calculated from article content.

## Internal Linking

Each new guide links to the hub, includes contextual links to adjacent intents, and includes a related-guides block. Existing Phase 4A guides gained relevant Phase 4B related links.

## Metadata

Each route uses a unique title, description, Open Graph title and description, self canonical, production URL, Twitter metadata, and English language metadata.

## Structured Data

The shared static template creates Article, BreadcrumbList, Organization, and WebSite entities using centralized dates and production URLs. No rating, review, offer, Product, HowTo, or FAQPage entities are added.

## Sitemap

The build generates sitemap entries from published page configuration. All seven Toyota 4Runner routes are included once.

## Content Safety Review

The cluster avoids absolute fitment wording, universal lift heights, lift-to-tire promises, universal payload numbers, and KDSS removal advice. Validation includes guards for high-risk absolute phrases.

## Sources and Claims

Eight official or primary resources and two supporting manufacturer resources are recorded in `docs/research/toyota-4runner-phase-4b-research.md`.

## Accessibility

Pages use one H1, hierarchical headings, breadcrumbs, a TOC, semantic callouts, table captions, scoped row and column headers, keyboard-scrollable tables, visible links, a skip link, and the shared reduced-motion rules.

## Performance

No framework, library, carousel, remote image, or per-article CSS bundle was added.

Production output sizes:

| File | Bytes |
| --- | ---: |
| 4Runner hub HTML | 23,132 |
| First Upgrades HTML | 21,115 |
| Suspension HTML | 26,115 |
| KDSS HTML | 21,105 |
| Lift Kit HTML | 24,203 |
| Tire Size HTML | 24,252 |
| Overland Build HTML | 27,309 |
| Shared CSS | 59,078 |
| Shared JavaScript | 1,005 |

Total new image bytes: 0.

An article declares five initial request targets on a cold document load: HTML, favicon, Google Fonts stylesheet, shared CSS, and shared JavaScript. Font-file requests are selected by the browser and cache/character coverage, so their count is not represented as a fixed application request.

## Validation

Validation now checks the four new nested files, seven cluster routes, homepage links, hub links, contextual links, related blocks, unique titles and descriptions, schema, sitemap output, and content-safety phrases.

## Files Changed

- `src/content/toyota-4runner-phase-4b.js`: four researched article definitions and centralized Phase 4B dates.
- `src/content/toyota-4runner.js`: six published hub cards, cluster links, and Phase 4B page registration.
- `src/content/home.js`: six published homepage guide cards with calculated reading time.
- `src/components/articles/index.js`: optional planned state, contextual system links, and calculated related-card reading time.
- `scripts/validate-build.js`: routes, output, metadata uniqueness, cluster links, schema, and safety checks.
- `public/design-system.html`: dependency, checklist, fitment table, load callout, and source-block examples.
- `docs/page-authoring.md`: Phase 4B intent, fitment, safety, and publishing rules.
- `docs/research/toyota-4runner-phase-4b-research.md`: sources, claim log, exclusions, conflicts, and intent map.
- `docs/phase-4b-report.md`: implementation and verification record.

## Commands Run

- `git status --short`
- `git diff --stat`
- `git log -5 --oneline`
- `npm.cmd run build`
- `npm.cmd run validate`
- `npm.cmd audit --audit-level=moderate`
- Final build, validation, audit, optional scripts, preview, browser QA, and git review commands

The project does not define `lint` or `test` scripts, so those optional commands were not available.

## Verification Results

- Production build: pass.
- Build validation: pass.
- npm audit at moderate level: pass, 0 vulnerabilities.
- All seven 4Runner routes: HTTP 200.
- Sitemap and robots: HTTP 200.
- Unknown route: HTTP 404.
- Homepage guide cards: all six clicked; each changed the URL and loaded the expected title.
- Responsive checks: 320, 375, 390, 768, 1024, and 1440 px passed on the homepage, tire-size guide, and overland-build guide with no document-level horizontal overflow.
- Visual checks: mobile tire-size hero and desktop overland-build hero passed.
- Browser console: no warnings or errors in the final checked page.
- Browser navigation to XML and intentional 404 was blocked by the browser client because of content/status handling; both were verified with direct local HTTP requests.

## Known Limitations

- Guidance remains primarily scoped to 5th Gen model years 2010-2024.
- Exact fitment, capacity, alignment, and installation decisions require current manufacturer data for the specific vehicle and part.
- No product rankings, current prices, or affiliate product blocks are included.

## Excluded Claims

- Universal KDSS lift limit
- Universal lift-to-tire-size combinations
- Clearance guarantees
- One payload or roof-load number across the generation
- Trim-only KDSS identification
- Required parts at a fixed lift height
- Product rankings and current prices

## Phase 5A Readiness

The static content model, nested route generation, source notes, cluster validation, and reusable article patterns can support a future researched vehicle topic without a framework migration.

## Recommended Commit Message

`feat: expand Toyota 4Runner SEO cluster`

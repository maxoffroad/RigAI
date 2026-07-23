# Phase 5A.1 UI Gap Audit

Baseline reviewed against the approved Figma-direction screenshots and the production-style local build on 2026-07-23.

| Section | Current issue | Figma target | Required fix | Responsive risk | Accessibility risk |
| --- | --- | --- | --- | --- | --- |
| Header | Tall, visually dense bar | Compact product header | Reduce padding, border weight, nav and CTA height | Menu collision near tablet width | Preserve 44px menu target and focus |
| Hero | 760px minimum height and oversized type | Compact balanced two-column hero | Reduce height, gap, type and copy measure | Third line can wrap badly | Keep logical H1 and readable contrast |
| Trust strip | Four heavy independent panels | Thin compact trust band | Reduce padding, radius and visual weight | Four columns become cramped | Keep text readable without icons alone |
| Problem | 280px cards and large whitespace | Tighter three-card explanation | Reduce card height, padding and heading scale | Uneven card content | Maintain heading hierarchy |
| Process | Two visible numbering systems | One connected progression | Remove duplicate track nodes; keep numbered card nodes | Desktop line must become vertical | Preserve DOM order |
| Build Result | Wide gap and tall outcome card | Media-led compact split | Reduce sidebar, gaps, tabs and card padding | Tabs and card can overflow | Keep segmented labels non-interactive |
| Coverage | Excess space before grid | Aligned heading/card and tight 5x2 grid | Reduce heading gap and cell padding | 5 columns fail below desktop | Switch to 2 columns, then 1 |
| Recommendation | Dense main card and tall side stack | Clear 3:1 hierarchy | Reduce padding, action gaps and sidebar spacing | Action cards become narrow | Do not reduce body text below readable size |
| Application | Wireframe-like small screens | Consistent elevated app screens | Increase screen height, reduce border density and caption gap | Four phones do not fit tablet | 2x2 tablet and scroll-snap mobile |
| Vehicles | Blurry radial placeholders | Controlled automotive silhouettes | Replace radial blobs with neutral angular vehicle placeholders | Six columns become too narrow | Published card keeps focus/hover state |
| Guides | Tall cards and loose metadata | Compact aligned guide grid | Reduce height, padding and badge spacing | Three columns fail on tablet | Published links retain visible focus |
| Transparency | Oversized panel and gaps | Compact limitation matrix | Reduce padding and column gaps | Two columns collapse late | Preserve text contrast |
| FAQ | Large row padding | Compact accessible details list | Reduce spacing and improve focus | Long summaries wrap | Keep native details/summary |
| Final CTA | Excessive 560px height | Left-aligned split CTA | Reduce height/type and preserve result card | Columns need stacking | Static unavailable CTAs remain announced |
| Footer | Large top padding and loose columns | Compact structured footer | Reduce padding and gaps | Columns need clean stacking | Legal text must not become tiny |
| Article pages | 480px header and wide content measure | Compact editorial layout | Reduce hero, TOC/content widths and section spacing | Tables can force page overflow | Preserve landmarks and headings |
| Mobile navigation | Correct behavior but visually tall header | Compact menu header | Reduce header padding | Absolute menu placement | Verify click, Escape and aria-expanded |
| Tables | Intentional horizontal scroll | Contained scroll region | Add overscroll containment and stable scrollbar | Page-level overflow | Keep focus-visible wrapper |
| TOC | Wide sticky rail and large gap | Narrow useful navigation rail | Reduce width/gap and disable sticky below 900px | Tablet squeeze | Keep links keyboard accessible |


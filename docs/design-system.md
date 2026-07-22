# RigAI Design System

Internal showcase route: `/design-system`

## Principles

RigAI should feel technical, confident, modern, practical, and rooted in real SUV/offroad planning. The interface should look premium without decorative luxury, clear for beginners, and credible for experienced owners.

Avoid generic neon AI styling, cyberpunk, heavy glow, military styling, muddy texture overload, parts-store clutter, fake ratings, and guaranteed fitment language.

## Visual Inventory

| Current pattern | Problem | New token/component | Migration approach |
| --- | --- | --- | --- |
| Raw dark hex colors | Hard to scale | `--color-*` tokens | Keep legacy aliases, map new work to semantic tokens |
| Repeated `min(1140px...)` containers | Easy to drift | `.container`, `.ds-section` | Use shared containers for future pages |
| Repeated card borders/backgrounds | Duplication | `.card`, `.card.compact` | Keep existing cards, use `.card` for new patterns |
| Orange pills and labels | Many one-off variants | `.badge`, `.status-label` | Use status variants for future labels |
| Link/button styling per section | Inconsistent states | `.button.primary`, `.button.secondary`, `.button.ghost` | Keep current CTA classes and extend variants |
| Legal warning boxes | Good pattern, local name | `.callout` | Use for disclaimers and fitment notes |
| Header wraps on small screens | Navigation can become dense | `.nav-toggle` mobile menu | Shared template controls menu state |

## Tokens

Tokens live in `src/styles.css` and include color, typography, spacing, radius, shadow, container, and transition variables. New styles should use tokens before adding custom values.

## Colors

Use graphite backgrounds, elevated dark cards, near-white primary text, calm muted text, and orange for CTAs/focus/active states. Do not use orange for large blocks of body text.

Contrast spot checks:

| Pair | Result |
| --- | --- |
| Primary text on primary background | Strong contrast |
| Muted text on dark surface | Suitable for secondary text, avoid tiny text |
| Orange CTA text inverse | Strong contrast |
| Amber labels on dark cards | Suitable for small labels with bold weight |

## Typography

Use Inter with system fallbacks. Keep headings compact and avoid oversized type inside cards, legal pages, support pages, and future SEO article content.

## Spacing and Layout

Spacing follows a 4px-based scale. Use `.container`, `.container.narrow`, `.ds-section`, `.ds-grid`, `.ds-stack`, and `.ds-cluster` for new layouts.

## Buttons

Variants:

- `.button.primary` for main CTA
- `.button.secondary` for secondary CTA
- `.button.ghost` for low-emphasis actions

Use buttons for commands and links for navigation.

## Cards

Use `.card` for grouped content, recommendation results, legal/support panels, and future guide summaries. Do not nest cards inside cards.

## Badges and Status

Use `.badge` for category labels and `.status-label` for state labels. Variants include default, `.success`, and `.warning`.

## Forms

Foundation classes:

- `.form-field`
- `.form-label`
- `.input`
- `.select`
- `.textarea`

Use native labels. Avoid extra ARIA when native HTML is sufficient.

## Tables

Wrap tables in `.table-wrap` and use `.table`. Use tables only for comparison or structured data.

## Callouts

Use `.callout` for disclaimers, fitment reminders, support notes, and affiliate disclosures.

## Header

The header is rendered from `scripts/page-template.js`. Mobile navigation uses a native `<button>` with `aria-expanded`, `aria-controls`, Escape close behavior, and real links.

## Footer

Footer links are centralized in `scripts/site-config.js`. Every footer link must point to a real route.

## Breadcrumbs

Use `.breadcrumb` on future guide, vehicle hub, and internal reference pages.

## FAQ

Future FAQ blocks should use visible HTML content. Do not add FAQ schema unless the FAQ is visible on the page.

## Icons and Images

Do not add heavy icon libraries. Use images only when they clarify the app, vehicle planning, or offroad use case.

## Accessibility

Required:

- One H1 per page
- Skip link
- Visible focus states
- 44px minimum touch targets for interactive controls
- Keyboard-accessible mobile navigation
- Escape closes mobile nav
- `prefers-reduced-motion` support
- No horizontal scroll at common mobile widths

## Creating New Components

Create a new component only when existing buttons, cards, badges, callouts, tables, or layout utilities cannot express the pattern clearly. Document the component here before using it widely.

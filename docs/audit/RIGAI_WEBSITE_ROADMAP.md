# RigAI Website Roadmap

## Phase 0 - Critical Fixes

| ID | Description | Expected Result | Affected Files | Dependencies | Risk | Complexity | Done Criteria |
|---|---|---|---|---|---|---|---|
| P0-001 | Add `robots.txt`. | Crawlers can discover sitemap and crawl policy. | `public/robots.txt` | Confirm domain. | Low | Low | `/robots.txt` returns 200 and references sitemap. |
| P0-002 | Add `sitemap.xml`. | Current public pages are discoverable. | `public/sitemap.xml` | Stable routes. | Low | Low | `/sitemap.xml` returns 200 and lists canonical clean URLs. |
| P0-003 | Preserve static route folders and keep `_redirects` empty unless needed. | No Cloudflare SPA fallback conflicts. | `scripts/build.js`, `public/_redirects` | Cloudflare output folder remains `dist`. | Medium | Low | `/privacy`, `/terms`, `/contact`, `/support`, `/about` return real page content. |
| P0-004 | Add a repo deployment checklist. | Cloudflare settings are documented. | `README.md`, `docs/deploy.md` | Dashboard access. | Low | Low | Build command and output folder documented. |

## Phase 1 - Technical Foundation

| ID | Description | Expected Result | Affected Files | Dependencies | Risk | Complexity | Done Criteria |
|---|---|---|---|---|---|---|---|
| P1-001 | Add `_headers`. | Better cache/security defaults. | `public/_headers` | Decide CSP/analytics domains. | Medium | Medium | Headers visible in production response. |
| P1-002 | Add schema.org JSON-LD. | Better entity understanding. | `index.html`, page templates | App metadata and logo. | Low | Medium | Rich Results test parses Organization, WebSite, SoftwareApplication. |
| P1-003 | Add Twitter Cards and OG image. | Better social previews. | `index.html`, `public/*.html`, `public/og-image.*` | Design asset. | Low | Medium | Social preview tools show branded preview. |
| P1-004 | Add template/generator for pages. | Header/footer/metadata remain consistent. | `scripts/build.js` or new generator | Content model. | Medium | Medium | One source of truth for nav/footer. |
| P1-005 | Define language strategy. | English root plus Russian `/ru/` path structure. | Future pages and sitemap | Translation process. | Medium | Medium | hreflang plan documented and first ru pages mapped. |

## Phase 2 - Design System

| ID | Description | Expected Result | Affected Files | Dependencies | Risk | Complexity | Done Criteria |
|---|---|---|---|---|---|---|---|
| P2-001 | Document colors, typography, spacing, cards, CTAs. | App-consistent design rules. | `docs/design-system.md`, `src/styles.css` | App screenshots. | Low | Medium | New pages can reuse consistent classes. |
| P2-002 | Add real app screenshots. | Higher trust and better app continuity. | `public/assets/`, `index.html` | Final mobile UI. | Medium | Medium | Screenshots render on desktop/mobile and include alt text. |
| P2-003 | Improve mobile nav pattern. | Better scalability for SEO navigation. | `index.html`, `src/styles.css`, `src/main.js` | IA decision. | Medium | Medium | Keyboard and touch navigation work with expanded nav. |

## Phase 3 - Homepage Redesign

| ID | Description | Expected Result | Affected Files | Dependencies | Risk | Complexity | Done Criteria |
|---|---|---|---|---|---|---|---|
| P3-001 | Add user problem section. | Visitors understand why RigAI matters. | `index.html` | Copy approval. | Low | Low | Section explains beginner confusion and app value. |
| P3-002 | Add upgrade categories section. | Users see category coverage. | `index.html` | Supported category list. | Low | Low | Categories include suspension, tires, skid plates, recovery, lighting, cargo. |
| P3-003 | Add supported vehicles section. | Users see if their vehicle is relevant. | `index.html` | Vehicle support list. | Medium | Medium | Links point to real or planned vehicle hubs. |
| P3-004 | Add FAQ section. | Objections are answered. | `index.html` | Legal review. | Low | Low | FAQ avoids fitment guarantees and unsupported stores. |
| P3-005 | Replace `Coming soon` CTA with Play Store link when live. | Real conversion path. | `index.html` | Google Play listing URL. | Low | Low | CTA opens Play Store and event tracking fires if analytics enabled. |

## Phase 4 - Toyota 4Runner SEO Cluster

| ID | Description | Expected Result | Affected Files | Dependencies | Risk | Complexity | Done Criteria |
|---|---|---|---|---|---|---|---|
| P4-001 | Create `/vehicles/toyota-4runner`. | Vehicle hub for organic traffic. | New page | Template/generator. | Medium | High | Page has useful overview, disclaimers, internal links. |
| P4-002 | Create `/vehicles/toyota-4runner/first-upgrades`. | Capture beginner first-upgrade intent. | New page | Research. | Medium | High | Gives scenario-based, verifiable guidance. |
| P4-003 | Create `/vehicles/toyota-4runner/suspension`. | Capture suspension research intent. | New page | Research. | Medium | High | Covers common suspension decisions without unsafe claims. |
| P4-004 | Create `/vehicles/toyota-4runner/lift-kit`. | Capture commercial investigation intent. | New page | Research. | Medium | High | Explains lift choices and verification requirements. |
| P4-005 | Create `/vehicles/toyota-4runner/kdss`. | Capture KDSS technical searches. | New page | Technical review. | High | High | Accurate KDSS caveats and fitment warnings. |

## Phase 5 - Measurement

| ID | Description | Expected Result | Affected Files | Dependencies | Risk | Complexity | Done Criteria |
|---|---|---|---|---|---|---|---|
| P5-001 | Add Google Search Console verification. | Indexing and query data available. | `index.html` or DNS | GSC access. | Low | Low | GSC property verified. |
| P5-002 | Add privacy-reviewed analytics. | Basic conversion measurement. | `index.html`, `src/main.js` | Privacy decision. | Medium | Medium | Events fire for CTA and guide clicks. |
| P5-003 | Add UTM and CTA tracking plan. | SEO-to-app funnel can be measured. | Docs and link config | App/store URL. | Low | Low | Documented event names and UTM conventions. |

## Phase 6 - Expansion

| ID | Description | Expected Result | Affected Files | Dependencies | Risk | Complexity | Done Criteria |
|---|---|---|---|---|---|---|---|
| P6-001 | Add Lexus GX460 hub. | Expand vehicle coverage. | New page | Template and research. | Medium | Medium | Hub links to relevant guides. |
| P6-002 | Add Jeep Wrangler hub. | Expand mainstream offroad coverage. | New page | Template and research. | Medium | Medium | Hub is useful and not generic. |
| P6-003 | Add comparison guides. | Capture broader educational intent. | New pages | Editorial process. | Medium | Medium | Pages compare scenarios without unsafe recommendations. |
| P6-004 | Add Russian `/ru/` content. | Kazakhstan/Russian-speaking audience support. | New pages | Translation process. | Medium | Medium | hreflang and canonicals correct. |


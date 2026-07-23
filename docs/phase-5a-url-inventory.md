# Phase 5A URL Inventory

Audit date: 2026-07-23  
Canonical origin: `https://rigai-offroad.com`

`Indexable` means the page is technically eligible for indexing. It does not mean Google has indexed it.

| URL | Page type | Expected status | Indexable | Canonical target | In sitemap | Internal links | Structured data | Priority | Notes |
| --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| `https://rigai-offroad.com/` | Product homepage | 200 | Yes | Self | Yes | Yes | Organization, WebSite, SoftwareApplication | P1 | Production 200 verified |
| `https://rigai-offroad.com/about` | Company | 200 | Yes | Self | Yes | Yes | None | P3 | Production 200 verified |
| `https://rigai-offroad.com/contact` | Contact | 200 | Yes | Self | Yes | Yes | None | P3 | Production 200 verified |
| `https://rigai-offroad.com/support` | Support | 200 | Yes | Self | Yes | Yes | None | P3 | Production 200 verified |
| `https://rigai-offroad.com/privacy` | Legal | 200 | Yes | Self | Yes | Yes | None | P3 | Production 200 verified |
| `https://rigai-offroad.com/terms` | Legal | 200 | Yes | Self | Yes | Yes | None | P3 | Production 200 verified |
| `https://rigai-offroad.com/affiliate-disclosure` | Legal | 200 | Yes | Self | Yes | Yes | None | P3 | Production 200 verified |
| `https://rigai-offroad.com/vehicles/toyota-4runner` | Vehicle hub | 200 | Yes | Self | Yes | Yes | WebPage, BreadcrumbList | P1 | Redeploy canonical redirects before submission |
| `https://rigai-offroad.com/vehicles/toyota-4runner/suspension` | Guide | 200 | Yes | Self | Yes | Yes | Article, BreadcrumbList | P1 | Redeploy canonical redirects before submission |
| `https://rigai-offroad.com/vehicles/toyota-4runner/first-upgrades` | Guide | 200 | Yes | Self | Yes | Yes | Article, BreadcrumbList | P1 | Redeploy canonical redirects before submission |
| `https://rigai-offroad.com/vehicles/toyota-4runner/kdss` | Guide | 200 | Yes | Self | Yes | Yes | Article, BreadcrumbList | P2 | Redeploy canonical redirects before submission |
| `https://rigai-offroad.com/vehicles/toyota-4runner/lift-kit` | Guide | 200 | Yes | Self | Yes | Yes | Article, BreadcrumbList | P2 | Redeploy canonical redirects before submission |
| `https://rigai-offroad.com/vehicles/toyota-4runner/tire-size` | Guide | 200 | Yes | Self | Yes | Yes | Article, BreadcrumbList | P2 | Redeploy canonical redirects before submission |
| `https://rigai-offroad.com/vehicles/toyota-4runner/overland-build` | Guide | 200 | Yes | Self | Yes | Yes | Article, BreadcrumbList | P2 | Redeploy canonical redirects before submission |

## Non-Indexable Routes

| URL | Expected status | Robots | In sitemap | Purpose |
| --- | ---: | --- | --- | --- |
| `https://rigai-offroad.com/design-system` | 200 | `noindex, follow` | No | Internal visual reference |
| `https://rigai-offroad.com/404.html` | 301 to `/404`, then 200 | `noindex, follow` | No | Direct technical fallback; unknown URLs return a true 404 |
| `https://rigai-offroad.com/404` | 200 | `noindex, follow` | No | Cloudflare canonical form of the fallback file |
| `https://rigai-offroad.com/this-page-does-not-exist` | 404 | N/A | No | True unknown-route behavior |

## Production Observation

The live deployment contains all 14 sitemap URLs and each returns rendered HTML. Before the Phase 5A redeploy, trailing-slash variants remain accessible with 200 and vehicle clean URLs rely on Cloudflare directory normalization. The new build adds explicit permanent canonical redirects and flat compatibility outputs.

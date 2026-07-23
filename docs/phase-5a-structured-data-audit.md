# Phase 5A Structured Data Audit

Audit date: 2026-07-23. The local build and current production JSON-LD parse successfully. No Rich Results Test result is claimed; that remains a manual Google check.

| URL | Schema types | JSON valid | Required fields | URL consistency | Image exists | Warnings | Errors | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Organization, WebSite, SoftwareApplication | Yes | Present | Production HTTPS | Yes | SoftwareApplication is descriptive only; no ratings/offers | None | PASS |
| `/vehicles/toyota-4runner` | WebPage, BreadcrumbList, Organization, WebSite | Yes | Present | Production HTTPS | Yes | None | None | PASS |
| `/vehicles/toyota-4runner/suspension` | Article, BreadcrumbList, Organization, WebSite | Yes | Present | Production HTTPS | Yes | Manual Rich Results Test required | None | PASS |
| `/vehicles/toyota-4runner/first-upgrades` | Article, BreadcrumbList, Organization, WebSite | Yes | Present | Production HTTPS | Yes | Manual Rich Results Test required | None | PASS |
| `/vehicles/toyota-4runner/kdss` | Article, BreadcrumbList, Organization, WebSite | Yes | Present | Production HTTPS | Yes | Manual Rich Results Test required | None | PASS |
| `/vehicles/toyota-4runner/lift-kit` | Article, BreadcrumbList, Organization, WebSite | Yes | Present | Production HTTPS | Yes | Manual Rich Results Test required | None | PASS |
| `/vehicles/toyota-4runner/tire-size` | Article, BreadcrumbList, Organization, WebSite | Yes | Present | Production HTTPS | Yes | Manual Rich Results Test required | None | PASS |
| `/vehicles/toyota-4runner/overland-build` | Article, BreadcrumbList, Organization, WebSite | Yes | Present | Production HTTPS | Yes | Manual Rich Results Test required | None | PASS |

## Checks Performed

- Each JSON-LD block parses as JSON.
- Article/WebPage URL, `mainEntityOfPage`, publisher, dates, image, and breadcrumbs use the production origin.
- The last breadcrumb resolves to the current page.
- Breadcrumb targets correspond to published routes.
- The shared social image returns 200 and has the declared dimensions.
- No Product, Offer, aggregateRating, review, HowTo, or FAQPage claims are present.
- No fake person author is used; the publisher and author are identified as RigAI organizations.

Legal, support, contact, and about pages intentionally have no JSON-LD. Their absence is not an error.

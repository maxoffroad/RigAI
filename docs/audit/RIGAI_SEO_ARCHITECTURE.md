# RigAI SEO Architecture

## Recommended Site Structure

Keep the existing product and legal pages, then add SEO sections in controlled phases.

```text
/
/how-it-works
/vehicles
/guides
/build-examples
/about
/download
/privacy
/terms
/support
/affiliate-disclosure
```

## URL Taxonomy

### Vehicle Hubs

```text
/vehicles/{vehicle-slug}
```

Examples:

```text
/vehicles/toyota-4runner
/vehicles/toyota-land-cruiser-prado
/vehicles/toyota-land-cruiser-200
/vehicles/lexus-gx460
/vehicles/jeep-wrangler
/vehicles/ford-bronco
```

### Vehicle Topic Pages

```text
/vehicles/{vehicle-slug}/{topic}
```

Toyota 4Runner first cluster:

```text
/vehicles/toyota-4runner/suspension
/vehicles/toyota-4runner/lift-kit
/vehicles/toyota-4runner/tire-size
/vehicles/toyota-4runner/kdss
/vehicles/toyota-4runner/first-upgrades
/vehicles/toyota-4runner/overland-build
```

### General Guides

```text
/guides/{guide-slug}
```

Examples:

```text
/guides/offroad-upgrades-for-beginners
/guides/what-to-upgrade-first
/guides/recovery-gear-for-beginners
/guides/all-terrain-tires-vs-mud-terrain
```

### Build Examples

```text
/build-examples/{scenario-slug}
```

Examples:

```text
/build-examples/beginner-weekend-trail-suv
/build-examples/daily-driver-overland-suv
```

## Language Strategy

Recommended strategy:

```text
English: /...
Russian: /ru/...
```

Reasons:

- English is the primary international market and should remain at the root.
- Russian pages can target Kazakhstan and Russian-speaking users without diluting English SEO.
- Separate URLs allow clean hreflang:

```html
<link rel="alternate" hreflang="en" href="https://rigai-offroad.com/vehicles/toyota-4runner" />
<link rel="alternate" hreflang="ru" href="https://rigai-offroad.com/ru/vehicles/toyota-4runner" />
<link rel="alternate" hreflang="x-default" href="https://rigai-offroad.com/vehicles/toyota-4runner" />
```

Avoid placing full English and Russian versions on the same URL for SEO pages.

## Vehicle Hubs

Each vehicle hub should include:

- Who this vehicle page is for.
- Common beginner upgrade paths.
- Key fitment warnings.
- Links to topic pages.
- Links to app CTA.
- Informational disclaimer.
- Amazon affiliate disclosure near any search links.

Toyota 4Runner should be the first hub because it aligns with existing search examples and offroad demand.

## Content Clusters

Recommended Toyota 4Runner cluster:

- Hub: `/vehicles/toyota-4runner`
- First upgrades: `/vehicles/toyota-4runner/first-upgrades`
- Suspension: `/vehicles/toyota-4runner/suspension`
- Lift kit: `/vehicles/toyota-4runner/lift-kit`
- Tire size: `/vehicles/toyota-4runner/tire-size`
- KDSS: `/vehicles/toyota-4runner/kdss`
- Overland build: `/vehicles/toyota-4runner/overland-build`

Internal linking pattern:

- Hub links to every cluster page.
- Each cluster page links back to hub.
- Cluster pages link laterally to related pages.
- General guides link to vehicle hubs when relevant.
- Build examples link to both hub and app CTA.

## Breadcrumbs

Use breadcrumbs for all SEO pages:

```text
Home > Vehicles > Toyota 4Runner > Suspension
```

Add BreadcrumbList JSON-LD when pages are created.

## Canonical Rules

- Use no-trailing-slash canonical URLs for clean pages:
  - `https://rigai-offroad.com/privacy`
  - `https://rigai-offroad.com/vehicles/toyota-4runner`
- Avoid indexing `.html` duplicates if direct `.html` routes remain accessible.
- Avoid query parameters in canonical URLs.

## Hreflang Rules

- Use hreflang only when both English and Russian equivalents exist.
- Root English page points to `/ru/...` equivalent.
- Russian page points back to English equivalent.
- Include `x-default` pointing to English root/default.

## Sitemap Strategy

Start with static `sitemap.xml` for current pages. Once SEO content grows, generate sitemap during build.

Include:

- Canonical clean URLs.
- `lastmod` only if it can be maintained honestly.
- Separate Russian URLs when created.

Do not include:

- `.html` duplicates.
- Asset files.
- Redirect/fallback URLs.

## Schema Strategy

Home page:

- Organization
- WebSite
- SoftwareApplication or MobileApplication

Vehicle hubs:

- BreadcrumbList
- WebPage
- FAQPage only when real FAQ content exists.

Guides:

- Article
- BreadcrumbList
- FAQPage only when appropriate and visible on page.

Affiliate pages:

- WebPage only; avoid misleading Product schema unless actual product reviews are present.

## Rules for New Pages

Every new SEO page should have:

- One primary intent.
- One H1.
- Unique title and meta description.
- Canonical clean URL.
- Internal links to related pages.
- Fitment verification disclaimer when discussing parts.
- Amazon affiliate disclosure when search links are shown.
- No unsupported stores.
- No guaranteed fitment claims.
- No invented specifications.
- No mass-generated generic copy.

## Duplicate Prevention

- Do not create near-identical pages for every vehicle/category combination.
- Build hub pages first, then only create topic pages where search intent and available useful content justify it.
- Keep Russian translations on `/ru/` equivalents rather than mixing full translations into English pages.
- Use canonical URLs consistently.


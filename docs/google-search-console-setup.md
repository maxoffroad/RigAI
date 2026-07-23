# Google Search Console Setup

This is a manual procedure. Do not add a placeholder verification token to the repository.

## Property Setup

1. Open Google Search Console and choose **Add property**.
2. Select **Domain** and enter `rigai-offroad.com`.
3. Copy the exact DNS TXT value supplied by Google.
4. Add that TXT record in the authoritative DNS dashboard.
5. Wait for DNS propagation, then click **Verify** in Search Console.
6. Keep the TXT record after verification.

Use the Domain property so both protocol and host variants are covered. The live `www` hostname currently returns 404; either redirect it to the apex in Cloudflare or leave it unused and unlinked.

## Sitemap Submission

1. Deploy the Phase 5A build from `dist`.
2. Run `npm run verify:production-seo` and resolve every critical failure.
3. In **Sitemaps**, submit `https://rigai-offroad.com/sitemap.xml`.
4. Confirm Search Console reports the sitemap as fetched successfully.
5. Record the submitted date and discovered URL count. The expected initial count is 14.

## URL Inspection Order

Inspect the live URL, test it live, and request indexing only after the live test passes:

1. `https://rigai-offroad.com/`
2. `https://rigai-offroad.com/vehicles/toyota-4runner`
3. `https://rigai-offroad.com/vehicles/toyota-4runner/suspension`
4. `https://rigai-offroad.com/vehicles/toyota-4runner/first-upgrades`
5. `https://rigai-offroad.com/vehicles/toyota-4runner/kdss`
6. `https://rigai-offroad.com/vehicles/toyota-4runner/lift-kit`
7. `https://rigai-offroad.com/vehicles/toyota-4runner/tire-size`
8. `https://rigai-offroad.com/vehicles/toyota-4runner/overland-build`

Do not treat **Request indexing** as proof of indexing.

## Rich Results Checks

1. Test the homepage and each Toyota 4Runner URL in Google Rich Results Test.
2. Confirm the fetched URL and canonical are the clean production URL.
3. Record valid types, warnings, errors, test date, and screenshot or exported result.
4. Treat unsupported result types as informational; JSON-LD validity does not guarantee a rich result.

## Reports to Monitor

- **Pages**: indexed, crawled currently not indexed, discovered currently not indexed, duplicate/canonical issues, and not found.
- **Sitemaps**: fetch status and discovered URL count.
- **Performance**: impressions, clicks, CTR, average position, queries, pages, countries, and devices.
- **Core Web Vitals**: mobile and desktop URL groups after field data becomes available.
- **Manual actions** and **Security issues**: confirm both remain clear.

Review weekly for the first eight weeks, then monthly once coverage stabilizes.

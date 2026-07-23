# Phase 5A Monitoring Baseline

Baseline date: 2026-07-23. Search Console performance and indexing figures are intentionally blank until measured in the verified property.

| Signal | Baseline | Expected after deployment | Review cadence |
| --- | --- | --- | --- |
| Production homepage | 200 | 200 | Each deploy |
| Unknown route | 404 | 404 | Each deploy |
| Sitemap fetch | 200, valid XML, 14 URLs | 200, 14 canonical URLs | Each deploy and weekly |
| Published 4Runner routes | 7/7 accessible | 7/7 direct clean 200 | Each deploy |
| Accidental noindex | None found | None | Each deploy |
| Broken critical assets | None found | None | Each deploy |
| Orphan 4Runner pages | None found | None | Each content release |
| Trailing-slash duplicates | Present on current production | Permanent redirect to no-slash | Verify after Phase 5A deploy |
| Vehicle `.html` compatibility | 404 on current production | Permanent redirect to clean route | Verify after Phase 5A deploy |
| `www` hostname | 404 | Manual decision: redirect to apex or keep unused | One-time |
| Search Console indexed URLs | Not yet verified | Record from Pages report | Weekly for 8 weeks |
| Search impressions/clicks | Not yet measured | Record by page and query | Weekly for 8 weeks |
| Core Web Vitals field data | Not yet available | Record mobile and desktop groups | Monthly |

## Release Monitoring

Run:

```bash
npm run build
npm run validate
npm run verify:production-seo
```

Record deployment ID, commit, timestamp, file count, script result, sitemap URL count, and any WARN/FAIL output. A local pass does not replace the post-deployment production run.

## Alert Conditions

- Homepage, sitemap, robots, or any Priority 1 URL is not 200.
- Unknown URLs stop returning a true 404.
- Sitemap count changes unexpectedly.
- A sitemap URL redirects, contains `noindex`, or has a mismatched canonical.
- CSS, JavaScript, favicon, social image, or hero image fails.
- Search Console reports blocked, duplicate, server error, soft 404, manual action, or security issue.

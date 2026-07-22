# RigAI Current Routes

Local verification command used a local preview server from `dist`.

| URL | Source file | Page type | Language | Indexable | Title | H1 | Canonical | Status | Problems |
|---|---|---|---|---|---|---|---|---|---|
| `/` | `index.html` | Home / product landing | en | Yes, by default | RigAI - AI Offroad Upgrade Planner | AI offroad upgrade planner for your SUV | `https://rigai-offroad.com/` | 200 | No Twitter Card, no schema, no OG image, no real Google Play URL. |
| `/privacy` | `public/privacy.html`, `dist/privacy/index.html` | Legal | en + ru sections | Yes, by default | Privacy Policy - RigAI | Privacy Policy; Russian H1 also present | `https://rigai-offroad.com/privacy` | 200 | Mixed languages on same URL; two H1s; no hreflang. |
| `/privacy/` | `dist/privacy/index.html` | Legal | en + ru sections | Yes, by default | Privacy Policy - RigAI | Privacy Policy; Russian H1 also present | `https://rigai-offroad.com/privacy` | 200 | Trailing slash works locally; canonical points to no-slash URL. |
| `/terms` | `public/terms.html`, `dist/terms/index.html` | Legal | en + ru sections | Yes, by default | Terms of Service - RigAI | Terms of Service; Russian H1 also present | `https://rigai-offroad.com/terms` | 200 | Mixed languages on same URL; two H1s; no hreflang. |
| `/terms/` | `dist/terms/index.html` | Legal | en + ru sections | Yes, by default | Terms of Service - RigAI | Terms of Service; Russian H1 also present | `https://rigai-offroad.com/terms` | 200 | Trailing slash works locally; canonical points to no-slash URL. |
| `/affiliate-disclosure` | `public/affiliate-disclosure.html`, `dist/affiliate-disclosure/index.html` | Legal | en + ru sections | Yes, by default | Affiliate Disclosure - RigAI | Affiliate Disclosure; Russian H1 also present | `https://rigai-offroad.com/affiliate-disclosure` | 200 | Mixed languages on same URL; two H1s; no hreflang. |
| `/affiliate-disclosure/` | `dist/affiliate-disclosure/index.html` | Legal | en + ru sections | Yes, by default | Affiliate Disclosure - RigAI | Affiliate Disclosure; Russian H1 also present | `https://rigai-offroad.com/affiliate-disclosure` | 200 | Trailing slash works locally; canonical points to no-slash URL. |
| `/contact` | `public/contact.html`, `dist/contact/index.html` | Contact | en | Yes, by default | Contact - RigAI | Contact RigAI | `https://rigai-offroad.com/contact` | 200 | Thin page, acceptable for support/contact. |
| `/contact/` | `dist/contact/index.html` | Contact | en | Yes, by default | Contact - RigAI | Contact RigAI | `https://rigai-offroad.com/contact` | 200 | Trailing slash works locally; canonical points to no-slash URL. |
| `/support` | `public/support.html`, `dist/support/index.html` | Support | en | Yes, by default | Support - RigAI | RigAI Support | `https://rigai-offroad.com/support` | 200 | Thin page; should expand with FAQ when app is live. |
| `/support/` | `dist/support/index.html` | Support | en | Yes, by default | Support - RigAI | RigAI Support | `https://rigai-offroad.com/support` | 200 | Trailing slash works locally; canonical points to no-slash URL. |
| `/about` | `public/about.html`, `dist/about/index.html` | About | en | Yes, by default | About - RigAI | Offroad upgrade planning for beginners | `https://rigai-offroad.com/about` | 200 | Thin page; useful but not a primary SEO target. |
| `/about/` | `dist/about/index.html` | About | en | Yes, by default | About - RigAI | Offroad upgrade planning for beginners | `https://rigai-offroad.com/about` | 200 | Trailing slash works locally; canonical points to no-slash URL. |
| `/robots.txt` | Missing | SEO infrastructure | n/a | n/a | n/a | n/a | n/a | 404 | Add file. |
| `/sitemap.xml` | Missing | SEO infrastructure | n/a | n/a | n/a | n/a | n/a | 404 | Add file. |

Notes:

- Direct `.html` files also exist in `dist`, but visible nav/footer links use clean URLs.
- `_redirects` is empty, so Cloudflare should serve real folder routes directly.
- Production Cloudflare behavior is unable to verify locally.


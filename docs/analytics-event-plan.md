# RigAI Analytics Event Plan

RigAI uses GA4 only when `GA4_MEASUREMENT_ID` is present at build time. Event parameters are stable taxonomy values. They must never contain email, phone, VIN, user-entered text, budget values, full destination URLs, affiliate IDs, or sensitive app data.

| Event name | Trigger | Parameters | Key event | Pages | Privacy risk | Validation method |
|---|---|---|---|---|---|---|
| `build_setup_click` | A visible Build My Setup or article app-availability control is clicked | `cta_location`, `page_type`, `vehicle_slug` when relevant | Recommended | Home and vehicle guides | Low; stable page and vehicle taxonomy only | Build validator checks attributes; delegated synthetic click test requires exactly one event |
| `example_build_click` | See an Example Build is clicked | `cta_location`, `page_type`, `page_path` | No | Home | Low | Build validator checks event and attributes |
| `vehicle_guide_click` | A published vehicle card or vehicle-hub return link is clicked | `vehicle_slug`, `cta_location`, `page_path` | No | Home, vehicles directory, vehicle guides | Low | Build validator checks published card markup and stable locations |
| `guide_click` | Published guide card, contextual guide link, featured guide, or related guide is clicked | `guide_slug`, `vehicle_slug`, `link_location`, `page_path` | No | Home, vehicle hub, articles | Low | Build validator checks guide attributes on generated pages |
| `app_store_click` | A real official app-store link is clicked | `store`, `cta_location`, `page_path` | Recommended when available | Not currently applicable | Low | Validator requires this event on any Google Play URL |
| `affiliate_click` | A real outbound affiliate product or search link is clicked | `merchant`, `product_category`, `page_path`, `link_location` | No | Not currently applicable | Low if taxonomy-only; high if URL/query data leaks | Validator requires this event on Amazon URLs and forbids URL/affiliate-ID parameters |
| `faq_open` | An FAQ item is opened for the first time during the page view | `faq_id`, `page_path` | No | Home and article FAQ sections | Low | Stable IDs in markup; helper uses a `WeakSet` to prevent repeats |
| `outbound_link_click` | A significant non-affiliate external source link is clicked | `destination_domain`, `link_location`, `page_path` | No | Vehicle guides | Low; hostname only | Build validator checks source-link instrumentation |

## Funnel

The basic acquisition-to-intent funnel is:

1. Automatic `page_view`
2. `vehicle_guide_click` or `guide_click`
3. Article `build_setup_click`
4. Future `app_store_click` when an official store URL exists

`build_setup_click` measures interest in starting a RigAI plan. It must not be interpreted as an app install while the website still points to the Coming Soon section.

## Event Rules

- Event names use lowercase snake case.
- One interactive element has no more than one analytics event.
- App-store and affiliate clicks are not duplicated as generic outbound clicks.
- The helper never reads anchor text, form values, query strings, hashes, or destination query parameters.
- `page_path` contains only `window.location.pathname`.
- Static Coming Soon controls and planned cards are not instrumented.
- Legal footer links and language labels are not instrumented.

## Key Events

After GA4 receives them, mark these manually as key events:

- `build_setup_click`
- `app_store_click` after a real app-store link is published

Do not mark `page_view`, `guide_click`, `example_build_click`, `faq_open`, or `outbound_link_click` as key events.

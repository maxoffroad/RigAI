import { site } from "./site-config.js";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function absoluteUrl(route) {
  return `${site.domain}${route === "/" ? "/" : route}`;
}

function renderLinks(links) {
  return links.map((link) => `<a href="${link.href}">${escapeHtml(link.label)}</a>`).join("\n        ");
}

function renderHeader(page) {
  const isHome = page.headerVariant === "home";
  const classes = isHome ? "site-header" : "site-header compact";
  const dataHeader = isHome ? " data-header" : "";
  const navId = `nav-${page.key}`;
  const ctaHref = isHome ? "#download" : "/";
  const ctaLabel = isHome ? "Build My Setup" : "Home";
  const ctaAnalytics = isHome
    ? ' data-analytics-event="build_setup_click" data-analytics-location="header" data-destination-type="internal_section"'
    : "";

  return `<header class="${classes}"${dataHeader}>
      <a class="brand" href="/">
        <span class="brand-word">Rig<span>AI</span></span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="${navId}" data-nav-toggle>
        <span class="nav-toggle-line" aria-hidden="true"></span>
        <span class="nav-toggle-line" aria-hidden="true"></span>
        <span class="nav-toggle-line" aria-hidden="true"></span>
        <span class="sr-only">Menu</span>
      </button>
      <nav class="nav" id="${navId}" aria-label="Main navigation" data-nav>
        ${renderLinks(page.nav)}
      </nav>
      <a class="header-cta" href="${ctaHref}"${ctaAnalytics}>${ctaLabel}</a>
    </header>`;
}

function analyticsPageType(page) {
  if (page.route === "/") return "home";
  if (page.structuredData === "vehicleHub") return "vehicle_hub";
  if (page.structuredData === "article") return "article";
  if (["privacy", "terms", "affiliate-disclosure"].includes(page.key)) return "legal";
  if (page.key === "not-found") return "error";
  return "support";
}

function renderGoogleTag(analytics) {
  if (!analytics?.enabled) return "";

  const measurementId = analytics.ga4MeasurementId;
  const debugConfig = analytics.debug ? "\n        debug_mode: true," : "";

  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      var rigaiSavedConsent = null;
      try {
        var rigaiStoredConsent = window.localStorage.getItem('rigai_analytics_consent');
        if (rigaiStoredConsent === 'granted' || rigaiStoredConsent === 'denied') {
          rigaiSavedConsent = rigaiStoredConsent;
        }
      } catch (error) {
        rigaiSavedConsent = null;
      }
      window.__RIGAI_ANALYTICS__ = {
        enabled: true,
        listenersBound: false,
        consent: rigaiSavedConsent || 'denied',
        savedChoice: rigaiSavedConsent,
        pageViewSent: false,
        storageKey: 'rigai_analytics_consent'
      };
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
      if (rigaiSavedConsent === 'granted') {
        gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      }
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        send_page_view: false,${debugConfig}
      });
      if (rigaiSavedConsent === 'granted') {
        gtag('event', 'page_view', {
          page_path: window.location.pathname
        });
        window.__RIGAI_ANALYTICS__.pageViewSent = true;
      }
    </script>`;
}

function renderConsentUi(analytics) {
  if (!analytics?.enabled) return "";

  return `<section class="analytics-consent" data-analytics-consent hidden role="dialog" aria-modal="false" aria-labelledby="analytics-consent-title" aria-describedby="analytics-consent-description">
      <div class="analytics-consent-copy">
        <h2 id="analytics-consent-title">Optional analytics</h2>
        <p id="analytics-consent-description">RigAI uses privacy-focused analytics to understand site usage and improve the product. Analytics is optional. <a href="/privacy">Privacy Policy</a></p>
      </div>
      <div class="analytics-consent-actions">
        <button class="consent-button consent-button-primary" type="button" data-consent-choice="granted">Accept analytics</button>
        <button class="consent-button consent-button-secondary" type="button" data-consent-choice="denied">Reject</button>
      </div>
    </section>`;
}

function renderFooter(page, analytics) {
  const currentYear = new Date().getFullYear();
  const analyticsSettings = analytics?.enabled
    ? '\n          <button class="analytics-settings" type="button" data-analytics-settings>Analytics settings</button>'
    : "";
  const consentUi = renderConsentUi(analytics);

  return `<footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <a class="brand" href="/">
            <span class="brand-word">Rig<span>AI</span></span>
          </a>
          <p>Personalized off-road build planning for SUV owners. The right upgrades in the right order.</p>
        </div>
        <nav class="footer-column" aria-label="Product links">
          <h2>Product</h2>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#vehicles">Vehicles</a>
          <a href="/#guides">Guides</a>
          <a href="/about">About</a>
        </nav>
        <nav class="footer-column" aria-label="Support links">
          <h2>Support</h2>
          <a href="/support">Support</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
        <nav class="footer-column" aria-label="Legal links">
          <h2>Legal</h2>
          <a href="/affiliate-disclosure">Affiliate Disclosure</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>© ${currentYear} RigAI. For informational purposes only.</p>
        <div class="footer-bottom-actions">
          <p>Not professional mechanical advice.</p>${analyticsSettings}
          <span class="language-label" aria-label="English content">EN</span>
          <span class="language-label is-muted" aria-label="Russian legal translations available on legal pages">RU</span>
        </div>
      </div>
    </footer>${consentUi ? `\n    ${consentUi}` : ""}`;
}

function breadcrumbSchema(page) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(page.route)}#breadcrumb`,
    itemListElement: page.content.breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.domain}${item.href || page.route}`
    }))
  };
}

function renderStructuredData(page) {
  if (page.structuredData === "vehicleHub" || page.structuredData === "article") {
    const canonical = absoluteUrl(page.route);
    const graph = [
      {
        "@type": page.structuredData === "article" ? "Article" : "WebPage",
        "@id": `${canonical}#primary`,
        url: canonical,
        headline: page.content.h1,
        name: page.content.h1,
        description: page.description,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical
        },
        inLanguage: "en",
        isPartOf: {
          "@id": `${site.domain}/#website`
        },
        author: {
          "@type": "Organization",
          name: "RigAI Editorial Team",
          url: `${site.domain}/about`
        },
        publisher: {
          "@id": `${site.domain}/#organization`
        },
        datePublished: page.content.dates.published,
        dateModified: page.content.dates.modified,
        image: `${site.domain}${site.socialImage.path}`,
        breadcrumb: {
          "@id": `${canonical}#breadcrumb`
        }
      },
      breadcrumbSchema(page),
      {
        "@type": "Organization",
        "@id": `${site.domain}/#organization`,
        name: "RigAI",
        url: `${site.domain}/`,
        logo: `${site.domain}/favicon.svg`
      },
      {
        "@type": "WebSite",
        "@id": `${site.domain}/#website`,
        name: "RigAI",
        url: `${site.domain}/`,
        publisher: {
          "@id": `${site.domain}/#organization`
        }
      }
    ];

    return `<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph
    })}</script>`;
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.domain}/#organization`,
        name: "RigAI",
        url: `${site.domain}/`,
        logo: `${site.domain}/favicon.svg`,
        contactPoint: {
          "@type": "ContactPoint",
          email: site.email,
          contactType: "customer support"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${site.domain}/#website`,
        name: "RigAI",
        url: `${site.domain}/`,
        description: site.description,
        publisher: {
          "@id": `${site.domain}/#organization`
        },
        inLanguage: site.defaultLanguage
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.domain}/#app`,
        name: "RigAI",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Android",
        url: `${site.domain}/`,
        description:
          "RigAI is an AI off-road setup assistant that helps SUV beginners plan first upgrades, understand what to skip for now, and verify fitment before purchasing.",
        publisher: {
          "@id": `${site.domain}/#organization`
        }
      }
    ]
  };

  return `<script type="application/ld+json">${JSON.stringify(graph)}</script>`;
}

function renderHead(page, analytics) {
  const canonical = absoluteUrl(page.route);
  const imageUrl = `${site.domain}${site.socialImage.path}`;
  const meta = [
    '<meta charset="UTF-8" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    page.robots ? `<meta name="robots" content="${escapeHtml(page.robots)}" />` : "",
    ...(page.extraHead || []),
    `<meta property="og:title" content="${escapeHtml(page.socialTitle || page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.socialDescription || page.description)}" />`,
    `<meta property="og:type" content="${page.openGraphType || "website"}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${imageUrl}" />`,
    `<meta property="og:image:width" content="${site.socialImage.width}" />`,
    `<meta property="og:image:height" content="${site.socialImage.height}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(site.socialImage.alt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(page.socialTitle || page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.socialDescription || page.description)}" />`,
    `<meta name="twitter:image" content="${imageUrl}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(site.socialImage.alt)}" />`,
    ...(page.structuredData === "article"
      ? [
          `<meta property="article:published_time" content="${page.content.dates.published}" />`,
          `<meta property="article:modified_time" content="${page.content.dates.modified}" />`
        ]
      : []),
    `<link rel="canonical" href="${canonical}" />`,
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml" />',
    `<title>${escapeHtml(page.title)}</title>`,
    '<link rel="preconnect" href="https://fonts.googleapis.com" />',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@600;700&display=swap" rel="stylesheet" />',
    '<link rel="stylesheet" href="/src/styles.css?v=launch-1" />',
    page.structuredData ? renderStructuredData(page) : "",
    renderGoogleTag(analytics)
  ].filter(Boolean);

  return meta.map((item) => `    ${item}`).join("\n");
}

function withMainTarget(mainHtml) {
  let output = mainHtml.replace(/<h1 lang="ru">([\s\S]*?)<\/h1>/g, '<h2 class="legal-translation-title" lang="ru">$1</h2>');

  if (output.includes("<main id=")) {
    return output;
  }

  return output.replace("<main", '<main id="main-content"');
}

export function extractMain(sourceHtml, sourceFile) {
  const match = sourceHtml.match(/<main[\s\S]*?<\/main>/);

  if (!match) {
    throw new Error(`Missing <main> content in ${sourceFile}`);
  }

  return withMainTarget(match[0]);
}

export function renderPage(page, mainHtml, { analytics } = {}) {
  const scripts = [
    '<script type="module" src="/src/main.js?v=phase-5b"></script>',
    ...(page.scripts || [])
  ];
  const uniqueScripts = [...new Set(scripts)].map((script) => `    ${script}`).join("\n");
  const vehicleContext = page.route.startsWith("/vehicles/toyota-4runner")
    ? ' data-vehicle-context="toyota-4runner" data-vehicle-slug="toyota-4runner"'
    : "";

  return `<!doctype html>
<html lang="${page.language || site.defaultLanguage}">
  <head>
${renderHead(page, analytics)}
  </head>
  <body data-page-type="${analyticsPageType(page)}"${vehicleContext}>
    <a class="skip-link" href="#main-content">Skip to main content</a>
    ${renderHeader(page)}

    ${mainHtml}

    ${renderFooter(page, analytics)}
${uniqueScripts ? `\n${uniqueScripts}` : ""}
  </body>
</html>
`;
}

export function renderSitemap(pages) {
  const urls = pages
    .filter((page) => page.includeInSitemap)
    .map((page) => `  <url>\n    <loc>${absoluteUrl(page.route)}</loc>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function renderRobots() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`;
}

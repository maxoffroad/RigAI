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

  return `<header class="${classes}"${dataHeader}>
      <a class="brand" href="/">
        <span class="brand-mark">R</span>
        <span>RigAI</span>
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
    </header>`;
}

function renderFooter(page) {
  return `<footer class="footer">
      <p class="footer-disclosure">As an Amazon Associate, RigAI earns from qualifying purchases.</p>
      <div class="footer-links">
        ${renderLinks(page.footerLinks)}
      </div>
    </footer>`;
}

function renderStructuredData() {
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

function renderHead(page) {
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
    '<meta property="og:type" content="website" />',
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
    `<link rel="canonical" href="${canonical}" />`,
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml" />',
    `<title>${escapeHtml(page.title)}</title>`,
    '<link rel="preconnect" href="https://fonts.googleapis.com" />',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />',
    '<link rel="stylesheet" href="/src/styles.css?v=launch-1" />',
    page.structuredData ? renderStructuredData() : ""
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

export function renderPage(page, mainHtml) {
  const scripts = [
    '<script type="module" src="/src/main.js?v=launch-1"></script>',
    ...(page.scripts || [])
  ];
  const uniqueScripts = [...new Set(scripts)].map((script) => `    ${script}`).join("\n");

  return `<!doctype html>
<html lang="${page.language || site.defaultLanguage}">
  <head>
${renderHead(page)}
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to main content</a>
    ${renderHeader(page)}

    ${mainHtml}

    ${renderFooter(page)}
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

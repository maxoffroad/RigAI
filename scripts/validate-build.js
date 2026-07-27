import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { XMLParser } from "fast-xml-parser";
import { pages, site } from "./site-config.js";
import { inspectBuildOutput } from "./build-contract.js";
import {
  analyticsConfig,
  measurementIdPattern,
  placeholderMeasurementIdPattern
} from "../config/analytics.js";

const root = process.cwd();
const dist = join(root, "dist");
const errors = [];
const articleDateTimePattern =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/;

const buildContract = inspectBuildOutput({ dist, pages });
errors.push(...buildContract.errors);

const pageTemplateSource = readFileSync(join(root, "scripts", "page-template.js"), "utf8");
for (const centralizedDateField of [
  "datePublished: page.content.dates.published",
  "dateModified: page.content.dates.modified"
]) {
  if (!pageTemplateSource.includes(centralizedDateField)) {
    errors.push(
      `Article JSON-LD must use centralized content dates directly: ${centralizedDateField}.`
    );
  }
}

function readBuildFile(relativePath) {
  const filePath = join(dist, relativePath);
  return existsSync(filePath) ? readFileSync(filePath, "utf8") : "";
}

function requireFile(relativePath) {
  if (!existsSync(join(dist, relativePath))) {
    errors.push(`Missing required build file: dist/${relativePath.replaceAll("\\", "/")}`);
  }
}

function requireIncludes(content, expected, label) {
  if (!content.includes(expected)) {
    errors.push(`${label} is missing: ${expected}`);
  }
}

function pageOutputPath(page) {
  if (page.route === "/") return "index.html";
  if (page.output === "404.html") return "404.html";
  return join(page.route.replace(/^\//, ""), "index.html");
}

const requiredFiles = [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "404.html",
  "_headers",
  "_redirects",
  "assets/rigai-og-image.png",
  join("design-system", "index.html"),
  join("privacy", "index.html"),
  join("terms", "index.html"),
  join("affiliate-disclosure", "index.html"),
  join("contact", "index.html"),
  join("support", "index.html"),
  join("about", "index.html"),
  join("vehicles", "toyota-4runner", "index.html"),
  join("vehicles", "toyota-4runner", "suspension", "index.html"),
  join("vehicles", "toyota-4runner", "first-upgrades", "index.html"),
  join("vehicles", "toyota-4runner", "kdss", "index.html"),
  join("vehicles", "toyota-4runner", "lift-kit", "index.html"),
  join("vehicles", "toyota-4runner", "tire-size", "index.html"),
  join("vehicles", "toyota-4runner", "overland-build", "index.html")
];

for (const file of requiredFiles) {
  requireFile(file);
}

const sitemap = readBuildFile("sitemap.xml");
const robots = readBuildFile("robots.txt");
const redirects = readBuildFile("_redirects");
const headers = readBuildFile("_headers");
let sitemapUrls = [];

try {
  const parsedSitemap = new XMLParser().parse(sitemap);
  const sitemapEntries = parsedSitemap?.urlset?.url || [];
  sitemapUrls = (Array.isArray(sitemapEntries) ? sitemapEntries : [sitemapEntries])
    .map((entry) => entry.loc)
    .filter(Boolean);
} catch (error) {
  errors.push(`sitemap.xml is invalid XML: ${error.message}`);
}

if (new Set(sitemapUrls).size !== sitemapUrls.length) {
  errors.push("sitemap.xml contains duplicate URLs.");
}

for (const page of pages.filter((item) => item.includeInSitemap)) {
  const url = `${site.domain}${page.route === "/" ? "/" : page.route}`;
  requireIncludes(sitemap, `<loc>${url}</loc>`, "sitemap.xml");
}

for (const value of [".html", "dist/", "404", "localhost", "example.com"]) {
  if (sitemap.includes(value)) {
    errors.push(`Sitemap contains forbidden value: ${value}`);
  }
}

requireIncludes(robots, `Sitemap: ${site.domain}/sitemap.xml`, "robots.txt");

if (redirects.includes("/* /index.html 200")) {
  errors.push("_redirects contains an SPA fallback rewrite.");
}

const redirectRules = new Map(
  redirects
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [source, destination, status] = line.split(/\s+/);
      return [source, { destination, status }];
    })
);

for (const [source, rule] of redirectRules) {
  if (source === rule.destination) {
    errors.push(`_redirects contains a self-redirect: ${source}`);
  }
  if (!["301", "308"].includes(rule.status)) {
    errors.push(`_redirects rule ${source} must use a permanent redirect.`);
  }
  if (source.includes("*")) {
    errors.push(`_redirects contains an unexpected wildcard rule: ${source}`);
  }
}

for (const page of pages.filter((item) => item.route !== "/" && item.output !== "404.html")) {
  for (const [source, destination] of [
    [`${page.route}/`, page.route],
    [`${page.route}.html`, page.route]
  ]) {
    const rule = redirectRules.get(source);
    if (!rule || rule.destination !== destination) {
      errors.push(`_redirects is missing canonical redirect: ${source} -> ${destination}`);
    }
  }
}

if (redirectRules.get("/index.html")?.destination !== "/") {
  errors.push("_redirects is missing canonical redirect: /index.html -> /");
}

for (const expectedHeader of [
  "X-Content-Type-Options: nosniff",
  "Referrer-Policy: strict-origin-when-cross-origin",
  "Permissions-Policy: camera=(), microphone=(), geolocation=()",
  "X-Frame-Options: SAMEORIGIN",
  "Cache-Control: public, max-age=86400"
]) {
  requireIncludes(headers, expectedHeader, "_headers");
}

const imagePath = join(dist, "assets", "rigai-og-image.png");
if (existsSync(imagePath)) {
  const image = readFileSync(imagePath);
  const pngSignature = "89504e470d0a1a0a";
  const signature = image.subarray(0, 8).toString("hex");
  const width = image.readUInt32BE(16);
  const height = image.readUInt32BE(20);

  if (signature !== pngSignature) {
    errors.push("OG image is not a valid PNG file.");
  }

  if (width !== site.socialImage.width || height !== site.socialImage.height) {
    errors.push(`OG image dimensions are ${width}x${height}, expected ${site.socialImage.width}x${site.socialImage.height}.`);
  }
}

const allTitles = new Map();
const allDescriptions = new Map();

for (const page of pages) {
  const outputPath = pageOutputPath(page);
  const html = readBuildFile(outputPath);
  const canonical = `${site.domain}${page.route === "/" ? "/" : page.route}`;
  const imageUrl = `${site.domain}${site.socialImage.path}`;
  const label = `dist/${outputPath.replaceAll("\\", "/")}`;

  requireIncludes(html, `<title>${page.title}</title>`, label);
  requireIncludes(html, `<meta name="description" content="${page.description}" />`, label);
  requireIncludes(html, `<link rel="canonical" href="${canonical}" />`, label);
  requireIncludes(html, `<meta property="og:url" content="${canonical}" />`, label);
  requireIncludes(html, `<meta property="og:image" content="${imageUrl}" />`, label);
  requireIncludes(html, '<meta name="twitter:card" content="summary_large_image" />', label);
  requireIncludes(html, `<meta name="twitter:image" content="${imageUrl}" />`, label);
  requireIncludes(html, '<a class="skip-link" href="#main-content">Skip to main content</a>', label);
  requireIncludes(html, '<main id="main-content"', label);
  requireIncludes(html, '<header class="site-header', label);
  requireIncludes(html, '<footer class="footer">', label);
  requireIncludes(html, '<meta name="viewport" content="width=device-width, initial-scale=1.0" />', label);
  requireIncludes(html, '<link rel="stylesheet" href="/src/styles.css?v=launch-1" />', label);
  requireIncludes(html, 'class="nav-toggle"', label);
  requireIncludes(html, 'aria-expanded="false"', label);
  requireIncludes(html, 'data-nav-toggle', label);
  requireIncludes(html, '<script type="module" src="/src/main.js?v=phase-5b"></script>', label);

  if (canonical !== `${site.domain}/` && canonical.endsWith("/")) {
    errors.push(`${label} canonical has an unexpected trailing slash.`);
  }

  if (canonical.includes(".html")) {
    errors.push(`${label} canonical contains .html.`);
  }

  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) {
    errors.push(`${label} has ${h1Count} H1 elements, expected 1.`);
  }

  if (html.includes("localhost") || html.includes("example.com")) {
    errors.push(`${label} contains localhost or example.com.`);
  }

  if (html.includes('href="#"')) {
    errors.push(`${label} contains placeholder href="#".`);
  }

  if (page.includeInSitemap && /\bnoindex\b/i.test(html)) {
    errors.push(`${label} is indexable but contains noindex.`);
  }

  if (!page.includeInSitemap && !/\bnoindex\b/i.test(html)) {
    errors.push(`${label} is excluded from sitemap but is missing noindex.`);
  }

  if (page.includeInSitemap) {
    const titleOwner = allTitles.get(page.title);
    if (titleOwner) {
      errors.push(`${label} duplicates the title used by ${titleOwner}.`);
    } else {
      allTitles.set(page.title, label);
    }

    const descriptionOwner = allDescriptions.get(page.description);
    if (descriptionOwner) {
      errors.push(`${label} duplicates the description used by ${descriptionOwner}.`);
    } else {
      allDescriptions.set(page.description, label);
    }
  }
}

for (const url of sitemapUrls) {
  const route = new URL(url).pathname;
  const page = pages.find((item) => item.route === route && item.includeInSitemap);
  if (!page || !existsSync(join(dist, pageOutputPath(page)))) {
    errors.push(`sitemap.xml URL has no indexable build output: ${url}`);
  }
}

const designSystemHtml = readBuildFile(join("design-system", "index.html"));
requireIncludes(designSystemHtml, '<meta name="robots" content="noindex, follow" />', "dist/design-system/index.html");
requireIncludes(designSystemHtml, '<h1>RigAI Design System</h1>', "dist/design-system/index.html");

if (sitemap.includes(`${site.domain}/design-system`)) {
  errors.push("Design system route must not be included in sitemap.xml.");
}

const stylesheet = readBuildFile(join("src", "styles.css"));
for (const token of [
  "--color-bg-primary",
  "--color-brand-primary",
  "--color-text-primary",
  "--space-",
  "--radius-",
  "--font-size-"
]) {
  if (!stylesheet.includes(token)) {
    errors.push(`Stylesheet is missing design token: ${token}`);
  }
}

for (const className of [".button", ".card", ".badge", ".form-field", ".table", ".callout", ".breadcrumb", ".nav-toggle"]) {
  if (!stylesheet.includes(className)) {
    errors.push(`Stylesheet is missing component class: ${className}`);
  }
}

const homeHtml = readBuildFile("index.html");
const requiredHomeSections = [
  "home-hero",
  "home-trust-strip",
  "home-problem",
  "how-it-works",
  "example-build",
  "home-categories",
  "home-recommendation",
  "home-app-preview",
  "vehicles",
  "guides",
  "home-trust-safety",
  "faq",
  "download"
];

const figmaSectionById = {
  "home-hero": "home-hero",
  "home-trust-strip": "home-trust-strip",
  "home-problem": "home-problem",
  "how-it-works": "home-how-it-works",
  "example-build": "home-build-result",
  "home-categories": "home-categories",
  "home-recommendation": "home-recommendation",
  "home-app-preview": "home-app-preview",
  vehicles: "home-vehicles",
  guides: "home-guides",
  "home-trust-safety": "home-trust-safety",
  faq: "home-faq",
  download: "home-final-cta"
};

for (const id of requiredHomeSections) {
  requireIncludes(homeHtml, `id="${id}"`, "dist/index.html");
  requireIncludes(homeHtml, `data-figma-section="${figmaSectionById[id]}"`, "dist/index.html");
}

for (const expected of [
  "Build My Setup",
  "Your SUV.",
  "The right build.",
  "Toyota 4Runner",
  "Lexus GX",
  "Jeep Wrangler",
  "Budget-aware recommendations",
  "EXAMPLE RECOMMENDATION",
  "RigAI supports multiple off-road SUV platforms",
  "Your SUV is not listed?",
  "Our first detailed guide collection focuses on Toyota 4Runner",
  "FAQ",
  "Recommendations are informational.",
  "Always verify fitment before purchasing.",
  "Coming soon on Google Play"
]) {
  requireIncludes(homeHtml, expected, "dist/index.html");
}

for (const forbidden of ["/guides/", "href=\"#\"", "Google Play Store", "play.google.com", "© 2024", "localhost", "example.com"]) {
  if (homeHtml.includes(forbidden)) {
    errors.push(`Homepage contains forbidden or unavailable destination: ${forbidden}`);
  }
}

requireIncludes(homeHtml, '<a class="button primary" href="#download" data-analytics-event="build_setup_click" data-analytics-location="hero" data-destination-type="internal_section">Build My Setup</a>', "dist/index.html");
requireIncludes(homeHtml, '<a href="#how-it-works">How It Works</a>', "dist/index.html");
requireIncludes(homeHtml, '<a href="#vehicles">Vehicles</a>', "dist/index.html");
requireIncludes(homeHtml, '<a href="#guides">Guides</a>', "dist/index.html");
requireIncludes(homeHtml, '<a href="/about">About</a>', "dist/index.html");
requireIncludes(homeHtml, '<a class="button secondary" href="#example-build" data-analytics-event="example_build_click" data-analytics-location="hero">See an Example Build</a>', "dist/index.html");
requireIncludes(homeHtml, '<img src="/src/assets/rigai-garage-bg.jpg" width="1200" height="800"', "dist/index.html");
requireIncludes(homeHtml, 'loading="lazy"', "dist/index.html");
requireIncludes(homeHtml, "Example only &mdash; recommendations and estimated costs vary", "dist/index.html");
requireIncludes(homeHtml, "Example output - actual content depends", "dist/index.html");
requireIncludes(homeHtml, "Read guide", "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/toyota-4runner"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/toyota-4runner/suspension"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/toyota-4runner/first-upgrades"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/toyota-4runner/kdss"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/toyota-4runner/lift-kit"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/toyota-4runner/tire-size"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/toyota-4runner/overland-build"', "dist/index.html");

for (const asset of [...homeHtml.matchAll(/<(?:img|source)[^>]+(?:src|srcset)="([^"]+)"/g)]) {
  const assetPath = asset[1].split(" ")[0];
  if (assetPath.startsWith("/") && !assetPath.startsWith("//")) {
    requireFile(assetPath.slice(1));
  }
}

if (homeHtml.includes("Can I save more than one vehicle plan?")) {
  errors.push("Homepage includes the multiple saved plans FAQ without a confirmed feature flag.");
}

const vehicleRoutes = [
  "/vehicles/toyota-4runner",
  "/vehicles/toyota-4runner/suspension",
  "/vehicles/toyota-4runner/first-upgrades",
  "/vehicles/toyota-4runner/kdss",
  "/vehicles/toyota-4runner/lift-kit",
  "/vehicles/toyota-4runner/tire-size",
  "/vehicles/toyota-4runner/overland-build"
];

const futureVehicleRoutes = [];

const expectedPageLinks = {
  "/vehicles/toyota-4runner": [
    "/vehicles/toyota-4runner/suspension",
    "/vehicles/toyota-4runner/first-upgrades",
    "/vehicles/toyota-4runner/kdss",
    "/vehicles/toyota-4runner/lift-kit",
    "/vehicles/toyota-4runner/tire-size",
    "/vehicles/toyota-4runner/overland-build"
  ],
  "/vehicles/toyota-4runner/suspension": [
    "/vehicles/toyota-4runner",
    "/vehicles/toyota-4runner/first-upgrades"
  ],
  "/vehicles/toyota-4runner/first-upgrades": [
    "/vehicles/toyota-4runner",
    "/vehicles/toyota-4runner/suspension"
  ],
  "/vehicles/toyota-4runner/kdss": [
    "/vehicles/toyota-4runner",
    "/vehicles/toyota-4runner/suspension",
    "/vehicles/toyota-4runner/lift-kit",
    "/vehicles/toyota-4runner/first-upgrades"
  ],
  "/vehicles/toyota-4runner/lift-kit": [
    "/vehicles/toyota-4runner",
    "/vehicles/toyota-4runner/suspension",
    "/vehicles/toyota-4runner/kdss",
    "/vehicles/toyota-4runner/tire-size",
    "/vehicles/toyota-4runner/first-upgrades"
  ],
  "/vehicles/toyota-4runner/tire-size": [
    "/vehicles/toyota-4runner",
    "/vehicles/toyota-4runner/first-upgrades",
    "/vehicles/toyota-4runner/lift-kit",
    "/vehicles/toyota-4runner/suspension"
  ],
  "/vehicles/toyota-4runner/overland-build": [
    "/vehicles/toyota-4runner",
    "/vehicles/toyota-4runner/first-upgrades",
    "/vehicles/toyota-4runner/suspension",
    "/vehicles/toyota-4runner/tire-size"
  ]
};

const newVehicleRoutes = new Set([
  "/vehicles/toyota-4runner/kdss",
  "/vehicles/toyota-4runner/lift-kit",
  "/vehicles/toyota-4runner/tire-size",
  "/vehicles/toyota-4runner/overland-build"
]);

const titles = new Map();
const descriptions = new Map();

for (const route of vehicleRoutes) {
  const relativeOutput = join(route.replace(/^\//, ""), "index.html");
  const html = readBuildFile(relativeOutput);
  const label = `dist/${relativeOutput.replaceAll("\\", "/")}`;
  const page = pages.find((item) => item.route === route);

  requireIncludes(html, '<html lang="en">', label);
  requireIncludes(html, '<nav class="breadcrumb article-breadcrumb" aria-label="Breadcrumb">', label);
  requireIncludes(html, '<nav class="article-toc" aria-label="Table of contents">', label);
  requireIncludes(html, 'class="callout vehicle-scope-callout"', label);
  requireIncludes(html, 'class="callout safety-disclaimer"', label);
  requireIncludes(html, "Always verify model year, trim, drivetrain, KDSS status", label);
  requireIncludes(html, 'href="/#download" data-analytics-event="build_setup_click" data-analytics-location="article_cta" data-destination-type="internal_section">Check app availability</a>', label);
  requireIncludes(html, "Editorial and fitment notes", label);
  requireIncludes(html, "RigAI Editorial Team", label);
  requireIncludes(html, `Last reviewed:</strong> ${page.content.dates.reviewedLabel}`, label);
  requireIncludes(html, 'class="related-guides"', label);

  if (/noindex/i.test(html)) {
    errors.push(`${label} must be indexable but contains noindex.`);
  }

  for (const target of expectedPageLinks[route]) {
    requireIncludes(html, `href="${target}"`, label);
  }

  for (const target of futureVehicleRoutes) {
    if (html.includes(`href="${target}"`)) {
      errors.push(`${label} links to unpublished route: ${target}`);
    }
  }

  for (const phrase of [
    "guaranteed fit",
    "fits all",
    "perfect suspension",
    "universally required",
    "safe for every vehicle",
    "perfect lift",
    "kdss always",
    "kdss never",
    "exact size always fits"
  ]) {
    if (html.toLowerCase().includes(phrase)) {
      errors.push(`${label} contains prohibited absolute claim: ${phrase}`);
    }
  }

  const titleOwner = titles.get(page.title);
  if (titleOwner) {
    errors.push(`${label} duplicates the title used by ${titleOwner}.`);
  } else {
    titles.set(page.title, label);
  }

  const descriptionOwner = descriptions.get(page.description);
  if (descriptionOwner) {
    errors.push(`${label} duplicates the description used by ${descriptionOwner}.`);
  } else {
    descriptions.set(page.description, label);
  }

  if (newVehicleRoutes.has(route)) {
    const contextualLinkCount = (html.match(/class="contextual-link"/g) || []).length;
    if (contextualLinkCount < 2 || contextualLinkCount > 4) {
      errors.push(`${label} has ${contextualLinkCount} contextual cluster links, expected 2-4.`);
    }
  }

  for (const asset of [...html.matchAll(/<(?:img|source)[^>]+(?:src|srcset)="([^"]+)"/g)]) {
    const assetPath = asset[1].split(" ")[0];
    if (assetPath.startsWith("/") && !assetPath.startsWith("//")) {
      requireFile(assetPath.slice(1));
    }
  }

  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (scripts.length !== 1) {
    errors.push(`${label} must contain exactly one JSON-LD script.`);
    continue;
  }

  try {
    const data = JSON.parse(scripts[0][1]);
    const graph = data["@graph"] || [];
    const types = new Set(graph.map((item) => item["@type"]));
    const expectedPrimaryType = page.structuredData === "article" ? "Article" : "WebPage";

    for (const type of [expectedPrimaryType, "BreadcrumbList", "Organization", "WebSite"]) {
      if (!types.has(type)) {
        errors.push(`${label} JSON-LD is missing ${type}.`);
      }
    }

    const primary = graph.find((item) => item["@type"] === expectedPrimaryType);
    if (primary) {
      if (primary.datePublished !== page.content.dates.published || primary.dateModified !== page.content.dates.modified) {
        errors.push(`${label} JSON-LD dates do not match centralized page dates.`);
      }

      if (page.structuredData === "article") {
        for (const property of ["datePublished", "dateModified"]) {
          const value = primary[property];
          if (!articleDateTimePattern.test(value) || !Number.isFinite(Date.parse(value))) {
            errors.push(
              `${label} JSON-LD ${property} must be an ISO 8601 DateTime with a timezone.`
            );
          }
        }

        if (
          Number.isFinite(Date.parse(primary.datePublished)) &&
          Number.isFinite(Date.parse(primary.dateModified)) &&
          Date.parse(primary.dateModified) < Date.parse(primary.datePublished)
        ) {
          errors.push(`${label} JSON-LD dateModified must not be earlier than datePublished.`);
        }
      }
    }

    const jsonText = JSON.stringify(data);
    for (const forbiddenType of ["aggregateRating", "\"review\"", "\"Product\"", "\"Offer\"", "\"HowTo\"", "\"FAQPage\""]) {
      if (jsonText.includes(forbiddenType)) {
        errors.push(`${label} JSON-LD contains unsupported data: ${forbiddenType}`);
      }
    }

    if (jsonText.includes("localhost") || jsonText.includes("example.com")) {
      errors.push(`${label} JSON-LD contains a non-production URL.`);
    }

    const breadcrumb = graph.find((item) => item["@type"] === "BreadcrumbList");
    if (!breadcrumb || breadcrumb.itemListElement?.length !== page.content.breadcrumbs.length) {
      errors.push(`${label} JSON-LD breadcrumb count does not match visible breadcrumbs.`);
    } else {
      for (const item of breadcrumb.itemListElement) {
        const breadcrumbRoute = new URL(item.item).pathname;
        if (!pages.some((candidate) => candidate.route === breadcrumbRoute)) {
          errors.push(`${label} JSON-LD breadcrumb links to unknown route: ${item.item}`);
        }
      }
    }
  } catch (error) {
    errors.push(`${label} JSON-LD is invalid JSON: ${error.message}`);
  }
}

for (const route of vehicleRoutes) {
  const url = `${site.domain}${route}`;
  const occurrences = (sitemap.match(new RegExp(`<loc>${url}</loc>`, "g")) || []).length;
  if (occurrences !== 1) {
    errors.push(`sitemap.xml contains ${occurrences} entries for ${url}, expected 1.`);
  }
}

for (const route of futureVehicleRoutes) {
  if (sitemap.includes(route)) {
    errors.push(`sitemap.xml contains unpublished route: ${route}`);
  }
}

const routeToOutput = new Map(pages.map((page) => [page.route, pageOutputPath(page)]));

for (const page of pages) {
  const html = readBuildFile(pageOutputPath(page));
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      /\.(?:css|js|svg|png|jpe?g|webp|xml|txt)(?:\?|$)/i.test(href)
    ) {
      continue;
    }

    const [path, fragment] = href.split("#");
    const targetRoute = path || page.route;
    if (!routeToOutput.has(targetRoute)) {
      errors.push(`dist/${pageOutputPath(page).replaceAll("\\", "/")} links to unknown route: ${href}`);
      continue;
    }

    if (fragment) {
      const targetHtml = readBuildFile(routeToOutput.get(targetRoute));
      if (!targetHtml.includes(`id="${fragment}"`)) {
        errors.push(`Link target ${href} does not exist.`);
      }
    }
  }
}

const analyticsSource = readBuildFile(join("src", "analytics.js"));
const mainScript = readBuildFile(join("src", "main.js"));
const allowedAnalyticsEvents = new Set([
  "build_setup_click",
  "example_build_click",
  "vehicle_guide_click",
  "guide_click",
  "app_store_click",
  "affiliate_click",
  "faq_open",
  "outbound_link_click"
]);
const requiredEventAttributes = {
  build_setup_click: ["data-analytics-location", "data-destination-type"],
  example_build_click: ["data-analytics-location"],
  vehicle_guide_click: ["data-analytics-location", "data-vehicle-slug"],
  guide_click: [
    "data-analytics-location",
    "data-guide-slug",
    "data-vehicle-slug"
  ],
  app_store_click: ["data-analytics-location", "data-store"],
  affiliate_click: [
    "data-analytics-location",
    "data-merchant",
    "data-product-category"
  ],
  faq_open: ["data-faq-id"],
  outbound_link_click: ["data-analytics-location"]
};

requireFile(join("src", "analytics.js"));
requireIncludes(mainScript, 'import "./analytics.js";', "dist/src/main.js");
requireIncludes(
  analyticsSource,
  "windowLike.__RIGAI_ANALYTICS__.listenersBound = true;",
  "dist/src/analytics.js"
);
requireIncludes(
  analyticsSource,
  '!hasAnalyticsConsent(windowLike)',
  "dist/src/analytics.js"
);
requireIncludes(
  analyticsSource,
  'runtime.pageViewSent',
  "dist/src/analytics.js"
);
requireIncludes(
  analyticsSource,
  'windowLike.gtag("consent", "update"',
  "dist/src/analytics.js"
);
requireIncludes(
  analyticsSource,
  'analytics_storage: choice',
  "dist/src/analytics.js"
);

if (/ad_(?:storage|user_data|personalization)\s*:\s*["']granted["']/.test(analyticsSource)) {
  errors.push("Analytics helper must never grant advertising consent.");
}

if ((analyticsSource.match(/documentLike\.addEventListener\("click"/g) || []).length !== 1) {
  errors.push("Analytics helper must bind exactly one delegated click listener.");
}

if (analyticsSource.includes("preventDefault")) {
  errors.push("Analytics helper must not block navigation with preventDefault.");
}

for (const prohibitedParameter of [
  "email",
  "phone",
  "vin",
  "free_text",
  "form_content",
  "budget",
  "user_id",
  "full_url",
  "destination_url",
  "affiliate_id"
]) {
  const parameterPattern = new RegExp(`["']${prohibitedParameter}["']`, "i");
  if (parameterPattern.test(analyticsSource)) {
    errors.push(`Analytics helper contains prohibited parameter: ${prohibitedParameter}.`);
  }
}

if (
  analyticsConfig.ga4MeasurementId &&
  (!measurementIdPattern.test(analyticsConfig.ga4MeasurementId) ||
    placeholderMeasurementIdPattern.test(analyticsConfig.ga4MeasurementId))
) {
  errors.push("GA4 Measurement ID is invalid or a placeholder.");
}

for (const page of pages) {
  const outputPath = pageOutputPath(page);
  const html = readBuildFile(outputPath);
  const label = `dist/${outputPath.replaceAll("\\", "/")}`;
  const googleTagCount = (
    html.match(/googletagmanager\.com\/gtag\/js\?id=/g) || []
  ).length;
  const configCallCount = (html.match(/\bgtag\(['"]config['"]/g) || []).length;

  if (googleTagCount > 1 || configCallCount > 1) {
    errors.push(`${label} includes the Google tag more than once.`);
  }

  if (analyticsConfig.enabled) {
    if (googleTagCount !== 1 || configCallCount !== 1) {
      errors.push(`${label} must include one Google tag and one config call.`);
    }
    requireIncludes(
      html,
      `gtag/js?id=${analyticsConfig.ga4MeasurementId}`,
      label
    );
    requireIncludes(
      html,
      `gtag('config', '${analyticsConfig.ga4MeasurementId}'`,
      label
    );
    requireIncludes(html, "allow_google_signals", label);
    requireIncludes(html, "allow_ad_personalization_signals", label);
    requireIncludes(html, "send_page_view: false", label);
    requireIncludes(html, "analytics_storage: 'denied'", label);
    requireIncludes(html, "ad_storage: 'denied'", label);
    requireIncludes(html, "ad_user_data: 'denied'", label);
    requireIncludes(html, "ad_personalization: 'denied'", label);
    requireIncludes(html, "gtag('consent', 'update'", label);
    requireIncludes(html, "analytics_storage: 'granted'", label);
    requireIncludes(html, "rigai_analytics_consent", label);
    requireIncludes(html, "data-analytics-consent", label);
    requireIncludes(html, 'data-consent-choice="granted"', label);
    requireIncludes(html, 'data-consent-choice="denied"', label);
    requireIncludes(html, "data-analytics-settings", label);
    requireIncludes(html, 'href="/privacy"', label);

    const defaultConsentIndex = html.indexOf("gtag('consent', 'default'");
    const configIndex = html.indexOf("gtag('config'");
    if (defaultConsentIndex < 0 || configIndex < 0 || defaultConsentIndex > configIndex) {
      errors.push(`${label} must set denied consent before the GA4 config call.`);
    }

    const consentUpdateCount = (
      html.match(/\bgtag\(['"]consent['"],\s*['"]update['"]/g) || []
    ).length;
    const manualPageViewCount = (
      html.match(/\bgtag\(['"]event['"],\s*['"]page_view['"]/g) || []
    ).length;

    if (consentUpdateCount !== 1) {
      errors.push(`${label} must include exactly one saved-consent update path.`);
    }

    if (manualPageViewCount !== 1) {
      errors.push(`${label} must include exactly one manual page_view path.`);
    }

    if (/ad_(?:storage|user_data|personalization)\s*:\s*['"]granted['"]/.test(html)) {
      errors.push(`${label} grants advertising consent.`);
    }
  } else if (
    googleTagCount !== 0 ||
    configCallCount !== 0 ||
    html.includes("__RIGAI_ANALYTICS__") ||
    html.includes("data-analytics-consent") ||
    html.includes("data-analytics-settings")
  ) {
    errors.push(`${label} contains analytics initialization while analytics is disabled.`);
  }

  if (/G-(?:X{4,}|0{4,})/i.test(html)) {
    errors.push(`${label} contains a placeholder GA4 Measurement ID.`);
  }

  if (html.includes("GA4_MEASUREMENT_ID")) {
    errors.push(`${label} exposes the build environment variable name.`);
  }

  for (const tag of html.matchAll(
    /<(?:a|details)\b[^>]*\bdata-analytics-event="([^"]+)"[^>]*>/g
  )) {
    const [markup, eventName] = tag;
    if (!allowedAnalyticsEvents.has(eventName)) {
      errors.push(`${label} contains unsupported analytics event: ${eventName}.`);
      continue;
    }

    if ((markup.match(/data-analytics-event=/g) || []).length !== 1) {
      errors.push(`${label} has multiple analytics events on one interactive element.`);
    }

    for (const attribute of requiredEventAttributes[eventName]) {
      if (!markup.includes(`${attribute}="`)) {
        errors.push(`${label} ${eventName} is missing ${attribute}.`);
      }
    }
  }

  if (
    /^\/(?:privacy|terms|affiliate-disclosure)$/.test(page.route) &&
    html.includes("data-analytics-event")
  ) {
    errors.push(`${label} legal page contains unnecessary interaction events.`);
  }

  for (const anchor of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)) {
    const [markup, href] = anchor;
    if (/^\/[^"]*[?&]utm_/i.test(href)) {
      errors.push(`${label} contains UTM parameters on an internal link: ${href}.`);
    }

    if (/play\.google\.com/i.test(href) && !markup.includes('data-analytics-event="app_store_click"')) {
      errors.push(`${label} Google Play link is missing app_store_click analytics.`);
    }

    if (/amazon\./i.test(href) && !markup.includes('data-analytics-event="affiliate_click"')) {
      errors.push(`${label} Amazon link is missing affiliate_click analytics.`);
    }
  }
}

for (const plannedCard of homeHtml.matchAll(
  /<article class="(?:guide-card|vehicle-card)[^"]*"[\s\S]*?<\/article>/g
)) {
  if (plannedCard[0].includes("data-analytics-event")) {
    errors.push("Homepage planned cards must not contain analytics events.");
  }
}

requireIncludes(
  homeHtml,
  'data-analytics-event="vehicle_guide_click"',
  "dist/index.html"
);
requireIncludes(homeHtml, 'data-analytics-event="guide_click"', "dist/index.html");
requireIncludes(homeHtml, 'data-analytics-event="faq_open"', "dist/index.html");

for (const route of vehicleRoutes) {
  const html = readBuildFile(join(route.replace(/^\//, ""), "index.html"));
  const label = `dist${route}/index.html`;
  requireIncludes(html, 'data-analytics-event="build_setup_click"', label);
  requireIncludes(html, 'data-analytics-event="guide_click"', label);
  requireIncludes(html, 'data-analytics-event="outbound_link_click"', label);
}

const jsonLdMatches = [...homeHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

if (jsonLdMatches.length !== 1) {
  errors.push("Homepage must contain exactly one JSON-LD script.");
} else {
  try {
    const data = JSON.parse(jsonLdMatches[0][1]);
    const graphTypes = new Set((data["@graph"] || []).map((item) => item["@type"]));

    for (const type of ["Organization", "WebSite", "SoftwareApplication"]) {
      if (!graphTypes.has(type)) {
        errors.push(`Homepage JSON-LD is missing ${type}.`);
      }
    }

    const jsonText = JSON.stringify(data);
    if (jsonText.includes("aggregateRating") || jsonText.includes("review")) {
      errors.push("Homepage JSON-LD contains ratings or reviews.");
    }
  } catch (error) {
    errors.push(`Homepage JSON-LD is invalid JSON: ${error.message}`);
  }
}

if (errors.length > 0) {
  console.error("Build validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Build validation passed: SEO metadata, headers, routes, sitemap, and social image are valid.");

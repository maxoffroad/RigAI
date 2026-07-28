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

for (const [label, values] of [
  ["route", pages.map((page) => page.route)],
  ["page key", pages.map((page) => page.key)]
]) {
  const duplicates = values.filter(
    (value, index) => values.indexOf(value) !== index
  );
  if (duplicates.length > 0) {
    errors.push(`Duplicate ${label} configuration: ${[...new Set(duplicates)].join(", ")}.`);
  }
}

const configuredTacomaRoutes = pages.filter((page) =>
  page.route.startsWith("/vehicles/toyota-tacoma")
);
if (configuredTacomaRoutes.length !== 5) {
  errors.push(
    `Expected exactly five configured Tacoma routes, found ${configuredTacomaRoutes.length}.`
  );
}

const configuredWranglerRoutes = pages.filter((page) =>
  page.route.startsWith("/vehicles/jeep-wrangler-jl")
);
if (configuredWranglerRoutes.length !== 6) {
  errors.push(
    `Expected exactly six configured Wrangler JL routes, found ${configuredWranglerRoutes.length}.`
  );
}

const configuredBroncoRoutes = pages.filter((page) =>
  page.route.startsWith("/vehicles/ford-bronco")
);
if (configuredBroncoRoutes.length !== 6) {
  errors.push(
    `Expected exactly six configured Ford Bronco routes, found ${configuredBroncoRoutes.length}.`
  );
}

const configuredGladiatorRoutes = pages.filter((page) =>
  page.route.startsWith("/vehicles/jeep-gladiator")
);
if (configuredGladiatorRoutes.length !== 6) {
  errors.push(
    `Expected exactly six configured Jeep Gladiator routes, found ${configuredGladiatorRoutes.length}.`
  );
}

const configuredColoradoRoutes = pages.filter((page) =>
  page.route.startsWith("/vehicles/chevrolet-colorado")
);
if (configuredColoradoRoutes.length !== 6) {
  errors.push(
    `Expected exactly six configured Chevrolet Colorado routes, found ${configuredColoradoRoutes.length}.`
  );
}

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
  join("vehicles", "index.html"),
  join("vehicles", "toyota-4runner", "index.html"),
  join("vehicles", "toyota-4runner", "suspension", "index.html"),
  join("vehicles", "toyota-4runner", "first-upgrades", "index.html"),
  join("vehicles", "toyota-4runner", "kdss", "index.html"),
  join("vehicles", "toyota-4runner", "lift-kit", "index.html"),
  join("vehicles", "toyota-4runner", "tire-size", "index.html"),
  join("vehicles", "toyota-4runner", "overland-build", "index.html"),
  join("vehicles", "toyota-tacoma", "index.html"),
  join("vehicles", "toyota-tacoma", "first-upgrades", "index.html"),
  join("vehicles", "toyota-tacoma", "suspension", "index.html"),
  join("vehicles", "toyota-tacoma", "tire-size", "index.html"),
  join("vehicles", "toyota-tacoma", "overland-build", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "first-upgrades", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "suspension", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "tire-size", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "lift-kit", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "overland-build", "index.html")
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
  if (page.lastmod) {
    requireIncludes(
      sitemap,
      `<loc>${url}</loc>\n    <lastmod>${page.lastmod}</lastmod>`,
      "sitemap.xml"
    );
  }
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

const consentStyleBlock = stylesheet.match(/\.analytics-consent\s*\{([\s\S]*?)\}/)?.[1] || "";
if (!/position:\s*fixed/.test(consentStyleBlock) || !/bottom:\s*\d/.test(consentStyleBlock)) {
  errors.push("Analytics consent banner must be a fixed bottom overlay.");
}

const articleBulletItemRule =
  stylesheet.match(
    /\.article-takeaways li,\s*\.article-checklist li\s*\{([\s\S]*?)\}/
  )?.[1] || "";
const articleBulletMarkerRule =
  stylesheet.match(
    /\.article-takeaways li::before,\s*\.article-checklist li::before\s*\{([\s\S]*?)\}/
  )?.[1] || "";

for (const requiredDeclaration of [
  /display:\s*grid/,
  /grid-template-columns:\s*12px minmax\(0,\s*1fr\)/,
  /column-gap:\s*10px/,
  /min-width:\s*0/
]) {
  if (!requiredDeclaration.test(articleBulletItemRule)) {
    errors.push("Shared article list items are missing the stable bullet/text grid.");
    break;
  }
}

if (
  !/position:\s*static/.test(articleBulletMarkerRule) ||
  !/width:\s*8px/.test(articleBulletMarkerRule) ||
  !/height:\s*8px/.test(articleBulletMarkerRule) ||
  /position:\s*absolute/.test(articleBulletMarkerRule)
) {
  errors.push("Shared article bullet marker must remain a static 8px square.");
}

const vehicleCardRule =
  stylesheet.match(/\.vehicle-card--visual\s*\{([\s\S]*?)\}/)?.[1] || "";
const publishedVehicleCardRule =
  stylesheet.match(
    /\.vehicle-card--visual\.is-published\s*\{([\s\S]*?)\}/
  )?.[1] || "";
const vehicleDirectoryRule =
  stylesheet.match(/\.vehicle-directory-grid\s*\{([\s\S]*?)\}/)?.[1] || "";
const mobileVehicleRules =
  stylesheet.match(/@media \(max-width:\s*620px\)\s*\{([\s\S]*)$/)?.[1] || "";

if (!/min-width:\s*0/.test(vehicleCardRule)) {
  errors.push("Shared vehicle cards must set min-width: 0 to prevent overflow.");
}
if (!/min-height:\s*330px/.test(publishedVehicleCardRule)) {
  errors.push("Published homepage vehicle cards must share an aligned height.");
}
if (
  !/grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/.test(
    vehicleDirectoryRule
  )
) {
  errors.push("Vehicle directory must use two equal desktop columns.");
}
if (
  !/\.vehicle-directory-grid\s*\{[\s\S]*?grid-template-columns:\s*1fr/.test(
    mobileVehicleRules
  ) ||
  !/\.vehicle-grid\s*\{[\s\S]*?grid-template-columns:\s*1fr/.test(
    stylesheet.match(/@media \(max-width:\s*760px\)\s*\{([\s\S]*?)@media/)?.[1] ||
      ""
  )
) {
  errors.push("Vehicle cards must collapse to one column on mobile.");
}

const homeComponentSource = readFileSync(
  join(root, "src", "components", "home", "index.js"),
  "utf8"
);
const vehicleDirectorySource = readFileSync(
  join(root, "src", "components", "vehicles", "index.js"),
  "utf8"
);
for (const [label, source] of [
  ["homepage", homeComponentSource],
  ["vehicles directory", vehicleDirectorySource]
]) {
  if (!source.includes("renderVehicleCard")) {
    errors.push(`${label} must use the shared vehicle-card component.`);
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
  "RigAI supports multiple off-road platforms",
  "Your SUV is not listed?",
  "Detailed guide collections now cover Toyota 4Runner, the 2016-2023 Toyota Tacoma, the 2018-present Jeep Wrangler JL, the 2021-present Ford Bronco, the 2020-present Jeep Gladiator JT, and the 2023-present Chevrolet Colorado",
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
requireIncludes(homeHtml, '<span class="button primary is-static" aria-disabled="true" data-analytics-event="build_setup_click" data-analytics-location="final_cta">Build My Setup</span>', "dist/index.html");

const homepageBuildCtas = [
  ...homeHtml.matchAll(
    /<(?:a|span)\b[^>]*data-analytics-event="build_setup_click"[^>]*>/g
  )
];
const homepageBuildLocations = new Set(
  homepageBuildCtas.map(
    ([markup]) =>
      markup.match(/data-analytics-location="([^"]+)"/)?.[1] || ""
  )
);

if (
  homepageBuildCtas.length !== 3 ||
  !["header", "hero", "final_cta"].every((location) =>
    homepageBuildLocations.has(location)
  )
) {
  errors.push("Homepage must expose exactly three uniquely located Build My Setup controls.");
}
requireIncludes(homeHtml, '<a href="#how-it-works">How It Works</a>', "dist/index.html");
requireIncludes(homeHtml, '<a href="/vehicles">Vehicles</a>', "dist/index.html");
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
requireIncludes(homeHtml, 'href="/vehicles/toyota-tacoma"', "dist/index.html");
requireIncludes(homeHtml, 'data-vehicle-slug="toyota-tacoma"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/jeep-wrangler-jl"', "dist/index.html");
requireIncludes(homeHtml, 'data-vehicle-slug="jeep-wrangler-jl"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/ford-bronco"', "dist/index.html");
requireIncludes(homeHtml, 'data-vehicle-slug="ford-bronco"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/jeep-gladiator"', "dist/index.html");
requireIncludes(homeHtml, 'data-vehicle-slug="jeep-gladiator"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/chevrolet-colorado"', "dist/index.html");
requireIncludes(homeHtml, 'data-vehicle-slug="chevrolet-colorado"', "dist/index.html");
requireIncludes(homeHtml, 'data-analytics-location="homepage_vehicle_card"', "dist/index.html");
requireIncludes(homeHtml, '<span class="vehicle-card-scope">2016–2023 · 3rd Gen</span>', "dist/index.html");
requireIncludes(
  homeHtml,
  "Pickup-specific planning for payload, bed load, tires, suspension, and trail use.",
  "dist/index.html"
);
const homepageTacomaCard =
  homeHtml.match(
    /<a class="vehicle-card vehicle-card--visual is-published" href="\/vehicles\/toyota-tacoma"[^>]*>[\s\S]*?<\/a>/
  )?.[0] || "";
for (const expected of [
  'data-analytics-event="vehicle_guide_click"',
  'data-analytics-location="homepage_vehicle_card"',
  'data-vehicle-slug="toyota-tacoma"',
  "Toyota Tacoma",
  "2016–2023 · 3rd Gen",
  "Pickup-specific planning"
]) {
  requireIncludes(homepageTacomaCard, expected, "homepage Tacoma vehicle card");
}

const homepageWranglerCard =
  homeHtml.match(
    /<a class="vehicle-card vehicle-card--visual is-published" href="\/vehicles\/jeep-wrangler-jl"[^>]*>[\s\S]*?<\/a>/
  )?.[0] || "";
for (const expected of [
  'data-analytics-event="vehicle_guide_click"',
  'data-analytics-location="homepage_vehicle_card"',
  'data-vehicle-slug="jeep-wrangler-jl"',
  "Jeep Wrangler JL",
  "2018–present · 2-door and 4-door",
  "Suspension, tire fitment, lift, and trail-build guidance",
  "View Wrangler guides"
]) {
  requireIncludes(homepageWranglerCard, expected, "homepage Wrangler JL vehicle card");
}

const homepageBroncoCard =
  homeHtml.match(
    /<a class="vehicle-card vehicle-card--visual is-published" href="\/vehicles\/ford-bronco"[^>]*>[\s\S]*?<\/a>/
  )?.[0] || "";
for (const expected of [
  'data-analytics-event="vehicle_guide_click"',
  'data-analytics-location="homepage_vehicle_card"',
  'data-vehicle-slug="ford-bronco"',
  "Ford Bronco",
  "2021–present · 6th Gen",
  "Suspension, tire fitment, lift, and trail-build guidance",
  "View Bronco guides"
]) {
  requireIncludes(homepageBroncoCard, expected, "homepage Ford Bronco vehicle card");
}

const homepageGladiatorCard =
  homeHtml.match(
    /<a class="vehicle-card vehicle-card--visual is-published" href="\/vehicles\/jeep-gladiator"[^>]*>[\s\S]*?<\/a>/
  )?.[0] || "";
for (const expected of [
  'data-analytics-event="vehicle_guide_click"',
  'data-analytics-location="homepage_vehicle_card"',
  'data-vehicle-slug="jeep-gladiator"',
  "Jeep Gladiator JT",
  "2020–present · Midsize pickup",
  "Suspension, tire fitment, lift, payload, and overland guidance",
  "View Gladiator guides"
]) {
  requireIncludes(homepageGladiatorCard, expected, "homepage Jeep Gladiator vehicle card");
}

const homepageColoradoCard =
  homeHtml.match(
    /<a class="vehicle-card vehicle-card--visual is-published" href="\/vehicles\/chevrolet-colorado"[^>]*>[\s\S]*?<\/a>/
  )?.[0] || "";
for (const expected of [
  'data-analytics-event="vehicle_guide_click"',
  'data-analytics-location="homepage_vehicle_card"',
  'data-vehicle-slug="chevrolet-colorado"',
  "Chevrolet Colorado",
  "2023–present · 3rd Gen",
  "Suspension, tire fitment, lift, payload, and overland guidance",
  "View Colorado guides"
]) {
  requireIncludes(homepageColoradoCard, expected, "homepage Chevrolet Colorado vehicle card");
}

const vehiclesDirectoryHtml = readBuildFile(join("vehicles", "index.html"));
requireIncludes(vehiclesDirectoryHtml, "<title>Off-Road Vehicle Upgrade Guides | RigAI</title>", "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, '<link rel="canonical" href="https://rigai-offroad.com/vehicles" />', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, "<h1>Off-Road Vehicle Upgrade Guides</h1>", "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/toyota-4runner"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/toyota-tacoma"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/jeep-wrangler-jl"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/ford-bronco"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/jeep-gladiator"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/chevrolet-colorado"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-analytics-location="vehicles_directory_card"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="toyota-tacoma"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="jeep-wrangler-jl"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="ford-bronco"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="jeep-gladiator"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="chevrolet-colorado"', "dist/vehicles/index.html");

const prohibitedTacomaGlobalRoutes = [
  "/vehicles/toyota-tacoma/first-upgrades",
  "/vehicles/toyota-tacoma/suspension",
  "/vehicles/toyota-tacoma/tire-size",
  "/vehicles/toyota-tacoma/overland-build"
];
const prohibitedWranglerGlobalRoutes = [
  "/vehicles/jeep-wrangler-jl/first-upgrades",
  "/vehicles/jeep-wrangler-jl/suspension",
  "/vehicles/jeep-wrangler-jl/tire-size",
  "/vehicles/jeep-wrangler-jl/lift-kit",
  "/vehicles/jeep-wrangler-jl/overland-build"
];
const prohibitedBroncoGlobalRoutes = [
  "/vehicles/ford-bronco/first-upgrades",
  "/vehicles/ford-bronco/suspension",
  "/vehicles/ford-bronco/tire-size",
  "/vehicles/ford-bronco/lift-kit",
  "/vehicles/ford-bronco/overland-build"
];
const prohibitedGladiatorGlobalRoutes = [
  "/vehicles/jeep-gladiator/first-upgrades",
  "/vehicles/jeep-gladiator/suspension",
  "/vehicles/jeep-gladiator/tire-size",
  "/vehicles/jeep-gladiator/lift-kit",
  "/vehicles/jeep-gladiator/overland-build"
];
const prohibitedColoradoGlobalRoutes = [
  "/vehicles/chevrolet-colorado/first-upgrades",
  "/vehicles/chevrolet-colorado/suspension",
  "/vehicles/chevrolet-colorado/tire-size",
  "/vehicles/chevrolet-colorado/lift-kit",
  "/vehicles/chevrolet-colorado/overland-build"
];
for (const guideRoute of [
  ...prohibitedTacomaGlobalRoutes,
  ...prohibitedWranglerGlobalRoutes,
  ...prohibitedBroncoGlobalRoutes,
  ...prohibitedGladiatorGlobalRoutes,
  ...prohibitedColoradoGlobalRoutes
]) {
  if (homeHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Homepage must not list individual vehicle guide: ${guideRoute}.`);
  }
  if (vehiclesDirectoryHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`/vehicles must link to vehicle hubs, not individual guide: ${guideRoute}.`);
  }
}

const vehiclesDirectoryJsonLd = [
  ...vehiclesDirectoryHtml.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
  )
];
if (vehiclesDirectoryJsonLd.length !== 1) {
  errors.push("dist/vehicles/index.html must contain exactly one JSON-LD script.");
} else {
  try {
    const data = JSON.parse(vehiclesDirectoryJsonLd[0][1]);
    const types = new Set((data["@graph"] || []).map((item) => item["@type"]));
    for (const type of ["WebPage", "BreadcrumbList", "Organization", "WebSite"]) {
      if (!types.has(type)) {
        errors.push(`dist/vehicles/index.html JSON-LD is missing ${type}.`);
      }
    }
  } catch (error) {
    errors.push(`dist/vehicles/index.html JSON-LD is invalid JSON: ${error.message}`);
  }
}

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
  "/vehicles/toyota-4runner/overland-build",
  "/vehicles/toyota-tacoma",
  "/vehicles/toyota-tacoma/first-upgrades",
  "/vehicles/toyota-tacoma/suspension",
  "/vehicles/toyota-tacoma/tire-size",
  "/vehicles/toyota-tacoma/overland-build",
  "/vehicles/jeep-wrangler-jl",
  "/vehicles/jeep-wrangler-jl/first-upgrades",
  "/vehicles/jeep-wrangler-jl/suspension",
  "/vehicles/jeep-wrangler-jl/tire-size",
  "/vehicles/jeep-wrangler-jl/lift-kit",
  "/vehicles/jeep-wrangler-jl/overland-build",
  "/vehicles/ford-bronco",
  "/vehicles/ford-bronco/first-upgrades",
  "/vehicles/ford-bronco/suspension",
  "/vehicles/ford-bronco/tire-size",
  "/vehicles/ford-bronco/lift-kit",
  "/vehicles/ford-bronco/overland-build",
  "/vehicles/jeep-gladiator",
  "/vehicles/jeep-gladiator/first-upgrades",
  "/vehicles/jeep-gladiator/suspension",
  "/vehicles/jeep-gladiator/tire-size",
  "/vehicles/jeep-gladiator/lift-kit",
  "/vehicles/jeep-gladiator/overland-build",
  "/vehicles/chevrolet-colorado",
  "/vehicles/chevrolet-colorado/first-upgrades",
  "/vehicles/chevrolet-colorado/suspension",
  "/vehicles/chevrolet-colorado/tire-size",
  "/vehicles/chevrolet-colorado/lift-kit",
  "/vehicles/chevrolet-colorado/overland-build"
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
  ],
  "/vehicles/toyota-tacoma": [
    "/vehicles/toyota-tacoma/first-upgrades",
    "/vehicles/toyota-tacoma/suspension",
    "/vehicles/toyota-tacoma/tire-size",
    "/vehicles/toyota-tacoma/overland-build",
    "/vehicles/toyota-4runner"
  ],
  "/vehicles/toyota-tacoma/first-upgrades": [
    "/vehicles/toyota-tacoma",
    "/vehicles/toyota-tacoma/suspension",
    "/vehicles/toyota-tacoma/tire-size",
    "/vehicles/toyota-tacoma/overland-build"
  ],
  "/vehicles/toyota-tacoma/suspension": [
    "/vehicles/toyota-tacoma",
    "/vehicles/toyota-tacoma/first-upgrades",
    "/vehicles/toyota-tacoma/tire-size",
    "/vehicles/toyota-tacoma/overland-build"
  ],
  "/vehicles/toyota-tacoma/tire-size": [
    "/vehicles/toyota-tacoma",
    "/vehicles/toyota-tacoma/first-upgrades",
    "/vehicles/toyota-tacoma/suspension",
    "/vehicles/toyota-tacoma/overland-build"
  ],
  "/vehicles/toyota-tacoma/overland-build": [
    "/vehicles/toyota-tacoma",
    "/vehicles/toyota-tacoma/first-upgrades",
    "/vehicles/toyota-tacoma/suspension",
    "/vehicles/toyota-tacoma/tire-size"
  ],
  "/vehicles/jeep-wrangler-jl": [
    "/vehicles/jeep-wrangler-jl/first-upgrades",
    "/vehicles/jeep-wrangler-jl/suspension",
    "/vehicles/jeep-wrangler-jl/tire-size",
    "/vehicles/jeep-wrangler-jl/lift-kit",
    "/vehicles/jeep-wrangler-jl/overland-build"
  ],
  "/vehicles/jeep-wrangler-jl/first-upgrades": [
    "/vehicles/jeep-wrangler-jl",
    "/vehicles/jeep-wrangler-jl/suspension",
    "/vehicles/jeep-wrangler-jl/tire-size",
    "/vehicles/jeep-wrangler-jl/lift-kit",
    "/vehicles/jeep-wrangler-jl/overland-build"
  ],
  "/vehicles/jeep-wrangler-jl/suspension": [
    "/vehicles/jeep-wrangler-jl",
    "/vehicles/jeep-wrangler-jl/first-upgrades",
    "/vehicles/jeep-wrangler-jl/tire-size",
    "/vehicles/jeep-wrangler-jl/lift-kit",
    "/vehicles/jeep-wrangler-jl/overland-build"
  ],
  "/vehicles/jeep-wrangler-jl/tire-size": [
    "/vehicles/jeep-wrangler-jl",
    "/vehicles/jeep-wrangler-jl/first-upgrades",
    "/vehicles/jeep-wrangler-jl/suspension",
    "/vehicles/jeep-wrangler-jl/lift-kit",
    "/vehicles/jeep-wrangler-jl/overland-build"
  ],
  "/vehicles/jeep-wrangler-jl/lift-kit": [
    "/vehicles/jeep-wrangler-jl",
    "/vehicles/jeep-wrangler-jl/first-upgrades",
    "/vehicles/jeep-wrangler-jl/suspension",
    "/vehicles/jeep-wrangler-jl/tire-size",
    "/vehicles/jeep-wrangler-jl/overland-build"
  ],
  "/vehicles/jeep-wrangler-jl/overland-build": [
    "/vehicles/jeep-wrangler-jl",
    "/vehicles/jeep-wrangler-jl/first-upgrades",
    "/vehicles/jeep-wrangler-jl/suspension",
    "/vehicles/jeep-wrangler-jl/tire-size",
    "/vehicles/jeep-wrangler-jl/lift-kit"
  ],
  "/vehicles/ford-bronco": [
    "/vehicles/ford-bronco/first-upgrades",
    "/vehicles/ford-bronco/suspension",
    "/vehicles/ford-bronco/tire-size",
    "/vehicles/ford-bronco/lift-kit",
    "/vehicles/ford-bronco/overland-build"
  ],
  "/vehicles/ford-bronco/first-upgrades": [
    "/vehicles/ford-bronco",
    "/vehicles/ford-bronco/suspension",
    "/vehicles/ford-bronco/tire-size",
    "/vehicles/ford-bronco/lift-kit",
    "/vehicles/ford-bronco/overland-build"
  ],
  "/vehicles/ford-bronco/suspension": [
    "/vehicles/ford-bronco",
    "/vehicles/ford-bronco/first-upgrades",
    "/vehicles/ford-bronco/tire-size",
    "/vehicles/ford-bronco/lift-kit",
    "/vehicles/ford-bronco/overland-build"
  ],
  "/vehicles/ford-bronco/tire-size": [
    "/vehicles/ford-bronco",
    "/vehicles/ford-bronco/first-upgrades",
    "/vehicles/ford-bronco/suspension",
    "/vehicles/ford-bronco/lift-kit",
    "/vehicles/ford-bronco/overland-build"
  ],
  "/vehicles/ford-bronco/lift-kit": [
    "/vehicles/ford-bronco",
    "/vehicles/ford-bronco/first-upgrades",
    "/vehicles/ford-bronco/suspension",
    "/vehicles/ford-bronco/tire-size",
    "/vehicles/ford-bronco/overland-build"
  ],
  "/vehicles/ford-bronco/overland-build": [
    "/vehicles/ford-bronco",
    "/vehicles/ford-bronco/first-upgrades",
    "/vehicles/ford-bronco/suspension",
    "/vehicles/ford-bronco/tire-size",
    "/vehicles/ford-bronco/lift-kit"
  ],
  "/vehicles/jeep-gladiator": [
    "/vehicles/jeep-gladiator/first-upgrades",
    "/vehicles/jeep-gladiator/suspension",
    "/vehicles/jeep-gladiator/tire-size",
    "/vehicles/jeep-gladiator/lift-kit",
    "/vehicles/jeep-gladiator/overland-build"
  ],
  "/vehicles/jeep-gladiator/first-upgrades": [
    "/vehicles/jeep-gladiator",
    "/vehicles/jeep-gladiator/suspension",
    "/vehicles/jeep-gladiator/tire-size",
    "/vehicles/jeep-gladiator/lift-kit",
    "/vehicles/jeep-gladiator/overland-build"
  ],
  "/vehicles/jeep-gladiator/suspension": [
    "/vehicles/jeep-gladiator",
    "/vehicles/jeep-gladiator/first-upgrades",
    "/vehicles/jeep-gladiator/tire-size",
    "/vehicles/jeep-gladiator/lift-kit",
    "/vehicles/jeep-gladiator/overland-build"
  ],
  "/vehicles/jeep-gladiator/tire-size": [
    "/vehicles/jeep-gladiator",
    "/vehicles/jeep-gladiator/first-upgrades",
    "/vehicles/jeep-gladiator/suspension",
    "/vehicles/jeep-gladiator/lift-kit",
    "/vehicles/jeep-gladiator/overland-build"
  ],
  "/vehicles/jeep-gladiator/lift-kit": [
    "/vehicles/jeep-gladiator",
    "/vehicles/jeep-gladiator/first-upgrades",
    "/vehicles/jeep-gladiator/suspension",
    "/vehicles/jeep-gladiator/tire-size",
    "/vehicles/jeep-gladiator/overland-build"
  ],
  "/vehicles/jeep-gladiator/overland-build": [
    "/vehicles/jeep-gladiator",
    "/vehicles/jeep-gladiator/first-upgrades",
    "/vehicles/jeep-gladiator/suspension",
    "/vehicles/jeep-gladiator/tire-size",
    "/vehicles/jeep-gladiator/lift-kit"
  ],
  "/vehicles/chevrolet-colorado": [
    "/vehicles/chevrolet-colorado/first-upgrades",
    "/vehicles/chevrolet-colorado/suspension",
    "/vehicles/chevrolet-colorado/tire-size",
    "/vehicles/chevrolet-colorado/lift-kit",
    "/vehicles/chevrolet-colorado/overland-build"
  ],
  "/vehicles/chevrolet-colorado/first-upgrades": [
    "/vehicles/chevrolet-colorado",
    "/vehicles/chevrolet-colorado/suspension",
    "/vehicles/chevrolet-colorado/tire-size",
    "/vehicles/chevrolet-colorado/lift-kit",
    "/vehicles/chevrolet-colorado/overland-build"
  ],
  "/vehicles/chevrolet-colorado/suspension": [
    "/vehicles/chevrolet-colorado",
    "/vehicles/chevrolet-colorado/first-upgrades",
    "/vehicles/chevrolet-colorado/tire-size",
    "/vehicles/chevrolet-colorado/lift-kit",
    "/vehicles/chevrolet-colorado/overland-build"
  ],
  "/vehicles/chevrolet-colorado/tire-size": [
    "/vehicles/chevrolet-colorado",
    "/vehicles/chevrolet-colorado/first-upgrades",
    "/vehicles/chevrolet-colorado/suspension",
    "/vehicles/chevrolet-colorado/lift-kit",
    "/vehicles/chevrolet-colorado/overland-build"
  ],
  "/vehicles/chevrolet-colorado/lift-kit": [
    "/vehicles/chevrolet-colorado",
    "/vehicles/chevrolet-colorado/first-upgrades",
    "/vehicles/chevrolet-colorado/suspension",
    "/vehicles/chevrolet-colorado/tire-size",
    "/vehicles/chevrolet-colorado/overland-build"
  ],
  "/vehicles/chevrolet-colorado/overland-build": [
    "/vehicles/chevrolet-colorado",
    "/vehicles/chevrolet-colorado/first-upgrades",
    "/vehicles/chevrolet-colorado/suspension",
    "/vehicles/chevrolet-colorado/tire-size",
    "/vehicles/chevrolet-colorado/lift-kit"
  ]
};

const newVehicleRoutes = new Set([
  "/vehicles/toyota-4runner/kdss",
  "/vehicles/toyota-4runner/lift-kit",
  "/vehicles/toyota-4runner/tire-size",
  "/vehicles/toyota-4runner/overland-build",
  "/vehicles/toyota-tacoma/first-upgrades",
  "/vehicles/toyota-tacoma/suspension",
  "/vehicles/toyota-tacoma/tire-size",
  "/vehicles/toyota-tacoma/overland-build"
]);

const titles = new Map();
const descriptions = new Map();

for (const route of vehicleRoutes) {
  const relativeOutput = join(route.replace(/^\//, ""), "index.html");
  const html = readBuildFile(relativeOutput);
  const label = `dist/${relativeOutput.replaceAll("\\", "/")}`;
  const page = pages.find((item) => item.route === route);
  const vehicleSlug = page.content.vehicle?.slug || "toyota-4runner";

  requireIncludes(html, '<html lang="en">', label);
  requireIncludes(html, '<nav class="breadcrumb article-breadcrumb" aria-label="Breadcrumb">', label);
  requireIncludes(html, '<nav class="article-toc" aria-label="Table of contents">', label);
  requireIncludes(html, `data-vehicle-slug="${vehicleSlug}"`, label);
  requireIncludes(html, 'class="callout vehicle-scope-callout"', label);
  requireIncludes(html, 'class="callout safety-disclaimer"', label);
  const expectedSafetyText = {
    "toyota-tacoma": "Verify the exact model year, trim, cab, bed length, drivetrain",
    "jeep-wrangler-jl": "Verify model year, door count, trim, engine, transmission",
    "ford-bronco": "Verify model year, door count, trim, engine, transmission",
    "jeep-gladiator": "Verify model year, trim, engine, transmission, axles",
    "chevrolet-colorado": "Verify model year, trim, drivetrain, suspension package"
  }[vehicleSlug] || "Always verify model year, trim, drivetrain, KDSS status";
  requireIncludes(html, expectedSafetyText, label);
  const expectedCtaLabel =
    ["toyota-tacoma", "jeep-wrangler-jl", "ford-bronco", "jeep-gladiator", "chevrolet-colorado"].includes(vehicleSlug)
      ? "Build My Setup"
      : "Check app availability";
  requireIncludes(
    html,
    `href="/#download" data-analytics-event="build_setup_click" data-analytics-location="article_cta" data-destination-type="internal_section">${expectedCtaLabel}</a>`,
    label
  );
  requireIncludes(html, "Editorial and fitment notes", label);
  requireIncludes(html, "RigAI Editorial Team", label);
  requireIncludes(html, `Last reviewed:</strong> ${page.content.dates.reviewedLabel}`, label);
  requireIncludes(html, 'class="related-guides"', label);
  if (page.structuredData === "article") {
    requireIncludes(
      html,
      `<time datetime="${page.content.dates.modified}">Updated ${page.content.dates.reviewedLabel}</time>`,
      label
    );
  }

  const articleBuildCtaCount = (
    html.match(/data-analytics-event="build_setup_click"/g) || []
  ).length;
  if (articleBuildCtaCount !== 1) {
    errors.push(`${label} must contain exactly one tracked vehicle-plan CTA.`);
  }

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

  if (vehicleSlug === "toyota-tacoma") {
    requireIncludes(html, "2016-2023", label);
    requireIncludes(html, 'data-vehicle-context="toyota-tacoma"', label);
    requireIncludes(html, ">TACOMA</span>", label);
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(
        html,
        'class="article-back-link" href="/vehicles/toyota-tacoma"',
        label
      );
      requireIncludes(html, ">All Toyota Tacoma Guides</a>", label);
      requireIncludes(html, "Related Tacoma guides", label);
    }

    for (const accidentalGenerationClaim of [
      "2010-2024",
      "5th Gen",
      "6th Gen",
      "KDSS status",
      "fourth-generation Tacoma",
      "4th Gen Tacoma"
    ]) {
      if (html.includes(accidentalGenerationClaim)) {
        errors.push(`${label} contains a Toyota 4Runner-only or out-of-scope claim: ${accidentalGenerationClaim}`);
      }
    }

    for (const universalFitmentClaim of [
      "fits every Tacoma",
      "guaranteed tire fitment",
      "will fit all Tacoma",
      "always fits a Tacoma"
    ]) {
      if (html.toLowerCase().includes(universalFitmentClaim.toLowerCase())) {
        errors.push(`${label} contains a universal Tacoma fitment claim: ${universalFitmentClaim}`);
      }
    }

    if (/lorem ipsum|placeholder content|todo:/i.test(html)) {
      errors.push(`${label} contains placeholder content.`);
    }
  }

  if (vehicleSlug === "jeep-wrangler-jl") {
    requireIncludes(html, "2018-present", label);
    requireIncludes(html, 'data-vehicle-context="jeep-wrangler-jl"', label);
    requireIncludes(html, ">WRANGLER JL</span>", label);
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(
        html,
        'class="article-back-link" href="/vehicles/jeep-wrangler-jl"',
        label
      );
      requireIncludes(html, ">All Jeep Wrangler JL Guides</a>", label);
      requireIncludes(html, "Related Wrangler JL guides", label);
    }

    for (const outOfScopePhrase of [
      "Wrangler JK",
      "Wrangler TJ",
      "Wrangler YJ",
      "Jeep CJ",
      "Jeep Gladiator",
      "Toyota Tacoma",
      "Toyota 4Runner",
      "KDSS",
      "rear leaf spring",
      "rear leaf-spring"
    ]) {
      if (html.toLowerCase().includes(outOfScopePhrase.toLowerCase())) {
        errors.push(`${label} contains out-of-scope vehicle content: ${outOfScopePhrase}.`);
      }
    }

    for (const universalClaim of [
      "fits every Wrangler JL",
      "fits all Wrangler JL",
      "largest tire for every Wrangler",
      "every JL requires adjustable control arms",
      "every JL requires an adjustable track bar",
      "best lift height for every Wrangler"
    ]) {
      if (html.toLowerCase().includes(universalClaim.toLowerCase())) {
        errors.push(`${label} contains an unsupported Wrangler claim: ${universalClaim}.`);
      }
    }

    if (/lorem ipsum|placeholder content|todo:/i.test(html)) {
      errors.push(`${label} contains placeholder content.`);
    }
  }

  if (vehicleSlug === "ford-bronco") {
    requireIncludes(html, "2021-present", label);
    requireIncludes(html, 'data-vehicle-context="ford-bronco"', label);
    requireIncludes(html, ">BRONCO</span>", label);
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(
        html,
        'class="article-back-link" href="/vehicles/ford-bronco"',
        label
      );
      requireIncludes(html, ">All Ford Bronco Guides</a>", label);
      requireIncludes(html, "Related Bronco guides", label);
    }

    for (const outOfScopePhrase of [
      "Bronco Sport",
      "1966-1996",
      "Ford Ranger",
      "Ford F-150",
      "Jeep Wrangler",
      "Toyota Tacoma",
      "Toyota 4Runner",
      "KDSS",
      "rear leaf spring",
      "rear leaf-spring",
      "solid front axle"
    ]) {
      if (html.toLowerCase().includes(outOfScopePhrase.toLowerCase())) {
        errors.push(`${label} contains out-of-scope vehicle content: ${outOfScopePhrase}.`);
      }
    }

    for (const universalClaim of [
      "fits every 2021-present Bronco",
      "fits all Ford Bronco",
      "every Bronco needs a lift",
      "every lifted Bronco requires aftermarket upper control arms",
      "one lift height fits"
    ]) {
      if (html.toLowerCase().includes(universalClaim.toLowerCase())) {
        errors.push(`${label} contains an unsupported Bronco claim: ${universalClaim}.`);
      }
    }

    if (/lorem ipsum|placeholder content|todo:/i.test(html)) {
      errors.push(`${label} contains placeholder content.`);
    }
  }

  if (vehicleSlug === "jeep-gladiator") {
    requireIncludes(html, "2020-present", label);
    requireIncludes(html, 'data-vehicle-context="jeep-gladiator"', label);
    requireIncludes(html, ">GLADIATOR JT</span>", label);
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(
        html,
        'class="article-back-link" href="/vehicles/jeep-gladiator"',
        label
      );
      requireIncludes(html, ">All Jeep Gladiator Guides</a>", label);
      requireIncludes(html, "Related Gladiator guides", label);
    }

    for (const outOfScopePhrase of [
      "Wrangler JL",
      "Wrangler JK",
      "Jeep Cherokee",
      "Grand Cherokee",
      "Ram pickup",
      "Toyota Tacoma",
      "Toyota 4Runner",
      "Ford Bronco",
      "KDSS",
      "rear leaf spring",
      "rear leaf-spring"
    ]) {
      if (html.toLowerCase().includes(outOfScopePhrase.toLowerCase())) {
        errors.push(`${label} contains out-of-scope vehicle content: ${outOfScopePhrase}.`);
      }
    }

    for (const universalClaim of [
      "same towing rating for every Gladiator",
      "same payload for every Gladiator",
      "fits every Gladiator JT",
      "fits all Gladiator JT",
      "every Gladiator needs a lift",
      "one lift height fits every Gladiator"
    ]) {
      if (html.toLowerCase().includes(universalClaim.toLowerCase())) {
        errors.push(`${label} contains an unsupported Gladiator claim: ${universalClaim}.`);
      }
    }

    if (/lorem ipsum|placeholder content|todo:/i.test(html)) {
      errors.push(`${label} contains placeholder content.`);
    }
  }

  if (vehicleSlug === "chevrolet-colorado") {
    requireIncludes(html, "2023-present", label);
    requireIncludes(html, 'data-vehicle-context="chevrolet-colorado"', label);
    requireIncludes(html, ">COLORADO 3RD GEN</span>", label);
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(
        html,
        'class="article-back-link" href="/vehicles/chevrolet-colorado"',
        label
      );
      requireIncludes(html, ">All Chevrolet Colorado Guides</a>", label);
      requireIncludes(html, "Related Colorado guides", label);
    }

    for (const outOfScopePhrase of [
      "2015-2022",
      "2nd Gen Colorado",
      "second-generation Colorado",
      "GMC Canyon",
      "Chevrolet Silverado",
      "Ford Ranger",
      "Toyota Tacoma",
      "Jeep Gladiator",
      "Jeep Wrangler",
      "Ford Bronco",
      "Toyota 4Runner",
      "KDSS",
      "solid front axle"
    ]) {
      if (html.toLowerCase().includes(outOfScopePhrase.toLowerCase())) {
        errors.push(`${label} contains out-of-scope vehicle content: ${outOfScopePhrase}.`);
      }
    }

    for (const universalClaim of [
      "every Colorado has DSSV",
      "all Colorado trims have DSSV",
      "same payload for every Colorado",
      "same towing capacity for every Colorado",
      "fits every 2023-present Colorado",
      "fits all 2023-present Colorado",
      "largest tire for every Colorado",
      "every Colorado needs a lift",
      "one lift height fits every Colorado"
    ]) {
      if (html.toLowerCase().includes(universalClaim.toLowerCase())) {
        errors.push(`${label} contains an unsupported Colorado claim: ${universalClaim}.`);
      }
    }

    if (/lorem ipsum|placeholder content|todo:/i.test(html)) {
      errors.push(`${label} contains placeholder content.`);
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

    if (route === "/vehicles" && types.has("Article")) {
      errors.push(`${label} must not include Article schema.`);
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

const tacomaRoutes = vehicleRoutes.filter((route) =>
  route.startsWith("/vehicles/toyota-tacoma")
);
const tacomaRequiredTopics = [
  "payload",
  "bed",
  "leaf spring",
  "empty-bed",
  "alignment",
  "caster",
  "wheel",
  "offset",
  "body mount",
  "spare",
  "braking",
  "gearing",
  "rooftop tent",
  "drawers",
  "rear axle"
];
const tacomaClusterHtml = tacomaRoutes
  .map((route) => readBuildFile(join(route.replace(/^\//, ""), "index.html")))
  .join("\n")
  .toLowerCase();

for (const topic of tacomaRequiredTopics) {
  if (!tacomaClusterHtml.includes(topic)) {
    errors.push(`Toyota Tacoma cluster is missing required topic: ${topic}.`);
  }
}

for (const route of tacomaRoutes) {
  const incomingLinks = pages.reduce((count, page) => {
    const html = readBuildFile(pageOutputPath(page));
    return count + (html.includes(`href="${route}"`) ? 1 : 0);
  }, 0);
  if (incomingLinks === 0) {
    errors.push(`${route} is an orphan page.`);
  }
}

const tacomaHubRoute = "/vehicles/toyota-tacoma";
const tacomaGuideRoutes = tacomaRoutes.filter((route) => route !== tacomaHubRoute);
const tacomaHubHtml = readBuildFile(
  join("vehicles", "toyota-tacoma", "index.html")
);

if (!homeHtml.includes(`href="${tacomaHubRoute}"`)) {
  errors.push("Toyota Tacoma hub is not linked from the homepage.");
}
if (!vehiclesDirectoryHtml.includes(`href="${tacomaHubRoute}"`)) {
  errors.push("Toyota Tacoma hub is not linked from /vehicles.");
}
if (
  !homeHtml.includes('href="/vehicles"') &&
  ![...homeHtml.matchAll(/<footer[\s\S]*?<\/footer>/g)].some(([footer]) =>
    footer.includes('href="/vehicles"')
  )
) {
  errors.push("/vehicles is not linked from global homepage navigation or footer.");
}

for (const guideRoute of tacomaGuideRoutes) {
  if (!tacomaHubHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Toyota Tacoma hub does not link to ${guideRoute}.`);
  }
  const guideCard =
    tacomaHubHtml.match(
      new RegExp(
        `<a class="related-guide-card is-published" href="${guideRoute.replaceAll("/", "\\/")}"[^>]*>[\\s\\S]*?<\\/a>`
      )
    )?.[0] || "";
  for (const expected of [
    'data-analytics-event="guide_click"',
    'data-analytics-location="article_featured"',
    'data-vehicle-slug="toyota-tacoma"',
    "<h3>",
    "<p>",
    "<strong>Read guide</strong>"
  ]) {
    requireIncludes(guideCard, expected, `Tacoma hub card for ${guideRoute}`);
  }
  const guideHtml = readBuildFile(
    join(guideRoute.replace(/^\//, ""), "index.html")
  );
  if (
    !guideHtml.includes(
      'class="article-back-link" href="/vehicles/toyota-tacoma"'
    )
  ) {
    errors.push(`${guideRoute} does not visibly link back to all Tacoma guides.`);
  }
}

const wranglerRoutes = vehicleRoutes.filter((route) =>
  route.startsWith("/vehicles/jeep-wrangler-jl")
);
const wranglerRequiredTopics = [
  "2-door",
  "4-door",
  "sport",
  "willys",
  "sahara",
  "rubicon x",
  "4xe",
  "axle ratio",
  "sway-bar disconnect",
  "locking differentials",
  "solid front and rear axles",
  "control arms",
  "track bars",
  "caster",
  "pinion angle",
  "brake-line",
  "abs-wire",
  "wheel offset",
  "backspacing",
  "third brake light",
  "spacer lift",
  "roof racks",
  "rooftop tents",
  "stage 4"
];
const wranglerClusterHtml = wranglerRoutes
  .map((route) => readBuildFile(join(route.replace(/^\//, ""), "index.html")))
  .join("\n")
  .toLowerCase();

for (const topic of wranglerRequiredTopics) {
  if (!wranglerClusterHtml.includes(topic)) {
    errors.push(`Jeep Wrangler JL cluster is missing required topic: ${topic}.`);
  }
}

for (const route of wranglerRoutes) {
  const incomingLinks = pages.reduce((count, page) => {
    const html = readBuildFile(pageOutputPath(page));
    return count + (html.includes(`href="${route}"`) ? 1 : 0);
  }, 0);
  if (incomingLinks === 0) {
    errors.push(`${route} is an orphan page.`);
  }
}

const wranglerHubRoute = "/vehicles/jeep-wrangler-jl";
const wranglerGuideRoutes = wranglerRoutes.filter(
  (route) => route !== wranglerHubRoute
);
const wranglerHubHtml = readBuildFile(
  join("vehicles", "jeep-wrangler-jl", "index.html")
);

if (!homeHtml.includes(`href="${wranglerHubRoute}"`)) {
  errors.push("Jeep Wrangler JL hub is not linked from the homepage.");
}
if (!vehiclesDirectoryHtml.includes(`href="${wranglerHubRoute}"`)) {
  errors.push("Jeep Wrangler JL hub is not linked from /vehicles.");
}

for (const guideRoute of wranglerGuideRoutes) {
  if (!wranglerHubHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Jeep Wrangler JL hub does not link to ${guideRoute}.`);
  }
  const guideCard =
    wranglerHubHtml.match(
      new RegExp(
        `<a class="related-guide-card is-published" href="${guideRoute.replaceAll("/", "\\/")}"[^>]*>[\\s\\S]*?<\\/a>`
      )
    )?.[0] || "";
  for (const expected of [
    'data-analytics-event="guide_click"',
    'data-analytics-location="article_featured"',
    'data-vehicle-slug="jeep-wrangler-jl"',
    "<h3>",
    "<p>",
    "<strong>Read guide</strong>"
  ]) {
    requireIncludes(guideCard, expected, `Wrangler JL hub card for ${guideRoute}`);
  }

  const guideHtml = readBuildFile(
    join(guideRoute.replace(/^\//, ""), "index.html")
  );
  if (
    !guideHtml.includes(
      'class="article-back-link" href="/vehicles/jeep-wrangler-jl"'
    )
  ) {
    errors.push(`${guideRoute} does not visibly link back to all Wrangler JL guides.`);
  }

  const relatedGuideLinks = [
    ...guideHtml.matchAll(
      /<a class="related-guide-card is-published" href="(\/vehicles\/jeep-wrangler-jl\/[^"]+)"/g
    )
  ].map((match) => match[1]);
  if (new Set(relatedGuideLinks).size < 2) {
    errors.push(`${guideRoute} must link to at least two related Wrangler JL guides.`);
  }
}

const broncoRoutes = vehicleRoutes.filter((route) =>
  route.startsWith("/vehicles/ford-bronco")
);
const broncoRequiredTopics = [
  "2-door",
  "4-door",
  "base",
  "big bend",
  "black diamond",
  "outer banks",
  "badlands",
  "wildtrak",
  "heritage edition",
  "raptor configuration",
  "sasquatch",
  "hoss",
  "2.3l",
  "2.7l",
  "manual",
  "automatic",
  "independent front suspension",
  "rear solid axle",
  "upper control arms",
  "tie rods",
  "steering rack",
  "rear track bar",
  "caster",
  "camber",
  "toe",
  "cv",
  "backspacing",
  "third brake light",
  "speedometer",
  "perch collars",
  "solar",
  "stage 4"
];
const broncoClusterHtml = broncoRoutes
  .map((route) => readBuildFile(join(route.replace(/^\//, ""), "index.html")))
  .join("\n")
  .toLowerCase();

for (const topic of broncoRequiredTopics) {
  if (!broncoClusterHtml.includes(topic)) {
    errors.push(`Ford Bronco cluster is missing required topic: ${topic}.`);
  }
}

for (const route of broncoRoutes) {
  const incomingLinks = pages.reduce((count, page) => {
    const html = readBuildFile(pageOutputPath(page));
    return count + (html.includes(`href="${route}"`) ? 1 : 0);
  }, 0);
  if (incomingLinks === 0) {
    errors.push(`${route} is an orphan page.`);
  }
}

const broncoHubRoute = "/vehicles/ford-bronco";
const broncoGuideRoutes = broncoRoutes.filter(
  (route) => route !== broncoHubRoute
);
const broncoHubHtml = readBuildFile(
  join("vehicles", "ford-bronco", "index.html")
);

if (!homeHtml.includes(`href="${broncoHubRoute}"`)) {
  errors.push("Ford Bronco hub is not linked from the homepage.");
}
if (!vehiclesDirectoryHtml.includes(`href="${broncoHubRoute}"`)) {
  errors.push("Ford Bronco hub is not linked from /vehicles.");
}

for (const guideRoute of broncoGuideRoutes) {
  if (!broncoHubHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Ford Bronco hub does not link to ${guideRoute}.`);
  }
  const guideCard =
    broncoHubHtml.match(
      new RegExp(
        `<a class="related-guide-card is-published" href="${guideRoute.replaceAll("/", "\\/")}"[^>]*>[\\s\\S]*?<\\/a>`
      )
    )?.[0] || "";
  for (const expected of [
    'data-analytics-event="guide_click"',
    'data-analytics-location="article_featured"',
    'data-vehicle-slug="ford-bronco"',
    "<h3>",
    "<p>",
    "<strong>Read guide</strong>"
  ]) {
    requireIncludes(guideCard, expected, `Ford Bronco hub card for ${guideRoute}`);
  }

  const guideHtml = readBuildFile(
    join(guideRoute.replace(/^\//, ""), "index.html")
  );
  if (
    !guideHtml.includes(
      'class="article-back-link" href="/vehicles/ford-bronco"'
    )
  ) {
    errors.push(`${guideRoute} does not visibly link back to all Ford Bronco guides.`);
  }

  const relatedGuideLinks = [
    ...guideHtml.matchAll(
      /<a class="related-guide-card is-published" href="(\/vehicles\/ford-bronco\/[^"]+)"/g
    )
  ].map((match) => match[1]);
  if (new Set(relatedGuideLinks).size < 2) {
    errors.push(`${guideRoute} must link to at least two related Ford Bronco guides.`);
  }
}

const gladiatorRoutes = vehicleRoutes.filter((route) =>
  route.startsWith("/vehicles/jeep-gladiator")
);
const gladiatorRequiredTopics = [
  "2020-present",
  "sport",
  "willys",
  "overland",
  "mojave",
  "rubicon",
  "pickup bed",
  "longer wheelbase",
  "rear overhang",
  "breakover",
  "payload",
  "towing",
  "tongue weight",
  "bed rack",
  "rooftop tent",
  "under-bed spare",
  "rear suspension",
  "solid front and rear axles",
  "coil springs",
  "control arms",
  "track bars",
  "caster",
  "pinion angle",
  "axle centering",
  "driveshaft",
  "brake lines",
  "abs wires",
  "wheel offset",
  "backspacing",
  "sway-bar-connected",
  "spacer lift",
  "hardtop and soft top",
  "gas and diesel",
  "solar",
  "stage 4"
];
const gladiatorClusterHtml = gladiatorRoutes
  .map((route) => readBuildFile(join(route.replace(/^\//, ""), "index.html")))
  .join("\n")
  .toLowerCase();

for (const topic of gladiatorRequiredTopics) {
  if (!gladiatorClusterHtml.includes(topic)) {
    errors.push(`Jeep Gladiator cluster is missing required topic: ${topic}.`);
  }
}

for (const route of gladiatorRoutes) {
  const incomingLinks = pages.reduce((count, page) => {
    const html = readBuildFile(pageOutputPath(page));
    return count + (html.includes(`href="${route}"`) ? 1 : 0);
  }, 0);
  if (incomingLinks === 0) {
    errors.push(`${route} is an orphan page.`);
  }
}

const gladiatorHubRoute = "/vehicles/jeep-gladiator";
const gladiatorGuideRoutes = gladiatorRoutes.filter(
  (route) => route !== gladiatorHubRoute
);
const gladiatorHubHtml = readBuildFile(
  join("vehicles", "jeep-gladiator", "index.html")
);

if (!homeHtml.includes(`href="${gladiatorHubRoute}"`)) {
  errors.push("Jeep Gladiator hub is not linked from the homepage.");
}
if (!vehiclesDirectoryHtml.includes(`href="${gladiatorHubRoute}"`)) {
  errors.push("Jeep Gladiator hub is not linked from /vehicles.");
}

for (const guideRoute of gladiatorGuideRoutes) {
  if (!gladiatorHubHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Jeep Gladiator hub does not link to ${guideRoute}.`);
  }
  const guideCard =
    gladiatorHubHtml.match(
      new RegExp(
        `<a class="related-guide-card is-published" href="${guideRoute.replaceAll("/", "\\/")}"[^>]*>[\\s\\S]*?<\\/a>`
      )
    )?.[0] || "";
  for (const expected of [
    'data-analytics-event="guide_click"',
    'data-analytics-location="article_featured"',
    'data-vehicle-slug="jeep-gladiator"',
    "<h3>",
    "<p>",
    "<strong>Read guide</strong>"
  ]) {
    requireIncludes(guideCard, expected, `Jeep Gladiator hub card for ${guideRoute}`);
  }

  const guideHtml = readBuildFile(
    join(guideRoute.replace(/^\//, ""), "index.html")
  );
  if (
    !guideHtml.includes(
      'class="article-back-link" href="/vehicles/jeep-gladiator"'
    )
  ) {
    errors.push(`${guideRoute} does not visibly link back to all Jeep Gladiator guides.`);
  }

  const relatedGuideLinks = [
    ...guideHtml.matchAll(
      /<a class="related-guide-card is-published" href="(\/vehicles\/jeep-gladiator\/[^"]+)"/g
    )
  ].map((match) => match[1]);
  if (new Set(relatedGuideLinks).size < 2) {
    errors.push(`${guideRoute} must link to at least two related Jeep Gladiator guides.`);
  }
}

const coloradoRoutes = vehicleRoutes.filter((route) =>
  route.startsWith("/vehicles/chevrolet-colorado")
);
const coloradoRequiredTopics = [
  "2023-present",
  "wt",
  "lt",
  "trail boss",
  "z71",
  "zr2",
  "zr2 bison",
  "factory ride height",
  "multimatic dssv",
  "track width",
  "locking",
  "drive modes",
  "payload",
  "towing",
  "tongue weight",
  "independent front suspension",
  "rear solid axle",
  "rear leaf springs",
  "upper control arms",
  "tie rods",
  "cv joints",
  "caster",
  "camber",
  "toe",
  "bump stops",
  "jounce",
  "wheel offset",
  "backspacing",
  "full suspension compression",
  "under-bed spare",
  "leveling",
  "top spacer",
  "preload spacer",
  "add-a-leaf",
  "differential-drop",
  "bed rack",
  "rooftop",
  "solar",
  "stage 4"
];
const coloradoClusterHtml = coloradoRoutes
  .map((route) => readBuildFile(join(route.replace(/^\//, ""), "index.html")))
  .join("\n")
  .toLowerCase();

for (const topic of coloradoRequiredTopics) {
  if (!coloradoClusterHtml.includes(topic)) {
    errors.push(`Chevrolet Colorado cluster is missing required topic: ${topic}.`);
  }
}

for (const route of coloradoRoutes) {
  const incomingLinks = pages.reduce((count, page) => {
    const html = readBuildFile(pageOutputPath(page));
    return count + (html.includes(`href="${route}"`) ? 1 : 0);
  }, 0);
  if (incomingLinks === 0) {
    errors.push(`${route} is an orphan page.`);
  }
}

const coloradoHubRoute = "/vehicles/chevrolet-colorado";
const coloradoGuideRoutes = coloradoRoutes.filter(
  (route) => route !== coloradoHubRoute
);
const coloradoHubHtml = readBuildFile(
  join("vehicles", "chevrolet-colorado", "index.html")
);

if (!homeHtml.includes(`href="${coloradoHubRoute}"`)) {
  errors.push("Chevrolet Colorado hub is not linked from the homepage.");
}
if (!vehiclesDirectoryHtml.includes(`href="${coloradoHubRoute}"`)) {
  errors.push("Chevrolet Colorado hub is not linked from /vehicles.");
}

for (const guideRoute of coloradoGuideRoutes) {
  if (!coloradoHubHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Chevrolet Colorado hub does not link to ${guideRoute}.`);
  }
  const guideCard =
    coloradoHubHtml.match(
      new RegExp(
        `<a class="related-guide-card is-published" href="${guideRoute.replaceAll("/", "\\/")}"[^>]*>[\\s\\S]*?<\\/a>`
      )
    )?.[0] || "";
  for (const expected of [
    'data-analytics-event="guide_click"',
    'data-analytics-location="article_featured"',
    'data-vehicle-slug="chevrolet-colorado"',
    "<h3>",
    "<p>",
    "<strong>Read guide</strong>"
  ]) {
    requireIncludes(guideCard, expected, `Chevrolet Colorado hub card for ${guideRoute}`);
  }

  const guideHtml = readBuildFile(
    join(guideRoute.replace(/^\//, ""), "index.html")
  );
  if (
    !guideHtml.includes(
      'class="article-back-link" href="/vehicles/chevrolet-colorado"'
    )
  ) {
    errors.push(`${guideRoute} does not visibly link back to all Chevrolet Colorado guides.`);
  }

  const relatedGuideLinks = [
    ...guideHtml.matchAll(
      /<a class="related-guide-card is-published" href="(\/vehicles\/chevrolet-colorado\/[^"]+)"/g
    )
  ].map((match) => match[1]);
  if (new Set(relatedGuideLinks).size < 2) {
    errors.push(`${guideRoute} must link to at least two related Chevrolet Colorado guides.`);
  }
}

for (const page of pages) {
  const html = readBuildFile(pageOutputPath(page));
  requireIncludes(
    html,
    'href="/vehicles"',
    `dist/${pageOutputPath(page).replaceAll("\\", "/")}`
  );

  const footer = html.match(/<footer class="footer">([\s\S]*?)<\/footer>/)?.[1] || "";
  for (const guideRoute of [
    ...tacomaGuideRoutes,
    ...wranglerGuideRoutes,
    ...broncoGuideRoutes,
    ...gladiatorGuideRoutes,
    ...coloradoGuideRoutes
  ]) {
    if (footer.includes(`href="${guideRoute}"`)) {
      errors.push(
        `Global footer must not list individual vehicle guide: ${guideRoute}.`
      );
    }
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
const buildSetupParameterBlock =
  analyticsSource.match(/build_setup_click:\s*\[([\s\S]*?)\]/)?.[1] || "";

for (const requiredParameter of [
  '"cta_location"',
  '"page_type"',
  '"vehicle_slug"'
]) {
  if (!buildSetupParameterBlock.includes(requiredParameter)) {
    errors.push(`build_setup_click is missing ${requiredParameter}.`);
  }
}
const vehicleGuideParameterBlock =
  analyticsSource.match(/vehicle_guide_click:\s*\[([\s\S]*?)\]/)?.[1] || "";
for (const requiredParameter of [
  '"vehicle_slug"',
  '"cta_location"',
  '"page_type"',
  '"page_path"'
]) {
  if (!vehicleGuideParameterBlock.includes(requiredParameter)) {
    errors.push(`vehicle_guide_click is missing ${requiredParameter}.`);
  }
}
if (vehicleGuideParameterBlock.includes('"link_location"')) {
  errors.push("vehicle_guide_click still contains stale link_location.");
}

for (const staleParameter of [
  '"page_path"',
  '"vehicle_context"',
  '"destination_type"'
]) {
  if (buildSetupParameterBlock.includes(staleParameter)) {
    errors.push(`build_setup_click contains stale parameter ${staleParameter}.`);
  }
}
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
  build_setup_click: ["data-analytics-location"],
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

if ((analyticsSource.match(/event\.preventDefault\(\)/g) || []).length !== 2) {
  errors.push("Consent controls must defensively prevent only their two button defaults.");
}

if (analyticsSource.includes("settingsButton.focus(")) {
  errors.push("Consent choice must not move focus to the footer settings control.");
}

for (const prohibitedScrollBehavior of [
  "scrollIntoView",
  "location.hash",
  "location.href",
  "form.submit"
]) {
  if (analyticsSource.includes(prohibitedScrollBehavior)) {
    errors.push(`Consent helper contains prohibited behavior: ${prohibitedScrollBehavior}.`);
  }
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
    requireIncludes(
      html,
      '<button class="consent-button consent-button-primary" type="button" data-consent-choice="granted">',
      label
    );
    requireIncludes(
      html,
      '<button class="consent-button consent-button-secondary" type="button" data-consent-choice="denied">',
      label
    );
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
    /<(?:a|button|span|details)\b[^>]*\bdata-analytics-event="([^"]+)"[^>]*>/g
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

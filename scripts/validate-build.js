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
import {
  getVehicleImage,
  vehicleImages
} from "../src/content/vehicle-images.js";

const root = process.cwd();
const dist = join(root, "dist");
const errors = [];
const articleDateTimePattern =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/;

function socialImageForPage(page) {
  if (page.structuredData === "vehicleHub") {
    const vehicleSlug =
      page.content?.vehicle?.slug ||
      page.route.match(/^\/vehicles\/([^/]+)$/)?.[1];
    const image = getVehicleImage(vehicleSlug)?.hero;
    if (image) {
      return {
        path: image.src,
        width: image.width,
        height: image.height,
        alt: image.alt
      };
    }
  }

  return site.socialImage;
}

function readWebpDimensions(buffer) {
  if (
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WEBP"
  ) {
    return null;
  }

  const chunk = buffer.toString("ascii", 12, 16);
  const offset = 20;
  if (chunk === "VP8X") {
    return {
      width: 1 + buffer.readUIntLE(offset + 4, 3),
      height: 1 + buffer.readUIntLE(offset + 7, 3)
    };
  }
  if (chunk === "VP8 ") {
    return {
      width: buffer.readUInt16LE(offset + 6) & 0x3fff,
      height: buffer.readUInt16LE(offset + 8) & 0x3fff
    };
  }
  if (chunk === "VP8L") {
    const bits = buffer.readUInt32LE(offset + 1);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1
    };
  }

  return null;
}

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
if (configuredTacomaRoutes.length !== 6) {
  errors.push(
    `Expected exactly six configured Tacoma routes, found ${configuredTacomaRoutes.length}.`
  );
}

const requiredVehicleGuideSlugs = [
  "first-upgrades",
  "suspension",
  "tire-size",
  "lift-kit",
  "overland-build"
];
const requiredVehicleSlugs = [
  "toyota-4runner",
  "toyota-tacoma",
  "jeep-wrangler-jl",
  "ford-bronco",
  "jeep-gladiator",
  "chevrolet-colorado",
  "ford-ranger",
  "ford-f150",
  "toyota-tundra",
  "nissan-frontier"
];
const configuredRouteSet = new Set(pages.map((page) => page.route));

for (const vehicleSlug of requiredVehicleSlugs) {
  const hubRoute = `/vehicles/${vehicleSlug}`;
  if (!configuredRouteSet.has(hubRoute)) {
    errors.push(`Required vehicle hub is missing: ${hubRoute}.`);
  }

  for (const guideSlug of requiredVehicleGuideSlugs) {
    const guideRoute = `${hubRoute}/${guideSlug}`;
    if (!configuredRouteSet.has(guideRoute)) {
      errors.push(`Required vehicle guide is missing: ${guideRoute}.`);
    }
  }
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

const configuredRangerRoutes = pages.filter((page) =>
  page.route.startsWith("/vehicles/ford-ranger")
);
if (configuredRangerRoutes.length !== 6) {
  errors.push(
    `Expected exactly six configured Ford Ranger routes, found ${configuredRangerRoutes.length}.`
  );
}

const configuredF150Routes = pages.filter((page) =>
  page.route.startsWith("/vehicles/ford-f150")
);
if (configuredF150Routes.length !== 6) {
  errors.push(
    `Expected exactly six configured Ford F-150 routes, found ${configuredF150Routes.length}.`
  );
}

const configuredTundraRoutes = pages.filter((page) =>
  page.route.startsWith("/vehicles/toyota-tundra")
);
if (configuredTundraRoutes.length !== 6) {
  errors.push(
    `Expected exactly six configured Toyota Tundra routes, found ${configuredTundraRoutes.length}.`
  );
}

const configuredFrontierRoutes = pages.filter((page) =>
  page.route.startsWith("/vehicles/nissan-frontier")
);
if (configuredFrontierRoutes.length !== 6) {
  errors.push(
    `Expected exactly six configured Nissan Frontier routes, found ${configuredFrontierRoutes.length}.`
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
  join("vehicles", "toyota-tacoma", "lift-kit", "index.html"),
  join("vehicles", "toyota-tacoma", "overland-build", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "first-upgrades", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "suspension", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "tire-size", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "lift-kit", "index.html"),
  join("vehicles", "jeep-wrangler-jl", "overland-build", "index.html")
];

requiredFiles.push(
  ...Object.values(vehicleImages).map((entry) =>
    entry.directory.src.replace(/^\//, "")
  )
);

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
  "/images/*",
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

const expectedVehicleImageSlugs = [
  "toyota-4runner",
  "toyota-tacoma",
  "jeep-wrangler-jl",
  "ford-bronco",
  "jeep-gladiator",
  "chevrolet-colorado",
  "ford-ranger",
  "ford-f150",
  "toyota-tundra",
  "nissan-frontier"
];
const configuredVehicleImageSlugs = Object.keys(vehicleImages);

if (
  configuredVehicleImageSlugs.length !== expectedVehicleImageSlugs.length ||
  !expectedVehicleImageSlugs.every((slug) =>
    configuredVehicleImageSlugs.includes(slug)
  )
) {
  errors.push("Vehicle image registry must contain exactly the ten published vehicle hubs.");
}

const vehicleImageSourceDocPath = join(
  root,
  "docs",
  "vehicle-image-sources.md"
);
const vehicleImageSourceDoc = existsSync(vehicleImageSourceDocPath)
  ? readFileSync(vehicleImageSourceDocPath, "utf8")
  : "";

if (!vehicleImageSourceDoc) {
  errors.push("Missing docs/vehicle-image-sources.md.");
}

for (const slug of expectedVehicleImageSlugs) {
  const entry = getVehicleImage(slug);
  if (!entry?.directory || !entry?.hero || !entry?.source) {
    errors.push(`Vehicle image registry is incomplete for ${slug}.`);
    continue;
  }

  for (const [placement, image] of [
    ["directory", entry.directory],
    ["hero", entry.hero]
  ]) {
    if (
      !image.src.startsWith("/images/vehicles/") ||
      !image.src.endsWith(".webp") ||
      /^https?:/i.test(image.src)
    ) {
      errors.push(`${slug} ${placement} image must use a local WebP path.`);
    }
    if (!image.alt || image.alt.length < 20) {
      errors.push(`${slug} ${placement} image is missing meaningful alt text.`);
    }
    if (
      !Number.isInteger(image.width) ||
      !Number.isInteger(image.height) ||
      !image.objectPosition
    ) {
      errors.push(`${slug} ${placement} image metadata is incomplete.`);
    }
    if (!/^\d{1,3}% \d{1,3}%$/.test(image.objectPosition)) {
      errors.push(`${slug} ${placement} image needs an explicit two-axis objectPosition.`);
    }
  }

  const relativePath = entry.directory.src.replace(/^\//, "");
  const publicPath = join(root, "public", relativePath);
  const builtPath = join(dist, relativePath);
  for (const [label, filePath] of [
    ["source", publicPath],
    ["build", builtPath]
  ]) {
    if (!existsSync(filePath)) {
      errors.push(`${slug} ${label} image file is missing.`);
      continue;
    }

    const file = readFileSync(filePath);
    const dimensions = readWebpDimensions(file);
    if (
      !dimensions ||
      dimensions.width !== entry.directory.width ||
      dimensions.height !== entry.directory.height
    ) {
      errors.push(`${slug} ${label} WebP dimensions do not match the registry.`);
    }
    if (file.length > 300_000) {
      errors.push(`${slug} ${label} WebP exceeds the 300 KB delivery budget.`);
    }
  }

  for (const field of [
    "publisher",
    "pageUrl",
    "licenseName",
    "licenseUrl",
    "author",
    "usageBasis",
    "retrievedOn"
  ]) {
    if (!entry.source[field]) {
      errors.push(`${slug} source metadata is missing ${field}.`);
    }
  }

  if (
    !entry.source.pageUrl.startsWith("https://") ||
    !entry.source.licenseUrl.startsWith("https://")
  ) {
    errors.push(`${slug} source and license URLs must use HTTPS.`);
  }
  if (!vehicleImageSourceDoc.includes(entry.directory.src)) {
    errors.push(`${slug} is missing from the vehicle image source register.`);
  }
}

for (const rejectedSource of [
  "2023_Toyota_Tacoma_Chrome_SX_Package_001",
  "Jeep_Wrangler_(JL)_090254",
  "Ford_Bronco_(U725)_Washington_DC_Metro_Area",
  "Ford_Ranger_Raptor_(P703)_1X7A6776"
]) {
  if (
    JSON.stringify(vehicleImages).includes(rejectedSource) ||
    vehicleImageSourceDoc.includes(rejectedSource)
  ) {
    errors.push(`Rejected crop source remains configured: ${rejectedSource}.`);
  }
}

const allTitles = new Map();
const allDescriptions = new Map();

for (const page of pages) {
  const outputPath = pageOutputPath(page);
  const html = readBuildFile(outputPath);
  const canonical = `${site.domain}${page.route === "/" ? "/" : page.route}`;
  const socialImage = socialImageForPage(page);
  const imageUrl = `${site.domain}${socialImage.path}`;
  const label = `dist/${outputPath.replaceAll("\\", "/")}`;

  requireIncludes(html, `<title>${page.title}</title>`, label);
  requireIncludes(html, `<meta name="description" content="${page.description}" />`, label);
  requireIncludes(html, `<link rel="canonical" href="${canonical}" />`, label);
  requireIncludes(html, `<meta property="og:url" content="${canonical}" />`, label);
  requireIncludes(html, `<meta property="og:image" content="${imageUrl}" />`, label);
  requireIncludes(
    html,
    `<meta property="og:image:width" content="${socialImage.width}" />`,
    label
  );
  requireIncludes(
    html,
    `<meta property="og:image:height" content="${socialImage.height}" />`,
    label
  );
  requireIncludes(
    html,
    `<meta property="og:image:alt" content="${socialImage.alt}" />`,
    label
  );
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
  requireIncludes(html, '<script type="module" src="/src/main.js?v=phase-7b"></script>', label);

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
const vehicleDirectoryCardRule =
  stylesheet.match(
    /\.vehicle-directory-grid \.vehicle-card--visual\s*\{([\s\S]*?)\}/
  )?.[1] || "";
const vehiclePhotoRule =
  stylesheet.match(/\.vehicle-media--photo img\s*\{([\s\S]*?)\}/)?.[1] || "";
const vehicleMediaRule =
  stylesheet.match(/\.vehicle-media\s*\{([\s\S]*?)\}/)?.[1] || "";
const vehicleOverlayRule =
  stylesheet.match(/\.vehicle-card__overlay\s*\{([\s\S]*?)\}/)?.[1] || "";
const vehicleContentLayerRule =
  stylesheet.match(/\.vehicle-card__content\s*\{([\s\S]*?)\}/)?.[1] || "";
const vehicleDirectoryContentRule =
  stylesheet.match(
    /\.vehicle-directory-grid \.vehicle-card__content\s*\{([\s\S]*?)\}/
  )?.[1] || "";
const vehicleTitleRule =
  stylesheet.match(/\.vehicle-card__title\s*\{([\s\S]*?)\}/)?.[1] || "";
const vehicleDescriptionRule =
  stylesheet.match(/\.vehicle-card-description\s*\{([\s\S]*?)\}/)?.[1] || "";
const vehicleStatusRule =
  stylesheet.match(/\.vehicle-card__status\s*\{([\s\S]*?)\}/)?.[1] || "";
const vehicleCtaRule =
  stylesheet.match(/\.vehicle-card__cta\s*\{([\s\S]*?)\}/)?.[1] || "";
const vehicleHubHeroRule =
  stylesheet.match(/\.vehicle-hub-hero\s*\{([\s\S]*?)\}/)?.[1] || "";
const vehicleHubMediaRule =
  stylesheet.match(/\.vehicle-hub-media\s*\{([\s\S]*?)\}/)?.[1] || "";
const mobileVehicleRules =
  stylesheet.match(/@media \(max-width:\s*620px\)\s*\{([\s\S]*)$/)?.[1] || "";

if (
  !/min-width:\s*0/.test(vehicleCardRule) ||
  !/isolation:\s*isolate/.test(vehicleCardRule) ||
  /z-index:\s*-|filter:|mix-blend-mode:|backdrop-filter:/.test(vehicleCardRule)
) {
  errors.push("Shared vehicle cards must use an isolated, non-filtered stacking context.");
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
  !/height:\s*360px/.test(vehicleDirectoryCardRule) ||
  !/min-height:\s*360px/.test(vehicleDirectoryCardRule) ||
  !/max-height:\s*360px/.test(vehicleDirectoryCardRule)
) {
  errors.push("Vehicle directory cards must keep a stable 360px desktop height.");
}
if (
  !/position:\s*absolute/.test(vehiclePhotoRule) ||
  !/inset:\s*0/.test(vehiclePhotoRule) ||
  !/object-fit:\s*cover/.test(vehiclePhotoRule)
) {
  errors.push("Vehicle directory photos must remain an absolute cover layer.");
}
if (
  !/z-index:\s*0/.test(vehicleMediaRule) ||
  /z-index:\s*-/.test(vehicleMediaRule) ||
  !/position:\s*absolute/.test(vehicleOverlayRule) ||
  !/inset:\s*0/.test(vehicleOverlayRule) ||
  !/z-index:\s*1/.test(vehicleOverlayRule) ||
  !/pointer-events:\s*none/.test(vehicleOverlayRule) ||
  !/linear-gradient\([\s\S]*?90deg/.test(vehicleOverlayRule) ||
  !/linear-gradient\([\s\S]*?0deg/.test(vehicleOverlayRule) ||
  /opacity:|filter:|mix-blend-mode:|backdrop-filter:|z-index:\s*-/.test(
    vehicleOverlayRule
  )
) {
  errors.push("Vehicle cards must use one cross-browser overlay layer at z-index 1.");
}
if (
  !/position:\s*relative/.test(vehicleContentLayerRule) ||
  !/z-index:\s*2/.test(vehicleContentLayerRule) ||
  !/opacity:\s*1/.test(vehicleContentLayerRule) ||
  !/filter:\s*none/.test(vehicleContentLayerRule) ||
  !/mix-blend-mode:\s*normal/.test(vehicleContentLayerRule) ||
  /z-index:\s*-|backdrop-filter:/.test(vehicleContentLayerRule)
) {
  errors.push("Vehicle card content must remain above the media and contrast layers.");
}
if (
  !/position:\s*absolute/.test(vehicleDirectoryContentRule) ||
  !/max-width:\s*560px/.test(vehicleDirectoryContentRule) ||
  !/padding:\s*0/.test(vehicleDirectoryContentRule) ||
  !/border:\s*0/.test(vehicleDirectoryContentRule) ||
  !/background:\s*transparent/.test(vehicleDirectoryContentRule) ||
  /linear-gradient|rgba\(/.test(vehicleDirectoryContentRule)
) {
  errors.push("Vehicle directory content must not render as a nested panel.");
}
if (
  !/color:\s*#f7f4ec/.test(vehicleTitleRule) ||
  !/color:\s*rgba\(247,\s*244,\s*236,\s*0\.84\)/.test(
    vehicleDescriptionRule
  ) ||
  !/width:\s*auto/.test(vehicleStatusRule) ||
  !/max-width:\s*max-content/.test(vehicleStatusRule) ||
  !/opacity:\s*1/.test(vehicleStatusRule) ||
  !/color:\s*#ff842b/.test(vehicleCtaRule)
) {
  errors.push("Vehicle card text and controls must retain high-contrast colors.");
}
if (
  !/grid-template-columns:\s*minmax\(0,\s*1\.65fr\)\s*minmax\(280px,\s*0\.85fr\)/.test(
    vehicleHubHeroRule
  ) ||
  /100vw|margin-(?:left|right):\s*-|transform:\s*translate/.test(vehicleHubHeroRule)
) {
  errors.push("Vehicle hub hero must use the compact contained two-column grid.");
}
if (
  !/max-width:\s*400px/.test(vehicleHubMediaRule) ||
  !/max-height:\s*300px/.test(vehicleHubMediaRule) ||
  !/aspect-ratio:\s*4\s*\/\s*3/.test(vehicleHubMediaRule) ||
  !/justify-self:\s*end/.test(vehicleHubMediaRule)
) {
  errors.push("Vehicle hub media must keep the compact 400px by 4:3 constraint.");
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
if (
  !/\.vehicle-hub-media\s*\{[\s\S]*?max-width:\s*none[\s\S]*?aspect-ratio:\s*16\s*\/\s*10/.test(
    mobileVehicleRules
  )
) {
  errors.push("Vehicle hub media must use the full-width 16:10 mobile layout.");
}

const homeComponentSource = readFileSync(
  join(root, "src", "components", "home", "index.js"),
  "utf8"
);
const vehicleDirectorySource = readFileSync(
  join(root, "src", "components", "vehicles", "index.js"),
  "utf8"
);
const vehicleCardSource = readFileSync(
  join(root, "src", "components", "vehicles", "card.js"),
  "utf8"
);
for (const requiredClass of [
  "vehicle-media",
  "vehicle-card__overlay",
  "vehicle-card__content",
  "vehicle-card__status",
  "vehicle-card__cta"
]) {
  if (!vehicleCardSource.includes(requiredClass)) {
    errors.push(`Shared vehicle card is missing ${requiredClass}.`);
  }
}
if (
  (vehicleCardSource.match(/class="vehicle-card__overlay"/g) || []).length !== 1
) {
  errors.push("Shared vehicle card must define exactly one readability overlay.");
}
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
  "Detailed guide collections now cover Toyota 4Runner, the 2016-2023 Toyota Tacoma, the 2018-present Jeep Wrangler JL, the 2021-present Ford Bronco, the 2020-present Jeep Gladiator JT, the 2023-present Chevrolet Colorado, the 2024-present US Ford Ranger, and the 2021-present Ford F-150",
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
requireIncludes(homeHtml, 'href="/vehicles/ford-ranger"', "dist/index.html");
requireIncludes(homeHtml, 'data-vehicle-slug="ford-ranger"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/ford-f150"', "dist/index.html");
requireIncludes(homeHtml, 'data-vehicle-slug="ford-f150"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/toyota-tundra"', "dist/index.html");
requireIncludes(homeHtml, 'data-vehicle-slug="toyota-tundra"', "dist/index.html");
requireIncludes(homeHtml, 'href="/vehicles/nissan-frontier"', "dist/index.html");
requireIncludes(homeHtml, 'data-vehicle-slug="nissan-frontier"', "dist/index.html");
requireIncludes(homeHtml, 'data-analytics-location="homepage_vehicle_card"', "dist/index.html");
requireIncludes(
  homeHtml,
  '<span class="vehicle-card-scope vehicle-card__meta">2016–2023 · 3rd Gen</span>',
  "dist/index.html"
);
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

const homepageRangerCard =
  homeHtml.match(
    /<a class="vehicle-card vehicle-card--visual is-published" href="\/vehicles\/ford-ranger"[^>]*>[\s\S]*?<\/a>/
  )?.[0] || "";
for (const expected of [
  'data-analytics-event="vehicle_guide_click"',
  'data-analytics-location="homepage_vehicle_card"',
  'data-vehicle-slug="ford-ranger"',
  "Ford Ranger",
  "2024-present · US generation",
  "Suspension, tire fitment, lift, payload, and overland guidance",
  "View Ranger guides"
]) {
  requireIncludes(homepageRangerCard, expected, "homepage Ford Ranger vehicle card");
}

const homepageF150Card =
  homeHtml.match(
    /<a class="vehicle-card vehicle-card--visual is-published" href="\/vehicles\/ford-f150"[^>]*>[\s\S]*?<\/a>/
  )?.[0] || "";
for (const expected of [
  'data-analytics-event="vehicle_guide_click"',
  'data-analytics-location="homepage_vehicle_card"',
  'data-vehicle-slug="ford-f150"',
  "Ford F-150",
  "2021-present · FX4, Tremor and Raptor",
  "Suspension, tire fitment, lift, payload, and overland guidance",
  "View F-150 guides"
]) {
  requireIncludes(homepageF150Card, expected, "homepage Ford F-150 vehicle card");
}

const homepageTundraCard =
  homeHtml.match(
    /<a class="vehicle-card vehicle-card--visual is-published" href="\/vehicles\/toyota-tundra"[^>]*>[\s\S]*?<\/a>/
  )?.[0] || "";
for (const expected of [
  'data-analytics-event="vehicle_guide_click"',
  'data-analytics-location="homepage_vehicle_card"',
  'data-vehicle-slug="toyota-tundra"',
  "Toyota Tundra",
  "2022–present · 3rd Gen",
  "Suspension, tire fitment, lift, payload, towing, and overland guidance",
  "View Tundra guides"
]) {
  requireIncludes(homepageTundraCard, expected, "homepage Toyota Tundra vehicle card");
}

const homepageFrontierCard =
  homeHtml.match(
    /<a class="vehicle-card vehicle-card--visual is-published" href="\/vehicles\/nissan-frontier"[^>]*>[\s\S]*?<\/a>/
  )?.[0] || "";
for (const expected of [
  'data-analytics-event="vehicle_guide_click"',
  'data-analytics-location="homepage_vehicle_card"',
  'data-vehicle-slug="nissan-frontier"',
  "Nissan Frontier",
  "2022–present · 3rd Gen",
  "Suspension, tire fitment, lift, payload, and overland guidance",
  "View Frontier guides"
]) {
  requireIncludes(homepageFrontierCard, expected, "homepage Nissan Frontier vehicle card");
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
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/ford-ranger"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/ford-f150"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/toyota-tundra"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'href="/vehicles/nissan-frontier"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-analytics-location="vehicles_directory_card"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="toyota-tacoma"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="jeep-wrangler-jl"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="ford-bronco"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="jeep-gladiator"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="chevrolet-colorado"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="ford-ranger"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="ford-f150"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="toyota-tundra"', "dist/vehicles/index.html");
requireIncludes(vehiclesDirectoryHtml, 'data-vehicle-slug="nissan-frontier"', "dist/vehicles/index.html");
requireIncludes(
  vehiclesDirectoryHtml,
  "<summary>Vehicle image credits</summary>",
  "dist/vehicles/index.html"
);

for (const slug of expectedVehicleImageSlugs) {
  const image = getVehicleImage(slug).directory;
  requireIncludes(
    vehiclesDirectoryHtml,
    `<img src="${image.src}" alt="${image.alt}" width="${image.width}" height="${image.height}"`,
    "dist/vehicles/index.html"
  );
}

const directoryVehicleImageCount = (
  vehiclesDirectoryHtml.match(/\bdata-vehicle-image\b/g) || []
).length;
if (directoryVehicleImageCount !== expectedVehicleImageSlugs.length) {
  errors.push(
    `Vehicle directory contains ${directoryVehicleImageCount} vehicle images, expected ${expectedVehicleImageSlugs.length}.`
  );
}
if (/<img\b[^>]*src="https?:\/\//i.test(vehiclesDirectoryHtml)) {
  errors.push("Vehicle directory must not load remote images.");
}
if (homeHtml.includes("/images/vehicles/")) {
  errors.push("Shared vehicle images must not be added to the homepage in Phase 7A.");
}

const prohibitedTacomaGlobalRoutes = [
  "/vehicles/toyota-tacoma/first-upgrades",
  "/vehicles/toyota-tacoma/suspension",
  "/vehicles/toyota-tacoma/tire-size",
  "/vehicles/toyota-tacoma/lift-kit",
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
const prohibitedRangerGlobalRoutes = [
  "/vehicles/ford-ranger/first-upgrades",
  "/vehicles/ford-ranger/suspension",
  "/vehicles/ford-ranger/tire-size",
  "/vehicles/ford-ranger/lift-kit",
  "/vehicles/ford-ranger/overland-build"
];
const prohibitedF150GlobalRoutes = [
  "/vehicles/ford-f150/first-upgrades",
  "/vehicles/ford-f150/suspension",
  "/vehicles/ford-f150/tire-size",
  "/vehicles/ford-f150/lift-kit",
  "/vehicles/ford-f150/overland-build"
];
const prohibitedTundraGlobalRoutes = [
  "/vehicles/toyota-tundra/first-upgrades",
  "/vehicles/toyota-tundra/suspension",
  "/vehicles/toyota-tundra/tire-size",
  "/vehicles/toyota-tundra/lift-kit",
  "/vehicles/toyota-tundra/overland-build"
];
const prohibitedFrontierGlobalRoutes = [
  "/vehicles/nissan-frontier/first-upgrades",
  "/vehicles/nissan-frontier/suspension",
  "/vehicles/nissan-frontier/tire-size",
  "/vehicles/nissan-frontier/lift-kit",
  "/vehicles/nissan-frontier/overland-build"
];
for (const guideRoute of [
  ...prohibitedTacomaGlobalRoutes,
  ...prohibitedWranglerGlobalRoutes,
  ...prohibitedBroncoGlobalRoutes,
  ...prohibitedGladiatorGlobalRoutes,
  ...prohibitedColoradoGlobalRoutes,
  ...prohibitedRangerGlobalRoutes,
  ...prohibitedF150GlobalRoutes,
  ...prohibitedTundraGlobalRoutes,
  ...prohibitedFrontierGlobalRoutes
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
  "/vehicles/toyota-tacoma/lift-kit",
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
  "/vehicles/chevrolet-colorado/overland-build",
  "/vehicles/ford-ranger",
  "/vehicles/ford-ranger/first-upgrades",
  "/vehicles/ford-ranger/suspension",
  "/vehicles/ford-ranger/tire-size",
  "/vehicles/ford-ranger/lift-kit",
  "/vehicles/ford-ranger/overland-build",
  "/vehicles/ford-f150",
  "/vehicles/ford-f150/first-upgrades",
  "/vehicles/ford-f150/suspension",
  "/vehicles/ford-f150/tire-size",
  "/vehicles/ford-f150/lift-kit",
  "/vehicles/ford-f150/overland-build",
  "/vehicles/toyota-tundra",
  "/vehicles/toyota-tundra/first-upgrades",
  "/vehicles/toyota-tundra/suspension",
  "/vehicles/toyota-tundra/tire-size",
  "/vehicles/toyota-tundra/lift-kit",
  "/vehicles/toyota-tundra/overland-build",
  "/vehicles/nissan-frontier",
  "/vehicles/nissan-frontier/first-upgrades",
  "/vehicles/nissan-frontier/suspension",
  "/vehicles/nissan-frontier/tire-size",
  "/vehicles/nissan-frontier/lift-kit",
  "/vehicles/nissan-frontier/overland-build"
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
    "/vehicles/toyota-tacoma/lift-kit",
    "/vehicles/toyota-tacoma/overland-build",
    "/vehicles/toyota-4runner"
  ],
  "/vehicles/toyota-tacoma/first-upgrades": [
    "/vehicles/toyota-tacoma",
    "/vehicles/toyota-tacoma/suspension",
    "/vehicles/toyota-tacoma/tire-size",
    "/vehicles/toyota-tacoma/lift-kit",
    "/vehicles/toyota-tacoma/overland-build"
  ],
  "/vehicles/toyota-tacoma/suspension": [
    "/vehicles/toyota-tacoma",
    "/vehicles/toyota-tacoma/first-upgrades",
    "/vehicles/toyota-tacoma/tire-size",
    "/vehicles/toyota-tacoma/lift-kit",
    "/vehicles/toyota-tacoma/overland-build"
  ],
  "/vehicles/toyota-tacoma/tire-size": [
    "/vehicles/toyota-tacoma",
    "/vehicles/toyota-tacoma/first-upgrades",
    "/vehicles/toyota-tacoma/suspension",
    "/vehicles/toyota-tacoma/lift-kit",
    "/vehicles/toyota-tacoma/overland-build"
  ],
  "/vehicles/toyota-tacoma/lift-kit": [
    "/vehicles/toyota-tacoma",
    "/vehicles/toyota-tacoma/first-upgrades",
    "/vehicles/toyota-tacoma/suspension",
    "/vehicles/toyota-tacoma/tire-size",
    "/vehicles/toyota-tacoma/overland-build"
  ],
  "/vehicles/toyota-tacoma/overland-build": [
    "/vehicles/toyota-tacoma",
    "/vehicles/toyota-tacoma/first-upgrades",
    "/vehicles/toyota-tacoma/suspension",
    "/vehicles/toyota-tacoma/tire-size",
    "/vehicles/toyota-tacoma/lift-kit"
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
  ],
  "/vehicles/ford-ranger": [
    "/vehicles/ford-ranger/first-upgrades",
    "/vehicles/ford-ranger/suspension",
    "/vehicles/ford-ranger/tire-size",
    "/vehicles/ford-ranger/lift-kit",
    "/vehicles/ford-ranger/overland-build"
  ],
  "/vehicles/ford-ranger/first-upgrades": [
    "/vehicles/ford-ranger",
    "/vehicles/ford-ranger/suspension",
    "/vehicles/ford-ranger/tire-size",
    "/vehicles/ford-ranger/lift-kit",
    "/vehicles/ford-ranger/overland-build"
  ],
  "/vehicles/ford-ranger/suspension": [
    "/vehicles/ford-ranger",
    "/vehicles/ford-ranger/first-upgrades",
    "/vehicles/ford-ranger/tire-size",
    "/vehicles/ford-ranger/lift-kit",
    "/vehicles/ford-ranger/overland-build"
  ],
  "/vehicles/ford-ranger/tire-size": [
    "/vehicles/ford-ranger",
    "/vehicles/ford-ranger/first-upgrades",
    "/vehicles/ford-ranger/suspension",
    "/vehicles/ford-ranger/lift-kit",
    "/vehicles/ford-ranger/overland-build"
  ],
  "/vehicles/ford-ranger/lift-kit": [
    "/vehicles/ford-ranger",
    "/vehicles/ford-ranger/first-upgrades",
    "/vehicles/ford-ranger/suspension",
    "/vehicles/ford-ranger/tire-size",
    "/vehicles/ford-ranger/overland-build"
  ],
  "/vehicles/ford-ranger/overland-build": [
    "/vehicles/ford-ranger",
    "/vehicles/ford-ranger/first-upgrades",
    "/vehicles/ford-ranger/suspension",
    "/vehicles/ford-ranger/tire-size",
    "/vehicles/ford-ranger/lift-kit"
  ],
  "/vehicles/ford-f150": [
    "/vehicles/ford-f150/first-upgrades",
    "/vehicles/ford-f150/suspension",
    "/vehicles/ford-f150/tire-size",
    "/vehicles/ford-f150/lift-kit",
    "/vehicles/ford-f150/overland-build"
  ],
  "/vehicles/ford-f150/first-upgrades": [
    "/vehicles/ford-f150",
    "/vehicles/ford-f150/suspension",
    "/vehicles/ford-f150/tire-size",
    "/vehicles/ford-f150/overland-build"
  ],
  "/vehicles/ford-f150/suspension": [
    "/vehicles/ford-f150",
    "/vehicles/ford-f150/first-upgrades",
    "/vehicles/ford-f150/tire-size",
    "/vehicles/ford-f150/lift-kit",
    "/vehicles/ford-f150/overland-build"
  ],
  "/vehicles/ford-f150/tire-size": [
    "/vehicles/ford-f150",
    "/vehicles/ford-f150/first-upgrades",
    "/vehicles/ford-f150/suspension",
    "/vehicles/ford-f150/lift-kit",
    "/vehicles/ford-f150/overland-build"
  ],
  "/vehicles/ford-f150/lift-kit": [
    "/vehicles/ford-f150",
    "/vehicles/ford-f150/first-upgrades",
    "/vehicles/ford-f150/suspension",
    "/vehicles/ford-f150/tire-size",
    "/vehicles/ford-f150/overland-build"
  ],
  "/vehicles/ford-f150/overland-build": [
    "/vehicles/ford-f150",
    "/vehicles/ford-f150/first-upgrades",
    "/vehicles/ford-f150/suspension",
    "/vehicles/ford-f150/tire-size",
    "/vehicles/ford-f150/lift-kit"
  ],
  "/vehicles/toyota-tundra": [
    "/vehicles/toyota-tundra/first-upgrades",
    "/vehicles/toyota-tundra/suspension",
    "/vehicles/toyota-tundra/tire-size",
    "/vehicles/toyota-tundra/lift-kit",
    "/vehicles/toyota-tundra/overland-build"
  ],
  "/vehicles/toyota-tundra/first-upgrades": [
    "/vehicles/toyota-tundra",
    "/vehicles/toyota-tundra/suspension",
    "/vehicles/toyota-tundra/tire-size",
    "/vehicles/toyota-tundra/overland-build"
  ],
  "/vehicles/toyota-tundra/suspension": [
    "/vehicles/toyota-tundra",
    "/vehicles/toyota-tundra/first-upgrades",
    "/vehicles/toyota-tundra/tire-size",
    "/vehicles/toyota-tundra/lift-kit",
    "/vehicles/toyota-tundra/overland-build"
  ],
  "/vehicles/toyota-tundra/tire-size": [
    "/vehicles/toyota-tundra",
    "/vehicles/toyota-tundra/first-upgrades",
    "/vehicles/toyota-tundra/suspension",
    "/vehicles/toyota-tundra/lift-kit",
    "/vehicles/toyota-tundra/overland-build"
  ],
  "/vehicles/toyota-tundra/lift-kit": [
    "/vehicles/toyota-tundra",
    "/vehicles/toyota-tundra/first-upgrades",
    "/vehicles/toyota-tundra/suspension",
    "/vehicles/toyota-tundra/tire-size",
    "/vehicles/toyota-tundra/overland-build"
  ],
  "/vehicles/toyota-tundra/overland-build": [
    "/vehicles/toyota-tundra",
    "/vehicles/toyota-tundra/first-upgrades",
    "/vehicles/toyota-tundra/suspension",
    "/vehicles/toyota-tundra/tire-size",
    "/vehicles/toyota-tundra/lift-kit"
  ],
  "/vehicles/nissan-frontier": [
    "/vehicles/nissan-frontier/first-upgrades",
    "/vehicles/nissan-frontier/suspension",
    "/vehicles/nissan-frontier/tire-size",
    "/vehicles/nissan-frontier/lift-kit",
    "/vehicles/nissan-frontier/overland-build"
  ],
  "/vehicles/nissan-frontier/first-upgrades": [
    "/vehicles/nissan-frontier",
    "/vehicles/nissan-frontier/suspension",
    "/vehicles/nissan-frontier/tire-size",
    "/vehicles/nissan-frontier/overland-build"
  ],
  "/vehicles/nissan-frontier/suspension": [
    "/vehicles/nissan-frontier",
    "/vehicles/nissan-frontier/first-upgrades",
    "/vehicles/nissan-frontier/tire-size",
    "/vehicles/nissan-frontier/lift-kit",
    "/vehicles/nissan-frontier/overland-build"
  ],
  "/vehicles/nissan-frontier/tire-size": [
    "/vehicles/nissan-frontier",
    "/vehicles/nissan-frontier/first-upgrades",
    "/vehicles/nissan-frontier/suspension",
    "/vehicles/nissan-frontier/lift-kit",
    "/vehicles/nissan-frontier/overland-build"
  ],
  "/vehicles/nissan-frontier/lift-kit": [
    "/vehicles/nissan-frontier",
    "/vehicles/nissan-frontier/first-upgrades",
    "/vehicles/nissan-frontier/suspension",
    "/vehicles/nissan-frontier/tire-size",
    "/vehicles/nissan-frontier/overland-build"
  ],
  "/vehicles/nissan-frontier/overland-build": [
    "/vehicles/nissan-frontier",
    "/vehicles/nissan-frontier/first-upgrades",
    "/vehicles/nissan-frontier/suspension",
    "/vehicles/nissan-frontier/tire-size",
    "/vehicles/nissan-frontier/lift-kit"
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
  "/vehicles/toyota-tacoma/lift-kit",
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
  const vehicleImage = getVehicleImage(vehicleSlug);

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
    "chevrolet-colorado": "Verify model year, trim, drivetrain, suspension package",
    "ford-ranger": "Verify model year, trim, engine, drivetrain, FX4 or Raptor configuration",
    "ford-f150": "Verify model year, trim, cab, bed length, engine, drivetrain",
    "toyota-tundra": "Verify model year, grade, cab, bed length, drivetrain, powertrain",
    "nissan-frontier": "Verify model year, trim, cab, bed length, drivetrain, factory suspension"
  }[vehicleSlug] || "Always verify model year, trim, drivetrain, KDSS status";
  requireIncludes(html, expectedSafetyText, label);
  const expectedCtaLabel =
    ["toyota-tacoma", "jeep-wrangler-jl", "ford-bronco", "jeep-gladiator", "chevrolet-colorado", "ford-ranger", "ford-f150", "toyota-tundra", "nissan-frontier"].includes(vehicleSlug)
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
  if (page.structuredData === "vehicleHub") {
    requireIncludes(html, 'class="article-header vehicle-hub-hero"', label);
    requireIncludes(
      html,
      'class="article-hero-media vehicle-hub-media" data-vehicle-media',
      label
    );
    requireIncludes(
      html,
      `<img src="${vehicleImage.hero.src}" alt="${vehicleImage.hero.alt}" width="${vehicleImage.hero.width}" height="${vehicleImage.hero.height}" loading="eager" decoding="async" fetchpriority="high"`,
      label
    );
    requireIncludes(html, `Photo: <a href="${vehicleImage.source.pageUrl}"`, label);
    requireIncludes(html, `href="${vehicleImage.source.licenseUrl}" rel="license`, label);

    if ((html.match(/\bdata-vehicle-image\b/g) || []).length !== 1) {
      errors.push(`${label} must contain exactly one local vehicle hero image.`);
    }
    if (
      html.includes('class="article-hero-visual article-hero-fallback"') ||
      (html.match(/\barticle-hero-visual\b/g) || []).length !== 0
    ) {
      errors.push(`${label} must not render the VEHICLE PLAN fallback beside a valid image.`);
    }
    if (/<img\b[^>]*src="https?:\/\//i.test(html)) {
      errors.push(`${label} must not load a remote vehicle hero image.`);
    }
  } else if (html.includes("/images/vehicles/")) {
    errors.push(`${label} guide article must keep the existing non-photo hero.`);
  }
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
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(html, ">TACOMA</span>", label);
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
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(html, ">WRANGLER JL</span>", label);
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
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(html, ">BRONCO</span>", label);
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
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(html, ">GLADIATOR JT</span>", label);
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
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(html, ">COLORADO 3RD GEN</span>", label);
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

  if (vehicleSlug === "ford-ranger") {
    requireIncludes(html, "2024-present", label);
    requireIncludes(html, 'data-vehicle-context="ford-ranger"', label);
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(html, ">RANGER US</span>", label);
      requireIncludes(
        html,
        'class="article-back-link" href="/vehicles/ford-ranger"',
        label
      );
      requireIncludes(html, ">All Ford Ranger Guides</a>", label);
      requireIncludes(html, "Related Ranger guides", label);
    }

    for (const outOfScopePhrase of [
      "2019-2023",
      "2019–2023",
      "earlier North American Ranger",
      "international-market Ranger",
      "global-market Ranger",
      "Ford Bronco",
      "Ford Maverick",
      "Ford F-150",
      "Toyota Tacoma",
      "Chevrolet Colorado",
      "Jeep Gladiator",
      "Jeep Wrangler",
      "Toyota 4Runner",
      "KDSS",
      "solid front axle"
    ]) {
      if (html.toLowerCase().includes(outOfScopePhrase.toLowerCase())) {
        errors.push(`${label} contains out-of-scope vehicle content: ${outOfScopePhrase}.`);
      }
    }

    for (const universalClaim of [
      "every Ranger has FOX",
      "all Rangers have FOX",
      "every Ranger has Live Valve",
      "all Rangers use rear leaf springs",
      "every Ranger has rear leaf springs",
      "same payload for every Ranger",
      "same towing capacity for every Ranger",
      "fits every 2024-present Ranger",
      "fits all 2024-present Ranger",
      "largest tire for every Ranger",
      "every Ranger needs a lift",
      "one lift height fits every Ranger"
    ]) {
      if (html.toLowerCase().includes(universalClaim.toLowerCase())) {
        errors.push(`${label} contains an unsupported Ranger claim: ${universalClaim}.`);
      }
    }

    if (/lorem ipsum|placeholder content|todo:/i.test(html)) {
      errors.push(`${label} contains placeholder content.`);
    }
  }

  if (vehicleSlug === "ford-f150") {
    requireIncludes(html, "2021-present", label);
    requireIncludes(html, 'data-vehicle-context="ford-f150"', label);
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(html, ">F-150</span>", label);
      requireIncludes(
        html,
        'class="article-back-link" href="/vehicles/ford-f150"',
        label
      );
      requireIncludes(html, ">All Ford F-150 Guides</a>", label);
      requireIncludes(html, "Related F-150 guides", label);
    }

    for (const outOfScopePhrase of [
      "2015-2020",
      "2015–2020",
      "previous-generation F-150",
      "older Raptor generation",
      "Ford Super Duty",
      "F-250",
      "F-350",
      "Ford Ranger",
      "Ford Bronco",
      "Ford Maverick",
      "Toyota Tacoma",
      "Chevrolet Colorado",
      "Jeep Gladiator",
      "Jeep Wrangler",
      "Toyota 4Runner",
      "KDSS",
      "solid front axle"
    ]) {
      if (html.toLowerCase().includes(outOfScopePhrase.toLowerCase())) {
        errors.push(`${label} contains out-of-scope vehicle content: ${outOfScopePhrase}.`);
      }
    }

    for (const universalClaim of [
      "every F-150 has FOX",
      "all F-150s have FOX",
      "every F-150 has 33-inch tires",
      "every F-150 has 35-inch tires",
      "every F-150 has 37-inch tires",
      "every F-150 has a locking rear differential",
      "same payload for every F-150",
      "same towing capacity for every F-150",
      "fits every 2021-present F-150",
      "fits all 2021-present F-150",
      "largest tire for every F-150",
      "every F-150 needs a lift",
      "one lift height fits every F-150"
    ]) {
      if (html.toLowerCase().includes(universalClaim.toLowerCase())) {
        errors.push(`${label} contains an unsupported F-150 claim: ${universalClaim}.`);
      }
    }

    if (/lorem ipsum|placeholder content|todo:/i.test(html)) {
      errors.push(`${label} contains placeholder content.`);
    }
  }

  if (vehicleSlug === "toyota-tundra") {
    requireIncludes(html, "2022-present", label);
    requireIncludes(html, 'data-vehicle-context="toyota-tundra"', label);
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(html, ">Tundra</span>", label);
      requireIncludes(
        html,
        'class="article-back-link" href="/vehicles/toyota-tundra"',
        label
      );
      requireIncludes(html, ">All Toyota Tundra Guides</a>", label);
      requireIncludes(html, "Related Tundra guides", label);
    }

    for (const outOfScopePhrase of [
      "2007-2021",
      "2007–2021",
      "Toyota Sequoia",
      "Toyota Land Cruiser",
      "Toyota Tacoma",
      "Ford F-150",
      "Ford Ranger",
      "Chevrolet Colorado",
      "Jeep Gladiator",
      "Jeep Wrangler",
      "Toyota 4Runner",
      "KDSS",
      "solid front axle"
    ]) {
      if (html.toLowerCase().includes(outOfScopePhrase.toLowerCase())) {
        errors.push(`${label} contains out-of-scope vehicle content: ${outOfScopePhrase}.`);
      }
    }

    for (const unsupportedClaim of [
      "2022 Tundra Trailhunter",
      "2023 Tundra Trailhunter",
      "2024 Tundra Trailhunter",
      "2025 Tundra Trailhunter",
      "2026 Tundra Trailhunter",
      "every Tundra has FOX",
      "all Tundras have FOX",
      "every Tundra has adaptive suspension",
      "all Tundras have adaptive suspension",
      "every Tundra has rear air suspension",
      "all Tundras have rear air suspension",
      "every Tundra has i-FORCE MAX",
      "all Tundras have i-FORCE MAX",
      "the third-generation Tundra uses rear leaf springs",
      "same payload for every Tundra",
      "same towing capacity for every Tundra",
      "fits every 2022-present Tundra",
      "fits all 2022-present Tundra",
      "largest tire for every Tundra",
      "every Tundra needs a lift",
      "one lift height fits every Tundra"
    ]) {
      if (html.toLowerCase().includes(unsupportedClaim.toLowerCase())) {
        errors.push(`${label} contains an unsupported Tundra claim: ${unsupportedClaim}.`);
      }
    }

    if (/lorem ipsum|placeholder content|todo:/i.test(html)) {
      errors.push(`${label} contains placeholder content.`);
    }
  }

  if (vehicleSlug === "nissan-frontier") {
    requireIncludes(html, "2022-present", label);
    requireIncludes(html, 'data-vehicle-context="nissan-frontier"', label);
    requireIncludes(html, 'href="/vehicles">Vehicles</a>', label);

    if (page.structuredData === "article") {
      requireIncludes(html, ">Frontier</span>", label);
      requireIncludes(
        html,
        'class="article-back-link" href="/vehicles/nissan-frontier"',
        label
      );
      requireIncludes(html, ">All Nissan Frontier Guides</a>", label);
      requireIncludes(html, "Related Frontier guides", label);
    }

    for (const outOfScopePhrase of [
      "2005-2021",
      "2005–2021",
      "D40 Frontier",
      "Nissan Titan",
      "Toyota Tacoma",
      "Chevrolet Colorado",
      "Ford Ranger",
      "Jeep Gladiator",
      "Toyota Tundra",
      "Toyota 4Runner",
      "KDSS",
      "solid front axle"
    ]) {
      if (html.toLowerCase().includes(outOfScopePhrase.toLowerCase())) {
        errors.push(`${label} contains out-of-scope vehicle content: ${outOfScopePhrase}.`);
      }
    }

    for (const unsupportedClaim of [
      "every Frontier has PRO-4X suspension",
      "all Frontiers have PRO-4X suspension",
      "every Frontier has Bilstein",
      "all Frontiers have Bilstein",
      "every Frontier has an electronic locking rear differential",
      "all Frontiers have an electronic locking rear differential",
      "every Frontier has all-terrain tires",
      "all Frontiers have all-terrain tires",
      "every Frontier has skid plates",
      "all Frontiers have skid plates",
      "PRO-X and PRO-4X are identical",
      "same payload for every Frontier",
      "same towing capacity for every Frontier",
      "fits every 2022-present Frontier",
      "fits all 2022-present Frontier",
      "largest tire for every Frontier",
      "every Frontier needs a lift",
      "one lift height fits every Frontier"
    ]) {
      if (html.toLowerCase().includes(unsupportedClaim.toLowerCase())) {
        errors.push(`${label} contains an unsupported Frontier claim: ${unsupportedClaim}.`);
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
      } else if (page.structuredData === "vehicleHub") {
        const vehicleSlug =
          page.content?.vehicle?.slug ||
          page.route.match(/^\/vehicles\/([^/]+)$/)?.[1];
        const image = getVehicleImage(vehicleSlug)?.hero;
        const expectedImageUrl = `${site.domain}${image?.src}`;

        if (
          primary.image?.["@type"] !== "ImageObject" ||
          primary.image?.url !== expectedImageUrl ||
          primary.image?.width !== image?.width ||
          primary.image?.height !== image?.height ||
          primary.image?.caption !== image?.alt
        ) {
          errors.push(`${label} JSON-LD must use the local vehicle hero ImageObject.`);
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

const rangerRoutes = vehicleRoutes.filter((route) =>
  route.startsWith("/vehicles/ford-ranger")
);
const rangerRequiredTopics = [
  "2024-present",
  "us-market",
  "xl",
  "xlt",
  "lariat",
  "fx4",
  "ranger raptor",
  "independent front suspension",
  "rear solid axle",
  "leaf springs",
  "fox live valve",
  "trailing-arm",
  "watts link",
  "control arms",
  "wider track",
  "full-time",
  "locking",
  "payload",
  "towing",
  "tongue weight",
  "tow-hook",
  "underbody protection",
  "upper control arms",
  "tie rods",
  "cv joints",
  "caster",
  "camber",
  "toe",
  "bump stops",
  "wheel offset",
  "backspacing",
  "full suspension compression",
  "under-bed spare",
  "leveling",
  "top spacer",
  "preload spacer",
  "add-a-leaf",
  "bed rack",
  "rooftop",
  "solar",
  "stage 4"
];
const rangerClusterHtml = rangerRoutes
  .map((route) => readBuildFile(join(route.replace(/^\//, ""), "index.html")))
  .join("\n")
  .toLowerCase();

for (const topic of rangerRequiredTopics) {
  if (!rangerClusterHtml.includes(topic)) {
    errors.push(`Ford Ranger cluster is missing required topic: ${topic}.`);
  }
}

for (const route of rangerRoutes) {
  const incomingLinks = pages.reduce((count, page) => {
    const html = readBuildFile(pageOutputPath(page));
    return count + (html.includes(`href="${route}"`) ? 1 : 0);
  }, 0);
  if (incomingLinks === 0) {
    errors.push(`${route} is an orphan page.`);
  }
}

const rangerHubRoute = "/vehicles/ford-ranger";
const rangerGuideRoutes = rangerRoutes.filter(
  (route) => route !== rangerHubRoute
);
const rangerHubHtml = readBuildFile(
  join("vehicles", "ford-ranger", "index.html")
);

if (!homeHtml.includes(`href="${rangerHubRoute}"`)) {
  errors.push("Ford Ranger hub is not linked from the homepage.");
}
if (!vehiclesDirectoryHtml.includes(`href="${rangerHubRoute}"`)) {
  errors.push("Ford Ranger hub is not linked from /vehicles.");
}

for (const guideRoute of rangerGuideRoutes) {
  if (!rangerHubHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Ford Ranger hub does not link to ${guideRoute}.`);
  }
  const guideCard =
    rangerHubHtml.match(
      new RegExp(
        `<a class="related-guide-card is-published" href="${guideRoute.replaceAll("/", "\\/")}"[^>]*>[\\s\\S]*?<\\/a>`
      )
    )?.[0] || "";
  for (const expected of [
    'data-analytics-event="guide_click"',
    'data-analytics-location="article_featured"',
    'data-vehicle-slug="ford-ranger"',
    "<h3>",
    "<p>",
    "<strong>Read guide</strong>"
  ]) {
    requireIncludes(guideCard, expected, `Ford Ranger hub card for ${guideRoute}`);
  }

  const guideHtml = readBuildFile(
    join(guideRoute.replace(/^\//, ""), "index.html")
  );
  if (
    !guideHtml.includes(
      'class="article-back-link" href="/vehicles/ford-ranger"'
    )
  ) {
    errors.push(`${guideRoute} does not visibly link back to all Ford Ranger guides.`);
  }

  const relatedGuideLinks = [
    ...guideHtml.matchAll(
      /<a class="related-guide-card is-published" href="(\/vehicles\/ford-ranger\/[^"]+)"/g
    )
  ].map((match) => match[1]);
  if (new Set(relatedGuideLinks).size < 2) {
    errors.push(`${guideRoute} must link to at least two related Ford Ranger guides.`);
  }
}

const f150Routes = vehicleRoutes.filter((route) =>
  route.startsWith("/vehicles/ford-f150")
);
const f150RequiredTopics = [
  "2021-present",
  "regular 4x4",
  "fx4",
  "f-150 tremor",
  "f-150 raptor",
  "raptor r",
  "supercrew",
  "bed length",
  "engine",
  "axle ratio",
  "factory skid plates",
  "locking differential",
  "independent front suspension",
  "rear leaf",
  "fox live valve",
  "wide track",
  "payload label",
  "tongue weight",
  "tow-hook",
  "differential",
  "transfer-case",
  "coilover",
  "control arms",
  "tie rods",
  "cv-joint",
  "caster",
  "camber",
  "toe",
  "bump stops",
  "wheel width",
  "offset",
  "backspacing",
  "full compression",
  "under-bed spare",
  "leveling",
  "top spacer",
  "preload spacer",
  "rear block",
  "add-a-leaf",
  "bed rack",
  "slide-in camper",
  "rooftop",
  "pro power onboard",
  "stage 4"
];
const f150ClusterHtml = f150Routes
  .map((route) => readBuildFile(join(route.replace(/^\//, ""), "index.html")))
  .join("\n")
  .toLowerCase();

for (const topic of f150RequiredTopics) {
  if (!f150ClusterHtml.includes(topic)) {
    errors.push(`Ford F-150 cluster is missing required topic: ${topic}.`);
  }
}

for (const route of f150Routes) {
  const incomingLinks = pages.reduce((count, page) => {
    const html = readBuildFile(pageOutputPath(page));
    return count + (html.includes(`href="${route}"`) ? 1 : 0);
  }, 0);
  if (incomingLinks === 0) {
    errors.push(`${route} is an orphan page.`);
  }
}

const f150HubRoute = "/vehicles/ford-f150";
const f150GuideRoutes = f150Routes.filter(
  (route) => route !== f150HubRoute
);
const f150HubHtml = readBuildFile(
  join("vehicles", "ford-f150", "index.html")
);

if (!homeHtml.includes(`href="${f150HubRoute}"`)) {
  errors.push("Ford F-150 hub is not linked from the homepage.");
}
if (!vehiclesDirectoryHtml.includes(`href="${f150HubRoute}"`)) {
  errors.push("Ford F-150 hub is not linked from /vehicles.");
}

for (const guideRoute of f150GuideRoutes) {
  if (!f150HubHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Ford F-150 hub does not link to ${guideRoute}.`);
  }
  const guideCard =
    f150HubHtml.match(
      new RegExp(
        `<a class="related-guide-card is-published" href="${guideRoute.replaceAll("/", "\\/")}"[^>]*>[\\s\\S]*?<\\/a>`
      )
    )?.[0] || "";
  for (const expected of [
    'data-analytics-event="guide_click"',
    'data-analytics-location="article_featured"',
    'data-vehicle-slug="ford-f150"',
    "<h3>",
    "<p>",
    "<strong>Read guide</strong>"
  ]) {
    requireIncludes(guideCard, expected, `Ford F-150 hub card for ${guideRoute}`);
  }

  const guideHtml = readBuildFile(
    join(guideRoute.replace(/^\//, ""), "index.html")
  );
  if (
    !guideHtml.includes(
      'class="article-back-link" href="/vehicles/ford-f150"'
    )
  ) {
    errors.push(`${guideRoute} does not visibly link back to all Ford F-150 guides.`);
  }

  const relatedGuideLinks = [
    ...guideHtml.matchAll(
      /<a class="related-guide-card is-published" href="(\/vehicles\/ford-f150\/[^"]+)"/g
    )
  ].map((match) => match[1]);
  if (new Set(relatedGuideLinks).size < 2) {
    errors.push(`${guideRoute} must link to at least two related Ford F-150 guides.`);
  }
}

const tundraRoutes = vehicleRoutes.filter((route) =>
  route.startsWith("/vehicles/toyota-tundra")
);
const tundraRequiredTopics = [
  "2022-present",
  "third-generation",
  "double cab",
  "crewmax",
  "i-force max",
  "trd off-road",
  "trd pro",
  "2027 trailhunter",
  "adaptive variable suspension",
  "rear load-leveling air suspension",
  "double-wishbone",
  "solid rear axle",
  "multi-link",
  "coil springs",
  "fox",
  "bilstein",
  "payload label",
  "tongue weight",
  "recovery",
  "skid plates",
  "coilover",
  "control arms",
  "tie rods",
  "cv angle",
  "caster",
  "camber",
  "toe",
  "bump stops",
  "wheel width",
  "offset",
  "steering lock",
  "full-compression",
  "under-bed",
  "top spacer",
  "preload spacer",
  "bed rack",
  "camper",
  "rooftop tent",
  "rear axle",
  "stage 4"
];
const tundraClusterHtml = tundraRoutes
  .map((route) => readBuildFile(join(route.replace(/^\//, ""), "index.html")))
  .join("\n")
  .toLowerCase();

for (const topic of tundraRequiredTopics) {
  if (!tundraClusterHtml.includes(topic)) {
    errors.push(`Toyota Tundra cluster is missing required topic: ${topic}.`);
  }
}

for (const route of tundraRoutes) {
  const incomingLinks = pages.reduce((count, page) => {
    const html = readBuildFile(pageOutputPath(page));
    return count + (html.includes(`href="${route}"`) ? 1 : 0);
  }, 0);
  if (incomingLinks === 0) {
    errors.push(`${route} is an orphan page.`);
  }
}

const tundraHubRoute = "/vehicles/toyota-tundra";
const tundraGuideRoutes = tundraRoutes.filter(
  (route) => route !== tundraHubRoute
);
const tundraHubHtml = readBuildFile(
  join("vehicles", "toyota-tundra", "index.html")
);

if (!homeHtml.includes(`href="${tundraHubRoute}"`)) {
  errors.push("Toyota Tundra hub is not linked from the homepage.");
}
if (!vehiclesDirectoryHtml.includes(`href="${tundraHubRoute}"`)) {
  errors.push("Toyota Tundra hub is not linked from /vehicles.");
}

for (const guideRoute of tundraGuideRoutes) {
  if (!tundraHubHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Toyota Tundra hub does not link to ${guideRoute}.`);
  }
  const guideCard =
    tundraHubHtml.match(
      new RegExp(
        `<a class="related-guide-card is-published" href="${guideRoute.replaceAll("/", "\\/")}"[^>]*>[\\s\\S]*?<\\/a>`
      )
    )?.[0] || "";
  for (const expected of [
    'data-analytics-event="guide_click"',
    'data-analytics-location="article_featured"',
    'data-vehicle-slug="toyota-tundra"',
    "<h3>",
    "<p>",
    "<strong>Read guide</strong>"
  ]) {
    requireIncludes(guideCard, expected, `Toyota Tundra hub card for ${guideRoute}`);
  }

  const guideHtml = readBuildFile(
    join(guideRoute.replace(/^\//, ""), "index.html")
  );
  if (
    !guideHtml.includes(
      'class="article-back-link" href="/vehicles/toyota-tundra"'
    )
  ) {
    errors.push(`${guideRoute} does not visibly link back to all Toyota Tundra guides.`);
  }

  const relatedGuideLinks = [
    ...guideHtml.matchAll(
      /<a class="related-guide-card is-published" href="(\/vehicles\/toyota-tundra\/[^"]+)"/g
    )
  ].map((match) => match[1]);
  if (new Set(relatedGuideLinks).size < 2) {
    errors.push(`${guideRoute} must link to at least two related Toyota Tundra guides.`);
  }
}

const frontierRoutes = vehicleRoutes.filter((route) =>
  route.startsWith("/vehicles/nissan-frontier")
);
const frontierRequiredTopics = [
  "2022-present",
  "third-generation",
  "s trim",
  "sv",
  "pro-x",
  "pro-4x",
  "king cab",
  "crew cab",
  "standard bed",
  "long bed",
  "4x2",
  "4x4",
  "bilstein",
  "electronic locking rear differential",
  "all-terrain tires",
  "skid plates",
  "off-road mode",
  "double-wishbone",
  "solid rear axle",
  "multi-leaf",
  "payload label",
  "tongue weight",
  "recovery",
  "tow hooks",
  "differential protection",
  "rock protection",
  "coilover",
  "control arms",
  "tie rods",
  "cv angle",
  "caster",
  "camber",
  "toe",
  "bump stops",
  "wheel width",
  "offset",
  "backspacing",
  "full suspension compression",
  "under-bed spare",
  "top spacer",
  "preload spacer",
  "rear block",
  "add-a-leaf",
  "replacement leaf pack",
  "bed rack",
  "rooftop tent",
  "solar",
  "rear axle",
  "stage 4"
];
const frontierClusterHtml = frontierRoutes
  .map((route) => readBuildFile(join(route.replace(/^\//, ""), "index.html")))
  .join("\n")
  .toLowerCase();

for (const topic of frontierRequiredTopics) {
  if (!frontierClusterHtml.includes(topic)) {
    errors.push(`Nissan Frontier cluster is missing required topic: ${topic}.`);
  }
}

for (const route of frontierRoutes) {
  const incomingLinks = pages.reduce((count, page) => {
    const html = readBuildFile(pageOutputPath(page));
    return count + (html.includes(`href="${route}"`) ? 1 : 0);
  }, 0);
  if (incomingLinks === 0) {
    errors.push(`${route} is an orphan page.`);
  }
}

const frontierHubRoute = "/vehicles/nissan-frontier";
const frontierGuideRoutes = frontierRoutes.filter(
  (route) => route !== frontierHubRoute
);
const frontierHubHtml = readBuildFile(
  join("vehicles", "nissan-frontier", "index.html")
);

if (!homeHtml.includes(`href="${frontierHubRoute}"`)) {
  errors.push("Nissan Frontier hub is not linked from the homepage.");
}
if (!vehiclesDirectoryHtml.includes(`href="${frontierHubRoute}"`)) {
  errors.push("Nissan Frontier hub is not linked from /vehicles.");
}

for (const guideRoute of frontierGuideRoutes) {
  if (!frontierHubHtml.includes(`href="${guideRoute}"`)) {
    errors.push(`Nissan Frontier hub does not link to ${guideRoute}.`);
  }
  const guideCard =
    frontierHubHtml.match(
      new RegExp(
        `<a class="related-guide-card is-published" href="${guideRoute.replaceAll("/", "\\/")}"[^>]*>[\\s\\S]*?<\\/a>`
      )
    )?.[0] || "";
  for (const expected of [
    'data-analytics-event="guide_click"',
    'data-analytics-location="article_featured"',
    'data-vehicle-slug="nissan-frontier"',
    "<h3>",
    "<p>",
    "<strong>Read guide</strong>"
  ]) {
    requireIncludes(guideCard, expected, `Nissan Frontier hub card for ${guideRoute}`);
  }

  const guideHtml = readBuildFile(
    join(guideRoute.replace(/^\//, ""), "index.html")
  );
  if (
    !guideHtml.includes(
      'class="article-back-link" href="/vehicles/nissan-frontier"'
    )
  ) {
    errors.push(`${guideRoute} does not visibly link back to all Nissan Frontier guides.`);
  }

  const relatedGuideLinks = [
    ...guideHtml.matchAll(
      /<a class="related-guide-card is-published" href="(\/vehicles\/nissan-frontier\/[^"]+)"/g
    )
  ].map((match) => match[1]);
  if (new Set(relatedGuideLinks).size < 2) {
    errors.push(`${guideRoute} must link to at least two related Nissan Frontier guides.`);
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
    ...coloradoGuideRoutes,
    ...rangerGuideRoutes,
    ...f150GuideRoutes,
    ...tundraGuideRoutes,
    ...frontierGuideRoutes
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
requireIncludes(
  mainScript,
  'import "./analytics.js?v=phase-7b";',
  "dist/src/main.js"
);
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

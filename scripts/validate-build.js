import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { pages, site } from "./site-config.js";

const root = process.cwd();
const dist = join(root, "dist");
const errors = [];

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
  "assets/rigai-og-image.png",
  join("design-system", "index.html"),
  join("privacy", "index.html"),
  join("terms", "index.html"),
  join("affiliate-disclosure", "index.html"),
  join("contact", "index.html"),
  join("support", "index.html"),
  join("about", "index.html")
];

for (const file of requiredFiles) {
  requireFile(file);
}

const sitemap = readBuildFile("sitemap.xml");
const robots = readBuildFile("robots.txt");
const redirects = readBuildFile("_redirects");
const headers = readBuildFile("_headers");

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
  requireIncludes(html, '<script type="module" src="/src/main.js?v=launch-1"></script>', label);

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
  "FAQ",
  "Recommendations are informational.",
  "Always verify fitment before purchasing.",
  "Coming soon on Google Play"
]) {
  requireIncludes(homeHtml, expected, "dist/index.html");
}

for (const forbidden of ["/vehicles/", "/guides/", "href=\"#\"", "Google Play Store", "play.google.com", "© 2024", "localhost", "example.com"]) {
  if (homeHtml.includes(forbidden)) {
    errors.push(`Homepage contains forbidden or unavailable destination: ${forbidden}`);
  }
}

requireIncludes(homeHtml, '<a class="button primary" href="#download">Build My Setup</a>', "dist/index.html");
requireIncludes(homeHtml, '<a href="#how-it-works">How It Works</a>', "dist/index.html");
requireIncludes(homeHtml, '<a href="#vehicles">Vehicles</a>', "dist/index.html");
requireIncludes(homeHtml, '<a href="#guides">Guides</a>', "dist/index.html");
requireIncludes(homeHtml, '<a href="/about">About</a>', "dist/index.html");
requireIncludes(homeHtml, '<a class="button secondary" href="#example-build">See an Example Build</a>', "dist/index.html");
requireIncludes(homeHtml, '<img src="/src/assets/rigai-garage-bg.jpg" width="1200" height="800"', "dist/index.html");
requireIncludes(homeHtml, 'loading="lazy"', "dist/index.html");
requireIncludes(homeHtml, "Example only - prices and recommendations vary", "dist/index.html");
requireIncludes(homeHtml, "Example output - actual content depends", "dist/index.html");
requireIncludes(homeHtml, "Guide in development", "dist/index.html");
requireIncludes(homeHtml, "Guide planned", "dist/index.html");

for (const asset of [...homeHtml.matchAll(/<(?:img|source)[^>]+(?:src|srcset)="([^"]+)"/g)]) {
  const assetPath = asset[1].split(" ")[0];
  if (assetPath.startsWith("/") && !assetPath.startsWith("//")) {
    requireFile(assetPath.slice(1));
  }
}

if (homeHtml.includes("Can I save more than one vehicle plan?")) {
  errors.push("Homepage includes the multiple saved plans FAQ without a confirmed feature flag.");
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

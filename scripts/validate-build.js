import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const requiredFiles = [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "404.html",
  join("privacy", "index.html"),
  join("terms", "index.html"),
  join("affiliate-disclosure", "index.html"),
  join("contact", "index.html"),
  join("support", "index.html"),
  join("about", "index.html")
];

const expectedUrls = [
  "https://rigai-offroad.com/",
  "https://rigai-offroad.com/privacy",
  "https://rigai-offroad.com/terms",
  "https://rigai-offroad.com/affiliate-disclosure",
  "https://rigai-offroad.com/contact",
  "https://rigai-offroad.com/support",
  "https://rigai-offroad.com/about"
];

const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(dist, file))) {
    errors.push(`Missing required build file: dist/${file.replaceAll("\\", "/")}`);
  }
}

const sitemapPath = join(dist, "sitemap.xml");
const robotsPath = join(dist, "robots.txt");

if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, "utf8");

  for (const url of expectedUrls) {
    if (!sitemap.includes(`<loc>${url}</loc>`)) {
      errors.push(`Sitemap is missing canonical URL: ${url}`);
    }
  }

  const forbiddenSitemapValues = [".html", "dist/", "404"];
  for (const value of forbiddenSitemapValues) {
    if (sitemap.includes(value)) {
      errors.push(`Sitemap contains forbidden value: ${value}`);
    }
  }
}

if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, "utf8");

  if (!robots.includes("Sitemap: https://rigai-offroad.com/sitemap.xml")) {
    errors.push("robots.txt is missing the production sitemap URL.");
  }
}

if (errors.length > 0) {
  console.error("Build validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Build validation passed: all required SEO and route files are present.");

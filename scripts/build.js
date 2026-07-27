import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { pages } from "./site-config.js";
import { extractMain, renderPage, renderRobots, renderSitemap } from "./page-template.js";
import { renderHomePage } from "../src/components/home/index.js";
import { renderVehicleArticle } from "../src/components/articles/index.js";
import { assertBuildOutput } from "./build-contract.js";
import { analyticsConfig } from "../config/analytics.js";

const root = process.cwd();
const dist = join(root, "dist");
const entries = ["src"];
const publicDir = join(root, "public");

function assertPageAnalytics(html, page) {
  const label = page.route === "/" ? "/" : page.route;
  const loaderCount = (
    html.match(/googletagmanager\.com\/gtag\/js\?id=/g) || []
  ).length;
  const configCount = (html.match(/\bgtag\(['"]config['"]/g) || []).length;
  const hasPlaceholder = /G-(?:X{4,}|0{4,})/i.test(html);
  const exposesEnvironmentName = html.includes("GA4_MEASUREMENT_ID");

  if (analyticsConfig.enabled) {
    const idCount = html.split(analyticsConfig.ga4MeasurementId).length - 1;
    if (loaderCount !== 1 || configCount !== 1 || idCount !== 2) {
      throw new Error(
        `Analytics injection failed for ${label}: expected one loader, one config call, and two Measurement ID references.`
      );
    }
  } else if (loaderCount !== 0 || configCount !== 0) {
    throw new Error(`Analytics must be disabled for ${label} when no Measurement ID is present.`);
  }

  if (hasPlaceholder || exposesEnvironmentName) {
    throw new Error(`Analytics output validation failed for ${label}.`);
  }
}

console.log(
  `Analytics build mode: ${analyticsConfig.enabled ? "enabled (GA4 Measurement ID present)" : "disabled"}`
);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

if (existsSync(publicDir)) {
  await cp(publicDir, dist, { recursive: true });
}

for (const entry of entries) {
  const from = join(root, entry);
  const to = join(dist, entry);

  if (existsSync(from)) {
    await cp(from, to, { recursive: true });
  }
}

for (const page of pages) {
  let mainHtml;

  if (page.renderer === "home") {
    mainHtml = renderHomePage();
  } else if (page.renderer === "vehicleArticle") {
    mainHtml = renderVehicleArticle(page.content);
  } else {
    mainHtml = extractMain(await readFile(join(root, page.source), "utf8"), page.source);
  }

  const pageHtml = renderPage(page, mainHtml, { analytics: analyticsConfig });
  assertPageAnalytics(pageHtml, page);
  const outputPath = join(dist, page.output);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, pageHtml);

  if (page.route !== "/" && page.output !== "404.html") {
    const routeDir = join(dist, page.route.replace(/^\//, ""));
    const cleanRouteOutput = join(routeDir, "index.html");

    await mkdir(routeDir, { recursive: true });
    if (cleanRouteOutput !== outputPath) {
      await writeFile(cleanRouteOutput, pageHtml);
    }
  }
}

await writeFile(join(dist, "robots.txt"), renderRobots());
await writeFile(join(dist, "sitemap.xml"), renderSitemap(pages));

const buildResult = assertBuildOutput({ dist, pages });
console.log(`Build complete: dist (${buildResult.fileCount} files, ${buildResult.totalBytes} bytes)`);

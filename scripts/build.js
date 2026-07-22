import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { pages } from "./site-config.js";
import { extractMain, renderPage, renderRobots, renderSitemap } from "./page-template.js";

const root = process.cwd();
const dist = join(root, "dist");
const entries = ["src"];
const publicDir = join(root, "public");

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
  const sourcePath = join(root, page.source);
  const sourceHtml = await readFile(sourcePath, "utf8");
  const mainHtml = extractMain(sourceHtml, page.source);
  const pageHtml = renderPage(page, mainHtml);
  const outputPath = join(dist, page.output);

  await writeFile(outputPath, pageHtml);

  if (page.route !== "/" && page.output !== "404.html") {
    const routeDir = join(dist, page.route.replace(/^\//, ""));

    await mkdir(routeDir, { recursive: true });
    await writeFile(join(routeDir, "index.html"), pageHtml);
  }
}

await writeFile(join(dist, "robots.txt"), renderRobots());
await writeFile(join(dist, "sitemap.xml"), renderSitemap(pages));

console.log("Build complete: dist");

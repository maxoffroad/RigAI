import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const entries = [
  "index.html",
  "src"
];
const publicDir = join(root, "public");
const staticRoutes = [
  ["privacy.html", "privacy"],
  ["affiliate-disclosure.html", "affiliate-disclosure"],
  ["contact.html", "contact"],
  ["terms.html", "terms"]
];

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

for (const [fileName, routeName] of staticRoutes) {
  const from = join(dist, fileName);
  const routeDir = join(dist, routeName);

  if (existsSync(from)) {
    await mkdir(routeDir, { recursive: true });
    await cp(from, join(routeDir, "index.html"));
  }
}

console.log("Build complete: dist");

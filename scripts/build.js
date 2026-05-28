import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const entries = [
  "index.html",
  "privacy.html",
  "affiliate-disclosure.html",
  "contact.html",
  "terms.html",
  "_redirects",
  "src"
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of entries) {
  const from = join(root, entry);
  const to = join(dist, entry);

  if (existsSync(from)) {
    await cp(from, to, { recursive: true });
  }
}

console.log("Build complete: dist");

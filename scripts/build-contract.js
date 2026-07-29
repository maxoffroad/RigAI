import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, normalize } from "node:path";

const localAssetExtensions = new Set([
  ".css",
  ".js",
  ".jpg",
  ".jpeg",
  ".png",
  ".svg",
  ".webp",
  ".woff",
  ".woff2",
  ".ttf",
  ".otf"
]);

function pageOutputPath(page) {
  if (page.route === "/") return "index.html";
  if (page.output === "404.html") return "404.html";
  return join(page.route.replace(/^\//, ""), "index.html");
}

function listFiles(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

function localReferencePath(reference, htmlPath, dist) {
  const cleanReference = reference.split(/[?#]/, 1)[0];

  if (
    !cleanReference ||
    cleanReference.startsWith("#") ||
    cleanReference.startsWith("//") ||
    /^[a-z][a-z\d+.-]*:/i.test(cleanReference)
  ) {
    return null;
  }

  const extension = extname(cleanReference).toLowerCase();
  if (!localAssetExtensions.has(extension)) return null;

  return cleanReference.startsWith("/")
    ? join(dist, cleanReference.slice(1))
    : normalize(join(dirname(htmlPath), cleanReference));
}

export function inspectBuildOutput({ dist, pages, minimumFileCount = 18 }) {
  const errors = [];
  const requiredFiles = new Set([
    "index.html",
    "404.html",
    "robots.txt",
    "sitemap.xml",
    join("src", "styles.css"),
    join("src", "main.js"),
    join("vehicles", "index.html"),
    join("vehicles", "toyota-4runner", "index.html"),
    join("vehicles", "toyota-4runner", "suspension", "index.html"),
    join("vehicles", "toyota-4runner", "first-upgrades", "index.html"),
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
    join("vehicles", "jeep-wrangler-jl", "overland-build", "index.html"),
    join("vehicles", "ford-bronco", "index.html"),
    join("vehicles", "ford-bronco", "first-upgrades", "index.html"),
    join("vehicles", "ford-bronco", "suspension", "index.html"),
    join("vehicles", "ford-bronco", "tire-size", "index.html"),
    join("vehicles", "ford-bronco", "lift-kit", "index.html"),
    join("vehicles", "ford-bronco", "overland-build", "index.html"),
    join("vehicles", "jeep-gladiator", "index.html"),
    join("vehicles", "jeep-gladiator", "first-upgrades", "index.html"),
    join("vehicles", "jeep-gladiator", "suspension", "index.html"),
    join("vehicles", "jeep-gladiator", "tire-size", "index.html"),
    join("vehicles", "jeep-gladiator", "lift-kit", "index.html"),
    join("vehicles", "jeep-gladiator", "overland-build", "index.html"),
    join("vehicles", "chevrolet-colorado", "index.html"),
    join("vehicles", "chevrolet-colorado", "first-upgrades", "index.html"),
    join("vehicles", "chevrolet-colorado", "suspension", "index.html"),
    join("vehicles", "chevrolet-colorado", "tire-size", "index.html"),
    join("vehicles", "chevrolet-colorado", "lift-kit", "index.html"),
    join("vehicles", "chevrolet-colorado", "overland-build", "index.html"),
    join("vehicles", "ford-ranger", "index.html"),
    join("vehicles", "ford-ranger", "first-upgrades", "index.html"),
    join("vehicles", "ford-ranger", "suspension", "index.html"),
    join("vehicles", "ford-ranger", "tire-size", "index.html"),
    join("vehicles", "ford-ranger", "lift-kit", "index.html"),
    join("vehicles", "ford-ranger", "overland-build", "index.html"),
    join("vehicles", "ford-f150", "index.html"),
    join("vehicles", "ford-f150", "first-upgrades", "index.html"),
    join("vehicles", "ford-f150", "suspension", "index.html"),
    join("vehicles", "ford-f150", "tire-size", "index.html"),
    join("vehicles", "ford-f150", "lift-kit", "index.html"),
    join("vehicles", "ford-f150", "overland-build", "index.html"),
    join("vehicles", "toyota-tundra", "index.html"),
    join("vehicles", "toyota-tundra", "first-upgrades", "index.html"),
    join("vehicles", "toyota-tundra", "suspension", "index.html"),
    join("vehicles", "toyota-tundra", "tire-size", "index.html"),
    join("vehicles", "toyota-tundra", "lift-kit", "index.html"),
    join("vehicles", "toyota-tundra", "overland-build", "index.html"),
    join("vehicles", "nissan-frontier", "index.html"),
    join("vehicles", "nissan-frontier", "first-upgrades", "index.html"),
    join("vehicles", "nissan-frontier", "suspension", "index.html"),
    join("vehicles", "nissan-frontier", "tire-size", "index.html"),
    join("vehicles", "nissan-frontier", "lift-kit", "index.html"),
    join("vehicles", "nissan-frontier", "overland-build", "index.html")
  ]);

  for (const page of pages) {
    requiredFiles.add(pageOutputPath(page));
  }

  for (const relativePath of requiredFiles) {
    if (!existsSync(join(dist, relativePath))) {
      errors.push(`Missing mandatory build output: dist/${relativePath.replaceAll("\\", "/")}`);
    }
  }

  const outputFiles = listFiles(dist);
  if (outputFiles.length <= 12) {
    errors.push(`Build contains only ${outputFiles.length} files, matching or under the known broken deployment.`);
  } else if (outputFiles.length < minimumFileCount) {
    errors.push(`Build contains ${outputFiles.length} files, expected at least ${minimumFileCount}.`);
  }

  const htmlFiles = outputFiles.filter((filePath) => extname(filePath).toLowerCase() === ".html");
  for (const htmlPath of htmlFiles) {
    const html = readFileSync(htmlPath, "utf8");
    const relativeHtmlPath = htmlPath.slice(dist.length + 1).replaceAll("\\", "/");
    const references = [
      ...html.matchAll(/<(?:link|script|img|source)\b[^>]*(?:href|src|srcset)="([^"]+)"/gi)
    ];

    for (const match of references) {
      for (const reference of match[1].split(",").map((item) => item.trim().split(/\s+/, 1)[0])) {
        const assetPath = localReferencePath(reference, htmlPath, dist);
        if (assetPath && !existsSync(assetPath)) {
          errors.push(`${relativeHtmlPath} references missing local asset: ${reference}`);
        }
      }
    }
  }

  const cssFiles = outputFiles.filter((filePath) => extname(filePath).toLowerCase() === ".css");
  for (const cssPath of cssFiles) {
    const css = readFileSync(cssPath, "utf8");
    const relativeCssPath = cssPath.slice(dist.length + 1).replaceAll("\\", "/");

    for (const match of css.matchAll(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi)) {
      const reference = match[2];
      const assetPath = localReferencePath(reference, cssPath, dist);
      if (assetPath && !existsSync(assetPath)) {
        errors.push(`${relativeCssPath} references missing local asset: ${reference}`);
      }
    }
  }

  const homePath = join(dist, "index.html");
  if (existsSync(homePath)) {
    const home = readFileSync(homePath, "utf8");
    const h1Count = (home.match(/<h1(?:\s|>)/g) || []).length;
    if (h1Count !== 1) {
      errors.push(`dist/index.html has ${h1Count} H1 elements, expected 1.`);
    }
    if (!/<link\b[^>]*rel="stylesheet"[^>]*href="\/src\/styles\.css(?:\?[^"]*)?"/i.test(home)) {
      errors.push("dist/index.html does not reference the mandatory root-safe stylesheet.");
    }
    if (!/<script\b[^>]*src="\/src\/main\.js(?:\?[^"]*)?"/i.test(home)) {
      errors.push("dist/index.html does not reference the mandatory root-safe JavaScript.");
    }
  }

  const notFoundPath = join(dist, "404.html");
  if (existsSync(notFoundPath)) {
    const notFound = readFileSync(notFoundPath, "utf8");
    for (const match of notFound.matchAll(/<(?:link|script|img|source)\b[^>]*(?:href|src)="([^"]+)"/gi)) {
      const reference = match[1];
      if (
        localReferencePath(reference, notFoundPath, dist) &&
        !reference.startsWith("/")
      ) {
        errors.push(`dist/404.html uses a route-relative asset path: ${reference}`);
      }
    }
  }

  return {
    errors,
    fileCount: outputFiles.length,
    totalBytes: outputFiles.reduce((total, filePath) => total + statSync(filePath).size, 0)
  };
}

export function assertBuildOutput(options) {
  const result = inspectBuildOutput(options);
  if (result.errors.length > 0) {
    throw new Error(`Build output contract failed:\n- ${result.errors.join("\n- ")}`);
  }
  return result;
}

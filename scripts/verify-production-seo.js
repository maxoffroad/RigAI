import { XMLParser } from "fast-xml-parser";

const productionOrigin = "https://rigai-offroad.com";
const requestOrigin = (process.env.SEO_BASE_URL || productionOrigin).replace(/\/$/, "");
const timeoutMs = Number(process.env.SEO_TIMEOUT_MS || 15000);
const indexablePaths = [
  "/",
  "/about",
  "/contact",
  "/support",
  "/privacy",
  "/terms",
  "/affiliate-disclosure",
  "/vehicles",
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
  "/vehicles/toyota-tacoma/overland-build"
];
const vehiclePaths = indexablePaths.filter((path) => path.startsWith("/vehicles/"));
const excludedSitemapPaths = ["/design-system", "/404", "/404.html"];
const failures = [];
const warnings = [];
let passCount = 0;

function result(level, message) {
  console.log(`${level} ${message}`);
  if (level === "PASS") passCount += 1;
  if (level === "FAIL") failures.push(message);
  if (level === "WARN") warnings.push(message);
}

function pass(condition, message, failureMessage = message) {
  result(condition ? "PASS" : "FAIL", condition ? message : failureMessage);
}

function normalizePath(pathname) {
  return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
}

function requestUrl(pathOrUrl) {
  const url = new URL(pathOrUrl, requestOrigin);
  if (url.origin === productionOrigin && requestOrigin !== productionOrigin) {
    return new URL(`${url.pathname}${url.search}`, requestOrigin);
  }
  return url;
}

async function get(pathOrUrl, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(requestUrl(pathOrUrl), {
      redirect: options.redirect || "follow",
      headers: {
        "user-agent": "RigAI-Production-SEO-Verification/1.0",
        accept: options.accept || "*/*"
      },
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeout);
  }
}

function one(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

function all(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1]?.trim() || "");
}

function absoluteCanonical(pathname) {
  return `${productionOrigin}${pathname === "/" ? "/" : pathname}`;
}

function inspectHtml(html) {
  const jsonLd = all(html, /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  return {
    title: one(html, /<title>([\s\S]*?)<\/title>/i),
    description: one(html, /<meta\b[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i),
    canonical: one(html, /<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i),
    robots: one(html, /<meta\b[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i),
    h1: all(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi),
    links: all(html, /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi),
    assets: [
      ...all(html, /<(?:script|img|source)\b[^>]*src=["']([^"']+)["'][^>]*>/gi),
      ...all(
        html,
        /<link\b(?=[^>]*rel=["'](?:stylesheet|icon)["'])[^>]*href=["']([^"']+)["'][^>]*>/gi
      )
    ],
    jsonLd
  };
}

function sitemapLocations(xml) {
  const parsed = new XMLParser({ ignoreAttributes: false }).parse(xml);
  const entries = parsed?.urlset?.url || [];
  return (Array.isArray(entries) ? entries : [entries]).map((entry) => entry.loc).filter(Boolean);
}

function wildcardRobotsBlocksSite(robotsText) {
  const lines = robotsText.split(/\r?\n/).map((line) => line.replace(/#.*$/, "").trim());
  let wildcardGroup = false;

  for (const line of lines) {
    if (!line) continue;
    const userAgent = line.match(/^User-agent:\s*(.+)$/i)?.[1]?.trim();
    if (userAgent) {
      wildcardGroup = userAgent === "*";
      continue;
    }
    if (wildcardGroup && /^Disallow:\s*\/\s*$/i.test(line)) return true;
  }
  return false;
}

async function verifyRedirect(source, expectedPath, { warningOnly = false } = {}) {
  try {
    const response = await get(source, { redirect: "manual" });
    const location = response.headers.get("location");
    const redirectedPath = location ? normalizePath(new URL(location, requestUrl(source)).pathname) : "";
    const ok = [301, 308].includes(response.status) && redirectedPath === normalizePath(expectedPath);
    if (ok) {
      result("PASS", `${source} permanently redirects to ${expectedPath}`);
    } else {
      result(
        warningOnly ? "WARN" : "FAIL",
        `${source} expected a permanent redirect to ${expectedPath}; received ${response.status}${location ? ` -> ${location}` : ""}`
      );
    }
  } catch (error) {
    result(warningOnly ? "WARN" : "FAIL", `${source} redirect check failed: ${error.message}`);
  }
}

async function main() {
  console.log(`RigAI production SEO verification\nTarget: ${requestOrigin}\nCanonical origin: ${productionOrigin}\n`);

  let homepage;
  let homepageHtml = "";
  try {
    homepage = await get("/");
    homepageHtml = await homepage.text();
    pass(homepage.status === 200, "Homepage returns HTTP 200", `Homepage returned HTTP ${homepage.status}`);
  } catch (error) {
    result("FAIL", `Homepage request failed: ${error.message}`);
  }

  try {
    const unknown = await get("/this-page-does-not-exist");
    pass(unknown.status === 404, "Unknown route returns HTTP 404", `Unknown route returned HTTP ${unknown.status}`);
  } catch (error) {
    result("FAIL", `Unknown route request failed: ${error.message}`);
  }

  let robotsText = "";
  try {
    const robots = await get("/robots.txt");
    robotsText = await robots.text();
    pass(robots.status === 200, "robots.txt returns HTTP 200", `robots.txt returned HTTP ${robots.status}`);
    pass(
      robots.headers.get("content-type")?.includes("text/plain"),
      "robots.txt uses text/plain",
      `robots.txt content type is ${robots.headers.get("content-type") || "missing"}`
    );
    pass(
      /Sitemap:\s*https:\/\/rigai-offroad\.com\/sitemap\.xml/i.test(robotsText),
      "robots.txt declares the production sitemap",
      "robots.txt is missing the production sitemap URL"
    );
    pass(
      !wildcardRobotsBlocksSite(robotsText),
      "robots.txt does not block the site",
      "robots.txt blocks the site for the wildcard user agent"
    );
    pass(
      !/localhost|example\.(?:com|org|net)/i.test(robotsText),
      "robots.txt contains no placeholder host",
      "robots.txt contains localhost or a placeholder host"
    );
  } catch (error) {
    result("FAIL", `robots.txt request failed: ${error.message}`);
  }

  let locations = [];
  try {
    const sitemap = await get("/sitemap.xml");
    const xml = await sitemap.text();
    pass(sitemap.status === 200, "sitemap.xml returns HTTP 200", `sitemap.xml returned HTTP ${sitemap.status}`);
    try {
      locations = sitemapLocations(xml);
      pass(locations.length > 0, `sitemap.xml parses with ${locations.length} URLs`, "sitemap.xml parsed without URLs");
    } catch (error) {
      result("FAIL", `sitemap.xml is invalid XML: ${error.message}`);
    }
  } catch (error) {
    result("FAIL", `sitemap.xml request failed: ${error.message}`);
  }

  pass(
    new Set(locations).size === locations.length,
    "Sitemap contains no duplicate URLs",
    "Sitemap contains duplicate URLs"
  );
  pass(
    locations.every((url) => url.startsWith(`${productionOrigin}/`) && !url.endsWith(".html")),
    "Sitemap uses production HTTPS clean URLs",
    "Sitemap contains a non-production or .html URL"
  );
  pass(
    excludedSitemapPaths.every((path) => !locations.includes(absoluteCanonical(path))),
    "Sitemap excludes technical noindex pages",
    "Sitemap includes design-system or 404"
  );
  pass(
    indexablePaths.every((path) => locations.includes(absoluteCanonical(path))),
    "Sitemap contains every published indexable route",
    "Sitemap is missing one or more published indexable routes"
  );

  const pages = new Map();
  for (const path of indexablePaths) {
    try {
      const response = await get(path);
      const html = await response.text();
      const finalPath = new URL(response.url).pathname;
      const details = inspectHtml(html);
      pages.set(path, { response, html, details });

      pass(response.status === 200, `${path} returns HTTP 200`, `${path} returned HTTP ${response.status}`);
      pass(
        finalPath === path,
        `${path} resolves without a canonical-path redirect`,
        `${path} resolves to ${new URL(response.url).pathname}`
      );
      pass(
        details.canonical === absoluteCanonical(path),
        `${path} has a self-referencing canonical`,
        `${path} canonical is ${details.canonical || "missing"}`
      );
      pass(!/\.html(?:$|[?#])/.test(details.canonical), `${path} canonical has no .html`);
      pass(!/\bnoindex\b/i.test(details.robots), `${path} is not accidentally noindex`);
      pass(Boolean(details.title), `${path} has a title`, `${path} has no title`);
      pass(Boolean(details.description), `${path} has a meta description`, `${path} has no meta description`);
      pass(details.h1.length === 1, `${path} has one H1`, `${path} has ${details.h1.length} H1 elements`);
      pass(
        /<main\b[^>]*id=["']main-content["']/i.test(html),
        `${path} has the main-content landmark`,
        `${path} is missing <main id="main-content">`
      );
      pass(
        !/localhost|example\.(?:com|org|net)/i.test(html),
        `${path} has no placeholder host`,
        `${path} contains localhost or a placeholder host`
      );

      for (const block of details.jsonLd) {
        try {
          const data = JSON.parse(block);
          const serialized = JSON.stringify(data);
          pass(!/localhost|example\.(?:com|org|net)/i.test(serialized), `${path} JSON-LD uses production URLs`);
          pass(
            !/"(?:aggregateRating|review|offers)"\s*:/i.test(serialized) && !/"@type"\s*:\s*"Product"/i.test(serialized),
            `${path} JSON-LD has no unsupported commercial claims`
          );
        } catch (error) {
          result("FAIL", `${path} has invalid JSON-LD: ${error.message}`);
        }
      }
      if (details.jsonLd.length > 0) {
        result("PASS", `${path} JSON-LD parses`);
      }
    } catch (error) {
      result("FAIL", `${path} request failed: ${error.message}`);
    }
  }

  const titles = [...pages.values()].map(({ details }) => details.title);
  const descriptions = [...pages.values()].map(({ details }) => details.description);
  pass(new Set(titles).size === titles.length, "Indexable page titles are unique", "Duplicate indexable page titles found");
  pass(
    new Set(descriptions).size === descriptions.length,
    "Indexable meta descriptions are unique",
    "Duplicate indexable meta descriptions found"
  );

  const checkedAssets = new Set();
  const checkedLinks = new Set();
  for (const [path, page] of pages) {
    for (const reference of page.details.assets) {
      const url = new URL(reference, `${productionOrigin}${path}`);
      if (url.origin !== productionOrigin) continue;
      const assetPath = `${url.pathname}${url.search}`;
      if (checkedAssets.has(assetPath)) continue;
      checkedAssets.add(assetPath);
      try {
        const response = await get(assetPath);
        pass(response.status === 200, `Asset ${url.pathname} returns HTTP 200`, `Asset ${url.pathname} returned HTTP ${response.status}`);
      } catch (error) {
        result("FAIL", `Asset ${url.pathname} request failed: ${error.message}`);
      }
    }

    for (const reference of page.details.links) {
      if (reference.startsWith("#") || /^(?:mailto|tel|javascript):/i.test(reference)) continue;
      const url = new URL(reference, `${productionOrigin}${path}`);
      if (url.origin !== productionOrigin) continue;
      const linkPath = normalizePath(url.pathname);
      if (linkPath.startsWith("/cdn-cgi/")) continue;
      if (checkedLinks.has(linkPath)) continue;
      checkedLinks.add(linkPath);
      try {
        const response = await get(linkPath);
        pass(response.status === 200, `Internal link ${linkPath} resolves`, `Internal link ${linkPath} returned HTTP ${response.status}`);
      } catch (error) {
        result("FAIL", `Internal link ${linkPath} request failed: ${error.message}`);
      }
    }
  }

  pass(
    vehiclePaths.every((path) => pages.has(path)),
    "All critical vehicle pages were checked",
    "One or more critical vehicle pages could not be checked"
  );
  const linkedVehiclePaths = new Set(
    [...pages.values()].flatMap(({ details }) =>
      details.links
        .map((href) => new URL(href, productionOrigin).pathname)
        .filter((path) => path.startsWith("/vehicles/"))
        .map(normalizePath)
    )
  );
  pass(
    vehiclePaths.every((path) => linkedVehiclePaths.has(path)),
    "No vehicle page is orphaned",
    "One or more vehicle pages have no checked internal link"
  );

  if (homepageHtml) {
    const home = inspectHtml(homepageHtml);
    pass(
      home.assets.some((asset) => asset.startsWith("/src/styles.css")),
      "Homepage references the production stylesheet",
      "Homepage stylesheet reference is missing"
    );
    pass(
      home.assets.some((asset) => asset.startsWith("/src/main.js")),
      "Homepage references production JavaScript",
      "Homepage JavaScript reference is missing"
    );
  }

  for (const path of indexablePaths.filter((path) => path !== "/")) {
    await verifyRedirect(`${path}/`, path);
    await verifyRedirect(`${path}.html`, path);
  }
  await verifyRedirect("/index.html", "/");

  if (requestOrigin === productionOrigin) {
    try {
      const httpResponse = await fetch("http://rigai-offroad.com", { redirect: "manual", signal: AbortSignal.timeout(timeoutMs) });
      const location = httpResponse.headers.get("location") || "";
      pass(
        [301, 308].includes(httpResponse.status) && location.startsWith(productionOrigin),
        "HTTP redirects permanently to the HTTPS canonical host",
        `HTTP host returned ${httpResponse.status}${location ? ` -> ${location}` : ""}`
      );
    } catch (error) {
      result("FAIL", `HTTP to HTTPS check failed: ${error.message}`);
    }

    await verifyRedirect("https://www.rigai-offroad.com/", "/", { warningOnly: true });
  } else {
    result("WARN", "Host-level HTTP and www checks skipped for SEO_BASE_URL override");
  }

  console.log(`\nSummary: ${passCount} PASS, ${warnings.length} WARN, ${failures.length} FAIL`);
  if (warnings.length) warnings.forEach((warning) => console.log(`WARN ${warning}`));
  if (failures.length) failures.forEach((failure) => console.log(`FAIL ${failure}`));
  process.exitCode = failures.length ? 1 : 0;
}

main().catch((error) => {
  console.error(`FAIL Unhandled verification error: ${error.stack || error.message}`);
  process.exitCode = 1;
});

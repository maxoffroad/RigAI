import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const baseDir = join(process.cwd(), process.argv[2] || ".");
const port = Number(process.env.PORT || 5173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

const routeFiles = new Map([
  ["/", "index.html"],
  ["/privacy", "public/privacy.html"],
  ["/terms", "public/terms.html"],
  ["/affiliate-disclosure", "public/affiliate-disclosure.html"],
  ["/contact", "public/contact.html"]
]);

function resolvePath(url) {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const routeFile = routeFiles.get(pathname);
  const relativePath = routeFile || pathname.replace(/^\/+/, "");
  let filePath = normalize(join(baseDir, relativePath));

  if (!existsSync(filePath) && routeFile?.startsWith("public/")) {
    filePath = normalize(join(baseDir, routeFile.replace(/^public\//, "")));
  }

  if (!filePath.startsWith(normalize(baseDir))) {
    return null;
  }

  return filePath;
}

const server = createServer(async (request, response) => {
  const filePath = resolvePath(request.url || "/");

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const fileStat = await stat(filePath);

  if (!fileStat.isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream"
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`RigAI site running at http://localhost:${port}`);
});

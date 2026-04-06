const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const host = process.env.HOST || "::";
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

function send(res, statusCode, headers, body) {
  res.writeHead(statusCode, headers);
  res.end(body);
}

function resolvePath(urlPath) {
  const relativePath = urlPath === "/" ? "/index.html" : urlPath;
  const safePath = path.normalize(relativePath).replace(/^(\.\.[/\\])+/, "");
  const fullPath = path.join(root, safePath);

  if (!fullPath.startsWith(root)) return null;
  return fullPath;
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (requestUrl.pathname === "/health") {
    return send(res, 200, { "content-type": "application/json; charset=utf-8" }, JSON.stringify({ ok: true }));
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    return send(res, 405, { "content-type": "text/plain; charset=utf-8" }, "Method Not Allowed");
  }

  const filePath = resolvePath(requestUrl.pathname);
  if (!filePath) {
    return send(res, 400, { "content-type": "text/plain; charset=utf-8" }, "Bad Request");
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      return send(res, 404, { "content-type": "text/plain; charset=utf-8" }, "Not Found");
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";

    res.writeHead(200, {
      "content-type": contentType,
      "content-length": stats.size
    });

    if (req.method === "HEAD") {
      return res.end();
    }

    const stream = fs.createReadStream(filePath);
    stream.on("error", () => {
      if (!res.headersSent) {
        send(res, 500, { "content-type": "text/plain; charset=utf-8" }, "Server Error");
      } else {
        res.destroy();
      }
    });
    stream.pipe(res);
  });
});

server.listen(port, host, () => {
  console.log(`Aeson Retail Solutions listening on http://${host === "::" ? "localhost" : host}:${port}`);
});

const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const port = process.env.PORT || 9000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const apiPaths = {
  "/api": {
    target: process.env.NEXT_PUBLIC_BASE_URL,
    pathRewrite: {
      "^/api": "/api",
    },
    changeOrigin: true,
  },
};

const isDevelopment = process.env.NODE_ENV !== "production";

app
  .prepare()
  .then(() => {
    const server = express();

    if (isDevelopment) {
      server.use("/api", createProxyMiddleware(apiPaths["/api"]));
    }

    server.all("*", (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log("Error:::::", err);
  });

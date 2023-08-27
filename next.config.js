/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    // loader: "akamai",
    // path: "/",
    unoptimized: true,
  },
  assetPrefix: !debug ? "http://0.0.0.0:8000/" : "",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/events": { page: "/events" },
      "/archive": { page: "/archive" },
      "/blog": { page: "/blog" },
      ...(debug
        ? {
            _next: { page: "_next" },
          }
        : {}),
    };
  },
};

module.exports = nextConfig;

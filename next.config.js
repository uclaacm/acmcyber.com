/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "akamai",
    // path: "/",
    unoptimized: true,
  },
  assetPrefix: !debug ? "https://cyber.uclaacm.com" : "",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/events": { page: "/events" },
      "/labs": { page: "/labs" },
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

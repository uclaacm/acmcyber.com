/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: !debug ? "https://www.acmcyber.com" : "",
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
      "/discord": { page: "/discord" },
      "/members": { page: "/members" },
      "/events": { page: "/events" },
      "/archive": { page: "/archive" },
      "/blog": { page: "/blog" },
      "/join": { page: "/join" },
      "/404": { page: "/404" },
      ...(debug
        ? {
            _next: { page: "_next" },
          }
        : {}),
    };
  },
};

module.exports = nextConfig;

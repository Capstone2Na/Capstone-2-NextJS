/**
 * @type {import('next').NextConfig}
 */

const withSerwist = require("@serwist/next").default({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
});

const nextConfig = {};

module.exports = withSerwist({
  ...nextConfig,
  // Your Next.js config
});

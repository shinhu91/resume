/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
  webpack: (config) => config,

  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://shinhu91.github.io/resume"
      : "",
};

module.exports = withImages(nextConfig);

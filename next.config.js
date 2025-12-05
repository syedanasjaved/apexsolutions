/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,   // ✅ THIS IS THE FIX
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "market_project",
  exportPathMap: () => ({
    // "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};
s;
module.exports = nextConfig;

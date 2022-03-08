/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // slash를 기준으로 폴더와 피일을 만들겠다
  generateBuildId: () => "codecamp-sejung",
  exportPathMap: () => ({
    "/": {page: "/"},
    "/boards": {page: "/boards"},
    "/404": {page: "/404"},
  })
};

module.exports = nextConfig;

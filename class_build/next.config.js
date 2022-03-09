/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // slash를 기준으로 폴더와 피일을 만들겠다
  generateBuildId: () => "codecamp-sejung", //
  exportPathMap: () => ({
    "/": {page: "/"},
    "/boards": {page: "/boards"},
    "/404": {page: "/404"},
  })
  //build:ssg 하고싶은 주소(static file)
};

module.exports = nextConfig;

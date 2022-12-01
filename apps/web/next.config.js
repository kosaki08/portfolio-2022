/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    transpilePackages: ['@portfolio-2022/ui'],
    appDir: true,
  },
};

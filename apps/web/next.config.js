/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    // https://github.com/prisma/prisma/issues/12921#issuecomment-1292348193
    config.externals = [...(config.externals || []), '@portfolio-2022/database'];
    return config;
  },
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    transpilePackages: ['@portfolio-2022/ui', '@portfolio-2022/database'],
    appDir: true,
  },
};

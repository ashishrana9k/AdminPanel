/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config /** @type {import('webpack').Configuration} */) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;

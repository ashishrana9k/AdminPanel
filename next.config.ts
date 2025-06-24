import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  webpack(config) { // No need to explicitly type 'config: Configuration' here
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
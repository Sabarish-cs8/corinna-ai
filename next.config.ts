import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-1385811-5129701.cloudwaysapps.com',
      },
    ],
  },
};

export default nextConfig;

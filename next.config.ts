import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // turbo: {
    //   plugins: [Unimport.turbo()],
    // },
  },
};

export default nextConfig;

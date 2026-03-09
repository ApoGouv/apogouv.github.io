import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for Static Site Generation (SSG)
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't have a dedicated Image Server
  },
};

export default nextConfig;

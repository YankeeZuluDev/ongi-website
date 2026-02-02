import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/ongi-website",
  images: {
    unoptimized: true
  }
};

export default nextConfig;

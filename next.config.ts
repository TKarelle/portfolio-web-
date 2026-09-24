import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [128, 256, 384],
    qualities: [70, 75, 80],
  },
};

export default nextConfig;

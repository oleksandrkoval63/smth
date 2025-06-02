import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ['fakestoreapi.com', 'example.com'], // Дозволені домени для next/image
  },
};

export default nextConfig;

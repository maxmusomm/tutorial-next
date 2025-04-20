import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "tse1.mm.bing.net",
        protocol: "https",
        port: "",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lookaside.fbsbx.com",
      },
      {
        protocol: "https",
        hostname: "frankfurt.apollo.olxcdn.com",
      },
      {
        protocol: "https",
        hostname: "photos.plugshare.com",
      },
      {
        protocol: "https",
        hostname: "www.romaniatonight.ro",
      },
    ],
  },
};

export default nextConfig;

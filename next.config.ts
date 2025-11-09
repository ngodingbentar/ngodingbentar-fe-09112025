import type { NextConfig } from "next";
const URL =
  process.env?.NEXT_PUBLIC_API_URL ?? "https://ngodingbentar-be-v4.vercel.app";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${URL}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
    ],
  },
};

export default nextConfig;

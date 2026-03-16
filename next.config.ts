import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async rewrites() {
    return [
      {
        source: "/sitesdone-landing",
        destination: "/sitesdone-landing/index.html",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/sitesdone-landing",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/sitesdone-landing/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/solution",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/soltions",
        destination: "/solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

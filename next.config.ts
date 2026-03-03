import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
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

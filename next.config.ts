import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — no server runtime needed. Deploy the /out folder to any host/CDN.
  output: "export",
  // Preserve the existing WordPress URL structure (e.g. /services/, /contact-us/).
  trailingSlash: true,
  images: {
    // next/image optimization requires a server; static export serves original files.
    unoptimized: true,
  },
};

export default nextConfig;

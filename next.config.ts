import type { NextConfig } from "next";

// When deploying to a subpath (e.g. a GitHub Pages project site served at
// /pro-pressure-washing/), CI sets NEXT_PUBLIC_BASE_PATH so links, build assets
// and (via lib/asset.ts) raw <img> tags all resolve correctly. Empty in local
// dev and root deploys.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Fully static site — no server runtime needed. Deploy the /out folder to any host/CDN.
  output: "export",
  // Preserve the existing WordPress URL structure (e.g. /services/, /contact-us/).
  trailingSlash: true,
  basePath,
  images: {
    // next/image optimization requires a server; static export serves original files.
    unoptimized: true,
  },
};

export default nextConfig;

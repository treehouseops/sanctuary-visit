import type { NextConfig } from "next";
const basePath = process.env.GH_PAGES_BASE_PATH ?? "";
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};
export default nextConfig;

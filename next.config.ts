import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Always use static export for GitHub Pages
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // No basePath or assetPrefix needed for custom domain
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/app/imageLoader.ts",
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
  compiler: {
    removeConsole: isProd,
  },
  // Bundle optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;

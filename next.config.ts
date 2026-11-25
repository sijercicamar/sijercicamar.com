import type { NextConfig } from "next";

// Draft content ({{TODO}} text, empty image slots, draft projects) is shown
// locally and on Vercel preview deploys, never on the production site.
const SHOW_DRAFTS = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV !== "production"
  : process.env.NODE_ENV !== "production"

const nextConfig: NextConfig = {
  env: { SHOW_DRAFTS: SHOW_DRAFTS ? "1" : "" },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.thum.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

import createMDX from "@next/mdx";

const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
};

export default withMDX(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    mdxRs: true,
  },
};


const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
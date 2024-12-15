import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // add allowance to flowbite images
  images: {
    domains: ["flowbite.s3.amazonaws.com"],
  },
};

export default nextConfig;

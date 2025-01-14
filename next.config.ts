import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    app: true, // If using the app directory
  },
  images: {
    domains: ["example.com"], // Replace with your domains
  },
  env: {
    CUSTOM_ENV: process.env.CUSTOM_ENV || "default_value",
  },
  target: "server", // Or "serverless"
};

export default nextConfig;

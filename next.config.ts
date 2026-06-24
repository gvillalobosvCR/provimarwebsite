import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'provimarcr.com',
      },
      {
        protocol: 'https',
        hostname: 'madisonironandwood.com',
      },
      {
        protocol: 'https',
        hostname: 'takmeeltrading.com',
      },
      {
        protocol: 'https',
        hostname: 'lubricants.repsol.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'castellamar.com',
      },
      {
        protocol: 'https',
        hostname: 'smartbusinesseg.com',
      },
      {
        protocol: 'https',
        hostname: 'thegoodshoppingguide.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'pymes.go.cr',
      },
    ],
  },
};

export default nextConfig;

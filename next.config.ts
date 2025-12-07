import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true, // For compatibility with Firebase App Hosting
    },
};

export default nextConfig;

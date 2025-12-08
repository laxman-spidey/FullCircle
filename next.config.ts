import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // For Firebase App Hosting, ensure static assets are handled properly
    output: "standalone",
    images: {
        unoptimized: true, // For compatibility with Firebase App Hosting
    },
};

export default nextConfig;

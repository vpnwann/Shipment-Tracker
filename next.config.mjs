/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export',

    images: {
        unoptimized: true
    }

};

export default nextConfig;

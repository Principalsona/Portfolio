/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: false, //
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
                port: '',
                pathname: '/1afeafda/Shikhar97/**',
            },
        ],
    },
};

module.exports = nextConfig;

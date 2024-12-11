/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        removeConsole:true,
    },
    output: 'export',
    reactStrictMode: false, 
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

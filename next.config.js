/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    basePath: '/ep-static-website'
}

module.exports = nextConfig
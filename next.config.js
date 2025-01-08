const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/blog/example.example',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/vip-blog/example.example',
        destination: '/404',
        permanent: false,
      },
    ]
  },
}

module.exports = withMDX(nextConfig) 
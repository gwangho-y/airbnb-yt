/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/get',//api request path
        destination: 'https://a0.muscache.com/',//목적 path
      },
    ]
  },
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        port: '',
        pathname: '/**',
      },
    ],
    // domains: ['links.papareact.com', 'a0.muscache.com'],
  }
}

module.exports = nextConfig

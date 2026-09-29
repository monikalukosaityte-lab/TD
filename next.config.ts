import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/product/syphilis',
        destination: '/tests/syphilis-test',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

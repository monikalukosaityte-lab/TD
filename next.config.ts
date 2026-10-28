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
        destination: '/rapid-tests/syphilis-home-test-kit',
        permanent: true,
      },
      {
        source: '/rapid-tests/syphilis',
        destination: '/rapid-tests/syphilis-home-test-kit',
        permanent: true,
      },
      {
        source: '/tests/chlamydia-gonorrhoea-test',
        destination: '/rapid-tests/chlamydia-gonorrhoea-home-test-kit',
        permanent: true,
      },
      {
        source: '/rapid-tests/chlamydia-gonorrhoea',
        destination: '/rapid-tests/chlamydia-gonorrhoea-home-test-kit',
        permanent: true,
      },
      {
        source: '/tests/hepatitis-b-c-test',
        destination: '/rapid-tests/hepatitis-b-c',
        permanent: true,
      },
      {
        source: '/tests/herpes-test',
        destination: '/rapid-tests/herpes-hsv-2-home-test-kit',
        permanent: true,
      },
      {
        source: '/rapid-tests/herpes',
        destination: '/rapid-tests/herpes-hsv-2-home-test-kit',
        permanent: true,
      },
      {
        source: '/tests/hiv-test',
        destination: '/rapid-tests/hiv-home-test-kit',
        permanent: true,
      },
      {
        source: '/rapid-tests/hiv',
        destination: '/rapid-tests/hiv-home-test-kit',
        permanent: true,
      },
      {
        source: '/tests/psa-test',
        destination: '/rapid-tests/psa',
        permanent: true,
      },
      {
        source: '/tests/syphilis-test',
        destination: '/rapid-tests/syphilis-home-test-kit',
        permanent: true,
      },
      {
        source: '/tests/core-4-bundle',
        destination: '/rapid-tests/core-4-bundle',
        permanent: true,
      },
      {
        source: '/tests/sti-test-bundle',
        destination: '/rapid-tests/sti-test-bundle',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

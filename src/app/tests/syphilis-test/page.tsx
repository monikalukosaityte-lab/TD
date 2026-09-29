import type { Metadata } from 'next';

import { SyphilisProductPage } from '@/components/sections/product/syphilis-product-page';

export const metadata: Metadata = {
  title: {
    absolute: 'Syphilis Rapid Test – Home Finger-Prick Kit | STI Test Kit',
  },
  description:
    'Buy a syphilis rapid test to use at home. Simple finger-prick kit with results in 15 minutes. Discreet packaging and fast UK delivery. Just £14.95.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <SyphilisProductPage />;
}

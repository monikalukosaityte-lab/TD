import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import HomePage from '@/components/sections/home/home-page';
import { getProductBySlug } from '@/lib/products';

export const metadata: Metadata = {
  title: {
    absolute: 'STI Test Kits | Home STI Tests with Results in 15 Minutes',
  },
  description:
    'Rapid STI test kits for home use: chlamydia, gonorrhoea, HIV, syphilis, herpes and hepatitis B & C. Private results in 15 minutes, discreet UK delivery.',
};

export default async function Home() {
  const bundle = await getProductBySlug('sti-test-bundle');
  if (!bundle) notFound();

  return <HomePage bundle={bundle} />;
}

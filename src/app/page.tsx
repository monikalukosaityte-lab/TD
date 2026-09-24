import type { Metadata } from 'next';

import { BlogListing } from '@/components/sections/blog/blog-page';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: {
    absolute: 'STI Test Kits | Sexual Health Guides & STI Information',
  },
  description:
    'Straightforward, medically reviewed guides on STIs, symptoms and testing. Everything you need to know.',
};

export default async function Home() {
  const articles = await getAllArticles();

  return <BlogListing articles={articles} />;
}

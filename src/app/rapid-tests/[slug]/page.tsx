import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProductPage from '@/components/sections/product/product-page';
import { getProductBySlug, getProductSlugs } from '@/lib/products';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return {};

  return {
    title: { absolute: `${product.title} | STI Test Kits` },
    description: product.intro.replace(/<[^>]+>/g, '').replace(/\*$/, ''),
    // Same copy as the Shopify product pages, so kept out of search until reviewed.
    robots: { index: false, follow: false },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return <ProductPage product={product} />;
}

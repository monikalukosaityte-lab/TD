import { MetadataRoute } from 'next';

import { getAllArticles } from '@/lib/articles';

const BASE_URL = 'https://stitestkit.co.uk';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: article.date,
  }));

  return [
    { url: BASE_URL },
    { url: `${BASE_URL}/blog` },
    ...articleEntries,
  ];
}

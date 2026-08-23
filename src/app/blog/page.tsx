import { BlogListing } from '@/components/sections/blog/blog-page';
import { getAllArticles } from '@/lib/articles';

export default async function BlogPage() {
  const articles = await getAllArticles();

  return <BlogListing articles={articles} />;
}

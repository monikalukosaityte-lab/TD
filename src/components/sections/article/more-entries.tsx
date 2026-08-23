import Link from 'next/link';

import { ArticleFrontmatter } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export function MoreEntries({ articles }: { articles: ArticleFrontmatter[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="section-padding border-t border-dashed">
      <div className="container max-w-3xl">
        <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
          Keep reading
        </span>
        <div className="space-y-6">
          {articles.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group border-border flex items-baseline justify-between gap-6 border-b py-5 no-underline last:border-b-0"
            >
              <h3 className="group-hover:text-accent text-xl tracking-tight transition-colors md:text-2xl">
                {article.title}
              </h3>
              <span className="text-muted-foreground shrink-0 font-mono text-[0.625rem] tracking-wider uppercase">
                {formatDate(article.date)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

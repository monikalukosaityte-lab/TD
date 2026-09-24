import Image from 'next/image';
import Link from 'next/link';

import { ArticleFrontmatter } from '@/lib/types';
import { formatDate } from '@/lib/utils';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, rgba(133,146,131,0.28), rgba(244,236,220,0.75))',
  'linear-gradient(135deg, rgba(133,146,131,0.3), rgba(235,234,224,0.8))',
  'linear-gradient(135deg, rgba(224,207,171,0.3), rgba(133,146,131,0.24))',
] as const;

export function MoreEntries({ articles }: { articles: ArticleFrontmatter[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-blog section-padding border-t border-dashed">
      <div className="container">
        <span className="text-muted-foreground mb-6 block text-sm">
          Keep reading
        </span>
        <div className="grid gap-5 md:grid-cols-3">
          {articles.slice(0, 3).map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-card border-border block overflow-hidden rounded-2xl border shadow-sm no-underline"
            >
              <div className="relative aspect-3/2">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="size-full"
                    style={{ background: CARD_GRADIENTS[index % CARD_GRADIENTS.length] }}
                  />
                )}
              </div>
              <div className="p-4">
                <p className="text-muted-foreground text-xs">
                  {formatDate(article.date)}
                </p>
                <h3 className="group-hover:text-accent mt-1 text-base leading-snug tracking-tight transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mt-1 line-clamp-2 text-sm leading-relaxed">
                  {article.description}
                </p>
                <span className="text-accent mt-3 inline-flex items-center gap-1 text-sm font-medium">
                  Read article
                  <span aria-hidden>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

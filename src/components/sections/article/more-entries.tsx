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
    <section className="section-padding border-t border-dashed">
      <div className="container max-w-3xl">
        <span className="text-accent mb-6 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
          Keep reading
        </span>
        <div className="space-y-6">
          {articles.slice(0, 3).map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group border-border flex items-center gap-5 border-b pb-6 no-underline last:border-b-0 last:pb-0"
            >
              <div className="border-border bg-card relative size-20 shrink-0 overflow-hidden rounded-xl border md:size-24">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="size-full"
                    style={{ background: CARD_GRADIENTS[index % CARD_GRADIENTS.length] }}
                  />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-muted-foreground font-mono text-[0.625rem] tracking-wider uppercase">
                  {formatDate(article.date)}
                </p>
                <h3 className="group-hover:text-accent mt-1 text-xl tracking-tight transition-colors md:text-2xl">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mt-1 line-clamp-2 text-sm leading-relaxed">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

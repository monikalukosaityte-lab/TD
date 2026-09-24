import { ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { ArticleFrontmatter } from '@/lib/types';
import { cn, formatPublishDate } from '@/lib/utils';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, rgba(133,146,131,0.28), rgba(244,236,220,0.75))',
  'linear-gradient(135deg, rgba(133,146,131,0.3), rgba(235,234,224,0.8))',
  'linear-gradient(135deg, rgba(224,207,171,0.3), rgba(133,146,131,0.24))',
] as const;

export function BlogListing({ articles }: { articles: ArticleFrontmatter[] }) {
  const [featured, ...rest] = articles;

  return (
    <div className="bg-blog">
      <section
        className="relative overflow-hidden pt-8 pb-8 md:pt-10 md:pb-12 lg:pt-12 lg:pb-16"
        id="home"
      >
        <div className="container relative">
          <span className="text-muted-foreground mb-4 block text-sm">
            STI Test Kits
          </span>
          <h1 className="max-w-2xl text-4xl leading-none tracking-tighter md:text-5xl lg:text-6xl">
            Everything you need to know about STI
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
            Straightforward guides to STI testing, infection symptoms and
            more — what to know, what to look for, and what to do next.
          </p>
        </div>
      </section>

      {(featured || rest.length > 0) && (
        <section className="section-padding pt-0">
          <div className="container">
            {featured && (
              <div className="mb-5">
                <ArticleCard article={featured} featured index={0} />
              </div>
            )}
            {rest.length > 0 && (
              <div className="grid gap-5 md:grid-cols-2">
                {rest.map((article, index) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    index={index + 1}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

function ArticleCard({
  article,
  featured = false,
  index,
}: {
  article: ArticleFrontmatter;
  featured?: boolean;
  index: number;
}) {
  const Heading = featured ? 'h2' : 'h3';

  return (
    <Link
      href={`/blog/${article.slug}`}
      className={cn(
        'group bg-card border-border block overflow-hidden rounded-[1.5rem] border shadow-sm no-underline',
        featured && 'md:flex md:items-stretch',
      )}
    >
      <div
        className={cn(
          'relative',
          featured
            ? 'aspect-video md:aspect-auto md:w-2/5 md:shrink-0 lg:w-[42%]'
            : 'aspect-3/2',
        )}
      >
        {featured && (
          <span className="bg-accent text-accent-foreground absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
            <Star className="size-3 fill-current" />
            Featured guide
          </span>
        )}
        {article.image ? (
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes={
              featured
                ? '(min-width: 768px) 40vw, 100vw'
                : '(min-width: 768px) 45vw, 100vw'
            }
            className="object-cover"
          />
        ) : (
          <div
            className="size-full"
            style={{ background: CARD_GRADIENTS[index % CARD_GRADIENTS.length] }}
          />
        )}
      </div>
      <div
        className={cn(
          'p-5',
          featured && 'md:flex md:flex-1 md:flex-col md:justify-center md:p-10',
        )}
      >
        <p className="text-muted-foreground text-sm">
          {formatPublishDate(article.date)}
        </p>
        <Heading
          className={cn(
            'mt-3 leading-tight tracking-tight transition-colors group-hover:text-accent',
            featured ? 'max-w-2xl text-3xl md:text-4xl' : 'text-2xl',
          )}
        >
          {article.title}
        </Heading>
        <p
          className={cn(
            'text-muted-foreground mt-3 leading-relaxed',
            featured && 'max-w-2xl',
          )}
        >
          {article.description}
        </p>
        <p className="text-muted-foreground mt-4 flex items-center gap-1.5 text-xs">
          <ShieldCheck className="text-accent size-3.5" />
          Medically reviewed
        </p>
        <span className="text-accent mt-4 inline-flex items-center gap-1 text-sm font-medium">
          Read article
          <span aria-hidden>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

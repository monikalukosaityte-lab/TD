import Link from 'next/link';

import { ArticleFrontmatter } from '@/lib/types';
import { formatDate } from '@/lib/utils';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, rgba(133,146,131,0.28), rgba(244,236,220,0.75))',
  'linear-gradient(135deg, rgba(133,146,131,0.3), rgba(235,234,224,0.8))',
  'linear-gradient(135deg, rgba(224,207,171,0.3), rgba(133,146,131,0.24))',
] as const;

export function BlogListing({ articles }: { articles: ArticleFrontmatter[] }) {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="hero-padding relative overflow-hidden">
        <div className="container relative">
          <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
            Health advice
          </span>
          <h1 className="font-text max-w-2xl text-4xl leading-none font-normal tracking-tighter md:text-5xl lg:text-6xl">
            The Test Discreet blog
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
            Clear, medically reviewed answers about STI and STD testing —
            accuracy, timing, results, and what to do next.
          </p>
        </div>
      </section>

      {featured && (
        <section className="section-padding pt-0">
          <div className="container">
            <Link
              href={`/blog/${featured.slug}`}
              className="group bg-card border-border block overflow-hidden rounded-[1.5rem] border shadow-sm no-underline"
            >
              <div
                className="h-56 md:h-72"
                style={{ background: CARD_GRADIENTS[0] }}
              />
              <div className="p-6 md:p-10">
                <p className="text-muted-foreground font-mono text-[0.62rem] tracking-[0.14em] uppercase">
                  {formatDate(featured.date)}
                </p>
                <h2 className="group-hover:text-accent mt-3 max-w-2xl text-3xl leading-tight tracking-tight transition-colors md:text-4xl">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                  {featured.description}
                </p>
                <span className="text-accent mt-5 inline-flex items-center gap-1 text-sm font-medium">
                  Read article
                  <span aria-hidden>&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container">
            <div className="grid gap-5 md:grid-cols-3">
              {rest.map((article, index) => (
                <article
                  key={article.slug}
                  className="bg-card border-border overflow-hidden rounded-[1.5rem] border shadow-sm"
                >
                  <div
                    className="h-44"
                    style={{
                      background: CARD_GRADIENTS[index % CARD_GRADIENTS.length],
                    }}
                  />
                  <div className="p-5">
                    <p className="text-muted-foreground mb-3 font-mono text-[0.62rem] tracking-[0.14em] uppercase">
                      {formatDate(article.date)}
                    </p>
                    <h3 className="text-2xl leading-tight tracking-tight">
                      {article.title}
                    </h3>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-accent mt-4 inline-flex items-center gap-1 text-sm font-medium"
                    >
                      Read article
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

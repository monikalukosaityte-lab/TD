import { ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { formatDate } from '@/lib/utils';

interface ArticleHeroProps {
  title: string;
  description: string;
  date: string;
  nextSlug?: string;
  children?: React.ReactNode;
}

export function ArticleHero({
  title,
  description,
  date,
  nextSlug,
  children,
}: ArticleHeroProps) {
  return (
    <section className="hero-padding">
      <div className="container max-w-3xl">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-accent inline-flex items-center gap-1.5 font-mono text-[0.625rem] tracking-widest uppercase no-underline transition-colors"
          >
            <ArrowLeft className="size-3" />
            Back to blog
          </Link>
          {nextSlug && (
            <Link
              href={`/blog/${nextSlug}`}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 font-mono text-[0.625rem] tracking-widest uppercase no-underline transition-colors"
            >
              Next
              <ChevronRight className="size-3" />
            </Link>
          )}
        </div>

        <span className="text-muted-foreground mt-8 block font-mono text-[0.625rem] tracking-widest uppercase">
          {formatDate(date)}
        </span>
        <h1 className="mt-3 text-4xl leading-none tracking-tighter md:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          {description}
        </p>

        <div className="border-border mt-10 border-t" />

        {children && <div className="pt-10">{children}</div>}
      </div>
    </section>
  );
}

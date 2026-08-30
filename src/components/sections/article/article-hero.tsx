import { ArrowLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/lib/utils';

interface ArticleHeroProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  nextSlug?: string;
  children?: React.ReactNode;
}

export function ArticleHero({
  title,
  description,
  date,
  image,
  nextSlug,
  children,
}: ArticleHeroProps) {
  return (
    <section className="hero-padding">
      <div className="container max-w-5xl">
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

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-12">
          <div>
            <span className="text-muted-foreground block font-mono text-[0.625rem] tracking-widest uppercase">
              {formatDate(date)}
            </span>
            <h1 className="mt-3 text-4xl leading-none tracking-tighter md:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {image && (
            <div className="bg-card border-border relative aspect-3/2 w-full shrink-0 overflow-hidden rounded-2xl border shadow-sm">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="max-w-3xl">
          <div className="border-border mt-10 border-t" />

          {children && <div className="pt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}

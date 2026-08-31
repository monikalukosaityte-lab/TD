import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
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
    <section className="hero-padding bg-blog">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="text-accent hover:text-accent-hover inline-flex items-center gap-1.5 text-xs no-underline transition-colors"
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
            <h1 className="text-4xl leading-none tracking-tighter md:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {description}
            </p>
            <div className="text-muted-foreground mt-5 flex flex-col gap-2 text-sm">
              <span className="flex items-center gap-1.5">
                <Check className="text-accent size-4" />
                Published {formatDate(date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="text-accent size-4" />
                Medically reviewed
              </span>
            </div>
          </div>

          {image && (
            <div className="relative aspect-3/2 w-full shrink-0">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 60vw, 100vw"
                className="object-contain"
              />
            </div>
          )}
        </div>

        <div className="border-accent mt-10 border-t" />

        <div className="max-w-3xl">
          {children && <div className="pt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}

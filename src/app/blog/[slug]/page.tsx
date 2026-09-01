import rehypeShiki from '@shikijs/rehype';
import { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ComponentPropsWithoutRef } from 'react';

import { Pre } from '@/components/mdx/code-block';
import {
  ArticleHero,
  MoreEntries,
  TableOfContents,
} from '@/components/sections/article';
import {
  getAllArticles,
  getArticleBySlug,
  getArticleSlugs,
} from '@/lib/articles';
import { ArticleFrontmatter } from '@/lib/types';
import { cn } from '@/lib/utils';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function MdxImage(props: ImageProps) {
  return (
    <div className="not-prose col-span-full my-10">
      <Image {...props} className="w-full rounded-2xl" alt={props.alt || ''} />
    </div>
  );
}

function H2({ className, children, ...props }: ComponentPropsWithoutRef<'h2'>) {
  const text = typeof children === 'string' ? children : '';
  return (
    <h2 id={slugify(text)} className={cn('scroll-mt-10', className)} {...props}>
      {children}
    </h2>
  );
}

function P(props: ComponentPropsWithoutRef<'p'>) {
  return <p {...props} />;
}

function Ul(props: ComponentPropsWithoutRef<'ul'>) {
  return <ul {...props} />;
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="lead text-muted-foreground">{children}</p>;
}

const mdxComponents: MDXComponents = {
  pre: Pre,
  img: MdxImage as MDXComponents['img'],
  h2: H2,
  p: P,
  ul: Ul,
  Lead,
};

const TOC_ITEMS = [
  { label: 'Key takeaways', id: 'key-takeaways' },
  { label: 'How testing works', id: 'how-does-an-sti-test-work' },
  { label: 'What it checks for', id: 'what-does-an-sti-test-check-for' },
  { label: 'When to test', id: 'how-soon-after-sex-should-i-test' },
  { label: 'Result times', id: 'how-long-do-results-take' },
  {
    label: 'If you test positive',
    id: 'what-happens-if-my-result-is-positive',
  },
  { label: 'Cost & availability', id: 'is-sti-testing-free-in-the-uk' },
  { label: 'Accuracy', id: 'are-home-sti-test-kits-accurate' },
  { label: 'FAQs', id: 'frequently-asked-questions' },
] as const;

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(slug),
    getAllArticles(),
  ]);

  if (!article) {
    notFound();
  }

  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const nextArticle = allArticles[currentIndex + 1] || allArticles[0];
  const otherArticles = allArticles.filter((a) => a.slug !== slug);

  const { content } = await compileMDX<ArticleFrontmatter>({
    source: article.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypeShiki,
            {
              themes: {
                light: 'github-light',
                dark: 'github-dark',
              },
              defaultColor: false,
            },
          ],
        ],
      },
    },
    components: mdxComponents,
  });

  return (
    <>
      <article>
        <ArticleHero
          title={article.frontmatter.title}
          description={article.frontmatter.description}
          date={article.frontmatter.date}
          image={article.frontmatter.image}
          nextSlug={nextArticle?.slug !== slug ? nextArticle?.slug : undefined}
        >
          {/* Article body */}
          <div className="grid gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
            <div className="prose prose-base prose-neutral dark:prose-invert prose-a:text-accent prose-a:underline prose-li:marker:text-foreground max-w-none [&>h2]:mt-14 [&>h2]:text-2xl [&>h2]:leading-tight [&>h2]:tracking-tight [&>h2:first-child]:mt-0 [&>p]:text-muted-foreground [&>ul]:mt-4 [&>ul]:text-muted-foreground [&>p+p]:mt-4">
              {content}
            </div>
            <TableOfContents items={TOC_ITEMS} />
          </div>
        </ArticleHero>
      </article>

      <MoreEntries articles={otherArticles} />
    </>
  );
}

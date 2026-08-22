import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, rgba(133,146,131,0.28), rgba(244,236,220,0.75))',
  'linear-gradient(135deg, rgba(133,146,131,0.3), rgba(235,234,224,0.8))',
  'linear-gradient(135deg, rgba(224,207,171,0.3), rgba(133,146,131,0.24))',
] as const;

const articleSections = [
  {
    eyebrow: 'Health advice',
    heading: 'How rapid tests actually work',
    bordered: true,
    posts: [
      {
        title: 'How accurate are STD rapid tests?',
        tag: 'Rapid vs lab tests',
      },
      {
        title: 'How soon after sex can you take a rapid test?',
        tag: 'Testing window',
      },
      {
        title: 'Rapid test vs lab test: which one should you choose?',
        tag: 'Which one to choose',
      },
    ],
  },
  {
    eyebrow: 'Understanding your results',
    heading: 'What your STD test result means',
    bordered: false,
    posts: [
      {
        title: 'What does a positive rapid test result actually mean?',
        tag: 'Next steps, not panic',
      },
      {
        title: 'Can a rapid test give a false positive or false negative?',
        tag: 'False results',
      },
      {
        title: 'I tested negative but still have symptoms—now what?',
        tag: 'Still have symptoms',
      },
    ],
  },
  {
    eyebrow: 'Specific STDs, testing-focused',
    heading: 'Rapid testing for common STDs',
    bordered: true,
    posts: [
      {
        title: 'Chlamydia rapid test: what to expect and how fast you get results',
        tag: 'Chlamydia rapid test',
      },
      {
        title: 'HIV rapid test: window period, accuracy, and privacy',
        tag: 'HIV rapid test',
      },
      {
        title: "Herpes rapid test: why it's different from other STD tests",
        tag: 'Herpes rapid test',
      },
    ],
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="hero-padding relative overflow-hidden" id="home">
        <div className="container relative">
          <h1 className="font-text max-w-3xl text-4xl leading-none font-normal tracking-tighter md:text-5xl lg:text-6xl">
            Everything you need to know about STD rapid tests.
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
            How accurate they are, how soon after exposure to test, and what
            your result actually means. Clear, medically reviewed
            answers&mdash;no clinic, no waiting room, no shame.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/blog">Explore all</Link>
            </Button>
          </div>
        </div>
      </section>

      {articleSections.map((section) => (
        <ArticleSection key={section.heading} {...section} />
      ))}
    </>
  );
}

function ArticleSection({
  eyebrow,
  heading,
  bordered,
  posts,
}: {
  eyebrow: string;
  heading: string;
  bordered: boolean;
  posts: readonly { title: string; tag: string }[];
}) {
  return (
    <section
      className={cn(
        'section-padding',
        bordered && 'border-y border-dashed bg-white/30',
      )}
    >
      <div className="container">
        <div className="mb-12">
          <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
            {eyebrow}
          </span>
          <h2 className="text-4xl leading-none tracking-tighter md:text-5xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="bg-card border-border overflow-hidden rounded-[1.5rem] border shadow-sm"
            >
              <div
                className="h-44"
                style={{ background: CARD_GRADIENTS[index] }}
              />
              <div className="p-5">
                <p className="text-accent mb-3 font-mono text-[0.62rem] tracking-[0.14em] uppercase">
                  {post.tag}
                </p>
                <h3 className="text-2xl leading-tight tracking-tight">{post.title}</h3>
                <Link href="/blog" className="mt-4 inline-block text-sm font-medium text-foreground">
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

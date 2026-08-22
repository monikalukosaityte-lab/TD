import {
  ClipboardCheck,
  Clock,
  Droplet,
  Mail,
  Package,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import { LogoMark } from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: { component: Package },
    title: 'Discreet Delivery',
    description: 'Unmarked packaging for your privacy.',
  },
  {
    icon: { component: Zap },
    title: 'Fast Results',
    description: 'Results in as little as 10 minutes.',
  },
  {
    icon: { component: ShieldCheck },
    title: 'Reliable Accuracy',
    description: 'Trusted by healthcare professionals.',
  },
  {
    icon: { component: Sparkles },
    title: 'Easy to Use',
    description: 'Simple steps, clear results.',
  },
] as const;

const steps = [
  {
    number: '01',
    icon: { component: Droplet },
    title: 'Collect',
    description: 'Collect your sample using the simple kit instructions.',
  },
  {
    number: '02',
    icon: { component: TestTube2 },
    title: 'Test',
    description: 'Apply your sample to the test cassette and start the timer.',
  },
  {
    number: '03',
    icon: { component: Clock },
    title: 'Wait',
    description: 'Wait a few minutes while your result develops.',
  },
  {
    number: '04',
    icon: { component: ClipboardCheck },
    title: 'Results',
    description: 'Read your discreet, private result at home.',
  },
] as const;

const tests = [
  {
    name: 'Syphilis Antibody Rapid Test Kit',
    subtitle: undefined,
    description: 'Private testing, clear answers.',
  },
  {
    name: 'Gonorrhoea/Chlamydia Combo Rapid Test Kit',
    subtitle: '(Colloidal Gold Method)',
    description: 'Convenient, accurate, peace of mind.',
  },
  {
    name: 'HIV 1/2 Antibody Rapid Test Kit',
    subtitle: undefined,
    description: 'Test with confidence, care for yourself.',
  },
] as const;

const testimonials = [
  'Straightforward, discreet, and reassuring from start to finish.',
  'I wanted something private and simple, and the experience felt calm and respectful.',
  'The whole process felt easy and made me feel more in control of my health.',
] as const;

const faqs = [
  {
    question: 'Is the process discreet?',
    answer:
      'Yes. Orders are packed in plain, unbranded packaging and results are delivered privately online, with no unnecessary fuss.',
  },
  {
    question: 'How quickly will I get my results?',
    answer:
      'Most tests are processed quickly, with turnaround times depending on the selected kit and the sample being returned.',
  },
  {
    question: 'Do I need a prescription?',
    answer:
      'No prescription is required for our home testing kits. The process is designed to be simple, private and accessible.',
  },
] as const;

const blogPosts = [
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

      <section className="section-padding border-y border-dashed bg-white/30">
        <div className="container">
          <div className="mb-12">
            <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
              Health advice
            </span>
            <h2 className="text-4xl leading-none tracking-tighter md:text-5xl">
              How rapid tests actually work
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.title}
                className="bg-card border-border overflow-hidden rounded-[1.5rem] border shadow-sm"
              >
                <div
                  className="h-44"
                  style={{
                    background: [
                      'linear-gradient(135deg, rgba(133,146,131,0.28), rgba(244,236,220,0.75))',
                      'linear-gradient(135deg, rgba(133,146,131,0.3), rgba(235,234,224,0.8))',
                      'linear-gradient(135deg, rgba(224,207,171,0.3), rgba(133,146,131,0.24))',
                    ][index],
                  }}
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

      <section className="border-y border-dashed bg-white/30 py-12">
        <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="bg-accent-subtle text-accent mb-4 inline-flex size-14 items-center justify-center rounded-full">
                <feature.icon.component className="size-6" />
              </div>
              <h3 className="text-base font-medium tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="section-padding">
        <div className="container">
          <div className="bg-accent-subtle border-border grid gap-10 rounded-[2rem] border p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
                How it works
              </span>
              <h2 className="text-4xl leading-none tracking-tighter md:text-5xl">
                Simple. Private. In your hands.
              </h2>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                {steps.map((step) => (
                  <div key={step.number}>
                    <div className="bg-card border-border text-accent mb-3 inline-flex size-11 items-center justify-center rounded-full border">
                      <step.icon.component className="size-5" />
                    </div>
                    <h3 className="text-lg font-medium tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button asChild variant="outline">
                  <Link href="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <TestCassette />
            </div>
          </div>
        </div>
      </section>

      <section id="kits" className="section-padding">
        <div className="container">
          <div className="mb-12">
            <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
              Tests for your health
            </span>
            <h2 className="text-4xl leading-none tracking-tighter md:text-5xl">
              A range of tests. A commitment to you.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tests.map((test) => (
              <article key={test.name} className="flex flex-col gap-5 sm:flex-row md:flex-col">
                <ProductBox
                  name={test.name}
                  subtitle={test.subtitle}
                  size="sm"
                  className="shrink-0"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl leading-tight tracking-tight">{test.name}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {test.description}
                  </p>
                  <Link
                    href="#shop"
                    className="text-accent mt-4 inline-flex items-center gap-1 text-sm font-medium"
                  >
                    Shop Now
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-dashed bg-white/30">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
              Why choose us
            </span>
            <h2 className="text-4xl leading-none tracking-tighter md:text-5xl">
              Healthcare should feel calm, clear and respectful.
            </h2>
          </div>
          <div className="space-y-4">
            {[
              'Discreet packaging and private online access to your results.',
              'Clear guidance with no judgement and no unnecessary jargon.',
              'Fast turnaround times for people who need clarity without delay.',
            ].map((item, index) => (
              <div key={item} className="bg-card border-border flex gap-4 rounded-2xl border p-4">
                <span className="text-accent font-display text-2xl">0{index + 1}</span>
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
              Customer stories
            </span>
            <h2 className="text-4xl leading-none tracking-tighter md:text-5xl">
              Trusted by people wanting answers quickly.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((quote) => (
              <blockquote
                key={quote}
                className="bg-card border-border rounded-[1.5rem] border p-6 text-base leading-relaxed text-foreground/85 shadow-sm"
              >
                &ldquo;{quote}&rdquo;
                <footer className="mt-4 font-medium text-foreground">
                  &mdash; Verified customer
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
              FAQ
            </span>
            <h2 className="text-4xl leading-none tracking-tighter md:text-5xl">
              Everything you need to know before ordering.
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div key={item.question} className="bg-card border-border rounded-2xl border p-4">
                <p className="font-medium text-foreground">
                  {String(index + 1).padStart(2, '0')} &middot; {item.question}
                </p>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="section-padding pt-4">
        <div className="container">
          <div className="bg-accent-subtle border-border flex flex-col gap-6 rounded-[2rem] border p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="bg-card border-border text-accent flex size-11 shrink-0 items-center justify-center rounded-full border">
                <Mail className="size-5" />
              </div>
              <div>
                <h2 className="text-2xl leading-tight tracking-tight md:text-3xl">
                  Stay Informed. Stay Empowered.
                </h2>
                <p className="text-muted-foreground mt-1 text-sm">
                  Get tips, updates and exclusive offers.
                </p>
              </div>
            </div>
            <div className="border-border bg-card flex w-full max-w-sm items-center gap-2 rounded-full border p-1.5 md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-9 flex-1 rounded-full border-none px-4 shadow-none focus-visible:ring-0"
              />
              <Button size="icon" className="rounded-full">
                <span aria-hidden>&rarr;</span>
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductBox({
  name,
  subtitle,
  size = 'lg',
  className,
}: {
  name: string;
  subtitle?: string;
  size?: 'lg' | 'sm';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-card border-border relative flex flex-col overflow-hidden rounded-2xl border shadow-sm',
        size === 'lg' ? 'aspect-3/4 w-44 p-5 sm:w-52' : 'aspect-3/4 w-28 p-4',
        className,
      )}
    >
      <div
        aria-hidden
        className="bg-accent-light/50 pointer-events-none absolute inset-x-0 bottom-0 h-1/3 [clip-path:polygon(0_40%,100%_0,100%_100%,0_100%)]"
      />
      <div className="relative z-10 flex items-center gap-1.5">
        <LogoMark className={cn('text-accent', size === 'lg' ? 'w-6' : 'w-4')} />
      </div>
      <p
        className={cn(
          'text-muted-foreground relative z-10 mt-1 font-mono tracking-[0.16em] uppercase',
          size === 'lg' ? 'text-[0.55rem]' : 'text-[0.42rem]',
        )}
      >
        Test Discreet
      </p>
      <h3
        className={cn(
          'font-display relative z-10 mt-3 leading-snug tracking-tight',
          size === 'lg' ? 'text-base' : 'text-[0.6rem]',
        )}
      >
        {name}
      </h3>
      {subtitle && (
        <p
          className={cn(
            'text-muted-foreground relative z-10 mt-1',
            size === 'lg' ? 'text-xs' : 'text-[0.4rem]',
          )}
        >
          {subtitle}
        </p>
      )}
      {size === 'lg' && (
        <span className="text-muted-foreground relative z-10 mt-auto self-end font-mono text-[0.55rem] tracking-wider uppercase">
          1 test
        </span>
      )}
    </div>
  );
}

function TestCassette() {
  return (
    <div className="bg-card border-border w-40 rounded-2xl border p-3 shadow-md">
      <div className="border-border bg-secondary flex flex-col items-center gap-4 rounded-xl border p-4">
        <span className="text-muted-foreground font-mono text-[0.55rem] tracking-[0.16em] uppercase">
          TD
        </span>
        <div className="border-border relative h-24 w-8 rounded-full border bg-white">
          <span className="bg-accent absolute inset-x-1 top-4 h-1.5 rounded-full" />
          <span className="border-muted-foreground/30 absolute inset-x-1 top-9 h-1.5 rounded-full border border-dashed" />
        </div>
        <div className="flex gap-3 font-mono text-[0.55rem] text-muted-foreground">
          <span>T</span>
          <span>C</span>
        </div>
      </div>
    </div>
  );
}

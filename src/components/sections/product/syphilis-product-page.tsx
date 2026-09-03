import { ArrowLeft, Camera, Clock, Lock, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, rgba(133,146,131,0.28), rgba(244,236,220,0.75))',
  'linear-gradient(135deg, rgba(133,146,131,0.3), rgba(235,234,224,0.8))',
  'linear-gradient(135deg, rgba(224,207,171,0.3), rgba(133,146,131,0.24))',
] as const;

const product = {
  name: 'Rapid Syphilis Test',
  image: { src: '/images/products/psa-test-kit.webp', alt: 'Test Discreet Syphilis (TP) Ab Rapid Test Kit' },
  gallery: ['Box front', 'Box back / IFU', "What's inside", 'Discreet mailer'],
  rating: { value: 4.9, count: 189 },
  intro:
    'Worried you may have been exposed to syphilis? Test privately at home with a simple finger-prick test.',
  reassurance: {
    bold: 'No judgement. Just answers.',
    text: 'Testing is a normal part of looking after your sexual health.',
  },
  price: { current: '£14.95', original: '£19.95', save: 'Save £5.00' },
  features: [
    { icon: Lock, label: 'Discreet packaging' },
    { icon: Clock, label: 'Result in 15 minutes' },
    { icon: ShieldCheck, label: '99% accuracy' },
  ],
  specs: [
    { label: 'Suitable for', value: 'Men & women' },
    { label: 'Sample', value: 'Fingerprick blood' },
    { label: 'Test from', value: '3–6 weeks after exposure, conclusive at 12' },
  ],
  checkoutTrust: [
    'Secure checkout',
    'Discreet UK delivery',
    'Order by 2pm, ships today',
  ],
} as const;

const howItWorks = [
  {
    step: 1,
    title: 'Prick your finger',
    description: 'One small blood sample, using the included lancet.',
  },
  {
    step: 2,
    title: 'Add to the device',
    description: 'A few drops of sample, plus the provided buffer solution.',
  },
  {
    step: 3,
    title: 'Read your result',
    description: 'A clear line appears on the device within 15 minutes.',
  },
] as const;

const faqs = [
  {
    id: 'accuracy',
    question: 'How accurate is this test?',
    answer:
      'This is a CE-marked in-vitro diagnostic test using the colloidal gold method. [add your sensitivity / specificity figures here, or a link to the instructions for use]. A positive result should always be confirmed by a GP or sexual health clinic.',
  },
  {
    id: 'shipping',
    question: 'How is my order shipped?',
    answer:
      'Orders placed by 2pm Monday to Friday ship the same day via free UK tracked delivery, in plain, unbranded packaging.',
  },
  {
    id: 'positive-result',
    question: 'What happens if my result is positive?',
    answer:
      'Take your result to your GP or a sexual health clinic as soon as possible to confirm it and start treatment. [confirm any additional support Test Discreet offers, e.g. free replacement kits or clinic referrals]',
  },
] as const;

const reviews = [
  { quote: '[add a real review excerpt here]', author: '[Verified buyer]' },
  { quote: '[add a real review excerpt here]', author: '[Verified buyer]' },
] as const;

const relatedTests = [
  {
    name: '7-in-1 STI Test Bundle',
    badge: 'Best value',
    rating: { value: 4.9, count: 327 },
    detects: 'Five kits covering seven infections.',
    price: { current: '£59.95', original: '£86.75' },
    image: null,
  },
  {
    name: 'Core 4 Bundle',
    badge: 'Most popular',
    rating: { value: 4.9, count: 214 },
    detects: 'Chlamydia, gonorrhoea, HIV and syphilis in three kits.',
    price: { current: '£39.95', original: '£50.85' },
    image: null,
  },
  {
    name: 'Chlamydia & Gonorrhoea Test',
    badge: null,
    rating: { value: 4.8, count: 296 },
    detects: "The UK's two most common bacterial STIs in one test.",
    price: { current: '£17.95', original: '£24.95' },
    image: null,
  },
  {
    name: 'HIV 1/2 Test',
    badge: null,
    rating: { value: 4.9, count: 348 },
    detects: 'Antibodies to HIV-1 and HIV-2.',
    price: { current: '£17.95', original: '£24.95' },
    image: null,
  },
  {
    name: 'HSV-2 Genital Herpes Test',
    badge: null,
    rating: { value: 4.8, count: 176 },
    detects: 'IgM antibodies to herpes simplex virus type 2.',
    price: { current: '£17.95', original: '£24.95' },
    image: null,
  },
  {
    name: 'Hepatitis B & C Test',
    badge: null,
    rating: { value: 4.9, count: 142 },
    detects: 'Hepatitis B surface antigen and hepatitis C antibodies.',
    price: { current: '£17.95', original: '£24.95' },
    image: null,
  },
  {
    name: 'PSA Prostate Test',
    badge: null,
    rating: { value: 4.8, count: 231 },
    detects: 'Prostate-specific antigen at or above 4 ng/mL.',
    price: { current: '£17.95', original: '£24.95' },
    image: {
      src: '/images/products/psa-test-kit.webp',
      alt: 'Test Discreet Prostate Specific Ag (PSA) Rapid Test Kit',
    },
  },
] as const;

export function SyphilisProductPage() {
  return (
    <div className="bg-blog">
      <ProductHero />
      <HowItWorks />
      <CommonQuestions />
      <Reviews />
      <RelatedTests />
    </div>
  );
}

function Rating({
  value,
  count,
  suffix = '',
}: {
  value: number;
  count: number;
  suffix?: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="text-accent-deep fill-accent-deep size-3.5" />
        ))}
      </div>
      <span className="text-muted-foreground">
        {value} ({count}
        {suffix})
      </span>
    </div>
  );
}

function ProductHero() {
  return (
    <section className="hero-padding">
      <div className="container">
        <Link
          href="/"
          className="text-accent hover:text-accent-hover inline-flex items-center gap-1.5 text-xs no-underline transition-colors"
        >
          <ArrowLeft className="size-3" />
          Back to shop
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[440px_1fr] lg:gap-16">
          <div>
            <div className="relative -mx-4 aspect-4/5 overflow-hidden rounded-[2.5rem] lg:mx-0">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.gallery.map((label) => (
                <div
                  key={label}
                  className="border-border text-muted-foreground flex aspect-square flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed p-2 text-center text-[0.65rem] leading-tight"
                >
                  <Camera className="size-4" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-accent mb-2 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
              Test Discreet
            </span>
            <h1 className="text-4xl leading-none tracking-tighter md:text-5xl">
              {product.name}
            </h1>
            <div className="mt-4">
              <Rating value={product.rating.value} count={product.rating.count} suffix=" reviews" />
            </div>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {product.intro}
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              <span className="font-semibold">{product.reassurance.bold}</span>{' '}
              <span className="text-muted-foreground">{product.reassurance.text}</span>
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl tracking-tight">{product.price.current}</span>
              <span className="text-muted-foreground text-lg line-through">
                {product.price.original}
              </span>
              <Badge variant="sage">{product.price.save}</Badge>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span
                  key={feature.label}
                  className="border-border bg-card text-muted-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium"
                >
                  <feature.icon className="text-accent size-3.5" />
                  {feature.label}
                </span>
              ))}
            </div>

            <dl className="divide-border border-border mt-6 divide-y border-y text-sm">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 py-3">
                  <dt className="text-muted-foreground shrink-0">{spec.label}</dt>
                  <dd className="text-right font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <Button variant="brand-deep" size="lg" className="mt-6 w-full">
              Get my test - {product.price.current}
            </Button>

            <p className="text-muted-foreground mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs">
              <span className="inline-flex items-center gap-1">
                <Lock className="size-3" />
                {product.checkoutTrust[0]}
              </span>
              <span aria-hidden>·</span>
              <span>{product.checkoutTrust[1]}</span>
              <span aria-hidden>·</span>
              <span>{product.checkoutTrust[2]}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-padding border-y border-dashed bg-white/30">
      <div className="container">
        <h2 className="text-center text-3xl leading-none tracking-tighter md:text-4xl">
          How it works
        </h2>
        <div className="mt-12 grid gap-10 text-center md:grid-cols-3 md:gap-8">
          {howItWorks.map((step) => (
            <div key={step.step} className="flex flex-col items-center">
              <span className="bg-accent text-accent-foreground flex size-9 items-center justify-center rounded-full text-sm font-medium">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg leading-tight tracking-tight">{step.title}</h3>
              <p className="text-muted-foreground mt-2 max-w-xs text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommonQuestions() {
  return (
    <section className="section-padding">
      <div className="container max-w-2xl">
        <h2 className="text-center text-3xl leading-none tracking-tighter md:text-4xl">
          Common questions
        </h2>
        <Accordion type="single" collapsible defaultValue={faqs[0].id} className="mt-10">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section-padding border-border border-t pt-16">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl leading-none tracking-tighter md:text-4xl">
            What customers say
          </h2>
          <Link
            href="#"
            className="text-accent hover:text-accent-hover inline-flex items-center gap-1 text-sm font-medium no-underline transition-colors"
          >
            See all {product.rating.count} reviews
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border-border rounded-2xl border p-6 shadow-sm"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="text-accent-deep fill-accent-deep size-3.5" />
                ))}
              </div>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed italic">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="text-muted-foreground mt-3 text-xs">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedTests() {
  return (
    <section className="section-padding border-border border-t">
      <div className="container">
        <div className="mb-10">
          <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
            More tests
          </span>
          <h2 className="text-4xl leading-none tracking-tighter md:text-5xl">
            Explore the range
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {relatedTests.map((test, index) => (
            <article
              key={test.name}
              className="bg-card border-border overflow-hidden rounded-[1.5rem] border shadow-sm"
            >
              <div
                className="relative h-44"
                style={
                  test.image
                    ? undefined
                    : { background: CARD_GRADIENTS[index % CARD_GRADIENTS.length] }
                }
              >
                {test.image && (
                  <Image
                    src={test.image.src}
                    alt={test.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                )}
                {test.badge && (
                  <Badge variant="subtle" className="absolute top-3 left-3">
                    {test.badge}
                  </Badge>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl leading-tight tracking-tight">{test.name}</h3>
                <div className="mt-2">
                  <Rating value={test.rating.value} count={test.rating.count} />
                </div>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {test.detects}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-baseline gap-2">
                    <span className="font-medium">{test.price.current}</span>
                    <span className="text-muted-foreground text-sm line-through">
                      {test.price.original}
                    </span>
                  </span>
                  <Button variant="outline" size="sm">
                    Add to cart
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

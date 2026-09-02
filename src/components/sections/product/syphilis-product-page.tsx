import { ArrowLeft, Check, Star } from 'lucide-react';
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
  name: 'Syphilis Test',
  image: { src: '/images/blog/what-is-sti-test.webp', alt: 'Test Discreet Syphilis (TP) Ab Rapid Test Kit' },
  rating: { value: 4.9, count: 189 },
  detects: 'Antibodies to Treponema pallidum, the syphilis bacterium.',
  price: { current: '£14.95', original: '£19.95', save: 'Save £5.00' },
  trust: [
    'In stock — order by 2pm and it ships today',
    'Results in 15 minutes',
    'Free UK tracked delivery',
  ],
  specs: [
    { label: 'Sample', value: 'Fingerprick blood' },
    { label: 'Test from', value: '3 to 6 weeks after exposure, conclusive at 12' },
    { label: 'Certification', value: 'CE-marked IVD, colloidal gold method' },
  ],
} as const;

const infoSections = [
  {
    id: 'why-test',
    title: 'Why test',
    type: 'ul',
    items: [
      'UK syphilis diagnoses are at their highest level since 1948.',
      'The first sign is often a painless sore that heals on its own, so it is easy to miss.',
      'Caught early, syphilis is fully curable with antibiotics. Untreated, it damages the heart, brain and nerves over years.',
    ],
  },
  {
    id: 'whats-in-the-box',
    title: "What's in the box",
    type: 'ul',
    items: [
      'Test cassette in sealed foil pouch',
      'Buffer solution',
      '2 sterile lancets',
      'Capillary pipette',
      'Alcohol pad and plaster',
      'Instructions for use',
    ],
  },
  {
    id: 'how-to-use-it',
    title: 'How to use it',
    type: 'ol',
    items: [
      'Wash your hands in warm water. Clean your fingertip with the alcohol pad.',
      'Press the lancet against the side of your fingertip until it clicks. Squeeze out a drop of blood.',
      'Fill the pipette to the line, dispense into the sample well, add 2 drops of buffer.',
      'Read your result at 15 minutes, not after 20.',
    ],
  },
  {
    id: 'when-to-test',
    title: 'When to test',
    type: 'p',
    text: 'Antibodies usually show from 3 to 6 weeks after exposure; a negative result is conclusive at 12 weeks. A previously treated syphilis infection can still test positive: use a clinic for follow-up if you have had syphilis before.',
  },
  {
    id: 'reading-your-result',
    title: 'Reading your result',
    type: 'p',
    text: 'One line at C means negative. Two lines, even faint, means positive: take the result to your GP or a sexual health clinic to confirm it and start treatment. No line at C means the test is invalid; contact us for a free replacement.',
  },
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
      <RelatedTests />
    </div>
  );
}

function Rating({ value, count }: { value: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="text-accent fill-accent size-3.5" />
        ))}
      </div>
      <span className="text-muted-foreground">
        {value} ({count})
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
          <div className="relative aspect-square w-full lg:aspect-4/5">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl leading-none tracking-tighter md:text-5xl">
              {product.name}
            </h1>
            <div className="mt-4">
              <Rating value={product.rating.value} count={product.rating.count} />
            </div>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {product.detects}
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl tracking-tight">{product.price.current}</span>
              <span className="text-muted-foreground text-lg line-through">
                {product.price.original}
              </span>
              <Badge variant="amber">{product.price.save}</Badge>
            </div>

            <ul className="text-muted-foreground mt-5 flex flex-col gap-2 text-sm">
              {product.trust.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check className="text-accent size-4" />
                  {item}
                </li>
              ))}
            </ul>

            <dl className="divide-border border-border mt-6 divide-y border-y text-sm">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 py-3">
                  <dt className="text-muted-foreground">{spec.label}</dt>
                  <dd className="text-right font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <Button variant="brand" size="lg" className="mt-6 w-full">
              Add to cart — {product.price.current}
            </Button>

            <Accordion type="single" collapsible className="border-border mt-8 border-t">
              {infoSections.map((section) => (
                <AccordionItem key={section.id} value={section.id}>
                  <AccordionTrigger>{section.title}</AccordionTrigger>
                  <AccordionContent>
                    {section.type === 'ul' && (
                      <ul className="text-muted-foreground list-disc space-y-1.5 pl-4">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.type === 'ol' && (
                      <ol className="text-muted-foreground list-decimal space-y-1.5 pl-4">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    )}
                    {section.type === 'p' && (
                      <p className="text-muted-foreground">{section.text}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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

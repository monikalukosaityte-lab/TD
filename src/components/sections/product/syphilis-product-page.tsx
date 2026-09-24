import {
  ArrowLeft,
  Camera,
  Clock,
  Download,
  Lock,
  ShieldCheck,
  Star,
  User,
} from 'lucide-react';
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

const privacyFeatures = [
  {
    icon: Lock,
    title: 'Confidential',
    description: 'Your information stays private',
  },
  {
    icon: User,
    title: 'No appointments',
    description: 'Test at home, no clinic visits',
  },
  {
    icon: ShieldCheck,
    title: 'Take control',
    description: 'Get the clarity you deserve',
  },
] as const;

const boxContents = [
  { item: 'Test cassette', qty: '×1' },
  { item: 'Safety lancet', qty: '×1' },
  { item: 'Alcohol wipe', qty: '×1' },
  { item: 'Blood dropper', qty: '×1' },
  { item: 'Buffer solution', qty: '×1' },
  { item: 'Instructions leaflet', qty: '×1' },
] as const;

const howItWorks = [
  {
    step: 1,
    image: '[Simple drawing: finger + lancet]',
    title: 'Prick your finger',
    description:
      'Wash your hands, clean a fingertip with the wipe and press the lancet on it.',
  },
  {
    step: 2,
    image: '[Simple drawing: drop into cassette]',
    title: 'Add blood and buffer',
    description: 'Put one drop of blood in the test, then [2] drops of buffer solution.',
  },
  {
    step: 3,
    image: '[Simple drawing: timer + cassette]',
    title: 'Read at [15] minutes',
    description:
      "Don't read it after [20] minutes, as the result may no longer be correct.",
  },
] as const;

const resultCards = [
  {
    label: 'Negative',
    lead: 'One line, at C',
    cLine: true,
    tLine: false,
    description:
      'No syphilis antibodies were found. If you might have been exposed in the last 12 weeks, test again at 12 weeks.',
  },
  {
    label: 'Positive',
    lead: 'Two lines, at C and T, even a faint one',
    cLine: true,
    tLine: true,
    description:
      'Syphilis antibodies were found. Visit a sexual health clinic to confirm the result. Syphilis is treated with antibiotics.',
  },
  {
    label: 'Invalid',
    lead: 'No line at C',
    cLine: false,
    tLine: false,
    description: "The test didn't work. Use a new test, or contact us and we'll help.",
  },
] as const;

const beforeYouTestChecklist = [
  {
    lead: 'Timing:',
    text: 'it can take up to 12 weeks after sex for the test to pick up syphilis.',
  },
  {
    lead: 'Had syphilis before?',
    text: 'This test can stay positive even after treatment. Go to a sexual health clinic instead.',
  },
  {
    lead: 'Got symptoms,',
    text: 'like a painless sore or a rash? See a clinic, even if your test is negative.',
  },
  {
    lead: 'For adults aged [16/18]+.',
    text: 'This test does not replace advice from a doctor or nurse.',
  },
] as const;

const faqs = [
  {
    id: 'accuracy',
    question: 'How accurate is the test?',
    answer:
      "*In the manufacturer's studies it found [XX.X]% of positive samples (sensitivity) and correctly cleared [XX.X]% of negative samples (specificity). Full details are in the instructions leaflet.",
  },
  {
    id: 'when-to-test',
    question: 'When should I take the test?',
    answer:
      "Test from 3 to 6 weeks after a possible exposure, and again at 12 weeks to be sure. Testing too early can miss an infection that hasn't reached detectable levels yet.",
  },
  {
    id: 'positive-result',
    question: 'What if my result is positive?',
    answer:
      "Take your result to your GP or a sexual health clinic as soon as possible. They'll confirm it with a further test and can start treatment, usually a course of antibiotics.",
  },
  {
    id: 'discretion',
    question: 'Will anyone know what I ordered?',
    answer:
      'No. Your order arrives in plain, unbranded packaging with no mention of the contents on the outside or on your bank statement.',
  },
  {
    id: 'returns',
    question: 'Can I return it?',
    answer:
      "[Add your returns policy here, e.g. unopened kits can be returned within 30 days; opened test kits can't be returned for hygiene reasons.]",
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
      <PrivacyReassurance />
      <BoxAndHowItWorks />
      <ReadingYourResult />
      <BeforeYouTest />
      <Questions />
      <OtherTests />
      <Compliance />
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

function PrivacyReassurance() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="bg-card border-border grid overflow-hidden rounded-3xl border lg:grid-cols-[420px_1fr]">
          <div className="border-border bg-muted text-muted-foreground flex aspect-4/3 items-center justify-center border-b p-4 text-center text-xs lg:aspect-auto lg:border-r lg:border-b-0">
            [Discreet mailer box photo]
          </div>
          <div className="p-8 md:p-12">
            <h2 className="text-3xl leading-tight tracking-tighter md:text-4xl">
              Your health, your privacy.
              <br />
              No one needs to know.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md text-sm leading-relaxed">
              Your kit arrives in plain packaging with no mention of syphilis. Test at
              home, at a time that suits you, on your own terms.
            </p>

            <div className="divide-border border-border mt-6 grid grid-cols-3 divide-x border-t pt-6">
              {privacyFeatures.map((feature) => (
                <div key={feature.title} className="px-4 first:pl-0">
                  <feature.icon className="text-muted-foreground size-5" />
                  <p className="mt-3 text-sm font-semibold">{feature.title}</p>
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Button variant="brand-deep" size="lg" className="mt-8 w-full sm:w-auto">
              Get my test - {product.price.current}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BoxAndHowItWorks() {
  return (
    <section className="section-padding border-y border-dashed bg-white/30">
      <div className="container grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div>
          <h2 className="text-2xl leading-tight tracking-tight">What&apos;s in the box</h2>
          <ul className="divide-border border-border mt-6 divide-y border-y text-sm">
            {boxContents.map((entry) => (
              <li key={entry.item} className="flex items-center justify-between py-3">
                <span>{entry.item}</span>
                <span className="text-muted-foreground font-mono">{entry.qty}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="text-accent hover:text-accent-hover mt-4 inline-flex items-center gap-1.5 text-sm font-medium no-underline transition-colors"
          >
            <Download className="size-4" />
            Download the instructions (PDF)
          </Link>
        </div>

        <div>
          <h2 className="text-2xl leading-tight tracking-tight">How it works</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step}>
                <div className="border-border bg-muted text-muted-foreground flex aspect-video items-center justify-center rounded-xl border border-dashed p-3 text-center text-xs leading-snug">
                  {step.image}
                </div>
                <span className="bg-accent text-accent-foreground mt-4 flex size-7 items-center justify-center rounded-full text-xs font-medium">
                  {step.step}
                </span>
                <h3 className="mt-3 text-base leading-tight tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultStrip({ cLine, tLine }: { cLine: boolean; tLine: boolean }) {
  return (
    <div className="border-border bg-card flex size-14 shrink-0 flex-col items-start justify-center gap-2 rounded-lg border px-2.5 font-mono text-[0.6rem]">
      <span className="flex items-center gap-1">
        C {cLine && <span className="bg-accent-deep h-px w-3" />}
      </span>
      <span className="flex items-center gap-1">
        T {tLine && <span className="bg-accent-deep h-px w-3" />}
      </span>
    </div>
  );
}

function ReadingYourResult() {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="text-3xl leading-none tracking-tighter md:text-4xl">
          Reading your result
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
          Look at the window on the test. C is the control line: it shows the test worked.
          T is the test line.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {resultCards.map((card) => (
            <div key={card.label} className="bg-card border-border rounded-2xl border p-6">
              <div className="flex items-start gap-4">
                <ResultStrip cLine={card.cLine} tLine={card.tLine} />
                <div>
                  <h3 className="text-lg leading-tight tracking-tight">{card.label}</h3>
                  <p className="text-muted-foreground mt-1 text-xs">{card.lead}</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeYouTest() {
  return (
    <section className="section-padding border-y border-dashed bg-white/30">
      <div className="container grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div>
          <h2 className="text-2xl leading-tight tracking-tight">Before you test</h2>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            Please read this. It helps you get a result you can trust.
          </p>
        </div>
        <ul className="border-accent bg-accent-subtle grid gap-4 rounded-2xl border-2 border-dashed p-6 sm:grid-cols-2 md:p-8">
          {beforeYouTestChecklist.map((entry) => (
            <li key={entry.lead} className="text-sm leading-relaxed">
              <span className="font-semibold">{entry.lead}</span>{' '}
              <span className="text-muted-foreground">{entry.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Questions() {
  return (
    <section className="section-padding">
      <div className="container max-w-3xl">
        <h2 className="text-3xl leading-none tracking-tighter md:text-4xl">Questions</h2>
        <Accordion type="single" collapsible defaultValue={faqs[0].id} className="mt-8">
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

function OtherTests() {
  return (
    <section className="section-padding border-border border-t">
      <div className="container">
        <div className="mb-10">
          <span className="text-accent mb-4 block font-mono text-[0.68rem] tracking-[0.18em] uppercase">
            More tests
          </span>
          <h2 className="text-4xl leading-none tracking-tighter md:text-5xl">
            Other tests
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

function Compliance() {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="bg-card border-border flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center md:p-8">
          <div className="border-border text-muted-foreground flex aspect-square w-16 shrink-0 flex-col items-center justify-center rounded-lg border border-dashed p-2 text-center text-[0.6rem] leading-tight">
            [CE / UKCA mark + number]
          </div>
          <div className="text-sm">
            <p className="font-medium">
              In vitro diagnostic medical device for self-testing
            </p>
            <p className="text-muted-foreground mt-1">
              Manufacturer: [NAME, ADDRESS] &middot; UK Responsible Person: [NAME, ADDRESS]
              &middot; MHRA registration: [NUMBER]
            </p>
            <p className="text-muted-foreground mt-1">
              Free, confidential testing is also available from NHS sexual health services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

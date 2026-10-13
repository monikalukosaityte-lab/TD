import Image from 'next/image';

import {
  CheckIcon,
  ClockIcon,
  HomeIcon,
  PackageIcon,
  VerifiedIcon,
} from '@/components/icons/shop';
import BuyBox from '@/components/sections/product/buy-box';
import ProductFaq from '@/components/sections/product/product-faq';
import ProductGallery from '@/components/sections/product/product-gallery';
import WindowCalculator from '@/components/sections/product/window-calculator';
import ProductGrid from '@/components/sections/product-grid';
import { Button } from '@/components/ui/button';
import { ProductPageData } from '@/lib/types';

// Same sections, in the same order, as the testdiscreet.co.uk homepage.
const BENEFITS = [
  { icon: ClockIcon, label: 'Results in 15 minutes' },
  { icon: CheckIcon, label: 'Simple to use' },
  { icon: PackageIcon, label: 'Discreet packaging' },
  { icon: HomeIcon, label: 'No clinic visit' },
];

const TESTIMONIALS = [
  {
    title: 'Clear instructions',
    text: 'Really simple to use and the instructions were very clear.',
  },
  {
    title: 'Really discreet',
    text: 'Arrived quickly and the packaging was completely discreet.',
  },
  {
    title: 'Peace of mind',
    text: 'It was straightforward and having the result there and then gave me peace of mind.',
  },
  {
    title: 'Less stressful',
    text: 'Much less stressful than I expected. Would definitely recommend.',
  },
];

const WINDOWS: NonNullable<ProductPageData['windows']> = {
  heading: 'When can I <em>test?</em>',
  subheading:
    'Testing too early can give a negative result even if you have an infection.',
  notes:
    '<p><strong>Possible HIV exposure within 72 hours?</strong> Contact a sexual health clinic or A&amp;E immediately and ask about PEP.</p><p>If you have symptoms or a partner has syphilis, contact a sexual health clinic now.</p><p><strong>Hepatitis C:</strong> an early negative result may need repeating at six months. Contact your GP or a sexual health clinic for advice about testing sooner.</p><p>There is no reliable time after exposure when the HSV-2 IgM test becomes conclusive.</p>',
  scope: 'HIV repeat testing',
  days: 90,
  initialTitle: 'Test now. If negative, repeat in 90 days.',
  strings: {
    today: 'Today',
    days_ago_one: '__COUNT__ day ago',
    days_ago_other: '__COUNT__ days ago',
    interval: '90 days',
    retest_title: 'Test now. If negative, repeat on __DATE__.',
    retest_body: 'An early negative may miss HIV from this exposure.',
    now_title: 'You can test now.',
    now_body: '',
    unsure_title: 'Test now. If negative, repeat in __INTERVAL__.',
    unsure_body: '',
    retest: '',
  },
};

const FAQ: ProductPageData['faq'] = {
  heading: 'Frequently asked questions',
  tabs: [
    {
      label: 'All',
      questions: [
        {
          question: 'How do I read my result?',
          answer:
            '<p>Read it at 15 minutes. One line at C is negative. Lines at C and T are positive, even if the T line is faint. No line at C means the test is invalid.</p>',
        },
        {
          question: 'What if my result is positive?',
          answer:
            '<p>Take a photo of the test and see your GP or a sexual health clinic. They’ll confirm the result with a laboratory test and start treatment.</p>',
        },
        {
          question: 'How fast is delivery?',
          answer:
            '<p>Orders ship within 1 working day. Free Tracked 48 delivery usually arrives in 2 to 3 working days, or choose Tracked 24 at checkout for £1.99.</p>',
        },
        {
          question: 'What does the parcel look like?',
          answer:
            '<p>A plain outer box with a standard shipping label. Nothing on the outside names the product or the shop.</p>',
        },
        {
          question: 'How accurate are the tests?',
          answer:
            '<p>Every kit uses the colloidal gold method, the same technology used for rapid testing in clinics. Performance data for each kit is printed in its instructions for use. Confirm any positive result with a laboratory test through your GP or a sexual health clinic.</p>',
        },
        {
          question: 'Can I return my test?',
          answer:
            '<p>You can return unopened kits within 14 days of delivery. For health and hygiene reasons, we can’t take a kit back once its seal is broken.</p><p>If there’s a problem with your order or your test arrives damaged, contact us and we’ll help.</p><p>For more information, see our <a href="https://testdiscreet.co.uk/policies/refund-policy?utm_source=stitestkit&amp;utm_medium=referral">Returns Policy</a>.</p>',
        },
        {
          question: 'Is free testing available?',
          answer:
            '<p>Yes. Free, confidential testing is also available from NHS sexual health services.</p>',
        },
      ],
    },
  ],
};

// The homepage version of the 7-in-1 bundle differs a little from its product
// page: shorter intro, facts, retest note and accordions.
function homeBundle(product: ProductPageData): ProductPageData {
  return {
    ...product,
    intro:
      '<p>Worried you may have been exposed to an STI? Check for seven infections privately at home with four simple finger-prick tests and one swab test.</p>',
    keyFacts: [
      '<strong>Screens for:</strong> Chlamydia, gonorrhoea, syphilis, HIV 1/2, genital herpes (HSV-2), hepatitis B, hepatitis C',
      '<strong>Sample:</strong> 4 fingerprick tests, 1 swab test',
      'Results in 15 minutes',
    ],
    retest: product.retest && {
      ...product.retest,
      note: 'Testing early? HIV may need a repeat at 90 days, syphilis at 12 weeks, and hepatitis C at six months.',
    },
    accordions: [
      {
        heading: 'Is this for you?',
        open: true,
        content: '<p>If <em>any</em> of these apply, it’s worth testing:</p>',
        checklist: [
          'You’ve had <strong>sex without a condom</strong>',
          'You have a <strong>new partner</strong>, or more than one',
          'It’s been <strong>at least 2 weeks</strong> since you might have been exposed',
          'You’d rather <strong>test privately</strong>, without a clinic visit',
        ],
        after: '',
      },
      {
        heading: 'What’s in the kit',
        open: false,
        content:
          '<ul><li>Chlamydia &amp; Gonorrhoea Combo Rapid Test Kit</li><li>HIV 1/2 Ab Rapid Test Kit</li><li>Syphilis (TP) Ab Rapid Test Kit</li><li>Herpes Simplex Virus II Rapid Test Kit</li><li>HbsAg/HCV Ab Combo Rapid Test Kit</li><li>Lancets, pipettes, buffers, swab, alcohol pads, plasters and instructions for every test</li></ul>',
        checklist: [],
        after: '',
      },
      {
        heading: 'How to test',
        open: false,
        content:
          '<ol><li>Run the four blood tests from fingerprick samples: lancet, pipette, two drops of buffer.</li><li>Run the chlamydia and gonorrhoea test from a swab sample.</li><li>Read each result at 15 minutes. Two lines means positive, one line at C means negative.</li></ol>',
        checklist: [],
        after: '',
      },
    ],
  };
}

export default function HomePage({ bundle }: { bundle: ProductPageData }) {
  return (
    <>
      <Hero />
      <TestPrivately />
      <Testimonials />
      <ProductGrid />
      <FeaturedProduct product={homeBundle(bundle)} />
      <WindowCalculator windows={WINDOWS} />
      <ProductFaq faq={FAQ} />
    </>
  );
}

// Navy band with a soft glow and the kit in hand, as on testdiscreet.co.uk.
function Hero() {
  return (
    <section className="bg-accent-deep text-accent-foreground relative flex min-h-130 items-start overflow-hidden md:min-h-112 md:items-center">
      <div className="from-primary absolute inset-0 bg-radial-[90%_50%_at_50%_35%] to-transparent md:bg-radial-[45%_85%_at_72%_50%]" />
      <Image
        src="/images/home/hero-mobile.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover md:hidden"
      />
      <div className="absolute inset-0 container hidden pt-6 md:block">
        <div className="relative size-full">
          <Image
            src="/images/home/hero-desktop.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1248px) 1200px, 100vw"
            className="object-contain object-right-bottom"
          />
        </div>
      </div>

      <div className="relative z-10 container py-8 md:py-12">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="mb-6 text-4xl leading-none md:text-5xl lg:text-6xl">
            <span className="block">STI tests at home</span>
            <span className="mt-2 block font-serif text-2xl font-bold md:text-3xl">
              Private results in minutes
            </span>
          </h1>
          <Button asChild variant="light">
            <a href="#buy">Shop now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function TestPrivately() {
  return (
    <section className="bg-muted">
      <div className="container max-w-5xl py-10 text-center md:py-16">
        <h2 className="mb-3 text-3xl md:text-4xl">
          Test <em>privately</em>
        </h2>
        <p className="mb-7 text-lg">Everything you need to test at home:</p>
        <ul className="mb-8 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="font-display flex flex-col items-center gap-3 font-bold md:text-lg"
            >
              <span className="bg-background grid size-13 place-items-center rounded-full">
                <Icon className="text-primary size-1/2" />
              </span>
              {label}
            </li>
          ))}
        </ul>
        <div className="grid md:inline-grid md:min-w-64">
          <Button asChild>
            <a href="#buy">Shop now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-accent-deep text-accent-foreground py-10 md:py-14">
      <div className="container">
        <ul className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0">
          {TESTIMONIALS.map((testimonial) => (
            <li
              key={testimonial.title}
              className="flex w-4/5 shrink-0 snap-start flex-col gap-3 rounded-lg border border-current/20 p-5 sm:w-2/5 md:w-auto"
            >
              <div className="space-y-1">
                <span
                  role="img"
                  aria-label="Rated 5 out of 5"
                  className="block tracking-widest"
                >
                  ★★★★★
                </span>
                <p className="font-display text-lg font-bold">
                  {testimonial.title}
                </p>
              </div>
              <p className="flex-1">{testimonial.text}</p>
              <p className="flex items-center gap-1.5 text-sm opacity-80">
                <VerifiedIcon className="size-4" />
                Verified customer
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedProduct({ product }: { product: ProductPageData }) {
  return (
    <section id="buy" className="scroll-mt-24 py-8 md:py-12">
      <div className="container grid items-start gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-14">
        <ProductGallery images={product.gallery} />
        <BuyBox product={product} featured />
      </div>
    </section>
  );
}

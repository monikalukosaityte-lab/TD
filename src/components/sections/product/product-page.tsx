import Image from 'next/image';

import { RichText } from '@/components/elements/rich-text';
import AboutTest from '@/components/sections/product/about-test';
import BuyBox from '@/components/sections/product/buy-box';
import ProductFaq from '@/components/sections/product/product-faq';
import ProductGallery from '@/components/sections/product/product-gallery';
import WindowCalculator from '@/components/sections/product/window-calculator';
import ProductGrid from '@/components/sections/product-grid';
import { Button } from '@/components/ui/button';
import { ProductPageData } from '@/lib/types';
import { cn, shopUrl } from '@/lib/utils';

// Based on the testdiscreet.co.uk product pages, minus the top banner, the first
// review band and "Test privately". Pages with "about" content get that section
// straight under the hero.
export default function ProductPage({ product }: { product: ProductPageData }) {
  return (
    <>
      <ProductHero product={product} />
      {product.about && (
        <AboutTest
          about={product.about}
          price={product.bundleChoice?.options[0]?.price ?? ''}
          buyHref={shopUrl(`/cart/add?id=${product.variantId}&quantity=1`)}
        />
      )}
      <HowItWorks how={product.how} />
      {product.windows && <WindowCalculator windows={product.windows} />}
      {product.results && <Results results={product.results} />}
      <PhotoReviews reviews={product.reviews} />
      <ProductFaq faq={product.faq} />
      <ProductGrid handles={product.otherProducts} featureFirst={false} />
    </>
  );
}

function ProductHero({ product }: { product: ProductPageData }) {
  return (
    <section id="buy" className="scroll-mt-24 py-8 md:py-12">
      <div className="container grid items-start gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-14">
        <ProductGallery images={product.gallery} />
        <BuyBox product={product} />
      </div>
    </section>
  );
}

function HowItWorks({ how }: { how: ProductPageData['how'] }) {
  return (
    <section className="py-10 md:py-12">
      <div className="container">
        <h2 className="mb-6 text-2xl md:text-3xl">{how.heading}</h2>
        <RichText
          html={how.intro}
          className="text-muted-foreground -mt-3 mb-6 max-w-3xl"
        />
        <ol
          className={cn(
            'grid gap-3 sm:grid-cols-2 md:gap-5',
            how.steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
          )}
        >
          {how.steps.map((step, index) => (
            <li
              key={step.title}
              className="bg-card flex flex-col overflow-hidden rounded-lg border"
            >
              <div className="relative aspect-16/10 border-b">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  sizes="(min-width: 990px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-5 md:p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    aria-hidden
                    className="bg-primary text-primary-foreground grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold"
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-lg">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Results({
  results,
}: {
  results: NonNullable<ProductPageData['results']>;
}) {
  return (
    <section className="pt-6 pb-14">
      <div className="container space-y-5">
        <h2 className="mb-6 text-2xl md:text-3xl">{results.heading}</h2>
        {results.groups.map((group, index) => (
          <div key={group.title ?? index}>
            {group.title && <h3 className="mb-3 text-xl">{group.title}</h3>}
            <RichText
              html={group.intro}
              className="text-muted-foreground -mt-3 mb-6 max-w-3xl"
            />
            <ul
              className={cn(
                'grid gap-3 sm:grid-cols-2 md:gap-5',
                group.items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
              )}
            >
              {group.items.map((item) => (
                <li
                  key={item.title}
                  className="bg-card flex flex-col overflow-hidden rounded-lg border"
                >
                  <div className="bg-secondary relative aspect-4/3 border-b">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 990px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-5 md:p-6">
                    <h3 className="text-lg">{item.title}</h3>
                    <RichText
                      html={item.text}
                      className="text-muted-foreground mt-1.5"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {results.notes.map((note) => (
          <div
            key={note.title}
            className="bg-card rounded-lg border p-5 md:p-6"
          >
            <h3 className="mb-1.5 text-lg">{note.title}</h3>
            <RichText html={note.text} className="text-muted-foreground" />
          </div>
        ))}
        <div className="flex justify-center pt-5">
          <div className="grid w-full sm:w-auto sm:min-w-64">
            <Button asChild variant="brand-deep">
              <a href="#buy">Shop now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoReviews({ reviews }: { reviews: ProductPageData['reviews'] }) {
  return (
    <section className="bg-secondary py-14">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl md:text-4xl">
          {reviews.heading}
        </h2>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {reviews.items.map((review) => (
            <li
              key={review.title}
              className="bg-foreground text-primary-foreground relative aspect-3/4 w-4/5 shrink-0 snap-start overflow-hidden rounded-md md:w-auto"
            >
              <Image
                src={review.image.src}
                alt={review.image.alt}
                fill
                sizes="(min-width: 990px) 25vw, 80vw"
                className="object-cover"
              />
              <div className="from-foreground/90 absolute inset-x-0 top-2/5 bottom-0 bg-linear-to-t to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display mb-1 text-lg font-bold">
                  {review.title}
                </p>
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-bold">
                  <span aria-hidden className="tracking-widest">
                    ★★★★★
                  </span>
                  Verified purchase
                </p>
                <p className="text-sm leading-snug">{review.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

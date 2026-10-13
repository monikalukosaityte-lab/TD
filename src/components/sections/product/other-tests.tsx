import Image from 'next/image';
import Link from 'next/link';

import { PlusIcon } from '@/components/icons/shop';
import { productUrl, SHOP_PRODUCTS } from '@/components/sections/product-grid';
import { Button } from '@/components/ui/button';
import { ProductOtherTestsContent, ShopProduct } from '@/lib/types';
import { cn, shopUrl } from '@/lib/utils';

function findProduct(handle: string) {
  return SHOP_PRODUCTS.find((product) => product.handle === handle);
}

function cartUrl(product: ShopProduct) {
  return shopUrl(`/cart/add?id=${product.variantId}&quantity=1`);
}

function toPence(price: string) {
  return Math.round(parseFloat(price.replace(/[^0-9.]/g, '')) * 100);
}

export default function OtherTests({
  content,
}: {
  content: ProductOtherTestsContent;
}) {
  const singles = content.singles
    .map(findProduct)
    .filter((p): p is ShopProduct => Boolean(p));

  return (
    <section id="tests" className="bg-muted py-12 md:py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl md:text-3xl">
          {content.heading}
        </h2>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
          {content.bundles.map((bundle, index) => {
            const product = findProduct(bundle.handle);
            if (!product) return null;
            return (
              <li key={bundle.handle}>
                <BundleCard
                  product={product}
                  subtitle={bundle.subtitle}
                  highlight={content.highlight}
                  featured={index === 0}
                />
              </li>
            );
          })}
        </ul>

        <h3 className="mt-10 mb-3 text-base">{content.singlesHeading}</h3>
        <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {singles.map((product) => (
            <li key={product.handle}>
              <SingleTestCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BundleCard({
  product,
  subtitle,
  highlight,
  featured,
}: {
  product: ShopProduct;
  subtitle: string;
  highlight: string;
  featured: boolean;
}) {
  const save =
    product.compareAt &&
    (toPence(product.compareAt) - toPence(product.price)) / 100;

  return (
    <div
      className={cn(
        'bg-card flex h-full gap-4 rounded-2xl border p-4 md:gap-6 md:p-5',
        featured && 'border-accent ring-accent ring-1',
      )}
    >
      <Link
        href={productUrl(product)}
        className="bg-secondary relative aspect-square w-20 shrink-0 self-start overflow-hidden rounded-lg sm:w-28 md:w-32"
      >
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="128px"
          className="object-cover"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col">
        {product.badge && (
          <span className="bg-accent-deep text-accent-foreground mb-2 self-start rounded-xs px-2 py-0.5 text-[0.6875rem] font-bold tracking-wide uppercase">
            {product.badge}
          </span>
        )}
        <h3 className="text-lg md:text-xl">
          <Link href={productUrl(product)} className="no-underline">
            {product.title}
          </Link>
        </h3>
        <p className="text-primary mb-3 text-sm font-semibold">{subtitle}</p>

        <ul className="mb-3 flex flex-wrap gap-1.5">
          {product.includes.map((test) => (
            <li
              key={test}
              className={cn(
                'rounded-full px-2.5 py-0.5 text-xs',
                test === highlight
                  ? 'bg-accent text-accent-foreground font-bold'
                  : 'bg-muted',
              )}
            >
              {test}
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mb-3 text-xs">
          {product.sample === 'Blood + swab'
            ? 'Finger-prick + swab'
            : product.sample}{' '}
          · Results in 15 minutes
        </p>

        <p className="mt-auto mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-2xl font-extrabold">{product.price}</span>
          {product.compareAt && (
            <s className="text-muted-foreground text-sm">{product.compareAt}</s>
          )}
          {save ? (
            <span className="bg-accent-light text-accent-deep rounded-xs px-2 py-0.5 text-xs font-semibold">
              Save £{save.toFixed(2)}
            </span>
          ) : null}
        </p>

        <div className="grid">
          <Button asChild size="sm">
            <a href={cartUrl(product)}>Add to basket</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Mobile: one row (photo, name, +). Desktop: photo and + on top, name below,
// so five cards fit side by side.
function SingleTestCard({ product }: { product: ShopProduct }) {
  return (
    <div className="bg-card grid h-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border px-3 py-2.5 lg:grid-cols-[auto_1fr] lg:items-start lg:p-4">
      <div className="bg-secondary relative size-11 shrink-0 overflow-hidden rounded-md lg:size-14">
        <Image
          src={product.image.src}
          alt=""
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 lg:col-span-2 lg:row-start-2">
        <Link
          href={productUrl(product)}
          className="block text-sm leading-snug font-bold no-underline hover:underline"
        >
          {product.title.replace(/ (Rapid Test Kit|Test)$/, '')}
        </Link>
        <p className="text-muted-foreground text-xs">
          {product.sample} · {product.price}
        </p>
      </div>
      <div className="lg:col-start-2 lg:row-start-1 lg:justify-self-end">
        <Button
          asChild
          variant="outline"
          size="icon-lg"
          aria-label={`Add ${product.title} to basket`}
        >
          <a href={cartUrl(product)}>
            <PlusIcon />
          </a>
        </Button>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { RichText } from '@/components/elements/rich-text';
import { CheckIcon, LockIcon, PackageIcon } from '@/components/icons/shop';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ProductPageData } from '@/lib/types';
import { cn, shopUrl } from '@/lib/utils';

function toPence(price: string) {
  return Math.round(parseFloat(price.replace(/[^0-9.]/g, '')) * 100);
}

function formatPence(pence: number) {
  return `£${(pence / 100).toFixed(2)}`;
}

export default function BuyBox({ product }: { product: ProductPageData }) {
  const options = product.bundleChoice?.options ?? [];
  const [choice, setChoice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const buyRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  const selected = options[choice];
  const isBundle = choice > 0 && Boolean(selected?.variantId);
  const variantId = isBundle ? selected.variantId! : product.variantId;
  const unitPence = toPence(selected?.price ?? '0');
  const discount = product.retest?.discount ?? 0;
  const buyLabel = isBundle
    ? (selected.buttonLabel ?? product.buyLabel)
    : product.buyLabel;
  const buyHref = shopUrl(`/cart/add?id=${variantId}&quantity=${quantity}`);

  // Mobile: keep a buy button on screen once the main one scrolls away.
  useEffect(() => {
    const el = buyRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) =>
      setShowSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-5">
      <nav
        aria-label="Breadcrumb"
        className="text-muted-foreground text-sm md:text-base"
      >
        <Link href="/" className="no-underline hover:underline">
          Home
        </Link>
        <span className="mx-1.5">/</span>
        <span>{product.title}</span>
      </nav>

      <h1 className="text-3xl lg:text-4xl">{product.title}</h1>

      <RichText html={product.intro} className="text-base md:text-lg" />

      {product.keyFacts.length > 0 && (
        <ul className="space-y-2.5">
          {product.keyFacts.map((fact) => (
            <CheckItem key={fact} html={fact} />
          ))}
        </ul>
      )}

      {product.shipping && (
        <p className="bg-muted inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm">
          <PackageIcon className="text-primary size-4.5" />
          <RichText as="span" html={product.shipping} />
        </p>
      )}

      {product.bundleChoice && (
        <fieldset className="pt-2">
          <legend className="mb-1.5 font-semibold">
            {product.bundleChoice.heading}
          </legend>
          <p className="text-muted-foreground mb-4 text-sm">
            {product.bundleChoice.intro}
          </p>
          <div className="grid gap-3.5">
            {options.map((option, index) => (
              <label
                key={option.title}
                className={cn(
                  'bg-card relative grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-3.5 rounded-lg border px-4 py-4 transition-colors',
                  choice === index &&
                    'border-accent-deep ring-accent-deep ring-1 ring-inset',
                )}
              >
                <input
                  type="radio"
                  name="bundle"
                  checked={choice === index}
                  onChange={() => setChoice(index)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden
                  className={cn(
                    'size-5 rounded-full border-2',
                    choice === index
                      ? 'border-accent-deep from-accent-deep bg-radial from-40% to-transparent to-45%'
                      : 'bg-card',
                  )}
                />
                {option.badge && (
                  <span className="bg-accent-deep text-accent-foreground absolute top-0 right-4 -translate-y-1/2 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wider uppercase">
                    {option.badge}
                  </span>
                )}
                <span className="grid gap-1">
                  <span className="font-semibold">{option.title}</span>
                  {option.includes && (
                    <RichText
                      as="span"
                      html={option.includes}
                      className="text-muted-foreground [&_strong]:text-foreground text-sm leading-snug [&_strong]:font-semibold"
                    />
                  )}
                </span>
                <span className="flex max-w-32 flex-wrap items-baseline justify-end gap-x-1.5 gap-y-0.5 text-right">
                  {option.was && (
                    <s className="text-muted-foreground text-sm">
                      {option.was}
                    </s>
                  )}
                  <span className="text-lg font-bold">{option.price}</span>
                  {option.save && (
                    <span className="bg-accent-light text-accent-deep rounded-full px-2 py-0.5 text-xs font-semibold">
                      {option.save}
                    </span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {product.retest && (
        <fieldset className="pt-2">
          <legend className="mb-5 font-semibold">
            {product.retest.heading}
          </legend>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map((qty) => {
              const pence =
                qty === 1 ? unitPence : unitPence * 2 * (1 - discount / 100);
              const unit = isBundle ? 'bundle' : 'test';
              return (
                <label
                  key={qty}
                  className={cn(
                    'bg-card relative flex cursor-pointer flex-col items-center gap-1 rounded-lg border px-3 pt-5 pb-4 text-center transition-colors',
                    quantity === qty &&
                      'border-accent-deep ring-accent-deep ring-1 ring-inset',
                  )}
                >
                  <input
                    type="radio"
                    name="quantity"
                    checked={quantity === qty}
                    onChange={() => setQuantity(qty)}
                    className="sr-only"
                  />
                  {qty === 2 && (
                    <span className="bg-accent-deep text-accent-foreground absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wider whitespace-nowrap uppercase">
                      {product.retest!.badge}
                    </span>
                  )}
                  <span className="text-lg font-semibold">
                    {qty} {qty === 1 ? unit : `${unit}s`}
                  </span>
                  <span className="text-muted-foreground">
                    {formatPence(Math.round(pence))}
                    {qty === 2 && discount > 0 && (
                      <span className="text-accent-deep ml-1.5 font-semibold">
                        Save {discount}%
                      </span>
                    )}
                  </span>
                </label>
              );
            })}
          </div>
          {product.retest.note && (
            <p className="text-muted-foreground mt-3 text-sm">
              {product.retest.note}
            </p>
          )}
        </fieldset>
      )}

      <div ref={buyRef} className="grid gap-3.5 pt-2">
        <Button asChild size="lg">
          <a href={buyHref}>{buyLabel}</a>
        </Button>
        {product.trust && (
          <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-1.5 text-center text-sm">
            <LockIcon className="size-4.5" />
            {product.trust}
          </p>
        )}
      </div>

      {product.reassurance && (
        <p className="bg-secondary rounded-md px-4 py-3 text-center text-sm">
          <strong className="block">{product.reassurance.title}</strong>
          {product.reassurance.text}
        </p>
      )}

      <RichText
        html={product.footnote}
        className="text-muted-foreground text-sm"
      />

      {product.accordions.length > 0 && (
        <Accordion
          type="multiple"
          defaultValue={product.accordions
            .filter((a) => a.open)
            .map((a) => a.heading)}
          className="border-t"
        >
          {product.accordions.map((accordion) => (
            <AccordionItem
              key={accordion.heading}
              value={accordion.heading}
              className="border-b"
            >
              <AccordionTrigger className="py-4 text-base font-extrabold">
                {accordion.heading}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base">
                <RichText html={accordion.content} />
                {accordion.checklist.length > 0 && (
                  <ul className="mt-3 space-y-2.5">
                    {accordion.checklist.map((item) => (
                      <CheckItem key={item} html={item} />
                    ))}
                  </ul>
                )}
                <RichText html={accordion.after} className="mt-3" />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <div
        className={cn(
          'bg-background fixed inset-x-0 bottom-0 z-15 grid px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-lg transition-transform md:hidden',
          showSticky ? 'translate-y-0' : 'translate-y-full',
        )}
      >
        <Button asChild size="lg">
          <a href={buyHref}>{buyLabel}</a>
        </Button>
      </div>
    </div>
  );
}

function CheckItem({ html }: { html: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="bg-primary text-primary-foreground mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-xs">
        <CheckIcon className="size-3.5" />
      </span>
      <RichText as="span" html={html} />
    </li>
  );
}

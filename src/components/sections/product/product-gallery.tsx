'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons/shop';
import { ProductImage } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function ProductGallery({ images }: { images: ProductImage[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    setCurrent(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <div className="md:sticky md:top-28">
      <div className="relative px-7 md:px-9">
        <ul
          ref={trackRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, index) => (
            <li
              key={image.src}
              className="bg-secondary relative aspect-square w-full shrink-0 snap-start"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 900px) 50vw, 100vw"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
        <GalleryArrow
          side="prev"
          disabled={current === 0}
          onClick={() => goTo(current - 1)}
        />
        <GalleryArrow
          side="next"
          disabled={current === images.length - 1}
          onClick={() => goTo(current + 1)}
        />
      </div>

      <div className="mt-3 flex gap-1.5 overflow-x-auto px-7 [scrollbar-width:none] md:mt-4 md:gap-2 md:px-9">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === current}
            className={cn(
              'bg-secondary relative size-13 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 md:size-18',
              index === current ? 'border-primary' : 'border-transparent',
            )}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="72px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function GalleryArrow({
  side,
  disabled,
  onClick,
}: {
  side: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = side === 'prev' ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'prev' ? 'Previous' : 'Next'}
      className={cn(
        'bg-primary text-primary-foreground absolute top-1/2 grid size-6 -translate-y-1/2 cursor-pointer place-items-center rounded-full shadow-sm transition-opacity md:size-7',
        side === 'prev' ? 'left-0' : 'right-0',
        disabled && 'pointer-events-none opacity-0',
      )}
    >
      <Icon className="size-3" />
    </button>
  );
}

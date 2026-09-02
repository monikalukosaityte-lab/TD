'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items: readonly TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headingEls = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const OFFSET = 120;
    let ticking = false;

    function updateActive() {
      ticking = false;
      let currentId = headingEls[0]?.id ?? '';
      for (const el of headingEls) {
        if (el.getBoundingClientRect().top - OFFSET <= 0) {
          currentId = el.id;
        } else {
          break;
        }
      }
      setActiveId(currentId);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActive);
    }

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <div className="order-first lg:order-none">
      {/* Desktop — sticky sidebar with scrollspy */}
      <nav className="sticky top-10 hidden max-h-[calc(100vh-5rem)] overflow-y-auto lg:block">
        <span className="text-muted-foreground mb-3 block font-mono text-[0.625rem] tracking-widest uppercase">
          On this page
        </span>
        <ul className="border-border space-y-2.5 border-l">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={cn(
                  '-ml-px block border-l-2 py-0.5 pl-4 text-sm no-underline transition-colors',
                  activeId === item.id
                    ? 'border-accent text-accent font-medium'
                    : 'text-muted-foreground hover:text-foreground border-transparent',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile — permanent floating accordion */}
      <details className="group border-accent bg-blog fixed inset-x-4 top-4 z-20 max-h-[calc(100vh-2rem)] overflow-y-auto rounded-2xl border-2 p-4 shadow-lg lg:hidden">
        <summary className="text-accent flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
          Jump to section
          <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="text-foreground text-sm no-underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
      {/* Spacer so the fixed bar doesn't cover content underneath */}
      <div className="h-16 lg:hidden" />
    </div>
  );
}

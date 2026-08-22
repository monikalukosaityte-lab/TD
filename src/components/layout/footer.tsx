'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LogoMark } from '@/components/layout/logo';

const AUTH_ROUTES = ['/login', '/signup'];

const FOOTER_LINKS = [
  { label: 'Blog', href: '/blog' },
  { label: 'About us', href: '/about' },
] as const;

export default function Footer() {
  const pathname = usePathname();
  if (AUTH_ROUTES.includes(pathname)) return null;

  return (
    <footer className="container pb-12">
      <div className="border-t border-dashed pt-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link href="/" className="text-accent flex items-center no-underline">
            <LogoMark style={{ width: 'clamp(2.8rem, 3vw, 4rem)', height: 'auto' }} />
          </Link>

          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-accent text-sm no-underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-dashed pt-6">
          <span className="text-muted-foreground font-mono text-[0.625rem]">
            &copy; 2026 Test Discreet
          </span>
        </div>
      </div>
    </footer>
  );
}

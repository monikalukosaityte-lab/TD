'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LogoMark } from '@/components/layout/logo';

const AUTH_ROUTES = ['/login', '/signup'];

export default function Navbar() {
  const pathname = usePathname();
  const isAuthPage = AUTH_ROUTES.includes(pathname);

  if (isAuthPage) return null;

  return (
    <nav className="py-4 md:py-5">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-accent flex items-center no-underline">
          <LogoMark style={{ width: 'clamp(2.8rem, 3vw, 4rem)', height: 'auto' }} />
        </Link>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BrandLockup } from '@/components/layout/logo';
import { shopUrl } from '@/lib/utils';

const AUTH_ROUTES = ['/login', '/signup'];

// Same columns, policies and disclaimer as the testdiscreet.co.uk footer.
const FOOTER_COLUMNS = [
  {
    heading: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'STI guides', href: '/blog' },
      { label: 'All tests', href: shopUrl('/', 'tests') },
      { label: 'How to test', href: shopUrl('/pages/how-to-test') },
    ],
  },
  {
    heading: 'Help',
    links: [
      { label: 'Contact', href: shopUrl('/pages/contact') },
      { label: 'FAQ', href: shopUrl('/', 'faq') },
      { label: 'When can I test?', href: shopUrl('/', 'when-to-test') },
    ],
  },
];

const LEGAL_LINKS = [
  { label: 'Privacy policy', href: shopUrl('/policies/privacy-policy') },
  { label: 'Terms of service', href: shopUrl('/policies/terms-of-service') },
  { label: 'Refund policy', href: shopUrl('/policies/refund-policy') },
  { label: 'Shipping policy', href: shopUrl('/policies/shipping-policy') },
  {
    label: 'Contact information',
    href: shopUrl('/policies/contact-information'),
  },
];

const PAYMENT_ICONS = [
  'American Express',
  'Apple Pay',
  'Diners Club',
  'Discover',
  'Google Pay',
  'Klarna',
  'Maestro',
  'Mastercard',
  'PayPal',
  'Shop Pay',
  'Union Pay',
  'Visa',
];

export default function Footer() {
  const pathname = usePathname();
  if (AUTH_ROUTES.includes(pathname)) return null;

  return (
    <footer className="bg-accent-deep text-accent-foreground pt-14 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-2 md:gap-8">
          {FOOTER_COLUMNS.map((column) => (
            <details
              key={column.heading}
              open
              className="group border-accent-foreground/20 border-t md:border-0"
            >
              <summary className="flex cursor-pointer list-none justify-between py-4 md:pointer-events-none md:mb-3.5 md:py-0 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base">{column.heading}</h3>
                <span aria-hidden className="md:hidden">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">&minus;</span>
                </span>
              </summary>
              <ul className="grid gap-2 pb-4 text-sm md:pb-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className="border-accent-foreground/20 mt-12 grid justify-items-center gap-5 border-t pt-6 text-center text-xs">
          <Link href="/" className="no-underline">
            <BrandLockup inverted />
          </Link>
          <ul className="flex flex-wrap justify-center gap-1.5">
            {PAYMENT_ICONS.map((name) => (
              <li key={name}>
                <Image
                  src={`/images/payment/${name.toLowerCase().replace(' ', '-')}.svg`}
                  alt={name}
                  width={38}
                  height={24}
                  className="h-auto w-10"
                />
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1.5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
          <p>&copy; 2026 Test Discreet. All rights reserved.</p>
          <p className="max-w-3xl opacity-85">
            Our tests don&apos;t replace advice from a doctor or nurse. For ages
            16 and over. Free, confidential testing is also available from NHS
            sexual health services.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const className = 'text-inherit no-underline hover:underline';

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

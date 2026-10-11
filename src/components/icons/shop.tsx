import type { SVGProps } from 'react';

// Line icons from the Test Discreet Shopify theme (snippets/icon.liquid).

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
    {...props}
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <path d="M5 8h14l-1 13H6L5 8z" />
    <path d="M9 8V6a3 3 0 016 0v2" />
  </svg>
);

export const AccountIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3.5" />
    <path d="M5.5 19c1.4-2.6 3.8-4 6.5-4s5.1 1.4 6.5 4" />
  </svg>
);

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <path d="M2 8h11M9 4l4 4-4 4" />
  </svg>
);

export const DropIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <path d="M12 3.5c3 4 5.5 7 5.5 10.5a5.5 5.5 0 01-11 0c0-3.5 2.5-6.5 5.5-10.5z" />
  </svg>
);

export const SwabIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <path d="M7 17L17 7" />
    <ellipse
      cx="18.5"
      cy="5.5"
      rx="2.25"
      ry="1.6"
      transform="rotate(-45 18.5 5.5)"
    />
    <path d="M4 20l3-3" />
  </svg>
);

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    <path d="M3.5 8.5l3 3 6-7" />
  </svg>
);

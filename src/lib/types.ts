export interface TocItem {
  label: string;
  id: string;
}

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
  pinned?: boolean;
  toc?: TocItem[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface Article {
  slug: string;
  content: string;
  frontmatter: ArticleFrontmatter;
}

export interface ShopProduct {
  handle: string;
  slug: string;
  title: string;
  price: string;
  /** Bundles only: the price of the tests bought separately. */
  compareAt?: string;
  variantId: number;
  badge?: string;
  includes: string[];
  sample: 'Blood + swab' | 'Swab' | 'Fingerprick';
  image: { src: string; alt: string };
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductBundleOption {
  title: string;
  badge: string | null;
  includes: string | null;
  price: string;
  was: string | null;
  save: string | null;
  variantId: number | null;
  buttonLabel: string | null;
}

export interface ProductAccordion {
  heading: string;
  open: boolean;
  content: string;
  after: string;
  checklist: string[];
}

export interface ProductResultItem {
  image: ProductImage;
  title: string;
  text: string;
}

export type ProductIconName =
  | 'clock'
  | 'drop'
  | 'home'
  | 'lock'
  | 'package'
  | 'search'
  | 'swab'
  | 'users';

/** Rewritten hero copy for stitestkit; pages without it show the Shopify copy. */
export interface ProductHeroContent {
  breadcrumb: string;
  heading: string;
  intro: string;
  highlights: { icon: ProductIconName; label: string }[];
  specs: { icon: ProductIconName; label: string; value: string }[];
}

/** "About [test] and testing" section shown straight after the hero. */
export interface ProductAboutContent {
  /** Without a heading, each question is an h2 of its own. */
  heading?: string;
  questions: { question: string; answer: string; open: boolean }[];
  link: { label: string; href: string };
  aside: {
    heading: string;
    items: { icon: ProductIconName; title: string; text: string }[];
    buttonLabel: string;
  };
}

/** "Other available tests and bundles" — replaces the plain product grid. */
export interface ProductOtherTestsContent {
  heading: string;
  /** Chip to highlight on bundle cards: the test this page is about. */
  highlight: string;
  /** Line under the heading, e.g. "All results in around 15 minutes." */
  note?: string;
  bundles: { handle: string; name: string }[];
  singles: { handle: string; name: string; sample: string }[];
}

export interface ProductPageData {
  slug: string;
  handle: string;
  /** Meta title and description; without it they come from the title and intro. */
  seo?: { title: string; description: string };
  title: string;
  hero?: ProductHeroContent;
  about?: ProductAboutContent;
  otherTests?: ProductOtherTestsContent;
  gallery: ProductImage[];
  intro: string;
  footnote: string;
  keyFacts: string[];
  shipping: string;
  bundleChoice: {
    heading: string;
    intro: string;
    options: ProductBundleOption[];
  } | null;
  variantId: number;
  retest: {
    heading: string;
    badge: string;
    discount: number;
    note: string;
  } | null;
  buyLabel: string;
  trust: string;
  reassurance: { title: string; text: string } | null;
  accordions: ProductAccordion[];
  benefits: {
    heading: string;
    text: string;
    items: { icon: string; label: string }[];
  };
  how: {
    heading: string;
    intro: string;
    stepsHeading?: string;
    steps: { image: ProductImage; title: string; text: string }[];
    link?: { label: string; href: string };
  };
  windows?: {
    heading: string;
    subheading: string;
    days: number;
    initialTitle: string | null;
    strings: Record<string, string> | null;
    notes?: string;
    scope?: string;
  } | null;
  results?: {
    heading: string;
    groups: {
      title: string | null;
      intro: string;
      items: ProductResultItem[];
    }[];
    notes: { title: string; text: string }[];
  } | null;
  reviews: {
    heading: string;
    items: { image: ProductImage; title: string; text: string }[];
  };
  faq: {
    heading: string;
    tabs: {
      label: string;
      questions: { question: string; answer: string }[];
    }[];
    references?: { heading: string; items: string[] };
  };
  otherProducts: string[];
}

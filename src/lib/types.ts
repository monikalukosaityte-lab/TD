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

export interface ProductPageData {
  slug: string;
  handle: string;
  title: string;
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
    steps: { image: ProductImage; title: string; text: string }[];
  };
  windows?: {
    heading: string;
    subheading: string;
    days: number;
    initialTitle: string | null;
    strings: Record<string, string> | null;
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
  };
  otherProducts: string[];
}

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
  title: string;
  price: string;
  variantId: number;
  badge?: string;
  includes: string[];
  sample: 'Blood + swab' | 'Swab' | 'Fingerprick';
  image: { src: string; alt: string };
}

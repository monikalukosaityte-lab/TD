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

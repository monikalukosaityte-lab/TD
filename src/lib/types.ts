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
  reviewer?: string;
}

export interface ArticleListItem extends ArticleFrontmatter {
  readingTimeMinutes: number;
}

export interface Article {
  slug: string;
  content: string;
  frontmatter: ArticleFrontmatter;
}

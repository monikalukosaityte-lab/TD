# Blog Article Template

The first real article, [`content/articles/what-is-an-sti-test.mdx`](../content/articles/what-is-an-sti-test.mdx), is the reference template for every future blog post. There will be many articles going forward — new ones should follow this same structure rather than reinventing it.

## Source files

| File | What it controls |
|---|---|
| `content/articles/*.mdx` | Article content + frontmatter |
| `src/app/blog/[slug]/page.tsx` | Article page shell — MDX component overrides (H2 slugs, images, code blocks), prose styling |
| `src/app/blog/page.tsx` + `src/components/sections/blog/blog-page.tsx` | Blog listing page |
| `src/components/sections/article/article-hero.tsx` | Article header — title, description, badges, image, divider |
| `src/components/sections/article/table-of-contents.tsx` | Jumplinks — desktop sticky sidebar, mobile bottom sheet |
| `src/components/sections/article/more-entries.tsx` | "Keep reading" footer on the article page |

## Frontmatter

```yaml
---
title: "Question-style title? Rest of the title"
slug: "matches-the-filename"
description: "One or two sentences — used on the listing card and meta description."
date: "YYYY-MM-DD"
image: "/images/blog/slug-name.webp"
tags: ["Category"]
pinned: true
---
```

## Structure checklist for a new article

- **Intro**: 2–3 short paragraphs before the first heading, no heading of its own.
- **"Key takeaways" box** (optional but used so far): bulleted list wrapped in an accent-green bordered frame. Since it's raw JSX (not a `##` markdown heading), it needs its own `id` and `scroll-mt-10` set manually — the automatic H2-slugging in `page.tsx` only applies to markdown-generated headings, not literal JSX tags:
  ```jsx
  <div className="border-accent rounded-2xl border-2 p-6 md:p-8">
  <h2 id="key-takeaways" className="scroll-mt-10 text-2xl leading-tight tracking-tight">Key takeaways</h2>
  ...
  </div>
  ```
- **Body sections**: plain `## Heading` — these get slugified `id`s and `scroll-mt-10` automatically via the `H2` component override in `blog/[slug]/page.tsx`.
- **Tables**: plain HTML `<table>` — styled via prose defaults, with accent-green lines forced via:
  ```jsx
  <table className="[&_tbody_tr]:border-accent! [&_thead]:border-accent!">
  ```
  Note it's `[&_thead]`, not `[&_thead_th]` — the visible header underline lives on the `<thead>` element itself, not the `<th>` cells.
- **Links**: use real anchor text on the actual claim/phrase being cited, not just "click here" or the URL itself. Body links render accent-colored and underlined by default (`prose-a:text-accent prose-a:underline` on the wrapper).
- **References**: full list at the bottom under `## References`, MLA-ish style. Only the first 3 show by default — the rest sit inside a native `<details>/<summary>` so they're crawlable by Google even while visually collapsed:
  ```jsx
  <details className="group">
  <summary className="text-accent hover:text-accent-hover ...">
  Show all references
  <svg className="... group-open:rotate-180" ...>...</svg>
  </summary>
  - remaining references...
  </details>
  ```

## Jumplinks (table of contents)

- Shortened labels distinct from the full on-page heading (e.g. "How does an STI test work?" → "How testing works") — defined in a `TOC_ITEMS` array in `blog/[slug]/page.tsx`, matched by `id` to the H2 slugs.
- Desktop: sticky sidebar in the right rail, scrollspy highlights the current section using a deterministic scroll-position check (not `IntersectionObserver` — that produced wrong/flickery active states when multiple headings intersected at once).
- Mobile: a small "Sections" pill fixed bottom-right opens a bottom sheet (Framer Motion) listing all sections.
- Jumplink clicks are handled manually (`preventDefault` + `scrollIntoView` + `history.pushState`) rather than relying on the browser's native anchor-jump or Next.js `Link`'s own hash handling — those two mechanisms can race each other and land imprecisely.
- Page loads and refreshes always reset scroll to the top and strip any `#hash` from the URL, regardless of whether the browser would otherwise restore a previous scroll position or hash-anchored position.

## Image

- Compress to WebP, max ~1400px wide, before adding to `public/images/blog/`. The site background color (`.bg-blog` in `globals.css`) was sampled directly from the article's product photo backdrop, so the image blends into the page with no visible card/border frame around it — new article images should ideally share a similar light backdrop tone, or `.bg-blog` may need adjusting per-image.
- Placed via `ArticleHero`'s `image` prop: right-aligned next to the title/description on desktop, stacked below on mobile.

## What's deliberately absent

- No social share icons (X/Instagram/Threads) in the article footer — removed.
- No "medically reviewed" claim should ship unless a real clinical review has actually happened for that article's content.

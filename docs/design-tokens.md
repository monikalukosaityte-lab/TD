# Design Tokens

All color tokens live in `src/app/globals.css` as CSS custom properties (`:root` for light, `.dark` for dark mode), following shadcn's standard token naming. **Never use arbitrary hex colors in components** — always reference the semantic token (`bg-accent`, `text-accent`, `border-accent`, etc.). See [CLAUDE.md](../CLAUDE.md) for the full styling rules.

## Brand accent

The brand color is the exact sage green from the logo: **`#7F8A7A`**, stored as `--accent: oklch(0.62 0.027 135.8)`.

It's intentionally low-chroma/muted — if it looks too gray or too blue in a specific UI element, that's usually because thin strokes or very light tints wash out an already-subtle color, not because the token itself is wrong. When that's happened, the fix has been to boost `--accent-subtle` / `--accent-light`'s chroma specifically (they carry more saturation than a naive tint of `--accent` would), not to change the base `--accent` value.

| Token | Light | Dark |
|---|---|---|
| `--accent` | `oklch(0.62 0.027 135.8)` | `oklch(0.675 0.027 135.8)` |
| `--accent-hover` | `oklch(0.555 0.032 135.8)` | `oklch(0.735 0.032 135.8)` |
| `--accent-light` | `oklch(0.795 0.05 135.8)` | `oklch(0.305 0.05 135.8)` |
| `--accent-subtle` | `oklch(0.885 0.035 135.8)` | `oklch(0.225 0.035 135.8)` |

An experimental alternate accent (`#CCD5AE`) was tried and parked on the `experiment/ccd5ae-accent` branch — it's too light to use for text/icon strokes without a separate darker pairing, so it was never merged. Worth knowing it exists if brand color comes up again.

## Blog background (`.bg-blog`)

A separate, slightly warmer/more neutral cream than the site's default `--background`, sampled directly from the blog article product photo's own backdrop so the image blends into the page without a visible seam or card frame. Defined as a utility class (not a CSS variable) since it's scoped to blog/article pages, nav, and footer only — the homepage still uses the site's default `--background`.

```css
.bg-blog { background-color: oklch(0.962 0.007 59.3); }      /* #F6F1EE */
.dark .bg-blog { background-color: oklch(0.19 0.008 59.3); }
```

Applying `.bg-blog` to the nav/footer creates a faint seam against the homepage's own background (they're subtly different tones) — this was a known, accepted tradeoff while the homepage still needs its own design pass.

## Logo

`src/components/layout/logo.tsx` exports two pieces:
- `Logo` — full lockup (mark + "Test Discreet" wordmark), used in places with room for it
- `LogoMark` — just the "TD" mark, used in the navbar, footer, and the product-box mockups on the homepage

The mark is a real vector extracted from the client's logo PDF (not hand-drawn), colored via `currentColor` so it inherits `text-accent` automatically in both themes.

## Typography

- **DM Sans** — body text (`font-text`, default)
- **DM Serif Display** — headings (`font-display`, applied automatically to h1–h6 via the base layer)
- **JetBrains Mono** — labels, data, small caps (`font-mono`)

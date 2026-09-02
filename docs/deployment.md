# Deployment

## How it works

- GitHub repo: [`monikalukosaityte-lab/TD`](https://github.com/monikalukosaityte-lab/TD)
- Hosted on Vercel, connected to the repo — every push to `main` auto-deploys.
- Live preview URL: **https://td-virid.vercel.app/**

There's no staging/production split yet — `main` is the only branch that deploys, and it goes straight to the live preview URL.

## noindex / nofollow — default until told otherwise

This site is currently locked down so it can be shared with the team without getting crawled or indexed by search engines. This is enforced at three separate layers, so it's worth checking all three are still in place if anything here changes:

1. **Page metadata** — `src/app/layout.tsx`, `metadata.robots`:
   ```ts
   robots: {
     index: false,
     follow: false,
     nocache: true,
     googleBot: { index: false, follow: false, noimageindex: true },
   },
   ```
2. **`public/robots.txt`**:
   ```
   User-agent: *
   Disallow: /
   ```
3. **Response header** — `next.config.ts`, `headers()`:
   ```ts
   { key: 'X-Robots-Tag', value: 'noindex, nofollow' }
   ```

**Only flip these to indexable when explicitly asked to make the site public/live for real** (e.g. "make it public" or "turn on indexing") — not just because a deploy looks finished.

## Local development

```bash
npm install
npm run dev
```

Runs on `http://localhost:3000`.

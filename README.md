# Pro Pressure Washing

Rebuild of [clpropressurewashing.com](https://clpropressurewashing.com) — a fast,
SEO-optimized static site for Pro Pressure Washing (Holden, MA · Worcester County).

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, exported as a
fully static site (no server runtime).

## Commands

```bash
npm run dev      # local dev server → http://localhost:3000
npm run build    # production build → static site in ./out
npx serve out    # preview the exported static site
npx eslint src   # lint
```

`npm run build` writes a static export to `out/`. Deploy that folder to any static
host / CDN (Netlify, Vercel, Cloudflare Pages, S3, etc.).

## Project structure

```
src/
  app/                 # routes (URLs preserved from the old WordPress site)
    [town]/            # town landing template (Shrewsbury / Northborough / Westborough)
    services/…         # services index + 3 service detail pages
    gallery/our-work-2/
    contact-us/  frequently-asked-questions/  privacy-policy/  terms-of-service/
    sitemap.ts  robots.ts  layout.tsx  not-found.tsx
  components/          # Header, Footer, HeroSlider, QuoteForm, Gallery, etc.
  data/                # all copy/content (business NAP, services, testimonials, gallery, faqs, towns)
  lib/                 # seo.ts (metadata helpers) · schema.ts (JSON-LD builders)
public/images/…        # site photos, downloaded from the live site (filenames preserved)
```

Business facts (name, address, phone, email, hours, service area) live in **one place**:
`src/data/business.ts`. Update there and it propagates everywhere (header, footer,
schema, contact page).

## Contact / quote forms — action required

The quote and contact forms post to **Formspree**. Before launch:

1. Create a form at [formspree.io](https://formspree.io) delivering to
   `clpropressurewashing@gmail.com`.
2. Set the endpoint in `src/components/QuoteForm.tsx` → `FORMSPREE_ENDPOINT`
   (replace `FORM_ID`).

Until that's set, the form falls back to opening the visitor's email client
(`mailto:`) so no lead is lost. A hidden honeypot field provides spam protection
without a visible CAPTCHA.

## SEO implemented

- Unique title + meta description, canonical, Open Graph & Twitter tags per page
- Exactly one `<h1>` per page; semantic HTML5 landmarks
- JSON-LD: `CleaningService` (sitewide), `Service` (service + town pages),
  `FAQPage`, `BreadcrumbList`
- `sitemap.xml` + `robots.txt` (auto-generated)
- Descriptive, keyword-rich `alt` text; lazy-loaded below-the-fold images;
  eager + high-priority hero image
- Lazy click-to-load facades for the YouTube video and Google Map (no third-party
  iframes until the user interacts)
- Self-hosted Google Fonts (Roboto / Roboto Slab) via `next/font`, `display: swap`

## Remaining / recommended follow-ups

These were noted in the handoff and are intentionally left for the client:

- **Privacy Policy & Terms** are standard boilerplate — have the client review.
- **Town-page template** (`src/app/[town]/page.tsx`) is ready to clone for the
  other towns served (Holden, Worcester, Paxton, Princeton, Sterling, Rutland,
  West Boylston, Boylston). Add each with some **unique** copy — don't ship
  near-duplicates all at once. Add the slug to `src/data/towns.ts`.
- **WebP/AVIF conversion**: images are served as their original JPG/PNG. Convert to
  WebP with responsive `srcset` for a further Core Web Vitals gain.
- **aggregateRating** schema can be added once the client confirms review counts.
- Town-page testimonials currently reuse the sitewide set; swap in the
  town-specific quotes (Victoria B., Jen K., Ryan G.) from the old site if desired.

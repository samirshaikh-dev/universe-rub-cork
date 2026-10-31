# TECHSTACK.md: What we build it with

## Principles
1. **Static first.** Product pages rarely change, so pre-render them and serve from a CDN.
2. **One deployable.** Next.js handles pages and the quote form. No separate backend for v1.
3. **Never lose a lead.** Every quote request is stored before any email is sent.
4. **Boring and maintainable.** Choose tools the maintainer already knows and the client can afford.

## Current implementation status
This document describes the target architecture. The repository as it stands uses JavaScript/JSX (not TypeScript), npm (not pnpm), Tailwind CSS v4, and no runtime dependencies beyond Next.js and React. Zod, Drizzle, the Neon database, Resend, file upload and Turnstile are specified below but **not installed or implemented**. The quote route currently opens a pre-addressed email draft and is not a stored lead.

The brand is United Rubber Cork. Canonical origin and mailbox addresses are still carried over from the previous brand; see `PLAN.md`.

## Stack
| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 16.x, App Router** | Latest stable at scaffold time; pin the exact version in `package.json` |
| Language | TypeScript, `strict: true` | |
| Runtime | Node.js current LTS | Check the LTS line when scaffolding |
| Package manager | pnpm | |
| Styling | Tailwind CSS v4 with CSS-variable tokens | Tokens in `DESIGN.md` |
| UI primitives | Radix UI (via shadcn/ui copy-in) for dialog, accordion, navigation | Accessible behaviour for free; restyle fully, since default shadcn styling does not match `DESIGN.md` |
| Icons | `lucide-react` | Functional icons only |
| Fonts | `next/font` (Archivo, width axis) | Fallback to `next/font/local` if the axis is unavailable |
| Images | `next/image`, AVIF and WebP, `sharp` | Width and height always set |
| Content | Typed data files plus MDX for long copy, validated with **Zod** | Products, specs, industries live in `/content` |
| Downloads | PDFs in `/public/downloads` | Move to object storage if the set grows large |
| Forms | Server Actions, Zod validation, React Hook Form for client UX | Works without JavaScript for the basic path |
| Database | **PostgreSQL (Neon) with Drizzle ORM** | Stores every quote request |
| Email | Resend, or the client's SMTP via Nodemailer | Notification to the sales inbox plus an acknowledgement to the buyer |
| File upload | Cloudflare R2 or Vercel Blob, presigned upload | Types: PDF, JPG, PNG. Limit 10 MB |
| Spam control | Cloudflare Turnstile, honeypot field, rate limit (Upstash Redis) | All three, from day one |
| WhatsApp | `https://wa.me/<number>?text=` click-to-chat link | No API in v1 |
| SEO | Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD, `next/og` | Details below |
| Analytics | GA4 via `@next/third-parties`, or Plausible | Custom events listed below |
| Hosting | **Vercel (Pro plan)** | See note below |
| CI | GitHub Actions | Lint, typecheck, test, build, Lighthouse CI |
| Tests | Vitest (validation, redirects), Playwright (quote flow, mobile viewport) | |
| Monitoring | Vercel logs plus Sentry (free tier) | |

**Why no NestJS or separate API:** the site has one write path (the quote form). Server Actions cover it. A separate service adds deployment and cost without a benefit. Revisit if the client later wants a customer portal or an ERP integration.

**Why a database for a brochure site:** email can fail silently. A stored lead can be re-sent. If the client wants zero moving parts, email-only is acceptable; the lead-loss risk is the trade.

**Hosting note:** Vercel's free Hobby plan is meant for personal, non-commercial use, so a business site should be on a paid plan. Confirm current terms and pricing before quoting the client. Alternative: Docker on a small VPS behind Cloudflare, which costs less and needs more maintenance.

## SEO implementation
- Unique title and meta description on every route via `generateMetadata`. The current site has neither.
- JSON-LD: `Organization`, `LocalBusiness` (address, phones), `Product` on product pages, `BreadcrumbList`.
- `sitemap.ts` and `robots.ts` generated from the content files.
- Canonical URLs; one H1 per page.
- Google Search Console and Bing Webmaster set up before launch.
- Legacy URLs in `PLAN.md` must return 301 responses. Next.js `redirects()` returns 308 for permanent redirects, so implement these exact-status redirects in `src/proxy.js`; keep headers and other framework configuration in `next.config.mjs`.

## Analytics events
| Event | Fires when |
|---|---|
| `quote_submit` | Quote request accepted by the server |
| `whatsapp_click` | WhatsApp button tapped (include page and product) |
| `call_click` | Phone link tapped |
| `datasheet_download` | PDF downloaded (include file name) |

## Performance budget
- LCP under 2.5 s, CLS under 0.1, INP under 200 ms on a throttled mid-range Android profile.
- Target under 150 KB of JavaScript (gzipped) on the home page.
- Hero image preloaded; every other image lazy-loaded.
- No third-party script runs before user interaction unless it is analytics, and analytics loads after the page is interactive.
- Lighthouse CI fails the build below 90 on mobile performance, accessibility and SEO.

## Security and privacy
- Validate every input on the server with Zod; never trust the client.
- Security headers in `next.config.ts`: CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- Uploads: allow-list file types, cap size, store outside the web root, random object names.
- Secrets only in environment variables, validated at startup.
- The form collects personal data. Publish a privacy notice and consent line on the form, and check current Indian data-protection obligations (Digital Personal Data Protection Act, 2023) with the client.

## Environment variables
```
DATABASE_URL=
RESEND_API_KEY=            # or SMTP_HOST / SMTP_USER / SMTP_PASS
QUOTE_TO_EMAIL=
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
R2_ACCOUNT_ID= R2_ACCESS_KEY_ID= R2_SECRET_ACCESS_KEY= R2_BUCKET=
NEXT_PUBLIC_SITE_URL=https://www.amcorkindia.com   # replace with the United Rubber Cork domain once confirmed
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_GA_ID=
```

## Repo structure
```
united-rubber-cork/
  content/
    products/        # one typed file per product family
    industries/
  public/
    downloads/       # datasheets (PDF)
    images/
  src/
    app/
      (site)/        # pages: /, /products, /industries, /quality, /about, /contact
      request-quote/
      api/           # only if a webhook or upload signer is needed
      sitemap.ts
      robots.ts
    components/      # ui/, layout/, product/, forms/
    lib/             # db, email, validation (zod), analytics, env
    styles/
  tests/             # vitest + playwright
  .github/workflows/ci.yml
  next.config.ts     # redirects, headers
```

## Scaffold
```bash
pnpm create next-app@latest united-rubber-cork --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
cd united-rubber-cork
pnpm add zod react-hook-form drizzle-orm @neondatabase/serverless resend lucide-react
pnpm add -D drizzle-kit vitest @playwright/test prettier
```
Answer any extra prompts from the installer (such as linter choice) to match this file, then pin versions.

## Deployment checklist
- [ ] Preview deploys on every pull request.
- [ ] Production domain added; **copy existing MX, SPF and DKIM records exactly** before changing DNS so `admin@amcorkindia.com` keeps working.
- [ ] Function region set close to India if the plan allows it.
- [ ] All redirects tested against the old `.php` URLs.
- [ ] Test quote request reaches the inbox and the database.
- [ ] Search Console property verified and sitemap submitted.
- [ ] Rollback plan: keep the old site reachable until the new one is verified.

## Decisions log
| Decision | Why | Revisit when |
|---|---|---|
| Content in repo, not a CMS | Catalogue changes rarely; faster and cheaper | Client edits content more than monthly (add Sanity or Payload) |
| Postgres for leads | No lost enquiries | Never, unless client insists on email only |
| WhatsApp link, not API | Zero cost, zero approval | Volume justifies automation |
| Vercel hosting | Simplest Next.js deploys | Cost or data-residency concerns |
| English only in v1 | Buyer base is B2B English-reading | Gujarati or Hindi demand shows in analytics |

# Project context

## Project and goal

Build the AMCORK Industries website for industrial, construction and insulation, and decorative cork buyers. The v1 goal is to help a technical buyer verify the company, review documented product specifications and contact AMCORK about a quote. `technical-docs/` is the authoritative project reference; prior Meelte-specific context is obsolete.

## Stack and architecture

- Next.js 16.4.3 App Router, React 19.3.0, JavaScript/JSX, Tailwind CSS v4 and npm.
- Route pages and global design tokens: `src/app/`.
- Shared header, footer, breadcrumbs/page heading, contact actions and JSON-LD: `src/components/`.
- Company identity, address, email and phone numbers: `src/config/site.js`.
- Product and industry content plus sitemap route data: `src/data/site-content.js`.
- Canonical metadata and Schema.org generators: `src/lib/seo/`.
- Product and industry detail routes use static params and local content. Marketing pages render as Server Components.
- `src/proxy.js` returns exact 301 redirects for the legacy PHP routes; `next.config.mjs` contains baseline security headers.
- No additional runtime packages have been added. `next/font/google` loads Archivo and self-hosts the generated font assets at build time.

## Routes and completed work

- `/` — product-led homepage with documented sheet specifications, industries and quality information.
- `/industries` — application overview.
- `/products`, `/products/[slug]` — overview and rubberised cork, cork, decorative cork and cork gifts.
- `/industries/[slug]` — transformer, automotive, and construction applications.
- `/quality`, `/about`, `/contact`, `/request-quote`, `/privacy`.
- Breadcrumbs and route-specific title, description and canonical metadata on internal pages; Organization, LocalBusiness, WebSite, Product and BreadcrumbList structured data where applicable.
- `src/app/sitemap.js`, `src/app/robots.js`, and `src/app/opengraph-image.js` — discovery and social-preview routes.
- Responsive stylesheet includes the technical design tokens, visible focus, skip link and reduced-motion handling.
- Legacy PHP redirects are listed in `technical-docs/PLAN.md` and implemented in `src/proxy.js`.

## Active tasks and launch blockers

- The quote route currently opens a pre-addressed email draft. The site does not store a lead, send email, accept uploads or expose a completed online quote form.
- Configure and verify PostgreSQL/Neon lead storage, transactional email, rate limiting, Turnstile and file storage before enabling the full quote flow.
- Confirm the WhatsApp number before adding click-to-chat.
- Obtain approved product/factory photography, datasheets, logo assets, ISO certificate details and test reports.
- Review the privacy notice against actual hosting, email and retention practices and applicable Indian requirements.
- Confirm the production domain/DNS, email continuity, Search Console, analytics choice and deployment configuration.
- Rebuild `.code-review-graph/graph.db`; its current index predates the new AMCORK routes and still describes the former implementation. The `code-review-graph` CLI is not currently available in this environment.
- Validate the CSP with the deployment platform and any later third-party integrations; the current policy permits inline scripts/styles for the Next.js rendering setup.

## Decisions and constraints

- Use only product facts from `technical-docs/BRAND.md` and `technical-docs/PLAN.md`. Do not invent WhatsApp details, photography, datasheets, certification particulars, client names, performance claims or environmental claims.
- The site identifies ISO 9001:2015 and IS 4253 Part II from the provided documents, but certificate number, scope, issuing body, validity and test evidence remain unconfirmed.
- The quote-by-email fallback is explicitly not represented as a stored or submitted web form.
- The configured canonical URL defaults to `https://www.amcorkindia.com`; override it with `NEXT_PUBLIC_SITE_URL` when deploying to another canonical origin.
- Do not inspect or publish `.env` values. Keep private credentials server-side.

## Setup and checks

```bash
npm install
npm run dev
npm run lint
npm run build
```

No browser, assistive-technology, Lighthouse, production redirect or external structured-data validation has yet been run.

# Project context

## Project and goal

Build the United Rubber Cork website for industrial, construction and insulation, and decorative cork buyers. The v1 goal is to help a technical buyer verify the company, review documented product specifications and contact United Rubber Cork about a quote. `technical-docs/` is the authoritative project reference; prior Meelte-specific context is obsolete.

The site was rebranded in place from AMCORK Industries to United Rubber Cork. No documented product, certificate or contact fact was changed, and no new brand facts were invented. Company identity, the wordmark lines, address, emails and phones live in `src/config/site.js` (`SITE_NAME`, `BRAND_WORDMARK`, `SITE_URL`). The old domain and mailboxes are retained there and flagged in comments because no replacements have been supplied.

## Stack and architecture

- Next.js 16.4.3 App Router, React 19.3.0, JavaScript/JSX, Tailwind CSS v4 and npm.
- Route pages and global design tokens: `src/app/`.
- Shared navbar, footer, breadcrumbs/page heading, contact actions and JSON-LD: `src/components/`; site chrome lives in `src/components/layout/`.
- Page sections are composed from Server Components grouped by homepage, product, industry, contact and other route sections under `src/components/`; route files retain metadata, route data selection and page composition.
- Company identity, wordmark, address, email and phone numbers: `src/config/site.js`.
- Product and industry content, per-route SEO titles (`seoTitle`) and sitemap route data: `src/data/site-content.js`.
- Canonical metadata and Schema.org generators: `src/lib/seo/`.
- Product and industry detail routes use static params and local content. Marketing pages render as Server Components.
- `src/proxy.js` returns exact 301 redirects for the legacy PHP routes; `next.config.mjs` contains baseline security headers. **`src/proxy.js` is currently deleted in the working tree, so no legacy redirect is live.**
- No additional runtime packages have been added. `next/font/google` loads Archivo and self-hosts the generated font assets at build time.

## Routes and completed work

- `/` — product-led homepage with documented sheet specifications, industries and quality information.
- `/industries` — application overview.
- `/products`, `/products/[slug]` — overview and rubberised cork, cork, decorative cork and cork gifts.
- `/industries/[slug]` — transformer, automotive, and construction applications.
- `/quality`, `/about`, `/contact` (including a quote form that hands off to WhatsApp, with email and phone fallbacks), `/privacy`; `/request-quote` permanently redirects to the quote section on `/contact`.
- Breadcrumbs and route-specific title, description and canonical metadata on internal pages; Organization, LocalBusiness, WebSite, Product and BreadcrumbList structured data where applicable.
- Every route title carries the brand once, through the `%s | ${SITE_NAME}` template. Product and industry routes use `seoTitle` from the content file. `createPageMetadata` re-declares the shared Open Graph and Twitter fields because Next.js replaces nested metadata objects per route.
- The header and footer wordmark are rendered from `BRAND_WORDMARK`; `src/app/opengraph-image.js` renders the same two-line wordmark.
- `src/app/sitemap.js`, `src/app/robots.js`, and `src/app/opengraph-image.js` — discovery and social-preview routes.
- `src/app/globals.css` contains Tailwind's import and the design tokens; page and component styling uses Tailwind utilities. Focus and skip-link behaviour are utility classes, and the only motion transition in active chrome is gated by `motion-safe`.
- Legacy PHP redirects are listed in `technical-docs/PLAN.md` and implemented in `src/proxy.js`.

## Active tasks and launch blockers

- Confirm whether United Rubber Cork is the same legal entity as AMCORK Industries and whether AMCORK remains a trading name. If it does, add `legalName` and/or `alternateName` to the Organization schema.
- Confirm the canonical domain for United Rubber Cork. Until then, canonicals, `og:url`, sitemap entries, `robots.txt` and every JSON-LD `@id` point at `https://www.amcorkindia.com`.
- Supply new-domain mailboxes. Until then, `admin@amcorkindia.com` and `amcorkindustries@gmail.com` remain published in the footer, contact page, quote mailto and JSON-LD.
- Supply approved wordmark artwork. `public/` contains no images; the header and footer currently set the wordmark as text and the favicon is the Next.js default.
- Decide whether the legacy `.php` URLs still matter. The 301 map in `technical-docs/PLAN.md` is not live because `src/proxy.js` is deleted in the working tree.
- The contact page's quote form validates on the client and opens WhatsApp with the completed request. Email and phone fallbacks remain. The site does not store a lead, send email or accept uploads.
- Configure and verify PostgreSQL/Neon lead storage, transactional email, rate limiting, Turnstile and file storage before enabling the full quote flow.
- Confirm the WhatsApp number used by the quote form; it currently defaults to the first published phone number.
- Obtain approved product/factory photography, datasheets, ISO certificate details in the new brand's name and any test reports.
- Review the privacy notice against actual hosting, email and retention practices and applicable Indian requirements.
- Confirm DNS, email continuity, Search Console property, analytics choice and deployment configuration.
- Rebuild `.code-review-graph/graph.db`; its current index predates the rebrand and still describes the former implementation. The `code-review-graph` CLI is not currently available in this environment.
- Validate the CSP with the deployment platform and any later third-party integrations; the current policy permits inline scripts/styles for the Next.js rendering setup.
- Public Markdown and LLM reference files in `public/` now describe documented United Rubber Cork information. The stale `.well-known/security.txt` was removed because its contact, policy and canonical origin belonged to a different company; add a replacement only after a security-reporting contact and canonical domain are confirmed.

## Decisions and constraints

- The rename was applied in place rather than as a from-scratch rewrite: the existing routes, metadata, schema and accessibility foundations were kept and the identity layer replaced. Revisit if the client wants a new information architecture.
- Brand strings live in `src/config/site.js`; do not hardcode the company name, wordmark lines or domain in components or pages.
- The published address, phone numbers and mailboxes are the inherited AMCORK facts. They are retained because no replacements exist, and they are the highest-risk content on the site if the two companies are legally separate.
- Use only product facts from `technical-docs/BRAND.md` and `technical-docs/PLAN.md`. Do not invent WhatsApp details, photography, datasheets, certification particulars, client names, performance claims or environmental claims.
- The site identifies ISO 9001:2015 and IS 4253 Part II from the provided documents, but certificate number, scope, issuing body, validity and test evidence remain unconfirmed.
- The quote form is a client-side WhatsApp handoff: nothing is stored or sent by the site, and drawings are sent separately by email or WhatsApp.
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

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AMCORK Industries website engineering rules

## Source of truth

This repository builds the AMCORK Industries website. The product and implementation references live in `technical-docs/`:

1. `technical-docs/BRAND.md` is authoritative for company facts, audiences and claims.
2. `technical-docs/PLAN.md` defines the v1 routes, scope, known product facts, redirects, risks and client dependencies.
3. `technical-docs/DESIGN.md` defines the visual system, layout, interaction and accessibility requirements.
4. `technical-docs/TECHSTACK.md` defines the framework, deployment architecture, security and performance targets.
5. `technical-docs/VOICE.md` governs customer-facing copy and terminology.
6. `technical-docs/feel.md` governs motion and interaction details.

When these references conflict with old Meelte-oriented material or the current implementation, follow the AMCORK technical docs and update the stale project documentation. Surface conflicts in the final report. Do not silently invent missing client facts.

`project-context.md` records the implementation's current routes, architecture and blockers. Keep it current when those change. `brand-context.md` and `gemini.md` point to the same AMCORK sources; do not reintroduce Meelte product instructions.

## Product and claim rules

- Write **AMCORK** for the brand and **AMCORK Industries** for the company.
- Use **rubberised cork**, British spelling, and the product names in the technical docs.
- Do not claim product properties, certifications, customer names, capacity, lead times, export reach, prices or environmental benefits unless documented and approved.
- Treat the ISO 9001:2015 certificate number, scope, issuer and validity as unconfirmed until the client supplies the certificate.
- Do not say rubberised cork is biodegradable, eco-friendly or leak-proof. Do not repeat unsupported heat-loss percentages.
- Use only documented product specifications. Keep units spaced (`20 mm`) and sizes formatted with `x`.
- Prefer calm, specific copy. Use “Request a quote” consistently; avoid “RFQ” in buyer-facing content.
- Use the contact details in `src/config/site.js`. Do not invent a WhatsApp number, datasheet, logo, testimonial or factory photograph.

## Architecture

- Use Next.js 16 App Router under `src/app/`, React 19, JavaScript/JSX and npm.
- Keep static marketing and catalogue routes statically renderable. Product and industry routes use typed-in-repo JavaScript data in `src/data/`.
- Use Server Components by default. Introduce client components only for interactions that need browser state.
- Quote requests must be stored before email is sent, and email delivery status must be reported honestly. The current direct-email path is a temporary, explicit fallback; it is not lead storage or an online form.
- Use a Next.js Server Action and the configured PostgreSQL/Neon database for the quote flow; do not introduce a separate backend service for this single write path. Do not implement database, email, upload, spam-control or rate-limit integrations until their provider accounts, credentials, data handling and client configuration are available and reviewed. Keep secrets server-side.
- Do not add dependencies unless a documented requirement needs them. Use npm and update `package-lock.json` with any manifest change.
- Keep route content, metadata, sitemap entries and structured data aligned. Structured data must describe only content visible on the page.
- Include the industry overview at `/industries` as the parent destination for application pages and main navigation.
- Each indexable route needs a unique title, description, canonical URL and a single H1. Use `src/lib/seo/` for shared metadata and JSON-LD.
- Maintain the permanent legacy URL redirects in `src/proxy.js`; Next.js config redirects return 308 rather than the 301 status required by `technical-docs/PLAN.md`.
- Keep CSS colours and font declarations in the design tokens in `src/app/globals.css`. Prefer semantic HTML, visible focus, adequate contrast, reduced-motion support and keyboard-operable controls.
- Add `next/image` with explicit dimensions when approved photos or product assets are supplied. Do not use stock images as a substitute for missing AMCORK photography.
- Add security headers in `next.config.mjs`; review CSP whenever introducing a script, embed, analytics or third-party service.

## Implementation workflow

1. Read the technical docs relevant to the requested change and inspect the affected implementation.
2. Check `node_modules/next/dist/docs/` for the installed Next.js version before changing framework APIs or conventions.
3. Inspect the worktree and preserve unrelated user changes.
4. Make a focused change and update `project-context.md` or this file when architecture, routes or setup change.
5. Run the smallest relevant checks. For application changes, run `npm run lint` and `npm run build`.
6. Do not claim browser, assistive-technology, Lighthouse, schema-validator or deployment checks unless they were actually performed.

## Current launch dependencies

See `technical-docs/PLAN.md` for the full client checklist. In particular, launch still needs the quote storage/email providers, approved certificate and product documents, real photographs, confirmed WhatsApp contact, privacy review, production domain/DNS and analytics choice.

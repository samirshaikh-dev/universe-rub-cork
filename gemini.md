# United Rubber Cork website instructions

## Project context

This repository implements the United Rubber Cork website with Next.js 16 App Router, React 19, Tailwind CSS v4 and npm. Application routes are in `src/app/`.

Read `AGENTS.md`, `AI_RULE.md`, `project-context.md`, and the relevant references under `technical-docs/` before making changes. Use `BRAND.md` for factual claims, `PLAN.md` for route and product scope, `DESIGN.md` for visual decisions, `TECHSTACK.md` for architecture and `VOICE.md` / `feel.md` for copy and interaction.

The former Meelte context is obsolete and must not be used for this project. The brand renamed from AMCORK Industries to United Rubber Cork; use `src/config/site.js` for the name, wordmark and contact facts, and do not reintroduce the old brand.

## Engineering

- Read the installed Next.js guide under `node_modules/next/dist/docs/` before using or changing Next.js APIs.
- Use npm. Do not inspect or reveal `.env` values.
- Keep static catalogue and marketing pages in Server Components; avoid client JavaScript without a concrete interaction need.
- Use documented facts only. Certificate details, product evidence, photos, datasheets, WhatsApp contact, lead storage/email services and privacy obligations are client dependencies; do not fabricate them.
- Do not add a working-looking quote form or success message until the configured backend stores the lead and its response can be reported accurately.
- Keep the crawlable routes, canonical metadata, sitemap, JSON-LD and permanent legacy redirects in sync.
- Keep styling within `technical-docs/DESIGN.md` and the CSS tokens in `src/app/globals.css`.
- Use semantic HTML, keyboard-visible focus, reduced-motion support and accessible labels.
- Run `npm run lint` and `npm run build` after application changes. Report only checks that were run.

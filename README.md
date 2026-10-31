# United Rubber Cork website

The United Rubber Cork marketing and product catalogue website built with Next.js 16 App Router, React 19 and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate

```bash
npm run lint
npm run build
```

## Configuration

Company identity, the wordmark lines, address, email and phone numbers are exported from `src/config/site.js`. Set `NEXT_PUBLIC_SITE_URL` to the canonical deployment origin when it differs from the inherited `https://www.amcorkindia.com`. Do not add credentials to public environment variables.

The canonical domain and both mailbox addresses are still carried over from the previous brand name. Replace them once the client supplies the new domain and mailboxes.

## Project references

The project requirements are in [`technical-docs/`](./technical-docs/). Start with [`PLAN.md`](./technical-docs/PLAN.md), [`TECHSTACK.md`](./technical-docs/TECHSTACK.md), [`BRAND.md`](./technical-docs/BRAND.md) and [`DESIGN.md`](./technical-docs/DESIGN.md). The implementation status and open client dependencies are in [`project-context.md`](./project-context.md).

Legacy PHP URLs were handled by `src/proxy.js`, which returns the required 301 status; Next.js `redirects()` configuration returns 308. That file is currently deleted in the working tree, so no legacy redirect is live. See `technical-docs/PLAN.md` before restoring or replacing it.

## Current implementation limits

The site includes static product, application, company, quality, contact, quote-request and privacy pages. The quote-request route currently opens the visitor's email application; it does not store a lead or upload a drawing. A production form requires the database, mail, anti-spam and upload services described in the technical docs. Real product photography, approved datasheets and certificate details are also pending.

# PLAN.md: What we are building

## In one line
A fast Next.js website for AMCORK Industries (GIDC, Vapi, Gujarat) that lets a technical buyer verify the company and send a quote request in under a minute, on a phone or a desktop.

## Why rebuild
Audit of the current site (amcorkindia.com, PHP). Based on page text only; visuals were not reviewed.

- Reads as a brochure. Products are long paragraphs with no spec tables, datasheets or application pages.
- Certifications are buried. ISO 9001:2015 is only a footer badge; IS 4253 Part II appears only inside body copy.
- One conversion path: an enquiry modal with a 13-item product list. No visible WhatsApp or click-to-call actions in the page content.
- SEO basics are missing: empty meta description, and the page title is just "AMCORK INDUSTRIES".
- Footer social links point to "#".
- Copy errors: "ENVIORNMENTALLY", "ALight", "We have manufacturing...".
- Eco claims are three bare words with no evidence, and rubberised cork is not fully biodegradable.

## Goals
| Goal | How we measure it |
|---|---|
| More qualified quote requests | RFQ submissions per month. Baseline: get current enquiry count from client |
| Credibility in the first screen | ISO 9001:2015 and IS 4253 Part II visible above the fold |
| Fast on mid-range Android over 4G | LCP under 2.5 s, CLS under 0.1, INP under 200 ms |
| Found for the right searches | Search Console impressions for product and application queries (validate the query list with real data) |
| Easy to contact | WhatsApp taps, call taps, datasheet downloads tracked as events |

Do not set numeric targets for RFQs until four weeks of baseline data exist.

## Audiences, in priority order
1. **Industrial buyers**: transformer manufacturers (top-cover gaskets, strips), automotive component makers (gaskets, frames), general OEM and gasket buyers.
2. **Construction and insulation buyers**: granules, agglomerated sheets, anti-vibration slabs.
3. **Decorative and gifting buyers**: wall and floor tiles, memo boards, cork gifts, interior designers.
4. **Wine stopper buyers**: small line, keep one simple page.

## Scope for v1
| Route | Purpose |
|---|---|
| `/` | Home: hero, industries, product families, proof, quote CTA |
| `/products` | Overview of all families |
| `/products/rubberised-cork` | Sheets, frames, gaskets, strips, washers |
| `/products/cork` | Sheets and rolls, rings and gaskets, polishing wheels, granules, anti-vibration slab, Battricork, stoppers |
| `/products/decorative-cork` | Tiles, memo boards |
| `/products/cork-gifts` | Gift range |
| `/industries` | Overview of applications |
| `/industries/transformers` | Application page |
| `/industries/automotive` | Application page |
| `/industries/construction` | Application page |
| `/quality` | ISO 9001:2015, IS 4253 Part II, how parts are made and checked |
| `/about` | Company, location, capability |
| `/contact` | Address, phones, email, map, quote form |
| `/request-quote` | Full RFQ form (also opened from every CTA) |
| `/privacy` | Privacy notice (required because we collect personal data) |

Features: RFQ form with optional drawing upload, WhatsApp click-to-chat, click-to-call, spec tables, PDF datasheets, structured data (JSON-LD), sitemap and robots, 301 redirects, analytics events.

**Out of scope for v1:** e-commerce and payments, user accounts, Hindi or Gujarati versions, blog, live chat, CMS admin UI (content lives in the repo first).

## Redirects (ship on launch day)
| Old URL | New URL |
|---|---|
| `/index.php` | `/` |
| `/about.php` | `/about` |
| `/corkproducts.php` | `/products/cork` |
| `/rubbercorkproduct.php` | `/products/rubberised-cork` |
| `/decorative-cork.php` | `/products/decorative-cork` |
| `/cork-gift.php` | `/products/cork-gifts` |
| `/contact.php` | `/contact` |

All permanent (301). Test every one after deploy.

## Known content (from the current site)
- **Rubberised cork sheets:** 2 ft x 3 ft, 3 ft x 3 ft, 1000 x 1000 mm; 1.0 to 20 mm thick; made to IS 4253 Part II or customer requirement.
- **Rubberised cork strips:** 20 to 600 mm wide, 1 to 10 mm thick (aimed at transformer makers).
- **Cork granules:** meshes 0.2/0.5, 0.5/1, 1/2, 3/4, 4/8 mm.
- **Decorative cork:** tiles 300 x 300 and 600 x 600 mm, 3 to 12 mm thick.
- **Product list in the enquiry form:** cork sheets and rolls, cork rings and gaskets, cork polishing wheels, cork granules, anti-vibration cork slab, Battricork, cork stoppers, decorative cork, rubberised cork sheets, gaskets, frames, washers, strips.
- **Contact:** AMCORK INDUSTRIES, No. 5, Balaji Complex, Opp. Hansa Engg. Compound, Near Mahakali Weight Bridge, 2nd Phase, GIDC, Vapi 396195, Gujarat. Phones +91 9924304617 / 18 / 19. Email admin@amcorkindia.com and amcorkindustries@gmail.com.

## Needed from the client (blockers)
- [ ] Domain, DNS and current hosting access. The footer credits Quarter Solutions Pvt Ltd as developer, so coordinate the handover.
- [ ] Email setup details. `admin@amcorkindia.com` must keep working when DNS moves.
- [ ] Real photos, or permission to shoot: sheets, frames, gaskets on a bench, die press, finished parts, decorative tiles.
- [ ] ISO 9001:2015 certificate (number, validity, issuing body) and any test reports.
- [ ] Datasheets or specs per product.
- [ ] Client and industry list, and permission to show logos.
- [ ] Evidence for claims: "completely leak proof", "reduce heat loss by 35 to 50 %", and any biodegradability statement.
- [ ] Reply-time promise for quotes, MOQ, typical lead times, export capability.
- [ ] WhatsApp number to use, and who answers quote requests.
- [ ] Current monthly enquiry count (the baseline).

## Phases
| Phase | Deliverable | Done when |
|---|---|---|
| 0. Discovery | Audit, content checklist, client inputs collected | Blockers above are answered or consciously deferred |
| 1. Foundation | Next.js repo, design tokens, layout, nav, footer, CI | Home skeleton deploys to a preview URL |
| 2. Core pages | Home, products, industries, quality, about, contact | Content is real, not lorem ipsum |
| 3. Conversion | RFQ form, upload, email and DB storage, WhatsApp, call, analytics | A test quote reaches the inbox and the database |
| 4. SEO and QA | Metadata, JSON-LD, sitemap, redirects, accessibility and performance pass | Lighthouse 90+ on mobile for performance, accessibility and SEO |
| 5. Launch | DNS cutover, redirect check, Search Console submission | Old URLs 301 correctly, mail still works |
| 6. After launch | Four-week review against goals | Baseline and first conversion numbers reported |

## Risks
- **Green claims.** Rubberised cork contains rubber. Claim "natural cork base" and "renewable", not "decomposable", for those lines. See `BRAND.md`.
- **Unproven absolutes.** "Completely leak proof" and "35 to 50 %" need test data or softer wording.
- **Weak photography.** Stock imagery will undo the trust the layout builds. Budget for a photo session.
- **Lost search traffic.** Old URLs must redirect.
- **Broken email at DNS cutover.** Copy MX and SPF records exactly before switching.
- **Spam on the form.** Honeypot, Turnstile and rate limiting from day one.

## Definition of done
- All v1 routes live with real content and metadata.
- Quote request works end to end on mobile and desktop, and the lead is stored even if email fails.
- Every redirect in the table works.
- Accessibility: WCAG 2.2 AA checks pass; keyboard-only run-through completed.
- Performance budget met on a throttled mobile profile.
- Analytics events fire and are visible in the dashboard.
- Client can reach the person who maintains the site.

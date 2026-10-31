# BRAND.md: Who we are

Facts below come from the current site unless marked **[confirm]**. Anything marked [confirm] must be checked with United Rubber Cork before it appears on the site.

## Identity
- **Name:** United Rubber Cork. Write the brand in full; never abbreviate it to "URC" in buyer-facing copy.
- **Previous name:** AMCORK Industries, whose website this project replaces. **[confirm whether AMCORK is still a trading name, and whether the legal entity is the same]**
- **Where:** GIDC, Vapi, Gujarat, India.
- **What we make:** cork and rubberised cork products: sheets, frames, gaskets, strips, granules, stoppers, decorative cork and cork gifts.
- **How we work:** gaskets and components made to the customer's drawing or sample, or to IS 4253 Part II.
- **Quality system:** ISO 9001:2015 (the site shows the badge) **[confirm that the certificate is held by United Rubber Cork, plus certificate number, validity and issuing body]**.
- **Who we supply:** automotive components, transformer manufacturers, construction and insulation, interior and decorative buyers.
- **Contact facts:** the GIDC address, three phone numbers and the two mailbox addresses are carried over from AMCORK and are not yet confirmed for the new brand. The site currently publishes the old-domain addresses because no replacements exist; see `PLAN.md` for the blocker.

## Rename status
The site was rebranded in place from AMCORK Industries to United Rubber Cork without changing the documented product, certificate or contact facts. Client confirmation is still needed for the legal entity name, the domain, the mailboxes, the ISO certificate ownership and whether the old `.php` redirects remain relevant.

## Positioning
For industrial buyers who need sealing and insulating parts in cork, United Rubber Cork is the Vapi manufacturer that makes them to your drawing, with an ISO 9001:2015 quality system and jointless gasket construction, so a new part is a specification check, not a gamble.

## The brand idea
**Cork, engineered.**
A natural material, made precise. The natural part earns attention. The engineering part earns the order.

Draft taglines (none approved):
1. Cork, engineered to your drawing. *(recommended)*
2. Sealing, insulating, cushioning. In cork.
3. Made to specification. Made from cork.

## Personality
| We are | We are not |
|---|---|
| Exact: numbers, sizes, standards | Vague or flowery |
| Dependable: say what we can deliver, then deliver it | Hype-driven |
| Plain-spoken: written for a buyer reading on a phone | Jargon for its own sake |
| Proud of the material | Preachy about the planet |

## Audiences
| Who | What they ask first | What we show first |
|---|---|---|
| Procurement or purchase manager at a transformer or auto-component maker | Can they make my part, to spec, repeatedly? | Spec table, ISO 9001:2015, "send your drawing" |
| Design or quality engineer | What are the material properties and tolerances? | Datasheets, thickness and size ranges, IS 4253 Part II |
| Construction or insulation buyer | Does it insulate, and what sizes? | Granule meshes, sheet sizes, application page |
| Interior designer or gift buyer | Does it look good, what finishes? | Decorative range, tile sizes, photography |

## Proof points
**Verified from the AMCORK site this project replaces**
- Made to IS 4253 Part II or to customer requirement
- Rubberised cork sheet sizes and thicknesses (see `PLAN.md`)
- Gaskets made jointless
- Gaskets for automotive and for transformer top covers
- ISO 9001:2015 badge shown

**To confirm before use**
- Years in business, founder story
- Client names and logos (need permission)
- Monthly capacity, lead times, minimum order quantity
- Export markets
- Test reports for leak resistance and thermal performance

## Claims policy
This is the rule that protects the brand.

| Say | Do not say |
|---|---|
| Made from cork, a renewable material (the bark is harvested and the tree keeps growing) | "Decomposable", "biodegradable" or "eco-friendly" for rubberised cork products |
| Biodegradable, for pure cork lines only, if United Rubber Cork confirms it | "100% green" or any blanket eco claim |
| Jointless gaskets, with no seam to leak through | "Completely leak proof" unless test data exists |
| Cork insulation can cut heat loss in walls and roofs, with a cited test | "Reduces heat loss by 35 to 50 %" without a source |
| Made to IS 4253 Part II | Any standard we cannot show a document for |

If a claim cannot be backed with a document, a test report or a certificate, it does not go on the site.

## Naming conventions
- Brand: **United Rubber Cork**, title case in prose, every time.
- Wordmark: "United" on the first line and "Rubber Cork" on the second. It is rendered from `BRAND_WORDMARK` in `src/config/site.js`; do not hardcode either line in a component.
- Do not shorten the brand to "URC", "United" or "United Cork" in buyer-facing copy.
- The previous brand name must not appear in page copy, metadata, structured data or accessible names.
- **Rubberised cork** (British spelling), not "rubber cork".
- **Gasket**, **frame**, **strip**, **sheet**, **granules**: one term per thing, everywhere.
- Product-family names match the navigation labels exactly.
- Units: mm for thickness and width; sheet sizes may show both mm and ft as the current site does.

## Logo
No approved logo file is in the repository. `public/` contains no images, and the previous `logo-new.png` belonged to the old brand, so it must not be reused. Request vector (SVG) artwork for the new wordmark plus a one-colour version for dark Montado Green backgrounds.
Rules until artwork arrives: set the wordmark as text using the design tokens, clear space equal to half the wordmark height, never place it on busy photography, and do not substitute a stock logo or a generated placeholder mark.

## What United Rubber Cork is not
Not a lifestyle brand, not a green-marketing brand, and not a catalogue shop with a cart. It is a manufacturer you can verify and ask for a quote.

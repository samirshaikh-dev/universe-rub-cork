# DESIGN.md: How it looks and behaves

## Direction in one line
**Industrial-natural.** Precise, spec-led layouts, with the cork material itself (texture, die-cut shapes) as the single memorable visual idea.

Psychology behind it: trust and competence first (authority, risk reduction, low effort), eco as supporting fact. Buyers decide whether to trust a supplier within seconds, so the first screen has to show who we are, what we make, the certifications and the next step.

## Review against generic defaults
The first palette suggested in chat was cream background plus burnt-orange CTA. That pairing, and a cream-plus-serif look generally, is a very common default, so this file replaces it.

| Changed | From | To | Why |
|---|---|---|---|
| Page background | Warm cream | Cool "Sheet Grey" | Reads as paper and packaging, not a lifestyle brand |
| CTA colour | Burnt orange | Signal Amber with dark text | Industrial signal colour, far from the common terracotta look, 7:1 contrast |
| Typeface | Inter (generic) | Archivo, using its width axis | Expanded headlines feel machined; condensed digits suit spec tables |
| Hero | Generic "big stat + gradient" | Die-cut hero | Comes from the product: gasket frames are punched from sheet |

## Colour
| Token | Hex | Role |
|---|---|---|
| Montado Green | `#1E3B2F` | Primary dark surfaces, headings on light, footer, proof band |
| Cork | `#B98250` | The material colour: borders, rules, texture tints. **Never body text on light** (about 3:1) |
| Cork Light | `#E7D3BC` | Tinted panels, table header fill |
| Gasket Charcoal | `#232826` | Body text, text on amber |
| Sheet Grey | `#EEF0EB` | Page background |
| Paper | `#FFFFFF` | Tables, forms, raised surfaces |
| Signal Amber | `#F0A500` | **The only CTA colour.** One amber button per view where possible |
| Danger | `#B3261E` | Errors only |

Rules
- Amber is for actions, nothing else. If everything is amber, nothing is.
- White text on Montado Green, charcoal text on amber and on Sheet Grey.
- Check every pairing to WCAG 2.2 AA (4.5:1 text, 3:1 large text and UI) before shipping.
- No gradients as decoration. No neon "eco green". No leaf or globe icons.

## Typography
One family, used at three widths: **Archivo** (variable, with the width axis).

| Role | Setting |
|---|---|
| Headlines | Weight 700 to 800, width 125 (expanded), tight tracking, sentence case |
| Body | Weight 400, width 100, 17 px, line-height 1.6, max 70 characters per line |
| Spec tables and figures | Weight 500, width 87.5 (semi-condensed), `font-variant-numeric: tabular-nums` |

Scale (fluid with `clamp`): 14, 16, 18, 22, 28, 40, 56, 72.

Avoid: all-caps labels, one-word accents in headlines, eyebrow labels above every heading, numbered markers where there is no sequence.

Implementation note: load with `next/font/google` using the `wdth` axis. If the axis is not exposed in the installed version, self-host the variable font with `next/font/local`.

## Layout
- Left-aligned text throughout. Centre alignment only for the closing quote band.
- 12-column grid, content max width 1200 px, 24 px side padding on mobile.
- Spacing scale (4 px base): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Sections alternate Sheet Grey and Paper. One full-bleed Montado Green band for proof.
- Breakpoints: 360 (design baseline), 640, 1024, 1280.
- Radius is a hierarchy: 0 for photographs, tables and panels; 2 px for buttons and inputs. No pill shapes, no uniform card radius.
- No drop shadows. Separate surfaces with tone and 1 px rules.

### Home wireframe (desktop)
```
+----------------------------------------------------------------+
| AMCORK    Products  Industries  Quality  About  Contact [Quote] |
+----------------------------------------------------------------+
| Cork and rubberised cork          +-------------------------+  |
| gaskets, made to your drawing     |  macro cork sheet photo |  |
|                                   |     +--------+          |  |
| [Request a quote]  [WhatsApp]     |     | die-cut|  <- shows|  |
|                                   |     | gasket |  transformer|
| [ISO 9001:2015] [IS 4253 Part II] |     +--------+  photo   |  |
|                                   +-------------------------+  |
+----------------------------------------------------------------+
| Find your part by industry                                      |
| +------------------+  +-----------+                             |
| | Transformers     |  |Automotive |   photographic panels,      |
| | (large)          |  +-----------+   flush, no radius          |
| |                  |  |Construction|                            |
| +------------------+  +-----------+  + Decorative               |
+----------------------------------------------------------------+
| Product families (spec table rows)                              |
| Rubberised cork sheet | 1.0 to 20 mm | 2x3 ft, 3x3 ft, 1000 mm  |
| Rubberised cork strip | 1 to 10 mm   | 20 to 600 mm wide        |
| Cork granules         | 5 mesh sizes | 0.2/0.5 to 4/8 mm        |
| Decorative tiles      | 3 to 12 mm   | 300x300, 600x600 mm      |
+----------------------------------------------------------------+
| Why cork (short, factual, 3 properties)                         |
+================================================================+
| PROOF BAND (Montado Green): certificate image, standard,        |
| how an order works: send drawing -> review -> quote -> sample   |
| -> production [confirm process with AMCORK]                     |
+================================================================+
| Clients / industries served (only with permission)              |
+----------------------------------------------------------------+
| Quote band: form short version + address + phones + map         |
+----------------------------------------------------------------+
```
The process steps in the proof band are a true sequence, so numbering is appropriate there and nowhere else.

### Mobile
- Hero stacks: headline, CTAs, badges, then the die-cut image.
- **Sticky bottom bar with three actions:** Call, WhatsApp, Request a quote. The quote action is never hidden inside the menu.
- Spec tables scroll horizontally inside their own container with the first column pinned.
- Tap targets are at least 44 x 44 px.

## The one memorable thing: the die-cut hero
Rubberised cork frames are punched into gaskets. The hero shows that. A macro photograph of a cork sheet fills the panel and a gasket-shaped cut-out (SVG mask) reveals an application photograph, such as a transformer cover, through the hole. On page load the cut-out piece lifts away once (about 600 ms, ease-out) to reveal the image. After that the hero is still.

Everything else on the page stays quiet so this carries the brand.

## Imagery
- **Shoot our own photographs.** Stock leaf-and-globe imagery undoes the trust the layout builds.
- Macro cork, showing the cell structure. Gaskets laid on a sheet with a steel rule for scale. The die press. Finished parts in cartons. Decorative tiles in a real room.
- Natural window light, neutral grey backdrop, consistent colour grade.
- Crops: 16:9 for heroes and panels, 4:3 for product cards, 1:1 for gift items.
- Deliver as AVIF or WebP through `next/image`, with width and height set. Descriptive alt text on every image.

## Iconography
Functional only: phone, WhatsApp, download, check, close, menu. One icon set (Lucide), 1.5 px stroke.
Custom SVG gasket silhouettes (round, rectangular, L-shaped, frame) act as category glyphs on product pages. They are not scattered as decoration.

## Components
| Component | Notes |
|---|---|
| Button | Primary (amber, charcoal text), secondary (1 px charcoal outline), text link. 2 px radius, 48 px height |
| Spec table | Paper background, 1 px rules between rows, Cork Light header fill, tabular figures, `scope` on headers |
| Certification badge | ISO 9001:2015 and IS 4253 Part II as simple marks, linked to the certificate page |
| Application panel | Full-bleed photo, label at bottom left, whole panel is the link |
| Product row | Glyph, name, key sizes, "Download datasheet" and "Request a quote" |
| Datasheet row | File name, type, size, download button |
| Quote form | Visible labels, inline validation, file upload, honeypot, Turnstile. Status messages in an `aria-live` region |
| Sticky mobile bar | Call, WhatsApp, Request a quote. Hidden while the form is in view |
| Footer | Montado Green, address, phones, email, certification marks, privacy link |

## Motion
Full detail is in `feel.md`, which wins on any motion or interaction question.
- Two signature moments: the die-cut hero reveal and the quote-sent "fit" animation.
- Everything else responds to a person's action (focus, hover, press, accordion open, form status), plus the short list of scroll-linked behaviours defined in `feel.md`.
- Respect `prefers-reduced-motion`: show the final state with no animation.
- No fade-and-slide-in on every section.

## Accessibility floor
WCAG 2.2 AA. Visible keyboard focus (3 px outline, amber on dark surfaces, charcoal on light). Skip-to-content link. Semantic landmarks. Form errors tied to inputs with `aria-describedby`. Colour is never the only signal. Test with keyboard only and with a screen reader on the quote form.

## Tokens (Tailwind v4)
```css
@import "tailwindcss";

@theme {
  --color-montado: #1E3B2F;
  --color-cork: #B98250;
  --color-cork-light: #E7D3BC;
  --color-charcoal: #232826;
  --color-sheet: #EEF0EB;
  --color-paper: #FFFFFF;
  --color-amber: #F0A500;
  --color-danger: #B3261E;

  --font-sans: var(--font-archivo), ui-sans-serif, system-ui, sans-serif;

  --radius-control: 2px;
}
```

## Design QA checklist
- [ ] First screen shows what we make, who it is for, certifications and the quote action.
- [ ] Amber appears only on actions.
- [ ] No text uses Cork on a light background.
- [ ] Every spec table works at 360 px wide.
- [ ] Hero still looks right with animation switched off.
- [ ] No image without alt text; no layout shift when images load.

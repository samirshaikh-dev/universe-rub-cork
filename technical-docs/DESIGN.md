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
| Montado Deep | `#162C23` | Reserved for layered green surfaces; currently unused |
| Cork | `#B98250` | The material colour: borders, rules, texture tints. **Never body text on light** (about 3:1) |
| Cork Light | `#E7D3BC` | Tinted panels, table header fill, selection |
| Gasket Charcoal | `#232826` | Body text, text on amber |
| Sheet Grey | `#EEF0EB` | Page background |
| Paper | `#FFFFFF` | Tables, forms, raised surfaces, sticky header and bar |
| Signal Amber | `#F0A500` | **The only CTA colour.** One amber button per view where possible |
| Amber Deep | `#D99400` | Hover state for amber actions only |
| Danger | `#B3261E` | Errors only |

Rules
- Amber is for actions, nothing else. If everything is amber, nothing is.
- White text on Montado Green, charcoal text on amber and on Sheet Grey.
- The focus ring is charcoal on light surfaces and amber on dark ones; dark sections carry `data-surface="dark"` (footer, proof band).
- Check every pairing to WCAG 2.2 AA (4.5:1 text, 3:1 large text and UI) before shipping.
- No gradients as decoration. No neon "eco green". No leaf or globe icons.

## Typography
One family, used at three widths: **Archivo** (variable, with the width axis).

`layout.js` loads it once with `next/font/google` as `Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" })`. The installed `@next/font` metadata exposes `wdth` 62–125, so no self-hosted fallback is needed.

| Role | Setting |
|---|---|
| Headlines | Weight 700 to 800, width 125 (expanded), tight tracking, sentence case |
| Body | Weight 400, width 100, 17 px, line-height 1.6, max 70 characters per line |
| Spec tables and figures | Weight 500, width 87.5 (semi-condensed), `font-variant-numeric: tabular-nums` |
| Small labels | Weight 600, width 112, 13 px; used for field labels, footer column headings and eyebrow text |

Scale (fluid with `clamp`): 14, 16, 18, 22, 28, 40, 56, 72.

Avoid: all-caps labels, one-word accents in headlines, eyebrow labels above every heading, numbered markers where there is no sequence.

Implementation: four display classes in `globals.css` (`display-xl`, `display-lg`, `display-md`, `display-sm`), plus `.lede`, `.body-copy`, `.spec-num` and `.label`. `display-sm` deliberately drops to width 118 / weight 700 so navigation and section subtitles do not shout.

## Layout
- Left-aligned text throughout. Centre alignment is not used anywhere in the current build.
- 12-column grid, content max width 1200 px, 24 px side padding on mobile, 32 px from 640 px.
- Spacing scale (4 px base): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Sections alternate Sheet Grey and Paper. One full-bleed Montado Green band for proof.
- Breakpoints: 360 (design baseline), 640, 1024, 1280.
- Radius is a hierarchy: 0 for photographs, tables and panels; 2 px for buttons and inputs. No pill shapes, no uniform card radius.
- No drop shadows. Separate surfaces with tone and 1 px rules.

### Home wireframe (as built, desktop)
```
+----------------------------------------------------------------+
| United Rubber Cork                                             |
| Products Industries Quality About Contact   [Request a quote]  |
+----------------------------------------------------------------+
| Cork and rubberised cork, cut     +-------------------------+  |
| to your drawing.                  |  cork sheet, die-cut    |  |
|                                   |  gasket lifted to show  |  |
| [Request a quote]                 |  a finished-part photo  |  |
| [Send your drawing on WhatsApp]   +-------------------------+  |
| [ISO 9001:2015] [IS 4253 Part II]   caption: gasket form       |
+----------------------------------------------------------------+
| Check the sizes before you enquire.  (Paper)                    |
| Product | Thickness | Size | Details   <- pinned first column   |
+----------------------------------------------------------------+
| Find your part by industry.  (Sheet Grey)                      |
| [Transformers     ] [Automotive] [Construction] [Decorative]   |
| [Describe the part ->]                                          |
+----------------------------------------------------------------+
| Why cork works as a gasket. (3 properties, Paper)              |
+================================================================+
| PROOF BAND (Montado Green): ISO 9001:2015, IS 4253 Part II,    |
| how a quote request works: send drawing -> review -> quote     |
+================================================================+
| Have a drawing or sample?  (Sheet Grey)                        |
| short quote form (5 fields)      | works, phones, email, links  |
+----------------------------------------------------------------+
```

The hero order changed from the planning sketch: the request in the sketch was for the spec table above the industry panels, because buyers verify dimensions before they browse applications. The clients band was dropped — no client names may be published without permission, and none were supplied.

The three process steps are a true sequence, so numbering is appropriate there and nowhere else. The planned sample/production steps were removed because they are not confirmed by the client.

### Mobile
- Hero stacks: headline, CTAs, badges, then the die-cut image.
- **Sticky bottom bar with three actions:** Call, WhatsApp, Request a quote. The quote action is never hidden inside the menu.
- Spec tables scroll horizontally inside their own container with the first column pinned.
- Tap targets are at least 44 x 44 px.
- The sticky bar appears after 0.6 viewport heights of scroll and hides while the quote section is in view. `body` reserves 76 px at the bottom below 1024 px so the bar never covers the footer.

## The one memorable thing: the die-cut hero
Rubberised cork frames are punched into gaskets. The hero shows that. A macro photograph of a cork sheet fills the panel and a gasket-shaped cut-out (SVG clip path) reveals an application photograph through the hole. On page load the cut-out piece lifts away once (600 ms, `--ease-standard`) to reveal the image. After that the hero is still.

As built (`src/components/homepage/die-cut-hero.jsx`):
- Two `clipPath` definitions with `clipPathUnits="objectBoundingBox"`: `gasket-hole` (sheet minus the frame) and `gasket-ring` (the frame itself).
- Three image layers, in order: finished-part photo, punched sheet, lifting piece. All `fill` with explicit `sizes`.
- State is written to `data-reveal` on the panel from an effect (`idle` → `run`/`done`), never through React state, so there is no cascading render.
- The animation runs once per browser session (`sessionStorage["urc:hero-reveal"] = "seen"`), and is skipped for `prefers-reduced-motion: reduce` and `navigator.connection.saveData`, both of which render the finished state immediately.
- The still state is the intended look: gasket form in place, application photo visible through the cut.

Everything else on the page stays quiet so this carries the brand.

## Imagery
- **Shoot our own photographs.** Stock leaf-and-globe imagery undoes the trust the layout builds.
- Macro cork, showing the cell structure. Gaskets laid on a sheet with a steel rule for scale. The die press. Finished parts in cartons. Decorative tiles in a real room.
- Natural window light, neutral grey backdrop, consistent colour grade.
- Crops: 4:3 for panels and product figures; 5:4 for the hero plate. 1:1 for gift items when photography exists.
- Deliver as AVIF or WebP through `next/image`, with width and height set. Descriptive alt text on every image.

**Current status:** the only photography in the repository is four legacy JPEGs in `public/images/carousel/` (1482x812, 1140x500, 667x347, 1600x639). They are mapped once in `src/data/media.js` (`corkSheet`, `sheetSamples`, `gaskets`, `tiles`) and described there as placeholders until approved factory, material and part photography is supplied. The filenames are a leftover of the removed carousel; the carousel itself is gone.

## Iconography
Functional only: phone, WhatsApp/chat, check, close, menu, arrow. Hand-written inline SVG at 1.5 px stroke, `aria-hidden`, no icon dependency.

Custom SVG gasket silhouettes act as category glyphs where a product has no photograph. They are line drawings of real parts, not decoration, and only appear on catalogue cards.

## Components
| Component | Class / file | As built |
|---|---|---|
| Button | `.btn` + `.btn--primary` / `--secondary` / `--on-dark` / `--plain` | 48 px minimum height, 2 px radius, amber primary, charcoal-on-amber text |
| Text link | `.link`, `.btn--plain` | 1 px rule that thickens to 2 px on hover |
| Spec table | `.spec-scroll` > `.spec`, `sections/spec-table.jsx` | Paper fill, Cork Light sticky header, first column pinned, 16 px cell padding, row hover tint, `scope` on every header, labelled scroll region |
| Certification badge | `.badge` | 36 px minimum height, 1 px outline, linked to `/quality` |
| Application panel | `.app-panel`, `homepage/industry-panels.jsx` | Full-bleed photo, label bar at the bottom, whole panel is the link, photo scales 1.02 on hover/focus |
| Product card | `sections/catalogue-list.jsx` | Glyph, name, summary, "View range"; photo variant when a medium exists |
| Specification list | `sections/specification-list.jsx` | Definition list with rules; label column, details column |
| Quote form | `.field`, `contact/quote-form.jsx` | `variant="short"` (5 fields) or `"full"` (9 fields), visible labels, blur validation, `aria-describedby`/`aria-invalid`, honeypot, fixed-width submit, `aria-live` status. **No file upload and no Turnstile** — drawings go by WhatsApp or email |
| Fit mark | `.fit-mark` | 96 x 72 outline plus a settling piece; only in the quote-sent state |
| Process step | `.step`, `.step__index` | Two-digit index, rule above, Montado band only |
| Sticky mobile bar | `layout/mobile-action-bar.jsx` | Call, WhatsApp, Request a quote; 240 ms slide; hidden from the tab order when off-screen |
| Header | `.site-header`, `layout/navbar.jsx` | Sticky, compresses 76 → 56 px through a registered `--header-h`; full-screen mobile dialog with Escape, scroll lock and focus restore |
| Footer | `layout/footer.jsx` | Montado Green, wordmark, certification marks, contact, explore, privacy |
| Datasheet row | — | **Not built.** No datasheets have been supplied; do not add download UI for files that do not exist |

## Motion
Full detail is in `feel.md`, which wins on any motion or interaction question.
- Two signature moments: the die-cut hero reveal and the quote-sent "fit" animation.
- Everything else responds to a person's action (focus, hover, press, form status), plus the short list of scroll-linked behaviours in `feel.md`.
- Respect `prefers-reduced-motion`: show the final state with no animation.
- No fade-and-slide-in on every section.

## Accessibility floor
WCAG 2.2 AA. Visible keyboard focus (3 px outline, amber on dark surfaces, charcoal on light). Skip-to-content link. Semantic landmarks (`header`, `main#main`, `footer`, labelled `nav`s). Form errors tied to inputs with `aria-describedby`, `aria-invalid` set only when invalid, first error focused on submit. Breadcrumbs use `aria-current="page"` and an explicit `role="list"`. Colour is never the only signal. Test with keyboard only and with a screen reader on the quote form.

## Tokens (Tailwind v4, as built)
```css
@import "tailwindcss";

@theme {
  --color-montado: #1e3b2f;
  --color-montado-deep: #162c23;
  --color-cork: #b98250;
  --color-cork-light: #e7d3bc;
  --color-charcoal: #232826;
  --color-sheet: #eef0eb;
  --color-paper: #ffffff;
  --color-amber: #f0a500;
  --color-amber-deep: #d99400;
  --color-danger: #b3261e;

  --font-sans: var(--font-archivo), ui-sans-serif, system-ui, sans-serif;

  --radius-control: 2px;

  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);

  --spacing-section: 4rem;
}

@property --header-h {
  syntax: "<length>";
  inherits: false;
  initial-value: 76px;
}
```

`@property --header-h` exists because `height` is not animatable; the registered custom property is, so the scroll-driven header compression costs no layout work beyond the bar itself. Everything else follows the rule that only `transform` and `opacity` animate.

## File map for the design system
| Concern | Location |
|---|---|
| Tokens, base type, component classes, keyframes, reduced-motion block | `src/app/globals.css` |
| Font loading, skip link, chrome order | `src/app/layout.js` |
| Hero, spec table, industry panels, property band, proof band, quote band | `src/components/homepage/` |
| Shared page building blocks | `src/components/page-heading.jsx`, `src/components/contact-actions.jsx`, `src/components/sections/` |
| Photography map (placeholders) | `src/data/media.js` |

## Design QA checklist
- [x] First screen shows what we make, who it is for, certifications and the quote action.
- [x] Amber appears only on actions.
- [x] No text uses Cork on a light background.
- [x] Spec table is pinned and scrolls inside its own container.
- [x] Hero still looks right with animation switched off.
- [x] Every image goes through `next/image` with alt text and reserved space.
- [ ] Every spec table checked by hand at 360 px.
- [ ] Colour pairs re-measured with a contrast tool after any palette change.
- [ ] Keyboard-only and screen-reader passes recorded.
- [ ] No browser, Lighthouse or device testing has been run on this build yet.

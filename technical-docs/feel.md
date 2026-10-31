# feel.md: How the site should feel

## The feeling in one line
**Precise, grounded, quietly satisfying.** The feeling of a part that fits exactly.

Companion files: `BRAND.md` (who), `VOICE.md` (words), `DESIGN.md` (tokens and layout), `TECHSTACK.md` (build). **This file wins on any motion or interaction question.** `DESIGN.md` wins on colour, type scale and layout.

---

## Recommendation

| Option | Trust with B2B buyers | Speed on mid-range Android | Fit with United Rubber Cork | Verdict |
|---|---|---|---|---|
| Minimalist and clean | High | Excellent | Strong: spec-led, honest | Right foundation, but on its own risks feeling flat |
| **Minimalist base with subtle, purposeful motion** | High | Excellent if CSS-only | Strong: adds tactility and polish | **Recommended** |
| Expressive, playful, high-energy | Low for procurement and engineers | Poor (heavy effects) | Weak: reads as a lifestyle or startup brand | Reject for industrial pages |

**Decision:** minimalist and clean, with a small, deliberate amount of motion. Calm and tactile, not playful.

**One exception:** the decorative cork and gifts pages may run slightly warmer and more visual (larger photography, a room-view swatch hover). Still restrained. Those buyers are shopping with their eyes; the gasket buyers are checking a specification.

---

## What the research says
Findings from current web design write-ups (2026). Several come from agencies selling design services, so treat them as direction, not proof.

- **Minimal plus subtle motion is the dominant B2B direction.** Clean layouts combined with small animations and micro-interactions are described as the trend that helps engagement, alongside scannable hierarchy and visible trust cues.
- **Motion has to earn its place.** Guidance converges on one test: what does the visitor understand because of this animation? Decorative motion gets annoying on repeat visits, and excess motion adds cognitive load and slows pages.
- **Cheap motion is fine, heavy motion is not.** Light CSS micro-interactions cost almost nothing. Background video, auto-rotating carousels and heavy parallax are what slow sites down, which matters on low-end Android phones.
- **Native browser features now cover most needs.** Scroll-driven animations and View Transitions run without a JavaScript animation library, but support is uneven across browsers and the sources disagree on Firefox. Build them as progressive enhancement and check current support before relying on them.
- **Manufacturers that look premium do it through restraint:** large, confident imagery, clean layouts, and small animation that directs attention. See References.
- **A claim to ignore:** one agency blog says micro-interactions raise user satisfaction by 18%. It is a single unsourced vendor figure. Do not plan around it.

---

## Emotional journey
| Moment | Feeling we want | What creates it |
|---|---|---|
| Arrive | Calm confidence: "this is a real manufacturer" | Fast load, clear headline, real photography, ISO badge in view |
| Scan | Relief: "I understand this in seconds" | Strong hierarchy, spec rows, plain language |
| Verify | Reassurance: "they can do what I need" | Certifications, sizes and thicknesses, standards, factory location |
| Act | Ease: "that took no effort" | One amber button, short form, WhatsApp option |
| Confirm | Satisfaction: "it fits" | The quote-sent animation, clear next step |
| Return | Recognition | Consistent look, saved datasheets, quick re-quote |

Words to aim for: precise, grounded, warm, well-made, quietly confident.
Words to avoid: flashy, hyped, cold, corporate, preachy, gimmicky.

---

## Where the "dopamine hit" comes from
It should come from competence and completion, not from tricks.

**For customers**
1. **The three-second win.** The first screen answers: what do they make, is it certified, how do I ask. Understanding quickly is the strongest reward on a B2B site.
2. **Speed.** Pages that respond instantly feel good before any animation does.
3. **Tactile feedback.** Buttons that press, links that respond, a form that acknowledges every action.
4. **The "fit" moment.** On the hero, a gasket-shaped piece lifts out of a cork sheet. When a quote request is sent, a matching piece settles back into its cut-out. The motion rhymes, and it says "precise fit" without a word.
5. **A small material truth.** Cork springs back when pressed. A tiny press-and-release response on product photographs shows a real property of the material.

**For the client**
1. **Looking credible the first time they show it to a customer.** Certifications first, their own factory photographs, no typos.
2. **A lead notification worth reading.** Each quote request arrives as a tidy email with product, size, company and one-tap Call and WhatsApp buttons.
3. **Evidence it works.** Optional weekly summary email: quote requests received, top products viewed, WhatsApp taps.
4. **A site that does not break.** Fast, stable and easy to update is its own kind of satisfaction.

**What we refuse to do**
No confetti, countdown timers, fake urgency, pop-ups, auto-opening chat, exit-intent overlays, sound, or any reward that is not tied to a real action. This is a supplier site; manipulation costs trust.

---

## Personality dial
Scale 1 to 10.

| Axis | Setting | Note |
|---|---|---|
| Minimalism | 8 | Few elements, generous space, content-led |
| Motion | 3 | Present but quiet; two signature moments |
| Playfulness | 2 (decorative pages: 4) | Warmth through photography, not cartoons |
| Warmth | 6 | Natural tones, human copy, real people and places |
| Formality | 6 | Professional, not stiff |
| Boldness | 5 | Spent in one place: the die-cut hero |

---

## Motion system

### Principles
1. **Motion explains or confirms.** If it does neither, remove it.
2. **Fast and small.** Most changes finish in under 300 ms and move a few pixels.
3. **Only `transform` and `opacity`.** They run on the compositor. Never animate width, height, top, left or box-shadow.
4. **Everything has a still version.** `prefers-reduced-motion` gets the end state with no movement.
5. **Nothing loops.** No endlessly animating element on the page.

### Tokens
| Use | Duration |
|---|---|
| Press feedback | 100 to 120 ms |
| Hover and focus states | 160 to 200 ms |
| Menus, accordions, panels | 240 to 300 ms |
| Content or page change | 150 to 200 ms |
| Signature moments | 500 to 700 ms |

Easing: standard `cubic-bezier(0.2, 0, 0, 1)`; exit `cubic-bezier(0.4, 0, 1, 1)`. Define as CSS variables and reuse.

### Two signature moments
1. **Die-cut reveal (hero), once per visit.** The cut-out piece lifts about 12 px and fades while the application photograph appears in the hole. About 600 ms. Skip on repeat visits in the same session, and under reduced motion.
2. **Fit (quote sent).** A gasket-shaped piece slides into its outline and settles with a 2 px overshoot. About 500 ms. Followed by plain text confirming what happens next.

### Connection and device rules
- No autoplay hero video. If a process video is added to `/quality`, load it on tap with a poster image.
- Respect `navigator.connection.saveData`: when set, skip the signature animations.
- Test every animation on a throttled mid-range Android profile. If it drops frames, cut it.

---

## Micro-interactions
| Element | Behaviour | Time | Purpose |
|---|---|---|---|
| Primary button (amber) | Hover: slightly darker amber. Press: moves down 1 px and darkens a step. Focus: 3 px visible ring | 120 ms | Feels pressable, confirms the click |
| Secondary button | Hover: fills with Montado Green and text turns white | 160 ms | Clear hierarchy |
| Text links | Underline thickens from 1 px to 2 px; offset eases in | 160 ms | Shows what is clickable |
| Main navigation | Underline slides to the hovered item; current page stays marked | 200 ms | Orientation |
| Sticky header | Shrinks from 72 px to 56 px after 24 px of scroll; a thin border appears | 160 ms | Saves screen space on phones |
| Application panel | Photo scales to 1.02, a gasket outline draws in the corner, label underlines | 300 ms | Invites the click |
| Product row | Hover tints the row Cork Light; download icon nudges 2 px down | 160 ms | Points to the next action |
| Spec table | Sticky header row; hovered row highlighted; no other effects | n/a | Readability |
| Product photograph (sheets, gaskets) | Press compresses slightly, release springs back with a 1% overshoot | 220 ms | Shows cork's recovery. **Ship last; cut it if it feels cute** |
| Text inputs | Border 1 px to 2 px on focus; visible label stays above | 120 ms | Clear focus |
| Validation | Check mark appears after leaving a valid field; errors appear on blur or submit, never on each keystroke; message fades in. **No shaking** | 150 ms | Helpful, not scolding |
| File upload | File chip with name, size and a progress bar; remove button | 200 ms | Confidence the drawing arrived |
| Submit button | Idle, then "Sending quote request" with a small progress indicator, then success. Width stays fixed so nothing jumps | n/a | Clear status |
| Quote sent | The "fit" moment, then next steps and a WhatsApp option | 500 ms | The emotional payoff |
| Sticky mobile bar | Slides up after the first screen; hides while the form is in view | 240 ms | Always one tap from action |
| Accordion (FAQ, specs) | Height eases open; chevron rotates | 240 ms | Shows what changed |

Disabled states: avoid disabling the submit button. Show what is missing instead.

---

## Scroll effects and page transitions

**Scroll: the full allowed list.** Anything not here is not used.
1. Sticky header compression (above).
2. Sticky spec table header.
3. Order-process band (`/` and `/quality`): the active step highlights as it enters view. Use CSS scroll-driven animation inside `@supports`; without support, show all steps equally.
4. Sticky mobile action bar showing and hiding.

**Never:** parallax, scroll-jacking, horizontal scroll sections, pinned storytelling, stat counters that count up, section fade-and-slide reveals, or 3D scroll effects.

**Page transitions**
- Header and footer stay put; the main content cross-fades in about 150 ms.
- Preferred route: View Transitions. Next.js App Router navigation is client-side, so verify the framework's current View Transition support when building. If it is unstable, skip transitions. Instant navigation beats a flaky animation.
- Never block navigation on an animation, and never show a preloader or splash screen.
- Use skeleton placeholders only for content that really loads late (such as the datasheet list), never for static pages.

---

## Typography, spacing, colour mood and hierarchy
Tokens and scales are in `DESIGN.md`. This is how they should feel.

**Typography**
- Expanded, heavy Archivo headlines feel machined and confident. Keep them short (under 12 words).
- Body at 17 px with generous line height reads calmly on a phone.
- Spec tables use the semi-condensed width and tabular figures so numbers align and read like instrument labels.
- No all-caps labels, no single-word colour accents.

**Spacing**
- Let sections breathe: 96 to 128 px between sections on desktop, 64 px on mobile.
- Tight inside components (8 to 16 px), generous between them. Space does the grouping, not boxes.
- Spec tables are the one dense element on the site. Density there signals competence.

**Colour mood**
| Colour | Feeling |
|---|---|
| Montado Green | Grounded, trustworthy, natural without being cute |
| Cork | Warmth, material honesty |
| Sheet Grey | Calm, clean, industrial paper |
| Signal Amber | Readiness. "Go." Used only on actions |
| Charcoal | Seriousness and legibility |

**Visual hierarchy**
- One H1 per page. One amber button per viewport where possible.
- Three levels only: headline, supporting line, detail.
- Size jumps of at least 1.25x between levels so scanning works.
- The eye path on home: headline, die-cut image, certification badges, quote button.
- Photography carries emotion; type carries information; colour marks the single action.

---

## Page-by-page recommendations
| Page | Feel | Specific moves |
|---|---|---|
| Home | Confident first impression | Die-cut hero, badges visible without scrolling, "Request a quote" plus "Send your drawing on WhatsApp", industry panels below |
| Product families | Clear and specific | Spec table first, datasheet rows, glyphs for gasket shapes, quote button repeated per row |
| Industry pages | "They understand my problem" | Opening line names the buyer's problem; application photograph; relevant products and sizes listed beside it |
| Quality | Reassurance | Certificate image, standard, a plain description of how parts are checked **[confirm with United Rubber Cork]**, factory photographs |
| Decorative and gifts | Warmer, more visual | Large imagery, swatch hover that cross-fades to a room view (240 ms), slightly looser spacing |
| Contact and quote | Effortless | Short form first (name, company, email, phone, product); "Add size and drawing" disclosure for the rest; map and phone numbers beside it |
| Quote sent | Satisfaction | The fit moment, then what happens next and when |
| 404 | Helpful | Plain message, Products link, quote button. No jokes needed |
| Owner's email | Useful | Subject "New quote request: {product} from {company}", summary, Call and WhatsApp buttons |
| Buyer's email | Professional | Reference number, copy of the request, what happens next |

**Tailored to this audience**
- **WhatsApp is a primary channel** for Indian B2B buyers. Give it equal weight to the form.
- **Phones first.** Many visitors will arrive on mid-range Android over variable 4G. Every effect must survive that.
- **Local credibility.** Show the Vapi GIDC location, real factory floor and real finished parts. Stock imagery works against trust.
- **Engineers and procurement scan, then verify.** Put numbers and standards where they can be copied quickly.

---

## References
Descriptions come from third-party write-ups, not from a visual review. **Open each site yourself before using it as a reference.** One source is an agency that built two of the sites it lists, so its praise is not neutral.

| Reference | Borrow | Do not borrow |
|---|---|---|
| Hajster (hajster.com), heat pump manufacturer | Premium consumer-tech feel from large imagery, clean layout and small animation | Heavier animation on every section |
| C.H.I. Overhead Doors (chiohd.com) | One-line value proposition with the product as the hero | Consumer lifestyle tone |
| Valpac (valpac.com), materials manufacturer | Clean B2B layout with ISO 9001 and capabilities prominent; closest in subject | Its colour palette |
| SpaceX (spacex.com) | Confidence through restraint: big imagery, few words | Video weight and full-screen scale |
| Linear (linear.app) | The feeling of an interface that responds instantly and reliably | Its dark SaaS look |
| Amorim (amorim.com), cork producer | Material honesty; palette inspired by the cork forest in orange and green, with yellow and grey contrast | Lifestyle and design-collection positioning |

**Design styles to reference**
- Swiss or International grid: precise alignment, hierarchy through scale.
- Material-led tactile minimalism: the cork texture, not decoration, supplies the character.
- Technical documentation clarity: tables, labelled diagrams, plain units.

**Trends to reject for United Rubber Cork:** 3D scroll experiences and glassmorphism (appear in 2026 trend lists). They add weight and style over substance, and do not help a buyer verify a supplier.

---

## Do and don't
| Do | Don't |
|---|---|
| Make the first screen answer what, who, proof and next step | Open with a slider or full-screen video |
| Use motion to confirm, explain or direct | Animate for decoration |
| Keep durations under 300 ms for everything except the two signature moments | Chain long, staged animations |
| Animate only `transform` and `opacity` | Animate layout properties |
| Give every interaction visible feedback | Leave buttons and forms silent |
| Photograph the real factory, parts and sheets | Use stock leaf-and-globe imagery |
| Use amber only for actions | Use amber as decoration |
| Provide a still version for reduced-motion users | Ignore `prefers-reduced-motion` |
| Test on a throttled mid-range phone | Judge feel on a developer laptop |
| Write numbers and units plainly | Count numbers up on scroll |
| Keep a single, memorable hero idea | Add a second and third "wow" element |
| Remove any effect that costs frames | Defend an effect because it looks nice |

---

## How we will know it works
**Tests before launch**
- **Five-second test:** show the home page to five people who do not know United Rubber Cork. Ask what the company makes and what they would do next. Four of five should answer correctly.
- **Squint test:** blur the page. The hero image, headline and quote button should still stand out.
- **Thumb test:** complete a quote request one-handed on a phone.
- **Slow-phone test:** throttled mid-range Android, no jank in any animation.
- **Owner test:** the client shows the site to one of their customers and is happy to.

**Measures after launch** (read alongside the goals in `PLAN.md`)
- Form start-to-submit rate
- WhatsApp and call taps
- INP under 200 ms; LCP under 2.5 s
- Bounce rate and time to first click on the quote button
- Qualitative: ask the first ten customers how they found the site.

---

## Implementation notes (Next.js)
- **CSS first.** Hover, press, focus, accordion and sticky behaviour use plain CSS transitions and Tailwind utilities. No animation library needed for v1.
- If a JavaScript animation library is later needed (for the two signature moments), use Motion, loaded only on the routes that use it, and keep it out of the initial bundle.
- Scroll-driven effects use `animation-timeline` inside `@supports`, with a working static fallback.
- Entry animations use `@starting-style` where supported.
- Define motion tokens as CSS variables in the Tailwind theme, plus a global `@media (prefers-reduced-motion: reduce)` block that removes transforms and keeps only opacity changes.
- Use `will-change` only on elements that animate on load, and remove it afterwards.
- Add a Lighthouse CI check and a Playwright run on a throttled mobile profile to catch layout shift and slow interactions.

---

## Sources
- Clear Digital, 5 B2B Website Design Trends to Watch in 2026: https://www.cleardigital.com/insights/5-b2b-website-design-trends-to-watch
- HTML Burger, Animation in B2B websites guide: https://htmlburger.com/blog/animation-in-b2b-websites-guide/
- Bop Design, B2B micro-interactions: https://www.bopdesign.com/bop-blog/enhance-b2b-website-ux-with-micro-interactions/
- Liven Creative, which design trends belong on your site: https://livencreative.co.uk/dark-mode-typography-and-motion-which-design-trends-belong-on-your-site/
- Kolonell, micro-interactions and web animation performance (2026): https://kolonell.com/en/blog/micro-interactions-web-animations-conversion-2026
- CoderCops, View Transitions and scroll-driven animations in 2026: https://blog.codercops.com/blog/css-view-transitions-scroll-animations-2026
- Azuro Digital, 10 Best Manufacturing Website Designs of 2026: https://azurodigital.com/manufacturing-website-examples/
- SaaS Hero, Linear's motion approach: https://www.saashero.net/?p=13203
- Amorim and Vicara Design, Origem colour inspiration: https://globaldesignnews.com/amorims-origem-and-burel-cork-wall-from-capsule-collection-designed-by-ana-teixeira-features-cork-based-floor-and-wall-coverings-that-add-vibrancy-to-any-interior/

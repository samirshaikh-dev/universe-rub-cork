"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { MEDIA } from "../../data/media";
import { WHATSAPP_LINK } from "../../config/site";
import {
  ShieldCheckIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LayersIcon,
  ZapIcon,
  CarIcon,
  RulerIcon,
} from "../ui/icons";

const HERO_PARTS = [
  {
    id: "transformer",
    title: "Transformer Gasket",
    standard: "IS 4253 Part II · Grade RC-70-C",
    icon: ZapIcon,
    specs: [
      { label: "Thickness", value: "3.0 to 12.0 mm" },
      { label: "Resistance", value: "Transformer Oil" },
      { label: "Recovery", value: "≥ 75% under bolt load" },
      { label: "Form", value: "Jointless continuous frame" },
    ],
    tag: "Power Transformers",
  },
  {
    id: "automotive",
    title: "Automotive Flange Seal",
    standard: "NBR Bonded · Grade RC-80-B",
    icon: CarIcon,
    specs: [
      { label: "Thickness", value: "1.5 to 8.0 mm" },
      { label: "Resistance", value: "Fuel, lube & coolant" },
      { label: "Recovery", value: "≥ 80% rebound" },
      { label: "Form", value: "CNC die-cut to drawing" },
    ],
    tag: "Automotive OEM",
  },
  {
    id: "cork-sheet",
    title: "Natural Cork Sheet",
    standard: "High-Density Agglomerate",
    icon: LayersIcon,
    specs: [
      { label: "Thickness", value: "0.5 to 25.0 mm" },
      { label: "Sizes", value: "Up to 1000 x 1000 mm" },
      { label: "Mesh", value: "0.2/0.5 to 4/8 mm" },
      { label: "Form", value: "Sheets, rolls & slabs" },
    ],
    tag: "Acoustic & Vibration",
  },
];

export default function HomeHero() {
  const [activePart, setActivePart] = useState(0);
  const selected = HERO_PARTS[activePart];

  return (
    <section className="relative overflow-hidden border-b border-montado/10 bg-gradient-to-b from-white via-sheet to-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Subtle Engineering Grid */}
      <div className="engineering-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
          {/* Left Column: Clear Value Proposition */}
          <div className="min-w-0">
            {/* Minimal Trust Pill */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="badge-tag">
                <span className="badge-pulse-dot" />
                <span>Works in GIDC Vapi, Gujarat</span>
              </span>
              <span className="badge-tag badge-tag--cork">
                <ShieldCheckIcon className="size-3.5 text-cork-deep" />
                <span>IS 4253 Part II &amp; ISO 9001:2015</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-hero mb-4 text-balance">
              Precision Cork &amp; Rubberised Cork Gaskets.
              <span className="mt-1 block text-montado font-extrabold">
                Cut to Your Drawing.
              </span>
            </h1>

            {/* Scannable Lede */}
            <p className="lede mb-7 max-w-[52ch] text-charcoal-light">
              Direct manufacturer supplying transformer builders, automotive assemblers,
              and industrial equipment engineers across India. Manufactured jointless with
              high oil resilience and direct factory dispatch.
            </p>

            {/* Focused Action Hierarchy */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
              <Link
                className="btn btn--primary shadow-md min-h-11 px-6 text-sm sm:text-base font-bold"
                href="/contact#request-a-quote"
              >
                <span>Request a Quote</span>
                <ArrowRightIcon className="size-4" />
              </Link>

              <a
                className="btn btn--secondary min-h-11 px-4 text-sm sm:text-base font-semibold"
                href={WHATSAPP_LINK}
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="size-4.5 text-[#25d366]" />
                <span>WhatsApp Drawing Line</span>
              </a>
            </div>

            {/* Quick Micro-Proofs (Scannable Cards) */}
            <div className="grid grid-cols-3 gap-2.5 border-t border-montado/10 pt-5">
              <div className="rounded-lg bg-sheet/80 p-2.5 border border-montado/8">
                <span className="spec-num block text-xs sm:text-sm font-bold text-montado">
                  0.5 – 25 mm
                </span>
                <span className="block text-[0.7rem] text-charcoal-muted mt-0.5">
                  Calibrated Thickness
                </span>
              </div>

              <div className="rounded-lg bg-sheet/80 p-2.5 border border-montado/8">
                <span className="spec-num block text-xs sm:text-sm font-bold text-montado">
                  100% Jointless
                </span>
                <span className="block text-[0.7rem] text-charcoal-muted mt-0.5">
                  No Seam to Leak Through
                </span>
              </div>

              <div className="rounded-lg bg-sheet/80 p-2.5 border border-montado/8">
                <span className="spec-num block text-xs sm:text-sm font-bold text-montado">
                  Factory Direct
                </span>
                <span className="block text-[0.7rem] text-charcoal-muted mt-0.5">
                  GIDC Vapi Works
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Bento Part Showcase */}
          <div className="relative">
            <div className="bento-card overflow-hidden p-5 sm:p-6">
              {/* Card Header & Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-montado/8">
                <div className="flex items-center gap-2">
                  <div className="grid size-7 place-items-center rounded-md bg-montado/10 text-montado">
                    <RulerIcon className="size-3.5" />
                  </div>
                  <div>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-muted">
                      Part Showcase
                    </span>
                    <span className="text-xs font-bold text-montado">
                      Custom Die-Cut Profiles
                    </span>
                  </div>
                </div>

                <span className="badge-tag text-[0.7rem] bg-amber/15 text-amber-deep border-amber/30 self-start sm:self-auto">
                  {selected.tag}
                </span>
              </div>

              {/* Segmented Pill Selector */}
              <div
                aria-label="Part showcase categories"
                className="mt-3.5 flex gap-1 rounded-lg bg-sheet p-1"
                role="tablist"
              >
                {HERO_PARTS.map((part, index) => {
                  const isActive = activePart === index;
                  return (
                    <button
                      aria-controls={`hero-panel-${part.id}`}
                      aria-selected={isActive}
                      className={`flex-1 rounded-md py-1.5 px-2 text-center text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-white text-montado shadow-sm font-bold"
                          : "text-charcoal-muted hover:text-charcoal"
                      }`}
                      id={`hero-tab-${part.id}`}
                      key={part.id}
                      onClick={() => setActivePart(index)}
                      role="tab"
                      type="button"
                    >
                      {part.title.split(" ")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Showcase Panel */}
              <div
                aria-labelledby={`hero-tab-${selected.id}`}
                id={`hero-panel-${selected.id}`}
                role="tabpanel"
              >
                {/* Showcase Image */}
                <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-lg border border-montado/12 bg-sheet">
                  <Image
                    alt={MEDIA.gaskets.alt}
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    fill
                    priority
                    sizes="(min-width: 1024px) 460px, 100vw"
                    src={
                      activePart === 0
                        ? MEDIA.gaskets.src
                        : activePart === 1
                        ? MEDIA.corkSheet.src
                        : MEDIA.sheetSamples.src
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <p className="m-0 text-xs sm:text-sm font-bold drop-shadow-sm">
                        {selected.title}
                      </p>
                      <p className="m-0 text-[0.72rem] text-cork-light drop-shadow-sm">
                        {selected.standard}
                      </p>
                    </div>
                    <span className="badge-tag badge-tag--dark text-[0.68rem]">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Specification Grid (Clean 2-Col Data Chips) */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {selected.specs.map((spec) => (
                    <div
                      className="rounded-md border border-montado/8 bg-sheet/60 p-2"
                      key={spec.label}
                    >
                      <span className="block text-[0.68rem] font-medium text-charcoal-muted">
                        {spec.label}
                      </span>
                      <span className="spec-num text-xs font-bold text-montado">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-montado/8 text-xs">
                <span className="text-charcoal-muted">
                  Have a custom CAD drawing?
                </span>
                <Link
                  className="btn btn--primary min-h-8 px-3 text-xs font-bold shrink-0"
                  href="/contact#request-a-quote"
                >
                  <span>Get Quote</span>
                  <ArrowRightIcon className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

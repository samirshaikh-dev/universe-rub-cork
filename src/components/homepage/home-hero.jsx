"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { MEDIA } from "../../data/media";
import { WHATSAPP_LINK } from "../../config/site";
import {
  ShieldCheckIcon,
  FactoryIcon,
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
    subtitle: "IS 4253 Part II • Grade RC-70-C",
    icon: ZapIcon,
    specs: [
      { label: "Thickness", value: "3.0 to 12.0 mm" },
      { label: "Resistance", value: "Mineral & Silicone Oils" },
      { label: "Recovery", value: "> 75% under flange load" },
      { label: "Form", value: "Jointless continuous frame" },
    ],
    tag: "Power Transformers",
  },
  {
    id: "automotive",
    title: "Automotive Flange Seal",
    subtitle: "NBR Bonded • Grade RC-80-B",
    icon: CarIcon,
    specs: [
      { label: "Thickness", value: "1.5 to 8.0 mm" },
      { label: "Application", value: "Oil pans, valve covers, gearcases" },
      { label: "Fluid Seal", value: "Engine lube, fuel & coolant" },
      { label: "Manufacturing", value: "CNC die-cut to drawing" },
    ],
    tag: "Automotive OEM",
  },
  {
    id: "cork-sheet",
    title: "Natural Cork & Anti-Vibration",
    subtitle: "High Density Agglomerate",
    icon: LayersIcon,
    specs: [
      { label: "Sizes", value: "915 x 610 mm & 1000 x 1000 mm" },
      { label: "Granule Mesh", value: "0.2/0.5 mm to 4/8 mm" },
      { label: "Properties", value: "Acoustic damping & thermal barrier" },
      { label: "Standard", value: "Pure natural cork binder" },
    ],
    tag: "Vibration & Acoustic",
  },
];

export default function HomeHero() {
  const [activePart, setActivePart] = useState(0);
  const selected = HERO_PARTS[activePart];
  const IconComponent = selected.icon;

  return (
    <section className="relative overflow-hidden border-b border-montado/10 bg-gradient-to-b from-white via-sheet to-white pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-18 lg:pb-28">
      {/* Background Engineering Grid Texture */}
      <div className="engineering-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
          {/* Left Column: Core Value Proposition */}
          <div className="min-w-0">
            {/* Top Status Pill */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="badge-tag">
                <span className="badge-pulse-dot" />
                <span>Works in GIDC Vapi, Gujarat</span>
              </span>
              <span className="badge-tag badge-tag--cork">
                <ShieldCheckIcon className="size-3.5 text-cork-deep" />
                <span>IS 4253 Part II & ISO 9001:2015</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display-hero mb-6 text-balance">
              Precision Cork &amp; Rubberised Cork Gaskets.
              <span className="mt-2 block text-montado font-extrabold">
                Cut to Your Drawing.
              </span>
            </h1>

            {/* Subhead / Value Prop */}
            <p className="lede mb-8 max-w-[58ch] text-charcoal-light">
              Direct manufacturer supplying transformer builders, automotive component
              assemblers, and flange engineers across India. Made jointless in Vapi, Gujarat
              with high oil resilience and rapid sample turnaround.
            </p>

            {/* High-Conversion Dual CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 mb-10">
              <Link
                className="btn btn--primary shadow-md min-h-12 px-6 text-base font-bold"
                href="/contact#request-a-quote"
              >
                <span>Send Drawing for Quote</span>
                <ArrowRightIcon className="size-4" />
              </Link>

              <a
                className="btn btn--whatsapp min-h-12 px-5 text-base font-semibold"
                href={WHATSAPP_LINK}
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="size-4.5" />
                <span>Quick WhatsApp Line</span>
              </a>
            </div>

            {/* Trust Checklist */}
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 border-t border-montado/12 pt-6 text-xs sm:text-sm font-medium text-charcoal-light">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 text-montado shrink-0" />
                <span>Jointless die-cut frames</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 text-montado shrink-0" />
                <span>0.5 mm to 25 mm thickness</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 text-montado shrink-0" />
                <span>Custom CNC slitting & punching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="size-4 text-montado shrink-0" />
                <span>Direct factory pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Engineering Part Inspector */}
          <div className="relative">
            {/* Visual Card Wrapper */}
            <div className="card-surface overflow-hidden border border-montado/15 bg-white p-5 sm:p-7 shadow-xl">
              {/* Card Header with Inspector Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-montado/10">
                <div className="flex items-center gap-2">
                  <div className="grid size-7 place-items-center rounded bg-montado/10 text-montado">
                    <RulerIcon className="size-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                      Part Inspector
                    </span>
                    <span className="text-sm font-bold text-montado">
                      Custom Die-Cut Specification
                    </span>
                  </div>
                </div>

                <span className="badge-tag text-[0.7rem] bg-amber/15 text-amber-deep border-amber/30">
                  {selected.tag}
                </span>
              </div>

              {/* Part Selector Pills */}
              <div className="mt-4 grid grid-cols-3 gap-1.5 rounded-lg bg-sheet p-1">
                {HERO_PARTS.map((part, index) => {
                  const isActive = activePart === index;
                  return (
                    <button
                      className={`rounded-md py-2 px-2 text-center text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-white text-montado shadow-sm font-bold"
                          : "text-charcoal-muted hover:text-charcoal"
                      }`}
                      key={part.id}
                      onClick={() => setActivePart(index)}
                      type="button"
                    >
                      {part.title.split(" ")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Visual Showcase Panel */}
              <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-lg border border-montado/15 bg-sheet">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                  <div>
                    <p className="m-0 text-sm font-bold drop-shadow-sm">
                      {selected.title}
                    </p>
                    <p className="m-0 text-xs text-cork-light drop-shadow-sm">
                      {selected.subtitle}
                    </p>
                  </div>
                  <span className="badge-tag badge-tag--dark text-[0.7rem]">
                    Verified Grade
                  </span>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {selected.specs.map((spec) => (
                  <div
                    className="rounded-md border border-montado/8 bg-sheet/80 p-2.5"
                    key={spec.label}
                  >
                    <span className="block text-[0.72rem] font-semibold text-charcoal-muted">
                      {spec.label}
                    </span>
                    <span className="spec-num text-xs font-bold text-montado">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-montado/10">
                <span className="text-xs text-charcoal-muted">
                  Need custom dimensions or drawing review?
                </span>
                <Link
                  className="btn btn--primary min-h-9 px-3.5 text-xs font-bold shrink-0"
                  href="/contact#request-a-quote"
                >
                  <span>Request Quote</span>
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

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ZapIcon,
  CarIcon,
  BuildingIcon,
  GaugeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "../ui/icons";

const APPLICATIONS = [
  {
    id: "transformer",
    title: "Power Transformers",
    category: "Electrical Equipment",
    icon: ZapIcon,
    recommendedGrade: "Grade RC-70-C / RC-80-B",
    standard: "IS 4253 Part II",
    fluidResistance: "Mineral & Silicone Oils",
    temperatureRange: "-30°C to +125°C",
    compressibility: "30% – 45% (ASTM F36)",
    recovery: "≥ 75% Rebound",
    keyAdvantage: "100% Jointless rectangular or circular frame die-cutting.",
    productSlug: "rubberised-cork",
  },
  {
    id: "automotive",
    title: "Automotive Flanges",
    category: "Powertrain & Sumps",
    icon: CarIcon,
    recommendedGrade: "Grade RC-80-B (NBR Bonded)",
    standard: "IS 4253 / OEM Spec",
    fluidResistance: "Engine Lubes & Coolant",
    temperatureRange: "-40°C to +120°C",
    compressibility: "25% – 35% (ASTM F36)",
    recovery: "≥ 80% Rebound",
    keyAdvantage: "High shear strength prevents blowout under engine vibration.",
    productSlug: "rubberised-cork",
  },
  {
    id: "flange",
    title: "Industrial Pipe Flanges",
    category: "Pumps & Process Lines",
    icon: GaugeIcon,
    recommendedGrade: "Grade RC-70-C / High Density",
    standard: "IS 4253 Part II",
    fluidResistance: "Water & Industrial Solvents",
    temperatureRange: "-20°C to +110°C",
    compressibility: "35% – 50%",
    recovery: "≥ 70% Rebound",
    keyAdvantage: "Low bolt torque requirement protects thin stamped sheet metal.",
    productSlug: "rubberised-cork",
  },
  {
    id: "vibration",
    title: "Acoustic & Vibration",
    category: "HVAC & Heavy Machinery",
    icon: BuildingIcon,
    recommendedGrade: "High Density Cork Slab",
    standard: "DIN / ASTM Compliant",
    fluidResistance: "Moisture & Ozone Aging",
    temperatureRange: "-50°C to +100°C",
    compressibility: "Controlled Deflection",
    recovery: "Elastic Cushion",
    keyAdvantage: "Closed cellular matrix isolates structural harmonics.",
    productSlug: "cork",
  },
];

export default function InteractiveGradeFinder() {
  const [activeTab, setActiveTab] = useState(0);
  const current = APPLICATIONS[activeTab];
  const IconComponent = current.icon;

  return (
    <section className="section bg-sheet border-b border-montado/10">
      <div className="shell">
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-montado/10 pb-5">
          <div className="max-w-[580px]">
            <span className="badge-tag mb-2">
              <ShieldCheckIcon className="size-3.5 text-montado" />
              <span>Material Specifier</span>
            </span>
            <h2 className="display-lg m-0 text-balance">
              Find the Optimal Grade for Your Flange
            </h2>
            <p className="mt-2 mb-0 text-xs sm:text-sm text-charcoal-light">
              Select your application sector to review verified elastomer formulations,
              fluid resistance ratings, and compression tolerances.
            </p>
          </div>

          <Link
            className="btn btn--secondary min-h-9 px-4 text-xs font-semibold self-start"
            href="/contact#request-a-quote"
          >
            <span>Custom Formulation</span>
            <ArrowRightIcon className="size-3" />
          </Link>
        </div>

        {/* Tab Buttons (Grid of Minimal Cards) */}
        <div
          aria-label="Application sectors"
          className="grid grid-cols-2 gap-2 sm:grid-cols-4 mb-5"
          role="tablist"
        >
          {APPLICATIONS.map((app, index) => {
            const isActive = activeTab === index;
            const AppIcon = app.icon;
            return (
              <button
                aria-controls={`spec-panel-${app.id}`}
                aria-selected={isActive}
                className={`flex items-center gap-2.5 rounded-lg border p-3 text-left transition-all cursor-pointer ${
                  isActive
                    ? "border-montado bg-white shadow-sm text-montado font-bold"
                    : "border-montado/10 bg-white/50 text-charcoal-light hover:bg-white hover:border-montado/20"
                }`}
                id={`spec-tab-${app.id}`}
                key={app.id}
                onClick={() => setActiveTab(index)}
                role="tab"
                type="button"
              >
                <div
                  className={`grid size-7 shrink-0 place-items-center rounded-md ${
                    isActive ? "bg-montado text-white" : "bg-sheet text-charcoal-muted"
                  }`}
                >
                  <AppIcon className="size-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[0.65rem] uppercase tracking-wider text-charcoal-muted truncate">
                    {app.category}
                  </span>
                  <span className="block text-xs font-bold truncate">
                    {app.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Specification Bento Card */}
        <div
          aria-labelledby={`spec-tab-${current.id}`}
          className="bento-card overflow-hidden p-5 sm:p-7 animate-fade-in"
          id={`spec-panel-${current.id}`}
          key={current.id}
          role="tabpanel"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 items-start">
            {/* Left: Key Identification */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="badge-tag">
                  <IconComponent className="size-3 text-montado" />
                  <span>{current.category}</span>
                </span>
                <span className="badge-tag badge-tag--cork">
                  <span>{current.standard}</span>
                </span>
              </div>

              <h3 className="display-sm m-0 text-charcoal mb-2">
                {current.title} Specification
              </h3>

              <div className="rounded-lg border border-montado/8 bg-sheet/70 p-3 mb-5">
                <div className="flex items-center gap-1.5 text-montado font-bold text-xs mb-1">
                  <CheckCircleIcon className="size-3.5" />
                  <span>Engineering Property</span>
                </div>
                <p className="m-0 text-xs text-charcoal-light">
                  {current.keyAdvantage}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  className="btn btn--primary min-h-9 px-4 text-xs font-bold"
                  href={`/contact#request-a-quote`}
                >
                  <span>Inquire for {current.recommendedGrade.split("/")[0].trim()}</span>
                  <ArrowRightIcon className="size-3" />
                </Link>

                <Link
                  className="btn btn--secondary min-h-9 px-3.5 text-xs font-semibold"
                  href={`/products/${current.productSlug}`}
                >
                  <span>View Product Catalog</span>
                </Link>
              </div>
            </div>

            {/* Right: Clean Metric Matrix */}
            <div className="rounded-lg border border-montado/10 bg-sheet/60 p-4">
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-charcoal-muted block mb-3 pb-1.5 border-b border-montado/8">
                Technical Benchmarks
              </span>

              <div className="grid gap-2 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-montado/6">
                  <span className="text-charcoal-muted font-medium">Recommended Grade</span>
                  <span className="font-bold text-montado">{current.recommendedGrade}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-montado/6">
                  <span className="text-charcoal-muted font-medium">Fluid Compatibility</span>
                  <span className="font-semibold text-charcoal">{current.fluidResistance}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-montado/6">
                  <span className="text-charcoal-muted font-medium">Temperature Range</span>
                  <span className="spec-num font-bold text-montado">{current.temperatureRange}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-montado/6">
                  <span className="text-charcoal-muted font-medium">Compressibility</span>
                  <span className="spec-num font-semibold text-charcoal">{current.compressibility}</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-charcoal-muted font-medium">Elastic Recovery</span>
                  <span className="spec-num font-bold text-[#16a34a]">{current.recovery}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

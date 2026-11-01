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
  FlameIcon,
} from "../ui/icons";

const APPLICATIONS = [
  {
    id: "transformer",
    title: "Power & Distribution Transformers",
    category: "Electrical Equipment",
    icon: ZapIcon,
    recommendedGrade: "Grade RC-70-C / RC-80-B",
    standard: "IS 4253 Part II",
    fluidResistance: "Mineral & Silicone Transformer Oils",
    temperatureRange: "-30°C to +125°C",
    compressibility: "30% – 45% (ASTM F36)",
    recovery: "≥ 75% under bolt load",
    summary:
      "Engineered specifically for transformer conservator tanks, bushings, radiator headers, and cable boxes where dielectric oil impermeability and zero seam leaks are mandatory.",
    keyAdvantage: "100% Jointless one-piece rectangular or circular frame die-cutting.",
    productSlug: "rubberised-cork",
  },
  {
    id: "automotive",
    title: "Automotive Engines & Transmissions",
    category: "Vehicles & Powertrain",
    icon: CarIcon,
    recommendedGrade: "Grade RC-80-B (NBR Bonded)",
    standard: "IS 4253 / OEM Spec",
    fluidResistance: "Engine Lubes, Hydrocarbon Fuel, Coolant",
    temperatureRange: "-40°C to +120°C",
    compressibility: "25% – 35% (ASTM F36)",
    recovery: "≥ 80%",
    summary:
      "Formulated for timing gear covers, oil sumps, rocker valve covers, and fuel sender flanges where dynamic thermal cycles and oil splash demand continuous sealing resilience.",
    keyAdvantage: "High shear strength prevents gasket blowout under engine vibration.",
    productSlug: "rubberised-cork",
  },
  {
    id: "flange",
    title: "Industrial Pipe Flanges & Pumps",
    category: "Process & Fluid Handling",
    icon: GaugeIcon,
    recommendedGrade: "Grade RC-70-C / High Density",
    standard: "IS 4253 Part II / ANSI Flanges",
    fluidResistance: "Water, Light Oils, Industrial Solvents",
    temperatureRange: "-20°C to +110°C",
    compressibility: "35% – 50%",
    recovery: "≥ 70%",
    summary:
      "Conforms readily to uneven, pitted, or lightweight stamped sheet metal flanges without requiring excessive bolt torque that would warp the mating surfaces.",
    keyAdvantage: "Low bolt torque requirement protects thin sheet metal assemblies.",
    productSlug: "rubberised-cork",
  },
  {
    id: "vibration",
    title: "HVAC, Machinery & Foundation Isolation",
    category: "Acoustic & Vibration",
    icon: BuildingIcon,
    recommendedGrade: "High Density Pure Cork Slab",
    standard: "DIN / ASTM Specifications",
    fluidResistance: "Moisture, Atmospheric Aging, Ozone",
    temperatureRange: "-50°C to +100°C",
    compressibility: "Controlled deflection",
    recovery: "Elastic rebound",
    summary:
      "Heavy-duty anti-vibration slabs and Battricork dampeners placed under chillers, heavy compressors, presses, and building foundations to isolate structural harmonics.",
    keyAdvantage: "Natural closed-cell cellular cushion prevents sound transmission.",
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
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-montado/12 pb-6">
          <div className="max-w-[620px]">
            <span className="badge-tag mb-2.5">
              <ShieldCheckIcon className="size-3.5 text-montado" />
              <span>Interactive Material Specifier</span>
            </span>
            <h2 className="display-lg m-0 text-balance">
              Find the Optimal Material Grade for Your Application
            </h2>
            <p className="mt-3 mb-0 text-sm sm:text-base text-charcoal-light">
              Select your operating sector below to view recommended elastomer grades,
              fluid resistance benchmarks, and certified test parameters.
            </p>
          </div>

          <Link
            className="btn btn--primary min-h-10 text-sm self-start"
            href="/contact#request-a-quote"
          >
            <span>Request Custom Formulation</span>
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 mb-6">
          {APPLICATIONS.map((app, index) => {
            const isActive = activeTab === index;
            const AppIcon = app.icon;
            return (
              <button
                className={`flex items-center gap-2.5 rounded-xl border p-3.5 text-left transition-all ${
                  isActive
                    ? "border-montado bg-white shadow-md text-montado font-bold"
                    : "border-montado/12 bg-white/60 text-charcoal-light hover:bg-white hover:border-montado/30"
                }`}
                key={app.id}
                onClick={() => setActiveTab(index)}
                type="button"
              >
                <div
                  className={`grid size-8 shrink-0 place-items-center rounded-lg ${
                    isActive ? "bg-montado text-white" : "bg-sheet text-charcoal-muted"
                  }`}
                >
                  <AppIcon className="size-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[0.7rem] uppercase tracking-wider text-charcoal-muted line-clamp-1">
                    {app.category}
                  </span>
                  <span className="block text-xs font-bold truncate">
                    {app.title.split("&")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Grade Specification Card */}
        <div className="card-surface rounded-2xl border border-montado/15 bg-white p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
            {/* Left Column: Grade Details & Description */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="badge-tag">
                  <IconComponent className="size-3.5 text-montado" />
                  <span>{current.category}</span>
                </span>
                <span className="badge-tag badge-tag--cork">
                  <span>{current.standard}</span>
                </span>
              </div>

              <h3 className="display-md m-0 mb-3 text-charcoal">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-charcoal-light leading-relaxed mb-6">
                {current.summary}
              </p>

              <div className="rounded-xl border border-montado/10 bg-sheet p-4 mb-6">
                <div className="flex items-center gap-2 text-montado font-bold text-xs uppercase tracking-wider mb-1">
                  <CheckCircleIcon className="size-4" />
                  <span>Engineering Highlight</span>
                </div>
                <p className="m-0 text-xs sm:text-sm text-charcoal-light font-medium">
                  {current.keyAdvantage}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  className="btn btn--primary text-sm font-semibold"
                  href={`/contact#request-a-quote`}
                >
                  <span>Inquire for {current.recommendedGrade.split("/")[0]}</span>
                  <ArrowRightIcon className="size-4" />
                </Link>

                <Link
                  className="btn btn--secondary text-sm font-semibold"
                  href={`/products/${current.productSlug}`}
                >
                  <span>View Product Catalog</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Technical Benchmark Grid */}
            <div className="rounded-xl border border-montado/12 bg-sheet/70 p-5 sm:p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted block mb-4 pb-2 border-b border-montado/10">
                Recommended Grade Benchmarks
              </span>

              <div className="grid gap-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-montado/8">
                  <span className="text-xs font-semibold text-charcoal-muted">
                    Material Formulation
                  </span>
                  <span className="text-sm font-bold text-montado">
                    {current.recommendedGrade}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-montado/8">
                  <span className="text-xs font-semibold text-charcoal-muted">
                    Fluid Compatibility
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-charcoal text-right">
                    {current.fluidResistance}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-montado/8">
                  <span className="text-xs font-semibold text-charcoal-muted">
                    Temperature Limit
                  </span>
                  <span className="spec-num text-xs sm:text-sm font-bold text-montado">
                    {current.temperatureRange}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-montado/8">
                  <span className="text-xs font-semibold text-charcoal-muted">
                    Compressibility
                  </span>
                  <span className="spec-num text-xs sm:text-sm font-bold text-charcoal">
                    {current.compressibility}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-xs font-semibold text-charcoal-muted">
                    Elastic Recovery
                  </span>
                  <span className="spec-num text-xs sm:text-sm font-bold text-[#16a34a]">
                    {current.recovery}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-montado/10 text-center">
                <span className="text-[0.72rem] text-charcoal-muted">
                  Batch test inspection reports conforming to IS 4253 supplied with factory orders.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


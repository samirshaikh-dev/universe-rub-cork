import Image from "next/image";
import Link from "next/link";

import { MEDIA } from "../../data/media";
import {
  ZapIcon,
  CarIcon,
  BuildingIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  FileTextIcon,
} from "../ui/icons";

const INDUSTRY_CONFIG = {
  transformers: {
    icon: ZapIcon,
    tag: "High Dielectric Sealing",
    badge: "Grade RC-70-C / RC-80-B",
    media: MEDIA.gaskets,
    keyFeatures: [
      "Transformer mineral oil & silicone fluid resistant",
      "Jointless continuous frames prevent seam leakages",
      "Low creep relaxation under constant bolt load",
    ],
  },
  automotive: {
    icon: CarIcon,
    tag: "OEM & Component Builders",
    badge: "NBR Bonded Composite",
    media: MEDIA.corkSheet,
    keyFeatures: [
      "Engine oil pans, rocker covers & timing gears",
      "High resilience against hydrocarbon fuels & lubes",
      "Precision cut to CAD drawing or master sample",
    ],
  },
  construction: {
    icon: BuildingIcon,
    tag: "Vibration & Acoustic Dampening",
    badge: "High-Density Natural Cork",
    media: MEDIA.sheetSamples,
    keyFeatures: [
      "Foundation isolation & machinery anti-vibration slabs",
      "Thermal insulation barriers & acoustic floor underlay",
      "Natural granules in 5 calibrated mesh sizes",
    ],
  },
};

export default function IndustryPanels({ industries }) {
  return (
    <section className="section bg-sheet border-b border-montado/10">
      <div className="shell">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-montado/12 pb-6">
          <div className="max-w-[620px]">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="badge-tag">
                <span>Sector Applications</span>
              </span>
              <span className="badge-tag badge-tag--cork">
                <span>Specialized Formulations</span>
              </span>
            </div>
            <h2 className="display-lg m-0 text-balance">
              Engineered For Demanding Industrial Applications
            </h2>
            <p className="mt-3 mb-0 text-sm sm:text-base text-charcoal-light">
              Different operating environments require specific elastomer binders,
              cork granule grades, and bolt torque allowances. Explore how United Rubber Cork
              delivers verified sealing performance across core sectors.
            </p>
          </div>

          <Link className="btn btn--secondary min-h-10 text-sm self-start" href="/industries">
            <span>Explore All Industries</span>
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((industry) => {
            const config = INDUSTRY_CONFIG[industry.slug] || INDUSTRY_CONFIG.transformers;
            const Icon = config.icon;
            const media = config.media;

            return (
              <div
                className="card-surface flex flex-col overflow-hidden bg-white"
                key={industry.slug}
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-sheet border-b border-montado/10">
                  <Image
                    alt={media.alt}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={media.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="badge-tag badge-tag--dark text-xs backdrop-blur-md">
                      <Icon className="size-3.5 text-cork-gold" />
                      <span>{config.tag}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold text-cork-light">
                      {config.badge}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="display-sm m-0 mb-2">
                    <Link
                      className="text-charcoal no-underline hover:text-montado transition-colors"
                      href={`/industries/${industry.slug}`}
                    >
                      {industry.name}
                    </Link>
                  </h3>

                  <p className="mb-4 text-xs sm:text-sm text-charcoal-light leading-relaxed">
                    {industry.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="m-0 mb-6 grid gap-2 p-0 text-xs text-charcoal-muted">
                    {config.keyFeatures.map((feature, i) => (
                      <li className="flex items-start gap-2 list-none" key={i}>
                        <span className="text-montado font-bold mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer Action */}
                  <div className="mt-auto pt-4 border-t border-montado/10 flex items-center justify-between">
                    <Link
                      className="btn--plain text-xs font-bold text-montado"
                      href={`/industries/${industry.slug}`}
                    >
                      <span>Application Details</span>
                      <ArrowRightIcon className="size-3.5" />
                    </Link>

                    <Link
                      className="text-xs font-semibold text-cork hover:underline"
                      href={`/contact#request-a-quote`}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Drawing Notice Banner */}
        <div className="mt-8 rounded-xl border border-montado/15 bg-gradient-to-r from-montado/5 via-cork/10 to-montado/5 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-montado text-white">
              <FileTextIcon className="size-5 text-cork-gold" />
            </div>
            <div>
              <h4 className="m-0 text-base font-bold text-charcoal">
                Need Gaskets or Cut Sheets to a Custom Engineering Drawing?
              </h4>
              <p className="mt-1 mb-0 text-xs sm:text-sm text-charcoal-light max-w-[60ch]">
                Send your CAD (.dwg, .dxf) or PDF drawings directly via WhatsApp or our online
                quote builder. Our toolroom will review your dimensions and provide a prompt quotation.
              </p>
            </div>
          </div>

          <Link
            className="btn btn--primary min-h-11 px-5 text-sm shrink-0 font-semibold"
            href="/contact#request-a-quote"
          >
            <span>Submit Drawing Specification</span>
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import { MEDIA } from "../../data/media";
import {
  ZapIcon,
  CarIcon,
  BuildingIcon,
  ArrowRightIcon,
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
    tag: "OEM & Component Assemblies",
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
      "Foundation isolation & anti-vibration slabs",
      "Thermal insulation barriers & floor underlay",
      "Calibrated granules in 5 mesh sizes",
    ],
  },
};

export default function IndustryPanels({ industries }) {
  return (
    <section className="section bg-sheet border-b border-montado/10">
      <div className="shell">
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-montado/10 pb-5">
          <div className="max-w-[580px]">
            <div className="mb-2 flex items-center gap-2">
              <span className="badge-tag">
                <span>Sector Applications</span>
              </span>
              <span className="badge-tag badge-tag--cork">
                <span>Specialized Formulations</span>
              </span>
            </div>
            <h2 className="display-lg m-0 text-balance">
              Engineered For Industrial Applications
            </h2>
            <p className="mt-2 mb-0 text-xs sm:text-sm text-charcoal-light">
              Explore how United Rubber Cork delivers verified sealing performance across
              transformers, automotive components, and structural insulation.
            </p>
          </div>

          <Link className="btn btn--secondary min-h-9 px-3.5 text-xs font-semibold self-start" href="/industries">
            <span>Explore All Industries</span>
            <ArrowRightIcon className="size-3" />
          </Link>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {industries.map((industry) => {
            const config = INDUSTRY_CONFIG[industry.slug] || INDUSTRY_CONFIG.transformers;
            const Icon = config.icon;
            const media = config.media;

            return (
              <div
                className="bento-card flex flex-col overflow-hidden"
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
                  <div className="absolute top-2.5 left-2.5">
                    <span className="badge-tag badge-tag--dark text-[0.68rem] backdrop-blur-md">
                      <Icon className="size-3 text-cork-gold" />
                      <span>{config.tag}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <span className="text-[0.72rem] font-semibold text-cork-light">
                      {config.badge}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="display-sm m-0 mb-1.5 text-base">
                    <Link
                      className="text-charcoal no-underline hover:text-montado transition-colors"
                      href={`/industries/${industry.slug}`}
                    >
                      {industry.name}
                    </Link>
                  </h3>

                  <p className="mb-3 text-xs text-charcoal-light leading-relaxed">
                    {industry.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="m-0 mb-4 grid gap-1.5 p-0 text-[0.75rem] text-charcoal-muted">
                    {config.keyFeatures.map((feature, i) => (
                      <li className="flex items-start gap-1.5 list-none" key={i}>
                        <span className="text-montado font-bold mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer Action */}
                  <div className="mt-auto pt-3 border-t border-montado/8 flex items-center justify-between text-xs">
                    <Link
                      className="btn--plain text-xs font-bold text-montado"
                      href={`/industries/${industry.slug}`}
                    >
                      <span>Explore</span>
                      <ArrowRightIcon className="size-3" />
                    </Link>

                    <Link
                      className="font-semibold text-cork-deep hover:underline"
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

        {/* Compact Drawing Notice Banner */}
        <div className="mt-6 rounded-lg border border-montado/12 bg-white p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-montado text-white">
              <FileTextIcon className="size-4 text-cork-gold" />
            </div>
            <div>
              <h4 className="m-0 text-sm font-bold text-charcoal">
                Have a Custom CAD Drawing or Sample?
              </h4>
              <p className="mt-0.5 mb-0 text-xs text-charcoal-light">
                Send your .dwg, .dxf or PDF drawing via WhatsApp or our quick form for direct factory pricing.
              </p>
            </div>
          </div>

          <Link
            className="btn btn--primary min-h-9 px-4 text-xs shrink-0 font-bold self-start md:self-auto"
            href="/contact#request-a-quote"
          >
            <span>Submit Drawing</span>
            <ArrowRightIcon className="size-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}

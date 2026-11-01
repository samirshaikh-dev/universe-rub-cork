import Image from "next/image";
import Link from "next/link";

import { COMPANY_ADDRESS } from "../../config/site";
import { MEDIA } from "../../data/media";
import {
  FactoryIcon,
  ShieldCheckIcon,
  RulerIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LayersIcon,
} from "../ui/icons";

export default function AboutContent() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
      {/* Left Column: Factory Heritage & Engineering */}
      <div className="max-w-[700px]">
        <div className="mb-6">
          <span className="badge-tag mb-2.5">
            <FactoryIcon className="size-3.5 text-montado" />
            <span>Manufacturing Works • Vapi, Gujarat</span>
          </span>
          <h2 className="display-md m-0 text-charcoal">
            Industrial Sealing &amp; Engineered Cork Solutions
          </h2>
        </div>

        <div className="prose text-sm sm:text-base leading-relaxed text-charcoal-light space-y-4">
          <p>
            United Rubber Cork is an established manufacturer of cork and rubberised cork
            products based in the industrial heart of GIDC Vapi, Gujarat. We engineer
            sealing materials for critical applications across power distribution, automotive,
            and heavy infrastructure.
          </p>
          <p>
            Our core manufacturing range includes high-resilience rubberised cork sheets,
            continuous jointless gasket frames, precision-slit strips, washers, natural cork
            granules across 5 mesh sizes, vibration isolation slabs, and decorative cork tiles.
          </p>
          <p>
            Components are engineered to customer technical drawings, physical sample components,
            or to the Indian national standard <strong>IS 4253 Part II</strong>. Our in-house
            die-cutting and slitting capabilities allow us to support both high-volume OEM
            deliveries and custom low-batch prototype runs.
          </p>
        </div>

        {/* Fact Matrix */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="bento-card p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-1">
              <MapPinIcon className="size-3.5 text-montado" />
              <span>Manufacturing Works</span>
            </div>
            <p className="m-0 text-sm font-bold text-charcoal">
              GIDC 2nd Phase, {COMPANY_ADDRESS.addressLocality}, {COMPANY_ADDRESS.addressRegion}
            </p>
          </div>

          <div className="bento-card p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-1">
              <ShieldCheckIcon className="size-3.5 text-montado" />
              <span>Quality Assurance</span>
            </div>
            <p className="m-0 text-sm font-bold text-charcoal">
              ISO 9001:2015 System Listed
            </p>
          </div>

          <div className="bento-card p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-1">
              <ShieldCheckIcon className="size-3.5 text-montado" />
              <span>National Standard</span>
            </div>
            <p className="m-0 text-sm font-bold text-charcoal">
              IS 4253 Part II Certified Basis
            </p>
          </div>

          <div className="bento-card p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-1">
              <RulerIcon className="size-3.5 text-montado" />
              <span>Production Capability</span>
            </div>
            <p className="m-0 text-sm font-bold text-charcoal">
              Custom Die-Cut, Slit &amp; Molded
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link className="btn btn--primary" href="/contact#request-a-quote">
            <span>Discuss Custom Parts with Our Works</span>
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>

      {/* Right Column: Visual Showcase */}
      <div className="self-start lg:sticky lg:top-24">
        <div className="bento-card overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden bg-sheet">
            <Image
              alt={MEDIA.sheetSamples.alt}
              className="object-cover transition-transform duration-500 hover:scale-105"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              src={MEDIA.sheetSamples.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="spec-num text-xs font-semibold text-cork-light block">
                Factory Samples
              </span>
              <span className="text-sm font-bold text-white block">
                {MEDIA.sheetSamples.alt}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-base font-bold text-charcoal mb-2">
              Toolroom &amp; Sample Inspection
            </h3>
            <p className="m-0 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              We welcome dimensional drawings (.dwg, .dxf, .pdf) or physical samples for technical
              evaluation. Prototype samples can be prepared prior to bulk dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

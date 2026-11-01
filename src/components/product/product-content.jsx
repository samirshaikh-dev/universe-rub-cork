import Image from "next/image";
import Link from "next/link";

import { MEDIA } from "../../data/media";
import SpecificationList from "../sections/specification-list";
import {
  ShieldCheckIcon,
  RulerIcon,
  FileTextIcon,
  ArrowRightIcon,
  LayersIcon,
} from "../ui/icons";

const PRODUCT_MEDIA = {
  "rubberised-cork": MEDIA.gaskets,
  cork: MEDIA.sheetSamples,
  "decorative-cork": MEDIA.tiles,
};

export default function ProductContent({ product }) {
  const media = PRODUCT_MEDIA[product.slug];

  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
      {/* Left Column: Specifications & Introduction */}
      <div>
        <div className="mb-6 bento-card p-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2">
            <LayersIcon className="size-4 text-montado" />
            <span>Product Description</span>
          </div>
          <p className="m-0 text-base sm:text-lg leading-relaxed text-charcoal font-medium">
            {product.introduction}
          </p>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="display-sm m-0 text-charcoal">
            Manufactured Forms &amp; Capacities
          </h2>
          <span className="badge-tag text-xs">
            <RulerIcon className="size-3 text-montado" />
            <span>Custom Slit &amp; Punched</span>
          </span>
        </div>

        {product.items.length > 0 ? (
          <SpecificationList items={product.items} />
        ) : (
          <div className="rounded-xl border border-montado/12 bg-white p-6">
            <p className="m-0 text-sm text-charcoal-light leading-relaxed">
              Specific dimensions, gift novelties, and custom shapes for this category are
              manufactured on inquiry. Contact our technical sales desk in Vapi to review
              current availability and sample batches.
            </p>
          </div>
        )}

        {/* CAD & Drawing Note */}
        <div className="mt-8 rounded-xl border border-cork/20 bg-cork-light/30 p-5 flex items-start gap-3">
          <FileTextIcon className="size-5 text-cork-deep shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-charcoal block mb-0.5">
              Working to a Custom Drawing or Standard?
            </span>
            <p className="m-0 text-charcoal-light leading-relaxed">
              We manufacture finished gaskets, strips, washers, and sheets according to customer
              blueprints or IS 4253 Part II. Send your drawing for a rapid quote.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Sticky Visual & Quality Verification Card */}
      <div className="self-start lg:sticky lg:top-24">
        {media ? (
          <div className="bento-card overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden bg-sheet">
              <Image
                alt={media.alt}
                className="object-cover transition-transform duration-500 hover:scale-105"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                src={media.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="spec-num text-xs font-semibold text-cork-light block">
                  Material Verification
                </span>
                <span className="text-sm font-bold text-white block">
                  {product.name}
                </span>
              </div>
            </div>

            <div className="p-5">
              <p className="m-0 text-xs text-charcoal-muted leading-relaxed">
                {media.alt}
              </p>

              <div className="mt-4 pt-4 border-t border-montado/10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-montado">
                  <ShieldCheckIcon className="size-4 text-cork" />
                  <span>ISO 9001:2015 System</span>
                </span>

                <Link
                  className="btn btn--primary min-h-8 px-3 text-xs font-semibold"
                  href="/contact#request-a-quote"
                >
                  <span>Inquire Now</span>
                  <ArrowRightIcon className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bento-card p-6">
            <h3 className="display-sm m-0 mb-2">Request Specification</h3>
            <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed mb-4">
              Share your drawing, dimensions, and quantity with United Rubber Cork.
            </p>
            <Link
              className="btn btn--primary w-full text-center text-sm font-semibold"
              href="/contact#request-a-quote"
            >
              Request Quote
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

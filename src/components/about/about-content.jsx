import Image from "next/image";

import { COMPANY_ADDRESS } from "../../config/site";
import { MEDIA } from "../../data/media";

export default function AboutContent() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      <div className="max-w-[70ch]">
        <p className="display-md m-0 mb-6 max-w-[22ch]">
          Cork, engineered to your drawing.
        </p>
        <p className="mb-5 text-charcoal">
          United Rubber Cork makes cork and rubberised cork products, including
          sheets, gaskets, frames, strips, granules, stoppers, decorative cork
          and cork gifts.
        </p>
        <p className="mb-5 text-charcoal">
          Gaskets and components can be discussed against a customer drawing or
          sample, or to IS 4253 Part II. Send the required dimensions and
          application to begin a specification review.
        </p>

        <dl className="m-0 mt-10 grid gap-4 border-t border-montado/25 pt-6 sm:grid-cols-2">
          <div>
            <dt className="label mb-1 text-charcoal/70">Location</dt>
            <dd className="m-0 text-charcoal">
              GIDC, {COMPANY_ADDRESS.addressLocality},{" "}
              {COMPANY_ADDRESS.addressRegion}
            </dd>
          </div>
          <div>
            <dt className="label mb-1 text-charcoal/70">Quality system</dt>
            <dd className="m-0 text-charcoal">ISO 9001:2015</dd>
          </div>
          <div>
            <dt className="label mb-1 text-charcoal/70">Product standard</dt>
            <dd className="m-0 text-charcoal">IS 4253 Part II</dd>
          </div>
          <div>
            <dt className="label mb-1 text-charcoal/70">How parts are made</dt>
            <dd className="m-0 text-charcoal">To your drawing or sample</dd>
          </div>
        </dl>
      </div>

      <figure className="m-0 self-start">
        <div className="relative aspect-[4/3] overflow-hidden border border-montado/20">
          <Image
            alt={MEDIA.sheetSamples.alt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            src={MEDIA.sheetSamples.src}
          />
        </div>
        <figcaption className="spec-num mt-3 text-xs text-charcoal/70">
          {MEDIA.sheetSamples.alt}
        </figcaption>
      </figure>
    </section>
  );
}

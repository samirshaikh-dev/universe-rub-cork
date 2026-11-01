import Image from "next/image";

import { MEDIA } from "../../data/media";
import SpecificationList from "../sections/specification-list";

const PRODUCT_MEDIA = {
  "rubberised-cork": MEDIA.gaskets,
  cork: MEDIA.sheetSamples,
  "decorative-cork": MEDIA.tiles,
};

export default function ProductContent({ product }) {
  const media = PRODUCT_MEDIA[product.slug];

  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <p className="lede m-0 mb-10 text-charcoal">{product.introduction}</p>

        {product.items.length > 0 ? (
          <SpecificationList items={product.items} />
        ) : (
          <div className="border-t border-montado/25 pt-5">
            <p className="m-0 max-w-[54ch] text-charcoal">
              Product specifications and photographs are not yet available for
              this range. Contact United Rubber Cork to confirm current options.
            </p>
          </div>
        )}
      </div>

      {media && (
        <figure className="m-0 self-start lg:sticky lg:top-28">
          <div className="relative aspect-[4/3] overflow-hidden border border-montado/20">
            <Image
              alt={media.alt}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              src={media.src}
            />
          </div>
          <figcaption className="spec-num mt-3 text-xs text-charcoal/70">
            {media.alt}
          </figcaption>
        </figure>
      )}
    </section>
  );
}

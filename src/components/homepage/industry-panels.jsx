import Image from "next/image";
import Link from "next/link";

import { MEDIA } from "../../data/media";

const PANEL_MEDIA = {
  transformers: MEDIA.gaskets,
  automotive: MEDIA.corkSheet,
  construction: MEDIA.sheetSamples,
  decorative: MEDIA.tiles,
};

const PANEL_LAYOUT = {
  transformers: "aspect-[4/3] md:aspect-auto md:col-span-2 md:min-h-[340px]",
  automotive: "aspect-[4/3] md:aspect-auto md:min-h-[340px]",
  construction: "aspect-[4/3] md:aspect-auto md:min-h-[240px]",
  decorative: "aspect-[4/3] md:aspect-auto md:min-h-[240px]",
};

export default function IndustryPanels({ industries }) {
  return (
    <section className="section bg-sheet">
      <div className="shell">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6 border-b border-montado/20 pb-6">
          <h2 className="display-lg m-0 max-w-[18ch]">
            Find your part by industry.
          </h2>
          <Link className="btn--plain text-montado" href="/industries">
            All applications
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {industries.map((industry) => {
            const media = PANEL_MEDIA[industry.slug] ?? MEDIA.corkSheet;

            return (
              <Link
                className={`app-panel ${PANEL_LAYOUT[industry.slug] ?? ""}`}
                href={`/industries/${industry.slug}`}
                key={industry.slug}
              >
                <Image
                  alt={media.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={media.src}
                />
                <span className="app-panel__label">
                  <span>{industry.name}</span>
                  <span aria-hidden="true" className="spec-num text-[0.8rem]">
                    →
                  </span>
                </span>
              </Link>
            );
          })}

          <div className="flex flex-col justify-between gap-6 border border-montado/20 bg-sheet p-6 md:min-h-[240px]">
            <p className="m-0 max-w-[26ch] text-[1.05rem] font-semibold leading-snug text-montado">
              Working to a drawing that does not fit a category?
            </p>
            <Link
              className="btn--plain self-start text-montado"
              href="/contact#request-a-quote"
            >
              Describe the part
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

import { SPEC_ROWS } from "../../data/site-content";
import SpecTable from "../sections/spec-table";

export default function ProductSpecSection() {
  return (
    <section className="section bg-paper">
      <div className="shell">
        <div className="mb-9 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] md:items-end">
          <h2 className="display-lg m-0 max-w-[22ch]">
            Check the sizes before you enquire.
          </h2>
          <p className="body-copy m-0 text-charcoal">
            Documented thicknesses and sheet sizes for the four published
            ranges. Confirm current availability with United Rubber Cork.
          </p>
        </div>

        <SpecTable
          caption="Published dimensions"
          label="Published product dimensions. Scroll horizontally to view all columns."
          rows={SPEC_ROWS}
        />

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <Link className="btn--plain text-montado" href="/products">
            All product families
            <span aria-hidden="true">→</span>
          </Link>
          <Link className="btn--plain text-montado" href="/contact#request-a-quote">
            Ask about a size not listed
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const FEATURED_SPEC_ITEMS = {
  "rubberised-cork": ["Sheets", "Strips"],
  cork: ["Cork granules"],
  "decorative-cork": ["Tiles"],
};

export default function ProductRangeSection({ products }) {
  const specificationRows = products.flatMap((product) =>
    product.items
      .filter((item) =>
        (FEATURED_SPEC_ITEMS[product.slug] || []).includes(item.name)
      )
      .map((item) => ({ product, item }))
  );

  return (
    <section className="bg-sheet py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6">
        <div className="mb-9 max-w-[660px]">
          <p className="mb-3 text-sm font-semibold text-montado">
            Published ranges
          </p>
          <h2 className="mb-4 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-montado [font-variation-settings:'wdth'_120]">
            Check the sizes before you enquire.
          </h2>
          <p className="mb-0 text-charcoal">
            These documented dimensions help you check product fit. Contact
            United Rubber Cork to confirm current availability.
          </p>
        </div>
        <div
          aria-label="Selected product specifications. Scroll horizontally to view all details."
          className="overflow-x-auto border border-montado/20 bg-paper focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
          role="region"
          tabIndex={0}
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="px-4 py-3 text-left text-sm font-semibold text-montado">
              Selected published product dimensions
            </caption>
            <thead className="bg-cork-light">
              <tr>
                <th
                  className="sticky top-0 border-t border-montado/15 px-4 py-3 font-semibold text-charcoal"
                  scope="col"
                >
                  Product
                </th>
                <th
                  className="sticky top-0 border-t border-montado/15 px-4 py-3 font-semibold text-charcoal"
                  scope="col"
                >
                  Published size or range
                </th>
              </tr>
            </thead>
            <tbody>
              {specificationRows.map(({ product, item }) => (
                <tr
                  className="border-t border-montado/15 transition-colors hover:bg-cork-light/50"
                  key={`${product.slug}-${item.name}`}
                >
                  <th
                    className="sticky left-0 min-w-[230px] border-r border-montado/15 bg-paper px-4 py-4 font-semibold text-montado"
                    scope="row"
                  >
                    <Link
                      className="text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
                      href={`/products/${product.slug}`}
                    >
                      {product.name} — {item.name}
                    </Link>
                  </th>
                  <td className="px-4 py-4 text-charcoal tabular-nums">
                    {item.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link
          className="mt-6 inline-flex min-h-11 items-center font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
          href="/products"
        >
          Browse all product families
          <span aria-hidden="true" className="ml-2">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}

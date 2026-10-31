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
    <section className="section section-sheet">
      <div className="container">
        <div className="section-intro">
          <p className="section-kicker">Published ranges</p>
          <h2>Check the sizes before you enquire.</h2>
          <p>
            These documented dimensions help you check product fit. Contact
            United Rubber Cork to confirm current availability.
          </p>
        </div>
        <div
          aria-label="Selected product specifications. Scroll horizontally to view all details."
          className="spec-table-scroll"
          role="region"
          tabIndex={0}
        >
          <table className="spec-table">
            <caption>Selected published product dimensions</caption>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Published size or range</th>
              </tr>
            </thead>
            <tbody>
              {specificationRows.map(({ product, item }) => (
                <tr key={`${product.slug}-${item.name}`}>
                  <th scope="row">
                    <Link href={`/products/${product.slug}`}>
                      {product.name} — {item.name}
                    </Link>
                  </th>
                  <td>{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link className="text-link section-link" href="/products">
          Browse all product families
        </Link>
      </div>
    </section>
  );
}

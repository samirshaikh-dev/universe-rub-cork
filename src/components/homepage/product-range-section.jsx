import Link from "next/link";

export default function ProductRangeSection({ products }) {
  return (
    <section className="section section-paper">
      <div className="container">
        <div className="section-intro">
          <p className="section-kicker">Product range</p>
          <h2>Find the right cork product.</h2>
          <p>
            Review the documented sizes, then share your drawing or application
            with United Rubber Cork.
          </p>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <article className="product-row" key={product.slug}>
              <div>
                <h3>
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </h3>
                <p>{product.summary}</p>
              </div>
              <Link
                aria-label={`View ${product.name} products`}
                className="row-link"
                href={`/products/${product.slug}`}
              >
                View range <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
        <Link className="text-link section-link" href="/products">
          View all products
        </Link>
      </div>
    </section>
  );
}

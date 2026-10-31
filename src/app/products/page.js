import Link from "next/link";
import { PRODUCTS } from "../../data/site-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Cork and rubberised cork product range",
  description:
    "Browse United Rubber Cork's rubberised cork, cork, decorative cork and cork gift product ranges.",
  path: "/products",
});

export default function ProductsPage() {
  const featuredProduct = PRODUCTS.find(
    (product) => product.slug === "rubberised-cork"
  );
  const otherProducts = PRODUCTS.filter(
    (product) => product.slug !== "rubberised-cork"
  );

  return (
    <div className="bg-sheet">
      <section className="mx-auto w-full max-w-[1200px] px-5 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:pb-24">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-montado">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                className="underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
                href="/"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold">
              Products
            </li>
          </ol>
        </nav>

        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold text-montado">
              Products for industrial and specialist use
            </p>
            <h1 className="mb-5 max-w-[13ch] text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-montado [font-variation-settings:'wdth'_125]">
              Cork products, made to fit your requirement.
            </h1>
            <p className="mb-0 max-w-[58ch] text-lg leading-relaxed text-charcoal">
              Compare the documented product ranges, sizes and manufacturing
              basis. For a part made to your drawing or sample, include the
              dimensions and application in your quote request.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 border-l-2 border-cork pl-5">
            <p className="mb-0 text-charcoal">
              Need a gasket, frame or strip to specification?
            </p>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-amber px-5 py-3 font-semibold text-charcoal transition-colors hover:bg-amber/90 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
              href="/contact#request-a-quote"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      {featuredProduct && (
        <section
          aria-labelledby="rubberised-cork-heading"
          className="bg-paper py-14 sm:py-20"
        >
          <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6">
            <div className="grid overflow-hidden border border-montado/20 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col items-start justify-between gap-8 bg-montado p-6 text-paper sm:p-10">
                <div>
                  <p className="mb-4 text-sm font-semibold text-paper">
                    Industrial range
                  </p>
                  <h2
                    className="mb-5 max-w-[12ch] text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-paper! [font-variation-settings:'wdth'_120]"
                    id="rubberised-cork-heading"
                  >
                    {featuredProduct.name}
                  </h2>
                  <p className="mb-0 max-w-[38ch] text-paper">
                    {featuredProduct.summary}
                  </p>
                </div>
                <Link
                  className="inline-flex min-h-11 items-center gap-2 border-b border-paper pb-1 font-semibold text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-amber"
                  href={`/products/${featuredProduct.slug}`}
                >
                  View rubberised cork details
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <dl className="m-0 divide-y divide-montado/15 bg-paper px-6 sm:px-10">
                {featuredProduct.items.map((item) => (
                  <div
                    className="grid gap-2 py-5 sm:grid-cols-[minmax(140px,0.55fr)_minmax(0,1fr)] sm:gap-6 sm:py-6"
                    key={item.name}
                  >
                    <dt className="font-semibold text-montado">{item.name}</dt>
                    <dd className="m-0 text-charcoal">{item.details}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      <section
        aria-labelledby="other-products-heading"
        className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20 lg:py-24"
      >
        <div className="mb-9 max-w-[660px]">
          <p className="mb-3 text-sm font-semibold text-montado">
            More product families
          </p>
          <h2 className="mb-4 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-montado [font-variation-settings:'wdth'_120]" id="other-products-heading">
            Browse the cork range.
          </h2>
          <p className="mb-0 text-charcoal">
            Check each family for available product details. Where a
            specification is not listed, contact United Rubber Cork to confirm
            current options.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {otherProducts.map((product) => (
            <article
              className="flex h-full flex-col border border-montado/20 bg-paper p-6 transition-colors hover:border-montado/50 sm:p-8"
              key={product.slug}
            >
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-montado/15 pb-5">
                <h3 className="mb-0 max-w-[18ch] text-[clamp(1.2rem,2vw,1.45rem)] font-bold leading-[1.08] tracking-[-0.02em] text-montado">
                  {product.name}
                </h3>
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center border border-cork text-montado"
                >
                  <svg fill="none" height="25" viewBox="0 0 24 24" width="25">
                    <path
                      d="M4 5.5h16v13H4zM8 9.5h8v5H8z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                    <path
                      d="M8 9.5h8v5H8z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </span>
              </div>
              <p className="mb-5 text-charcoal">{product.summary}</p>

              {product.items.length > 0 ? (
                <ul className="mb-7 grid gap-4 border-t border-montado/15 pt-5">
                  {product.items.map((item) => (
                    <li className="list-none" key={item.name}>
                      <p className="mb-1 font-semibold text-montado">
                        {item.name}
                      </p>
                      <p className="mb-0 text-sm leading-relaxed text-charcoal">
                        {item.details}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mb-7 border-t border-montado/15 pt-5 text-sm text-charcoal">
                  Ask about the current range, sizes and available quantities.
                </p>
              )}

              <Link
                className="mt-auto inline-flex min-h-11 items-center gap-2 font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
                href={`/products/${product.slug}`}
              >
                View {product.name} details
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cork-light">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-5 py-10 sm:px-6 sm:py-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10">
          <div>
            <h2 className="mb-3 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-montado [font-variation-settings:'wdth'_120]">
              Have a drawing or sample?
            </h2>
            <p className="mb-0 max-w-[60ch] text-charcoal">
              Share the product, dimensions and quantity to discuss a
              specification with United Rubber Cork.
            </p>
          </div>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-amber px-5 py-3 font-semibold text-charcoal transition-colors hover:bg-amber/90 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
            href="/contact#request-a-quote"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  );
}

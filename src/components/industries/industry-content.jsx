import Link from "next/link";

import ContactActions from "../contact-actions";
import PageCta from "../sections/page-cta";
import SpecificationList from "../sections/specification-list";

export default function IndustryContent({ industry, relatedProducts }) {
  const specifications = industry.specifications.map(([name, details]) => ({
    name,
    details,
  }));

  return (
    <>
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="lede m-0 mb-10 text-charcoal">{industry.body}</p>
          <SpecificationList items={specifications} />
        </div>

        <div className="border-t border-montado/25 pt-6 self-start">
          <h2 className="display-sm m-0 mb-5">Relevant products</h2>
          <ul className="m-0 grid p-0">
            {relatedProducts.map((product) => (
              <li className="list-none border-b border-montado/15" key={product.slug}>
                <Link
                  className="flex min-h-16 items-center justify-between gap-4 py-4 no-underline"
                  href={`/products/${product.slug}`}
                >
                  <span>
                    <span className="block font-semibold text-montado">
                      {product.name}
                    </span>
                    <span className="mt-1 block max-w-[42ch] text-sm text-charcoal">
                      {product.summary}
                    </span>
                  </span>
                  <span aria-hidden="true" className="spec-num text-montado">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCta
        description="Share a drawing or sample and the required dimensions."
        title="Discuss your application."
      >
        <ContactActions />
      </PageCta>
    </>
  );
}

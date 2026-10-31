import Link from "next/link";
import PageCta from "../sections/page-cta";
import SpecificationList from "../sections/specification-list";
import ContactActions from "../contact-actions";

export default function IndustryContent({ industry, relatedProducts }) {
  const specifications = industry.specifications.map(([name, details]) => ({
    name,
    details,
  }));

  return (
    <>
      <section className="max-w-[900px]">
        <p className="mb-10 max-w-[68ch] text-lg leading-relaxed text-charcoal">
          {industry.body}
        </p>
        <SpecificationList items={specifications} />
      </section>
      <section className="mt-14 border-t border-montado/20 pt-8">
        <h2 className="mb-5">Related products</h2>
        <ul className="m-0 flex flex-wrap gap-3 p-0">
          {relatedProducts.map((product) => (
            <li className="list-none" key={product.slug}>
              <Link
                className="inline-flex min-h-11 items-center border border-montado/25 bg-paper px-4 font-semibold text-montado underline-offset-4 hover:border-montado hover:underline focus-visible:outline-3 focus-visible:outline-amber"
                href={`/products/${product.slug}`}
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <PageCta
        description="Share a drawing or sample and the required dimensions."
        title="Discuss your application."
      >
        <ContactActions compact />
      </PageCta>
    </>
  );
}

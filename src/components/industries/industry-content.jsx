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
      <section className="content-section">
        <p className="content-lede">{industry.body}</p>
        <SpecificationList items={specifications} />
      </section>
      <section className="related-products">
        <h2>Related products</h2>
        <ul>
          {relatedProducts.map((product) => (
            <li key={product.slug}>
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
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

import Link from "next/link";
import { notFound } from "next/navigation";
import ContactActions from "../../../components/contact-actions";
import PageHeading from "../../../components/page-heading";
import { INDUSTRIES, PRODUCTS } from "../../../data/site-content";
import { createPageMetadata } from "../../../lib/seo/metadata";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((item) => item.slug === slug);

  if (!industry) return {};

  return createPageMetadata({
    title: industry.seoTitle ?? industry.name,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((item) => item.slug === slug);

  if (!industry) notFound();

  const relatedProducts = PRODUCTS.filter((product) =>
    industry.productSlugs.includes(product.slug),
  );

  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
        description={industry.summary}
        title={industry.name}
      />
      <section className="content-section">
        <p className="content-lede">{industry.body}</p>
        <div className="spec-list">
          {industry.specifications.map(([name, details]) => (
            <article className="spec-row" key={name}>
              <h2>{name}</h2>
              <p>{details}</p>
            </article>
          ))}
        </div>
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
      <section className="page-cta">
        <div>
          <h2>Discuss your application.</h2>
          <p>Share a drawing or sample and the required dimensions.</p>
        </div>
        <ContactActions compact />
      </section>
    </div>
  );
}

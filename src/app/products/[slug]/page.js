import Link from "next/link";
import { notFound } from "next/navigation";
import ContactActions from "../../../components/contact-actions";
import PageHeading from "../../../components/page-heading";
import { PRODUCTS } from "../../../data/site-content";
import { createPageMetadata } from "../../../lib/seo/metadata";
import { getProductJsonLd } from "../../../lib/seo/structured-data";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) return {};

  return createPageMetadata({
    title: product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ]}
        description={product.summary}
        structuredData={[getProductJsonLd(product)]}
        title={product.name}
      />
      <section className="content-section">
        <p className="content-lede">{product.introduction}</p>
        {product.items.length > 0 ? (
          <div className="spec-list">
            {product.items.map((item) => (
              <article className="spec-row" key={item.name}>
                <h2>{item.name}</h2>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="notice">
            Product specifications and photographs are not yet available for
            this range. Contact AMCORK to confirm current options.
          </p>
        )}
      </section>
      <section className="page-cta">
        <div>
          <h2>Ask about {product.name.toLowerCase()}.</h2>
          <p>Include your required dimensions and quantity.</p>
        </div>
        <ContactActions compact />
      </section>
      <p className="back-link">
        <Link href="/products">Back to all products</Link>
      </p>
    </div>
  );
}

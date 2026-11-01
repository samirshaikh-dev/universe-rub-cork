import Link from "next/link";
import { notFound } from "next/navigation";

import ContactActions from "../../../components/contact-actions";
import PageHeading from "../../../components/page-heading";
import ProductContent from "../../../components/product/product-content";
import PageCta from "../../../components/sections/page-cta";
import { PRODUCTS } from "../../../data/site-content";
import { createPageMetadata } from "../../../lib/seo/metadata";
import { getProductJsonLd } from "../../../lib/seo/structured-data";
import { ArrowRightIcon } from "../../../components/ui/icons";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) return {};

  return createPageMetadata({
    title: product.seoTitle ?? product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        badge="Product Specification"
        breadcrumbs={[
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ]}
        description={product.summary}
        structuredData={[getProductJsonLd(product)]}
        title={product.name}
      />

      <ProductContent product={product} />

      <PageCta
        description={`Include your required dimensions, standard (such as IS 4253 Part II), and quantity for a rapid quotation.`}
        title={`Request a quote for ${product.name.toLowerCase()}.`}
      >
        <ContactActions />
      </PageCta>

      <div className="mt-10 pt-6 border-t border-montado/10 flex items-center justify-between">
        <Link className="btn--plain text-montado text-sm font-bold" href="/products">
          <span aria-hidden="true">←</span> Back to all products
        </Link>

        <Link
          className="text-xs font-semibold text-charcoal-muted hover:text-montado"
          href="/contact#request-a-quote"
        >
          Send Drawing Specification →
        </Link>
      </div>
    </div>
  );
}

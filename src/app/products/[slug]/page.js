import Link from "next/link";
import { notFound } from "next/navigation";
import ContactActions from "../../../components/contact-actions";
import PageHeading from "../../../components/page-heading";
import ProductContent from "../../../components/product/product-content";
import PageCta from "../../../components/sections/page-cta";
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
    <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <PageHeading
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
        description="Include your required dimensions and quantity."
        title={`Ask about ${product.name.toLowerCase()}.`}
      >
        <ContactActions compact />
      </PageCta>
      <p className="mt-8">
        <Link
          className="inline-flex min-h-11 items-center font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
          href="/products"
        >
          ← Back to all products
        </Link>
      </p>
    </div>
  );
}

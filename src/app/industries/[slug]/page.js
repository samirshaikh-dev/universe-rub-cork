import Link from "next/link";
import { notFound } from "next/navigation";

import IndustryContent from "../../../components/industries/industry-content";
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
    industry.productSlugs.includes(product.slug)
  );

  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        badge="Sector Application Profile"
        breadcrumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
        description={industry.summary}
        title={industry.name}
      />
      <IndustryContent industry={industry} relatedProducts={relatedProducts} />

      <div className="mt-10 pt-6 border-t border-montado/10 flex items-center justify-between">
        <Link className="btn--plain text-montado text-sm font-bold" href="/industries">
          <span aria-hidden="true">←</span> Back to all applications
        </Link>
        <Link
          className="text-xs font-semibold text-charcoal-muted hover:text-montado"
          href="/contact#request-a-quote"
        >
          Request Custom Application Quote →
        </Link>
      </div>
    </div>
  );
}

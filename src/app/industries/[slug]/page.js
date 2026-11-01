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
        breadcrumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
        description={industry.summary}
        title={industry.name}
      />
      <IndustryContent industry={industry} relatedProducts={relatedProducts} />
    </div>
  );
}

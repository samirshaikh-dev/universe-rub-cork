import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import CatalogueList from "../../components/sections/catalogue-list";
import PageCta from "../../components/sections/page-cta";
import { INDUSTRIES } from "../../data/site-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Cork applications by industry",
  description:
    "Explore United Rubber Cork's cork and rubberised cork applications for transformers, automotive components, construction and insulation.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <PageHeading
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
        description="Explore the industries served and the cork products relevant to each application."
        title="Industries and applications"
      />
      <CatalogueList
        actionLabel="View application"
        basePath="industries"
        items={INDUSTRIES}
      />
      <PageCta
        description="Share the drawing, dimensions and material requirement."
        title="Need help matching a product to your application?"
      >
        <ContactActions compact />
      </PageCta>
    </div>
  );
}

import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import CatalogueList from "../../components/sections/catalogue-list";
import PageCta from "../../components/sections/page-cta";
import { INDUSTRIES } from "../../data/site-content";
import { MEDIA } from "../../data/media";
import { createPageMetadata } from "../../lib/seo/metadata";

const INDUSTRY_MEDIA = {
  transformers: MEDIA.gaskets,
  automotive: MEDIA.corkSheet,
  construction: MEDIA.sheetSamples,
};

export const metadata = createPageMetadata({
  title: "Cork applications by industry",
  description:
    "Explore United Rubber Cork's cork and rubberised cork applications for transformers, automotive components, construction and insulation.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
        description="Each application has its own thicknesses, widths and manufacturing basis. Start with the one that matches your part."
        title="Industries and applications."
      />
      <CatalogueList
        actionLabel="View application"
        basePath="industries"
        items={INDUSTRIES}
        mediaMap={INDUSTRY_MEDIA}
      />
      <PageCta
        description="Share the drawing, dimensions and material requirement."
        title="Need help matching a product to your application?"
      >
        <ContactActions />
      </PageCta>
    </div>
  );
}

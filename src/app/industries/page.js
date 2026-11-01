import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import CatalogueList from "../../components/sections/catalogue-list";
import PageCta from "../../components/sections/page-cta";
import { INDUSTRIES } from "../../data/site-content";
import { MEDIA } from "../../data/media";
import { createPageMetadata } from "../../lib/seo/metadata";
import { ShieldCheckIcon } from "../../components/ui/icons";

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
        badge="Sector Applications"
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
        description="Each sector presents distinct sealing and isolation challenges — from transformer dielectric mineral oil resilience to automotive engine vibration. Review how our formulations and cut components perform across core applications."
        title="Industrial Applications &amp; Sector Solutions."
      />

      <section className="mb-16">
        <CatalogueList
          actionLabel="View Sector Solutions"
          basePath="industries"
          items={INDUSTRIES}
          mediaMap={INDUSTRY_MEDIA}
        />
      </section>

      <PageCta
        description="Share your engineering drawing, fluid exposure criteria, and dimensions to match the optimal grade."
        title="Need assistance matching material to your specific application?"
      >
        <ContactActions />
      </PageCta>
    </div>
  );
}

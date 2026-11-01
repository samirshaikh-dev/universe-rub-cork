import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import PageCta from "../../components/sections/page-cta";
import QualityContent from "../../components/quality/quality-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Quality system and material standards",
  description:
    "Review United Rubber Cork's stated ISO 9001:2015 quality system and rubberised cork products made to IS 4253 Part II.",
  path: "/quality",
});

export default function QualityPage() {
  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        breadcrumbs={[{ name: "Quality", path: "/quality" }]}
        description="The ISO 9001:2015 quality system referenced in United Rubber Cork's company information, and IS 4253 Part II for rubberised cork. Request current documentation for the specification you are reviewing."
        title="Quality and standards."
      />
      <QualityContent />
      <PageCta
        description="Contact United Rubber Cork with the product and standard you need to verify."
        title="Need documentation for a specification review?"
      >
        <ContactActions />
      </PageCta>
    </div>
  );
}

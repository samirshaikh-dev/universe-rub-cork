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
        badge="Quality &amp; Material Compliance"
        breadcrumbs={[{ name: "Quality", path: "/quality" }]}
        description="Review the ISO 9001:2015 quality management system referenced in company records and the IS 4253 Part II product standard for rubberised cork. Request current test certificates and batch documentation for purchase verification."
        title="Quality Systems &amp; National Standards."
      />
      <QualityContent />
      <PageCta
        description="Contact our Vapi works with the specific product standard or batch inspection requirements you need to verify."
        title="Need documentation for a formal specification review or purchase order?"
      >
        <ContactActions />
      </PageCta>
    </div>
  );
}

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
    <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <PageHeading
        breadcrumbs={[{ name: "Quality", path: "/quality" }]}
        description="Quality information and standards for rubberised cork products."
        title="Quality and standards"
      />
      <QualityContent />
      <PageCta
        description="Contact United Rubber Cork with the product and standard you need to verify."
        title="Need documentation for a specification review?"
      >
        <ContactActions compact />
      </PageCta>
    </div>
  );
}

import PageHeading from "../../components/page-heading";
import PrivacyContent from "../../components/privacy/privacy-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Privacy notice",
  description:
    "How the United Rubber Cork website handles specifications and contact information shared through the quote builder, WhatsApp and direct email.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        badge="Legal &amp; Data Transparency"
        breadcrumbs={[{ name: "Privacy notice", path: "/privacy" }]}
        description="Our policy regarding communications, data sovereignty, and WhatsApp quote requests processed through this website."
        title="Privacy Notice &amp; Data Handling."
      />
      <PrivacyContent />
    </div>
  );
}

import PageHeading from "../../components/page-heading";
import PrivacyContent from "../../components/privacy/privacy-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Privacy notice",
  description:
    "How the United Rubber Cork website currently handles information shared through the quote form, WhatsApp and direct contact.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        breadcrumbs={[{ name: "Privacy notice", path: "/privacy" }]}
        description="What happens to the details you enter on this site, and where they go."
        title="Privacy notice."
      />
      <PrivacyContent />
    </div>
  );
}

import PageHeading from "../../components/page-heading";
import PrivacyContent from "../../components/privacy/privacy-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Privacy notice",
  description:
    "How the United Rubber Cork website currently handles information shared through direct contact.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <PageHeading
        breadcrumbs={[{ name: "Privacy notice", path: "/privacy" }]}
        description="Information about contact through this website."
        title="Privacy notice"
      />
      <PrivacyContent />
    </div>
  );
}

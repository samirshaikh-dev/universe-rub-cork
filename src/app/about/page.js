import AboutContent from "../../components/about/about-content";
import PageHeading from "../../components/page-heading";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Cork manufacturer in GIDC, Vapi",
  description:
    "Learn about United Rubber Cork, a cork and rubberised cork manufacturer in GIDC, Vapi, Gujarat.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        breadcrumbs={[{ name: "About", path: "/about" }]}
        description="A cork and rubberised cork manufacturer based in GIDC, Vapi, Gujarat."
        title="About United Rubber Cork."
      />
      <AboutContent />
    </div>
  );
}

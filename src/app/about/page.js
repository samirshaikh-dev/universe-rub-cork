import PageHeading from "../../components/page-heading";
import AboutContent from "../../components/about/about-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Cork manufacturer in GIDC, Vapi",
  description:
    "Learn about United Rubber Cork, a cork and rubberised cork manufacturer in GIDC, Vapi, Gujarat.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[{ name: "About", path: "/about" }]}
        description="A cork and rubberised cork manufacturer based in GIDC, Vapi, Gujarat."
        title="About United Rubber Cork"
      />
      <AboutContent />
    </div>
  );
}

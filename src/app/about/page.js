import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import PageCta from "../../components/sections/page-cta";
import AboutContent from "../../components/about/about-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "About United Rubber Cork",
  description:
    "Learn about United Rubber Cork's manufacturing operations in GIDC, Vapi, Gujarat, quality systems, and custom die-cut cork capabilities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        badge="Manufacturing Works &amp; Capability"
        breadcrumbs={[{ name: "About", path: "/about" }]}
        description="United Rubber Cork operates dedicated manufacturing facilities in GIDC Vapi, Gujarat. We engineer and convert high-performance cork and rubberised cork materials for technical sealing, acoustic dampening, and vibration control."
        title="About United Rubber Cork."
      />
      <AboutContent />
      <PageCta
        description="Connect with our works engineering team to discuss material options, custom tooling, and volume deliveries."
        title="Plan your custom component with our manufacturing team."
      >
        <ContactActions />
      </PageCta>
    </div>
  );
}

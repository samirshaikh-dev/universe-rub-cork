import ContactDetails from "../../components/contact/contact-details";
import QuoteForm from "../../components/contact/quote-form";
import PageHeading from "../../components/page-heading";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Contact and request a quote",
  description:
    "Contact United Rubber Cork about cork and rubberised cork products, or send a quote request by WhatsApp or email.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        badge="Works Sales &amp; Dispatch Desk"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        description="Connect with our technical desk in GIDC Vapi, Gujarat regarding material availability, drawing reviews, or custom tooling. WhatsApp is our fastest channel for sharing engineering blueprints and CAD files."
        title="Contact Our Manufacturing Works."
      />
      <ContactDetails />
      <div className="mt-8 max-w-[840px]">
        <QuoteForm variant="full" />
      </div>
    </div>
  );
}

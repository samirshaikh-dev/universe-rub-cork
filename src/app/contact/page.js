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
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        description="Talk with United Rubber Cork about availability, a specification or a quote. WhatsApp is usually the fastest route for a drawing."
        title="Contact United Rubber Cork."
      />
      <ContactDetails />
      <QuoteForm />
    </div>
  );
}

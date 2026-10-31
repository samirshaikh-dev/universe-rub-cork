import Link from "next/link";
import PageHeading from "../../components/page-heading";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
} from "../../config/site";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Contact: phone, email and address",
  description:
    "Contact United Rubber Cork in GIDC, Vapi, Gujarat by phone or email about cork and rubberised cork products.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        description="Talk with United Rubber Cork about product availability, specifications or a quote."
        title="Contact United Rubber Cork"
      />
      <div className="contact-grid">
        <section className="contact-block">
          <h2>Call</h2>
          <ul className="contact-list">
            {COMPANY_PHONES.map((phone) => (
              <li key={phone.href}>
                <a href={`tel:${phone.href}`}>{phone.display}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="contact-block">
          <h2>Email</h2>
          <ul className="contact-list">
            {COMPANY_EMAILS.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="contact-block contact-address">
          <h2>Visit</h2>
          <address>
            {COMPANY_ADDRESS.streetAddress}
            <br />
            {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode}
            <br />
            {COMPANY_ADDRESS.addressRegion}, India
          </address>
        </section>
      </div>
      <section className="page-cta">
        <div>
          <h2>Ready to discuss a part?</h2>
          <p>
            Include the product, required dimensions, quantity and any drawing
            or sample details.
          </p>
        </div>
        <Link className="button button-primary" href="/request-quote">
          Request a quote
        </Link>
      </section>
    </div>
  );
}

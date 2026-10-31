import Link from "next/link";
import PageHeading from "../../components/page-heading";
import {
  COMPANY_EMAILS,
  COMPANY_PHONES,
} from "../../config/site";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Request a quote for cork parts",
  description:
    "Contact United Rubber Cork about cork and rubberised cork products, dimensions and quantities.",
  path: "/request-quote",
});

export default function RequestQuotePage() {
  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[{ name: "Request a quote", path: "/request-quote" }]}
        description="Share your product requirement, dimensions and quantity with United Rubber Cork."
        title="Request a quote"
      />
      <section className="quote-panel">
        <p className="content-lede">
          The online quote form and drawing upload are not enabled yet. For
          now, email United Rubber Cork directly or call to discuss your requirement.
        </p>
        <h2>What to include</h2>
        <ul className="check-list">
          <li>Product name and application</li>
          <li>Required size, thickness and quantity</li>
          <li>Applicable standard or material requirement</li>
          <li>Drawing or sample details (send by email)</li>
          <li>Your name, company and contact number</li>
        </ul>
        <div className="contact-actions">
          <a
            className="button button-primary"
            href={`mailto:${COMPANY_EMAILS[0]}?subject=${encodeURIComponent("Quote request for United Rubber Cork products")}`}
          >
            Email a quote request
          </a>
          <a className="button button-secondary" href={`tel:${COMPANY_PHONES[0].href}`}>
            Call {COMPANY_PHONES[0].display}
          </a>
        </div>
        <p className="notice">
          Selecting the email option opens your email application. Your request
          is sent only after you review and send the message.
        </p>
      </section>
      <p className="back-link">
        <Link href="/contact">View all contact details</Link>
      </p>
    </div>
  );
}

import { COMPANY_EMAILS, COMPANY_PHONES } from "../../config/site";

export default function QuoteContent() {
  return (
    <section
      aria-labelledby="request-a-quote-heading"
      className="quote-panel"
      id="request-a-quote"
    >
      <h2 id="request-a-quote-heading">Request a quote</h2>
      <p className="content-lede">
        The online quote form and drawing upload are not enabled yet. For now,
        email United Rubber Cork directly or call to discuss your requirement.
      </p>
      <h3>What to include</h3>
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
        <a
          className="button button-secondary"
          href={`tel:${COMPANY_PHONES[0].href}`}
        >
          Call {COMPANY_PHONES[0].display}
        </a>
      </div>
      <p className="notice">
        Selecting the email option opens your email application. Your request
        is sent only after you review and send the message.
      </p>
    </section>
  );
}

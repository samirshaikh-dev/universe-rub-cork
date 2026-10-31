import Link from "next/link";
import { COMPANY_EMAILS, COMPANY_PHONES } from "../config/site";

export default function ContactActions({ compact = false }) {
  return (
    <div className={compact ? "contact-actions contact-actions-compact" : "contact-actions"}>
      <Link className="button button-primary" href="/request-quote">
        Request a quote
      </Link>
      <a className="button button-secondary" href={`tel:${COMPANY_PHONES[0].href}`}>
        Call {COMPANY_PHONES[0].display}
      </a>
      {!compact && (
        <a className="text-link" href={`mailto:${COMPANY_EMAILS[0]}`}>
          Email AMCORK
        </a>
      )}
    </div>
  );
}

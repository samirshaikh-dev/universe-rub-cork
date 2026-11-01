import Link from "next/link";

import {
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
  WHATSAPP_LINK,
} from "../../config/site";
import QuoteForm from "../contact/quote-form";

const MAP_QUERY = encodeURIComponent(
  `${COMPANY_ADDRESS.streetAddress}, ${COMPANY_ADDRESS.addressLocality} ${COMPANY_ADDRESS.postalCode}, ${COMPANY_ADDRESS.addressRegion}, India`
);

export default function QuoteBand() {
  return (
    <section className="section bg-sheet" id="request-a-quote">
      <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <h2 className="display-lg m-0 mb-4 max-w-[20ch]">
            Have a drawing or sample?
          </h2>
          <p className="mb-8 max-w-[54ch] text-charcoal">
            Share the product, dimensions and quantity. We will reply with a
            quote, or with the questions we need answered before one can be
            given.
          </p>
          <QuoteForm variant="short" />
        </div>

        <aside className="border-t border-montado/25 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <h2 className="display-sm m-0 mb-6">United Rubber Cork</h2>

          <address className="m-0 mb-6 not-italic">
            <span className="mb-1 block font-semibold text-montado">Works</span>
            <span className="block max-w-[32ch] text-[0.98rem] leading-relaxed text-charcoal">
              {COMPANY_ADDRESS.streetAddress}
              <br />
              {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode},
              <br />
              {COMPANY_ADDRESS.addressRegion}, India
            </span>
          </address>

          <dl className="m-0 grid gap-4">
            <div>
              <dt className="label mb-1 text-montado">Phone</dt>
              <dd className="m-0 grid">
                {COMPANY_PHONES.map((phone) => (
                  <a
                    className="link spec-num inline-flex min-h-11 items-center self-start"
                    href={`tel:${phone.href}`}
                    key={phone.href}
                  >
                    {phone.display}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="label mb-1 text-montado">Email</dt>
              <dd className="m-0 grid">
                {COMPANY_EMAILS.map((email) => (
                  <a
                    className="link inline-flex min-h-11 items-center self-start break-all"
                    href={`mailto:${email}`}
                    key={email}
                  >
                    {email}
                  </a>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <a
              className="btn--plain text-montado"
              href={WHATSAPP_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp
              <span aria-hidden="true">→</span>
            </a>
            <a
              className="btn--plain text-montado"
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Open in Maps
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-8 mb-0 text-sm text-charcoal/75">
            Need the full form instead?{" "}
            <Link className="link" href="/contact#request-a-quote">
              Use the contact page
            </Link>
            .
          </p>
        </aside>
      </div>
    </section>
  );
}

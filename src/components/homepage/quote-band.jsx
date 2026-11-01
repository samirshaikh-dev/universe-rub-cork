import Link from "next/link";

import {
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
  WHATSAPP_LINK,
} from "../../config/site";
import QuoteForm from "../contact/quote-form";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FileTextIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "../ui/icons";

const MAP_QUERY = encodeURIComponent(
  `${COMPANY_ADDRESS.streetAddress}, ${COMPANY_ADDRESS.addressLocality} ${COMPANY_ADDRESS.postalCode}, ${COMPANY_ADDRESS.addressRegion}, India`
);

export default function QuoteBand() {
  return (
    <section className="section bg-sheet border-t border-montado/10" id="request-a-quote">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
          {/* Left Column: Instant RFQ Form */}
          <div>
            <div className="mb-5">
              <span className="badge-tag mb-2">
                <FileTextIcon className="size-3.5 text-montado" />
                <span>Fast Factory Turnaround</span>
              </span>
              <h2 className="display-lg m-0 text-balance">
                Request a Custom Drawing or Material Quote
              </h2>
              <p className="mt-2 mb-0 text-xs sm:text-sm text-charcoal-light max-w-[50ch]">
                Share your required dimensions, standard, and quantity. Our engineering
                desk in Vapi will reply promptly with availability and direct factory pricing.
              </p>
            </div>

            <QuoteForm variant="short" />
          </div>

          {/* Right Column: Factory Engineering Desk */}
          <aside className="bento-card flex flex-col justify-between p-5 sm:p-6">
            <div>
              <div className="pb-4 border-b border-montado/8 mb-5">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-charcoal-muted">
                  Direct Factory Contact
                </span>
                <h3 className="text-base font-bold text-montado m-0 mt-0.5">
                  United Rubber Cork Works
                </h3>
                <p className="mt-0.5 mb-0 text-xs text-charcoal-muted">
                  Manufacturing Plant • GIDC Vapi, Gujarat, India
                </p>
              </div>

              {/* Works Location Card */}
              <div className="mb-4 flex items-start gap-3 rounded-lg bg-sheet/80 p-3.5 border border-montado/8 text-xs">
                <div className="grid size-7 shrink-0 place-items-center rounded bg-montado/10 text-montado">
                  <MapPinIcon className="size-3.5" />
                </div>
                <div>
                  <span className="block font-bold text-charcoal">
                    Manufacturing Facility
                  </span>
                  <address className="not-italic leading-relaxed text-charcoal-light mt-0.5">
                    {COMPANY_ADDRESS.streetAddress}, {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode},{" "}
                    {COMPANY_ADDRESS.addressRegion}, India
                  </address>
                  <a
                    className="btn--plain text-[0.72rem] font-bold text-montado mt-1.5"
                    href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRightIcon className="size-2.5" />
                  </a>
                </div>
              </div>

              {/* Direct Lines */}
              <div className="grid gap-3 mb-5 text-xs">
                <div className="rounded-lg border border-montado/8 p-3">
                  <div className="flex items-center gap-1.5 mb-1.5 text-montado">
                    <PhoneIcon className="size-3.5" />
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider">
                      Sales &amp; Dispatch Line
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {COMPANY_PHONES.map((phone) => (
                      <a
                        className="spec-num font-semibold text-charcoal hover:text-montado"
                        href={`tel:${phone.href}`}
                        key={phone.href}
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-montado/8 p-3">
                  <div className="flex items-center gap-1.5 mb-1.5 text-montado">
                    <MailIcon className="size-3.5" />
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider">
                      Drawings &amp; RFQ Email
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {COMPANY_EMAILS.map((email) => (
                      <a
                        className="font-medium text-charcoal hover:text-montado break-all"
                        href={`mailto:${email}`}
                        key={email}
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Drawing Acceptance Guide */}
            <div className="rounded-lg border border-cork/20 bg-cork-light/20 p-3 text-xs">
              <div className="flex items-center gap-1.5 text-cork-deep font-bold mb-0.5">
                <ShieldCheckIcon className="size-3.5" />
                <span>Drawing &amp; Sample Formats</span>
              </div>
              <p className="m-0 text-[0.72rem] text-charcoal-light leading-relaxed">
                Accepted: <strong>PDF, DWG, DXF</strong>, or clear dimensional sketches.
                Physical samples may be couriered to our Vapi works for measurement.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

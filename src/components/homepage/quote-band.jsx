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
  WhatsAppIcon,
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
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-20">
          {/* Left Column: Instant RFQ Form */}
          <div>
            <div className="mb-6">
              <span className="badge-tag mb-2.5">
                <FileTextIcon className="size-3.5 text-montado" />
                <span>Fast Factory Turnaround</span>
              </span>
              <h2 className="display-lg m-0 text-balance">
                Request a Custom Drawing or Material Quote
              </h2>
              <p className="mt-2.5 mb-0 text-sm sm:text-base text-charcoal-light max-w-[54ch]">
                Share your required dimensions, standard, and quantity. Our engineering
                desk in Vapi will review your request and reply promptly with availability
                and direct factory pricing.
              </p>
            </div>

            <QuoteForm variant="short" />
          </div>

          {/* Right Column: Factory Engineering Desk & Direct Channels */}
          <aside className="flex flex-col justify-between rounded-2xl border border-montado/12 bg-white p-6 sm:p-8 shadow-sm">
            <div>
              <div className="pb-5 border-b border-montado/10 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                  Direct Factory Contact
                </span>
                <h3 className="display-sm m-0 text-montado mt-1">
                  United Rubber Cork Works
                </h3>
                <p className="mt-1 mb-0 text-xs text-charcoal-muted">
                  Manufacturing Plant • GIDC Vapi, Gujarat, India
                </p>
              </div>

              {/* Works Location Card */}
              <div className="mb-6 flex items-start gap-3 rounded-xl bg-sheet p-4 border border-montado/8">
                <div className="grid size-8 shrink-0 place-items-center rounded bg-montado/10 text-montado">
                  <MapPinIcon className="size-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="block font-bold text-charcoal">
                    Manufacturing Facility
                  </span>
                  <address className="not-italic leading-relaxed text-charcoal-light mt-0.5">
                    {COMPANY_ADDRESS.streetAddress},<br />
                    {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode},{" "}
                    {COMPANY_ADDRESS.addressRegion}, India
                  </address>
                  <a
                    className="btn--plain text-xs font-bold text-montado mt-2"
                    href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRightIcon className="size-3" />
                  </a>
                </div>
              </div>

              {/* Direct Lines */}
              <div className="grid gap-4 mb-6">
                <div className="rounded-xl border border-montado/10 p-4">
                  <div className="flex items-center gap-2 mb-2 text-montado">
                    <PhoneIcon className="size-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Sales &amp; Dispatch Hotline
                    </span>
                  </div>
                  <div className="grid gap-1">
                    {COMPANY_PHONES.map((phone) => (
                      <a
                        className="spec-num text-sm font-semibold text-charcoal hover:text-montado"
                        href={`tel:${phone.href}`}
                        key={phone.href}
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-montado/10 p-4">
                  <div className="flex items-center gap-2 mb-2 text-montado">
                    <MailIcon className="size-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Drawings &amp; RFQ Email
                    </span>
                  </div>
                  <div className="grid gap-1">
                    {COMPANY_EMAILS.map((email) => (
                      <a
                        className="text-xs sm:text-sm font-medium text-charcoal hover:text-montado break-all"
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
            <div className="rounded-xl border border-cork/25 bg-cork-light/30 p-4">
              <div className="flex items-center gap-2 text-cork-deep font-bold text-xs mb-1">
                <ShieldCheckIcon className="size-4" />
                <span>Drawing &amp; Sample Guidelines</span>
              </div>
              <p className="m-0 text-xs text-charcoal-light leading-relaxed">
                We accept drawings in <strong>PDF, DWG, DXF, or clear dimensional sketches</strong>.
                Physical component samples can be couriered to our Vapi works for measurement
                and prototype tooling.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

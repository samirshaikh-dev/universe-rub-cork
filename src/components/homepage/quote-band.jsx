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
  WhatsAppIcon,
} from "../ui/icons";

const MAP_QUERY = encodeURIComponent(
  `${COMPANY_ADDRESS.streetAddress}, ${COMPANY_ADDRESS.addressLocality} ${COMPANY_ADDRESS.postalCode}, ${COMPANY_ADDRESS.addressRegion}, India`
);

export default function QuoteBand() {
  return (
    <section className="section bg-sheet border-t border-montado/10" id="request-a-quote">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16 items-start">
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
          <aside className="bento-card flex flex-col justify-between p-5 sm:p-7 rounded-2xl">
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
              <div className="mb-5 flex items-start gap-3.5 rounded-xl bg-sheet/80 p-4 border border-montado/8 text-xs">
                <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-montado/10 text-montado mt-0.5">
                  <MapPinIcon className="size-4" />
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
                    className="btn--plain text-[0.72rem] font-bold text-montado mt-2 inline-flex"
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
                <div className="rounded-xl border border-montado/8 p-3.5 bg-sheet/40">
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
                        key={phone.display}
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-montado/8 p-3.5 bg-sheet/40">
                  <div className="flex items-center gap-1.5 mb-1.5 text-montado">
                    <MailIcon className="size-3.5" />
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider">
                      Official Mailboxes
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {COMPANY_EMAILS.map((email) => (
                      <a
                        className="font-medium text-charcoal hover:text-montado"
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

            {/* Quick Action CAD Handoff */}
            <div className="border-t border-montado/8 pt-4">
              <span className="block text-[0.72rem] text-charcoal-muted mb-2.5">
                Prefer to send CAD drawings (.dwg, .dxf) directly?
              </span>
              <a
                className="btn btn--whatsapp w-full justify-center min-h-10 text-xs font-semibold rounded-xl"
                href={WHATSAPP_LINK}
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="size-4" />
                <span>WhatsApp Drawing Line</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

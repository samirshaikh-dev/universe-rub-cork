import {
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
  WHATSAPP_LINK,
} from "../../config/site";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  ClockIcon,
} from "../ui/icons";

const MAP_QUERY = encodeURIComponent(
  `${COMPANY_ADDRESS.streetAddress}, ${COMPANY_ADDRESS.addressLocality} ${COMPANY_ADDRESS.postalCode}, ${COMPANY_ADDRESS.addressRegion}, India`
);

export default function ContactDetails() {
  return (
    <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* 1. Telephone & WhatsApp */}
      <section className="bento-card p-6 sm:p-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 mb-4 text-montado">
            <div className="grid size-10 place-items-center rounded-xl bg-montado/10 text-montado">
              <PhoneIcon className="size-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted block">
                Direct Telephone
              </span>
              <h2 className="text-base font-bold text-charcoal m-0">Call Our Works</h2>
            </div>
          </div>

          <p className="text-xs text-charcoal-muted mb-4 leading-relaxed">
            Speak directly with our technical sales and dispatch team in Vapi:
          </p>

          <ul className="m-0 grid gap-2 p-0 mb-6">
            {COMPANY_PHONES.map((phone) => (
              <li className="list-none" key={phone.href}>
                <a
                  className="spec-num flex items-center justify-between rounded-lg border border-montado/8 bg-sheet/60 px-3 py-2 text-sm font-semibold text-charcoal hover:border-montado hover:bg-white hover:text-montado transition-all no-underline"
                  href={`tel:${phone.href}`}
                >
                  <span>{phone.display}</span>
                  <span className="text-xs text-charcoal-muted">Call →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          className="btn btn--whatsapp w-full justify-center text-xs font-bold"
          href={WHATSAPP_LINK}
          rel="noopener noreferrer"
          target="_blank"
        >
          <WhatsAppIcon className="size-4" />
          <span>WhatsApp Drawing Line</span>
        </a>
      </section>

      {/* 2. Email Channels */}
      <section className="bento-card p-6 sm:p-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 mb-4 text-montado">
            <div className="grid size-10 place-items-center rounded-xl bg-montado/10 text-montado">
              <MailIcon className="size-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted block">
                Official Mailboxes
              </span>
              <h2 className="text-base font-bold text-charcoal m-0">Email Drawings &amp; RFQs</h2>
            </div>
          </div>

          <p className="text-xs text-charcoal-muted mb-4 leading-relaxed">
            Send purchase orders, tender specifications, and CAD blueprints:
          </p>

          <ul className="m-0 grid gap-2 p-0 mb-6">
            {COMPANY_EMAILS.map((email) => (
              <li className="list-none" key={email}>
                <a
                  className="flex items-center justify-between rounded-lg border border-montado/8 bg-sheet/60 px-3 py-2 text-xs font-semibold text-charcoal hover:border-montado hover:bg-white hover:text-montado transition-all no-underline break-all"
                  href={`mailto:${email}`}
                >
                  <span>{email}</span>
                  <span className="text-xs text-charcoal-muted shrink-0 ml-1">Send →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg bg-sheet p-3 border border-montado/8 text-xs text-charcoal-muted">
          <span className="font-bold text-charcoal block mb-0.5">Attachments:</span>
          Accepted formats: .pdf, .dwg, .dxf, .step, .zip.
        </div>
      </section>

      {/* 3. Works Visit & Location */}
      <section className="bento-card p-6 sm:p-7 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
        <div>
          <div className="flex items-center gap-2.5 mb-4 text-montado">
            <div className="grid size-10 place-items-center rounded-xl bg-montado/10 text-montado">
              <MapPinIcon className="size-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted block">
                Factory Location
              </span>
              <h2 className="text-base font-bold text-charcoal m-0">Visit Works in Vapi</h2>
            </div>
          </div>

          <address className="not-italic text-xs sm:text-sm leading-relaxed text-charcoal-light mb-4">
            <strong>United Rubber Cork</strong>
            <br />
            {COMPANY_ADDRESS.streetAddress},
            <br />
            {COMPANY_ADDRESS.addressLocality} - {COMPANY_ADDRESS.postalCode},
            <br />
            {COMPANY_ADDRESS.addressRegion}, India
          </address>

          <div className="flex items-center gap-2 text-xs text-charcoal-muted mb-6">
            <ClockIcon className="size-4 text-montado" />
            <span>Works Hours: Mon - Sat (9:00 AM - 6:30 PM IST)</span>
          </div>
        </div>

        <a
          className="btn btn--secondary w-full justify-center text-xs font-bold"
          href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MapPinIcon className="size-4 text-montado" />
          <span>Open Location in Google Maps</span>
        </a>
      </section>
    </div>
  );
}

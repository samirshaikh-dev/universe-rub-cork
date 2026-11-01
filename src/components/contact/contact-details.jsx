import {
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
  WHATSAPP_LINK,
} from "../../config/site";

export default function ContactDetails() {
  return (
    <div className="mb-16 grid gap-0 border-t border-montado/25 md:grid-cols-3">
      <section className="border-b border-montado/15 py-6 md:border-b-0 md:border-r md:pr-8">
        <h2 className="label m-0 mb-3 text-charcoal/70">Call</h2>
        <ul className="m-0 grid p-0">
          {COMPANY_PHONES.map((phone) => (
            <li className="list-none" key={phone.href}>
              <a
                className="link spec-num inline-flex min-h-11 items-center text-[1.05rem]"
                href={`tel:${phone.href}`}
              >
                {phone.display}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="btn--plain mt-4 text-montado"
          href={WHATSAPP_LINK}
          rel="noopener noreferrer"
          target="_blank"
        >
          WhatsApp
          <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="border-b border-montado/15 py-6 md:border-b-0 md:border-r md:px-8">
        <h2 className="label m-0 mb-3 text-charcoal/70">Email</h2>
        <ul className="m-0 grid p-0">
          {COMPANY_EMAILS.map((email) => (
            <li className="list-none" key={email}>
              <a
                className="link inline-flex min-h-11 max-w-full items-center break-all"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-6 md:pl-8">
        <h2 className="label m-0 mb-3 text-charcoal/70">Visit</h2>
        <address className="m-0 max-w-[34ch] not-italic leading-relaxed text-charcoal">
          {COMPANY_ADDRESS.streetAddress}
          <br />
          {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode}
          <br />
          {COMPANY_ADDRESS.addressRegion}, India
        </address>
      </section>
    </div>
  );
}

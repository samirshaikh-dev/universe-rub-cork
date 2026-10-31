import {
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
} from "../../config/site";

export default function ContactDetails() {
  return (
    <div className="mb-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <section className="border-t-4 border-montado bg-paper p-6 sm:p-7">
        <h2 className="mb-4 text-2xl font-bold leading-[1.08] tracking-[-0.03em] text-montado">
          Call
        </h2>
        <ul className="m-0 grid gap-2 p-0">
          {COMPANY_PHONES.map((phone) => (
            <li className="list-none" key={phone.href}>
              <a
                className="inline-flex min-h-11 items-center font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
                href={`tel:${phone.href}`}
              >
                {phone.display}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="border-t-4 border-montado bg-paper p-6 sm:p-7">
        <h2 className="mb-4 text-2xl font-bold leading-[1.08] tracking-[-0.03em] text-montado">
          Email
        </h2>
        <ul className="m-0 grid gap-2 p-0">
          {COMPANY_EMAILS.map((email) => (
            <li className="list-none" key={email}>
              <a
                className="inline-flex min-h-11 max-w-full items-center break-all font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="border-t-4 border-montado bg-paper p-6 sm:p-7">
        <h2 className="mb-4 text-2xl font-bold leading-[1.08] tracking-[-0.03em] text-montado">
          Visit
        </h2>
        <address className="max-w-[38ch] leading-relaxed text-charcoal">
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

import { COMPANY_EMAILS, COMPANY_PHONES } from "../../config/site";

export default function QuoteContent() {
  return (
    <section
      aria-labelledby="request-a-quote-heading"
      className="max-w-[850px] border-t-4 border-montado bg-paper p-6 sm:p-10"
      id="request-a-quote"
    >
      <p className="mb-3 text-sm font-semibold text-montado">
        Quote requests
      </p>
      <h2 className="mb-4" id="request-a-quote-heading">
        Request a quote
      </h2>
      <p className="mb-8 max-w-[68ch] text-lg leading-relaxed text-charcoal">
        The online quote form and drawing upload are not enabled yet. For now,
        email United Rubber Cork directly or call to discuss your requirement.
      </p>
      <h3 className="mb-4">What to include</h3>
      <ul className="mb-8 grid gap-2 p-0 sm:grid-cols-2">
        <li className="list-none border-l-2 border-cork pl-3 text-charcoal">
          Product name and application
        </li>
        <li className="list-none border-l-2 border-cork pl-3 text-charcoal">
          Required size, thickness and quantity
        </li>
        <li className="list-none border-l-2 border-cork pl-3 text-charcoal">
          Applicable standard or material requirement
        </li>
        <li className="list-none border-l-2 border-cork pl-3 text-charcoal">
          Drawing or sample details (send by email)
        </li>
        <li className="list-none border-l-2 border-cork pl-3 text-charcoal">
          Your name, company and contact number
        </li>
      </ul>
      <div className="flex flex-wrap gap-3">
        <a
          className="inline-flex min-h-12 items-center justify-center rounded-sm bg-amber px-5 py-3 font-semibold text-charcoal transition-colors hover:bg-amber/90 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
          href={`mailto:${COMPANY_EMAILS[0]}?subject=${encodeURIComponent("Quote request for United Rubber Cork products")}`}
        >
          Email a quote request
        </a>
        <a
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-charcoal px-5 py-3 font-semibold text-charcoal transition-colors hover:border-montado hover:bg-montado hover:text-paper focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
          href={`tel:${COMPANY_PHONES[0].href}`}
        >
          Call {COMPANY_PHONES[0].display}
        </a>
      </div>
      <p className="mb-0 mt-6 border-l-4 border-cork bg-cork-light/60 p-5 text-sm text-charcoal">
        Selecting the email option opens your email application. Your request
        is sent only after you review and send the message.
      </p>
    </section>
  );
}

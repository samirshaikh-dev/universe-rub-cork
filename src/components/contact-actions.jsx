import Link from "next/link";
import { COMPANY_EMAILS, COMPANY_PHONES } from "../config/site";

export default function ContactActions({ compact = false, stacked = false }) {
  const widthClass = stacked ? "w-full" : "w-full sm:w-auto";

  return (
    <div
      className={`flex gap-3 ${stacked ? "flex-col" : "flex-wrap"} ${compact ? "items-start" : "items-center"}`}
    >
      <Link
        className={`inline-flex min-h-12 ${widthClass} items-center justify-center rounded-sm bg-amber px-5 py-3 font-semibold text-montado transition-colors hover:bg-amber/90 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber`}
        href="/contact#request-a-quote"
      >
        Request a quote
      </Link>
      <a
        className={`inline-flex min-h-12 ${widthClass} items-center justify-center rounded-sm border border-montado bg-paper px-5 py-3 font-semibold text-montado transition-colors hover:border-montado hover:bg-montado hover:text-paper focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber`}
        href={`tel:${COMPANY_PHONES[0].href}`}
      >
        Call {COMPANY_PHONES[0].display}
      </a>
      {!compact && (
        <a
          className="inline-flex min-h-11 items-center font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
          href={`mailto:${COMPANY_EMAILS[0]}`}
        >
          Email United Rubber Cork
        </a>
      )}
    </div>
  );
}

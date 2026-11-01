import Link from "next/link";

import { WHATSAPP_LINK } from "../config/site";
import { WhatsAppIcon, ArrowRightIcon } from "./ui/icons";

/**
 * High-conversion primary CTAs:
 * - "Request a Quote" (leading to form)
 * - "Send Drawing on WhatsApp" (direct instant technical consultation)
 */
export default function ContactActions({ stacked = false, tone = "light" }) {
  const width = stacked ? "w-full" : "w-full sm:w-auto";
  const secondaryClass =
    tone === "dark" ? "btn--on-dark" : "btn--secondary";

  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${stacked ? "flex-col sm:flex-row" : ""}`}>
      <Link
        className={`btn btn--primary ${width} shadow-md`}
        href="/contact#request-a-quote"
      >
        <span>Request a Quote</span>
        <ArrowRightIcon className="size-4" />
      </Link>

      <a
        className={`btn btn--whatsapp ${width}`}
        href={WHATSAPP_LINK}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="size-4" />
        <span>Send Drawing on WhatsApp</span>
      </a>
    </div>
  );
}

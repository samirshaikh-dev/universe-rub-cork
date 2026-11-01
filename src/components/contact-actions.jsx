import Link from "next/link";

import { WHATSAPP_LINK } from "../config/site";

/**
 * The only two actions a buyer needs: open the quote form, or send the drawing
 * on WhatsApp. Call is always one tap away in the sticky mobile bar, the
 * header and the footer, so it does not compete here.
 */
export default function ContactActions({ stacked = false, tone = "light" }) {
  const width = stacked ? "w-full" : "w-full sm:w-auto";
  const secondaryClass = tone === "dark" ? "btn--on-dark" : "btn--secondary";

  return (
    <div className={`flex flex-wrap gap-3 ${stacked ? "flex-col" : ""}`}>
      <Link className={`btn btn--primary ${width}`} href="/contact#request-a-quote">
        Request a quote
      </Link>
      <a
        className={`btn ${secondaryClass} ${width}`}
        href={WHATSAPP_LINK}
        rel="noopener noreferrer"
        target="_blank"
      >
        Send your drawing on WhatsApp
      </a>
    </div>
  );
}

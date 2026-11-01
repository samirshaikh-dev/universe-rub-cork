import Link from "next/link";

import {
  BRAND_WORDMARK,
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
  SITE_NAME,
  WHATSAPP_LINK,
} from "../../config/site";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
  ShieldCheckIcon,
  ArrowUpRightIcon,
} from "../ui/icons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09120e] text-white" data-surface="dark">
      {/* Giant Subtle Background Watermark (Meelte-inspired) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden"
      >
        <div className="mx-auto w-full max-w-[2000px] px-4 sm:px-6 lg:px-8">
          <div className="relative h-[90px] sm:h-[130px] md:h-[170px] lg:h-[220px]">
            <span
              className="absolute bottom-[-16%] left-1/2 -translate-x-1/2 whitespace-nowrap font-extrabold leading-none tracking-tighter text-white/[0.03]"
              style={{
                fontSize: "clamp(4.5rem, 16vw, 20rem)",
                letterSpacing: "-0.04em",
              }}
            >
              United Rubber Cork
            </span>
          </div>
        </div>
      </div>

      <div className="shell relative z-10 pt-14 pb-12 lg:pt-18 lg:pb-14">
        {/* Top 4-Column Bento Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Works Assurance (4 cols on lg) */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-4">
            <Link
              aria-label={`${SITE_NAME} home`}
              className="flex items-center gap-3 no-underline text-white group w-fit"
              href="/"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-montado-vibrant border border-cork-gold/30 text-cork-gold transition-transform duration-200 group-hover:scale-105">
                <svg aria-hidden="true" className="size-5.5 text-cork-gold" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4.5" strokeDasharray="2.5 2.5" />
                  <circle cx="12" cy="5.5" r="1.25" fill="currentColor" />
                  <circle cx="12" cy="18.5" r="1.25" fill="currentColor" />
                  <circle cx="5.5" cy="12" r="1.25" fill="currentColor" />
                  <circle cx="18.5" cy="12" r="1.25" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  {BRAND_WORDMARK.primary} {BRAND_WORDMARK.secondary}
                </span>
                <span className="text-[0.68rem] font-semibold tracking-wider text-cork-light/70 uppercase">
                  Manufacturing Works • Vapi, Gujarat
                </span>
              </div>
            </Link>

            <p className="mt-4 mb-5 text-xs sm:text-sm leading-relaxed text-white/70 max-w-[38ch]">
              Direct manufacturer of natural cork and rubberised cork sheets,
              continuous die-cut gaskets, and precision sealing components engineered to drawing or to IS 4253 Part II.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="badge-tag badge-tag--dark text-xs">
                <span className="badge-pulse-dot" />
                <span>Works in GIDC Vapi</span>
              </span>
              <span className="badge-tag badge-tag--dark text-xs">
                <ShieldCheckIcon className="size-3.5 text-cork-gold" />
                <span>ISO 9001:2015 System</span>
              </span>
              <span className="badge-tag badge-tag--dark text-xs">
                <span>IS 4253 Part II</span>
              </span>
            </div>
          </div>

          {/* Column 2: Product Families (2.5 cols on lg) */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cork-gold mb-3.5">
              Product Families
            </h2>
            <ul className="m-0 grid gap-2 p-0 text-xs sm:text-sm">
              {[
                ["Rubberised Cork Sheets & Gaskets", "/products/rubberised-cork"],
                ["Die-Cut Jointless Gasket Frames", "/products/rubberised-cork"],
                ["Natural Cork Sheets & Rolls", "/products/cork"],
                ["Decorative Cork & Acoustic Tiles", "/products/decorative-cork"],
                ["Cork Granules & Vibration Slabs", "/products/cork"],
                ["Custom Cork Gifts & Novelties", "/products/cork-gifts"],
                ["All Product Specifications", "/products"],
              ].map(([label, href]) => (
                <li className="list-none" key={label}>
                  <Link
                    className="text-white/70 hover:text-white transition-colors duration-150 no-underline py-0.5 inline-block"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Applications & Quality (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cork-gold mb-3.5">
              Applications
            </h2>
            <ul className="m-0 grid gap-2 p-0 text-xs sm:text-sm">
              {[
                ["Power Transformers", "/industries/transformers"],
                ["Automotive Flanges", "/industries/automotive"],
                ["Acoustic & Vibration", "/industries/construction"],
                ["Quality Assurance", "/quality"],
                ["About United Rubber Cork", "/about"],
                ["Direct Factory Quote", "/contact#request-a-quote"],
              ].map(([label, href]) => (
                <li className="list-none" key={label}>
                  <Link
                    className="text-white/70 hover:text-white transition-colors duration-150 no-underline py-0.5 inline-block"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick CAD Submission Card (3 cols on lg) */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="rounded-2xl border border-white/12 bg-white/5 p-4 sm:p-5 backdrop-blur-sm">
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-cork-gold block mb-1">
                Engineering Desk
              </span>
              <h3 className="text-sm font-bold text-white mb-1.5">
                Have a Part Drawing?
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-3.5">
                Send DXF, DWG, PDF or sample dimensions for fast technical review and direct factory pricing.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  className="btn btn--whatsapp min-h-9 px-3 text-xs font-semibold w-full justify-center rounded-xl"
                  href={WHATSAPP_LINK}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className="size-3.5" />
                  <span>WhatsApp Drawing Line</span>
                </a>
                <Link
                  className="btn btn--on-dark min-h-9 px-3 text-xs font-semibold w-full justify-center rounded-xl"
                  href="/contact#request-a-quote"
                >
                  <span>Request Factory Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Works Contact & Information Row */}
        <div className="grid gap-6 py-8 sm:grid-cols-3 border-b border-white/10 text-xs">
          {/* Works Address */}
          <div className="flex items-start gap-2.5">
            <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-white/10 text-cork-gold mt-0.5">
              <MapPinIcon className="size-3.5" />
            </div>
            <div>
              <span className="font-bold text-white block">Works &amp; Dispatch Facility</span>
              <span className="text-white/70 leading-relaxed block mt-0.5">
                {COMPANY_ADDRESS.streetAddress}, {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode},{" "}
                {COMPANY_ADDRESS.addressRegion}, India
              </span>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-2.5">
            <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-white/10 text-cork-gold mt-0.5">
              <PhoneIcon className="size-3.5" />
            </div>
            <div>
              <span className="font-bold text-white block">Telephone Inquiries</span>
              <div className="flex flex-col gap-0.5 mt-0.5">
                {COMPANY_PHONES.map((phone) => (
                  <a
                    className="spec-num text-white/70 hover:text-white transition-colors"
                    href={`tel:${phone.href}`}
                    key={phone.display}
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Email Mailboxes */}
          <div className="flex items-start gap-2.5">
            <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-white/10 text-cork-gold mt-0.5">
              <MailIcon className="size-3.5" />
            </div>
            <div>
              <span className="font-bold text-white block">Official Mailboxes</span>
              <div className="flex flex-col gap-0.5 mt-0.5">
                {COMPANY_EMAILS.map((email) => (
                  <a
                    className="text-white/70 hover:text-white transition-colors"
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

        {/* Bottom Legal & Rights Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>&copy; {currentYear} {SITE_NAME}. All rights reserved.</span>
            <span>&bull;</span>
            <span>GIDC Vapi, Gujarat</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              className="text-white/60 hover:text-white transition-colors no-underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-white/60 hover:text-white transition-colors no-underline"
              href="/quality"
            >
              Quality &amp; Standards
            </Link>
            <Link
              className="text-white/60 hover:text-white transition-colors no-underline"
              href="/contact#request-a-quote"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

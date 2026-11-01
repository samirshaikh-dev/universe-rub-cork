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
    <footer className="border-t border-white/10 bg-[#0c1411] text-white" data-surface="dark">
      <div className="shell pt-14 pb-12 lg:pt-18 lg:pb-14">
        {/* Top Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Factory Identity */}
          <div className="flex flex-col">
            <Link
              aria-label={`${SITE_NAME} home`}
              className="flex items-center gap-3 no-underline text-white"
              href="/"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-md bg-montado-vibrant border border-cork-gold/40 text-white">
                <span className="text-sm font-black tracking-widest text-cork-gold">
                  URC
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  {BRAND_WORDMARK.primary} {BRAND_WORDMARK.secondary}
                </span>
                <span className="text-[0.7rem] font-semibold tracking-wider text-cork-light/70 uppercase">
                  Manufacturing Works • Vapi, Gujarat
                </span>
              </div>
            </Link>

            <p className="mt-5 mb-5 text-sm leading-relaxed text-white/70 max-w-[34ch]">
              Specialist manufacturer of natural cork and rubberised cork sheets,
              strips, gaskets, and frames engineered to drawing or to IS 4253 Part II.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="badge-tag badge-tag--dark text-xs">
                <ShieldCheckIcon className="size-3.5 text-cork-gold" />
                ISO 9001:2015 System
              </span>
              <span className="badge-tag badge-tag--dark text-xs">
                IS 4253 Part II
              </span>
            </div>
          </div>

          {/* Column 2: Product Families */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cork-gold mb-4">
              Product Families
            </h2>
            <ul className="m-0 grid gap-2.5 p-0 text-sm">
              {[
                ["Rubberised Cork Sheets & Gaskets", "/products/rubberised-cork"],
                ["Natural Cork Sheets & Rolls", "/products/cork"],
                ["Decorative Cork & Acoustic Tiles", "/products/decorative-cork"],
                ["Cork Granules & Vibration Slabs", "/products/cork"],
                ["Custom Cork Gifts & Novelties", "/products/cork-gifts"],
                ["All Product Specifications", "/products"],
              ].map(([label, href]) => (
                <li className="list-none" key={label}>
                  <Link
                    className="text-white/70 hover:text-white transition-colors duration-150 no-underline"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries & Quality */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cork-gold mb-4">
              Applications & Quality
            </h2>
            <ul className="m-0 grid gap-2.5 p-0 text-sm">
              {[
                ["Power Transformers & Switchgears", "/industries/transformers"],
                ["Automotive Engine & Flanges", "/industries/automotive"],
                ["Construction & Acoustic Insulation", "/industries/construction"],
                ["Quality Assurance & Standards", "/quality"],
                ["About United Rubber Cork", "/about"],
                ["Direct Factory Quote", "/contact#request-a-quote"],
              ].map(([label, href]) => (
                <li className="list-none" key={label}>
                  <Link
                    className="text-white/70 hover:text-white transition-colors duration-150 no-underline"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Factory Contact & Dispatch */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cork-gold mb-4">
              Factory & Sales Desk
            </h2>

            <div className="grid gap-3.5 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="size-4 shrink-0 text-cork-gold mt-1" />
                <address className="not-italic text-xs leading-relaxed text-white/75">
                  {COMPANY_ADDRESS.streetAddress},<br />
                  {COMPANY_ADDRESS.addressLocality} - {COMPANY_ADDRESS.postalCode},<br />
                  {COMPANY_ADDRESS.addressRegion}, India
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <PhoneIcon className="size-4 shrink-0 text-cork-gold" />
                <div className="grid gap-0.5">
                  <a
                    className="spec-num text-xs text-white/80 hover:text-white"
                    href={`tel:${COMPANY_PHONES[0].href}`}
                  >
                    {COMPANY_PHONES[0].display}
                  </a>
                  <a
                    className="spec-num text-xs text-white/80 hover:text-white"
                    href={`tel:${COMPANY_PHONES[1].href}`}
                  >
                    {COMPANY_PHONES[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MailIcon className="size-4 shrink-0 text-cork-gold" />
                <a
                  className="text-xs text-white/80 hover:text-white break-all"
                  href={`mailto:${COMPANY_EMAILS[0]}`}
                >
                  {COMPANY_EMAILS[0]}
                </a>
              </div>

              <div className="pt-2">
                <a
                  className="btn btn--whatsapp min-h-9 px-3 text-xs w-full justify-center"
                  href={WHATSAPP_LINK}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className="size-3.5" />
                  <span>Direct WhatsApp Line</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/60">
          <p className="m-0">
            © {currentYear} {SITE_NAME}. All rights reserved. GIDC Vapi, Gujarat.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              className="text-white/60 hover:text-white transition-colors"
              href="/privacy"
            >
              Privacy Notice
            </Link>
            <Link
              className="text-white/60 hover:text-white transition-colors"
              href="/quality"
            >
              Quality & Standards
            </Link>
            <a
              className="inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors"
              href="https://samir-portfolio-dev.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Designed & Developed by Samir Shaikh</span>
              <ArrowUpRightIcon className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

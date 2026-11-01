import Link from "next/link";
import {
  BRAND_WORDMARK,
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
  SITE_NAME,
} from "../../config/site";

const footerLink =
  "inline-flex min-h-9 items-center text-paper no-underline underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber";

export function Footer() {
  return (
    <footer className="bg-montado text-paper">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="border-t border-cork/25 pt-8" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_0.7fr] lg:gap-12">
          {/* Column 1: Brand */}
          <div className="max-w-[50ch]">
            <Link
              aria-label={`${SITE_NAME} home`}
              className="inline-flex flex-col items-start gap-[2px] text-[1.45rem] font-extrabold leading-none tracking-[0.015em] text-paper no-underline focus-visible:outline-3 focus-visible:outline-amber"
              href="/"
            >
              {BRAND_WORDMARK.primary}
              <span className="text-[0.9rem] font-normal tracking-normal">
                {BRAND_WORDMARK.secondary}
              </span>
            </Link>
            <span className="block w-10 h-[1px] mt-5 mb-7 bg-cork" aria-hidden="true" />
            <p className="mb-5 text-[clamp(1.15rem,3vw,1.6rem)] font-extrabold leading-[1.12] tracking-[-0.02em] [font-variation-settings:'wdth'_125]">
              Engineered with Cork. Built for Industry.
            </p>
            <p className="text-[0.95rem] leading-relaxed text-paper/90 max-w-[44ch]">
              Cork and rubberised cork products from GIDC, Vapi, Gujarat.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="max-w-[42ch]">
            <h2 className="mb-4 text-sm font-bold leading-tight tracking-[0.03em] [font-variation-settings:'wdth'_125] text-paper">
              Contact
            </h2>
            <address className="mb-5 text-[0.95rem] leading-relaxed text-paper/90">
              {COMPANY_ADDRESS.streetAddress}<br />
              {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode},{" "}
              {COMPANY_ADDRESS.addressRegion}, India
            </address>
            <ul className="space-y-2 p-0 text-[0.95rem]">
              {COMPANY_PHONES.map((phone) => (
                <li className="list-none" key={phone.href}>
                  <a className={footerLink} href={`tel:${phone.href}`}>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="list-none mt-3 pt-3 border-t border-cork/15">
                {COMPANY_EMAILS.map((email) => (
                  <a
                    key={email}
                    className={`${footerLink} block`}
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                ))}
              </li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h2 className="mb-4 text-sm font-bold leading-tight tracking-[0.03em] [font-variation-settings:'wdth'_125] text-paper">
              Explore
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="mt-1 grid gap-1 p-0 text-[0.95rem]">
                <li className="list-none">
                  <Link className={footerLink} href="/products">Products</Link>
                </li>
                <li className="list-none">
                  <Link className={footerLink} href="/industries">Industries</Link>
                </li>
                <li className="list-none">
                  <Link className={footerLink} href="/quality">Quality</Link>
                </li>
                <li className="list-none">
                  <Link className={footerLink} href="/about">
                    About United Rubber Cork
                  </Link>
                </li>
                <li className="list-none">
                  <Link className={footerLink} href="/contact">Contact</Link>
                </li>
                <li className="list-none">
                  <Link className={footerLink} href="/privacy">
                    Privacy notice
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t border-cork/20 mt-8 pt-6 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <p className="mb-0 text-[0.9rem] text-paper">
            United Rubber Cork, GIDC, Vapi, Gujarat
          </p>
          <p className="mb-0 text-[0.9rem] text-paper/85">
            Designed and developed by{" "}
            <a
              className="underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
              href="https://samir-portfolio-dev.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Samir Shaikh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Link from "next/link";

import {
  BRAND_WORDMARK,
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
  SITE_NAME,
} from "../../config/site";

const footerLink =
  "inline-flex min-h-11 items-center text-paper no-underline border-b border-transparent hover:border-cork transition-colors duration-200 ease-standard";

export function Footer() {
  return (
    <footer className="bg-montado text-paper" data-surface="dark">
      <div className="shell">
        <div className="grid gap-12 border-t border-cork/40 pt-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr] lg:gap-16">
          <div className="max-w-[46ch]">
            <Link
              aria-label={`${SITE_NAME} home`}
              className="inline-flex flex-col items-start gap-0.5 text-paper no-underline"
              href="/"
            >
              <span className="display-md text-paper!">
                {BRAND_WORDMARK.primary}
              </span>
              <span className="label font-normal tracking-[0.06em] text-paper/80">
                {BRAND_WORDMARK.secondary}
              </span>
            </Link>

            <p className="mt-6 mb-6 max-w-[34ch] text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.02em] text-paper [font-variation-settings:'wdth'_112,'wght'_700]">
              Cork, engineered to your drawing.
            </p>

            <ul className="m-0 flex flex-wrap gap-2 p-0">
              <li className="list-none">
                <Link
                  className="badge border-paper/35 text-paper!"
                  href="/quality"
                >
                  ISO 9001:2015
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="badge border-paper/35 text-paper!"
                  href="/quality"
                >
                  IS 4253 Part II
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="label mb-4 text-cork-light">Contact</h2>
            <address className="mb-5 not-italic spec-num text-[0.95rem] leading-relaxed text-paper/85">
              {COMPANY_ADDRESS.streetAddress}
              <br />
              {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode},{" "}
              {COMPANY_ADDRESS.addressRegion}, India
            </address>
            <ul className="m-0 grid p-0">
              {COMPANY_PHONES.map((phone) => (
                <li className="list-none" key={phone.href}>
                  <a className={`${footerLink} spec-num`} href={`tel:${phone.href}`}>
                    {phone.display}
                  </a>
                </li>
              ))}
              {COMPANY_EMAILS.map((email) => (
                <li className="list-none" key={email}>
                  <a className={`${footerLink} break-all text-[0.95rem]`} href={`mailto:${email}`}>
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label mb-4 text-cork-light">Explore</h2>
            <nav aria-label="Footer navigation">
              <ul className="m-0 grid p-0">
                {[
                  ["Products", "/products"],
                  ["Industries", "/industries"],
                  ["Quality", "/quality"],
                  ["About", "/about"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li className="list-none" key={href}>
                    <Link className={footerLink} href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-cork/25 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="spec-num m-0 text-[0.9rem] text-paper/85">
            United Rubber Cork, GIDC, Vapi, Gujarat
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.9rem] text-paper/85">
            <Link className={footerLink} href="/privacy">
              Privacy notice
            </Link>
            <p className="m-0">
              Designed and developed by{" "}
              <a
                className="text-paper underline-offset-4 hover:underline"
                href="https://samir-portfolio-dev.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Samir Shaikh
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

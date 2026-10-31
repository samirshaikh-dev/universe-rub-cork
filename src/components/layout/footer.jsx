import Link from "next/link";
import {
  BRAND_WORDMARK,
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
  SITE_NAME,
} from "../../config/site";

export function Footer() {
  return (
    <footer className="bg-montado pt-14 text-paper">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 pb-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_0.6fr] lg:gap-12">
        <div className="max-w-[32ch]">
          <Link
            aria-label={`${SITE_NAME} home`}
            className="inline-flex flex-col items-start gap-[2px] text-[1.35rem] font-extrabold leading-none tracking-[0.015em] text-paper no-underline"
            href="/"
          >
            {BRAND_WORDMARK.primary}
            <span className="text-[0.84rem] font-normal tracking-normal">
              {BRAND_WORDMARK.secondary}
            </span>
          </Link>
          <p className="mb-0 mt-5 text-paper/85">
            Cork and rubberised cork products from GIDC, Vapi, Gujarat.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-base tracking-normal text-paper!">Contact</h2>
          <address className="text-[0.95rem] leading-relaxed text-paper/90">
            {COMPANY_ADDRESS.streetAddress}
            <br />
            {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode},{" "}
            {COMPANY_ADDRESS.addressRegion}, India
          </address>
          <ul className="mt-3 grid gap-1 p-0 text-[0.95rem]">
            {COMPANY_PHONES.map((phone) => (
              <li className="list-none" key={phone.href}>
                <a
                  className="inline-flex min-h-9 items-center text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
                  href={`tel:${phone.href}`}
                >
                  {phone.display}
                </a>
              </li>
            ))}
            {COMPANY_EMAILS.map((email) => (
              <li className="list-none" key={email}>
                <a
                  className="inline-flex min-h-9 max-w-full items-center break-all text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-base tracking-normal text-paper!">Explore</h2>
          <ul className="mt-3 grid gap-1 p-0 text-[0.95rem]">
            <li className="list-none">
              <Link className="inline-flex min-h-9 items-center text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber" href="/products">Products</Link>
            </li>
            <li className="list-none">
              <Link className="inline-flex min-h-9 items-center text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber" href="/industries">Industries</Link>
            </li>
            <li className="list-none">
              <Link className="inline-flex min-h-9 items-center text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber" href="/quality">Quality</Link>
            </li>
            <li className="list-none">
              <Link className="inline-flex min-h-9 items-center text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber" href="/about">About United Rubber Cork</Link>
            </li>
            <li className="list-none">
              <Link className="inline-flex min-h-9 items-center text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber" href="/contact">Contact</Link>
            </li>
            <li className="list-none">
              <Link className="inline-flex min-h-9 items-center text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber" href="/privacy">Privacy notice</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-3 border-t border-paper/30 px-5 py-4 text-sm sm:px-6 md:flex-row md:items-center">
        <p className="mb-0">United Rubber Cork, GIDC, Vapi, Gujarat</p>
        <p className="mb-0">
          Designed and developed by{" "}
          <a
            className="text-paper underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
            href="https://samir-portfolio-dev.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Samir Shaikh
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

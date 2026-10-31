import Link from "next/link";
import { BRAND_WORDMARK, NAV_ITEMS, SITE_NAME } from "../../config/site";

export function Navbar() {
  return (
    <header className="relative z-10 border-b border-montado/15 bg-paper">
      <a
        className="absolute left-2 top-2 z-50 -translate-y-[160%] bg-paper px-4 py-3 font-semibold text-montado transition-transform focus:translate-y-0 focus-visible:outline-3 focus-visible:outline-amber"
        href="#main"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-5 py-4 sm:px-6 lg:min-h-[76px] lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <Link
          aria-label={`${SITE_NAME} home`}
          className="inline-flex shrink-0 flex-col items-start gap-[2px] text-[1.35rem] font-extrabold leading-none tracking-[0.015em] text-montado no-underline"
          href="/"
        >
          {BRAND_WORDMARK.primary}
          <span className="text-[0.84rem] font-normal tracking-normal">
            {BRAND_WORDMARK.secondary}
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex w-full flex-wrap items-center gap-x-4 gap-y-1 lg:w-auto lg:justify-end lg:gap-x-6"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              className="inline-flex min-h-11 items-center text-[0.95rem] text-charcoal no-underline underline-offset-4 hover:text-montado hover:underline focus-visible:outline-3 focus-visible:outline-amber"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-sm border border-charcoal px-4 py-2 font-semibold text-charcoal transition-colors hover:border-montado hover:bg-montado hover:text-paper focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
            href="/contact#request-a-quote"
          >
            Request a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

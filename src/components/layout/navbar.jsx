import Link from "next/link";
import { BRAND_WORDMARK, NAV_ITEMS, SITE_NAME } from "../../config/site";

export function Navbar() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="header-inner">
        <Link aria-label={`${SITE_NAME} home`} className="wordmark" href="/">
          {BRAND_WORDMARK.primary}
          <span>{BRAND_WORDMARK.secondary}</span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {NAV_ITEMS.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link
            className="button button-secondary header-quote"
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

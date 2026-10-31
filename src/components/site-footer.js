import Link from "next/link";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
  SITE_NAME,
} from "../config/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link aria-label={`${SITE_NAME} home`} className="wordmark wordmark-light" href="/">
            AMCORK
            <span>Industries</span>
          </Link>
          <p className="footer-summary">
            Cork and rubberised cork products from GIDC, Vapi, Gujarat.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <address>
            {COMPANY_ADDRESS.streetAddress}
            <br />
            {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode},{" "}
            {COMPANY_ADDRESS.addressRegion}, India
          </address>
          <ul className="footer-contact-list">
            {COMPANY_PHONES.map((phone) => (
              <li key={phone.href}>
                <a href={`tel:${phone.href}`}>{phone.display}</a>
              </li>
            ))}
            {COMPANY_EMAILS.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-links">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/quality">Quality</Link>
            </li>
            <li>
              <Link href="/about">About AMCORK</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy notice</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>AMCORK Industries · GIDC, Vapi, Gujarat</p>
        <Link href="/request-quote">Request a quote</Link>
      </div>
    </footer>
  );
}

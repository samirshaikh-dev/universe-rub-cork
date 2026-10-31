import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="section-kicker">Page not found</p>
      <h1>This page has moved or does not exist.</h1>
      <p>Go to Products, or contact United Rubber Cork to discuss a quote.</p>
      <div className="contact-actions">
        <Link className="button button-primary" href="/products">
          Browse products
        </Link>
        <Link className="button button-secondary" href="/request-quote">
          Request a quote
        </Link>
      </div>
    </section>
  );
}

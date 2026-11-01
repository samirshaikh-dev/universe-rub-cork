import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col justify-center py-20">
      <p className="spec-num m-0 mb-4 text-sm text-charcoal/70">404</p>
      <h1 className="display-xl m-0 mb-5 max-w-[16ch]">
        This page has moved or does not exist.
      </h1>
      <p className="m-0 mb-8 max-w-[52ch] text-charcoal">
        Go to Products, or contact United Rubber Cork to discuss a quote.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link className="btn btn--primary" href="/products">
          Browse products
        </Link>
        <Link className="btn btn--secondary" href="/contact#request-a-quote">
          Request a quote
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto min-h-[55vh] w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28">
      <p className="mb-4 text-sm font-semibold text-montado">Page not found</p>
      <h1 className="mb-5 max-w-[14ch]">
        This page has moved or does not exist.
      </h1>
      <p className="mb-7 max-w-[58ch] text-charcoal">
        Go to Products, or contact United Rubber Cork to discuss a quote.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          className="inline-flex min-h-12 items-center justify-center rounded-sm bg-amber px-5 py-3 font-semibold text-charcoal transition-colors hover:bg-amber/90 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
          href="/products"
        >
          Browse products
        </Link>
        <Link
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-charcoal px-5 py-3 font-semibold text-charcoal transition-colors hover:border-montado hover:bg-montado hover:text-paper focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
          href="/contact#request-a-quote"
        >
          Request a quote
        </Link>
      </div>
    </section>
  );
}

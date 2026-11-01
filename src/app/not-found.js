import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "../components/ui/icons";
import { COMPANY_PHONES } from "../config/site";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[65vh] flex-col justify-center py-20 text-center items-center">
      <span className="badge-tag mb-4">
        <span>404 Error</span>
      </span>

      <h1 className="display-xl m-0 mb-4 max-w-[20ch]">
        The requested technical page does not exist or has moved.
      </h1>

      <p className="m-0 mb-8 max-w-[54ch] text-charcoal-light text-base leading-relaxed">
        The drawing specification or material URL you followed could not be found.
        Explore our complete cork and gasket product ranges or connect directly with our works.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3.5">
        <Link className="btn btn--primary" href="/products">
          <span>Browse Product Catalogue</span>
          <ArrowRightIcon className="size-4" />
        </Link>
        <Link className="btn btn--secondary" href="/contact#request-a-quote">
          <span>Request Custom Quote</span>
        </Link>
        <a
          className="btn btn--secondary"
          href={`tel:${COMPANY_PHONES[0].href}`}
        >
          <PhoneIcon className="size-4 text-montado" />
          <span>Call Works</span>
        </a>
      </div>
    </section>
  );
}

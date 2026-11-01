import Link from "next/link";

import ContactActions from "../contact-actions";
import PageCta from "../sections/page-cta";
import SpecificationList from "../sections/specification-list";
import {
  ShieldCheckIcon,
  RulerIcon,
  ArrowRightIcon,
  LayersIcon,
  WhatsAppIcon,
} from "../ui/icons";
import { WHATSAPP_LINK } from "../../config/site";

export default function IndustryContent({ industry, relatedProducts }) {
  const specifications = industry.specifications.map(([name, details]) => ({
    name,
    details,
  }));

  return (
    <>
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20">
        {/* Left Column: Application Context & Specifications */}
        <div>
          <div className="mb-6 rounded-2xl border border-montado/12 bg-white p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2 block">
              Application Scope
            </span>
            <p className="m-0 text-base sm:text-lg leading-relaxed text-charcoal font-medium">
              {industry.body}
            </p>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="display-sm m-0 text-charcoal">
              Documented Manufacturing Parameters
            </h2>
            <span className="badge-tag text-xs">
              <ShieldCheckIcon className="size-3 text-montado" />
              <span>IS 4253 Basis</span>
            </span>
          </div>

          <SpecificationList items={specifications} />

          {/* Direct WhatsApp Callout for Engineers */}
          <div className="mt-8 rounded-xl border border-[#25d366]/30 bg-[#25d366]/10 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="m-0 text-sm font-bold text-charcoal">
                Need Fast Technical Consultation for {industry.name}?
              </p>
              <p className="mt-0.5 mb-0 text-xs text-charcoal-light">
                Chat directly with our manufacturing desk regarding fluid compatibility and dimensions.
              </p>
            </div>
            <a
              className="btn btn--whatsapp min-h-10 px-4 text-xs font-bold shrink-0"
              href={WHATSAPP_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-4" />
              <span>WhatsApp Engineers</span>
            </a>
          </div>
        </div>

        {/* Right Column: Relevant Products */}
        <div className="self-start">
          <div className="rounded-2xl border border-montado/12 bg-white p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-montado/10">
              <LayersIcon className="size-4 text-montado" />
              <h2 className="display-sm m-0 text-charcoal">
                Relevant Product Ranges
              </h2>
            </div>

            <ul className="m-0 grid gap-3 p-0">
              {relatedProducts.map((product) => (
                <li className="list-none" key={product.slug}>
                  <Link
                    className="group flex flex-col gap-1 rounded-xl border border-montado/10 bg-sheet/40 p-4 no-underline transition-all hover:border-montado/30 hover:bg-white hover:shadow-sm"
                    href={`/products/${product.slug}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-montado text-base group-hover:text-montado-vibrant">
                        {product.name}
                      </span>
                      <ArrowRightIcon className="size-4 text-montado transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                      {product.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-montado/10">
              <p className="m-0 text-xs text-charcoal-muted leading-relaxed mb-3">
                Have a customized drawing that doesn&apos;t fit standard dimensions? We produce
                die-cut tooling for bespoke assemblies.
              </p>
              <Link
                className="btn btn--secondary w-full text-center text-xs font-semibold justify-center"
                href="/contact#request-a-quote"
              >
                Request Custom Dimensions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        description="Share a drawing, sample, or required dimensions to discuss a precision specification."
        title={`Discuss your ${industry.name.toLowerCase()} sealing application.`}
      >
        <ContactActions />
      </PageCta>
    </>
  );
}

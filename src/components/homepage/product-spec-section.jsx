import Link from "next/link";

import { SPEC_ROWS } from "../../data/site-content";
import {
  FileTextIcon,
  RulerIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from "../ui/icons";

export default function ProductSpecSection() {
  return (
    <section className="section bg-white border-b border-montado/10">
      <div className="shell">
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-montado/10 pb-5">
          <div className="max-w-[580px]">
            <div className="mb-2 flex items-center gap-2">
              <span className="badge-tag">
                <RulerIcon className="size-3.5 text-montado" />
                <span>Manufacturing Matrix</span>
              </span>
              <span className="badge-tag badge-tag--cork">
                <span>Direct Works Dispatch</span>
              </span>
            </div>
            <h2 className="display-lg m-0 text-balance">
              Standard Capacities &amp; Dimensions
            </h2>
            <p className="mt-2 mb-0 text-xs sm:text-sm text-charcoal-light">
              Review standard manufactured thicknesses and sizes. Custom continuous
              frames, washers, and punched shapes are fabricated to your drawing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link className="btn btn--secondary min-h-9 px-3.5 text-xs font-semibold" href="/products">
              <span>All Products</span>
              <ArrowRightIcon className="size-3" />
            </Link>
            <Link
              className="btn btn--primary min-h-9 px-4 text-xs font-bold"
              href="/contact#request-a-quote"
            >
              <span>Custom Size Quote</span>
            </Link>
          </div>
        </div>

        {/* Technical Specification Matrix (Responsive) */}
        {/* Desktop Table */}
        <div className="hidden sm:block bento-card overflow-hidden">
          <table className="spec-table">
            <thead>
              <tr>
                <th scope="col">Product Material</th>
                <th scope="col">Thickness / Mesh</th>
                <th scope="col">Standard Manufactured Sizes</th>
                <th scope="col">Standard</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {SPEC_ROWS.map((row) => (
                <tr key={`${row.product}-${row.thickness}`}>
                  <th scope="row" className="font-bold text-montado">
                    <Link
                      className="no-underline hover:text-montado-vibrant hover:underline text-xs sm:text-sm"
                      href={`/products/${row.slug}`}
                    >
                      {row.product}
                    </Link>
                  </th>
                  <td className="spec-num font-semibold text-charcoal text-xs sm:text-sm">
                    {row.thickness}
                  </td>
                  <td className="spec-num text-charcoal-light text-xs sm:text-sm">{row.sizes}</td>
                  <td>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal-muted">
                      <ShieldCheckIcon className="size-3 text-cork" />
                      <span>IS 4253 / Drawing</span>
                    </span>
                  </td>
                  <td className="text-right">
                    <Link
                      className="btn btn--secondary min-h-7 px-3 py-1 text-xs font-semibold inline-flex"
                      href={`/contact#request-a-quote`}
                    >
                      <span>Quote</span>
                      <ArrowRightIcon className="size-2.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Scannable Bento Cards (Replaces awkward horizontal scroll) */}
        <div className="sm:hidden grid gap-2.5">
          {SPEC_ROWS.map((row) => (
            <div className="bento-card p-3.5" key={`mobile-${row.product}`}>
              <div className="flex items-center justify-between pb-2 border-b border-montado/8 mb-2">
                <Link
                  className="font-bold text-montado text-xs no-underline"
                  href={`/products/${row.slug}`}
                >
                  {row.product}
                </Link>
                <span className="badge-tag text-[0.65rem] py-0.5 px-2">
                  IS 4253
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <div>
                  <span className="text-charcoal-muted block text-[0.68rem]">Thickness</span>
                  <span className="spec-num font-bold text-charcoal">{row.thickness}</span>
                </div>
                <div>
                  <span className="text-charcoal-muted block text-[0.68rem]">Sizes</span>
                  <span className="spec-num text-charcoal-light">{row.sizes}</span>
                </div>
              </div>
              <Link
                className="btn btn--secondary min-h-8 w-full text-xs font-semibold"
                href="/contact#request-a-quote"
              >
                <span>Request Custom Quote</span>
                <ArrowRightIcon className="size-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-start gap-3 rounded-lg border border-montado/8 bg-sheet/60 p-3.5">
            <div className="grid size-7 shrink-0 place-items-center rounded bg-montado/10 text-montado">
              <RulerIcon className="size-3.5" />
            </div>
            <div>
              <p className="m-0 text-xs font-bold text-charcoal">Custom Die Tooling</p>
              <p className="mt-0.5 mb-0 text-[0.72rem] text-charcoal-muted">
                Made to CAD drawings (.dwg, .dxf, .pdf) or physical samples.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-montado/8 bg-sheet/60 p-3.5">
            <div className="grid size-7 shrink-0 place-items-center rounded bg-montado/10 text-montado">
              <CheckCircleIcon className="size-3.5" />
            </div>
            <div>
              <p className="m-0 text-xs font-bold text-charcoal">Jointless Construction</p>
              <p className="mt-0.5 mb-0 text-[0.72rem] text-charcoal-muted">
                One-piece gasket frames eliminate dovetail leaks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-montado/8 bg-sheet/60 p-3.5">
            <div className="grid size-7 shrink-0 place-items-center rounded bg-montado/10 text-montado">
              <FileTextIcon className="size-3.5" />
            </div>
            <div>
              <p className="m-0 text-xs font-bold text-charcoal">Batch Test Documentation</p>
              <p className="mt-0.5 mb-0 text-[0.72rem] text-charcoal-muted">
                Compressibility, recovery, and oil immersion test records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

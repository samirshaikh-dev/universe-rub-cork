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
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-montado/12 pb-6">
          <div className="max-w-[620px]">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="badge-tag">
                <RulerIcon className="size-3.5 text-montado" />
                <span>Manufacturing Dimensions</span>
              </span>
              <span className="badge-tag badge-tag--cork">
                <span>Direct From Factory</span>
              </span>
            </div>
            <h2 className="display-lg m-0 text-balance">
              Published Dimensions &amp; Technical Capacities
            </h2>
            <p className="mt-3 mb-0 text-sm sm:text-base text-charcoal-light">
              Review standard manufactured thicknesses, sheet dimensions, and slit widths.
              Custom sizes, washers, continuous jointless frames, and die-cut shapes
              are precision-manufactured to your engineering drawing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link className="btn btn--secondary min-h-10 text-sm" href="/products">
              <span>All Product Families</span>
              <ArrowRightIcon className="size-3.5" />
            </Link>
            <Link
              className="btn btn--primary min-h-10 text-sm"
              href="/contact#request-a-quote"
            >
              <span>Custom Size Quote</span>
            </Link>
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div className="spec-table-container">
          <table className="spec-table">
            <caption>
              Documented standard manufacturing ranges • United Rubber Cork Works, Vapi
            </caption>
            <thead>
              <tr>
                <th scope="col">Product Material</th>
                <th scope="col">Thickness / Mesh Range</th>
                <th scope="col">Standard Manufactured Sizes</th>
                <th scope="col">Manufacturing Basis</th>
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
                      className="no-underline hover:text-montado-vibrant hover:underline"
                      href={`/products/${row.slug}`}
                    >
                      {row.product}
                    </Link>
                  </th>
                  <td className="spec-num font-semibold text-charcoal">
                    {row.thickness}
                  </td>
                  <td className="spec-num text-charcoal-light">{row.sizes}</td>
                  <td>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal-muted">
                      <ShieldCheckIcon className="size-3.5 text-cork" />
                      <span>IS 4253 / Drawing</span>
                    </span>
                  </td>
                  <td className="text-right">
                    <Link
                      className="btn btn--secondary min-h-8 px-3 py-1 text-xs font-semibold inline-flex"
                      href={`/contact#request-a-quote`}
                    >
                      <span>Quote Size</span>
                      <ArrowRightIcon className="size-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 rounded-lg border border-montado/10 bg-sheet p-4">
            <div className="grid size-8 shrink-0 place-items-center rounded bg-montado/10 text-montado">
              <RulerIcon className="size-4" />
            </div>
            <div>
              <p className="m-0 text-sm font-bold text-charcoal">Custom Die Tooling</p>
              <p className="mt-1 mb-0 text-xs text-charcoal-muted">
                Made to CAD drawings (.dwg, .dxf, .pdf) or physical component samples.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-montado/10 bg-sheet p-4">
            <div className="grid size-8 shrink-0 place-items-center rounded bg-montado/10 text-montado">
              <CheckCircleIcon className="size-4" />
            </div>
            <div>
              <p className="m-0 text-sm font-bold text-charcoal">Continuous Jointless</p>
              <p className="mt-1 mb-0 text-xs text-charcoal-muted">
                One-piece gasket frames eliminate dovetail leaks in high-pressure flanges.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-montado/10 bg-sheet p-4">
            <div className="grid size-8 shrink-0 place-items-center rounded bg-montado/10 text-montado">
              <FileTextIcon className="size-4" />
            </div>
            <div>
              <p className="m-0 text-sm font-bold text-charcoal">Batch Test Verification</p>
              <p className="mt-1 mb-0 text-xs text-charcoal-muted">
                Compressibility, recovery, and oil immersion test certificates available on request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

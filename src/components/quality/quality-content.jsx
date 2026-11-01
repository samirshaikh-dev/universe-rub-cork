import Link from "next/link";
import {
  ShieldCheckIcon,
  AwardIcon,
  FileTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "../ui/icons";

const MARKS = [
  {
    standard: "ISO 9001:2015",
    type: "Quality Management System",
    description:
      "United Rubber Cork's company records identify an ISO 9001:2015 quality system covering manufacturing, slitting, and die-cutting operations. Certificate copies, scope, issuing body, and validity details can be supplied upon direct inquiry.",
    points: [
      "Process standardization for compound mixing and vulcanization",
      "Traceable batch records and dimensional inspection logs",
      "Consistent raw cork granulate grading and binder ratios",
    ],
  },
  {
    standard: "IS 4253 Part II",
    type: "Indian National Product Standard",
    description:
      "Rubberised cork sheets, strips, and finished gaskets are produced to Indian Standard IS 4253 Part II or to customer-specific technical drawings. Confirm the applicable grade (e.g. Grade RC-70-C or RC-80-B) against your engineering drawings.",
    points: [
      "Standard test parameters for compressibility and recovery (ASTM F36 / IS 4253)",
      "Immersion resistance in transformer mineral oil and reference fuels",
      "Tensile strength and hardness tolerances for industrial flange sealing",
    ],
  },
];

export default function QualityContent() {
  return (
    <section className="max-w-[1000px]">
      <div className="mb-8">
        <span className="badge-tag mb-2.5">
          <ShieldCheckIcon className="size-3.5 text-montado" />
          <span>Quality Assurance &amp; Standards</span>
        </span>
        <h2 className="display-md m-0 text-charcoal">
          Manufacturing Standards &amp; Verification Framework
        </h2>
        <p className="mt-2.5 mb-0 text-sm sm:text-base text-charcoal-light leading-relaxed">
          United Rubber Cork follows rigorous quality control protocols from Portuguese Mediterranean
          cork granules to high-pressure vulcanized rubber-cork blocks, precision skiving, and CNC
          die-cutting.
        </p>
      </div>

      {/* Standards Cards */}
      <div className="grid gap-6">
        {MARKS.map((mark) => (
          <article
            className="card-surface rounded-2xl border border-montado/15 bg-white p-6 sm:p-8 shadow-sm"
            key={mark.standard}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-montado/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-montado/10 text-montado">
                  <AwardIcon className="size-6" />
                </div>
                <div>
                  <h3 className="spec-num text-xl font-bold text-montado m-0">
                    {mark.standard}
                  </h3>
                  <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                    {mark.type}
                  </span>
                </div>
              </div>

              <span className="badge-tag badge-tag--cork text-xs self-start sm:self-auto">
                Published Reference
              </span>
            </div>

            <p className="text-sm leading-relaxed text-charcoal mb-5">
              {mark.description}
            </p>

            <div className="rounded-xl bg-sheet p-4 border border-montado/8">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted block mb-2">
                Key Parameters Covered
              </span>
              <ul className="m-0 grid gap-2 p-0 text-xs sm:text-sm text-charcoal-light">
                {mark.points.map((pt, i) => (
                  <li className="flex items-start gap-2 list-none" key={i}>
                    <CheckCircleIcon className="size-4 text-montado shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Verification Notice */}
      <div className="mt-8 rounded-xl border border-cork/30 bg-cork-light/25 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <FileTextIcon className="size-5 text-cork-deep shrink-0 mt-0.5" />
          <div>
            <span className="text-sm font-bold text-charcoal block">
              Confirm Documentation for Purchase Orders
            </span>
            <p className="m-0 text-xs text-charcoal-light leading-relaxed mt-0.5">
              Certificate copies, test inspection logs, and batch test evidence should be verified
              with United Rubber Cork prior to purchase order confirmation.
            </p>
          </div>
        </div>

        <Link
          className="btn btn--primary min-h-10 px-4 text-xs font-bold shrink-0"
          href="/contact#request-a-quote"
        >
          <span>Ask for Documentation</span>
          <ArrowRightIcon className="size-3" />
        </Link>
      </div>
    </section>
  );
}

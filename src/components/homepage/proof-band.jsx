import Link from "next/link";
import {
  ShieldCheckIcon,
  FactoryIcon,
  FileTextIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "../ui/icons";

const STEPS = [
  {
    step: "01",
    title: "Share Drawing, Dimensions or Sample",
    body: "Upload your CAD drawings (.dwg, .dxf, .pdf), dimensional sketch, or send a physical sample to our Vapi works. State the required thickness and application.",
  },
  {
    step: "02",
    title: "Engineering Review & Material Matching",
    body: "Our toolroom evaluates your bolt-hole pitch, flange dimensions, and oil immersion criteria to match the optimal IS 4253 grade or custom rubberised cork blend.",
  },
  {
    step: "03",
    title: "Direct Quotation & Factory Dispatch",
    body: "Receive a formal quotation with transparent factory-direct pricing, tooling timeline, and dispatched batch test documentation.",
  },
];

export default function ProofBand() {
  return (
    <section className="bg-[#0b1712] py-16 text-white md:py-24" data-surface="dark">
      <div className="shell grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-18 xl:gap-24">
        {/* Left Side: Quality & Compliance */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cork-gold/30 bg-cork-gold/10 px-3 py-1 text-xs font-semibold text-cork-gold">
              <ShieldCheckIcon className="size-3.5" />
              <span>Standard Compliance &amp; Quality</span>
            </div>

            <h2 className="display-lg m-0 text-white text-balance">
              Verified Sealing Solutions. Manufactured with Rigorous Quality Controls.
            </h2>

            <p className="mt-4 mb-8 text-sm sm:text-base leading-relaxed text-white/75 max-w-[50ch]">
              Every batch of rubberised cork is compounded, cured, and precision-slit under
              standardized quality protocols at our Vapi industrial plant.
            </p>

            {/* Standards Cards */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div className="rounded-xl border border-white/12 bg-white/5 p-4.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-cork-gold mb-1">
                  <ShieldCheckIcon className="size-4" />
                  <span className="spec-num text-sm font-bold">ISO 9001:2015</span>
                </div>
                <p className="m-0 text-xs text-white/70 leading-relaxed">
                  Quality management system listed in company records. Request current documentation.
                </p>
              </div>

              <div className="rounded-xl border border-white/12 bg-white/5 p-4.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-cork-gold mb-1">
                  <ShieldCheckIcon className="size-4" />
                  <span className="spec-num text-sm font-bold">IS 4253 Part II</span>
                </div>
                <p className="m-0 text-xs text-white/70 leading-relaxed">
                  Published manufacturing standard for rubberised cork sheets and gasket components.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link className="btn btn--on-dark min-h-11 px-5 text-sm" href="/quality">
              <span>View Quality Information</span>
              <ArrowRightIcon className="size-3.5" />
            </Link>
            <Link
              className="btn btn--amber min-h-11 px-5 text-sm font-bold"
              href="/contact#request-a-quote"
            >
              <span>Request Material Verification</span>
            </Link>
          </div>
        </div>

        {/* Right Side: The 3-Step Process */}
        <div className="rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cork-gold">
                Fulfillment Process
              </span>
              <h3 className="text-lg font-bold text-white m-0 mt-0.5">
                How We Deliver Your Gasket Specification
              </h3>
            </div>
            <div className="grid size-9 place-items-center rounded-lg bg-white/10 text-cork-gold">
              <ClockIcon className="size-5" />
            </div>
          </div>

          <ol className="m-0 grid gap-6 p-0">
            {STEPS.map((step) => (
              <li className="grid grid-cols-[2.75rem_1fr] gap-4 list-none" key={step.step}>
                <span className="spec-num flex size-9 items-center justify-center rounded-lg bg-cork/20 text-sm font-black text-cork-gold border border-cork/30">
                  {step.step}
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white m-0 mb-1">
                    {step.title}
                  </h4>
                  <p className="m-0 text-xs sm:text-sm text-white/70 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

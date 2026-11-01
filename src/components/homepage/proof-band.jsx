import Link from "next/link";
import {
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon,
} from "../ui/icons";

const STEPS = [
  {
    step: "01",
    title: "Send Drawing or Sample",
    body: "Share your CAD drawings (.dwg, .dxf, .pdf), dimensional sketch, or physical sample with required thickness.",
  },
  {
    step: "02",
    title: "Tooling & Material Matching",
    body: "Our toolroom evaluates bolt-hole pitch, flange dimensions, and oil immersion criteria to match the optimal grade.",
  },
  {
    step: "03",
    title: "Quotation & Direct Dispatch",
    body: "Receive direct factory pricing and lead time, followed by precision batch production and dispatch from Vapi.",
  },
];

export default function ProofBand() {
  return (
    <section className="bg-[#091410] py-14 text-white md:py-20 border-b border-white/10" data-surface="dark">
      <div className="shell grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 xl:gap-20 items-center">
        {/* Left Side: Quality & Compliance */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-cork-gold/30 bg-cork-gold/10 px-3.5 py-1 text-xs font-semibold text-cork-gold">
              <ShieldCheckIcon className="size-3.5" />
              <span>Standard Compliance &amp; Quality</span>
            </div>

            <h2 className="display-lg m-0 text-white text-balance">
              Verified Sealing Solutions. Rigorous Quality Controls.
            </h2>

            <p className="mt-3 mb-6 text-xs sm:text-sm leading-relaxed text-white/70 max-w-[48ch]">
              Compounded, cured, and precision-slit under standardized quality protocols
              at our GIDC Vapi industrial works.
            </p>

            {/* Standards Cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-cork-gold mb-1.5">
                  <ShieldCheckIcon className="size-4" />
                  <span className="spec-num text-xs sm:text-sm font-bold">ISO 9001:2015</span>
                </div>
                <p className="m-0 text-[0.75rem] text-white/70 leading-relaxed">
                  Quality management system listed in company records. Current docs on request.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-cork-gold mb-1.5">
                  <ShieldCheckIcon className="size-4" />
                  <span className="spec-num text-xs sm:text-sm font-bold">IS 4253 Part II</span>
                </div>
                <p className="m-0 text-[0.75rem] text-white/70 leading-relaxed">
                  Published manufacturing standard for rubberised cork sheets and gasket parts.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link className="btn btn--on-dark min-h-10 px-4 text-xs font-semibold rounded-xl" href="/quality">
              <span>Quality Details</span>
              <ArrowRightIcon className="size-3" />
            </Link>
            <Link
              className="btn btn--amber min-h-10 px-5 text-xs font-bold rounded-xl"
              href="/contact#request-a-quote"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>

        {/* Right Side: The 3-Step Process */}
        <div className="rounded-2xl border border-white/12 bg-white/5 p-5 sm:p-7 backdrop-blur-md">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
            <div>
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-cork-gold">
                Fulfillment Process
              </span>
              <h3 className="text-base font-bold text-white m-0 mt-0.5">
                From Drawing to Direct Dispatch
              </h3>
            </div>
            <div className="grid size-9 place-items-center rounded-xl bg-white/10 text-cork-gold">
              <ClockIcon className="size-4.5" />
            </div>
          </div>

          <div className="grid gap-3.5">
            {STEPS.map((item) => (
              <div
                className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/4 p-3.5 sm:p-4 transition-colors hover:bg-white/8"
                key={item.step}
              >
                <span className="spec-num grid size-7 shrink-0 place-items-center rounded-lg bg-montado-vibrant text-xs font-extrabold text-cork-gold">
                  {item.step}
                </span>
                <div>
                  <h4 className="m-0 text-xs sm:text-sm font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 mb-0 text-xs text-white/70 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

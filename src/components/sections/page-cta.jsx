import { ShieldCheckIcon, PhoneIcon } from "../ui/icons";
import { COMPANY_PHONES } from "../../config/site";

export default function PageCta({ title, description, children }) {
  return (
    <section className="mt-16 sm:mt-24 rounded-2xl border border-montado/15 bg-gradient-to-br from-sheet via-white to-cork-light/20 p-8 sm:p-12 shadow-sm">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-center justify-between">
        <div className="max-w-[620px]">
          <div className="mb-2.5 flex items-center gap-2">
            <span className="badge-tag">
              <ShieldCheckIcon className="size-3.5 text-montado" />
              <span>Direct Works Support</span>
            </span>
            <span className="text-xs text-charcoal-muted">
              • Vapi, Gujarat
            </span>
          </div>

          <h2 className="display-md m-0 mb-3 text-balance text-charcoal">
            {title}
          </h2>

          {description && (
            <p className="m-0 text-sm sm:text-base text-charcoal-light leading-relaxed">
              {description}
            </p>
          )}

          <div className="mt-4 flex items-center gap-2 text-xs text-charcoal-muted">
            <PhoneIcon className="size-3.5 text-montado" />
            <span>
              Direct sales hotline:{" "}
              <a
                className="spec-num font-semibold text-montado hover:underline"
                href={`tel:${COMPANY_PHONES[0].href}`}
              >
                {COMPANY_PHONES[0].display}
              </a>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {children}
        </div>
      </div>
    </section>
  );
}

import { COMPANY_EMAILS } from "../../config/site";
import { ShieldCheckIcon, MailIcon } from "../ui/icons";

const SECTIONS = [
  {
    title: "1. Information Processed via Quote & WhatsApp Handoff",
    body: (
      <>
        The quotation form on this website does not store personal data or engineering
        drawings on a server database. It prepares a structured inquiry message and opens
        WhatsApp with that message populated. No information reaches United Rubber Cork
        until you click send within WhatsApp. Once sent, messages are handled securely
        under WhatsApp&apos;s privacy infrastructure and received directly by United Rubber Cork.
      </>
    ),
  },
  {
    title: "2. Direct Telephone and Email Communications",
    body: (
      <>
        When you reach United Rubber Cork via direct phone call or email, details you share
        (such as technical specifications, dimensional drawings, company identity, and delivery
        addresses) are used solely to evaluate technical feasibility, generate commercial quotations,
        and fulfill purchase orders.
      </>
    ),
  },
  {
    title: "3. Cookies & Tracking Technologies",
    body: (
      <>
        This website operates without advertising cookies, tracking pixels, or third-party
        analytics trackers. Only essential browser preferences (such as reduced-motion settings)
        are respected locally on your client device.
      </>
    ),
  },
];

export default function PrivacyContent() {
  return (
    <section className="grid max-w-[1000px] gap-10 lg:grid-cols-[1fr_300px] lg:gap-14">
      <div className="grid gap-6">
        {SECTIONS.map((section) => (
          <article
            className="rounded-2xl border border-montado/12 bg-white p-6 sm:p-7 shadow-sm"
            key={section.title}
          >
            <h2 className="text-base font-bold text-charcoal m-0 mb-3">
              {section.title}
            </h2>
            <p className="m-0 text-sm leading-relaxed text-charcoal-light">
              {section.body}
            </p>
          </article>
        ))}

        <article className="rounded-2xl border border-montado/12 bg-white p-6 sm:p-7 shadow-sm">
          <h2 className="text-base font-bold text-charcoal m-0 mb-3">
            4. Inquiries &amp; Privacy Contact
          </h2>
          <p className="m-0 text-sm leading-relaxed text-charcoal-light">
            For questions regarding specifications or contact information shared with United
            Rubber Cork, contact our administrative desk:
          </p>
          <div className="mt-3 flex items-center gap-2">
            <MailIcon className="size-4 text-montado" />
            <a
              className="text-sm font-semibold text-montado hover:underline break-all"
              href={`mailto:${COMPANY_EMAILS[0]}`}
            >
              {COMPANY_EMAILS[0]}
            </a>
          </div>
        </article>
      </div>

      <aside className="h-fit rounded-xl border border-cork/25 bg-cork-light/30 p-5">
        <div className="flex items-center gap-2 text-cork-deep font-bold text-xs mb-2">
          <ShieldCheckIcon className="size-4" />
          <span>Statutory Compliance Note</span>
        </div>
        <p className="spec-num m-0 text-xs leading-relaxed text-charcoal-light">
          United Rubber Cork maintains transparent data handling in accordance with Indian
          Information Technology and data protection regulations. Contact our works desk
          for record-retention inquiries.
        </p>
      </aside>
    </section>
  );
}

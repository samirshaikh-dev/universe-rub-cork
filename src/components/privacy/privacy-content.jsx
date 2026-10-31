import { COMPANY_EMAILS } from "../../config/site";

export default function PrivacyContent() {
  return (
    <section className="grid max-w-[900px] gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Information you send directly</h2>
          <p className="mb-0 text-charcoal">
            This website currently has no online quote form or file upload. If
            you contact United Rubber Cork by email or telephone, the details
            you choose to share are received through that communication service
            so United Rubber Cork can respond to your enquiry.
          </p>
        </section>
        <section>
          <h2 className="mb-4">Cookies and analytics</h2>
          <p className="mb-0 text-charcoal">
            This website does not currently include advertising cookies or
            analytics tools.
          </p>
        </section>
        <section>
          <h2 className="mb-4">Questions about privacy</h2>
          <p className="mb-0 text-charcoal">
            For questions about information you have sent to United Rubber
            Cork, contact{" "}
            <a
              className="font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
              href={`mailto:${COMPANY_EMAILS[0]}`}
            >
              {COMPANY_EMAILS[0]}
            </a>
            .
          </p>
        </section>
      </div>
      <aside className="h-fit border-l-4 border-cork bg-paper p-6">
        <p className="mb-0 text-sm leading-relaxed text-charcoal">
          United Rubber Cork should review this notice against its email,
          hosting and record-retention practices and applicable Indian
          data-protection requirements before launch.
        </p>
      </aside>
    </section>
  );
}

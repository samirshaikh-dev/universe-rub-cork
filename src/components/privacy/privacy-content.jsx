import { COMPANY_EMAILS } from "../../config/site";

const SECTIONS = [
  {
    title: "Information you send",
    body: (
      <>
        The quote form on this website does not send or store your details on a
        server. It prepares a message and opens WhatsApp with that message
        filled in. Nothing reaches United Rubber Cork until you press send in
        WhatsApp, and the message is then handled by WhatsApp and by United
        Rubber Cork&rsquo;s WhatsApp account. The site does not accept file
        uploads; drawings are sent through WhatsApp or email.
      </>
    ),
  },
  {
    title: "Contact by phone or email",
    body: (
      <>
        If you call or email United Rubber Cork, the details you choose to share
        are received through that service so the enquiry can be answered.
      </>
    ),
  },
  {
    title: "Cookies and analytics",
    body: (
      <>
        This website does not currently set advertising cookies and does not
        include an analytics tool.
      </>
    ),
  },
];

export default function PrivacyContent() {
  return (
    <section className="grid max-w-[1000px] gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
      <div className="grid gap-8">
        {SECTIONS.map((section) => (
          <section className="border-t border-montado/20 pt-5" key={section.title}>
            <h2 className="display-sm m-0 mb-3">{section.title}</h2>
            <p className="m-0 max-w-[66ch] text-charcoal">{section.body}</p>
          </section>
        ))}

        <section className="border-t border-montado/20 pt-5">
          <h2 className="display-sm m-0 mb-3">Questions about privacy</h2>
          <p className="m-0 max-w-[66ch] text-charcoal">
            For questions about information you have sent to United Rubber Cork,
            contact{" "}
            <a className="link break-all" href={`mailto:${COMPANY_EMAILS[0]}`}>
              {COMPANY_EMAILS[0]}
            </a>
            .
          </p>
        </section>
      </div>

      <aside className="h-fit border-l-2 border-cork pl-5">
        <p className="spec-num m-0 text-sm leading-relaxed text-charcoal/75">
          United Rubber Cork should review this notice against its email,
          hosting and record-retention practices and applicable Indian
          data-protection requirements before launch.
        </p>
      </aside>
    </section>
  );
}

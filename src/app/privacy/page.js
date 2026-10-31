import PageHeading from "../../components/page-heading";
import { COMPANY_EMAILS } from "../../config/site";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Privacy notice",
  description:
    "How the United Rubber Cork website currently handles information shared through direct contact.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[{ name: "Privacy notice", path: "/privacy" }]}
        description="Information about contact through this website."
        title="Privacy notice"
      />
      <section className="content-section prose">
        <h2>Information you send directly</h2>
        <p>
          This website currently has no online quote form or file upload. If
          you contact United Rubber Cork by email or telephone, the details you choose to
          share are received through that communication service so United Rubber Cork can
          respond to your enquiry.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This website does not currently include advertising cookies or
          analytics tools.
        </p>
        <h2>Questions about privacy</h2>
        <p>
          For questions about information you have sent to United Rubber Cork, contact{" "}
          <a href={`mailto:${COMPANY_EMAILS[0]}`}>{COMPANY_EMAILS[0]}</a>.
        </p>
        <p className="notice">
          United Rubber Cork should review this notice against its email, hosting and
          record-retention practices and applicable Indian data-protection
          requirements before launch.
        </p>
      </section>
    </div>
  );
}

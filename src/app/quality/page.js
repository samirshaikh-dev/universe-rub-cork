import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Quality and standards",
  description:
    "Review AMCORK's stated ISO 9001:2015 quality system and rubberised cork products made to IS 4253 Part II.",
  path: "/quality",
});

export default function QualityPage() {
  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[{ name: "Quality", path: "/quality" }]}
        description="Quality information and standards for rubberised cork products."
        title="Quality and standards"
      />
      <section className="content-section">
        <div className="proof-details">
          <article>
            <p className="section-kicker">Quality system</p>
            <h2>ISO 9001:2015</h2>
            <p>
              AMCORK&rsquo;s existing company information identifies an ISO
              9001:2015 quality system. The certificate number, issuing body,
              scope and validity have not yet been provided for this site.
            </p>
          </article>
          <article>
            <p className="section-kicker">Product standard</p>
            <h2>IS 4253 Part II</h2>
            <p>
              Rubberised cork products are made to IS 4253 Part II or to
              customer requirements. Confirm the applicable specification
              against your drawing and current documentation.
            </p>
          </article>
        </div>
        <p className="notice">
          Certificate copies, test reports and inspection details should be
          confirmed with AMCORK before they are relied on for a purchase.
        </p>
      </section>
      <section className="page-cta">
        <div>
          <h2>Need documentation for a specification review?</h2>
          <p>Contact AMCORK with the product and standard you need to verify.</p>
        </div>
        <ContactActions compact />
      </section>
    </div>
  );
}

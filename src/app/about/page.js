import PageHeading from "../../components/page-heading";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "About AMCORK Industries",
  description:
    "Learn about AMCORK Industries, a cork and rubberised cork manufacturer in GIDC, Vapi, Gujarat.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[{ name: "About", path: "/about" }]}
        description="A cork and rubberised cork manufacturer based in GIDC, Vapi, Gujarat."
        title="About AMCORK Industries"
      />
      <section className="content-section prose">
        <h2>Products made for your requirement</h2>
        <p>
          AMCORK Industries makes cork and rubberised cork products, including
          sheets, gaskets, frames, strips, granules, stoppers, decorative cork
          and cork gifts.
        </p>
        <p>
          Gaskets and components can be discussed against a customer drawing or
          sample, or to IS 4253 Part II. Send the required dimensions and
          application to begin a specification review.
        </p>
        <h2>Based in Vapi, Gujarat</h2>
        <p>
          AMCORK is located in the GIDC industrial area of Vapi. Contact the
          team to confirm product availability, specifications and current
          documentation.
        </p>
      </section>
    </div>
  );
}

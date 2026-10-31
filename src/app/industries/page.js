import Link from "next/link";
import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import { INDUSTRIES } from "../../data/site-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Industries and applications",
  description:
    "Explore AMCORK cork and rubberised cork applications for transformers, automotive components, construction and insulation.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
        description="Explore the industries served and the cork products relevant to each application."
        title="Industries and applications"
      />
      <div className="catalogue-list">
        {INDUSTRIES.map((industry) => (
          <article className="catalogue-item" key={industry.slug}>
            <div>
              <h2>
                <Link href={`/industries/${industry.slug}`}>
                  {industry.name}
                </Link>
              </h2>
              <p>{industry.summary}</p>
            </div>
            <Link
              className="text-link"
              href={`/industries/${industry.slug}`}
            >
              View application
            </Link>
          </article>
        ))}
      </div>
      <section className="page-cta">
        <div>
          <h2>Need help matching a product to your application?</h2>
          <p>Share the drawing, dimensions and material requirement.</p>
        </div>
        <ContactActions compact />
      </section>
    </div>
  );
}

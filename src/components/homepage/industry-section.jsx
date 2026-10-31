import Link from "next/link";

export default function IndustrySection({ industries }) {
  return (
    <section className="section section-paper">
      <div className="container">
        <div className="section-intro">
          <p className="section-kicker">Applications</p>
          <h2>Start with the application.</h2>
          <p>
            See the products and specification details relevant to your
            industry.
          </p>
        </div>
        <div className="industry-grid">
          {industries.map((industry) => (
            <Link
              className="industry-link"
              href={`/industries/${industry.slug}`}
              key={industry.slug}
            >
              <span className="industry-link-title">{industry.name}</span>
              <span className="industry-link-summary">{industry.summary}</span>
              <span className="industry-link-action">
                Explore application <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

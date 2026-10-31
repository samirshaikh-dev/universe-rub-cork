import Link from "next/link";

export default function IndustrySection({ industries }) {
  return (
    <section className="section section-sheet">
      <div className="container">
        <div className="section-intro">
          <p className="section-kicker">Applications</p>
          <h2>Built around your application.</h2>
          <p>
            Start with the industry, then send the dimensions and material
            requirement.
          </p>
        </div>
        <div className="industry-grid">
          {industries.map((industry) => (
            <article className="industry-panel" key={industry.slug}>
              <h3>{industry.name}</h3>
              <p>{industry.summary}</p>
              <Link className="text-link" href={`/industries/${industry.slug}`}>
                Explore application
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

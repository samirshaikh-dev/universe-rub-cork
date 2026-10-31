import Link from "next/link";
import ContactActions from "../components/contact-actions";
import JsonLd from "../components/json-ld";
import { PRODUCTS, INDUSTRIES } from "../data/site-content";
import { getOrganizationJsonLd } from "../lib/seo/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getOrganizationJsonLd()} />
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">United Rubber Cork, GIDC, Vapi</p>
            <h1>Cork and rubberised cork, made to your drawing.</h1>
            <p className="hero-lede">
              Sheets, gaskets, strips and cork products for industrial,
              construction and decorative applications.
            </p>
            <ContactActions />
            <div className="proof-list" aria-label="Documented capabilities">
              <span>ISO 9001:2015 quality system</span>
              <span>IS 4253 Part II</span>
              <span>Made to drawing or sample</span>
            </div>
          </div>
          <div className="hero-spec" aria-label="Rubberised cork sheet specifications">
            <div className="spec-mark" aria-hidden="true">
              <span />
            </div>
            <p className="spec-label">Rubberised cork sheets</p>
            <p className="spec-range">1.0–20 <span>mm</span></p>
            <div className="spec-rule" />
            <p className="spec-note">Available sheet sizes</p>
            <ul>
              <li>2 ft x 3 ft</li>
              <li>3 ft x 3 ft</li>
              <li>1000 x 1000 mm</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-intro">
            <p className="section-kicker">Product range</p>
            <h2>Find the right cork product.</h2>
            <p>
              Review the documented sizes, then share your drawing or
              application with United Rubber Cork.
            </p>
          </div>
          <div className="product-list">
            {PRODUCTS.map((product) => (
              <article className="product-row" key={product.slug}>
                <div>
                  <h3>
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p>{product.summary}</p>
                </div>
                <Link
                  aria-label={`View ${product.name} products`}
                  className="row-link"
                  href={`/products/${product.slug}`}
                >
                  View range <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          <Link className="text-link section-link" href="/products">
            View all products
          </Link>
        </div>
      </section>

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
            {INDUSTRIES.map((industry) => (
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

      <section className="proof-band">
        <div className="container proof-grid">
          <div>
            <p className="section-kicker">Quality and specification</p>
            <h2>Parts made to a clear specification.</h2>
          </div>
          <p>
            United Rubber Cork lists an ISO 9001:2015 quality system and rubberised cork
            products made to IS 4253 Part II or customer requirements. Ask for
            current documentation when reviewing a specification.
          </p>
          <Link className="button button-light" href="/quality">
            Quality information
          </Link>
        </div>
      </section>

      <section className="section section-paper closing-section">
        <div className="container closing-grid">
          <div>
            <p className="section-kicker">Start a conversation</p>
            <h2>Have a drawing or sample?</h2>
            <p>
              Tell us the product, size and quantity. We will help you check
              the next step.
            </p>
          </div>
          <ContactActions compact />
        </div>
      </section>
    </>
  );
}

import ContactActions from "../contact-actions";

export default function HomeHero() {
  return (
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
          <p className="spec-range">
            1.0–20 <span>mm</span>
          </p>
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
  );
}

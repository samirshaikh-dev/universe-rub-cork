import ContactActions from "../contact-actions";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-location">Manufacturer · GIDC, Vapi, Gujarat</p>
          <h1>Cork and rubberised cork, made to your drawing.</h1>
          <p className="hero-lede">
            Sheets, strips and gaskets for industrial applications, with cork
            ranges for construction and decorative use.
          </p>
          <ContactActions />
          <ul className="hero-proof-list" aria-label="Documented product facts">
            <li>
              <strong>1.0 to 20 mm</strong>
              <span>Rubberised cork sheets</span>
            </li>
            <li>
              <strong>IS 4253 Part II</strong>
              <span>Published specification</span>
            </li>
            <li>
              <strong>Drawing or sample</strong>
              <span>For gasket requirements</span>
            </li>
          </ul>
        </div>
        <figure className="hero-visual">
          <div className="hero-visual-heading">
            <span>Material study</span>
            <span>Illustrative geometry</span>
          </div>
          <svg
            aria-labelledby="hero-art-title"
            className="hero-art"
            role="img"
            viewBox="0 0 640 420"
          >
            <title id="hero-art-title">
              Illustration of a gasket frame on a cork sheet
            </title>
            <defs>
              <pattern
                height="32"
                id="cork-grain"
                patternUnits="userSpaceOnUse"
                width="32"
              >
                <circle cx="6" cy="8" fill="#E7D3BC" opacity="0.62" r="1.5" />
                <circle cx="22" cy="19" fill="#1E3B2F" opacity="0.2" r="2" />
                <path
                  d="M13 25l4-2"
                  opacity="0.42"
                  stroke="#E7D3BC"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>
            <rect fill="#B98250" height="372" width="576" x="32" y="24" />
            <rect
              fill="url(#cork-grain)"
              height="372"
              opacity="0.72"
              width="576"
              x="32"
              y="24"
            />
            <path
              d="M170 76h300v268H170zM250 150h140v120H250z"
              fill="#1E3B2F"
              fillRule="evenodd"
            />
            <path
              d="M153 59h334v302H153zM267 167h106v86H267z"
              fill="none"
              opacity="0.72"
              stroke="#E7D3BC"
              strokeWidth="2"
            />
            <path
              d="M92 52v316M548 52v316"
              opacity="0.56"
              stroke="#E7D3BC"
              strokeDasharray="3 8"
              strokeWidth="1.5"
            />
          </svg>
          <figcaption className="hero-visual-caption">
            Rubberised cork sheet and a cut gasket form. Not to scale.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

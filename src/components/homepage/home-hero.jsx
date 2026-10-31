import ContactActions from "../contact-actions";

export default function HomeHero() {
  return (
    <section className="bg-sheet py-12 sm:py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-semibold text-montado">
            Manufacturer · GIDC, Vapi, Gujarat
          </p>
          <h1 className="mb-6 max-w-[12ch] text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-montado [font-variation-settings:'wdth'_125]">
            Cork and rubberised cork, made to your drawing.
          </h1>
          <p className="mb-7 max-w-[54ch] text-lg leading-relaxed text-charcoal sm:text-xl">
            Sheets, strips and gaskets for industrial applications, with cork
            ranges for construction and decorative use.
          </p>
          <ContactActions />
          <ul
            aria-label="Documented product facts"
            className="mt-8 grid gap-4 p-0 sm:grid-cols-3"
          >
            <li className="list-none border-l-2 border-cork pl-3">
              <strong className="block text-montado">1.0 to 20 mm</strong>
              <span className="text-sm text-charcoal">
                Rubberised cork sheets
              </span>
            </li>
            <li className="list-none border-l-2 border-cork pl-3">
              <strong className="block text-montado">IS 4253 Part II</strong>
              <span className="text-sm text-charcoal">
                Published specification
              </span>
            </li>
            <li className="list-none border-l-2 border-cork pl-3">
              <strong className="block text-montado">Drawing or sample</strong>
              <span className="text-sm text-charcoal">
                For gasket requirements
              </span>
            </li>
          </ul>
        </div>
        <figure className="m-0 min-w-0 bg-montado p-5 sm:p-8">
          <div className="mb-4 flex justify-between gap-3 text-xs text-paper">
            <span>Material study</span>
            <span>Illustrative geometry</span>
          </div>
          <svg
            aria-labelledby="hero-art-title"
            className="block h-auto w-full"
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
          <figcaption className="mb-0 mt-4 text-sm text-paper">
            Rubberised cork sheet and a cut gasket form. Not to scale.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

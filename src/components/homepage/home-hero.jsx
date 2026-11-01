import Link from "next/link";

import ContactActions from "../contact-actions";
import DieCutHero from "./die-cut-hero";

export default function HomeHero() {
  return (
    <section className="bg-sheet pb-14 pt-10 sm:pt-14 lg:pb-24 lg:pt-20">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="min-w-0">
            <h1 className="display-xl mb-6 text-balance">
              Cork and rubberised cork, cut to your drawing.
            </h1>

            <p className="lede mb-8 text-charcoal">
              Sheets, strips, gaskets and frames for transformer, automotive and
              construction buyers. Made jointless in GIDC, Vapi, to IS 4253 Part
              II or to your sample.
            </p>

            <ContactActions stacked />

            <ul className="m-0 mt-8 flex flex-wrap gap-2 p-0">
              <li className="list-none">
                <Link className="badge" href="/quality">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="m4 12 5 5L20 6" />
                  </svg>
                  ISO 9001:2015
                </Link>
              </li>
              <li className="list-none">
                <Link className="badge" href="/quality">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 5.5h16v13H4zM8 9.5h8v5H8z" />
                  </svg>
                  IS 4253 Part II
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <DieCutHero />
          </div>
        </div>
      </div>
    </section>
  );
}

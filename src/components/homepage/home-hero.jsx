import ContactActions from "../contact-actions";
import HomeHeroCarousel from "./home-hero-carousel";

export default function HomeHero() {
  return (
    <section className="bg-sheet py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <HomeHeroCarousel />
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold text-montado sm:text-sm">
              Manufacturer · GIDC, Vapi, Gujarat
            </p>
            <h1 className="mb-5 font-serif text-[clamp(2.1rem,7vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.015em] text-montado lg:text-[clamp(2rem,3.2vw,3rem)]">
              Cork and
              <br />
              rubberised cork,
              <br />
              made to your
              <br />
              drawing.
            </h1>
            <p className="mb-6 text-base leading-relaxed text-charcoal sm:text-lg">
              Sheets, strips and gaskets for industrial applications, with cork
              ranges for construction and decorative use.
            </p>
            <ContactActions compact stacked />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function IndustrySection({ industries }) {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6">
        <div className="mb-9 max-w-[660px]">
          <p className="mb-3 text-sm font-semibold text-montado">
            Applications
          </p>
          <h2 className="mb-4">Start with the application.</h2>
          <p className="mb-0 text-charcoal">
            See the products and specification details relevant to your
            industry.
          </p>
        </div>
        <div className="grid border-y border-montado/25 md:grid-cols-3">
          {industries.map((industry, index) => (
            <Link
              className={`flex min-h-56 flex-col items-start border-b border-montado/15 py-6 text-charcoal no-underline transition-colors hover:bg-cork-light/30 focus-visible:outline-3 focus-visible:outline-amber md:border-b-0 md:px-5 md:py-7 ${
                index === 0
                  ? "md:pl-0"
                  : "md:border-l md:border-montado/20"
              }`}
              href={`/industries/${industry.slug}`}
              key={industry.slug}
            >
              <span className="mb-3 text-xl font-bold leading-tight text-montado sm:text-2xl">
                {industry.name}
              </span>
              <span className="mb-5 max-w-[34ch] text-charcoal">
                {industry.summary}
              </span>
              <span className="mt-auto font-semibold text-montado underline-offset-4 hover:underline">
                Explore application <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PageCta({ title, description, children }) {
  return (
    <section className="mt-16 bg-cork-light p-6 sm:p-10 lg:mt-20">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10">
        <div>
          <h2 className="mb-3 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-montado [font-variation-settings:'wdth'_120]">
            {title}
          </h2>
          {description && (
            <p className="mb-0 max-w-[60ch] text-charcoal">{description}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">{children}</div>
      </div>
    </section>
  );
}

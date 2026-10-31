export default function QualityContent() {
  return (
    <section className="max-w-[1000px]">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="border-t-4 border-montado bg-paper p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold text-montado">Quality system</p>
          <h2 className="mb-4 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-montado [font-variation-settings:'wdth'_120]">
            ISO 9001:2015
          </h2>
          <p className="mb-0 text-charcoal">
            United Rubber Cork&rsquo;s existing company information identifies
            an ISO 9001:2015 quality system. The certificate number, issuing
            body, scope and validity have not yet been provided for this site.
          </p>
        </article>
        <article className="border-t-4 border-cork bg-paper p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold text-montado">Product standard</p>
          <h2 className="mb-4 text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-montado [font-variation-settings:'wdth'_120]">
            IS 4253 Part II
          </h2>
          <p className="mb-0 text-charcoal">
            Rubberised cork products are made to IS 4253 Part II or to customer
            requirements. Confirm the applicable specification against your
            drawing and current documentation.
          </p>
        </article>
      </div>
      <p className="mt-6 border-l-4 border-cork bg-cork-light/60 p-5 text-charcoal">
        Certificate copies, test reports and inspection details should be
        confirmed with United Rubber Cork before they are relied on for a
        purchase.
      </p>
    </section>
  );
}

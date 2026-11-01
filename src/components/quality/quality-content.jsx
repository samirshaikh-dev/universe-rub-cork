import Link from "next/link";

const MARKS = [
  {
    standard: "ISO 9001:2015",
    status: "Quality system",
    body: "United Rubber Cork's company information identifies an ISO 9001:2015 quality system. Certificate number, issuing body, scope and validity have not yet been supplied for this site.",
  },
  {
    standard: "IS 4253 Part II",
    status: "Product standard",
    body: "Rubberised cork products are made to IS 4253 Part II or to customer requirements. Confirm the applicable specification against your drawing and current documentation.",
  },
];

export default function QualityContent() {
  return (
    <section className="max-w-[1000px]">
      <div className="grid gap-0 border-t border-montado/25">
        {MARKS.map((mark) => (
          <article
            className="grid gap-4 border-b border-montado/15 py-8 md:grid-cols-[minmax(200px,0.4fr)_minmax(0,1fr)] md:gap-10"
            key={mark.standard}
          >
            <div>
              <p className="spec-num m-0 text-[1.35rem] font-semibold leading-tight text-montado">
                {mark.standard}
              </p>
              <p className="label mt-2 mb-0 text-charcoal/70">{mark.status}</p>
            </div>
            <p className="m-0 max-w-[62ch] text-charcoal">{mark.body}</p>
          </article>
        ))}
      </div>

      <p className="mt-8 mb-0 max-w-[62ch] border-l-2 border-cork pl-5 text-charcoal">
        Certificate copies, test reports and inspection details should be
        confirmed with United Rubber Cork before they are relied on for a
        purchase. <Link className="link" href="/contact">Ask for current documentation</Link>.
      </p>
    </section>
  );
}

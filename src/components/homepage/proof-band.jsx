import Link from "next/link";

const STEPS = [
  {
    title: "Send the drawing or sample",
    body: "Use the quote form and attach the information you have, or send it on WhatsApp.",
  },
  {
    title: "We review the specification",
    body: "Thickness, size, standard and application are checked against the published ranges.",
  },
  {
    title: "You receive a quote",
    body: "United Rubber Cork replies with the price and availability for the part you asked about.",
  },
];

export default function ProofBand() {
  return (
    <section className="bg-montado py-16 text-paper md:py-24" data-surface="dark">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <h2 className="display-lg m-0 max-w-[18ch] text-paper">
            A part you can verify before you order.
          </h2>
          <p className="mt-6 mb-8 max-w-[46ch] text-paper/85">
            Rubberised cork products are made to IS 4253 Part II or to customer
            requirements. Gaskets are made to a drawing or sample.
          </p>

          <ul className="m-0 grid gap-4 p-0 sm:grid-cols-2">
            <li className="list-none border-t border-paper/35 pt-4">
              <p className="spec-num m-0 mb-1 text-[1.05rem] font-semibold text-paper">
                ISO 9001:2015
              </p>
              <p className="m-0 text-sm text-paper/80">
                Quality system listed; request current documentation
              </p>
            </li>
            <li className="list-none border-t border-paper/35 pt-4">
              <p className="spec-num m-0 mb-1 text-[1.05rem] font-semibold text-paper">
                IS 4253 Part II
              </p>
              <p className="m-0 text-sm text-paper/80">
                Published manufacturing basis for rubberised cork
              </p>
            </li>
          </ul>

          <Link className="btn btn--on-dark mt-8" href="/quality">
            Quality information
          </Link>
        </div>

        <div>
          <h3 className="label m-0 mb-6 text-cork-light">
            How a quote request works
          </h3>
          <ol className="m-0 grid gap-6 p-0">
            {STEPS.map((step, index) => (
              <li className="step grid grid-cols-[2.5rem_1fr] gap-x-4" key={step.title}>
                <span className="step__index pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-semibold text-paper">
                    {step.title}
                  </span>
                  <span className="mt-1 block max-w-[42ch] text-[0.95rem] text-paper/80">
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

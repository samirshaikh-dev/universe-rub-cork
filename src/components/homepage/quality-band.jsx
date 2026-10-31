import Link from "next/link";

export default function QualityBand() {
  return (
    <section className="bg-montado py-14 text-paper sm:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold text-paper">
            Quality and specification
          </p>
          <h2 className="mb-0 max-w-[14ch] text-paper!">
            Make the specification clear from the start.
          </h2>
        </div>
        <div>
          <p className="mb-6 text-paper">
            Rubberised cork products can be made to IS 4253 Part II or customer
            requirements. Gaskets can be made to a drawing or sample. Ask for
            current quality documentation when reviewing a specification.
          </p>
          <ul className="mb-6 grid gap-5 p-0 sm:grid-cols-2">
            <li className="list-none border-t border-paper/35 pt-4">
              <strong className="mb-1 block text-paper">
                IS 4253 Part II
              </strong>
              <span className="text-sm text-paper">
                Published manufacturing basis
              </span>
            </li>
            <li className="list-none border-t border-paper/35 pt-4">
              <strong className="mb-1 block text-paper">ISO 9001:2015</strong>
              <span className="text-sm text-paper">
                Quality system listed; request current documentation
              </span>
            </li>
          </ul>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-paper px-5 py-3 font-semibold text-montado transition-colors hover:bg-cork-light focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber"
            href="/quality"
          >
            Quality information
          </Link>
        </div>
      </div>
    </section>
  );
}

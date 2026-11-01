const PROPERTIES = [
  {
    title: "Jointless",
    body: "Gaskets are made jointless, so there is no seam for fluid to find.",
  },
  {
    title: "Compresses and recovers",
    body: "Cork takes compression under a cover or flange, then springs back when the load is released.",
  },
  {
    title: "Renewable",
    body: "Cork bark is harvested without felling the tree, and the bark grows back.",
  },
];

export default function PropertyBand() {
  return (
    <section className="section--tight bg-paper pb-16">
      <div className="shell">
        <div className="grid gap-8 border-t border-montado/20 pt-8 md:grid-cols-3 md:gap-12">
          <h2 className="display-md m-0 max-w-[14ch] md:col-span-1">
            Why cork works as a gasket.
          </h2>
          <dl className="m-0 grid gap-8 md:col-span-2 md:grid-cols-3 md:gap-8">
            {PROPERTIES.map((property) => (
              <div className="border-t border-cork pt-4" key={property.title}>
                <dt className="mb-2 font-semibold text-montado">
                  {property.title}
                </dt>
                <dd className="m-0 text-[0.98rem] leading-relaxed text-charcoal">
                  {property.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

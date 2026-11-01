import {
  GaugeIcon,
  ShieldCheckIcon,
  FlameIcon,
  SparklesIcon,
  LayersIcon,
} from "../ui/icons";

const PROPERTIES = [
  {
    icon: GaugeIcon,
    title: "Controlled Compression & Elastic Rebound",
    body: "Unlike pure rubber which flows laterally under flange pressure, cork's closed cellular matrix compresses inward and rebounds under load fluctuations.",
    spec: "ASTM F36: >75% Recovery",
  },
  {
    icon: FlameIcon,
    title: "Hydrocarbon & Oil Resilience",
    body: "Formulated with synthetic nitrile elastomers (NBR) to withstand hot transformer oils, hydraulic fluids, and engine lubricants up to 125°C.",
    spec: "Tested to IS 4253 Part II",
  },
  {
    icon: ShieldCheckIcon,
    title: "Jointless Die-Cut Construction",
    body: "Punched as continuous one-piece frames and slit strips up to 1000 mm, with no seam to leak through.",
    spec: "Jointless Gasket Fit",
  },
  {
    icon: SparklesIcon,
    title: "Renewable Mediterranean Cork",
    body: "Natural cork bark is harvested from cork oaks without felling the tree, allowing the outer bark layer to regrow naturally.",
    spec: "Renewable Harvested Bark",
  },
];

export default function PropertyBand() {
  return (
    <section className="section bg-white border-b border-montado/10">
      <div className="shell">
        <div className="mb-8 max-w-[620px]">
          <span className="badge-tag mb-2">
            <LayersIcon className="size-3.5 text-montado" />
            <span>Material Science</span>
          </span>
          <h2 className="display-lg m-0 text-balance">
            Why Engineers Specify Rubberised Cork
          </h2>
          <p className="mt-2 mb-0 text-xs sm:text-sm text-charcoal-light">
            Combining the natural elastic resilience of cellular cork with the fluid
            impermeability of vulcanized synthetic elastomers.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROPERTIES.map((property) => {
            const Icon = property.icon;
            return (
              <div
                className="bento-card flex flex-col p-5 bg-sheet/40 hover:bg-white"
                key={property.title}
              >
                <div className="grid size-9 place-items-center rounded-lg bg-montado/10 text-montado mb-3.5">
                  <Icon className="size-4.5" />
                </div>

                <h3 className="text-sm font-bold text-charcoal mb-2 leading-snug">
                  {property.title}
                </h3>

                <p className="m-0 mb-4 text-xs text-charcoal-muted leading-relaxed">
                  {property.body}
                </p>

                <div className="mt-auto pt-2.5 border-t border-montado/8">
                  <span className="spec-num text-[0.68rem] font-bold text-cork-deep uppercase tracking-wider block">
                    {property.spec}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

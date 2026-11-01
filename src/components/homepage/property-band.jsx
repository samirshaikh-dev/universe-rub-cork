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
    title: "Controlled Compressibility & High Recovery",
    body: "Unlike pure rubber which flows laterally under flange pressure, cork's closed cellular matrix compresses inward and rebounds when load fluctuates, maintaining a constant seal.",
    spec: "ASTM F36: 25-45% Compressibility, >75% Recovery",
  },
  {
    icon: FlameIcon,
    title: "Hydrocarbon & Dielectric Oil Resilience",
    body: "Formulated with synthetic nitrile elastomers (NBR) to withstand hot transformer oils, hydraulic fluids, diesel fuel, and automotive lubricants up to 125°C.",
    spec: "Tested against IS 4253 Part II Immersion",
  },
  {
    icon: ShieldCheckIcon,
    title: "Jointless Die-Cut Integrity",
    body: "Manufactured as continuous one-piece frames and slit strips up to 1000mm width, eliminating dovetail seams where pressurized oil finds leakage paths.",
    spec: "Precision CNC & Hydraulic Die Punched",
  },
  {
    icon: SparklesIcon,
    title: "100% Renewable Mediterranean Biomaterial",
    body: "Natural cork bark is ethically harvested from mature cork oaks without felling the tree. The tree regenerates its outer bark layer every nine years, absorbing carbon throughout its life.",
    spec: "Zero Synthetic Microplastics",
  },
];

export default function PropertyBand() {
  return (
    <section className="section bg-white border-b border-montado/10">
      <div className="shell">
        <div className="mb-12 max-w-[700px]">
          <span className="badge-tag mb-2.5">
            <LayersIcon className="size-3.5 text-montado" />
            <span>Material Science</span>
          </span>
          <h2 className="display-lg m-0 text-balance">
            Why Technical Buyers &amp; Engineers Specify Rubberised Cork
          </h2>
          <p className="mt-3 mb-0 text-sm sm:text-base text-charcoal-light">
            Combining the natural elastic resilience of cellular cork with the fluid
            impermeability of vulcanized synthetic elastomers.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROPERTIES.map((property) => {
            const Icon = property.icon;
            return (
              <div
                className="card-surface flex flex-col p-6 rounded-xl border border-montado/10 bg-sheet/50 hover:bg-white"
                key={property.title}
              >
                <div className="grid size-11 place-items-center rounded-lg bg-montado/10 text-montado mb-5">
                  <Icon className="size-5" />
                </div>

                <h3 className="text-base font-bold text-charcoal mb-2.5 leading-snug">
                  {property.title}
                </h3>

                <p className="m-0 mb-4 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {property.body}
                </p>

                <div className="mt-auto pt-3 border-t border-montado/8">
                  <span className="spec-num text-[0.72rem] font-bold text-cork-deep uppercase tracking-wider block">
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

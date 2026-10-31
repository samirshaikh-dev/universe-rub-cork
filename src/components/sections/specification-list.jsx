export default function SpecificationList({ items }) {
  return (
    <dl className="m-0 divide-y divide-montado/20 border-y border-montado/25">
      {items.map(({ name, details }) => (
        <div
          className="grid gap-2 py-5 sm:grid-cols-[minmax(180px,0.55fr)_minmax(0,1fr)] sm:gap-6 sm:py-6"
          key={name}
        >
          <dt className="font-semibold text-montado">{name}</dt>
          <dd className="m-0 text-charcoal">{details}</dd>
        </div>
      ))}
    </dl>
  );
}

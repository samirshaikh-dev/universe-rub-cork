export default function SpecificationList({ items }) {
  return (
    <dl className="m-0 border-t border-montado/25">
      {items.map(({ name, details }) => (
        <div
          className="grid gap-2 border-b border-montado/15 py-5 sm:grid-cols-[minmax(200px,0.42fr)_minmax(0,1fr)] sm:gap-10 sm:py-6"
          key={name}
        >
          <dt className="font-semibold text-montado">{name}</dt>
          <dd className="spec-num m-0 text-charcoal">{details}</dd>
        </div>
      ))}
    </dl>
  );
}

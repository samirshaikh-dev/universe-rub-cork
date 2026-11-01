export default function SpecificationList({ items }) {
  return (
    <dl className="m-0 overflow-hidden rounded-xl border border-montado/12 bg-white shadow-sm divide-y divide-montado/8">
      {items.map(({ name, details }) => (
        <div
          className="grid gap-2 p-4 sm:grid-cols-[minmax(200px,0.38fr)_1fr] sm:gap-6 sm:p-5 hover:bg-sheet/40 transition-colors"
          key={name}
        >
          <dt className="text-sm font-bold text-montado">{name}</dt>
          <dd className="spec-num m-0 text-sm text-charcoal-light leading-relaxed">
            {details}
          </dd>
        </div>
      ))}
    </dl>
  );
}

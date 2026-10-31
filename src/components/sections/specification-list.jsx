export default function SpecificationList({ items }) {
  return (
    <div className="spec-list">
      {items.map(({ name, details }) => (
        <article className="spec-row" key={name}>
          <h2>{name}</h2>
          <p>{details}</p>
        </article>
      ))}
    </div>
  );
}

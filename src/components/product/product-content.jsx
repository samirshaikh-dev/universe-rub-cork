import SpecificationList from "../sections/specification-list";

export default function ProductContent({ product }) {
  return (
    <section className="content-section">
      <p className="content-lede">{product.introduction}</p>
      {product.items.length > 0 ? (
        <SpecificationList items={product.items} />
      ) : (
        <p className="notice">
          Product specifications and photographs are not yet available for this
          range. Contact United Rubber Cork to confirm current options.
        </p>
      )}
    </section>
  );
}

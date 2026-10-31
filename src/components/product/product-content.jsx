import SpecificationList from "../sections/specification-list";

export default function ProductContent({ product }) {
  return (
    <section className="max-w-[900px]">
      <p className="mb-10 max-w-[68ch] text-lg leading-relaxed text-charcoal">
        {product.introduction}
      </p>
      {product.items.length > 0 ? (
        <SpecificationList items={product.items} />
      ) : (
        <p className="border-l-4 border-cork bg-cork-light/60 p-5 text-charcoal">
          Product specifications and photographs are not yet available for this
          range. Contact United Rubber Cork to confirm current options.
        </p>
      )}
    </section>
  );
}

import ContactActions from "../contact-actions";

export default function ContactCtaSection() {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10">
        <div>
          <p className="mb-3 text-sm font-semibold text-montado">
            Start a conversation
          </p>
          <h2 className="mb-4">Have a drawing or sample?</h2>
          <p className="mb-0 text-charcoal">
            Share the product, dimensions and quantity so we can discuss your
            specification.
          </p>
        </div>
        <ContactActions compact />
      </div>
    </section>
  );
}

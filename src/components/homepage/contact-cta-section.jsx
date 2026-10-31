import ContactActions from "../contact-actions";

export default function ContactCtaSection() {
  return (
    <section className="section section-paper closing-section">
      <div className="container closing-grid">
        <div>
          <p className="section-kicker">Start a conversation</p>
          <h2>Have a drawing or sample?</h2>
          <p>
            Share the product, dimensions and quantity so we can discuss your
            specification.
          </p>
        </div>
        <ContactActions compact />
      </div>
    </section>
  );
}

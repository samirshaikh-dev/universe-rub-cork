import ContactActions from "../contact-actions";

export default function ContactCtaSection() {
  return (
    <section className="section section-paper closing-section">
      <div className="container closing-grid">
        <div>
          <p className="section-kicker">Start a conversation</p>
          <h2>Have a drawing or sample?</h2>
          <p>
            Tell us the product, size and quantity. We will help you check the
            next step.
          </p>
        </div>
        <ContactActions compact />
      </div>
    </section>
  );
}

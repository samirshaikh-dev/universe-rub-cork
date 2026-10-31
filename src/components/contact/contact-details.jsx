import {
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONES,
} from "../../config/site";

export default function ContactDetails() {
  return (
    <div className="contact-grid">
      <section className="contact-block">
        <h2>Call</h2>
        <ul className="contact-list">
          {COMPANY_PHONES.map((phone) => (
            <li key={phone.href}>
              <a href={`tel:${phone.href}`}>{phone.display}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="contact-block">
        <h2>Email</h2>
        <ul className="contact-list">
          {COMPANY_EMAILS.map((email) => (
            <li key={email}>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="contact-block contact-address">
        <h2>Visit</h2>
        <address>
          {COMPANY_ADDRESS.streetAddress}
          <br />
          {COMPANY_ADDRESS.addressLocality} {COMPANY_ADDRESS.postalCode}
          <br />
          {COMPANY_ADDRESS.addressRegion}, India
        </address>
      </section>
    </div>
  );
}

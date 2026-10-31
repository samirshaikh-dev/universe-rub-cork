import Link from "next/link";

export default function QualityBand() {
  return (
    <section className="proof-band">
      <div className="container proof-grid">
        <div>
          <p className="section-kicker">Quality and specification</p>
          <h2>Parts made to a clear specification.</h2>
        </div>
        <p>
          United Rubber Cork lists an ISO 9001:2015 quality system and
          rubberised cork products made to IS 4253 Part II or customer
          requirements. Ask for current documentation when reviewing a
          specification.
        </p>
        <Link className="button button-light" href="/quality">
          Quality information
        </Link>
      </div>
    </section>
  );
}

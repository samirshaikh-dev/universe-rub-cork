import Link from "next/link";

export default function QualityBand() {
  return (
    <section className="proof-band">
      <div className="container proof-grid">
        <div className="proof-heading">
          <p className="section-kicker">Quality and specification</p>
          <h2>Make the specification clear from the start.</h2>
        </div>
        <div className="proof-content">
          <p>
            Rubberised cork products can be made to IS 4253 Part II or customer
            requirements. Gaskets can be made to a drawing or sample. Ask for
            current quality documentation when reviewing a specification.
          </p>
          <ul className="proof-facts">
            <li>
              <strong>IS 4253 Part II</strong>
              <span>Published manufacturing basis</span>
            </li>
            <li>
              <strong>ISO 9001:2015</strong>
              <span>Quality system listed; request current documentation</span>
            </li>
          </ul>
          <Link className="button button-light" href="/quality">
            Quality information
          </Link>
        </div>
      </div>
    </section>
  );
}

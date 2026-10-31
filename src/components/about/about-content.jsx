export default function AboutContent() {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] lg:gap-16">
      <div className="max-w-[760px]">
        <h2 className="mb-5">Products made for your requirement</h2>
        <p className="mb-4 text-charcoal">
          United Rubber Cork makes cork and rubberised cork products, including
          sheets, gaskets, frames, strips, granules, stoppers, decorative cork
          and cork gifts.
        </p>
        <p className="mb-0 text-charcoal">
          Gaskets and components can be discussed against a customer drawing or
          sample, or to IS 4253 Part II. Send the required dimensions and
          application to begin a specification review.
        </p>
      </div>
      <aside className="border-l-4 border-montado bg-paper p-6 sm:p-8">
        <p className="mb-3 text-sm font-semibold text-montado">Location</p>
        <h2 className="mb-4 text-2xl">Based in Vapi, Gujarat</h2>
        <p className="mb-0 text-charcoal">
          United Rubber Cork is located in the GIDC industrial area of Vapi.
          Contact the team to confirm product availability, specifications and
          current documentation.
        </p>
      </aside>
    </section>
  );
}

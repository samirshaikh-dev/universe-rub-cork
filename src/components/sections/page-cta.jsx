export default function PageCta({ title, description, children }) {
  return (
    <section className="page-cta">
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default function PageCta({ title, description, children }) {
  return (
    <section className="mt-16 border-t border-montado/25 pt-10 pb-4 sm:mt-20">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <h2 className="display-md m-0 mb-3 max-w-[24ch]">{title}</h2>
          {description && (
            <p className="m-0 max-w-[56ch] text-charcoal">{description}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">{children}</div>
      </div>
    </section>
  );
}

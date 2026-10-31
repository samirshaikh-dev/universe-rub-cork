import Link from "next/link";

export default function CatalogueList({ items, basePath, actionLabel }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const href = `/${basePath}/${item.slug}`;

        return (
          <article
            className="flex h-full flex-col border border-montado/20 bg-paper p-6 transition-colors hover:border-montado/50 sm:p-8"
            key={item.slug}
          >
            <h2 className="mb-4 text-montado">
              <Link
                className="underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
                href={href}
              >
                {item.name}
              </Link>
            </h2>
            <p className="mb-7 text-charcoal">{item.summary}</p>
            <Link
              aria-label={`${actionLabel}: ${item.name}`}
              className="mt-auto inline-flex min-h-11 items-center gap-2 font-semibold text-montado underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
              href={href}
            >
              {actionLabel}
              <span aria-hidden="true">↗</span>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

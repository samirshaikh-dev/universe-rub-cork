import Link from "next/link";

export default function CatalogueList({ items, basePath, actionLabel }) {
  return (
    <div className="catalogue-list">
      {items.map((item) => {
        const href = `/${basePath}/${item.slug}`;

        return (
          <article className="catalogue-item" key={item.slug}>
            <div>
              <h2>
                <Link href={href}>{item.name}</Link>
              </h2>
              <p>{item.summary}</p>
            </div>
            <Link className="text-link" href={href}>
              {actionLabel}
            </Link>
          </article>
        );
      })}
    </div>
  );
}

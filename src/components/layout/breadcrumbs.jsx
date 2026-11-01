import Link from "next/link";

/**
 * Shared breadcrumb trail. Renders a labelled nav with an ordered list and
 * marks the final entry as the current page.
 */
export function Breadcrumbs({ items = [] }) {
  if (items.length === 0) return null;

  const lastIndex = items.length - 1;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="m-0 flex flex-wrap items-center gap-2 p-0 text-sm" role="list">
        {items.map((item, index) => {
          const isCurrent = index === lastIndex;

          return (
            <li
              aria-current={isCurrent ? "page" : undefined}
              className={`flex items-center gap-2 ${
                isCurrent ? "text-montado" : "text-charcoal/70"
              }`}
              key={`${item.name}-${index}`}
            >
              {index > 0 && (
                <span aria-hidden="true" className="text-cork">
                  /
                </span>
              )}
              {isCurrent || !item.path ? (
                <span className="spec-num">{item.name}</span>
              ) : (
                <Link className="spec-num no-underline hover:underline" href={item.path}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;

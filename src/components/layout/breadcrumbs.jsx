import Link from "next/link";
import { ChevronRightIcon } from "../ui/icons";

export function Breadcrumbs({ items = [] }) {
  if (items.length === 0) return null;

  const lastIndex = items.length - 1;

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="m-0 flex flex-wrap items-center gap-1.5 p-0 text-xs font-medium" role="list">
        {items.map((item, index) => {
          const isCurrent = index === lastIndex;

          return (
            <li
              aria-current={isCurrent ? "page" : undefined}
              className={`flex items-center gap-1.5 ${
                isCurrent ? "font-semibold text-montado" : "text-charcoal-muted"
              }`}
              key={`${item.name}-${index}`}
            >
              {index > 0 && (
                <ChevronRightIcon aria-hidden="true" className="size-3 text-cork opacity-60" />
              )}
              {isCurrent || !item.path ? (
                <span className="spec-num">{item.name}</span>
              ) : (
                <Link
                  className="spec-num no-underline text-charcoal-light hover:text-montado transition-colors"
                  href={item.path}
                >
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

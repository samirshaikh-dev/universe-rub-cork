import React from "react";
import Link from "next/link";

/**
 * Shared breadcrumb navigation — single source of truth for every page trail.
 *
 * Renders a labelled `<nav>` landmark containing an ordered list, with the
 * final entry marked `aria-current="page"` so assistive technology can convey
 * the user's location without relying on visual styling alone.
 *
 * @param {Object} props
 * @param {Array<{ name: string, path?: string }>} props.items - Ordered trail; the last item is the current page.
 * @param {string} [props.className] - Applied to the outer <nav>, for page-level spacing.
 * @param {string} [props.listClassName] - Applied to the <ol>.
 */
export function Breadcrumbs({ items = [] }) {
  if (items.length === 0) return null;

  const lastIndex = items.length - 1;

  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-montado">
      <ol
        // `role="list"` is explicit because Tailwind preflight sets
        // `list-style: none`, and WebKit drops list semantics for a list with no
        // marker — VoiceOver then reads the trail as loose text (finding S5).
        role="list"
        className="m-0 flex flex-wrap items-center gap-2 p-0"
      >
        {items.map((item, index) => {
          const isCurrent = index === lastIndex;
          return (
            <li
              key={`${item.name}-${index}`}
              className={isCurrent ? "font-semibold" : undefined}
              aria-current={isCurrent ? "page" : undefined}
            >
              {isCurrent || !item.path ? (
                item.name
              ) : (
                <Link
                  className="underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-amber"
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

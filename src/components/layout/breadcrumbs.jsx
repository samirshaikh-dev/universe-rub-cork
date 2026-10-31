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
export function Breadcrumbs({ items = [], className, listClassName }) {
  if (items.length === 0) return null;

  const lastIndex = items.length - 1;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        // `role="list"` is explicit because Tailwind preflight sets
        // `list-style: none`, and WebKit drops list semantics for a list with no
        // marker — VoiceOver then reads the trail as loose text (finding S5).
        role="list"
        className={listClassName}
      >
        {items.map((item, index) => {
          const isCurrent = index === lastIndex;
          return (
            <li
              key={`${item.name}-${index}`}
              className={isCurrent ? "breadcrumb-current" : undefined}
              aria-current={isCurrent ? "page" : undefined}
            >
              {isCurrent || !item.path ? (
                item.name
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;

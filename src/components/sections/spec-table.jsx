import Link from "next/link";
import { ArrowRightIcon, ShieldCheckIcon } from "../ui/icons";

/**
 * High-precision specification table with horizontal scroll support and sticky header.
 */
export default function SpecTable({ rows, caption, label, actionLabel = "View" }) {
  return (
    <div
      aria-label={label ?? caption}
      className="spec-table-container"
      role="region"
      tabIndex={0}
    >
      <table className="spec-table">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            <th scope="col">Product Material</th>
            <th scope="col">Thickness / Range</th>
            <th scope="col">Manufactured Sizes</th>
            <th scope="col">Quality Basis</th>
            <th scope="col" className="text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.product}-${row.thickness}`}>
              <th scope="row" className="font-bold text-montado">
                <Link
                  className="no-underline hover:text-montado-vibrant hover:underline"
                  href={`/products/${row.slug}`}
                >
                  {row.product}
                </Link>
              </th>
              <td className="spec-num font-semibold text-charcoal">{row.thickness}</td>
              <td className="spec-num text-charcoal-light">{row.sizes}</td>
              <td>
                <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-muted">
                  <ShieldCheckIcon className="size-3.5 text-cork" />
                  <span>IS 4253 / Drawing</span>
                </span>
              </td>
              <td className="text-right whitespace-nowrap">
                <Link
                  aria-label={`${actionLabel} ${row.product}`}
                  className="btn btn--secondary min-h-8 px-3 py-1 text-xs font-semibold inline-flex"
                  href={`/products/${row.slug}`}
                >
                  <span>{actionLabel}</span>
                  <ArrowRightIcon className="size-3" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

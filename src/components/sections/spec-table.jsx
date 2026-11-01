import Link from "next/link";

/**
 * Specification table. Rows scroll horizontally inside their own container and
 * the first column stays pinned, so the table works at 360 px wide.
 */
export default function SpecTable({ rows, caption, label, actionLabel = "View" }) {
  return (
    <div
      aria-label={label ?? caption}
      className="spec-scroll"
      role="region"
      tabIndex={0}
    >
      <table className="spec">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Thickness or grade</th>
            <th scope="col">Size</th>
            <th scope="col">
              <span className="sr-only">Product page</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.product}-${row.thickness}`}>
              <th scope="row">
                <Link className="link" href={`/products/${row.slug}`}>
                  {row.product}
                </Link>
              </th>
              <td className="spec-num text-charcoal">{row.thickness}</td>
              <td className="spec-num text-charcoal">{row.sizes}</td>
              <td className="whitespace-nowrap">
                <Link
                  aria-label={`${actionLabel} ${row.product}`}
                  className="link"
                  href={`/products/${row.slug}`}
                >
                  {actionLabel}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

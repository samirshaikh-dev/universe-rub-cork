import Link from "next/link";
import JsonLd from "./json-ld";
import { getBreadcrumbsJsonLd } from "../lib/seo/structured-data";

export default function PageHeading({
  title,
  description,
  breadcrumbs,
  structuredData = [],
}) {
  const items = [{ name: "Home", path: "/" }, ...breadcrumbs];
  const jsonLd = [getBreadcrumbsJsonLd(items), ...structuredData];

  return (
    <header className="page-heading">
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          {items.map((item, index) => {
            const current = index === items.length - 1;

            return (
              <li key={item.path}>
                {current ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <h1>{title}</h1>
      <p className="page-lede">{description}</p>
      <JsonLd data={jsonLd} />
    </header>
  );
}

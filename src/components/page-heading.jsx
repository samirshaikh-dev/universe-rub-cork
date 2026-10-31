import JsonLd from "./json-ld";
import Breadcrumbs from "./layout/breadcrumbs";
import { getBreadcrumbsJsonLd } from "../lib/seo/structured-data";

export default function PageHeading({
  title,
  description,
  breadcrumbs = [],
  structuredData = [],
}) {
  const items = [{ name: "Home", path: "/" }, ...breadcrumbs];
  const jsonLd = [getBreadcrumbsJsonLd(items), ...structuredData];

  return (
    <header className="page-heading">
      <Breadcrumbs className="breadcrumbs" items={items} />
      <h1>{title}</h1>
      <p className="page-lede">{description}</p>
      <JsonLd data={jsonLd} />
    </header>
  );
}

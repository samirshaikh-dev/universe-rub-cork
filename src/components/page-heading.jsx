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
    <header className="mb-12 max-w-[900px] sm:mb-16">
      <Breadcrumbs items={items} />
      <h1 className="display-xl m-0 max-w-[16ch]">{title}</h1>
      <p className="lede mt-6 mb-0 text-charcoal">{description}</p>
      <JsonLd data={jsonLd} />
    </header>
  );
}

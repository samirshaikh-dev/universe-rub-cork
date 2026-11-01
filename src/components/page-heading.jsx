import JsonLd from "./json-ld";
import Breadcrumbs from "./layout/breadcrumbs";
import { getBreadcrumbsJsonLd } from "../lib/seo/structured-data";

export default function PageHeading({
  title,
  description,
  badge,
  breadcrumbs = [],
  structuredData = [],
}) {
  const items = [{ name: "Home", path: "/" }, ...breadcrumbs];
  const jsonLd = [getBreadcrumbsJsonLd(items), ...structuredData];

  return (
    <header className="mb-12 max-w-[960px] sm:mb-16">
      <div className="mb-4">
        <Breadcrumbs items={items} />
      </div>

      {badge && (
        <div className="mb-3">
          <span className="badge-tag">{badge}</span>
        </div>
      )}

      <h1 className="display-xl m-0 max-w-[22ch]">{title}</h1>
      {description && (
        <p className="lede mt-5 mb-0 text-charcoal-light max-w-[65ch]">
          {description}
        </p>
      )}
      <JsonLd data={jsonLd} />
    </header>
  );
}

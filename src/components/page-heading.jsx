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
    <header className="mb-12 max-w-[820px] sm:mb-16">
      <Breadcrumbs items={items} />
      <h1 className="mb-5 max-w-[13ch] text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-montado [font-variation-settings:'wdth'_125]">
        {title}
      </h1>
      <p className="mb-0 max-w-[68ch] text-lg leading-relaxed text-charcoal">
        {description}
      </p>
      <JsonLd data={jsonLd} />
    </header>
  );
}

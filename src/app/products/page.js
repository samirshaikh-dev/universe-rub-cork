import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import CatalogueList from "../../components/sections/catalogue-list";
import { PRODUCTS } from "../../data/site-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Cork and rubberised cork product range",
  description:
    "Browse United Rubber Cork's rubberised cork, cork, decorative cork and cork gift product ranges.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="container page-content">
      <PageHeading
        breadcrumbs={[{ name: "Products", path: "/products" }]}
        description="Product families and documented specifications. Contact United Rubber Cork to confirm current availability."
        title="Cork products"
      />
      <CatalogueList
        actionLabel="View product details"
        basePath="products"
        items={PRODUCTS}
      />
      <div className="page-cta">
        <h2>Looking for a made-to-drawing part?</h2>
        <ContactActions compact />
      </div>
    </div>
  );
}

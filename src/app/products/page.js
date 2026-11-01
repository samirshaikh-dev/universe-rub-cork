import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import CatalogueList from "../../components/sections/catalogue-list";
import PageCta from "../../components/sections/page-cta";
import SpecTable from "../../components/sections/spec-table";
import { PRODUCTS, SPEC_ROWS } from "../../data/site-content";
import { createPageMetadata } from "../../lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Cork and rubberised cork product range",
  description:
    "Browse United Rubber Cork's rubberised cork, cork, decorative cork and cork gift product ranges.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="shell py-10 sm:py-14 lg:py-20">
      <PageHeading
        breadcrumbs={[{ name: "Products", path: "/products" }]}
        description="Compare the documented ranges, sizes and manufacturing basis. For a part made to your drawing or sample, include the dimensions and application in your quote request."
        title="Cork products, made to fit your requirement."
      />

      <section aria-labelledby="products-spec-heading">
        <div className="mb-6 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] md:items-end">
          <h2 className="display-md m-0 max-w-[20ch]" id="products-spec-heading">
            Published dimensions
          </h2>
          <p className="m-0 max-w-[46ch] text-charcoal">
            Four ranges, with thicknesses and sizes as documented. Confirm
            current availability before ordering.
          </p>
        </div>
        <SpecTable
          caption="Selected published product dimensions"
          label="Published product dimensions. Scroll horizontally to view all columns."
          rows={SPEC_ROWS}
          actionLabel="Details"
        />
      </section>

      <section aria-labelledby="product-families-heading" className="mt-16 sm:mt-20">
        <h2 className="display-md m-0 mb-6" id="product-families-heading">
          Product families
        </h2>
        <CatalogueList
          actionLabel="View range"
          basePath="products"
          items={PRODUCTS}
        />
      </section>

      <PageCta
        description="Share the product, dimensions and quantity to discuss a specification."
        title="Have a drawing or sample?"
      >
        <ContactActions />
      </PageCta>
    </div>
  );
}

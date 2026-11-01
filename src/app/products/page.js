import ContactActions from "../../components/contact-actions";
import PageHeading from "../../components/page-heading";
import CatalogueList from "../../components/sections/catalogue-list";
import PageCta from "../../components/sections/page-cta";
import SpecTable from "../../components/sections/spec-table";
import { PRODUCTS, SPEC_ROWS } from "../../data/site-content";
import { MEDIA } from "../../data/media";
import { createPageMetadata } from "../../lib/seo/metadata";
import { ShieldCheckIcon, RulerIcon, FileTextIcon } from "../../components/ui/icons";

const PRODUCT_MEDIA = {
  "rubberised-cork": MEDIA.gaskets,
  cork: MEDIA.sheetSamples,
  "decorative-cork": MEDIA.tiles,
  "cork-gifts": MEDIA.corkSheet,
};

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
        badge="Direct Works Catalogue • Vapi, Gujarat"
        breadcrumbs={[{ name: "Products", path: "/products" }]}
        description="Explore documented standard ranges, sheet sizes, slit strips, and manufacturing standards. Custom one-piece die-cut frames and washers are produced directly to your CAD drawing or physical sample."
        title="Cork & Rubberised Cork Products, Cut to Specification."
      />

      {/* Product Families Cards */}
      <section aria-labelledby="product-families-heading" className="mb-16 sm:mb-20">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-montado/10 pb-4">
          <div>
            <h2 className="display-md m-0 text-charcoal" id="product-families-heading">
              Product Families
            </h2>
            <p className="mt-1 mb-0 text-xs sm:text-sm text-charcoal-muted">
              Select a product line to inspect technical properties, thickness ranges, and applications.
            </p>
          </div>
          <span className="badge-tag text-xs">
            <ShieldCheckIcon className="size-3.5 text-montado" />
            <span>ISO 9001:2015 System</span>
          </span>
        </div>

        <CatalogueList
          actionLabel="View Specifications"
          basePath="products"
          items={PRODUCTS}
          mediaMap={PRODUCT_MEDIA}
        />
      </section>

      {/* Specification Table */}
      <section aria-labelledby="products-spec-heading" className="mt-16 sm:mt-20">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-montado/10 pb-4">
          <div>
            <h2 className="display-md m-0 text-charcoal" id="products-spec-heading">
              Published Manufacturing Dimensions
            </h2>
            <p className="mt-1 mb-0 text-xs sm:text-sm text-charcoal-muted">
              Standard sheet sizes and thicknesses. Continuous jointless gaskets and slit strips are cut to order.
            </p>
          </div>

          <span className="badge-tag badge-tag--cork text-xs">
            <RulerIcon className="size-3.5 text-cork-deep" />
            <span>IS 4253 Part II Basis</span>
          </span>
        </div>

        <SpecTable
          actionLabel="View Details"
          caption="Published product dimensions and thicknesses"
          label="Published product dimensions. Scroll horizontally to view all columns."
          rows={SPEC_ROWS}
        />
      </section>

      {/* Bottom CTA */}
      <PageCta
        description="Share your product selection, required dimensions, and quantity with our Vapi technical desk."
        title="Working from a specific drawing or sample?"
      >
        <ContactActions />
      </PageCta>
    </div>
  );
}

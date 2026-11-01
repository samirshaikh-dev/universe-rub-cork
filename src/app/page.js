import JsonLd from "../components/json-ld";
import HomeHero from "../components/homepage/home-hero";
import IndustryPanels from "../components/homepage/industry-panels";
import ProductSpecSection from "../components/homepage/product-spec-section";
import PropertyBand from "../components/homepage/property-band";
import ProofBand from "../components/homepage/proof-band";
import QuoteBand from "../components/homepage/quote-band";
import { INDUSTRIES } from "../data/site-content";
import { getOrganizationJsonLd } from "../lib/seo/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getOrganizationJsonLd()} />
      <HomeHero />
      <ProductSpecSection />
      <IndustryPanels industries={INDUSTRIES} />
      <PropertyBand />
      <ProofBand />
      <QuoteBand />
    </>
  );
}

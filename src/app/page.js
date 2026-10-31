import JsonLd from "../components/json-ld";
import ContactCtaSection from "../components/homepage/contact-cta-section";
import HomeHero from "../components/homepage/home-hero";
import IndustrySection from "../components/homepage/industry-section";
import ProductRangeSection from "../components/homepage/product-range-section";
import QualityBand from "../components/homepage/quality-band";
import { PRODUCTS, INDUSTRIES } from "../data/site-content";
import { getOrganizationJsonLd } from "../lib/seo/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getOrganizationJsonLd()} />
      <HomeHero />
      <ProductRangeSection products={PRODUCTS} />
      <IndustrySection industries={INDUSTRIES} />
      <QualityBand />
      <ContactCtaSection />
    </>
  );
}

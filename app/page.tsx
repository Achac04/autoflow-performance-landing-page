import { FeaturedSeasonBanner } from "@/components/FeaturedSeasonBanner";
import { BrandsAndTypesSection } from "@/components/BrandsAndTypesSection";
import { FinancingSection } from "@/components/FinancingSection";
import { Hero } from "@/components/Hero";
import { HoursLocation } from "@/components/HoursLocation";
import { InventorySection } from "@/components/InventorySection";
import { PromoBanner } from "@/components/PromoBanner";
import { TrustSection } from "@/components/TrustSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSeasonBanner />
      <BrandsAndTypesSection />
      <InventorySection />
      <PromoBanner
        id="banner-secondary"
        eyebrow="Service & parts"
        headline="Book winter tires or a multi-point inspection while you shop the showroom."
        highlight="Call (403) 555-0123 to reserve a bay, or ask for express service when you arrive — tire storage and seasonal changeovers are available."
        size="md"
      />
      <FinancingSection />
      <TrustSection />
      <HoursLocation />
    </>
  );
}

/**
 * Demo inventory — replace with CMS/API data in production.
 *
 * WordPress headless: WPGraphQL or REST (`/wp-json/wp/v2/vehicle`) with ISR.
 * PHP backend: JSON endpoint consumed from a Route Handler or Server Component.
 */
export type VehicleCondition = "new" | "used";

export type Vehicle = {
  id: string;
  model: string;
  trim: string;
  price: number;
  condition: VehicleCondition;
  /** Local file in `public/inventory` — reliable with `next/image` (no remote fetch). */
  imagePath: string;
  imageAlt: string;
  stockNumber: string;
  /** Odometer in kilometres; new units use minimal delivery mileage. */
  mileageKm: number;
  exteriorColor: string;
  interiorColor: string;
  drivetrain: string;
  transmission: string;
  engine: string;
  fuelType: string;
  /** Short bullet points for the detail page. */
  highlights: string[];
  /** Longer paragraph for the detail page. */
  description: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    model: "2025 BMW i4",
    trim: "eDrive40",
    price: 52900,
    condition: "new",
    imagePath: "/inventory/v1.jpg",
    imageAlt: "BMW i4 electric sedan",
    stockNumber: "NSM-25041",
    mileageKm: 45,
    exteriorColor: "Black Sapphire metallic",
    interiorColor: "Vernasca Cognac",
    drivetrain: "Rear-wheel drive",
    transmission: "Single-speed automatic",
    engine: "Electric drive (250 kW)",
    fuelType: "Electric",
    highlights: [
      "Factory warranty and BMW maintenance program eligible",
      "Premium audio, navigation, and driver assistance package",
      "DC fast-charge capable for road trips across the province",
    ],
    description:
      "This i4 balances everyday comfort with responsive electric performance. Ideal for commuters who want a premium interior, confident highway passing, and lower running costs than a comparable gasoline sedan. Our team can walk through lease and finance options tailored to your trade and down payment.",
  },
  {
    id: "v2",
    model: "2021 Toyota Camry",
    trim: "XSE AWD",
    price: 24500,
    condition: "used",
    imagePath: "/inventory/v2.jpg",
    imageAlt: "Toyota Camry sedan",
    stockNumber: "NSM-U18402",
    mileageKm: 62400,
    exteriorColor: "Wind Chill Pearl",
    interiorColor: "Black / Cockpit Red accents",
    drivetrain: "All-wheel drive",
    transmission: "8-speed automatic",
    engine: "2.5L 4-cylinder",
    fuelType: "Gasoline",
    highlights: [
      "Single-owner local trade with complete service records",
      "XSE sport suspension, JBL audio, and panoramic roof",
      "Toyota Safety Sense 2.5+ included",
    ],
    description:
      "A practical midsize sedan with AWD for winter confidence. This XSE trim adds sharper styling and upgraded cabin materials without sacrificing the reliability Camry is known for. Ask about extended warranty products and winter tire packages.",
  },
  {
    id: "v3",
    model: "2025 Ford F-150 Lightning",
    trim: "Lariat",
    price: 68200,
    condition: "new",
    imagePath: "/inventory/v3.jpg",
    imageAlt: "Ford F-150 Lightning pickup",
    stockNumber: "NSM-25088",
    mileageKm: 120,
    exteriorColor: "Antimatter Blue",
    interiorColor: "Black leather",
    drivetrain: "All-wheel drive (dual motor)",
    transmission: "Single-speed automatic",
    engine: "Dual electric motors",
    fuelType: "Electric",
    highlights: [
      "Pro Power Onboard for worksite or campsite use",
      "Extended-range battery configuration from the factory",
      "Tow technology package with trailer reverse guidance",
    ],
    description:
      "Built for Alberta drivers who need pickup capability without the fuel bill. This Lariat offers a refined cabin, strong towing credentials for light equipment, and the convenience of home charging. We can coordinate charger installation partners if needed.",
  },
  {
    id: "v4",
    model: "2019 Honda CR-V",
    trim: "Touring",
    price: 22900,
    condition: "used",
    imagePath: "/inventory/v4.jpg",
    imageAlt: "Honda CR-V crossover SUV",
    stockNumber: "NSM-U19221",
    mileageKm: 88100,
    exteriorColor: "Crystal Black Pearl",
    interiorColor: "Black leather",
    drivetrain: "All-wheel drive",
    transmission: "CVT",
    engine: "1.5L turbocharged 4-cylinder",
    fuelType: "Gasoline",
    highlights: [
      "Touring trim with hands-free tailgate and navigation",
      "Honda Sensing suite and heated front and rear seats",
      "Fresh safety inspection and detailed reconditioning completed",
    ],
    description:
      "A versatile family crossover with Honda’s efficient turbo powertrain and a feature-rich Touring cabin. Previous owners kept regular maintenance at our affiliated service centre. Schedule a test drive to experience ride quality and cargo flexibility.",
  },
  {
    id: "v5",
    model: "2025 Hyundai Ioniq 6",
    trim: "Long Range",
    price: 48999,
    condition: "new",
    imagePath: "/inventory/v5.jpg",
    imageAlt: "Hyundai Ioniq 6 electric sedan",
    stockNumber: "NSM-25073",
    mileageKm: 38,
    exteriorColor: "Digital Green Pearl",
    interiorColor: "Dark pebble grey",
    drivetrain: "Rear-wheel drive",
    transmission: "Single-speed reduction gear",
    engine: "Long-range electric (168 kW)",
    fuelType: "Electric",
    highlights: [
      "Exceptional highway range and ultra-fast charging window",
      "Dual 12.3\" displays, wireless Apple CarPlay / Android Auto",
      "Hyundai complimentary maintenance and roadside assistance",
    ],
    description:
      "Streamlined design meets long-distance EV usability. The Ioniq 6 is a strong match for drivers who want efficiency, a quiet cabin, and modern tech. Our finance desk can compare lease versus purchase with provincial incentives where applicable.",
  },
  {
    id: "v6",
    model: "2020 Subaru Outback",
    trim: "Limited XT",
    price: 27950,
    condition: "used",
    imagePath: "/inventory/v6.jpg",
    imageAlt: "Subaru Outback wagon",
    stockNumber: "NSM-U17655",
    mileageKm: 95600,
    exteriorColor: "Crimson Red Pearl",
    interiorColor: "Java Brown Nappa leather",
    drivetrain: "Symmetrical all-wheel drive",
    transmission: "CVT",
    engine: "2.4L turbocharged BOXER® 4-cylinder",
    fuelType: "Gasoline",
    highlights: [
      "XT turbo power for confident merging and trailhead access",
      "Harman Kardon audio, power moonroof, and heated rear seats",
      "New brakes and tires within the last 12,000 km",
    ],
    description:
      "The Outback Limited XT blends wagon practicality with turbocharged performance. Well suited to weekend trips and daily commuting in variable weather. Review the full inspection report and ask about available extended coverage plans.",
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}

export function getAllVehicleIds(): string[] {
  return vehicles.map((v) => v.id);
}

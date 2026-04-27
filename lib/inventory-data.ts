/**
 * Inventory database — static JSON consumed by the site and `/inventory/[id]`.
 * Images live in `public/Inventory/` (e.g. `v1.jpg` … `v10.jpg`).
 */
export type VehicleCondition = "new" | "used";

export type Vehicle = {
  id: string;
  model: string;
  trim: string;
  price: number;
  condition: VehicleCondition;
  mileageKm: number;
  stockNumber: string;
  exteriorColor: string;
  interiorColor: string;
  drivetrain: string;
  transmission: string;
  engine: string;
  fuelType: string;
  imagePath: string;
  imageAlt: string;
  highlights: string[];
  description: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    model: "2024 Mercedes-AMG GT R",
    trim: "Coupe",
    price: 185600,
    condition: "used",
    mileageKm: 12400,
    stockNumber: "NSM-24011",
    exteriorColor: "Matte Magnetite Black",
    interiorColor: "Black Nappa Leather/DINAMICA",
    drivetrain: "Rear-wheel drive",
    transmission: "7-speed dual-clutch",
    engine: "4.0L V8 Biturbo",
    fuelType: "Gasoline",
    imagePath: "/Inventory/v1.jpg",
    imageAlt:
      "Matte black Mercedes-AMG GT R parked at a Mediterranean harbor",
    highlights: [
      "Track-ready aerodynamics with active rear wing",
      "AMG Performance exhaust system",
      "Burmester High-End Surround Sound",
    ],
    description:
      "An absolute masterpiece of German engineering. This AMG GT R captures attention with its aggressive matte finish and provides a visceral driving experience perfect for the enthusiast seeking track-level performance on the road.",
  },
  {
    id: "v2",
    model: "2025 Toyota Camry",
    trim: "XSE",
    price: 41200,
    condition: "new",
    mileageKm: 15,
    stockNumber: "NSM-25092",
    exteriorColor: "Celestial Silver Metallic",
    interiorColor: "Cockpit Red Leather",
    drivetrain: "All-wheel drive",
    transmission: "8-speed automatic",
    engine: "2.5L 4-Cylinder",
    fuelType: "Gasoline",
    imagePath: "/Inventory/v2.jpg",
    imageAlt: "Silver Toyota Camry XSE with black roof in an industrial setting",
    highlights: [
      "Two-tone Midnight Black Metallic roof",
      "Sport-tuned suspension",
      "Panoramic glass roof with front power tilt/slide",
    ],
    description:
      "Reliability meets a bold new aesthetic. The XSE trim brings a sporty edge to the classic Camry reliability, featuring a striking two-tone paint job and a premium interior that punches well above its weight class.",
  },
  {
    id: "v3",
    model: "2023 Mercedes-Benz GLE 450",
    trim: "4MATIC SUV",
    price: 72500,
    condition: "used",
    mileageKm: 34200,
    stockNumber: "NSM-23115",
    exteriorColor: "Polar White",
    interiorColor: "Espresso Brown/Black",
    drivetrain: "4MATIC All-wheel drive",
    transmission: "9-speed automatic",
    engine: "3.0L Inline-6 Turbo with Mild Hybrid",
    fuelType: "Gasoline",
    imagePath: "/Inventory/v3.jpg",
    imageAlt: "White Mercedes-Benz GLE SUV under neon garage lighting",
    highlights: [
      "MBUX Interior Assistant",
      "AIRMATIC Air Suspension system",
      "Multicontour front seats with massage feature",
    ],
    description:
      "Sophisticated, spacious, and technologically advanced. This GLE 450 is the perfect family luxury vehicle, offering a smooth air-ride suspension and the latest safety suites for peace of mind on long highway trips.",
  },
  {
    id: "v4",
    model: "2022 Honda CR-V",
    trim: "EX-L",
    price: 35800,
    condition: "used",
    mileageKm: 48900,
    stockNumber: "NSM-22044",
    exteriorColor: "Platinum White Pearl",
    interiorColor: "Black Leatherette",
    drivetrain: "All-wheel drive",
    transmission: "Continuously Variable (CVT)",
    engine: "1.5L Turbocharged 4-Cylinder",
    fuelType: "Gasoline",
    imagePath: "/Inventory/v4.jpg",
    imageAlt: "White Honda CR-V in a snowy mountain landscape",
    highlights: [
      "Real Time AWD with Intelligent Control System",
      "Power tailgate with programmable height",
      "Honda Sensing safety suite",
    ],
    description:
      "The quintessential Alberta crossover. This CR-V has been tested in the elements and stands ready for its next adventure. Excellent fuel economy and a versatile cargo area make it a top choice for active lifestyles.",
  },
  {
    id: "v5",
    model: "2024 Lamborghini Huracán",
    trim: "EVO",
    price: 298000,
    condition: "new",
    mileageKm: 85,
    stockNumber: "NSM-24888",
    exteriorColor: "Grigio Lynx",
    interiorColor: "Sportivo Alcantara Black",
    drivetrain: "All-wheel drive",
    transmission: "7-speed LDF dual-clutch",
    engine: "5.2L V10",
    fuelType: "Gasoline",
    imagePath: "/Inventory/v5.jpg",
    imageAlt: "Grey Lamborghini Huracan with red wheels viewed from above",
    highlights: [
      "Lamborghini Dinamica Veicolo Integrata (LDVI)",
      "Custom Red Forged center-lock wheels",
      "Carbon Ceramic brake system",
    ],
    description:
      "The soul of a naturally aspirated V10. This Huracán EVO is a symphony of sound and speed, featuring custom-colored wheels that highlight its aggressive stance. A true collector's item for those who demand the pinnacle of performance.",
  },
  {
    id: "v6",
    model: "2025 Ford Expedition",
    trim: "Limited MAX",
    price: 89400,
    condition: "new",
    mileageKm: 45,
    stockNumber: "NSM-25012",
    exteriorColor: "Star White Metallic",
    interiorColor: "Sandstone Leather",
    drivetrain: "Intelligent 4WD",
    transmission: "10-speed automatic",
    engine: "3.5L EcoBoost V6",
    fuelType: "Gasoline",
    imagePath: "/Inventory/v6.jpg",
    imageAlt: "White Ford Expedition on a desert trail with red rocks",
    highlights: [
      "Heavy-Duty Trailer Tow Package",
      "Panoramic Vista Roof",
      "Bang & Olufsen 12-Speaker Sound System",
    ],
    description:
      "Commanding presence with room for the whole family. The Expedition MAX provides extended cargo space and top-tier towing capacity, making it the ultimate vehicle for mountain getaways and hauling the boat to the lake.",
  },
  {
    id: "v7",
    model: "2024 Audi TT",
    trim: "Coupe S-Line",
    price: 58900,
    condition: "new",
    mileageKm: 110,
    stockNumber: "NSM-24077",
    exteriorColor: "Vegas Yellow",
    interiorColor: "Black Fine Nappa Leather",
    drivetrain: "quattro All-wheel drive",
    transmission: "7-speed S tronic",
    engine: "2.0L TFSI 4-Cylinder",
    fuelType: "Gasoline",
    imagePath: "/Inventory/v7.jpg",
    imageAlt: "Close up of a yellow Audi TT Coupe in a showroom",
    highlights: [
      "Audi Virtual Cockpit",
      "S-Line exterior styling package",
      "Quattro permanent all-wheel drive",
    ],
    description:
      "Iconic design in a high-visibility color. The Audi TT remains a benchmark for compact sports cars, offering precise handling and a driver-focused interior that feels like a modern jet cockpit.",
  },
  {
    id: "v8",
    model: "2017 Ferrari LaFerrari",
    trim: "Aperta",
    price: 4500000,
    condition: "used",
    mileageKm: 1200,
    stockNumber: "NSM-7001F",
    exteriorColor: "Rosso Corsa",
    interiorColor: "Black Alcantara with Red Piping",
    drivetrain: "Rear-wheel drive",
    transmission: "7-speed dual-clutch",
    engine: "6.3L V12 Hybrid",
    fuelType: "Hybrid",
    imagePath: "/Inventory/v8.jpg",
    imageAlt: "Red Ferrari LaFerrari in a clean, minimalist showroom",
    highlights: [
      "Limited edition 1 of 210",
      "F1-inspired KERS hybrid system",
      "Brembo carbon-ceramic braking system",
    ],
    description:
      "A once-in-a-generation hypercar. The LaFerrari combines a screaming V12 with an electric motor to deliver nearly 1,000 horsepower. This example is kept in pristine condition and represents the pinnacle of Maranello's history.",
  },
  {
    id: "v9",
    model: "2024 Land Rover Range Rover Evoque",
    trim: "Dynamic SE",
    price: 64200,
    condition: "new",
    mileageKm: 250,
    stockNumber: "NSM-24103",
    exteriorColor: "Fuji White",
    interiorColor: "Ebony Grained Leather",
    drivetrain: "All-wheel drive",
    transmission: "9-speed automatic",
    engine: "2.0L P250 I4",
    fuelType: "Gasoline",
    imagePath: "/Inventory/v9.jpg",
    imageAlt: "White Range Rover Evoque parked on grass",
    highlights: [
      "Terrain Response 2 system",
      "Flush deployable door handles",
      "11.4-inch curved glass touchscreen",
    ],
    description:
      "Elegance tailored for the city. The Evoque offers the prestige of the Range Rover brand in a compact, agile footprint. Perfect for urban professionals who need a vehicle that is as stylish as it is capable in winter conditions.",
  },
  {
    id: "v10",
    model: "2023 Jeep Wrangler",
    trim: "Rubicon 4-Door",
    price: 59800,
    condition: "used",
    mileageKm: 18600,
    stockNumber: "NSM-23055",
    exteriorColor: "Bright White",
    interiorColor: "Black Cloth with Rubicon Red Stitching",
    drivetrain: "4x4 Rock-Trac System",
    transmission: "8-speed automatic",
    engine: "3.6L Pentastar V6",
    fuelType: "Gasoline",
    imagePath: "/Inventory/v10.jpg",
    imageAlt: "White Jeep Wrangler Rubicon on a gravel road in the forest",
    highlights: [
      "Tru-Lok front and rear lockers",
      "Electronic front sway bar disconnect",
      "All-terrain 33-inch tires",
    ],
    description:
      "Built for the rugged Alberta backcountry. This Rubicon is fully equipped to handle any trail from the Badlands to the Rockies. With its heavy-duty suspension and locking differentials, it's the ultimate tool for off-road exploration.",
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}

export function getAllVehicleIds(): string[] {
  return vehicles.map((v) => v.id);
}

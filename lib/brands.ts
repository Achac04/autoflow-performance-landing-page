import type { SimpleIcon } from "simple-icons";
import {
  siBmw,
  siChevrolet,
  siFord,
  siGeneralmotors,
  siHonda,
  siHyundai,
  siKia,
  siMazda,
  siNissan,
  siSubaru,
  siToyota,
  siVolkswagen,
} from "simple-icons";

export type BrandDef =
  | { name: string; icon: SimpleIcon }
  | { name: string; abbr: string };

/** Logos via Simple Icons (CC0). Mercedes-Benz uses initials (no icon in set). GMC uses GM mark. */
export const brandDefs: BrandDef[] = [
  { name: "BMW", icon: siBmw },
  { name: "Chevrolet", icon: siChevrolet },
  { name: "Ford", icon: siFord },
  { name: "GMC", icon: siGeneralmotors },
  { name: "Honda", icon: siHonda },
  { name: "Hyundai", icon: siHyundai },
  { name: "Kia", icon: siKia },
  { name: "Mazda", icon: siMazda },
  { name: "Mercedes-Benz", abbr: "MB" },
  { name: "Nissan", icon: siNissan },
  { name: "Subaru", icon: siSubaru },
  { name: "Toyota", icon: siToyota },
  { name: "Volkswagen", icon: siVolkswagen },
];

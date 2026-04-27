import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VehicleDetail } from "@/components/VehicleDetail";
import {
  getAllVehicleIds,
  getVehicleById,
} from "@/lib/inventory-data";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllVehicleIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const vehicle = getVehicleById(id);
  if (!vehicle) {
    return { title: "Vehicle not found" };
  }
  return {
    title: `${vehicle.model} ${vehicle.trim}`,
    description: `${vehicle.condition === "new" ? "New" : "Used"} ${vehicle.model} — ${vehicle.trim}. ${vehicle.mileageKm.toLocaleString("en-CA")} km. $${vehicle.price.toLocaleString("en-CA")} at NorthStar Motors.`,
  };
}

export default async function InventoryVehiclePage({ params }: PageProps) {
  const { id } = await params;
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    notFound();
  }

  return <VehicleDetail vehicle={vehicle} />;
}

import { getServicePage } from "@/data/services";
import {
  ServiceTemplate,
  serviceMetadata,
} from "@/components/landing/ServiceTemplate";
import { notFound } from "next/navigation";

const SLUG = "sageo";

export function generateMetadata() {
  const data = getServicePage(SLUG);
  if (!data) return {};
  return serviceMetadata(data);
}

export default function SageoPage() {
  const data = getServicePage(SLUG);
  if (!data) notFound();
  return <ServiceTemplate data={data} />;
}

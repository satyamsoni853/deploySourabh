import { servicesData } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/services/ServiceDetail";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

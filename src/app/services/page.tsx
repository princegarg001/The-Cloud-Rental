import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services | The Cloud Rental",
  description:
    "Comprehensive IT services including cloud solutions, networking, cybersecurity, managed services, and IT trading. Enterprise-grade solutions for your business.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}

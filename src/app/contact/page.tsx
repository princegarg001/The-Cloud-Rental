import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | The Cloud Rental",
  description:
    "Get in touch with The Cloud Rental for IT infrastructure, cloud, networking, and cybersecurity solutions. Free consultation available.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}

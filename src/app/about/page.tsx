import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | The Cloud Rental",
  description:
    "Learn about The Cloud Rental — a leading IT services provider based in Gurugram, India. Our mission, values, and the team behind your IT transformation.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}

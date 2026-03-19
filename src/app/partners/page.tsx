import Partners from "@/components/Partners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners | The Cloud Rental",
  description:
    "We partner with industry-leading technology providers like Cisco, Dell, AWS, Microsoft, and VMware to deliver robust IT solutions.",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-electric-300 mb-6">
          Technology Alliances
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
          Our Global <span className="gradient-text">Partners</span>
        </h1>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          We collaborate with the best in the industry to bring you secure, scalable, and cutting-edge enterprise IT solutions.
        </p>
      </div>

      <Partners />
    </div>
  );
}

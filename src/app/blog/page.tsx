import type { Metadata } from "next";
import BlogPageContent from "./BlogPageContent";

export const metadata: Metadata = {
  title: "Blog | The Cloud Rental",
  description:
    "Stay updated with the latest IT trends, cloud computing insights, cybersecurity tips, and technology news from The Cloud Rental.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}

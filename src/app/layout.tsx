import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Cloud Rental | Premium IT & Networking Solutions",
  description:
    "Expert IT infrastructure, cloud computing, networking & cybersecurity solutions to boost your business efficiency. Trusted by leading enterprises.",
  keywords: [
    "IT services",
    "cloud computing",
    "networking solutions",
    "cybersecurity",
    "IT infrastructure",
    "The Cloud Rental",
  ],
  openGraph: {
    title: "The Cloud Rental | Premium IT & Networking Solutions",
    description:
      "Expert IT infrastructure, cloud computing, networking & cybersecurity solutions to boost your business efficiency.",
    url: "https://thecloudrental.com",
    siteName: "The Cloud Rental",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cloud Rental | Premium IT & Networking Solutions",
    description:
      "Expert IT services to boost your business efficiency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-navy-950 text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

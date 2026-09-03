import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Pet Fresh Philippines | Dog Shampoo, Ear Cleaner & Pet Care",
  description:
    "Philippine-made dog shampoo, ear cleaner and grooming products for pet owners and professional groomers. Private label and custom pet-care manufacturing available from Pet Fresh.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://petfreshph.com",
    siteName: "Pet Fresh Philippines",
    title: "Pet Fresh Philippines | Dog Grooming & Pet Care",
    description:
      "Philippine-made grooming products for pet owners and professionals, with private label and custom pet-care manufacturing.",
    images: [
      {
        url: "/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Pet Fresh dog shampoo and pet grooming products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pet Fresh Philippines | Dog Grooming & Pet Care",
    description:
      "Philippine-made grooming products for pet owners and professional groomers.",
    images: ["/images/og-main.jpg"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://petfreshph.com/#website",
  url: "https://petfreshph.com",
  name: "Pet Fresh Philippines",
  alternateName: "Pet Fresh",
  inLanguage: "en-PH",
  publisher: {
    "@id": "https://petfreshph.com/#organization",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <HomeClient />
    </>
  );
}

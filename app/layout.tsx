import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Pet Fresh | Gentle Care for Sensitive Dogs",
    template: "%s | Pet Fresh"
  },
  description: "Philippine-made organic grooming essentials. Formulated by in-house chemists for sensitive skin using local botanical extracts.",
  keywords: ["Dog Shampoo Philippines", "Organic Pet Care", "Sensitive Dog Skin", "Pet Fresh"],
  authors: [{ name: "Pet Fresh Philippines" }],
  creator: "Pet Fresh",
  
  // --- Open Graph (Facebook/LinkedIn/Discord) ---
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://petfresh.ph", 
    siteName: "Pet Fresh",
    title: "Pet Fresh | Soil, Spirit, & Science",
    description: "Gentle, human-grade grooming rituals for your most delicate companions.",
    images: [
      {
        url: "/images/og-main.jpg", 
        width: 1200,
        height: 630,
        alt: "Pet Fresh Botanical Grooming",
      },
    ],
  },

  // --- Twitter / X ---
  twitter: {
    card: "summary_large_image",
    title: "Pet Fresh | Botanical Pet Care",
    description: "Crafting rituals, not just products. Organic & Hypoallergenic.",
    images: ["/images/og-main.jpg"],
    creator: "@petfreshph",
  },

  // --- Favicons ---
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#8B7E6A] selection:text-white bg-[#F4EFE7]">
        {children}
        <Footer />
      </body>
    </html>
  );
}
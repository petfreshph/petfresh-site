import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  // 1. Aggressive Title for Search CTR
  title: {
    default: "Pet Fresh | #1 Organic Dog Shampoo & Ear Cleaner Philippines",
    template: "%s | Pet Fresh Organic Pet Care"
  },
  
  // 2. Keyword-Rich Description targeting "Solutions" not just "Products"
  description: "Veterinary-strength organic pet care formulated by chemists. Best-selling Madre de Cacao dog shampoo for sensitive skin and biocompatible ear cleaner for infections and odors. Proudly Philippine-made.",
  
  // 3. Dominant Keyword Array (Aggressive LSI Keywords)
  keywords: [
    "Dog Shampoo Philippines", 
    "Organic Pet Ear Cleaner", 
    "Best Dog Ear Wash for Infections",
    "Hypoallergenic Dog Shampoo", 
    "Madre de Cacao Pet Grooming", 
    "Bulk Pet Shampoo for Groomers",
    "Sensitive Dog Skin Treatment",
    "Pet Fresh Lite",
    "Natural Dog Deodorizer"
  ],

  authors: [{ name: "Pet Fresh Philippines" }],
  creator: "Pet Fresh",
  
  // 4. Verification for Google Search Console
  verification: {
    google: 'your-google-verification-code', // Replace with your actual code
  },

  // --- Open Graph (Facebook/WhatsApp/LinkedIn) ---
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://petfresh.ph", 
    siteName: "Pet Fresh Philippines",
    title: "Pet Fresh | Veterinary-Grade Organic Pet Care",
    description: "Switch to the #1 choice for sensitive dogs. Organic shampoo and ear wash rituals powered by Soil, Spirit, & Science.",
    images: [
      {
        url: "/images/og-main.jpg", 
        width: 1200,
        height: 630,
        alt: "Pet Fresh Organic Dog Shampoo and Ear Cleaner",
      },
    ],
  },

  // --- Twitter / X ---
  twitter: {
    card: "summary_large_image",
    title: "Pet Fresh PH | Organic & Hypoallergenic Grooming",
    description: "The most trusted Madre de Cacao formula for sensitive dogs in the Philippines.",
    images: ["/images/og-main.jpg"],
    creator: "@petfreshph",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // 5. Canonical URL to prevent duplicate content penalties
  alternates: {
    canonical: 'https://petfresh.ph',
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
        {/* Global Organization Schema: Establish Brand Authority */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pet Fresh Philippines",
              "url": "https://petfresh.ph",
              "logo": "https://petfresh.ph/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+63-YOUR-NUMBER", // Replace with your contact info
                "contactType": "customer service",
                "areaServed": "PH",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://facebook.com/petfreshph",
                "https://instagram.com/petfreshph"
              ]
            })
          }}
        />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
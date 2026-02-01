import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Pet Fresh | #1 Organic Dog Shampoo & Ear Cleaner Philippines",
    template: "%s | Pet Fresh Organic Pet Care",
  },
  description:
    "Veterinary-strength organic pet care formulated by chemists. Best-selling Madre de Cacao dog shampoo for sensitive skin and biocompatible ear cleaner for infections and odors. Proudly Philippine-made.",
  keywords: [
    "Dog Shampoo Philippines",
    "Organic Pet Ear Cleaner",
    "Best Dog Ear Wash for Infections",
    "Hypoallergenic Dog Shampoo",
    "Madre de Cacao Pet Grooming",
    "Bulk Pet Shampoo for Groomers",
    "Sensitive Dog Skin Treatment",
    "Pet Fresh Lite",
    "Natural Dog Deodorizer",
  ],
  authors: [{ name: "Pet Fresh Philippines" }],
  creator: "Pet Fresh",
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://petfreshph.com",
    siteName: "Pet Fresh Philippines",
    title: "Pet Fresh | Veterinary-Grade Organic Pet Care",
    description:
      "Switch to the #1 choice for sensitive dogs. Organic shampoo and ear wash rituals powered by Soil, Spirit, & Science.",
    images: [
      {
        url: "/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Pet Fresh Organic Dog Shampoo and Ear Cleaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Fresh PH | Organic & Hypoallergenic Grooming",
    description:
      "The most trusted Madre de Cacao formula for sensitive dogs in the Philippines.",
    images: ["/images/og-main.jpg"],
    creator: "@petfreshph",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://petfreshph.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1423700516070004');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body className="antialiased selection:bg-[#8B7E6A] selection:text-white bg-[#F4EFE7]">
        {/* Global Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pet Fresh Philippines",
              url: "https://petfreshph.com",
              logo: "https://petfreshph.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+63-YOUR-NUMBER",
                contactType: "customer service",
                areaServed: "PH",
                availableLanguage: "English",
              },
              sameAs: [
                "https://facebook.com/petfreshph",
                "https://instagram.com/petfreshph",
              ],
            }),
          }}
        />

        {children}
        <Footer />
      </body>
    </html>
  );
}

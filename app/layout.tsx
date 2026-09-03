import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import Footer from "./components/Footer";
import NeoChat from "./components/NeoChat";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GOOGLE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://petfreshph.com"),

  title: {
    default: "Pet Fresh Philippines | Dog Shampoo & Private Label Pet Care",
    template: "%s | Pet Fresh Philippines",
  },

  description:
    "Philippine-made dog shampoo, ear cleaner and pet grooming products for pet owners and professional groomers. Private label and custom pet-care manufacturing available from Pet Fresh.",

  authors: [{ name: "Pet Fresh Philippines" }],
  creator: "Pet Fresh Philippines",
  publisher: "Pet Fresh Philippines",

  verification: GOOGLE_VERIFICATION
    ? {
        google: GOOGLE_VERIFICATION,
      }
    : undefined,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Pet Fresh Philippines",
    title: "Pet Fresh Philippines | Pet Grooming & Private Label",
    description:
      "Philippine-made pet grooming products for owners and professionals, with private label and custom pet-care manufacturing.",
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
    title: "Pet Fresh Philippines | Pet Grooming & Private Label",
    description:
      "Philippine-made grooming products and private-label pet-care manufacturing.",
    images: ["/images/og-main.jpg"],
    creator: "@petfreshph",
  },

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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://petfreshph.com/#organization",
    name: "Pet Fresh Philippines",
    alternateName: "Pet Fresh",
    url: "https://petfreshph.com",
    logo: "https://petfreshph.com/logo.png",
    email: "petfreshph@gmail.com",
    areaServed: {
      "@type": "Country",
      name: "Philippines",
    },
    sameAs: [
      "https://facebook.com/petfreshph",
      "https://instagram.com/petfreshph",
    ],
  };

  return (
    <html lang="en-PH">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className="antialiased selection:bg-[#8B7E6A] selection:text-white bg-[#F4EFE7]">
        {children}

        <NeoChat />
        <Footer />

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

        {/* Google Analytics */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];

                  function gtag(){
                    dataLayer.push(arguments);
                  }

                  gtag('js', new Date());

                  gtag('config', '${GA_ID}', {
                    send_page_view: true
                  });
                `,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}

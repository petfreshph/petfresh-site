import { Metadata } from 'next';
import ShopPage from './ShopPage'; // This connects to your design file

// 1. THE KILLER SEO METADATA
// This is what Google indexes. It must be in a Server Component.
export const metadata: Metadata = {
  title: "Shop Organic Pet Care | Dog Shampoo & Ear Cleaner Philippines",
  description: "Shop our veterinary-strength organic collection. Featuring Madre de Cacao dog shampoo for sensitive skin, 1000ml value packs, and 99.9% biocompatible ear cleaners.",
  keywords: [
    "Dog Shampoo Philippines", 
    "Organic Pet Ear Cleaner", 
    "Madre de Cacao Dog Soap", 
    "Pet Fresh Lite 1000ml", 
    "Dog Ear Wash for Infections",
    "Best Shampoo for Sensitive Dog Skin"
  ],
  openGraph: {
    title: "Pet Fresh Shop | Premium Organic Grooming Essentials",
    description: "Botanical extracts for your most delicate companions. Shop the #1 Madre de Cacao range in the Philippines.",
    images: [{ url: '/images/og-main.jpg' }], 
  }
};

export default function Page() {
  return (
    <>
      {/* 2. PRODUCT SCHEMA (JSON-LD)
          This tells Google specifically about your Ear Cleaner & Shampoo 
          so you get "Rich Snippets" (price/stars) in search results. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Pet Fresh Products",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Pet Fresh Lite Shampoo 1000ml",
                "url": "https://petfresh.ph/products#shampoo"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Pet Fresh Ear Cleaner 120ml",
                "url": "https://petfresh.ph/products#care-ear"
              }
            ]
          })
        }}
      />
      
      {/* 3. YOUR DESIGN
          This renders your original ShopPage.tsx code. */}
      <ShopPage />
    </>
  );
}
"use client";

import Image from "next/image";
import Nav from "../components/Nav";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// --- DATA ---
const LITE_SHAMPOOS = [
  { id: "lite-coco", variant: "Coco Vanilla", desc: "A gentle, high-volume wash for frequent use.", size: "1 Liter Bottle", price: "₱310.00", image: "/images/products/coco-vanilla.jpg", lazada: "https://www.lazada.com.ph/products/pdp-i3684151616-s19345471755.html", shopee: "https://shopee.ph/Pet-Fresh-Lite-Shampoo-Nature’s-Gentle-Touch-1000ml-Organic-Pet-Shampoo-and-Conditioner-i.715097536.41262623037" },
  { id: "lite-cotton", variant: "Cotton Candy", desc: "Sweet-scented deep cleaning for active dogs.", size: "1 Liter Bottle", price: "₱310.00", image: "/images/products/cotton-candy.jpg", lazada: "https://www.lazada.com.ph/products/pdp-i3684151616-s19345471755.html", shopee: "https://shopee.ph/Pet-Fresh-Lite-Shampoo-Nature’s-Gentle-Touch-1000ml-Organic-Pet-Shampoo-and-Conditioner-i.715097536.41262623037" },
  { id: "lite-wild", variant: "Wild Flower", desc: "Botanical freshness in a generous size.", size: "1 Liter Bottle", price: "₱310.00", image: "/images/products/wild-flower.jpg", lazada: "https://www.lazada.com.ph/products/pdp-i3684151616-s19345471755.html", shopee: "https://shopee.ph/Pet-Fresh-Lite-Shampoo-Nature’s-Gentle-Touch-1000ml-Organic-Pet-Shampoo-and-Conditioner-i.715097536.41262623037" },
  { id: "lite-pumpkin", variant: "Pumpkin Spice", desc: "Limited edition seasonal warmth.", size: "1 Liter Bottle", price: "₱310.00", image: "/images/products/pumpkin-spice-shadow.png", lazada: "https://www.lazada.com.ph/products/pdp-i3684151616-s19345471755.html", shopee: "https://shopee.ph/Pet-Fresh-Lite-Shampoo-Nature’s-Gentle-Touch-1000ml-Organic-Pet-Shampoo-and-Conditioner-i.715097536.41262623037" },
];

const SHAMPOOS = [
  { id: "prem-vanilla", variant: "Vanilla Comfort", desc: "Anxious pups & sensitive skin", price: "₱230.00", image: "/images/products/vanilla-comfort.jpg", lazada: "#", shopee: "https://shopee.ph/Pet-Fresh-Premium-Organic-2-In-1-Dog-Shampoo-and-Conditioner-Vanilla-Comfort-Formula-i.715097536.22942140244" },
  { id: "prem-calm", variant: "Calm & Soothing", desc: "Lavender infused for relaxation", price: "₱230.00", image: "/images/products/calm.jpg", lazada: "https://www.lazada.com.ph/products/pdp-i3371721618-s17185798196.html", shopee: "https://shopee.ph/Organic-Premium-2-In-1-Pet-Fresh-Dog-Shampoo-and-Conditioner-Calm-Soothing-Formula-i.715097536.13790811001" },
  { id: "prem-baby", variant: "Baby Shower", desc: "Classic powder scent", price: "₱230.00", image: "/images/products/baby-shower.jpg", lazada: "https://www.lazada.com.ph/products/pdp-i3371744913-s17185704867.html", shopee: "https://shopee.ph/Baby-Shower-Formula-Organic-Premium-2-In-1-Pet-Fresh-Dog-Shampoo-and-Conditioner-250ml-i.715097536.15269285688" },
  { id: "prem-floral", variant: "Floral Scent", desc: "Fresh garden breeze", price: "₱230.00", image: "/images/products/floral-update.jpg", lazada: "https://www.lazada.com.ph/products/pdp-i3371717697-s17185958121.html", shopee: "https://shopee.ph/Organic-Premium-2-In-1-Pet-Fresh-Dog-Shampoo-and-Conditioner-Floral-Scent-Formula-i.715097536.16061416595" },
];

const COLOGNES = [
  { id: "col-santal", variant: "Santal Fresh", desc: "Woody, grounding, expensive", price: "₱285.00", image: "/images/products/santalfresh2.jpg", shopee: "#", lazada: "#" },
  { id: "col-dreamy", variant: "Dreamy Secret", desc: "Soft mysterious florals", price: "₱285.00", image: "/images/products/dreamy2.jpg", shopee: "#", lazada: "#" },
  { id: "col-french", variant: "French Gardenia", desc: "Classic floral elegance", price: "₱285.00", image: "/images/products/gardenia2.jpg", shopee: "#", lazada: "#" },
];

const CARE = [
  { id: "care-ear", variant: "Ear Cleaner", desc: "Dissolves wax & soothes itch", price: "₱195.00", image: "/images/products/earcleaner.png", lazada: "https://www.lazada.com.ph/products/pdp-i3684150651-s19345704229.html", shopee: "https://shopee.ph/Dog-Ear-Cleaner-Advanced-Ear-Cleaning-Solution-(120ml-Bottle)-Removes-Wax-Itches-and-Infection.-i.715097536.22335054470" },
  { id: "care-oil", variant: "Madre de Cacao Oil", desc: "Targeted relief for hot spots", price: "₱165.00", image: "/images/products/madre.png", lazada: "https://www.lazada.com.ph/products/pdp-i3907995920-s20944023590.html", shopee: "https://shopee.ph/Madre-de-Cacao-Regenerative-Infused-Healing-Oil-For-Dogs-Anti-Septic-Natural-Treatment-For-Mange-i.715097536.23845782320" },
  { id: "care-kennel", variant: "Kennel Care", desc: "Pet-safe floor disinfectant", price: "₱295.00", image: "/images/products/kennel-care.png", lazada: "#", shopee: "https://shopee.ph/1000ml-Kennel-Care-Cleaner-Organic-Cleaner-Disinfectant-and-Deodorizer-Effective-Against-Bacteria-i.715097536.20777248650" },
  { id: "care-deo", variant: "Accident Deodorizer", desc: "Neutralizes tough odors instantly", price: "₱220.00", image: "/images/products/pet-accident-main.png", lazada: "https://www.lazada.com.ph/products/pdp-i3701096849-s19474055865.html", shopee: "https://shopee.ph/Pet-Fresh-Advanced-Organic-Pet-Accident-Dog-Stain-and-Odor-Deodorizer-i.299395360.22245998161" },
];

export default function ShopPage() {
  return (
    <main className={`w-full min-h-screen flex flex-col ${inter.className} bg-[#F4EFE7]`}>
      <Nav />
      
      {/* --- HEADER: Adjusted Padding --- */}
      <section className="pt-32 md:pt-48 pb-8 md:pb-12 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B7E6A] mb-4 block">Our Collection</span>
        <h1 className={`${fraunces.className} text-4xl md:text-6xl text-[#1A1A1A] mb-4 md:mb-6 leading-tight tracking-tight`}>
          Grooming essentials
        </h1>
        <p className="text-base md:text-lg text-[#1A1A1A]/60 leading-relaxed max-w-2xl mx-auto font-light">
          Formulated with botanical extracts to ensure safety and efficacy for your most delicate companions.
        </p>
      </section>

      {/* --- SHOWROOM IMAGE: Tightened Margins --- */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto w-full mb-8 md:mb-12">
        <div className="relative h-[300px] md:h-[600px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
          <Image 
            src="/images/product-page.jpg" 
            alt="Pet Fresh Digital Showroom" 
            fill 
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
      </section>

      {/* --- PRODUCT SECTIONS --- */}
      <ProductSection index="01" title="The Value Range" description="Generous 1-Liter formulations for frequent bathers." products={LITE_SHAMPOOS} columns="lg:grid-cols-4" isHighlight={true} />
      <ProductSection index="02" title="Premium Cleanse" description="Sophisticated formulations for specialized skin requirements." products={SHAMPOOS} columns="lg:grid-cols-4" />
      <ProductSection index="03" title="Signature Scents" description="Long-lasting colognes inspired by fine fragrance." products={COLOGNES} columns="lg:grid-cols-3" />
      <ProductSection index="04" title="Care & Wellness" description="Targeted treatments for hygiene and home sanitation." products={CARE} columns="lg:grid-cols-4" />
    </main>
  );
}

function ProductSection({ index, title, description, products, columns, isHighlight }: any) {
  return (
    <section className={`border-t border-black/5 pt-12 md:pt-20 pb-16 md:pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full ${isHighlight ? 'bg-white/20' : ''}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6">
        <div className="flex items-baseline gap-3 md:gap-4">
          <span className="text-xs font-serif italic text-[#8B7E6A]">{index}</span>
          <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>{title}</h2>
        </div>
        <p className="max-w-md text-xs md:text-sm text-[#1A1A1A]/50 leading-relaxed">{description}</p>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-20`}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group flex flex-col h-full items-center text-center">
      
      {/* IMAGE CONTAINER */}
      <div className="relative h-[250px] md:h-[300px] w-full flex items-end justify-center mb-6 md:mb-8">
        <div className="absolute bottom-6 w-1/2 h-6 bg-black/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative w-full h-full transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">
          <Image 
            src={product.image} 
            alt={product.variant} 
            fill 
            className="object-contain object-bottom" 
            sizes="(max-width: 768px) 100vw, 25vw" 
          />
        </div>
      </div>

      {/* TEXT AREA */}
      <div className="flex flex-col flex-grow w-full px-4 max-w-xs">
        <div className="min-h-[80px] md:min-h-[100px] mb-2 flex flex-col items-center">
            {product.size && (
                <span className="text-[8px] md:text-[9px] font-bold text-[#8FA99B] uppercase tracking-[0.2em] mb-2">
                    {product.size}
                </span>
            )}
            <h3 className="font-bold text-[#1A1A1A] text-base md:text-lg tracking-tight mb-2 uppercase">
                {product.variant}
            </h3>
            <p className="text-[10px] md:text-xs text-[#1A1A1A]/50 leading-relaxed font-light line-clamp-2">
                {product.desc}
            </p>
        </div>

        <p className="text-xs md:text-sm font-semibold text-[#1A1A1A] mb-4 md:mb-6">{product.price}</p>
        
        {/* BUTTON AREA */}
        <div className="mt-auto flex w-full gap-2 pt-4 border-t border-black/5">
          <a 
            href={product.shopee} 
            target="_blank" 
            className="flex-1 bg-[#1A1A1A] text-white py-2.5 md:py-3 text-[8px] md:text-[9px] font-bold uppercase tracking-widest transition-all hover:bg-[#EE4D2D]"
          >
            Shopee
          </a>
          <a 
            href={product.lazada} 
            target="_blank" 
            className="flex-1 border border-[#1A1A1A] text-[#1A1A1A] py-2.5 md:py-3 text-[8px] md:text-[9px] font-bold uppercase tracking-widest transition-all hover:bg-[#0F146D] hover:border-[#0F146D] hover:text-white"
          >
            Lazada
          </a>
        </div>
      </div>
    </div>
  );
}
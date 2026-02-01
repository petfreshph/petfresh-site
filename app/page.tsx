"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import WhyPetFresh from "./components/WhyPetFresh";
import Testimonials from "./components/Testimonials";
import ProductSpotlight from "./components/ProductSpotlight";
import GroomerCTA from "./components/GroomerCTA"; 
import FadeIn from "./components/FadeIn";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function HomePage() {
  return (
    // FIX: Removed w-full overflow-x-hidden from main to allow natural scroll
    <main className="relative bg-[#F4EFE7]">
      <Nav />

{/* 1. HERO SECTION */}
      <section className="relative h-[85vh] md:h-[82vh] min-h-[600px] w-full overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 pt-16 md:pt-0">
          <video
            className="h-full w-full object-cover object-center"
            src="/videos/heromain.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/5 opacity-50 pointer-events-none mix-blend-overlay"></div>
        </div>
        
        {/* BOTTLE IMAGE - Now hidden on mobile/tablet, only visible on lg (desktop) */}
        <div className="pointer-events-none absolute right-[-10%] lg:right-[-4.5%] bottom-[5%] z-20 hidden lg:block">
          <FadeIn direction="right" delay={0.6}>
            <Image
              src="/images/vanilla-comfort-shadow.png"
              alt="Pet Fresh Vanilla Comfort Formula"
              width={320}
              height={620}
              className="w-[320px] opacity-[0.98] contrast-[1.05] saturate-[0.95] drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]"
              priority
            />
          </FadeIn>
        </div>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 z-10">
           <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE7] via-[#F4EFE7]/90 md:via-[#F4EFE7]/80 to-transparent w-[90%] md:w-[55%]" />
           <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4EFE7] to-transparent" />
        </div>

        {/* HERO TEXT */}
        <div className="relative z-20 flex h-full items-center">
          <div className="max-w-2xl px-6 md:px-16">
            <FadeIn direction="up" delay={0.2}>
              <h1 className={`${fraunces.className} text-[2.75rem] md:text-5xl lg:text-6xl font-semibold leading-[1.1]`}>
                <span className="text-[#1A1A1A]">Calm care</span>
                <br />
                <span className="text-[#8B7E6A] italic font-medium">for sensitive dogs</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <p className="mt-6 text-base md:text-xl text-[#6f6f6f] leading-relaxed max-w-sm md:max-w-lg">
                A gentle shampoo and conditioner designed to soothe skin,
                soften coats, and turn bath time into a calm ritual.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.6}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/products" className="w-full sm:w-auto">
                  <button className="w-full rounded-full bg-[#1A1A1A] px-7 py-4 text-xs md:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#8B7E6A] duration-300">
                    Shop Products
                  </button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <button className="w-full rounded-full border border-[#8B7E6A] px-7 py-4 text-xs md:text-sm font-bold uppercase tracking-widest text-[#8B7E6A] transition hover:bg-[#8B7E6A] hover:text-white duration-300">
                    Learn more
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. BEST SELLER SECTION (Social Proof + Conversion Block) */}
<section className="relative z-30 py-20 px-6">
  <FadeIn direction="up">
    <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(139,126,106,0.12)] border border-[#8B7E6A]/5">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* Product Visual */}
        <div className="relative w-full md:w-2/5 flex justify-center">
          <div className="absolute inset-0 bg-[#8B7E6A]/5 rounded-full blur-3xl animate-pulse" />
          <Image
            src="/images/products/earcleaner.png"
            alt="Pet Fresh Organic Ear Cleaner"
            width={380}
            height={550}
            priority
            className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Trust + Conversion Content */}
        <div className="w-full md:w-3/5 text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B7E6A]/10 text-[#8B7E6A] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#8B7E6A] animate-ping" />
            PH Best Seller
          </div>

          {/* Headline */}
          <h2 className={`${fraunces.className} text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight`}>
            Trusted in <span className="text-[#8B7E6A]">5,000+</span> Pet Care Rituals
          </h2>

          {/* Copy */}
          <p className="mt-6 text-lg text-[#6f6f6f] leading-relaxed">
            Our veterinary-strength organic ear cleaner is the Philippines’ most trusted solution for dissolving wax and eliminating odor. A gentle, sting-free formula relied on by pet parents, groomers, and clinics nationwide.
          </p>

          {/* Marketplace CTAs with Meta Pixel Events */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">

            {/* Shopee */}
           <button
  onClick={() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "AddToCart", {
        content_name: "Pet Fresh Ear Cleaner",
        platform: "Shopee",
      });
    }

    window.open(
      "https://shopee.ph/YOUR-SHOPEE-LINK",
      "_blank",
      "noopener,noreferrer"
    );
  }}
  className="flex items-center justify-center gap-3 rounded-full bg-[#ee4d2d] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:translate-y-[-2px] hover:shadow-lg hover:bg-[#d63e20] duration-300"
>
  Shop on Shopee
</button>


            {/* Lazada */}
           <button
  onClick={() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "AddToCart", {
        content_name: "Pet Fresh Ear Cleaner",
        platform: "Lazada",
      });
    }

    window.open(
      "https://www.lazada.com.ph/YOUR-LAZADA-LINK",
      "_blank",
      "noopener,noreferrer"
    );
  }}
  className="flex items-center justify-center gap-3 rounded-full bg-[#0f146d] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:translate-y-[-2px] hover:shadow-lg hover:bg-[#0a0e52] duration-300"
>
  Shop on Lazada
</button>


          </div>

          {/* Proof Stats */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center md:justify-start gap-8">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-[#1A1A1A]">4.9 / 5</p>
              <p className="text-[10px] uppercase tracking-wider text-[#8B7E6A] font-bold">
                Marketplace Rating
              </p>
            </div>

            <div className="h-10 w-[1px] bg-gray-200 hidden sm:block" />

            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-[#1A1A1A]">Vet-Grade</p>
              <p className="text-[10px] uppercase tracking-wider text-[#8B7E6A] font-bold">
                Professional Quality
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </FadeIn>
</section>



      {/* 3. SUBSEQUENT SECTIONS */}
      <FadeIn direction="up">
        <WhyPetFresh />
      </FadeIn>

      <FadeIn direction="up">
        <ProductSpotlight />
      </FadeIn>

      <FadeIn direction="up">
        <Testimonials />
      </FadeIn>

      <FadeIn direction="up">
        <GroomerCTA />
      </FadeIn>

    </main>
  );
}

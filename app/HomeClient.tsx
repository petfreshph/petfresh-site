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

type Marketplace = "Shopee" | "Lazada";

function trackMarketplaceClick(platform: Marketplace) {
  if (typeof window === "undefined") return;

  const w = window as typeof window & {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  };

  // GA4
  w.gtag?.("event", "marketplace_click", {
    product_name: "Pet Fresh Ear Cleaner",
    product_category: "Ear Care",
    marketplace: platform,
    page_location: window.location.href,
  });

  // Meta
  // Custom event rather than AddToCart because the actual cart
  // lives on Shopee/Lazada, not on petfreshph.com.
  w.fbq?.("trackCustom", "MarketplaceClick", {
    content_name: "Pet Fresh Ear Cleaner",
    platform,
  });
}

function trackHomepageCTA(destination: string) {
  if (typeof window === "undefined") return;

  const w = window as typeof window & {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  };

  w.gtag?.("event", "homepage_cta_click", {
    destination,
  });

  w.fbq?.("trackCustom", "HomepageCTA", {
    destination,
  });
}

export default function HomeClient() {
  return (
    <main className="relative bg-[#F4EFE7]">
      <Nav />

      {/* 1. HERO */}
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
            preload="metadata"
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-black/5 opacity-50 pointer-events-none mix-blend-overlay" />
        </div>

        {/* BOTTLE IMAGE */}
        <div className="pointer-events-none absolute right-[-10%] lg:right-[-4.5%] bottom-[5%] z-20 hidden lg:block">
          <FadeIn direction="right" delay={0.6}>
            <Image
              src="/images/vanilla-comfort-shadow.png"
              alt="Pet Fresh Vanilla Comfort dog shampoo and conditioner"
              width={320}
              height={620}
              sizes="320px"
              className="w-[320px] opacity-[0.98] contrast-[1.05] saturate-[0.95] drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]"
            />
          </FadeIn>
        </div>

        {/* GRADIENT */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE7] via-[#F4EFE7]/90 md:via-[#F4EFE7]/80 to-transparent w-[90%] md:w-[55%]" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4EFE7] to-transparent" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 flex h-full items-center">
          <div className="max-w-2xl px-6 md:px-16">

            <FadeIn direction="up" delay={0.1}>
              <p className="mb-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.22em] text-[#8B7E6A]">
                Philippine-made pet care
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1
                className={`${fraunces.className} text-[2.75rem] md:text-5xl lg:text-6xl font-semibold leading-[1.1]`}
              >
                <span className="text-[#1A1A1A]">
                  Gentle dog shampoo
                </span>

                <br />

                <span className="text-[#8B7E6A] italic font-medium">
                  for sensitive skin
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="mt-6 text-base md:text-xl text-[#6f6f6f] leading-relaxed max-w-sm md:max-w-lg">
                Philippine-made dog grooming care designed to soothe skin,
                soften coats and make regular bath time a calmer ritual.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">

                <Link
                  href="/products"
                  onClick={() => trackHomepageCTA("products")}
                  className="w-full sm:w-auto rounded-full bg-[#1A1A1A] px-7 py-4 text-center text-xs md:text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#8B7E6A] duration-300"
                >
                  Shop Products
                </Link>

                <Link
                  href="/about"
                  onClick={() => trackHomepageCTA("about")}
                  className="w-full sm:w-auto rounded-full border border-[#8B7E6A] px-7 py-4 text-center text-xs md:text-sm font-bold uppercase tracking-widest text-[#8B7E6A] transition hover:bg-[#8B7E6A] hover:text-white duration-300"
                >
                  Learn More
                </Link>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. BEST SELLER */}
      <section
        className="relative z-30 py-20 px-6"
        aria-labelledby="ear-cleaner-heading"
      >
        <FadeIn direction="up">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(139,126,106,0.12)] border border-[#8B7E6A]/5">

            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* PRODUCT IMAGE */}
              <div className="relative w-full md:w-2/5 flex justify-center">

                <div className="absolute inset-0 bg-[#8B7E6A]/5 rounded-full blur-3xl" />

                <Image
                  src="/images/products/earcleaner.png"
                  alt="Pet Fresh Ear Cleaner 120ml"
                  width={380}
                  height={550}
                  sizes="(min-width: 768px) 380px, 80vw"
                  className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />

              </div>

              {/* CONTENT */}
              <div className="w-full md:w-3/5 text-center md:text-left">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B7E6A]/10 text-[#8B7E6A] text-[10px] font-bold uppercase tracking-widest mb-6">
                  <span className="h-2 w-2 rounded-full bg-[#8B7E6A]" />
                  Pet Fresh Best Seller
                </div>

                <h2
                  id="ear-cleaner-heading"
                  className={`${fraunces.className} text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight`}
                >
                  Used in around{" "}
                  <span className="text-[#8B7E6A]">
                    5,000
                  </span>{" "}
                  pet care rituals
                </h2>

                <p className="mt-6 text-lg text-[#6f6f6f] leading-relaxed">
                  Our 120ml ear cleaner helps remove wax, dirt and debris while
                  drying and deodorising the ear canal. A sting-free formula
                  designed for routine ear care by pet parents and professional
                  groomers.
                </p>

                {/* MARKETPLACE CTAS */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">

                  <a
                    href="https://shopee.ph/Dog-Ear-Cleaner-Advanced-Ear-Cleaning-Solution-(120ml-Bottle)-Removes-Wax-Itches-and-Infection.-i.715097536.22335054470"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackMarketplaceClick("Shopee")}
                    className="flex items-center justify-center gap-3 rounded-full bg-[#ee4d2d] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#d63e20] duration-300"
                    aria-label="Buy Pet Fresh Ear Cleaner on Shopee"
                  >
                    Shop on Shopee
                  </a>

                  <a
                    href="https://www.lazada.com.ph/products/pdp-i3684150651-s19345704229.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackMarketplaceClick("Lazada")}
                    className="flex items-center justify-center gap-3 rounded-full bg-[#0f146d] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#0a0e52] duration-300"
                    aria-label="Buy Pet Fresh Ear Cleaner on Lazada"
                  >
                    Shop on Lazada
                  </a>

                </div>

                {/* PROOF */}
                <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center md:justify-start gap-8">

                  <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-[#1A1A1A]">
                      4.9 / 5
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-[#8B7E6A] font-bold">
                      Marketplace Rating
                    </p>
                  </div>

                  <div className="h-10 w-px bg-gray-200 hidden sm:block" />

                  <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-[#1A1A1A]">
                      Made in PH
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-[#8B7E6A] font-bold">
                      Philippine Pet Care
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. WHY PET FRESH */}
      <FadeIn direction="up">
        <WhyPetFresh />
      </FadeIn>

      {/* 4. PRODUCTS */}
      <FadeIn direction="up">
        <ProductSpotlight />
      </FadeIn>

      {/* 5. TESTIMONIALS */}
      <FadeIn direction="up">
        <Testimonials />
      </FadeIn>

      {/* 6. GROOMERS */}
      <FadeIn direction="up">
        <GroomerCTA />
      </FadeIn>
    </main>
  );
}

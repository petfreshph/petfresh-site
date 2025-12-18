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
    <main className="w-full overflow-x-hidden bg-[#F4EFE7]">
      <Nav />

      {/* 2. HERO SECTION - RESPONSIVE OPTIMIZATION */}
      <section className="relative h-[85vh] md:h-[82vh] min-h-[600px] w-full overflow-hidden">
        
       {/* VIDEO BACKGROUND */}
<div className="absolute inset-0 pt-16 md:pt-0"> {/* This adds space at the top on mobile only */}
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

          <div className="absolute inset-0 bg-black/5 opacity-50 pointer-events-none mix-blend-overlay"></div>
        </div>
        
        {/* BOTTLE IMAGE */}
        <div className="pointer-events-none absolute right-[-10%] md:right-[-4.5%] bottom-[5%] z-20 hidden sm:block">
          <FadeIn direction="right" delay={0.6}>
            <Image
              src="/images/vanilla-comfort-shadow.png"
              alt="Pet Fresh Vanilla Comfort Formula"
              width={320}
              height={620}
              className="w-[200px] md:w-[320px] opacity-[0.98] contrast-[1.05] saturate-[0.95] drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]"
              priority
            />
          </FadeIn>
        </div>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 z-10">
           <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE7] via-[#F4EFE7]/90 md:via-[#F4EFE7]/80 to-transparent w-[90%] md:w-[55%] mix-blend-normal" />
           <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4EFE7] to-transparent" />
        </div>

        {/* HERO TEXT CONTENT */}
        <div className="relative z-20 flex h-full items-center">
          <div className="max-w-2xl px-6 md:px-16">
            <FadeIn direction="up" delay={0.2}>
              <h1 className={`${fraunces.className} text-[2.75rem] md:text-5xl lg:text-6xl font-semibold leading-[1.1]`}>
                <span className="text-[#1A1A1A]">Calm care</span>
                <br />
                <span className="text-[#8B7E6A] italic font-medium">
                  for sensitive dogs
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <p className="mt-6 text-base md:text-xl text-[#6f6f6f] leading-relaxed max-w-sm md:max-w-lg">
                A gentle shampoo and conditioner designed to soothe skin,
                soften coats, and turn bath time into a calm ritual.
              </p>
            </FadeIn>
            
            {/* BUTTONS WITH LINK LOGIC */}
            <FadeIn direction="up" delay={0.6}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/products" className="w-full sm:w-auto">
                  <button className="w-full rounded-full bg-[#1A1A1A] px-7 py-4 text-xs md:text-sm font-bold uppercase tracking-widest text-white transition hover:translate-y-[-2px] hover:shadow-lg hover:bg-[#8B7E6A] duration-300">
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

      {/* REMAINING SECTIONS WRAPPED FOR FADE-IN */}
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
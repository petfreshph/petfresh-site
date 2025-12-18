"use client";

import Image from "next/image";
import Link from "next/link"; // Added for fast internal navigation
import Nav from "./components/Nav";
import WhyPetFresh from "./components/WhyPetFresh";
import Testimonials from "./components/Testimonials";
import ProductSpotlight from "./components/ProductSpotlight";
import GroomerCTA from "./components/GroomerCTA"; 
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
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            src="/videos/heromain.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/5 opacity-50 pointer-events-none mix-blend-overlay"></div>
        </div>
        
        {/* BOTTLE IMAGE */}
        <div className="pointer-events-none absolute right-[-10%] md:right-[-4.5%] bottom-[5%] z-20 hidden sm:block animate-fade-in-delayed">
          <Image
            src="/images/vanilla-comfort-shadow.png"
            alt="Pet Fresh Vanilla Comfort Formula"
            width={320}
            height={620}
            className="w-[200px] md:w-[320px] opacity-[0.98] contrast-[1.05] saturate-[0.95] drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]"
            priority
          />
        </div>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 z-10">
           <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE7] via-[#F4EFE7]/90 md:via-[#F4EFE7]/80 to-transparent w-[90%] md:w-[55%] mix-blend-normal" />
           <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4EFE7] to-transparent" />
        </div>

        {/* HERO TEXT CONTENT */}
        <div className="relative z-20 flex h-full items-center">
          <div className="max-w-2xl px-6 md:px-16">
            <h1 className={`${fraunces.className} text-[2.75rem] md:text-5xl lg:text-6xl font-semibold leading-[1.1] animate-fade-up`}>
              <span className="text-[#1A1A1A]">Calm care</span>
              <br />
              <span className="text-[#8B7E6A] italic font-medium">
                for sensitive dogs
              </span>
            </h1>
            <p className="mt-6 text-base md:text-xl text-muted leading-relaxed max-w-sm md:max-w-lg animate-fade-up [animation-delay:200ms]">
              A gentle shampoo and conditioner designed to soothe skin,
              soften coats, and turn bath time into a calm ritual.
            </p>
            
            {/* BUTTONS WITH LINK LOGIC */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up [animation-delay:400ms]">
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
          </div>
        </div>
      </section>

      <WhyPetFresh />
      <ProductSpotlight />
      <Testimonials />
      <GroomerCTA />

    </main>
  );
}
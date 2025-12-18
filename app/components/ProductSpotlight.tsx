"use client";

import Image from "next/image";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});

export default function ProductSpotlight() {
  const SHOPEE_LINK = "https://shopee.ph/Pet-Fresh-Lite-Shampoo-Nature’s-Gentle-Touch-1000ml-Organic-Pet-Shampoo-and-Conditioner-i.715097536.41262623037";
  const LAZADA_LINK = "https://www.lazada.com.ph/products/pdp-i3684151616-s19345471755.html";

  return (
    /* REMOVED pt-4/pt-12 to eliminate the gap entirely */
    <section className="relative w-full bg-[#F4EFE7] pb-8 md:pb-16 overflow-hidden border-t border-black/5">
      
      {/* === ANIMATED FESTIVE MARQUEE === */}
      {/* Reduced mb-8 to mb-4 to pull the content up closer to the banner */}
      <div className="relative mb-4 md:mb-6 w-full border-y-2 md:border-y-4 border-[#D4AF37] bg-[#C24E42] py-3 md:py-4 overflow-hidden shadow-lg">
        <div className="flex w-full">
          <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around whitespace-nowrap">
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
          <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around whitespace-nowrap">
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 md:px-12">
        {/* Tightened gap-8 to gap-6 for mobile */}
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT: The Bottle */}
          <div className="relative flex justify-center lg:justify-end group order-1 lg:order-1">
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] md:h-[350px] md:w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB347]/30 blur-3xl transition-all duration-700 group-hover:bg-[#FFB347]/40" />
            
            <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-1">
                <Image
                  src="/images/products/pumpkin-spice-shadow.png"
                  alt="Pet Fresh Pumpkin Spice 2-in-1"
                  width={450}
                  height={750}
                  className="w-full max-w-[240px] md:max-w-[320px] drop-shadow-2xl"
                  priority
                />
                
                <div className="absolute -left-4 -top-4 hidden md:flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#D4AF37] bg-[#C24E42] shadow-xl animate-float">
                  <div className="text-center text-white">
                    <span className="block text-[8px] font-bold uppercase tracking-widest">Limited</span>
                    <span className="block text-xs font-bold leading-none">XMAS</span>
                  </div>
                </div>
            </div>
          </div>

          {/* RIGHT: The Copy */}
          <div className="flex flex-col text-left order-2 lg:order-2">
            <span className="mb-2 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#C24E42]">
              <span className="text-base md:text-lg">🎄</span> Limited Holiday Edition
            </span>

            <h2 className={`${fraunces.className} text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight`}>
              Pumpkin Spice <br />
              <span className="italic text-[#C24E42]">2-in-1 Protection.</span>
            </h2>

            <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-[#1A1A1A]/70">
              The warmth of the holidays meets the power of nature. This limited-edition 
              <strong> Shampoo & Conditioner</strong> cleans, detangles, and protects in one wash. 
              Infused with <strong className="text-[#C24E42]">Madre de Cacao</strong> and <strong className="text-[#C24E42]">Guava Extract</strong>, it actively repels ticks and fleas.
            </p>

            <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
              <FeatureItem icon="🛡️" text="Anti-Tick & Flea Protection" />
              <FeatureItem icon="🌿" text="With Madre de Cacao & Guava" />
              <FeatureItem icon="✨" text="Hypoallergenic & Paraben-Free" />
            </ul>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a 
                href={SHOPEE_LINK} 
                target="_blank" 
                className="flex items-center justify-center gap-3 rounded-full bg-[#ee4d2d] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:-translate-y-1 hover:shadow-lg hover:bg-[#d63e20]"
              >
                Shop on Shopee
              </a>
              <a 
                href={LAZADA_LINK} 
                target="_blank" 
                className="flex items-center justify-center gap-3 rounded-full bg-[#0f146d] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:-translate-y-1 hover:shadow-lg hover:bg-[#0a0e52]"
              >
                Shop on Lazada
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// -- SUBCOMPONENTS (REMAIN SAME) --
function MarqueeGroup() {
  return (
    <div className="flex items-center">
      <MarqueeItem text="Christmas Special" />
      <MarqueeItem text="•" />
      <MarqueeItem text="Anti-Tick & Flea" />
      <MarqueeItem text="•" />
      <MarqueeItem text="2-in-1 Formula" />
      <MarqueeItem text="•" />
      <MarqueeItem text="With Madre de Cacao" />
      <MarqueeItem text="•" />
    </div>
  )
}

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="mx-6 md:mx-8 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-white">
      {text}
    </span>
  );
}

function FeatureItem({ text, icon }: { text: string, icon: string }) {
  return (
    <li className="flex items-center gap-3 text-[#1A1A1A]">
      <span className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-[#C24E42]/10 text-xs md:text-sm">
        {icon}
      </span>
      <span className="text-sm md:text-base font-medium">{text}</span>
    </li>
  );
}
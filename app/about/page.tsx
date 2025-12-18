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

export default function StoryPage() {
  return (
    <main className={`w-full min-h-screen bg-[#F4EFE7] ${inter.className}`}>
      <Nav />

      {/* --- 1. HERO: CONSISTENT HEIGHT & VIDEO OVERLAY --- */}
      <section className="relative h-[85vh] md:h-[82vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover brightness-[0.7] saturate-[0.8]"
            src="videos/story.mp4" 
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Consistent gradient anchor */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#F4EFE7]" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white drop-shadow-md mb-6 block">
            Our Origin Story
          </span>
          <h1 className={`${fraunces.className} text-5xl md:text-8xl text-white leading-[1.1] drop-shadow-xl`}>
            Soil, Spirit, <br />
            <span className="italic font-medium text-white/90">& Science.</span>
          </h1>
        </div>
      </section>

      {/* --- 2. PHILOSOPHY: TIGHTENED MOBILE SPACING --- */}
      {/* -mt-20 pulls the card up, consistent with the previous design language */}
      <section className="relative -mt-16 md:-mt-20 z-20 py-12 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md p-8 md:p-20 shadow-2xl rounded-[2rem] md:rounded-[3rem] grid md:grid-cols-12 gap-8 md:gap-12 items-start border border-white/50">
          
          <div className="md:col-span-5">
             <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B7E6A] mb-4 block">The Founder&apos;s Vision</span>
             <h2 className={`${fraunces.className} text-3xl md:text-4xl text-[#1A1A1A] leading-tight`}>
                Bridging the gap <br />
                <span className="text-[#8B7E6A] italic">between kin and companion.</span>
             </h2>
          </div>

          <div className="md:col-span-7 space-y-6 text-base md:text-lg text-[#1A1A1A]/80 font-light leading-relaxed">
            <p>
              Pet Fresh began at home. As a mother of children with <strong>hyper-sensitive skin</strong>, our founder spent years navigating the world of dermatological care—learning which botanical extracts truly soothed and which chemicals caused harm.
            </p>
            <p className="italic text-[#1A1A1A]/60 border-l-2 border-[#8B7E6A] pl-6 py-2">
              &quot;I realized that while the world was full of gentle, high-end solutions for our children, the options for our pets remained harsh and unregulated.&quot;
            </p>
            <p>
              She knew our companions deserved that same level of molecular precision. Pet Fresh was created to offer pets the exact same standard of care we demand for our own families: <strong>human-grade, pH-balanced, and biologically respectful.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. FARMER CONNECTION: RESPONSIVE GRID GAPS --- */}
      <section className="py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl md:rotate-2">
            <Image 
              src="/images/local-botanicals.jpg" 
              alt="Sustainable Sourcing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border-[8px] md:border-[12px] border-white/20 m-4 md:m-6 rounded-2xl pointer-events-none" />
          </div>
          
          <div className="space-y-6 md:space-y-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B7E6A] mb-4 block">Sustainable Impact</span>
              <h3 className={`${fraunces.className} text-4xl md:text-5xl text-[#1A1A1A] leading-[1.1]`}>
                Honoring the <br /> Hands that <span className="italic text-[#8B7E6A]">Nurture.</span>
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 font-light italic leading-relaxed">
              &quot;By working directly with local Filipino farmers, we ensure that every bottle supports the communities that protect our islands&apos; biodiversity while delivering the freshest organic extracts.&quot;
            </p>

            <div className="flex gap-8 md:gap-12 pt-4">
              <div className="space-y-2">
                 <span className={`${fraunces.className} text-3xl text-[#1A1A1A]`}>100%</span>
                 <p className="text-[9px] font-bold uppercase tracking-widest text-[#8B7E6A]">Organic Extracts</p>
              </div>
              <div className="space-y-2">
                 <span className={`${fraunces.className} text-3xl text-[#1A1A1A]`}>0%</span>
                 <p className="text-[9px] font-bold uppercase tracking-widest text-[#8B7E6A]">Harsh Chemicals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FINAL PROMISE: BOTTOM CURVATURE --- */}
      <section className="py-24 md:py-40 px-8 text-center bg-[#1A1A1A] text-[#F4EFE7] rounded-t-[2.5rem] md:rounded-t-[5rem]">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          <div className="flex justify-center items-center gap-4">
             <div className="h-px w-8 bg-[#8B7E6A]"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8B7E6A]">Our Commitment</span>
             <div className="h-px w-8 bg-[#8B7E6A]"></div>
          </div>
          
          <h2 className={`${fraunces.className} text-4xl md:text-6xl leading-tight`}>
            Crafting rituals <br />
            <span className="italic font-medium text-[#8B7E6A]">not just products.</span>
          </h2>
          
          <p className="text-base md:text-xl opacity-60 font-light leading-relaxed">
            Every formulation is a testament to the fact that our pets aren&apos;t just animals—they are family. We invite you to experience grooming as it should be: calm, safe, and deeply rooted in nature.
          </p>

          <a 
            href="mailto:petfreshph@gmail.com" 
            className="inline-block px-10 py-4 md:px-12 md:py-5 bg-[#F4EFE7] text-[#1A1A1A] rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#8B7E6A] hover:text-white transition-all duration-500 shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
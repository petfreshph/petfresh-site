"use client";

import Image from "next/image";
import { Fraunces } from "next/font/google";
import FadeIn from "./FadeIn";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function WhyPetFresh() {
  return (
    <section className="relative w-full bg-[#F4EFE7] py-12 md:py-16 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-8 md:px-12">
        {/* --- 1. BRAND STORY SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <FadeIn direction="up">
            <div className="flex flex-col text-left">
              <span className="inline-block w-fit rounded-full bg-[#E6DCC9] px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
                Proudly Local
              </span>
              <h2 className={`${fraunces.className} mt-4 md:mt-6 text-3xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight`}>
                Premium care from the <br />
                <span className="text-[#8B7E6A] italic text-2xl md:text-5xl">heart of the Philippines.</span>
              </h2>
              <div className="mt-4 md:mt-8 space-y-6 text-base md:text-lg text-[#6f6f6f]">
                <p className="leading-relaxed">
                  Petfresh is a passionate Philippine brand dedicated to pampering your pets. 
                  From our top-selling <strong>Organic Dog Ear Cleaner</strong> to our luxurious shampoos, 
                  every product is crafted at a very reasonable price.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl bg-neutral-200">
               <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
                 <source src="/videos/dogbath.mp4" type="video/mp4" />
               </video>
            </div>
          </FadeIn>
        </div>

        {/* --- 2. NATURE EXTRACTS GRID --- */}
        <div className="mt-16 md:mt-24">
          <FadeIn direction="up">
            <div className="text-center mb-8 md:mb-12">
              <h3 className={`${fraunces.className} text-2xl md:text-3xl font-semibold text-[#1A1A1A]`}>
                Powered by Nature
              </h3>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <FadeIn direction="up" delay={0.1}>
              <IngredientCard src="/ingredients/aloe-vera.png" title="Calming Aloe" description="Soothes sensitive skin instantly." />
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <IngredientCard src="/ingredients/coconut-oil.png" title="Coconut Oil" description="Hydrates and protects coats." />
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <IngredientCard src="/ingredients/guava.png" title="Guava Extract" description="Promotes a shiny, healthy coat." />
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <IngredientCard src="/ingredients/madre-de-cacao.png" title="Madre de Cacao" description="Eases irritations and banishes odors." />
            </FadeIn>
          </div>
        </div>

        {/* --- 3. SCIENCE SECTION (Mobile Tightened) --- */}
        <div className="mt-16 md:mt-24"> 
          <FadeIn direction="up">
            <div className="text-center mb-10 md:mb-16">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B7E6A]">Dermatological Innovation</span>
              <h3 className={`${fraunces.className} text-3xl md:text-4xl mt-3 md:mt-4 text-[#1A1A1A]`}>
                The <span className="italic">Molecular</span> Standard
              </h3>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-16">
            
            {/* Left Column Actives */}
            <div className="flex-1 space-y-4 md:space-y-8 w-full">
              <FadeIn direction="up" delay={0.1}>
                <ScienceBox 
                  title="Niacinamide" 
                  detail="Vitamin B3" 
                  desc="Deeply repairs the skin barrier, reducing redness and environmental sensitivity in dogs."
                />
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <ScienceBox 
                  title="Hydrolyzed Collagen" 
                  detail="Structural Protein" 
                  desc="Restores coat elasticity and moisture retention, preventing brittleness and breakage."
                />
              </FadeIn>
            </div>

            {/* Center: DNA HELIX */}
            <FadeIn direction="up" delay={0.3}>
              <div className="relative w-64 h-48 md:h-80 flex items-center justify-center">
                <div className="dna-container">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="dna-strand" 
                      style={{ 
                        animationDelay: `${i * -0.15}s`, 
                        top: `calc(${i} * var(--dna-spacing))` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right Column Actives */}
            <div className="flex-1 space-y-4 md:space-y-8 w-full">
              <FadeIn direction="up" delay={0.4}>
                <ScienceBox 
                  title="Cold-Pressed VCO" 
                  detail="Lauric Acid" 
                  desc="Naturally antimicrobial and penetrative, providing a biological shield against skin bacteria."
                />
              </FadeIn>
              <FadeIn direction="up" delay={0.5}>
                <div className="p-6 md:p-8 rounded-3xl bg-[#1A1A1A] text-[#F4EFE7]">
                  <h4 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2 text-[#8B7E6A]">Clinical Result</h4>
                  <p className="text-xs md:text-sm leading-relaxed opacity-80">
                    Our lab-tested ratio of botanical extracts and human-grade actives ensures 99.9% biocompatibility for all breeds.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .dna-container {
          position: relative;
          width: 40px;
          height: 100%;
          --dna-spacing: 15px; /* Default for mobile */
        }
        
        @media (min-width: 768px) {
          .dna-container {
            --dna-spacing: 25px; /* Spaced out for desktop */
          }
        }

        .dna-strand {
          position: absolute;
          width: 100%;
          height: 3px;
          background: rgba(26, 26, 26, 0.05);
          animation: spin 3s infinite ease-in-out;
        }

        .dna-strand::before, .dna-strand::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          top: -3px;
        }

        @media (min-width: 768px) {
           .dna-strand { height: 4px; }
           .dna-strand::before, .dna-strand::after { width: 10px; height: 10px; }
        }

        .dna-strand::before { left: -5px; background: #8FA99B; }
        .dna-strand::after { right: -5px; background: #8B7E6A; }

        @keyframes spin {
          0%, 100% { transform: scaleX(1.5); opacity: 1; }
          50% { transform: scaleX(-1.5); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

function IngredientCard({ src, title, description }: any) {
  return (
    <div className="group flex flex-col items-center p-6 md:p-8 bg-white/40 rounded-2xl border border-white/50 shadow-sm transition-all hover:shadow-md">
      <div className="relative h-16 w-16 md:h-20 md:w-20 mb-4 transition-transform group-hover:scale-110">
        <Image src={src} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-sm md:text-base font-bold text-[#1A1A1A] mb-2">{title}</h3>
      <p className="text-[10px] md:text-xs text-center text-[#6f6f6f] leading-relaxed">{description}</p>
    </div>
  );
}

function ScienceBox({ title, detail, desc }: any) {
  return (
    <div className="p-6 md:p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-[#1A1A1A]/5 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <h3 className="text-base md:text-lg font-bold text-[#1A1A1A] tracking-tight">{title}</h3>
        <span className="text-[8px] md:text-[9px] font-bold text-[#8B7E6A] uppercase border border-[#8B7E6A] px-2 py-0.5 rounded-full">
          {detail}
        </span>
      </div>
      <p className="text-xs md:text-sm text-[#6f6f6f] leading-relaxed italic">"{desc}"</p>
    </div>
  );
}
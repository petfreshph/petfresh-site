import Image from "next/image";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function Testimonials() {
  return (
    // CHANGE: Changed 'py-16' to 'pt-0 pb-16' (Removed Top Padding)
    <section className="relative w-full bg-[#F4EFE7] pt-0 pb-16 md:pb-20">
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("/images/noise.png")' }} />

      <div className="relative mx-auto max-w-7xl px-8 md:px-12">
        
        {/* 1. SECTION HEADER */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-[#8B7E6A]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8B7E6A]">
            Community Love
          </span>
          <h2 className={`${fraunces.className} mt-6 text-3xl md:text-5xl font-semibold text-[#1A1A1A]`}>
            Stories of <span className="italic text-[#8B7E6A]">comfort.</span>
          </h2>
        </div>

        {/* 2. TRUST BAR */}
        <div className="mb-12 flex flex-col items-center justify-center gap-6 border-y border-[#1A1A1A]/10 py-6 md:flex-row md:gap-16">
            <div className="flex items-center gap-4">
                <div className="flex text-[#8B7E6A]">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))}
                </div>
                <span className="text-sm font-medium uppercase tracking-wider text-[#1A1A1A]">
                    4.9/5 Average Rating
                </span>
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-[#1A1A1A]/20 md:block" />
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium uppercase tracking-wider text-[#1A1A1A]">
                   100% Hypoallergenic
                </span>
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-[#1A1A1A]/20 md:block" />
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium uppercase tracking-wider text-[#1A1A1A]">
                   Vet Approved Formula
                </span>
            </div>
        </div>

        {/* 3. REVIEWS GRID */}
        <div className="grid gap-6 md:grid-cols-3">
          
          <ReviewCard
            quote="This is my second time to order. The ear cleaner works well with our furbaby who is prone to getting otitis."
            author="d*****i"
            pet="Returning Customer"
            platform="Shopee"
          />

          <div className="md:translate-y-12">
            <ReviewCard
              quote="Eliminates undesirable smell in their ears in just one application. Quality is beyond expectation. A must for every pet owner."
              author="pandacab"
              pet="Verified Buyer"
              platform="Shopee"
              highlight
            />
          </div>

          <ReviewCard
            quote="Performance is amazing. Super soft ng fur nila when it dried and subtle yung scent. Hindi masakit sa ilong. Very relaxing."
            author="anne_rho"
            pet="Verified Buyer"
            platform="Shopee"
          />

        </div>
      </div>
    </section>
  );
}

// ... Keep Subcomponents (ReviewCard, StarIcon) the same ...
function ReviewCard({ 
    quote, 
    author, 
    pet, 
    platform,
    highlight = false
}: { 
    quote: string, 
    author: string, 
    pet: string, 
    platform: string, 
    highlight?: boolean 
}) {
  return (
    <div className={`
        flex flex-col justify-between rounded-3xl 
        p-6 
        transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
        ${highlight 
            ? 'bg-[#1A1A1A] text-white shadow-2xl' 
            : 'bg-white/60 backdrop-blur-sm text-[#1A1A1A] shadow-sm border border-white/50'
        }
    `}>
      <div>
        <div className="mb-4 flex gap-1">
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} color={highlight ? "text-[#8B7E6A]" : "text-[#8B7E6A]"} />
            ))}
        </div>
        
        <p className={`
            ${fraunces.className} mb-6 text-lg leading-relaxed
            ${highlight ? 'text-[#F4EFE7]' : 'text-[#1A1A1A]'}
        `}>
          "{quote}"
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-current/10 pt-4">
        <div>
            <p className="text-sm font-bold uppercase tracking-widest">{author}</p>
            <p className={`text-xs ${highlight ? 'text-white/60' : 'text-muted'}`}>{pet}</p>
        </div>
        <div className="flex items-center gap-1 opacity-50">
            <span className="text-[10px] font-bold uppercase tracking-widest">Via {platform}</span>
        </div>
      </div>
    </div>
  );
}

function StarIcon({ color = "text-current" }: { color?: string }) {
    return (
        <svg className={`h-4 w-4 ${color}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    )
}
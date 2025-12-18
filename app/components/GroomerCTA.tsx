import Link from "next/link";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function GroomerCTA() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-[#1A1A1A]/5">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="rounded-3xl bg-[#F4EFE7] p-8 md:p-16 text-center border border-[#1A1A1A]/5 shadow-sm">
          
          {/* Eyebrow Label */}
          <span className="mb-6 inline-block rounded-full border border-[#8B7E6A] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B7E6A]">
            Business Made Easy
          </span>

          {/* Headline - Broadened Scope */}
          <h2 className={`${fraunces.className} mx-auto max-w-3xl text-3xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight`}>
            Want your own product line? <br />
            <span className="italic text-[#8B7E6A]">We make it all for you.</span>
          </h2>

          {/* Sales Pitch - Highlighting the CHEMIST advantage */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Shampoos, colognes, ear cleaners, or paw balms—you name it. Because we have an <strong>in-house chemist</strong>, we can create <em>any</em> product you can dream of. We handle the science, the mixing, and the packaging. You just sit back and sell.
          </p>

          {/* The "Lazy" 1-2-3 Steps */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3 text-left">
            <Step 
              number="01" 
              title="Pick a Product" 
              desc="Tell us what you want to sell. A signature cologne? An anti-tick shampoo? Our chemist will formulate it for you."
            />
            <Step 
              number="02" 
              title="Send Your Logo" 
              desc="Don't have a design? No problem. We can design a beautiful label that matches your salon's vibe perfectly."
            />
            <Step 
              number="03" 
              title="We Deliver" 
              desc="We manufacture it fresh in our factory and ship the finished bottles straight to your door. Ready to sell."
            />
          </div>

          {/* CTA Button */}
          <div className="mt-14">
            <Link
              href="/for-groomers"
              className="inline-flex items-center gap-3 rounded-full bg-[#1A1A1A] px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#8B7E6A] hover:shadow-lg"
            >
              Get Rates & Info
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
            <p className="mt-4 text-xs font-medium text-muted uppercase tracking-wider">
              No big minimum orders required
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// Subcomponent for the Steps
function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="relative rounded-2xl bg-white p-8 shadow-sm border border-[#1A1A1A]/5 transition-transform duration-300 hover:-translate-y-1">
      <span className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#8B7E6A] text-sm font-bold text-white shadow-lg">
        {number}
      </span>
      <h3 className="mb-3 mt-2 text-lg font-bold text-[#1A1A1A]">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  )
}
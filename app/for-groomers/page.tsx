"use client";

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

export default function GroomersPage() {
  return (
    <main className={`w-full min-h-screen bg-[#F4EFE7] ${inter.className} relative`}>
      <Nav />

      {/* --- 1. THE VIDEO: FULL SCREEN ANCHOR --- */}
      <div className="absolute top-0 left-0 z-0 h-screen w-full overflow-hidden">
        <video
          className="h-full w-full object-cover object-center brightness-[0.85] saturate-[0.8]"
          src="videos/groomers.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Adjusted gradient for brown text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent via-50% to-[#F4EFE7]" />
      </div>

      <div className="relative z-10">
        {/* --- 2. THE HERO: BROWN TEXT FOR LEGIBILITY --- */}
        <section className="pt-[85vh] pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
          {/* Tagline in brand brown */}
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8B7E6A] drop-shadow-sm mb-6 block">
            Professional Division
          </span>
          {/* Main heading in deep charcoal-brown for maximum contrast */}
          <h1 className={`${fraunces.className} text-4xl md:text-8xl text-[#2A241E] leading-[1.1] drop-shadow-sm`}>
            Bulk Solutions. <br />
            <span className="italic font-medium text-[#8B7E6A]">Professional Results.</span>
          </h1>
        </section>

        {/* --- 3. PRICE LIST: MOBILE OPTIMIZED TABLE --- */}
        <section className="py-8 md:py-12 px-4 md:px-12 max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-white">
            <div className="bg-[#1A1A1A] p-6 md:p-8 text-center">
               <h2 className={`${fraunces.className} text-2xl md:text-3xl text-white`}>Wholesale Price List</h2>
               <p className="text-[#8B7E6A] text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">2025 Professional Rates</p>
            </div>
            
            <div className="overflow-x-auto">
              <div className="min-w-[700px] md:min-w-full">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F8F5F0] text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 border-b border-black/5">
                      <th className="p-6">Product Type</th>
                      <th className="p-6">1 Liter</th>
                      <th className="p-6">1 Gallon (4L)</th>
                      <th className="p-6">20 Liters</th>
                      <th className="p-6">Unit Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-[#1A1A1A]">
                    <tr className="border-b border-black/5 hover:bg-black/[0.02] transition-colors">
                      <td className="p-6 font-bold">Premium Shampoo <span className="text-[10px] font-normal block opacity-50 text-[#8B7E6A]">2% Scent Intensity</span></td>
                      <td className="p-6">₱450.00</td>
                      <td className="p-6 font-semibold text-[#8B7E6A]">₱1,400.00</td>
                      <td className="p-6">₱5,800.00</td>
                      <td className="p-6">—</td>
                    </tr>
                    <tr className="border-b border-black/5 hover:bg-black/[0.02] transition-colors">
                      <td className="p-6 font-bold text-[#8B7E6A]">Premium Shampoo <span className="text-[10px] font-normal block opacity-50">4% Scent Intensity</span></td>
                      <td className="p-6">₱500.00</td>
                      <td className="p-6 font-semibold">₱1,900.00</td>
                      <td className="p-6">₱6,500.00</td>
                      <td className="p-6">—</td>
                    </tr>
                    <tr className="border-b border-black/5 hover:bg-black/[0.02] transition-colors">
                      <td className="p-6 font-bold">Lite Shampoo</td>
                      <td className="p-6">₱250.00</td>
                      <td className="p-6 font-semibold text-[#8B7E6A]">₱980.00</td>
                      <td className="p-6">₱4,500.00</td>
                      <td className="p-6">—</td>
                    </tr>
                    <tr className="border-b border-black/5 hover:bg-black/[0.02] transition-colors">
                      <td className="p-6 font-bold">Cologne</td>
                      <td className="p-6">₱2,000.00</td>
                      <td className="p-6 font-semibold">₱6,000.00</td>
                      <td className="p-6">—</td>
                      <td className="p-6">—</td>
                    </tr>
                    <tr className="hover:bg-black/[0.02] transition-colors">
                      <td className="p-6 font-bold">Ear Wash</td>
                      <td className="p-6">—</td>
                      <td className="p-6">—</td>
                      <td className="p-6">—</td>
                      <td className="p-6 font-bold text-[#8B7E6A]">₱160.00 <span className="text-[9px] opacity-40">/bottle</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Mobile swipe hint */}
            <div className="md:hidden text-center py-3 bg-[#F8F5F0] text-[9px] text-[#8B7E6A] font-bold uppercase tracking-widest border-t border-black/5">
              ← Swipe to view full table →
            </div>
          </div>

          <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#8FA99B]/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-[#8FA99B]/30 text-center md:text-left">
              <h4 className="font-bold text-[#1A1A1A] text-[11px] md:text-sm uppercase tracking-widest mb-2">Free Customization</h4>
              <p className="text-xs md:text-sm text-[#1A1A1A]/70 leading-relaxed">Available for all Premium Shampoo (2% or 4%) orders.</p>
            </div>
            <div className="bg-[#8B7E6A]/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-[#8B7E6A]/30 text-center md:text-left">
              <h4 className="font-bold text-[#1A1A1A] text-[11px] md:text-sm uppercase tracking-widest mb-2">Lite Formula Labels</h4>
              <p className="text-xs md:text-sm text-[#1A1A1A]/70 leading-relaxed">Small cost applies for orders using our Lite formula range.</p>
            </div>
          </div>
        </section>

        {/* --- 4. FORM --- */}
        <section className="py-12 md:py-24 px-6 md:px-12 max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white">
            <div className="text-center mb-8 md:mb-10">
              <h2 className={`${fraunces.className} text-3xl text-[#1A1A1A]`}>Direct Order Form</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8B7E6A] mt-2">Skip the inquiry — Order directly below</p>
            </div>
            
            <form action="https://formspree.io/f/meejqqzg" method="POST" className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="studio" type="text" required className="border-b border-black/10 py-2 outline-none focus:border-[#8B7E6A] bg-transparent text-sm" placeholder="Studio Name" />
                <input name="phone" type="tel" required className="border-b border-black/10 py-2 outline-none focus:border-[#8B7E6A] bg-transparent text-sm" placeholder="Viber / Mobile" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8B7E6A] block">Weekly Dog Volume</label>
                <select name="dogs_per_week" className="w-full border-b border-black/10 py-2 outline-none bg-transparent text-sm cursor-pointer">
                  <option value="1-15">1-15 dogs / week</option>
                  <option value="16-40">16-40 dogs / week</option>
                  <option value="41-80">41-80 dogs / week</option>
                  <option value="80+">80+ dogs / week</option>
                </select>
              </div>

              <div className="space-y-4 pt-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8B7E6A] block text-center md:text-left">Quantities (Gallons/Liters)</label>
                <div className="space-y-3">
                  <QuantityRow label="Premium Shampoo (2%)" name="qty_premium_2" />
                  <QuantityRow label="Premium Shampoo (4%)" name="qty_premium_4" isHighlight={true} />
                  <QuantityRow label="Lite Shampoo" name="qty_lite" />
                  <QuantityRow label="Ear Wash (Bottles)" name="qty_earwash" />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#1A1A1A] text-white py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#8B7E6A] transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Submit Order Request
              </button>

              <p className="text-center text-[9px] text-black/40 italic mt-4 px-4 leading-relaxed">
                This is a non-binding request. Our team will contact you to confirm the details and shipping before any payment is made.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

function QuantityRow({ label, name, isHighlight }: { label: string, name: string, isHighlight?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-black/5 py-3">
      <span className={`text-sm ${isHighlight ? 'font-medium text-[#8B7E6A]' : 'text-[#1A1A1A]'}`}>{label}</span>
      <input name={name} type="text" className="w-16 bg-[#F8F5F0] rounded px-2 py-1.5 text-center text-xs outline-none focus:ring-1 focus:ring-[#8B7E6A]" placeholder="Qty" />
    </div>
  );
}
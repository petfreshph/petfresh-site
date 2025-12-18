"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import FadeIn from "../components/FadeIn";
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
  // Toggle between "Direct Order" and "Just Inquiring" to increase conversion
  const [formMode, setFormMode] = useState<"order" | "inquiry">("order");

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent via-50% to-[#F4EFE7]" />
      </div>

      <div className="relative z-10">
        {/* --- 2. THE HERO --- */}
        <section className="pt-[85vh] pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
          <FadeIn direction="up">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8B7E6A] drop-shadow-sm mb-6 block">
              Professional Division
            </span>
            <h1 className={`${fraunces.className} text-4xl md:text-8xl text-[#2A241E] leading-[1.1] drop-shadow-sm`}>
              Bulk Solutions. <br />
              <span className="italic font-medium text-[#8B7E6A]">Professional Results.</span>
            </h1>
          </FadeIn>
        </section>

        {/* --- 3. PRICE LIST --- */}
        <section className="py-8 md:py-12 px-4 md:px-12 max-w-6xl mx-auto">
          <FadeIn direction="up">
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
              <div className="md:hidden text-center py-3 bg-[#F8F5F0] text-[9px] text-[#8B7E6A] font-bold uppercase tracking-widest border-t border-black/5">
                ← Swipe to view full table →
              </div>
            </div>
          </FadeIn>
        </section>

        {/* --- 4. OPTIMIZED FORM --- */}
        <section className="py-12 md:py-24 px-6 md:px-12 max-w-3xl mx-auto">
          <FadeIn direction="up">
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden">
              
              {/* Form Header */}
              <div className="text-center mb-10">
                <h2 className={`${fraunces.className} text-3xl md:text-4xl text-[#1A1A1A]`}>Partner with us</h2>
                
                {/* Mode Switcher */}
                <div className="flex justify-center mt-6">
                  <div className="inline-flex p-1 bg-[#F8F5F0] rounded-full border border-black/5">
                    <button 
                      onClick={() => setFormMode("order")}
                      className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${formMode === 'order' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-[#1A1A1A]/40'}`}
                    >
                      Direct Order
                    </button>
                    <button 
                      onClick={() => setFormMode("inquiry")}
                      className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${formMode === 'inquiry' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-[#1A1A1A]/40'}`}
                    >
                      General Inquiry
                    </button>
                  </div>
                </div>
              </div>
              
              <form action="https://formspree.io/f/meejqqzg" method="POST" className="space-y-8">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input name="studio" type="text" required className="w-full border-b border-black/10 py-3 outline-none focus:border-[#8B7E6A] bg-transparent text-sm transition-colors" placeholder="Studio Name" />
                  </div>
                  <div className="relative group">
                    <input name="phone" type="tel" required className="w-full border-b border-black/10 py-3 outline-none focus:border-[#8B7E6A] bg-transparent text-sm transition-colors" placeholder="Viber / Mobile Number" />
                  </div>
                </div>

                {/* Conditional Quantity Section */}
                {formMode === "order" && (
                  <div className="space-y-6 pt-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B7E6A] block text-center md:text-left">Select Estimated Quantities</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
                      <QuantityRow label="Premium (2%)" name="qty_premium_2" />
                      <QuantityRow label="Premium (4%)" name="qty_premium_4" isHighlight={true} />
                      <QuantityRow label="Lite Range" name="qty_lite" />
                      <QuantityRow label="Ear Wash" name="qty_earwash" />
                    </div>
                  </div>
                )}

                {/* The "Anything Else" Inquiry Box */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B7E6A] block">
                    {formMode === 'order' ? 'Additional Notes / Custom Requests' : 'Your Inquiry'}
                  </label>
                  <textarea 
                    name="message" 
                    rows={4}
                    placeholder={formMode === 'order' ? "e.g. I need specific scents, or custom labels for my 5 branches..." : "How can we help your business today?"}
                    className="w-full bg-[#F8F5F0] rounded-2xl p-5 text-sm outline-none focus:ring-2 focus:ring-[#8B7E6A]/20 transition-all resize-none"
                  />
                </div>

                {/* Trust/Conversion Factors */}
                <div className="flex flex-wrap justify-center gap-6 py-4 opacity-60">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8FA99B]" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]">Direct from Lab</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8FA99B]" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]">Private Labeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8FA99B]" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]">Viber Support</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#1A1A1A] text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-[#8B7E6A] transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                >
                  {formMode === 'order' ? 'Submit Order Request' : 'Send Inquiry'}
                </button>

                <p className="text-center text-[10px] text-black/40 italic leading-relaxed max-w-md mx-auto">
                  Our team typically responds via Viber within 2 hours during business hours.
                </p>
              </form>
            </div>
          </FadeIn>
        </section>
      </div>
    </main>
  );
}

function QuantityRow({ label, name, isHighlight }: { label: string, name: string, isHighlight?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-black/5 py-4">
      <span className={`text-xs ${isHighlight ? 'font-bold text-[#8B7E6A]' : 'text-[#1A1A1A]'}`}>{label}</span>
      <input 
        name={name} 
        type="text" 
        className="w-20 bg-[#F8F5F0] rounded-lg px-3 py-2 text-center text-xs outline-none focus:ring-2 focus:ring-[#8B7E6A]/20 font-bold transition-all" 
        placeholder="Qty" 
      />
    </div>
  );
}
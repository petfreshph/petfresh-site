import { Metadata } from "next";
import FadeIn from "@/app/components/FadeIn";
import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";


const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pet Care in the Philippines | Calm, Vet-Grade Pet Care Rituals",
  description:
    "A thoughtful guide to pet care in the Philippines. Explore grooming rituals, ear care, and gentle routines designed for sensitive dogs in tropical climates.",
};

export default function PetCarePage() {
  return (
    <main className={`bg-[#F4EFE7] px-6 py-20 ${inter.className}`}>
      <div className="mx-auto max-w-4xl">

        <FadeIn direction="up">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8B7E6A] mb-6 block">
            Pet Care Guide
          </span>

          <h1 className={`${fraunces.className} text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight`}>
            Pet Care in the <br />
            <span className="italic font-medium text-[#8B7E6A]">Philippines.</span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <p className="mt-8 text-lg text-[#1A1A1A]/70 font-light leading-relaxed">
            Caring for pets in a tropical climate is an act of attentiveness.
            Heat, humidity, and environmental allergens place unique demands on a
            dog’s skin, ears, and overall comfort. True pet care here is not about
            frequency or force, but about choosing calm, respectful routines that
            work in harmony with nature.
          </p>
        </FadeIn>

        {/* --- SECTION 1 --- */}
        <FadeIn direction="up" delay={0.2}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              Hygiene in Tropical Climates
            </h2>
           <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
  In warm and humid environments, dogs are more prone to odor, skin
  imbalance, and irritation. Gentle cleansing rituals help maintain
  comfort without disrupting the skin’s natural barrier. Understanding{" "}
  <Link
    href="/pet-care/dog-hygiene-philippines"
    className="underline decoration-[#8B7E6A]/40 underline-offset-4 hover:text-[#8B7E6A] transition"
  >
    dog hygiene in tropical climates
  </Link>
  {" "}helps pet owners choose routines that favor balance over force.
</p>

          </section>
        </FadeIn>

        {/* --- SECTION 2 --- */}
        <FadeIn direction="up" delay={0.3}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              Ear Care as Preventative Care
            </h2>
           <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
  The ears are often the first place discomfort appears in humid
  climates. Regular, sting-free routines, such as{" "}
  <Link
    href="/pet-care/ear-care-for-dogs"
    className="underline decoration-[#8B7E6A]/40 underline-offset-4 hover:text-[#8B7E6A] transition"
  >
    ear care for dogs in tropical climates
  </Link>
  {", "}help dissolve buildup, reduce odor, and prevent issues before
  they arise, especially for dogs with folded or sensitive ears.
</p>

          </section>
        </FadeIn>

        {/* --- SECTION 3 --- */}
        <FadeIn direction="up" delay={0.4}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              Sensitive Skin & Grooming Rituals
            </h2>
            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
  Many dogs experience sensitivity not because they are fragile, but
  because their care is too aggressive. Thoughtful grooming favors
  <a
    href="/products"
    className="underline decoration-[#8B7E6A]/40 underline-offset-4 hover:text-[#8B7E6A] transition"
  >
    {" "}pH-balanced, biologically respectful formulations
  </a>
  {" "}that calm rather than overwhelm. Grooming should feel grounding, not corrective.
</p>

          </section>
        </FadeIn>

        {/* --- CLOSING --- */}
        <FadeIn direction="up" delay={0.5}>
          <section className="mt-20 border-t border-[#8B7E6A]/20 pt-12">
            <p className="text-base md:text-lg text-[#1A1A1A]/60 font-light leading-relaxed">
              In the Philippines, pet care is not just maintenance. It is a daily
              ritual of trust between kin and companion, shaped by climate,
              environment, and intention.
            </p>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}


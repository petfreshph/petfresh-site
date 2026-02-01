import { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/app/components/FadeIn";
import { Fraunces, Inter } from "next/font/google";

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
  title: "Ear Care for Dogs | Professional-Grade Ear Cleaning in Tropical Climates",
  description:
    "A definitive guide to dog ear care in humid climates. Learn why proper ear hygiene prevents odor, wax buildup, and chronic irritation, and how professional-grade formulations make the difference.",
};

export default function EarCareForDogsPage() {
  return (
    <main className={`bg-[#F4EFE7] px-6 py-20 ${inter.className}`}>
      <div className="mx-auto max-w-4xl">

        {/* Intro */}
        <FadeIn direction="up">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8B7E6A] mb-6 block">
            Pet Care Guide
          </span>

          <h1 className={`${fraunces.className} text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight`}>
            Ear Care for Dogs <br />
            <span className="italic font-medium text-[#8B7E6A]">
              in Humid & Tropical Climates.
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <p className="mt-8 text-lg text-[#1A1A1A]/70 font-light leading-relaxed">
            Proper ear care is one of the most overlooked aspects of dog hygiene.
            In warm, humid environments, the ear canal becomes a high-risk area
            for wax buildup, odor, and microbial imbalance. When neglected or
            handled incorrectly, minor discomfort can quickly develop into
            chronic issues.
          </p>
        </FadeIn>

        {/* Section 1 */}
        <FadeIn direction="up" delay={0.2}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              Why Ear Care Matters More in the Tropics
            </h2>
            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
              Humidity traps moisture within the ear canal, especially in dogs
              with folded ears or dense ear hair. This environment accelerates
              wax accumulation and odor formation. Without regular, gentle
              cleaning, the ear’s natural balance is disrupted, increasing the
              likelihood of irritation and infection.
            </p>
          </section>
        </FadeIn>

        {/* Section 2 */}
        <FadeIn direction="up" delay={0.3}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              The Difference Between Cleaning and Stripping
            </h2>
            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
              Many commercial ear solutions rely on aggressive solvents or
              alcohol-based agents that create a temporary “clean” feeling while
              damaging the ear’s protective barrier. True ear care focuses on
              dissolving wax gently, neutralizing odor at its source, and
              preserving the ear’s natural microbiome.
            </p>
          </section>
        </FadeIn>

        {/* Section 3 */}
        <FadeIn direction="up" delay={0.4}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              What Defines a World-Class Dog Ear Cleaner
            </h2>
            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
              The most effective dog ear cleaners share a common foundation:
              professional-grade formulation, pH compatibility, and
              non-irritating actives. A truly superior ear cleaner works
              preventatively, reducing buildup before discomfort arises, while
              remaining safe for regular use.
            </p>

            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
              Choosing{" "}
              <Link
                href="/products"
                className="underline decoration-[#8B7E6A]/40 underline-offset-4 hover:text-[#8B7E6A] transition"
              >
                a biologically respectful ear care formulation
              </Link>
              {" "}is not about harsh intervention. It is about consistency,
              balance, and respect for the ear’s natural defenses.
            </p>
          </section>
        </FadeIn>

        {/* Section 4 */}
        <FadeIn direction="up" delay={0.5}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              Ear Care as Preventative Health
            </h2>
            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
              Routine ear care reduces the need for corrective treatments later.
              When incorporated into regular grooming rituals, gentle ear
              cleaning helps maintain comfort, reduce odor recurrence, and
              support long-term ear health, especially in tropical environments.
            </p>
          </section>
        </FadeIn>

        {/* Closing */}
        <FadeIn direction="up" delay={0.6}>
          <section className="mt-20 border-t border-[#8B7E6A]/20 pt-12">
            <p className="text-base md:text-lg text-[#1A1A1A]/60 font-light leading-relaxed">
              For a broader understanding of grooming and hygiene in tropical
              climates, return to our{" "}
              <Link
                href="/pet-care"
                className="underline decoration-[#8B7E6A]/40 underline-offset-4 hover:text-[#8B7E6A] transition"
              >
                Pet Care Guide
              </Link>
              .
            </p>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}


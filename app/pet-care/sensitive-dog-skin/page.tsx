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
  title: "Sensitive Dog Skin Care | Calm Grooming in Tropical Climates",
  description:
    "A practical guide to caring for dogs with sensitive skin in humid climates. Learn why irritation occurs and how gentle, pH-balanced grooming routines help restore balance.",
};

export default function SensitiveDogSkinPage() {
  return (
    <main className={`bg-[#F4EFE7] px-6 py-20 ${inter.className}`}>
      <div className="mx-auto max-w-4xl">

        {/* Intro */}
        <FadeIn direction="up">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8B7E6A] mb-6 block">
            Pet Care Guide
          </span>

          <h1 className={`${fraunces.className} text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight`}>
            Caring for Dogs with <br />
            <span className="italic font-medium text-[#8B7E6A]">Sensitive Skin.</span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <p className="mt-8 text-lg text-[#1A1A1A]/70 font-light leading-relaxed">
            Sensitive skin is one of the most common concerns among dogs living
            in warm, humid environments. Redness, itching, dryness, and recurring
            irritation are often signs of imbalance rather than illness. In many
            cases, sensitivity is created not by nature, but by overly harsh care.
          </p>
        </FadeIn>

        {/* Section 1 */}
        <FadeIn direction="up" delay={0.2}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              Why Sensitive Skin Is Common in Tropical Climates
            </h2>
            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
              Heat and humidity increase moisture on the skin’s surface, while
              environmental allergens remain active year-round. Frequent bathing,
              when paired with aggressive cleansers, strips away protective oils
              and disrupts the skin barrier. Over time, this leaves the skin
              reactive and vulnerable.
            </p>
          </section>
        </FadeIn>

        {/* Section 2 */}
        <FadeIn direction="up" delay={0.3}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              Sensitivity Is Often a Response, Not a Condition
            </h2>
            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
              Many dogs labeled as “sensitive” are responding to repeated exposure
              to detergents, artificial fragrances, or improper pH levels.
              Calming the skin requires removing sources of irritation and
              supporting the body’s natural ability to rebalance itself.
            </p>
          </section>
        </FadeIn>

        {/* Section 3 */}
        <FadeIn direction="up" delay={0.4}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              Gentle Grooming as Skin Support
            </h2>
            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
              Thoughtful grooming favors fewer ingredients, pH compatibility, and
              biologically respectful formulations. Choosing{" "}
              <Link
                href="/products"
                className="underline decoration-[#8B7E6A]/40 underline-offset-4 hover:text-[#8B7E6A] transition"
              >
                gentle grooming formulations designed for sensitive skin
              </Link>
              {" "}helps reduce flare-ups while maintaining cleanliness and comfort.
            </p>
          </section>
        </FadeIn>

        {/* Section 4 */}
        <FadeIn direction="up" delay={0.5}>
          <section className="mt-16">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl text-[#1A1A1A]`}>
              Skin Care as a Long-Term Ritual
            </h2>
            <p className="mt-4 text-[#1A1A1A]/70 font-light leading-relaxed">
              Supporting sensitive skin is not about quick fixes. Calm routines,
              appropriate bathing intervals, and gentle handling allow the skin
              to recover over time. When care is consistent and respectful,
              sensitivity often diminishes naturally.
            </p>
          </section>
        </FadeIn>

        {/* Closing + Link Back */}
        <FadeIn direction="up" delay={0.6}>
          <section className="mt-20 border-t border-[#8B7E6A]/20 pt-12">
            <p className="text-base md:text-lg text-[#1A1A1A]/60 font-light leading-relaxed">
              To explore how grooming, hygiene, and ear care work together in
              tropical climates, return to our{" "}
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


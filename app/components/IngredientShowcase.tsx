"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const INGREDIENTS = [
  {
    src: "/ingredients/aloe-vera.png",
    title: "Aloe Vera",
    description: "Soothes sensitive skin and helps calm irritation.",
  },
  {
    src: "/ingredients/coconut-oil.png",
    title: "Coconut Oil",
    description: "Deeply moisturizes and protects dry, delicate coats.",
  },
  {
    src: "/ingredients/madre-de-cacao.png",
    title: "Madre de Cacao",
    description: "Naturally antibacterial, helping relieve skin discomfort.",
  },
  {
    src: "/ingredients/guava.png",
    title: "Guava Extract",
    description: "Rich in antioxidants to support a healthy, shiny coat.",
  },
];

export default function IngredientShowcase() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setVisible(false), 4000);
    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % INGREDIENTS.length);
      setVisible(true);
    }, 5000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(nextTimer);
    };
  }, [index]);

  const ingredient = INGREDIENTS[index];

  return (
    // CHANGE 1: Reduced fixed height from 420px to 300px
    <div className="relative h-[300px] w-full flex items-center justify-center">
      <div
        className={`
          absolute flex flex-col items-center text-center transition-opacity duration-700
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* CHANGE 2: Reduced Image size (260->160) and Margin (mb-6->mb-4) */}
        <Image
          src={ingredient.src}
          alt={ingredient.title}
          width={160}
          height={160}
          className="mb-4 object-contain"
        />

        <h4 className="text-lg font-medium text-[#1A1A1A]">
          {ingredient.title}
        </h4>

        {/* CHANGE 3: Tighter margin-top if needed, kept at mt-2 for readability */}
        <p className="mt-2 text-sm text-muted max-w-xs leading-snug">
          {ingredient.description}
        </p>
      </div>
    </div>
  );
}
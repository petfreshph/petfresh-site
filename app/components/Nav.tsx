"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50
        w-full
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-[#F4EFE7]/90 backdrop-blur-md shadow-sm h-20"
            : "bg-transparent h-24"
        }
      `}
    >
      <div className="relative h-full w-full px-6 md:px-10">
        
        {/* 1. LOGO - Corrected to Root Link */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
          <Link href="/">
            <Image
              src="/images/logo-word.png"
              alt="Pet Fresh"
              width={140}
              height={40}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* 2. CENTER LINKS - Updated Our Products href */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-12 md:flex z-10">
          <NavLink href="/products">Our Products</NavLink>
          <NavLink href="/about">Our Story</NavLink>
          <NavLink href="/for-groomers">For Groomers</NavLink>
          <NavLink href="/">Home</NavLink>
        </div>

        {/* 3. RIGHT CTA - Corrected to mailto: */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block z-20">
          <a
            href="mailto:petfreshph@gmail.com"
            className={`
              ${fraunces.className} 
              inline-block rounded-full bg-[#1A1A1A] px-8 py-3 text-sm text-white 
              transition-all duration-300 
              hover:bg-[#8B7E6A] hover:shadow-md hover:-translate-y-0.5
            `}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative py-1">
      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#8B7E6A]">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#8B7E6A] transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}
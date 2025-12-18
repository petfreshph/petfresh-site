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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Our Products", href: "/products" },
    { name: "Our Story", href: "/about" },
    { name: "For Groomers", href: "/for-groomers" },
    { name: "Home", href: "/" },
  ];

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50
        w-full
        transition-all duration-500 ease-in-out
        ${
          scrolled || isOpen
            ? "bg-[#F4EFE7]/90 backdrop-blur-md shadow-sm h-20"
            : "bg-transparent h-24"
        }
      `}
    >
      <div className="relative h-full w-full px-6 md:px-10 flex items-center justify-between">
        
        {/* 1. LOGO - Stays same on Desktop/Mobile */}
        <div className="z-[70]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo-word.png"
              alt="Pet Fresh"
              width={140}
              height={40}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* 2. DESKTOP CENTER LINKS - Exactly as you had them */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-12 md:flex z-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
          ))}
        </div>

        {/* 3. RIGHT CTA (Desktop) & HAMBURGER (Mobile) */}
        <div className="flex items-center z-[70]">
          <div className="hidden md:block">
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

          {/* HAMBURGER TRIGGER - Mobile Only */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className={`h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* 4. SIMPLE MOBILE DRAWER (Right Side Slide-out) */}
        <div 
          className={`
            fixed top-0 right-0 h-screen w-[260px] bg-white shadow-2xl z-[60]
            transition-transform duration-300 ease-in-out md:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col gap-8 pt-32 px-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#8B7E6A]"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-full bg-black/5 my-2" />
            <a
              href="mailto:petfreshph@gmail.com"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B7E6A]"
            >
              Contact Us →
            </a>
          </div>
        </div>

        {/* DIM OVERLAY - Closes menu when clicking outside */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/10 backdrop-blur-sm md:hidden z-[55]" 
            onClick={() => setIsOpen(false)}
          />
        )}
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
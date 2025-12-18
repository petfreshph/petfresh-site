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

  const navLinks = [
    { name: "Our Products", href: "/products" },
    { name: "Our Story", href: "/about" },
    { name: "For Groomers", href: "/for-groomers" },
    { name: "Home", href: "/" },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
      scrolled || isOpen ? "bg-[#F4EFE7]/90 backdrop-blur-md shadow-sm h-20" : "bg-transparent h-24"
    }`}>
      <div className="relative h-full w-full px-6 md:px-10 flex items-center justify-between">
        
        {/* 1. LOGO */}
        <div className="z-[70]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/images/logo-word.png" alt="Pet Fresh" width={140} height={40} className="h-16 md:h-20 w-auto object-contain" priority />
          </Link>
        </div>

        {/* 2. DESKTOP CENTER LINKS */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex z-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
          ))}
        </div>

        {/* 3. RIGHT SECTION: SOCIALS + CTA */}
        <div className="flex items-center gap-6 z-[70]">
          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-2 border-r border-black/10 pr-6">
            <SocialIcon href="https://www.instagram.com/petfreshph/" platform="instagram" />
            <SocialIcon href="https://www.facebook.com/petfreshph" platform="facebook" />
            <SocialIcon href="https://www.tiktok.com/@pet_freshph" platform="tiktok" />
          </div>

          <div className="hidden md:block">
            <a href="mailto:petfreshph@gmail.com" className={`${fraunces.className} inline-block rounded-full bg-[#1A1A1A] px-8 py-3 text-sm text-white transition-all duration-300 hover:bg-[#8B7E6A] hover:shadow-md hover:-translate-y-0.5`}>
              Get in Touch
            </a>
          </div>

          {/* HAMBURGER TRIGGER */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none">
            <div className={`h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* 4. MOBILE DRAWER */}
        <div className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-[60] transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col gap-8 pt-32 px-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#8B7E6A]">
                {link.name}
              </Link>
            ))}
            
            <div className="h-px w-full bg-black/5 my-2" />
            
            {/* Social Icons - Mobile Drawer */}
            <div className="flex gap-4 items-center">
              <SocialIcon href="https://www.instagram.com/petfreshph/" platform="instagram" />
              <SocialIcon href="https://www.facebook.com/petfreshph" platform="facebook" />
              <SocialIcon href="https://www.tiktok.com/@pet_freshph" platform="tiktok" />
            </div>

            <a href="mailto:petfreshph@gmail.com" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B7E6A]">
              Contact Us →
            </a>
          </div>
        </div>

        {isOpen && <div className="fixed inset-0 bg-black/10 backdrop-blur-sm md:hidden z-[55]" onClick={() => setIsOpen(false)} />}
      </div>
    </nav>
  );
}

// OPTIMIZED SOCIAL ICON COMPONENT
function SocialIcon({ href, platform, isLight = false }: { href: string; platform: 'instagram' | 'facebook' | 'tiktok', isLight?: boolean }) {
  const icons = {
    instagram: <path d="M7 2C4.23858 2 2 4.23858 2 7V13C2 15.7614 4.23858 18 7 18H13C15.7614 18 18 15.7614 18 13V7C18 4.23858 15.7614 2 13 2H7ZM7 0H13C16.866 0 20 3.13401 20 7V13C20 16.866 16.866 20 13 20H7C3.13401 20 0 16.866 0 13V7C0 3.13401 3.13401 0 7 0ZM10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5ZM10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7ZM15.5 4C15.7761 4 16 4.22386 16 4.5C16 4.77614 15.7761 5 15.5 5C15.2239 5 15 4.77614 15 4.5C15 4.22386 15.2239 4 15.5 4Z" />,
    facebook: <path d="M18.896 10c0-4.887-3.935-8.847-8.791-8.847C5.24 1.153 1.305 5.113 1.305 10c0 4.417 3.223 8.077 7.43 8.742V12.33h-2.31V10h2.31V8.225c0-2.296 1.362-3.565 3.442-3.565.996 0 2.037.179 2.037.179v2.253h-1.147c-1.13 0-1.482.706-1.482 1.43V10h2.525l-.403 2.33h-2.122v6.412c4.207-.665 7.43-4.325 7.43-8.742z" />,
    tiktok: <path d="M12.525.02c1.31-.032 2.512.352 3.512 1.07.03.024.06.047.088.073V4.54c-.72 0-1.39-.17-1.98-.47-.3-.15-.58-.33-.84-.54-.34-.27-.64-.58-.89-.93-.3-.41-.55-.87-.73-1.36-.01-.06-.02-.12-.03-.19V.02h1.05zM7.5 4.56c-.18 0-.36.01-.54.03-1.17.16-2.17.76-2.89 1.63-.44.53-.78 1.15-.98 1.83-.2.68-.27 1.39-.2 2.11.18 1.83 1.35 3.39 3 4.07.51.21 1.07.33 1.66.33 2.52 0 4.57-2.05 4.57-4.57V0H9.19v8.67c0 .92-.74 1.66-1.66 1.66-.92 0-1.66-.74-1.66-1.66 0-.92.74-1.66 1.66-1.66.2 0 .4.04.58.11V4.56z" />
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center justify-center w-8 h-8 transition-all hover:scale-110 opacity-40 hover:opacity-100"
    >
      <svg 
        className={`w-5 h-5 ${isLight ? 'fill-[#F4EFE7]' : 'fill-[#1A1A1A]'}`} 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {icons[platform]}
      </svg>
    </a>
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
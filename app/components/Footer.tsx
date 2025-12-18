"use client";

import Link from "next/link";
import { Fraunces } from "next/font/google";
import FadeIn from "./FadeIn";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1A1A1A] text-[#F4EFE7] pt-12 pb-10 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          {/* 1. BRAND */}
          <div className="md:col-span-5 space-y-6">
            <h2 className={`${fraunces.className} text-2xl md:text-3xl leading-tight text-[#F4EFE7]`}>
              Crafting rituals <br />
              <span className="italic text-[#8B7E6A]">not just products.</span>
            </h2>
            <p className="text-white/40 text-xs md:text-sm max-w-sm leading-relaxed">
              Philippine-based botanical laboratory dedicated to the science of gentle, human-grade pet care.
            </p>
            <div className="flex gap-4">
              <SocialIcon href="https://www.instagram.com/petfreshph/" platform="instagram" isLight />
              <SocialIcon href="https://www.facebook.com/petfreshph" platform="facebook" isLight />
              <SocialIcon href="https://www.tiktok.com/@pet_freshph" platform="tiktok" isLight />
            </div>
          </div>

          {/* 2. MENU */}
          <div className="md:col-span-3">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8B7E6A] mb-5">Menu</h4>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/products" label="Shop" />
              <FooterLink href="/about" label="Story" />
              <FooterLink href="/for-groomers" label="Professional" />
            </ul>
          </div>

          {/* 3. CONNECT */}
          <div className="md:col-span-4">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8B7E6A] mb-5">Connect</h4>
            <div className="space-y-4 text-xs text-white/50">
              <p><span className="block text-[8px] text-white/20 uppercase tracking-widest mb-1">Email</span> petfreshph@gmail.com</p>
              <p><span className="block text-[8px] text-white/20 uppercase tracking-widest mb-1">Viber</span> +63 (917) 000 0000</p>
            </div>
          </div>
        </div>

        {/* --- THE LEGAL BLOCK --- */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center">
          <div className="flex gap-8 mb-6">
            <Link href="/privacy" className="text-[9px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[9px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms</Link>
          </div>
          
          {/* Static Copyright - No FadeIn to ensure it shows immediately */}
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white text-center">
            © 2025-2026 Pet Fresh Philippines. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, platform, isLight = false }: any) {
  const icons = {
    instagram: <path d="M7 2C4.23858 2 2 4.23858 2 7V13C2 15.7614 4.23858 18 7 18H13C15.7614 18 18 15.7614 18 13V7C18 4.23858 15.7614 2 13 2H7ZM7 0H13C16.866 0 20 3.13401 20 7V13C20 16.866 16.866 20 13 20H7C3.13401 20 0 16.866 0 13V7C0 3.13401 3.13401 0 7 0ZM10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5ZM10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7ZM15.5 4C15.7761 4 16 4.22386 16 4.5C16 4.77614 15.7761 5 15.5 5C15.2239 5 15 4.77614 15 4.5C15 4.22386 15.2239 4 15.5 4Z" />,
    facebook: <path d="M18.896 10c0-4.887-3.935-8.847-8.791-8.847C5.24 1.153 1.305 5.113 1.305 10c0 4.417 3.223 8.077 7.43 8.742V12.33h-2.31V10h2.31V8.225c0-2.296 1.362-3.565 3.442-3.565.996 0 2.037.179 2.037.179v2.253h-1.147c-1.13 0-1.482.706-1.482 1.43V10h2.525l-.403 2.33h-2.122v6.412c4.207-.665 7.43-4.325 7.43-8.742z" />,
    tiktok: <path d="M12.525.02c1.31-.032 2.512.352 3.512 1.07.03.024.06.047.088.073V4.54c-.72 0-1.39-.17-1.98-.47-.3-.15-.58-.33-.84-.54-.34-.27-.64-.58-.89-.93-.3-.41-.55-.87-.73-1.36-.01-.06-.02-.12-.03-.19V.02h1.05zM7.5 4.56c-.18 0-.36.01-.54.03-1.17.16-2.17.76-2.89 1.63-.44.53-.78 1.15-.98 1.83-.2.68-.27 1.39-.2 2.11.18 1.83 1.35 3.39 3 4.07.51.21 1.07.33 1.66.33 2.52 0 4.57-2.05 4.57-4.57V0H9.19v8.67c0 .92-.74 1.66-1.66 1.66-.92 0-1.66-.74-1.66-1.66 0-.92.74-1.66 1.66-1.66.2 0 .4.04.58.11V4.56z" />
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 opacity-40 hover:opacity-100 transition-all hover:scale-110">
      <svg className={`w-5 h-5 ${isLight ? 'fill-[#F4EFE7]' : 'fill-[#1A1A1A]'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        {icons[platform as keyof typeof icons]}
      </svg>
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-xs text-white/50 hover:text-[#8B7E6A] transition-all duration-300">
        {label}
      </Link>
    </li>
  );
}
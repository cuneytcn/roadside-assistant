'use client';

import { siteConfig } from '@/config/site.config';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
   { href: '/', label: 'Ana Sayfa' },
   { href: '/hizmetler', label: 'Hizmetler' },
   { href: '/hakkimizda', label: 'Hakkımızda' },
   { href: '/iletisim', label: 'İletişim' },
];

export default function Header() {
   const [open, setOpen] = useState(false);

   return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-linear-to-r from-[#0b1e3a] via-[#0f2f63] to-[#123b77] text-white shadow-xl shadow-blue-900/20 backdrop-blur">
         <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
            <Link
               href="/"
               className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-2 text-white transition-colors hover:bg-white/15">
               <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl shadow-inner shadow-black/10">
                  🚗
               </span>
               <div className="leading-tight">
                  <div className="text-lg font-bold">İzmir Yol Yardım</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                     7/24 Hizmet
                  </div>
               </div>
            </Link>

            <button
               aria-label="Menüyü Aç"
               className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white hover:bg-white/20 transition"
               onClick={() => setOpen((v) => !v)}>
               <span className="text-xl">{open ? '✕' : '☰'}</span>
            </button>

            <div className="hidden md:flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-1 shadow-inner shadow-black/10">
               {navLinks.map((item) => (
                  <Link
                     key={item.href}
                     href={item.href}
                     className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition duration-150 hover:bg-white/15 hover:text-white">
                     {item.label}
                  </Link>
               ))}
            </div>

            <div className="hidden sm:flex items-center gap-3">
               <span className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  ⚡ 7/24 Acil Destek
               </span>
               <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-900 shadow-lg shadow-black/10 transition duration-150 hover:-translate-y-px hover:shadow-xl">
                  <span>📞</span>
                  <span>{siteConfig.contact.phone}</span>
               </a>
               <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition duration-150 hover:-translate-y-px hover:bg-green-600 hover:shadow-xl">
                  <span>💬</span>
                  <span>WhatsApp</span>
               </a>
            </div>
         </nav>

         {/* Mobile menu */}
         {open && (
            <div className="md:hidden border-t border-white/10 bg-[#0b1e3a]/90 backdrop-blur shadow-lg">
               <div className="container mx-auto px-4 py-4 space-y-2">
                  {navLinks.map((item) => (
                     <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                        onClick={() => setOpen(false)}>
                        {item.label}
                     </Link>
                  ))}
                  <div className="flex flex-col gap-3 pt-2">
                     <a
                        href={`tel:${siteConfig.contact.phone.replace(
                           /\s/g,
                           ''
                        )}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-blue-900 shadow-lg shadow-black/10">
                        📞 {siteConfig.contact.phone}
                     </a>
                     <a
                        href={siteConfig.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30">
                        💬 WhatsApp ile İletişim
                     </a>
                  </div>
               </div>
            </div>
         )}
      </header>
   );
}

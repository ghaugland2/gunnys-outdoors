'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/custom-rods', label: 'Custom Rods' },
  { href: '/fishing-reports', label: 'Fishing Reports' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c100d]/85 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
              <defs>
                <linearGradient id="miniGrad">
                  <stop offset="0%" stopColor="#2a1f14" />
                  <stop offset="100%" stopColor="#0d0a08" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="17" fill="url(#miniGrad)" />
              
              {/* Mini crossed rods */}
              <line x1="10" y1="28" x2="22" y2="10" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="30" y1="28" x2="18" y2="10" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              
              {/* Mini fish */}
              <ellipse cx="20" cy="19" rx="5" ry="3" fill="#c9a961" />
              <circle cx="17" cy="18.5" r="0.8" fill="#2a1f14" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-black leading-none text-white group-hover:text-amber-300 transition">Gunny's</div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-stone-400 group-hover:text-amber-200 transition">Outdoors</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  isActive ? 'text-amber-300' : 'text-stone-300 hover:text-amber-300'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/custom-rods" className="hidden rounded-full bg-sky-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-sky-400 sm:inline-flex">
            Start a Build
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-white lg:hidden hover:bg-white/5 transition"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0c100d] lg:hidden">
          <div className="page-shell py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block border-b border-white/5 py-3 text-sm font-semibold text-stone-200 last:border-b-0 hover:text-amber-300 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

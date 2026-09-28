'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Fish, Menu, X } from 'lucide-react';

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
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-500 text-black shadow-[0_8px_25px_rgba(14,165,233,0.35)]">
            <Fish size={22} />
          </div>
          <div>
            <div className="text-lg font-black leading-none text-white">Gunny's</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-400">Outdoors</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${isActive ? 'text-sky-400' : 'text-stone-300 hover:text-sky-300'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/custom-rods" className="hidden rounded-full bg-sky-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-sky-400 sm:inline-flex">
            Start a build
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-white lg:hidden"
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
                className="block border-b border-white/5 py-3 text-sm font-semibold text-stone-200 last:border-b-0"
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

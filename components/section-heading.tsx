import Link from 'next/link';
import { Facebook, Fish, Instagram, Mail } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/custom-rods', label: 'Custom Rods' },
  { href: '/fishing-reports', label: 'Fishing Reports' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0d0c]">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500 text-black">
              <Fish size={18} />
            </div>
            <div className="text-lg font-black text-white">Gunny's Outdoors</div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-stone-400">
            Custom fishing rods, local fishing reports, and outdoor gear for anglers who want quality craftsmanship and a better day on the water.
          </p>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-stone-400">Quick Links</div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-stone-300">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-sky-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-stone-400">Follow Along</div>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Mail].map((Icon, index) => (
              <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-stone-200 transition hover:border-sky-500/40 hover:text-sky-300">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs uppercase tracking-[0.2em] text-stone-500">
        © 2026 Gunny's Outdoors
      </div>
    </footer>
  );
}

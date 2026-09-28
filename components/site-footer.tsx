import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0c100d]">
      <div className="page-shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-4 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
                  <defs>
                    <linearGradient id="miniGrad2">
                      <stop offset="0%" stopColor="#2a1f14" />
                      <stop offset="100%" stopColor="#0d0a08" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="17" fill="url(#miniGrad2)" />
                  <line x1="10" y1="28" x2="22" y2="10" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="30" y1="28" x2="18" y2="10" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
                  <ellipse cx="20" cy="19" rx="5" ry="3" fill="#c9a961" />
                  <circle cx="17" cy="18.5" r="0.8" fill="#2a1f14" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-black leading-none text-white">Gunny's</div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-stone-400">Outdoors</div>
              </div>
            </div>
            <p className="text-sm text-stone-400">
              Custom-built fishing rods and outdoor gear for serious anglers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/custom-rods" className="text-sm text-stone-400 hover:text-amber-300 transition">
                  Custom Rods
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-stone-400 hover:text-amber-300 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/fishing-reports" className="text-sm text-stone-400 hover:text-amber-300 transition">
                  Fishing Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-stone-400 hover:text-amber-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-stone-400 hover:text-amber-300 transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-stone-400 hover:text-amber-300 transition">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber-300 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-stone-400">Devils Lake, ND</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-300 flex-shrink-0" />
                <a href="tel:+17015550143" className="text-sm text-stone-400 hover:text-amber-300 transition">
                  (701) 555-0143
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-300 flex-shrink-0" />
                <a href="mailto:hello@gunnysoutdoors.com" className="text-sm text-stone-400 hover:text-amber-300 transition">
                  Email us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} Gunny's Outdoors LLC. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-stone-400 hover:bg-white/5 hover:text-amber-300 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-stone-400 hover:bg-white/5 hover:text-amber-300 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-stone-400 hover:bg-white/5 hover:text-amber-300 transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

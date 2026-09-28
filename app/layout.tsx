import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://gunnys-outdoors.com'),
  title: {
    default: "Gunny's Outdoors | Custom Fishing Rods & Outdoor Gear",
    template: "%s | Gunny's Outdoors",
  },
  description:
    'Custom fishing rods, outdoor gear, and Devils Lake fishing expertise from Gunny\'s Outdoors in North Dakota.',
  keywords: ['custom fishing rods', 'Devils Lake fishing', 'outdoor gear', 'North Dakota fishing', 'custom rods'],
  openGraph: {
    title: "Gunny's Outdoors | Custom Fishing Rods & Outdoor Gear",
    description:
      'Built for anglers by anglers. Custom fishing rods, gear, and local fishing expertise from Devils Lake, North Dakota.',
    url: 'https://gunnys-outdoors.com',
    siteName: "Gunny's Outdoors",
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://gunnys-outdoors.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0c100d] text-stone-100 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

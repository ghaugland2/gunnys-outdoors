import { Search, ShoppingBag, Star } from 'lucide-react';

const products = [
  { name: 'Custom Walleye Rod', category: 'Custom Rods', price: '$320', inventory: 'In stock', accent: 'from-sky-500/10 via-transparent to-amber-500/10' },
  { name: 'Ice Fishing Combo', category: 'Ice Fishing', price: '$210', inventory: 'Limited', accent: 'from-sky-500/10 via-transparent to-cyan-500/10' },
  { name: 'Gunny’s Outdoors Cap', category: 'Apparel', price: '$28', inventory: 'Ready to ship', accent: 'from-emerald-500/10 via-transparent to-slate-700/10' },
  { name: 'Custom Decal Pack', category: 'Accessories', price: '$14', inventory: '4 in stock', accent: 'from-orange-500/10 via-transparent to-red-500/10' },
  { name: 'Tackle Tray', category: 'Tackle', price: '$42', inventory: 'In stock', accent: 'from-fuchsia-500/10 via-transparent to-stone-700/10' },
  { name: 'Outdoor Hoodie', category: 'Apparel', price: '$54', inventory: 'New arrival', accent: 'from-amber-500/10 via-transparent to-green-500/10' },
];

export default function ShopPage() {
  return (
    <>
      <section className="section-space">
        <div className="page-shell">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
                Shop
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Gear for the water, the camp, and the season.
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                <Search size={16} className="text-stone-400" />
                <input placeholder="Search products" className="w-40 bg-transparent text-sm text-white placeholder:text-stone-500 outline-none" />
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-sky-400">
                <ShoppingBag size={16} /> Cart (0)
              </button>
            </div>
          </div>

          <div className="mb-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.2em] text-stone-300">
            {['Custom Rods', 'Apparel', 'Hats', 'Decals', 'Tackle', 'Accessories'].map((category) => (
              <button key={category} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 hover:border-sky-500/40 hover:text-sky-300">
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="surface-card overflow-hidden">
                <div className={`flex h-52 items-center justify-center bg-gradient-to-br ${product.accent}`}>
                  <div className="flex h-20 w-10 rotate-12 items-center justify-center rounded-full bg-gradient-to-b from-stone-800 via-sky-500 to-stone-900">
                    <div className="h-10 w-3 rounded-full bg-white/80" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">{product.category}</div>
                  <h2 className="mt-3 text-2xl font-black text-white">{product.name}</h2>
                  <div className="mt-4 flex items-center gap-1 text-sky-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-2xl font-black text-white">{product.price}</div>
                      <div className="text-xs uppercase tracking-[0.22em] text-stone-400">{product.inventory}</div>
                    </div>
                    <button className="rounded-full bg-sky-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-sky-400">
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

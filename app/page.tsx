import Link from 'next/link';

const featuredRods = [
  {
    name: 'Walleye Rods',
    length: '6’9” – 7’6"',
    action: 'Medium-Light to Medium',
    components: 'Graphite blank, stainless guides, custom cork grip',
    price: '$220 – $420',
  },
  {
    name: 'Ice Fishing Rods',
    length: '24" – 36"',
    action: 'Extra-Fast',
    components: 'Cold-rated blank, EVA handle, premium tip kit',
    price: '$160 – $290',
  },
  {
    name: 'Custom Bass Rods',
    length: '7’0" – 7’6"',
    action: 'Medium Heavy',
    components: 'High-modulus blank, custom wraps, lightweight reel seat',
    price: '$260 – $500',
  },
  {
    name: 'Specialty Builds',
    length: 'Custom',
    action: 'Custom',
    components: 'Tailored to your species, water, and technique',
    price: 'From $330',
  },
];

const reasons = [
  'Custom-built for your target species and fishing style',
  'Quality components selected for North Dakota conditions',
  'Local expertise from Devils Lake water and season knowledge',
  'Professional craftsmanship with personalized details',
];

const reports = [
  {
    tag: 'Open Water',
    title: 'Devils Lake Walleye Update',
    excerpt: 'Walleye are settling on edge breaks and weed lines. Slip bobbers and vertical jigging are producing steady action.',
  },
  {
    tag: 'Ice Fishing',
    title: 'Early Ice Safety and Access',
    excerpt: 'Conditions are changing quickly. Check ice depth, avoid current seams, and focus on protected bays and weed edges.',
  },
  {
    tag: 'Technique',
    title: 'Choosing the Right Rod for Your Style',
    excerpt: 'The best rod depends on the fishery, line choice, and how much feel you want. Matching action to technique matters.',
  },
];

const testimonials = [
  {
    quote: 'The custom rod I ordered for walleye fishing feels dialed in for Devils Lake. Balance and sensitivity are perfect.',
    author: 'Marcus T.',
  },
  {
    quote: 'Gunny’s helped me build a rod that matches my style and the way I fish. It looks great and fishes even better.',
    author: 'Dylan S.',
  },
  {
    quote: 'I’ve bought gear here and the attention to detail is obvious. It feels premium without being overbuilt.',
    author: 'Chad R.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="page-shell grid min-h-[780px] items-center gap-12 py-20 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-sky-300">
              Devils Lake, North Dakota
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
              Built for Anglers <span className="text-sky-400">by Anglers</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              Custom fishing rods, outdoor gear, and Devils Lake fishing expertise for anglers who want gear that performs and products built to last.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/custom-rods" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-sky-400">
                View Custom Rods
              </Link>
              <Link href="/shop" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Shop Now
              </Link>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              {[
                ['Custom', 'Built to fit'],
                ['Local', 'North Dakota'],
                ['Trusted', 'Craftsmanship'],
              ].map(([title, subtitle]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                  <div className="text-lg font-black text-sky-400">{title}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-stone-500">{subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="gradient-ring relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1f4334] via-[#151d1a] to-[#0d1110] p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,107,0,0.18),transparent_25%)]" />
              <div className="relative flex min-h-[560px] flex-col justify-between rounded-[1.7rem] border border-white/10 bg-black/10 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-sky-300">
                    Custom build #001
                  </span>
                  <span className="text-sky-300">✦</span>
                </div>

                <div className="flex justify-center py-10">
                  <div className="relative h-64 w-24 rotate-12 rounded-full bg-gradient-to-b from-[#1c1d1d] via-sky-500 to-[#1a1a1a] shadow-[0_0_80px_rgba(14,165,233,0.25)]">
                    <div className="absolute -left-14 bottom-10 h-24 w-20 rounded-full border-4 border-stone-700 bg-[#171a18]" />
                    <div className="absolute left-1/2 top-2 h-12 w-3 -translate-x-1/2 rounded-full bg-sky-100/90" />
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-stone-500">
                    Crafted one at a time
                  </div>
                  <div className="mt-3 text-3xl font-black leading-tight text-white">
                    Your water. Your style. Your rod.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-[#111512]">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              Featured custom rods
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Rods built around how you fish.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredRods.map((rod) => (
              <div key={rod.name} className="surface-card overflow-hidden">
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-sky-500/15 via-transparent to-amber-500/10">
                  <div className="flex h-20 w-10 rotate-12 items-center justify-center rounded-full bg-gradient-to-b from-stone-800 via-sky-500 to-stone-900 shadow-[0_0_30px_rgba(14,165,233,0.12)]">
                    <div className="h-10 w-3 rounded-full bg-slate-100/80" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
                    {rod.name}
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-stone-300">
                    <div><span className="font-semibold text-white">Length:</span> {rod.length}</div>
                    <div><span className="font-semibold text-white">Action:</span> {rod.action}</div>
                    <div><span className="font-semibold text-white">Components:</span> {rod.components}</div>
                    <div><span className="font-semibold text-white">Price range:</span> {rod.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              Why choose Gunny's
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Real performance, real craftsmanship, real local knowledge.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="surface-card p-8">
              <div className="space-y-5">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/10 p-4">
                    <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-sm font-black text-black">
                      ✓
                    </div>
                    <div className="text-stone-200">{reason}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card overflow-hidden bg-gradient-to-br from-[#173b2f] via-[#141915] to-[#0d110f] p-8">
              <div className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-sky-300">
                Local expertise
              </div>
              <h3 className="text-3xl font-black text-white">The right setup for the waters you actually fish.</h3>
              <p className="mt-5 text-base leading-7 text-stone-300">
                Gunny’s Outdoors blends custom rod craftsmanship with practical local fishing knowledge from the Devils Lake region, helping anglers choose gear that fits their water, technique, and seasonal conditions.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-3xl font-black text-sky-400">6+</div>
                  <div className="mt-2 text-sm text-stone-300">Fishing seasons served</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-3xl font-black text-sky-400">100%</div>
                  <div className="mt-2 text-sm text-stone-300">Tailored to the angler</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-[#111512]">
        <div className="page-shell">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              Latest fishing reports
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              What’s happening on the water right now.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {reports.map((report) => (
              <article key={report.title} className="surface-card p-6">
                <div className="mb-5 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-sky-300">
                  {report.tag}
                </div>
                <h3 className="text-2xl font-black text-white">{report.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-300">{report.excerpt}</p>
                <Link href="/fishing-reports" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-400">
                  Read Report <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              Testimonials
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Anglers trust the build quality and the local advice.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.author} className="surface-card p-6">
                <div className="mb-4 text-sky-400">★★★★★</div>
                <p className="text-base leading-8 text-stone-200">“{item.quote}”</p>
                <div className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-stone-400">
                  {item.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pb-24">
        <div className="page-shell">
          <div className="rounded-[2rem] bg-sky-500 p-8 text-black md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.28em] text-black/70">
                  Ready to fish better?
                </div>
                <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                  Let’s build your next favorite rod.
                </h2>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-stone-800">
                Contact Gunny's
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

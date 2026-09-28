import Link from 'next/link';
import { Fish, Gauge, MapPinned, PencilRuler, Search, ShieldCheck } from 'lucide-react';

const rodTypes = [
  {
    name: 'Walleye Rods',
    length: '6’9” – 7’6"',
    action: 'Medium-Light to Medium',
    components: 'Stainless guides, graphite blank, custom cork grip',
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
    components: 'High-modulus blank, custom wraps, premium reel seat',
    price: '$260 – $500',
  },
  {
    name: 'Specialty Builds',
    length: 'Custom',
    action: 'Custom',
    components: 'Built for your exact technique and species',
    price: 'From $330',
  },
];

const processSteps = [
  { icon: PencilRuler, title: 'Choose your specs', text: 'Pick your rod type, length, action, grip, guides, and tuning preferences.' },
  { icon: Gauge, title: 'Dial in performance', text: 'We match the build to the species, water, and method you fish most often.' },
  { icon: ShieldCheck, title: 'Craftsmanship', text: 'Every rod is assembled carefully with quality components and attention to balance.' },
  { icon: MapPinned, title: 'Local insight', text: 'Reference North Dakota conditions and Devils Lake fishing patterns to guide your setup.' },
];

export default function CustomRodsPage() {
  return (
    <>
      <section className="section-space">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              Custom rods
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Purpose-built tools for the way you fish.
            </h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {rodTypes.map((rod) => (
              <div key={rod.name} className="surface-card overflow-hidden">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-sky-500/15 via-transparent to-amber-500/10">
                  <div className="flex h-20 w-10 rotate-12 items-center justify-center rounded-full bg-gradient-to-b from-stone-800 via-sky-500 to-stone-900">
                    <div className="h-10 w-3 rounded-full bg-white/80" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">{rod.name}</div>
                  <div className="mt-4 space-y-2 text-sm text-stone-300">
                    <div><span className="font-semibold text-white">Length:</span> {rod.length}</div>
                    <div><span className="font-semibold text-white">Action:</span> {rod.action}</div>
                    <div><span className="font-semibold text-white">Components:</span> {rod.components}</div>
                    <div><span className="font-semibold text-white">Price:</span> {rod.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-[#111512]">
        <div className="page-shell">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              Build process
            </div>
            <h2 className="text-3xl font-black text-white md:text-5xl">
              A simple four-step process from idea to finished rod.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="surface-card p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pb-24">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="surface-card p-8">
              <div className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
                Custom rod order form
              </div>
              <h2 className="text-3xl font-black text-white">Tell us what you want</h2>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                Share your build details and we’ll help match the right components, blank, and finish for your fishing style.
              </p>
            </div>

            <form className="surface-card p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm text-stone-300">
                  Name
                  <input required className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" />
                </label>
                <label className="block text-sm text-stone-300">
                  Email
                  <input type="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" />
                </label>
                <label className="block text-sm text-stone-300">
                  Phone
                  <input type="tel" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" />
                </label>
                <label className="block text-sm text-stone-300">
                  Rod Type
                  <select className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500">
                    <option>Walleye Rod</option>
                    <option>Ice Fishing Rod</option>
                    <option>Custom Bass Rod</option>
                    <option>Specialty Build</option>
                  </select>
                </label>
                <label className="block text-sm text-stone-300">
                  Length
                  <input className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" placeholder="Example: 7'0\"" />
                </label>
                <label className="block text-sm text-stone-300">
                  Action
                  <input className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" placeholder="Medium, Fast, Extra-Fast" />
                </label>
                <label className="block text-sm text-stone-300 md:col-span-2">
                  Color Scheme
                  <input className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" placeholder="Forest green, blaze orange, black, custom thread" />
                </label>
                <label className="block text-sm text-stone-300 md:col-span-2">
                  Guide Type
                  <input className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" />
                </label>
                <label className="block text-sm text-stone-300 md:col-span-2">
                  Personalized Engraving
                  <input className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" placeholder="Optional" />
                </label>
                <label className="block text-sm text-stone-300 md:col-span-2">
                  Additional Notes
                  <textarea rows={5} className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" placeholder="Tell us about your target species, fishing style, and preferred finish." />
                </label>
              </div>

              <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-sky-400">
                Send Build Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

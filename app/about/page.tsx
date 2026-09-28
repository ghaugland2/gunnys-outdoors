const values = [
  {
    title: 'Our Mission',
    text: 'Help anglers build better days on the water with quality gear, honest advice, and craftsmanship that reflects real use.',
  },
  {
    title: 'North Dakota Lifestyle',
    text: 'From opening day to late-season ice fishing, we understand the rhythm of the outdoors and the needs of anglers in the region.',
  },
  {
    title: 'Custom Craftsmanship',
    text: 'Every rod is treated as a personalized tool. We consider species, technique, water conditions, and how the angler wants it to feel.',
  },
  {
    title: 'Community Involvement',
    text: 'Gunny’s Outdoors supports local anglers, outdoor traditions, and the culture that makes North Dakota fishing so special.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-space">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              About
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Built with purpose for the North Dakota outdoors.
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-card overflow-hidden p-8">
              <div className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
                Company history
              </div>
              <p className="text-base leading-8 text-stone-300">
                Gunny’s Outdoors started with a simple idea: anglers deserve gear tailored to their own water, technique, and style. Based in the Devils Lake region, the company blends local fishing knowledge with a passion for custom rod building and dependable outdoor gear.
              </p>
              <p className="mt-5 text-base leading-8 text-stone-300">
                What began as a focus on quality rods has grown into a full outdoor brand centered on craftsmanship, trust, and helping anglers get better results on the water.
              </p>
            </div>

            <div className="surface-card flex min-h-[280px] items-end overflow-hidden bg-gradient-to-br from-[#183a2d] via-[#101612] to-[#0d120f] p-8">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-300">
                  Devils Lake roots
                </div>
                <div className="mt-3 text-4xl font-black text-white">
                  Local waters. Local knowledge. Local pride.
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
              What we stand for
            </div>
            <h2 className="text-3xl font-black text-white md:text-5xl">
              Quality, service, and a real connection to the outdoors.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="surface-card p-6">
                <h3 className="text-xl font-black text-white">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-300">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { Search, Snowflake, Waves } from 'lucide-react';

const reportCards = [
  {
    tag: 'Current Conditions',
    title: 'Devils Lake Walleye Report',
    summary: 'Strong action on the edges of weed flats with shallow crankbaits and jig-and-minnow combos producing consistent results.',
  },
  {
    tag: 'Weekly Report',
    title: 'Midweek Fishing Pattern',
    summary: 'Fish are moving between points and deeper structure. Focus on morning and evening windows when activity peaks.',
  },
  {
    tag: 'Seasonal',
    title: 'Summer Patterns on the Lake',
    summary: 'Target windblown shorelines and break lines while adjusting depth based on water clarity and temperature.',
  },
  {
    tag: 'Ice Fishing',
    title: 'Early Ice Recommendations',
    summary: 'Check conditions before heading out. Protected bays and weed edges are best early while stability is still developing.',
  },
];

const categories = ['All', 'Current Conditions', 'Weekly Reports', 'Seasonal', 'Ice Fishing'];

export default function FishingReportsPage() {
  return (
    <>
      <section className="section-space">
        <div className="page-shell">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
                Fishing reports
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Local information for real anglers.
              </h1>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <Search size={16} className="text-stone-400" />
              <input placeholder="Search reports" className="w-48 bg-transparent text-sm text-white placeholder:text-stone-500 outline-none" />
            </div>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button key={cat} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-300 transition hover:border-sky-500/40 hover:text-sky-300">
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {reportCards.map((report, index) => (
              <article key={report.title} className="surface-card overflow-hidden">
                <div className="flex h-40 items-center justify-between bg-gradient-to-r from-sky-500/15 via-transparent to-emerald-500/10 p-6">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-400">
                      {report.tag}
                    </div>
                    <h2 className="mt-3 text-2xl font-black text-white">{report.title}</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/10 text-sky-300">
                    {index % 2 === 0 ? <Waves size={20} /> : <Snowflake size={20} />}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-stone-300">{report.summary}</p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-400">
                    View details <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

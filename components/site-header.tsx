import { Mail, MapPin, Phone, Send, Clock3 } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="section-space">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              Contact
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Let’s talk about your next setup.
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-card p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-sky-400" size={18} />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.22em] text-stone-500">Location</div>
                    <div className="mt-2 text-stone-200">Devils Lake, North Dakota</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 text-sky-400" size={18} />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.22em] text-stone-500">Email</div>
                    <div className="mt-2 text-stone-200">hello@gunnysoutdoors.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 text-sky-400" size={18} />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.22em] text-stone-500">Phone</div>
                    <div className="mt-2 text-stone-200">(701) 555-0143</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 text-sky-400" size={18} />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.22em] text-stone-500">Business Hours</div>
                    <div className="mt-2 text-stone-200">Mon–Fri: 8:00am–6:00pm</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/10 p-4">
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  Social
                </div>
                <div className="flex gap-3 text-sm text-stone-200">
                  <a href="#" className="hover:text-sky-300">Instagram</a>
                  <a href="#" className="hover:text-sky-300">Facebook</a>
                  <a href="#" className="hover:text-sky-300">YouTube</a>
                </div>
              </div>
            </div>

            <div className="surface-card p-8">
              <div className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
                Send a message
              </div>
              <form className="grid gap-5">
                <label className="block text-sm text-stone-300">
                  Name
                  <input required className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" />
                </label>
                <label className="block text-sm text-stone-300">
                  Email
                  <input type="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" />
                </label>
                <label className="block text-sm text-stone-300">
                  Subject
                  <input className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" />
                </label>
                <label className="block text-sm text-stone-300">
                  Message
                  <textarea rows={5} className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-sky-500" />
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-sky-400">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-shell">
          <div className="surface-card overflow-hidden">
            <div className="flex min-h-[360px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_30%),linear-gradient(135deg,#103026,#111111)] p-8">
              <div className="text-center">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-300">
                  Map placeholder
                </div>
                <div className="text-3xl font-black text-white">Devils Lake, North Dakota</div>
                <div className="mt-2 text-stone-300">Google Maps embed placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

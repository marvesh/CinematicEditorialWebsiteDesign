import { useState } from 'react'
import { resources } from '../data'

const allResources = [
  ...resources,
  {
    id: 5,
    title: 'Character Development Workbook',
    description: 'Deep-dive exercises for building three-dimensional characters that feel real and drive stories forward.',
    format: 'PDF',
    icon: '◉',
  },
  {
    id: 6,
    title: 'Dialogue Writing Guide',
    description: 'Everything you need to write dialogue that sounds natural, reveals character, and advances the plot.',
    format: 'PDF',
    icon: '◈',
  },
  {
    id: 7,
    title: 'Story Pacing Cheatsheet',
    description: 'A one-page reference for controlling tension, rhythm, and momentum across any story format.',
    format: 'PDF',
    icon: '✦',
  },
  {
    id: 8,
    title: 'Genre Research Templates',
    description: 'Research frameworks for six major story genres — so you build worlds that feel authentic.',
    format: 'Google Doc',
    icon: '◇',
  },
]

export default function Resources() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState<number | null>(null)

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-5">Free Tools</p>
          <h1 className="font-serif text-cream text-5xl md:text-7xl font-bold mb-6">Resources</h1>
          <p className="text-cream/60 text-lg max-w-xl leading-relaxed">
            Practical creative tools, templates, and guides — free for every storyteller and creator
            in The Ink City community.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {allResources.map((r) => (
              <div
                key={r.id}
                className="bg-navy group hover:bg-navy-mid border border-white/5 hover:border-gold/20 p-8 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-gold/10 group-hover:border-gold/20 transition-colors duration-300" />
                <div className="text-gold text-3xl mb-6">{r.icon}</div>
                <span className="text-gold/50 text-xs font-semibold tracking-widest uppercase mb-3 block">{r.format}</span>
                <h3 className="font-serif text-cream text-lg font-semibold mb-3 group-hover:text-gold-light transition-colors duration-200">
                  {r.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed mb-6">{r.description}</p>

                {submitted === r.id ? (
                  <p className="text-gold text-xs font-semibold">✓ Check your inbox!</p>
                ) : (
                  <button
                    onClick={() => setSubmitted(r.id)}
                    className="text-gold text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  >
                    Download Free ↓
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Featured resource banner */}
          <div className="bg-gold p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute right-12 top-1/2 -translate-y-1/2 text-navy/10 font-serif text-[200px] font-bold leading-none select-none hidden lg:block">
              ✦
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-navy/60 text-xs font-semibold tracking-widest uppercase mb-3">Featured Freebie</p>
                <h2 className="font-serif text-navy text-3xl md:text-4xl font-bold mb-4">
                  The Complete Story Starter Pack
                </h2>
                <p className="text-navy/70 leading-relaxed">
                  Everything in one place: 50 story ideas, 100 hooks, the YouTube script template,
                  and the 30-day content planner. Download all four free resources at once.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-navy/10 border border-navy/20 text-navy text-sm px-5 py-4 placeholder-navy/40 rounded-sm"
                />
                <button
                  onClick={() => { setEmail('') }}
                  className="bg-navy text-cream text-sm font-semibold px-6 py-4 rounded-sm hover:bg-navy-mid transition-colors duration-200"
                >
                  Get the Full Pack — Free
                </button>
                <p className="text-navy/50 text-xs text-center">No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

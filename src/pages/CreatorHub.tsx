import { useState } from 'react'

const pillars = [
  {
    id: 'youtube',
    icon: '▶',
    label: 'Faceless YouTube',
    title: 'Build a Channel Without Showing Your Face',
    description: 'Storytelling-driven faceless channels are one of the fastest-growing YouTube niches. Learn how to script, produce, and grow a channel that earns — without a camera pointed at you.',
    modules: ['Finding your niche & story angle', 'Scripting for retention', 'Voiceover & narration techniques', 'Monetization from Day 1'],
    image: 'https://images.unsplash.com/photo-1723723467478-eb4667116137?w=900&h=600&fit=crop&auto=format',
  },
  {
    id: 'storytelling',
    icon: '✏',
    label: 'Storytelling & Scriptwriting',
    title: 'Master the Architecture of Stories That Move People',
    description: 'Great stories follow principles, not formulas. Learn narrative structure, character development, pacing, and voice — across fiction, non-fiction, and video.',
    modules: ['Narrative structure beyond three-act', 'Writing compelling characters', 'Pacing and scene construction', 'Finding and keeping your voice'],
    image: 'https://images.unsplash.com/photo-1676278746065-487aa8848410?w=900&h=600&fit=crop&auto=format',
  },
  {
    id: 'video',
    icon: '◈',
    label: 'Video Creation',
    title: 'Cinematic Content, Solo Production',
    description: 'You don\'t need a studio or a team. Learn how to produce polished, cinematic video content as a solo creator — from storyboarding to final export.',
    modules: ['Storyboarding your video', 'B-roll and visual storytelling', 'Editing for narrative rhythm', 'Publishing and distribution strategy'],
    image: 'https://images.unsplash.com/photo-1625178441341-df18b7a52402?w=900&h=600&fit=crop&auto=format',
  },
  {
    id: 'ai',
    icon: '✦',
    label: 'AI for Creators',
    title: 'Use AI Without Losing Your Creative Voice',
    description: 'AI is a creative tool, not a replacement for creativity. Learn how to use it for research, ideation, scripting, and production — while keeping your work distinctly yours.',
    modules: ['Prompting for story development', 'Using AI for script drafts', 'AI image and video tools', 'Maintaining authorship with AI'],
    image: 'https://images.unsplash.com/photo-1593351799227-75df2026356b?w=900&h=600&fit=crop&auto=format',
  },
]

export default function CreatorHub() {
  const [activePillar, setActivePillar] = useState(pillars[0])

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1723723467478-eb4667116137?w=900&h=700&fit=crop&auto=format)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-5">For Creators</p>
          <h1 className="font-serif text-cream text-5xl md:text-7xl font-bold mb-6 max-w-2xl leading-tight">
            The Creator Hub
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl leading-relaxed">
            This isn't a technology platform. It's a storytelling studio. Everything here is built to
            help you create compelling content that finds an audience.
          </p>
        </div>
      </section>

      {/* Pillar tabs */}
      <section className="bg-navy-light border-b border-white/10 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex gap-0 overflow-x-auto">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePillar(p)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${
                  activePillar.id === p.id
                    ? 'text-gold border-gold'
                    : 'text-cream/50 border-transparent hover:text-cream/80'
                }`}
              >
                <span>{p.icon}</span>
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active pillar detail */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-gold text-3xl block mb-6">{activePillar.icon}</span>
              <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {activePillar.title}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10">{activePillar.description}</p>
              <div className="flex flex-col gap-3 mb-10">
                {activePillar.modules.map((m, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-gold text-xs mt-1.5">✦</span>
                    <p className="text-navy/70 text-sm">{m}</p>
                  </div>
                ))}
              </div>
              <button className="bg-navy text-cream text-sm font-semibold px-8 py-4 rounded-sm hover:bg-navy-mid transition-colors duration-200">
                Start This Track
              </button>
            </div>
            <div className="overflow-hidden rounded-sm aspect-[4/3] bg-cream-dark">
              <img
                src={activePillar.image}
                alt={activePillar.label}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* All pillars overview */}
          <div className="border-t border-navy/10 pt-20">
            <h3 className="font-serif text-navy text-3xl font-bold mb-12 text-center">All Creator Tracks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p)}
                  className={`p-8 text-left border transition-all duration-300 ${
                    activePillar.id === p.id
                      ? 'bg-navy border-gold text-cream'
                      : 'bg-cream-dark border-navy/10 text-navy hover:border-navy/30'
                  }`}
                >
                  <span className={`text-2xl block mb-4 ${activePillar.id === p.id ? 'text-gold' : 'text-navy/40'}`}>
                    {p.icon}
                  </span>
                  <p className={`font-serif text-lg font-semibold mb-2 ${activePillar.id === p.id ? 'text-cream' : 'text-navy'}`}>
                    {p.label}
                  </p>
                  <p className={`text-sm leading-relaxed ${activePillar.id === p.id ? 'text-cream/60' : 'text-navy/50'}`}>
                    {p.modules.length} modules
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-cream text-4xl font-bold mb-5">Ready to Start Creating?</h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Join thousands of creators who are building storytelling platforms and creative income with The Ink City.
          </p>
          <button className="bg-gold text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:bg-gold-light transition-colors duration-200">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  )
}

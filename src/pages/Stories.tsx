import { useState } from 'react'
import { stories } from '../data'

const categories = ['All', 'Adventure', 'Suspense', 'Romance', 'Drama', 'African-Inspired', 'Series']

export default function Stories() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? stories
    : stories.filter((s) => s.category === activeCategory)

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-navy pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-5">The Collection</p>
          <h1 className="font-serif text-cream text-5xl md:text-7xl font-bold mb-6">Stories</h1>
          <p className="text-cream/60 text-lg max-w-xl leading-relaxed">
            Original stories across genres — crafted for readers who want more than entertainment.
            They want to feel something.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-navy-light border-b border-white/10 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${
                  activeCategory === cat
                    ? 'text-gold border-gold'
                    : 'text-cream/50 border-transparent hover:text-cream/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((story) => (
              <div key={story.id} className="story-card group cursor-pointer">
                <div className="overflow-hidden rounded-sm bg-cream-dark aspect-[3/4] mb-6">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="story-card-img w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-navy text-gold text-xs font-bold px-3 py-1 tracking-widest uppercase">
                      {story.category}
                    </span>
                    <span className="text-navy/40 text-xs">{story.readTime}</span>
                  </div>
                  <h2 className="font-serif text-navy text-xl font-semibold mb-3 group-hover:text-navy/70 transition-colors duration-200">
                    {story.title}
                  </h2>
                  <p className="text-navy/55 text-sm leading-relaxed mb-5">{story.description}</p>
                  <button className="text-gold text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all duration-200">
                    Read Story <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-navy/40 text-2xl">No stories yet in this category.</p>
              <p className="text-navy/30 text-sm mt-2">Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-cream text-3xl md:text-4xl font-bold mb-5">
            Want to Write the Next Story?
          </h2>
          <p className="text-cream/60 text-base mb-8 leading-relaxed">
            The Ink City Creator Hub has everything you need to develop your storytelling craft and share your work.
          </p>
          <button className="bg-gold text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:bg-gold-light transition-colors duration-200">
            Start Creating
          </button>
        </div>
      </section>
    </div>
  )
}

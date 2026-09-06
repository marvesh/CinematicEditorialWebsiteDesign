import { useState } from 'react'
import type { Page } from '../types'
import { stories, products, resources } from '../data'

interface HomeProps {
  setPage: (p: Page) => void
}

const categories = [
  { name: 'Adventure', count: '24 stories', description: 'Journeys into the unknown, across borders and into the self.' },
  { name: 'Suspense', count: '18 stories', description: 'Stories that keep you one chapter ahead of the truth.' },
  { name: 'Romance', count: '31 stories', description: 'Love in all its forms — tender, fierce, complicated, real.' },
  { name: 'Drama', count: '22 stories', description: 'The quiet tensions and turning points of everyday lives.' },
  { name: 'African-Inspired', count: '16 stories', description: 'Rooted in culture, reaching toward the universal.' },
  { name: 'Series', count: '8 series', description: 'Ongoing narratives that reward commitment and patience.' },
]

const journeySteps = [
  { step: '01', label: 'IDEA', description: 'Every great story starts with a single spark — a what-if, a memory, a question.' },
  { step: '02', label: 'STORY', description: 'Shape your idea into a narrative with structure, character, and emotional truth.' },
  { step: '03', label: 'SCRIPT', description: 'Translate your story into a script designed to engage and hold attention.' },
  { step: '04', label: 'VIDEO', description: 'Bring your script to life using cinematic techniques and creator tools.' },
  { step: '05', label: 'AUDIENCE', description: 'Publish, grow, and connect with readers and viewers who feel your work.' },
]

const articles = [
  {
    category: 'Craft',
    title: 'The Three-Act Structure Is Overrated — Here\'s What to Use Instead',
    excerpt: 'Most storytelling advice is built for Hollywood scripts. Here\'s a framework built for the modern creator.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1676278746065-487aa8848410?w=800&h=500&fit=crop&auto=format',
  },
  {
    category: 'Creator Hub',
    title: 'How to Run a Profitable Faceless YouTube Channel on Storytelling',
    excerpt: 'No camera. No face. Just stories — and a monetization model that compounds over time.',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1723723467478-eb4667116137?w=800&h=500&fit=crop&auto=format',
  },
  {
    category: 'AI for Creators',
    title: 'Using AI as a Co-Writer Without Losing Your Voice',
    excerpt: 'A practical guide to integrating AI tools into your creative process while keeping your authorship intact.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1625178441341-df18b7a52402?w=800&h=500&fit=crop&auto=format',
  },
]

const testimonials = [
  {
    quote: "The Ink City changed how I think about storytelling. I went from random posts to a consistent, monetized YouTube channel in three months.",
    name: 'Amara D.',
    role: 'Creator & YouTuber, Lagos',
  },
  {
    quote: "I found my voice here. The resources, the stories, the community — everything reinforced that my stories deserve to be told.",
    name: 'Kwame A.',
    role: 'Fiction Writer, Accra',
  },
]

export default function Home({ setPage }: HomeProps) {
  const [email, setEmail] = useState('')
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const featuredStories = stories.filter((s) => s.featured)

  return (
    <div className="bg-cream">
      {/* ──────────────── HERO ──────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1676278746065-487aa8848410?w=1800&h=1200&fit=crop&auto=format)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/50 to-navy" />
        {/* Gold vertical accent */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-8 animate-fade-in">
            Digital Storytelling Platform
          </p>
          <h1 className="font-serif text-cream text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8 animate-fade-up">
            Where Every
            <br />
            <em className="text-gold not-italic">Story</em> Begins
          </h1>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up delay-200">
            Discover compelling stories. Master the craft of storytelling. Build your creative platform.
            Welcome to The Ink City.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
            <button
              onClick={() => setPage('stories')}
              className="bg-gold text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:bg-gold-light transition-colors duration-200 w-full sm:w-auto"
            >
              Explore Stories
            </button>
            <button
              onClick={() => setPage('creator-hub')}
              className="border border-cream/30 text-cream text-sm font-semibold px-8 py-4 rounded-sm hover:border-cream/60 hover:bg-white/5 transition-all duration-200 w-full sm:w-auto"
            >
              Start Creating
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
          <p className="text-cream/30 text-xs tracking-widest uppercase">Scroll</p>
          <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </section>

      {/* ──────────────── WHERE STORIES MEET CREATIVITY ──────────────── */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-5 gold-line-center">
              Our Vision
            </p>
            <h2 className="font-serif text-navy text-4xl md:text-6xl font-bold leading-tight mb-8">
              Where Stories Meet Creativity
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed">
              The Ink City is more than a reading platform. It's a creative universe where you discover great stories,
              learn the art and craft of storytelling, and build a creative practice that earns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: '◉',
                title: 'Discover',
                body: 'Immerse yourself in original stories across genres — from cinematic adventure to intimate drama. Curated for quality, not quantity.',
              },
              {
                icon: '◈',
                title: 'Experience',
                body: 'Every story on The Ink City is crafted with intention. We believe in storytelling that moves you, challenges you, and stays with you.',
              },
              {
                icon: '✦',
                title: 'Create',
                body: 'From free resources to a full Creator Hub, we give you the tools, frameworks, and community to tell your own stories to the world.',
              },
            ].map((col) => (
              <div key={col.title} className="group">
                <div className="text-gold text-3xl mb-6">{col.icon}</div>
                <h3 className="font-serif text-navy text-2xl font-semibold mb-4 gold-line">{col.title}</h3>
                <p className="text-navy/60 leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── FEATURED STORIES ──────────────── */}
      <section className="bg-navy py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Featured</p>
              <h2 className="font-serif text-cream text-4xl md:text-5xl font-bold">Stories Worth Reading</h2>
            </div>
            <button
              onClick={() => setPage('stories')}
              className="text-cream/60 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
            >
              View All Stories
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <div key={story.id} className="story-card group cursor-pointer">
                <div className="overflow-hidden rounded-sm bg-navy-mid aspect-[3/4] mb-6">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="story-card-img w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gold text-xs font-semibold tracking-widest uppercase">{story.category}</span>
                    <span className="text-cream/40 text-xs">{story.readTime}</span>
                  </div>
                  <h3 className="font-serif text-cream text-xl font-semibold mb-3 group-hover:text-gold-light transition-colors duration-200">
                    {story.title}
                  </h3>
                  <p className="text-cream/55 text-sm leading-relaxed mb-5">{story.description}</p>
                  <button className="text-gold text-xs font-semibold tracking-wide uppercase flex items-center gap-2 group/btn hover:gap-3 transition-all duration-200">
                    Read Story
                    <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── STORY CATEGORIES ──────────────── */}
      <section className="bg-cream-dark py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Browse by Genre</p>
            <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold">Story Categories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setPage('stories')}
                className="bg-cream-dark hover:bg-navy group p-10 text-left transition-colors duration-300"
              >
                <div className="font-serif text-6xl font-bold text-navy/10 group-hover:text-cream/10 mb-4 transition-colors duration-300 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-navy group-hover:text-cream text-xl font-semibold mb-2 transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-gold text-xs tracking-wide mb-3">{cat.count}</p>
                <p className="text-navy/55 group-hover:text-cream/55 text-sm leading-relaxed transition-colors duration-300">
                  {cat.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CREATOR HUB PREVIEW ──────────────── */}
      <section className="relative bg-navy py-28 lg:py-36 overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1723723467478-eb4667116137?w=1200&h=900&fit=crop&auto=format)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">For Creators</p>
            <h2 className="font-serif text-cream text-4xl md:text-5xl font-bold mb-6">
              The Creator Hub
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed">
              Turn your storytelling passion into a creative platform. Learn the skills, tools, and strategies
              that real creators use to build audiences and income.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: '▶', title: 'Faceless YouTube', body: 'Build a story-driven channel without ever appearing on camera.' },
              { icon: '✏', title: 'Storytelling & Scriptwriting', body: 'Master narrative structure, voice, and the craft of compelling scripts.' },
              { icon: '◈', title: 'Video Creation', body: 'Production techniques, tools, and workflows for solo creators.' },
              { icon: '✦', title: 'AI for Creators', body: 'Integrate AI tools into your creative process without losing your voice.' },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="border border-white/10 p-6 hover:border-gold/40 hover:bg-white/3 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-gold text-xl mb-4">{pillar.icon}</div>
                <h3 className="font-serif text-cream text-lg font-semibold mb-3 group-hover:text-gold-light transition-colors duration-200">
                  {pillar.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setPage('creator-hub')}
            className="bg-gold text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:bg-gold-light transition-colors duration-200"
          >
            Explore the Creator Hub
          </button>
        </div>
      </section>

      {/* ──────────────── FROM IDEA TO STORY ──────────────── */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">The Journey</p>
            <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold">From Idea to Story</h2>
          </div>

          {/* Desktop: horizontal flow */}
          <div className="hidden lg:flex items-start gap-0 relative">
            <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            {journeySteps.map((step, i) => (
              <div key={step.step} className="flex-1 flex flex-col items-center text-center px-4">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-navy flex items-center justify-center rounded-full border-2 border-gold">
                    <span className="font-serif text-gold text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <p className="font-sans text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">{step.label}</p>
                <p className="text-navy/60 text-sm leading-relaxed">{step.description}</p>
                {i < journeySteps.length - 1 && (
                  <div className="absolute" style={{ display: 'none' }} />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="lg:hidden flex flex-col gap-0 relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            {journeySteps.map((step) => (
              <div key={step.step} className="flex gap-8 items-start pb-12 last:pb-0">
                <div className="w-16 h-16 bg-navy flex items-center justify-center rounded-full border-2 border-gold flex-shrink-0 relative z-10">
                  <span className="font-serif text-gold text-lg font-bold">{step.step}</span>
                </div>
                <div className="pt-3">
                  <p className="font-sans text-gold text-xs font-bold tracking-[0.3em] uppercase mb-2">{step.label}</p>
                  <p className="text-navy/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── FREE RESOURCES ──────────────── */}
      <section className="bg-navy-light py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Free for You</p>
              <h2 className="font-serif text-cream text-4xl md:text-5xl font-bold">Free Resources</h2>
            </div>
            <button
              onClick={() => setPage('resources')}
              className="text-cream/60 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
            >
              View All Resources
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((r) => (
              <div
                key={r.id}
                className="bg-navy border border-white/10 p-8 hover:border-gold/30 hover:bg-navy-mid transition-all duration-300 group cursor-pointer"
              >
                <div className="text-gold text-3xl mb-6">{r.icon}</div>
                <span className="text-xs font-semibold tracking-widest uppercase text-gold/60 mb-3 block">{r.format}</span>
                <h3 className="font-serif text-cream text-lg font-semibold mb-3 group-hover:text-gold-light transition-colors duration-200">
                  {r.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed mb-6">{r.description}</p>
                <button className="text-gold text-xs font-semibold tracking-wide uppercase flex items-center gap-2 hover:gap-3 transition-all duration-200">
                  Download Free
                  <span>↓</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CREATOR ARTICLES ──────────────── */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">From the Blog</p>
            <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold">Creator Articles</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden bg-cream-dark aspect-video mb-6 rounded-sm">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-3 block">{a.category}</span>
                <h3 className="font-serif text-navy text-xl font-semibold mb-3 group-hover:text-navy/70 transition-colors duration-200 leading-tight">
                  {a.title}
                </h3>
                <p className="text-navy/55 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-navy/40 text-xs">{a.readTime}</span>
                  <button className="text-gold text-xs font-semibold tracking-wide uppercase flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200">
                    Read
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── FEATURED PRODUCTS ──────────────── */}
      <section className="bg-navy-mid py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">The Shop</p>
              <h2 className="font-serif text-cream text-4xl md:text-5xl font-bold">Featured Products</h2>
            </div>
            <button
              onClick={() => setPage('shop')}
              className="text-cream/60 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
            >
              View All Products
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((p) => (
              <div key={p.id} className="group bg-navy border border-white/10 hover:border-gold/30 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden aspect-square bg-navy-light">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 tracking-wide uppercase">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-gold/70 text-xs font-semibold tracking-widest uppercase mb-2 block">{p.category}</span>
                  <h3 className="font-serif text-cream text-lg font-semibold mb-2 group-hover:text-gold-light transition-colors duration-200 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed mb-5">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-gold text-2xl font-bold">{p.price}</span>
                    <button className="bg-gold text-navy text-xs font-bold px-4 py-2.5 hover:bg-gold-light transition-colors duration-200 tracking-wide uppercase rounded-sm">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── LOVE STORIES? CREATE THEM. ──────────────── */}
      <section className="bg-gold py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-navy text-5xl md:text-7xl font-bold leading-tight mb-8">
            Love Stories?<br />Create Them.
          </h2>
          <p className="text-navy/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            The Ink City gives you everything you need to go from reader to creator —
            resources, community, courses, and tools built for the storytelling generation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setPage('creator-hub')}
              className="bg-navy text-cream text-sm font-semibold px-8 py-4 rounded-sm hover:bg-navy-mid transition-colors duration-200 w-full sm:w-auto"
            >
              Join the Creator Hub
            </button>
            <button
              onClick={() => setPage('resources')}
              className="border border-navy/30 text-navy text-sm font-semibold px-8 py-4 rounded-sm hover:bg-navy/10 transition-all duration-200 w-full sm:w-auto"
            >
              Get Free Resources
            </button>
          </div>
        </div>
      </section>

      {/* ──────────────── COMMUNITY ──────────────── */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Community</p>
              <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold mb-8 leading-tight">
                A Global Community of Storytellers
              </h2>

              <div className="grid grid-cols-3 gap-8 mb-12">
                {[
                  { stat: '12K+', label: 'Readers' },
                  { stat: '3.4K', label: 'Creators' },
                  { stat: '48', label: 'Countries' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-navy text-4xl font-bold mb-1">{s.stat}</p>
                    <p className="text-navy/50 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-navy/60 leading-relaxed max-w-md">
                From Lagos to London, Nairobi to New York — The Ink City community spans the globe.
                We're united by one thing: the belief that stories matter.
              </p>
            </div>

            <div className="relative">
              <div className="bg-navy p-10 relative">
                <div className="text-gold text-5xl font-serif mb-6">"</div>
                <p className="font-serif text-cream text-xl md:text-2xl leading-relaxed mb-8 italic">
                  {testimonials[testimonialIndex].quote}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cream font-semibold text-sm">{testimonials[testimonialIndex].name}</p>
                    <p className="text-cream/50 text-xs">{testimonials[testimonialIndex].role}</p>
                  </div>
                  <div className="flex gap-3">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setTestimonialIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          i === testimonialIndex ? 'bg-gold' : 'bg-cream/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/20" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── NEWSLETTER ──────────────── */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-5">Stay in the Story</p>
          <h2 className="font-serif text-cream text-4xl md:text-5xl font-bold mb-6">The Ink Letter</h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-10">
            Original stories, creator tools, writing prompts, and platform updates —
            delivered to your inbox every week. Free, always.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail('') }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-white/5 border border-white/15 text-cream text-sm px-5 py-4 placeholder-cream/30 rounded-sm"
            />
            <button
              type="submit"
              className="bg-gold text-navy text-sm font-semibold px-6 py-4 rounded-sm hover:bg-gold-light transition-colors duration-200 whitespace-nowrap"
            >
              Join for Free
            </button>
          </form>
          <p className="text-cream/30 text-xs mt-4">No spam. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* ──────────────── FINAL CTA ──────────────── */}
      <section className="bg-cream-dark py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-navy text-5xl md:text-8xl font-bold leading-none mb-8">
            Your Story<br />
            <em className="text-gold not-italic">Starts Here</em>
          </h2>
          <p className="text-navy/60 text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            Discover. Experience. Get curious. Learn. Create. Join. The Ink City is ready for you.
          </p>
          <button
            onClick={() => setPage('stories')}
            className="bg-navy text-cream text-sm font-semibold px-10 py-5 rounded-sm hover:bg-navy-mid transition-colors duration-200 inline-flex items-center gap-3"
          >
            Enter The Ink City
            <span>→</span>
          </button>
        </div>
      </section>
    </div>
  )
}

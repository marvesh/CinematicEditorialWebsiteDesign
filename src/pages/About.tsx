export default function About() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative bg-navy pt-40 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518478582619-6633d0e36cf8?w=1600&h=900&fit=crop&auto=format)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 to-navy" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-5">Our Story</p>
          <h1 className="font-serif text-cream text-5xl md:text-7xl font-bold mb-8 leading-tight">
            About The Ink City
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed max-w-3xl mx-auto">
            "Discover Stories. Learn Storytelling. Create Your Own." — This is not just a tagline.
            It's the architecture of everything we build.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Mission</p>
              <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold mb-8 gold-line">
                Stories Are Infrastructure
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed mb-6">
                We believe storytelling is one of the most powerful forces in human culture — and that
                too many voices are still unheard. The Ink City was built to change that.
              </p>
              <p className="text-navy/60 leading-relaxed mb-6">
                We started with a simple conviction: that great stories deserve great platforms,
                and that the tools of storytelling should be available to everyone — not just those
                in traditional media.
              </p>
              <p className="text-navy/60 leading-relaxed">
                From original fiction to creator education to digital products, every part of The Ink City
                is designed to help you discover, experience, and create stories that matter.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-cream-dark">
                <img
                  src="https://images.unsplash.com/photo-1713845784497-fe3d7ed176d8?w=800&h=1000&fit=crop&auto=format"
                  alt="The Ink City vision"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold p-8 w-48">
                <p className="font-serif text-navy text-4xl font-bold">2022</p>
                <p className="text-navy/70 text-sm">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">What We Stand For</p>
            <h2 className="font-serif text-cream text-4xl md:text-5xl font-bold">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '◉',
                title: 'Authenticity First',
                body: 'We value stories that feel real — that carry the weight of genuine human experience, wherever they come from.',
              },
              {
                icon: '✦',
                title: 'Creative Access',
                body: 'The tools of storytelling should not be gatekept. We build resources that put craft in everyone\'s hands.',
              },
              {
                icon: '◈',
                title: 'Quality Over Volume',
                body: 'We publish fewer, better stories. We teach frameworks that last. We build products that are worth the investment.',
              },
              {
                icon: '◇',
                title: 'Cultural Richness',
                body: 'We draw from the depth of global storytelling traditions — especially those that have been underrepresented in mainstream media.',
              },
              {
                icon: '▶',
                title: 'Creator Economy',
                body: 'We believe creators deserve to earn from their work. Every tool and resource we build is designed with monetization in mind.',
              },
              {
                icon: '◉',
                title: 'Community',
                body: 'Stories connect people. The Ink City is built around the belief that a community of storytellers is stronger than any solo creator.',
              },
            ].map((v) => (
              <div key={v.title} className="border border-white/10 p-8 hover:border-gold/30 transition-colors duration-300">
                <div className="text-gold text-2xl mb-5">{v.icon}</div>
                <h3 className="font-serif text-cream text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">The People</p>
            <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold">Behind The Ink City</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                name: 'Chidi Okafor',
                role: 'Founder & Editor-in-Chief',
                image: 'https://images.unsplash.com/photo-1669040084821-097235fe53ff?w=400&h=500&fit=crop&auto=format',
                bio: 'Storyteller, strategist, and the founding voice of The Ink City. Obsessed with the intersection of narrative and technology.',
              },
              {
                name: 'Amara Diallo',
                role: 'Head of Creator Education',
                image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop&auto=format',
                bio: 'Former broadcast journalist turned creator educator. Amara leads our Creator Hub and all educational content.',
              },
              {
                name: 'Nana Adjei',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1628682814595-a3f0816b25ff?w=400&h=500&fit=crop&auto=format',
                bio: 'Visual storyteller and brand designer. Nana shapes the aesthetic language of every corner of The Ink City.',
              },
            ].map((person) => (
              <div key={person.name} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-cream-dark mb-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-navy text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-gold text-xs font-semibold tracking-wide uppercase mb-3">{person.role}</p>
                <p className="text-navy/55 text-sm leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-navy text-4xl md:text-5xl font-bold mb-6">Join the Story</h2>
          <p className="text-navy/70 text-lg mb-8 leading-relaxed">
            Whether you're here to read, to learn, or to create — there's a place for you in The Ink City.
          </p>
          <button className="bg-navy text-cream text-sm font-semibold px-8 py-4 rounded-sm hover:bg-navy-mid transition-colors duration-200">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  )
}

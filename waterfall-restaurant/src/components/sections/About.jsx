import { useScrollReveal } from '@hooks/useScrollReveal'
import SectionLabel from '@components/ui/SectionLabel'
import aboutDay from '@assets/images/ambiance/about-day-waterfall.png'

const USP_CARDS = [
  { emoji: '🌊', title: 'Waterfall Dining', text: 'Sit beside a real cascading waterfall' },
  { emoji: '🔥', title: 'BBQ At Your Table', text: 'Individual grills, cook your own feast' },
  { emoji: '🏊', title: 'Poolside Evenings', text: 'Poolside seating for the perfect evening' },
]

export default function About() {
  const leftColRef  = useScrollReveal({ x: -60, duration: 0.9 })
  const rightColRef = useScrollReveal({ x: 60,  duration: 0.9 })
  const cardsRef    = useScrollReveal({ stagger: 0.15, y: 30 })

  return (
    <section id="about" className="bg-background-dark py-24 relative z-10 overflow-hidden border-y border-primary/10">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={leftColRef}>
            <SectionLabel>OUR STORY</SectionLabel>
            <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              More Than a <span className="text-primary">Restaurant</span>
            </h2>
            <div className="font-body text-stone-400 text-lg leading-relaxed space-y-6 max-w-xl">
              <p>
                Established in 2020 near Medicaps University, The Waterfall Restaurant was born from a vision of bringing nature's tranquility to the culinary heart of Indore.
              </p>
              <p>
                We believe dining should be an immersive experience. Whether it's the mist from the falls on your face or the sizzle of BBQ at your private table, every detail is crafted for memory.
              </p>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {USP_CARDS.map((usp, i) => (
                <div 
                  key={i} 
                  className="bg-stone-900 border border-primary/10 rounded-xl p-6 hover:border-primary/60 hover:shadow-premium group transition-all duration-500 hover:-translate-y-2"
                >
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">
                    {usp.emoji}
                  </span>
                  <h3 className="font-display text-white text-lg font-bold mb-2">
                    {usp.title}
                  </h3>
                  <p className="font-body text-stone-500 text-xs leading-snug">
                    {usp.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightColRef} className="relative group lg:mt-0 mt-12">
            <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-primary/30 transform rotate-1 transition-transform duration-500 group-hover:rotate-0">
              <img
                src={aboutDay}
                alt="Daytime waterfall view with elegant seating"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 mix-blend-screen opacity-90"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Glow effect in gold */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-1 animate-pulse" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

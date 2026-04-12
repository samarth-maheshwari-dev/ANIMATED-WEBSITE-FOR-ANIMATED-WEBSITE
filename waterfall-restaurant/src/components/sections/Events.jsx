import { EVENTS } from '@data/eventsData'
import EventCard from '@components/ui/EventCard'
import SectionLabel from '@components/ui/SectionLabel'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function Events() {
  const sectionRef = useScrollReveal({ stagger: 0.12, y: 50 })

  return (
    <section id="events" className="bg-background-dark py-24 relative z-10 overflow-hidden scroll-reveal">
      <div className="section-container">
        <div className="text-center mb-16 px-4">
          <SectionLabel>PRIVATE MOMENTS</SectionLabel>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
            Events & Special <span className="text-primary">Dining</span>
          </h2>
        </div>

        {/* 3-col Grid */}
        <div 
          ref={sectionRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {/* Floating Bubble background decoration */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  )
}

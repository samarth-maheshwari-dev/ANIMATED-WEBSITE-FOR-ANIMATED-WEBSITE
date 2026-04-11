import { WHATSAPP_NUMBER } from '@data/eventsData'
import aboutDay from '@assets/images/ambiance/about-day-waterfall.png'

export default function EventCard({ event }) {
  // Use specific event image if provided, else use day waterfall for Poolside (id: 3)
  const bgImage = event.image || (event.id === 3 ? aboutDay : null)
  
  return (
    <div className="relative group overflow-hidden rounded-2xl min-h-[420px] border border-primary/10 hover:border-primary/40 transition-all duration-400 ease-out cursor-default shadow-lg">
      {/* Background Layer */}
      {bgImage ? (
        <img 
          src={bgImage} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:opacity-80"
          loading="lazy"
          decoding="async"
          width={600}
          height={800}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-background-dark to-background-dark" />
      )}

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity" />

      {/* Content Block */}
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end transform group-hover:-translate-y-2 transition-transform duration-500 will-change-transform">
        <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300 origin-left" aria-hidden="true">
          {event.emoji}
        </span>
        <h3 className="font-display text-white text-2xl font-bold mb-1">
          {event.title}
        </h3>
        <p className="font-accent italic text-primary text-lg mb-3">
          {event.subtitle}
        </p>
        <p className="font-body text-stone-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
          {event.description}
        </p>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(event.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full shadow-none transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
          aria-label={`Book ${event.title} via WhatsApp`}
        >
          WhatsApp to Book
        </a>
      </div>

      {/* Gold Glow Hover */}
      <div className="absolute inset-0 glow-gold opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
    </div>
  )
}

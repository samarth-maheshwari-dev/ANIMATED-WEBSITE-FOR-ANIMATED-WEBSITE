import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react'
import { WHATSAPP_BASE, WHATSAPP_NUMBER } from '@data/eventsData'
import SectionLabel from '@components/ui/SectionLabel'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function VisitUs() {
  const mapRef = useScrollReveal({ x: -50, duration: 0.9 })
  const infoRef = useScrollReveal({ x: 50, duration: 0.9 })
  const rowsRef = useScrollReveal({ y: 20, stagger: 0.1, duration: 0.6 })

  return (
    <section id="visit" className="bg-background-dark py-24 relative z-10 overflow-hidden border-t border-primary/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <SectionLabel>FIND US</SectionLabel>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
            Visit the <span className="text-primary">Waterfall</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Map Embed Column */}
          <div ref={mapRef} className="rounded-3xl overflow-hidden shadow-premium border border-primary/20 aspect-[4/3] relative scroll-reveal">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14732.133742407545!2d75.811808!3d22.6105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f96e1aaa360d%3A0xeaaa6810c9c77e38!2sThe%20Waterfall%20Restaurant!5e0!3m2!1sen!2sin!4v1712836200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Waterfall Restaurant — Caps Town, Indore"
              className="absolute inset-0"
            />
          </div>

          {/* Contact Info Column */}
          <div ref={infoRef} className="bg-stone-900 rounded-3xl p-8 shadow-premium border border-primary/10 h-full scroll-reveal">
            <div ref={rowsRef}>
              {/* Address */}
              <div className="flex items-start gap-5 py-6 border-b border-primary/5">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-display text-white text-lg font-bold mb-1">Address</h4>
                  <p className="font-body text-stone-500 text-sm leading-relaxed">
                    Near MITM College / Medicaps University,<br />
                    Caps Town, Indore - 453331
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5 py-6 border-b border-primary/5">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-display text-white text-lg font-bold mb-1">Hours</h4>
                  <p className="font-body text-stone-500 text-sm leading-relaxed">
                    11:00 AM – 11:30 PM • Open 7 days
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-5 py-6">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-display text-white text-lg font-bold mb-1">Booking Info</h4>
                  <p className="font-body text-stone-500 text-sm leading-relaxed">
                    Call: <a href="tel:+917000359623" className="text-primary font-bold hover:underline transition-all">070003 59623</a>
                  </p>
                  <p className="font-body text-stone-500 text-sm leading-relaxed mt-1">
                    WhatsApp: <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline transition-all uppercase tracking-widest text-[10px]">Chat with us</a>
                  </p>
                </div>
              </div>

{/* Directions Button */}
              <div className="mt-8">
                <a 
                  href="https://maps.app.goo.gl/VczJa7w8w9cDe6fFA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-3 group py-4 h-auto shadow-lg shadow-primary/10"
                >
                  <Navigation size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span className="uppercase tracking-[0.2em] text-xs font-bold">Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

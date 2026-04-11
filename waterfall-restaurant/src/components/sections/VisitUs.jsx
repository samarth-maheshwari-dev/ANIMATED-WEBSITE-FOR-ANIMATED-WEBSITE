import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react'
import { WHATSAPP_BASE, WHATSAPP_NUMBER } from '@data/eventsData'
import SectionLabel from '@components/ui/SectionLabel'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function VisitUs() {
  const mapRef = useScrollReveal({ x: -50, duration: 0.9 })
  const infoRef = useScrollReveal({ x: 50, duration: 0.9 })
  const rowsRef = useScrollReveal({ y: 20, stagger: 0.1, duration: 0.6 })

  return (
    <section id="visit" className="bg-teal-50 py-24 relative z-10 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <SectionLabel>FIND US</SectionLabel>
          <h2 className="font-display text-teal-900 text-4xl md:text-5xl font-bold">
            Visit the <span className="text-teal-600">Waterfall</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Embed Column */}
          <div ref={mapRef} className="rounded-3xl overflow-hidden shadow-premium border-2 border-teal-200 aspect-[4/3] relative">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.02324683!2d75.8118080!3d22.6105151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f96e55555555%3A0x1a1a1a1a1a1a1a1a!2sThe%20Waterfall%20Restaurant!5e0!3m2!1sen!2sin!4v1712836200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Waterfall Restaurant — Caps Town, Indore"
              className="absolute inset-0"
            />
          </div>

          {/* Contact Info Column */}
          <div ref={infoRef} className="bg-white rounded-3xl p-8 shadow-premium border border-teal-100 h-full">
            <div ref={rowsRef}>
              {/* Address */}
              <div className="flex items-start gap-5 py-6 border-b border-teal-50">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display text-teal-900 font-bold mb-1">Address</h4>
                  <p className="font-body text-stone-500 text-sm leading-relaxed">
                    Near MITM College / Medicaps University,<br />
                    Caps Town, Indore - 453331
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5 py-6 border-b border-teal-50">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-display text-teal-900 font-bold mb-1">Hours</h4>
                  <p className="font-body text-stone-500 text-sm leading-relaxed">
                    11:00 AM – 11:30 PM • Open 7 days
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-5 py-6">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display text-teal-900 font-bold mb-1">Booking Info</h4>
                  <p className="font-body text-stone-500 text-sm leading-relaxed">
                    Call: <a href="tel:+917000359623" className="text-teal-600 font-semibold hover:underline">070003 59623</a>
                  </p>
                  <p className="font-body text-stone-500 text-sm leading-relaxed mt-1">
                    WhatsApp: <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">Chat with us</a>
                  </p>
                </div>
              </div>

              {/* Directions Button */}
              <div className="mt-8">
                <a 
                  href="https://maps.app.goo.gl/uX7R9Z5Z5z5z5z5z5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center gap-2 group"
                >
                  <Navigation size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Instagram, MessageCircle } from 'lucide-react'
import { WHATSAPP_BASE } from '@data/eventsData'

const QUICK_LINKS = [
  { name: 'Home',    href: '#home'    },
  { name: 'About',   href: '#about'   },
  { name: 'Menu',    href: '#menu'    },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events',  href: '#events'  },
  { name: 'Contact', href: '#visit'   },
]

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-primary/10 py-16 relative z-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4 lg:col-span-5">
            <h2 className="font-display font-bold text-white text-3xl mb-4 tracking-tight">
              THE <span className="text-primary">WATERFALL</span>
            </h2>
            <p className="font-body text-stone-500 text-sm max-w-sm leading-relaxed mb-8">
              Indore's most immersive dining experience. Where every meal is a celebration, 
              framed by nature and the soothing rhythm of cascading falls.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark hover:border-primary transition-all duration-500 shadow-lg shadow-primary/5"
              >
                <Instagram size={24} />
              </a>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark hover:border-primary transition-all duration-500 shadow-lg shadow-primary/5"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="font-display text-white text-md font-bold mb-8 uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-stone-500 hover:text-primary text-sm transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-display text-white text-md font-bold mb-8 uppercase tracking-widest">
              Location
            </h3>
            <p className="font-body text-stone-500 text-sm leading-relaxed">
              Near MITM College / Medicaps University,<br />
              Caps Town, Indore - 453331<br />
              <span className="block mt-6 text-primary font-bold border-l-2 border-primary pl-4 tracking-widest text-xs uppercase">
                11:00 AM – 11:30 PM • Open 7 Days
              </span>
            </p>
          </div>
        </div>

        <div className="border-t border-primary/5 mt-16 pt-8 text-center text-stone-600 text-[10px] uppercase tracking-[0.2em]">
          © 2025 The Waterfall Restaurant • Indore. Crafted for Memories.
        </div>
      </div>
    </footer>
  )
}

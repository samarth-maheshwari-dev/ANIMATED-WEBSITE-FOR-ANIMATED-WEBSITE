import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu as MenuIcon, X } from 'lucide-react'
import { WHATSAPP_BASE } from '@data/eventsData'

const NAV_LINKS = [
  { name: 'Home',    href: '#home'    },
  { name: 'About',   href: '#about'   },
  { name: 'Menu',    href: '#menu'    },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events',  href: '#events'  },
  { name: 'Contact', href: '#visit'   },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-background-dark/95 backdrop-blur-md border-b border-primary/20 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary/90 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors shadow-lg shadow-primary/20">
            <span className="font-display text-background-dark group-hover:scale-110 transition-transform text-2xl font-bold">W</span>
          </div>
          <span className={`font-display font-semibold text-xl tracking-tight transition-colors ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            THE <span className="text-primary">WATERFALL</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`font-body text-xs uppercase tracking-widest font-medium hover:text-primary transition-all duration-300 ${
                isScrolled ? 'text-stone-300' : 'text-stone-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary scale-90 py-2.5 shadow-none hover:shadow-primary/40"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background-dark border-b border-primary/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-lg text-stone-300 hover:text-primary transition-colors uppercase tracking-widest text-sm"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

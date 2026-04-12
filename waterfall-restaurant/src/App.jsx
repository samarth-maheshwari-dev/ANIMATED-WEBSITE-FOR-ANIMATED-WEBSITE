import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// Layout
import Navbar        from '@components/layout/Navbar'
import Footer        from '@components/layout/Footer'
// Sections
import Hero          from '@components/sections/Hero'
import About         from '@components/sections/About'
import Specialty     from '@components/sections/Specialty'
import Menu          from '@components/sections/Menu'
import Gallery       from '@components/sections/Gallery'
import Events        from '@components/sections/Events'
import Reviews       from '@components/sections/Reviews'
import VisitUs       from '@components/sections/VisitUs'
// Global UI
import WhatsAppButton from '@components/ui/WhatsAppButton'

// Register plugins at module level — not inside useEffect
gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // ── Mobile Detection ──
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    // ── Lenis smooth scroll initialisation ──
    const lenis = isTouchDevice ? null : new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // Sync Lenis with GSAP ticker (only if lenis exists)
    function update(time) {
      if (lenis) lenis.raf(time * 1000)
    }

    if (lenis) {
      gsap.ticker.add(update)
      gsap.ticker.lagSmoothing(0)

      // Sync ScrollTrigger with Lenis
      lenis.on('scroll', () => {
        ScrollTrigger.update()
      })
    }

    // Force ScrollTrigger refresh after initial load to prevent layout jumps
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    // ── Anchor link click handler — works WITH/WITHOUT Lenis ──
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          if (lenis) {
            lenis.scrollTo(target, { offset: -80, duration: 1.5 })
          } else {
            // Fallback to native smooth scroll for mobile
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth'
            })
          }
        }
      }
    }
    document.querySelectorAll('a[href^="#"]').forEach(a =>
      a.addEventListener('click', handleAnchorClick)
    )

    // ── Cleanup ──
    return () => {
      if (lenis) {
        lenis.destroy()
        gsap.ticker.remove(update)
      }
      ScrollTrigger.getAll().forEach(t => t.kill())
      document.querySelectorAll('a[href^="#"]').forEach(a =>
        a.removeEventListener('click', handleAnchorClick)
      )
    }
  }, [])

  return (
    <div className="relative bg-background-dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialty />
        <Menu />
        <Gallery />
        <Events />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

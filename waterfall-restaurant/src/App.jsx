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
    // ── Lenis smooth scroll initialisation ──
    const lenis = new Lenis({
      lerp: 0.8,         // Ultra-responsive, almost native
      duration: 0.5,      // Snaps instantly
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 2.5, // High travel per scroll
    })

    // Sync Lenis with GSAP ticker so ScrollTrigger positions are always correct
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    // ── Anchor link click handler — works WITH Lenis ──
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          lenis.scrollTo(target, { offset: -80 }) // -80px = navbar height clearance
        }
      }
    }
    document.querySelectorAll('a[href^="#"]').forEach(a =>
      a.addEventListener('click', handleAnchorClick)
    )

    // ── Cleanup — prevents memory leaks and duplicate triggers on re-render ──
    return () => {
      lenis.destroy()
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

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVid from '@assets/videos/hero-background.mp4'
import heroNight from '@assets/images/ambiance/hero-night-waterfall.png'
import { WHATSAPP_BASE } from '@data/eventsData'

export default function Hero() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const title = "Dine Where the Water Falls"
  const titleWords = title.split(" ")

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-background-dark"
    >
      {/* Background Video with Parallax */}
      <div ref={bgRef} className="absolute top-[-15%] left-0 w-full h-[130%] gpu-accelerated bg-[#0A0A0A]" style={{ willChange: 'transform' }}>
        <video
          src={heroVid}
          poster={heroNight}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Immediate background color to prevent white flash */}
      <div className="absolute inset-0 bg-[#0A1A1A] -z-10" aria-hidden="true" />

      {/* Hero Content - Critical for LCP */}
      <div className="section-container relative z-20 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="inline-flex items-center gap-2 bg-stone-900/60 border border-primary/20 
                       rounded-full px-4 py-2 text-primary-light text-sm font-body backdrop-blur-sm mb-8"
          >
            <span aria-hidden="true" className="text-primary">✨</span> 
            <span>Luxury Dining · 10,742 Reviews · Established 2020</span>
          </motion.div>

          {/* Headline - IMMEDIATELY visible, no delay */}
          <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] sm:leading-[0.9] mb-6 sm:mb-8">
            {titleWords.map((word, i) => (
              <span
                key={i}
                className="inline-block mr-[0.2em] bg-gradient-to-br from-white via-white to-primary/40 bg-clip-text text-transparent"
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
            className="font-body text-stone-300 text-lg md:text-2xl max-w-2xl mb-10 sm:mb-12 leading-relaxed opacity-90"
          >
            Indore's most immersive dining experience. Tables by the waterfall. BBQ at your seat. Memories dipped in gold.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
            className="flex flex-wrap gap-5"
          >
            <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Reserve a Table
            </a>
            <a href="#menu" className="btn-outline">
              Explore Menu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Water Ripple - Now in Gold */}
      <div className="absolute bottom-10 right-10 z-20 pointer-events-none animate-float hidden lg:block" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20 text-primary">
          <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="60" cy="60" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent pointer-events-none" />
    </section>
  )
}

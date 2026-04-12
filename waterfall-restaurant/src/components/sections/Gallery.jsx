import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { GALLERY_ITEMS } from '@data/galleryData'
import SectionLabel from '@components/ui/SectionLabel'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const revealRef = useScrollReveal({ stagger: 0.08, y: 30 })

  // Build slides array from real-image items only
  const lightboxSlides = GALLERY_ITEMS
    .filter(item => item.src !== null)
    .map(item => ({ src: item.src, alt: item.alt }))

  // Map real item index to lightbox slide index
  const getLightboxIndex = (itemId) => {
    const realItems = GALLERY_ITEMS.filter(i => i.src !== null)
    return realItems.findIndex(i => i.id === itemId)
  }

  return (
    <section id="gallery" className="bg-background-dark py-24 relative z-10 border-y border-primary/5 scroll-reveal">
      <div className="section-container">
        <div className="text-center mb-16">
          <SectionLabel>OUR AMBIANCE</SectionLabel>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
            The <span className="text-primary">Visual</span> Journey
          </h2>
        </div>

        {/* Masonry Grid */}
        <div 
          ref={revealRef} 
          className="masonry-grid"
        >
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={`masonry-item group relative rounded-2xl overflow-hidden cursor-pointer ${
                item.src === null ? 'pointer-events-none' : ''
              }`}
              onClick={() => {
                if (item.src) {
                  setLightboxIndex(getLightboxIndex(item.id))
                }
              }}
            >
              {item.src ? (
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={item.span === 'large' ? 1200 : 800}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                    <span className="font-accent italic text-primary text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ) : (
                /* Placeholder Item */
                <div 
                  className={`flex flex-col items-center justify-center p-8 bg-stone-900 border border-primary/10 rounded-2xl ${
                    item.span === 'large' ? 'min-h-[400px]' : 'min-h-[250px]'
                  }`}
                  style={{ background: 'linear-gradient(135deg, #161616 0%, #0A0A0A 100%)' }}
                >
                   <span className="font-accent italic text-primary/30 text-lg text-center leading-tight">
                    {item.tag}
                  </span>
                  <p className="font-body text-stone-600 text-[10px] mt-2 uppercase tracking-widest opacity-60 font-bold">
                    In Development
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={lightboxSlides}
          styles={{ container: { backgroundColor: "rgba(10, 10, 10, 0.98)" } }}
        />
      </div>
    </section>
  )
}

import React from 'react'
import { ZoomParallax } from '@components/ui/zoom-parallax'
import { cn } from '@/lib/utils'

export default function Gallery() {

  const images = [
    {
      src: '/sizzler-noodles.png',
      alt: 'Veg Sizzler Noodles',
    },
    {
      src: '/brownie-sizzler.png',
      alt: 'Sizzling Brownie Dessert',
    },
    {
      src: '/paneer-masala.png',
      alt: 'Paneer Masala Curry',
    },
    {
      src: 'https://images.unsplash.com/photo-1546069901-d5d28bbaea1e?w=1280&q=80',
      alt: 'Fresh vegetable stir fry',
    },
    {
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1280&q=80',
      alt: 'Healthy vegetarian salad bowl',
    },
    {
      src: 'https://images.unsplash.com/photo-1626804475297-41609eaaf80e?w=1280&q=80',
      alt: 'Golden crispy corn snack',
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1280&q=80',
      alt: 'Fine restaurant dining setting',
    },
  ];

  return (
    <section id="gallery" className="bg-background-dark min-h-screen w-full relative z-10 border-y border-primary/5">
      <div className="relative flex h-[30vh] md:h-[40vh] items-center justify-center overflow-hidden">
        {/* Radial spotlight effect */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_60%)]',
            'blur-[40px]',
          )}
        />
        <div className="text-center z-10 px-4">
          <p className="font-body text-primary text-xs tracking-widest uppercase mb-4">Our Ambiance</p>
          <h2 className="font-display text-white text-3xl md:text-5xl font-bold">
            Immerse In The <span className="text-primary italic">Experience</span>
          </h2>
        </div>
      </div>
      
      {/* Framer Motion Zoom Parallax */}
      <ZoomParallax images={images} />
      
      {/* Spacing for scroll buffer after parallax */}
      <div className="h-[20vh] bg-background-dark" />
    </section>
  )
}

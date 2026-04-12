// Import real images — Vite resolves these at build time
import heroNight   from '@assets/images/ambiance/hero-night-waterfall.png'
import dayFloat    from '@assets/images/ambiance/about-day-waterfall.png'

// span: 'large' = visually dominant card (taller)
// span: 'small' = regular card
// src: null     = show teal gradient placeholder, no lightbox on click

export const GALLERY_ITEMS = [
  {
    id: 1, src: heroNight, tag: 'Night Ambiance 🌙',
    category: 'ambiance', span: 'large',
    alt: 'The Waterfall Restaurant — illuminated waterfall and poolside dining at night',
  },
  {
    id: 2, src: dayFloat, tag: 'Floating Dining 🏊',
    category: 'experience', span: 'small',
    alt: 'Floating wooden dining tray on the pool at The Waterfall Restaurant, Indore',
  },
  { id: 3, src: null, tag: 'Western Sizzler',    category: 'food', span: 'small', alt: 'Western Sizzler dish' },
  { id: 4, src: null, tag: 'Virgin Mojito',      category: 'food', span: 'small', alt: 'Virgin Mojito beverage' },
  { id: 5, src: null, tag: 'BBQ Experience 🔥',  category: 'ambiance', span: 'large', alt: 'BBQ at table experience' },
  { id: 6, src: null, tag: 'Sizzling Brownie',   category: 'food', span: 'small', alt: 'Sizzling brownie dessert' },
  { id: 7, src: null, tag: 'Poolside Evening',   category: 'ambiance', span: 'small', alt: 'Poolside evening ambiance' },
  { id: 8, src: null, tag: 'Chilli Paneer',      category: 'food', span: 'small', alt: 'Chilli Paneer starter dish' },
]

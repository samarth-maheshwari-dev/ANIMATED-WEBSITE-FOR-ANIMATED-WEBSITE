import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Attaches a GSAP fade-up scroll reveal to the returned ref.
 * Uses only transform and opacity for smooth, jank-free animations.
 *
 * @param {object} opts
 * @param {number}  opts.y        - Start Y offset in px  (default: 24)
 * @param {number}  opts.x       - Start X offset in px (default: 0)
 * @param {number}  opts.duration - Animation duration in s (default: 0.6)
 * @param {number}  opts.stagger  - Child stagger delay in s (default: 0 = no stagger)
 * @param {string}  opts.start    - ScrollTrigger start string (default: 'top 85%')
 * @param {number}  opts.threshold - IntersectionObserver threshold (default: 0.1)
 *
 * @returns {React.RefObject} - Attach to the section or container element
 */
export function useScrollReveal(opts = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If stagger is set, animate children individually; else animate the element itself
    const targets = opts.stagger ? Array.from(el.children) : el

    // gsap.context scopes the animation to this element — safe cleanup
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { 
          y: opts.y ?? 24, 
          x: opts.x ?? 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: opts.duration ?? 0.6,
          stagger: opts.stagger ?? 0,
          ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          scrollTrigger: {
            trigger: el,
            start: opts.start ?? 'top 85%',
            once: true, // plays once only — does NOT replay on scroll-up
            // Using lower threshold to trigger earlier and avoid pop-in jank
          },
        }
      )
    }, el)

    return () => ctx.revert() // Reverts all GSAP animations scoped to this element
  }, []) // Empty deps — intentional. Runs once on mount.

  return ref
}

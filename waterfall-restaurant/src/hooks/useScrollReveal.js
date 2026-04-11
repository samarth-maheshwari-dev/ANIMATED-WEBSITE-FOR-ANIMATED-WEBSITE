import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Attaches a GSAP fade-up scroll reveal to the returned ref.
 *
 * @param {object} opts
 * @param {number}  opts.y        - Start Y offset in px  (default: 40)
 * @param {number}  opts.duration - Animation duration in s (default: 0.8)
 * @param {number}  opts.stagger  - Child stagger delay in s (default: 0 = no stagger)
 * @param {string}  opts.start    - ScrollTrigger start string (default: 'top 85%')
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
        { y: opts.y ?? 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: opts.duration ?? 0.8,
          stagger: opts.stagger ?? 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: opts.start ?? 'top 85%',
            once: true, // plays once only — does NOT replay on scroll-up
          },
        }
      )
    }, el)

    return () => ctx.revert() // Reverts all GSAP animations scoped to this element
  }, []) // Empty deps — intentional. Runs once on mount.

  return ref
}

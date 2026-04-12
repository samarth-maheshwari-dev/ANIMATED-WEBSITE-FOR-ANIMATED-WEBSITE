import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MENU_CATEGORIES, MENU_ITEMS } from '@data/menuData'
import MenuCard from '@components/ui/MenuCard'
import SectionLabel from '@components/ui/SectionLabel'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const sectionRef = useScrollReveal()

  const filteredItems = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory)

  return (
    <section id="menu" ref={sectionRef} className="bg-background-dark py-24 relative z-10 scroll-reveal">
      <div className="section-container">
        <div className="text-center mb-16">
          <SectionLabel>EXPLORE THE MENU</SectionLabel>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
            Curated <span className="text-primary">Delicacies</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-6 mb-8 scrollbar-hide no-scrollbar justify-start md:justify-center">
          {MENU_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-label={`View ${category} menu items`}
              aria-pressed={activeCategory === category}
              className={`whitespace-nowrap px-8 py-3 rounded-full font-body text-xs uppercase tracking-widest font-bold transition-all duration-500 border-2 ${
                activeCategory === category
                  ? 'bg-primary text-background-dark border-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-transparent text-primary/60 border-primary/20 hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Contact CTA */}
        <div className="mt-20 text-center">
          <p className="font-body text-stone-500 text-sm italic">
            * Prices are subject to taxes. Exact prices confirmed during your visit.
          </p>
        </div>
      </div>
    </section>
  )
}

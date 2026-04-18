import { useState } from 'react'
import { CardStack } from '@components/ui/card-stack'
import SectionLabel from '@components/ui/SectionLabel'
import { useScrollReveal } from '@hooks/useScrollReveal'

const curatedItems = [
  {
    id: "butter-chicken",
    title: "Signature Butter Chicken",
    description: "Slow-cooked farm-fresh chicken resting in a velvety rich tomato-cream gravy, finished with fenugreek and butter.",
    tag: "Main Course",
    imageSrc: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "fish-tikka",
    title: "Charcoal Fish Tikka",
    description: "Fresh catch of the day marinated in robust aromatic spices and grilled perfectly to order over glowing coals.",
    tag: "Starters",
    imageSrc: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "crispy-corn",
    title: "Golden Crispy Corn",
    description: "Sweet corn kernels dusted and fried until golden, then tossed with wok-charred peppers, herbs, and spices.",
    tag: "Starters",
    imageSrc: "https://images.unsplash.com/photo-1626804475297-41609eaaf80e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "western-sizzler",
    title: "The Western Sizzler",
    description: "A theatrical smoking iron plate featuring charred grilled chicken, wok-tossed vegetables, and house gravy.",
    tag: "Sizzlers",
    imageSrc: "https://images.unsplash.com/photo-1544025162-811114b30e01?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "chilli-paneer",
    title: "Wok-Tossed Chilli Paneer",
    description: "Crispy paneer cubes tossed in a fiery, sweet, and tangy Indo-Chinese sauce with bell peppers and spring onions.",
    tag: "Starters",
    imageSrc: "https://images.unsplash.com/photo-1551881192-0026245eb0a9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "virgin-mojito",
    title: "Mint Overload Virgin Mojito",
    description: "A highly refreshing blend of muddled fresh mint, lime wedges, and sparkling soda served ice cold.",
    tag: "Beverages",
    imageSrc: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "sizzling-brownie",
    title: "Volcanic Sizzling Brownie",
    description: "A decadent warm dark chocolate brownie topped with cold vanilla ice cream, served on a sizzling hot plate.",
    tag: "Desserts",
    imageSrc: "https://plus.unsplash.com/premium_photo-1678839019688-6628929e71fd?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Menu() {
  const sectionRef = useScrollReveal()

  return (
    <section id="menu" ref={sectionRef} className="bg-background-dark py-24 relative z-10 scroll-reveal">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <SectionLabel>EXPLORE THE MENU</SectionLabel>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold mt-4">
            Curated <span className="text-primary">Delicacies</span>
          </h2>
          <p className="text-stone-500 mt-6 max-w-2xl text-base sm:text-lg mx-auto">
            Swipe through our chefs' hand-picked favorites, featuring the best flavors of the waterfall.
          </p>
        </div>

        {/* Card Stack Menu Presentation */}
        <div className="max-w-4xl mx-auto">
          <CardStack 
            items={curatedItems} 
            loop={true} 
            autoAdvance={true} 
            showDots={true}
          />
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-20 flex flex-col items-center justify-center">
          <button className="mb-6 px-10 py-3 rounded-full border border-primary text-xs font-sans tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-black transition-all duration-500">
            View Full Menu
          </button>
          <p className="font-body text-stone-500 text-sm italic">
            * Prices are subject to taxes. Exact prices confirmed during your visit.
          </p>
        </div>
      </div>
    </section>
  )
}

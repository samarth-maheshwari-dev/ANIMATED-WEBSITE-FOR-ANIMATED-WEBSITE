import React from 'react';
import { motion } from 'framer-motion';
import { GlowingShadow } from '../ui/GlowingShadow';
import SectionLabel from '../ui/SectionLabel';
import { Sparkles, Utensils } from 'lucide-react';

const Specialty = () => {
  return (
    <section className="py-24 bg-background-dark relative overflow-hidden border-t border-primary/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionLabel>Chef's Private Reserve</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
            The Signature <span className="text-primary">Experience</span>
          </h2>
          <p className="text-stone-500 mt-6 max-w-2xl text-lg">
            Reserved for our most discerning guests. An immersive dining concept where 
            flavor meets the art of the waterfall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Midnight BBQ",
              desc: "Live coal grilling at your table by the cascade.",
              icon: <Utensils className="w-8 h-8 text-primary" />,
            },
            {
              title: "Waterfall Mist",
              desc: "Indore's only table-side molecular gastronomy.",
              icon: <Sparkles className="w-8 h-8 text-primary" />,
            },
            {
              title: "Forest Platter",
              desc: "Sourced locally, prepared globally.",
              icon: <Utensils className="w-8 h-8 text-primary" />,
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlowingShadow className="h-full">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="mb-6 p-4 bg-primary/5 rounded-full border border-primary/20 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4 italic">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-8 px-8 py-2.5 rounded-full border border-primary/30 text-[10px] font-sans tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-black transition-all duration-500 cursor-pointer">
                    Book the Reserve
                  </div>
                </div>
              </GlowingShadow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialty;

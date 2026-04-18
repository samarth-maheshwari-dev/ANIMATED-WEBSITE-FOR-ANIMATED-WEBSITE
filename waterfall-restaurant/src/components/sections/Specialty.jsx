import React from 'react';
import { motion } from 'framer-motion';
import { DestinationCard } from '../ui/card-21';
import SectionLabel from '../ui/SectionLabel';
import midnightBBQImg from '../../assets/images/ambiance/Midnight BBQ.png';
import forestPlatterImg from '../../assets/images/ambiance/FOREST PLATTER.png';
import waterfallMistImg from '../../assets/images/ambiance/Waterfall mist.png';

const Specialty = () => {
  return (
    <section className="py-24 bg-background-dark relative overflow-hidden border-t border-primary/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <SectionLabel>Chef's Private Reserve</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-4">
            The Signature <span className="text-primary">Experience</span>
          </h2>
          <p className="text-stone-500 mt-6 max-w-2xl text-base sm:text-lg">
            Reserved for our most discerning guests. An immersive dining concept where 
            flavor meets the art of the waterfall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl mx-auto">
          {[
            {
              title: "Midnight BBQ",
              desc: "Live coal grilling at your table.",
              image: midnightBBQImg,
              flag: "🔥",
              themeColor: "15 80% 40%" // Deep burnt orange/red
            },
            {
              title: "Waterfall Mist",
              desc: "Table-side molecular gastronomy.",
              image: waterfallMistImg,
              flag: "✨",
              themeColor: "210 80% 40%" // Deep blue/cyan
            },
            {
              title: "Forest Platter",
              desc: "Sourced locally, prepared globally.",
              image: forestPlatterImg,
              flag: "🌿",
              themeColor: "150 50% 25%" // Deep rich green
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-full h-[400px] md:h-[450px]"
            >
              <DestinationCard
                imageUrl={item.image}
                location={item.title}
                flag={item.flag}
                stats={item.desc}
                href="#book-table"
                themeColor={item.themeColor} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialty;

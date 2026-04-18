import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Utensils, Flame, Moon, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionLabel from "@/components/ui/SectionLabel";
import { WHATSAPP_BASE } from "@/data/eventsData";

// Assets
const heroImage = "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200"; // Luxury outdoor dining
const waterfallImage = "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1200"; // Waterfall/Nature context

const USP_CARDS = [
  { 
    icon: <Utensils className="w-5 h-5" />, 
    title: 'Waterfall Dining', 
    text: 'Sit beside a real cascading waterfall' 
  },
  { 
    icon: <Flame className="w-5 h-5" />, 
    title: 'BBQ At Your Table', 
    text: 'Individual grills, cook your own feast' 
  },
  { 
    icon: <Moon className="w-5 h-5" />, 
    title: 'Poolside Evenings', 
    text: 'Poolside seating for the perfect evening' 
  },
];

export function PremiumHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="relative w-full bg-[#0A0A0A] overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-1" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-1" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col text-left"
          >
            <motion.div variants={itemVariants}>
                <SectionLabel>OUR STORY</SectionLabel>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              More Than Just<br />
              <span className="text-primary italic">Dining</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-accent text-xl md:text-2xl text-primary/80 mb-8 italic"
            >
              Where Nature Meets Fine Experience
            </motion.p>

            <motion.div
                variants={itemVariants}
                className="font-body text-stone-400 text-lg leading-relaxed max-w-xl space-y-4 mb-10"
            >
                <p>
                    At <span className="text-white font-bold">The Waterfall</span>, every meal is surrounded by the calm of flowing <span className="text-primary">Nature</span> and warm ambient lights.
                </p>
                <p>
                    From private BBQ moments to peaceful poolside evenings, every detail is designed to feel personal, <span className="text-primary italic">cozy</span>, and <span className="text-white font-bold underline decoration-primary/40 underline-offset-4">unforgettable</span>.
                </p>
            </motion.div>

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
                <div className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
                    Since 2020
                </div>
                <div className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <Star className="w-3 h-3 text-primary fill-primary" /> 4.8 Rating
                </div>
            </motion.div>

            {/* USP Grid */}
            <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {USP_CARDS.map((usp, i) => (
                <div 
                  key={i} 
                  className="group relative"
                >
                  <div className="mb-3 text-primary p-3 rounded-xl bg-primary/5 w-fit group-hover:bg-primary group-hover:text-background-dark transition-colors duration-500">
                    {usp.icon}
                  </div>
                  <h3 className="font-display text-white text-md font-bold mb-1">
                    {usp.title}
                  </h3>
                  <p className="font-body text-stone-500 text-[10px] leading-relaxed uppercase tracking-wider">
                    {usp.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-2xl group">
                <img 
                    src={waterfallImage} 
                    alt="The Waterfall Restaurant Ambiance" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Content Badge */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-10 right-10 left-10 md:left-auto md:w-64 bg-background-dark/80 backdrop-blur-xl border border-primary/20 p-6 rounded-2xl shadow-3xl"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                            <Utensils className="w-6 h-6 animate-pulse" />
                        </div>
                        <div>
                            <p className="text-white font-display font-bold text-sm">Ambient Experience</p>
                            <p className="text-stone-500 text-[10px] uppercase tracking-widest mt-1">Open daily • 5PM - 11PM</p>
                        </div>
                    </div>
                </motion.div>

                {/* Decorative gold light bloom on image */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50" />
            </div>

            {/* Overlap background element */}
            <div className="absolute -z-1 top-10 -right-10 w-full h-full border-2 border-primary/10 rounded-[2rem]" />
          </motion.div>

        </div>
      </div>

      {/* Hero CTA Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-600 font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

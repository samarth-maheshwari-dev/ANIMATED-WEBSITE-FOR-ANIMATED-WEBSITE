import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Utensils, Star } from "lucide-react";
import { WHATSAPP_BASE } from '@data/eventsData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative bg-background-dark overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-1 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-primary">
            <Sparkles className="h-4 w-4" />
            Indore's Most Immersive Dining
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-8 text-5xl font-bold tracking-tight md:text-8xl font-display text-white"
        >
          Dine Where the
          <br />
          <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent italic">
            Water Falls
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-2xl text-lg md:text-xl text-stone-400 font-body leading-relaxed"
        >
          Experience a symphony of nature and flavor. Savor premium BBQ and gourmet delicacies 
          beside our cascading waterfalls in the heart of Indore.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gap-2 px-8 py-7 rounded-full text-lg" variant="gold" asChild>
            <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer">
                Reserve a Table
                <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 px-8 py-7 rounded-full text-lg bg-white/5 backdrop-blur-md" asChild>
            <a href="#menu">View Our Menu</a>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center gap-8 md:gap-12 text-sm text-stone-500 font-body"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white font-display">
              Since 2020
            </div>
            <div className="uppercase tracking-widest text-[10px] mt-1">Established</div>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary font-display flex items-center justify-center gap-1">
              4.8 <Star className="w-5 h-5 fill-primary" />
            </div>
            <div className="uppercase tracking-widest text-[10px] mt-1">Google Rating</div>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white font-display uppercase">
              100%
            </div>
            <div className="uppercase tracking-widest text-[10px] mt-1">Pure Veg</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
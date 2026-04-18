import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex min-h-[500px] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <motion.div variants={itemVariants} className="mb-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-stone-400">
          <Sparkles className="h-4 w-4" />
          New Features Available
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mb-6 text-5xl font-bold tracking-tight md:text-7xl text-white"
      >
        Build Amazing
        <br />
        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          User Experiences
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mb-8 max-w-2xl text-lg text-stone-400"
      >
        Create stunning, animated interfaces with our collection of
        production-ready components. Built with React, Framer Motion, and
        TailwindCSS.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4">
        <Button size="lg" className="gap-2">
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          View Demo
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 flex items-center gap-8 text-sm text-stone-500"
      >
        <div>
          <div className="text-2xl font-bold text-white">
            10k+
          </div>
          <div>Downloads</div>
        </div>
        <div className="h-8 w-px bg-stone-800" />
        <div>
          <div className="text-2xl font-bold text-white">50+</div>
          <div>Components</div>
        </div>
        <div className="h-8 w-px bg-stone-800" />
        <div>
          <div className="text-2xl font-bold text-white">
            100%
          </div>
          <div>Open Source</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

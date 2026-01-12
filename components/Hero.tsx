"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-foreground mb-8"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={scrollToExperience}
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
        >
          View Experience
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
}


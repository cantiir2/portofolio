"use client";

import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-accent hover:border-accent/80 transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">
                  {exp.role}
                </h3>
                <h4 className="text-xl text-accent">{exp.company}</h4>
                
                <div className="flex items-center gap-2 text-foreground/70 text-sm mb-4">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>

                {exp.plants ? (
                  <div className="space-y-4">
                    {exp.plants.map((plant, plantIndex) => (
                      <div key={plantIndex} className="space-y-2">
                        <h5 className="text-lg font-semibold text-accent/90">
                          {plant.plant}
                        </h5>
                        <ul className="space-y-2 text-foreground/80 ml-4">
                          {plant.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : exp.description ? (
                  <ul className="space-y-2 text-foreground/80">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


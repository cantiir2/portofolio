"use client";

import { educations } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {educations.map((edu, index) => (
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
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="text-accent" size={20} />
                  <h3 className="text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  {edu.gpa && (
                    <p className="text-foreground/80 italic">GPA: {edu.gpa}</p>
                  )}
                </div>
                
                <h4 className="text-xl text-accent">{edu.institution}</h4>
                
                {edu.field && (
                  <p className="text-foreground/80 italic">{edu.field}</p>
                )}
                
                <div className="flex items-center gap-2 text-foreground/70 text-sm mb-4">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>

                {edu.description && (
                  <ul className="space-y-2 text-foreground/80">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


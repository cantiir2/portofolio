"use client";

import { skills, skillCategories } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  const groupedSkills = skillCategories.map((category) => ({
    category,
    items: skills.filter((skill) => skill.category === category),
  }));

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedSkills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-card text-foreground rounded-md text-sm hover:bg-card-hover transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


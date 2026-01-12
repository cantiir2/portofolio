"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Project</h2>
          <a
            href="#projects"
            className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
          >
            View all →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden hover:bg-card-hover transition-colors group"
            >
              <div className="relative h-48 bg-card-hover overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231f2937' width='400' height='300'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EProject Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background text-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="flex items-center gap-4 pt-2">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  mail: <Mail size={20} />,
  linkedin: <Linkedin size={20} />,
  github: <Github size={20} />,
};

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s Connect
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Open to roles and collaboration
              </h3>
              <p className="text-foreground/80">
                Interested in AI tools, games, and complex platforms? Let&apos;s talk.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-card-hover rounded-lg text-foreground transition-colors"
                >
                  {iconMap[link.icon.toLowerCase()] || <ExternalLink size={20} />}
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-card text-center text-foreground/60 text-sm">
            © {currentYear} {personalInfo.name}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


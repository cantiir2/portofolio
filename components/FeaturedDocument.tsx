"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function FeaturedDocument() {
  return (
    <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-4">
            <FileText size={16} />
            <span>FEATURED DOCUMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Document
          </h2>

          <p className="text-foreground/80 mb-6">
            This section can showcase a featured blog post, case study, or technical document.
            Add your content here or link to external resources.
          </p>

          <div className="bg-card rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Document Title
            </h3>
            <p className="text-foreground/80">
              Add your featured document content here. This could be a case study,
              technical blog post, or any other document you want to highlight.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Download size={16} />
              Download or View Document
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


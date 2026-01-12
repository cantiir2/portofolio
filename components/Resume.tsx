"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Resume
          </h2>

          <p className="text-foreground/80 mb-8">
            Download my resume to learn more about my experience and skills.
          </p>

          <motion.a
            href="/files/CV_Mochamad Alifian Hedardi Kadarusman_2.pdf"
            download="CV_Mochamad_Alifian_Hedardi_Kadarusman.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            <Download size={20} />
            Download Resume (PDF)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


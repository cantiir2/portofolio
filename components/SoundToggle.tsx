"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundManager } from "@/lib/sounds";
import { motion } from "framer-motion";

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    soundManager.init();
    setEnabled(soundManager.isEnabled());
  }, []);

  const toggleSound = () => {
    if (enabled) {
      soundManager.disable();
      setEnabled(false);
    } else {
      soundManager.enable();
      soundManager.init();
      setEnabled(true);
      soundManager.playClick();
    }
  };

  return (
    <motion.button
      onClick={toggleSound}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-lg bg-card hover:bg-card-hover transition-colors text-foreground"
      aria-label={enabled ? "Disable sounds" : "Enable sounds"}
    >
      {enabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </motion.button>
  );
}


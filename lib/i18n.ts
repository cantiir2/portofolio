export type Language = "id" | "en";

export interface Translations {
  nav: {
    about: string;
    projects: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    scrollDown: string;
  };
  projects: {
    title: string;
    viewAll: string;
    live: string;
    code: string;
    switchTo: string;
    startNew: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
  };
  footer: {
    privacy: string;
    legalNotice: string;
    copyright: string;
    musicProducedBy: string;
  };
  skills: {
    title: string;
  };
  education: {
    title: string;
  };
  experience: {
    title: string;
  };
  resume: {
    title: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      about: "Tentang",
      projects: "Proyek",
      contact: "Kontak",
      getInTouch: "Hubungi Saya",
    },
    hero: {
      scrollDown: "Gulir ke bawah",
    },
    projects: {
      title: "Proyek",
      viewAll: "Lihat semua",
      live: "Live",
      code: "Kode",
      switchTo: "Beralih ke proyek",
      startNew: "Mulai proyek baru",
    },
    contact: {
      title: "Mari bekerja bersama!",
      subtitle: "Terbuka untuk peran dan kolaborasi",
      description: "Tertarik dengan AI tools, games, dan platform kompleks? Mari berbicara.",
    },
    footer: {
      privacy: "Privasi",
      legalNotice: "Pemberitahuan Hukum",
      copyright: "© 2026",
      musicProducedBy: "Musik diproduksi oleh",
    },
    skills: {
      title: "Keterampilan",
    },
    education: {
      title: "Pendidikan",
    },
    experience: {
      title: "Pengalaman",
    },
    resume: {
      title: "Resume",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      getInTouch: "Get in touch",
    },
    hero: {
      scrollDown: "Scroll down",
    },
    projects: {
      title: "Projects",
      viewAll: "View all",
      live: "Live",
      code: "Code",
      switchTo: "Switch to project",
      startNew: "Start a new project",
    },
    contact: {
      title: "Let's work together!",
      subtitle: "Open to roles and collaboration",
      description: "Interested in AI tools, games, and complex platforms? Let's talk.",
    },
    footer: {
      privacy: "Privacy",
      legalNotice: "Legal Notice",
      copyright: "© 2026",
      musicProducedBy: "Music produced by",
    },
    skills: {
      title: "Skills",
    },
    education: {
      title: "Education",
    },
    experience: {
      title: "Experience",
    },
    resume: {
      title: "Resume",
    },
  },
};

export const getTranslation = (lang: Language): Translations => {
  return translations[lang];
};


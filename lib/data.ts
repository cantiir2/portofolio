export interface Skill {
  name: string;
  category: string;
}

export interface PlantProject {
  plant: string;
  description: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string[];
  plants?: PlantProject[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  gpa?: string;
  period: string;
  description?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Mochamad Alifian Hedardi Kadarusman",
  title: "Full-Stack & System Engineer",
  bio: "Fullstack Developer with 4+ years of experience building enterprise-grade web and mobile applications for Toyota Motor Manufacturing Indonesia and blockchain startups. Specialized in ASP.NET Core, React.js ecosystem, and Kotlin Android development.",
  email: "mochamadkadarusman@gmail.com",
  domain: "mochamadkadarusman.dev",
};

export const skills: Skill[] = [
  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "ASP.NET Core", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Go", category: "Backend" },
  { name: "TypeScript", category: "Backend" },
  { name: "JavaScript", category: "Backend" },
  
  // Mobile
  { name: "Kotlin", category: "Mobile" },
  { name: "Android", category: "Mobile" },
  
  // Infrastructure
  { name: "Docker", category: "Infrastructure" },
  { name: "Git", category: "Infrastructure" },
  { name: "GitHub", category: "Infrastructure" },
  { name: "GitLab", category: "Infrastructure" },
  
  // Data
  { name: "PostgreSQL", category: "Data" },
  { name: "MySQL", category: "Data" },
  { name: "SQL Server", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "T-SQL", category: "Data" },
  { name: "RESTful APIs", category: "Data" },
  
  // Blockchain
  { name: "Solana", category: "Blockchain" },
  { name: "Smart Contracts", category: "Blockchain" },
  { name: "Web3.js", category: "Blockchain" },
  { name: "DeFi", category: "Blockchain" },
  
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  
  // Tools & Others
  { name: "Twilio", category: "Tools" },
  { name: "WebRTC", category: "Tools" },
  { name: "SEO", category: "Tools" },
  { name: "Google Analytics", category: "Tools" },
  { name: "Unit Testing", category: "Tools" },
  { name: "Nifi", category: "Tools" },
];

export const experiences: Experience[] = [
  {
    company: "PT. Toyota Motor Manufacturing Indonesia",
    role: "Fullstack Developer",
    period: "Jun 2024 - Present",
    plants: [
      {
        plant: "Karawang Plant 1",
        description: [
          "Built Identification Vehicle System with dynamic dashboard, drag-and-drop widget grid, and multi-VIN comparison functionality",
          "Designed role-based access control system with granular permissions for menu, tab, and data-level authorization",
          "Developed advanced vehicle history search with dynamic parameter builder and Sakanobori sequence tracking",
          "Integrated multi-database connection management supporting PostgreSQL, MySQL, SQL Server, Oracle, and FTP/SFTP sources",
          "Created real-time widget configuration system allowing dynamic data visualization (charts, tables, grids, lists) with JSON-based customization",
          "Implemented automated data ingestion pipeline with cron-based scheduling for ETL jobs and file transfer operations",
        ],
      },
      {
        plant: "Karawang Engine Plant",
        description: [
          "Assisted users in recording and categorizing defective items for analysis and traceability",
          "Integrated machine learning output into the web interface to display defect predictions",
          "Developed a responsive UI for defect data entry and classification management",
        ],
      },
      {
        plant: "Karawang Plant 3",
        description: [
          "Developed a mobile application using Kotlin and Google Maps API to visualize truck delivery routes",
          "Created dashboard modules to display total delivered goods in real-time",
          "Implemented delivery list views with dynamic filtering and status updates",
        ],
      },
      {
        plant: "Sunter Plant 1",
        description: [
          "Built a dynamic interface to generate case labels for export packaging",
          "Developed validation logic to ensure export items meet compliance requirements",
          "Refactored program structure for efficient export processing and integration",
        ],
      },
    ],
  },
  {
    company: "Air Pure Flow",
    role: "Web Developer",
    period: "Mei 2025 - August 2025",
    description: [
      "Developed a web static site using Next.js to showcase air delivery system for Air Pure Flow.",
      "Setup SEO and technical optimization for the website.",
      "Twilio VoIP integration for real-time call features across multiple departments",
    ],
  },
  {
    company: "Blue Key Locksmith",
    role: "Web Developer",
    period: "Mei 2025 - August 2025",
    description: [
      "Developed a web static site using Next.js to showcase locksmith services for Blue Key Locksmith.",
      "Setup SEO and technical optimization for the website.",
    ],
  },
  {
    company: "Skull",
    role: "Fullstack Developer",
    period: "Jun 2022 - Aug 2022",
    description: [
      "Built a robust Solana NFT minting automation backend (Node.js, Web3.js) capable of handling mass mint requests efficiently.",
      "Engineered Merkle tree whitelist mechanisms to enable secure and gas-efficient NFT claim processes.",
      "Streamlined NFT smart contract deployment pipelines from backend APIs, enabling seamless user minting flows.",
      "Deployed and maintained scalable REST APIs to provide frontend clients with real-time minting progress and blockchain events.",
    ],
  },
  {
    company: "Poglana",
    role: "Fullstack Developer",
    period: "Jun 2022 - Aug 2022",
    description: [
      "Developed sophisticated data scraping system for Solana blockchain using Node.js and Web3.js",
      "Implemented Merkle tree algorithms for efficient whitelist verification and gas optimization",
      "Built and managed liquidity pool deployment systems for DeFi protocols",
      "Created high-performance REST APIs serving real-time blockchain data to frontend applications",
    ],
  },
  {
    company: "Universitas Gunadarma",
    role: "Technical Assistant & Developer (Part-time)",
    period: "Jan 2022 - Jun 2024",
    description: [
      "Developed comprehensive Lecturer Scheduling system using PHP and MySQL",
      "Automated administrative processes reducing manual work",
      "Managed academic operations including financial processes, certifications, and resource allocation",
    ],
  },
];

export const educations: Education[] = [
  {
    institution: "Universitas Gunadarma",
    degree: "Sarjana (S1)",
    field: "Informatika",
    gpa: "3.68",
    period: "2018 - 2022",
    description: [
      "Lulus dengan fokus pada pengembangan perangkat lunak dan sistem informasi",
      "Aktif dalam pengembangan sistem akademik dan penelitian",
    ],
  },
  {
    institution: "SMK Binakarya Mandiri 1",
    degree: "Teknik Komputer dan Jaringan",
    period: "2015 - 2018",
  },
];

export const projects: Project[] = [
  {
    id: "identification-vehicle-system",
    title: "One Vehicle One ID System",
    description: "Built a dynamic dashboard interface with customizable widget grid system supporting drag-and-drop layout management. Developed comprehensive vehicle profile system with tree-based navigation and multi-VIN comparison functionality. Implemented automated data ingestion pipeline with cron-based scheduling for ETL jobs and file transfer operations.",
    image: "/images/ovoid.png",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "MySQL", "SQL Server", "Oracle", "ETL"],
    links: {},
  },
  {
    id: "defect-management-system",
    title: "Eternity",
    description: "Assisted users in recording and categorizing defective items for analysis and traceability. Integrated machine learning output into the web interface to display defect predictions. Developed a responsive UI for defect data entry and classification management.",
    image: "/images/eternity.png",
    techStack: ["Express.js", "TypeScript", "Machine Learning", "Vue.js", "SQL Server"],
    links: {},
  },
  {
    id: "logistics-mobile-app",
    title: "eManifest",
    description: "Developed a mobile application using Kotlin and Google Maps API to visualize truck delivery routes. Created dashboard modules to display total delivered goods in real-time. Implemented delivery list views with dynamic filtering and status updates.",
    image: "/images/emanifest.png",
    techStack: ["Kotlin", "Android", "Google Maps API", "RESTful API", "Real-time Data"],
    links: {live: "https://play.google.com/store/apps/details?id=com.tmmin.emanifest&hl=id"},
  },
  
  {
    id: "export-compliance-system",
    title: "IDCS Integrated Delivery Control System",
    description: "Developed a web application using ASP.NET Core and SQL Server to manage integrated delivery control system for Toyota Motor Manufacturing Indonesia.",
    image: "/images/idcs.png",
    techStack: ["ASP.NET Core", "C#", "SQL Server"],
    links: {},
  },
  {
    id: "export-compliance-system",
    title: "SPEX",
    description: "Built a dynamic interface to generate case labels for export packaging. Developed validation logic to ensure export items meet compliance requirements. Refactored program structure for efficient export processing and integration.",
    image: "/images/spex.png",
    techStack: ["ASP.NET Core", "C#", "SQL Server", "TypeScript", "React"],
    links: {},
  },
  {
    id: "pure-flow-air-duct",
    title: "Pure Flow Air Delivery",
    description: "Developed a web static site using Next.js to showcase air delivery system for Pure Flow Air Duct.",
    image: "/images/pure-flow-air-duct.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {live: "https://pureflowairduct.com"},
  },
  {
    id: "webRTC-pure-flow-air-duct",
    title: "WebRTC Pure Flow Air Delivery",
    description: "Developed a webRTC application using Next.js to enable real-time communication between Pure Flow Air Duct and the user.",
    image: "/images/twilio.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebRTC"],
    links: {},
  },
  {
    id: "blue-key-locksmith",
    title: "Blue Key Locksmith",
    description: "Developed a web static site using Next.js to showcase locksmith services for Blue Key Locksmith.",
    image: "/images/bluekeylocksmith.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {},
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "mail",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mochamad-alifian-hedardi-kadarusman-855944248/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/cantiir2",
    icon: "github",
  },
];

export const skillCategories = ["Backend", "Mobile", "Infrastructure", "Data", "Blockchain", "Frontend", "Tools"];


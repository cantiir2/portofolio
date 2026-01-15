import { NlpManager } from "node-nlp";
import { personalInfo, experiences, projects, socialLinks } from "./data";

let manager: NlpManager | null = null;
let isTrained = false;
let trainingPromise: Promise<void> | null = null;
let fallbackSummaryEn: string | null = null;
let fallbackSummaryId: string | null = null;

function createManager() {
  const nlpManager = new NlpManager({
    languages: ["en", "id"],
    forceNER: true,
  });

  const name = personalInfo.name;
  const title = personalInfo.title;

  // Core portfolio summary used across answers
  const summaryIntroEn = `I am ${name}, a ${title}.`;
  const bio = personalInfo.bio;

  const experienceSummary = experiences
    .map((exp) => {
      let descriptionText = "";
      if (exp.description && exp.description.length > 0) {
        descriptionText = exp.description.join(" ");
      } else if (exp.plants && exp.plants.length > 0) {
        descriptionText = exp.plants
          .map((plant) => `${plant.plant}: ${plant.description.join(" ")}`)
          .join(" | ");
      }
      return `- ${exp.role} at ${exp.company} (${exp.period}): ${descriptionText}`;
    })
    .join("\n");

  const projectsSummary = projects
    .map(
      (proj) =>
        `- ${proj.title}: ${proj.description}. Tech: ${proj.techStack.join(
          ", "
        )}`
    )
    .join("\n");

  const fullContextEn = `${summaryIntroEn}\n\n${bio}\n\nExperience:\n${experienceSummary}\n\nProjects:\n${projectsSummary}`;

  fallbackSummaryEn = `Here is a brief summary of my background and work:\n\n${fullContextEn}`;
  fallbackSummaryId = `Berikut ringkasan singkat tentang latar belakang dan pekerjaan saya:\n\n${fullContextEn}`;

  // Intent: general experience / previous company work
  const experienceAnswerEn = `Here is a summary of what I have built and worked on:\n\n${fullContextEn}`;
  const experienceAnswerId = `Berikut ringkasan pengalaman kerja dan hal yang sudah saya bangun:\n\n${fullContextEn}`;

  nlpManager.addDocument(
    "en",
    "What did you build at your previous company?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "What did you work on in your last role?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "Tell me about your work experience",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "What kind of projects did you do before?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "What have you worked on?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "Tell me about your previous work",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "What did you do in your previous job?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "What were your responsibilities?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "Tell me about your career history",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "What have you accomplished?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "en",
    "Show me your work history",
    "portfolio.experience"
  );
  // Indonesian variants
  nlpManager.addDocument(
    "id",
    "projek apa saja yang anda kerjakan?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "projek apa saja yang kamu kerjakan?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "ceritakan pengalaman kerja kamu",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "pengalaman kerja kamu apa saja?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "apa saja yang sudah kamu bangun di tempat kerja sebelumnya?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "ceritakan pekerjaan kamu sebelumnya",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "apa saja yang pernah kamu kerjakan?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "tanggung jawab kamu apa saja?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "riwayat karir kamu bagaimana?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "apa saja pencapaian kamu?",
    "portfolio.experience"
  );
  nlpManager.addDocument(
    "id",
    "tunjukkan riwayat kerja kamu",
    "portfolio.experience"
  );
  nlpManager.addAnswer("en", "portfolio.experience", experienceAnswerEn);
  nlpManager.addAnswer("id", "portfolio.experience", experienceAnswerId);

  // Intent: projects and portfolio
  const projectsAnswerEn = `Here are some of my key projects:\n\n${projectsSummary}\n\nIf you want, I can go deeper into any specific project or tech stack.`;
  const projectsAnswerId = `Berikut beberapa projek utama yang pernah saya kerjakan:\n\n${projectsSummary}\n\nKalau ingin, saya bisa jelaskan lebih detail tentang projek atau tech stack tertentu.`;

  nlpManager.addDocument(
    "en",
    "Tell me about your projects and experience.",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "What projects have you worked on?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "Show me your portfolio projects",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "What's in your portfolio?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "Show me your portfolio",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "What projects are in your portfolio?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "Tell me about your portfolio",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "What have you built?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "Show me what you've built",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "What are your side projects?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "Tell me about your work",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "What can you show me?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "Show me your work",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "What have you created?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "en",
    "Tell me about your creations",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "projek apa saja yang pernah kamu buat?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "ceritakan projek yang pernah kamu kerjakan",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "projek apa saja di portofolio kamu?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "apa saja yang ada di portofolio kamu?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "tunjukkan portofolio kamu",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "projek apa saja di portofolio?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "ceritakan tentang portofolio kamu",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "apa saja yang sudah kamu buat?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "tunjukkan apa yang sudah kamu buat",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "projek sampingan kamu apa saja?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "ceritakan pekerjaan kamu",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "apa yang bisa kamu tunjukkan?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "tunjukkan pekerjaan kamu",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "apa saja yang sudah kamu ciptakan?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "ceritakan kreasi kamu",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "portofolio kamu berisi apa?",
    "portfolio.projects"
  );
  nlpManager.addDocument(
    "id",
    "projek yang pernah kamu kerjakan apa saja?",
    "portfolio.projects"
  );
  nlpManager.addAnswer("en", "portfolio.projects", projectsAnswerEn);
  nlpManager.addAnswer("id", "portfolio.projects", projectsAnswerId);

  // Intent: preferred problems / domains
  const problemsAnswerEn = `I enjoy working on challenging problems, especially those that involve building real-world products, improving user experience, and solving practical business or operational issues.

I like working across the stack when needed, but always with clean, maintainable, and production-ready code.`;

  const problemsAnswerId = `Saya menyukai tantangan yang berhubungan dengan pembangunan produk nyata, peningkatan user experience, dan penyelesaian masalah bisnis atau operasional.

Saya nyaman bekerja di berbagai bagian stack jika dibutuhkan, dengan fokus pada kode yang rapi, mudah dirawat, dan siap produksi.`;

  nlpManager.addDocument(
    "en",
    "What kind of problems do you like to work on?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "en",
    "What type of challenges are you interested in?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "en",
    "What problems do you enjoy solving?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "id",
    "kamu suka mengerjakan masalah seperti apa?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "id",
    "tantangan seperti apa yang kamu minati?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "id",
    "kamu menikmati menyelesaikan masalah seperti apa?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "en",
    "What do you like to work on?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "en",
    "What interests you?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "en",
    "What are you passionate about?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "en",
    "What motivates you?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "id",
    "kamu suka mengerjakan apa?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "id",
    "apa yang menarik minat kamu?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "id",
    "apa yang membuat kamu semangat?",
    "portfolio.problems"
  );
  nlpManager.addDocument(
    "id",
    "apa yang memotivasi kamu?",
    "portfolio.problems"
  );
  nlpManager.addAnswer("en", "portfolio.problems", problemsAnswerEn);
  nlpManager.addAnswer("id", "portfolio.problems", problemsAnswerId);

  // Intent: technical expertise
  const techStacks = Array.from(
    new Set(projects.flatMap((proj) => proj.techStack))
  ).join(", ");

  const techAnswerEn = `From my recent projects, I have hands-on experience with: ${techStacks}.

Across these technologies, I focus on writing clean, maintainable, and well-tested code, with attention to performance and good architecture.`;

  const techAnswerId = `Dari projek-projek terbaru saya, saya terbiasa bekerja dengan teknologi berikut: ${techStacks}.

Di atas teknologi tersebut, saya fokus menulis kode yang rapi, mudah dirawat, dan siap produksi, dengan perhatian pada performa dan arsitektur yang baik.`;

  nlpManager.addDocument(
    "en",
    "Tell me about your technical expertise.",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What technologies do you use?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What is your tech stack?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What technologies are you familiar with?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What skills do you have?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What are your technical skills?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "Tell me about your skills",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What programming languages do you know?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What tools do you use?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What frameworks do you know?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What are you good at?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "en",
    "What can you do?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "ceritakan kemampuan teknis kamu",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "kamu biasa pakai teknologi apa saja?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "tech stack kamu apa saja?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "teknologi apa saja yang kamu kuasai?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "skill kamu apa saja?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "kemampuan teknis kamu apa saja?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "ceritakan skill kamu",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "bahasa pemrograman apa yang kamu kuasai?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "tools apa saja yang kamu pakai?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "framework apa saja yang kamu tahu?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "kamu jago apa?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "kamu bisa apa?",
    "portfolio.tech"
  );
  nlpManager.addDocument(
    "id",
    "teknologi yang kamu gunakan apa saja?",
    "portfolio.tech"
  );
  nlpManager.addAnswer("en", "portfolio.tech", techAnswerEn);
  nlpManager.addAnswer("id", "portfolio.tech", techAnswerId);

  // Intent: contact information
  const contactInfo = socialLinks
    .map((link) => {
      if (link.name === "Email") {
        return `- ${link.name}: ${personalInfo.email}`;
      }
      return `- ${link.name}: ${link.url}`;
    })
    .join("\n");

  const contactAnswerEn = `You can reach me through:\n\n${contactInfo}\n\nFeel free to connect or reach out if you'd like to discuss opportunities or collaborate!`;
  const contactAnswerId = `Kamu bisa menghubungi saya melalui:\n\n${contactInfo}\n\nJangan ragu untuk terhubung atau menghubungi saya jika ingin berdiskusi tentang peluang atau kolaborasi!`;

  nlpManager.addDocument("en", "How can I contact you?", "portfolio.contact");
  nlpManager.addDocument("en", "What is your contact information?", "portfolio.contact");
  nlpManager.addDocument("en", "How can I reach you?", "portfolio.contact");
  nlpManager.addDocument("en", "What is your email?", "portfolio.contact");
  nlpManager.addDocument("en", "Give me your contact details", "portfolio.contact");
  nlpManager.addDocument("en", "Where can I find you?", "portfolio.contact");
  nlpManager.addDocument("en", "Show me your contact info", "portfolio.contact");
  nlpManager.addDocument("en", "What are your social media?", "portfolio.contact");
  nlpManager.addDocument("en", "How can I get in touch?", "portfolio.contact");
  nlpManager.addDocument("en", "What's your LinkedIn?", "portfolio.contact");
  nlpManager.addDocument("en", "What's your GitHub?", "portfolio.contact");
  nlpManager.addDocument("en", "Can I have your email?", "portfolio.contact");
  nlpManager.addDocument("en", "I want to contact you", "portfolio.contact");
  nlpManager.addDocument("en", "How do I reach out?", "portfolio.contact");
  nlpManager.addDocument("id", "bagaimana cara menghubungi kamu?", "portfolio.contact");
  nlpManager.addDocument("id", "apa informasi kontak kamu?", "portfolio.contact");
  nlpManager.addDocument("id", "apa email kamu?", "portfolio.contact");
  nlpManager.addDocument("id", "berikan detail kontak kamu", "portfolio.contact");
  nlpManager.addDocument("id", "dimana saya bisa menemukan kamu?", "portfolio.contact");
  nlpManager.addDocument("id", "tunjukkan informasi kontak kamu", "portfolio.contact");
  nlpManager.addDocument("id", "apa social media kamu?", "portfolio.contact");
  nlpManager.addDocument("id", "apa LinkedIn kamu?", "portfolio.contact");
  nlpManager.addDocument("id", "apa GitHub kamu?", "portfolio.contact");
  nlpManager.addDocument("id", "bisa kasih email kamu?", "portfolio.contact");
  nlpManager.addDocument("id", "saya ingin menghubungi kamu", "portfolio.contact");
  nlpManager.addDocument("id", "bagaimana cara menghubungi?", "portfolio.contact");
  nlpManager.addDocument("id", "kontak kamu apa?", "portfolio.contact");
  nlpManager.addDocument("id", "cara menghubungi kamu bagaimana?", "portfolio.contact");
  nlpManager.addDocument("id", "email kamu apa?", "portfolio.contact");
  nlpManager.addDocument("id", "link LinkedIn kamu apa?", "portfolio.contact");
  nlpManager.addDocument("id", "link GitHub kamu apa?", "portfolio.contact");
  nlpManager.addDocument("id", "saya mau kontak kamu", "portfolio.contact");
  nlpManager.addDocument("id", "cara kontak kamu bagaimana?", "portfolio.contact");
  nlpManager.addDocument("id", "kontak kamu dimana?", "portfolio.contact");
  nlpManager.addDocument("id", "saya perlu kontak kamu", "portfolio.contact");
  nlpManager.addAnswer("en", "portfolio.contact", contactAnswerEn);
  nlpManager.addAnswer("id", "portfolio.contact", contactAnswerId);

  // Generic greeting / small talk
  nlpManager.addDocument("en", "Hi", "smalltalk.greet");
  nlpManager.addDocument("en", "Hello", "smalltalk.greet");
  nlpManager.addDocument("en", "Hey there", "smalltalk.greet");
  nlpManager.addDocument("id", "halo", "smalltalk.greet");
  nlpManager.addDocument("id", "hai", "smalltalk.greet");
  nlpManager.addDocument("id", "selamat pagi", "smalltalk.greet");
  nlpManager.addDocument("id", "selamat siang", "smalltalk.greet");
  nlpManager.addDocument("id", "selamat malam", "smalltalk.greet");
  nlpManager.addAnswer(
    "en",
    "smalltalk.greet",
    `Hi! I'm the AI assistant for ${name}. You can ask me about experience, projects, and technical skills.`
  );
  nlpManager.addAnswer(
    "id",
    "smalltalk.greet",
    `Halo! Saya asisten AI untuk ${name}. Kamu bisa bertanya tentang pengalaman kerja, projek, dan kemampuan teknis saya.`
  );

  // Fallback helper intent (optional hints)
  nlpManager.addDocument(
    "en",
    "I want to know more",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "en",
    "Tell me more",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "en",
    "What can I ask you?",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "en",
    "What questions can I ask?",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "en",
    "Help me understand",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "en",
    "What should I ask?",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "id",
    "saya ingin tahu lebih banyak",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "id",
    "ceritakan lebih banyak",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "id",
    "apa yang bisa saya tanya?",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "id",
    "pertanyaan apa yang bisa saya ajukan?",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "id",
    "bantu saya memahami",
    "portfolio.more"
  );
  nlpManager.addDocument(
    "id",
    "apa yang harus saya tanya?",
    "portfolio.more"
  );
  nlpManager.addAnswer(
    "en",
    "portfolio.more",
    `You can ask me things like:
- What did you build at your previous company?
- Tell me about your projects and experience.
- What kind of problems do you like to work on?
- Tell me about your technical expertise.`
  );
  nlpManager.addAnswer(
    "id",
    "portfolio.more",
    `Kamu bisa tanya hal-hal seperti:
- Apa yang kamu bangun di perusahaan sebelumnya?
- Ceritakan projek dan pengalaman kerjamu.
- Kamu suka mengerjakan masalah seperti apa?
- Ceritakan kemampuan teknismu.`
  );

  return nlpManager;
}

async function ensureTrained() {
  if (!manager) {
    manager = createManager();
  }

  if (isTrained) return;
  if (trainingPromise) {
    await trainingPromise;
    return;
  }

  trainingPromise = (async () => {
    await manager!.train();
    manager!.save();
    isTrained = true;
  })();

  await trainingPromise;
}

export async function processUserMessage(
  text: string
): Promise<{ message: string }> {
  await ensureTrained();

  // Detect if the input is likely Indonesian (used to bias language choice and fallback)
  const lower = text.toLowerCase();
  const looksIndonesian =
    lower.includes("apa") ||
    lower.includes("yang") ||
    lower.includes("kamu") ||
    lower.includes("anda") ||
    lower.includes("projek") ||
    lower.includes("project") ||
    lower.includes("kerja") ||
    lower.includes("kontak") ||
    lower.includes("hubungi");

  // Process both English and Indonesian, then pick the best match
  const [enResult, idResult] = await Promise.all([
    manager!.process("en", text),
    manager!.process("id", text),
  ]);

  const normalizedEnScore = enResult.score ?? 0;
  const normalizedIdScore = idResult.score ?? 0;

  let bestResult =
    normalizedEnScore >= normalizedIdScore ? enResult : idResult;

  // If the text looks Indonesian and we have any signal from the Indonesian model,
  // prefer the Indonesian result so that intents (including contact) use ID answers.
  if (looksIndonesian && normalizedIdScore > 0) {
    bestResult = idResult;
  }

  const bestScore = bestResult.score ?? 0;
  const answer = (bestResult.answer ?? "").trim();

  const confidenceThreshold = 0.6;

  if (bestScore >= confidenceThreshold && answer) {
    return { message: answer };
  }

  const fallbackBase = looksIndonesian
    ? fallbackSummaryId ?? fallbackSummaryEn
    : fallbackSummaryEn ?? fallbackSummaryId;

  const safeFallback = `${fallbackBase}\n\nYou can also ask / Kamu juga bisa tanya:\n- What did you build at your previous company?\n- Tell me about your projects and experience.\n- What kind of problems do you like to work on?\n- Tell me about your technical expertise.`;

  return { message: safeFallback };
}
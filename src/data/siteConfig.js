export const researchCopyRules = {
  sarManuscript: {
    allowed: [
      "authored research manuscript",
      "research project",
      "manuscript under review",
      "proposed framework",
      "manuscript-reported results",
      "case study based on authored paper",
    ],
    avoid: [
      "published in",
      "accepted at",
      "presented at",
      "peer-reviewed publication",
      "published paper",
    ],
    categoryLabel: "Research Manuscript",
    statusLabel: "Manuscript Under Review",
    authorCredit: "Authored research manuscript by Karan Singh Gurjar",
    manuscriptCtaLabel: "View Manuscript Summary",
    resultsLabel: "Manuscript-reported results",
    manuscriptNote:
      "This project is based on an authored research manuscript that is currently not yet accepted for publication. The portfolio page summarizes the methodology and results from the manuscript version.",
  },
};

export const siteConfig = {
  name: "Karan Singh Gurjar",
  shortName: "Adhana",
  siteUrl: "https://karansinghgurjar.github.io/ksg_portfolio/",
  defaultTitle: "Karan Singh Gurjar | AI/ML Engineer | Full Stack Developer",
  defaultDescription:
    "Portfolio of Karan Singh Gurjar, an AI/ML engineer and full stack developer building intelligent products, research prototypes, and production-grade web systems.",
  keywords: [
    "Karan Singh Gurjar",
    "AI ML Engineer Portfolio",
    "Full Stack Developer Portfolio",
    "Machine Learning Engineer",
    "Research Engineer",
    "React Portfolio",
    "FastAPI Developer",
    "PyTorch Projects",
    "India Software Engineer",
  ],
  githubUrl: "https://github.com/karansinghgurjar",
  linkedinUrl: "https://www.linkedin.com/in/karan-singh-gurjar-052b30197/",
  ogImage: "og-preview.jpg",
  certificateAsset: "etecom2025-certificate.pdf",
  heroEyebrow: "",
  heroRole: "AI/ML Engineer | Full Stack Developer | Research-Oriented Builder",
  heroTagline:
    "Builds intelligent products, research prototypes, and production-grade web systems.",
  heroIntro:
    "Focused on turning machine learning ideas into usable software, from experimental models and audio pipelines to clean frontend experiences and API-backed applications.",
  heroSecondaryIntro:
    "Best suited for teams that need someone comfortable across applied ML, rapid prototyping, and structured product engineering.",
  heroCredibilityChips: [
    "M.Tech CS",
    "AI/ML Projects",
    "Full Stack Web Apps",
    "IEEE Research Work",
    "Open to Full-Time Roles",
  ],
  heroPhotoLabel: "Open to full-time roles",
  heroPhotoSub: "India-based | Available for research and product teams",
  heroStatusLabel: "Availability",
  heroStatusValue: "Open to full-time roles, internships, and research collaborations",
  heroSpecializationsTitle: "Core Specializations",
  heroSpecialties: [
    "Applied machine learning for audio, classification, and intelligent systems",
    "Full stack product development with React, APIs, data workflows, and deployment",
    "Research-driven engineering with model evaluation, experimentation, and clear implementation",
  ],
  heroCurrentTitle: "Currently Building",
  heroCurrentItems: [
    "Authored research manuscript on task-aware SAR-to-RGB translation",
    "Built a transformer-guided conditional diffusion framework for remote sensing image synthesis",
    "Production-minded React interfaces and API-backed product experiences",
  ],
  heroResearchCalloutTitle: "Research Highlight",
  heroResearchCalloutBody:
    "Authored research manuscript on task-aware SAR-to-RGB translation and built a transformer-guided conditional diffusion framework for remote sensing image synthesis.",
  heroMeta: [
    "Bengaluru, Karnataka",
    "Open to full-time roles",
    "AI + Web development",
  ],
  aboutEyebrow: "About / Value Proposition",
  aboutTitle: "An engineer shaped by research, product execution, and hands-on delivery",
  aboutParagraphs: [
    "I am an M.Tech Computer Science student with practical experience across machine learning projects, full stack product work, and research-led engineering. My work sits at the intersection of technical experimentation and implementation discipline, including authored research on task-aware SAR-to-RGB translation for remote sensing.",
    "I enjoy building systems that move from idea to usable outcome, whether that means training and evaluating models, designing interfaces that communicate clearly, or shipping web applications that solve real workflow problems.",
  ],
  valueCards: [
    {
      title: "Research Mindset",
      description:
        "I like understanding the problem before optimizing the solution, with attention to evaluation, limitations, and technical clarity.",
    },
    {
      title: "Product Thinking",
      description:
        "I care about how a user or stakeholder experiences the system, not just whether the code technically works.",
    },
    {
      title: "Implementation Depth",
      description:
        "I am comfortable owning the work across frontend, backend, data handling, and deployment-oriented execution.",
    },
  ],
  email: "karansingha2222@gmail.com",
  location: "Bengaluru, Karnataka",
  resumeUrl: `${import.meta.env.BASE_URL}Karan_Resume-2026.pdf`,
  paperUrl: "https://ieeexplore.ieee.org/document/11319007",
  footerDescription:
    "Full-stack developer focused on building reliable, intuitive experiences across frontend and backend.",
  footerBuiltWith: "Built with React + Tailwind CSS",
  contactEyebrow: "Contact / Opportunities",
  contactTitle: "Open to full-time roles and meaningful technical conversations",
  contactCopy:
    "Available for AI/ML, research, and full stack opportunities. Happy to discuss product work, internships, collaborations, and roles where strong implementation and experimentation both matter.",
  contactReasons: [
    "Open to full-time roles",
    "Available for AI/ML, research, and full stack opportunities",
    "Happy to discuss projects, internships, and collaborations",
  ],
  availabilityLabel: "Availability",
  availabilityValue: "Open to full-time roles, internships, and research collaborations",
  storageKeys: {
    theme: "ksg_theme_preference",
    vlogProjects: "ksg_vlog_projects",
  },
};

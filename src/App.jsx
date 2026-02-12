import { useEffect, useMemo, useState } from "react";

const projects = [
  {
    title: "Real-time Behavioral Biometric Authentication App",
    type: "Android Application",
    description:
      "Android app using keystroke dynamics for real-time user authentication.",
    stack: ["Java", "SQLite", "XML"],
    gridClass: "md:col-span-3",
    highlights: [
      "Designed intuitive UI for registration and authentication.",
      "Built data capture and storage for typing behavior.",
    ],
    links: [],
  },
  {
    title: "Automated Avian Vocalization Classification and Geospatial Visualization",
    type: "Machine Learning Project",
    description:
      "Web-based biodiversity monitoring system that classifies bird species from .wav audio and shows species images plus interactive distribution maps.",
    stack: ["Python", "PyTorch", "ResNet-18", "Librosa", "Flask", "Folium"],
    gridClass: "md:col-span-3 md:row-span-2",
    highlights: [
      "Built tri-modal pipeline using Xeno-Canto audio, Google Images, and eBird/Xeno-Canto geolocation metadata for 1,266 Indian bird species.",
      "Reported results: Top-1 31.99%, Top-5 51.72%, Precision 0.32, Recall 0.30, F1 0.29.",
      "Published in IEEE ETECOM 2025 (DOI: 10.1109/ETECOM66111.2025.11319007).",
    ],
    links: [
      {
        label: "IEEE Paper",
        href: "https://ieeexplore.ieee.org/document/11319007",
      },
      {
        label: "ETECOM Certificate",
        href: `${import.meta.env.BASE_URL}etecom2025-certificate.pdf`,
      },
    ],
  },
  {
    title: "Vault Box Web App",
    type: "Web Application",
    description:
      "Secure web app to store sensitive information with email-based auth.",
    stack: ["React.js", "Next.js", "PostgreSQL", "Supabase", "Vercel"],
    gridClass: "md:col-span-3",
    highlights: ["End-to-end auth and deployed to Vercel."],
    links: [
      {
        label: "Live Demo",
        href: "https://vercel.com/karansingha2222-3708s-projects/v0-vault-box-project",
      },
    ],
  },
];

const skillTags = [
  "Python",
  "Java",
  "JavaScript",
  "React.js",
  "FastAPI",
  "scikit-learn",
  "Librosa",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Git",
  "Docker (basic)",
  "Linux",
];

const skillCloud = [
  { label: "React", icon: "react.png" },
  { label: "JavaScript", icon: "javascript.png" },
  { label: "Tailwind", icon: "tailwind.png" },
  { label: "FastAPI", icon: "fastapi.png" },
  { label: "Python", icon: "python.png" },
  { label: "MongoDB", icon: "mongodb.png" },
  { label: "PostgreSQL", icon: "postgresql.png" },
  { label: "MySQL", icon: "mysql.png" },
  { label: "Docker", icon: "docker.png" },
  { label: "Git", icon: "git.png" },
  { label: "Linux", icon: "linux.png" },
  { label: "PyTorch", icon: "pytorch.png" },
  { label: "TensorFlow", icon: "tensorflow.png" },
];

const highlights = [
  "Full-stack web development internship (6 months).",
  "Published IEEE ETECOM 2025 paper on automated avian vocalization classification and geospatial biodiversity monitoring.",
  "Hackathon participant: MCP 1st Birthday, Hugging Face.",
];

const experience = {
  role: "Full Stack Web Developer - Founding Engineer",
  company: "Indus Pharma India Pvt. Ltd.",
  location: "Neemrana, Rajasthan",
  dates: "Aug 2025 - Jan 2026",
  points: [
    "Built the company's first official website.",
    "Implemented frontend components, backend APIs, and DB integration.",
    "Automated customer inquiry workflows to reduce manual effort.",
  ],
};

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
  const githubIcon = `${import.meta.env.BASE_URL}github.png`;
  const linkedinIcon = `${import.meta.env.BASE_URL}linkedin.png`;

  useEffect(() => {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)");
    setIsDark(prefersDark?.matches ?? false);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
      <header className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6">
        <div className="header-top">
          <a className="brand-link" href="#top">
            <img className="logo-circle" src={logoSrc} alt="Karan Singh Gurjar logo" />
            <span className="brand-mark">KSG</span>
          </a>
          <button
            className="toggle-btn"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle theme"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
        <nav className="nav-pill header-nav">
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#experience">
            Experience
          </a>
          <a className="nav-link" href="#skills">
            My Skills
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <section className="grid items-center gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
              Portfolio 2026
            </p>
            <h1 className="mt-4 text-[clamp(2rem,6vw,3.8rem)] font-bold leading-tight">
              Karan Singh Gurjar
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Junior full-stack developer focused on reliable, intuitive
              experiences across frontend and backend, with a clear path toward
              cross-platform apps, and applied ML systems for biodiversity
              monitoring.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                className="btn-secondary btn-resume"
                href="https://drive.google.com/file/d/1nUrgU3CI-qajX5lH9aHvzdMwXf5WxReg/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a
                className="icon-btn"
                href="https://github.com/karansinghgurjar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="" />
              </a>
              <a
                className="icon-btn"
                href="https://www.linkedin.com/in/karan-singh-gurjar-052b30197/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="" />
              </a>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-500 dark:text-slate-400 md:grid-cols-3">
              <span>Bengaluru, Karnataka</span>
              <span>Open to full-time roles</span>
              <span>AI + Web development</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl border border-white/10 dark:border-white/10" />
            <div className="relative rounded-3xl border border-slate-200/60 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Focus
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Designing secure, scalable, and intelligent systems that bridge
                machine learning research with production-grade engineering. My
                recent work centers on avian vocalization classification with
                interactive geospatial visualization for biodiversity monitoring,
                alongside broader multimodal ML research. I build end-to-end ML
                systems with a strong emphasis on explainability, robust data
                pipelines, and real-world deployment.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span>Frontend: React, motion-rich and accessible UI design</span>
                <span>
                  Backend: FastAPI-based services, API-driven architectures,
                  data preprocessing and inference pipelines
                </span>
                <span>
                  Machine Learning &amp; Research: CNNs, Transformers, diffusion
                  models, task-aware learning, bioacoustics, geospatial
                  visualization, and behavioral biometrics
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Projects</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Biodiversity-focused bioacoustics research, secure systems, and
                product-ready deliverables.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`card ${project.gridClass}`}
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  <span>{project.type}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        className="btn-secondary"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-16">
          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="card">
              <h2 className="text-2xl font-bold md:text-3xl">Experience</h2>
              <div className="mt-6">
                <h3 className="text-lg font-bold">{experience.role}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {experience.company} - {experience.location}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {experience.dates}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {experience.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold">Highlights</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {highlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="skills-shell">
            <div className="skills-copy">
              <h2 className="skills-title">
                My <span className="skills-accent">Skills</span>
              </h2>
              <p className="skills-desc">
                A blend of frontend polish, backend reliability, and ML research
                that translates into production-ready systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skillTags.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  className="btn-secondary"
                  href="https://ieeexplore.ieee.org/document/11319007"
                  target="_blank"
                  rel="noreferrer"
                >
                  IEEE Paper
                </a>
              </div>
            </div>
            <div className="skills-cloud">
              <div className="skills-blob" aria-hidden="true" />
              <div className="skills-cloud-inner">
                {skillCloud.map((skill, index) => {
                  const arcStart = -80;
                  const arcEnd = 80;
                  const step =
                    (arcEnd - arcStart) / Math.max(skillCloud.length - 1, 1);
                  const angle = arcStart + index * step;
                  const iconSrc = `${import.meta.env.BASE_URL}skills/${skill.icon}`;
                  return (
                    <div
                      key={skill.label}
                      className="skill-tile"
                      style={{
                        "--angle": `${angle}deg`,
                        "--delay": `${index * 0.12}s`,
                        "--hue": `${(index * 28) % 360}`,
                      }}
                      title={skill.label}
                    >
                      <div className="skill-chip">
                        <img src={iconSrc} alt={`${skill.label} icon`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="card">
            <h2 className="text-2xl font-bold md:text-3xl">Contact</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Interested in full-stack or ML collaborations? Reach out.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a className="btn-primary" href="mailto:karansingha2222@gmail.com">
                karansingha2222@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-white/10 mt-16">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand & Description */}
            <div>
              <a className="flex items-center gap-3 text-lg font-bold" href="#top">
                <img className="logo-circle" src={logoSrc} alt="Karan Singh Gurjar logo" />
                <span>KSG</span>
              </a>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                Full-stack developer focused on building reliable, intuitive experiences across frontend and backend.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">Quick Links</h4>
              <nav className="mt-4 flex flex-col gap-2 text-sm">
                <a className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition" href="#projects">Projects</a>
                <a className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition" href="#experience">Experience</a>
                <a className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition" href="#skills">Skills</a>
                <a className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition" href="#contact">Contact</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">Get in Touch</h4>
              <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <p className="flex items-center gap-2">
                  <span>📍</span> Bengaluru, Karnataka
                </p>
                <a className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition" href="mailto:karansingha2222@gmail.com">
                  <span>✉️</span> karansingha2222@gmail.com
                </a>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  className="icon-btn"
                  href="https://github.com/karansinghgurjar"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  className="icon-btn"
                  href="https://www.linkedin.com/in/karan-singh-gurjar-052b30197/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row">
            <span>© {year} Karan Singh Gurjar. All rights reserved.</span>
            <span>Built with React + Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

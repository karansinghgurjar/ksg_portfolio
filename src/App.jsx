import { useEffect, useMemo, useState } from "react";

const projects = [
  {
    title: "Real-time Behavioral Biometric Authentication App",
    type: "Android Application",
    metric: "Biometric UX",
    thumbnail: "Behavioral Auth",
    description:
      "Android app using keystroke dynamics for real-time user authentication.",
    stack: ["Java", "SQLite", "XML"],
    gridClass: "md:col-span-3",
    highlights: [
      "Designed intuitive UI for registration and authentication.",
      "Built data capture and storage for typing behavior.",
    ],
    links: {
      live: "",
      code: "",
    },
  },
  {
    title: "Automated Avian Vocalization Classification and Geospatial Visualization",
    type: "Machine Learning Project",
    metric: "53% Accuracy",
    thumbnail: "Bioacoustics ML",
    description:
      "End-to-end ML pipeline to classify bird species from audio recordings, with visual and geospatial context for biodiversity monitoring.",
    stack: ["Python", "PyTorch", "ResNet-18", "Librosa", "Flask", "Folium"],
    gridClass: "md:col-span-3 md:row-span-2",
    highlights: [
      "Performed audio preprocessing and trained a ResNet-18 CNN on 22,000 samples.",
      "Achieved 53% multi-class classification accuracy and analyzed model limitations.",
      "Published and presented at IEEE ETECOM 2025 (AI, ML & Business Analytics track).",
    ],
    links: {
      live: "https://ieeexplore.ieee.org/document/11319007",
      code: "",
    },
  },
  {
    title: "Vault Box Web App",
    type: "Web Application",
    metric: "Deployed App",
    thumbnail: "Secure Vault",
    description:
      "Secure web app to store sensitive information with email-based auth.",
    stack: ["React.js", "Next.js", "PostgreSQL", "Supabase", "Vercel"],
    gridClass: "md:col-span-3",
    highlights: ["End-to-end auth and deployed to Vercel."],
    links: {
      live: "https://vercel.com/karansingha2222-3708s-projects/v0-vault-box-project",
      code: "",
    },
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
  "Docker",
  "Kubernetes",
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
  "Published IEEE ETECOM 2025 Bird Sound Classification paper and presented it (AI, ML & Business Analytics).",
  "Hackathon participant: MCP 1st Birthday (Gradio + Anthropic), Hugging Face.",
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

const THEME_KEY = "ksg_theme_preference";
const VLOG_KEY = "ksg_vlog_projects";
const getRouteFromHash = () => {
  const hash = window.location.hash || "#/";
  if (hash.startsWith("#/vlog/")) {
    return {
      page: "vlogProject",
      projectId: decodeURIComponent(hash.replace("#/vlog/", "").trim()),
    };
  }
  if (hash.startsWith("#/vlog")) return { page: "vlog", projectId: "" };
  if (hash.startsWith("#/projects")) return { page: "projects", projectId: "" };
  return { page: "portfolio", projectId: "" };
};

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);
  const [themeMode, setThemeMode] = useState("system");
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [vlogProjects, setVlogProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [entryTitle, setEntryTitle] = useState("");
  const [entryContent, setEntryContent] = useState("");
  const [entryScreenshots, setEntryScreenshots] = useState([]);
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
  const heroPhotoSrc = `${import.meta.env.BASE_URL}logo.jpg`;
  const githubIcon = `${import.meta.env.BASE_URL}github.png`;
  const linkedinIcon = `${import.meta.env.BASE_URL}linkedin.png`;

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem(VLOG_KEY);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setVlogProjects(parsed);
        if (parsed.length > 0) {
          setSelectedProjectId(parsed[0].id);
        }
      }
    } catch {
      setVlogProjects([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(VLOG_KEY, JSON.stringify(vlogProjects));
  }, [vlogProjects]);

  useEffect(() => {
    const storedPreference = window.localStorage.getItem(THEME_KEY);
    const initialMode =
      storedPreference === "light" || storedPreference === "dark" || storedPreference === "system"
        ? storedPreference
        : "system";
    setThemeMode(initialMode);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mediaQuery) return;

    window.localStorage.setItem(THEME_KEY, themeMode);
    setIsDark(themeMode === "system" ? mediaQuery.matches : themeMode === "dark");
  }, [themeMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mediaQuery) return undefined;

    const syncWithSystemTheme = (event) => {
      if (themeMode === "system") {
        setIsDark(event.matches);
      }
    };
    mediaQuery.addEventListener("change", syncWithSystemTheme);
    return () => mediaQuery.removeEventListener("change", syncWithSystemTheme);
  }, [themeMode]);

  useEffect(() => {
    document.documentElement.classList.add("theme-transition");
    document.documentElement.classList.toggle("dark", isDark);
    const timer = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 220);

    return () => window.clearTimeout(timer);
  }, [isDark]);

  useEffect(() => {
    const revealTargets = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    revealTargets.forEach((node) => revealObserver.observe(node));

    const sections = document.querySelectorAll("main section[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.1 }
    );
    sections.forEach((node) => sectionObserver.observe(node));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [route.page, route.projectId]);

  useEffect(() => {
    if (route.page !== "portfolio") {
      document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));
    }
  }, [route.page]);

  const year = useMemo(() => new Date().getFullYear(), []);
  const currentVlogProjectId = route.page === "vlogProject" ? route.projectId : selectedProjectId;
  const selectedProject = useMemo(
    () => vlogProjects.find((project) => project.id === currentVlogProjectId) ?? null,
    [vlogProjects, currentVlogProjectId]
  );

  const renderProjectCards = () => (
    <div className="mt-10 grid gap-6 md:grid-cols-6">
      {projects.map((project) => (
        <article key={project.title} className={`card reveal ${project.gridClass}`}>
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            <span>{project.type}</span>
            <span className="project-metric">{project.metric}</span>
          </div>
          <div className="project-thumb" aria-hidden="true">
            {project.thumbnail}
          </div>
          <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
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
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live ? (
              <a className="btn-secondary" href={project.links.live} target="_blank" rel="noreferrer">
                Live
              </a>
            ) : (
              <span className="btn-secondary btn-disabled" aria-disabled="true">
                Live
              </span>
            )}
            {project.links.code ? (
              <a className="btn-secondary" href={project.links.code} target="_blank" rel="noreferrer">
                Code
              </a>
            ) : (
              <span className="btn-secondary btn-disabled" aria-disabled="true">
                Code
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );

  const createVlogProject = (event) => {
    event.preventDefault();
    const name = projectName.trim();
    if (!name) return;

    const newProject = {
      id: `project_${Date.now()}`,
      name,
      description: projectDescription.trim(),
      entries: [],
      createdAt: new Date().toISOString(),
    };

    setVlogProjects((prev) => [newProject, ...prev]);
    setSelectedProjectId(newProject.id);
    window.location.hash = `#/vlog/${encodeURIComponent(newProject.id)}`;
    setProjectName("");
    setProjectDescription("");
  };

  const readFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const addScreenshots = async (event) => {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) return;

    try {
      const sources = await Promise.all(files.map((file) => readFileAsDataUrl(file)));
      const images = sources.map((src, index) => ({
        id: `img_${Date.now()}_${index}`,
        src,
        name: files[index].name,
        placement: "center",
      }));
      setEntryScreenshots((prev) => [...prev, ...images]);
    } catch {
      // ignore invalid file read failures
    } finally {
      event.target.value = "";
    }
  };

  const setScreenshotPlacement = (imageId, placement) => {
    setEntryScreenshots((prev) =>
      prev.map((image) => (image.id === imageId ? { ...image, placement } : image))
    );
  };

  const moveScreenshot = (imageId, direction) => {
    setEntryScreenshots((prev) => {
      const index = prev.findIndex((img) => img.id === imageId);
      if (index < 0) return prev;
      const nextIndex = direction === "up" ? index - 1 : index + 1;
      if (nextIndex < 0 || nextIndex >= prev.length) return prev;
      const cloned = [...prev];
      [cloned[index], cloned[nextIndex]] = [cloned[nextIndex], cloned[index]];
      return cloned;
    });
  };

  const removeScreenshot = (imageId) => {
    setEntryScreenshots((prev) => prev.filter((img) => img.id !== imageId));
  };

  const addVlogEntry = (event) => {
    event.preventDefault();
    if (!currentVlogProjectId) return;
    const title = entryTitle.trim();
    const content = entryContent.trim();
    if (!title || !content) return;

    const newEntry = {
      id: `entry_${Date.now()}`,
      title,
      content,
      images: entryScreenshots,
      createdAt: new Date().toISOString(),
    };

    setVlogProjects((prev) =>
      prev.map((project) =>
        project.id === currentVlogProjectId
          ? { ...project, entries: [newEntry, ...project.entries] }
          : project
      )
    );
    setEntryTitle("");
    setEntryContent("");
    setEntryScreenshots([]);
  };

  if (route.page === "vlog") {
    return (
      <div className="min-h-screen text-slate-900 dark:text-slate-100">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
        <header className="site-header mx-auto w-full max-w-6xl px-4 py-5 sm:px-6">
          <div className="header-top">
            <a className="brand-link" href="#top">
              <img className="logo-circle" src={logoSrc} alt="Karan Singh Gurjar logo" />
              <span className="brand-mark">KSG</span>
            </a>
            <button
              className="toggle-btn"
              onClick={() =>
                setThemeMode((prev) =>
                  prev === "system" ? "dark" : prev === "dark" ? "light" : "system"
                )
              }
              aria-label="Toggle theme"
            >
              {themeMode === "system" ? "Auto" : themeMode === "dark" ? "Dark" : "Light"}
            </button>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h1 className="text-3xl font-bold md:text-4xl">Vlog Projects</h1>
            <a className="btn-secondary" href="#/">
              Back to Portfolio
            </a>
          </div>

          <section className="space-y-6">
            <div className="card">
              <h2 className="text-lg font-bold">Create New Vlog Project</h2>
              <form className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]" onSubmit={createVlogProject}>
                <input
                  className="vlog-input"
                  placeholder="Project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
                <input
                  className="vlog-input"
                  placeholder="Short description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
                <button className="btn-primary" type="submit">
                  Create
                </button>
              </form>
            </div>

            <div className="vlog-project-grid">
              {vlogProjects.map((project) => (
                <article key={project.id} className="card vlog-project-card">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {project.description || "No description added yet."}
                  </p>
                  <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                    {project.entries.length} entries
                  </p>
                  <div className="mt-4">
                    <a className="btn-secondary" href={`#/vlog/${encodeURIComponent(project.id)}`}>
                      Open Project Page
                    </a>
                  </div>
                </article>
              ))}
              {vlogProjects.length === 0 && (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  No projects yet. Create your first vlog project.
                </p>
              )}
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (route.page === "vlogProject") {
    return (
      <div className="min-h-screen text-slate-900 dark:text-slate-100">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
        <header className="site-header mx-auto w-full max-w-6xl px-4 py-5 sm:px-6">
          <div className="header-top">
            <a className="brand-link" href="#/">
              <img className="logo-circle" src={logoSrc} alt="Karan Singh Gurjar logo" />
              <span className="brand-mark">KSG</span>
            </a>
            <button
              className="toggle-btn"
              onClick={() =>
                setThemeMode((prev) =>
                  prev === "system" ? "dark" : prev === "dark" ? "light" : "system"
                )
              }
              aria-label="Toggle theme"
            >
              {themeMode === "system" ? "Auto" : themeMode === "dark" ? "Dark" : "Light"}
            </button>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h1 className="text-2xl font-bold md:text-4xl">
              {selectedProject ? selectedProject.name : "Vlog Project"}
            </h1>
            <a className="btn-secondary" href="#/vlog">
              Back to Vlog Projects
            </a>
          </div>

          {!selectedProject ? (
            <div className="card">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Project not found. Please return to Vlog Projects and open an existing one.
              </p>
            </div>
          ) : (
            <section className="vlog-layout">
              <div className="card">
                <h2 className="text-lg font-bold">Add Vlog Entry</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {selectedProject.description || "No description added yet."}
                </p>

                <form className="mt-5 space-y-3" onSubmit={addVlogEntry}>
                  <input
                    className="vlog-input"
                    placeholder="Entry title"
                    value={entryTitle}
                    onChange={(e) => setEntryTitle(e.target.value)}
                  />
                  <textarea
                    className="vlog-input min-h-[140px]"
                    placeholder="Write vlog content..."
                    value={entryContent}
                    onChange={(e) => setEntryContent(e.target.value)}
                  />

                  <div className="screenshot-upload-box">
                    <label className="text-sm font-semibold">Add screenshots</label>
                    <input
                      className="mt-2 block w-full text-sm"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={addScreenshots}
                    />
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Upload multiple images, set placement, and reorder them.
                    </p>
                  </div>

                  {entryScreenshots.length > 0 && (
                    <div className="space-y-2">
                      {entryScreenshots.map((image, index) => (
                        <div key={image.id} className="screenshot-item">
                          <img src={image.src} alt={image.name} className="screenshot-preview" />
                          <div className="screenshot-controls">
                            <p className="text-xs font-semibold">{image.name}</p>
                            <select
                              className="vlog-input"
                              value={image.placement}
                              onChange={(e) => setScreenshotPlacement(image.id, e.target.value)}
                            >
                              <option value="full">Full Width</option>
                              <option value="center">Center</option>
                              <option value="left">Left</option>
                              <option value="right">Right</option>
                            </select>
                            <div className="flex gap-2">
                              <button
                                className="btn-secondary"
                                type="button"
                                onClick={() => moveScreenshot(image.id, "up")}
                                disabled={index === 0}
                              >
                                Up
                              </button>
                              <button
                                className="btn-secondary"
                                type="button"
                                onClick={() => moveScreenshot(image.id, "down")}
                                disabled={index === entryScreenshots.length - 1}
                              >
                                Down
                              </button>
                              <button
                                className="btn-secondary"
                                type="button"
                                onClick={() => removeScreenshot(image.id)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className="btn-primary" type="submit">
                    Save Entry
                  </button>
                </form>
              </div>

              <div className="card">
                <h2 className="text-lg font-bold">All Entries</h2>
                <div className="mt-6 space-y-5">
                  {selectedProject.entries.length > 0 ? (
                    selectedProject.entries.map((entry) => (
                      <article key={entry.id} className="vlog-entry">
                        <h3 className="text-base font-bold">{entry.title}</h3>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {new Date(entry.createdAt).toLocaleString()}
                        </p>
                        <p className="mt-3 whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-300">
                          {entry.content}
                        </p>
                        {entry.images?.length > 0 && (
                          <div className="mt-4 space-y-3">
                            {entry.images.map((image) => (
                              <figure
                                key={image.id}
                                className={`vlog-media vlog-media-${image.placement || "center"}`}
                              >
                                <img src={image.src} alt={image.name || "Vlog screenshot"} />
                              </figure>
                            ))}
                          </div>
                        )}
                      </article>
                    ))
                  ) : (
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      No entries yet. Add your first vlog entry here.
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    );
  }

  if (route.page === "projects") {
    return (
      <div className="min-h-screen text-slate-900 dark:text-slate-100">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
        <header className="site-header mx-auto w-full max-w-6xl px-4 py-5 sm:px-6">
          <div className="header-top">
            <a className="brand-link" href="#/">
              <img className="logo-circle" src={logoSrc} alt="Karan Singh Gurjar logo" />
              <span className="brand-mark">KSG</span>
            </a>
            <button
              className="toggle-btn"
              onClick={() =>
                setThemeMode((prev) =>
                  prev === "system" ? "dark" : prev === "dark" ? "light" : "system"
                )
              }
              aria-label="Toggle theme"
            >
              {themeMode === "system" ? "Auto" : themeMode === "dark" ? "Dark" : "Light"}
            </button>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h1 className="text-3xl font-bold md:text-4xl">Projects</h1>
            <a className="btn-secondary" href="#/">
              Back to Portfolio
            </a>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            Biodiversity-focused bioacoustics research, secure systems, and product-ready
            deliverables.
          </p>
          {renderProjectCards()}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
      <header className="site-header mx-auto w-full max-w-6xl px-4 py-5 sm:px-6">
        <div className="header-top">
          <a className="brand-link" href="#top">
            <img className="logo-circle" src={logoSrc} alt="Karan Singh Gurjar logo" />
            <span className="brand-mark">KSG</span>
          </a>
          <button
            className="toggle-btn"
            onClick={() =>
              setThemeMode((prev) =>
                prev === "system" ? "dark" : prev === "dark" ? "light" : "system"
              )
            }
            aria-label="Toggle theme"
          >
            {themeMode === "system" ? "Auto" : themeMode === "dark" ? "Dark" : "Light"}
          </button>
        </div>
        <nav className="nav-pill header-nav">
          <a className={`nav-link ${route.page === "projects" ? "is-active" : ""}`} href="#/projects">
            Projects
          </a>
          <a
            className={`nav-link ${activeSection === "experience" ? "is-active" : ""}`}
            href="#experience"
          >
            Experience
          </a>
          <a className={`nav-link ${activeSection === "skills" ? "is-active" : ""}`} href="#skills">
            My Skills
          </a>
          <a className={`nav-link ${activeSection === "contact" ? "is-active" : ""}`} href="#contact">
            Contact
          </a>
          <a className="nav-link" href="#/vlog">
            Vlog
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <section className="grid items-center gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
              Portfolio 2026
            </p>
            <h1 className="mt-4 text-[clamp(2rem,6vw,3.8rem)] font-bold leading-tight">
              Karan Singh Gurjar
            </h1>
            <p className="hero-tagline">Building dependable web and ML products that ship to production.</p>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Postgraduate Computer Science student with practical experience in
              machine learning projects, full-stack development, and applied
              research, focused on building reliable and explainable systems.
            </p>
            <div className="hero-cta mt-8 flex flex-wrap items-center gap-3">
              <a className="btn-primary" href="#/projects">
                View Projects
              </a>
              <a className="btn-secondary" href="#contact">
                Contact Me
              </a>
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
          <div className="relative reveal">
            <div className="absolute inset-0 rounded-3xl border border-white/10 dark:border-white/10" />
            <div className="relative rounded-3xl border border-slate-200/60 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="hero-identity">
                <img src={heroPhotoSrc} alt="Karan Singh Gurjar portrait" className="hero-photo" />
                <div>
                  <p className="hero-photo-label">ML + Full Stack</p>
                  <p className="hero-photo-sub">Open to full-time opportunities</p>
                </div>
              </div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Focus
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Designing secure, scalable, and intelligent systems that bridge
                machine learning research with production-grade engineering.
                Current work includes CNN-based audio classification, API-driven
                applications, and practical deployment-focused development across
                web and ML systems.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span>Frontend: React, motion-rich and accessible UI design</span>
                <span>
                  Backend: FastAPI-based services, API-driven architectures,
                  data preprocessing and inference pipelines
                </span>
                <span>
                  Machine Learning &amp; Research: CNNs, Transformers, diffusion
                  models, model evaluation, bioacoustics, geospatial
                  visualization, and behavioral biometrics
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 reveal">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Projects</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Biodiversity-focused bioacoustics research, secure systems, and
                product-ready deliverables.
              </p>
            </div>
          </div>
          {renderProjectCards()}
        </section>

        <section id="experience" className="py-16 reveal">
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

        <section id="skills" className="py-20 reveal">
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

        <section id="contact" className="py-16 reveal">
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
                <a className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition" href="#/projects">Projects</a>
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

import { useEffect, useState } from "react";
import Header from "./components/layout/Header.jsx";
import { useHashRoute } from "./hooks/useHashRoute.js";
import { useSeoMetadata } from "./hooks/useSeoMetadata.js";
import { useThemePreference } from "./hooks/useThemePreference.js";
import HomePage from "./pages/HomePage.jsx";
import ProjectCaseStudyPage from "./pages/ProjectCaseStudyPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import VlogPage from "./pages/VlogPage.jsx";
import VlogProjectPage from "./pages/VlogProjectPage.jsx";

const VLOG_KEY = "ksg_vlog_projects";

export default function App() {
  const route = useHashRoute();
  const { themeMode, cycleThemeMode } = useThemePreference();
  const [vlogProjects, setVlogProjects] = useState([]);
  useSeoMetadata(route);

  useEffect(() => {
    const saved = window.localStorage.getItem(VLOG_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setVlogProjects(parsed);
      }
    } catch {
      setVlogProjects([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(VLOG_KEY, JSON.stringify(vlogProjects));
  }, [vlogProjects]);

  const skipLink = (
    <a className="skip-link" href="#main-content">
      Skip to main content
    </a>
  );

  const header = (
    <Header
      routePage={route.page}
      themeMode={themeMode}
      onToggleTheme={cycleThemeMode}
      activeSection={route.page === "portfolio" ? route.sectionId || "top" : "top"}
    />
  );

  const handleCreateVlogProject = ({ name, description }) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const newProject = {
      id: `project_${Date.now()}`,
      name: trimmedName,
      description: description.trim(),
      entries: [],
      createdAt: new Date().toISOString(),
    };

    setVlogProjects((prev) => [newProject, ...prev]);
    window.location.hash = `#/vlog/${encodeURIComponent(newProject.id)}`;
  };

  const handleAddVlogEntry = ({ projectId, title, content, images }) => {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();
    if (!projectId || !trimmedTitle || !trimmedContent) return;

    const newEntry = {
      id: `entry_${Date.now()}`,
      title: trimmedTitle,
      content: trimmedContent,
      images: images ?? [],
      createdAt: new Date().toISOString(),
    };

    setVlogProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? { ...project, entries: [newEntry, ...(project.entries ?? [])] }
          : project
      )
    );
  };

  if (route.page === "projects") {
    if (route.projectId) {
      return (
        <ProjectCaseStudyPage
          projectSlug={route.projectId}
          sectionId={route.sectionId}
          skipLink={skipLink}
          header={header}
        />
      );
    }

    return <ProjectsPage skipLink={skipLink} header={header} />;
  }

  if (route.page === "vlog") {
    if (route.projectId) {
      const project =
        vlogProjects.find((item) => item.id === route.projectId) ?? null;

      return (
        <VlogProjectPage
          header={header}
          project={project}
          projectId={route.projectId}
          onAddEntry={handleAddVlogEntry}
        />
      );
    }

    return (
      <VlogPage
        header={header}
        skipLink={skipLink}
        projects={vlogProjects}
        onCreateProject={handleCreateVlogProject}
      />
    );
  }

  return (
    <HomePage
      routeSection={route.sectionId}
      skipLink={skipLink}
      themeMode={themeMode}
      onToggleTheme={cycleThemeMode}
    />
  );
}

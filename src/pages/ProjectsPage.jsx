import { useEffect, useMemo, useState } from "react";
import Button from "../components/common/Button.jsx";
import ProjectsFilterBar from "../components/projects/ProjectsFilterBar.jsx";
import ProjectsGrid from "../components/projects/ProjectsGrid.jsx";
import { projects } from "../data/projects.js";
import { getArchiveCategory, getArchiveProjects } from "../utils/projectHelpers.js";

const archiveCategories = ["All", "Research", "Systems", "Applications"];

export default function ProjectsPage({ header, skipLink }) {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));
  }, []);

  const archiveProjects = useMemo(() => getArchiveProjects(projects), []);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? archiveProjects
        : archiveProjects.filter((project) => getArchiveCategory(project) === activeCategory),
    [activeCategory, archiveProjects]
  );

  return (
    <div className="page-shell">
      {skipLink}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
      {header}
      <main id="main-content" className="page-main px-6 py-12" tabIndex="-1">
        <div className="project-archive-header">
          <h1 className="page-title">Projects</h1>
          <p className="project-archive-subtitle">
            Research, systems, and application projects demonstrating engineering depth and
            problem-solving.
          </p>
        </div>

        <div className="project-archive-actions">
          <Button as="a" href="#/">
            Back to Portfolio
          </Button>
        </div>

        <section className="project-library-section" aria-labelledby="projects-library-heading">
          <h2 id="projects-library-heading" className="sr-only">Project archive</h2>
          <ProjectsFilterBar
            categories={archiveCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <ProjectsGrid projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

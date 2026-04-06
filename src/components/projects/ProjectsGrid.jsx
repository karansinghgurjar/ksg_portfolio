import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsGrid({ projects = [] }) {
  return (
    <div className="project-archive-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          reveal
          variant="archive"
          detailHref={`#/projects/${project.slug}`}
        />
      ))}
    </div>
  );
}

import Button from "../common/Button.jsx";
import { projects } from "../../data/projects.js";
import ProjectCard from "../common/ProjectCard.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import FeaturedProjectHeroCard from "../projects/FeaturedProjectHeroCard.jsx";
import SecondaryFeaturedProjectCard from "../projects/SecondaryFeaturedProjectCard.jsx";

export default function ProjectsPreview() {
  const featuredProjects = [...projects]
    .filter((project) => project.homepageFeatured)
    .sort(
      (left, right) =>
        (left.homepageOrder ?? Number.MAX_SAFE_INTEGER) -
        (right.homepageOrder ?? Number.MAX_SAFE_INTEGER)
    )
    .slice(0, 2);
  const [leadProject, ...secondaryProjects] = featuredProjects;
  const [priorityProject] = secondaryProjects;

  return (
    <section id="projects" className="section-spacing reveal" aria-labelledby="projects-heading">
      <div className="featured-projects-header">
        <SectionHeading id="projects-heading" title="Featured Projects" />
        <p className="featured-projects-subtitle">
          A selection of research and engineering projects focused on AI, systems, and applied software design.
        </p>
      </div>

      {leadProject ? (
        <div className="featured-projects-layout">
          {leadProject.signature ? (
            <div className="reveal">
              <FeaturedProjectHeroCard project={leadProject} />
            </div>
          ) : (
            <ProjectCard
              project={leadProject}
              reveal
              priority
              detailHref={`#/projects/${leadProject.slug}`}
            />
          )}

          {priorityProject ? (
            <div className="featured-projects-secondary-row">
              <div className="reveal">
                <SecondaryFeaturedProjectCard
                  key={priorityProject.slug}
                  project={priorityProject}
                />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="featured-projects-footer">
        <Button as="a" href="#/projects">
          View All Projects
        </Button>
      </div>
    </section>
  );
}

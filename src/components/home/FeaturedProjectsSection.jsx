import Button from "../common/Button.jsx";
import ProjectCard from "../common/ProjectCard.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import FeaturedProjectHeroCard from "../projects/FeaturedProjectHeroCard.jsx";
import { getHomepageFeaturedProjects } from "../../utils/projectHelpers.js";

export default function FeaturedProjectsSection({
  projects = [],
  title = "Featured Projects",
  subtitle,
  ctaLabel = "View All Projects",
  ctaHref = "#/projects",
}) {
  const featuredProjects = getHomepageFeaturedProjects(projects).slice(0, 2);

  const [leadProject, secondaryProject] = featuredProjects;

  return (
    <section id="projects" className="section-spacing reveal" aria-labelledby="projects-heading">
      <div className="featured-projects-header">
        <SectionHeading id="projects-heading" title={title} />
        {subtitle ? <p className="featured-projects-subtitle">{subtitle}</p> : null}
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
              variant="featured-large"
              detailHref={`#/projects/${leadProject.slug}`}
            />
          )}

          {secondaryProject ? (
            <div className="featured-projects-secondary-row">
              <div className="reveal">
                <ProjectCard
                  project={secondaryProject}
                  variant="featured-compact"
                  detailHref={`#/projects/${secondaryProject.slug}`}
                />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="featured-projects-footer">
        <Button as="a" href={ctaHref}>
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}

import Button from "../common/Button.jsx";
import Tag from "../common/Tag.jsx";

export default function SecondaryFeaturedProjectCard({ project }) {
  const tags = project.tags?.length ? project.tags : project.homepageTags?.slice(0, 4) ?? [];

  return (
    <article className="secondary-featured-project-card">
      <div className="secondary-featured-project-header">
        <div>
          <h3 className="secondary-featured-project-title">{project.title}</h3>
          <p className="secondary-featured-project-subtitle">
            {project.subtitle || project.tagline || project.shortDescription}
          </p>
        </div>
        <span className="project-status">{project.status}</span>
      </div>

      <p className="secondary-featured-project-description">{project.shortDescription}</p>

      <div className="secondary-featured-project-tags">
        {tags.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <div className="secondary-featured-project-actions">
        <Button as="a" href={`#/projects/${project.slug}`}>
          View Project
        </Button>
        {project.githubUrl ? (
          <Button as="a" variant="tertiary" href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </Button>
        ) : null}
      </div>
    </article>
  );
}

import Button from "./Button.jsx";
import Tag from "./Tag.jsx";
import { joinClasses } from "../../utils/helpers.js";

function ActionButton({ href, label }) {
  if (!href) return null;

  const isInternal = href.startsWith("#");

  return (
    <Button
      as="a"
      href={href}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noreferrer"}
    >
      {label}
    </Button>
  );
}

export default function ProjectCard({
  project,
  reveal = false,
  onSelect,
  isSelected = false,
  detailHref,
  variant = "archive",
}) {
  const isFeaturedLarge = variant === "featured-large";
  const isFeaturedCompact = variant === "featured-compact";
  const isArchive = variant === "archive";
  const impactItems = project.impact ?? project.highlights ?? [];
  const githubHref = project.githubUrl || "";
  const projectTags =
    project.tags?.length
      ? project.tags
      : project.homepageTags?.length
        ? project.homepageTags
        : project.techStack ?? [];
  const detailLabel = "View Project";
  const primaryActionHref = isArchive ? project.liveUrl : detailHref || project.liveUrl;
  const primaryActionLabel = "View Project";

  return (
    <article
      className={joinClasses(
        "card project-card",
        isFeaturedLarge && "project-card-featured-large",
        isFeaturedCompact && "project-card-featured-compact",
        isArchive && "project-card-archive",
        reveal && "reveal",
        isSelected && "project-card-selected",
        project.gridClass
      )}
    >
      <div className="project-card-topline">
        <span className="project-category">{project.category}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <h3
        className={joinClasses(
          "card-title mt-4 text-[1.18rem]",
          isFeaturedLarge && "project-card-title-priority",
          isFeaturedCompact && "project-card-title-compact"
        )}
      >
        {project.title}
      </h3>
      <p className="body-text mt-3 text-[0.95rem]">{project.shortDescription}</p>

      {isFeaturedLarge && project.tagline ? (
        <p className="project-priority-tagline">{project.tagline}</p>
      ) : null}

      {isArchive ? (
        <>
          <div className="project-meta-grid mt-4">
            <div>
              <p className="project-meta-label">Role</p>
              <p className="project-meta-value">{project.role}</p>
            </div>
            <div>
              <p className="project-meta-label">Duration</p>
              <p className="project-meta-value">{project.duration}</p>
            </div>
          </div>

          <ul className="project-impact-list mt-5">
            {impactItems.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}

      {isFeaturedLarge ? (
        <ul className="project-impact-list mt-5">
          {impactItems.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {isArchive ? (
        <div className="project-metrics mt-5">
          {project.metrics.map((item) => (
            <span key={item} className="project-metric-chip">
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {(isArchive ? project.techStack : projectTags.slice(0, 4)).map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <div className="project-actions mt-6">
        {isArchive ? <ActionButton href={project.liveUrl} label={project.actionLabels.live} /> : null}
        {primaryActionHref ? <ActionButton href={primaryActionHref} label={primaryActionLabel} /> : null}
        {githubHref ? <ActionButton href={githubHref} label="GitHub" /> : null}
        {isArchive ? <ActionButton href={project.codeUrl} label={project.actionLabels.code} /> : null}
        {detailHref && isFeaturedLarge ? (
          <Button as="a" variant="tertiary" href={detailHref}>
            {detailLabel}
          </Button>
        ) : null}
      </div>
    </article>
  );
}

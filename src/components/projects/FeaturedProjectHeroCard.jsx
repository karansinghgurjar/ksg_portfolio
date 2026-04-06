import Button from "../common/Button.jsx";
import Tag from "../common/Tag.jsx";
import { getAssetPath } from "../../utils/helpers.js";

export default function FeaturedProjectHeroCard({ project }) {
  const contributionBullets = (
    project.homepageBullets ||
    project.impact ||
    project.highlights ||
    []
  ).slice(0, 3);
  const tags = project.homepageTags?.length ? project.homepageTags : project.techStack.slice(0, 4);
  const badgeLabel = project.homepageBadgeLabel || project.category;
  const eyebrowLabel = project.homepageEyebrow || "Research Project / Computer Vision / Remote Sensing";
  const statusNote = project.homepageStatusNote || "Authored research work";
  const manuscriptHref = project.paperUrl || `#/projects/${project.slug}?section=manuscript-note-heading`;
  const visualAsset = project.media?.architectureDiagram?.asset || "";
  const showCaseStudyButton = project.actions?.caseStudy ?? true;

  return (
    <article className="featured-project-hero-card">
      <div className="featured-project-hero-copy">
        <p className="featured-project-eyebrow">{eyebrowLabel}</p>

        <h3 className="featured-project-hero-title">{project.title}</h3>
        <p className="featured-project-hero-subtitle">
          {project.subtitle || project.tagline || project.shortDescription}
        </p>

        <div className="featured-project-status-row" aria-label="Project status">
          <span className="featured-project-manuscript-badge">{badgeLabel}</span>
          <span className="featured-project-status-note">{statusNote}</span>
        </div>

        <p className="featured-project-hero-description">{project.shortDescription}</p>

        <ul className="featured-project-bullets">
          {contributionBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="featured-project-tag-row">
          {tags.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="featured-project-actions">
          {showCaseStudyButton ? (
            <Button as="a" href={`#/projects/${project.slug}`}>
              View Case Study
            </Button>
          ) : null}
          <Button as="a" variant="tertiary" href={manuscriptHref}>
            Paper Summary
          </Button>
          {project.githubUrl ? (
            <Button as="a" variant="tertiary" href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </Button>
          ) : null}
        </div>
      </div>

      <div className="featured-project-hero-visual">
        <div className="featured-project-visual-shell">
          <div className="featured-project-visual-kicker">Architecture Preview</div>
          {visualAsset ? (
            <img
              src={getAssetPath(visualAsset)}
              alt={`${project.title} architecture preview`}
              className="featured-project-visual-image"
            />
          ) : (
            <>
              <div className="featured-project-visual-gradient" aria-hidden="true" />
              <div className="featured-project-visual-grid" aria-label={`${project.title} architecture preview`}>
                <div className="featured-project-visual-node is-input">SAR Input</div>
                <div className="featured-project-visual-arrow" />
                <div className="featured-project-visual-node">U-Net</div>
                <div className="featured-project-visual-arrow" />
                <div className="featured-project-visual-node">Swin</div>
                <div className="featured-project-visual-arrow" />
                <div className="featured-project-visual-node">LC Fusion</div>
                <div className="featured-project-visual-arrow" />
                <div className="featured-project-visual-node">Diffusion</div>
                <div className="featured-project-visual-arrow" />
                <div className="featured-project-visual-node is-output">RGB Output</div>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

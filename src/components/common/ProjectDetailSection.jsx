import Tag from "./Tag.jsx";

function DetailBlock({ title, children }) {
  return (
    <div className="project-detail-block">
      <h3 className="project-detail-heading">{title}</h3>
      {children}
    </div>
  );
}

export default function ProjectDetailSection({ project }) {
  if (!project) return null;

  return (
    <section className="project-detail-shell">
      <div className="project-detail-header">
        <div>
          <p className="section-kicker">Featured Case Study</p>
          <h2 className="section-title mt-3">{project.title}</h2>
          <p className="body-text mt-4 max-w-3xl">{project.solution}</p>
        </div>
        <div className="project-detail-summary">
          <div>
            <p className="project-meta-label">Category</p>
            <p className="project-meta-value">{project.category}</p>
          </div>
          <div>
            <p className="project-meta-label">Status</p>
            <p className="project-meta-value">{project.status}</p>
          </div>
          <div>
            <p className="project-meta-label">Role</p>
            <p className="project-meta-value">{project.role}</p>
          </div>
          <div>
            <p className="project-meta-label">Duration</p>
            <p className="project-meta-value">{project.duration}</p>
          </div>
        </div>
      </div>

      <div className="project-detail-grid">
        <DetailBlock title="Problem">
          <p className="body-text">{project.problem}</p>
        </DetailBlock>

        <DetailBlock title="What I Built">
          <ul className="project-detail-list">
            {project.whatIBuilt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock title="Challenges">
          <ul className="project-detail-list">
            {project.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock title="Outcome">
          <p className="body-text">{project.outcome}</p>
        </DetailBlock>
      </div>

      <div className="project-detail-footer">
        <div>
          <p className="project-meta-label">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
        <div>
          <p className="project-meta-label">Metrics</p>
          <div className="project-metrics mt-3">
            {project.metrics.map((item) => (
              <span key={item} className="project-metric-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

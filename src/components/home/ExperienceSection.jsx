import { credibilityItems, experiences } from "../../data/experience.js";
import Card from "../common/Card.jsx";
import Tag from "../common/Tag.jsx";

function ExperienceItem({ item, isLast }) {
  return (
    <article className="experience-item">
      <div className="experience-rail" aria-hidden="true">
        <span className="experience-dot" />
        {!isLast ? <span className="experience-line" /> : null}
      </div>

      <div className="experience-content">
        <div className="experience-topline">
          <span className="experience-label">{item.label}</span>
          <span className="experience-dates">{item.dates}</span>
        </div>

        <h3 className="card-title mt-3">{item.role}</h3>
        <p className="body-text mt-2">
          {item.organization} · {item.location}
        </p>
        <p className="body-text mt-4 text-[0.97rem]">{item.summary}</p>

        <div className="experience-meta-grid">
          <div>
            <p className="project-meta-label">Domain</p>
            <p className="project-meta-value">{item.domain}</p>
          </div>
          <div>
            <p className="project-meta-label">Tech Used</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.techUsed.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </div>

        <div className="experience-block">
          <h4 className="project-detail-heading">Impact</h4>
          <ul className="project-detail-list">
            {item.impactBullets.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="experience-contributions">
          <div className="experience-contribution-card">
            <h4 className="project-detail-heading">Key Contributions</h4>
            <ul className="project-detail-list">
              {item.keyContributions.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="experience-contribution-card">
            <h4 className="project-detail-heading">Proof Points</h4>
            <div className="experience-proof-list">
              {item.proofPoints.map((proof) => (
                <div key={proof.title} className="experience-proof-item">
                  <p className="experience-proof-label">{proof.type}</p>
                  <p className="project-meta-value">{proof.title}</p>
                  <p className="meta-text mt-2">{proof.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing reveal" aria-labelledby="experience-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Experience</p>
          <h2 id="experience-heading" className="section-title mt-3">
            Professional Evidence and Delivery Ownership
          </h2>
        </div>
      </div>

      <div className="experience-layout mt-10">
        <Card className="experience-shell">
          {experiences.map((item, index) => (
            <ExperienceItem
              key={item.id}
              item={item}
              isLast={index === experiences.length - 1}
            />
          ))}
        </Card>

        <div className="experience-sidecards">
          {credibilityItems.map((item) => (
            <Card key={item.title} className="experience-sidecard">
              <p className="experience-proof-label">{item.label}</p>
              <h3 className="card-title mt-3">{item.title}</h3>
              <p className="body-text mt-3 text-[0.95rem]">{item.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { capabilityGroups, skillCloud } from "../../data/skills.js";
import { siteConfig } from "../../data/siteConfig.js";
import { getAssetPath } from "../../utils/helpers.js";
import Button from "../common/Button.jsx";
import Card from "../common/Card.jsx";
import Tag from "../common/Tag.jsx";

function CapabilityCard({ group }) {
  return (
    <Card className="capability-card">
      <p className="project-meta-label">{group.title}</p>
      <p className="body-text mt-3 text-[0.95rem]">{group.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {group.badges.map((badge) => (
          <Tag key={badge}>{badge}</Tag>
        ))}
      </div>

      <div className="capability-projects">
        <p className="project-meta-label">Used In</p>
        <div className="capability-project-list">
          {group.relatedProjects.map((project) => (
            <span key={project} className="capability-project-chip">
              {project}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-spacing reveal" aria-labelledby="skills-heading">
      <div className="skills-shell">
        <div className="skills-copy">
          <p className="skills-eyebrow">Capability Mapping</p>
          <h2 id="skills-heading" className="skills-title">
            Skills <span className="skills-accent">Connected to Real Work</span>
          </h2>
          <p className="skills-desc">
            The strongest capabilities here are the ones repeatedly used across
            research projects, full stack builds, and production-minded delivery.
          </p>
          <div className="capability-grid">
            {capabilityGroups.map((group) => (
              <CapabilityCard key={group.title} group={group} />
            ))}
          </div>
          <div className="mt-7">
            <Button as="a" href={siteConfig.paperUrl} target="_blank" rel="noreferrer">
              View IEEE Paper
            </Button>
          </div>
        </div>

        <div className="skills-visual-panel">
          <div>
            <p className="section-kicker">Visual Snapshot</p>
            <h3 className="card-title mt-3">Supporting Toolset</h3>
            <p className="body-text mt-3 text-[0.95rem]">
              The orbit cloud is a quick visual of the tools and frameworks I use,
              but the capability cards on the left show where those tools were
              applied in actual work.
            </p>
          </div>

          <div className="skills-cloud" aria-label="Supporting toolset orbit">
            <div className="skills-blob" aria-hidden="true" />
            <div className="skills-cloud-inner">
              {skillCloud.map((skill, index) => {
                const arcStart = -80;
                const arcEnd = 80;
                const step = (arcEnd - arcStart) / Math.max(skillCloud.length - 1, 1);
                const angle = arcStart + index * step;

                return (
                  <div
                    key={skill.label}
                    className="skill-tile"
                    style={{
                      "--angle": `${angle}deg`,
                      "--delay": `${index * 0.12}s`,
                      "--hue": `${(index * 28) % 360}`,
                    }}
                    title={skill.label}
                  >
                    <div className="skill-chip">
                      <img
                        src={getAssetPath(`skills/${skill.icon}`)}
                        alt={`${skill.label} icon`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

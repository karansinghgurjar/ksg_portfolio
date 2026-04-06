import { useEffect } from "react";
import Button from "../components/common/Button.jsx";
import Tag from "../components/common/Tag.jsx";
import { projects } from "../data/projects.js";
import { getAssetPath } from "../utils/helpers.js";
import { findProjectByRouteId } from "../utils/projectHelpers.js";

function CaseStudyBlock({ id, title, children }) {
  return (
    <section className="case-study-block" aria-labelledby={id}>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function MediaSlot({ title, caption, asset, placeholder, className = "" }) {
  const hasAsset = Boolean(asset);

  return (
    <article className={`case-study-media-card ${className}`.trim()}>
      <div className="case-study-media-frame">
        {hasAsset ? (
          <img src={getAssetPath(asset)} alt={title} className="case-study-media-image" />
        ) : (
          <div className="case-study-media-placeholder" aria-label={`${title} placeholder`}>
            <span className="case-study-media-placeholder-badge">Placeholder</span>
            <p className="case-study-media-placeholder-title">{placeholder || title}</p>
          </div>
        )}
      </div>
      <div className="case-study-media-copy">
        <h3 className="card-title text-[1rem]">{title}</h3>
        <p className="body-text mt-3 text-[0.95rem]">{caption}</p>
      </div>
    </article>
  );
}

export default function ProjectCaseStudyPage({ header, skipLink, projectSlug, sectionId = "" }) {
  const project = findProjectByRouteId(projects, projectSlug);

  if (!project) {
    return (
      <div className="page-shell">
        {skipLink}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
        {header}
        <main id="main-content" className="page-main px-6 py-12" tabIndex="-1">
          <div className="case-study-shell">
            <p className="section-kicker">Project Not Found</p>
            <h1 className="page-title mt-3">This case study is not available.</h1>
            <p className="body-text mt-4 max-w-2xl">
              The requested project route does not match a published case study in the portfolio.
            </p>
            <div className="mt-8">
              <Button as="a" href="#/projects">
                Back to Projects
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const stackPreview = project.techStack.slice(0, 5);
  const featureCards = (project.features || []).filter((item) => typeof item === "object");
  const engineeringGroups = project.engineeringGroups || [];
  const workflowSteps = project.workflowSteps || [];
  const workflowSystems = project.workflowSystems || [];
  const projectContactHref = `mailto:karansingha2222@gmail.com?subject=${encodeURIComponent(`Regarding ${project.title}`)}`;
  const media = project.media || {};
  const screenshotSlots = media.screenshots || [];
  const mockupSlots = media.mockups || [];
  const hasMediaSection =
    Boolean(media.coverImage) ||
    Boolean(media.architectureDiagram) ||
    screenshotSlots.length > 0 ||
    mockupSlots.length > 0;
  const experimentalSetup = project.experimentalSetup || [];
  const methodologyCards = (project.methodologyCards || []).filter((item) => typeof item === "object");
  const resultsMetrics = project.resultsMetrics || [];
  const baselineComparisons = project.baselineComparisons || [];
  const ablationCards = project.ablationCards || [];
  const qualitativeGallery = project.qualitativeGallery || [];
  const qualitativeOutputs = project.qualitativeOutputs || [];
  const authorshipPanel = project.authorshipPanel || null;
  const architectureBreakdown = project.architectureBreakdown || [];
  const protocolDesign = project.protocolDesign || null;
  const performanceOptimizations = project.performanceOptimizations || [];
  const securityModel = project.securityModel || [];
  const featureGroups = project.featureGroups || [];
  const roadmap = project.roadmap || [];
  const caseStudyTags = project.caseStudyTags || [];
  const caseStudyActions = project.caseStudyActions || {};
  const primaryActionLabel = caseStudyActions.primary || "View Case Study";
  const showManuscriptSummary = caseStudyActions.showManuscriptSummary ?? Boolean(project.manuscriptNote);
  const showArchitectureAction = caseStudyActions.showArchitecture ?? true;
  const contactLabel = caseStudyActions.contactLabel || "Contact Me About This Work";

  useEffect(() => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(sectionId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [sectionId]);

  return (
    <div className="page-shell">
      {skipLink}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
      {header}
      <main id="main-content" className="page-main px-6 py-12" tabIndex="-1">
        <div className="case-study-shell">
          <section className="case-study-hero" aria-labelledby="case-study-title">
            <div className="case-study-hero-copy">
              <p className="section-kicker">Project Case Study</p>
              <h1 id="case-study-title" className="page-title mt-3">
                {project.title}
              </h1>
              <p className="case-study-subtitle">
                {project.subtitle || project.tagline || project.shortDescription}
              </p>
              {caseStudyTags.length ? (
                <div className="case-study-tag-row">
                  {caseStudyTags.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              ) : null}
              <p className="body-text mt-5 max-w-3xl">{project.overview || project.solution}</p>

              <div className="case-study-hero-actions">
                <Button as="a" href={`#/projects/${project.slug}`}>
                  {primaryActionLabel}
                </Button>
                {showManuscriptSummary ? (
                  <Button as="a" href={`#/projects/${project.slug}?section=manuscript-note-heading`}>
                    View Manuscript Summary
                  </Button>
                ) : null}
                {project.githubUrl ? (
                  <Button as="a" href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </Button>
                ) : null}
                <Button as="a" href={projectContactHref}>
                  {contactLabel}
                </Button>
                {showArchitectureAction ? (
                  <Button as="a" variant="tertiary" href="#architecture-heading">
                    View Architecture
                  </Button>
                ) : null}
              </div>
            </div>

            <aside className="case-study-summary-card">
              <div className="project-card-topline">
                <span className="project-category">{project.category}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <div className="case-study-summary-meta">
                {project.authorCredit ? (
                  <div>
                    <p className="project-meta-label">Author Credit</p>
                    <p className="project-meta-value">{project.authorCredit}</p>
                  </div>
                ) : null}
                <div>
                  <p className="project-meta-label">Year</p>
                  <p className="project-meta-value">{project.year || "Current"}</p>
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

              {authorshipPanel ? (
                <div className="case-study-authorship-panel">
                  <div>
                    <p className="project-meta-label">Role</p>
                    <p className="project-meta-value">{authorshipPanel.role}</p>
                  </div>
                  <div>
                    <p className="project-meta-label">Affiliation</p>
                    <p className="project-meta-value">{authorshipPanel.affiliation}</p>
                  </div>
                  <div>
                    <p className="project-meta-label">Manuscript Status</p>
                    <p className="project-meta-value">{authorshipPanel.manuscriptStatus}</p>
                  </div>
                  <div>
                    <p className="project-meta-label">Research Areas</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {authorshipPanel.researchAreas.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="case-study-stack-preview">
                <p className="project-meta-label">Stack Preview</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stackPreview.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          <CaseStudyBlock id="overview-heading" title="Project Overview">
            <p className="body-text max-w-4xl">{project.overview || project.solution}</p>
          </CaseStudyBlock>

          <CaseStudyBlock id="problem-heading" title="Problem">
            <p className="body-text max-w-4xl">{project.problemStatement || project.problem}</p>
          </CaseStudyBlock>

          {project.researchContext ? (
            <CaseStudyBlock id="context-heading" title="Research Context">
              <p className="body-text max-w-4xl">{project.researchContext}</p>
            </CaseStudyBlock>
          ) : null}

          <CaseStudyBlock id="solution-heading" title="Solution">
            <p className="body-text max-w-4xl">{project.solutionSummary || project.solution}</p>
          </CaseStudyBlock>

          {project.manuscriptNote ? (
            <section className="case-study-manuscript-note" aria-labelledby="manuscript-note-heading">
              <p className="section-kicker">Manuscript Note</p>
              <h2 id="manuscript-note-heading" className="section-title mt-3">
                Publication status is still in manuscript stage
              </h2>
              <p className="body-text mt-4 max-w-4xl">{project.manuscriptNote}</p>
            </section>
          ) : null}

          <CaseStudyBlock id="features-heading" title="Key Features">
            {featureGroups.length ? (
              <div className="case-study-feature-groups-grid">
                {featureGroups.map((item) => (
                  <article key={item.title} className="case-study-feature-group-card">
                    <p className="project-meta-label">{item.title}</p>
                    <ul className="project-detail-list mt-5">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            ) : featureCards.length ? (
              <div className="case-study-feature-grid">
                {featureCards.map((item) => (
                  <article key={item.title} className="case-study-feature-card">
                    <div className="case-study-feature-mark" aria-hidden="true">
                      {item.symbol}
                    </div>
                    <div>
                      <h3 className="card-title text-[1.02rem]">{item.title}</h3>
                      <p className="body-text mt-3 text-[0.95rem]">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <ul className="project-detail-list">
                {(project.features || project.whatIBuilt || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </CaseStudyBlock>

          {hasMediaSection ? (
            <CaseStudyBlock id="media-heading" title="Product Visuals">
              <div className="case-study-media-shell">
                {media.coverImage ? (
                  <MediaSlot
                    title={media.coverImage.title}
                    caption={media.coverImage.caption}
                    asset={media.coverImage.asset}
                    placeholder={media.coverImage.placeholder}
                    className="case-study-media-cover"
                  />
                ) : null}

                {media.architectureDiagram ? (
                  <MediaSlot
                    title={media.architectureDiagram.title}
                    caption={media.architectureDiagram.caption}
                    asset={media.architectureDiagram.asset}
                    placeholder={media.architectureDiagram.placeholder}
                  />
                ) : null}
              </div>

              {screenshotSlots.length ? (
                <div className="case-study-screenshot-section">
                  <p className="project-meta-label">Feature Screens</p>
                  <div className="case-study-screenshot-grid">
                    {screenshotSlots.map((item) => (
                      <MediaSlot
                        key={item.title}
                        title={item.title}
                        caption={item.caption}
                        asset={item.asset}
                        placeholder={item.placeholder}
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {mockupSlots.length ? (
                <div className="case-study-screenshot-section">
                  <p className="project-meta-label">Desktop / Mobile Mockups</p>
                  <div className="case-study-mockup-grid">
                    {mockupSlots.map((item) => (
                      <MediaSlot
                        key={item.title}
                        title={item.title}
                        caption={item.caption}
                        asset={item.asset}
                        placeholder={item.placeholder}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </CaseStudyBlock>
          ) : null}

          <CaseStudyBlock id="architecture-heading" title="Technical Architecture">
            <ul className="project-detail-list">
              {(project.architecture || project.whatIBuilt || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudyBlock>

          {architectureBreakdown.length ? (
            <CaseStudyBlock
              id="architecture-breakdown-heading"
              title={project.architectureBreakdownTitle || "Architecture Breakdown"}
            >
              <div className="case-study-architecture-breakdown-grid">
                {architectureBreakdown.map((item) => (
                  <article key={item.title} className="case-study-architecture-breakdown-card">
                    <p className="project-meta-label">{item.title}</p>
                    <p className="body-text mt-3 text-[0.95rem]">{item.summary}</p>
                    <ul className="project-detail-list mt-5">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </CaseStudyBlock>
          ) : null}

          {protocolDesign ? (
            <CaseStudyBlock id="protocol-heading" title={protocolDesign.title || "Custom Protocol Design"}>
              <div className="case-study-protocol-shell">
                <div className="case-study-protocol-frame">
                  {protocolDesign.frameFormat.map((item) => (
                    <div key={item} className="case-study-protocol-segment">
                      {item}
                    </div>
                  ))}
                </div>

                <p className="body-text max-w-4xl">{protocolDesign.overview}</p>

                <div className="case-study-protocol-grid">
                  <article className="case-study-protocol-card">
                    <p className="project-meta-label">Design Goals</p>
                    <ul className="project-detail-list mt-5">
                      {protocolDesign.principles.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>

                  <article className="case-study-protocol-card">
                    <p className="project-meta-label">Message Types</p>
                    <div className="case-study-protocol-tags">
                      {protocolDesign.messageTypes.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </CaseStudyBlock>
          ) : null}

          {performanceOptimizations.length ? (
            <CaseStudyBlock id="performance-heading" title="Performance Optimization">
              <div className="case-study-performance-grid">
                {performanceOptimizations.map((item) => (
                  <article key={item.title} className="case-study-performance-card">
                    <h3 className="card-title text-[1.02rem]">{item.title}</h3>
                    <p className="body-text mt-3 text-[0.95rem]">{item.description}</p>
                  </article>
                ))}
              </div>
            </CaseStudyBlock>
          ) : null}

          {securityModel.length ? (
            <CaseStudyBlock id="security-heading" title="Security Model">
              <div className="case-study-security-grid">
                {securityModel.map((item) => (
                  <article key={item.title} className="case-study-security-card">
                    <h3 className="card-title text-[1.02rem]">{item.title}</h3>
                    <p className="body-text mt-3 text-[0.95rem]">{item.description}</p>
                  </article>
                ))}
              </div>
            </CaseStudyBlock>
          ) : null}

          {roadmap.length ? (
            <CaseStudyBlock id="roadmap-heading" title="Roadmap">
              <div className="case-study-roadmap-grid">
                {roadmap.map((item, index) => (
                  <article key={item} className="case-study-roadmap-card">
                    <p className="project-meta-label">Next Step {index + 1}</p>
                    <p className="body-text mt-3 text-[0.95rem]">{item}</p>
                  </article>
                ))}
              </div>
            </CaseStudyBlock>
          ) : null}

          {methodologyCards.length ? (
            <CaseStudyBlock id="methodology-heading" title="Methodology">
              <div className="case-study-methodology-grid">
                {methodologyCards.map((item) => (
                  <article key={item.title} className="case-study-methodology-card">
                    <div className="case-study-feature-mark" aria-hidden="true">
                      {item.symbol}
                    </div>
                    <div>
                      <h3 className="card-title text-[1.02rem]">{item.title}</h3>
                      <p className="body-text mt-3 text-[0.95rem]">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </CaseStudyBlock>
          ) : null}

          {experimentalSetup.length ? (
            <CaseStudyBlock id="setup-heading" title="Experimental Setup">
              <div className="case-study-setup-grid">
                {experimentalSetup.map((item) => (
                  <article key={item.label} className="case-study-setup-card">
                    <p className="project-meta-label">{item.label}</p>
                    <p className="body-text mt-3 text-[0.95rem]">{item.value}</p>
                  </article>
                ))}
              </div>
            </CaseStudyBlock>
          ) : null}

          <CaseStudyBlock
            id="workflow-heading"
            title={project.workflowTitle || "System Workflow"}
          >
            {project.workflowIntro ? (
              <p className="body-text max-w-4xl">{project.workflowIntro}</p>
            ) : null}
            <div className="case-study-diagram-shell">
              <div className="case-study-diagram-flow" aria-label={`${project.title} architecture diagram`}>
                {workflowSteps.map((step, index) => (
                  <div key={step} className="case-study-diagram-step-wrap">
                    <article className="case-study-diagram-step">
                      <span className="case-study-diagram-index" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="card-title text-[1rem]">{step}</h3>
                    </article>
                    {index < workflowSteps.length - 1 ? (
                      <div className="case-study-diagram-arrow" aria-hidden="true">
                        <span />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              {workflowSystems.length ? (
                <aside className="case-study-diagram-systems">
                  <p className="project-meta-label">Supporting Systems</p>
                  <div className="case-study-diagram-system-grid">
                    {workflowSystems.map((item) => (
                      <div key={item} className="case-study-diagram-system-card">
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>
              ) : null}
            </div>
          </CaseStudyBlock>

          <CaseStudyBlock
            id="highlights-heading"
            title={project.engineeringSectionTitle || "Technical Highlights"}
          >
            {engineeringGroups.length ? (
              <div className="case-study-engineering-grid">
                {engineeringGroups.map((group) => (
                  <article key={group.title} className="case-study-engineering-card">
                    <p className="project-meta-label">{group.title}</p>
                    <p className="body-text mt-3 text-[0.95rem]">{group.summary}</p>
                    <ul className="project-detail-list mt-5">
                      {group.points.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            ) : (
              <ul className="project-detail-list">
                {(project.technicalHighlights || project.challenges || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </CaseStudyBlock>

          {(project.resultsSummary || resultsMetrics.length || baselineComparisons.length || ablationCards.length) ? (
            <CaseStudyBlock id="results-heading" title="Results">
              {project.resultsSummary ? (
                <p className="body-text max-w-4xl">{project.resultsSummary}</p>
              ) : null}
              {resultsMetrics.length ? (
                <div className="case-study-results-metrics-grid">
                  {resultsMetrics.map((item) => (
                    <article key={item.label} className="case-study-results-metric-card">
                      <p className="project-meta-label">{item.label}</p>
                      <p className="card-title mt-3 text-[1.02rem]">{item.value}</p>
                      <p className="body-text mt-3 text-[0.95rem]">{item.note}</p>
                    </article>
                  ))}
                </div>
              ) : null}

              {baselineComparisons.length ? (
                <div className="case-study-results-table-wrap">
                  <p className="project-meta-label">Results reported in the manuscript</p>
                  <div className="case-study-results-table-scroll">
                    <table className="case-study-results-table">
                      <thead>
                        <tr>
                          <th>Model</th>
                          <th>PSNR</th>
                          <th>SSIM</th>
                          <th>LPIPS</th>
                          <th>Downstream Utility</th>
                        </tr>
                      </thead>
                      <tbody>
                        {baselineComparisons.map((item) => (
                          <tr key={item.model}>
                            <td>{item.model}</td>
                            <td>{item.psnr}</td>
                            <td>{item.ssim}</td>
                            <td>{item.lpips}</td>
                            <td>{item.downstream}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}

              {ablationCards.length ? (
                <div className="case-study-results-grid">
                  {ablationCards.map((item) => (
                    <article key={item.title} className="case-study-results-card">
                      <h3 className="card-title text-[1.02rem]">{item.title}</h3>
                      <p className="body-text mt-3 text-[0.95rem]">{item.description}</p>
                    </article>
                  ))}
                </div>
              ) : null}

              {qualitativeGallery.length ? (
                <div className="case-study-screenshot-section">
                  <p className="project-meta-label">Qualitative Gallery Placeholder</p>
                  <div className="case-study-screenshot-grid">
                    {qualitativeGallery.map((item) => (
                      <MediaSlot
                        key={item.title}
                        title={item.title}
                        caption={item.caption}
                        asset={item.asset}
                        placeholder={item.placeholder}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </CaseStudyBlock>
          ) : null}

          {qualitativeOutputs.length ? (
            <CaseStudyBlock id="qualitative-heading" title="Qualitative Outputs">
              <p className="body-text max-w-4xl">
                This section is designed to mirror the manuscript’s visual comparison narrative,
                contrasting SAR input, ground-truth RGB, and generated output across representative
                terrain types. Placeholder slots are in place now and can be replaced later with
                optimized figure exports for the live portfolio.
              </p>
              <div className="case-study-qualitative-grid">
                {qualitativeOutputs.map((item) => (
                  <MediaSlot
                    key={item.title}
                    title={item.title}
                    caption={item.caption}
                    asset={item.asset}
                    placeholder={item.placeholder}
                  />
                ))}
              </div>
            </CaseStudyBlock>
          ) : null}

          <CaseStudyBlock id="stack-heading" title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </CaseStudyBlock>

          <CaseStudyBlock id="why-heading" title="Why This Project Matters">
            <p className="body-text max-w-4xl">
              {project.whyThisProjectMatters || project.notableReason || project.outcome}
            </p>
          </CaseStudyBlock>

          <section className="case-study-notable" aria-labelledby="notable-heading">
            <p className="section-kicker">Why This Project Is Notable</p>
            <h2 id="notable-heading" className="section-title mt-3">
              A stronger signal of system design and applied intelligence
            </h2>
            <p className="body-text mt-4 max-w-4xl">
              {project.notableStatement || project.notableReason}
            </p>
          </section>

          <section className="case-study-cta" aria-labelledby="cta-heading">
            <div>
              <p className="section-kicker">Next Step</p>
              <h2 id="cta-heading" className="section-title mt-3">
                {project.ctaTitle || "Discuss the project"}
              </h2>
              <p className="body-text mt-4 max-w-3xl">
                {project.ctaCopy || project.notableReason}
              </p>
            </div>
            <div className="case-study-hero-actions">
              {showManuscriptSummary ? (
                <Button as="a" href={`#/projects/${project.slug}?section=manuscript-note-heading`}>
                  View Manuscript Summary
                </Button>
              ) : null}
              {project.githubUrl ? (
                <Button as="a" href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </Button>
              ) : null}
              {showArchitectureAction ? (
                <Button as="a" href="#architecture-heading">
                  View Architecture
                </Button>
              ) : null}
              <Button as="a" href={projectContactHref}>
                {contactLabel}
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

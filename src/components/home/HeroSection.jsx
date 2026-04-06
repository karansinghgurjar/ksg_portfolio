import { siteConfig } from "../../data/siteConfig.js";
import { socialLinks } from "../../data/socialLinks.js";
import { getAssetPath } from "../../utils/helpers.js";
import Button from "../common/Button.jsx";
import SocialIconButton from "../common/SocialIconButton.jsx";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="section-spacing grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr]"
      aria-labelledby="hero-heading"
    >
      <div className="reveal">
        <p className="section-kicker">{siteConfig.heroEyebrow}</p>
        <h1 id="hero-heading" className="hero-title">
          {siteConfig.name}
        </h1>
        <p className="hero-role">{siteConfig.heroRole}</p>
        <p className="hero-tagline">{siteConfig.heroTagline}</p>
        <p className="body-text mt-5 max-w-2xl">{siteConfig.heroIntro}</p>
        <p className="body-text mt-3 max-w-2xl">{siteConfig.heroSecondaryIntro}</p>

        <div className="hero-cta mt-8 flex flex-wrap items-center gap-3">
          <Button as="a" variant="primary" href="#contact">
            Contact Me
          </Button>
          <Button as="a" href="#/projects">
            View Projects
          </Button>
          <Button as="a" variant="tertiary" href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
            View Resume
          </Button>
          {socialLinks.map((link) => (
            <SocialIconButton key={link.label} {...link} />
          ))}
        </div>

        <div className="hero-credibility mt-8">
          {siteConfig.heroCredibilityChips.map((item) => (
            <span key={item} className="hero-credibility-chip">
              {item}
            </span>
          ))}
        </div>

        <div className="hero-research-callout">
          <p className="project-meta-label">{siteConfig.heroResearchCalloutTitle}</p>
          <p className="body-text mt-3 text-[0.95rem]">{siteConfig.heroResearchCalloutBody}</p>
        </div>

        <div className="meta-text mt-8 grid gap-3 md:grid-cols-3">
          {siteConfig.heroMeta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="relative reveal">
        <div className="hero-panel">
          <div className="hero-profile-head">
            <div className="hero-identity">
              <img
                src={getAssetPath("brand-logo.png")}
                alt={`${siteConfig.name} logo`}
                className="hero-photo"
              />
              <div>
                <p className="hero-photo-label">{siteConfig.heroPhotoLabel}</p>
                <p className="hero-photo-sub">{siteConfig.heroPhotoSub}</p>
              </div>
            </div>
            <div className="hero-status">
              <span className="hero-status-dot" aria-hidden="true" />
              <div>
                <p className="hero-status-label">{siteConfig.heroStatusLabel}</p>
                <p className="hero-status-value">{siteConfig.heroStatusValue}</p>
              </div>
            </div>
          </div>

          <div className="hero-panel-block" aria-labelledby="hero-specializations-title">
            <h2 id="hero-specializations-title" className="section-kicker">
              {siteConfig.heroSpecializationsTitle}
            </h2>
            <div className="hero-specializations">
              {siteConfig.heroSpecialties.map((item) => (
                <div key={item} className="hero-specialization-item">
                  <span className="hero-specialization-mark" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-currently-building" aria-labelledby="hero-current-title">
            <h3 id="hero-current-title" className="section-kicker">
              {siteConfig.heroCurrentTitle}
            </h3>
            <div className="hero-currently-list">
              {siteConfig.heroCurrentItems.map((item) => (
                <p key={item} className="body-text text-[0.95rem]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

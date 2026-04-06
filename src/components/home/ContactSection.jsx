import { siteConfig } from "../../data/siteConfig.js";
import { socialLinks } from "../../data/socialLinks.js";
import { getAssetPath } from "../../utils/helpers.js";
import Button from "../common/Button.jsx";
import Card from "../common/Card.jsx";
import SocialIconButton from "../common/SocialIconButton.jsx";

function ContactMethod({ label, value, action }) {
  return (
    <Card className="contact-method-card">
      <p className="project-meta-label">{label}</p>
      <p className="body-text mt-3 text-[0.95rem]">{value}</p>
      <div className="mt-5">{action}</div>
    </Card>
  );
}

export default function ContactSection() {
  const linkedin = socialLinks.find((link) => link.label === "LinkedIn");
  const github = socialLinks.find((link) => link.label === "GitHub");
  const trustItems = [
    {
      label: "Publication",
      title: "IEEE Research Paper",
      description: "Published work in bird sound classification and presentation-backed research delivery.",
      href: siteConfig.paperUrl,
      action: "Read Paper",
    },
    {
      label: "Certificate",
      title: "Conference Certificate",
      description: "Supporting proof document for IEEE ETECOM 2025 participation and presentation.",
      href: getAssetPath(siteConfig.certificateAsset),
      action: "Open Certificate",
    },
    {
      label: "Profile",
      title: "GitHub Portfolio",
      description: "Code history, repositories, and engineering work beyond the portfolio summary.",
      href: siteConfig.githubUrl,
      action: "View GitHub",
    },
  ];

  return (
    <section id="contact" className="section-spacing reveal" aria-labelledby="contact-heading">
      <div className="contact-shell">
        <Card className="contact-primary-card">
          <p className="section-kicker">{siteConfig.contactEyebrow}</p>
          <h2 id="contact-heading" className="section-title mt-3 max-w-3xl">
            {siteConfig.contactTitle}
          </h2>
          <p className="body-text mt-4 max-w-3xl">{siteConfig.contactCopy}</p>

          <div className="contact-reasons">
            {siteConfig.contactReasons.map((item) => (
              <div key={item} className="contact-reason-item">
                <span className="contact-reason-dot" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="contact-cta-row">
            <Button as="a" variant="primary" href={`mailto:${siteConfig.email}`}>
              Email Me
            </Button>
            <Button as="a" href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
              View Resume
            </Button>
            {linkedin ? (
              <Button as="a" variant="tertiary" href={linkedin.href} target="_blank" rel="noreferrer">
                LinkedIn
              </Button>
            ) : null}
          </div>
        </Card>

        <div className="contact-method-grid">
          <ContactMethod
            label="Email"
            value={siteConfig.email}
            action={
              <Button as="a" href={`mailto:${siteConfig.email}`}>
                Send Email
              </Button>
            }
          />
          <ContactMethod
            label="LinkedIn"
            value={linkedin?.href ?? "LinkedIn profile"}
            action={
              linkedin ? (
                <Button as="a" href={linkedin.href} target="_blank" rel="noreferrer">
                  Open LinkedIn
                </Button>
              ) : null
            }
          />
          <ContactMethod
            label="GitHub"
            value={github?.href ?? "GitHub profile"}
            action={
              github ? (
                <Button as="a" href={github.href} target="_blank" rel="noreferrer">
                  View GitHub
                </Button>
              ) : null
            }
          />
          <ContactMethod
            label="Resume"
            value="Downloadable profile for roles, hiring reviews, and recruiter sharing."
            action={
              <Button as="a" href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
                Open Resume
              </Button>
            }
          />
          <ContactMethod
            label="Location"
            value={siteConfig.location}
            action={
              <p className="meta-text">Available for remote, hybrid, and relocation discussions.</p>
            }
          />
          <ContactMethod
            label={siteConfig.availabilityLabel}
            value={siteConfig.availabilityValue}
            action={
              <div className="contact-social-inline">
                {socialLinks.map((link) => (
                  <SocialIconButton key={link.label} {...link} />
                ))}
              </div>
            }
          />
        </div>

        <div className="contact-trust-grid">
          {trustItems.map((item) => (
            <Card key={item.title} className="contact-trust-card">
              <p className="experience-proof-label">{item.label}</p>
              <h3 className="card-title mt-3">{item.title}</h3>
              <p className="body-text mt-3 text-[0.95rem]">{item.description}</p>
              <div className="mt-5">
                <Button as="a" href={item.href} target="_blank" rel="noreferrer">
                  {item.action}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

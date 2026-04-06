import { siteConfig } from "../../data/siteConfig.js";
import Card from "../common/Card.jsx";

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing reveal" aria-labelledby="about-heading">
      <div className="about-shell">
        <div className="about-copy">
          <p className="section-kicker">{siteConfig.aboutEyebrow}</p>
          <h2 id="about-heading" className="section-title mt-3 max-w-3xl">
            {siteConfig.aboutTitle}
          </h2>
          <div className="about-paragraphs">
            {siteConfig.aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="body-text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="about-values">
          {siteConfig.valueCards.map((item) => (
            <Card key={item.title} className="about-value-card">
              <p className="project-meta-label">{item.title}</p>
              <p className="body-text mt-3 text-[0.95rem]">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

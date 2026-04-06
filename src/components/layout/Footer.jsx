import { useMemo } from "react";
import { siteConfig } from "../../data/siteConfig.js";
import { socialLinks } from "../../data/socialLinks.js";
import { getAssetPath } from "../../utils/helpers.js";
import SocialIconButton from "../common/SocialIconButton.jsx";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="mt-20 border-t" style={{ borderColor: "var(--border-subtle)" }}>
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a className="flex items-center gap-3 text-lg font-bold" href="#top">
              <img
                className="logo-circle"
                src={getAssetPath("logo-mark.webp")}
                alt={`${siteConfig.name} logo`}
              />
              <span>{siteConfig.shortName}</span>
            </a>
            <p className="meta-text mt-4 max-w-xs">
              {siteConfig.footerDescription}
            </p>
          </div>

          <div>
            <h4 className="card-title">Quick Links</h4>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              <a className="meta-text transition hover:text-[var(--text-primary)]" href="#/projects">
                Projects
              </a>
              <a className="meta-text transition hover:text-[var(--text-primary)]" href="#experience">
                Experience
              </a>
              <a className="meta-text transition hover:text-[var(--text-primary)]" href="#skills">
                Skills
              </a>
              <a className="meta-text transition hover:text-[var(--text-primary)]" href="#contact">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="card-title">Get in Touch</h4>
            <div className="meta-text mt-4 space-y-3">
              <p className="flex items-center gap-2">
                <span>📍</span> {siteConfig.location}
              </p>
              <a
                className="flex items-center gap-2 transition hover:text-[var(--text-primary)]"
                href={`mailto:${siteConfig.email}`}
              >
                <span>✉️</span> {siteConfig.email}
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((link) => (
                <SocialIconButton key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>

        <div className="meta-text mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row" style={{ borderColor: "var(--border-subtle)" }}>
          <span>© {year} {siteConfig.name}. All rights reserved.</span>
          <span>{siteConfig.footerBuiltWith}</span>
        </div>
      </div>
    </footer>
  );
}

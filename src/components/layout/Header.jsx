import { useEffect, useState } from "react";
import { siteConfig } from "../../data/siteConfig.js";
import { getAssetPath, joinClasses } from "../../utils/helpers.js";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { label: "Projects", href: "#/projects", matchesRoute: "projects" },
  { label: "Vlog", href: "#/vlog", matchesRoute: "vlog" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Header({
  routePage,
  themeMode,
  onToggleTheme,
  activeSection = "top",
}) {
  const [isCompact, setIsCompact] = useState(false);
  const isPortfolio = routePage === "portfolio";
  const brandHref = isPortfolio ? "#top" : "#/";

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={joinClasses(
        "site-header mx-auto w-full max-w-6xl px-4 py-4 sm:px-6",
        isCompact && "is-compact"
      )}
    >
      <div className="header-shell">
        <div className="header-top">
          <a
            className="brand-link"
            href={brandHref}
            aria-label={isPortfolio ? "Back to top of portfolio" : "Back to portfolio home"}
          >
            <img
              className="logo-circle"
              src={getAssetPath("brand-logo.png")}
              alt={`${siteConfig.name} logo`}
            />
            <span className="brand-mark">{siteConfig.shortName}</span>
          </a>
          <ThemeToggle themeMode={themeMode} onToggle={onToggleTheme} />
        </div>
        {isPortfolio ? (
          <nav className="nav-pill header-nav" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = item.matchesRoute
                ? routePage === item.matchesRoute
                : activeSection === item.sectionId;

              return (
                <a
                  key={item.label}
                  className={joinClasses("nav-link", isActive && "is-active")}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

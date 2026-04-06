import { useEffect, useState } from "react";
import ContactSection from "../components/home/ContactSection.jsx";
import ExperienceSection from "../components/home/ExperienceSection.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import AboutSection from "../components/home/AboutSection.jsx";
import FeaturedProjectsSection from "../components/home/FeaturedProjectsSection.jsx";
import SkillsSection from "../components/home/SkillsSection.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import { projects } from "../data/projects.js";

export default function HomePage({ themeMode, onToggleTheme, routeSection = "top", skipLink }) {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const revealTargets = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    revealTargets.forEach((node) => revealObserver.observe(node));

    const sections = document.querySelectorAll("main section[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.1 }
    );

    sections.forEach((node) => sectionObserver.observe(node));

    const nextSection = routeSection || "top";
    setActiveSection(nextSection);

    window.requestAnimationFrame(() => {
      document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));

      if (nextSection !== "top") {
        const target = document.getElementById(nextSection);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [routeSection]);

  return (
    <div className="page-shell">
      {skipLink}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
      <Header
        routePage="portfolio"
        themeMode={themeMode}
        onToggleTheme={onToggleTheme}
        activeSection={activeSection}
      />
      <main id="main-content" className="page-main px-6" tabIndex="-1">
        <HeroSection />
        <AboutSection />
        <FeaturedProjectsSection
          projects={projects}
          title="Featured Projects"
          subtitle="A selection of research and engineering projects focused on AI, systems, and applied software design."
          ctaLabel="View All Projects"
          ctaHref="#/projects"
        />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

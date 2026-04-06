import { useEffect } from "react";
import { projects } from "../data/projects.js";
import { siteConfig } from "../data/siteConfig.js";
import { findProjectByRouteId } from "../utils/projectHelpers.js";

function updateMeta(selector, attribute, value) {
  const node = document.querySelector(selector);
  if (!node) return;
  node.setAttribute(attribute, value);
}

function updateStructuredData(route) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: "AI/ML Engineer and Full Stack Developer",
    description: siteConfig.defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
      addressCountry: "India",
    },
    sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
    knowsAbout: siteConfig.keywords,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        route.page === "projects"
          ? `${siteConfig.siteUrl}#/projects`
          : siteConfig.siteUrl,
    },
  };

  let script = document.getElementById("structured-data");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "structured-data";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function useSeoMetadata(route) {
  useEffect(() => {
    const selectedProject = route.projectId ? findProjectByRouteId(projects, route.projectId) : null;
    const isProjects = route.page === "projects";
    const isProjectCaseStudy = Boolean(selectedProject);
    const title = siteConfig.shortName;
    const description = isProjectCaseStudy
      ? selectedProject.shortDescription
      : isProjects
        ? "Projects and case studies by Karan Singh Gurjar covering AI/ML systems, research prototypes, and full stack product development."
        : siteConfig.defaultDescription;
    const url = isProjectCaseStudy
      ? `${siteConfig.siteUrl}#/projects/${selectedProject.slug}`
      : isProjects
        ? `${siteConfig.siteUrl}#/projects`
        : siteConfig.siteUrl;
    const imageUrl = `${siteConfig.siteUrl}${siteConfig.ogImage}`;

    document.title = title;

    updateMeta('meta[name="description"]', "content", description);
    updateMeta('meta[name="keywords"]', "content", siteConfig.keywords.join(", "));
    updateMeta('meta[name="author"]', "content", siteConfig.name);
    updateMeta('meta[name="robots"]', "content", "index, follow");
    updateMeta('meta[name="theme-color"]', "content", "#07111f");
    updateMeta('meta[property="og:title"]', "content", title);
    updateMeta('meta[property="og:description"]', "content", description);
    updateMeta('meta[property="og:url"]', "content", url);
    updateMeta('meta[property="og:image"]', "content", imageUrl);
    updateMeta('meta[property="og:site_name"]', "content", siteConfig.name);
    updateMeta('meta[property="og:locale"]', "content", "en_US");
    updateMeta('meta[name="twitter:title"]', "content", title);
    updateMeta('meta[name="twitter:description"]', "content", description);
    updateMeta('meta[name="twitter:image"]', "content", imageUrl);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", url);
    }

    updateStructuredData(route);
  }, [route.page, route.projectId]);
}

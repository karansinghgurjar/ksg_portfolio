export function getHomepageFeaturedProjects(projects = []) {
  return [...projects]
    .filter((project) => project.homepageFeatured)
    .sort(
      (left, right) =>
        (left.homepageOrder ?? Number.MAX_SAFE_INTEGER) -
        (right.homepageOrder ?? Number.MAX_SAFE_INTEGER)
    );
}

export function getArchiveProjects(projects = []) {
  return [...projects].sort(
    (left, right) =>
      (left.archiveOrder ?? Number.MAX_SAFE_INTEGER) -
      (right.archiveOrder ?? Number.MAX_SAFE_INTEGER)
  );
}

export function getArchiveCategory(project) {
  return project.archiveCategory ?? "Applications";
}

export function findProjectByRouteId(projects = [], routeId = "") {
  if (!routeId) return null;

  return (
    projects.find((project) => project.slug === routeId || project.id === routeId) ||
    projects.find((project) => project.legacySlugs?.includes(routeId)) ||
    null
  );
}

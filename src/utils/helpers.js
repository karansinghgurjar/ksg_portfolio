export function joinClasses(...values) {
  return values.filter(Boolean).join(" ");
}

export function getRouteFromHash() {
  const hash = window.location.hash || "#/";

  if (hash.startsWith("#/vlog/")) {
    return {
      page: "vlog",
      projectId: decodeURIComponent(hash.replace("#/vlog/", "").trim()),
      sectionId: "",
    };
  }

  if (hash.startsWith("#/vlog")) return { page: "vlog", projectId: "", sectionId: "" };

  if (hash.startsWith("#/projects/")) {
    const rawProjectPath = hash.replace("#/projects/", "").trim();
    const [projectPart, queryPart = ""] = rawProjectPath.split("?");
    const params = new URLSearchParams(queryPart);

    return {
      page: "projects",
      projectId: decodeURIComponent(projectPart),
      sectionId: params.get("section") || "",
    };
  }

  if (hash.startsWith("#/projects")) return { page: "projects", projectId: "", sectionId: "" };

  if (hash.startsWith("#") && !hash.startsWith("#/")) {
    return {
      page: "portfolio",
      projectId: "",
      sectionId: hash.replace("#", "").trim() || "top",
    };
  }

  return { page: "portfolio", projectId: "", sectionId: "top" };
}

export function getAssetPath(asset) {
  return `${import.meta.env.BASE_URL}${asset}`;
}

export function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function formatDateTime(value) {
  return new Date(value).toLocaleString();
}

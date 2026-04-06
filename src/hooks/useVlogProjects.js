import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "../data/siteConfig.js";
import { getStoredJson, setStoredJson } from "../utils/storage.js";

export function useVlogProjects() {
  const [vlogProjects, setVlogProjects] = useState([]);

  useEffect(() => {
    const savedProjects = getStoredJson(siteConfig.storageKeys.vlogProjects, []);
    setVlogProjects(Array.isArray(savedProjects) ? savedProjects : []);
  }, []);

  useEffect(() => {
    setStoredJson(siteConfig.storageKeys.vlogProjects, vlogProjects);
  }, [vlogProjects]);

  const createProject = ({ name, description }) => {
    const nextProject = {
      id: `project_${Date.now()}`,
      name,
      description,
      entries: [],
      createdAt: new Date().toISOString(),
    };

    setVlogProjects((prev) => [nextProject, ...prev]);
    return nextProject;
  };

  const addEntryToProject = ({ projectId, title, content, images }) => {
    const nextEntry = {
      id: `entry_${Date.now()}`,
      title,
      content,
      images,
      createdAt: new Date().toISOString(),
    };

    setVlogProjects((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? { ...project, entries: [nextEntry, ...project.entries] }
          : project
      )
    );
  };

  const projectMap = useMemo(
    () => new Map(vlogProjects.map((project) => [project.id, project])),
    [vlogProjects]
  );

  return {
    vlogProjects,
    createProject,
    addEntryToProject,
    getProjectById: (projectId) => projectMap.get(projectId) ?? null,
  };
}

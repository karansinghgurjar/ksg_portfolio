import { useState } from "react";
import Button from "../components/common/Button.jsx";
import Card from "../components/common/Card.jsx";

export default function VlogPage({ header, skipLink, projects, onCreateProject }) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!projectName.trim()) return;

    onCreateProject({
      name: projectName,
      description: projectDescription,
    });

    setProjectName("");
    setProjectDescription("");
  };

  return (
    <div className="page-shell">
      {skipLink}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
      {header}
      <main id="main-content" className="page-main px-4 py-12 sm:px-6" tabIndex="-1">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h1 className="page-title">Vlog Projects</h1>
          <Button as="a" href="#/">
            Back to Portfolio
          </Button>
        </div>

        <section className="space-y-6">
          <Card>
            <h2 className="card-title">Create New Vlog Project</h2>
            <form className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]" onSubmit={handleSubmit}>
              <input
                className="vlog-input"
                placeholder="Project name"
                value={projectName}
                onChange={(event) => setProjectName(event.target.value)}
              />
              <input
                className="vlog-input"
                placeholder="Short description"
                value={projectDescription}
                onChange={(event) => setProjectDescription(event.target.value)}
              />
              <Button type="submit">Create</Button>
            </form>
          </Card>

          <div className="vlog-project-grid">
            {projects.length > 0 ? (
              projects.map((project) => (
                <Card key={project.id} className="vlog-project-card">
                  <h3 className="card-title">{project.name}</h3>
                  <p className="body-text mt-2 text-[0.95rem]">
                    {project.description || "No description added yet."}
                  </p>
                  <p className="meta-text mt-3">
                    {(project.entries ?? []).length} entries
                  </p>
                  <div className="mt-4">
                    <Button as="a" variant="secondary" href={`#/vlog/${encodeURIComponent(project.id)}`}>
                      Open Project Page
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <p className="meta-text">No projects yet. Create your first vlog project.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

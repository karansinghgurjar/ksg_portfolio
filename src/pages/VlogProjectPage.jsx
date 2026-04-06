import { useState } from "react";
import Button from "../components/common/Button.jsx";
import Card from "../components/common/Card.jsx";
import { formatDateTime, readFileAsDataUrl } from "../utils/helpers.js";

export default function VlogProjectPage({ header, project, projectId, onAddEntry }) {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryContent, setEntryContent] = useState("");
  const [entryScreenshots, setEntryScreenshots] = useState([]);

  const addScreenshots = async (event) => {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) return;

    try {
      const sources = await Promise.all(files.map((file) => readFileAsDataUrl(file)));
      const images = sources.map((src, index) => ({
        id: `img_${Date.now()}_${index}`,
        src,
        name: files[index].name,
        placement: "center",
      }));

      setEntryScreenshots((prev) => [...prev, ...images]);
    } catch {
      // ignore invalid file read failures
    } finally {
      event.target.value = "";
    }
  };

  const setScreenshotPlacement = (imageId, placement) => {
    setEntryScreenshots((prev) =>
      prev.map((image) => (image.id === imageId ? { ...image, placement } : image))
    );
  };

  const moveScreenshot = (imageId, direction) => {
    setEntryScreenshots((prev) => {
      const index = prev.findIndex((image) => image.id === imageId);
      if (index < 0) return prev;

      const nextIndex = direction === "up" ? index - 1 : index + 1;
      if (nextIndex < 0 || nextIndex >= prev.length) return prev;

      const cloned = [...prev];
      [cloned[index], cloned[nextIndex]] = [cloned[nextIndex], cloned[index]];
      return cloned;
    });
  };

  const removeScreenshot = (imageId) => {
    setEntryScreenshots((prev) => prev.filter((image) => image.id !== imageId));
  };

  const handleSaveEntry = (event) => {
    event.preventDefault();
    const title = entryTitle.trim();
    const content = entryContent.trim();

    if (!projectId || !title || !content) return;

    onAddEntry({
      projectId,
      title,
      content,
      images: entryScreenshots,
    });

    setEntryTitle("");
    setEntryContent("");
    setEntryScreenshots([]);
  };

  return (
    <div className="page-shell">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise" />
      {header}
      <main className="page-main px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h1 className="page-title">
            {project ? project.name : "Vlog Project"}
          </h1>
          <Button as="a" href="#/vlog">
            Back to Vlog Projects
          </Button>
        </div>

        {!project ? (
          <Card>
            <p className="meta-text">
              Project not found. Please return to Vlog Projects and open an existing one.
            </p>
          </Card>
        ) : (
          <section className="vlog-layout">
            <Card>
              <h2 className="card-title">Add Vlog Entry</h2>
              <p className="body-text mt-2 text-[0.95rem]">
                {project.description || "No description added yet."}
              </p>

              <form className="mt-5 space-y-3" onSubmit={handleSaveEntry}>
                <input
                  className="vlog-input"
                  placeholder="Entry title"
                  value={entryTitle}
                  onChange={(event) => setEntryTitle(event.target.value)}
                />
                <textarea
                  className="vlog-input min-h-[140px]"
                  placeholder="Write vlog content..."
                  value={entryContent}
                  onChange={(event) => setEntryContent(event.target.value)}
                />

                <div className="screenshot-upload-box">
                  <label className="card-title text-[0.95rem]">Add screenshots</label>
                  <input
                    className="mt-2 block w-full text-sm"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={addScreenshots}
                  />
                  <p className="meta-text mt-2">
                    Upload multiple images, set placement, and reorder them.
                  </p>
                </div>

                {entryScreenshots.length > 0 ? (
                  <div className="space-y-2">
                    {entryScreenshots.map((image, index) => (
                      <div key={image.id} className="screenshot-item">
                        <img src={image.src} alt={image.name} className="screenshot-preview" />
                        <div className="screenshot-controls">
                          <p className="meta-text font-semibold">{image.name}</p>
                          <select
                            className="vlog-input"
                            value={image.placement}
                            onChange={(event) =>
                              setScreenshotPlacement(image.id, event.target.value)
                            }
                          >
                            <option value="full">Full Width</option>
                            <option value="center">Center</option>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                          </select>
                          <div className="flex gap-2">
                            <Button
                              variant="tertiary"
                              type="button"
                              onClick={() => moveScreenshot(image.id, "up")}
                              disabled={index === 0}
                            >
                              Up
                            </Button>
                            <Button
                              variant="tertiary"
                              type="button"
                              onClick={() => moveScreenshot(image.id, "down")}
                              disabled={index === entryScreenshots.length - 1}
                            >
                              Down
                            </Button>
                            <Button
                              variant="tertiary"
                              type="button"
                              onClick={() => removeScreenshot(image.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                <Button variant="primary" type="submit">
                  Save Entry
                </Button>
              </form>
            </Card>

            <Card>
              <h2 className="card-title">All Entries</h2>
              <div className="mt-6 space-y-5">
                {project.entries.length > 0 ? (
                  project.entries.map((entry) => (
                    <article key={entry.id} className="vlog-entry">
                      <h3 className="card-title">{entry.title}</h3>
                      <p className="meta-text mt-1">
                        {formatDateTime(entry.createdAt)}
                      </p>
                      <p className="body-text mt-3 whitespace-pre-wrap text-[0.95rem]">
                        {entry.content}
                      </p>
                      {entry.images?.length > 0 ? (
                        <div className="mt-4 space-y-3">
                          {entry.images.map((image) => (
                            <figure
                              key={image.id}
                              className={`vlog-media vlog-media-${image.placement || "center"}`}
                            >
                              <img src={image.src} alt={image.name || "Vlog screenshot"} />
                            </figure>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  ))
                ) : (
                  <p className="meta-text">
                    No entries yet. Add your first vlog entry here.
                  </p>
                )}
              </div>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
}

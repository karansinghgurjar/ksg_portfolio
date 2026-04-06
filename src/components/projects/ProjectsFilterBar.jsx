const defaultCategories = ["All", "Research", "Systems", "Applications"];

export default function ProjectsFilterBar({
  categories = defaultCategories,
  activeCategory = "All",
  onCategoryChange,
}) {
  return (
    <div className="project-filter-row">
      {categories.map((category) => (
        <button
          key={category}
          className={`project-filter-btn ${activeCategory === category ? "is-active" : ""}`}
          type="button"
          onClick={() => onCategoryChange?.(category)}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

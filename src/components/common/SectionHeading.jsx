export default function SectionHeading({ id, title, description }) {
  return (
    <div>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {description ? (
        <p className="body-text mt-3 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}

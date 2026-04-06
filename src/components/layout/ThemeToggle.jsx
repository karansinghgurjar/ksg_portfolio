import Button from "../common/Button.jsx";

export default function ThemeToggle({ themeMode, onToggle }) {
  const label =
    themeMode === "system" ? "Auto" : themeMode === "dark" ? "Dark" : "Light";
  const ariaLabel = `Theme mode: ${label}. Activate to cycle theme preference.`;

  return (
    <Button variant="toggle" onClick={onToggle} aria-label={ariaLabel} title={ariaLabel}>
      {label}
    </Button>
  );
}

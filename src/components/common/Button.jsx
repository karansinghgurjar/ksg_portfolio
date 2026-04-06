import { joinClasses } from "../../utils/helpers.js";

export default function Button({
  as = "button",
  variant = "secondary",
  disabled = false,
  className = "",
  children,
  ...props
}) {
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "icon"
        ? "icon-btn"
        : variant === "tertiary"
          ? "btn-tertiary"
        : variant === "toggle"
          ? "toggle-btn"
        : "btn-secondary";

  const classes = joinClasses(variantClass, disabled && "btn-disabled", className);

  if (as === "a") {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (as === "span") {
    return <span className={classes}>{children}</span>;
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

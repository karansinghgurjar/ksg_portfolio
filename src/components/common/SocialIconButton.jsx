import Button from "./Button.jsx";
import { getAssetPath } from "../../utils/helpers.js";

export default function SocialIconButton({ href, label, icon }) {
  return (
    <Button
      as="a"
      variant="icon"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <img src={getAssetPath(icon)} alt="" aria-hidden="true" />
    </Button>
  );
}

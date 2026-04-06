import { joinClasses } from "../../utils/helpers.js";

export default function Card({ className = "", children }) {
  return <div className={joinClasses("card", className)}>{children}</div>;
}

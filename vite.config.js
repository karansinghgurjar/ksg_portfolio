import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages project site path: https://<user>.github.io/<repo>/
  base: "/ksg_portfolio/",
  plugins: [react()],
});

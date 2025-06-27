import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/protfoliolatest/", // <- Important for GitHub Pages
});

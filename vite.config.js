import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { webfontDownload } from "vite-plugin-webfont-dl";

export default defineConfig({
  plugins: [solidPlugin(), webfontDownload()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: 3000,
  },
});

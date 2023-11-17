import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import webfontDownload from "vite-plugin-webfont-dl";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    solidPlugin(),
    webfontDownload(),
    viteCompression({
      algorithm: "brotliCompress",
      filter: /\.(js|mjs|ts|tsx|json|css|html)$/i,
    }),],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    sourcemap: true
  },
  preview: {
    port: 3000,
  },
});

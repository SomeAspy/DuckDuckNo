import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
import webfontDownload from "vite-plugin-webfont-dl";

export default defineConfig({
	plugins: [
		solidPlugin(),
		webfontDownload(),
		solidSvg({
			svgo: {
				enabled: true,
				svgoConfig: {
					multipass: true,
					plugins: [
						"preset-default",
						"cleanupListOfValues",
						"removeDimensions",
						"removeOffCanvasPaths",
						"removeXMLNS",
						"reusePaths",
					],
				},
			},
		}),
	],
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

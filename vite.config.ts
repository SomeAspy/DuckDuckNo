import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import webfontDownload from "vite-plugin-webfont-dl";
import solidSvg from "vite-plugin-solid-svg";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        solidPlugin(),
        webfontDownload(),
        viteCompression({
            algorithm: "brotliCompress",
            filter: /\.(js|mjs|ts|tsx|json|css|html)$/i,
        }),
        solidSvg({
            defaultAsComponent: true,
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

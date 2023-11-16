import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import webfontDownload from "vite-plugin-webfont-dl";
import solidSvg from "vite-plugin-solid-svg";
import viteCompression from "vite-plugin-compression";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
    plugins: [
        /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
        // devtools(),
        solidPlugin(),
        webfontDownload(),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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

import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, ".", "");
    return {
        base: "/", // Use site root for GitHub Pages / subdomain
        server: {
            port: 5173,
            host: "0.0.0.0",
        },
        plugins: [react()],
        define: {
            "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
            "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "."),
            },
        },
        build: {
            rollupOptions: {
                output: {
                    // Add hash to filenames for cache busting
                    entryFileNames: `assets/[name].[hash].js`,
                    chunkFileNames: `assets/[name].[hash].js`,
                    assetFileNames: `assets/[name].[hash].[ext]`,
                },
            },
        },
    };
});

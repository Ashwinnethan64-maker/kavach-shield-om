import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = Number(process.env.PORT || 5173);

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 70, compressionLevel: 9 },
      jpeg: { quality: 70 },
      jpg: { quality: 70 },
      webp: { quality: 70, lossless: false, effort: 6 },
      avif: { quality: 60, effort: 6 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    reportCompressedSize: false,
    minify: "esbuild",
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true
    },
    target: "esnext",
    rollupOptions: {
      output: {
      },
    },
  },
  server: {
    port,
    strictPort: false,
    host: true,
  },
  preview: {
    port,
    host: true,
  },
});

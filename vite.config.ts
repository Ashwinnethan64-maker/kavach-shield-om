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
      png: { quality: 80, compressionLevel: 8 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80, lossless: false },
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
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "framer-motion", "lucide-react"],
        }
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

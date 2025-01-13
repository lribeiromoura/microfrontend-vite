import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      // Name that identifies this application that the host will use to import
      name: "remote-app",
      // File that will be available at the remote endpoint
      filename: "remoteEntry.js",
      // Modules (components, functions, etc.) that will be exposed to other projects, here, I am exporting the application as a
      exposes: {
        "./Application": "./src/App.tsx",
      },
      // Shared dependencies
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});

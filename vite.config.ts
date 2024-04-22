import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins : [
    // Solves type script paths
    tsconfigPaths(),
  ]
});
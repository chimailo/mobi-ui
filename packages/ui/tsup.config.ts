import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  external: ["react"],
  sourcemap: true, // generating sourcemaps
  clean: true, // clean the output directory before each build
  minify: true, // enable minification for smaller bundle size
  treeshake: true, // remove unused code using rollup treeshake
  ...options,
}));

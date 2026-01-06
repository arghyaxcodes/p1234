import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    entry: ["generated/**/*.ts"],
    outDir: "fonts",
    target: "node20",
    format: ["esm", "cjs"],
    clean: false,
    bundle: false,
    splitting: false,
    minify: !options.watch,
    dts: true,
}));

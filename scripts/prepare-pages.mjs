import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(rootDir, "dist");
const indexFile = join(distDir, "index.html");
const notFoundFile = join(distDir, "404.html");
const cnameFile = join(distDir, "CNAME");
const noJekyllFile = join(distDir, ".nojekyll");

if (!existsSync(distDir)) {
  throw new Error("dist directory not found; run the build before preparing Pages output");
}

copyFileSync(indexFile, notFoundFile);
writeFileSync(cnameFile, "leary.work\n");
writeFileSync(noJekyllFile, "");

// Keep the dist/assets directory intact even if this runs before assets are generated.
mkdirSync(join(distDir, "assets"), { recursive: true });

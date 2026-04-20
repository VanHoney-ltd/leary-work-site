import { copyFileSync, existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
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

// Copy NovaSignal app to dist/novasignal after build
const novaSignalSource = join(rootDir, "..", "NovaSignal", "app", "dist");
const novaSignalDest = join(distDir, "novasignal");

if (existsSync(novaSignalSource)) {
  mkdirSync(novaSignalDest, { recursive: true });
  const files = readdirSync(novaSignalSource);
  for (const file of files) {
    const srcPath = join(novaSignalSource, file);
    const destPath = join(novaSignalDest, file);
    if (existsSync(srcPath)) {
      if (file === "assets") {
        mkdirSync(destPath, { recursive: true });
        const assetFiles = readdirSync(srcPath);
        for (const assetFile of assetFiles) {
          copyFileSync(join(srcPath, assetFile), join(destPath, assetFile));
        }
      } else {
        copyFileSync(srcPath, destPath);
      }
    }
  }
}

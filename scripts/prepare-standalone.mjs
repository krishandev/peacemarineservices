/**
 * Copies public assets and Next.js static files into the standalone output
 * so `node .next/standalone/server.js` can serve images and CSS.
 */
import { access, cp, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const standalone = path.join(root, ".next/standalone");

try {
  await access(standalone);
} catch {
  console.log("Standalone output not found; skipping copy.");
  process.exit(0);
}

await cp(path.join(root, "public"), path.join(standalone, "public"), {
  recursive: true,
});
await mkdir(path.join(standalone, ".next"), { recursive: true });
await cp(
  path.join(root, ".next/static"),
  path.join(standalone, ".next/static"),
  { recursive: true },
);

console.log("Standalone public and .next/static assets copied.");

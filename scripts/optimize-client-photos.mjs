/**
 * Creates approved WebP derivatives in public/images/client/optimized/.
 * Does not overwrite original client files.
 */
import { mkdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "public/images/client");
const outDir = path.join(root, "public/images/client/optimized");

const jobs = [
  ["WhatsApp Image 2025-04-06 at 8.09.25 AM.jpeg", "hero-container-ship-harbour.webp"],
  ["WhatsApp Image 2023-11-24 at 5.11.11 PM.jpeg", "vessel-alongside-berth.webp"],
  ["WhatsApp Image 2024-06-05 at 10.06.00 AM (2).jpeg", "tanker-deck-personnel.webp"],
  ["marine inspection services.jpeg", "tanker-deck-green.webp"],
  ["WhatsApp Image 2024-12-31 at 3.03.27 PM.jpeg", "mooring-winch.webp"],
  ["WhatsApp Image 2025-05-16 at 10.07.13 AM (1).jpeg", "rescue-boat-deck.webp"],
  ["WhatsApp Image 2023-08-27 at 9.57.17 AM.jpeg", "enclosed-lifeboat.webp"],
  ["WhatsApp Image 2024-10-20 at 9.32.19 AM (1).jpeg", "bulk-carrier-loading.webp"],
  ["WhatsApp Image 2024-12-31 at 3.03.26 PM.jpeg", "bulk-carrier-hatches.webp"],
  ["marine inspection services3.jpeg", "bridge-gmdss.webp"],
  ["marine inspection services1.jpeg", "bridge-console.webp"],
  ["WhatsApp Image 2024-09-22 at 11.46.04 AM.jpeg", "bridge-ecdis.webp"],
  ["WhatsApp Image 2023-08-27 at 9.42.27 AM.jpeg", "bridge-wide.webp"],
  ["WhatsApp Image 2024-11-14 at 11.53.35 AM (1).jpeg", "ship-at-sea.webp"],
  ["WhatsApp Image 2026-03-30 at 10.18.19 AM.jpeg", "container-terminal-gantries.webp"],
  ["Marine Surveyor Australia.jpeg", "container-ship-alongside.webp"],
  ["WhatsApp Image 2023-12-25 at 8.41.13 AM.jpeg", "container-bay.webp"],
  ["WhatsApp Image 2025-11-20 at 11.28.47 AM (1).jpeg", "cargo-loading-wharf.webp"],
  ["WhatsApp Image 2023-11-24 at 5.11.28 PM.jpeg", "bulk-deck-crane.webp"],
];

await mkdir(outDir, { recursive: true });

for (const [inputName, outputName] of jobs) {
  const input = path.join(srcDir, inputName);
  const output = path.join(outDir, outputName);
  await access(input);
  await sharp(input)
    .rotate()
    .resize({ width: 1800, withoutEnlargement: true })
    .sharpen({ sigma: 0.45 })
    .webp({ quality: 82, effort: 5 })
    .toFile(output);
  const meta = await sharp(output).metadata();
  console.log(
    `${outputName} ${meta.width}x${meta.height} ${(meta.size / 1024).toFixed(0)}KB`,
  );
}

console.log("Done", jobs.length, "derivatives");

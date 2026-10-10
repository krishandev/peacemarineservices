import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = "public/images/client";
const out = "public/images/client/_audit";
fs.mkdirSync(out, { recursive: true });

const files = fs
  .readdirSync(dir)
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && !f.startsWith("_"))
  .sort();

const thumbs = [];
for (const f of files) {
  const buf = await sharp(path.join(dir, f))
    .resize(240, 160, { fit: "cover", position: "centre" })
    .jpeg({ quality: 72 })
    .toBuffer();
  thumbs.push({ f, buf });
}

const cols = 8;
const cellH = 180;
const rows = Math.ceil(thumbs.length / cols);
const composites = [];

for (let i = 0; i < thumbs.length; i += 1) {
  const x = (i % cols) * 240;
  const y = Math.floor(i / cols) * cellH;
  composites.push({ input: thumbs[i].buf, left: x, top: y });
  const labelSvg = Buffer.from(
    `<svg width="240" height="20"><rect width="240" height="20" fill="#111"/><text x="4" y="14" font-size="10" fill="#fff" font-family="Arial">${String(i).padStart(3, "0")}</text></svg>`,
  );
  composites.push({
    input: await sharp(labelSvg).png().toBuffer(),
    left: x,
    top: y + 160,
  });
}

await sharp({
  create: {
    width: cols * 240,
    height: rows * cellH,
    channels: 3,
    background: "#111111",
  },
})
  .composite(composites)
  .jpeg({ quality: 82 })
  .toFile(path.join(out, "contact-sheet.jpg"));

fs.writeFileSync(
  path.join(out, "index.json"),
  JSON.stringify(
    thumbs.map((t, i) => ({ i, f: t.f })),
    null,
    2,
  ),
);

console.log(`wrote ${thumbs.length} thumbs`);

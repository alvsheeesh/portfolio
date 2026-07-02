// Optimiza las imágenes raster de public/: convierte jpg/png a WebP (q80)
// con un ancho máximo, dejando el original intacto para borrarlo a mano
// una vez actualizadas las referencias. Uso: npm run optimize:images
//
// Excepciones:
// - apple-touch-icon.png: iOS requiere PNG.
// - projects/portfolio-cover.jpg: es el og:image por defecto (BaseLayout);
//   algunos scrapers de link previews siguen prefiriendo JPG/PNG, así que
//   solo se recomprime en sitio como JPG.
// - SVGs y PDFs: no se tocan.
import sharp from "sharp";
import { readdirSync, statSync, existsSync, writeFileSync, unlinkSync } from "fs";
import path from "path";

const ROOT = "public";
const QUALITY = 80;
const DEFAULT_MAX_WIDTH = 1600; // portadas/previews de proyectos

const SKIP = new Set(["public/apple-touch-icon.png"]);
const RECOMPRESS_JPG_IN_PLACE = new Set(["public/projects/portfolio-cover.jpg"]);
// Foto del hero: se renderiza como máximo a 288px CSS (md:size-72) → 576px @2x
const MAX_WIDTHS = { "public/profile.jpg": 576 };

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name)
  );

const kb = (bytes) => (bytes / 1024).toFixed(1) + " KB";

const images = walk(ROOT).filter(
  (f) => /\.(jpe?g|png)$/i.test(f) && !SKIP.has(f)
);

for (const file of images) {
  const before = statSync(file).size;
  const maxWidth = MAX_WIDTHS[file] ?? DEFAULT_MAX_WIDTH;

  if (RECOMPRESS_JPG_IN_PLACE.has(file)) {
    const buf = await sharp(file)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();
    // Umbral del 10%: evita recomprimir un JPG ya optimizado en cada run
    // (cada pasada lossy degrada un poco la imagen)
    if (buf.length < before * 0.9) {
      writeFileSync(file, buf);
      console.log(`${file}: ${kb(before)} -> ${kb(buf.length)} (jpg, in place)`);
    } else {
      console.log(`${file}: ya óptimo (${kb(before)})`);
    }
    continue;
  }

  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  if (existsSync(out) && statSync(out).mtimeMs >= statSync(file).mtimeMs) {
    console.log(`${out}: ya existe, se omite`);
    continue;
  }
  await sharp(file)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);
  const after = statSync(out).size;
  if (after >= before) {
    // WebP no gana nada (p. ej. line art que ya comprime bien como PNG)
    unlinkSync(out);
    console.log(`${file}: se mantiene (webp saldría más grande: ${kb(after)} vs ${kb(before)})`);
  } else {
    console.log(`${file}: ${kb(before)} -> ${kb(after)} (${out})`);
  }
}

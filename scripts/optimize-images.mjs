// One-off asset optimizer. Run with: node scripts/optimize-images.mjs
// Resizes/recompresses the oversized PNG logos in place (same filenames, so no
// code changes needed) and converts the giant animated GIF to a far smaller
// animated WebP.
import sharp from 'sharp'
import { readFile, writeFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

sharp.cache(false)
const DIR = 'public/images'
const kb = (n) => `${(n / 1024).toFixed(0)} KB`

// PNGs: [file, maxWidth] — width chosen ~2x the largest on-screen render size.
const pngs = [
  ['StarNode_main_logo_Graphic_02_not_animated-1.png', 640],
  ['StarNode_main.png', 256],
  ['StarNode-main-logo-revised-final-1.png', 520],
  ['Homepage2charupdate-e1739827451898.png', 900],
]

for (const [file, width] of pngs) {
  const p = path.join(DIR, file)
  if (!existsSync(p)) { console.log(`skip (missing): ${file}`); continue }
  const before = (await stat(p)).size
  const input = await readFile(p)
  const out = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 80, palette: true })
    .toBuffer()
  await writeFile(p, out)
  console.log(`${file}: ${kb(before)} -> ${kb(out.length)}`)
}

// GIF -> animated WebP (huge win on the character render).
// Source gif may live at the repo-root images/ folder once removed from public/.
{
  const src = ['public/images/render-gif-1.gif', 'images/render-gif-1.gif'].find(existsSync)
  const dst = path.join(DIR, 'render-gif-1.webp')
  if (!src) {
    console.log('skip (missing): render-gif-1.gif')
  } else {
  const before = (await stat(src)).size
  const out = await sharp(await readFile(src), { animated: true })
    .resize({ width: 720, withoutEnlargement: true })
    .webp({ quality: 65, effort: 5 })
    .toBuffer()
  await writeFile(dst, out)
  console.log(`render-gif-1.gif: ${kb(before)} -> render-gif-1.webp: ${kb(out.length)}`)
  }
}

console.log('Done.')

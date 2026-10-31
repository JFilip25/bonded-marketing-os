// Renders standalone Reels (D-2026-10-21-1): vertical 1080x1920 video with the words burned in, then a
// plain waitlist end card. The Reel format is the one kept in campaign/weeks-01-02.md ("Raw video style").
//
// Copy guard: every string on screen must appear word for word in the reel's copy source (proposals/... before
// approval, the campaign file after), or the render stops.
// QA per reel: total length 15 to 25 s, every text box inside the Reel safe zones (250 top, 350 bottom,
// 150 right, 60 left), no box over its line limit, loaded fonts, and contrast: Paper words against the
// lightest 5% of the real pixels behind them, worst of 3 frames per beat, at least 4.5:1.
//
// Usage:
//   MEDIA=<cleared clips> OUT_DIR=<dir outside the repo> REELS=<reels file> [ONLY=r01,r02] node tools/proofs/render-reel.mjs
// The reels file exports `reels` (see .claude/skills/bonded-social-media-posts/templates/reels-entry.mjs) and
// `END` ({ headline, sub }), the end-card words.
// Output: <OUT_DIR>/reels/rNN.mp4 (H.264, 30 fps, silent AAC track for platform compatibility),
// <OUT_DIR>/reels/rNN_cover.png (cover frame) and <OUT_DIR>/reels-qa.json.
import { execFileSync, execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { join, dirname, resolve, relative, isAbsolute } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
for (const v of ['OUT_DIR', 'MEDIA', 'REELS']) if (!process.env[v]) throw new Error('Set OUT_DIR, MEDIA and REELS');
const OUT = resolve(process.env.OUT_DIR);
if (!relative(ROOT, OUT).startsWith('..')) throw new Error('OUT_DIR must be outside the repository: the renders contain the owner\'s footage');
const MEDIA = resolve(process.env.MEDIA);
const ONLY = process.env.ONLY ? process.env.ONLY.split(',') : null;
const { reels, END } = await import(pathToFileURL(resolve(process.env.REELS)).href);
const requireGlobal = createRequire(join(execSync('npm root -g', { encoding: 'utf8' }).trim(), 'noop.js'));
const { chromium } = requireGlobal('playwright');

const C = { paper: '#F5F2EA', ink: '#222D33', muted: '#646A6B' };
const W = 1080, H = 1920, FPS = 30, END_SECONDS = 3;
const SAFE = { top: 250, bottom: H - 350, left: 60, right: W - 150 };
const TEXT_W = SAFE.right - SAFE.left;
const dataUri = (path, mime = 'image/png') => `data:${mime};base64,${readFileSync(path).toString('base64')}`;
const font = (w) => dataUri(join(ROOT, 'assets', 'fonts', `jakarta-${w}.ttf`), 'font/ttf');
const svg = (name) => readFileSync(join(ROOT, 'assets', 'brand', 'svg', `${name}.svg`), 'utf8').replace(/<title>.*?<\/title>/, '');

const BASE_CSS = `
@font-face{font-family:J;font-weight:400;src:url(${font(400)})}
@font-face{font-family:J;font-weight:600;src:url(${font(600)})}
@font-face{font-family:J;font-weight:800;src:url(${font(800)})}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:transparent}
.page{position:relative;overflow:hidden;font-family:J;color:${C.ink};-webkit-font-smoothing:antialiased;font-kerning:normal}
.abs{position:absolute}
.beat{font-weight:800;letter-spacing:-0.03em;line-height:1.04;color:${C.paper};text-wrap:balance}
.h800{font-weight:800;letter-spacing:-0.04em;line-height:0.98;text-wrap:balance}
.sub{font-weight:400;line-height:1.3;text-wrap:pretty}
.qa-hide-text [data-copy]{visibility:hidden!important}
.qa-overlay [data-qa="frame"]{visibility:hidden!important}
.qa-overlay .page{background:transparent!important}
`;

// ---------- copy ----------
const sources = new Map();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');
const T = (s) => s.replace(/'/g, '’').replace(/(^|[\s(])’/g, '$1‘');
function copyFrom(source) {
  if (!sources.has(source)) sources.set(source, readFileSync(isAbsolute(source) ? source : join(ROOT, source), 'utf8'));
  const text = sources.get(source);
  return (s) => { if (!text.includes(s)) throw new Error(`Not in ${source}: ${JSON.stringify(s)}`); return s; };
}

// ---------- media ----------
const tmp = mkdtempSync(join(tmpdir(), 'bonded-reel-'));
const probe = (file) => JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height:format=duration', '-of', 'json', file], { encoding: 'utf8' }));
const frameAt = (file, t, out) => { execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', t.toFixed(3), '-i', file, '-frames:v', '1', out]); return out; };
function coverFilter(w, h, pos = '50% 50%') {
  const [px, py] = pos.split(' ').map((v) => parseFloat(v) / 100);
  const s = Math.max(W / w, H / h), sw = Math.ceil(w * s / 2) * 2, sh = Math.ceil(h * s / 2) * 2;
  return `scale=${sw}:${sh},crop=${W}:${H}:${Math.round((sw - W) * px)}:${Math.round((sh - H) * py)},setsar=1`;
}

// ---------- pages ----------
/** A beat: the clip frame (hidden in the exported overlay), an Ink band behind the words, Paper words. */
function beatPage({ frameSrc, text, size, at }) {
  const align = at === 'top' ? `top:${SAFE.top + 40}px` : at === 'lower' ? `bottom:${H - SAFE.bottom + 40}px` : `top:50%;transform:translateY(-50%)`;
  return `<img class="abs" data-qa="frame" src="${frameSrc}" style="left:0;top:0;width:${W}px;height:${H}px;object-fit:cover">
  <div class="abs band" style="left:0;right:0"></div>
  <div class="abs" data-box style="left:${SAFE.left}px;width:${TEXT_W}px;${align}">
    <div data-qa="beat" data-copy="${attr(text)}" data-maxlines="5" class="beat" style="font-size:${size}px">${T(esc(text))}</div>
  </div>`;
}
function endPage({ headline, sub, hs, ss }) {
  const lw = 420, lh = Math.round(lw * 140.4 / 830 * 10) / 10;
  return `<div class="abs" style="left:${SAFE.left}px;width:${TEXT_W}px;top:${SAFE.top}px;height:${SAFE.bottom - SAFE.top}px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start">
    <div data-qa="lockup" style="width:${lw}px;height:${lh}px;margin-bottom:64px">${svg('bonded-lockup-horizontal-color').replace('<svg ', `<svg width="${lw}" height="${lh}" `)}</div>
    <div data-qa="end-headline" data-copy="${attr(headline)}" data-maxlines="3" class="h800" style="font-size:${hs}px">${T(esc(headline))}</div>
    <div data-qa="end-sub" data-copy="${attr(sub)}" data-maxlines="5" class="sub" style="margin-top:32px;font-size:${ss}px">${T(esc(sub))}</div>
  </div>`;
}

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const shell = (body, bg) => `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}</style></head><body><div class="page" style="width:${W}px;height:${H}px;background:${bg}">${body}</div></body></html>`;
async function open(body, bg) {
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  const pg = await ctx.newPage();
  await pg.setContent(shell(body, bg), { waitUntil: 'load' });
  await pg.evaluate(async () => { for (const w of [400, 600, 800]) await document.fonts.load(`${w} 40px J`); await document.fonts.ready; });
  return { ctx, pg };
}
/** Largest size from start down to min at which the element keeps to maxLines. */
async function fitSize(pg, selector, start, min, maxLines) {
  for (let size = start; size >= min; size -= 2) {
    const lines = await pg.evaluate(({ selector, size }) => {
      const el = document.querySelector(selector); el.style.fontSize = `${size}px`;
      const r = document.createRange(); r.selectNodeContents(el);
      return new Set([...r.getClientRects()].map((x) => Math.round(x.top))).size;
    }, { selector, size });
    if (lines <= maxLines) return size;
  }
  throw new Error(`${selector}: does not fit in ${maxLines} lines at ${min}px`);
}
/** Ink band sized to the words: full strength 80 px around them, fading out over 260 px. */
const sizeBand = (pg) => pg.evaluate(() => {
  const r = document.querySelector('[data-box]').getBoundingClientRect(), band = document.querySelector('.band');
  const ink = 'rgba(34,45,51,', top = Math.max(0, r.top - 340), bottom = Math.min(1920, r.bottom + 340);
  band.style.top = `${top}px`; band.style.height = `${bottom - top}px`;
  band.style.background = `linear-gradient(to bottom, ${ink}0) 0px, ${ink}.82) 260px, ${ink}.82) ${bottom - top - 260}px, ${ink}0) ${bottom - top}px)`;
});
async function measure(pg) {
  return pg.evaluate(() => [...document.querySelectorAll('[data-copy], [data-qa="lockup"]')].map((el) => {
    const r = el.getBoundingClientRect(), range = document.createRange(); range.selectNodeContents(el);
    const lines = el.dataset.copy ? new Set([...range.getClientRects()].map((x) => Math.round(x.top))).size : null;
    return { qa: el.dataset.qa, x: Math.round(r.left), y: Math.round(r.top), right: Math.round(r.right), bottom: Math.round(r.bottom), lines, maxLines: el.dataset.maxlines ? Number(el.dataset.maxlines) : null, text: el.innerText.replace(/\s+/g, ' ').trim(), copy: el.dataset.copy ?? null, weight: getComputedStyle(el).fontWeight };
  }));
}
/** Contrast of each word box against the lightest 5% of the pixels behind it (text hidden). */
async function contrast(pg) {
  await pg.evaluate(() => document.body.classList.add('qa-hide-text'));
  const behind = await pg.screenshot({ type: 'png' });
  await pg.evaluate(() => document.body.classList.remove('qa-hide-text'));
  return pg.evaluate(async (src) => {
    const im = new Image(); im.src = src; await im.decode();
    const cv = document.createElement('canvas'); cv.width = im.width; cv.height = im.height;
    const cx = cv.getContext('2d'); cx.drawImage(im, 0, 0);
    const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    const lum = (r, g, b) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    const el = document.querySelector('[data-qa="beat"]'), range = document.createRange(); range.selectNodeContents(el);
    const ls = [];
    for (const r of range.getClientRects()) {
      const x0 = Math.max(0, Math.floor(r.left)), y0 = Math.max(0, Math.floor(r.top));
      const w = Math.min(cv.width - x0, Math.ceil(r.width)), h = Math.min(cv.height - y0, Math.ceil(r.height));
      if (w < 1 || h < 1) continue;
      const d = cx.getImageData(x0, y0, w, h).data;
      for (let i = 0; i < d.length; i += 8) ls.push(lum(d[i], d[i + 1], d[i + 2]));
    }
    ls.sort((a, b) => a - b);
    const bg = ls[Math.floor(0.95 * (ls.length - 1))], fg = lum(245, 242, 234);
    return Math.round(((Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05)) * 100) / 100;
  }, `data:image/png;base64,${behind.toString('base64')}`);
}
const norm = (s) => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
function boxIssues(boxes) {
  const issues = [];
  for (const b of boxes) {
    if (b.y < SAFE.top || b.bottom > SAFE.bottom || b.x < SAFE.left || b.right > SAFE.right) issues.push(`${b.qa} outside the Reel safe zone (${b.x},${b.y})-(${b.right},${b.bottom})`);
    if (b.maxLines && b.lines > b.maxLines) issues.push(`${b.qa} has ${b.lines} lines (max ${b.maxLines})`);
    if (b.copy !== null && norm(b.text) !== b.copy) issues.push(`copy mismatch in ${b.qa}`);
  }
  return issues;
}

// ---------- render ----------
mkdirSync(join(OUT, 'reels'), { recursive: true });
const results = [];
for (const reel of reels.filter((r) => !ONLY || ONLY.includes(r.id))) {
  const cp = copyFrom(reel.source), endCp = copyFrom(END.source ?? reel.source);
  const issues = [];
  const work = join(tmp, reel.id); mkdirSync(work, { recursive: true });
  // Clips, cropped to fill 1080x1920, back to back.
  const clips = reel.clips.map((c) => {
    const file = join(MEDIA, c.file), { streams: [{ width, height }], format: { duration } } = probe(file);
    if (c.start + c.dur > Number(duration) + 0.05) throw new Error(`${reel.id}: ${c.file} is ${duration}s, clip asks for ${c.start}+${c.dur}s`);
    if (width < 720) issues.push(`${c.file} is ${width}px wide (under 720)`);
    return { ...c, path: file, filter: coverFilter(width, height, c.pos) };
  });
  const body = clips.reduce((s, c) => s + c.dur, 0), total = body + END_SECONDS;
  if (total < 15 || total > 25) issues.push(`length ${total}s (Reels here are 15 to 25 s with the end card)`);
  const at = (t) => { let acc = 0; for (const c of clips) { if (t < acc + c.dur) return { c, local: c.start + t - acc }; acc += c.dur; } const c = clips.at(-1); return { c, local: c.start + c.dur - 0.05 }; };

  // Beats: one transparent overlay each, shown between t0 and t1 of the clip part.
  const overlays = [], beatQa = [];
  for (const [k, b] of reel.beats.entries()) {
    if (b.t0 < 0 || b.t1 > body + 0.01 || b.t1 <= b.t0) throw new Error(`${reel.id} beat ${k + 1}: times ${b.t0}-${b.t1} outside 0-${body}s`);
    const mid = at((b.t0 + b.t1) / 2), frame = frameAt(mid.c.path, mid.local, join(work, `b${k}.png`));
    const { ctx, pg } = await open(beatPage({ frameSrc: dataUri(frame), text: cp(b.text), size: 84, at: b.at ?? 'middle' }), C.ink);
    // Fit the words in the real cropped frame: render each frame through the same crop first.
    const size = await fitSize(pg, '[data-qa="beat"]', b.size ?? 84, 60, 5);
    await sizeBand(pg);
    const ratios = [];
    for (const f of [0.15, 0.5, 0.85]) {
      const t = b.t0 + (b.t1 - b.t0) * f, p = at(t);
      const raw = frameAt(p.c.path, p.local, join(work, `b${k}_${f}.png`)), crop = join(work, `b${k}_${f}_c.png`);
      execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', raw, '-vf', p.c.filter, crop]);
      await pg.evaluate(async (s) => { const i = document.querySelector('[data-qa="frame"]'); i.src = s; await i.decode(); i.style.objectFit = 'none'; }, dataUri(crop));
      ratios.push(await contrast(pg));
      if (f === 0.15 && k === 0) await pg.screenshot({ path: join(OUT, 'reels', `${reel.id}_cover.png`) });
    }
    const boxes = await measure(pg);
    issues.push(...boxIssues(boxes).map((i) => `beat ${k + 1}: ${i}`));
    const worst = Math.min(...ratios);
    if (worst < 4.5) issues.push(`beat ${k + 1}: ${worst}:1 against the lightest 5% behind it (needs 4.5)`);
    await pg.evaluate(() => document.documentElement.classList.add('qa-overlay'));
    const ov = join(work, `ov${k}.png`);
    await pg.screenshot({ path: ov, omitBackground: true });
    overlays.push({ ...b, png: ov });
    beatQa.push({ beat: k + 1, text: b.text, t0: b.t0, t1: b.t1, size, contrast: worst, boxes });
    await ctx.close();
  }

  // End card.
  const { ctx, pg } = await open(endPage({ headline: endCp(END.headline), sub: endCp(END.sub), hs: 96, ss: 44 }), C.paper);
  await fitSize(pg, '[data-qa="end-headline"]', 96, 72, 3);
  await fitSize(pg, '[data-qa="end-sub"]', 44, 34, 5);
  const endBoxes = await measure(pg);
  issues.push(...boxIssues(endBoxes).map((i) => `end card: ${i}`));
  const endPng = join(work, 'end.png');
  await pg.screenshot({ path: endPng });
  await ctx.close();

  // ffmpeg: clips -> concat -> beat overlays -> end card -> silent AAC.
  const args = ['-v', 'error', '-y'];
  for (const c of clips) args.push('-ss', String(c.start), '-t', String(c.dur), '-i', c.path);
  for (const o of overlays) args.push('-i', o.png);
  args.push('-loop', '1', '-t', String(END_SECONDS), '-i', endPng);
  args.push('-f', 'lavfi', '-t', String(total), '-i', 'anullsrc=r=48000:cl=stereo');
  const n = clips.length, f = [];
  clips.forEach((c, i) => f.push(`[${i}:v]${c.filter},fps=${FPS},setpts=PTS-STARTPTS[c${i}]`));
  f.push(`${clips.map((_, i) => `[c${i}]`).join('')}concat=n=${n}:v=1:a=0[base0]`);
  overlays.forEach((o, k) => f.push(`[base${k}][${n + k}:v]overlay=0:0:enable='between(t,${o.t0},${o.t1})'[base${k + 1}]`));
  const endIdx = n + overlays.length;
  f.push(`[${endIdx}:v]fps=${FPS},format=yuv420p,setsar=1[end]`);
  f.push(`[base${overlays.length}]format=yuv420p[main]`);
  f.push(`[main][end]concat=n=2:v=1:a=0[v]`);
  const mp4 = join(OUT, 'reels', `${reel.id}.mp4`);
  args.push('-filter_complex', f.join(';'), '-map', '[v]', '-map', `${endIdx + 1}:a`, '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-r', String(FPS),
    '-c:a', 'aac', '-b:a', '64k', '-shortest', '-movflags', '+faststart', mp4);
  execFileSync('ffmpeg', args);
  const { format: { duration: outDur } } = probe(mp4);
  if (Math.abs(Number(outDur) - total) > 0.3) issues.push(`output is ${outDur}s, expected ${total}s`);
  results.push({ id: reel.id, title: reel.title, file: relative(OUT, mp4), cover: `reels/${reel.id}_cover.png`, seconds: Number(Number(outDur).toFixed(2)), clips: reel.clips, beats: beatQa, endBoxes, issues });
}
await browser.close();
rmSync(tmp, { recursive: true, force: true });

const summary = {
  renderedAt: new Date().toISOString(),
  copySources: [...sources.keys()].map((s) => ({ file: s, sha256: execSync(`sha256sum "${isAbsolute(s) ? s : join(ROOT, s)}"`, { encoding: 'utf8' }).split(' ')[0] })),
  reels: results.length,
  reelsWithIssues: results.filter((r) => r.issues.length).length,
  lowestContrast: Math.min(...results.flatMap((r) => r.beats.map((b) => b.contrast))),
};
writeFileSync(join(OUT, 'reels-qa.json'), JSON.stringify({ summary, reels: results }, null, 2));
for (const r of results) console.log(`${r.issues.length ? 'FLAG' : 'OK  '} ${r.file} ${r.seconds}s ${r.issues.join('; ')}`);
console.log(JSON.stringify(summary, null, 2));

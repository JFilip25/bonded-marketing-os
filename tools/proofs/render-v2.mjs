// Renders the messaging v2 carousels (D-2026-10-15-1 to -8): photo slides with Paper type over an Ink gradient,
// video-clip slides, and the plain waitlist slide. The posts are defined in tools/proofs/v2-posts.mjs.
//
// Copy guard: every string on a slide must appear word for word in its post's copy source (the campaign file
// once the post is approved, proposals/messaging-v2.md before that), or the render stops.
// QA per slide: feed safe zones (180/50), line limits, the 4:5 crop of slide 1, loaded fonts and the copy
// match. Text on a photo is measured on the real pixels behind it: the lightest 5% must give at least 4.5:1
// (for a video, the worst of 6 frames across the clip). Plain slides use WCAG contrast against Paper.
// QA per post: at least 80% photo or video slides, and at most 2 plain ones (D-2026-10-15-4).
//
// Usage:
//   PHOTOS=<prepped stills> MEDIA=<original videos> OUT_DIR=<dir outside the repo> HANDLE=@name [ONLY=0,1] [POSTS=<file>] \
//     node tools/proofs/render-v2.mjs
// The owner's photos stay outside the repository, so OUT_DIR is required and must not be inside it.
// Output: <OUT_DIR>/dayNN/dayNN_carousel_sNN.png for every slide. A video slide also gets
// dayNN_carousel_sNN.mp4 (Instagram and Facebook); its PNG, a frame from the middle of the clip, is the
// TikTok still (photo mode takes photos only, D-2026-10-15-7). QA goes to <OUT_DIR>/qa.json.
import { execFileSync, execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { join, dirname, resolve, relative, extname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
if (!process.env.OUT_DIR || !process.env.PHOTOS) throw new Error('Set OUT_DIR and PHOTOS (both outside the repository)');
const OUT = resolve(process.env.OUT_DIR);
if (!relative(ROOT, OUT).startsWith('..')) throw new Error('OUT_DIR must be outside the repository: the renders contain the owner\'s photos');
const PHOTOS = resolve(process.env.PHOTOS);
const MEDIA = process.env.MEDIA ? resolve(process.env.MEDIA) : null;
const HANDLE = process.env.HANDLE ?? '@bondedspace'; // D-2026-10-15-13: one handle on Instagram, Facebook art and TikTok
const ONLY = process.env.ONLY ? process.env.ONLY.split(',').map(Number) : null;
// POSTS=<file> renders another post list (for tests); the default is tools/proofs/v2-posts.mjs.
const { posts, WAITLIST } = await import(process.env.POSTS ? pathToFileURL(resolve(process.env.POSTS)).href : './v2-posts.mjs');
const requireGlobal = createRequire(join(execSync('npm root -g', { encoding: 'utf8' }).trim(), 'noop.js'));
const { chromium } = requireGlobal('playwright');

const C = { paper: '#F5F2EA', ink: '#222D33', muted: '#646A6B' };
const W = 1080, H = 1440;
const SAFE = { top: 180, bottom: H - 180, left: 50, right: W - 50 };
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ttf': 'font/ttf' };
const dataUri = (path) => `data:${MIME[extname(path).toLowerCase()] ?? 'image/png'};base64,${readFileSync(path).toString('base64')}`;
const font = (w) => dataUri(join(ROOT, 'assets', 'fonts', `jakarta-${w}.ttf`));
const svg = (name) => readFileSync(join(ROOT, 'assets', 'brand', 'svg', `${name}.svg`), 'utf8').replace(/<title>.*?<\/title>/, '');
const screen = (n) => dataUri(join(ROOT, 'assets', 'screens', 'captured', 'light', n));

const BASE_CSS = `
@font-face{font-family:J;font-weight:400;src:url(${font(400)})}
@font-face{font-family:J;font-weight:600;src:url(${font(600)})}
@font-face{font-family:J;font-weight:800;src:url(${font(800)})}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:transparent}
.page{position:relative;overflow:hidden;font-family:J;color:${C.ink};-webkit-font-smoothing:antialiased;font-kerning:normal}
.abs{position:absolute}
.h800{font-weight:800;letter-spacing:-0.04em;line-height:0.98}
.h400{font-weight:400;letter-spacing:-0.02em;line-height:0.98}
.sub{font-weight:400;font-size:44px;line-height:1.3;text-wrap:pretty}
.h800,.h400{text-wrap:balance}
.handle{font-weight:600;font-size:26px;color:${C.muted}}
.pill{font-weight:600;font-size:28px;color:${C.paper};background:${C.muted};border-radius:999px;padding:12px 30px;line-height:1}
.qa-hide-text [data-copy],.qa-hide-text [data-qa="handle"]{visibility:hidden!important}
.qa-overlay [data-qa="photo-full"]{visibility:hidden!important}
.qa-overlay .page{background:transparent!important}
`;

// ---------- copy ----------
const sources = new Map();
let COPY = null;
const used = new Set();
function cp(s) {
  if (!COPY.text.includes(s)) throw new Error(`Not in ${COPY.name}: ${JSON.stringify(s)}`);
  used.add(s);
  return s;
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');
const T = (s) => s.replace(/'/g, '’').replace(/(^|[\s(])’/g, '$1‘'); // typographic quotes
const txt = (qa, s, cls, style = '', extra = '') => `<div data-qa="${qa}" data-copy="${attr(cp(s))}" class="${cls}" style="${style}" ${extra}>${T(esc(s))}</div>`;

// ---------- layouts ----------
/** Ink phone frame around an unaltered screenshot, with no caption (D-2026-10-15-3). */
function phoneFrame(src, file, { left, top, screenH, pad }) {
  const sw = Math.round(screenH * 1290 / 2796), ow = sw + 2 * pad, oh = screenH + 2 * pad;
  return `<div class="abs" data-qa="phone" data-file="${file}" style="left:${left}px;top:${top}px;width:${ow}px;height:${oh}px;border-radius:${Math.round(ow * 0.18)}px;background:${C.ink};padding:${pad}px"><img src="${src}" style="width:${sw}px;height:${screenH}px;border-radius:${Math.round(sw * 0.155)}px;display:block"></div>`;
}
/** Photo or video slide: the picture fills the frame, an Ink gradient sits behind the words (sized after
 *  layout), and the words are Paper. No Hearth on a photo. at: 'bottom' | 'top'. */
function fullBleed({ src, file, pos, at = 'bottom', handle = false, setup, payoff, setupSize, payoffSize, headline, sub, hs, ss, headMax = 2 }) {
  const ink = `color:${C.paper}`;
  const words = setup
    ? `${txt('headline-setup', setup, 'h400', `font-size:${setupSize}px;${ink}`, 'data-maxlines="2"')}${txt('headline-payoff', payoff, 'h800', `font-size:${payoffSize}px;${ink}`, 'data-maxlines="2"')}`
    : txt('headline', headline, 'h800', `font-size:${hs}px;${ink}`, `data-maxlines="${headMax}"`);
  const under = sub ? txt('subheadline', sub, 'sub', `margin-top:28px;font-size:${ss}px;text-wrap:balance;${ink}`, 'data-maxlines="3"') : '';
  return `<img class="abs" data-qa="photo-full" data-file="${file}" src="${src}" style="left:0;top:0;width:${W}px;height:${H}px;object-fit:cover;object-position:${pos}">
  <div class="abs scrim" data-scrim="${at}" data-handle="${handle ? 1 : 0}" style="inset:0"></div>
  ${handle ? `<div class="abs handle" data-qa="handle" style="top:200px;left:540px;transform:translateX(-50%);white-space:nowrap;${ink}">${HANDLE}</div>` : ''}
  <div class="abs fbtext" style="left:50px;width:980px;top:${handle && at === 'top' ? 262 : 200}px;bottom:200px;display:flex;flex-direction:column;justify-content:${at === 'top' ? 'flex-start' : 'flex-end'}">${words}${under}</div>`;
}
/** The plain waitlist slide: the official colour lockup and the ask on the left, a real app screen on the right. */
const WAIT_COL = 506;
function waitlistSlide({ headline, sub, pill, screenFile, hs, ss }) {
  const lw = 300, lh = Math.round(lw * 140.4 / 830 * 10) / 10;
  const screenH = 880, pad = 14, ow = Math.round(screenH * 1290 / 2796) + 2 * pad, oh = screenH + 2 * pad;
  return `<div class="abs" style="left:50px;width:${WAIT_COL}px;top:180px;height:1080px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start">
    <div data-qa="lockup" data-file="bonded-lockup-horizontal-color.svg" style="width:${lw}px;height:${lh}px;margin-bottom:56px">${svg('bonded-lockup-horizontal-color').replace('<svg ', `<svg width="${lw}" height="${lh}" `)}</div>
    ${txt('headline', headline, 'h800', `font-size:${hs}px`, 'data-maxlines="2"')}
    ${txt('subheadline', sub, 'sub', `margin-top:28px;font-size:${ss}px`, 'data-maxlines="5"')}
    <div style="margin-top:40px">${txt('pill', pill, 'pill')}</div>
  </div>
  ${phoneFrame(screen(screenFile), screenFile, { left: 1030 - ow, top: 720 - oh / 2, screenH, pad })}`;
}

// ---------- fitting (measured with the real fonts) ----------
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const mctx = await browser.newContext({ viewport: { width: W, height: H } });
const mpage = await mctx.newPage();
await mpage.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}</style></head><body><div class="page" style="width:${W}px;height:${H}px"><div id="m"></div></div></body></html>`);
await mpage.evaluate(async () => { for (const w of [400, 600, 800]) await document.fonts.load(`${w} 40px J`); });
const countLines = (s, cls, size, width) => mpage.evaluate(({ html, cls, size, width }) => {
  const el = document.getElementById('m');
  el.className = cls; el.style.cssText = `position:absolute;left:0;top:0;width:${width}px;font-size:${size}px`; el.innerHTML = html;
  const r = document.createRange(); r.selectNodeContents(el);
  return new Set([...r.getClientRects()].map((x) => Math.round(x.top))).size;
}, { html: T(esc(s)), cls, size, width });
const fits = [];
async function fit(frame, role, s, cls, start, min, maxLines, width = 980) {
  for (let size = start; size >= min; size -= 2) {
    if ((await countLines(s, cls, size, width)) <= maxLines) {
      if (size !== start) fits.push({ frame, role, text: s, spec: `${start}px, ${maxLines} lines max`, used: `${size}px` });
      return size;
    }
  }
  throw new Error(`${frame} ${role}: does not fit in ${maxLines} lines at ${min}px`);
}

/** Headline: 2 lines at the largest size down to 80 px; failing that, 3 lines (down to 72 px). */
async function headlineFit(frame, s) {
  for (let size = 104; size >= 80; size -= 2) if ((await countLines(s, 'h800', size, 980)) <= 2) {
    if (size !== 104) fits.push({ frame, role: 'headline', text: s, spec: '104px, 2 lines max', used: `${size}px` });
    return { hs: size, headMax: 2 };
  }
  for (let size = 104; size >= 72; size -= 2) if ((await countLines(s, 'h800', size, 980)) <= 3) {
    fits.push({ frame, role: 'headline', text: s, spec: '104px, 2 lines max', used: `${size}px, 3 lines` });
    return { hs: size, headMax: 3 };
  }
  throw new Error(`${frame} headline: does not fit in 3 lines at 72px`);
}

// ---------- media ----------
const tmp = mkdtempSync(join(tmpdir(), 'bonded-v2-'));
const probe = (file) => JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height:format=duration', '-of', 'json', file], { encoding: 'utf8' }));
/** One frame of a video, full size, as a PNG. */
function frameAt(file, t, out) {
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', t.toFixed(3), '-i', file, '-frames:v', '1', out]);
  return out;
}
/** The ffmpeg crop that matches CSS object-fit: cover with object-position "px% py%". */
function coverFilter(w, h, pos) {
  const [px, py] = pos.split(' ').map((v) => parseFloat(v) / 100);
  const s = Math.max(W / w, H / h), sw = Math.ceil(w * s / 2) * 2, sh = Math.ceil(h * s / 2) * 2;
  return `scale=${sw}:${sh},crop=${W}:${H}:${Math.round((sw - W) * px)}:${Math.round((sh - H) * py)},setsar=1`;
}

// ---------- build the pages ----------
const pages = [];
for (const post of posts.filter((p) => !ONLY || ONLY.includes(p.day))) {
  const dd = String(post.day).padStart(2, '0');
  if (!sources.has(post.source)) sources.set(post.source, { name: post.source, text: readFileSync(join(ROOT, post.source), 'utf8') });
  COPY = sources.get(post.source);
  for (const [i, s] of post.slides.entries()) {
    const name = `day${dd}/day${dd}_carousel_s${String(i + 1).padStart(2, '0')}`, frame = name.split('/')[1];
    const page = { name, post: post.day, kind: s.waitlist ? 'plain' : s.video ? 'video' : 'photo', crop45: i === 0 };
    if (s.waitlist) {
      const hs = await fit(frame, 'headline', cp(WAITLIST.headline), 'h800', 104, 80, 2, WAIT_COL);
      const ss = await fit(frame, 'subheadline', cp(WAITLIST.sub), 'sub', 40, 32, 5, WAIT_COL);
      page.body = waitlistSlide({ ...WAITLIST, hs, ss });
      page.bg = C.paper;
    } else {
      const z = s.setup
        ? { setupSize: await fit(frame, 'cover setup', cp(s.setup), 'h400', 100, 72, 2), payoffSize: await fit(frame, 'cover payoff', cp(s.payoff), 'h800', 112, 80, 2) }
        : await headlineFit(frame, cp(s.headline));
      z.ss = s.sub ? await fit(frame, 'subheadline', cp(s.sub), 'sub', 44, 34, 3) : 44;
      let src, file;
      if (s.video) {
        if (!MEDIA) throw new Error(`${frame} uses a video: set MEDIA=<dir with the original videos>`);
        const vfile = join(MEDIA, s.video);
        const { streams: [{ width, height }], format: { duration } } = probe(vfile);
        const [start, dur] = s.clip;
        if (start + dur > Number(duration) + 0.05) throw new Error(`${frame}: clip ${start}+${dur}s is longer than ${s.video} (${duration}s)`);
        if (dur < 3 || dur > 60) throw new Error(`${frame}: Instagram carousel videos must be 3 to 60 s`);
        mkdirSync(join(tmp, frame), { recursive: true });
        const poster = frameAt(vfile, start + dur / 2, join(tmp, frame, 'poster.png'));
        page.qaFrames = Array.from({ length: 6 }, (_, k) => frameAt(vfile, start + (dur * (k + 0.5)) / 6, join(tmp, frame, `qa${k}.png`)));
        page.video = { file: vfile, name: s.video, start, dur, filter: coverFilter(width, height, s.pos) };
        src = dataUri(poster); file = s.video;
      } else {
        src = dataUri(join(PHOTOS, s.photo)); file = s.photo;
      }
      page.body = fullBleed({ ...s, ...z, src, file });
      page.bg = C.ink;
    }
    pages.push(page);
  }
}
await mctx.close();

// ---------- render + QA ----------
/** Text over a photo: hide the text, screenshot what is behind it, and measure each text element against the
 *  lightest 5% of those pixels. */
async function photoContrast(pg) {
  await pg.evaluate(() => document.body.classList.add('qa-hide-text'));
  const behind = await pg.screenshot({ type: 'png' });
  await pg.evaluate(() => document.body.classList.remove('qa-hide-text'));
  return pg.evaluate(async (src) => {
    const im = new Image(); im.src = src; await im.decode();
    const cv = document.createElement('canvas'); cv.width = im.width; cv.height = im.height;
    const cx = cv.getContext('2d'); cx.drawImage(im, 0, 0);
    const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    const lum = (r, g, b) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    const out = [];
    for (const el of document.querySelectorAll('[data-copy], [data-qa="handle"]')) {
      if (!el.innerText.trim()) continue;
      const range = document.createRange(); range.selectNodeContents(el);
      const ls = [];
      for (const r of range.getClientRects()) {
        const x0 = Math.max(0, Math.floor(r.left)), y0 = Math.max(0, Math.floor(r.top));
        const w = Math.min(cv.width - x0, Math.ceil(r.width)), h = Math.min(cv.height - y0, Math.ceil(r.height));
        if (w < 1 || h < 1) continue;
        const d = cx.getImageData(x0, y0, w, h).data;
        for (let i = 0; i < d.length; i += 8) ls.push(lum(d[i], d[i + 1], d[i + 2]));
      }
      ls.sort((a, b) => a - b);
      const bg = ls[Math.floor(0.95 * (ls.length - 1))];
      const lf = lum(...(getComputedStyle(el).color.match(/[\d.]+/g) || []).slice(0, 3).map(Number));
      out.push({ qa: el.dataset.qa, ratio: Math.round(((Math.max(lf, bg) + 0.05) / (Math.min(lf, bg) + 0.05)) * 100) / 100 });
    }
    return out;
  }, `data:image/png;base64,${behind.toString('base64')}`);
}

mkdirSync(OUT, { recursive: true });
const frames = [];
for (const p of pages) {
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  const pg = await ctx.newPage();
  await pg.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}</style></head><body><div class="page" style="width:${W}px;height:${H}px;background:${p.bg}">${p.body}</div></body></html>`, { waitUntil: 'load' });
  await pg.evaluate(() => document.fonts.ready);
  // Size each gradient to its words: full strength from 60 px beyond them, fading out over 380 px; a band for the handle.
  await pg.evaluate(() => {
    for (const sc of document.querySelectorAll('.scrim')) {
      const kids = [...document.querySelector('.fbtext').children].map((k) => k.getBoundingClientRect());
      const top = Math.min(...kids.map((r) => r.top)), bottom = Math.max(...kids.map((r) => r.bottom));
      const ink = 'rgba(34,45,51,';
      const layers = sc.dataset.scrim === 'bottom'
        ? [`linear-gradient(to bottom, ${ink}0) ${top - 440}px, ${ink}.80) ${top - 60}px, ${ink}.88) 1440px)`]
        : [`linear-gradient(to top, ${ink}0) ${1440 - bottom - 440}px, ${ink}.80) ${1440 - bottom - 60}px, ${ink}.88) 1440px)`];
      if (sc.dataset.handle === '1') layers.push(`linear-gradient(to bottom, ${ink}.72) 0px, ${ink}.72) 260px, ${ink}0) 440px)`);
      sc.style.background = layers.join(',');
    }
  });
  await pg.waitForTimeout(100);
  const boxes = await pg.evaluate(() => {
    const rgb = (s) => (s.match(/[\d.]+/g) || []).map(Number);
    const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
    return [...document.querySelectorAll('[data-qa]')].map((el) => {
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      const text = el.innerText.replace(/\s+/g, ' ').trim();
      let lines = null, contrast = null;
      if (text) {
        const range = document.createRange(); range.selectNodeContents(el);
        lines = new Set([...range.getClientRects()].map((x) => Math.round(x.top))).size;
        let bg = [245, 242, 234];
        for (let e = el; e; e = e.parentElement) { const c = rgb(getComputedStyle(e).backgroundColor); if (c.length >= 3 && (c.length < 4 || c[3] > 0)) { bg = c.slice(0, 3); break; } }
        const [a, b] = [lum(rgb(cs.color).slice(0, 3)), lum(bg)].sort((x, y) => y - x);
        contrast = Math.round(((a + 0.05) / (b + 0.05)) * 100) / 100;
      }
      return { qa: el.dataset.qa, text, copy: el.dataset.copy ?? null, x: Math.round(r.left), y: Math.round(r.top), right: Math.round(r.right), bottom: Math.round(r.bottom), lines, maxLines: el.dataset.maxlines ? Number(el.dataset.maxlines) : null, fontSize: cs.fontSize, fontWeight: cs.fontWeight, contrast };
    });
  });
  const fontsLoaded = await pg.evaluate(() => [...document.fonts].filter((f) => f.family === 'J' && f.status === 'loaded').map((f) => f.weight));
  const issues = [];
  const norm = (s) => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
  for (const b of boxes) {
    if (b.qa !== 'photo-full' && (b.y < SAFE.top || b.bottom > SAFE.bottom || b.x < SAFE.left || b.right > SAFE.right)) issues.push(`${b.qa} outside safe zone (${b.x},${b.y})-(${b.right},${b.bottom})`);
    if (b.maxLines && b.lines > b.maxLines) issues.push(`${b.qa} has ${b.lines} lines (max ${b.maxLines})`);
    if (b.text && !fontsLoaded.includes(b.fontWeight)) issues.push(`${b.qa} weight ${b.fontWeight} not loaded`);
    if (p.crop45 && /headline/.test(b.qa) && (b.y < 45 || b.bottom > 1395)) issues.push(`${b.qa} outside centre 1080x1350 crop`);
    if (b.copy !== null && norm(b.text) !== b.copy) issues.push(`copy mismatch in ${b.qa}: "${b.text}" vs "${b.copy}"`);
    if (p.kind === 'plain' && b.contrast !== null && b.contrast < (parseFloat(b.fontSize) >= 24 ? 3 : 4.5)) issues.push(`${b.qa} contrast ${b.contrast}:1`);
  }
  // No two pieces of text may touch (the handle included).
  const texts = boxes.filter((b) => b.text && b.qa !== 'photo-full');
  for (let i = 0; i < texts.length; i++) for (let j = i + 1; j < texts.length; j++) {
    const a = texts[i], c = texts[j];
    if (a.x < c.right && c.x < a.right && a.y < c.bottom && c.y < a.bottom) issues.push(`${a.qa} overlaps ${c.qa}`);
  }
  const phone = boxes.find((b) => b.qa === 'phone');
  if (phone) for (const t of boxes.filter((b) => b.text)) if (phone.x < t.right && t.x < phone.right && phone.y < t.bottom && t.y < phone.bottom) issues.push(`phone overlaps ${t.qa}`);
  let contrast = null;
  if (p.kind !== 'plain') {
    // Photo: one measurement. Video: the worst of 6 frames across the clip, then back to the poster frame.
    const runs = [];
    const img = await pg.$('[data-qa="photo-full"]');
    const posterSrc = await img.getAttribute('src');
    for (const f of p.qaFrames ?? [null]) {
      if (f) await pg.evaluate(async ({ s }) => { const i = document.querySelector('[data-qa="photo-full"]'); i.src = s; await i.decode(); }, { s: dataUri(f) });
      runs.push(await photoContrast(pg));
    }
    if (p.qaFrames) await pg.evaluate(async ({ s }) => { const i = document.querySelector('[data-qa="photo-full"]'); i.src = s; await i.decode(); }, { s: posterSrc });
    contrast = runs[0].map((c, k) => ({ qa: c.qa, ratio: Math.min(...runs.map((r) => r[k].ratio)), frames: runs.length }));
    for (const c of contrast) if (c.ratio < 4.5) issues.push(`${c.qa} on ${p.kind}: ${c.ratio}:1 against the lightest 5% behind it (needs 4.5)`);
  }
  const png = join(OUT, `${p.name}.png`);
  mkdirSync(dirname(png), { recursive: true });
  await pg.screenshot({ path: png });
  let mp4 = null;
  if (p.video) {
    // The words and gradient as a transparent layer, laid over the cropped clip. No audio: social clips
    // often carry music that can't be reused, and carousel videos play muted by default.
    await pg.evaluate(() => document.documentElement.classList.add('qa-overlay'));
    const overlay = join(tmp, `${p.name.replace('/', '_')}_overlay.png`);
    await pg.screenshot({ path: overlay, omitBackground: true });
    mp4 = join(OUT, `${p.name}.mp4`);
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', String(p.video.start), '-t', String(p.video.dur), '-i', p.video.file, '-i', overlay,
      '-filter_complex', `[0:v]${p.video.filter},fps=30[b];[b][1:v]overlay=0:0,format=yuv420p[v]`, '-map', '[v]', '-an',
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-movflags', '+faststart', mp4]);
  }
  frames.push({ file: relative(OUT, png), mp4: mp4 && relative(OUT, mp4), post: p.post, kind: p.kind, video: p.video && { name: p.video.name, start: p.video.start, dur: p.video.dur }, fontsLoaded, issues, contrast, boxes });
  await ctx.close();
}
await browser.close();
rmSync(tmp, { recursive: true, force: true });

// ---------- per post: photo share (D-2026-10-15-4) ----------
const mix = [...new Set(frames.map((f) => f.post))].map((post) => {
  const fs = frames.filter((f) => f.post === post), photos = fs.filter((f) => f.kind !== 'plain').length, plain = fs.length - photos;
  return { post, slides: fs.length, photos, videos: fs.filter((f) => f.kind === 'video').length, plain, photoShare: Math.round((photos / fs.length) * 100), ok: photos / fs.length >= 0.8 && plain <= 2 && fs.length >= 5 && fs.length <= 7 };
});
const minRatio = Math.min(...frames.flatMap((f) => (f.contrast ?? []).map((c) => c.ratio)));
const summary = {
  renderedAt: new Date().toISOString(),
  handle: HANDLE,
  copySources: [...sources.keys()].map((s) => ({ file: s, sha256: execSync(`sha256sum "${join(ROOT, s)}"`, { encoding: 'utf8' }).split(' ')[0] })),
  posts: mix.length,
  frames: frames.length,
  videos: frames.filter((f) => f.mp4).length,
  framesWithIssues: frames.filter((f) => f.issues.length).length,
  postsFailingPhotoMix: mix.filter((m) => !m.ok).length,
  lowestContrastOnPhotos: Number.isFinite(minRatio) ? minRatio : null,
  fits: fits.length,
  copyStringsPlaced: used.size,
};
writeFileSync(join(OUT, 'qa.json'), JSON.stringify({ summary, photoMix: mix, fits, frames }, null, 2));
for (const f of frames) console.log(`${f.issues.length ? 'FLAG' : 'OK  '} ${f.file}${f.mp4 ? ` + ${f.mp4}` : ''} ${f.issues.join('; ')}`);
for (const m of mix) if (!m.ok) console.log(`FLAG day ${m.post}: ${m.photos} of ${m.slides} slides are photos or video, ${m.plain} plain`);
console.log(JSON.stringify(summary, null, 2));

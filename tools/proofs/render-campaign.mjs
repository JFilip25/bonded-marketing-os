// Renders every Day 0 and Days 1-14 creative as exact-spec proofs, in the system approved at G1
// (D-2026-10-10-1): Paper/Ink/Hearth/muted, Plus Jakarta Sans from assets/fonts, the official logo
// SVGs, the captured app screens (light, USD), and the campaign's canvas sizes, positions and safe zones.
// The layouts are the ones approved in tools/proofs/render-checkpoint.mjs, which stays unchanged as
// the record of the checkpoint.
//
// Copy guard: every on-creative string must appear word for word in campaign/weeks-01-02.md, or the
// render stops. Typographic quotes are the only change on screen.
//
// Fit rule: a Layout C headline that needs more than 2 lines at 120 px, or a subheadline that needs
// more than 3 lines at 44 px, is set at the largest size that fits (2 px steps). Every such case is
// listed in qa.json under "fits" for approval at G2.
//
// Output: design/production/dayNN/*.png and design/production/qa.json.
// Usage: node tools/proofs/render-campaign.mjs   (CHROMIUM_PATH=... if Playwright can't find Chromium)
// Options: HANDLE=@name (default @[handle]); ONLY=day00/day00_carousel,... renders only pages whose name starts
// with one of the prefixes; OUT_DIR=<dir> writes there instead of design/production; PHOTOS=<dir> builds the
// Day 0 carousel in the photo-led Look B (an unapproved example) from d00_c01 ... d00_c06 in that folder.
// PROPOSAL=messaging-v2 (with PHOTOS=<dir>) builds Day 0 from proposals/messaging-v2.md instead: its copy is
// guarded against that file, and text on full photos must measure 4.5:1 against the real pixels behind it.
import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = process.env.OUT_DIR ? resolve(process.env.OUT_DIR) : join(ROOT, 'design', 'production');
const HANDLE = process.env.HANDLE ?? '@[handle]';
const ONLY = process.env.ONLY ? process.env.ONLY.split(',') : null;
const PHOTOS = process.env.PHOTOS ? resolve(process.env.PHOTOS) : null;
const PROPOSAL_FILES = { 'messaging-v2': 'proposals/messaging-v2.md' };
const PROPOSAL = process.env.PROPOSAL ? PROPOSAL_FILES[process.env.PROPOSAL] : null;
if (process.env.PROPOSAL && !PROPOSAL) throw new Error(`Unknown PROPOSAL ${process.env.PROPOSAL}`);
if (PROPOSAL && !PHOTOS) throw new Error('PROPOSAL needs PHOTOS=<dir> with the owner\'s photos');
const OBJ = process.env.OBJECTS ?? join(ROOT, 'assets', 'objects');
const CAMPAIGN = readFileSync(join(ROOT, 'campaign', 'weeks-01-02.md'), 'utf8');
const requireGlobal = createRequire(join(execSync('npm root -g', { encoding: 'utf8' }).trim(), 'noop.js'));
const { chromium } = requireGlobal('playwright');

const C = { paper: '#F5F2EA', ink: '#222D33', hearth: '#B94529', muted: '#646A6B', line: '#DEDCD4', surface: '#FFFEFA' };
const dataUri = (path, type) => `data:${type};base64,${readFileSync(path).toString('base64')}`;
const font = (w) => dataUri(join(ROOT, 'assets', 'fonts', `jakarta-${w}.ttf`), 'font/ttf');
const svg = (name) => readFileSync(join(ROOT, 'assets', 'brand', 'svg', `${name}.svg`), 'utf8').replace(/<title>.*?<\/title>/, '');
// Data URI -> file name, so the Canva spec can say which file each picture is.
const NAMES = new Map();
const named = (uri, name) => { NAMES.set(uri, name); return uri; };
const img = (p) => (existsSync(p) ? named(dataUri(p, 'image/png'), p.split('/').pop()) : null);
const screen = (n) => named(dataUri(join(ROOT, 'assets', 'screens', 'captured', 'light', n), 'image/png'), n);

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
.small{font-weight:400;font-size:28px;line-height:1.35}
.label{font-weight:600;font-size:28px;letter-spacing:0.08em;color:${C.muted}}
.handle{font-weight:600;font-size:26px;color:${C.muted}}
.pill{font-weight:600;font-size:28px;color:${C.paper};background:${C.muted};border-radius:999px;padding:12px 30px;line-height:1}
.ph{border:3px dashed ${C.muted};border-radius:24px;color:${C.muted};font-weight:600;font-size:22px;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;line-height:1.35}
.vid{color:#fff;font-weight:600;line-height:1.15;text-align:center;text-wrap:balance;text-shadow:0 2px 12px rgba(0,0,0,.35)}
.qa-hide-text [data-copy],.qa-hide-text [data-qa="handle"]{visibility:hidden!important}
`;

// Safe zones (campaign "Sizes and safe zones")
const SAFE_FEED = { top: 180, bottom: 1440 - 180, left: 50, right: 1080 - 50 };
const SAFE_STORY = { top: 250, bottom: 1920 - 250, left: 0, right: 1080 };
const SAFE_REEL = { top: 250, bottom: 1920 - 350, left: 0, right: 1080 - 150 };

// ---------- copy ----------
const used = new Set();
let COPY_SRC = { name: 'campaign/weeks-01-02.md', text: CAMPAIGN };
/** Returns `s` if it appears word for word in the copy source (the campaign file); stops the render otherwise. */
function cp(s) {
  if (!COPY_SRC.text.includes(s)) throw new Error(`Not in ${COPY_SRC.name}: ${JSON.stringify(s)}`);
  used.add(s);
  return s;
}
/** Builds pages whose copy is guarded against a proposal file instead of the campaign. */
async function withCopy(file, fn) {
  const prev = COPY_SRC;
  COPY_SRC = { name: file, text: readFileSync(join(ROOT, file), 'utf8') };
  try { return await fn(); } finally { COPY_SRC = prev; }
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');
const T = (s) => s.replace(/'/g, '’').replace(/(^|[\s(])’/g, '$1‘'); // typographic quotes
/** A text element carrying exact campaign copy. */
const txt = (qa, s, cls, style = '', extra = '') => `<div data-qa="${qa}" data-copy="${attr(cp(s))}" class="${cls}" style="${style}" ${extra}>${T(esc(s))}</div>`;

// ---------- shared pieces (as approved at G1) ----------
const handle = () => `<div class="abs handle" data-qa="handle" style="top:200px;left:540px;transform:translateX(-50%);white-space:nowrap">${HANDLE}</div>`;
const PH = (what) => `PLACEHOLDER<br>${what}<br><span style="font-weight:400">Phase 2 cutout, not final</span>`;
const objectBox = (src, label, box) => src
  ? `<img class="abs" data-qa="object" data-file="${NAMES.get(src) ?? ''}" src="${src}" style="left:${box.left}px;top:${box.top}px;width:${box.w}px;height:${box.h}px;object-fit:contain;object-position:${box.pos ?? 'center bottom'}">`
  : `<div class="abs ph" data-qa="object-placeholder" style="left:${box.left}px;top:${box.top}px;width:${box.w}px;height:${box.h}px"><div>${label}</div></div>`;
const demoLabel = (left, width, top, size = 24, color = C.muted) => `<div class="abs" data-qa="demo-label" data-copy="Demo family" style="left:${left}px;width:${width}px;top:${top}px;text-align:center;font-weight:400;font-size:${size}px;line-height:1.35;color:${color}">${cp('Demo family')}</div>`;
/** Ink phone frame around an unaltered screenshot; "Demo family" centred under it. */
function phoneFrame(src, { left, top, screenH, pad, labelGap = 10, label = true }) {
  const sw = Math.round(screenH * 1290 / 2796);
  const ow = sw + 2 * pad, oh = screenH + 2 * pad;
  const r = Math.round(ow * 0.18), ri = Math.round(sw * 0.155);
  return `<div class="abs" data-qa="phone" data-file="${NAMES.get(src) ?? ''}" style="left:${left}px;top:${top}px;width:${ow}px;height:${oh}px;border-radius:${r}px;background:${C.ink};padding:${pad}px"><img src="${src}" style="width:${sw}px;height:${screenH}px;border-radius:${ri}px;display:block"></div>
  ${label ? demoLabel(left + ow / 2 - Math.max(ow, 200) / 2, Math.max(ow, 200), top + oh + labelGap) : ''}`;
}
// Layout C phone: bottom right, inside the margins, clear of the text above it.
const PHONE_C = { screenH: 448, pad: 12 };
const phoneC = (src) => { const sw = Math.round(PHONE_C.screenH * 1290 / 2796); return phoneFrame(src, { left: 1030 - (sw + 2 * PHONE_C.pad), top: 744, ...PHONE_C, labelGap: 8 }); };
// Layout B phone: the cover object, centred between 960 and 1220.
const phoneB = (src) => { const screenH = 212, pad = 8, sw = Math.round(screenH * 1290 / 2796); return phoneFrame(src, { left: 540 - (sw + 2 * pad) / 2, top: 960, screenH, pad }); };

/** Layout B: statement cover. Headline group centred between zone[0] and zone[1] (as approved at G1);
 *  if the group is taller than the zone, the headline alone is centred and the subheadline follows. */
function layoutB({ setup, payoff, setupSize, payoffSize, sub, zone = [300, 860], gap = 40, mode = 'auto', object, objectLabel, phone, extra = '' }) {
  return `${handle()}
  <div class="abs" data-qa="cover-headline" data-bzone="${zone}" data-bgap="${gap}" data-bmode="${mode}" style="left:50px;width:980px;top:${zone[0]}px;text-align:center">
    ${txt('headline-setup', setup, 'h400', `font-size:${setupSize}px`)}
    ${txt('headline-payoff', payoff, 'h800', `font-size:${payoffSize}px`)}
  </div>
  ${sub ? txt('subheadline', sub, 'abs sub', `left:50px;width:980px;text-align:center;text-wrap:balance;top:${zone[1]}px`) : ''}
  ${phone ? phoneB(phone) : object !== undefined ? objectBox(object, objectLabel, { left: 240, top: 960, w: 600, h: 260, pos: 'center center' }) : ''}
  ${extra}`;
}
/** Layout C: label at 200, headline from 260 (2 lines max), subheadline 32 below (3 lines max),
 *  object or phone bottom right. */
function layoutC({ label, headline, sub, hs = 120, ss = 44, object, objectLabel, scale = 1, phone, headlineMax = 2 }) {
  const w = Math.round(432 * scale), h = Math.round(400 * scale);
  return `${label ? txt('label', label, 'abs label', 'top:200px;left:50px') : ''}
  <div class="abs" style="top:260px;left:50px;width:980px">
    ${txt('headline', headline, 'h800', `font-size:${hs}px`, `data-maxlines="${headlineMax}"`)}
    ${sub ? txt('subheadline', sub, 'sub', `margin-top:32px;font-size:${ss}px`, 'data-maxlines="3"') : ''}
  </div>
  ${phone ? phoneC(phone) : object !== undefined ? objectBox(object, objectLabel, { left: 1030 - w, top: 1260 - h, w, h, pos: 'right bottom' }) : ''}`;
}
const labelAndHeadline = (label, headline, hs = 120) => `${label ? txt('label', label, 'abs label', 'top:200px;left:50px') : ''}
  <div class="abs" style="top:260px;left:50px;width:980px">${txt('headline', headline, 'h800', `font-size:${hs}px`, 'data-maxlines="2"')}</div>`;
/** Layout D: numbered circles and thin Ink arrows centred between 620 and 1180, one accent. */
function layoutD({ label, headline, steps, accent, hs = 120 }) {
  const top = 620, bottom = 1180, n = steps.length, d = n >= 4 ? 100 : 120, fs = n >= 4 ? 44 : 48;
  const gap = (bottom - top - n * d) / (n - 1);
  let s = labelAndHeadline(label, headline, hs);
  steps.forEach((t, i) => {
    const y = top + i * (d + gap);
    const on = i === accent;
    s += `<div class="abs" data-qa="node" style="left:190px;top:${y}px;width:${d}px;height:${d}px;border-radius:50%;border:4px solid ${on ? C.hearth : C.ink};background:${on ? C.hearth : 'transparent'};color:${on ? C.paper : C.ink};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:${Math.round(d * 0.47)}px">${i + 1}</div>
      ${txt('node-label', t, 'abs', `left:${190 + d + 40}px;top:${y}px;height:${d}px;display:flex;align-items:center;font-weight:600;font-size:${fs}px;${on ? `color:${C.hearth}` : ''}`)}`;
    if (i < n - 1) {
      const ay = y + d + 10, ah = gap - 20, cx = 190 + d / 2;
      s += `<svg class="abs" style="left:${cx - 14}px;top:${ay}px" width="28" height="${ah}" viewBox="0 0 28 ${ah}"><line x1="14" y1="0" x2="14" y2="${ah - 6}" stroke="${C.ink}" stroke-width="3"/><path d="M4 ${ah - 14} L14 ${ah - 2} L24 ${ah - 14}" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }
  });
  return s;
}
/** Layout E: headline centred at 560, subheadline 40 below, pill centred at 1200. */
function layoutE({ headline, sub, pill }) {
  return `<div class="abs" style="left:50px;width:980px;top:0;height:1120px;display:flex;flex-direction:column;align-items:center;text-align:center">
    ${txt('headline', headline, 'h800', `font-size:120px;margin-top:${560 - 59}px`, 'data-center-y="560"')}
    ${txt('subheadline', sub, 'sub', 'margin-top:40px')}</div>
  <div class="abs" style="left:0;width:1080px;top:1200px;display:flex;justify-content:center">${txt('pill', pill, 'pill', 'transform:translateY(-50%)')}</div>`;
}

// ---------- Look B (PHOTOS=<dir>): photo-led example, not approved ----------
// The photo fills a band at the top and never carries text; everything else sits on Paper below it.
// Phones straddle the band's lower edge so "Demo family" lands on Paper.
const BAND = 640;
const photo = (file) => named(dataUri(join(PHOTOS, file), file.endsWith('.png') ? 'image/png' : 'image/jpeg'), file);
const photoBand = (file, pos, h = BAND) => `<img class="abs" data-qa="photo" data-file="${file}" src="${photo(file)}" style="left:0;top:0;width:1080px;height:${h}px;object-fit:cover;object-position:${pos}">`;
function coverB({ photoFile, pos, setup, payoff, setupSize, payoffSize, sub, zone, gap = 40, phone }) {
  const screenH = 300, pad = 10, ow = Math.round(screenH * 1290 / 2796) + 2 * pad, oh = screenH + 2 * pad;
  return `${photoBand(photoFile, pos)}
  ${phoneFrame(phone, { left: 930 - ow / 2, top: BAND + 80 - oh, screenH, pad, labelGap: 8 })}
  <div class="abs handle" data-qa="handle" style="top:${BAND + 28}px;left:540px;transform:translateX(-50%);white-space:nowrap">${HANDLE}</div>
  <div class="abs" data-qa="cover-headline" data-bzone="${zone}" data-bgap="${gap}" data-bmode="auto" style="left:50px;width:980px;top:${zone[0]}px;text-align:center">
    ${txt('headline-setup', setup, 'h400', `font-size:${setupSize}px`)}
    ${txt('headline-payoff', payoff, 'h800', `font-size:${payoffSize}px`)}
  </div>
  ${txt('subheadline', sub, 'abs sub', `left:50px;width:980px;text-align:center;text-wrap:balance;top:${zone[1]}px`)}`;
}
function contentB({ photoFile, pos, label, headline, sub, hs, ss, headlineMax, phone }) {
  return `${photoBand(photoFile, pos)}
  ${phone ? phoneFrame(phone, { left: 1030 - (Math.round(448 * 1290 / 2796) + 24), top: BAND - 454, screenH: 448, pad: 12, labelGap: 8 }) : ''}
  ${txt('label', label, 'abs label', `top:${BAND + 68}px;left:50px`)}
  <div class="abs" style="top:${BAND + 128}px;left:50px;width:980px">
    ${txt('headline', headline, 'h800', `font-size:${hs}px`, `data-maxlines="${headlineMax}"`)}
    ${txt('subheadline', sub, 'sub', `margin-top:32px;font-size:${ss}px`, 'data-maxlines="3"')}
  </div>`;
}
// The CTA has less to say, so its photo runs deeper.
function ctaB({ photoFile, pos, headline, sub, pill }) {
  return `${photoBand(photoFile, pos, 760)}
  <div class="abs" style="left:50px;width:980px;top:880px;display:flex;flex-direction:column;align-items:center;text-align:center">
    ${txt('headline', headline, 'h800', 'font-size:120px')}
    ${txt('subheadline', sub, 'sub', 'margin-top:40px')}</div>
  <div class="abs" style="left:0;width:1080px;top:1180px;display:flex;justify-content:center">${txt('pill', pill, 'pill', 'transform:translateY(-50%)')}</div>`;
}

// ---------- Messaging v2 (PROPOSAL=messaging-v2): full-photo slides and the waitlist slide ----------
// Full photo: the photo fills the frame and an Ink gradient sits behind the words, which are Paper. The
// gradient is sized to the text after layout (see the render loop). No Hearth on a photo.
function fullBleed({ photoFile, pos, at = 'bottom', withHandle = false, setup, payoff, setupSize, payoffSize, headline, sub, hs, ss }) {
  const ink = `color:${C.paper}`;
  const words = setup
    ? `${txt('headline-setup', setup, 'h400', `font-size:${setupSize}px;${ink}`, 'data-maxlines="2"')}${txt('headline-payoff', payoff, 'h800', `font-size:${payoffSize}px;${ink}`, 'data-maxlines="2"')}`
    : `${txt('headline', headline, 'h800', `font-size:${hs}px;${ink}`, 'data-maxlines="2"')}${sub ? txt('subheadline', sub, 'sub', `margin-top:28px;font-size:${ss}px;${ink}`, 'data-maxlines="3"') : ''}`;
  return `<img class="abs" data-qa="photo-full" data-file="${photoFile}" src="${photo(photoFile)}" style="left:0;top:0;width:1080px;height:1440px;object-fit:cover;object-position:${pos}">
  <div class="abs scrim" data-scrim="${at}" data-handle="${withHandle ? 1 : 0}" style="inset:0"></div>
  ${withHandle ? `<div class="abs handle" data-qa="handle" style="top:200px;left:540px;transform:translateX(-50%);white-space:nowrap;${ink}">${HANDLE}</div>` : ''}
  <div class="abs fbtext" style="left:50px;width:980px;top:200px;bottom:200px;display:flex;flex-direction:column;justify-content:${at === 'top' ? 'flex-start' : 'flex-end'}">${words}</div>`;
}
/** Paper type slide for v2: label, headline and subheadline centred as a group in the safe area. */
function typeSlide({ label, headline, sub, hs, ss, headlineMax }) {
  return `<div class="abs" style="left:50px;width:980px;top:180px;height:1080px;display:flex;flex-direction:column;justify-content:center">
    ${label ? txt('label', label, 'label', 'margin-bottom:28px') : ''}
    ${txt('headline', headline, 'h800', `font-size:${hs}px`, `data-maxlines="${headlineMax}"`)}
    ${txt('subheadline', sub, 'sub', `margin-top:32px;font-size:${ss}px`, 'data-maxlines="3"')}
  </div>`;
}
/** The waitlist slide: the official colour lockup and the ask on the left, a real app screen in a large phone on the
 *  right, without a "Demo family" caption (D-2026-10-15-3). */
const WAIT_COL = 506;
function waitlistSlide({ headline, sub, pill, phone, hs, ss }) {
  const lw = 300, lh = Math.round(lw * 140.4 / 830 * 10) / 10;
  const screenH = 880, pad = 14, ow = Math.round(screenH * 1290 / 2796) + 2 * pad, oh = screenH + 2 * pad;
  return `<div class="abs" style="left:50px;width:${WAIT_COL}px;top:180px;height:1080px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start">
    <div data-qa="lockup" data-file="bonded-lockup-horizontal-color.svg" style="width:${lw}px;height:${lh}px;margin-bottom:56px">${svg('bonded-lockup-horizontal-color').replace('<svg ', `<svg width="${lw}" height="${lh}" `)}</div>
    ${txt('headline', headline, 'h800', `font-size:${hs}px`, 'data-maxlines="2"')}
    ${txt('subheadline', sub, 'sub', `margin-top:28px;font-size:${ss}px`, 'data-maxlines="5"')}
    <div style="margin-top:40px">${txt('pill', pill, 'pill')}</div>
  </div>
  ${phoneFrame(phone, { left: 1030 - ow, top: 720 - oh / 2, screenH, pad, label: false })}`;
}

// ---------- custom diagrams (Layout D variants named in the briefs) ----------
const arrowHead = (x, y, dir, color) => `<path d="M${x - 12 * dir} ${y - 10} L${x} ${y} L${x - 12 * dir} ${y + 10}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
function day08Rotation() {
  // Two circles swap "Trash" and "Recycling" each week (accent: the swap arrows); "Youngest" holds "Set the table".
  const cy = 880, d = 190, o = 155, m = 565, y = 880;
  const circle = (cx, t) => `<div class="abs" data-qa="node" style="left:${cx - d / 2}px;top:${cy - d / 2}px;width:${d}px;height:${d}px;border-radius:50%;border:4px solid ${C.ink};display:flex;align-items:center;justify-content:center;font-weight:600">${txt('node-label', t, '', 'font-weight:600;font-size:34px')}</div>`;
  const x1 = o + d / 2 + 14, x2 = m - d / 2 - 14;
  return `${circle(o, 'Oldest')}${circle(m, 'Middle')}${circle(y, 'Youngest')}
  <svg class="abs" style="left:0;top:0" width="1080" height="1440" viewBox="0 0 1080 1440">
    <path d="M${x1} ${cy - 40} Q${(x1 + x2) / 2} ${cy - 120} ${x2} ${cy - 40}" fill="none" stroke="${C.hearth}" stroke-width="4" stroke-linecap="round"/>${arrowHead(x2, cy - 40, 1, C.hearth)}
    <path d="M${x2} ${cy + 40} Q${(x1 + x2) / 2} ${cy + 120} ${x1} ${cy + 40}" fill="none" stroke="${C.hearth}" stroke-width="4" stroke-linecap="round"/>${arrowHead(x1, cy + 40, -1, C.hearth)}
  </svg>
  ${txt('diagram-label', 'Trash', 'abs', `left:${(x1 + x2) / 2 - 120}px;width:240px;top:${cy - 152}px;text-align:center;font-weight:600;font-size:32px`)}
  ${txt('diagram-label', 'Recycling', 'abs', `left:${(x1 + x2) / 2 - 120}px;width:240px;top:${cy + 104}px;text-align:center;font-weight:600;font-size:32px`)}
  ${txt('diagram-label', 'Set the table', 'abs', `left:${y - 150}px;width:300px;top:${cy + d / 2 + 24}px;text-align:center;font-weight:600;font-size:32px`)}`;
}
function day10Boxes() {
  // Two boxes side by side; accent on "Extra jobs: paid".
  const box = (left, title, body, on) => `<div class="abs" data-qa="box" style="left:${left}px;top:660px;width:460px;height:480px;border-radius:32px;border:${on ? 5 : 3}px solid ${on ? C.hearth : C.ink};padding:44px;display:flex;flex-direction:column;gap:28px">
      ${txt('box-title', title, 'h800', `font-size:60px;${on ? `color:${C.hearth}` : ''}`)}
      ${txt('box-body', body, '', 'font-weight:400;font-size:40px;line-height:1.3')}</div>`;
  return box(50, 'Everyday jobs: unpaid', 'making beds, clearing plates', false) + box(570, 'Extra jobs: paid', 'washing the car, clearing the garage', true);
}
function day12Progress() {
  // Five segments, Monday to Friday, full; ending in the accent circle "Climbing wall", marked unlocked.
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const x0 = 60, x1 = 770, g = 8, sw = (x1 - x0 - 4 * g) / 5, cy = 880, bh = 48, d = 230, cx = 905;
  let s = '';
  days.forEach((t, i) => {
    const x = x0 + i * (sw + g);
    s += `<div class="abs" data-qa="segment" style="left:${x}px;top:${cy - bh / 2}px;width:${sw}px;height:${bh}px;border-radius:${i === 0 ? '24px 0 0 24px' : i === 4 ? '0 24px 24px 0' : '0'};background:${C.ink}"></div>
      ${txt('segment-label', t, 'abs', `left:${x - 10}px;width:${sw + 20}px;top:${cy + bh / 2 + 18}px;text-align:center;font-weight:600;font-size:24px;color:${C.muted}`)}`;
  });
  const lock = `<svg width="56" height="56" viewBox="0 0 56 56" style="display:block;margin:0 auto 10px"><rect x="10" y="26" width="36" height="26" rx="5" fill="none" stroke="${C.paper}" stroke-width="4"/><path d="M18 26 V17 a10 10 0 0 1 19.5 -3" fill="none" stroke="${C.paper}" stroke-width="4" stroke-linecap="round"/></svg>`;
  s += `<div class="abs" data-qa="node" style="left:${cx - d / 2}px;top:${cy - d / 2}px;width:${d}px;height:${d}px;border-radius:50%;background:${C.hearth};color:${C.paper};font-weight:600;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px">${lock}${txt('node-label', 'Climbing wall', '', `color:${C.paper};font-weight:600;font-size:34px;line-height:1.1;text-align:center;width:160px`)}</div>`;
  s += txt('small-text', 'Agreed together on Sunday.', 'abs small', 'left:50px;width:980px;top:1230px;transform:translateY(-50%);text-align:center');
  return s;
}

// ---------- Stories (as approved at G1) ----------
function storyIdea(head, sub) {
  return `${txt('headline', head, 'abs h800', 'left:90px;width:900px;text-align:center;font-size:96px', 'data-anchor-cy="860"')}
  ${txt('subheadline', sub, 'abs sub', 'left:90px;width:900px;text-align:center', 'data-below="headline" data-gap="36"')}`;
}
function storyQuestion(q) {
  return `<div class="abs" style="left:90px;width:900px;top:420px;height:700px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center">
    ${txt('headline', q, 'h800', 'font-size:88px')}
    ${txt('subheadline', 'Reply and tell us', 'label', 'margin-top:40px;font-size:36px;letter-spacing:0.02em')}</div>`;
}
function storyShareback(question, blockedWhy) {
  return `<div class="abs label" data-qa="label-placeholder" style="left:90px;top:300px">[Shared back, with permission]</div>
  ${txt('headline', question, 'abs h800', 'left:90px;width:900px;top:360px;font-size:72px')}
  ${[0, 1, 2].map((i) => `<div class="abs" data-qa="reply-placeholder" style="left:90px;width:900px;top:${640 + i * 300}px;height:260px;background:${C.surface};border:2px solid ${C.line};border-radius:32px;padding:44px;display:flex;flex-direction:column;justify-content:space-between"><div class="sub">[Genuine reply ${i + 1}, unedited]</div><div class="label" style="font-size:24px">[Anonymous, or name with permission]</div></div>`).join('')}
  <div class="abs ph" data-qa="blocked" style="left:90px;width:900px;top:1560px;height:96px;font-size:26px">BLOCKED: ${blockedWhy}</div>`;
}
function storyBTS(screenFile, caption) {
  return `${phoneFrame(screen(screenFile), { left: 378, top: 270, screenH: 650, pad: 12, labelGap: 14 })}
  ${txt('headline', caption, 'abs', 'left:90px;width:900px;top:1010px;text-align:center;font-weight:600;font-size:48px;line-height:1.25;text-wrap:balance')}`;
}

// ---------- Video text (transparent, 1080x1920) ----------
const vid = (line, size) => txt(size === 72 ? 'headline' : 'subheadline', line, 'abs vid', `left:150px;width:780px;top:320px;font-size:${size}px`);

// ---------- objects ----------
const objects = { sneakers: img(join(OBJ, 'day02_trainers_paper.png')), trashCan: img(join(OBJ, 'day02_bin_paper.png')) };
/** A cutout object from assets/objects (null, so a labelled placeholder, if the file is missing). */
const O = (name) => img(join(OBJ, `${name}_paper.png`));

// ---------- fitting (measured with the real fonts before any page is built) ----------
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const mctx = await browser.newContext({ viewport: { width: 1080, height: 1440 } });
const mpage = await mctx.newPage();
await mpage.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}</style></head><body><div class="page" style="width:1080px;height:1440px"><div id="m"></div></div></body></html>`);
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
  fits.push({ frame, role, text: s, spec: `${start}px, ${maxLines} lines max`, used: `${min}px (still over)` });
  return min;
}
/** Layout C headline size: 2 lines at the largest size down to 88 px; failing that, 3 lines. */
async function headlineSize(frame, s) {
  for (let size = 120; size >= 88; size -= 2) {
    if ((await countLines(s, 'h800', size, 980)) <= 2) {
      if (size !== 120) fits.push({ frame, role: 'headline', text: s, spec: '120px, 2 lines max', used: `${size}px, 2 lines` });
      return { hs: size, maxLines: 2 };
    }
  }
  for (let size = 120; size >= 72; size -= 2) {
    if ((await countLines(s, 'h800', size, 980)) <= 3) {
      fits.push({ frame, role: 'headline', text: s, spec: '120px, 2 lines max', used: `${size}px, 3 lines (2 lines would need under 88px)` });
      return { hs: size, maxLines: 3 };
    }
  }
  throw new Error(`${frame}: headline does not fit`);
}
/** Layout C with headline and subheadline fitted to their line limits. */
async function C_(frame, o, layout = layoutC) {
  const { hs, maxLines } = await headlineSize(frame, cp(o.headline));
  const ss = o.sub ? await fit(frame, 'subheadline', cp(o.sub), 'sub', 44, 34, 3) : 44;
  return layout({ ...o, hs, ss, headlineMax: maxLines });
}
/** Layout B with setup and payoff scaled together (2% steps) until the headline group fits its zone
 *  and the subheadline ends 20 px above what follows it (the object, or Day 7's checklist). */
async function B_(frame, o, layout = layoutB) {
  const zone = o.zone ?? [300, 860], gap = o.gap ?? 40, limit = o.limit ?? 940, zh = zone[1] - zone[0];
  const S = o.sub ? (await countLines(cp(o.sub), 'sub', 44, 980)) * 44 * 1.3 : 0;
  for (let k = 100; k >= 60; k -= 2) {
    const ss = Math.round(o.setupSize * k / 100), ps = Math.round(o.payoffSize * k / 100);
    const H = (await countLines(cp(o.setup), 'h400', ss, 980)) * ss * 0.98 + (await countLines(cp(o.payoff), 'h800', ps, 980)) * ps * 0.98;
    const groupOk = o.mode !== 'literal' && H + gap + S <= zh;
    const literalOk = H <= zh && zone[0] + (zh + H) / 2 + gap + S <= limit;
    if (groupOk || literalOk) {
      if (k < 100) fits.push({ frame, role: 'cover headline', text: `${o.setup} / ${o.payoff}`, spec: `${o.setupSize}px / ${o.payoffSize}px`, used: `${ss}px / ${ps}px (${k}%)` });
      return layout({ ...o, setupSize: ss, payoffSize: ps });
    }
  }
  throw new Error(`${frame}: cover headline does not fit`);
}

/** Full-photo slide with its type fitted: cover setup/payoff (2 lines each) or headline (2) and sub (3). */
async function FB_(frame, o) {
  const z = o.setup
    ? { setupSize: await fit(frame, 'cover setup', cp(o.setup), 'h400', 100, 72, 2), payoffSize: await fit(frame, 'cover payoff', cp(o.payoff), 'h800', 112, 80, 2) }
    : { hs: await fit(frame, 'headline', cp(o.headline), 'h800', 104, 80, 2), ss: o.sub ? await fit(frame, 'subheadline', cp(o.sub), 'sub', 44, 34, 3) : 44 };
  return fullBleed({ ...o, ...z });
}
/** Waitlist slide with the headline and subheadline fitted to the left column. */
async function W_(frame, o) {
  const hs = await fit(frame, 'headline', cp(o.headline), 'h800', 104, 80, 2, WAIT_COL);
  const ss = await fit(frame, 'subheadline', cp(o.sub), 'sub', 40, 32, 5, WAIT_COL);
  return waitlistSlide({ ...o, hs, ss });
}

// ---------- pages ----------
const pages = [];
const add = (name, w, h, body, opts = {}) => pages.push({ name, w, h, body, transparent: !!opts.transparent, bg: opts.bg ?? C.paper, safe: opts.safe, crop45: !!opts.crop45, status: opts.status ?? 'PROOF' });
const feed = (name, body, crop45 = false, status) => add(name, 1080, 1440, body, { safe: SAFE_FEED, crop45, status });
const story = (name, body, status) => add(name, 1080, 1920, body, { safe: SAFE_STORY, status });
const video = (name, body) => add(name, 1080, 1920, body, { transparent: true, safe: SAFE_REEL });

// Day 0, pinned introduction (6 slides; slides 2-5 also as the "About" highlight)
if (PROPOSAL) {
  // Messaging v2 (proposals/messaging-v2.md): the problem, the feeling, what to do, then Bonded and the waitlist.
  await withCopy(PROPOSAL, async () => {
    const full = async (n, o) => add(`day00/day00_carousel_s0${n}`, 1080, 1440, await FB_(`day00_carousel_s0${n}`, o), { safe: SAFE_FEED, crop45: n === 1, status: 'PROPOSAL', bg: C.ink });
    const paper = async (n, o) => feed(`day00/day00_carousel_s0${n}`, await C_(`day00_carousel_s0${n}`, o, typeSlide), false, 'PROPOSAL');
    await full(1, { photoFile: 'd00_c01.jpg', pos: '45% 40%', withHandle: true, setup: 'In every house, one person knows', payoff: 'where the permission slip is.' });
    await paper(2, { headline: "And when it's due. And who's driving.", sub: 'Which night is trash night. Whose turn it is. Who needs new sneakers before Saturday. It all lives in one head.' });
    await full(3, { photoFile: 'd00_c02.jpg', pos: '40% 50%', headline: "It's not the jobs that wear you out.", sub: "It's being the only one keeping track. At dinner. In bed. On vacation." });
    await paper(4, { label: 'What helps', headline: 'Get the week out of one head.', sub: "Write it down once, where everyone can see it: what's coming up, and who's doing what." });
    await paper(5, { label: 'What helps', headline: "Give everyone a part that's theirs.", sub: 'Kids from about 4 can own something real. A job they picked is harder to argue with.' });
    await full(6, { photoFile: 'd00_c04.jpg', pos: '55% 50%', headline: 'So Saturday can just be Saturday.', sub: 'Less of it spent chasing, reminding and keeping score.' });
    feed('day00/day00_carousel_s07', await W_('day00_carousel_s07', { headline: 'Join the waitlist.', sub: "Bonded is a family app for running the week together. It's coming to iPhone and Android.", pill: 'Link in bio', phone: screen('67-mom-family-climbing-light.png') }), false, 'PROPOSAL');
  });
} else {
  const d00 = [];
  // Look B: the owner's photo for each slide (file name = slide number) and where to centre the crop.
  // PHOTO_ORDER=1,5,3,2,4,6 puts photo 5 on slide 2, and so on (to compare orders; the default is the owner's).
  const PHOTO_SET = { 1: ['d00_c01.jpg', '50% 35%'], 2: ['d00_c02.jpg', '50% 50%'], 3: ['d00_c03.jpg', '50% 71%'], 4: ['d00_c04.jpg', '50% 50%'], 5: ['d00_c05.png', '50% 20%'], 6: ['d00_c06.png', '50% 35%'] };
  const pB = PHOTOS ? (process.env.PHOTO_ORDER ?? '1,2,3,4,5,6').split(',').map((n) => ({ photoFile: PHOTO_SET[n][0], pos: PHOTO_SET[n][1] })) : null;
  d00.push(await B_('day00_carousel_s01', { setup: 'What Bonded is,', payoff: "and why we're building it.", setupSize: 140, payoffSize: 150, sub: 'A family app for running the week together.', phone: screen('64-mom-home-recognition-light.png'), ...(pB ? { ...pB[0], zone: [BAND + 140, 1250] } : {}) }, pB ? coverB : layoutB));
  d00.push(await C_('day00_carousel_s02', { label: 'What it is', headline: 'One shared plan for the whole family.', sub: "The week's plan, who's doing what, and something to look forward to, in one place everyone can see.", phone: screen('67-mom-family-climbing-light.png'), ...pB?.[1] }, pB ? contentB : layoutC));
  d00.push(await C_('day00_carousel_s03', { label: "Who it's for", headline: 'Families with kids from about 4 to 18.', sub: 'Parents set the plan. Kids see their own part, tick things off, and can ask for help, a break or a new day.', ...pB?.[2] }, pB ? contentB : layoutC));
  d00.push(await C_('day00_carousel_s04', { label: "Why we're building it", headline: "The week shouldn't live in one person's head.", sub: 'In most families, one parent remembers everything and asks for everything. We think the work, and the credit for it, should be shared.', ...pB?.[3] }, pB ? contentB : layoutC));
  d00.push(await C_('day00_carousel_s05', { label: 'How rewards work', headline: 'Points unlock extras the family agrees on.', sub: "A climbing wall trip, a movie night out, an allowance if you choose. Everyday time together is never on the line. Bonded keeps track of money; it doesn't move it.", ...pB?.[4] }, pB ? contentB : layoutC));
  d00.push((pB ? ctaB : layoutE)({ headline: 'Join the waitlist.', sub: 'Bonded is coming to iPhone and Android.', pill: 'Link in bio', ...pB?.[5] }));
  d00.forEach((b, i) => feed(`day00/day00_carousel_s0${i + 1}`, b, i === 0));
  story('day00/day00_highlight_cover', `${txt('headline', 'About', 'abs h800', 'left:90px;width:900px;text-align:center;font-size:200px', 'data-anchor-cy="960"')}`);
  for (let i = 1; i <= 4; i++) story(`day00/day00_highlight_s0${i + 1}`, `<div class="abs" style="left:0;top:240px;width:1080px;height:1440px">${d00[i]}</div>`);
}

// Day 1 video + Question story
video('day01/day01_video_00s-03s', vid('Let them choose.', 72));
video('day01/day01_video_03s-09s', vid('Theirs for a month.', 62));
video('day01/day01_video_09s-14s', vid('Keep it, swap it, or add one.', 62));
story('day01/day01_story_f1', storyQuestion('If your kids could pick one job, which would they go for?'));

// Day 2 carousel (US master) + Idea story
feed('day02/day02_carousel_s01', await B_('day02_carousel_s01', { setup: 'Maybe the problem', payoff: "isn't the chores.", setupSize: 120, payoffSize: 120, sub: 'It might be that nobody agreed on them.', object: objects.sneakers, objectLabel: PH("Kids' sneakers") }), true);
feed('day02/day02_carousel_s02', await C_('day02_carousel_s02', { label: '01', headline: 'Listen to where it starts.', sub: "Not at the trash can. At 'I didn't know it was my turn.'", object: objects.trashCan, objectLabel: PH('Kitchen trash can') }));
feed('day02/day02_carousel_s03', await C_('day02_carousel_s03', { label: '02', headline: "Make 'done' specific.", sub: "'Clean your room' means something different to everyone in the house. 'Clothes in the basket, bed made, floor clear' doesn't.", object: O('day02_laundry_basket'), objectLabel: PH('Laundry basket') }));
feed('day02/day02_carousel_s04', layoutD({ headline: cp('Agree three things.'), steps: ['What needs doing', 'Whose it is', 'What done looks like'], accent: 1 }));
feed('day02/day02_carousel_s05', await C_('day02_carousel_s05', { label: '04', headline: 'Do it once, before the week starts.', sub: "Not at the sink on Tuesday, when everyone's tired and the dishwasher is already full.", object: O('day02_dishwasher_basket'), objectLabel: PH('Full dishwasher basket') }));
feed('day02/day02_carousel_s06', await C_('day02_carousel_s06', { label: '05', headline: 'Write it where everyone looks.', sub: "The fridge, a whiteboard by the door, a shared app. Not one person's head.", object: O('day02_fridge_list'), objectLabel: PH('List held to a fridge by a magnet') }));
feed('day02/day02_carousel_s07', await C_('day02_carousel_s07', { label: '06', headline: 'Check in at the end of the week.', sub: "Five minutes: what worked, what didn't, what changes next week. The agreement should keep up with real life." }));
story('day02/day02_story_f1', storyIdea("Agree what 'done' means.", "'Clothes in the basket, bed made, floor clear' is hard to argue with."));

// Day 3 single + Question story
feed('day03/day03_single', await B_('day03_single', { setup: 'Apparently,', payoff: "I'm the family calendar.", setupSize: 130, payoffSize: 150, sub: 'Soccer is Tuesday. The dentist moved to Thursday. Nobody else knows either of those things.', object: O('day03_wall_calendar'), objectLabel: PH('Well-used paper wall calendar with two sticky notes') }), true);
story('day03/day03_story_f1', storyQuestion("Who's the family calendar in your house?"));

// Day 4 video + Question story
video('day04/day04_video_00s-04s', vid('Their night to plan dinner.', 72));
video('day04/day04_video_04s-09s', vid('Their meal. Your budget.', 62));
video('day04/day04_video_09s-15s', vid('Swapping to stay on budget.', 62));
story('day04/day04_story_f1', storyQuestion('If your kids planned dinner, what would you be eating?'));

// Day 5 carousel (objects grow slide to slide) + Behind the scenes story
feed('day05/day05_carousel_s01', await B_('day05_carousel_s01', { setup: 'What kids can actually handle,', payoff: 'age by age.', setupSize: 130, payoffSize: 170, sub: 'A starting point for handing things over, not a rulebook.', object: O('day05_socks'), objectLabel: PH("A child's sock next to an adult's sock") }), true);
const ages = [
  ['4 to 6', 'One thing at a time, next to you.', "Toys into the basket, plate to the sink, shoes by the door. They can own it. You'll still be standing nearby.", 'Toy basket', 'day05_toy_basket'],
  ['7 to 9', 'Small daily routines.', "Make the bed, set the table, feed the pet. Expect to remind them for a while. That's normal.", 'Fork on a folded napkin', 'day05_fork_napkin'],
  ['10 to 12', 'Jobs that help other people.', 'Load the dishwasher, sort the recycling, make their own school lunch. This is where it stops being only about their own stuff.', 'Lunchbox', 'day05_lunchbox'],
  ['13 to 15', 'Whole jobs, start to finish.', 'Their own laundry. One simple dinner a week. The trash on trash day.', 'Laundry basket', 'day05_laundry_basket'],
  ['16 to 18', 'Things adults actually do.', 'A grocery run with a list and a budget. Booking their own appointments. Cooking for everyone once a week.', 'Paper grocery bag with a list tucked in', 'day05_grocery_bag'],
];
// "The cutout on each age slide gets a little bigger than the last": 60% to 100% of the Layout C object box.
for (const [i, [label, headline, sub, what, file]] of ages.entries()) {
  feed(`day05/day05_carousel_s0${i + 2}`, await C_(`day05_carousel_s0${i + 2}`, { label, headline, sub, object: O(file), objectLabel: PH(what), scale: 0.6 + i * 0.1 }));
}
feed('day05/day05_carousel_s07', layoutD({ headline: cp('How to hand something over.'), steps: ['Do it together', 'They do it, you watch', 'They do it, you check', "It's theirs"], accent: 3 }));
feed('day05/day05_carousel_s08', await C_('day05_carousel_s08', { headline: 'Start with two.', sub: 'Add a third once the first two run without you.' }));
story('day05/day05_story_f1', storyBTS('61-emma-today-before-light.png', "Each kid gets a list of what's theirs today."));

// Day 6 video + Share-back stories (blocked until genuine replies exist)
video('day06/day06_video_00s-04s', vid('20 minutes. One room each.', 72));
video('day06/day06_video_04s-10s', vid('Stop when the timer stops.', 62));
video('day06/day06_video_10s-16s', vid('No inspections.', 62));
video('day06/day06_video_16s-22s', vid('Then something good.', 62));
story('day06/day06_story_f1', storyShareback('If your kids could pick one job, which would they go for?', 'needs genuine replies to the Day 1 question'), 'BLOCKED');
story('day06/day06_story_f2', storyShareback('If your kids planned dinner, what would you be eating?', 'needs genuine replies to the Day 4 question'), 'BLOCKED');

// Day 7 single (Layout B adapted) + Idea story
const checklist = ['Who needs to be where, and when', "Who's driving", 'What needs packing or paying for', 'One thing to look forward to'];
const d07list = `<div class="abs" data-qa="checklist" style="left:50px;width:980px;top:780px;height:280px;display:flex;justify-content:center"><div style="display:flex;flex-direction:column;justify-content:space-around">${checklist.map((t) => `<div style="display:flex;align-items:center;gap:22px"><div style="width:30px;height:30px;border:3px solid ${C.ink};border-radius:6px;flex:none"></div>${txt('checklist-item', t, '', 'font-weight:400;font-size:36px;line-height:1.3')}</div>`).join('')}</div></div>
  ${objectBox(O('day07_mug_notepad'), PH('Mug of tea next to an open notepad with the days of the week'), { left: 1030 - 330, top: 1080, w: 330, h: 160 })}`;
feed('day07/day07_single', await B_('day07_single', { setup: 'Does everyone know', payoff: "what's happening this week?", setupSize: 120, payoffSize: 130, sub: 'Ten minutes on Sunday evening, out loud.', zone: [280, 680], gap: 32, mode: 'literal', limit: 760, extra: d07list }), true);
story('day07/day07_story_f1', storyIdea('Four questions for Sunday evening.', "Who's where? Who's driving? What needs packing? What's fun this week?"));

// Day 8 carousel + Question story
feed('day08/day08_carousel_s01', await B_('day08_carousel_s01', { setup: 'How to split jobs between siblings', payoff: 'without a court case.', setupSize: 120, payoffSize: 160, sub: "Five things that help when they're different ages.", object: O('day08_rain_boots'), objectLabel: PH('Two pairs of rain boots, one small, one big') }), true);
feed('day08/day08_carousel_s02', await C_('day08_carousel_s02', { label: '01', headline: 'Measure effort, not tasks.', sub: 'Ten minutes of matching socks at 5 is a real contribution. So is twenty minutes of dishes at 12.', object: O('day08_small_socks'), objectLabel: PH('A pair of small socks') }));
feed('day08/day08_carousel_s03', await C_('day08_carousel_s03', { label: '02', headline: 'Rotate the unpopular jobs between kids who can do them.', sub: 'A 12-year-old and a 9-year-old can swap the trash and the recycling week by week. A 5-year-old gets a smaller job that still counts.', object: O('day08_trash_bags'), objectLabel: PH('A roll of trash bags') }));
feed('day08/day08_carousel_s04', `${labelAndHeadline(null, cp('A rotation that fits their ages.'), (await headlineSize('day08_carousel_s04', 'A rotation that fits their ages.')).hs)}${day08Rotation()}`);
feed('day08/day08_carousel_s05', await C_('day08_carousel_s05', { label: '04', headline: 'Let them help draw it up.', sub: 'A split they had a say in is much harder to call unfair. Ask what feels fair to them before you decide.', object: O('day08_sticky_note'), objectLabel: PH('A sticky note and a pencil') }));
feed('day08/day08_carousel_s06', await C_('day08_carousel_s06', { label: '05', headline: 'Leave comparisons out of it.', sub: "'Your sister already did hers' has never once made anyone faster.", object: O('day08_paper_stars'), objectLabel: PH('Two paper stars of different sizes') }));
feed('day08/day08_carousel_s07', await C_('day08_carousel_s07', { headline: 'Fair changes as they grow.', sub: "What's fair at 6 and 10 won't be fair at 8 and 12. The start of each school year is a good moment to rethink who does what." }));
story('day08/day08_story_f1', storyQuestion('Same jobs for everyone, or jobs by age?'));

// Day 9 video + Idea story
video('day09/day09_video_00s-04s', vid('Have a real job ready.', 72));
video('day09/day09_video_04s-10s', vid('Something that actually needs doing.', 62));
video('day09/day09_video_10s-15s', vid("Yes, it'll take longer.", 62));
video('day09/day09_video_15s-20s', vid('She washed them.', 62));
story('day09/day09_story_f1', storyIdea('Real jobs for under-6s.', 'Washing vegetables, matching socks, watering plants, carrying silverware to the table.'));

// Day 10 carousel (slides 2 and 3 mirror each other: same sizes) + Question story
feed('day10/day10_carousel_s01', await B_('day10_carousel_s01', { setup: 'Should allowance', payoff: 'be linked to chores?', setupSize: 130, payoffSize: 160, sub: 'Sensible parents land on both sides of this.', object: O('day10_coin_jar'), objectLabel: PH('Glass jar of coins with a handwritten label') }), true);
{
  const a = { label: 'The case for', headline: 'Money follows effort.', sub: 'Kids see the connection long before their first job. Saving up means more when they earned it.', object: O('day10_coins_stacked'), objectLabel: PH('A few coins stacked') };
  const b = { label: 'The case against', headline: 'Some jobs just come with living here.', sub: "Pay for everything and you might start hearing 'how much?' every time you ask for help.", object: O('day10_plate_towel'), objectLabel: PH('A plate and a dish towel') };
  const hs = Math.min((await headlineSize('day10_carousel_s02', cp(a.headline))).hs, (await headlineSize('day10_carousel_s03', cp(b.headline))).hs);
  const ss = Math.min(await fit('day10_carousel_s02', 'subheadline', cp(a.sub), 'sub', 44, 34, 3), await fit('day10_carousel_s03', 'subheadline', cp(b.sub), 'sub', 44, 34, 3));
  if (hs !== 120) fits.push({ frame: 'day10_carousel_s02 + s03', role: 'headline (mirrored pair)', text: `${a.headline} / ${b.headline}`, spec: '120px, same size on both', used: `${hs}px` });
  feed('day10/day10_carousel_s02', layoutC({ ...a, hs, ss }));
  feed('day10/day10_carousel_s03', layoutC({ ...b, hs, ss }));
}
feed('day10/day10_carousel_s04', `${labelAndHeadline(null, cp('Where a lot of families land.'), (await headlineSize('day10_carousel_s04', 'Where a lot of families land.')).hs)}${day10Boxes()}`);
feed('day10/day10_carousel_s05', await C_('day10_carousel_s05', { label: 'Whichever you choose', headline: 'Agree on it before payday.', sub: "What's paid, how much, and which day. Most allowance arguments come from an agreement nobody actually made.", object: O('day10_calendar_circled'), objectLabel: PH('Wall calendar with one day circled') }));
feed('day10/day10_carousel_s06', await C_('day10_carousel_s06', { headline: "Keep 'earned' and 'paid' apart.", sub: "Write down what's been earned as it happens. Then payday is just handing it over.", object: O('day10_notebook_pencil'), objectLabel: PH('Small notebook with a pencil') }));
feed('day10/day10_carousel_s07', await C_('day10_carousel_s07', { headline: 'Which way does your house do it?', sub: 'Linked, separate, or somewhere in between.' }));
story('day10/day10_story_f1', storyQuestion('Allowance: linked to jobs, separate, or a mix?'));

// Day 11 video, end card, "Demo family" label for app shots, Behind the scenes story
video('day11/day11_video_00s-04s', vid('Before anyone asked.', 72));
video('day11/day11_video_04s-08s', vid('Ticked off.', 62));
video('day11/day11_video_08s-14s', vid("It doesn't need to be a speech.", 62));
video('day11/day11_video_14s-18s', vid('It counts toward Saturday.', 62));
video('day11/day11_endcard', `<div class="abs" style="inset:0;background:rgba(0,0,0,.40)"></div>
  <div class="abs" data-qa="lockup" data-file="bonded-lockup-horizontal-reversed.svg" style="left:${540 - 220}px;top:${860 - 37}px;width:440px;height:74.4px">${svg('bonded-lockup-horizontal-reversed').replace('<svg ', '<svg width="440" height="74.4" ')}</div>
  <div class="abs" data-qa="headline" data-copy="${attr(cp('Join the waitlist'))}" style="left:150px;width:780px;top:${860 + 37 + 40}px;text-align:center;color:#fff;font-weight:800;font-size:110px;letter-spacing:-0.04em;line-height:1.0">Join the<br>waitlist</div>`);
video('day11/day11_video_demo-family-label', `<div class="abs vid" data-qa="demo-label" data-copy="Demo family" style="left:150px;width:780px;top:1500px;font-size:32px">${cp('Demo family')}</div>`);
story('day11/day11_story_f1', storyBTS('65-mom-review-note-light.png', 'Why approvals have room for a note: kids should hear when they got it right, too.'));

// Day 12 carousel (phones bottom right, "Demo family" under each) + Share-back story
feed('day12/day12_carousel_s01', await B_('day12_carousel_s01', { setup: 'One week with', payoff: 'a shared family plan.', setupSize: 140, payoffSize: 160, sub: 'How the Millers, our demo family, use Bonded.', phone: screen('64-mom-home-recognition-light.png') }), true);
feed('day12/day12_carousel_s02', await C_('day12_carousel_s02', { label: 'Sunday', headline: 'The week goes in, plus one extra to aim for.', sub: "Trash on Tuesday, laundry on Thursday, who's doing what. Then the family agrees on an optional extra for the weekend: a trip to the climbing wall.", phone: screen('74-mom-upcoming-light.png') }));
feed('day12/day12_carousel_s03', await C_('day12_carousel_s03', { label: 'Monday', headline: 'Everyone sees their own part.', sub: 'Emma has two things on her list. Leo has three. Nobody needs to ask whose turn it is.', phone: screen('61-emma-today-before-light.png') }));
feed('day12/day12_carousel_s04', await C_('day12_carousel_s04', { label: 'Wednesday', headline: 'Leo needs to move something.', sub: 'He has a practice test, so he asks to swap trash night instead of quietly skipping it.', phone: screen('70-leo-reschedule-draft-light.png') }));
feed('day12/day12_carousel_s05', await C_('day12_carousel_s05', { label: 'Thursday', headline: 'Family jobs add up.', sub: 'Every family job that gets done adds points toward the climbing wall. Everyone can see how close they are.', phone: screen('67-mom-family-climbing-light.png') }));
feed('day12/day12_carousel_s06', await C_('day12_carousel_s06', { label: 'Friday', headline: "The ordinary stuff isn't on the line.", sub: "Dinners, walks, a parent's time: none of it depends on points. The points only unlock the extra." }));
feed('day12/day12_carousel_s07', `${labelAndHeadline(cp('Saturday'), cp('Climbing wall unlocked.'), (await headlineSize('day12_carousel_s07', 'Climbing wall unlocked.')).hs)}${day12Progress()}`);
feed('day12/day12_carousel_s08', layoutE({ headline: 'Join the waitlist.', sub: 'Bonded is coming to iPhone and Android.', pill: 'Link in bio' }));
story('day12/day12_story_f1', storyShareback('Allowance: linked to jobs, separate, or a mix?', 'needs the Day 10 results and genuine replies'), 'BLOCKED');

// Day 13 video + Question story
video('day13/day13_video_00s-04s', vid('Plan the weekend on Wednesday.', 72));
video('day13/day13_video_04s-10s', vid('Saturday morning is too late.', 62));
video('day13/day13_video_10s-16s', vid('What, when, and a rain plan.', 62));
story('day13/day13_story_f1', storyQuestion("What's the plan for Saturday?"));

// Day 14 single + Question story
feed('day14/day14_single', await B_('day14_single', { setup: 'What has your family', payoff: 'been meaning to do for ages?', setupSize: 130, payoffSize: 140, sub: 'The hike, the trip, the place someone mentioned two summers ago.', object: O('day14_folded_map'), objectLabel: PH('Folded paper map with a corner bent back') }), true);
story('day14/day14_story_f1', storyQuestion("What's been on your family's list for ages?"));

await mctx.close();

// ---------- Canva build spec (SPEC=1) ----------
// Walks each rendered page in paint order and records what a Canva master needs: text boxes (words,
// box, size, weight, colour, alignment, line height, letter spacing), pictures (file and rectangle),
// and shapes (SVG paths with fill and stroke). Phones are saved as one transparent PNG each.
const SPEC = process.env.SPEC === '1';
const specs = [];
const phonePngs = new Map();
async function collectSpec(pg, p) {
  const els = await pg.evaluate(() => {
    const out = [];
    const rgba = (c) => { const m = (c || '').match(/[\d.]+/g); if (!m || m.length < 3) return null; const [r, g, b, a = 1] = m.map(Number); return a === 0 ? null : { hex: '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase(), a }; };
    const r2 = (v) => Math.round(v * 10) / 10;
    const rect = (r) => ({ x: r2(r.left), y: r2(r.top), w: r2(r.width), h: r2(r.height) });
    const q2c = (d) => d.replace(/M\s*([\d.-]+)[ ,]+([\d.-]+)\s*Q\s*([\d.-]+)[ ,]+([\d.-]+)\s+([\d.-]+)[ ,]+([\d.-]+)/g, (_, x0, y0, cx, cy, x, y) => {
      [x0, y0, cx, cy, x, y] = [x0, y0, cx, cy, x, y].map(Number);
      const c1 = [x0 + (2 / 3) * (cx - x0), y0 + (2 / 3) * (cy - y0)], c2 = [x + (2 / 3) * (cx - x), y + (2 / 3) * (cy - y)];
      return `M${x0} ${y0} C${r2(c1[0])} ${r2(c1[1])} ${r2(c2[0])} ${r2(c2[1])} ${x} ${y}`;
    });
    const roundedPath = (w, h, [tl, tr, br, bl]) => `M${tl} 0 H${w - tr} ${tr ? `A${tr} ${tr} 0 0 1 ${w} ${tr}` : ''} V${h - br} ${br ? `A${br} ${br} 0 0 1 ${w - br} ${h}` : ''} H${bl} ${bl ? `A${bl} ${bl} 0 0 1 0 ${h - bl}` : ''} V${tl} ${tl ? `A${tl} ${tl} 0 0 1 ${tl} 0` : ''} Z`;
    function walk(el) {
      if (el.matches('[data-qa="phone"]')) { out.push({ kind: 'image', role: 'phone', file: el.dataset.file, ...rect(el.getBoundingClientRect()) }); return walkSiblingsDone; }
      if (el.matches('[data-qa="lockup"]')) { out.push({ kind: 'image', role: 'lockup', file: el.dataset.file, ...rect(el.getBoundingClientRect()) }); return walkSiblingsDone; }
      if (el.tagName === 'IMG') {
        // object-fit: contain -> the rectangle the picture really occupies.
        const r = el.getBoundingClientRect(), k = Math.min(r.width / el.naturalWidth, r.height / el.naturalHeight);
        const w = el.naturalWidth * k, h = el.naturalHeight * k;
        const [px, py] = getComputedStyle(el).objectPosition.split(' ').map((v) => parseFloat(v) / 100);
        out.push({ kind: 'image', role: 'object', file: el.dataset.file, x: r2(r.left + (r.width - w) * px), y: r2(r.top + (r.height - h) * py), w: r2(w), h: r2(h) });
        return walkSiblingsDone;
      }
      if (el.tagName.toLowerCase() === 'svg' && !el.closest('[data-qa="lockup"]')) {
        const r = el.getBoundingClientRect();
        for (const c of el.querySelectorAll('line,path,rect')) {
          let d;
          if (c.tagName === 'line') d = `M${c.getAttribute('x1')} ${c.getAttribute('y1')} L${c.getAttribute('x2')} ${c.getAttribute('y2')}`;
          else if (c.tagName === 'rect') { const x = +c.getAttribute('x'), y = +c.getAttribute('y'), w = +c.getAttribute('width'), h = +c.getAttribute('height'), rx = +(c.getAttribute('rx') || 0); d = roundedPath(w, h, [rx, rx, rx, rx]).replace(/([MHVLA])([\d.-]+)/g, (m) => m); d = `M${x + rx} ${y} H${x + w - rx} A${rx} ${rx} 0 0 1 ${x + w} ${y + rx} V${y + h - rx} A${rx} ${rx} 0 0 1 ${x + w - rx} ${y + h} H${x + rx} A${rx} ${rx} 0 0 1 ${x} ${y + h - rx} V${y + rx} A${rx} ${rx} 0 0 1 ${x + rx} ${y} Z`; }
          else d = q2c(c.getAttribute('d'));
          const vb = el.viewBox.baseVal;
          out.push({ kind: 'shape', role: 'stroke', path: d, vbw: vb.width || r.width, vbh: vb.height || r.height, x: r2(r.left), y: r2(r.top), w: r2(r.width), h: r2(r.height), fill: null, stroke: c.getAttribute('stroke'), strokeW: +(c.getAttribute('stroke-width') || 1) });
        }
        return walkSiblingsDone;
      }
      if (!el.classList.contains('page')) {
        const cs = getComputedStyle(el), r = el.getBoundingClientRect();
        const fill = rgba(cs.backgroundColor), bw = parseFloat(cs.borderTopWidth) || 0, stroke = bw ? rgba(cs.borderTopColor) : null;
        if (fill || stroke) {
          const radii = ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'].map((k) => Math.min(parseFloat(cs[k]) || 0, r.width / 2, r.height / 2));
          const ellipse = cs.borderTopLeftRadius.includes('%') || radii.every((v) => v >= Math.min(r.width, r.height) / 2 - 0.5) && Math.abs(r.width - r.height) < 1;
          const w = r.width, h = r.height;
          const path = ellipse ? `M0 ${h / 2} A${w / 2} ${h / 2} 0 1 0 ${w} ${h / 2} A${w / 2} ${h / 2} 0 1 0 0 ${h / 2} Z` : roundedPath(w, h, radii);
          out.push({ kind: 'shape', role: ellipse ? 'ellipse' : 'box', path, vbw: r2(w), vbh: r2(h), x: r2(r.left), y: r2(r.top), w: r2(w), h: r2(h), fill: fill && fill.hex, opacity: fill ? fill.a : 1, stroke: stroke && stroke.hex, strokeW: bw, dashed: cs.borderTopStyle === 'dashed' });
        }
        const direct = [...el.childNodes].filter((n) => n.nodeType === 3 && n.textContent.trim());
        if (direct.length) {
          const range = document.createRange(); range.selectNodeContents(el);
          const tr = range.getBoundingClientRect();
          const inlineOnly = [...el.children].every((c) => ['BR', 'SPAN'].includes(c.tagName));
          const text = (inlineOnly ? el.innerText : direct.map((n) => n.textContent).join(' ')).replace(/[ \t]+/g, ' ').trim();
          const lh = cs.lineHeight === 'normal' ? 1.2 * parseFloat(cs.fontSize) : parseFloat(cs.lineHeight);
          const ta = cs.textAlign === 'center' || cs.justifyContent === 'center' && cs.display.includes('flex') && !text.includes('\n') ? 'center' : cs.textAlign === 'right' || cs.textAlign === 'end' ? 'end' : 'start';
          const pl = parseFloat(cs.paddingLeft) + parseFloat(cs.borderLeftWidth), pr = parseFloat(cs.paddingRight) + parseFloat(cs.borderRightWidth);
          const cx = r.left + pl, cw = r.width - pl - pr;
          const hug = Math.abs(cw - tr.width) < 3;
          const lines = new Set([...range.getClientRects()].map((x) => Math.round(x.top))).size;
          out.push({ kind: 'text', qa: el.dataset.qa || el.closest('[data-qa]')?.dataset.qa || null, text, x: r2(cx), y: r2(tr.top), w: r2(cw), h: r2(tr.height), hug, lines, cy: r2((tr.top + tr.bottom) / 2), textX: r2(tr.left), textW: r2(tr.width), fontSize: parseFloat(cs.fontSize), weight: +cs.fontWeight, color: rgba(cs.color).hex, align: ta, lineHeight: r2(lh / parseFloat(cs.fontSize) * 100) / 100, letterSpacingEm: r2((parseFloat(cs.letterSpacing) || 0) / parseFloat(cs.fontSize) * 1000) / 1000, shadow: cs.textShadow !== 'none' });
        }
      }
      for (const c of el.children) walk(c);
    }
    const walkSiblingsDone = undefined;
    walk(document.querySelector('.page'));
    return out;
  });
  // Phones: one transparent PNG per screen and size, cut from the rendered page at 3x.
  const phones = await pg.$$('[data-qa="phone"]');
  for (const h of phones) {
    const box = await h.boundingBox();
    const file = await h.getAttribute('data-file');
    const key = `phone_${file.replace('.png', '')}_${Math.round(box.width)}`;
    if (!phonePngs.has(key)) {
      const hi = await browser.newContext({ viewport: { width: p.w, height: p.h }, deviceScaleFactor: 3 });
      const hp = await hi.newPage();
      await hp.setContent(await pg.content(), { waitUntil: 'load' });
      await hp.evaluate(() => document.fonts.ready);
      await hp.evaluate(() => { document.querySelector('.page').style.background = 'transparent'; });
      const el = (await hp.$$('[data-qa="phone"]'))[phones.indexOf(h)];
      const out = join(OUT, 'canva', `${key}.png`);
      mkdirSync(dirname(out), { recursive: true });
      await el.screenshot({ path: out, omitBackground: true });
      phonePngs.set(key, out);
      await hi.close();
    }
    const e = els.find((x) => x.role === 'phone' && x.file === file && Math.abs(x.w - box.width) < 1 && !x.png);
    if (e) e.png = `${key}.png`;
  }
  return els;
}

// ---------- render + QA ----------
mkdirSync(OUT, { recursive: true });
const frames = [];
for (const p of pages.filter((q) => !ONLY || ONLY.some((o) => q.name.startsWith(o)))) {
  const ctx = await browser.newContext({ viewport: { width: p.w, height: p.h }, deviceScaleFactor: 1 });
  const pg = await ctx.newPage();
  const bg = p.transparent ? 'transparent' : p.bg;
  await pg.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}</style></head><body><div class="page" style="width:${p.w}px;height:${p.h}px;background:${bg}">${p.body}</div></body></html>`, { waitUntil: 'load' });
  await pg.evaluate(() => document.fonts.ready);
  await pg.evaluate(() => {
    for (const el of document.querySelectorAll('[data-anchor-cy]')) el.style.top = `${Number(el.dataset.anchorCy) - el.getBoundingClientRect().height / 2}px`;
    for (const el of document.querySelectorAll('[data-below]')) {
      const ref = document.querySelector(`[data-qa="${el.dataset.below}"]`).getBoundingClientRect();
      el.style.top = `${ref.bottom + Number(el.dataset.gap ?? 0)}px`;
    }
    // Full-photo slides: full-strength Ink behind the words, fading out 380 px beyond them; a lighter band for the handle.
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
    for (const el of document.querySelectorAll('[data-bzone]')) {
      const [zt, zb] = el.dataset.bzone.split(',').map(Number);
      const gap = Number(el.dataset.bgap);
      const sub = document.querySelector('[data-qa="subheadline"]');
      const H = el.getBoundingClientRect().height;
      const S = sub ? sub.getBoundingClientRect().height : 0;
      const total = H + (sub ? gap + S : 0);
      let top;
      if (el.dataset.bmode !== 'literal' && total <= zb - zt) { top = zt + (zb - zt - total) / 2; el.dataset.modeUsed = 'group centred in zone'; }
      else { top = zt + (zb - zt - H) / 2; el.dataset.modeUsed = 'headline centred in zone, subheadline below'; }
      el.style.top = `${top}px`;
      if (sub) sub.style.top = `${top + H + gap}px`;
    }
  });
  await pg.waitForTimeout(100);
  const boxes = await pg.evaluate(({ paper }) => {
    const rgb = (s) => (s.match(/[\d.]+/g) || []).map(Number);
    const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
    const bgOf = (el) => { for (let e = el; e; e = e.parentElement) { const c = rgb(getComputedStyle(e).backgroundColor); if (c.length >= 3 && (c.length < 4 || c[3] > 0)) return c.slice(0, 3); } return paper; };
    return [...document.querySelectorAll('[data-qa]')].map((el) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const text = el.innerText.replace(/\s+/g, ' ').trim();
      let lines = null, contrast = null;
      if (text) {
        const range = document.createRange(); range.selectNodeContents(el);
        lines = new Set([...range.getClientRects()].map((x) => Math.round(x.top))).size;
        const fg = rgb(cs.color).slice(0, 3), bg = bgOf(el);
        const [a, b] = [lum(fg), lum(bg)].sort((x, y) => y - x);
        contrast = Math.round(((a + 0.05) / (b + 0.05)) * 100) / 100;
      }
      return { qa: el.dataset.qa, text, copy: el.dataset.copy ?? null, mode: el.dataset.modeUsed ?? null, x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height), right: Math.round(r.right), bottom: Math.round(r.bottom), lines, maxLines: el.dataset.maxlines ? Number(el.dataset.maxlines) : null, fontSize: cs.fontSize, fontWeight: cs.fontWeight, fontFamily: cs.fontFamily, color: cs.color, contrast };
    });
  }, { paper: [245, 242, 234] });
  const fontsLoaded = await pg.evaluate(() => [...document.fonts].filter((f) => f.family === 'J' && f.status === 'loaded').map((f) => f.weight));
  const issues = [];
  const norm = (s) => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
  const visual = new Set(['phone', 'object', 'object-placeholder']);
  for (const b of boxes) {
    if (p.safe && !visual.has(b.qa) && b.qa !== 'blocked' && b.qa !== 'photo' && b.qa !== 'photo-full') { // photos bleed by design
      if (b.y < p.safe.top || b.bottom > p.safe.bottom || b.x < p.safe.left || b.right > p.safe.right) issues.push(`${b.qa} outside safe zone (${b.x},${b.y})-(${b.right},${b.bottom})`);
    }
    if (p.safe && visual.has(b.qa) && (b.y < p.safe.top || b.bottom > p.safe.bottom || b.x < p.safe.left || b.right > p.safe.right)) issues.push(`${b.qa} outside safe zone (${b.x},${b.y})-(${b.right},${b.bottom})`);
    if (b.maxLines && b.lines > b.maxLines) issues.push(`${b.qa} has ${b.lines} lines (max ${b.maxLines})`);
    if (b.text && b.qa !== 'object-placeholder' && !fontsLoaded.includes(b.fontWeight)) issues.push(`${b.qa} weight ${b.fontWeight} not loaded from assets/fonts`);
    if (p.crop45 && /headline|statement|cover/.test(b.qa) && (b.y < 45 || b.bottom > 1395)) issues.push(`${b.qa} outside centre 1080x1350 crop`);
    if (b.copy !== null && norm(b.text) !== b.copy) issues.push(`copy mismatch in ${b.qa}: "${b.text}" vs "${b.copy}"`);
    if (!p.transparent && b.contrast !== null) {
      const large = parseFloat(b.fontSize) >= 24;
      if (b.contrast < (large ? 3 : 4.5)) issues.push(`${b.qa} contrast ${b.contrast}:1`);
    }
  }
  // Pictures must not sit on text.
  const texts = boxes.filter((b) => b.text && !['demo-label', 'handle'].includes(b.qa) && !visual.has(b.qa) && b.qa !== 'checklist' && b.qa !== 'cover-headline');
  for (const v of boxes.filter((b) => visual.has(b.qa))) {
    for (const t of texts) if (v.x < t.right && t.x < v.right && v.y < t.bottom && t.y < v.bottom) issues.push(`${v.qa} overlaps ${t.qa} "${t.text.slice(0, 30)}"`);
  }
  // Look B: no text of any kind on the photo, the handle and "Demo family" included.
  for (const v of boxes.filter((b) => b.qa === 'photo')) {
    for (const t of boxes.filter((b) => b.text)) if (v.x < t.right && t.x < v.right && v.y < t.bottom && t.y < v.bottom) issues.push(`text on photo: ${t.qa} "${t.text.slice(0, 30)}"`);
  }
  // Text on a full photo: hide the text, screenshot what is behind it, and measure each line of text against
  // the lightest 5% of those pixels. Needs 4.5:1, stricter than WCAG's 3:1 for large text.
  let photoContrast = null;
  if (await pg.$('[data-qa="photo-full"]')) {
    await pg.evaluate(() => document.body.classList.add('qa-hide-text'));
    const behind = await pg.screenshot({ type: 'png' });
    await pg.evaluate(() => document.body.classList.remove('qa-hide-text'));
    photoContrast = await pg.evaluate(async (src) => {
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
          const x0 = Math.max(0, Math.floor(r.left)), y0 = Math.max(0, Math.floor(r.top)), w = Math.min(cv.width - x0, Math.ceil(r.width)), h = Math.min(cv.height - y0, Math.ceil(r.height));
          if (w < 1 || h < 1) continue;
          const d = cx.getImageData(x0, y0, w, h).data;
          for (let i = 0; i < d.length; i += 8) ls.push(lum(d[i], d[i + 1], d[i + 2]));
        }
        ls.sort((a, b) => a - b);
        const bg = ls[Math.floor(0.95 * (ls.length - 1))];
        const fg = (getComputedStyle(el).color.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
        const lf = lum(...fg);
        const ratio = (Math.max(lf, bg) + 0.05) / (Math.min(lf, bg) + 0.05);
        out.push({ qa: el.dataset.qa, text: el.innerText.trim().slice(0, 40), ratio: Math.round(ratio * 100) / 100, backgroundLuminanceP95: Math.round(bg * 1000) / 1000 });
      }
      return out;
    }, `data:image/png;base64,${behind.toString('base64')}`);
    for (const c of photoContrast) if (c.ratio < 4.5) issues.push(`${c.qa} on photo: ${c.ratio}:1 against the lightest 5% behind it (needs 4.5)`);
  }
  const file = join(OUT, `${p.name}.png`);
  mkdirSync(dirname(file), { recursive: true });
  await pg.screenshot({ path: file, omitBackground: p.transparent });
  if (SPEC) specs.push({ name: p.name, w: p.w, h: p.h, bg: p.transparent ? null : p.bg, elements: await collectSpec(pg, p) });
  frames.push({ file: `${relative(ROOT, OUT)}/${p.name}.png`, size: `${p.w}x${p.h}`, transparent: p.transparent, status: p.status, placeholders: boxes.filter((b) => b.qa === 'object-placeholder').length, fontsLoaded, issues, photoContrast, boxes });
  await ctx.close();
}
await browser.close();

// ---------- copy coverage: every on-creative string in the campaign is placed somewhere ----------
function onCreative() {
  const out = [];
  CAMPAIGN.split('\n').forEach((line, i) => {
    let seg = null;
    if (/^\d+\. \*\*Layout/.test(line)) seg = line.split(/\bImage:/)[0];
    else if (line.includes('On screen:')) seg = line.slice(line.indexOf('On screen:'));
    else if (/^\*\*Stories:\*\* (Idea|Question|Behind the scenes)\./.test(line)) seg = line.split(' underneath')[0];
    else if (/^- (Headline centred|Checklist)/.test(line)) seg = line;
    else if (line.includes('End card:')) seg = line.slice(line.indexOf('End card:'));
    if (seg) for (const m of seg.matchAll(/"([^"]+)"/g)) out.push({ line: i + 1, text: m[1] });
  });
  return out;
}
const usedList = [...used];
const covered = (s) => used.has(s) || usedList.some((a) => usedList.some((b) => `${a} ${b}` === s));
const LOCKUP = new Set(['Bonded']); // the end card name is the official lockup, never typeset
const uncovered = ONLY || PROPOSAL ? [] : onCreative().filter((o) => !covered(o.text) && !LOCKUP.has(o.text));

const summary = {
  renderedAt: new Date().toISOString(),
  campaignSha256: execSync(`sha256sum "${join(ROOT, 'campaign', 'weeks-01-02.md')}"`, { encoding: 'utf8' }).split(' ')[0],
  ...(PROPOSAL ? { proposal: PROPOSAL, proposalSha256: execSync(`sha256sum "${join(ROOT, PROPOSAL)}"`, { encoding: 'utf8' }).split(' ')[0] } : {}),
  frames: frames.length,
  feed: frames.filter((f) => f.size === '1080x1440').length,
  stories: frames.filter((f) => f.size === '1080x1920' && !f.transparent).length,
  videoOverlays: frames.filter((f) => f.transparent).length,
  framesWithIssues: frames.filter((f) => f.issues.length).length,
  framesWithPlaceholders: frames.filter((f) => f.placeholders).length,
  blocked: frames.filter((f) => f.status === 'BLOCKED').map((f) => f.file),
  fits: fits.length,
  copyStringsPlaced: used.size,
  campaignStringsNotPlaced: uncovered.length,
};
writeFileSync(join(OUT, 'qa.json'), JSON.stringify({ summary, fits, uncovered, frames }, null, 2));
if (SPEC) { mkdirSync(join(OUT, 'canva'), { recursive: true }); writeFileSync(join(OUT, 'canva', 'spec.json'), JSON.stringify(specs, null, 1)); console.log(`spec: ${specs.length} pages, ${specs.reduce((n, s) => n + s.elements.length, 0)} elements, ${phonePngs.size} phone PNGs`); }
for (const f of frames) console.log(`${f.issues.length ? 'FLAG' : 'OK  '} ${f.status === 'BLOCKED' ? 'BLOCKED ' : ''}${f.placeholders ? `[${f.placeholders} placeholder] ` : ''}${f.file} ${f.issues.join('; ')}`);
console.log(JSON.stringify(summary, null, 2));
if (fits.length) console.log('FITS', JSON.stringify(fits, null, 2));
if (uncovered.length) console.log('NOT PLACED', JSON.stringify(uncovered, null, 2));

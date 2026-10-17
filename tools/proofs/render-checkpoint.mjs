// Renders the FIRST creative checkpoint as exact-spec proofs, using the approved BONDED system
// (design/brand-reconciliation.md): Paper/Ink/Hearth/muted, Plus Jakarta Sans from assets/fonts,
// official logo files from assets/brand/svg, the campaign's canvas sizes, positions and safe zones.
//
// Why local proofs: the Canva MCP cannot set or verify font family, cannot export transparent PNGs
// on the current Free plan, and its AI credit quota ran out (see ops/mcp-audit.md). These proofs
// are what the owner approves; the Canva masters are then built to match them.
//
// It also measures every text box in the browser and writes qa.json: safe-zone violations, line
// counts, sizes. Usage: OBJECTS=/dir/with/day02_*_paper.png node tools/proofs/render-checkpoint.mjs
import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = join(ROOT, 'design', 'checkpoint-01');
const OBJ = process.env.OBJECTS ?? '';
const requireGlobal = createRequire(join(execSync('npm root -g', { encoding: 'utf8' }).trim(), 'noop.js'));
const { chromium } = requireGlobal('playwright');

const C = { paper: '#F5F2EA', ink: '#222D33', hearth: '#B94529', muted: '#646A6B', line: '#DEDCD4', surface: '#FFFEFA' };
const dataUri = (path, type) => `data:${type};base64,${readFileSync(path).toString('base64')}`;
const font = (w) => dataUri(join(ROOT, 'assets', 'fonts', `jakarta-${w}.ttf`), 'font/ttf');
const svg = (name) => readFileSync(join(ROOT, 'assets', 'brand', 'svg', `${name}.svg`), 'utf8').replace(/<title>.*?<\/title>/, '');
const img = (p) => (p && existsSync(p) ? dataUri(p, 'image/png') : null);
const screen = (p) => dataUri(join(ROOT, 'assets', 'screens', p), 'image/png');

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
.vid{text-wrap:balance}
.small{font-weight:400;font-size:28px;line-height:1.35}
.label{font-weight:600;font-size:28px;letter-spacing:0.08em;color:${C.muted}}
.handle{font-weight:600;font-size:26px;color:${C.muted}}
.pill{font-weight:600;font-size:28px;color:${C.paper};background:${C.muted};border-radius:999px;padding:12px 30px;line-height:1}
.ph{border:3px dashed ${C.muted};border-radius:24px;color:${C.muted};font-weight:600;font-size:24px;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;line-height:1.35}
.hearth{color:${C.hearth}}
`;

/** One page. `body` is HTML inside a .page of the given size. */
const page = (name, w, h, body, opts = {}) => ({ name, w, h, body, transparent: !!opts.transparent, bg: opts.bg ?? C.paper, safe: opts.safe, crop45: !!opts.crop45 });

// Safe zones (campaign "Sizes and safe zones")
const SAFE_FEED = { top: 180, bottom: 1440 - 180, left: 50, right: 1080 - 50 };
const SAFE_STORY = { top: 250, bottom: 1920 - 250, left: 0, right: 1080 };
const SAFE_REEL = { top: 250, bottom: 1920 - 350, left: 0, right: 1080 - 150 };

// Layout helpers (positions measured from the top of the canvas, as in the campaign)
const handle = () => `<div class="abs handle" data-qa="handle" style="top:200px;left:540px;transform:translateX(-50%);white-space:nowrap">@[handle]</div>`;
const objectBox = (src, label, box) => src
  ? `<img class="abs" data-qa="object" src="${src}" style="left:${box.left}px;top:${box.top}px;width:${box.w}px;height:${box.h}px;object-fit:contain;object-position:${box.pos ?? 'center bottom'}">`
  : `<div class="abs ph" data-qa="object-placeholder" style="left:${box.left}px;top:${box.top}px;width:${box.w}px;height:${box.h}px"><div>${label}</div></div>`;

/** Layout B: statement cover. Headline block centred between 300 and 860; sub 40px below; object 960-1220. */
function layoutB({ setup, payoff, setupSize = 120, payoffSize = 120, sub, object, objectLabel, handleOn = true }) {
  return `${handleOn ? handle() : ''}
  <div class="abs" data-qa="cover-block" style="left:50px;width:980px;top:300px;height:560px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center">
    <div data-qa="headline-setup" class="h400" style="font-size:${setupSize}px">${setup}</div>
    <div data-qa="headline-payoff" class="h800" style="font-size:${payoffSize}px">${payoff}</div>
    ${sub ? `<div data-qa="subheadline" class="sub" style="margin-top:40px">${sub}</div>` : ''}
  </div>
  ${object !== undefined ? objectBox(object, objectLabel, { left: 240, top: 960, w: 600, h: 260, pos: 'center center' }) : ''}`;
}
/** Layout C: content. Label at 200, headline from 260 (2 lines max), sub 32px below (3 lines max), object bottom right ~40% width. */
function layoutC({ label, headline, sub, object, objectLabel, headlineSize = 120 }) {
  return `${label ? `<div class="abs label" data-qa="label" style="top:200px;left:50px">${label}</div>` : ''}
  <div class="abs" style="top:260px;left:50px;width:980px">
    <div data-qa="headline" data-maxlines="2" class="h800" style="font-size:${headlineSize}px">${headline}</div>
    ${sub ? `<div data-qa="subheadline" data-maxlines="3" class="sub" style="margin-top:32px">${sub}</div>` : ''}
  </div>
  ${object !== undefined ? objectBox(object, objectLabel, { left: 1030 - 432, top: 1260 - 400, w: 432, h: 400, pos: 'right bottom' }) : ''}`;
}
/** Layout D: diagram centred between 620 and 1180. Numbered circles and thin arrows in Ink; one accent. */
function layoutD({ label, headline, steps, accent, headlineSize = 120 }) {
  const top = 620, bottom = 1180, n = steps.length, d = 120;
  const gap = (bottom - top - n * d) / (n - 1);
  let s = `${label ? `<div class="abs label" data-qa="label" style="top:200px;left:50px">${label}</div>` : ''}
  <div class="abs" style="top:260px;left:50px;width:980px"><div data-qa="headline" data-maxlines="2" class="h800" style="font-size:${headlineSize}px">${headline}</div></div>`;
  steps.forEach((t, i) => {
    const y = top + i * (d + gap);
    const on = i === accent;
    s += `<div class="abs" data-qa="node" style="left:190px;top:${y}px;width:${d}px;height:${d}px;border-radius:50%;border:4px solid ${on ? C.hearth : C.ink};background:${on ? C.hearth : 'transparent'};color:${on ? C.paper : C.ink};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:56px">${i + 1}</div>
      <div class="abs" data-qa="node-label" style="left:${190 + d + 40}px;top:${y}px;height:${d}px;display:flex;align-items:center;font-weight:600;font-size:48px;${on ? `color:${C.hearth}` : ''}">${t}</div>`;
    if (i < n - 1) {
      const ay = y + d + 14, ah = gap - 28, cx = 190 + d / 2;
      s += `<svg class="abs" style="left:${cx - 14}px;top:${ay}px" width="28" height="${ah}" viewBox="0 0 28 ${ah}"><line x1="14" y1="0" x2="14" y2="${ah - 6}" stroke="${C.ink}" stroke-width="3"/><path d="M4 ${ah - 14} L14 ${ah - 2} L24 ${ah - 14}" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }
  });
  return s;
}
/** Layout E: CTA. Headline centred at 560, sub 40px below, pill centred at 1200. */
function layoutE({ headline, sub, pill = 'Link in bio' }) {
  return `<div class="abs" style="left:50px;width:980px;top:0;height:1120px;display:flex;flex-direction:column;align-items:center;text-align:center">
    <div data-qa="headline" data-center-y="560" class="h800" style="font-size:120px;margin-top:${560 - 59}px">${headline}</div>
    <div data-qa="subheadline" class="sub" style="margin-top:40px">${sub}</div></div>
  <div class="abs" style="left:0;width:1080px;top:1200px;display:flex;justify-content:center"><div class="pill" data-qa="pill" style="transform:translateY(-50%)">${pill}</div></div>`;
}
/** Layout A: versus cover. */
function layoutA({ top, bottom }) {
  return `${handle()}
  <div class="abs" data-qa="top-statement" style="left:50px;width:980px;top:260px;height:380px;display:flex;align-items:center;justify-content:center;text-align:center"><div class="h800" style="font-size:120px">${top}</div></div>
  <div class="abs" style="left:50px;width:980px;top:719px;height:2px;background:${C.muted}"></div>
  <div class="abs pill" data-qa="pill" style="left:110px;top:720px;transform:translateY(-50%)">VS</div>
  <div class="abs pill" data-qa="pill" style="right:110px;top:720px;transform:translateY(-50%)">Swipe</div>
  <div class="abs" data-qa="bottom-statement" style="left:50px;width:980px;top:800px;height:380px;display:flex;align-items:center;justify-content:center;text-align:center"><div class="h800" style="font-size:120px">${bottom}</div></div>`;
}
const phone = (src, { left, top, w }) => {
  const h = Math.round(w * 2796 / 1290);
  return `<div class="abs" data-qa="phone" style="left:${left}px;top:${top}px;width:${w + 24}px;height:${h + 24}px;border-radius:58px;background:${C.ink};padding:12px"><img src="${src}" style="width:${w}px;height:${h}px;border-radius:46px;display:block"></div>
  <div class="abs small" data-qa="demo-label" style="left:0;width:1080px;top:${top + h + 24 + 14}px;text-align:center;font-size:24px;color:${C.muted}">Demo family</div>`;
};
const stickerGuide = (cy) => `<div class="abs guide" style="left:220px;width:640px;top:${cy - 100}px;height:200px;border:3px dashed ${C.line};border-radius:28px;display:flex;align-items:center;justify-content:center;color:${C.line};font-weight:600;font-size:26px">Native sticker added on-platform (guide only)</div>`;

const T = (s) => s.replace(/'/g, '’').replace(/(^|[\s(])’/g, '$1‘'); // typographic quotes

const objects = {
  trainers: img(join(OBJ, 'day02_trainers_paper.png')),
  bin: img(join(OBJ, 'day02_bin_paper.png')),
};
const PH = (what) => `PLACEHOLDER<br>${what} cutout<br><span style="font-weight:400">Not final. Canva AI credit quota reached on 9 Oct; generate when credits reset.</span>`;

const pages = [
  // ---- Templates A-E (1080x1440) ----
  page('templates/layout_A_versus', 1080, 1440, layoutA({ top: '[Top statement]', bottom: '[Bottom statement]' }), { safe: SAFE_FEED, crop45: true }),
  page('templates/layout_B_statement', 1080, 1440, layoutB({ setup: '[Setup line]', payoff: '[Payoff line]', sub: '[Subheadline, 44px]', object: null, objectLabel: 'Cutout object<br>centred between 960 and 1220px' }), { safe: SAFE_FEED, crop45: true }),
  page('templates/layout_C_content', 1080, 1440, layoutC({ label: '[01]', headline: '[Headline, two lines at most]', sub: '[Subheadline, 32px below, three lines at most]', object: null, objectLabel: 'Cutout object<br>bottom right, about 40% width' }), { safe: SAFE_FEED }),
  page('templates/layout_D_diagram', 1080, 1440, layoutD({ headline: '[Headline]', steps: ['[Step one]', '[Step two]', '[Step three]'], accent: 1 }), { safe: SAFE_FEED }),
  page('templates/layout_E_cta', 1080, 1440, layoutE({ headline: 'Join the waitlist.', sub: 'Bonded is coming to iPhone and Android.' }), { safe: SAFE_FEED }),

  // ---- Story templates (1080x1920) ----
  page('templates/story_idea', 1080, 1920, `<div class="abs h800" data-qa="headline" data-anchor-cy="860" style="left:90px;width:900px;text-align:center;font-size:96px">${T("Agree what 'done' means.")}</div>
      <div class="abs sub" data-qa="subheadline" data-below="headline" data-gap="36" style="left:90px;width:900px;text-align:center">${T("'Clothes in the basket, bed made, floor clear' is hard to argue with.")}</div>`, { safe: SAFE_STORY }),
  page('templates/story_question', 1080, 1920, `<div class="abs" style="left:90px;width:900px;top:420px;height:700px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center">
      <div data-qa="headline" class="h800" style="font-size:88px">If your kids could pick one job, which would they go for?</div>
      <div data-qa="subheadline" class="label" style="margin-top:40px;font-size:36px;letter-spacing:0.02em">Reply and tell us</div></div>${stickerGuide(1300)}`, { safe: SAFE_STORY }),
  page('templates/story_shareback', 1080, 1920, `<div class="abs label" data-qa="label" style="left:90px;top:300px">[Shared back, with permission]</div>
      <div class="abs h800" data-qa="headline" style="left:90px;width:900px;top:360px;font-size:72px">[The question we asked]</div>
      ${[0, 1, 2].map((i) => `<div class="abs" data-qa="reply" style="left:90px;width:900px;top:${640 + i * 300}px;height:260px;background:${C.surface};border:2px solid ${C.line};border-radius:32px;padding:44px;display:flex;flex-direction:column;justify-content:space-between"><div class="sub">[Genuine reply ${i + 1}, unedited]</div><div class="label" style="font-size:24px">[Anonymous, or name with permission]</div></div>`).join('')}`, { safe: SAFE_STORY }),
  page('templates/story_behind_the_scenes', 1080, 1920, `${phone(screen('light/20-emma-8-today-light.png'), { left: 378, top: 270, w: 300 })}
      <div class="abs" data-qa="headline" style="left:90px;width:900px;top:1010px;text-align:center;font-weight:600;font-size:48px;line-height:1.25;text-wrap:balance">${T("Each kid gets a list of what's theirs today.")}</div>${stickerGuide(1300)}`, { safe: SAFE_STORY }),

  // ---- Video text style + Day 11 end card (1080x1920) ----
  page('templates/video_text_headline_style', 1080, 1920, `<div class="abs" data-qa="headline" style="left:150px;width:780px;top:320px;text-align:center;text-wrap:balance;color:#fff;font-weight:600;font-size:72px;line-height:1.15;text-shadow:0 2px 12px rgba(0,0,0,.35)">Before anyone asked.</div>`, { transparent: true, safe: SAFE_REEL }),
  page('templates/video_text_subheadline_style', 1080, 1920, `<div class="abs" data-qa="subheadline" style="left:150px;width:780px;top:320px;text-align:center;text-wrap:balance;color:#fff;font-weight:600;font-size:62px;line-height:1.15;text-shadow:0 2px 12px rgba(0,0,0,.35)">${T("It doesn't need to be a speech.")}</div>`, { transparent: true, safe: SAFE_REEL }),
  page('day11/day11_endcard', 1080, 1920, `<div class="abs" style="inset:0;background:rgba(0,0,0,.40)"></div>
      <div class="abs" data-qa="lockup" style="left:${540 - 220}px;top:${860 - 37}px;width:440px;height:74.4px">${svg('bonded-lockup-horizontal-reversed').replace('<svg ', '<svg width="440" height="74.4" ')}</div>
      <div class="abs" data-qa="headline" style="left:150px;width:780px;top:${860 + 37 + 40}px;text-align:center;color:#fff;font-weight:800;font-size:110px;letter-spacing:-0.04em;line-height:1.0">Join the<br>waitlist</div>`, { transparent: true, safe: SAFE_REEL }),

  // ---- Day 2 carousel (1080x1440), locked copy ----
  page('day02/day02_carousel_s01', 1080, 1440, layoutB({ setup: 'Maybe the problem', payoff: T("isn't the chores."), sub: 'It might be that nobody agreed on them.', object: objects.trainers, objectLabel: PH("Kids' trainers") }), { safe: SAFE_FEED, crop45: true }),
  page('day02/day02_carousel_s02', 1080, 1440, layoutC({ label: '01', headline: 'Listen to where it starts.', sub: T("Not at the bins. At 'I didn't know it was my turn.'"), object: objects.bin, objectLabel: PH('Kitchen bin') }), { safe: SAFE_FEED }),
  page('day02/day02_carousel_s03', 1080, 1440, layoutC({ label: '02', headline: T("Make 'done' specific."), sub: T("'Tidy your room' means something different to everyone in the house. 'Clothes in the basket, bed made, floor clear' doesn't."), object: null, objectLabel: PH('Laundry basket') }), { safe: SAFE_FEED }),
  page('day02/day02_carousel_s04', 1080, 1440, layoutD({ headline: 'Agree three things.', steps: ['What needs doing', 'Whose it is', 'What done looks like'], accent: 1 }), { safe: SAFE_FEED }),
  page('day02/day02_carousel_s05', 1080, 1440, layoutC({ label: '04', headline: 'Do it once, before the week starts.', sub: T("Not at the sink on Tuesday, when everyone's tired and the dishwasher is already full."), object: null, objectLabel: PH('Full dishwasher basket') }), { safe: SAFE_FEED }),
  page('day02/day02_carousel_s06', 1080, 1440, layoutC({ label: '05', headline: 'Write it where everyone looks.', sub: T("The fridge, a whiteboard by the door, a shared app. Not one person's head."), object: null, objectLabel: PH('List held to a fridge by a magnet') }), { safe: SAFE_FEED }),
  page('day02/day02_carousel_s07', 1080, 1440, layoutC({ label: '06', headline: 'Check in at the end of the week.', sub: T("Five minutes: what worked, what didn't, what changes next week. The agreement should keep up with real life.") }), { safe: SAFE_FEED }),
];

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const qa = [];
for (const p of pages) {
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
  });
  await pg.waitForTimeout(150);
  const boxes = await pg.evaluate(() => [...document.querySelectorAll('[data-qa]')].map((el) => {
    const r = el.getBoundingClientRect();
    let lines = null;
    if (el.textContent.trim()) {
      const range = document.createRange(); range.selectNodeContents(el);
      lines = new Set([...range.getClientRects()].map((x) => Math.round(x.top))).size;
    }
    return { qa: el.dataset.qa, text: el.textContent.trim(), x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height), right: Math.round(r.right), bottom: Math.round(r.bottom), lines, maxLines: el.dataset.maxlines ? Number(el.dataset.maxlines) : null, centerY: el.dataset.centerY ? Number(el.dataset.centerY) : null, fontSize: getComputedStyle(el).fontSize, fontFamily: getComputedStyle(el).fontFamily, fontWeight: getComputedStyle(el).fontWeight };
  }));
  const fontsOk = await pg.evaluate(async () => { await document.fonts.ready; return [...document.fonts].filter((f) => f.family === 'J' && f.status === 'loaded').map((f) => f.weight); });
  const issues = [];
  for (const b of boxes) {
    if (p.safe && b.qa !== 'object-placeholder' && b.qa !== 'phone') {
      if (b.y < p.safe.top || b.bottom > p.safe.bottom || b.x < p.safe.left || b.right > p.safe.right) issues.push(`${b.qa} outside safe zone (${b.x},${b.y})-(${b.right},${b.bottom})`);
    }
    if (b.maxLines && b.lines > b.maxLines) issues.push(`${b.qa} has ${b.lines} lines (max ${b.maxLines})`);
    if (p.crop45 && /headline|statement|cover-block/.test(b.qa) && (b.y < 45 || b.bottom > 1395)) issues.push(`${b.qa} outside centre 1080x1350 crop`);
  }
  const file = join(OUT, `${p.name}.png`);
  mkdirSync(dirname(file), { recursive: true });
  await pg.screenshot({ path: file, omitBackground: p.transparent });
  qa.push({ file: `design/checkpoint-01/${p.name}.png`, size: `${p.w}x${p.h}`, transparent: p.transparent, fontsLoaded: fontsOk, issues, boxes });
  await ctx.close();
}
await browser.close();
writeFileSync(join(OUT, 'qa.json'), JSON.stringify(qa, null, 2));
for (const q of qa) console.log(`${q.issues.length ? 'FLAG' : 'OK  '} ${q.file} ${q.issues.join('; ')}`);

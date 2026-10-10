// Captures real BONDED screens from the web build of the app running against a LOCAL Supabase
// stack seeded by seed-millers.mjs. Every state is produced by real taps in the real app.
//
// Guard: the browser may only talk to 127.0.0.1/localhost. Every other request (including the
// production Supabase project baked into app.json as a fallback) is aborted and logged.
//
// Output: 1290x2796 PNGs (430x932 viewport at device scale 3, same as the supplied set), light
// and dark, named <nn>-<who>-<state>-<scheme>.png, plus capture-log.json.
//
// Usage (from the marketing repo):
//   APP_DIR=/path/to/app-copy SEED=/path/to/millers.json OUT=/path/to/out node tools/capture/capture.mjs
import { execSync, spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const APP_DIR = process.env.APP_DIR;
const SEED = JSON.parse(readFileSync(process.env.SEED, 'utf8'));
const OUT = process.env.OUT;
mkdirSync(OUT, { recursive: true });
const requireGlobal = createRequire(join(execSync('npm root -g', { encoding: 'utf8' }).trim(), 'noop.js'));
const { chromium } = requireGlobal('playwright');

const PORT = 8081;
const BASE = `http://127.0.0.1:${PORT}`;
const LOCAL = /^(https?|wss?):\/\/(127\.0\.0\.1|localhost)(:\d+)?\//;
const blocked = [];
const log = [];

const server = spawn('node', [join(APP_DIR, 'tests', 'e2e', 'serve.mjs'), String(PORT)], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 800));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });

async function context(scheme, storageState) {
  const ctx = await browser.newContext({
    viewport: { width: 430, height: 932 }, deviceScaleFactor: 3, colorScheme: scheme,
    timezoneId: SEED.timezone, locale: 'en-US', storageState, reducedMotion: 'reduce',
  });
  await ctx.route('**/*', (route) => {
    const url = route.request().url();
    if (LOCAL.test(url) || url.startsWith('data:') || url.startsWith('blob:')) return route.continue();
    blocked.push(url.slice(0, 120));
    return route.abort();
  });
  return ctx;
}
const sessions = {};
async function session(who) {
  if (sessions[who]) return sessions[who];
  const ctx = await context('light');
  const page = await ctx.newPage();
  await page.goto(`${BASE}/sign-in`);
  await page.getByPlaceholder('you@example.com').fill(SEED.accounts[who]);
  await page.getByPlaceholder('Your password').fill(SEED.password);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.waitForFunction(() => !location.pathname.startsWith('/sign-in'), null, { timeout: 30_000 });
  await page.waitForTimeout(3000);
  sessions[who] = { ctx, page };
  return sessions[who];
}
let seq = 60;
/** Screenshots the current route for `who` in light and dark, from a fresh page load each. */
async function shot(who, path, state, note, prepare) {
  seq += 1;
  const { ctx } = await session(who);
  const storage = await ctx.storageState();
  for (const scheme of ['light', 'dark']) {
    const c = await context(scheme, storage);
    const page = await c.newPage();
    await page.goto(`${BASE}${path}`);
    await page.waitForTimeout(3500);
    if (prepare) await prepare(page);
    await page.waitForTimeout(800);
    const file = `${String(seq).padStart(2, '0')}-${who.toLowerCase()}-${state}-${scheme}.png`;
    await page.screenshot({ path: join(OUT, file) });
    log.push({ file, who, path, state, scheme, note });
    await c.close();
  }
}
const A = SEED.assignments;
// The "I did this without a reminder" label is plain text; the control is the switch beside it.
async function withoutReminder(page) {
  const sw = page.getByRole('switch').first();
  await sw.click();
  if (!(await sw.isChecked())) throw new Error('"Without a reminder" switch did not turn on');
}

// 1. Emma (8) before: two things on her list, "Water the plants" to do.
await shot('Emma', '/child/today', 'today-before', 'Emma has two things today; Water the plants not done yet');
// 2. Emma opens "Water the plants": the real task screen with the "without a reminder" toggle.
await shot('Emma', `/responsibility/${A.emma_plants}`, 'water-plants-task', 'Task screen before ticking off', async (page) => {
  await withoutReminder(page);
});
// Emma ticks it off, for real, with "without a reminder".
{
  const { page } = await session('Emma');
  await page.goto(`${BASE}/responsibility/${A.emma_plants}`);
  await page.waitForTimeout(3000);
  await withoutReminder(page);
  await page.getByRole('button', { name: /Done!/ }).first().click();
  await page.waitForTimeout(3000);
}
await shot('Emma', '/child/today', 'today-after', 'Ticked off: waiting for a parent to check');
// 3. Parent home: the recognition queue, then the review with a typed note (Day 11 wording).
await shot('Mom', '/parent/home', 'home-recognition', 'A little recognition: Emma, Noah, Sofia ready');
await shot('Mom', '/parent/home', 'review-note', 'Review queue with a typed thank-you note', async (page) => {
  await page.getByRole('button', { name: /Review \d+ completion/ }).click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('What did you notice?').fill('saw you did the plants before school. thanks');
  await page.getByText('Water the plants').first().scrollIntoViewIfNeeded();
});
// Mom approves Emma's job with that note, for real.
{
  const { page } = await session('Mom');
  await page.goto(`${BASE}/parent/home`);
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: /Review \d+ completion/ }).click();
  await page.waitForTimeout(800);
  await page.getByPlaceholder('What did you notice?').fill('saw you did the plants before school. thanks');
  const card = page.locator('text=Water the plants').first();
  await card.scrollIntoViewIfNeeded();
  // The Approve button in the same card as "Water the plants".
  const approve = page.getByRole('button', { name: 'Approve', exact: true });
  const n = await approve.count();
  for (let i = 0; i < n; i++) {
    const b = approve.nth(i);
    const box = await b.boundingBox();
    const tbox = await card.boundingBox();
    if (box && tbox && box.y > tbox.y && box.y - tbox.y < 260) { await b.click(); break; }
  }
  await page.waitForTimeout(3000);
}
// 4. Emma sees the note.
await shot('Emma', '/child/today', 'noticed', 'Mom noticed card with the note', async (page) => {
  await page.getByText('Mom noticed').first().scrollIntoViewIfNeeded();
});
// 5. Family experience progress after Emma's job (family points counted at tick-off).
await shot('Mom', '/parent/family', 'family-climbing', 'Climbing wall trip progress on the Family tab');
await shot('Mom', '/parent/rewards', 'rewards', 'Rewards with experiences');
// 6. Leo (13) asks for another day for trash night (Day 12 slide 4, US copy).
const LEO_NOTE = 'Practice test tomorrow. Trash on Thursday?';
await shot('Leo', '/child/today', 'today', 'Leo has three things today');
{
  const { page } = await session('Leo');
  await page.goto(`${BASE}/responsibility/${A.leo_trash}`);
  await page.waitForTimeout(3000);
  await page.getByText('Reschedule', { exact: true }).click();
  await page.getByPlaceholder('Add a note (optional)').fill(LEO_NOTE);
}
await shot('Leo', `/responsibility/${A.leo_trash}`, 'reschedule-draft', 'Leo choosing Reschedule with a note (before sending)', async (page) => {
  await page.getByText('Reschedule', { exact: true }).click();
  await page.getByPlaceholder('Add a note (optional)').fill(LEO_NOTE);
});
{
  const { page } = await session('Leo');
  await page.getByRole('button', { name: /Send to my parents/ }).click();
  await page.waitForTimeout(3000);
}
await shot('Leo', `/responsibility/${A.leo_trash}`, 'reschedule-sent', 'Request sent, waiting for a reply');
await shot('Mom', '/parent/home', 'change-of-plan', 'A change of plan: Leo asked for another day');
await shot('Mom', `/responsibility/${A.leo_trash}`, 'request-detail', 'Parent view of the request with replies');
// 7. Parent Tasks > Upcoming.
await shot('Mom', '/parent/responsibilities', 'upcoming', 'Responsibilities, Upcoming tab', async (page) => {
  await page.getByText('Upcoming', { exact: true }).click();
});

writeFileSync(join(OUT, 'capture-log.json'), JSON.stringify({ capturedAt: new Date().toISOString(), currency: SEED.currency, timezone: SEED.timezone, blockedRequests: blocked, shots: log }, null, 2));
await browser.close();
server.kill();
console.log(`captured ${log.length} files; blocked ${blocked.length} non-local requests`);

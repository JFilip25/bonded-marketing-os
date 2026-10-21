#!/usr/bin/env node
// Reel posting slots (D-2026-10-21-2): a reel about every 1.34 days for the first
// six, then one a day. Times look random but come from a fixed seed, so the same
// inputs always give the same slots.
//
//   node tools/schedule/reel-slots.mjs --start 2026-10-24 --count 20 [--seed bonded_prelaunch_2026]
//
// Times fall between 15:00 and 21:00 Europe/Podgorica, never on :00 or :30, and
// never within 60 minutes of the 18:00 carousel.

const TZ = 'Europe/Podgorica';
const WINDOW = [15 * 60, 21 * 60];        // minutes after local midnight
const CAROUSEL = 18 * 60;
const CAROUSEL_GAP = 60;
const PHASE1 = 6;                         // reels on round(k * 1.34) day offsets
const STEP = 1.34;

const args = Object.fromEntries(
  process.argv.slice(2).reduce((pairs, arg, i, all) => (arg.startsWith('--') ? [...pairs, [arg.slice(2), all[i + 1]]] : pairs), []),
);
const start = args.start;
const count = Number(args.count ?? 20);
const seed = args.seed ?? 'bonded_prelaunch_2026';
if (!/^\d{4}-\d{2}-\d{2}$/.test(start ?? '')) {
  console.error('usage: reel-slots.mjs --start YYYY-MM-DD [--count N] [--seed TEXT]');
  process.exit(1);
}

// Small seeded generator (cyrb53 hash into mulberry32).
function hash(text) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (const ch of text) {
    const c = ch.codePointAt(0);
    h1 = Math.imul(h1 ^ c, 2654435761);
    h2 = Math.imul(h2 ^ c, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  return h1 >>> 0;
}
function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(hash(seed));

function dayOffset(n) {
  return n < PHASE1 ? Math.round(n * STEP) : Math.round((PHASE1 - 1) * STEP) + (n - PHASE1 + 1);
}

function pickMinute() {
  for (;;) {
    const m = WINDOW[0] + Math.floor(rand() * (WINDOW[1] - WINDOW[0]));
    if (m % 30 === 0) continue;
    if (Math.abs(m - CAROUSEL) < CAROUSEL_GAP) continue;
    return m;
  }
}

// UTC offset of TZ at a given UTC instant, in minutes.
function offsetMinutes(utcMs) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
      .formatToParts(new Date(utcMs)).map((p) => [p.type, p.value]),
  );
  const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute);
  return Math.round((asUtc - utcMs) / 60000);
}

const pad = (n) => String(n).padStart(2, '0');
const [y, mo, d] = start.split('-').map(Number);
const slots = [];
for (let n = 0; n < count; n++) {
  const minute = pickMinute();
  const localMidnightGuess = Date.UTC(y, mo - 1, d + dayOffset(n));
  const date = new Date(localMidnightGuess).toISOString().slice(0, 10);
  const naiveUtc = localMidnightGuess + minute * 60000;
  const off = offsetMinutes(naiveUtc - 60 * 60000);
  const utc = naiveUtc - off * 60000;
  const sign = off >= 0 ? '+' : '-';
  const dueAt = `${date}T${pad(Math.floor(minute / 60))}:${pad(minute % 60)}:00${sign}${pad(Math.floor(Math.abs(off) / 60))}:${pad(Math.abs(off) % 60)}`;
  slots.push({ reel: n + 1, date, local: dueAt.slice(11, 16), dueAt, utc: new Date(utc).toISOString().replace('.000', '') });
}
console.log(JSON.stringify({ seed, start, timezone: TZ, slots }, null, 2));

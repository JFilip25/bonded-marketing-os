// Seeds the Millers demo family on a LOCAL Supabase stack, using the app's own server ops
// (the `ciccho_action` RPC), so every state captured afterwards is a real app state.
//
// Local only: refuses any URL that is not 127.0.0.1/localhost. Never point this at production.
// Run from an exported copy of JFilip25/ciccho-Claude (branch claude/bonded-family-ai), after
// `npx supabase@2.118.0 start` there:
//   APP_DIR=/path/to/app-copy LOCAL_ANON_KEY=... LOCAL_SERVICE_KEY=... CURRENCY=USD \
//     node tools/capture/seed-millers.mjs > /path/to/millers.json
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';

const APP_DIR = process.env.APP_DIR;
if (!APP_DIR) throw new Error('Set APP_DIR to the exported app copy (it provides @supabase/supabase-js).');
const require = createRequire(join(APP_DIR, 'package.json'));
const { createClient } = require('@supabase/supabase-js');

const API = process.env.LOCAL_API_URL ?? 'http://127.0.0.1:54321';
if (!/^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(API)) throw new Error(`Refusing non-local target: ${API}`);
const ANON = process.env.LOCAL_ANON_KEY;
const SERVICE = process.env.LOCAL_SERVICE_KEY;
if (!ANON || !SERVICE) throw new Error('Set LOCAL_ANON_KEY and LOCAL_SERVICE_KEY from `supabase status` (local stack keys).');
const CURRENCY = process.env.CURRENCY ?? 'USD';
const TZ = process.env.FAMILY_TZ ?? 'America/New_York';

const opts = { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } };
const admin = createClient(API, SERVICE, opts);
// A random password per run, for accounts that only ever exist in the throwaway local database.
const PASSWORD = process.env.LOCAL_PASSWORD ?? `Local-${randomUUID()}`;
// Email sign-up stores the 18+ attestation in user metadata (see tests/e2e/flows.mjs).
const ADULT = { adult_attested_at: new Date().toISOString(), policy_version: 'local-capture' };

async function user(label, metadata) {
  const email = `${label}.millers@capture.local`;
  const { error } = await admin.auth.admin.createUser({ email, password: PASSWORD, email_confirm: true, user_metadata: metadata });
  if (error) throw new Error(`${label}: ${error.message}`);
  const client = createClient(API, ANON, opts);
  const { error: e2 } = await client.auth.signInWithPassword({ email, password: PASSWORD });
  if (e2) throw new Error(`${label} sign-in: ${e2.message}`);
  return { client, email };
}
async function act(client, op, p = {}) {
  const { data, error } = await client.rpc('ciccho_action', { op, p });
  if (error) throw new Error(`${op}: ${error.message}`);
  return data;
}
const day = (offset = 0) => {
  const d = new Date(new Date().toLocaleString('en-US', { timeZone: TZ }));
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};
const dob = (years, days = 0) => {
  const d = new Date(new Date().toLocaleString('en-US', { timeZone: TZ }));
  d.setFullYear(d.getFullYear() - years);
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
};

const out = { currency: CURRENCY, timezone: TZ, accounts: {}, members: {}, tasks: {}, experiences: {} };

// Mom creates the family.
const mom = await user('mom', ADULT);
const fam = await act(mom.client, 'create_family', { family_name: 'The Miller Family', name: 'Mom', currency: CURRENCY, timezone: TZ, reward_style: 'mixed', adult_attestation: 'true', policy_version: 'local-capture' });
out.familyId = fam.id;
out.accounts.Mom = mom.email;

// Everyone else joins with their own login, the way a real family does.
const people = [
  ['Dad', 'parent', null],
  ['Mia', 'child', dob(5, 60)],
  ['Emma', 'child', dob(8, 40)],
  ['Noah', 'child', dob(11, 80)],
  ['Leo', 'child', dob(13, 100)],
  ['Sofia', 'child', dob(17, 30)],
];
const clients = { Mom: mom.client };
for (const [name, role, birth] of people) {
  const m = await act(mom.client, 'member', { name, role, dob: birth ?? undefined, consent: role === 'child' ? 'true' : undefined, policy_version: 'local-capture' });
  const u = await user(name.toLowerCase(), role === 'parent' ? ADULT : undefined);
  await act(u.client, 'join', { code: m.code });
  out.members[name] = m.id;
  out.accounts[name] = u.email;
  clients[name] = u.client;
}
const { data: me } = await mom.client.from('members').select('id,name').eq('name', 'Mom').single();
out.members.Mom = me.id;

// Icons are names from the app's own picker (src/domain/icon-match.ts), as a parent would choose them.
// The family experience the week works toward, created before any family points are earned.
// Only family points earned after it exists count toward it (src/domain/derive.ts).
const climb = await act(mom.client, 'experience', {
  title: 'Climbing wall trip', description: 'Saturday morning at the climbing wall.', icon: 'backpack', size: 'medium',
  required_xp: 200, unlock_date: day(8), waiting_days: 0,
});
out.experiences.climbing = climb.id;

const task = async (key, p) => { const r = await act(mom.client, 'task', { minutes: 10, recurrence: 'none', due_date: day(0), ...p }); out.tasks[key] = r.id; return r.id; };
const M = out.members;

// Emma (8): exactly two things today (Day 12 slide 3), one of them Day 11's "Water the plants".
await task('emma_plants', { title: 'Water the plants', icon: 'sprout', category: 'Garden', members: [M.Emma], family_xp: 20, requires_approval: true, minutes: 5 });
await task('emma_laundry', { title: 'Put laundry away', icon: 'shirt', category: 'Laundry', members: [M.Emma], family_xp: 10, requires_approval: false, minutes: 15 });
// Leo (13): exactly three things today, including bin night (Day 12 slide 4).
await task('leo_bins', { title: 'Take bins out', icon: 'bins', category: 'Outdoor', kind: 'bonus', members: [M.Leo], money: 200, requires_approval: true, recurrence: 'weekly' });
await task('leo_bathroom', { title: 'Clean bathroom', icon: 'sparkles', category: 'Cleaning', members: [M.Leo], xp: 15, requires_approval: true, minutes: 25 });
await task('leo_desk', { title: 'Tidy your desk', icon: 'pencil', category: 'Cleaning', members: [M.Leo], xp: 10, requires_approval: false });
// Others, so the family looks like the supplied set.
await task('mia_toys', { title: 'Toys in the basket', icon: 'home', category: 'Cleaning', members: [M.Mia], family_xp: 10, requires_approval: false, minutes: 5 });
await task('noah_dog', { title: 'Walk the dog', icon: 'dog', category: 'Pets', members: [M.Noah], money: 150, family_xp: 40, requires_approval: true, minutes: 20 });
await task('sofia_groceries', { title: 'Pick up the groceries', icon: 'cart', category: 'Kitchen', members: [M.Sofia], money: 300, family_xp: 50, requires_approval: true, minutes: 30 });
await task('dad_groceries', { title: 'Plan the week\'s meals', icon: 'utensils', category: 'Kitchen', members: [M.Dad], requires_approval: false, minutes: 20 });
// Upcoming one-off jobs later in the week (parent Tasks > Upcoming).
await task('noah_recycling_tue', { title: 'Sort the recycling', icon: 'bins', category: 'Outdoor', members: [M.Noah], family_xp: 10, requires_approval: false, due_date: day(4) });
await task('emma_table_thu', { title: 'Set the table', icon: 'utensils', category: 'Kitchen', members: [M.Emma], family_xp: 10, requires_approval: false, due_date: day(6) });

// Progress before Day 11's moment: Noah and Sofia finished their family jobs (90 / 200).
async function assignment(responsibilityId, memberId) {
  const { data, error } = await mom.client.from('assignments').select('id').eq('responsibility_id', responsibilityId).eq('member_id', memberId).single();
  if (error) throw new Error(error.message);
  return data.id;
}
await act(clients.Noah, 'complete', { id: await assignment(out.tasks.noah_dog, M.Noah), independently: true });
await act(clients.Sofia, 'complete', { id: await assignment(out.tasks.sofia_groceries, M.Sofia), independently: false });

out.assignments = {
  emma_plants: await assignment(out.tasks.emma_plants, M.Emma),
  leo_bins: await assignment(out.tasks.leo_bins, M.Leo),
};
out.password = PASSWORD;
console.log(JSON.stringify(out, null, 2));

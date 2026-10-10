# Marketing tools (local only)

Neither tool touches production, publishes anything, or changes the app repository.

## `capture/`: real app screens from a local stack
- **What it does:** runs the real BONDED app code (an exported copy of `JFilip25/ciccho-Claude` at a pinned commit) against a **local** Supabase stack. It seeds the Millers demo family through the app's own server operation (`ciccho_action`), performs real taps in the web build, and captures 1290×2796 PNGs in light and dark.
- **Guards:**
  - `seed-millers.mjs` refuses any non-localhost API URL.
  - `capture.mjs` aborts every browser request that isn't localhost and logs it. The production project URL is baked into `app.json` as a fallback, and is blocked.
  - The 9 Oct and 10 Oct runs each logged **0 blocked requests**.
- **Steps:**
  1. `git -C <app repo> archive <commit> | tar -x -C <scratch>/app` (no worktree, no commits).
  2. `npm ci`, then `npx supabase@2.118.0 start -x realtime,storage-api,imgproxy,studio,edge-runtime,logflare,vector,supavisor,postgres-meta`.
  3. Web build against the local stack: `EXPO_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321 EXPO_PUBLIC_SUPABASE_ANON_KEY=<local anon key> npx expo export --platform web`.
  4. `APP_DIR=... LOCAL_ANON_KEY=... LOCAL_SERVICE_KEY=... CURRENCY=USD node tools/capture/seed-millers.mjs > millers.json`. The keys are the standard **local** Supabase dev keys from `supabase status`, never production keys.
  5. `APP_DIR=... SEED=millers.json OUT=<dir> node tools/capture/capture.mjs`.
- **Accounts:** the seed accounts (`*.millers@capture.local`) and their password exist only in the throwaway local database.

## `proofs/`: exact-spec creative proofs
`render-checkpoint.mjs` renders the first creative checkpoint with:
- the real Plus Jakarta Sans files (`assets/fonts`)
- the official logo SVGs (`assets/brand/svg`)
- the campaign's pixel positions

It then measures every text box in Chromium and writes `design/checkpoint-01/qa.json`, covering safe zones, line limits, fonts and the 4:5 crop. Transparent PNGs are used for the video overlays and the end card.

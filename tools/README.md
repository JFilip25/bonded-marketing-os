# Marketing tools (local only)

None of these tools touches production, publishes anything, or changes the app repository.

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

`render-campaign.mjs` renders the full Day 0 and Days 1–14 set into `design/production/` (feed, Stories, transparent video text) with the same approved layouts. It adds three safeguards:
- **Copy guard.** Every on-creative string must appear word for word in `campaign/weeks-01-02.md`, or the render stops. QA also lists any art string in the campaign that was never placed.
- **Fit rule.** A headline or subheadline that can't meet its line limit at the brief's size is set at the largest size that fits. Every case is logged in `qa.json` under `fits` for approval.
- **QA.** Safe zones, line limits, the 4:5 cover crop, WCAG contrast, loaded font weights, and pictures overlapping text.

Objects come from `assets/objects/`, or `OBJECTS=<dir>`. App screens are the light captures in `assets/screens/captured/light/`. `render-checkpoint.mjs` stays unchanged as the record of the G1 checkpoint.

**Options for review renders** (none of them changes the default output):
- `HANDLE=@name` sets the handle, which is `@[handle]` by default.
- `ONLY=day00/day00_carousel,...` renders only the pages whose names start with one of those prefixes.
- `OUT_DIR=<dir>` writes there instead of `design/production/`.
- `PHOTOS=<dir>` builds the Day 0 carousel in **Look B**, a photo-led example that is **not approved**:
  - The owner's `d00_c01`–`d00_c06` photos go in a band at the top of each slide.
  - QA adds a check that no text sits on a photo.
  - `PHOTO_ORDER=1,5,3,2,4,6` changes which photo goes on which slide.
  - Photos are read from outside the repository and are never committed.

`SPEC=1` also writes `design/production/canva/spec.json`: every page's text boxes, pictures and SVG shapes, as measured in the browser. It also writes the phone-framed screens at 3× (`design/production/canva/phone_*.png`).

## `canva/`: Canva masters from the proofs
`build-ops.py` turns `spec.json` into operations for the Canva connector's `edit-design` tool. It doesn't call Canva itself; the operations are applied in an interactive session.
- `designs` lists the masters and their pages.
- `elements <master> '<page ids JSON>'` returns the operations that add the text boxes, pictures (by media ID from `media.json`) and shapes.
- `format <master> <file>` returns the `format_text` operations. The file is the `design_content` JSON from `read-design`, or a compact list of `[locator_id, text]` per page. Text is matched to the spec by its words.

See `design/production/canva/README.md` for the masters and the owner's font step.

`objects/blend-to-paper.py` blends each generated object onto exact Paper (see `assets/objects/README.md`).

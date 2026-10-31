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
- `HANDLE=@name` sets the handle, which is `@[handle]` by default (this G2 script only; `render-v2.mjs` defaults to `@bondedspace`).
- `ONLY=day02/day02_carousel,...` renders only the pages whose names start with one of those prefixes.
- `OUT_DIR=<dir>` writes there instead of `design/production/`.

**Since Amendments 2 and 3:**
- Day 0 and Days 1–14 follow messaging v2 and are rendered by `render-v2.mjs` (below).
- This script no longer matches the campaign and stops with a message. It stays as the record of the G2 proofs: check out commit `23e30b4` to reproduce them (78 frames, pixel-identical to `design/production/`).

`SPEC=1` also writes `design/production/canva/spec.json`: every page's text boxes, pictures and SVG shapes, as measured in the browser. It also writes the phone-framed screens at 3× (`design/production/canva/phone_*.png`).

## `proofs/render-v2.mjs`: messaging v2 carousels

Renders the posts defined in `proofs/v2-posts.mjs`: the problem, the feeling, what to do, then Bonded and the waitlist (D-2026-10-15-1 to -8).

**The slides:**
- **Photo slides.** The photo fills the 1080×1440 frame. An Ink gradient, sized to the text, sits behind Paper type, and there is no Hearth on photos.
- **Video slides.** A clip of the owner's video gets the same gradient and type, and is encoded as an MP4 with no audio, for Instagram and Facebook carousels. Its PNG, a frame from the middle of the clip, is the TikTok still.
- **The plain waitlist slide.** The official lockup, the ask, and a large real app screen with no "Demo family" caption (D-2026-10-15-3).

**The checks:**
- **Copy guard:** every string must appear word for word in the post's `source`. That's the campaign file once a post is approved, and `proposals/messaging-v2.md` before that.
- **Safe zones, line limits and the 4:5 crop of slide 1.**
- **Contrast on photos:** text on a photo is measured against the real pixels behind it. The lightest 5% must give at least 4.5:1. For a video, the worst of 6 frames across the clip counts.
- **Photo mix:** a post fails if under 80% of its slides are photos or video, if more than 2 are plain, or if it has fewer than 5 or more than 7 slides (D-2026-10-15-4).

**Usage:**
```
PHOTOS=<prepped stills> MEDIA=<original videos> OUT_DIR=<dir outside the repo> [HANDLE=@bondedspace] [ONLY=0,1] [POSTS=<posts file>] node tools/proofs/render-v2.mjs
```
`OUT_DIR` must be outside the repository: the renders contain the owner's photos, which are never committed.

For new posts, start from the skill `.claude/skills/bonded-social-media-posts/`: `templates/posts-entry.mjs` is a posts file for `POSTS=`, `scripts/reading_grade.py` checks the plain-word rule, and `scripts/media_check.py` screens new photos and clips for rights markers.

## `proofs/render-reel.mjs`: standalone Reels (D-2026-10-21-1)

Renders vertical 1080×1920 Reels from cleared clips:
- The clips are cropped to fill the frame and played back to back.
- Each beat's words appear in Paper on an Ink band for their part of the reel.
- A 3-second plain waitlist end card follows, with the official lockup.
- The video is H.264 at 30 fps with a silent AAC track, because some platforms expect audio.

**The checks:**
- the copy guard, as in `render-v2.mjs`
- the Reel safe zones (250 px top, 350 px bottom, 150 px right, 60 px left)
- the line limits
- a total length of 15 to 25 s with the end card
- contrast on the real pixels behind each beat: worst of 3 frames, at least 4.5:1

**Usage:**
```
MEDIA=<cleared clips> OUT_DIR=<dir outside the repo> REELS=<reels file> [ONLY=r01,r02] node tools/proofs/render-reel.mjs
```
The reels file follows `.claude/skills/bonded-social-media-posts/templates/reels-entry.mjs`. Output goes to `<OUT_DIR>/reels/rNN.mp4`, a cover frame `rNN_cover.png`, and `<OUT_DIR>/reels-qa.json`.

## `schedule/reel-slots.mjs`: Reel posting times (D-2026-10-21-2)

```
node tools/schedule/reel-slots.mjs --start YYYY-MM-DD [--count 20] [--seed bonded_prelaunch_2026]
```
- The first six Reels go out on day offsets round(k × 1.34), which is days 0, 1, 3, 4, 5 and 7. After that, one a day.
- Times are seeded and look random. They fall between 15:00 and 21:00 Europe/Podgorica, never on :00 or :30, and never within an hour of the 18:00 carousel.
- The same seed and start date always give the same times.
- The slots go into `ops/schedule.json`, the one calendar that Buffer (carousels) and Publer (Reels) are both checked against.

## `canva/`: Canva masters from the proofs
`build-ops.py` turns `spec.json` into operations for the Canva connector's `edit-design` tool. It doesn't call Canva itself; the operations are applied in an interactive session.
- `designs` lists the masters and their pages.
- `elements <master> '<page ids JSON>'` returns the operations that add the text boxes, pictures (by media ID from `media.json`) and shapes.
- `format <master> <file>` returns the `format_text` operations. The file is the `design_content` JSON from `read-design`, or a compact list of `[locator_id, text]` per page. Text is matched to the spec by its words.

See `design/production/canva/README.md` for the masters and the owner's font step.

`objects/blend-to-paper.py` blends each generated object onto exact Paper (see `assets/objects/README.md`).

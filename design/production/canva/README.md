# Canva masters: Day 0 and Days 1–14

**Status (10 Oct 2026):** BUILT, AWAITING THE FONT STEP.
- All 11 masters (89 pages) are in the Canva folder [BONDED · Weeks 1–2](https://www.canva.com/folder/FAHXlnLC_sA).
- Every position, size, colour, picture and shape comes from the measured proofs in `design/production/`.
- The text is still in Canva's default font. The Canva connector cannot set a font family, a 600 weight, letter spacing or a text shadow (see `ops/mcp-audit.md`), so the owner sets these by hand (step 1 below).
- Nothing has been exported, scheduled or published from these designs.

## The masters

| Master | Pages | Design ID | Open in Canva |
|---|---|---|---|
| Day 0 · What Bonded is, and why we're building it | 6 | `DAHXltEuaSg` | [edit](https://www.canva.com/d/47DQOaeZf82mQn5) |
| Day 2 · Maybe the problem isn't the chores | 7 | `DAHXlqaCwOc` | [edit](https://www.canva.com/d/ZZxYgPVHg1bKZ0l) |
| Day 3 · Apparently, I'm the family calendar | 1 | `DAHXlkij-38` | [edit](https://www.canva.com/d/kKDV8B8tTgmGweI) |
| Day 5 · What kids can actually handle, age by age | 8 | `DAHXlsILoIc` | [edit](https://www.canva.com/d/B2FmmVEpWQrrmsG) |
| Day 7 · Does everyone know what's happening this week? | 1 | `DAHXlkdLNus` | [edit](https://www.canva.com/d/B0B4ByUfnmgVoqd) |
| Day 8 · How to split jobs between siblings | 7 | `DAHXluVD140` | [edit](https://www.canva.com/d/fVKI4yBElo_oo3I) |
| Day 10 · Should allowance be linked to chores? | 7 | `DAHXlhRgI4k` | [edit](https://www.canva.com/d/frZUQKQBpFipsW0) |
| Day 12 · One week with a shared family plan | 8 | `DAHXlmqEeLM` | [edit](https://www.canva.com/d/cvWYEJiapZJyFWi) |
| Day 14 · What has your family been meaning to do for ages? | 1 | `DAHXlof6qT8` | [edit](https://www.canva.com/d/BQp_ekVIC2eH5cu) |
| Stories · Weeks 1–2 (About highlight, all daily Stories) | 20 | `DAHXloP2IJ4` | [edit](https://www.canva.com/d/fIgaQvY2mMg131v) |
| Video text and end card · Weeks 1–2 | 23 | `DAHXlpBjjk8` | [edit](https://www.canva.com/d/_tli1le11dY5BOE) |

**Page order** is the same as the proof files. `masters.json` lists every page by file name, with the view links. Pages in the Stories and video masters are titled with their proof file name.

**Pictures in the masters:**
- the 24 cutout objects from `assets/objects/`
- the light USD app screens, each in its Ink phone frame, rendered at 3× from the proof (`phone_*.png` here)
- the official reversed lockup on the Day 11 end card

The media IDs are in `media.json`.

**Video pages** sit on a mid-grey editor ground (`#5F676C`) so the white text is visible while editing. A transparent PNG export drops it (tested on 10 Oct). The end card's 40% black scrim is a shape, so it stays.

## Step 1 for the owner: set Plus Jakarta Sans

Canva shows every text box as either "bold" or "normal". Apply the font by the rules below. Letter spacing is Canva's "Spacing → Letter spacing" value. All other settings (size, colour, alignment, line height) are already correct; please don't change them.

**Feed and Story masters (Paper pages):**

| What you see in Canva | Set to | Letter spacing |
|---|---|---|
| Bold, 60 px or larger (headlines, cover payoffs, "About", "Join the waitlist.") | Plus Jakarta Sans **ExtraBold** | **−40** |
| Bold numbers inside circles (Day 2 slide 4, Day 5 slide 7) | ExtraBold | 0 |
| Bold grey labels over headlines ("What it is", "4 to 6", "01", "Sunday" and so on), "[Shared back, with permission]", "[Anonymous, or name with permission]" | **SemiBold** | **+80** |
| "Reply and tell us" (question Stories) | SemiBold | +20 |
| Every other bold box (handle, "Link in bio", diagram labels, day names under the Day 12 bar, "Climbing wall" badge, "BLOCKED" notes, the Day 5 and Day 11 Story lines) | SemiBold | 0 |
| Normal, 88 px or larger (the first line of each cover headline) | **Regular** | **−20** |
| Every other normal box (body text, "Demo family", reply placeholders, checklist) | Regular | 0 |

**Video master (grey pages):**

| What | Set to | Letter spacing | Effect |
|---|---|---|---|
| Every on-screen line and the "Demo family" label | SemiBold | 0 | Effects → Shadow: black, blur about 12, offset 2 straight down, transparency about 65% (the proofs use `0 2px 12px rgba(0,0,0,.35)`) |
| End card "Join the waitlist" | ExtraBold | −40 | none |

**Tip:** In each master, use the Brand Kit's Plus Jakarta Sans text styles if they're set up, then adjust the weight and spacing per the table.

When this is done, reply in the session ("fonts done"). Line breaks in the default font differ from Jakarta at −40, so some headlines currently run onto an extra line and overlap the text under them. That is expected until the font is set.

## Step 2 (Claude, after the font step)

1. Re-read every master.
   - Check that every text box uses the Jakarta font ref.
   - Compare each box's line count with the proof (`spec.json`, `lines`).
   - Fix any box that differs, by position or size only. The wording never changes.
2. Export every page as PNG at full size:
   - feed 1080×1440, Story 1080×1920
   - the video master with a transparent background
3. Compare each export with its proof PNG: text positions within ±4 px and identical line breaks. Anything over tolerance is fixed in Canva and re-exported.
4. Put the exports in `design/production/` next to the proofs, update the tracker, and report.

## Cleanup for the owner

There's no delete tool in the Canva connector, so please delete these two working designs by hand:
- `DAHXlb7RTko` "ZZ WORKING object exports (safe to delete)": the object and export test pages
- `DAHXlqQsPJk`: a stray copy from a failed `copy-design` call

## How the masters were built

The build is reproducible, but every Canva call goes through the connector in a session; nothing runs unattended.

1. `SPEC=1 node tools/proofs/render-campaign.mjs` renders the proofs and writes `spec.json`. That's every page with its text boxes, pictures and shapes, measured in Chromium.
2. `python3 tools/canva/build-ops.py elements <master> '<page ids>'` turns a master's pages into `edit-design` operations: `add_text`, `insert_fill`, `insert_shape`. Straight stroked lines become thin filled bars, because Canva doesn't draw a straight stroked path.
3. After those operations are applied, `read-design` returns the new text element IDs.
4. `python3 tools/canva/build-ops.py format <master> <design_content.json>` matches them to the spec by their words and returns the `format_text` operations: size, colour, weight, alignment and line height.
5. Thumbnails are checked against the proofs, the transaction is committed, and the design is moved to the folder.

# First creative checkpoint (gate G1): for owner review

**Status:** AWAITING APPROVAL. Nothing beyond this checkpoint has been produced, scheduled or published.

**Built:** 9 Oct 2026, following `design/designer-production-brief.md` Step 1 and the approved visual system in `design/brand-reconciliation.md`:
- Paper `#F5F2EA`, Ink `#222D33`, Hearth `#B94529`, muted `#646A6B`
- Plus Jakarta Sans 400/600/800
- official logo files only

## Why these are exact-spec proofs and not Canva designs yet

The Canva capability spike (`ops/mcp-audit.md`) found that the Canva connector on the current **Canva Free** account:
- **cannot set or verify the font family.** Canva's AI used mixed fonts, and the "Plus Jakarta Sans" it chose is visibly a different typeface.
- **cannot export transparent PNGs**, which the video overlays need
- **ran out of AI image credits** after 4 images, and the background remover is paid-only

The plan said to stop at this point and give you the options rather than build off-brand Canva files. So this checkpoint is delivered as **exact proofs**, rendered from the real font files and the real logo SVGs at the campaign's pixel positions, and measured automatically.

Once you approve the look, the Canva masters are rebuilt to match. See "Canva route" below.

**Reproduce:** `OBJECTS=<dir> node tools/proofs/render-checkpoint.mjs`. The measurements are in `qa.json`.

## Files

| File | Size | Spec |
|---|---|---|
| `templates/layout_A_versus.png` | 1080×1440 | Handle at 200; statements centred 260–640 and 800–1180; rule at 720; "VS" pill 110 from the left and "Swipe" pill 110 from the right |
| `templates/layout_B_statement.png` | 1080×1440 | Handle at 200; headline centred 300–860; subheadline 40 below; object 960–1220 |
| `templates/layout_C_content.png` | 1080×1440 | Label at 200; headline from 260 (two lines at most); subheadline 32 below (three lines at most); object bottom right at about 40% width |
| `templates/layout_D_diagram.png` | 1080×1440 | Headline from 260; diagram 620–1180 with numbered circles and thin arrows in Ink, one Hearth accent |
| `templates/layout_E_cta.png` | 1080×1440 | Headline centred at 560; subheadline 40 below; "Link in bio" pill centred at 1200 |
| `templates/story_idea.png` | 1080×1920 | Jakarta 800 96 px centred at 860, one line below (sample: Day 2 Story) |
| `templates/story_question.png` | 1080×1920 | Question plus "Reply and tell us"; sticker guide centred at 1300 (sample: Day 1 Story) |
| `templates/story_shareback.png` | 1080×1920 | Reply cards with placeholders only: genuine replies with permission |
| `templates/story_behind_the_scenes.png` | 1080×1920 | Real screen 20 (Emma, light) in a plain phone frame, labelled "Demo family"; link-sticker guide at 1300 (sample: Day 5 Story) |
| `templates/video_text_headline_style.png` | 1080×1920, **transparent** | Jakarta 600 72 px, white, soft shadow, centred in the 150–930 px column from 320 px |
| `templates/video_text_subheadline_style.png` | 1080×1920, **transparent** | Jakarta 600 62 px, same treatment |
| `day11/day11_endcard.png` | 1080×1920, **transparent** | 40% dim (frame at 60%); official reversed lockup, 440 px wide, centred at 860; "Join the / waitlist" in Jakarta 800 110 px |
| `day02/day02_carousel_s01.png` … `s07.png` | 1080×1440 | The locked Day 2 copy, set word for word |
| `contact-feed.jpg`, `contact-tall.jpg` | n/a | Review sheets (the transparent files are shown on a grey checkerboard) |

## Automated QA (`qa.json`)

| Check | Result |
|---|---|
| Fonts | Plus Jakarta Sans loaded from `assets/fonts` on every page; no fallback fonts |
| Sizes | 1080×1440 feed and 1080×1920 Story/Reel, exactly |
| Safe zones | **0 violations**: feed 180/180/50, Story 250/250, Reel 250 top / 350 bottom / 150 right. Handles and pills included. |
| Line limits | Layout C headlines are **2 lines at most** at 120 px (the −0.04 em tracking works); subheadlines are 3 lines at most |
| Covers | Inside the centre 1080×1350 crop |
| Contrast | Ink on Paper 12.59:1; Hearth on Paper 4.76:1; Paper on muted 4.92:1 |
| Copy | Day 2 matches `campaign/weeks-01-02.md` lines 272–278 word for word. The only change is typographic apostrophes and quotes (’ ‘ ’ instead of ' and "). |

## Design choices that need your approval

The campaign leaves these open.

1. **Day 2 cover type split.** Setup "Maybe the problem" in Jakarta 400 at 120 px (it wraps to two lines). Payoff "isn’t the chores." in Jakarta 800 at 120 px.
2. **Layout D diagram.** A vertical stack of numbered circles joined by downward arrows. The accent is a filled Hearth circle with a Hearth label on "Whose it is". The circles never pair up into anything resembling the BONDED mark.
3. **Labels and pills.** Jakarta 600 at 28 px in muted. Labels have +0.08 em tracking, like the app's labels.
4. **Story Question and Share-back sizes**, which the campaign doesn't give. Question in Jakarta 800 at 88 px, placed higher to clear the sticker. "Reply and tell us" in 600 at 36 px.
5. **Story Behind the scenes.** A plain Ink phone frame around the unaltered screenshot. Caption in Jakarta 600 at 48 px.
6. **End card.** "Join the waitlist" breaks into two lines at 110 px. On one line it is 826 px wide and would enter the right 150 px button zone.
7. **Balanced line breaks** to avoid single-word last lines. The wording is unchanged.
8. **Optional:** a small official lockup on covers (D9). Not applied; the handle is shown as specified.

## Open blockers (placeholders, not finished assets)
- **Day 2 slides 3, 5 and 6 objects** (laundry basket, full dishwasher basket, list held to a fridge by a magnet). Canva AI credit quota reached; generate them when credits reset or the plan allows.
- **Slides 1–2 objects:** Canva AI images `MAHXjI1iFJ4` (trainers) and `MAHXjEcPcBw` (bin), blended onto exact Paper.
- **`@[handle]`** until the handles are claimed (D10).
- **US localization (D3).** Day 2 is set in the locked UK wording ("bins", "Tidy your room"). If D3 option B is approved, two text lines change; the layout doesn't.
- **The Day 2 caption CTA** ("Comment WAITLIST") needs ManyChat and a waitlist link before posting (D7, D6).

## Canva route (choose one)

| Option | What it takes | Result |
|---|---|---|
| **A. Canva Pro for the BONDED workspace** (recommended) | Upgrade, then set up a Brand Kit once in the UI: Plus Jakarta Sans, the colours and the logos | Transparent PNG export, background remover and AI credits. I rebuild the masters through MCP to match these proofs; you set or confirm the font once per master, and I re-run QA. |
| **B. Stay on Free** | I build the masters through MCP (exact positions, colours, logo, images). You open each master once and set all text to Plus Jakarta Sans (select all, change font: about 1 minute per design). | Editable Canva masters. Video overlays stay as the local transparent PNGs in this folder. |
| **C. Proofs as the production source** | The local renderer produces the final static PNGs. Canva is used only for hand edits. | Fastest and exact, but it departs from "Canva for design production" |

**Please reply with:** approve, or the changes you want to the visual system, plus your choice of A, B or C.

# Production proofs: Day 0 and Days 1–14 (for gate G2)

**Status:** PROOFS FOR REVIEW. Every cutout object is in place (10 Oct, Phase 2). They are not the finished assets yet:
- 3 Story frames are BLOCKED.
- The handle is still `@[handle]`.
- Nothing has been scheduled or published.

**What these are:**
- Every on-creative item in the amended campaign (`campaign/weeks-01-02.md`, Amendment 1), rendered in the system approved at G1 (D-2026-10-10-1).
- Fonts: the real Plus Jakarta Sans files.
- Logo: the official lockup SVG, on the end card only.
- App images: the light USD captures (D-2026-10-10-5).
- Positions and safe zones: the campaign's own.
- The Canva Pro masters (Phase 2) are built to match these files, then checked against them.

**Rebuild:** `node tools/proofs/render-campaign.mjs`, plus `CHROMIUM_PATH=...` if needed. The proofs are rebuilt from the repo alone.

## What's here

| | Count | Files |
|---|---|---|
| Feed frames, 1080×1440 | 46 | `dayNN/dayNN_carousel_sNN.png`, `dayNN/dayNN_single.png` |
| Stories, 1080×1920 | 20 | One per day as each brief names. Day 6 has two Share-backs. Plus `day00_highlight_cover.png` and `day00_highlight_s02`–`s05` (Day 0 slides 2–5 for the "About" highlight). |
| Video text, transparent 1080×1920 | 23 | `dayNN_video_XXs-YYs.png` for every on-screen line of Days 1, 4, 6, 9, 11 and 13, plus `day11_endcard.png` and `day11_video_demo-family-label.png` |
| Review sheets | 4 | `contact-feed.jpg`, `contact-stories.jpg`, `contact-video.jpg` (overlays shown on grey), `grid-preview.jpg` (the 4:5 profile grid, with the video covers marked as still to be filmed) |
| QA | 1 | `qa.json`: every text box measured in the browser |

## Automated QA (`qa.json`)

| Check | Result |
|---|---|
| Safe zones (feed 180/50, Story 250, Reel 250/350/150), line limits, the 4:5 cover crop | 0 issues in 89 frames |
| Copy | 182 strings placed. Each is word for word in the amended campaign, or the render stops. 0 art strings in the campaign are left unplaced. |
| Contrast (WCAG, against the real background) | 0 below 4.5:1, or below 3:1 for text of 24 px and up |
| Fonts | Every text box uses a Jakarta weight loaded from `assets/fonts` |
| Pictures over text | 0 overlaps |
| Campaign SHA-256 at render | `18d3160f…a46214`, which is Amendment 1 |

## Needs your approval at G2

### 1. Type sizes fitted to the line limits (18 cases)

**Why:** Plus Jakarta Sans is wider than the Playfair Display the briefs were sized for, so some headlines can't keep both the brief's size and its line limit. The wording never changes; only the size does.

**Rules used:**
- **Content headline:** the largest size that fits in 2 lines, down to 88 px. Below that, 3 lines.
- **Subheadline:** the largest size that fits in 3 lines.
- **Cover headline:** the setup and payoff shrink together until the group fits its zone and clears the object.

| Frame | What | Brief | Used |
|---|---|---|---|
| day00 s01 | Cover: "What Bonded is," / "and why we're building it." | 140 / 150 px | 129 / 138 px (92%) |
| day00 s02 | "One shared plan for the whole family." | 120 px, 2 lines | 110 px |
| day00 s03 | "Families with kids from about 4 to 18." | 120 px, 2 lines | 114 px |
| day00 s04 | "The week shouldn't live in one person's head." | 120 px, 2 lines | 92 px |
| day00 s05 | "Points unlock extras the family agrees on." | 120 px, 2 lines | 104 px |
| day00 s05 | Subheadline (three sentences) | 44 px, 3 lines | 38 px |
| day03 single | Cover: "Apparently," / "I'm the family calendar." | 130 / 150 px | 107 / 123 px (82%) |
| day05 s01 | Cover: "What kids can actually handle," / "age by age." | 130 / 170 px | 125 / 163 px (96%) |
| day07 single | Cover: "Does everyone know" / "what's happening this week?" | 120 / 130 px | 103 / 112 px (86%) |
| day08 s01 | Cover: "How to split jobs between siblings" / "without a court case." | 120 / 160 px | 89 / 118 px (74%) |
| day08 s03 | "Rotate the unpopular jobs between kids who can do them." | 120 px, 2 lines | 102 px, **3 lines** (2 lines would need under 88 px) |
| day08 s06 | "Leave comparisons out of it." | 120 px, 2 lines | 110 px |
| day10 s02 + s03 | "Money follows effort." / "Some jobs just come with living here." | Same size on both (brief: mirror) | 104 px on both |
| day12 s02 | "The week goes in, plus one extra to aim for." | 120 px, 2 lines | 96 px |
| day12 s02 | Subheadline | 44 px, 3 lines | 42 px |
| day14 single | Cover: "What has your family" / "been meaning to do for ages?" | 130 / 140 px | 104 / 112 px (80%) |

**The alternative:** keep the brief's sizes and allow more lines. On the phone slides, that pushes the text into the phone.

### 2. Design details the briefs leave open

All of these use the approved tokens, and each uses one accent at most.

| Frame | Choice |
|---|---|
| `day00_highlight_cover` | The word "About" in Jakarta 800 on Paper. **No logo:** the logo rules allow the mark only on the end card and the avatar. |
| Phones, Layout C (Day 0 s2, Day 12 s2–s5) | A plain Ink frame, bottom right, the same size and position on every slide (top at 744 px, 231×472 px). "Demo family" in 24 px under it. |
| Phones, covers (Day 0 s1, Day 12 s1) | The phone is the cover object, kept to the 960–1220 px object zone like every other cover. That makes it small on purpose. |
| `day07_single` | The checklist has a small Ink outline box before each line. |
| `day08_carousel_s04` | "Oldest" and "Middle" are joined by two curved Hearth arrows labelled "Trash" and "Recycling" (the accent). "Youngest" stands beside them, with "Set the table" underneath. |
| `day10_carousel_s04` | Two boxes. The accent is a Hearth border and title on "Extra jobs: paid". The examples are kept exactly as written, in lowercase ("making beds, clearing plates"). |
| `day12_carousel_s07` | Five Ink segments labelled Monday to Friday, all filled. They end in a Hearth circle, "Climbing wall", with an open padlock for "unlocked". |
| Video text | Lines too long for the 780 px column break into two balanced lines (for example "Keep it, swap / it, or add one."). |
| `day11_video_demo-family-label` | "Demo family" in white, 32 px, with the video text shadow, centred at 1500 px. It goes over every app shot. |

### 3. Known limits

| Area | Limit |
|---|---|
| **The date on app screens** | Screens 61, 64 and 65 show "Saturday, October 10", the capture date. They appear on Day 0 s1, Day 5 Story, Day 12 s1 and s3, and in the Day 11 video and Story. Day 12 s3 is labelled "Monday". A weekday recapture is a re-run of `tools/capture/` (see `design/screenshots-manifest.md`). |
| **Day 12 s5 and s7, "the same bar in the same position"** | On s5 the bar is part of a real app screen inside the phone, so a drawn bar on s7 can't sit in the same place. s7 carries the full bar as a diagram. |
| **Day 12 s2 image** | The brief names the Upcoming list and the climbing wall trip. The app shows these on different screens, so s2 shows Upcoming (74), and the trip appears on s1 and s5. |
| **No stickers in the PNGs** | Behind-the-scenes Stories (Days 5 and 11) leave room for the waitlist link sticker, centred at 1300 px. Question Stories carry "Reply and tell us" as text. Adding a poll or question sticker is your call (the campaign's "Decisions for you"). |

## Blockers before these become final assets

**1. Cutout objects: done.** All 24 objects are Canva AI images, blended onto exact Paper. Files and provenance are in `assets/objects/`. On Day 5 each one grows a little from slide to slide (60% to 100% of the object box). Writing on calendars, lists and tags is illegible scribble by design.

**2. Share-back Stories (BLOCKED).** Day 6 f1/f2 and Day 12 f1 show reply placeholders. They need genuine replies to the Day 1, Day 4 and Day 10 questions, shared anonymously or with permission. They are never to be invented.

**3. Handles.** Every handle reads `@[handle]` until the handles are claimed (D10).

**4. Videos.** Real footage and written consents are needed for Days 1, 4, 6, 9, 11 and 13. These PNGs are only the text that goes over that footage.

**5. Captions.** Three captions are still proposed for US wording (decision D12). They don't affect the art.

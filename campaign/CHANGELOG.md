# Campaign changelog: `campaign/weeks-01-02.md`

The campaign file stays locked. It changes only through owner-approved amendments, each listed here line by line.

## Amendment 3 (15 Oct 2026): Days 1 to 14 on the arc, rights confirmed, Day 0 slide 2 photo

| | |
|---|---|
| Approved by | The owner, in an interactive session on 15 Oct 2026 ("ok all creatives are clear and ready to go, do not use watermarked images"), after reviewing every post as rendered slides and captions on the Weeks 1–2 review page. The owner then chose the replacement photo for Day 0 slide 2. |
| Decisions | D-2026-10-15-9 (Days 1–14 approved), D-2026-10-15-10 (rights confirmed for every photo and clip; no watermarked images), D-2026-10-15-11 (Day 0 slide 2 uses `d01_c01`). The drafts followed D-2026-10-15-1 to -8. |
| SHA-256 before | `49b42d8055e2d7168f94b28e58bc4fa7479ca83333f6ac272d4c735e81ea3dc2` |
| SHA-256 after | `29bb75084bc272e79dc238860e0efe0e1aa0d066167f9f34b2c1e195abebf560` |
| Lines changed | Days 1–14: old l.226–881 (656 lines) replaced by new l.228–1036 (809 lines). Day 0: 3 lines. Follow-ons: 16 lines, listed below. The file grows from 919 to 1074 lines. Everything else is byte-identical. |
| Source | `proposals/messaging-v2.md`, Days 1–14 (commit `0c9a293`, with Day 5 slide 2 as re-rendered), word for word: every slide's words, the Placement line, and all three captions. Each day's **Stories** line is kept word for word from the old brief. |

**What changed in Days 1 to 14:**
- **Format:** every day is now a 5 to 7 slide carousel on the arc, with photo slides, moving slides from the owner's clips (Instagram and Facebook; a still on TikTok) and the plain waitlist slide last. The six Reels and three single images are gone (D-2026-10-15-7).
- **Each day's brief** now has the Day 0 shape: Placement, Headline and Subheadline (slide 1), Slides (media file, crop position and words per slide), the three captions, Product integration and Visual direction (the same lines as Day 0), Before posting, CTA, Stories. The old Concept, Audience value, Script and Image notes are gone; the slides carry the idea.
- **Titles:** five changed with the new posts: Day 1 "Let each kid pick their job", Day 3 "The family calendar", Day 5 "What kids can do, age by age", Day 8 "Splitting jobs between siblings", Day 12 "Plan the week, and one fun thing". The other nine are unchanged.
- **Captions:** all new. Every Instagram caption ends "Comment WAITLIST and we'll send you the link." and two hashtags; every Facebook caption ends "The waitlist is here: [link]"; every TikTok caption ends "Waitlist link in bio." with `#parentsoftiktok`.
- **Before posting:** records the rights confirmation (D-2026-10-15-10) and lists the AI slides that need the platform's AI label.
- **Day 12** keeps its pin note (Instagram and TikTok, next to the introduction).

**Day 0 (3 lines):**

| Old l. | New l. | Change | Decision |
|---|---|---|---|
| 172 | 174 | Slides note: the photos are `d00_c01`, `d01_c01` and `d00_c03` to `d00_c06` | D-2026-10-15-11 |
| 175 | 177 | Slide 2: Photo `d00_c02` becomes Photo `d01_c01`. The words are unchanged. | D-2026-10-15-11 |
| 218 | 220 | Before posting: the slide 3 rights question is replaced by the owner's confirmation; slides 1, 2, 4, 5 and 6 still need the AI label | D-2026-10-15-10 |

**Follow-ons (brief notes only, no published copy).** They keep the rest of the file consistent with D-2026-10-15-1, -2, -4, -7 and -9:

| Old l. | New l. | Place | Now |
|---|---|---|---|
| 9 | 9 | Campaign overview, goal | "Bonded appears in some posts, not all" becomes "Every post ends with Bonded and the waitlist, and everything before it has to be worth reading on its own." |
| 39 | 39 | Funnel stage | "Most posts give parents something useful with no product in them. Bonded shows up where it genuinely helps." becomes "Every post gives parents something useful first. Bonded comes once, at the end, with the waitlist." |
| 51–53 | 51 | Voice, how Bonded shows up | The 8 / 4 / 2 mix becomes one line: every post runs the arc, no feature talk. |
| (new) | 73 | Slide style | Lead note: weeks 1 and 2 feed posts use the messaging v2 look; the section stays for reference. |
| (new) | 106 | Raw video style | Lead note: no raw videos in weeks 1 and 2 since Amendment 3; the section stays for later weeks. |
| 120 | 122 | CTA, waitlist | "only on posts that mention or show Bonded" becomes "on every post"; Facebook "Join the waitlist: [link]" becomes "The waitlist is here: [link]", as in the approved captions. |
| 122 | 124 | CTA, no CTA | "This is most posts" becomes "not used in weeks 1 and 2". |
| 135 | 137 | Two-week calendar | "Six raw videos, five carousels and three single images" becomes "Fourteen carousels ... Six of them include moving slides (9 in all)". |
| 139–152 | 141–154 | Two-week calendar rows | Format (carousel, slide count, moving slides), the approved titles, and "Waitlist slide" in the Bonded column. |
| 905 | 1060 | Before Day 1 | "Families lined up for the six videos" becomes "[x] Rights and consent confirmed for every photo and clip (D-2026-10-15-10)". |
| 906 | 1061 | Before Day 1 | "Slide templates built for Layouts A to E" becomes "[x] All 15 posts rendered as messaging v2 carousels and approved". |
| 907 | 1062 | Before Day 1 | "App screens shown on Days 11 and 12 checked" becomes "[x] The app screen on the waitlist slide checked in the current build (capture 67)". |
| 918 | 1073 | Before Day 1, risks | "Film all six videos and design all eight graphic posts before Day 1." becomes "All 15 posts are made before Day 1." |

**Unchanged:** posting dates (18 October to 1 November), the order of the posts, the Stories line of every day, Day 0's words, the pinned introduction, success metrics, the other "Before Day 1" items, and the voice, sizes and claims rules. The provisional fonts and palette named in "Slide style" stay as written (D-2026-10-09-1 overrides them in production).

**Verified:** every slide string and every caption of Days 1–14 is in the campaign word for word (the renderer's copy guard now reads the campaign file); the Stories lines before and after are identical; no em dashes or emoji.

**Production impact:**
- **Superseded:** the Days 1–14 feed proofs (carousels, single images and video text overlays) in `design/production/day01/` to `day14/`, their Canva masters, and the old Day 0 slide 2 (`d00_c02`). The Story proofs there (`dayNN_story_*.png`) still match their unchanged Stories lines. `tools/proofs/render-campaign.mjs` no longer matches the campaign; it reproduces the G2 proofs only from commit `23e30b4`.
- **Current renders:** all 15 posts by `tools/proofs/render-v2.mjs` (`tools/proofs/v2-posts.mjs`, source: the campaign file), from the owner's files, outside the repository.
- **D12 superseded:** the three Day 4 and Day 10 caption lines in `proposals/us-localization-addendum.md` no longer exist.

## Amendment 2 (15 Oct 2026): Day 0 rewritten (messaging v2)

| | |
|---|---|
| Approved by | The owner, in an interactive session on 15 Oct 2026 ("approved"), after reviewing the third draft as rendered slides and captions |
| Decisions | D-2026-10-15-6 (Day 0 approved). The draft followed D-2026-10-15-1 to -5: the arc, ending on the waitlist, the waitlist-slide phone, the photo share, and plain words. |
| SHA-256 before | `18d3160f194a0f835c9e929681b5b182a8d0c021535868cbdbc76a7a57a46214` |
| SHA-256 after | `49b42d8055e2d7168f94b28e58bc4fa7479ca83333f6ac272d4c735e81ea3dc2` |
| Lines changed | The Day 0 section only: old l.160–210 (51 lines) replaced by new l.160–223 (64 lines). Everything before l.160 and from "## Week 1" on is byte-identical. |
| Source | `proposals/messaging-v2.md`, Day 0 section (third draft), word for word. |

**What changed in Day 0:**
- **Title:** "What Bonded is, and why we're building it" became "Why Bonded exists".
- **Slides:** the 6 slides (Layouts B, C and E, with feature wording) became 7 slides on the arc: 6 photo slides and 1 plain waitlist slide.
- **Captions:** all three platform captions are new. Instagram still ends "Comment WAITLIST and we'll send you the link." Facebook still ends on "[link]".
- **Concept, audience value, headline, subheadline, product integration, visual direction and CTA:** rewritten to match.

**Follow-ons, not in the proposal text:**
- **"Before posting" line:** added. It records the slide 3 rights question and the AI labels from the proposal's Photos note.
- **"Stories" line:** the "About" highlight now uses slides 1 to 6 (it was slides 2 to 5 of the old version). The highlight covers haven't been rendered yet.

**Unchanged:** posting date (Sun 18 Oct), placement on all three platforms, pinning, hashtags, and every other day. Days 1 to 14 change only with Amendment 3, after the owner approves them.

**Production impact:**
- **Old proofs:** the Day 0 proofs in `design/production/day00/` and the Canva master `DAHXltEuaSg` show the old Day 0 and are superseded.
- **New render:** the new Day 0 is rendered by `tools/proofs/render-v2.mjs` from the owner's photos, outside the repository.

## Amendment 1 (10 Oct 2026): claim amendments and the US-English master

| | |
|---|---|
| Approved by | The owner, in an interactive session on 10 Oct 2026 |
| Decisions | D-2026-10-10-3 (claim amendments, D4): every item in `proposals/claim-amendments.md` as drafted, including the optional C6.1. D-2026-10-10-4 (US-English master, D3 option B): every line in `proposals/us-localization.md` as drafted. D-2026-10-10-5 (light screens with USD, D1 and D2) sets the Day 0 s2 image. |
| SHA-256 before | `b140a8452e01595e04ac21a3e0cbfa80ca8856f19fca824a67f0b69f28fac5fe` |
| SHA-256 after | `18d3160f194a0f835c9e929681b5b182a8d0c021535868cbdbc76a7a57a46214` |
| Lines changed | 67 lines, 80 replacements: 22 on-creative (ART), 21 caption (CAP), 1 video (VID), 36 brief notes (NOTE) |
| Unchanged | Posting order, dates, formats, layouts, sizes, CTAs, voice. No line was added or removed. |

**Where the two approved sets meet on one line**, the claim wording comes first and the US wording is applied on top:
- l.745: C1.6 drafted "Bins on Tuesday"; with the US master it reads "Trash on Tuesday". "agrees an optional extra" becomes "agrees on an optional extra".
- l.757 and l.771: C2.4 plus "agrees on one optional extra".

**Follow-ons.** Rows marked "follow-on" are not in either proposal's table. They keep the file consistent with an approved line: a schedule title that repeats a post title, an image note naming the same object, or an internal brief line using a word the master replaced. None of them is published copy (all are NOTE).

**Corrections to the proposals' line references:**
- C2.6 cited l.736. The phrase "approved jobs add points toward it" is on l.734; l.736 holds "agree one optional extra together" (a US follow-on).
- C1.9 offered "the shared weekly plan of responsibilities". On l.203 and l.779 that would read "...plan of responsibilities, responsibilities per child", so those two internal lines use "the shared weekly plan". l.525 uses the full phrase as drafted.

**C1.7 and the screens.** Day 12 s2 names "the Upcoming responsibilities and the 'Climbing wall trip' experience". In the build these are two screens: Upcoming (captured 74) and the experience card (64 Home, 67 Family). Slide 2 uses 74. The experience is on slides 1 (64) and 5 (67). See `design/screenshots-manifest.md`.

**Left as written, on purpose:**
- Day 3 "Apparently, I'm the family calendar" and the Day 7 checklist ("Who's driving"). They are editorial and make no product claim (C1 note).
- l.779 "check three things in the current build ... points are added when a parent approves a job". It is the campaign's own instruction to verify. The check was done; the result is C2.
- l.284 "You can agree who's doing it". The US proposal marks it as fine.
- UK spellings in brief notes only ("behaviour" l.57, "colour" l.82, "favourite" l.676, "honour" l.900). Not published.
- l.901 "First market ... spelling (allowance or pocket money)". It is the campaign's own open question, now answered by D-2026-10-09-6 and D-2026-10-10-4.
- The provisional palette and fonts named inside the briefs (Playfair, Poppins, grey, green). D-2026-10-09-1 overrides them in production; the text stays as written.

**Not applied, needs approval.** Three published captions still use UK "agree" without "on". They were not in the drafted proposal, so they are proposed separately in `proposals/us-localization-addendum.md`: l.371, l.385, l.670.

### Every change

| l. | Place | Type | Original | Now | Source | Decision |
|---|---|---|---|---|---|---|
| 33 | Positioning table | NOTE | Shared calendar and responsibilities | Shared plan and responsibilities | C1.9 | D-2026-10-10-3 |
| 35 | Positioning table | NOTE | Pocket money nobody ever properly agreed on | An allowance nobody ever properly agreed on | follow-on (D3 master) | D-2026-10-10-4 |
| 144 | Two-week calendar, Day 6 | NOTE | A Saturday tidy that ends | A Saturday cleanup that ends | follow-on of l.446 | D-2026-10-10-4 |
| 148 | Two-week calendar, Day 10 | NOTE | Should pocket money be linked to chores? | Should allowance be linked to chores? | follow-on of l.626-680 | D-2026-10-10-4 |
| 175 | Day 0 s2, subheadline | ART | The family calendar, who's doing what | The week's plan, who's doing what | C1.1 | D-2026-10-10-3 |
| 175 | Day 0 s2, image | NOTE | Image: phone with the family calendar, "Demo family" | Image: phone with the Family screen ("Common ground."), "Demo family" | C1.2 (light USD capture, D-2026-10-10-5) | D-2026-10-10-3 |
| 176 | Day 0 s3, subheadline | ART | a break or a new time. | a break or a new day. | C6.1 | D-2026-10-10-3 |
| 178 | Day 0 s5, subheadline | ART | A climbing wall trip, a film out, pocket money if you choose. | A climbing wall trip, a movie night out, an allowance if you choose. | US l.178 | D-2026-10-10-4 |
| 197 | Day 0 Facebook caption | CAP | sharing the week: the calendar, who's doing what | sharing the week: the plan, who's doing what | C1.3 | D-2026-10-10-3 |
| 203 | Day 0 product integration | NOTE | Functions mentioned: shared family calendar, | Functions mentioned: the shared weekly plan, | C1.9 | D-2026-10-10-3 |
| 203 | Day 0 product integration | NOTE | pocket money tracking. | allowance tracking. | follow-on (D3 master) | D-2026-10-10-4 |
| 228 | Day 1 video 3-9s, visual | NOTE | takes plates from the cupboard | takes plates from the cabinet | follow-on (D3 master) | D-2026-10-10-4 |
| 236 | Day 1 Instagram caption | CAP | and agree it's theirs for a month | and agree that it's theirs for a month | US l.236 | D-2026-10-10-4 |
| 262 | Day 2 concept | NOTE | what to agree before the week begins | what to agree on before the week begins | follow-on (D3 master) | D-2026-10-10-4 |
| 264 | Day 2 audience value | NOTE | three specific things to agree, once | three specific things to agree on, once | follow-on (D3 master) | D-2026-10-10-4 |
| 272 | Day 2 s1, image | NOTE | a pair of kids' trainers | a pair of kids' sneakers | US l.272 | D-2026-10-10-4 |
| 273 | Day 2 s2, subheadline | ART | "Not at the bins. At | "Not at the trash can. At | US l.273 | D-2026-10-10-4 |
| 273 | Day 2 s2, image | NOTE | Image: a small kitchen bin. | Image: a small kitchen trash can. | follow-on of l.273 | D-2026-10-10-4 |
| 274 | Day 2 s3, subheadline | ART | "'Tidy your room' means | "'Clean your room' means | US l.274 | D-2026-10-10-4 |
| 282 | Day 2 Instagram caption | CAP | includes the cutlery basket. | includes the silverware basket. | US l.282 | D-2026-10-10-4 |
| 296 | Day 2 Facebook caption | CAP | "you never said the cutlery counts" | "you never said the silverware counts" | US l.296 | D-2026-10-10-4 |
| 304 | Day 2 visual direction | NOTE | The trainers on the cover | The sneakers on the cover | follow-on of l.272 | D-2026-10-10-4 |
| 314 | Day 3 concept | NOTE | every pickup, kit day and birthday party | every pickup, gym day and birthday party | follow-on (D3 master) | D-2026-10-10-4 |
| 320 | Day 3 subheadline | ART | "Football is Tuesday. | "Soccer is Tuesday. | US l.320 | D-2026-10-10-4 |
| 336 | Day 3 Facebook caption | CAP | that football moved to Tuesday, that the PE kit needs washing by Thursday | that soccer moved to Tuesday, that the gym clothes need washing by Thursday | US l.336 | D-2026-10-10-4 |
| 354 | Day 4 concept | NOTE | keep to an amount you agree, | keep to an amount you agree on, | follow-on (D3 master) | D-2026-10-10-4 |
| 365 | Day 4 video 4-9s, voiceover | VID | You agree the budget. | You agree on the budget. | US l.365 | D-2026-10-10-4 |
| 366 | Day 4 video 9-15s, visual | NOTE | in the supermarket, | in the grocery store, | US l.366 | D-2026-10-10-4 |
| 367 | Day 4 video 15-20s, visual | NOTE | beside him at the hob, | beside him at the stove, | US l.367 | D-2026-10-10-4 |
| 373 | Day 4 Instagram caption | CAP | a bit of maths, | a bit of math, | US l.373 | D-2026-10-10-4 |
| 391 | Day 4 visual direction | NOTE | a real supermarket aisle. An adult is at the hob | a real grocery store aisle. An adult is at the stove | US l.391 | D-2026-10-10-4 |
| 415 | Day 5 s5, subheadline | ART | The bins on bin day. | The trash on trash day. | US l.415 | D-2026-10-10-4 |
| 446 | Day 6 title | NOTE | A Saturday tidy that ends | A Saturday cleanup that ends | US l.446 | D-2026-10-10-4 |
| 450 | Day 6 concept | NOTE | weekend tidying drags on | weekend cleanup drags on | follow-on of l.446 | D-2026-10-10-4 |
| 461 | Day 6 video 4-10s, visual | NOTE | hoovering the living room | vacuuming the living room | US l.461 | D-2026-10-10-4 |
| 462 | Day 6 video 10-16s, visual | NOTE | dancing with the hoover | dancing with the vacuum | US l.462 | D-2026-10-10-4 |
| 469 | Day 6 TikTok caption | CAP | Even mid-hoover. | Even mid-vacuum. | US l.469 | D-2026-10-10-4 |
| 473 | Day 6 Instagram caption | CAP | version of a Saturday tidy we know | version of a Saturday cleanup we know | US l.473 | D-2026-10-10-4 |
| 473 | Day 6 Instagram caption | CAP | everyone tidies one room | everyone cleans one room | US l.473 | D-2026-10-10-4 |
| 491 | Day 7 concept | NOTE | a kit left at home | gym clothes left at home | follow-on (D3 master) | D-2026-10-10-4 |
| 511 | Day 7 Instagram caption | CAP | So does a calendar the whole family can open | So does a shared plan the whole family can open | C1.4 | D-2026-10-10-3 |
| 521 | Day 7 Facebook caption | CAP | can see the same calendar wherever they are | can see the same plan wherever they are | C1.5 | D-2026-10-10-3 |
| 525 | Day 7 product integration | NOTE | Function mentioned: the shared family calendar. | Function mentioned: the shared weekly plan of responsibilities. | C1.9 | D-2026-10-10-3 |
| 551 | Day 8 s3, subheadline | ART | can swap the bins and the recycling | can swap the trash and the recycling | US l.551 | D-2026-10-10-4 |
| 551 | Day 8 s3, image | NOTE | Image: a roll of bin bags. | Image: a roll of trash bags. | follow-on of l.551 | D-2026-10-10-4 |
| 552 | Day 8 s4, headline | ART | "A rota that fits their ages." | "A rotation that fits their ages." | US l.552 | D-2026-10-10-4 |
| 552 | Day 8 s4, diagram label | ART | swapping "Bins" and "Recycling" | swapping "Trash" and "Recycling" | US l.552 | D-2026-10-10-4 |
| 614 | Day 9 Facebook caption | CAP | carrying cutlery to the table, putting the shopping in the right cupboard | carrying silverware to the table, putting the groceries in the right cabinet | US l.614 | D-2026-10-10-4 |
| 620 | Day 9 visual direction | NOTE | The hob is off | The stove is off | US l.620 | D-2026-10-10-4 |
| 624 | Day 9 Story | ART | carrying cutlery to the table. | carrying silverware to the table. | US l.624 | D-2026-10-10-4 |
| 626 | Day 10 title | NOTE | Should pocket money be linked to chores? | Should allowance be linked to chores? | US l.626-680 | D-2026-10-10-4 |
| 630 | Day 10 concept | NOTE | agree it in advance. | agree on it in advance. | follow-on (D3 master) | D-2026-10-10-4 |
| 634 | Day 10 headline | ART | "Should pocket money be linked to chores?" | "Should allowance be linked to chores?" | US l.626-680 | D-2026-10-10-4 |
| 640 | Day 10 s1, headline | ART | "Should pocket money" (Playfair | "Should allowance" (Playfair | US l.626-680 | D-2026-10-10-4 |
| 642 | Day 10 s3, image | NOTE | a plate and a tea towel. | a plate and a dish towel. | US l.642 | D-2026-10-10-4 |
| 644 | Day 10 s5, headline | ART | "Agree it before payday." | "Agree on it before payday." | US l.644 | D-2026-10-10-4 |
| 644 | Day 10 s5, subheadline | ART | Most pocket money arguments | Most allowance arguments | US l.626-680 | D-2026-10-10-4 |
| 650 | Day 10 Instagram caption | CAP | we lean towards a mix. | we lean toward a mix. | US l.650 | D-2026-10-10-4 |
| 658 | Day 10 Instagram caption, hashtags | CAP | > #pocketmoney #allowance | > #allowance | US l.658 | D-2026-10-10-4 |
| 660 | Day 10 TikTok caption | CAP | Should pocket money be linked to chores? | Should allowance be linked to chores? | US l.626-680 | D-2026-10-10-4 |
| 660 | Day 10 TikTok caption, hashtags | CAP | #pocketmoney #parentsoftiktok | #allowance #parentsoftiktok | US l.660 | D-2026-10-10-4 |
| 664 | Day 10 Facebook caption | CAP | should pocket money be linked to chores? | should allowance be linked to chores? | US l.626-680 | D-2026-10-10-4 |
| 680 | Day 10 Story | ART | "Pocket money: linked to jobs, | "Allowance: linked to jobs, | US l.626-680 | D-2026-10-10-4 |
| 734 | Day 12 concept | NOTE | the family agrees one optional extra | the family agrees on one optional extra | follow-on (D3 master) | D-2026-10-10-4 |
| 734 | Day 12 concept | NOTE | approved jobs add points toward it | family jobs add points toward it | C2.6 (cited as l.736 in the proposal; the phrase is on l.734) | D-2026-10-10-3 |
| 736 | Day 12 audience value | NOTE | agree one optional extra together | agree on one optional extra together | follow-on (D3 master) | D-2026-10-10-4 |
| 745 | Day 12 s2, subheadline | ART | "Football on Tuesday, dentist on Thursday, who's doing what. | "Trash on Tuesday, laundry on Thursday, who's doing what. | C1.6 with US wording (C1.6 drafted "Bins") | D-2026-10-10-3 |
| 745 | Day 12 s2, subheadline | ART | Then the family agrees an optional extra | Then the family agrees on an optional extra | US l.745 | D-2026-10-10-4 |
| 745 | Day 12 s2, image | NOTE | Image: phone with the family calendar and the climbing wall trip set up as a family experience. | Image: phone with the Upcoming responsibilities and the "Climbing wall trip" experience. | C1.7 | D-2026-10-10-3 |
| 746 | Day 12 s3, subheadline | ART | Nobody needs to ask who's driving to football. | Nobody needs to ask whose turn it is. | C1.8 | D-2026-10-10-3 |
| 747 | Day 12 s4, subheadline | ART | He has a mock exam, so he asks to swap bin night | He has a practice test, so he asks to swap trash night | US l.747 | D-2026-10-10-4 |
| 748 | Day 12 s5, headline | ART | "Approved jobs add up." | "Family jobs add up." | C2.1 | D-2026-10-10-3 |
| 748 | Day 12 s5, subheadline | ART | "When a parent approves a finished job, its points go toward the climbing wall. | "Every family job that gets done adds points toward the climbing wall. | C2.2 | D-2026-10-10-3 |
| 750 | Day 12 s7, diagram note | NOTE | filling left to right as jobs are approved | filling left to right as family jobs get done | C2.3 | D-2026-10-10-3 |
| 757 | Day 12 Instagram caption | CAP | the family agrees one optional extra | the family agrees on one optional extra | US l.757 | D-2026-10-10-4 |
| 757 | Day 12 Instagram caption | CAP | Each job a parent approves adds points toward the trip, so by Thursday | Each family job that gets done adds points toward the trip, so by Thursday | C2.4 | D-2026-10-10-3 |
| 771 | Day 12 Facebook caption | CAP | The family also agrees one optional extra | The family also agrees on one optional extra | US l.771 | D-2026-10-10-4 |
| 773 | Day 12 Facebook caption | CAP | Each job a parent approves adds points toward the trip, and the whole family | Each family job that gets done adds points toward the trip, and the whole family | C2.5 | D-2026-10-10-3 |
| 779 | Day 12 product integration | NOTE | Functions shown: shared family calendar, | Functions shown: the shared weekly plan, | C1.9 | D-2026-10-10-3 |
| 785 | Day 12 Story | NOTE | Wednesday's pocket money question | Wednesday's allowance question | US l.785 | D-2026-10-10-4 |

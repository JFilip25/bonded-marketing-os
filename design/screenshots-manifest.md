# BONDED screenshot inventory and campaign mapping

Status: VERIFIED 9 Oct 2026 by inspecting every file. This replaces the PR #1 draft manifest.

## Provenance

| Item | Verified fact |
|---|---|
| Source | `bonded-millers-screens.zip`, supplied by the owner on 9 Oct 2026. SHA-256 `0c210c5a0faebd6870de229cdde09075423f79242ae57c991368e767f987599c`. |
| Contents | 21 screens in light mode, the same 21 in dark mode, and two overview montages. Every screen is 1290×2796 (8-bit RGB PNG). The montages are 2292×2112. |
| How they were made | They come from the 4–9 Oct "bonded: family AI thesis and plan" session. That session ran the real web build of `JFilip25/ciccho-Claude` branch `claude/bonded-family-ai` (head `81b164b`) against a **local test database**, with the demo banner hidden. Its seed script stayed in that session's scratchpad and is not in any repo. |
| UI match | The on-screen strings match the code on that branch, for example "All together." (`src/components/ParentDashboard.tsx`), "Common ground." (`app/parent/family/index.tsx`) and "Make space to talk." (`app/checkin.tsx`). "Talk to Bonded" in screen 05 exists only on that branch (`app/voice.tsx:26`). The default branch still says "Say it". |
| Demo data | The Miller Family: Mom, Dad, Mia 5, Emma 8, Noah 11, Leo 13 and Sofia 17. The people, goals and amounts are fictional demo data from the local seed. No real family or child data is shown. |
| Date on screen | "Friday 9 October" |
| Currency | EUR (€) everywhere money is shown |
| Copies in this repo | `assets/screens/{light,dark,overview}/`, byte-identical to the zip, with checksums in `assets/CHECKSUMS.sha256` |

Rules:
- Use these images unaltered.
- Crop only; never repaint, recolour, retouch or re-letter UI.
- Every use carries "Demo family" in small text.

## Known product bugs visible in the screens

These are app issues, not marketing edits. They are reported to the app team in `ops/product-team-notes.md`. Avoid crops that show them, or recapture once they are fixed.

1. "Family contribution" is printed twice on family-contribution rows. Seen in screens 01, 02, 06 and 40.
2. The section heading "pending" is lowercase on Leo's Today (40).
3. "Mia · €0.00 to pay out" appears on the parent Rewards screen (03), although money is hidden for ages 4–6.

## Screen by screen

The light and dark files of each screen are identical in content. The age band is the app's own (`src/domain/age.ts`).

| # | File stem | Profile / band | Tab | What is visible | € | Notes |
|---|---|---|---|---|---|---|
| 01 | `01-parent-home` | Mom (parent) | Home | "All together." The Miller Family. "A little recognition 3": Sofia "Cook dinner for the family" €5.00, Leo "Take bins out" €2.00, both "Ready for you". Blue "Review 3 completions". "Your part today": Saturday Reset, and Laundry "Completed without a reminder". "On the horizon" (cropped). | yes | Bug 1 on the Saturday Reset row |
| 02 | `02-parent-responsibilities` | Mom | Tasks | "Responsibilities." "A shared plan, with room to change." Segments: Today / Upcoming / Completed. Rows: Clean bathroom (Leo), Empty the dishwasher (Noah, €1.00), Groceries (Dad), Pick up the groceries (Sofia, €3.00), Put laundry away (Emma), Saturday Reset (Leo). | yes | Bug 1. This is a task list, **not a calendar**. |
| 03 | `03-parent-rewards` | Mom | Rewards | "Rewards." "Money, experiences and a simple thank you." "Money to settle" per child: Leo, Emma, Mia, Noah, Sofia. "Experiences": Movie Night (cropped). | yes | Bug 3 |
| 04 | `04-parent-family` | Mom | Family | "Common ground." "Small contributions. More time together." Family avatar chain. Movie Night "100 / 100 family points", "Unlocked", "Tomorrow · 1d". "Make space to talk": Your weekly check-in. "Everyone's part": Leo, Clean bathroom. | no | Brand line visible in the UI |
| 05 | `05-parent-add-menu` | Mom | Home + menu | The "+" menu open: Talk to Bonded, Responsibility, Family mission, Experience, Goal, Allowance, Family member. | behind | "Talk to Bonded" is an AI voice drafting feature. Do not feature it without approval. |
| 06 | `06-parent-child-emma` | Mom, viewing Emma (7–9) | Member | "8 years · Ages 7–9 · account linked". Today: Put laundry away, Saturday Reset, Feed the dog €1.00 "Awaiting approval", Clean desk "Completed without a reminder +10 points". "Moderate · 55 min today". "Assign a responsibility". Progress: 150 points. Money (cropped). | yes | Bug 1 |
| 07 | `07-parent-checkin` | Mom | Check-in | "Make space to talk." "What worked? What could change?" Filled answers, ending "The Weekend Adventure in the mountains." "Save check-in". | no | This is a check-in, **not** an approval note |
| 10 | `10-mia-5-today` | Mia (4–6) | Today | "Hi, Mia." "A little help." A big plant picture, **"Water the plants"**, "I did it!", "Hear it". Movie Night card. | no | "Water the plants" belongs to Mia, not Emma |
| 11 | `11-mia-5-wishes` | Mia (4–6) | Wishes | "Wishes." "Something worth working towards." A read-aloud "Wishes" button. A unicorn plush with progress and no numbers. Pancake breakfast (cropped). | no | |
| 20 | `20-emma-8-today` | Emma (7–9) | Today | "Hey, Emma." "Little things add up." Art Set €11/€25, "€14 to go". Today: Put laundry away (+5 Family XP), Saturday Reset (+100 Family XP), Feed the dog €1.00 "A parent will check this soon". | yes | 2 to do + 1 waiting for approval |
| 21 | `21-emma-8-wishes` | Emma (7–9) | Wishes | Art Set €11/€25. "Our goals": Movie Night. | yes | |
| 30 | `30-noah-11-today` | Noah (10–12) | Today | "Today, Noah." "A clear plan. Something worth the effort." LEGO space station €22/€45, "about 32 days to go". Empty the dishwasher €1.00, Walk the dog €1.50, Pack your school bag "Completed without a reminder +10 XP". | yes | |
| 31 | `31-noah-11-goals` | Noah (10–12) | Goals | LEGO space station €22/€45. "Something for you": **Climbing wall day** 220/400 XP, "180 to go". | yes | A personal goal, not a family experience |
| 32 | `32-noah-11-rewards` | Noah (10–12) | Rewards | "My money", available €8.00, pending €0.00, set aside €22.00. Movie Night 100/100 family points "Unlocked". "Money history" (cropped). | yes | |
| 40 | `40-leo-13-today` | Leo (13–15) | Today | "Your day." "The plan you agreed on. Room to adjust." €3.00 available. "1 of 3 done today". Clean bathroom +15 XP, Saturday Reset, and under "pending": Take bins out €2.00 "Awaiting approval". | yes | Bugs 1 and 2 |
| 41 | `41-leo-13-goals` | Leo (13–15) | Goals | New headphones €9/€60. "Something for you": Gaming Night 320/400 XP. | yes | |
| 42 | `42-leo-13-rewards` | Leo (13–15) | Rewards | €3.00 available, pending €2.00, set aside €9.00. "€5.00 allowance every Saturday". Movie Night "Unlocked". Transactions (cropped). | yes | |
| 43 | `43-leo-13-progress` | Leo (13–15) | Progress | "Your progress." "Small contributions add up." 320 XP, 8 completed, 4 solo. **Messages:** "Bins out before I even asked. Thanks, Leo!", Mom · 2 days ago. | no | The child's view of a parent's thank-you note |
| 50 | `50-sofia-17-overview` | Sofia (16–18) | Overview | "Overview." €26.00 available. "Agreed this week": Pick up the groceries €3.00, Do your own laundry. Pending: Cook dinner for the family €5.00. Concert tickets (cropped). | yes | |
| 51 | `51-sofia-17-goals` | Sofia (16–18) | Goals | Concert tickets €54/€120. "Something for you": Driving lesson with Dad, 400/400 XP, "Available today". | yes | |
| 52 | `52-sofia-17-progress` | Sofia (16–18) | Progress | 490 XP, 13 completed, 6 solo. Messages: "Best dinner this week. Thank you, Sofia!" and "Thanks for doing the shop on your way home." | no | |

## Campaign mapping

Days 0, 5, 11 and 12 are the posts that need product screens. The rows match the amended briefs in `campaign/weeks-01-02.md` (Amendment 1, `campaign/CHANGELOG.md`).

**Decided on 10 Oct 2026 (D-2026-10-10-5):** app images use the **light** captures with **USD** and US wording, listed under "Captured additions" below. The supplied EUR screens above stay as reference only.

| Post / frame | Brief requires | Status | Screen | Notes |
|---|---|---|---|---|
| Day 0 slide 1 | "a phone showing the Bonded home screen" | CAPTURED | 64 | Parent Home with recognition and the Climbing wall trip. No known bug in view. |
| Day 0 slide 2 | "phone with the Family screen (\"Common ground.\")" (C1.2) | CAPTURED | 67 | The family, "Next, together", the weekly check-in, "Everyone's part" |
| Day 5 Story (behind the scenes) | "A screen of one child's list" | CAPTURED | 61 | Emma's two things |
| Day 11 video 4–8s | Emma ticks off "Water the plants" | CAPTURED | 61, 62, 63 | Real tick-off with "without a reminder" switched on |
| Day 11 video 8–14s | Parent approves and types a note | CAPTURED | 65 (then 66 for the child's side) | The note is the campaign's exact wording |
| Day 11 video 14–18s | Family progress toward "Climbing wall trip" moves up | CAPTURED | 67, 66 | 110/200. Points arrive at tick-off (C2). |
| Day 11 Story (behind the scenes) | "The approval screen with a note" | CAPTURED | 65 | |
| Day 12 slide 1 | Home screen | CAPTURED | 64 | As Day 0 slide 1 |
| Day 12 slide 2 | "phone with the Upcoming responsibilities and the 'Climbing wall trip' experience" (C1.7) | CAPTURED | 74 | Shows "Take out the trash" Tue and "Put laundry away" Thu. The build shows the experience on other screens, so it appears on slides 1 (64) and 5 (67). |
| Day 12 slide 3 | "Emma has two things on her list. Leo has three." | CAPTURED | 61 (Emma: exactly two) | 69 (Leo: "0 of 3 done today") is the alternative |
| Day 12 slide 4 | Leo's reschedule request | CAPTURED | 70 | 71, 72 and 73 show the rest of the flow |
| Day 12 slide 5 | Progress "a little over half full" | CAPTURED | 67 (110/200) | Matches "Family jobs add up." (C2.1) |
| Day 12 slides 6–8 | Type, diagram, CTA | n/a | none | No screen needed |

**Known limit: the date on screen.** Screens 61, 63, 64, 65, 69 and 72 show the capture date, "Saturday, October 10". Day 12 slide 3 is labelled "Monday", and the Day 11 note says "before school". The server refuses to complete a job before its due date (`'Not due yet'`, action SQL l.367), so the date can't be changed in the browser alone. A weekday recapture is a re-run of the two scripts if wanted. Screens 67, 70 and 74 show no date.

## Captured additions, recaptured 10 Oct 2026 with US wording

**How they were made:**
- Real web build of `JFilip25/ciccho-Claude` @ `81b164b` (`claude/bonded-family-ai`), against a **throwaway local Supabase stack**.
- The Millers were seeded through the app's own server operation (`tools/capture/seed-millers.mjs`), and every state was produced by real taps (`tools/capture/capture.mjs`).
- Captured at 430×932 @3x = 1290×2796, light and dark, currency **USD**, timezone America/New_York.
- **0 requests left localhost.** Production was never contacted (`assets/screens/captured/capture-log.json`).
- Nothing was committed to the app repo.

**What changed from the 9 Oct capture:**
- Task names follow the US master: "Take out the trash" (was "Take bins out") and "Clean your desk" (was "Tidy your desk").
- Leo's note is "Practice test tomorrow. Trash on Thursday?" (was "Mock exam tomorrow. Bins on Thursday?").
- Upcoming shows "Take out the trash" (Noah, Tuesday) and "Put laundry away" (Emma, Thursday), matching Day 12 slide 2. The Climbing wall trip is available on the Saturday after.
- The "without a reminder" switch is now really on. In the 9 Oct capture the script tapped the label, which doesn't toggle it, so Emma's tick-off was recorded without it.

**Demo data:** the same 7-person Millers. Data is local only, and the accounts exist only in the throwaway local database.

**Status:** approved for use by D-2026-10-10-5 (light, USD). Screen 68 is excluded.

| File stem | Who | Route | State shown | Size | SHA-256 (first 12, light) |
|---|---|---|---|---|---|
| `61-emma-today-before-{light,dark}.png` | Emma | `/child/today` | Emma (7-9) Today: exactly two things (Put laundry away, Water the plants), neither done. Level 1, 0 XP | 1290×2796 | `5b8ad24be04d` |
| `62-emma-water-plants-task-{light,dark}.png` | Emma | `/responsibility/:id` | Real task screen: "I did this without a reminder" switched on, "Done!" | 1290×2796 | `12ad7ea3a5cf` |
| `63-emma-today-after-{light,dark}.png` | Emma | `/child/today` | After the tick-off: "A parent will check this soon"; 5 XP from the independence bonus | 1290×2796 | `fb62c3930cc8` |
| `64-mom-home-recognition-{light,dark}.png` | Mom | `/parent/home` | Parent Home: A little recognition (Emma, Sofia, Noah ready), Review 3 completions, Climbing wall trip 110/200 | 1290×2796 | `36969cb45de9` |
| `65-mom-review-note-{light,dark}.png` | Mom | `/parent/home` | Review queue with the typed note "saw you did the plants before school. thanks" | 1290×2796 | `2115213e9cf0` |
| `66-emma-noticed-{light,dark}.png` | Emma | `/child/today` | Emma: "Mom noticed" card with the note; Our goals: Climbing wall trip 110/200, 7 days to go | 1290×2796 | `4ffc8dce4809` |
| `67-mom-family-climbing-{light,dark}.png` | Mom | `/parent/family` | Family tab "Common ground.": the family, Climbing wall trip 110/200 family points, 90 to go, Available Sat, Oct 17, weekly check-in, Everyone's part | 1290×2796 | `776e22c5f3eb` |
| `68-mom-rewards-{light,dark}.png` | Mom | `/parent/rewards` | Parent Rewards (shows known bug P3, Mia $0.00 to pay out, and UK app copy "Recognise"; do not use) | 1290×2796 | `21b052010ba5` |
| `69-leo-today-{light,dark}.png` | Leo | `/child/today` | Leo (13-15) Today: 0 of 3 done today: Clean bathroom, Clean your desk, Take out the trash $2.00 | 1290×2796 | `37c62ca614ec` |
| `70-leo-reschedule-draft-{light,dark}.png` | Leo | `/responsibility/:id` | Take out the trash: Leo chose Reschedule with the note "Practice test tomorrow. Trash on Thursday?" | 1290×2796 | `010b9986b302` |
| `71-leo-reschedule-sent-{light,dark}.png` | Leo | `/responsibility/:id` | Sent, waiting for a reply | 1290×2796 | `a91e83898d10` |
| `72-mom-change-of-plan-{light,dark}.png` | Mom | `/parent/home` | Parent Home: "A change of plan", Leo asked for another day, with his note | 1290×2796 | `616954dfd243` |
| `73-mom-request-detail-{light,dark}.png` | Mom | `/responsibility/:id` | Parent task view of the request: Approve / Move to tomorrow / Let's talk | 1290×2796 | `da2724fa684b` |
| `74-mom-upcoming-{light,dark}.png` | Mom | `/parent/responsibilities` | Parent Tasks > Upcoming: Take out the trash (Noah, Tue, Oct 13), Put laundry away (Emma, Thu, Oct 15) | 1290×2796 | `d52375aad979` |

## File checksums

The SHA-256 prefix is shown. Full hashes are in `assets/CHECKSUMS.sha256`.

| File | Size (px) | Bytes | SHA-256 (first 16) |
|---|---|---|---|
| `screens/light/01-parent-home-light.png` | 1290×2796 | 286 KB | `ec3c848287a04b51` |
| `screens/light/02-parent-responsibilities-light.png` | 1290×2796 | 214 KB | `d7971f1b796ad02e` |
| `screens/light/03-parent-rewards-light.png` | 1290×2796 | 192 KB | `a38f1f68647c124e` |
| `screens/light/04-parent-family-light.png` | 1290×2796 | 529 KB | `a5fff21214e29d07` |
| `screens/light/05-parent-add-menu-light.png` | 1290×2796 | 305 KB | `e2b7e55052cd236a` |
| `screens/light/06-parent-child-emma-light.png` | 1290×2796 | 161 KB | `889be4231e369ba6` |
| `screens/light/07-parent-checkin-light.png` | 1290×2796 | 161 KB | `dc07671a331def4e` |
| `screens/light/10-mia-5-today-light.png` | 1290×2796 | 204 KB | `612233adbcb7c406` |
| `screens/light/11-mia-5-wishes-light.png` | 1290×2796 | 164 KB | `d855e907f7372f8f` |
| `screens/light/20-emma-8-today-light.png` | 1290×2796 | 479 KB | `c5195e1c1e4c59d8` |
| `screens/light/21-emma-8-wishes-light.png` | 1290×2796 | 169 KB | `9b7ec0688d3a5343` |
| `screens/light/30-noah-11-today-light.png` | 1290×2796 | 543 KB | `7cc9a5889a986f1c` |
| `screens/light/31-noah-11-goals-light.png` | 1290×2796 | 180 KB | `611b16b67c04daae` |
| `screens/light/32-noah-11-rewards-light.png` | 1290×2796 | 167 KB | `2d2c4338c73fec89` |
| `screens/light/40-leo-13-today-light.png` | 1290×2796 | 198 KB | `11e4ed8cae9742eb` |
| `screens/light/41-leo-13-goals-light.png` | 1290×2796 | 175 KB | `1ee3485914fb6619` |
| `screens/light/42-leo-13-rewards-light.png` | 1290×2796 | 170 KB | `f6f89a8f6873cbf7` |
| `screens/light/43-leo-13-progress-light.png` | 1290×2796 | 158 KB | `d895f9e4813b78d2` |
| `screens/light/50-sofia-17-overview-light.png` | 1290×2796 | 182 KB | `3362184eb93b7042` |
| `screens/light/51-sofia-17-goals-light.png` | 1290×2796 | 180 KB | `47d36b8ecf922c94` |
| `screens/light/52-sofia-17-progress-light.png` | 1290×2796 | 147 KB | `73b836c2b9831c84` |
| `screens/dark/01-parent-home-dark.png` | 1290×2796 | 260 KB | `61c05f1464e979aa` |
| `screens/dark/02-parent-responsibilities-dark.png` | 1290×2796 | 207 KB | `203bb5523f501ac9` |
| `screens/dark/03-parent-rewards-dark.png` | 1290×2796 | 186 KB | `5c157c44f1806b0c` |
| `screens/dark/04-parent-family-dark.png` | 1290×2796 | 498 KB | `615bf00c6c3c7a09` |
| `screens/dark/05-parent-add-menu-dark.png` | 1290×2796 | 272 KB | `1917daced790e505` |
| `screens/dark/06-parent-child-emma-dark.png` | 1290×2796 | 146 KB | `9009da81b882f275` |
| `screens/dark/07-parent-checkin-dark.png` | 1290×2796 | 152 KB | `80f0639b58aeb23e` |
| `screens/dark/10-mia-5-today-dark.png` | 1290×2796 | 183 KB | `cd8f10dea446a134` |
| `screens/dark/11-mia-5-wishes-dark.png` | 1290×2796 | 162 KB | `75d5c9a5ce88b5b8` |
| `screens/dark/20-emma-8-today-dark.png` | 1290×2796 | 486 KB | `423d7adc2a4b1f5f` |
| `screens/dark/21-emma-8-wishes-dark.png` | 1290×2796 | 166 KB | `b61d1a94dac27f6f` |
| `screens/dark/30-noah-11-today-dark.png` | 1290×2796 | 554 KB | `26dccc1d65f15614` |
| `screens/dark/31-noah-11-goals-dark.png` | 1290×2796 | 177 KB | `d619feff2629b556` |
| `screens/dark/32-noah-11-rewards-dark.png` | 1290×2796 | 159 KB | `10f35f3c9638e590` |
| `screens/dark/40-leo-13-today-dark.png` | 1290×2796 | 186 KB | `8de42c9249ccaf52` |
| `screens/dark/41-leo-13-goals-dark.png` | 1290×2796 | 174 KB | `97b3a4eb868ffd60` |
| `screens/dark/42-leo-13-rewards-dark.png` | 1290×2796 | 166 KB | `a569abf7e04b811f` |
| `screens/dark/43-leo-13-progress-dark.png` | 1290×2796 | 121 KB | `9791e2929827d745` |
| `screens/dark/50-sofia-17-overview-dark.png` | 1290×2796 | 181 KB | `31ce8b1520fbb8ae` |
| `screens/dark/51-sofia-17-goals-dark.png` | 1290×2796 | 178 KB | `b8e812e1d9fe7bec` |
| `screens/dark/52-sofia-17-progress-dark.png` | 1290×2796 | 146 KB | `19b1c25b27134268` |
| `screens/overview/overview-dark.png` | 2292×2112 | 1307 KB | `da37e08977dda054` |
| `screens/overview/overview-light.png` | 2292×2112 | 1305 KB | `3eefd68ee4b9d1f3` |

# Product claims register: campaign weeks 1–2 checked against the build

**Rule (CLAUDE.md).** Every product claim in a post must be verified here before the post's creative is produced. Anything not in the current build stays out, even if it is coming soon. That rule comes from the campaign's own "Risks" section.

**Builds checked:**

| Build | Role | Notes |
|---|---|---|
| `JFilip25/ciccho-Claude` branch `claude/bonded-family-ai` @ `81b164b` (8 Oct 2026) | Primary: the build the supplied screenshots show | Unmerged |
| default branch `claude/family-responsibility-app-mvp-vchzt7` @ `eecbc56` (3 Oct 2026) | Secondary | Gives the same result on every row below unless noted |

**Where the evidence comes from:**
- All writes go through one database function. Its newest definition is in `supabase/migrations/20261007123239_family_intent_closed.sql`, called **"action SQL"** below.
- On the default branch the same code is in `20261001190245_edit_experience.sql`.
- `baseline SQL` means `supabase/migrations/20260927000000_baseline_from_production.sql`.

**Statuses:**

| Status | Meaning |
|---|---|
| VERIFIED | The build does this, as worded |
| CONFLICT | The build does not do this as worded. See `proposals/claim-amendments.md` (PROPOSED, needs approval). |
| NEEDS_PRODUCT_VERIFICATION | It depends on demo data or on something the code can't settle |

## Register

| ID | Claim (campaign line) | Status | What the build does | Evidence |
|---|---|---|---|---|
| C1 | "The family calendar…" and "phone with the family calendar" (Day 0 s2, l.175). "the calendar" (Day 0 FB, l.197). "a calendar the whole family can open, which is the part we're building into Bonded" (Day 7 IG, l.511). "see the same calendar wherever they are" (Day 7 FB, l.521). "Football on Tuesday, dentist on Thursday…" and "phone with the family calendar" (Day 12 s2, l.745). "Nobody needs to ask who's driving to football." (Day 12 s3, l.746). Function lists: l.33, 203, 525, 779. | **CONFLICT** | **No calendar, agenda or event type exists.** What exists: responsibilities dated by day, no time of day. The parent Tasks tab is a list with Today / Upcoming / Completed. Upcoming is one-off tasks dated after today; repeats are only generated up to today. There are no "who's driving", place or appointment fields. | `app/parent/responsibilities/index.tsx:101` (segments). `src/domain/derive.ts:294` (`upcomingTasks`). baseline SQL:84 (`due_date date`, no time). Action SQL:750 (repeats are generated only up to today: `exit when nd>ft`). |
| C2 | "When a parent approves a finished job, its points go toward the climbing wall." (Day 12 s5, l.748). "filling left to right as jobs are approved" (s7, l.750). "Each job a parent approves adds points toward the trip" (Day 12 IG l.757, FB l.773). Also l.736 (concept). | **CONFLICT** | **Points (XP and family points) are credited when the child ticks the job off,** not when a parent approves it. Only **money** waits for approval: it is held as pending, then released as earned. Only jobs that pay family points count toward a family experience. | action SQL:388 (personal XP on complete), :390 (family XP on complete), :393 (money pending on complete), :395–404 (approve releases money only). An open product decision exists, "award XP on approval rather than on submission" (product repo `docs/launch-readiness/stress-test-and-architecture-plan.md:939`). |
| C3 | A family experience fills from the family's jobs, and "Everyone can see how close they are" (Day 12 s5) | VERIFIED, with a note | One family total counts every family-points entry since the experience was created, **whoever earned it (parents included)**. The family experience card shows "x / y family points" to everyone. It doesn't require every child to contribute. | `src/domain/derive.ts:195–198`. Action SQL:790 (family experience unlock counts all `family_xp` since creation). `src/components/ExperienceCard.tsx:46`. |
| C4 | "Points unlock extras the family agrees on" (Day 0 s5, l.178). "the family agrees one optional extra" (Day 12) | VERIFIED, with a note | Experiences unlock with points. **Only parents can create experiences** (`experience` is a parent-only op). "Agrees" describes the family conversation, not an in-app vote. | Action SQL:224 (parent-only op list includes `experience`). `ExperienceCard.tsx:45` ("Unlocked"). |
| C5 | "Emma has two things on her list. Leo has three." (Day 12 s3, l.746) | VERIFIED (captured demo state, awaiting review) | Depends on demo data. In the supplied screens Leo shows "1 of 3 done today" (screen 40). Emma shows 2 to do plus 1 waiting for approval (screen 20). | Phase 2 captures 61 (Emma: exactly two) and 69 (Leo: "0 of 3 done today") in `assets/screens/captured/` |
| C6 | "Kids … can ask for help, a break or a new time." (Day 0 s3, l.176) | VERIFIED (minor wording note) | Requests are help, break or reschedule. A reschedule is "Ask for another day": **days, not times**. Approving it moves the task forward. | baseline SQL:212. Action SQL:563–567 (request), :571–581 (resolve moves `due_date`). `src/theme/copy.ts:914` "Ask for another day". |
| C7 | "Leo needs to move something … he asks to swap bin night instead of quietly skipping it." (Day 12 s4, l.747). "When Leo needs to move something, he asks." (IG). "a child can ask to move it" (FB) | VERIFIED | Same as C6. The parent sees "A change of plan" on Home and can reply Approve / Move to tomorrow / Let's talk. There is no feature for swapping with a sibling, but "swap bin night" reads as moving it. | `ParentDashboard.tsx:162`. `app/responsibility/[id].tsx` request replies. |
| C8 | "Kids see their own part, tick things off" (Day 0 s3). "she ticks it off" (Day 11). "Each kid gets a list of what's theirs today." (Day 5 Story) | VERIFIED | Per-child responsibilities. A child can only complete their own ("Complete your own responsibility"). Button labels by age: "I did it!" (4–6), "Done!" (7–9), "Mark complete" (13+). | Action SQL `op='complete'` checks. `src/theme/ageThemes.ts`. Screens 10, 20, 30, 40. |
| C9 | "When a job gets ticked off, you approve it and can add a note." (Day 11 IG l.706, FB l.718). "The approval screen with a note" (Day 11 Story) | VERIFIED | The review queue on parent Home ("Review N completions") has "A thank you (optional)", placeholder "What did you notice?". The note is saved with the approval, and the child sees "{Name} noticed" and the note under Messages. Approval can be switched off per job. | `src/components/ParentDashboard.tsx:124,147`. Action SQL:405. `src/theme/copy.ts:1086`. Screen 43. |
| C10 | "Bonded keeps track of money; it doesn't move it." (Day 0 s5). "Bonded tracks allowance, earnings or both" (Day 10 IG l.654) | VERIFIED | Allowances (unconditional or tied to the week's jobs) and earnings are recorded. "Mark as paid" says: "This records a payment you already made … it does not move money." There is no banking or payments library; RevenueCat handles the app subscription only. | `src/theme/copy.ts:1337`. Product repo `docs/bonded/next-features.md` ("bookkeeping only"). |
| C11 | "Families with kids from about 4 to 18." (Day 0 s3) | VERIFIED | Five age bands: 4–6, 7–9, 10–12, 13–15 and 16–18, each with its own home screen | `src/domain/age.ts`. Screens 10–52. |
| C12 | "Bonded is coming to iPhone and Android." (Day 0 s6, Day 12 s8, Day 12 FB) | VERIFIED as "coming" | iOS and Android are both configured (`app.json`, v0.1.0). **It is not in either store yet**: only internal Android test builds exist. Never imply it is available now. | `app.json`, `eas.json`. Product repo `docs/launch-readiness/runbooks/ios-and-store-setup.md`. |
| C13 | "one place to keep track of who owns what at home" (Day 5 IG). "each child can see the jobs that are theirs" (Day 5 FB). Day 2 "who's doing it" | VERIFIED | Assignees per responsibility; each child's Today shows only their own | Screens 06, 20, 30, 40 |
| C14 | "Climbing wall unlocked" and "Agreed together on Sunday." (Day 12 s7). "It counts toward Saturday" (Day 11) | VERIFIED (needs demo state) | Experiences show "Unlocked" plus a countdown to their date | `ExperienceCard.tsx:45`. Phase 2 capture of "Climbing wall trip". |
| C15 | "Demo family, real app." (Day 12 TikTok) | VERIFIED for the supplied screens and the Phase 2 captures | Real build, local demo data (see the manifest's provenance) | `design/screenshots-manifest.md` |
| C16 | Weekly check-in, implied by "Check in at the end of the week" (Day 2 s7, editorial). Not claimed as a feature. | n/a | A check-in exists ("Make space to talk."). Day 2 doesn't name it as a Bonded feature, so nothing needs changing. | `app/checkin.tsx`. Screen 07. |

## Product features that the campaign does not mention

Only use these with fresh approval:
- **"Talk to Bonded" voice drafting.** AI turns what a parent says into draft jobs; the parent confirms. It is on the newest branch only.
- **The family-intent AI plan in onboarding.**
- **The paywall and subscription prices.** These are built but switched off by default (`app.json` billing flag).

The 2 Oct Instagram brief listed voice under "never market" because it was then a roadmap item. It is now built on the unmerged branch only, so treat it as not shipped.

## Operational promises (not product claims)
- **"Comment WAITLIST and we'll send you the link."** This needs a live comment-to-DM flow (ManyChat or equivalent). None is connected. See `ops/mcp-audit.md`.
- **"Waitlist link in bio" and "[link]".** There is no waitlist page yet (`ops/missing-assets.md`).

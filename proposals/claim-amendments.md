# Proposed amendments: locked copy that the current build doesn't support

**Status:** APPLIED on 10 Oct 2026. The owner approved every item as drafted, including the optional C6.1 (D-2026-10-10-3). Applied as Amendment 1, line by line in `campaign/CHANGELOG.md`. Where a line also had a US change, both were applied (for example C1.6 now reads "Trash on Tuesday"). C2.6 is on l.734, not l.736 as cited below.

**Why this exists.** On 9 Oct 2026 the owner asked for minimal, line-referenced amendments to be drafted for approval (`decisions/log.md`, D-2026-10-09-3). The evidence for each item is in `product/feature-claims.md`.

**How it was approved.** The owner approved all items at once on 10 Oct 2026. They were applied in one dedicated commit on PR #2, and the changelog states exactly which lines changed.

**Drafting rules:**
- Change as few words as possible.
- Keep the voice, rhythm and line length.
- No new CTAs, no sales words, no em dashes.
- Captions keep each platform's own wording.

For C1 and C2, each item also lists the **product alternative**: keep the copy and change the app instead. That is a product decision outside marketing.

---

## C1. "Family calendar" (no calendar exists)

The build has dated responsibilities (Today / Upcoming / Completed), experiences with dates, and per-person "own part" views. It has no calendar, no times and no events such as football or the dentist.

| # | Line / place | Current (locked) | Proposed |
|---|---|---|---|
| C1.1 | l.175 Day 0 slide 2, subheadline | "The family calendar, who's doing what, and something to look forward to, in one place everyone can see." | "The week's plan, who's doing what, and something to look forward to, in one place everyone can see." |
| C1.2 | l.175 Day 0 slide 2, image | "phone with the family calendar" | Phone with **04 Family ("Common ground.")**. It shows the family, "Next, together" Movie Night, the weekly check-in and "Everyone's part". No currency, no known bug. |
| C1.3 | l.197 Day 0 Facebook caption | "We're building a family app for sharing the week: the calendar, who's doing what, and the occasional extra…" | "We're building a family app for sharing the week: the plan, who's doing what, and the occasional extra…" |
| C1.4 | l.511 Day 7 Instagram caption | "So does a calendar the whole family can open, which is the part we're building into Bonded." | "So does a shared plan the whole family can open, which is the part we're building into Bonded." |
| C1.5 | l.521 Day 7 Facebook caption | "We're building Bonded so the whole family can see the same calendar wherever they are, and if that sounds useful, the waitlist is here: [link]" | "We're building Bonded so the whole family can see the same plan wherever they are, and if that sounds useful, the waitlist is here: [link]" |
| C1.6 | l.745 Day 12 slide 2, subheadline | "Football on Tuesday, dentist on Thursday, who's doing what. Then the family agrees an optional extra for the weekend: a trip to the climbing wall." | "Bins on Tuesday, laundry on Thursday, who's doing what. Then the family agrees an optional extra for the weekend: a trip to the climbing wall." (Real repeating responsibilities with days.) |
| C1.7 | l.745 Day 12 slide 2, image | "phone with the family calendar and the climbing wall trip set up as a family experience" | Phone with the **Upcoming responsibilities** and the **"Climbing wall trip" experience**, both from the Phase 2 capture |
| C1.8 | l.746 Day 12 slide 3, subheadline (second sentence) | "Nobody needs to ask who's driving to football." | "Nobody needs to ask whose turn it is." |
| C1.9 | l.33, 203, 525, 779 (internal brief text, not published) | "Shared calendar…", "shared family calendar" | "Shared plan and responsibilities", "the shared weekly plan of responsibilities" |

Day 3 ("Apparently, I'm the family calendar") is editorial and **makes no product claim**, so it needs no change. The same goes for the Day 7 slide and checklist.

**Product alternative.** Build a family calendar or week view (events with day and time, visible to all) before Day 0 on 18 Oct, and keep the copy. That isn't realistic in the time left, and it is outside marketing scope.

---

## C2. "Points are added when a parent approves" (the build credits points on tick-off)

The build credits personal points and family points when the child ticks the job off. Only money waits for a parent's approval. Only jobs that pay **family points** count toward a family experience.

| # | Line / place | Current (locked) | Proposed |
|---|---|---|---|
| C2.1 | l.748 Day 12 slide 5, headline | "Approved jobs add up." | "Family jobs add up." |
| C2.2 | l.748 Day 12 slide 5, subheadline | "When a parent approves a finished job, its points go toward the climbing wall. Everyone can see how close they are." | "Every family job that gets done adds points toward the climbing wall. Everyone can see how close they are." |
| C2.3 | l.750 Day 12 slide 7 (diagram note, not on-creative) | "filling left to right as jobs are approved" | "filling left to right as family jobs get done" |
| C2.4 | l.757 Day 12 Instagram caption | "Each job a parent approves adds points toward the trip, so by Thursday they can see how close they are." | "Each family job that gets done adds points toward the trip, so by Thursday they can see how close they are." |
| C2.5 | l.773 Day 12 Facebook caption | "Each job a parent approves adds points toward the trip, and the whole family can see how close they're getting." | "Each family job that gets done adds points toward the trip, and the whole family can see how close they're getting." |
| C2.6 | l.736 Day 12 concept (internal) | "approved jobs add points toward it" | "family jobs add points toward it" |

Day 11 needs **no copy change**. "It counts toward Saturday, too." is true. The video shows tick-off, then approval with a note, then progress. That order of shots is presentation, not a claim about what causes what.

**Product alternative.** Ship the open product decision "award XP on approval rather than on submission" (product repo `docs/launch-readiness/stress-test-and-architecture-plan.md:939`) and keep the copy as it is. That is a change to the native app and is not part of this marketing work.

---

## C5. "Emma has two things on her list. Leo has three." (demo data)

No copy change needed. The Phase 2 captures show Emma with exactly two jobs (61) and Leo with three (69), so the screens match the locked line.

---

## C6. Optional (minor)

| # | Line / place | Current (locked) | Proposed | Why |
|---|---|---|---|---|
| C6.1 | l.176 Day 0 slide 3 | "…and can ask for help, a break or a new time." | "…and can ask for help, a break or a new day." | Requests move the day; there are no times of day. "A new time" is defensible as plain speech, so this one is optional. |

---

## Not proposed, and why
- **Day 12 slide 4, "asks to swap bin night".** The reschedule request supports this wording (C7 in the register).
- **Day 0 slide 5, "Points unlock extras the family agrees on."** Parents create experiences. "Agrees" describes the family conversation and is accurate as a value statement (C4).

# Market priority and localization

Confirmed by the owner on 9 Oct 2026 (`decisions/log.md`, D-2026-10-09-6).

| Tier | Markets | Implication |
|---|---|---|
| **Tier 1** | United States | The primary analytics view. US posting windows. US English is proposed (`proposals/us-localization.md`). Tier 1 screens show USD (pending D2). |
| **Tier 2** | United Kingdom, English-speaking EU, Australia, New Zealand | Tracked as separate segments where the platform allows. Served by the same creative. |

## Audience
- **Who.** Parents of children aged about 4 to 18 who carry the household plan in their head (from the approved campaign).
- **Not children.** We never market directly to children. The product's store guidance agrees: parent-first, no Kids Category, no "for kids" wording (product repo `docs/launch-readiness/runbooks/ios-and-store-setup.md`).

## Timing
- **Internal timezone:** Europe/Podgorica. Buffer is set to it too.
- **Do not reuse Podgorica hours as US posting hours.** Starting windows to test once baseline data exists:
  - US Eastern early morning (06:30–08:30 ET)
  - US Eastern evening (19:00–21:00 ET)
  
  These are hypotheses, not benchmarks. Replace them with the account's own data from week 3.
- **Two times are fixed by the campaign:** Day 6 posts on Saturday between 8 and 9am, and Day 7 on Sunday afternoon. Read both in the Tier 1 local time.

## Localization
- The approved copy is in UK English. It stays locked until the owner approves changes.
- **Recommended:** a single US-English master, applied line by line once approved (`proposals/us-localization.md`).
- **Corrections to the PR #1 draft of this file:**
  - The inventory needs far more than "trainers, bins, hoover, pocket money". It also includes football, PE kit, mock exam, film out, maths, cutlery, tidy, rota, tea towel and cupboard.
  - "Trainers" appears only in an image note, never in published copy.

## Where Bonded appears in weeks 1–2

| Mix | Days |
|---|---|
| Editorial only | 1, 3, 4, 6, 8, 9, 13, 14 |
| Natural connection | 2, 5, 7, 10 |
| Product demonstration | 11, 12 |
| Waitlist CTA | Day 0 (pinned) and Days 2, 5, 7, 11, 12 |

- Day 10 mentions Bonded in its Instagram caption but deliberately has **no** waitlist CTA. The PR #1 draft left Day 10 out.
- Every "Comment WAITLIST" promise needs a verified comment-to-DM flow before it is published (D7).

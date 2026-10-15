# Decision log

Owner decisions taken in interactive, human-reviewed sessions. Newest first. Each entry records its scope and what it changes. A decision never silently rewrites the locked campaign copy.

## 15 Oct 2026 (Day 0 review)

| ID | Decision | Scope | Where applied |
|---|---|---|---|
| D-2026-10-15-8 | **Gaps in a day's media are filled from other folder photos.** That covers Day 7 (no photos) and the days with fewer than 4. The fills come from the unassigned files in `First_2W` and `social_images`, and the review shows which ones were chosen. | Days 1–14 | `proposals/messaging-v2.md` (Days 1–14). |
| D-2026-10-15-7 | **Days 1–14 all become 5–7 slide carousels on the arc,** including the six planned Reels. A video clip in a day's folder becomes a moving slide with the words on it on Instagram and Facebook. On TikTok (photo mode) it becomes a still frame from the clip. | Days 1–14 | `proposals/messaging-v2.md` (Days 1–14). Applied to the campaign as Amendment 3 after approval. |
| D-2026-10-15-6 | **Day 0 approved** as the third draft (6 photo slides and the plain waitlist slide, in plain words). | Day 0 | Amendment 2 in `campaign/CHANGELOG.md`. |
| D-2026-10-15-5 | **Plain words: write so an 8-year-old can understand it,** without writing like one. Short sentences, everyday words, real examples, and no idioms. The owner found the second draft "a bit too vague". | Every slide and caption | `proposals/messaging-v2.md` ("Plain words"), with a reading-grade check: 4 or lower on slides, 5 or lower on captions. |
| D-2026-10-15-4 | **About 80% of the slides in a post are photos as the whole background.** At most 2 slides per post are plain, and posts have 5 to 7 slides. Each post uses that day's photos from the Drive folder. | Every carousel | `proposals/messaging-v2.md` ("Photos and plain slides"). The renderer checks the share in a proposal post. |
| D-2026-10-15-1 | **Every post follows one arc:** the parent's problem, the feeling behind it, what to do, then Bonded and the waitlist. No feature talk. Some slides use a full photo background with text at clear contrast. The owner rejected the Day 0 messaging because it talked about features. | Every post in the campaign | `proposals/messaging-v2.md` (PROPOSED). The copy enters the campaign only as Amendment 2, after the owner approves it. |
| D-2026-10-15-2 | **Every post ends with Bonded and the waitlist.** This replaces the mix of 8 editorial-only posts, 4 natural connections and 2 product demonstrations. | Every post | `CLAUDE.md` ("The arc"). `proposals/messaging-v2.md`. |
| D-2026-10-15-3 | **The phone on the waitlist slide shows the in-app family name, without a "Demo family" caption.** It's still a real capture from `design/screenshots-manifest.md` (the seeded Miller Family). No copy may present the Millers as real users. Other app screens keep the label. | The waitlist slide of each post | `CLAUDE.md` ("Demo family"). `proposals/messaging-v2.md`. |

## 10 Oct 2026 (checkpoint review)

| ID | Decision | Scope | Where applied |
|---|---|---|---|
| D-2026-10-10-1 | **G1 approved.** The first creative checkpoint is approved as presented: the visual system and design choices 1–7 in `design/checkpoint-01/README.md`. The optional cover lockup (choice 8) was not taken up, so slides carry the handle only (D9 option a). | All further creative production | `design/checkpoint-01/`. Templates and rules reused by `tools/proofs/`. |
| D-2026-10-10-2 | **Canva route A: Canva Pro and a Brand Kit "BONDED"** (D11). The owner upgrades and sets up the Brand Kit; production then rebuilds the masters in Canva to match the proofs. | Canva production | `ops/mcp-audit.md`. The Phase 2 plan in PR #2. |
| D-2026-10-10-3 | **Claim amendments approved as drafted** (D4): C1.1–C1.9, C2.1–C2.6 and the optional C6.1. The product alternatives (build a calendar, award points on approval) are not pursued for this campaign. | Days 0, 7 and 12, plus internal brief lines | Amendment 1 in `campaign/CHANGELOG.md`. `proposals/claim-amendments.md` (APPLIED). |
| D-2026-10-10-4 | **One US-English master** (D3 option B), with every drafted line approved. Tier 2 markets see the same US wording. | All art, captions and video text | Amendment 1 in `campaign/CHANGELOG.md`. `proposals/us-localization.md` (APPLIED). Three further captions are proposed in `proposals/us-localization-addendum.md`. |
| D-2026-10-10-5 | **Light app screens with USD** (D1 option a, D2 option b). App images use the light captures from the local stack, with the family currency set to USD and US wording in the demo data. | Days 0, 5, 11 and 12 | `design/screenshots-manifest.md`. `tools/capture/`. |
| D-2026-10-10-6 | **Keep the dates: Day 0 on Sun 18 Oct, Day 1 on Mon 19 Oct 2026** (D5 option a). The launch blockers keep their due dates in `ops/production-status.csv`; any that slips is raised with the owner before the day it affects. | Scheduling | `CLAUDE.md`. `ops/production-status.csv`. |

## 9 Oct 2026 (Claude Code takeover session)

| ID | Decision | Scope | Where applied |
|---|---|---|---|
| D-2026-10-09-1 | **Brand system: "Full product identity."** Campaign graphics use Paper `#F5F2EA`, Ink `#222D33`, Hearth `#B94529` and Plus Jakarta Sans 400/600/800, with the official logo files only. This replaces the provisional palette (`#E8E6E2`, `#151515`, `#6E6E6E`, `#0F6B5C`) and Playfair Display + Poppins. | Visual tokens and type only. Copy, layouts, sizes and safe zones are unchanged. | `design/brand-reconciliation.md`. Corrections section of `design/designer-production-brief.md`. |
| D-2026-10-09-2 | **Missing screen states are captured locally.** The real app code of branch `claude/bonded-family-ai` runs against a throwaway local Supabase stack with a seeded Miller family. Production is never touched, and nothing is committed to the app repo. | Emma "Water the plants", approval with a note, a half-full "Climbing wall trip", Leo's reschedule request, and USD variants | `tools/capture/`. `design/screenshots-manifest.md`, "Captured additions". |
| D-2026-10-09-3 | **Claim conflicts get drafted amendments** for approval. The locked campaign file stays untouched until each line is approved. | The family calendar and points-on-approval claims (Days 0, 7 and 12) | `proposals/claim-amendments.md` (PROPOSED) |
| D-2026-10-09-4 | **Proceed without the identity case-study PDF.** The product repo's identity docs and original SVGs are the authority now. Anything only the PDF could confirm stays UNVERIFIED until it is uploaded. | Brand rules | `design/brand-identity.md` |
| D-2026-10-09-5 | **The native app code is not to be changed or merged for marketing purposes.** Marketing only cites product branches and commits, read-only. | Product repo `JFilip25/ciccho-Claude` | `CLAUDE.md` |
| D-2026-10-09-6 | **Target markets.** Tier 1 is the United States. Tier 2 is the United Kingdom, English-speaking EU, Australia and New Zealand. | Strategy, posting times, localization | `strategy/market-priority.md` |
| D-2026-10-09-7 | **The positioning stands:** "A family app for running the week together." Brand line: "Small contributions. More time together." Not simply a chore tracker. | Everything | `CLAUDE.md` |

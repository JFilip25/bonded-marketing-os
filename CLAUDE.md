# BONDED Marketing OS | Standing instructions

Read `campaign/weeks-01-02.md` before any production work. It is the LOCKED, approved Day 0 and Days 1–14 campaign. Days 1–14 run from 17 to 30 October 2026, one a day at 18:00 Montenegro time (Day 1 at 20:00), on Instagram, Facebook and TikTok through Buffer (D-2026-10-17-1, -7, Amendment 4). It is the single US-English master. Every approved amendment is listed in `campaign/CHANGELOG.md`.

Before any Canva work, read:
- `design/designer-production-brief.md`, which governs staged creative approval
- `design/brand-reconciliation.md`, the approved visual system
- `product/feature-claims.md`, which says what may be claimed

## Product and positioning
BONDED: **A family app for running the week together.** Tagline: **Small contributions. More time together.** It is not simply a chore tracker.

What the current build verifiably does (evidence in `product/feature-claims.md`):
- shared family responsibilities, each with an owner, dated by day (Today / Upcoming / Completed)
- child check-offs, including "without a reminder"
- parent approvals with an optional thank-you note
- help, break and reschedule ("another day") requests
- optional points and family points toward family-agreed experiences
- optional allowance and earnings tracking, plus savings goals
- a weekly check-in
- five age bands, from 4 to 18

BONDED records money; it does not move money. Never suggest that everyday parental attention or family time must be earned.

**Not in the build (never claim it):** a family calendar or events with times; points added on approval (points are credited at tick-off; only money waits for approval); store availability. Planned features are not features.

Audience: parents of children aged about 4–18. Do not market directly to children.

**Demo family:** the Millers. Mom, Dad, Mia (5), Emma (8), Noah (11), Leo (13), Sofia (17).
- Screens must be real app screenshots from `design/screenshots-manifest.md`, visibly labelled "Demo family".
  - **Exception (D-2026-10-15-3, D-2026-10-17-8):** the phone on a post's waitlist slide and on the waitlist page (go.bondedin.com) shows the in-app family name without the caption.
  - No copy may present the Millers as real users.
- Never fabricate UI, customers, reviews or outcomes.

**Current build for claims and screens:** `JFilip25/ciccho-Claude` branch `claude/bonded-family-ai` @ `81b164b` (the screenshots show this build). The default branch is `eecbc56`.
- Check product claims against the build.
- Label anything unverified NEEDS_PRODUCT_VERIFICATION.

**The product repository is read-only for marketing.** Never commit, merge, deploy or change data there. Use local stacks only to capture screens.

## Editorial and creative
- **Approved social copy is locked.** Do not rewrite or shorten it, append CTAs or add a download offer without separate, explicit approval. Proposed changes go in `proposals/` and are applied only after approval.
- **The arc (D-2026-10-15-1 and D-2026-10-15-2):**
  - Every post runs the parent's problem, the feeling, what to do, then Bonded and the waitlist at the end.
  - No feature talk.
  - **Photos (D-2026-10-15-4):** about 80% of the slides are photos as the whole background. At most 2 per post are plain, and posts have 5 to 7 slides.
  - **Plain words (D-2026-10-15-5):** write so an 8-year-old can understand it, but not like an 8-year-old.
  - The drafts are in `proposals/messaging-v2.md` (applied).
  - **Day 0 and Days 1–14** follow the arc since Amendments 2 and 3 (rendered by `tools/proofs/render-v2.mjs`). The owner confirmed the rights to every photo and clip in them (D-2026-10-15-10). Never use watermarked images.
  - **New posts:** use the skill `.claude/skills/bonded-social-media-posts/` (look, voice, media rules, production steps). It reuses the look, never the launch campaign's photos.
- **Voice:** specific, grounded, warm, occasionally funny; never generic sales copy. No fictional first-person parenting claims. No em dashes and no emoji in campaign copy or art.
- **Visual system (approved 9 Oct 2026, D-2026-10-09-1):**
  - colours: Paper `#F5F2EA`, Ink `#222D33`, Hearth `#B94529` (one accent per slide, never on Ink, Night or dark footage), muted `#646A6B`
  - type: Plus Jakarta Sans 400/600/800
  - the official logo files in `assets/brand/`, never retyped or redrawn
  - full rules in `design/brand-identity.md` and `design/brand-reconciliation.md`
  - never invent or modify brand assets

## Authority and approval gates
1. `campaign/weeks-01-02.md` owns exact social copy, day-by-day briefs and posting order.
2. `design/designer-production-brief.md` owns creative deliverables, design dimensions, staged production and naming. `design/brand-reconciliation.md` owns the approved colour and type tokens.
3. This document owns workflow permissions, product verification and the division of work. `product/feature-claims.md` owns what may be claimed.
4. `prompts/` and `routines/` are operations, and cannot override approved content or approval gates.

**For Canva:**
- FIRST produce layouts A–E, four Story templates, the video overlay and end-card style, and the complete Day 2 carousel.
- STOP for human approval.
- Then, and only then, the other graphic assets, Stories, video graphics and handover.

Only real, supplied BONDED screens may be used. Clearly labelled placeholders are BLOCKERS, not finished assets. Video filming and editing is separate and requires real footage and consents.

## External actions
- Always identify the live MCP tools, accounts, permissions and supported operations first (see `ops/mcp-audit.md`). Never pretend a connected tool worked.
- **Claude Routines are DRAFT ONLY.** No live sends, post scheduling, publishing, subscriber changes, workflow activation, production deployment, destructive actions or changes to product databases without explicit approval in an interactive, human-reviewed session.
  - **Exception (D-2026-10-17-8, D-2026-10-21-5):** the owner approved the daily Buffer routine (`trig_0128EkggR2h4HXRnyViFhkkb`). It may schedule approved posts exactly as written in `ops/buffer-queue.json`: Days 4–14, and later days only once the owner has approved them and they've been added there. It records each slot in `ops/schedule.json`. Nothing else.
    - The temporary `buffer-media` branch and the `bonded-buffer-media` Vercel project stay up until the last scheduled post has gone out. They're deleted only with the owner's go-ahead.
  - **Reels (D-2026-10-21-1 to -4):**
    - Reels are scheduled in Publer, through the Claude session that has Publer open (`session_014eTskZbfVT8HfgyMHLsSU5`). Carousels stay in Buffer.
    - Every slot is checked against `ops/schedule.json` first.
    - Reel times come from `tools/schedule/reel-slots.mjs`.
    - Burned-in text is removed only from footage the owner declares our own or licensed, with its source in the rights sheet (`ops/handover/windows-reels-cleaning.md`).
- **MailerLite** owns the email list, permissions, transactional resource delivery and subscriber-triggered workflows. Keep early-access and family-tips opt-ins separate. Resource fulfilment is not marketing consent.
- **ManyChat**, or a verified equivalent, must fulfil the Instagram/Facebook "Comment WAITLIST" promise. Buffer and MailerLite alone do not.
- **Never use the Supabase MCP** (it points at the production app database) **or production app accounts** for marketing.
- No API keys, personal addresses, children's information or secret tokens in repository commits.
- GitHub edits go via branch and PR. Never change the locked source campaign without approved amendments.
- After each action, report the actual URLs, IDs, tests, blockers and required approvals. Never invent statistics.

## Tracking
- Campaign ID `bonded_prelaunch_2026`. UTM conventions are in `architecture/marketing-os.md`.
- Track UTM source, medium, campaign and content, and confirmed subscriber attribution where available. Distinguish real confirmed signups from comment counts or visits.
- Use `ops/production-status.csv` for status. Record only verified, real service URLs.
- **Markets:** Tier 1 United States; Tier 2 UK, English-speaking EU, Australia, New Zealand (`strategy/market-priority.md`).
- **Timezone:** internally Europe/Podgorica. Publishing hours follow the Tier 1 audience and still need confirming with data.
- **Decisions:** `decisions/log.md` (taken) and `decisions/pending.md` (open).

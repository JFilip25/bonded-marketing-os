# BONDED Marketing OS | Standing instructions

Read `campaign/weeks-01-02.md` before any production work. It is the LOCKED, approved Day 0 and Days 1–14 campaign, planned for 18 October to 1 November 2026 (the date is still to be confirmed, `decisions/pending.md` D5).

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
- Never fabricate UI, customers, reviews or outcomes.

**Current build for claims and screens:** `JFilip25/ciccho-Claude` branch `claude/bonded-family-ai` @ `81b164b` (the screenshots show this build). The default branch is `eecbc56`.
- Check product claims against the build.
- Label anything unverified NEEDS_PRODUCT_VERIFICATION.

**The product repository is read-only for marketing.** Never commit, merge, deploy or change data there. Use local stacks only to capture screens.

## Editorial and creative
- **Approved social copy is locked.** Do not rewrite or shorten it, append CTAs or add a download offer without separate, explicit approval. Proposed changes go in `proposals/` and are applied only after approval.
- **The mix:** 8 editorial-only posts, 4 natural product connections and 2 product demonstrations, plus the pinned Day 0.
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

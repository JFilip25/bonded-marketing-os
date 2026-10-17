# BONDED Marketing OS: architecture and workflows

**Status:** DESIGN. Nothing in this file is live. Every external action listed here is a **draft** until the owner approves it in an interactive, human-reviewed session. Service states are in `ops/mcp-audit.md`.

## Roles

| Layer | Tool | Owns | Never does without approval |
|---|---|---|---|
| Intelligence and orchestration | **Claude Code** (interactive) + **Claude Routines** (scheduled cloud sessions) | Reading the source of truth, planning, drafting, QA, reports. Opens PRs in this repo. | Publish, schedule, send, activate, deploy, change subscribers |
| Design production | **Canva** | Templates, post designs, exports | n/a: designs stay drafts until approved; exports are files |
| Social publishing | **Buffer** | Drafts and ideas per channel, later the queue | Queue, schedule, publish, pin |
| Comment to DM | **ManyChat** (or a verified equivalent) | The "Comment WAITLIST" keyword DM with the waitlist link | Go live before an end-to-end test |
| Email | **MailerLite** | List, groups, fields, forms, double opt-in, subscriber-triggered automations (native), newsletters | Activate automations, send or schedule campaigns, import or delete subscribers |
| Acquisition | **https://bondedin.com** on Vercel (project `bondedin-waitlist`, source `site/bondedin/`, D-2026-10-17-6), with the MailerLite embedded form | Waitlist page, consent capture (double opt-in), UTM capture into hidden fields from the link | Going live and DNS changes (owner) |
| Source of truth | **This repo** | Locked campaign, brand, claims register, decisions, status and IDs | n/a |
| Product facts | `JFilip25/ciccho-Claude`, **read-only** | Feature evidence, brand files, screenshots (via local capture) | Any commit, merge or deploy (D-2026-10-09-5) |

## Authority order (as in CLAUDE.md)
1. `campaign/weeks-01-02.md`: exact copy, briefs and order. Locked.
2. `design/designer-production-brief.md` plus `design/brand-reconciliation.md`: deliverables, sizes, staged approval and the approved visual system.
3. `CLAUDE.md`: permissions, verification, division of work.
4. `product/feature-claims.md`: what may be claimed.
5. `prompts/` and `routines/`: operations. They can't override 1–4.

## Approval gates
- **G1, creative system.** Templates A–E, Stories, video styles and Day 2 are approved before any other production. Not yet approved.
- **G2, claims.** Amendments for conflicting claims are approved (D4) before Day 0, 7 and 12 creative is final.
- **G3, per-post creative.** Every post's final art and caption mapping is approved before any Buffer draft is marked ready.
- **G4, email.** Forms, double opt-in and the welcome flow are tested with test addresses. Then the owner activates or approves activation.
- **G5, go-live.** Handles, waitlist page, ManyChat, Buffer channels and the launch date (D5) are confirmed. Then the owner approves scheduling.

Routines may *check* gates and report. Only a human approves them. Approval evidence is a dated line in `decisions/log.md`, or an approving PR review by the owner.

## Workflows

### W1. Weekly campaign planning (Routine, Monday)
- **Reads:** the locked campaign, `ops/production-status.csv`, `decisions/pending.md`, last week's report.
- **Writes:** a PR with next week's production checklist and blockers. For weeks 3+ it writes **outline proposals only**; it never invents approved briefs.
- **Uses:** GitHub.

### W2. Canva production (interactive first; Routine only after G1)
1. Read the brief and the reconciliation doc.
2. Copy the approved Canva template.
3. Replace text with the exact approved strings.
4. Place real screenshots from `assets/screens/` (uploaded through `create-upload-url`).
5. Export the PNGs.
6. QA: dimensions, safe zones, exact copy, contrast.
7. Record the Canva URL in the tracker through a PR.

Anything that fails QA is marked BLOCKED with the reason.

### W3. Social post drafting (after G3 and the Buffer channels exist)
- One Buffer draft per platform per post, carrying that platform's **locked caption**: no additions and no CTA changes.
- Video posts stay BLOCKED until real footage exists.
- Day 0 is noted for pinning (pinning is manual, on platform).
- The Buffer post IDs go into the tracker.

### W4. Creative approvals (Routine, checks only)
- Lists Canva designs and Buffer drafts that are waiting for review, plus the open decisions.
- Posts one summary as a PR comment, or a file under `ops/approvals/`.
- Never marks anything approved.

### W5. MailerLite welcome journeys (native automations)
**Groups** (separate consents; resource fulfilment is not marketing consent):

| Group | Purpose |
|---|---|
| `BONDED_EARLY_ACCESS` | Launch and beta notices |
| `BONDED_FAMILY_TIPS` | The editorial newsletter, only on explicit opt-in |
| `BONDED_STARTER_PACK` | Resource delivery only, if a resource exists |

**Custom fields:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `signup_page`, `consent_tips` (yes/no), `consent_method`, `market_tier`. **No child data.**

**Form:** an embedded waitlist form (or an API call from the site), with double opt-in, an early-access checkbox and a separate optional "Family tips" checkbox.

**Automations, built inactive:**
- Trigger "joins `BONDED_EARLY_ACCESS`": welcome email, what to expect, no sales pressure.
- Trigger "joins `BONDED_FAMILY_TIPS`": a tips welcome.

**Testing:** `dry_run_automation` and `send_test_automation` to owner-approved test addresses. The owner enables them (G4).

### W6. Weekly newsletter preparation (Routine, Wednesday)
- One editorial email draft for `BONDED_FAMILY_TIPS` only, based on the week's theme. It is not a copied caption, and no product claim is allowed unless it is VERIFIED.
- Saved as a MailerLite **draft** campaign, with a Markdown copy in `newsletter/YYYY-MM-DD.md`.
- `validate_email_content` and `validate_subject_lines` are run. It is never scheduled or sent.

### W7. Analytics and growth reporting (Routine, Monday)
- **Pulls:** Buffer aggregated metrics; MailerLite confirmed (active) subscriber counts by group and by `utm_source` / `utm_content`; ManyChat DM counts (manual until connected); site analytics once they exist.
- **Reports:** a Markdown file in `reports/` via PR.
- **Distinguishes:**
  - confirmed signups vs unconfirmed
  - comments vs DMs vs visits
  - Tier 1 (US) vs Tier 2
- Never invents numbers, and marks every missing source.

## Tracking conventions
- **Campaign ID:** `bonded_prelaunch_2026`.
- **UTM:**

  | Parameter | Values |
  |---|---|
  | `utm_source` | instagram, facebook, tiktok |
  | `utm_medium` | social_organic, bio, dm, story |
  | `utm_campaign` | bonded_prelaunch_2026 |
  | `utm_content` | `d00`…`d14`, with a suffix such as `_cap` or `_story`; `dm_comment` and `dm_keyword` for the ManyChat WAITLIST DM, which can't tell which post was commented on (`ops/manychat-waitlist.md`) |
- **No personal data in URLs.**
- **A conversion is a confirmed** (double opt-in) **subscriber** in `BONDED_EARLY_ACCESS`. Comments, DMs and clicks are funnel steps, not conversions.

## Routine safety
- Each Routine prompt starts with "DRAFT ONLY" and lists the forbidden operations. Examples: MailerLite `schedule_campaign`, enabling an automation or deleting a subscriber; Buffer queue or scheduled posts; any deploy.
- Routines get only the connectors they need: W1 and W4 get GitHub; W2 gets GitHub and Canva; W6 gets GitHub and MailerLite; W7 gets GitHub, Buffer and MailerLite.
- Routines are created only after the matching manual workflow has passed once in an interactive session (README setup order).

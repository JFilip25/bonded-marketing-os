# BONDED Marketing OS

Private operating repository for the three-month prelaunch campaign.

**Who does what:**
- **Claude Code** coordinates editorial production, Canva drafts, Buffer social drafts and MailerLite newsletter and waitlist work.
- **Native MailerLite automations** handle subscriber-triggered emails.
- **Claude Routines** prepare work; they never send or publish it.

The architecture is in `architecture/marketing-os.md`.

## Source of truth and hierarchy

| Path | What it is |
|---|---|
| `campaign/weeks-01-02.md` | **LOCKED.** Day 0 and Days 1–14 copy for all platforms, plus the Stories and the original visual rules. |
| `design/designer-production-brief.md` | Production specification and the FIRST approval gate. Has a dated Corrections section. |
| `design/brand-identity.md` | Verified BONDED identity rules, from the original files |
| `design/brand-reconciliation.md` | The approved campaign visual system (Paper/Ink/Hearth, Plus Jakarta Sans, official logo files) |
| `design/common-room-philosophy.md` | The owner's design philosophy, verbatim |
| `design/screenshots-manifest.md` | Verified inventory of real app screens and the per-day mapping |
| `product/feature-claims.md` | What the build does and does not do. Every claim is checked here. |
| `proposals/` | Proposed copy changes (claim amendments, US localization). **Not applied until approved.** |
| `decisions/` | `log.md` (decided), `pending.md` (open) |
| `strategy/market-priority.md` | Tier 1 US; Tier 2 UK, EU-EN, AU, NZ |
| `assets/` | Byte-identical brand files, fonts (OFL) and screenshots, with checksums in `assets/CHECKSUMS.sha256` |
| `CLAUDE.md` | Standing rules and guardrails |
| `prompts/` | Sequential interactive runbooks |
| `routines/` | Drafts for scheduled Claude Routines (draft-only work) |
| `ops/` | Status tracker, QA checklist, missing inputs, MCP audit, notes for the app team |
| `roadmap.md` | Next steps and gates |

## Setup order
1. Read `CLAUDE.md`, the locked campaign, the brief, the brand files and the claims register.
2. Run `prompts/01-audit-connectors.md`. The 9 Oct results are in `ops/mcp-audit.md`; re-run it whenever connectors change. Do not assume local MCP access means cloud Routine access.
3. Run `prompts/04-canva-production.md`: **design system plus Day 2 only, then stop for approval.**
4. Once approved, finish the graphics, Stories and video overlays.
5. Decide the website repo and domain (D6), then run `prompts/03-website-landing-page.md` (preview only).
6. Run `prompts/02-mailerlite-foundation.md`. Keep the welcome workflows inactive until tested.
7. Connect Buffer channels, then run `prompts/05-buffer-drafts.md` (drafts only).
8. Configure and verify the WAITLIST comment-to-DM flow (ManyChat), separately.
9. Run `prompts/06-end-to-end-test.md` with authorised test accounts.
10. Create the cloud Routines from `routines/` only after the manual workflows pass.

## Planned calendar
- Pinned Day 0: Sunday 18 Oct 2026.
- Day 1: Monday 19 Oct 2026.
- Day 14: Sunday 1 Nov 2026.

The launch date is still to be confirmed (D5). The campaign starts Day 1 "once the waitlist page is live".

## Note on deliverables
This repo holds planning, instructions, verified brand files and real demo screenshots. It does **not** yet hold finished Canva graphics, real family video or connected MailerLite forms. Never report those as complete without verification.

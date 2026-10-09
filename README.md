# BONDED Marketing OS

Private operating repository for the three-month prelaunch campaign. Claude Code coordinates editorial production, Canva drafts, Buffer social drafts and MailerLite newsletter/waitlist work. Native MailerLite automations handle subscriber-triggered emails; Claude Routines prepare work, not send it.

## Approved source and hierarchy
- `campaign/weeks-01-02.md`: LOCKED Day 0 and Days 1-14 copy, all platforms, Stories, visual rules.
- `design/designer-production-brief.md`: exact graphic production specification and FIRST approval gate.
- `CLAUDE.md`: operational guardrails and accurate product positioning.
- `prompts/`: sequential interactive setup.
- `routines/`: scheduled Claude cloud routine instructions, draft-only.
- `ops/`: status, checks and missing-assets registry.

## Setup order
1. Read `CLAUDE.md`, source campaign and design brief.
2. Run `prompts/01-audit-connectors.md` in Claude Code. Verify GitHub, Canva, MailerLite, Buffer and the actual accounts. Do not assume local MCP means cloud Routine MCP access.
3. Run `prompts/02-mailerlite-foundation.md`; keep welcome/confirmed-subscription workflows inactive until tested.
4. Run `prompts/03-website-landing-page.md` in the correct BONDED website repository once identified.
5. Run `prompts/04-canva-production.md`: **design system + Day 2 only, stop for approval**.
6. Upon approval, finish graphics, Stories and video overlays.
7. Run `prompts/05-buffer-drafts.md`; prepare drafts only.
8. Configure and verify WAITLIST comment-to-DM flow independently (e.g. ManyChat).
9. Run `prompts/06-end-to-end-test.md` with authorized test accounts.
10. Create cloud Routines from `routines/` only after the manual workflows pass.

## Planned calendar
Pinned Day 0 Sunday 18 Oct 2026; Day 1 Monday 19 Oct 2026; Day 14 Sunday 1 Nov 2026. Confirm this launch date and target geography before any scheduling.

## Note on deliverables
This repo contains planning and instructions, **not** already-created Canva graphics, customer screenshots, real family video or connected MailerLite forms. Never report those as complete without verification.


## New supplied sources (9 October 2026)
Official source-brand and screenshot inventory available in `design/official-brand-source.md` and `design/screenshots-manifest.md`. Tier 1 US / Tier 2 UK, English-speaking EU, Australia and NZ targeting in `strategy/market-priority.md`. Source assets live in the linked BONDED app repo, while 42 full-resolution screenshots and the 37-page brand PDF still require a transfer to a Claude-accessible asset location (see `ops/assets-and-import.md`). All additions are being reviewed in a separate PR; approved social campaign is unchanged.

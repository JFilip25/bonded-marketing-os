# Decision log

Owner decisions taken in interactive, human-reviewed sessions. Newest first. Each entry records its scope and what it changes. A decision never silently rewrites the locked campaign copy.

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

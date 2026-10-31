# Notes for the app team (from the marketing audit, 9 Oct 2026)

These are observations only. **Marketing does not change, merge or deploy native app code** (`decisions/log.md`, D-2026-10-09-5). Each item is for the app team to decide.

| # | Observation | Evidence | Marketing impact |
|---|---|---|---|
| P1 | "Family contribution" is printed twice on family-contribution rows | Supplied screens 01, 02, 06 and 40 | Crops avoid these rows until it is fixed |
| P2 | The section heading "pending" is lowercase on the 13–15 Today screen | Screen 40 | Crop above it |
| P3 | Parent Rewards lists "Mia · €0.00 to pay out" for a 5-year-old, although money is hidden for ages 4–6 elsewhere | Screen 03 | Avoid screen 03 for parent money |
| P4 | Points (XP and family points) are credited when a child ticks a job off, not on approval. The app's own copy says "Rewards stay pending until a parent approves." That is true for money only. | `src/theme/copy.ts:653` ("Rewards stay pending…"), action SQL (`20261007123239_family_intent_closed.sql:388–404`). Open decision at `stress-test-and-architecture-plan.md:939`. | Day 12 copy conflict (`proposals/claim-amendments.md` C2) |
| P5 | Some form labels hard-code "€" whatever the family's currency: "Target (€)", "Amount (€) per week", "Amount (€)" | `src/theme/copy.ts:751,788,1141` | Avoid those forms in USD captures |
| P6 | The screenshots come from the unmerged branch `claude/bonded-family-ai` (81b164b). The default branch is `eecbc56`. | `git log` | Marketing cites 81b164b as "the build these screens show". Merging is the app team's call. |
| P7 | Earlier chat sessions contained a pasted access token, a Vercel token and a webhook secret | Session transcripts (2 to 9 Oct) | Revoke or rotate them. Not stored in either repo by this audit. |
| P8 | The product README still lists public demo-account credentials, though the demo accounts were reportedly deleted on 8 Oct | Product repo `README.md:27-30` | Remove the stale credentials. Marketing never uses production accounts. |

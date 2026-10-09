# Routine - Monday BONDED growth review
Schedule proposal: Monday 09:07 Europe/Podgorica. Connectors: GitHub, Buffer, MailerLite, plus analytics once verified (`ops/mcp-audit.md`).

[Safety header from routines/README.md]

1. Read `CLAUDE.md`, the campaign, `ops/production-status.csv` and the previous report.
2. Fetch REAL data:
   - MailerLite **confirmed** (active) subscribers by group and by `utm_source` / `utm_content`
   - unconfirmed counts, kept separate
   - Buffer aggregated post metrics per channel
   - site analytics, when available
   - ManyChat DM counts, only if supplied
3. Separate Tier 1 (US) from Tier 2 where the data allows. Compute conversion rates only where a real denominator exists. Never present views or comments as conversions.
4. Write `reports/YYYY-MM-DD-growth.md` with evidence links, recommendations for future creative briefs and a list of missing sources. Open a PR.
5. Never modify campaigns, subscribers or posts.

# 01 - Read-only connection audit

**Last run:** 9 Oct 2026. The results are in `ops/mcp-audit.md`. Re-run whenever connectors, accounts or plans change, and before creating any Routine.

Read `CLAUDE.md`, the complete `campaign/weeks-01-02.md`, `design/designer-production-brief.md`, `ops/missing-assets.md` and `ops/mcp-audit.md`. Then:

1. Confirm which GitHub, Canva, Buffer and MailerLite MCP actions this session has. Confirm separately which ones a **Cloud Routine** would have; that depends on the connectors chosen when the Routine is created.
2. Check permissions and account IDs for each.
3. Check Canva support for custom page sizes, font family and letter spacing, uploads (`create-upload-url`) and transparent PNG export.
4. Check MailerLite groups, fields, forms and automations, and the dry-run and test-send support.
5. Check Buffer channels, plan limits, drafts, ideas and reporting.
6. Identify the BONDED website repository and domain **only from verified sources**, otherwise mark them missing (D6).
7. Verify the campaign dates with the owner before any scheduling (D5).

Update `ops/mcp-audit.md` through a PR. This audit is read-only: no external changes.

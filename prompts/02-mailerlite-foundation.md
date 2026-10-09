# 02 - MailerLite prelaunch foundation (drafts, inactive)

**State on 9 Oct 2026:** the MailerLite account is connected (prod) and **empty**. No groups, forms, automations or campaigns; only the default fields.

Read `CLAUDE.md`, `architecture/marketing-os.md` (W5) and `ops/mcp-audit.md`. Use only verified MailerLite MCP capabilities.

1. **Groups.** Create, or reuse if they exist:
   - `BONDED_EARLY_ACCESS`: launch and beta notices
   - `BONDED_FAMILY_TIPS`: the editorial newsletter, explicit opt-in only
   - `BONDED_STARTER_PACK`: resource delivery only. This is **not** marketing consent; create it only if a real resource exists.
2. **Fields:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `signup_page`, `consent_tips`, `consent_method`, `market_tier`. **No child data.**
3. **Form.** A draft embedded waitlist form with double opt-in, a separate optional family-tips checkbox, and privacy text (the owner supplies the final wording).
4. **Automations, built INACTIVE:** the early-access welcome and the family-tips welcome. Draft the copy in the campaign voice, with no sales pressure and no product claims beyond VERIFIED rows in `product/feature-claims.md`.
5. **Validation:**
   - `validate_email_content` and `validate_subject_lines`
   - `dry_run_automation`
   - `send_test_automation` **only to test addresses the owner has approved in this session**
6. **Sender domain, SPF/DKIM and the double opt-in setting** can't be read through MCP. List them for the owner to check in the MailerLite UI.

If a promised PDF or asset doesn't exist, use a placeholder and **do not** claim it was delivered.

Never import or contact real subscribers. Never enable automations or schedule or send campaigns. Return the exact draft IDs and URLs, the capability limits and the approval steps (gate G4).

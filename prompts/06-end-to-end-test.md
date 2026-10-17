# 06 - End-to-end BONDED prelaunch QA

Inspect:
- the campaign source (check its checksum per `ops/qa-checklist.md`)
- `product/feature-claims.md`
- the MailerLite forms and draft workflows
- the BONDED preview site
- the Canva designs and Buffer drafts
- the WAITLIST comment-to-DM flow

Test **only** with explicitly authorised test data. Verify:
- email confirmation (double opt-in)
- resource delivery without newsletter opt-in
- unsubscribe
- separate early-access and family-tips consent
- no child data
- real, attributed UTM traffic
- a documented privacy notice
- the approved Day 2 design system
- D00, D11 and D12 authentic demo screens, with every claim VERIFIED or approved-amended
- 46 static frames, 14 Story sets and six video overlay packages, with unfinished videos blocked
- visual safe zones, copy, account and channel identity, and platform-specific caption exactness

Report PASS / FAIL / NEEDS_HUMAN_CHECK with evidence URLs. No production deployment, live emails, live social activity or activation.

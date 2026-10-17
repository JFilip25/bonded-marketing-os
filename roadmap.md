# Execution roadmap

**Status:** 9 Oct 2026. Day 0 is planned for Sun 18 Oct 2026; the launch date is still to be confirmed (D5). Each step names its gate. Nothing external goes live without the owner's approval.

## Now: corrected source of truth (this PR)
- [x] Audit the repo and PR #1, and check them against the original files and the app code
- [x] Verify the identity rules, screenshot inventory and claims register
- [x] Record decisions D-2026-10-09-1…7. List the pending decisions D1–D10.
- [ ] Owner: review the PR, then close PR #1 as superseded

## Step 1: first Canva checkpoint (gate G1)
1. Canva capability spike: page sizes, fonts, uploads, transparent export.
2. Layouts A–E, four Story templates, video text styles and the Day 11 end card, and the seven-slide Day 2 carousel.
3. QA: dimensions, safe zones, exact copy, contrast.
4. **STOP. The owner approves or requests changes.**

## Step 2: missing app screens (in parallel with Step 1)
1. Capture on a local stack from `claude/bonded-family-ai`:
   - Emma's "Water the plants"
   - the approval queue with a note
   - "Climbing wall trip" in progress
   - Leo's request
   - USD variants
2. The owner reviews the captures, then decides D1 (light or dark) and D2 (USD or EUR).

## Step 3: decisions that unblock production
- D4: claim amendments
- D3: US localization
- D10: claim handles
- D6: website repo and domain
- D7: ManyChat
- D8: Buffer plan
- D5: launch date

## Step 4: full creative (after G1, and G2 where it applies)
- Day 0, then Days 3, 5, 7, 8, 10, 12 and 14 static art: 46 feed frames in total.
- 14 Story sets, plus the About highlight cover.
- Transparent overlay PNG sets for the six videos and the Day 11 end card.
- Grid preview once real video covers exist.

## Step 5: acquisition stack (gate G4)
1. **Website.** New repo, preview deployment only, with:
   - early-access signup
   - a separate family-tips opt-in
   - privacy notice
   - UTM capture
   - a server-side MailerLite call
2. **MailerLite:**
   - groups, fields and the form
   - sender domain (SPF/DKIM) in the UI
   - double opt-in
   - welcome automations built **inactive**
   - dry run and test sends to approved test addresses
3. **ManyChat.** A WAITLIST keyword flow on Instagram and Facebook, tested end to end.
4. **The owner approves:** the production deploy, then automation activation.

## Step 6: social drafting (gate G3)
- Connect Instagram (Business/Creator), Facebook Page and TikTok in Buffer.
- Create Buffer drafts with the locked platform captions and approved media.
- Video posts stay blocked until footage and consents exist.

## Step 7: automation (after Steps 5 and 6 pass manually)
Create the Routines from `routines/`, all draft-only. Each has the minimum connectors and is verified on its first run:

| Day | Routines |
|---|---|
| Monday | Weekly planning, growth report |
| Tuesday | Production check |
| Wednesday | Newsletter draft |
| Daily | Approval digest (optional) |

## Step 8: go-live (gate G5)
1. **Final checks:** handles, waitlist page, ManyChat, Buffer channels, approved assets and launch date.
2. **The owner approves scheduling.**
3. **Day 0:** pin manually.
4. **Daily from Day 1:** monitor.
5. **Every Sunday:** a 15-minute review, as in the campaign.

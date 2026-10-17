# ManyChat: the WAITLIST automation

**Status, 17 Oct 2026:** the owner reports ManyChat set up. ManyChat has no connector in this workspace, so Claude can't check it. The owner points every button at https://go.bondedin.com (D-2026-10-17-8), which is live. The UTM links are in `ops/waitlist-mailerlite-setup.md`, step 5. The words it sends are PROPOSED in `proposals/manychat-waitlist-copy.md` and need approval first.

**Why it's needed.** Every Instagram caption in weeks 1 and 2 ends "Comment WAITLIST and we'll send you the link." (Amendments 2 and 3). Without this automation, that promise is broken on every post. Buffer and MailerLite can't send Instagram DMs (`CLAUDE.md`).

**Blocked by:**
- **The waitlist page:** https://go.bondedin.com, live since 17 Oct (`ops/waitlist-mailerlite-setup.md`).
- **Approval of the proposed words.**

## Before you start

- [ ] Instagram `@bondedspace` is a **professional** account (Business or Creator) linked to the Facebook Page **Get Bonded**.
- [ ] In Instagram, turn on **Settings → Messages and story replies → Message controls → Connected tools → Allow access to messages**. Without it, no tool can send DMs.
- [ ] A ManyChat account connected to Instagram `@bondedspace` (and to the Facebook Page, if you want Automation 3).
- [ ] **A ManyChat plan that covers this.**
  - You need 2 keyword automations, about 2 to 3 if you add Facebook.
  - Every person who comments counts as a ManyChat contact.
  - ManyChat changed its plans in March 2026, and third-party sources disagree on the free tier's limits. Check the current limits on ManyChat's Billing page before relying on the free plan.
- [ ] The waitlist page URL (D6).

## Automation 1: comment WAITLIST on any post (the one that matters)

| Setting | Value |
|---|---|
| Channel | Instagram |
| Trigger | User comments on your **post or reel**, set to **any post or reel** (so it covers all 15 posts and anything later) |
| Keywords | Comment **contains** `WAITLIST`. Add `waitlist`, `Waitlist`, `wait list` and `waiting list` if ManyChat's matching is case-sensitive in your account. |
| Public reply | Optional, on. Rotate the three replies in the proposal. |
| Direct message | **One message**: the proposed text plus one URL button "Join the waitlist". |
| Button link | `<waitlist URL>?utm_source=instagram&utm_medium=dm&utm_campaign=bonded_prelaunch_2026&utm_content=dm_comment` |
| Tag | `waitlist_link_sent` |
| Nothing else | No follow-up messages, no questions, no email capture |

**Meta's rules** (they apply to every tool, not just ManyChat):
- **Only one message.** A comment allows one private reply, sent within 7 days of the comment. So the link goes in that first message. Don't make people tap a button to get a second message.
- **Repeat comments don't fire.** The same person commenting the keyword again on the same post doesn't get the DM again.
- **Message requests.** People who don't follow `@bondedspace` get the DM in their message requests. That's why the public replies mention it.
- **Test from another account.** Your own comments don't fire the automation.

## Automation 2: DM WAITLIST

| Setting | Value |
|---|---|
| Channel | Instagram |
| Trigger | A direct message that **contains** `WAITLIST` (same variants) |
| Reply | The same message and button, with `utm_content=dm_keyword` |
| Tag | `waitlist_link_sent` |

People often DM the word instead of commenting it.

## Optional

- **Automation 3, Facebook comments.** The same comment trigger on the Get Bonded Page, with `utm_source=facebook`. Since Amendment 4 (D-2026-10-17-2) the Facebook captions of Days 1 to 14 also end "Comment WAITLIST and we'll send you the link.", so this is no longer only a backup: without it, the owner answers every Facebook comment by hand.
- **TikTok:** nothing. Its captions say "Waitlist link in bio", so the bio link does the job.

## What ManyChat must not do

- **No sign-up inside the DM.** It doesn't ask for an email, a name or anything about children. Sign-up and consent happen on the waitlist page, with MailerLite double opt-in, `BONDED_EARLY_ACCESS` and a separate optional `BONDED_FAMILY_TIPS` (`architecture/marketing-os.md`).
- **No broadcasts or sequences.**
- **No AI replies.**
- **Never list anyone** as a waitlist sign-up because they commented. Only a confirmed MailerLite subscriber counts.

## Test before Day 0 (18 Oct)

From a second Instagram account, on a test post or the pinned Day 0 post before it goes public:
1. Comment `waitlist`. The public reply appears, and the DM arrives (check message requests too).
2. Tap "Join the waitlist". The page opens with all four `utm_*` values in the URL.
3. Sign up with an owner-approved test address. The subscriber reaches MailerLite unconfirmed, with the `utm_*` fields. After the double opt-in it is confirmed in `BONDED_EARLY_ACCESS`.
4. Comment `WAITLIST` again on the same post. No second DM arrives.
5. DM `WAITLIST`. The same message arrives, with `utm_content=dm_keyword`.

Tick "Comment WAITLIST really sends the link" in `ops/qa-checklist.md` and note the date, the test account and the result. Never record a test as passed without doing it.

## Weekly numbers

The Monday review (`routines/monday-growth-review.md`) gets these by hand from ManyChat until it is connected:
- DMs sent
- unique contacts tagged `waitlist_link_sent`
- button clicks, if ManyChat shows them

Sign-ups come only from MailerLite confirmed subscribers, split by `utm_content` (`dm_comment`, `dm_keyword`).

**Why one tracking value for all posts.** A single "any post" trigger can't tell which post someone commented on, so every comment DM shares `utm_content=dm_comment`. If per-post numbers matter later, make one trigger per post with `utm_content=dNN_dm` instead.

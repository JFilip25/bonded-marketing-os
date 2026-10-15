# ManyChat WAITLIST messages (PROPOSED)

**Status: PROPOSED, 15 Oct 2026.** These are new words, so they need the owner's approval before they go into ManyChat. The build steps are in `ops/manychat-waitlist.md`.

**Why they're needed.** Every Instagram caption in weeks 1 and 2 ends "Comment WAITLIST and we'll send you the link." (Amendments 2 and 3). ManyChat keeps that promise with one direct message, and optionally a short public reply under the comment.

**Rules they follow:**
- the voice and plain-word rules (`.claude/skills/bonded-social-media-posts/`)
- no feature talk
- no em dashes or emoji
- no request for an email or anything about children: the waitlist page and MailerLite handle sign-up and consent

## 1. The direct message

Sent once, to anyone who comments WAITLIST on a post or reel, or sends WAITLIST by DM.

> Here's the link to the Bonded waitlist. Join, and we'll tell you as soon as the app is ready for iPhone and Android.

**Button** (a URL button under the message): "Join the waitlist"

**Link behind the button:**
- after a comment: `<waitlist page URL>?utm_source=instagram&utm_medium=dm&utm_campaign=bonded_prelaunch_2026&utm_content=dm_comment`
- after a DM: the same, with `utm_content=dm_keyword`

The waitlist page URL doesn't exist yet (D6).

## 2. Public replies under the comment (optional)

ManyChat picks one at random, so the replies don't all look the same:
1. "Sent! Check your messages. If it's not there, look in your message requests."
2. "Just sent you the link. It might be in your message requests."
3. "Done. The link is in your messages."

**Why mention message requests.** Instagram puts DMs from accounts someone doesn't follow into their message requests.

## Reading grade

| Text | Grade |
|---|---|
| Direct message | 2.7 |
| Button | 1.3 |
| Reply 1 | 0.6 |
| Reply 2 | 0.5 |
| Reply 3 | -0.7 |

The limit is 4 (D-2026-10-15-5).

## Claim check

- "we'll tell you as soon as the app is ready" is the waitlist's own promise. It needs the early-access email when the app launches (MailerLite early-access group, `architecture/marketing-os.md`).
- Nothing else is claimed. There is no launch date and no store availability.

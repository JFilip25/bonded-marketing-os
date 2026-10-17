# Waitlist page and emails (PROPOSED)

**Status: PROPOSED, 17 Oct 2026.** These are new words, so they need the owner's approval before they go into MailerLite. The build steps are in `ops/waitlist-mailerlite-setup.md`.

**Where they go.** The ManyChat DM button, the bio links and the Facebook replies all open one MailerLite landing page (D-2026-10-17-5). Someone types their email, confirms it from their inbox, and is then on the waitlist (`BONDED_EARLY_ACCESS`). Only a confirmed subscriber counts as a sign-up (`architecture/marketing-os.md`).

**Rules they follow:**
- the voice and plain-word rules (`.claude/skills/bonded-social-media-posts/`)
- the only line about Bonded is the approved positioning line
- no feature talk, no launch date, no store availability
- no em dashes or emoji
- email only: no name, and nothing about children

## 1. The page

**Headline:** Join the Bonded waitlist.

**Sub:** Bonded is a family organizer that helps you plan the chores and work toward the experiences your whole family picks together. It's coming to iPhone and Android. Leave your email, and we'll tell you when it's ready.

(The owner's wording, 17 Oct, D-2026-10-17-9. The posts keep the campaign line, "an app that helps your whole family plan the week and share the jobs".)

**Form:**
- Email field, required. Label: "Your email"
- Checkbox, optional, **not ticked** by default: "Also send me family tips now and then. You can stop them any time."
- Button: "Join the waitlist"
- Small print under the button: "We'll only use your email to tell you about Bonded. Every email has a link to leave." Then a link, "See how we use your email.", to section 5.

## 2. After they press the button (the thank-you message)

> **Almost done.** Check your email and tap the button to confirm. If you can't find it, look in your spam or promotions folder.

**If sending fails** (shown under the button):
> That didn't work. Please check your email address and try again.

## 3. The confirmation email (double opt-in)

**Subject:** Please confirm your email

**Body:**
> Tap the button to join the Bonded waitlist.
>
> [Button: Yes, add me]
>
> If you didn't ask to join, you can ignore this email. We won't add you.

## 4. After they confirm (the confirmed page)

> **You're on the list.**
> We'll email you as soon as Bonded is ready for iPhone and Android. Until then, you can find us on Instagram at @bondedspace.

## 5. How we use your email (privacy notice)

**For the owner to check, ideally with the lawyer named in the app's legal runbook.** This isn't legal advice. The app's privacy link (`ciccho.app/privacy`) is still a placeholder, so this short notice sits on the waitlist page itself. The contact address is go@bondedin.com, and the last line is the owner's own (17 Oct, D-2026-10-17-8).

> **How we use your email**
>
> We ask for your email address. If you tick the box, we also note that you want family tips. We only add you after you confirm by email.
>
> We use your email to tell you about Bonded, and to send family tips if you asked for them. Our email service, MailerLite, keeps your email for us. We never sell it or give it to anyone else.
>
> Every email has a link to leave. To have your email deleted, write to us at go@bondedin.com. We keep your email until you leave or ask us to delete it.
>
> © 2026 Bonded. All rights reserved. go@bondedin.com

## 6. Welcome email (optional, later)

Sent once, when someone confirms. It's built **inactive**, and the owner turns it on (G4). The confirmed page already says the same thing, so it can wait.

**Subject:** You're on the Bonded waitlist

**Body:**
> Thanks for joining. Bonded is an app that helps your whole family plan the week and share the jobs. We're building it now, and it's coming to iPhone and Android. We'll email you when it's ready.

## Reading grade

Scored with `.claude/skills/bonded-social-media-posts/scripts/reading_grade.py` (caption limit 5):

| Text | Grade |
|---|---|
| Page headline and sub | 2.7 |
| Form, checkbox, button, small print | 1.9 |
| Thank-you message | 2.8 |
| Error message | 1.6 |
| Confirmation email | 0.9 |
| Confirmed page | 3.7 |
| Privacy notice | 3.8 |
| Welcome email | 2.6 |

## Claim check

- "we'll tell you when it's ready" is the waitlist's own promise. It needs the early-access email at launch.
- "coming to iPhone and Android" is the approved positioning line. There is no date and no store link.
- "We never sell it or give it to anyone else" has to stay true. MailerLite stores the data as a processor, so it's named.

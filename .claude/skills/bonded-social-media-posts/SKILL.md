---
name: bonded-social-media-posts
description: Writes, designs and checks BONDED social media posts (Instagram and Facebook carousels, TikTok photo posts) in the owner-approved look and voice. Every post runs the parent's problem, the feeling, what to do, then Bonded and the waitlist; most slides are full-photo with Paper text on an Ink gradient; the words are plain enough for an 8-year-old to follow. Use for any new BONDED post, carousel, caption, post idea or content plan, for briefing a designer, or for checking a draft post against the rules. It sets how posts look and talk; it never reuses the launch campaign's photos.
---

# BONDED social media posts

This is how BONDED posts look and talk. The owner approved the pattern on 15 October 2026 (Day 0, then Days 1 to 14 of the launch campaign) and asked for it to be reused for every future post.

Use it for the **look and the voice only**. Every new post gets **new photos and videos from the owner**. Never reuse the files from the launch campaign folder (`First_2W`) or the slides made from them.

## Authority

This skill is an operating guide. It never overrides, in this order:
1. `CLAUDE.md` (product truth, approval gates, external actions)
2. `campaign/weeks-01-02.md` (the locked, approved campaign) and its amendments
3. `product/feature-claims.md` (what may be claimed)
4. `design/brand-reconciliation.md` and `design/brand-identity.md` (colours, type, logo)

Anything this skill produces is a **proposal** until the owner approves it. Nothing is scheduled, published, sent or emailed without the owner's explicit approval in an interactive session.

If you are working without the `bonded-marketing-os` repository (for example in a claude.ai chat), this skill still has everything needed to write the post and brief a designer. The rendering steps need the repository.

## The 10 rules

1. **The arc.** Every post goes: the parent's problem, the feeling, what to do, then Bonded and the waitlist. Bonded appears once, at the end.
2. **No feature talk.** The only line about Bonded is the positioning: "an app that helps your whole family plan the week and share the jobs". No feature lists, no screens on photo slides.
3. **5 to 7 slides** per post.
4. **Mostly photos.** At least 80% of the slides are a photo or video filling the whole slide. At most 2 slides are plain.
5. **The plain waitlist slide is always last**, the same on every post.
6. **Plain words.** Write so an 8-year-old can understand it, without writing like one. Reading grade 4 or lower on every slide, 5 or lower on captions. Check with `scripts/reading_grade.py`.
7. **The look.** Paper text on an Ink gradient over the photo. Plus Jakarta Sans. No Hearth (the accent red) on a photo. 1080 x 1440.
8. **Readable.** Every line of text measures at least 4.5:1 against the lightest 5% of the pixels behind it.
9. **Faces stay clear.** Text never covers a face. Move the words to the top or bottom, or change the crop.
10. **Rights first.** Every file's source is known and cleared before anything is posted. Real children need a parent's consent.

## Workflow

| Step | What to do | Read |
|---|---|---|
| 1. Brief | Pick one real parent problem and one useful idea. Check any claim against the build. | `references/messaging.md` |
| 2. Words | Write the slides and the three captions on the arc. Score them. | `references/messaging.md`, `templates/post-brief.md` |
| 3. Media | Ask the owner for new photos or clips that fit each slide. Screen every file. Choose crops and where the words sit. | `references/media-rules.md`, `scripts/media_check.py` |
| 4. Build | With the repo: write a posts file and render it (one set for all three platforms). Without it: hand a designer the post sheet and the visual spec. | `references/visual-spec.md`, `references/production.md`, `templates/posts-entry.mjs` |
| 5. Check | QA has to be clean, then look at every slide yourself. | `references/production.md` |
| 6. Review | Show the owner the slides, words, captions and rights questions. Apply changes only after approval. | `references/production.md` |

## Slide pattern

| Slide | Arc | Words |
|---|---|---|
| 1 | The problem | A cover line the parent recognises at once: a setup and payoff ("In most homes," / "one parent remembers everything.") or one headline. A short sub with real examples. The account handle sits at the top. |
| 2 | The feeling | Why it wears them down, said plainly. "It gets tiring." |
| 3 to 5 or 6 | What to do | One action per slide, in order. Each headline is an instruction they can do this week, with or without an app. The sub gives a concrete example or the size of the job. |
| Last | Bonded, then the waitlist | Plain slide, fixed words: "Join the waitlist." and the standard sub and pill. |

## Before you hand a post to the owner

- [ ] 5 to 7 slides, at least 80% photo or video, at most 2 plain, waitlist slide last.
- [ ] The arc is in order, and Bonded is only on the last slide and at the end of the captions.
- [ ] Slides grade 4 or lower, captions 5 or lower, no word over 3 syllables except names and everyday words.
- [ ] No em dashes, no emoji, nothing from the "Never write" list, no invented stories or testimonials.
- [ ] Nothing claims a feature, and nothing says family time has to be earned.
- [ ] Every photo or clip is new, matches its words, and has no face under the text.
- [ ] Contrast 4.5:1 or better on every line; QA shows 0 issues.
- [ ] Each file has a rights answer: cleared, needs an AI label, or blocked until the owner confirms.
- [ ] Captions follow the three templates, with the WAITLIST line on Instagram and Facebook.
- [ ] Nothing has been scheduled or published.

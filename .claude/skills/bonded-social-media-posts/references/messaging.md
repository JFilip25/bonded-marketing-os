# Messaging: what BONDED posts say and how they say it

Sources: `proposals/messaging-v2.md`, the approved Day 0 in `campaign/weeks-01-02.md` (Amendment 2), the voice section of the campaign, `CLAUDE.md` and `product/feature-claims.md`. If any of those change, they win over this file.

## Who we talk to

Parents of children aged about 4 to 18, mainly in the United States (then the UK, English-speaking EU, Australia and New Zealand). US English. Talk to the parent as "you". Never market to children.

## The arc

Every post, every time:

1. **The problem.** A real moment from the parent's week, the kind they recognise in one second. Not a parenting idea or a statistic.
   - Good: "In most homes, one parent remembers everything." / "Every night: 'What's for dinner?'"
   - Not: "Household labour is unevenly distributed." / "The mental load is real."
2. **The feeling.** Why it wears them down. Said plainly, with no pep talk and no blame.
   - Good: "It gets tiring." / "So you end up as the referee." / "You're tired of asking."
   - Not: "You deserve better." / "You've got this, mama."
3. **What to do.** One to four slides, one action each, in the order they would do them. Each headline is an instruction they can try this week, with or without an app. The sub gives a concrete example, a size ("Ten minutes is enough.") or the reason it works.
   - Good: "Plan the week together on Sunday." Sub: "Ten minutes is enough. Say who does what, and write it where everyone can see it."
   - Good: "Ages 4 to 6: one job, next to you." Sub: "Toys in the basket. Plate to the sink. Shoes by the door."
4. **Bonded, then the waitlist.** Once, at the end. On the slide it is the fixed waitlist slide. In the captions it is the fixed END line and the call to action.

A good post is still worth saving if you cover up the last slide. That is the test: take Bonded out, and the post must still help.

## Plain words (owner's rule, D-2026-10-15-5)

**Write so an 8-year-old can understand it. Don't write like an 8-year-old.** Adults read it, so it stays calm and grown-up. It just uses short sentences and everyday words.

- **Short sentences.** Most slide sentences are 4 to 9 words.
- **Everyday words.** "Tiring", not "exhausting". "Jobs", not "responsibilities" or "tasks". "Plan the week", not "coordinate schedules".
- **Real examples instead of ideas.** "Lunches. Homework. Whose turn it is to feed the dog." Not "the mental load".
- **Say the literal thing.** No idioms or metaphors that need decoding. The owner rejected "Get the week out of one head", "keeping score" and "on the line" as too vague.
- **Numbers and days make it real.** "Ten minutes", "on Sunday", "at 6pm", "for a whole month".
- **The check.** Flesch-Kincaid grade 4 or lower on each slide (headline and sub together), 5 or lower on each caption, and no word over 3 syllables except names and everyday words like "everything". Run:

```
python3 scripts/reading_grade.py --slide "It gets tiring." "Not because the jobs are hard. Because nobody else is keeping track."
python3 scripts/reading_grade.py --caption caption.txt
```

## Voice

- **Specific, grounded, warm, funny when something is funny.** Specific situations, not parenting concepts. A clear point of view.
- **"You" for the parent, "we" only for building Bonded.** No invented first-person parenting stories ("My kids...") and never a claim that something happened to a real family. No testimonials, reviews, quotes from "a mom of three" or results.
- **No reassurance, no inspirational endings, no hard sell.** No "You're doing amazing", no "Life-changing".
- **Never write:** seamless, effortlessly, game-changing, unlock, transform, streamline, empower, say goodbye to chaos, making memories, your parenting journey, or slogan pairs like "Less stress. More memories." No POV framing, "plot twist", empty "again", emoji, hashtag clouds or em dashes.
- **Never claim** that rewards change children's behaviour, that every job should be paid, or any result Bonded can't promise.
- **Family time is never something to earn.** Fun plans can be planned together, but never "earned" by doing jobs. Never suggest a parent's attention depends on points or chores.
- **Money:** Bonded records money; it does not move money. Advice about allowance is fine ("Whatever you pick, agree before payday."); taking a side on paying for chores is not.
- **Typography in copy:** straight text is fine in drafts; the renderer turns quotes into typographic ones. Use "6pm", "7am", "10-year-old".

## What Bonded is, in one line

The only product line in a post, word for word:

> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.

On the waitlist slide the same idea reads: "Bonded is an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android."

**Never say or suggest:** any feature at all on a post (rule 2), and in particular a family calendar, events with times, points added when a parent approves, that it is available now or in a store, that it pays kids or moves money, any download offer. Planned features are not features. Anything new about the product must be checked against `product/feature-claims.md` and the current build named in `CLAUDE.md`, and labelled NEEDS_PRODUCT_VERIFICATION until it is.

Advice in the "what to do" slides can mention lists, boards, the fridge or a weekly check-in, because it is advice for any family. It must not read as a description of the app.

## Captions

Each platform gets its own caption. The fixed lines are word for word.

### Instagram (@bonded512)

```
<The problem, in one or two short sentences. Usually the cover line plus its sub.>

<The feeling, in one or two sentences.>

<"Try this:" or "Here's what helps:">
1. <action>
2. <action>
3. <action>

We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.

Comment WAITLIST and we'll send you the link.

<two hashtags>
```

The WAITLIST promise needs the ManyChat (or equivalent) auto-reply live before the post goes out.

### Facebook (Get Bonded page)

Conversational and a little longer. It can add one concrete detail the slides didn't have and usually ends the advice with a question to readers ("Who is it in your house?"). Then:

```
We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.

The waitlist is here: [link]
```

`[link]` is replaced with the real waitlist URL (with UTM tags from `architecture/marketing-os.md`) before posting.

### TikTok (@bonded789)

One or two short sentences that hook, then the fixed close:

```
<hook>. Waitlist link in bio. <hashtags> #parentsoftiktok
```

### Hashtags

Two per post on Instagram, the same two plus `#parentsoftiktok` on TikTok, none on Facebook. Pick from: `#raisingkids #parentingtips #familylife #familyroutine #mentalload #familytime #familydinner #siblings #allowance #weekendwithkids #familyapp`. Never a cloud of tags.

## Cover lines that work

Patterns from the launch campaign. Use the pattern, not the words.

| Pattern | Example from the launch |
|---|---|
| A thing the parent hears every day, in quotes | "'That's not fair!'" / "'Can I help?'" / "'What's for dinner?'" |
| A plain truth about one person carrying it | "One person in your home / knows every date." |
| A question they have argued about | "Should allowance / be linked to chores?" |
| A reframe of the usual complaint | "Maybe the problem / isn't the chores." |
| The honest shortcut parents take | "It's faster to do it yourself, / so you always do." |
| A wish that keeps slipping | "What has your family / been meaning to do for ages?" |

The sub under a cover line gives two or three real examples or the twist: "Soccer is on Tuesday. The dentist moved. Nobody else knows."

## Worked example: Day 0 (approved 15 Oct 2026)

Words only. The photos belong to the launch campaign and are not to be reused.

| Slide | Arc | Words |
|---|---|---|
| 1 | Problem (photo, handle at top) | Setup "In most homes," Payoff "one parent remembers everything." Sub "Lunches. Homework. Whose turn it is to feed the dog." |
| 2 | Feeling (photo) | "It gets tiring." Sub "Not because the jobs are hard. Because nobody else is keeping track." |
| 3 | What to do (photo, text at top) | "Give each kid a job that's theirs." Sub "Little kids can rinse cups or set the table. Big kids can cook dinner once a week." |
| 4 | What to do (photo) | "Plan the week together on Sunday." Sub "Ten minutes is enough. Say who does what, and write it where everyone can see it." |
| 5 | What to do (photo) | "Now it's not all on one person." Sub "Everyone does a part. Everyone knows the plan." |
| 6 | What to do (photo) | "And there's more time for fun." Sub "Like a Saturday at the beach, with nobody asking who forgot what." |
| 7 | Bonded, then the waitlist (plain) | "Join the waitlist." Sub "Bonded is an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android." Pill "Link in bio" |

Instagram caption:

> In most homes, one parent remembers everything. Lunches. Homework. Whose turn it is to feed the dog.
>
> It gets tiring. Not because the jobs are hard, but because nobody else is keeping track.
>
> Here's what helps:
> 1. Give each kid a job that's theirs.
> 2. Plan the week together on Sunday. Ten minutes is enough.
> 3. Write it where everyone can see it.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

TikTok: "In most homes, one parent remembers everything. Here's how to share the jobs. Waitlist link in bio. #familyapp #parentsoftiktok"

## Topics that fit

Anything where a family shares the running of the week: who does which job, jobs by age, siblings and fairness, dinner, the weekend, mornings, school stuff, the one parent who remembers everything, noticing what kids do without being asked, allowance (without taking sides), planning one fun thing. Not a fit: screen-time battles, discipline, health, sleep training, anything that needs an expert claim.

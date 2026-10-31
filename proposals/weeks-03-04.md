# Weeks 3 and 4: Days 15 to 28, and ten standalone Reels

**Status: PROPOSED, 21 Oct 2026. Needs the owner's explicit approval before anything is scheduled.**

The owner asked for more posts on 21 Oct: standalone Reels next to the daily carousels, and the two weeks after Day 14 (D-2026-10-21-1). This file is that draft. Nothing in it has been scheduled, published or sent, and no media has been chosen yet.

- **Part A:** 14 carousels, Days 15 to 28, one a day from Sat 31 Oct to Fri 13 Nov 2026.
- **Part B:** 10 standalone Reels, each one complete on its own.
- **Part C:** the reading grades, the claim check and the other checks, then the questions for the owner.

Once approved, the words here are the copy guard source for `tools/proofs/render-v2.mjs` (carousels) and `tools/proofs/render-reel.mjs` (Reels): every word on a slide or a Reel has to appear here exactly. Approved posts then go into the campaign through a numbered amendment (skill `references/production.md`, step 8).

## What it follows

- **The arc** (D-2026-10-15-1, -2): the parent's problem, the feeling, what to do, then Bonded and the waitlist, once, at the end. No feature talk.
- **The fixed Bonded line**, word for word, from the skill's `references/messaging.md`. It is on the plain waitlist slide, in every caption and on every Reel end card, and nowhere else.
- **Plain words** (D-2026-10-15-5): every slide scores grade 4 or lower, and every caption 5 or lower (Part C).
- **Photos** (D-2026-10-15-4): 5 to 7 slides a post, at least 80% photo or video, and one plain slide, the waitlist slide, always last.
- **The phase:** weeks 1 to 4 are "Name the problem" (`campaign/weeks-01-02.md`). Week 3 is **When the week gets busy** and week 4 is **Everyone does a part**. They cover the five campaign pillars and the season: Halloween, the US clocks going back, school mornings, sick days, lunches, homework, grandparents, the start of holiday planning and a midweek day off school.
- **No repeats of Days 1 to 14.** Where a familiar idea comes back (a list on the fridge, one name on each job), it serves a new problem.
- **Never:** an invented story or testimonial, a statistic, first-person parenting claims, the never-write words, em dashes, emoji, or anything that makes family time or attention something to earn.

## At a glance

| Day | Date | Post | Pillar | Slides |
|---|---|---|---|---|
| 15 | Saturday 31 October | Halloween, shared out | One shared plan | 6: 4 photo, 1 video, 1 plain |
| 16 | Sunday 1 November | Dark before dinner | Something to look forward to | 6: 4 photo, 1 video, 1 plain |
| 17 | Monday 2 November | The school morning shoe hunt | One shared plan | 7: 5 photo, 1 video, 1 plain |
| 18 | Tuesday 3 November | When a kid wakes up sick | One shared plan | 7: 5 photo, 1 video, 1 plain |
| 19 | Wednesday 4 November | Who's making the lunches? | Kids have a say | 6: 4 photo, 1 video, 1 plain |
| 20 | Thursday 5 November | 'I'll do it later.' | Kids have a say | 6: 4 photo, 1 video, 1 plain |
| 21 | Friday 6 November | When grandparents help out | One shared plan | 6: 4 photo, 1 video, 1 plain |
| 22 | Saturday 7 November | They folded the towels. Badly. | Effort gets noticed | 6: 4 photo, 1 video, 1 plain |
| 23 | Sunday 8 November | The holidays start in one head | One shared plan | 7: 5 photo, 1 video, 1 plain |
| 24 | Monday 9 November | A day off school, midweek | One shared plan | 6: 4 photo, 1 video, 1 plain |
| 25 | Tuesday 10 November | 'Can I have it?' | Money they understand | 7: 5 photo, 1 video, 1 plain |
| 26 | Wednesday 11 November | The job that didn't happen | Kids have a say | 6: 4 photo, 1 video, 1 plain |
| 27 | Thursday 12 November | 'We'll walk him every day.' | One shared plan | 6: 4 photo, 1 video, 1 plain |
| 28 | Friday 13 November | Friday: say what everyone did | Effort gets noticed | 6: 4 photo, 1 video, 1 plain |

| Reel | Working title | Length | Pillar |
|---|---|---|---|
| r01 | Did anyone feed the fish? | 19.5 s (16.5 s of clips, then the 3 s end card) | One shared plan |
| r02 | Where's my...? | 19.5 s (16.5 s of clips, then the 3 s end card) | One shared plan |
| r03 | In a minute. | 19 s (16 s of clips, then the 3 s end card) | Kids have a say |
| r04 | What's at the bottom of the backpack? | 19.5 s (16.5 s of clips, then the 3 s end card) | One shared plan |
| r05 | Three people are bringing potatoes. | 19.5 s (16.5 s of clips, then the 3 s end card) | One shared plan |
| r06 | The couch is for laundry now | 22 s (19 s of clips, then the 3 s end card) | One shared plan |
| r07 | Someone used the last of the milk. | 19.5 s (16.5 s of clips, then the 3 s end card) | One shared plan |
| r08 | Clean or dirty? | 22 s (19 s of clips, then the 3 s end card) | One shared plan |
| r09 | What's under the back seat? | 19.5 s (16.5 s of clips, then the 3 s end card) | One shared plan |
| r10 | 8:58pm: 'I need poster board.' | 23 s (20 s of clips, then the 3 s end card) | One shared plan |

## Timing

- **Carousels:** one a day at 18:00 Montenegro time, as in weeks 1 and 2. Montenegro has been on UTC+1 since 25 Oct, so that is **17:00 UTC**.
  - US Eastern: 13:00 on Sat 31 Oct, then **12:00** from Sun 1 Nov, when the US clocks go back. US Pacific: 10:00, then 09:00.
  - That is midday in the US. `strategy/market-priority.md` suggests testing 06:30 to 08:30 and 19:00 to 21:00 Eastern, so the hour is an open question (Part C).
- **Reels:** their times come from `tools/schedule/reel-slots.mjs` (D-2026-10-21-2) and go into `ops/schedule.json`. Publer posts them through the session that has it open (D-2026-10-21-3). This file doesn't set any times.
- **Scheduling:** the daily Buffer routine can add Days 15 to 28 only after the owner approves them and they are added to `ops/buffer-queue.json` (CLAUDE.md, D-2026-10-21-5). Reels are scheduled only after approval, and only in Publer.

## Media for both parts

Every slide and Reel below has a media brief: a scene a stock search can find, or that the owner's own footage can match. The search words are only a starting point.

- **New files only.** Use free-licence stock (Pexels, Unsplash, Pixabay, Mixkit) or the owner's cleared footage, such as the cleaned Reel clips in `BONDED_reels_clean` (D-2026-10-21-4).
  - Never the launch campaign's files: the `First_2W` folder, the `d00_` to `d14_` files and `social_images`.
  - Never another creator's post or reel, and never a stock preview or a watermarked image (D-2026-10-15-10).
  - No file is used twice across Days 15 to 28 and the Reels.
- **The rights table** gets one row for each file: the page it came from, the site's licence and the file ID, or for the owner's footage its source and consent. Then run `scripts/media_check.py`, and look at every file yourself.
- **People:**
  - Prefer hands, backs and wide shots.
  - No child's face in close-up, and no text over any face.
  - Adults can show their faces, but no posed stock grins.
  - Real children in the owner's footage need a parent's consent on file.
- **Nothing readable that shouldn't be:** names, school names or logos, house numbers, license plates, brand logos or other people's captions.
- **Details match the words.** A clock in a shot shows the time the words say.
- **Moving slides** are 7 to 8 s clips with no sound. Instagram and Facebook get the MP4, and TikTok photo mode gets a still from the middle of the clip.
- **AI images** aren't planned. If one is used, the owner decides on the AI label again, because D-2026-10-17-3 covered Days 1 to 14 only.
- **Alt text** is written for the scene as briefed. Update it once the real file is picked. It is for Instagram and Facebook; add it on TikTok if the field is there.

**The waitlist slide** is the same on every post and is not repeated in each brief. It is plain Paper, with the official colour lockup, the headline "Join the waitlist.", the sub "Bonded is an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android." and the pill "Link in bio". Next to them is the phone with the real Family screen, `67-mom-family-climbing-light.png`, with no "Demo family" caption (D-2026-10-15-3). It scores grade 2.8.

Waitlist slide alt text (every post): The Bonded logo on a cream background. Text: Join the waitlist. Bonded is an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android. Link in bio. Next to it, a phone shows a screen from the Bonded app.

## Part A: Days 15 to 28

### Week 3: When the week gets busy

Days 15 to 21, Sat 31 Oct to Fri 6 Nov.

#### Day 15, Saturday 31 October. Halloween, shared out

**Pillar:** One shared plan.

**Problem in one line:** On Halloween, one person ends up running the whole night.

**What to do in one line:** Split the night into the walk and the door, give each kid one job, and agree when to head home before you go.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "Tonight is Halloween." Payoff: "Who's doing what?" Sub: "Costumes. The candy bowl. The walk. Who takes the little one home?" | 1.3 |
| 2 | The feeling | Photo, text at the top | Headline: "One person ends up running the night." Sub: "And looking for the other dinosaur foot at 5:45." | 3.9 |
| 3 | What to do | Photo, text at the bottom | Headline: "Split the night into two jobs." Sub: "One grown-up walks. One stays home and opens the door. A teen can take the door, too." | -0.5 |
| 4 | What to do | Video, 7 to 8 s, text at the top (a still from the middle on TikTok) | Headline: "Give each kid one job." Sub: "The little one holds the flashlight. The big one picks the street. Someone carries a spare bag." | 0.5 |
| 5 | What to do | Photo, text at the bottom | Headline: "Pick a time to head home now." Sub: "Home by 7:30 is easy to agree on at 5pm. It's much harder at 7:29." | 0.6 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: Kids in Halloween costumes walking along a sidewalk at dusk, seen from behind, carrying candy buckets, with porch lights and pumpkins in the background. Kids in the middle of the frame, sky or trees at the top for the handle. No faces. Search: `kids halloween costumes walking sidewalk dusk back view`. Avoid: brand logos on candy or costumes, house numbers, street signs.
- Slide 2: A parent's hands digging through a pile or a box of costume pieces on a hallway floor: a tail, a mask, one big costume slipper. Hands and arms only. Search: `halloween costume box pieces floor hands`. Avoid: readable labels or brand logos.
- Slide 3: An open front door at dusk with the porch light on, a bowl of wrapped candy on the step and a carved pumpkin beside it. No people, or only an adult's arm holding the bowl. Search: `front door porch light candy bowl halloween night`. Avoid: readable candy brands, house numbers.
- Slide 4: A 7 to 8 s clip of a flashlight beam moving along a dark sidewalk, with kids' feet and costume hems walking through it. Feet and hands only. Search: `kids flashlight walking night sidewalk feet`. Avoid: street signs, house numbers.
- Slide 5: A parent and two kids walking home along a lit street at night, seen from behind, the kids holding candy buckets, one holding the parent's hand. Search: `family walking home night halloween back view street lights`. Avoid: a clock or phone in the frame showing another time.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: kids in Halloween costumes walk down a sidewalk at dusk, seen from behind. Text: Tonight is Halloween. Who's doing what? Costumes. The candy bowl. The walk. Who takes the little one home?
- Slide 2: Photo: a parent's hands search through a pile of costume pieces on the floor. Text: One person ends up running the night. And looking for the other dinosaur foot at 5:45.
- Slide 3: Photo: an open front door at dusk, with the porch light on and a bowl of candy on the step. Text: Split the night into two jobs. One grown-up walks. One stays home and opens the door. A teen can take the door, too.
- Slide 4: Video: a flashlight beam moves along a dark sidewalk as kids in costumes walk. Text: Give each kid one job. The little one holds the flashlight. The big one picks the street. Someone carries a spare bag.
- Slide 5: Photo: a parent and two kids walk home along a lit street at night, seen from behind. Text: Pick a time to head home now. Home by 7:30 is easy to agree on at 5pm. It's much harder at 7:29.
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> Tonight is Halloween. Costumes, the candy bowl, the walk, and who takes the little one home.
>
> Most years, one person runs the whole night. And looks for the other dinosaur foot at 5:45.
>
> Try this:
> 1. Split the night into two jobs: the walk and the door.
> 2. Give each kid one job, like the flashlight or the spare bag.
> 3. Pick a time to head home before you go.
>
> Home by 7:30 is easy to agree on at 5pm. It's much harder at 7:29.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familylife #familytime

**TikTok caption:** Agree on the time to go home at 5pm, not at 7:29. Waitlist link in bio. #familylife #familytime #parentsoftiktok

**Facebook caption:**

> Halloween has a lot of small jobs: costumes, the candy bowl, the walk, the porch light, and getting the little one home before the big ones are done. Most years, one person ends up running all of it.
>
> Try splitting the night into two jobs, the walk and the door. Give each kid one job of their own. And pick the time to head home before you go, while everyone is still calm.
>
> Who's on the door at your house tonight?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -0.5 to 3.9; captions Instagram 2.1, Facebook 3.2, TikTok 1.6.

**Note:** The post goes out at 13:00 US Eastern on Halloween, before trick-or-treating starts.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 16, Sunday 1 November. Dark before dinner

**Pillar:** Something to look forward to.

**Problem in one line:** The clocks went back, it's dark before dinner, and the evenings feel long.

**What to do in one line:** Go outside right after school, pick one thing for dark evenings, and give a kid the 5pm lights job.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "The clocks went back." Payoff: "Now it's dark before dinner." Sub: "No more bikes after school. Everyone is inside by 5pm." | 1.8 |
| 2 | The feeling | Photo, text at the bottom | Headline: "The evenings feel long." Sub: "Everyone is home, a bit bored, and all in one room." | 2.3 |
| 3 | What to do | Video, 7 to 8 s, text at the bottom (a still from the middle on TikTok) | Headline: "Go outside first, while it's light." Sub: "A walk or a bike ride right after school. Homework can start when it's dark." | 1.7 |
| 4 | What to do | Photo, text at the top | Headline: "Pick one thing for dark evenings." Sub: "A puzzle on the table. Cards after dinner. The same night each week." | 1.8 |
| 5 | What to do | Photo, text at the bottom | Headline: "Give a kid the 5pm job." Sub: "Lights on. Curtains closed. Porch light on. A 5-year-old can do it." | -1.7 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A kid's bike leaning on a porch rail or a fence at dusk, a lit window of the house behind it, blue evening light. No people. Room at the top for the handle. Search: `child bike porch dusk house window lights`. Avoid: house numbers, street names, bike brand logos.
- Slide 2: A living room in the evening: kids lying on the floor and the couch, a parent in an armchair, lamp light. A wide shot, faces small or turned away. Search: `family living room evening kids couch lamp`. Avoid: TV screens showing a show or a logo.
- Slide 3: A 7 to 8 s clip of a parent and kids walking or biking along a leafy path in low afternoon sun, seen from behind. Search: `family walking autumn leaves afternoon sun back view`.
- Slide 4: Close-up of several hands doing a jigsaw puzzle on a kitchen table under warm lamp light. Search: `family hands jigsaw puzzle table lamp evening`. Avoid: a brand on the puzzle box.
- Slide 5: A small child's hand reaching up to a light switch, warm indoor light, a dark window behind. Or a child closing curtains, seen from behind. Search: `child hand light switch`.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a child's bike leans on a porch rail at dusk, with a lit window behind it. Text: The clocks went back. Now it's dark before dinner. No more bikes after school. Everyone is inside by 5pm.
- Slide 2: Photo: a family is spread across a living room in the evening, kids on the floor and the couch. Text: The evenings feel long. Everyone is home, a bit bored, and all in one room.
- Slide 3: Video: a parent and kids walk along a leafy path in low afternoon sun, seen from behind. Text: Go outside first, while it's light. A walk or a bike ride right after school. Homework can start when it's dark.
- Slide 4: Photo: several hands work on a jigsaw puzzle on a table under lamp light. Text: Pick one thing for dark evenings. A puzzle on the table. Cards after dinner. The same night each week.
- Slide 5: Photo: a small child's hand reaches up to a light switch. Text: Give a kid the 5pm job. Lights on. Curtains closed. Porch light on. A 5-year-old can do it.
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> The clocks went back, and now it's dark before dinner. No more bikes after school.
>
> The evenings feel long when everyone is inside, a bit bored, in one room.
>
> Try this:
> 1. Go outside first, while it's light. Homework can start when it's dark.
> 2. Pick one thing for dark evenings, like a puzzle or cards, on the same night each week.
> 3. Give a kid the 5pm job: lights on, curtains closed, porch light on.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familytime #familyroutine

**TikTok caption:** It's dark before dinner now. Here's what helps with the long evenings. Waitlist link in bio. #familytime #familyroutine #parentsoftiktok

**Facebook caption:**

> The clocks went back last night in the US, so it will be dark before dinner for a while.
>
> A few things help with the long evenings. Get outside right after school, while it's light, and let homework start once it's dark. Pick one thing for dark evenings, like a puzzle on the table or cards after dinner, on the same night every week. And give a kid the 5pm job: lights on, curtains closed, porch light on.
>
> What do you do on dark evenings?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -1.7 to 2.8; captions Instagram 2.4, Facebook 3.8, TikTok 2.5.

**Note:** US clocks go back at 2am on Sun 1 Nov 2026, so the Facebook line "last night in the US" is true on the day. Europe changed on 25 Oct.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 17, Monday 2 November. The school morning shoe hunt

**Pillar:** One shared plan.

**Problem in one line:** School mornings start with a hunt for one shoe, and you're tired before 8am.

**What to do in one line:** Do half the morning the night before, give shoes one home, give each kid a short list, and leave five spare minutes.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 7 slides: 5 photo, 1 video, 1 plain (86% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Headline: "'Where's my other shoe?'" Sub: "Every school day, at 7:52. The bus comes at 8." | 1.5 |
| 2 | The feeling | Photo, text at the top | Headline: "You're tired before 8am." Sub: "Shoes, forms, lunches, and someone still in pajamas." | 2.5 |
| 3 | What to do | Photo, text at the bottom | Headline: "Do the morning the night before." Sub: "Bags packed. Forms signed. Clothes on the chair." | -0.7 |
| 4 | What to do | Video, 7 to 8 s, text at the top (a still from the middle on TikTok) | Headline: "Give shoes one home." Sub: "A basket by the door. Every pair goes in when they come home." | 0.5 |
| 5 | What to do | Photo, text at the bottom | Headline: "Give each kid a short morning list." Sub: "Dressed. Teeth. Bag. Shoes. Four things, in that order." | -1.3 |
| 6 | What to do | Photo, text at the bottom | Headline: "Leave five minutes for the thing you forgot." Sub: "There is always one thing." | 1.5 |
| 7 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: One kid's sneaker on its own at the bottom of the stairs or by the front door, morning light. No people. A plain sneaker with no visible logo. Search: `single child sneaker floor stairs morning light`. Avoid: shoe brand logos.
- Slide 2: A parent at the front door holding a backpack and a lunch bag, a kid in pajamas walking past behind them, out of focus. Morning light. The parent's face can show; the child's can't. Search: `parent holding backpack front door morning`. Avoid: school logos, names on bags.
- Slide 3: A packed school backpack on a chair with a folded set of clothes on the seat, evening lamp light. No people. Search: `school backpack chair folded clothes evening`. Avoid: names, school logos.
- Slide 4: A 7 to 8 s clip of kids' feet stepping in the front door and kicking off their shoes, and a hand dropping them into a basket by the door. Feet and hands only. Search: `kids taking off shoes front door basket`. Avoid: shoe brand logos.
- Slide 5: A short hand-drawn list with little pictures, taped to a bedroom door or a mirror at kid height. Close-up. Search: `kids morning routine checklist on door`. Avoid: any name on the list.
- Slide 6: Two kids with backpacks heading out of the front door in the morning, seen from behind, one turning back toward the house. Search: `kids leaving house backpacks morning back view`. Avoid: house numbers, a school bus with a district name.
- Slide 7: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: one child's sneaker sits alone by the stairs in morning light. Text: 'Where's my other shoe?' Every school day, at 7:52. The bus comes at 8.
- Slide 2: Photo: a parent at the front door holds a backpack and a lunch bag while a child in pajamas walks past. Text: You're tired before 8am. Shoes, forms, lunches, and someone still in pajamas.
- Slide 3: Photo: a packed backpack and a folded set of clothes on a chair, under lamp light. Text: Do the morning the night before. Bags packed. Forms signed. Clothes on the chair.
- Slide 4: Video: kids' feet step through the front door and their shoes go into a basket. Text: Give shoes one home. A basket by the door. Every pair goes in when they come home.
- Slide 5: Photo: a short hand-drawn list is taped to a door at kid height. Text: Give each kid a short morning list. Dressed. Teeth. Bag. Shoes. Four things, in that order.
- Slide 6: Photo: two kids with backpacks walk out of the front door in the morning, seen from behind. Text: Leave five minutes for the thing you forgot. There is always one thing.
- Slide 7: the standard waitlist alt text.

**Instagram caption:**

> 'Where's my other shoe?' Every school day, at 7:52. The bus comes at 8.
>
> You're tired before 8am, and someone is still in pajamas.
>
> Try this:
> 1. Do the morning the night before: bags packed, forms signed, clothes on the chair.
> 2. Give shoes one home, like a basket by the door.
> 3. Give each kid a short morning list.
> 4. Leave five minutes for the thing you forgot.
>
> There is always one thing.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familyroutine #raisingkids

**TikTok caption:** The other shoe is never by the door. Give shoes one home. Waitlist link in bio. #familyroutine #raisingkids #parentsoftiktok

**Facebook caption:**

> How are school mornings at your house?
>
> If they start with a hunt for one shoe, a form nobody signed and a lost water bottle, try moving half the morning to the night before. Bags packed, forms signed, clothes on a chair. Give shoes one home, like a basket by the door. And give each kid a short list: dressed, teeth, bag, shoes.
>
> Then leave five minutes for the thing someone forgot. There's always one. What is it most mornings at your house?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -1.3 to 2.8; captions Instagram 1.9, Facebook 2.3, TikTok 0.5.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 18, Tuesday 3 November. When a kid wakes up sick

**Pillar:** One shared plan.

**Problem in one line:** A kid wakes up sick on a full day, and the whole plan has to change by 7am.

**What to do in one line:** Decide who stays home before anyone is sick, keep a sick-day note, and move the jobs as well as the meetings.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 7 slides: 5 photo, 1 video, 1 plain (86% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "6:45am." Payoff: "A kid wakes up sick." Sub: "And the whole day was already full." | 0.6 |
| 2 | The feeling | Photo, text at the top | Headline: "Now the whole day has to change." Sub: "By 7am. Before anyone has had breakfast." | 1.4 |
| 3 | What to do | Photo, text at the bottom | Headline: "Decide who stays home, before anyone is sick." Sub: "Take turns, or name who you'd call. Then it's not a 7am talk." | 0.6 |
| 4 | What to do | Photo, text at the bottom | Headline: "Keep a sick-day note on the fridge." Sub: "The school's number. Who can pick up. What needs to be canceled." | -0.7 |
| 5 | What to do | Video, 7 to 8 s, text at the top (a still from the middle on TikTok) | Headline: "Hand their jobs to someone else." Sub: "Someone else feeds the cat today. They don't owe it back later." | 1.2 |
| 6 | What to do | Photo, text at the bottom | Headline: "And the jobs of whoever stays home." Sub: "If you're home with a sick kid, someone else makes dinner." | 1.7 |
| 7 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A child's feet in socks poking out from under a blanket on a couch, a glass of water and tissues on the table, soft morning light. No face. Nothing a parent wouldn't post. Search: `child feet socks blanket couch`. Avoid: medicine brands or labels.
- Slide 2: A parent in a kitchen on the phone, a laptop open on the counter, morning light, seen from the side. An adult face is fine; no posed smile. Search: `parent phone call kitchen morning laptop`. Avoid: readable screens.
- Slide 3: Two adults at a kitchen table with coffee, talking calmly, seen from the side. It can also be a parent and a grandparent. Search: `two adults talking kitchen table coffee`.
- Slide 4: A handwritten note held on a fridge door by a magnet, close-up, the writing soft and not readable. Search: `note on fridge magnet close up`. Avoid: readable phone numbers or names.
- Slide 5: A 7 to 8 s clip of a child's hands pouring cat food into a bowl on a kitchen floor, and a cat walking up to eat. Hands only. Search: `child feeding cat bowl kitchen floor`. Avoid: pet food brands.
- Slide 6: A teen or an adult cooking at a stove in the evening, seen from behind or the side, steam rising from a pot. Search: `teen cooking dinner stove evening back view`.
- Slide 7: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a child's feet in socks poke out from under a blanket on a couch, next to a glass of water. Text: 6:45am. A kid wakes up sick. And the whole day was already full.
- Slide 2: Photo: a parent stands in the kitchen on a phone call, a laptop open on the counter. Text: Now the whole day has to change. By 7am. Before anyone has had breakfast.
- Slide 3: Photo: two adults talk at a kitchen table over coffee. Text: Decide who stays home, before anyone is sick. Take turns, or name who you'd call. Then it's not a 7am talk.
- Slide 4: Photo: a handwritten note hangs on a fridge door under a magnet. Text: Keep a sick-day note on the fridge. The school's number. Who can pick up. What needs to be canceled.
- Slide 5: Video: a child's hands pour food into a cat's bowl and the cat starts to eat. Text: Hand their jobs to someone else. Someone else feeds the cat today. They don't owe it back later.
- Slide 6: Photo: a teen cooks at the stove in the evening, seen from behind. Text: And the jobs of whoever stays home. If you're home with a sick kid, someone else makes dinner.
- Slide 7: the standard waitlist alt text.

**Instagram caption:**

> 6:45am. A kid wakes up sick, and the whole day was already full.
>
> Now everything has to change by 7am.
>
> Try this:
> 1. Decide who stays home before anyone is sick. Take turns, or name who you'd call.
> 2. Keep a sick-day note on the fridge: the school's number, who can pick up, what to cancel.
> 3. Hand the sick kid's jobs to someone else for the day.
> 4. Hand off the jobs of whoever stays home, too.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familyroutine #mentalload

**TikTok caption:** A kid wakes up sick at 6:45am. Decide who stays home before it happens. Waitlist link in bio. #familyroutine #mentalload #parentsoftiktok

**Facebook caption:**

> Sick days always seem to come on the busiest day of the week.
>
> It helps to make the plan before anyone is sick: who stays home first, or who you'd call. Keep a short note on the fridge with the school's number and who can pick up.
>
> Then move the jobs, not just the meetings. The sick kid's jobs go to someone else for the day, and so do the jobs of whoever stays home with them. Who stays home first at your house?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -0.7 to 2.8; captions Instagram 1.8, Facebook 2.4, TikTok 1.5.

**Note:** No health advice: the post is only about who covers the day and the jobs.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 19, Wednesday 4 November. Who's making the lunches?

**Pillar:** Kids have a say.

**Problem in one line:** At 9pm nobody has made the lunches, so one parent makes them all.

**What to do in one line:** Make a lunch menu together, let little kids pick and big kids pack, and pack right after dinner.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "9pm." Payoff: "'Did anyone make the lunches?'" Sub: "Nobody did. And the bread is almost gone." | 1.4 |
| 2 | The feeling | Photo, text at the top | Headline: "So you make them all, half asleep." Sub: "And someone still won't eat the crusts." | 0.6 |
| 3 | What to do | Photo, text at the bottom | Headline: "Make a lunch menu together." Sub: "On the fridge: a few mains, a few fruits, a few snacks. Only things they'll really eat." | 1.0 |
| 4 | What to do | Video, 7 to 8 s, text at the top (a still from the middle on TikTok) | Headline: "Little kids pick. Big kids pack." Sub: "A 5-year-old can choose the apple. A 12-year-old can make the whole lunch." | -0.1 |
| 5 | What to do | Photo, text at the bottom | Headline: "Pack them right after dinner." Sub: "The kitchen is still out. Ten minutes, everyone at the counter." | 3.5 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: Empty, open lunch boxes on a kitchen counter at night, under one kitchen light. No people. Search: `empty lunch boxes kitchen counter night`. Avoid: names or brand logos on the boxes.
- Slide 2: Close-up of an adult's hands making a sandwich on a cutting board, late evening light. Search: `hands making sandwich night kitchen close up`. Avoid: food brand labels.
- Slide 3: A parent and two kids at a kitchen table writing a list on paper together. Hands and paper in view, faces out of frame or turned away. Search: `family writing list kitchen table hands`. Avoid: readable names.
- Slide 4: A 7 to 8 s clip of a small hand picking an apple from a fruit bowl, then an older kid's hands putting it into a lunch box with a sandwich. Search: `kids packing lunch box hands apple`. Avoid: brand logos.
- Slide 5: A family at a kitchen counter after dinner, packing food into containers, seen from the side or behind, warm evening light. Search: `family kitchen counter packing food containers evening`.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: open, empty lunch boxes sit on a kitchen counter at night. Text: 9pm. 'Did anyone make the lunches?' Nobody did. And the bread is almost gone.
- Slide 2: Photo: an adult's hands make a sandwich on a cutting board late at night. Text: So you make them all, half asleep. And someone still won't eat the crusts.
- Slide 3: Photo: a parent and two kids write a list together at the kitchen table. Text: Make a lunch menu together. On the fridge: a few mains, a few fruits, a few snacks. Only things they'll really eat.
- Slide 4: Video: a small hand picks an apple and an older kid's hands pack it into a lunch box. Text: Little kids pick. Big kids pack. A 5-year-old can choose the apple. A 12-year-old can make the whole lunch.
- Slide 5: Photo: a family stands at the kitchen counter after dinner, packing food into containers. Text: Pack them right after dinner. The kitchen is still out. Ten minutes, everyone at the counter.
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> 9pm. 'Did anyone make the lunches?' Nobody did, and the bread is almost gone.
>
> So you make them all, half asleep. And someone still won't eat the crusts.
>
> Try this:
> 1. Make a lunch menu together: a few mains, fruits and snacks they'll really eat.
> 2. Little kids pick from it. Big kids pack their own.
> 3. Pack them right after dinner, while the kitchen is still out.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familylife #raisingkids

**TikTok caption:** Lunches packed right after dinner, by the people who eat them. Waitlist link in bio. #familylife #raisingkids #parentsoftiktok

**Facebook caption:**

> Is anyone else making lunches at 9pm?
>
> A lunch menu on the fridge helps: a few mains, a few fruits and a few snacks your kids will really eat. Little kids pick from it. Big kids pack their own. And if you pack right after dinner, the kitchen is still out and it takes ten minutes.
>
> What's on the menu at your house?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -0.1 to 3.5; captions Instagram 2.0, Facebook 2.3, TikTok 3.7.

**Note:** No food or health advice: "things they'll really eat" is the only rule.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 20, Thursday 5 November. 'I'll do it later.'

**Pillar:** Kids have a say.

**Problem in one line:** Homework waits until 8:45pm, and you keep asking all evening.

**What to do in one line:** Pick one homework time together, ask about big projects on Sunday, and let kids ask for help early.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Headline: "'I'll do it later.'" Sub: "Later is 8:45pm. The project is due tomorrow." | 3.5 |
| 2 | The feeling | Photo, text at the bottom | Headline: "And you're the one who keeps asking." Sub: "So the whole night is about homework." | 3.2 |
| 3 | What to do | Photo, text at the top | Headline: "Pick one homework time together." Sub: "After a snack or after dinner. Same time, each day." | 3.7 |
| 4 | What to do | Photo, text at the bottom | Headline: "Ask about big projects on Sunday." Sub: "Write the due dates down, so nothing is a Thursday night surprise." | 3.7 |
| 5 | What to do | Video, 7 to 8 s, text at the bottom (a still from the middle on TikTok) | Headline: "Let them ask for help early." Sub: "'Can you help me at 6?' is easier than 'It's due tomorrow.'" | 2.3 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A half-finished school poster project on a kitchen table at night: poster board, markers, glue, scissors. No people. Search: `school project poster board markers table night`. Avoid: names, school logos, marker brands.
- Slide 2: A parent leaning on a kitchen counter, watching a child at the table with a notebook. The child is seen from behind. Search: `parent watching child homework kitchen table`.
- Slide 3: A plate of apple slices next to an open notebook and a pencil on a table, afternoon light. No people. Search: `apple slices notebook pencil table afternoon`. Avoid: readable handwriting.
- Slide 4: Close-up of a hand writing on a paper list or a small whiteboard on a fridge. The writing is soft and not readable. Search: `hand writing list whiteboard fridge close up`. Avoid: readable names.
- Slide 5: A 7 to 8 s clip of a parent and a child side by side at a desk or table, the parent pointing at a page in a notebook, seen from behind. Search: `parent helping child homework desk back view`. Avoid: readable screens or worksheets.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a half-finished poster project with markers and glue on a kitchen table at night. Text: 'I'll do it later.' Later is 8:45pm. The project is due tomorrow.
- Slide 2: Photo: a parent leans on the counter and watches a child doing homework at the table. Text: And you're the one who keeps asking. So the whole night is about homework.
- Slide 3: Photo: a plate of apple slices beside an open notebook and a pencil. Text: Pick one homework time together. After a snack or after dinner. Same time, each day.
- Slide 4: Photo: a hand writes on a small whiteboard on the fridge. Text: Ask about big projects on Sunday. Write the due dates down, so nothing is a Thursday night surprise.
- Slide 5: Video: a parent and a child sit side by side at a table, looking at a notebook, seen from behind. Text: Let them ask for help early. 'Can you help me at 6?' is easier than 'It's due tomorrow.'
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> 'I'll do it later.' Later is 8:45pm, and the project is due tomorrow.
>
> And you're the one who keeps asking, so the whole night is about homework.
>
> Try this:
> 1. Pick one homework time together, the same time every day.
> 2. Ask about big projects on Sunday, and write the due dates down.
> 3. Let them ask for help early.
>
> 'Can you help me at 6?' is a lot easier than 'It's due tomorrow.'
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #parentingtips #raisingkids

**TikTok caption:** 'I'll do it later' means 8:45pm. Ask about big projects on Sunday. Waitlist link in bio. #parentingtips #raisingkids #parentsoftiktok

**Facebook caption:**

> When does homework happen at your house?
>
> In a lot of homes it happens 'later'. And later is 8:45pm, with a project due tomorrow. A few things help. Pick one homework time together. Ask about big projects every Sunday. And agree that they can ask for help early.
>
> 'Can you help me at 6?' is a much better question than 'It's due tomorrow.' What time works best for your kids?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides 2.3 to 3.7; captions Instagram 4.3, Facebook 3.6, TikTok 2.5.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 21, Friday 6 November. When grandparents help out

**Pillar:** One shared plan.

**Problem in one line:** Someone else can do the pickup, but handing over the week takes as long as doing it.

**What to do in one line:** Write the week on one page, pick the same day each week, and let the kids explain the plan.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "Grandpa can pick them up." Payoff: "Now you have to explain everything." Sub: "Which door. What time. Who has practice. Who needs a snack." | 0.9 |
| 2 | The feeling | Photo, text at the top | Headline: "Asking for help starts to feel like more work." Sub: "So you end up doing it yourself." | 0.8 |
| 3 | What to do | Photo, text at the bottom | Headline: "Write the week on one page." Sub: "Pickups, practices and snacks, day by day. They keep a copy." | 0.5 |
| 4 | What to do | Video, 7 to 8 s, text at the top (a still from the middle on TikTok) | Headline: "Pick the same day each week." Sub: "Then everyone knows it's Grandma's Tuesday." | 2.5 |
| 5 | What to do | Photo, text at the bottom | Headline: "Let the kids explain the plan." Sub: "A 9-year-old knows which door and which day. Let them tell it." | -0.7 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A grandparent and a child walking hand in hand on a sidewalk in autumn, seen from behind, the child wearing a backpack. Search: `grandfather grandchild walking hand in hand back view autumn`. Avoid: school names or logos, street signs.
- Slide 2: Close-up of a parent's hands typing a long message on a phone at a kitchen counter, a coffee cup nearby. The screen is not readable. Search: `hands typing phone kitchen counter coffee`. Avoid: readable screens, phone brand logos.
- Slide 3: A hand passing a sheet of paper across a kitchen table to an older person's hands. Close-up, hands only. Search: `hand passing paper older person table close up`. Avoid: readable writing.
- Slide 4: A 7 to 8 s clip of a grandmother's and a child's hands rolling or cutting dough together on a floured table. Search: `grandmother child hands baking dough`.
- Slide 5: A child talking to a grandparent at a table. The child is seen from behind; the grandparent is listening, and an adult face is fine. Search: `child talking to grandmother table`.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a grandfather and a child with a backpack walk hand in hand on an autumn sidewalk, seen from behind. Text: Grandpa can pick them up. Now you have to explain everything. Which door. What time. Who has practice. Who needs a snack.
- Slide 2: Photo: a parent's hands type a long message on a phone at the kitchen counter. Text: Asking for help starts to feel like more work. So you end up doing it yourself.
- Slide 3: Photo: a hand passes a sheet of paper to an older person across a table. Text: Write the week on one page. Pickups, practices and snacks, day by day. They keep a copy.
- Slide 4: Video: a grandmother's and a child's hands roll dough together on a floured table. Text: Pick the same day each week. Then everyone knows it's Grandma's Tuesday.
- Slide 5: Photo: a child talks to a grandparent at a table, seen from behind. Text: Let the kids explain the plan. A 9-year-old knows which door and which day. Let them tell it.
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> Grandpa can pick them up. Now you have to explain everything: which door, what time, who has practice.
>
> Asking for help starts to feel like more work, so you end up doing it yourself.
>
> Try this:
> 1. Write the week on one page, day by day. They keep a copy.
> 2. Pick the same day each week.
> 3. Let the kids explain the plan.
>
> A 9-year-old knows which door. Let them tell it.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familylife #mentalload

**TikTok caption:** Grandpa is doing pickup. The 9-year-old explains the plan. Waitlist link in bio. #familylife #mentalload #parentsoftiktok

**Facebook caption:**

> Grandparents, an aunt, a neighbor: help is great, but handing over the week can take as long as doing it.
>
> What helps: write the week on one page, with pickups, practices and snacks day by day. Pick the same day each week if you can. And let the kids explain the plan. A 9-year-old knows which door and which day.
>
> Who helps out in your family?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -0.7 to 2.8; captions Instagram 1.2, Facebook 2.0, TikTok 1.7.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

### Week 4: Everyone does a part

Days 22 to 28, Sat 7 Nov to Fri 13 Nov.

#### Day 22, Saturday 7 November. They folded the towels. Badly.

**Pillar:** Effort gets noticed.

**Problem in one line:** A kid does a job badly, and fixing it in front of them makes them stop offering.

**What to do in one line:** Thank them for the job first, show them once side by side, and let good enough be good enough for a while.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "They folded the towels." Payoff: "Badly." Sub: "Some are in thirds. Some are balls. One might be a hat." | -1.1 |
| 2 | The feeling | Photo, text at the top | Headline: "You want to fix it right away." Sub: "But then they stop offering." | 1.5 |
| 3 | What to do | Video, 7 to 8 s, text at the bottom (a still from the middle on TikTok) | Headline: "Thank them for the job first." Sub: "'You did all the towels. Thanks.' The folding can wait." | -0.2 |
| 4 | What to do | Photo, text at the bottom | Headline: "Show them once, side by side." Sub: "One towel each. You fold, they copy. No talk about the old ones." | -0.1 |
| 5 | What to do | Photo, text at the bottom | Headline: "Let 'good enough' be good enough." Sub: "For a few weeks, at least. A badly folded towel still works." | 1.2 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A lopsided stack of badly folded towels on a bed, close-up, daylight. No people. Room at the top for the handle. Search: `messy folded towels stack bed`.
- Slide 2: Close-up of an adult's hands refolding a towel on a bed. Search: `hands folding towel bed close up`.
- Slide 3: A 7 to 8 s clip of a child carrying a tall stack of towels down a hallway, seen from behind. Search: `child carrying towels hallway back view`.
- Slide 4: A parent and a child side by side at a bed, each folding a towel. Hands and arms in view, faces out of frame. Search: `parent child folding laundry together bed hands`. Avoid: underwear in the laundry.
- Slide 5: A bathroom shelf with slightly uneven towels, soft light. No people. Search: `bathroom shelf towels stacked`. Avoid: toiletry brands.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a lopsided stack of badly folded towels sits on a bed. Text: They folded the towels. Badly. Some are in thirds. Some are balls. One might be a hat.
- Slide 2: Photo: an adult's hands refold a towel on a bed. Text: You want to fix it right away. But then they stop offering.
- Slide 3: Video: a child carries a tall stack of towels down a hallway, seen from behind. Text: Thank them for the job first. 'You did all the towels. Thanks.' The folding can wait.
- Slide 4: Photo: a parent and a child fold towels side by side on a bed. Text: Show them once, side by side. One towel each. You fold, they copy. No talk about the old ones.
- Slide 5: Photo: a bathroom shelf holds a slightly uneven stack of towels. Text: Let 'good enough' be good enough. For a few weeks, at least. A badly folded towel still works.
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> They folded the towels. Badly. Some are in thirds, some are balls, and one might be a hat.
>
> You want to fix it right away. But then they stop offering.
>
> Try this:
> 1. Thank them for the job first.
> 2. Show them once, side by side.
> 3. Let 'good enough' be good enough for a few weeks.
>
> If you really must refold them, wait until they're not looking.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #raisingkids #parentingtips

**TikTok caption:** They folded the towels. One might be a hat. Say thanks anyway. Waitlist link in bio. #raisingkids #parentingtips #parentsoftiktok

**Facebook caption:**

> Has anyone else been handed a stack of towels folded in a way you've never seen before?
>
> It's tempting to fix them on the spot. But if every job gets redone in front of them, why would they offer next time?
>
> Thank them for the job first. Show them once, side by side. Then let 'good enough' be good enough for a while. What's the funniest job your kids have done for you?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -1.1 to 2.8; captions Instagram 1.5, Facebook 2.8, TikTok 0.7.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 23, Sunday 8 November. The holidays start in one head

**Pillar:** One shared plan.

**Problem in one line:** The holidays are weeks away, and one person is already planning all of it.

**What to do in one line:** One list for the season, whole jobs for each grown-up, real holiday jobs for the kids, and one thing to skip.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 7 slides: 5 photo, 1 video, 1 plain (86% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "The holidays are weeks away," Payoff: "and one person is already planning them." Sub: "Who's hosting. Who's driving. What the kids need. When to start." | 2.6 |
| 2 | The feeling | Photo, text at the bottom | Headline: "It's a lot for one person." Sub: "On top of school, work and everything else." | 2.3 |
| 3 | What to do | Photo, text at the top | Headline: "Make one list for the whole season." Sub: "Every trip, dinner and school show, from now to New Year's." | 3.0 |
| 4 | What to do | Photo, text at the bottom | Headline: "Give each grown-up whole jobs." Sub: "One person does all the travel. One does all the food." | 0.5 |
| 5 | What to do | Video, 7 to 8 s, text at the bottom (a still from the middle on TikTok) | Headline: "Give the kids holiday jobs, too." Sub: "A 6-year-old can set out napkins. A teen can make one dish." | 0.5 |
| 6 | What to do | Photo, text at the bottom | Headline: "Pick one thing to skip this year." Sub: "Say it early. Nobody will miss the third kind of pie." | 0.5 |
| 7 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: An adult alone at a kitchen table in the evening with a notepad, a pen and a mug, seen from the side or behind, lamp light. Room at the top for the handle. Search: `person writing list kitchen table evening mug`. Avoid: readable writing, mug brands.
- Slide 2: A parent leaning back on a couch with eyes closed, a laptop and papers beside them, evening lamp light. An adult face is fine. Search: `tired parent couch evening laptop papers`. Avoid: readable screens.
- Slide 3: Close-up of a hand writing a long list on a large sheet of paper on a table, with a small pumpkin or a pine branch nearby. The writing is not readable. Search: `hand writing list paper table close up autumn`.
- Slide 4: Two adults at a table, one with a laptop and one with a cookbook, seen from the side. Search: `couple planning laptop cookbook table`. Avoid: readable screens.
- Slide 5: A 7 to 8 s clip of a child's hands placing napkins around a set dinner table, warm light. Hands only. Search: `child setting table napkins hands`.
- Slide 6: Two pies on a table, one with a slice missing, warm light. No people. Search: `pies on table holiday`. Avoid: bakery boxes or brands.
- Slide 7: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: an adult sits alone at a kitchen table in the evening, writing in a notepad. Text: The holidays are weeks away, and one person is already planning them. Who's hosting. Who's driving. What the kids need. When to start.
- Slide 2: Photo: a parent leans back on a couch with eyes closed, papers and a laptop beside them. Text: It's a lot for one person. On top of school, work and everything else.
- Slide 3: Photo: a hand writes a long list on a large sheet of paper on a table. Text: Make one list for the whole season. Every trip, dinner and school show, from now to New Year's.
- Slide 4: Photo: two adults sit at a table, one with a laptop and one with a cookbook. Text: Give each grown-up whole jobs. One person does all the travel. One does all the food.
- Slide 5: Video: a child's hands put napkins around a set dinner table. Text: Give the kids holiday jobs, too. A 6-year-old can set out napkins. A teen can make one dish.
- Slide 6: Photo: two pies sit on a table, one with a slice missing. Text: Pick one thing to skip this year. Say it early. Nobody will miss the third kind of pie.
- Slide 7: the standard waitlist alt text.

**Instagram caption:**

> The holidays are weeks away, and one person is already planning them. Who's hosting, who's driving, what the kids need.
>
> It's a lot for one person, on top of school, work and everything else.
>
> Try this:
> 1. Make one list for the whole season.
> 2. Give each grown-up whole jobs, like all the travel or all the food.
> 3. Give the kids holiday jobs, too.
> 4. Pick one thing to skip this year.
>
> Nobody will miss the third kind of pie.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #mentalload #familylife

**TikTok caption:** The holidays are weeks away, and the plan is in one person's head. Share it now. Waitlist link in bio. #mentalload #familylife #parentsoftiktok

**Facebook caption:**

> Is anyone else already planning the holidays in their head?
>
> Thanksgiving, school shows, travel, food, gifts. It's a lot for one person.
>
> Try one list for the whole season, from now to New Year's. Give each grown-up whole jobs, so one person does all the travel and another does all the food. Give the kids real holiday jobs. And pick one thing to skip this year, and say it early.
>
> What are you skipping this year?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides 0.5 to 3.0; captions Instagram 3.0, Facebook 3.3, TikTok 2.3.

**Note:** Thanksgiving is Thu 26 Nov 2026. Only the Facebook caption names it; the slides say "the holidays" so the post also reads in the UK and Australia.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 24, Monday 9 November. A day off school, midweek

**Pillar:** One shared plan.

**Problem in one line:** There's no school on Wednesday, it's a workday for you, and you found out on Sunday.

**What to do in one line:** Find every day off now, trade days with another family, and plan one easy thing for the day.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "No school on Wednesday." Payoff: "Work as usual for you." Sub: "And you found out on Sunday night." | 1.2 |
| 2 | The feeling | Photo, text at the top | Headline: "So you spend Monday asking for favors." Sub: "Who can take them? Is anyone free? Can you move a meeting?" | 1.2 |
| 3 | What to do | Photo, text at the bottom | Headline: "Find every day off now." Sub: "From now until June. Put them all on the family list today." | 2.6 |
| 4 | What to do | Video, 7 to 8 s, text at the bottom (a still from the middle on TikTok) | Headline: "Trade days with another family." Sub: "You take their kids this time. They take yours next time." | 1.2 |
| 5 | What to do | Photo, text at the bottom | Headline: "Plan one easy thing for the day." Sub: "The library in the morning. Pancakes for lunch. It doesn't need to be big." | 1.1 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A child in pajamas looking out of a kitchen window on a weekday morning, seen from behind, a backpack hanging unused on a hook nearby. Search: `child pajamas looking out window morning back view`. Avoid: school logos, names on the backpack.
- Slide 2: Close-up of an adult holding a phone at a desk with a laptop open. The screens are not readable. Search: `hand holding phone desk laptop close up`. Avoid: readable screens, brand logos.
- Slide 3: Close-up of a highlighter marking dates on a printed page on a table. The page is soft, with no school name visible. Search: `highlighter marking dates printed page close up`. Avoid: school names or logos.
- Slide 4: A 7 to 8 s clip of four kids building a blanket fort or playing a board game in a living room. A wide shot from above or behind, faces small. Search: `kids building blanket fort living room`. Avoid: board game brand logos.
- Slide 5: A child's hand pulling a picture book from a low library shelf, close-up. Search: `child hand library book shelf close up`. Avoid: readable book covers.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a child in pajamas looks out of a kitchen window in the morning, seen from behind. Text: No school on Wednesday. Work as usual for you. And you found out on Sunday night.
- Slide 2: Photo: an adult holds a phone at a desk beside an open laptop. Text: So you spend Monday asking for favors. Who can take them? Is anyone free? Can you move a meeting?
- Slide 3: Photo: a highlighter marks dates on a printed page. Text: Find every day off now. From now until June. Put them all on the family list today.
- Slide 4: Video: a group of kids build a blanket fort in a living room. Text: Trade days with another family. You take their kids this time. They take yours next time.
- Slide 5: Photo: a child's hand pulls a book from a low library shelf. Text: Plan one easy thing for the day. The library in the morning. Pancakes for lunch. It doesn't need to be big.
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> No school on Wednesday. Work as usual for you. And you found out on Sunday night.
>
> So you spend Monday asking for favors.
>
> Try this:
> 1. Find every day off from now until June, and put them on the family list today.
> 2. Trade days with another family. You take theirs this time, they take yours next time.
> 3. Plan one easy thing for the day. It doesn't need to be big.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familyroutine #mentalload

**TikTok caption:** No school on Wednesday, work as usual for you. Find every day off now. Waitlist link in bio. #familyroutine #mentalload #parentsoftiktok

**Facebook caption:**

> Does anyone else find out about school days off on the Sunday night before?
>
> It helps to find every day off now, from now until June, and put them all where the family can see them. Then trade days with a family you trust: you take their kids this time, they take yours next time. And plan one easy thing for the day, like the library or pancakes for lunch.
>
> Is there a family you trade days with?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides 1.1 to 2.8; captions Instagram 2.4, Facebook 3.7, TikTok 3.2.

**Note:** Wednesday 11 Nov is Veterans Day, a day off in many US school districts. The copy doesn't name it, so it still works where schools are open.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 25, Tuesday 10 November. 'Can I have it?'

**Pillar:** Money they understand.

**Problem in one line:** Kids ask for things all the time, and you don't want to say no every time, or yes every time.

**What to do in one line:** Turn the want into a goal, work out the weeks together, check once a week, and let them change their mind.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 7 slides: 5 photo, 1 video, 1 plain (86% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Headline: "'Can I have it?'" Sub: "It costs $60. It's the third thing this week." | -1.4 |
| 2 | The feeling | Photo, text at the top | Headline: "You don't want to say no every time." Sub: "But you can't say yes every time, either." | 3.0 |
| 3 | What to do | Photo, text at the bottom | Headline: "Turn it into a goal." Sub: "Write down the thing, the price and when they want it by." | 0.2 |
| 4 | What to do | Video, 7 to 8 s, text at the top (a still from the middle on TikTok) | Headline: "Work out the weeks together." Sub: "$60 at $5 a week is 12 weeks. Let them do the math." | -0.3 |
| 5 | What to do | Photo, text at the bottom | Headline: "Let them check how close they are." Sub: "A jar, a chart on the fridge or a note on your phone. Once a week." | -0.8 |
| 6 | What to do | Photo, text at the bottom | Headline: "Let them change their mind." Sub: "By week four, they may want something else. The money is still theirs." | 0.5 |
| 7 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A child's hand reaching toward a toy on a store shelf, close-up. The packaging is plain or out of focus. Search: `child hand reaching toy store shelf`. Avoid: brand names or logos on packaging, price labels that don't say $60.
- Slide 2: A parent and a child walking down a store aisle hand in hand, seen from behind. Search: `parent child walking store aisle back view`. Avoid: store names, brand logos.
- Slide 3: Close-up of a child's hand writing on a card or a sticky note on a table, with coins nearby. The writing is not readable, or reads only "$60". Search: `child hand writing note coins table`. Avoid: names.
- Slide 4: A 7 to 8 s clip of a child's hands counting coins into small stacks on a table. Search: `child counting coins hands table`.
- Slide 5: A glass jar with coins and a few bills on a shelf or a windowsill, close-up, daylight. Search: `money jar coins windowsill`.
- Slide 6: A child sitting at a table looking at a money jar, seen over the shoulder from behind. Search: `child looking at money jar over shoulder`.
- Slide 7: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a child's hand reaches toward a toy on a store shelf. Text: 'Can I have it?' It costs $60. It's the third thing this week.
- Slide 2: Photo: a parent and a child walk hand in hand down a store aisle, seen from behind. Text: You don't want to say no every time. But you can't say yes every time, either.
- Slide 3: Photo: a child's hand writes on a small card next to some coins. Text: Turn it into a goal. Write down the thing, the price and when they want it by.
- Slide 4: Video: a child's hands count coins into small stacks on a table. Text: Work out the weeks together. $60 at $5 a week is 12 weeks. Let them do the math.
- Slide 5: Photo: a glass jar holds coins and a few bills on a windowsill. Text: Let them check how close they are. A jar, a chart on the fridge or a note on your phone. Once a week.
- Slide 6: Photo: a child sits at a table looking at a money jar, seen from behind. Text: Let them change their mind. By week four, they may want something else. The money is still theirs.
- Slide 7: the standard waitlist alt text.

**Instagram caption:**

> 'Can I have it?' It costs $60, and it's the third thing this week.
>
> You don't want to say no every time. But you can't say yes every time, either.
>
> Try this:
> 1. Turn it into a goal: the thing, the price, and when they want it.
> 2. Work out the weeks together. $60 at $5 a week is 12 weeks.
> 3. Let them check how close they are, once a week.
> 4. Let them change their mind. The money is still theirs.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #allowance #raisingkids

**TikTok caption:** $60 at $5 a week is 12 weeks. Let them do the math. Waitlist link in bio. #allowance #raisingkids #parentsoftiktok

**Facebook caption:**

> The holiday ads have started, and so has 'Can I have it?'
>
> One thing that helps: turn the want into a goal. Write down the thing, the price and when they want it. Then work out the weeks together. $60 at $5 a week is 12 weeks, and a 9-year-old can do that math. Let them check how close they are once a week.
>
> Some kids change their mind by week four. That's fine. The money is still theirs. What's at the top of the list at your house?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -1.4 to 3.0; captions Instagram 1.2, Facebook 1.2, TikTok -1.8.

**Note:** It doesn't say where the $5 comes from, so it takes no side on paying for chores.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 26, Wednesday 11 November. The job that didn't happen

**Pillar:** Kids have a say.

**Problem in one line:** A kid has a busy week, quietly skips a job, and it turns into a fight.

**What to do in one line:** Tell kids they can ask to move a job, show what a good ask sounds like, and say yes when you can.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "The trash didn't go out." Payoff: "Nobody said a word." Sub: "They had a big test. The truck came and went." | -0.7 |
| 2 | The feeling | Photo, text at the top | Headline: "Then it turns into a fight." Sub: "About the trash. And about not saying anything." | 3.1 |
| 3 | What to do | Photo, text at the bottom | Headline: "Tell them they can ask to move a job." Sub: "A busy week is a real reason. Skipping it quietly isn't." | 1.8 |
| 4 | What to do | Photo, text at the bottom | Headline: "Show them what a good ask sounds like." Sub: "'Can I do the trash tomorrow? I have a test.' Short, and before it's due." | 0.7 |
| 5 | What to do | Video, 7 to 8 s, text at the bottom (a still from the middle on TikTok) | Headline: "Say yes when you can." Sub: "And when it's a no, say why. 'The truck comes at 7am.'" | -1.6 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A full trash can with its lid not closing, by a back door or in a garage, early morning light. No people. Search: `full trash can lid open garage morning`. Avoid: brand or city logos on the can.
- Slide 2: A parent and a teen in a kitchen, the teen with arms crossed, both seen from the side or behind. The teen's face is not in close-up. Search: `parent teenager kitchen arms crossed`.
- Slide 3: A teen at a desk with books and a lamp in the evening, seen from behind. Search: `teenager studying desk lamp evening back view`. Avoid: readable screens or books.
- Slide 4: A teen and a parent talking at a kitchen counter, relaxed, seen from the side. The teen's face is not in close-up. Search: `teenager parent talking kitchen counter`.
- Slide 5: A 7 to 8 s clip of two people wheeling a trash bin down a driveway at dusk, seen from behind. Search: `wheeling trash bin driveway dusk`. Avoid: house numbers, license plates.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a full trash can with its lid not closing stands by a back door. Text: The trash didn't go out. Nobody said a word. They had a big test. The truck came and went.
- Slide 2: Photo: a parent and a teen stand in a kitchen, the teen with arms crossed. Text: Then it turns into a fight. About the trash. And about not saying anything.
- Slide 3: Photo: a teen studies at a desk under a lamp in the evening, seen from behind. Text: Tell them they can ask to move a job. A busy week is a real reason. Skipping it quietly isn't.
- Slide 4: Photo: a teen and a parent talk at a kitchen counter. Text: Show them what a good ask sounds like. 'Can I do the trash tomorrow? I have a test.' Short, and before it's due.
- Slide 5: Video: two people wheel a trash bin down a driveway at dusk, seen from behind. Text: Say yes when you can. And when it's a no, say why. 'The truck comes at 7am.'
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> The trash didn't go out. They had a big test, and the truck came and went. Nobody said a word.
>
> Then it turns into a fight about the trash, and about not saying anything.
>
> Try this:
> 1. Tell them they can ask to move a job.
> 2. Show them what a good ask sounds like: 'Can I do it tomorrow? I have a test.'
> 3. Say yes when you can. When it's a no, say why.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #raisingkids #familylife

**TikTok caption:** A busy week is a real reason to move a job. Skipping it quietly isn't. Waitlist link in bio. #raisingkids #familylife #parentsoftiktok

**Facebook caption:**

> What happens at your house when a kid can't get to their job?
>
> In a lot of homes, it just doesn't get done, and nobody finds out until the truck has come and gone. It goes better when kids know they can ask to move a job. 'Can I do the trash tomorrow? I have a test.' Short, and before it's due.
>
> Say yes when you can. When it's a no, say why. Do your kids ask, or just skip it?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -1.6 to 3.1; captions Instagram 1.3, Facebook 2.0, TikTok 3.1.

**Note:** This is the "Kids have a say" pillar as plain advice. It doesn't say or suggest that Bonded does it.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 27, Thursday 12 November. 'We'll walk him every day.'

**Pillar:** One shared plan.

**Problem in one line:** The kids promised to walk the dog every day, and now the dog is your job too.

**What to do in one line:** Split the dog into small jobs, match each job to a kid's age, and swap the walks each week.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Headline: "'We'll walk him every day. Promise.'" Sub: "That was eight months ago." | 1.6 |
| 2 | The feeling | Photo, text at the top | Headline: "Now the dog is your job, too." Sub: "Every walk. Every meal. Every rainy night." | 3.5 |
| 3 | What to do | Photo, text at the bottom | Headline: "Split the dog into small jobs." Sub: "Morning food. Evening walk. Fresh water. Each job gets one name." | 1.0 |
| 4 | What to do | Video, 7 to 8 s, text at the top (a still from the middle on TikTok) | Headline: "Match the job to the kid." Sub: "A 5-year-old can fill the water bowl. A 12-year-old can do the walk." | -0.5 |
| 5 | What to do | Photo, text at the bottom | Headline: "Swap the walks each week." Sub: "So nobody gets every rainy night." | 3.7 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A dog sitting by the front door looking up at the camera, a leash hanging on a hook above it. No people. Room at the top for the handle. Search: `dog waiting by front door leash`. Avoid: collar tags with a readable name.
- Slide 2: An adult walking a dog alone at night in the rain with an umbrella, seen from behind under a street light. Search: `person walking dog rain night umbrella back view`. Avoid: street signs.
- Slide 3: Close-up of dog food being poured from a scoop into a bowl on a kitchen floor, the dog waiting nearby. Search: `pouring dog food bowl kitchen floor`. Avoid: pet food brands.
- Slide 4: A 7 to 8 s clip of a small child's hands carefully carrying a water bowl and setting it down for a dog. Hands and arms only. Search: `child giving dog water bowl`.
- Slide 5: Two kids walking a dog on a leafy sidewalk in daylight, seen from behind, one holding the leash. Search: `two kids walking dog sidewalk back view`. Avoid: street signs, house numbers.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a dog sits by the front door looking up, with a leash hanging above it. Text: 'We'll walk him every day. Promise.' That was eight months ago.
- Slide 2: Photo: an adult walks a dog alone in the rain at night under an umbrella, seen from behind. Text: Now the dog is your job, too. Every walk. Every meal. Every rainy night.
- Slide 3: Photo: dog food pours from a scoop into a bowl as the dog waits. Text: Split the dog into small jobs. Morning food. Evening walk. Fresh water. Each job gets one name.
- Slide 4: Video: a small child carefully carries a water bowl and sets it down for a dog. Text: Match the job to the kid. A 5-year-old can fill the water bowl. A 12-year-old can do the walk.
- Slide 5: Photo: two kids walk a dog along a leafy sidewalk, seen from behind. Text: Swap the walks each week. So nobody gets every rainy night.
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> 'We'll walk him every day. Promise.' That was eight months ago.
>
> Now the dog is your job, too. Every walk. Every meal. Every rainy night.
>
> Try this:
> 1. Split the dog into small jobs: morning food, evening walk, fresh water.
> 2. Match each job to a kid's age.
> 3. Swap the walks each week, so nobody gets every rainy night.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familylife #siblings

**TikTok caption:** 'We'll walk him every day. Promise.' Eight months later, here's the fix. Waitlist link in bio. #familylife #siblings #parentsoftiktok

**Facebook caption:**

> Did your kids promise to walk the dog every day, too?
>
> The promise is easier to keep when the dog is split into small jobs: morning food, evening walk, fresh water. Each job gets one name, and it fits the kid. A 5-year-old can fill the water bowl. A 12-year-old can do the walk. Swap the walks each week, so nobody gets every rainy night.
>
> Who really walks the dog at your house?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -0.5 to 3.7; captions Instagram 2.6, Facebook 2.9, TikTok 2.5.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

#### Day 28, Friday 13 November. Friday: say what everyone did

**Pillar:** Effort gets noticed.

**Problem in one line:** The week is done, and Friday ends with the list of what went wrong.

**What to do in one line:** At Friday dinner, everyone says one thing someone else did this week, grown-ups too, one minute each.

**Placement:** Instagram carousel, Facebook multi-photo post, TikTok photo mode. 6 slides: 4 photo, 1 video, 1 plain (83% photo or video).

| Slide | Arc | Media | Words | Grade |
|---|---|---|---|---|
| 1 | The problem | Photo, text at the bottom, handle at the top | Setup: "The week is done." Payoff: "Did anyone notice what it took?" Sub: "Lunches packed. The dog walked. A project in on time." | -0.5 |
| 2 | The feeling | Photo, text at the top | Headline: "Fridays usually end with what went wrong." Sub: "The late bus. The lost glove. The fight about the dishes." | 0.6 |
| 3 | What to do | Video, 7 to 8 s, text at the bottom (a still from the middle on TikTok) | Headline: "At dinner, go around the table." Sub: "Each person says one thing someone else did this week." | 3.0 |
| 4 | What to do | Photo, text at the bottom | Headline: "Grown-ups go too." Sub: "'Thanks for driving me to practice' counts. So does 'You found my glove.'" | -0.2 |
| 5 | What to do | Photo, text at the bottom | Headline: "Keep it short." Sub: "One minute each, while the food is still hot." | 0.5 |
| 6 | Bonded, then the waitlist | Plain, the standard waitlist slide | Headline: "Join the waitlist." Sub and pill as standard | 2.8 |

**Media brief:**
- Slide 1: A family at a dinner table on a Friday evening, a wide shot in warm light, faces small or turned away. Room at the top for the handle. Search: `family dinner table evening wide shot warm light`. Avoid: TV screens, brand packaging.
- Slide 2: A parent sitting on the stairs at the end of the day, shoes off, seen from the side. Search: `tired parent sitting on stairs evening`.
- Slide 3: A 7 to 8 s clip of hands passing a bowl across a dinner table, close-up. Search: `passing bowl dinner table hands`.
- Slide 4: A teen and a parent laughing at a dinner table, seen from the side. The teen's face is not in close-up. Search: `teenager parent laughing dinner table`.
- Slide 5: Close-up of a steaming dish in the middle of a dinner table, plates around it. Search: `steaming dish dinner table close up`.
- Slide 6: the standard waitlist slide.

**Alt text:**
- Slide 1: Photo: a family sits around a dinner table in warm evening light. Text: The week is done. Did anyone notice what it took? Lunches packed. The dog walked. A project in on time.
- Slide 2: Photo: a parent sits on the stairs at the end of the day, shoes off. Text: Fridays usually end with what went wrong. The late bus. The lost glove. The fight about the dishes.
- Slide 3: Video: hands pass a bowl across a dinner table. Text: At dinner, go around the table. Each person says one thing someone else did this week.
- Slide 4: Photo: a teen and a parent laugh together at the dinner table. Text: Grown-ups go too. 'Thanks for driving me to practice' counts. So does 'You found my glove.'
- Slide 5: Photo: a steaming dish sits in the middle of a dinner table. Text: Keep it short. One minute each, while the food is still hot.
- Slide 6: the standard waitlist alt text.

**Instagram caption:**

> The week is done. Lunches packed, the dog walked, a project in on time. Did anyone notice what it took?
>
> Fridays usually end with what went wrong. The late bus. The lost glove. The fight about the dishes.
>
> Try this:
> 1. At dinner, go around the table.
> 2. Each person says one thing someone else did this week.
> 3. Grown-ups go too.
> 4. Keep it short, while the food is still hot.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familydinner #familytime

**TikTok caption:** Friday dinner: everyone says one thing someone else did this week. Waitlist link in bio. #familydinner #familytime #parentsoftiktok

**Facebook caption:**

> A Friday dinner idea: go around the table, and each person says one thing someone else did this week.
>
> It sounds small. But most weeks end with the list of what went wrong, and this is the other list. 'Thanks for driving me to practice' counts. So does 'You found my glove.' Grown-ups go too, and it takes a minute each.
>
> What would be on your family's list this week?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** slides -0.5 to 3.0; captions Instagram 1.4, Facebook 2.7, TikTok 3.7.

**Note:** Dinner isn't a reward for anything; the thank-yous are just part of it.

**Before posting:** every file still has to be found, screened and given a rights row; none is chosen yet. Slide 1 needs room at the top for the handle.

## Part B: ten standalone Reels

### How every Reel is built

- **Format:** vertical 1080 x 1920 at 30 fps, 15 to 25 s including the end card. The clips are muted; the renderer adds a silent audio track because some platforms expect one.
- **The words:** one line on screen at a time, burned in. Paper words sit on an Ink band, in Plus Jakarta Sans 800, at 84 px or smaller down to 60 px, up to 5 lines in an 870 px box. They go in the middle by default, or at the top or lower down, as each script says.
  - This is the messaging v2 look, as `tools/proofs/render-reel.mjs` draws it. It replaces the older "white with a soft shadow" line in the campaign's Raw video style and in `design/brand-reconciliation.md`.
  - Every line must reach 4.5:1 against the lightest 5% of the pixels behind it.
- **Safe zones:** 250 px at the top, 350 px at the bottom, 150 px on the right where the buttons sit (`campaign/weeks-01-02.md`), and 60 px on the left (the renderer).
- **The arc in 15 to 25 s:** a 3-second hook that states the problem, a beat for the feeling, then two or three beats of what to do. Bonded appears only on the end card.
- **Times** in each script are seconds into the clip part. The 3-second end card follows it.
- **The end card** is 3 s of plain Paper: the official colour lockup, then the headline "Join the Bonded waitlist." and the sub "We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android." This is the form already set in the skill's `templates/reels-entry.mjs`. It has no pill, so the captions carry the call to action.
- **The cover** is the hook frame. The hook sits inside the centre of the frame, so the profile grid doesn't crop it.
- **Footage:** generic family-life shots that can be matched to the owner's cleaned clips or to free stock, following the media rules above. Hands, backs and wide shots are best. There are no app screens in any Reel.
- **Sound:** none is needed, because the words carry everything. Any music would be the owner's choice, from each platform's own commercial library, added when posting.

### Reel 1 (r01). Did anyone feed the fish?

**Pillar:** One shared plan. **Length:** 19.5 s.

**Hook (0 to 3 s):** "'Did anyone feed the fish?'"

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "'Did anyone feed the fish?'" | middle |
| 3 to 6 s | The problem | "Three people say yes." | middle |
| 6 to 9.5 s | The feeling | "The fish has had a very big day." | top |
| 9.5 to 13 s | What to do | "Give each job one name." | middle |
| 13 to 16.5 s | What to do | "Then the fish eats once." | top |
| 16.5 to 19.5 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: A goldfish in a small home tank on a kitchen counter, close-up. No people.
- 3 to 6 s: Three quick cuts, about 1 s each: three different hands (an adult's, a child's, a teen's) drop fish food into the same tank. Hands only.
- 6 to 9.5 s: The fish swimming slowly near the top, with food floating. Close-up. Words at the top, clear of the fish.
- 9.5 to 13 s: A paper list on a fridge and a hand ticking a box. The writing is soft and not readable.
- 13 to 16.5 s: One child's hand drops a single pinch of food; the fish eats. Hands only. Words at the top.

**Instagram caption:**

> 'Did anyone feed the fish?' Three people say yes.
>
> The fish has had a very big day. When everyone does a job, nobody is sure it got done.
>
> Try this:
> 1. Give each job one name.
> 2. Swap the names each week if you like.
> 3. Write it where everyone can see it.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familylife #siblings

**TikTok caption:** Three people fed the fish. Give each job one name. Waitlist link in bio. #familylife #siblings #parentsoftiktok

**Facebook caption:**

> Has your fish ever had three dinners in one night?
>
> It happens with any job that belongs to everyone: the fish, the plants, the porch light. Everyone thinks someone else did it, or everyone does it. One name on each job fixes most of it. Swap the names each week if you like.
>
> What's the job in your house that everyone thinks someone else did?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen 0.2; captions Instagram 2.0, Facebook 2.8, TikTok -0.7.

### Reel 2 (r02). Where's my...?

**Pillar:** One shared plan. **Length:** 19.5 s.

**Hook (0 to 3 s):** "'Where's my...?'"

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "'Where's my...?'" | middle |
| 3 to 6 s | The problem | "Water bottle. Charger. Library book." | middle |
| 6 to 9.5 s | The feeling | "Every question goes to one person." | top |
| 9.5 to 13 s | What to do | "Try: 'Where did you see it last?'" | middle |
| 13 to 16.5 s | What to do | "Then wait. They usually find it." | middle |
| 16.5 to 19.5 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: A kid of about 8 to 12 standing in a hallway with arms out in a shrug, seen from behind.
- 3 to 6 s: Three fast cuts: a hand lifting a couch cushion, a hand searching a backpack, a hand reaching under a bed. Hands only.
- 6 to 9.5 s: A parent at a kitchen counter, seen from behind or the side, turning toward the hallway. Words at the top.
- 9.5 to 13 s: The parent and the child in the hallway, the parent pointing toward a room, seen from behind.
- 13 to 16.5 s: A child's hand pulls a water bottle out from under a couch and holds it up.

**Instagram caption:**

> 'Where's my...?' Water bottle. Charger. Library book.
>
> Every question goes to one person, and you end up as the lost and found.
>
> Try this:
> 1. Ask, 'Where did you see it last?'
> 2. Wait. Count to ten if you need to.
> 3. Give things one home, like one shelf for bottles and one basket for chargers.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #mentalload #familylife

**TikTok caption:** 'Where did you see it last?' Then wait. They usually find it. Waitlist link in bio. #mentalload #familylife #parentsoftiktok

**Facebook caption:**

> Is there one person in your house who gets every 'Where's my...?'
>
> Try asking 'Where did you see it last?' and then waiting. Most of the time, they find it. Giving things one home helps too, like one shelf for water bottles and one basket for chargers.
>
> What goes missing most at your house?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen 2.7; captions Instagram 1.9, Facebook 3.7, TikTok 0.5.

### Reel 3 (r03). In a minute.

**Pillar:** Kids have a say. **Length:** 19 s.

**Hook (0 to 3 s):** "'In a minute.'"

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "'In a minute.'" | middle |
| 3 to 6 s | The problem | "Said by everyone in your house. Including you." | middle |
| 6 to 9 s | The feeling | "A minute is never a minute." | middle |
| 9 to 12.5 s | What to do | "Try a time instead." | top |
| 12.5 to 16 s | What to do | "'At 4:30' is a plan. 'In a minute' isn't." | top |
| 16 to 19 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: A teen lying on a bed with a phone, seen from behind or over the shoulder. The phone screen is not visible.
- 3 to 6 s: An adult on a couch with a laptop, seen from behind, lifting one hand as if to say "one second".
- 6 to 9 s: A sink of dishes or a kitchen wall clock in a time-lapse, the light changing.
- 9 to 12.5 s: An analog kitchen clock, close-up. Words at the top.
- 12.5 to 16 s: The clock reads 4:30, then a kid's hands start unloading the dishwasher. The clock must read 4:30 to match the words.

**Instagram caption:**

> 'In a minute.' Said by everyone in your house, including you.
>
> A minute is never a minute, so the job never starts.
>
> Try this:
> 1. Ask for a time instead: 'At 4:30?'
> 2. Let them pick the time.
> 3. At 4:30, it starts.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #parentingtips #familyroutine

**TikTok caption:** 'In a minute' is never a minute. 'At 4:30' is a plan. Waitlist link in bio. #parentingtips #familyroutine #parentsoftiktok

**Facebook caption:**

> How long is 'in a minute' at your house?
>
> Try asking for a time instead, and let them pick it. 'At 4:30' is a plan you can both remember. 'In a minute' isn't. Try it on the grown-ups too.
>
> What's the longest minute you've waited?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen 2.2; captions Instagram 2.2, Facebook 2.1, TikTok 1.6.

### Reel 4 (r04). What's at the bottom of the backpack?

**Pillar:** One shared plan. **Length:** 19.5 s.

**Hook (0 to 3 s):** "What's at the bottom of the backpack?"

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "What's at the bottom of the backpack?" | middle |
| 3 to 6 s | The problem | "A banana. From last month." | top |
| 6 to 9.5 s | The feeling | "And three forms you were meant to sign." | top |
| 9.5 to 13 s | What to do | "Empty every bag on Friday." | middle |
| 13 to 16.5 s | What to do | "Papers to one spot. Food in the trash." | middle |
| 16.5 to 19.5 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: A kid's backpack on a kitchen floor and a hand unzipping it, close-up.
- 3 to 6 s: The hand pulls out a very brown banana. Words at the top.
- 6 to 9.5 s: The hand pulls out crumpled papers. No names or school logos readable. Words at the top.
- 9.5 to 13 s: The backpack turned upside down over a table, things falling out, two kids' hands sorting them.
- 13 to 16.5 s: Papers going into a tray by the door, and the banana dropping into a trash can.

**Instagram caption:**

> What's at the bottom of the backpack? A banana from last month, and three forms you were meant to sign.
>
> You find out the night before they're due.
>
> Try this:
> 1. Empty every bag on Friday.
> 2. Papers go to one spot by the door.
> 3. Food goes in the trash.
>
> Five minutes, and nobody finds a banana in December.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familyroutine #raisingkids

**TikTok caption:** There's a banana from last month at the bottom. Empty the bags on Friday. Waitlist link in bio. #familyroutine #raisingkids #parentsoftiktok

**Facebook caption:**

> When did you last see the bottom of your kids' backpacks?
>
> A five-minute Friday habit helps: every bag gets emptied. Papers go to one spot by the door, so the forms get signed. Food goes in the trash.
>
> What's the strangest thing you've found in a backpack?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen 1.3; captions Instagram 2.8, Facebook 2.6, TikTok 3.2.

### Reel 5 (r05). Three people are bringing potatoes.

**Pillar:** One shared plan. **Length:** 19.5 s.

**Hook (0 to 3 s):** "Three people are bringing potatoes."

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "Three people are bringing potatoes." | top |
| 3 to 6 s | The problem | "Nobody is bringing pie." | top |
| 6 to 9.5 s | The feeling | "You find out at 2pm on Thursday." | middle |
| 9.5 to 13 s | What to do | "Make one list for the whole meal." | middle |
| 13 to 16.5 s | What to do | "Every dish gets one name. Even the ice." | middle |
| 16.5 to 19.5 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: Three bowls of mashed potatoes set down on a table by three different pairs of hands. Words at the top.
- 3 to 6 s: A wide shot of a holiday table with an empty pie dish. Words at the top.
- 6 to 9.5 s: An adult in a kitchen opening the fridge or the oven, seen from behind.
- 9.5 to 13 s: A hand writing a list of dishes on paper. Dish names can be readable; no people's names.
- 13 to 16.5 s: A hand carrying a plain bag of ice into a kitchen. No brand on the bag.

**Instagram caption:**

> Three people are bringing potatoes. Nobody is bringing pie.
>
> And you find out at 2pm on Thursday.
>
> Try this:
> 1. Make one list for the whole meal.
> 2. Give every dish one name.
> 3. Send the list to everyone a week before.
>
> Even the ice gets a name.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familydinner #familylife

**TikTok caption:** Three bowls of potatoes and no pie. One list fixes it. Waitlist link in bio. #familydinner #familylife #parentsoftiktok

**Facebook caption:**

> Hosting this year, or bringing a dish?
>
> One list for the whole meal saves a lot of surprises. Every dish gets one name, and the list goes to everyone a week before. Even the ice and the folding chairs.
>
> What does your family always end up with too much of?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen 2.8; captions Instagram 2.6, Facebook 3.5, TikTok 0.5.

### Reel 6 (r06). The couch is for laundry now

**Pillar:** One shared plan. **Length:** 22 s.

**Hook (0 to 3 s):** "The clean laundry lives on the couch now."

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "The clean laundry lives on the couch now." | top |
| 3 to 6 s | The problem | "Everyone takes from the pile." | top |
| 6 to 9 s | The feeling | "Nobody puts it away. Except you." | top |
| 9 to 12.5 s | What to do | "Give each person a basket." | middle |
| 12.5 to 16 s | What to do | "Clean clothes go in. They put it away." | middle |
| 16 to 19 s | What to do | "Now you can sit on the couch." | top |
| 19 to 22 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: A heap of clean laundry on a couch, a still wide shot. No underwear on top. Words at the top.
- 3 to 6 s: Cuts of different hands pulling a T-shirt, a sock and a hoodie from the pile.
- 6 to 9 s: An adult folding alone on the couch in the evening, seen from behind or the side.
- 9 to 12.5 s: A row of laundry baskets on a floor, hands dropping folded clothes into them.
- 12.5 to 16 s: A child carrying a basket up the stairs, seen from behind.
- 16 to 19 s: An adult sitting down on the empty couch with a mug, seen from the side. An adult face is fine.

**Instagram caption:**

> The clean laundry lives on the couch now. Everyone takes from the pile.
>
> Nobody puts it away, except you.
>
> Try this:
> 1. Give each person a basket.
> 2. Clean clothes go in their basket.
> 3. They put it away.
>
> Then you can sit on the couch.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familyroutine #mentalload

**TikTok caption:** The couch is for sitting. One laundry basket each. Waitlist link in bio. #familyroutine #mentalload #parentsoftiktok

**Facebook caption:**

> Is the couch also the laundry shelf at your house?
>
> A basket for each person helps. Clean clothes go straight into the right basket, and each person puts their own away. Little kids can put away socks and pajamas.
>
> Who is always the last one to empty their basket?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen 1.4; captions Instagram 2.2, Facebook 3.7, TikTok 1.9.

### Reel 7 (r07). Someone used the last of the milk.

**Pillar:** One shared plan. **Length:** 19.5 s.

**Hook (0 to 3 s):** "Someone used the last of the milk."

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "Someone used the last of the milk." | middle |
| 3 to 6 s | The problem | "And put the empty jug back." | middle |
| 6 to 9.5 s | The feeling | "You find out at breakfast." | top |
| 9.5 to 13 s | What to do | "Put a list on the fridge." | middle |
| 13 to 16.5 s | What to do | "Use the last one? Write it down." | top |
| 16.5 to 19.5 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: A fridge door opens and a hand lifts a milk jug that swings up too easily, because it's empty. Adult hand.
- 3 to 6 s: Close-up of the empty jug back on the fridge shelf. No brand label.
- 6 to 9.5 s: Cereal poured into a bowl; a hand holds the empty jug over it. Words at the top.
- 9.5 to 13 s: A paper list on a fridge with a pencil hanging on a string.
- 13 to 16.5 s: A child's hand writing "milk" on the list. Words at the top.

**Instagram caption:**

> Someone used the last of the milk and put the empty jug back.
>
> You find out at breakfast.
>
> Try this:
> 1. Put a shopping list on the fridge.
> 2. Whoever uses the last one writes it down.
> 3. Take a photo of the list before you shop.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familylife #familyroutine

**TikTok caption:** Use the last of the milk? Write it on the list. Waitlist link in bio. #familylife #familyroutine #parentsoftiktok

**Facebook caption:**

> Who puts the empty milk jug back in the fridge at your house?
>
> A simple rule helps: there's a list on the fridge, and whoever uses the last of something writes it down. Kids who can write can do it. Little ones can draw it. Take a photo of the list before you shop.
>
> What always runs out first at your house?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen -0.6; captions Instagram 2.0, Facebook 2.2, TikTok -1.6.

### Reel 8 (r08). Clean or dirty?

**Pillar:** One shared plan. **Length:** 22 s.

**Hook (0 to 3 s):** "Is the dishwasher clean or dirty?"

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "Is the dishwasher clean or dirty?" | middle |
| 3 to 6 s | The problem | "Nobody knows." | middle |
| 6 to 9.5 s | The feeling | "So the sink fills up." | top |
| 9.5 to 12.5 s | What to do | "Hang a note: 'Clean' on one side, 'Dirty' on the other." | middle |
| 12.5 to 16 s | What to do | "Whoever starts it flips the note." | middle |
| 16 to 19 s | What to do | "Whoever's on dishes this week empties it." | top |
| 19 to 22 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: A closed dishwasher in a kitchen, a still shot. No brand logo in view.
- 3 to 6 s: An adult hand opens it a little, pauses, and closes it again.
- 6 to 9.5 s: A sink stacked with dishes. Words at the top.
- 9.5 to 12.5 s: A handwritten card held on the dishwasher by a magnet clip, "Clean" on one side and "Dirty" on the other.
- 12.5 to 16 s: A hand flips the card.
- 16 to 19 s: A teen's hands unloading plates into a cupboard. Words at the top.

**Instagram caption:**

> Is the dishwasher clean or dirty? Nobody knows.
>
> So nobody empties it, and the sink fills up.
>
> Try this:
> 1. Hang a note on it: 'Clean' on one side, 'Dirty' on the other.
> 2. Whoever starts it flips the note.
> 3. Whoever is on dishes this week empties it.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familyroutine #siblings

**TikTok caption:** Clean or dirty? A note on the dishwasher ends the guessing. Waitlist link in bio. #familyroutine #siblings #parentsoftiktok

**Facebook caption:**

> Does anyone else have a dishwasher that is never clean and never dirty?
>
> A paper note helps, with 'Clean' on one side and 'Dirty' on the other. Whoever starts it flips the note, and whoever is on dishes that week empties it.
>
> What's your dishwasher rule?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen 1.5; captions Instagram 2.3, Facebook 4.2, TikTok 2.6.

### Reel 9 (r09). What's under the back seat?

**Pillar:** One shared plan. **Length:** 19.5 s.

**Hook (0 to 3 s):** "What's under the back seat?"

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "What's under the back seat?" | middle |
| 3 to 6 s | The problem | "Three cups. One sock. Some very old fries." | top |
| 6 to 9.5 s | The feeling | "And one person cleans it out." | top |
| 9.5 to 13 s | What to do | "Keep a small trash bag in the back." | middle |
| 13 to 16.5 s | What to do | "Before anyone gets out, everyone grabs their stuff." | top |
| 16.5 to 19.5 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: A car's back-seat footwell full of clutter, a hand reaching under the seat. No car logos or license plates.
- 3 to 6 s: Cuts of the hand pulling out a cup, a sock and some old fries in a plain paper bag. No brands. Words at the top.
- 6 to 9.5 s: An adult alone at the open car door with a trash bag, seen from behind. Words at the top.
- 9.5 to 13 s: A small trash bag hanging on the back of a front seat.
- 13 to 16.5 s: Kids' hands grabbing water bottles and jackets as the car doors open, seen from behind. No faces. Words at the top.

**Instagram caption:**

> What's under the back seat? Three cups, one sock and some very old fries.
>
> And it's usually one person who cleans it out.
>
> Try this:
> 1. Keep a small trash bag in the back.
> 2. Before anyone gets out, everyone grabs their own stuff.
> 3. Once a week, everyone helps for five minutes.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #familylife #weekendwithkids

**TikTok caption:** Three cups, one sock and some very old fries. Everyone grabs their own stuff. Waitlist link in bio. #familylife #weekendwithkids #parentsoftiktok

**Facebook caption:**

> When did you last look under the back seat?
>
> One rule helps: before anyone gets out, everyone grabs what they brought in. Keep a small trash bag in the back. And once a week, give it five minutes together.
>
> What's the oldest thing you've found in there?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen 0.5; captions Instagram 2.4, Facebook 2.5, TikTok 1.5.

### Reel 10 (r10). 8:58pm: 'I need poster board.'

**Pillar:** One shared plan. **Length:** 23 s.

**Hook (0 to 3 s):** "8:58pm. 'I need poster board for tomorrow.'"

| Time | Arc | On screen | Words at |
|---|---|---|---|
| 0 to 3 s | The problem (hook) | "8:58pm. 'I need poster board for tomorrow.'" | middle |
| 3 to 6 s | The problem | "The store closes at 9." | middle |
| 6 to 9.5 s | The feeling | "So you're in the car in your slippers." | top |
| 9.5 to 13 s | What to do | "Ask one question at dinner:" | top |
| 13 to 16.5 s | What to do | "'What do you need for tomorrow?'" | top |
| 16.5 to 20 s | What to do | "On Sunday, ask about the whole week." | middle |
| 20 to 23 s | Bonded, then the waitlist (end card) | The standard end card | middle |

**Footage needed:**
- 0 to 3 s: A kitchen or microwave clock reading 8:58, then a child's hand holding up an assignment sheet. The clock must read 8:58; the sheet has no readable name.
- 3 to 6 s: A parent grabbing car keys from a hook by the door, seen from behind.
- 6 to 9.5 s: Close-up of feet in slippers walking to a car at night. Words at the top.
- 9.5 to 13 s: A family at a dinner table, a wide shot in warm light, faces small. Words at the top.
- 13 to 16.5 s: The same dinner, a parent's hand turning toward a child as they talk. Words at the top.
- 16.5 to 20 s: A hand writing a short list on paper on the fridge.

**Instagram caption:**

> 8:58pm. 'I need poster board for tomorrow.' The store closes at 9.
>
> So you're in the car in your slippers.
>
> Try this:
> 1. Ask one question at dinner: 'What do you need for tomorrow?'
> 2. On Sunday, ask about the whole week.
> 3. Keep a few basics at home, like poster board and glue sticks.
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.
>
> #parentingtips #mentalload

**TikTok caption:** 8:58pm: 'I need poster board for tomorrow.' Ask at dinner instead. Waitlist link in bio. #parentingtips #mentalload #parentsoftiktok

**Facebook caption:**

> Has anyone else made an 8:58pm trip for poster board?
>
> Two questions help. At dinner: 'What do you need for tomorrow?' On Sunday: 'What do you need this week?' Keeping a few basics at home helps too, like poster board, glue sticks and a white T-shirt that still fits.
>
> What's the strangest thing your kids have needed by morning?
>
> We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.
>
> Comment WAITLIST and we'll send you the link.

**Reading grade:** on screen 2.6; captions Instagram 2.3, Facebook 2.9, TikTok 3.7.

## Part C: checks

### Reading grades

Scored with `.claude/skills/bonded-social-media-posts/scripts/reading_grade.py` (Flesch-Kincaid). The limits are 4 for slides and 5 for captions. A slide is scored with its headline and sub together (setup, payoff and sub on a cover). Instagram captions are scored without the hashtags, Facebook captions in full, and TikTok on the hook only, as the script says. Every slide and caption passed, with no long words flagged.

| Post | Slides | Instagram | Facebook | TikTok |
|---|---|---|---|---|
| Day 15. Halloween, shared out | -0.5 to 3.9 | 2.1 | 3.2 | 1.6 |
| Day 16. Dark before dinner | -1.7 to 2.8 | 2.4 | 3.8 | 2.5 |
| Day 17. The school morning shoe hunt | -1.3 to 2.8 | 1.9 | 2.3 | 0.5 |
| Day 18. When a kid wakes up sick | -0.7 to 2.8 | 1.8 | 2.4 | 1.5 |
| Day 19. Who's making the lunches? | -0.1 to 3.5 | 2.0 | 2.3 | 3.7 |
| Day 20. 'I'll do it later.' | 2.3 to 3.7 | 4.3 | 3.6 | 2.5 |
| Day 21. When grandparents help out | -0.7 to 2.8 | 1.2 | 2.0 | 1.7 |
| Day 22. They folded the towels. Badly. | -1.1 to 2.8 | 1.5 | 2.8 | 0.7 |
| Day 23. The holidays start in one head | 0.5 to 3.0 | 3.0 | 3.3 | 2.3 |
| Day 24. A day off school, midweek | 1.1 to 2.8 | 2.4 | 3.7 | 3.2 |
| Day 25. 'Can I have it?' | -1.4 to 3.0 | 1.2 | 1.2 | -1.8 |
| Day 26. The job that didn't happen | -1.6 to 3.1 | 1.3 | 2.0 | 3.1 |
| Day 27. 'We'll walk him every day.' | -0.5 to 3.7 | 2.6 | 2.9 | 2.5 |
| Day 28. Friday: say what everyone did | -0.5 to 3.0 | 1.4 | 2.7 | 3.7 |
| The waitlist slide (every post) | 2.8 | | | |

A Reel's on-screen words are scored as one set, the hook and all the beats together, the way a slide's headline and sub are. A single beat of two to six words can't be scored on its own: one three-syllable word in a two-word line reads as grade 8 or more, as "Nobody knows." does. No beat has a word over three syllables.

| Reel | On screen | Instagram | Facebook | TikTok |
|---|---|---|---|---|
| r01. Did anyone feed the fish? | 0.2 | 2.0 | 2.8 | -0.7 |
| r02. Where's my...? | 2.7 | 1.9 | 3.7 | 0.5 |
| r03. In a minute. | 2.2 | 2.2 | 2.1 | 1.6 |
| r04. What's at the bottom of the backpack? | 1.3 | 2.8 | 2.6 | 3.2 |
| r05. Three people are bringing potatoes. | 2.8 | 2.6 | 3.5 | 0.5 |
| r06. The couch is for laundry now | 1.4 | 2.2 | 3.7 | 1.9 |
| r07. Someone used the last of the milk. | -0.6 | 2.0 | 2.2 | -1.6 |
| r08. Clean or dirty? | 1.5 | 2.3 | 4.2 | 2.6 |
| r09. What's under the back seat? | 0.5 | 2.4 | 2.5 | 1.5 |
| r10. 8:58pm: 'I need poster board.' | 2.6 | 2.3 | 2.9 | 3.7 |
| The end card (every Reel) | 3.2 | | | |

**Highest grade in each group:**
- Carousel slides: 3.9. Carousel captions: Instagram 4.3, Facebook 3.8, TikTok 3.7.
- Reels on screen: 2.8, end card 3.2. Reel captions: Instagram 2.8, Facebook 4.2, TikTok 3.7.

**Fixed while drafting:** four slides first scored over 4 and were rewritten before this version:
- Day 20 slide 2: "evening" became "night".
- Day 20 slide 3: the sub is shorter.
- Day 21 slide 4: "easy for everyone to remember" became "Then everyone knows it's Grandma's Tuesday."
- Day 27 slide 2: the list became three short sentences.

Day 20's Facebook caption was cut into shorter sentences, from 5.0 to below 5.

### Claim check

- **The only product line** is the approved positioning. It's on the waitlist slide in the slide form, and in the captions and on the end card in the caption form (`references/messaging.md`). It matches the build's shared, dated responsibilities, each with an owner (`product/feature-claims.md`, C13).
- **"It's coming to iPhone and Android"** is the approved line (C12). There is no date, no store and no download offer.
- **No feature talk.** Some advice sounds like what Bonded does, but it is advice any family can follow with paper or a fridge, and no post says or suggests that Bonded does it:
  - asking to move a job (Day 26), asking for help early (Day 20), saving toward a goal (Day 25) and thanking each other (Days 22 and 28)
- **No calendar.** Bonded has none (C1), so the advice says "list", "one page" or "where the family can see them", never "calendar" (Days 21, 23 and 24).
- **Nothing about points or approvals** (C2), and no app screen outside the standard waitlist slide. The Reels have none.
- **Money:** Day 25 doesn't say where the $5 a week comes from, so it takes no side on paying for chores. "The money is still theirs" is advice, not a product claim. Bonded records money and doesn't move it; nothing here says otherwise.
- **Family time is never earned.** The Halloween walk, the dark-evening plans, the library day and the Friday dinner come with no jobs attached. No reward is tied to any job.
- **No statistics, testimonials or invented stories.** The captions use "you" for the parent and "we" only for building Bonded. Phrases like "in a lot of homes" and "most years" are observations, not data.
- **Dates and facts in the copy:**
  - US clocks go back at 2am on Sun 1 Nov 2026 (Day 16 Facebook: "last night in the US").
  - Thanksgiving is Thu 26 Nov 2026 (Day 23 Facebook; Reel 5's "Thursday").
  - Wed 11 Nov is Veterans Day, a school day off in many districts. Day 24 says only "No school on Wednesday".
  - "The holiday ads have started" (Day 25 Facebook) is an observation for 10 Nov; drop it if the owner would rather not.
- **Operational promises (not product claims):**
  - "Comment WAITLIST and we'll send you the link." needs the ManyChat reply on Instagram (its trigger covers posts and reels, `ops/manychat-waitlist.md`) and replies by hand on Facebook (D-2026-10-17-2).
  - "Waitlist link in bio" needs go.bondedin.com in the TikTok bio.

### Other checks

- **Em dashes and emoji:** the whole file is plain ASCII (no characters above code 127), so it has no em dash (U+2014), no en dash and no emoji. Checked again with `grep` after writing.
- **Never-write words** (seamless, effortlessly, game-changing, unlock, transform, streamline, empower, say goodbye to chaos, making memories, your parenting journey, plot twist, POV) in the slides, beats, captions and alt text: none.
- **"again":** 0 in the copy. **"calendar":** 0 in the copy. **"earn":** 0 in the copy.
- **Slide counts:** every post has 6 or 7 slides, at least 83% photo or video, one plain slide, and the waitlist slide last.
- **Reel lengths:** 19 to 23 s with the end card, inside 15 to 25 s.
- **Hashtags:** two per post on Instagram, the same two plus #parentsoftiktok on TikTok, none on Facebook. All come from the list in `references/messaging.md`.
- **Caption endings:** every Instagram and Facebook caption ends with the fixed Bonded line and "Comment WAITLIST and we'll send you the link." (Instagram then adds its hashtags). Every TikTok caption ends "Waitlist link in bio."

### Questions for the owner

1. **Approval.** Which days and Reels are approved as written, and which need changes? Nothing is scheduled until you say so.
2. **Posting hour.** Is 18:00 Montenegro time (noon US Eastern) still right for weeks 3 and 4? Or do you want to test an evening Eastern slot now that weeks 1 and 2 give some data? The hour is the only thing that would change.
3. **Media.** Should the media come from free stock, from the cleaned Reel clips, or from both? Free-stock licences have their own terms for photos of people, including not suggesting that the person uses or recommends a product. Each file's licence page needs checking, which is one more reason to prefer hands, backs and objects.
4. **The Reel end card.** It uses the words already set in `templates/reels-entry.mjs`, with the lockup above them. That puts "Bonded" on the card three times, and the 3 seconds are short for about 25 words. Keep it, or hold it for 4 s? The longest Reel would still be 24 s, but `render-reel.mjs` fixes the card at 3 s (`END_SECONDS`), so that needs a small renderer change.
5. **Stories and the Day 14 promise.** Stories for weeks 3 and 4 aren't drafted here. Day 14's story said "The best answers come back in week 3", so a share-back story is owed. It needs real replies, shared anonymously or with permission.
6. **Screen time.** The brief suggested screen-time trade-offs as a topic. The skill lists screen-time battles as "not a fit", so it is left out. Say if you want it anyway.


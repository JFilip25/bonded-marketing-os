// Messaging v2 posts for tools/proofs/render-v2.mjs: one entry per day, slides in posting order.
// Every string must appear word for word in the post's `source` (the campaign file once approved; the
// proposal before that). Photos are the owner's files from the Drive folder First_2W, prepped as stills;
// `pos` is the crop (CSS object-position) and `at` where the words sit. A video slide names the clip and
// the part used: clip: [start seconds, length seconds].

/** The plain waitlist slide that ends every post (D-2026-10-15-2, D-2026-10-15-3). */
export const WAITLIST = {
  headline: 'Join the waitlist.',
  sub: "Bonded is an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.",
  pill: 'Link in bio',
  screenFile: '67-mom-family-climbing-light.png',
};
const waitlist = { waitlist: true };

export const posts = [
  {
    day: 0,
    source: 'campaign/weeks-01-02.md', // Amendment 2
    slides: [
      { photo: 'd00_c01.jpg', pos: '45% 40%', handle: true, setup: 'In most homes,', payoff: 'one parent remembers everything.', sub: 'Lunches. Homework. Whose turn it is to feed the dog.' },
      { photo: 'd00_c02.jpg', pos: '40% 50%', headline: 'It gets tiring.', sub: 'Not because the jobs are hard. Because nobody else is keeping track.' },
      { photo: 'd00_c03.jpg', pos: '50% 50%', at: 'top', headline: "Give each kid a job that's theirs.", sub: 'Little kids can rinse cups or set the table. Big kids can cook dinner once a week.' },
      { photo: 'd00_c05.png', pos: '48% 30%', headline: 'Plan the week together on Sunday.', sub: 'Ten minutes is enough. Say who does what, and write it where everyone can see it.' },
      { photo: 'd00_c06.png', pos: '50% 59%', headline: "Now it's not all on one person.", sub: 'Everyone does a part. Everyone knows the plan.' },
      { photo: 'd00_c04.jpg', pos: '55% 50%', headline: "And there's more time for fun.", sub: 'Like a Saturday at the beach, with nobody asking who forgot what.' },
      waitlist,
    ],
  },

  // Days 1-14: proposed (proposals/messaging-v2.md), generated from the reviewed copy and media choices.
  {
    day: 1,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "Gemini_Generated_Image_d8ptxmd8ptxmd8pt.jpg", "pos": "55% 50%", "handle": true, "headline": "Every night, the same fight: whose job is it?", "sub": "Setting the table takes two minutes. Deciding who sets it takes fifteen."},
      {"photo": "d01_c07.png", "pos": "50% 25%", "headline": "You're tired of asking.", "sub": "And they're tired of being told."},
      {"photo": "social_images/s14.jpg", "pos": "50% 50%", "headline": "Make a short list of real jobs.", "sub": "Set the table. Feed the dog. Water the plants. Sort the recycling."},
      {"photo": "d01_c04.png", "pos": "50% 40%", "headline": "Let each kid pick one.", "sub": "It's theirs for a whole month. A job you picked is harder to argue about."},
      {"photo": "social_images/s10.jpg", "pos": "40% 50%", "headline": "At the end of the month, check in.", "sub": "Keep it, swap it, or add one more."},
      waitlist,
    ],
  },
  {
    day: 2,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "d02_hero_1.png", "pos": "50% 50%", "handle": true, "setup": "Maybe the problem", "payoff": "isn't the chores.", "sub": "Most fights start with 'I didn't know it was my turn.'"},
      {"photo": "d10_c02.png", "pos": "35% 50%", "headline": "So you end up as the referee.", "sub": "At dinner. Every night. Over the same dishwasher."},
      {"photo": "d09_hero2.png", "pos": "50% 30%", "headline": "Say whose job it is.", "sub": "One name on each job, before the week starts. Not on Tuesday night."},
      {"photo": "d09_c02.jpeg", "pos": "50% 50%", "at": "top", "headline": "Say what 'done' looks like.", "sub": "'Clean your room' can mean anything. 'Clothes in the basket, bed made, floor clear' can't."},
      {"photo": "social_images/s02.jpg", "pos": "50% 40%", "headline": "Write it where everyone can see it.", "sub": "On the fridge, or on a board by the door."},
      {"photo": "d02_hero_3.png", "pos": "50% 50%", "headline": "Check in on Sunday.", "sub": "Five minutes. What worked? What didn't? What changes next week?"},
      waitlist,
    ],
  },
  {
    day: 3,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "social_images/s15.jpg", "pos": "50% 30%", "handle": true, "setup": "One person in your home", "payoff": "knows every date.", "sub": "Soccer is on Tuesday. The dentist moved. Nobody else knows."},
      {"photo": "social_images/s06.jpg", "pos": "50% 30%", "headline": "Nobody picked you for this job.", "sub": "It just happened, one 'can you remind me' at a time."},
      {"photo": "d05_c05.png", "pos": "50% 40%", "headline": "Put it all in one place.", "sub": "Games, rides and parties. On one list that the whole family can see."},
      {"photo": "d09_hero4.png", "pos": "50% 40%", "headline": "Let each kid track their own stuff.", "sub": "A 10-year-old can remember gym day. Give them the chance."},
      {"photo": "social_images/s17.jpg", "pos": "40% 30%", "headline": "Then stop being the only one who knows.", "sub": "When someone asks you, point to the list."},
      waitlist,
    ],
  },
  {
    day: 4,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "d05_c03.png", "pos": "55% 50%", "handle": true, "setup": "Every night:", "payoff": "'What's for dinner?'", "sub": "And the same person has to answer."},
      {"photo": "social_images/s03.jpg", "pos": "50% 60%", "at": "top", "headline": "It's one more thing to think about.", "sub": "At 6pm, after a long day."},
      {"photo": "d12_c01.jpg", "pos": "40% 50%", "headline": "Once a week, a kid plans dinner.", "sub": "They pick the meal and write the shopping list."},
      {"photo": "d09_c06.png", "pos": "50% 50%", "headline": "You agree on the budget.", "sub": "If the cart costs too much, they swap something."},
      {"video": "AQM2Y-vh4HMDZVoXsHUFNfKqatl0f34VEpr0JZSQDM2pSYvo6iJ7Y9PUino4UOO-RGZwvkKeF4mRWRgsCsly7hvr9iWMAVXRg6N8R0lGBrOPuA.mp4", "clip": [6, 7], "pos": "50% 40%", "headline": "Then they cook it with you.", "sub": "Little kids pick from three meals. Teens can do most of it alone."},
      waitlist,
    ],
  },
  {
    day: 5,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "social_images/s05.jpg", "pos": "50% 40%", "handle": true, "setup": "It's faster to do it yourself,", "payoff": "so you always do.", "sub": "But kids can do more than you think."},
      {"photo": "Blonde woman in a light blue jacket.png", "pos": "50% 65%", "headline": "Then you end up doing everything.", "sub": "And they never get the chance to learn."},
      {"photo": "d05_c01.png", "pos": "50% 50%", "at": "top", "headline": "Ages 4 to 6: one job, next to you.", "sub": "Toys in the basket. Plate to the sink. Shoes by the door."},
      {"video": "d04_c05_video.mp4", "clip": [16, 8], "pos": "50% 40%", "headline": "Ages 7 to 9: small daily jobs.", "sub": "Make the bed. Set the table. Feed the pet. Expect to remind them for a while."},
      {"photo": "d02_c07.png", "pos": "40% 40%", "headline": "Ages 10 to 12: jobs that help everyone.", "sub": "Load the dishwasher. Sort the recycling. Make their own lunch."},
      {"video": "Video-86133.mp4", "clip": [12, 8], "pos": "50% 50%", "headline": "Ages 13 to 18: whole jobs, start to finish.", "sub": "Their own laundry. One dinner a week. A grocery run with a list and a budget."},
      waitlist,
    ],
  },
  {
    day: 6,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "social_images/s01.jpg", "pos": "50% 50%", "handle": true, "headline": "The weekend cleanup takes all day.", "sub": "And nobody wants to start."},
      {"video": "d04_c02.mp4", "clip": [3, 8], "pos": "50% 50%", "headline": "Then the weekend is gone.", "sub": "You spent it asking people to pick things up."},
      {"video": "d04_c02_3.mp4", "clip": [0, 8], "pos": "50% 50%", "at": "top", "headline": "Set a timer for 20 minutes.", "sub": "Everyone cleans at the same time. One room each."},
      {"photo": "d03_c03.png", "pos": "50% 30%", "headline": "Stop when the timer stops.", "sub": "Done or not. No checking each room after."},
      {"photo": "d06_c03.png", "pos": "50% 40%", "headline": "Then go do something fun together.", "sub": "Pancakes, a walk, the park. Pick it before you start."},
      waitlist,
    ],
  },
  {
    day: 7,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "d08_c02.png", "pos": "50% 40%", "handle": true, "setup": "Does everyone know", "payoff": "what's happening this week?", "sub": "Or will you find out on Tuesday at 7am?"},
      {"photo": "social_images/s07.jpg", "pos": "50% 60%", "at": "top", "headline": "And it all lands on one person.", "sub": "No ride to practice. Gym clothes left at home. A form nobody signed."},
      {"photo": "d05_hero.png", "pos": "50% 40%", "headline": "Take ten minutes on Sunday night.", "sub": "Everyone at the table. Go through the week, day by day."},
      {"photo": "social_images/s13.jpg", "pos": "50% 40%", "headline": "Ask four questions.", "sub": "Who needs to be where? Who's driving? What needs packing? What's fun this week?"},
      {"photo": "d01_c03.jpg", "pos": "50% 30%", "headline": "Then write it where everyone can see it.", "sub": "So nobody has to ask you on Wednesday."},
      waitlist,
    ],
  },
  {
    day: 8,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "D10-04.png", "pos": "50% 30%", "handle": true, "headline": "'That's not fair!'", "sub": "Every day. About who does which job."},
      {"photo": "Gemini_Generated_Image_76n1ve76n1ve76n1.jpg", "pos": "50% 40%", "headline": "And you have to be the judge.", "sub": "Every single time."},
      {"photo": "d08_c06.png", "pos": "50% 30%", "headline": "Give jobs that fit their age.", "sub": "Matching socks at 5 is a real job. So are dishes at 12."},
      {"photo": "social_images/s12.jpg", "pos": "50% 40%", "headline": "Swap the jobs nobody likes.", "sub": "The older kids take turns with the trash and the recycling, week by week."},
      {"photo": "d11_c02.png", "pos": "50% 40%", "headline": "Let them help decide.", "sub": "Ask what feels fair to them first. It's harder to argue with a plan you helped make."},
      {"photo": "d08_c07.png", "pos": "50% 50%", "headline": "Change it as they grow.", "sub": "What's fair at 6 and 10 isn't fair at 8 and 12."},
      waitlist,
    ],
  },
  {
    day: 9,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "d09_c01.png", "pos": "50% 30%", "handle": true, "headline": "'Can I help?'", "sub": "Always right when you're busy."},
      {"photo": "d03_c01.png", "pos": "60% 40%", "headline": "Saying 'not now' feels bad.", "sub": "But saying yes makes it all take longer."},
      {"photo": "social_images/s11.jpg", "pos": "50% 40%", "headline": "Keep a real job ready.", "sub": "Not a pretend job. Something that needs doing."},
      {"photo": "social_images/s09.jpg", "pos": "40% 40%", "headline": "Little kids can do a lot.", "sub": "Wash the vegetables. Match the socks. Water the plants. Carry forks to the table."},
      {"photo": "d09_hero1.png", "pos": "50% 60%", "at": "top", "headline": "Yes, it will take longer.", "sub": "Something will get wet. But they did a real job, and it counted."},
      waitlist,
    ],
  },
  {
    day: 10,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "d12_c02.png", "pos": "50% 50%", "at": "top", "handle": true, "setup": "Should allowance", "payoff": "be linked to chores?", "sub": "Good parents land on both sides."},
      {"photo": "d12_c03.png", "pos": "50% 50%", "headline": "Money talks turn into fights.", "sub": "Most of the time, nobody agreed on the rules."},
      {"photo": "d09_c04.png", "pos": "50% 30%", "headline": "One side: pay for jobs.", "sub": "Kids learn that work earns money. Saving means more when they earned it."},
      {"photo": "d02_c05.png", "pos": "50% 50%", "at": "top", "headline": "The other side: some jobs come with living here.", "sub": "Pay for everything, and you may hear 'how much?' every time you ask for help."},
      {"photo": "social_images/s20.jpg", "pos": "50% 50%", "headline": "Many families do both.", "sub": "Daily jobs don't get paid. Big extra jobs, like washing the car, do."},
      {"photo": "d12_c07.png", "pos": "50% 40%", "headline": "Whatever you pick, agree before payday.", "sub": "What's paid, how much, and which day. Write it down."},
      waitlist,
    ],
  },
  {
    day: 11,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "social_images/s08.jpg", "pos": "50% 60%", "at": "top", "handle": true, "headline": "Kids hear about it when they forget.", "sub": "Do they hear about it when they remember?"},
      {"photo": "d11_c07.png", "pos": "50% 40%", "headline": "Most of the time, they don't.", "sub": "Nothing went wrong, so nobody says anything."},
      {"photo": "d08_c03.png", "pos": "40% 40%", "headline": "Notice it out loud.", "sub": "'You fed the dog before I asked. Thanks.' That's enough."},
      {"photo": "d11_c06.png", "pos": "50% 40%", "headline": "Say it the same day.", "sub": "A short note counts. It doesn't need to be a speech."},
      {"video": "d05_c06.mp4", "clip": [1, 7], "pos": "50% 50%", "at": "top", "headline": "Say what they did.", "sub": "Not just 'good job'. Name the thing, so they know you saw it."},
      waitlist,
    ],
  },
  {
    day: 12,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "d09_hero3.png", "pos": "50% 40%", "handle": true, "headline": "The week is so busy, fun plans never happen.", "sub": "The zoo. The bike ride. 'Maybe next weekend.'"},
      {"photo": "d13_c07.png", "pos": "50% 40%", "headline": "Then it's Friday, and nothing fun happened.", "sub": "Just school, work and laundry."},
      {"photo": "social_images/s18.jpg", "pos": "50% 40%", "headline": "On Sunday, plan the week together.", "sub": "Who does which jobs, and on which days."},
      {"photo": "d06_c05.png", "pos": "50% 40%", "headline": "Pick one fun thing to look forward to.", "sub": "A climbing wall trip. A movie night. Everyone agrees on it."},
      {"video": "d04_c03.mp4", "clip": [3, 7], "pos": "50% 50%", "headline": "Share the jobs during the week.", "sub": "Everyone does their part, so nobody is stuck with all of it."},
      {"video": "d09_c01vid.mp4", "clip": [20, 8], "pos": "50% 50%", "headline": "On Saturday, go do the fun thing.", "sub": "It was on the plan all week."},
      waitlist,
    ],
  },
  {
    day: 13,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "d06_c04.png", "pos": "50% 50%", "handle": true, "headline": "Do your weekend plans fall through?", "sub": "Not because nobody wants to go. Because nobody picked a plan."},
      {"photo": "d03_c07.png", "pos": "50% 60%", "at": "top", "headline": "And one more Saturday goes by.", "sub": "Everyone is tired, and nobody wants to pick."},
      {"photo": "social_images/s19.jpg", "pos": "50% 60%", "at": "top", "headline": "Decide on Wednesday.", "sub": "Not on the day. By then it is too late."},
      {"photo": "d13_c03.png", "pos": "50% 50%", "headline": "Pick three things.", "sub": "What you'll do. When you'll leave. What to do if it rains."},
      {"video": "gemini_generated_video_ea1e475a.mp4", "clip": [1, 7], "pos": "50% 50%", "at": "top", "headline": "Tell everyone.", "sub": "Now it's a plan, not just an idea."},
      waitlist,
    ],
  },
  {
    day: 14,
    source: 'proposals/messaging-v2.md',
    slides: [
      {"photo": "d14_c06.png", "pos": "50% 50%", "handle": true, "setup": "What has your family", "payoff": "been meaning to do for ages?", "sub": "The hike. The trip. The place someone talked about two summers ago."},
      {"photo": "d14_c03.png", "pos": "50% 40%", "headline": "'Someday' never comes.", "sub": "There's always a busy week in the way."},
      {"photo": "d14_c01.png", "pos": "40% 40%", "headline": "Pick one thing from the list.", "sub": "Just one. The easiest one."},
      {"photo": "social_images/s16.jpg", "pos": "50% 50%", "headline": "Put a date on it.", "sub": "Write it down where everyone can see it."},
      {"photo": "d14_c02.png", "pos": "50% 40%", "headline": "Then tell us yours.", "sub": "Reply with your family's list. We'll share the best ideas, with permission."},
      waitlist,
    ],
  },
];

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
];

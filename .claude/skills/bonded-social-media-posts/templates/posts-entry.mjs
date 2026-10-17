// Posts file for tools/proofs/render-v2.mjs. Copy it OUTSIDE the repository, fill it in, and render with
//   POSTS=/path/to/this-file.mjs PHOTOS=<prepped stills> MEDIA=<original videos> OUT_DIR=<outside the repo> \
//   node tools/proofs/render-v2.mjs        (handle @bondedspace by default; one set for all three platforms)
//
// The file names below are PLACEHOLDERS. Use the owner's new files for the post; never the launch
// campaign's (First_2W) photos or clips.
//
// Every string must appear word for word in `source` (a path relative to the repository root): the
// proposal while the post is PROPOSED, the campaign file once it is approved. The renderer stops otherwise.
//
// Slide fields:
//   photo: 'file.jpg'                 a prepped still in PHOTOS (subfolders allowed: 'folder/file.jpg')
//   video: 'file.mp4', clip: [s, len] a clip from MEDIA, starting at s seconds, len seconds long (7 or 8)
//   pos: '50% 40%'                    the crop point, as CSS object-position (x% y%)
//   at: 'top'                         put the words at the top (default: bottom). Use it when faces are low
//   handle: true                      slide 1 only: the account handle at the top
//   setup + payoff + sub              a two-part cover line (slide 1), or
//   headline + sub                    one headline and its sub
// The last slide is always `waitlist` (the plain slide with the logo, the ask and the phone).

/** The plain waitlist slide that ends every post. Keep it exactly as it is (D-2026-10-15-2, -3). */
export const WAITLIST = {
  headline: 'Join the waitlist.',
  sub: "Bonded is an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.",
  pill: 'Link in bio',
  screenFile: '67-mom-family-climbing-light.png', // a real capture from design/screenshots-manifest.md
};
const waitlist = { waitlist: true };

export const posts = [
  {
    day: 1, // output goes to day01/; use the post's number in the new campaign
    source: 'proposals/<your-proposal>.md',
    slides: [
      { photo: 'PLACEHOLDER-cover.jpg', pos: '50% 40%', handle: true, setup: '<setup>', payoff: '<payoff>', sub: '<sub>' },
      { photo: 'PLACEHOLDER-feeling.jpg', pos: '50% 30%', headline: '<the feeling>', sub: '<sub>' },
      { photo: 'PLACEHOLDER-do-1.jpg', pos: '50% 60%', at: 'top', headline: '<what to do>', sub: '<sub>' },
      { video: 'PLACEHOLDER-clip.mp4', clip: [2, 8], pos: '50% 50%', headline: '<what to do>', sub: '<sub>' },
      { photo: 'PLACEHOLDER-do-3.jpg', pos: '50% 40%', headline: '<what to do>', sub: '<sub>' },
      waitlist,
    ],
  },
];

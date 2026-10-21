// Template for a Reels file read by tools/proofs/render-reel.mjs (D-2026-10-21-1).
// Copy it outside the repo, fill it from the approved (or PROPOSED) reel scripts, then run:
//   MEDIA=<cleared clips> OUT_DIR=<dir outside the repo> REELS=<this file> node tools/proofs/render-reel.mjs
// Every on-screen string must appear word for word in `source`, or the render stops.
// Times are seconds into the clip part of the reel (the 3 s end card follows it). Keep the total at
// 15 to 25 s including the end card. Clips are cropped to fill 1080x1920; `pos` moves the crop (CSS
// object-position). `at` puts the words in the middle (default), at the top or lower down, always inside
// the Reel safe zones.
export const END = {
  source: 'proposals/weeks-03-04.md',
  headline: 'Join the Bonded waitlist.',
  sub: "We're building Bonded, an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android.",
};

export const reels = [
  {
    id: 'r01',
    title: 'Working title from the script',
    source: 'proposals/weeks-03-04.md',
    clips: [
      { file: 'r01_clean.mp4', start: 0, dur: 8, pos: '50% 40%' },
      { file: 'w3w4_v03.mp4', start: 2, dur: 8 },
    ],
    beats: [
      { t0: 0, t1: 3, text: 'The 3-second hook line.' },
      { t0: 3, t1: 9, text: 'Second beat.', at: 'lower' },
      { t0: 9, t1: 16, text: 'Third beat.' },
    ],
  },
];

# Visual spec: how a BONDED post looks

Every number here comes from `tools/proofs/render-v2.mjs`, the renderer that made the approved posts. A designer working in Canva can rebuild the look from this page alone. If the renderer and this page ever disagree, the renderer wins; fix this page.

## Brand basics

| Token | Value | Where |
|---|---|---|
| Paper | `#F5F2EA` | Text on photos; the background of plain slides |
| Ink | `#222D33` | The gradient behind text on photos; text on plain slides; the phone frame |
| Muted | `#646A6B` | The "Link in bio" pill; the handle on plain slides |
| Hearth | `#B94529` | Only inside the official logo. Never on a photo, video, Ink or dark footage |
| Type | Plus Jakarta Sans 400, 600, 800 | Files in `assets/fonts/` |
| Logo | `assets/brand/svg/bonded-lockup-horizontal-color.svg` | The waitlist slide. Never retyped, redrawn or recoloured |

## Canvas and safe zones

- **Slide:** 1080 x 1440 px (3:4). One file per slide goes to Instagram, Facebook and TikTok.
- **Safe zone:** keep all text out of the top 180 px, the bottom 180 px and 50 px on each side.
- **Text block on photo slides:** x 50 to 1030 (980 wide), y 200 to 1240.
- **Profile grid:** Instagram shows posts as 4:5, cutting 45 px off the top and bottom of slide 1. The cover words must sit inside y 45 to 1395; the 200 px margins already guarantee it.

## Type

| Role | Weight | Size (largest first, steps of 2 px) | Lines | Tracking | Line height |
|---|---|---|---|---|---|
| Headline | 800 | 104 down to 80; if it still won't fit, 3 lines down to 72 | 2 (3) | -0.04em | 0.98 |
| Cover setup (first half) | 400 | 100 down to 72 | 2 | -0.02em | 0.98 |
| Cover payoff (second half) | 800 | 112 down to 80 | 2 | -0.04em | 0.98 |
| Sub | 400 | 44 down to 34 | 3 | normal | 1.3 |
| Handle (slide 1) | 600 | 26 | 1 | normal | normal |
| Pill | 600 | 28 | 1 | normal | 1 |

- Use the largest size that fits; shorten the words before going below the smallest.
- Headlines and setup/payoff use balanced wrapping (lines of similar length). Subs wrap naturally, also balanced on photos.
- 28 px gap between the headline and the sub.
- Typographic quotes and apostrophes (’ ‘).
- A cover is either a **setup and payoff** (a lighter first half and a heavy second half, read as one sentence: "In most homes," / "one parent remembers everything.") or a single heavy **headline**. Inside the post, slides use a headline.

## Photo and video slides

- **The picture fills the whole slide** (object-fit: cover). Choose the crop point (`pos`, like CSS object-position, for example `50% 30%`) so faces and the key action stay in view.
- **The words sit at the bottom** by default, left-aligned in the text block. Put them **at the top** when faces or the action are low in the frame. Never put words over a face.
- **Paper text on an Ink gradient.** The gradient is sized to the words, not a fixed box:
  - Text at the bottom: Ink at 0% opacity starting 440 px above the top of the words, 80% at 60 px above the words, 88% at the bottom edge.
  - Text at the top: the same, mirrored.
  - Slide 1 also gets a band behind the handle: Ink at 72% from the top to 260 px, fading to 0 at 440 px.
- **No Hearth, no logo, no app screens on photo slides.** No borders, stickers, emoji, frames or extra graphics.
- **Handle:** on slide 1 only, centred at the top (centre x 540, top y 200), Paper, 26 px, 600. When the slide's words are also at the top, the words start lower, at y 262, so they never touch the handle. Instagram and Facebook use `@bonded512`; TikTok uses `@bonded789`.

## The waitlist slide (always last, always plain)

- **Background:** Paper.
- **Left column:** x 50, 506 px wide, vertically centred between y 180 and 1260:
  1. The colour lockup, 300 px wide, then a 56 px gap.
  2. Headline "Join the waitlist." in Ink, 800, from 104 down to 80 px, 2 lines.
  3. Sub (28 px gap), Ink 400, from 40 down to 32 px, up to 5 lines: "Bonded is an app that helps your whole family plan the week and share the jobs. It's coming to iPhone and Android."
  4. Pill (40 px gap): "Link in bio", Paper text on Muted, fully rounded, 12 px by 30 px padding.
- **Right:** a phone. The screen is 880 px tall at the screenshot's own ratio (1290 x 2796), inside a solid Ink frame with 14 px padding, frame corner radius 18% of its width, screen corner radius 15.5% of the screen width. The frame's right edge is at x 1030 and it is centred at y 720.
- **The screen** is a real, unaltered capture from `design/screenshots-manifest.md`. Default: `67-mom-family-climbing-light.png` (the Family tab, "The Miller Family"). No "Demo family" caption on this slide (D-2026-10-15-3), and no copy may suggest the Millers are real users.
- **Contrast:** normal text 4.5:1, large text 3:1 against Paper (WCAG).

## Contrast on photos

Hide the words, take the picture with the gradient as it will be posted, and look at the pixels behind each line of text. Take the **lightest 5%** of those pixels and measure the Paper text against them. Every line must reach **4.5:1**. For a video slide, measure 6 frames spread across the clip and keep the worst. If a line fails, move the words, change the crop or choose another picture; never add a box or outline.

## Moving slides (video)

- A clip of 7 to 8 seconds (Instagram allows 3 to 60) from the owner's own footage.
- Cropped the same way as a photo (cover plus the crop point), 1080 x 1440, 30 fps, H.264 (crf 19, yuv420p), fast start.
- **No sound.** Carousel videos play muted, and other people's music can't be reused.
- The words and gradient are laid over the clip as one still layer, so they don't move.
- **Instagram and Facebook** get the MP4. **TikTok** photo mode takes stills only, so it gets a frame from the middle of the clip as a PNG.

## File names

`dayNN_carousel_sNN.png` (and `.mp4` for a moving slide), with NN zero-padded: `day05_carousel_s02.png`. Render each post twice: once with `@bonded512` (Instagram and Facebook) and once with `@bonded789` (TikTok); only slide 1 differs.

# Media rules: choosing photos and clips

These rules come from screening every file in the launch campaign folder on 15 October 2026. Several files that looked usable turned out to be cleaned-up stock previews, other creators' videos, or real families' photos, and the approved Day 0 slide 2 had to be flagged after approval. Screen first, design second.

## Fresh media only

- Never reuse the launch campaign's photos or videos (Drive folder `First_2W`, the `d00_` to `d14_` files and the `social_images`). New posts need new files.
- Ask the owner for a folder of new photos or clips for the post, ideally 5 to 7 per post, one per slide.
- Within one campaign, never use the same file twice.
- Keep the owner's files outside the repository. Renders go outside the repository too.

## What can be used

| Source | Can it be used? | What it needs |
|---|---|---|
| The owner's own photos or footage | Yes | Consent from every adult shown, and a parent's consent for every child |
| AI images or video the owner made (ChatGPT, Gemini, Veo and others) | Yes | The platform's AI label when posted ("AI info" on Instagram and Facebook, "AI-generated content" on TikTok). If the AI picture was made from someone else's photo, that photo's licence still applies |
| Licensed stock | Yes | The licence on file (site, image ID, licence type) |
| Free stock (Pexels, Unsplash and similar) | Yes, once the source is confirmed | The page it came from |
| A file with no known source | Not until the owner says where it came from | The source |

## Never use

- **Stock previews**, watermarked or "cleaned up". A ChatGPT copy of a stock photo, or a stock photo with the watermark removed or the person edited out, is still that stock photo and needs its licence.
- **Other people's posts**: Instagram, Facebook, TikTok or Reddit downloads, reels, re-creations of them, and anything with another creator's captions, stickers or text burned in.
- **Real families' photos from the internet**, or AI re-creations of them.
- **Children's names or personal details** visible anywhere (charts, notes, lunchboxes, school uniforms with names).
- **News footage** or anything with a broadcaster, streaming or brand logo as the subject.
- **Minors shirtless, in the bath, in underwear, or in any moment a parent wouldn't post**.
- **Meme faces, GIFs, collages, character reference sheets**: they are not finished pictures.
- **Images under about 700 px wide** (they look soft at 1080 x 1440), and clips under 720 px wide.

## Screen every file

Run the quick screen on the owner's folder before choosing:

```
python3 scripts/media_check.py <folder with the new photos and clips>
```

It reads only the files' bytes (it never opens or runs them) and reports, per file:
- **AI credentials** (C2PA from OpenAI or Google, SynthID): needs the AI label.
- **Stock markers** (iStock, Getty, Alamy, Dreamstime, Shutterstock, Adobe Stock and others): blocked until the licence is shown.
- **Social media markers** (Facebook or Instagram metadata, downloader file names): blocked until the creator's permission is shown.
- **No markers**: the source is unknown; ask the owner.
- **Size**: too small for a full slide.

The script cannot see a watermark or a face. **Look at every file yourself as well**: watermarks, logos, names, text on clothes or objects, other people's captions, and who is in it.

Record each file's answer in a rights table the owner can answer row by row:

| Level | Meaning | Example |
|---|---|---|
| block | Can't be posted until the owner confirms a licence, permission or consent | A social video of a real child; a stock preview |
| warn | Can be posted with a step | An AI image (AI label); a free stock photo (confirm the source) |
| ok | Cleared | The owner's own photo with consent on file |

Each post's "Before posting" line lists its blocked slides and the slides that need an AI label.

## Fit the picture to the words

- **The picture shows the moment the words describe.** Tired parent for "It gets tiring." A child doing the job for "Give each kid a job that's theirs."
- **Details must not contradict the words.** A dashboard clock reading 18:04 means the line says "6pm", not "5pm".
- **Nothing distracting or awkward in the frame.** Underwear in a laundry pile, rude or negative words printed on things ("useless"), brand logos, clutter that steals the eye. Crop it out or pick another picture.
- **Faces stay clear of the words.** Pick the crop point (`pos`) and the text position (`at: 'top'` or bottom) together. A face low in the frame means text at the top.
- **People look like the audience:** real, varied families with children aged about 4 to 18 doing ordinary things at home, outside, at the table, in the car. No posed stock grins, no luxury staging.
- **Vary the post.** Mix close-ups and wide shots, people and objects (a sink full of pans, sneakers at the stairs), indoors and outdoors. Two or three object or detail shots per post give the eye a rest.
- **Clips:** choose 7 to 8 seconds where something happens (a child carrying a plate, a high five). No other creator's captions, no music needed (it is muted), no fast cuts.

## Slide 1 needs the strongest picture

It is the cover in the feed and on the profile grid. One clear subject, room at the top for the handle and room for the words, readable as a thumbnail.

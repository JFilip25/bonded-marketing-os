# Production: from idea to an approved post

The launch campaign was made this way on 15 October 2026. Follow the steps in order; each one has a gate.

## With the repository (Claude Code on `bonded-marketing-os`)

### 1. Write the post as a proposal

- Fill in `templates/post-brief.md` for each post and put the result in `proposals/` (for example `proposals/<campaign-name>.md`). Mark it PROPOSED.
- The words in that file are the **copy guard source**: the renderer stops if any slide text is not found in it word for word.
- Never edit `campaign/weeks-01-02.md` or another locked campaign file for a new post. Approved posts go in through an amendment (step 8).

### 2. Score the words

```
python3 .claude/skills/bonded-social-media-posts/scripts/reading_grade.py --slide "<headline>" "<sub>"
python3 .claude/skills/bonded-social-media-posts/scripts/reading_grade.py --file <post-words.json>
```

Gate: every slide 4 or lower, every caption 5 or lower, no long words flagged (or only names). Record the grades in the proposal.

### 3. Get, screen and prep the media

- Ask the owner for the new photos and clips. Never use files from the launch campaign.
- Screen them: `python3 .claude/skills/bonded-social-media-posts/scripts/media_check.py <folder>`, then look at each one (see `media-rules.md`).
- Keep every file **outside the repository**, for example `/home/user/bonded-review/<campaign>/`:
  - `prepped/` for stills the browser can show: copy JPEG and PNG as they are; convert WEBP, AVIF, HEIC and GIF (first frame) to PNG; fix wrong extensions.
  - `media/` for the original video files.

### 4. Write the posts file and render

Copy `templates/posts-entry.mjs` to a file **outside the repository** and fill it in: one entry per post, the slides in order, the waitlist slide last. `source` is the proposal's path relative to the repository root.

Render once. Instagram and TikTok are both `@bondedspace` (D-2026-10-15-13), the renderer's default handle, so one set serves Instagram, Facebook and TikTok:

```
cd /home/user/bonded-marketing-os
POSTS=/path/to/posts.mjs PHOTOS=/path/to/prepped MEDIA=/path/to/media \
OUT_DIR=/home/user/bonded-review/<campaign> \
node tools/proofs/render-v2.mjs
```

- `ONLY=3,4` renders just those posts, but then `qa.json` covers only them; run the full set before the review.
- Needs Playwright with Chromium (preinstalled in cloud sessions) and ffmpeg for video slides.
- Output: `dayNN/dayNN_carousel_sNN.png`, an `.mp4` for each moving slide, and `qa.json`.

### 5. Check

Gates, all of them:
- `qa.json` summary: `framesWithIssues` 0, `postsFailingPhotoMix` 0, `lowestContrastOnPhotos` 4.5 or more.
- No `FLAG` lines in the log. Look at the `fits` list: any text that dropped below its largest size is fine, but a headline at 3 lines usually means the words should be shorter.
- **Look at every slide yourself**, at full size: faces clear of the text, the picture matches the words, nothing awkward in the frame, the handle clear of the words, the crop right on the 4:5 grid. Fix the crop (`pos`), the text position (`at`) or the picture, and render again.
- If you change a renderer file, re-render the approved posts and confirm they are pixel-identical to before.

### 6. Review with the owner

- Build a private review page (an Artifact): one section per post with the swipeable slides (moving slides play), the slide-by-slide words with their arc label and media file, the three captions with copy buttons, the rights table with a yes/no per file, the checks that ran, and what you need from the owner.
- Send the full-size files as zips, each **under 30 MB** (the chat upload limit). Split by day.
- Say clearly what is proposed and what is approved, and that nothing was scheduled or published.

### 7. Wait for approval

Only the owner's explicit words in the chat count ("approved", or per-post changes). Silence, "looks good" about a different question, or a comment on the page is not approval of the whole set. Apply requested changes, render again, review again.

### 8. Apply an approved post

- Add it to the campaign file through a numbered amendment: record the SHA-256 of the file before and after in `campaign/CHANGELOG.md`, change only the approved sections, and confirm everything else is byte-identical.
- Log the decision in `decisions/log.md` (D-YYYY-MM-DD-N), and move any open question to `decisions/pending.md`.
- Point the post's `source` at the campaign file and render once more: it must match the approved render pixel for pixel.
- Commit on the working branch and open or update a pull request. Never commit photos, videos, renders, keys, personal addresses or children's information.

### 9. Before anything is scheduled

Only after the owner explicitly approves scheduling, in an interactive session:
- Every file in the post is cleared in the rights table; AI slides carry the AI label.
- The Instagram "Comment WAITLIST" reply is live in ManyChat (or a verified equivalent).
- The Facebook `[link]` is the real waitlist URL with UTM tags (`architecture/marketing-os.md`, campaign `bonded_prelaunch_2026`).
- Buffer holds at most 10 scheduled posts for the organisation; agree with the owner which ones go in first. Check live accounts and channel IDs first (`ops/mcp-audit.md`), and report the real post IDs afterwards.

## Without the repository (claude.ai chat or a designer)

- Do steps 1 to 3 the same way: the post sheet from `templates/post-brief.md`, the reading grades from `scripts/reading_grade.py`, the media screen from `scripts/media_check.py` (or a manual check against `media-rules.md`).
- Add a **photo brief** per slide: what the picture should show, where the faces are, whether the words go at the top or bottom.
- A designer builds the slides in Canva from `visual-spec.md`, using the official logo files and a real app capture for the phone. Canva work follows `design/designer-production-brief.md`.
- The owner reviews and approves the same way. The approved words are then added to the campaign in the repository (step 8).

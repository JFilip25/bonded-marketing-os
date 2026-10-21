# Brief for the Windows session: clean the reels and put them on Drive

**For:** the Claude session on the owner's PC (`p:\BondedSocial`), which holds the reels Cowork downloaded. The owner pastes this brief there. (D-2026-10-21-4)

**Why:** BONDED is adding standalone Reels (D-2026-10-21-1). The owner says these reels are **our own or licensed** footage. Some have burned-in subtitles or text, which come off before we use them.

## Rules
- **Only footage we have rights to.** For each file, the rights sheet below records where it came from. That's our own camera, or a licence or agreement we can show.
  - Any file that's another creator's post (an Instagram, TikTok or Facebook download, or one with their handle, captions or watermark in it) **is not cleaned or uploaded**. List it as "skipped" in the sheet.
- **Real children:** note who is shown. A parent's consent is needed before a clip is posted.
- **The Replicate key stays on this PC.**
  - Set it as a Windows user environment variable named `REPLICATE_API_TOKEN` (Settings, System, About, Advanced system settings, Environment Variables). Then restart VS Code.
  - Never paste the key into a chat, a file in a repository or a command history.
- No posting, scheduling or account changes from this session.

## Steps
1. Find the reels (`*.mp4`, `*.mov`) under `p:\BondedSocial`. List them with their duration and resolution.
2. Make the rights sheet, a Google Sheet named `BONDED_reels_rights`, with one row per file:
   - `file`
   - `new name` (`r01`, `r02` and so on)
   - `source` (own camera, licensed from which site with which licence ID, or paid creator with which agreement)
   - `people shown` (adults and children, roughly how many)
   - `consent on file` (yes or no)
   - `text to remove` (yes or no)
   - `status` (cleaned, kept as is, or skipped and why)
3. Clean the files that have text. Use Replicate's `hjunior29/video-text-remover` (MIT licence, about $0.0075 a clip), which runs in about a minute per clip.

   ```powershell
   py -m pip install --upgrade replicate
   ```

   ```python
   import pathlib, replicate
   src = pathlib.Path(r"p:\BondedSocial\reels")   # change to where the reels are
   out = src / "clean"; out.mkdir(exist_ok=True)
   version = replicate.models.get("hjunior29/video-text-remover").latest_version.id
   for f in sorted(src.glob("*.mp4")):
       with open(f, "rb") as video:
           result = replicate.run(
               f"hjunior29/video-text-remover:{version}",
               input={"video": video, "method": "hybrid", "resolution": "original"},
           )
       data = result.read() if hasattr(result, "read") else __import__("urllib.request").request.urlopen(str(result)).read()
       (out / f"{f.stem}_clean.mp4").write_bytes(data)
       print("cleaned", f.name)
   ```

   - The model drops the audio, which is fine because the Reels are muted.
   - If small or see-through text is left behind, run that clip again with `"conf_threshold": 0.15` and `"margin": 10`.
4. Check each cleaned clip by eye, at the start, middle and end, for leftover letters, smears or a missing face. Note "needs a redo" in the sheet where it fails.
5. Upload the files to Google Drive:
   - originals to the folder `BONDED_reels_raw` (renamed `r01_raw.mp4` and so on)
   - cleaned clips to `BONDED_reels_clean` (`r01_clean.mp4` and so on)
   - files without text: copy to `BONDED_reels_clean` as `r05.mp4` and so on
   - put the rights sheet in `BONDED_reels_clean`
6. Reply in your chat with the folder links, how many files were cleaned, kept and skipped, and any clip that needs a redo. The owner passes this on to the BONDED marketing session (`session_01LHJu2w2imre9b4iRhgy7WW`).

## What happens next (marketing session)
The marketing session:
1. Pulls the files from Drive.
2. Checks them with `media_check.py`.
3. Matches them to the Reel scripts in `proposals/weeks-03-04.md`.
4. Renders the 1080×1920 Reels.
5. Puts them on a review page for the owner.

Nothing is posted before the owner approves.

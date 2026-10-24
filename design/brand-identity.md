# BONDED identity: verified rules for marketing

**Status:** VERIFIED on 9 Oct 2026 against the original files. This replaces PR #1's `design/official-brand-source.md`.

**Authority.** The product repository `JFilip25/ciccho-Claude` is the source:

| Source | Path or reference |
|---|---|
| Rules | `docs/bonded/identity.md` |
| Idea | `docs/bonded/design-philosophy.md` (a verbatim copy is in `design/common-room-philosophy.md`) |
| Production vectors | `assets/brand/` |
| Colour constants | `src/theme/brand.ts` |
| Product tokens | `docs/common-ground/design-tokens.json` |
| Commits checked | `eecbc56` (default branch `claude/family-responsibility-app-mvp-vchzt7`) and `81b164b` (`claude/bonded-family-ai`). These identity files are identical on both. |

**Not available.** The owner's 37-page identity case study (PDF, September 2026) is not in either repository, Google Drive or this workspace. `identity.md` names it as a source and summarises it.

Anything only the PDF could settle is marked **UNVERIFIED** below. It stays unverified until the PDF is supplied. Examples are marketing layout grids, campaign typography guidance and the page references PR #1 cited.

## 1. The idea: Common Room
- Two equal circles give up a corner each, and the square they leave between them is a room that belongs to both. A family works because each person stays whole and makes a little space for the others.
- The tone is quiet, exact and warm. There are no gradients, no gloss and no effects.
- "Add a person, add a room": avatars, patterns, progress and motion all come from the same rule.

Source: `docs/bonded/design-philosophy.md`.

## 2. The mark (`identity.md` lines 10–43)
- **Geometry.** Two equal circles with centres one radius apart on both axes. The square between them is inset by R/5. In the 300-unit master that is 20 units: the room runs 120→180.
- **The room is always a hole.** Whatever sits behind the mark shows through it.
- **Three drawings of the room** (`identity.md` 19–21):
  - master: inset 20
  - reversed, for dark grounds: inset 18, because light spreads on dark
  - small, below 32 px: inset 16

  Use the file made for the case. Never redraw.
- **The wordmark** is lowercase "bonded", drawn as a single path. It is **never retyped** in any font (`identity.md` 22).
- **Minimum sizes** (31–35):

  | Version | Minimum |
  |---|---|
  | Symbol | 16 px |
  | Horizontal lockup | 80 px wide |
  | Stacked lockup | 64 px wide |
  | Wordmark alone | 60 px wide |
- **Clear space** (37) is one room on every side. The gap between symbol and word is one room and is built into the lockups.
- **Never** (39–43):
  - turn the room into a lens, round it, fill it or colour it
  - make the circles unequal, change their distance or flip the diagonal
  - stretch, outline or rotate the mark (rotation is for the loading motion only)
  - add shadows, gradients or gloss

## 3. Logo files for marketing

These are byte-identical copies from the product repo, in `assets/brand/`. Checksums are in `assets/CHECKSUMS.sha256`.

| File | Colours | ViewBox (aspect) | Use |
|---|---|---|---|
| `svg/bonded-lockup-horizontal-color.svg` | Hearth symbol + Ink word | 830 × 140.4 (5.91:1) | Default on Paper |
| `svg/bonded-lockup-horizontal-ink.svg` | Ink only | same | One-colour on light grounds |
| `svg/bonded-lockup-horizontal-reversed.svg` | Paper only, room inset 18 | same | On dark grounds and dimmed video |
| `svg/bonded-lockup-stacked-{color,ink,reversed}.svg` | as above | 661.5 × 421.4 | Square or centred placements |
| `svg/bonded-symbol-{hearth,ink,reversed}.svg` | single colour | 300 × 300 | Symbol alone |
| `svg/bonded-symbol-small-currentcolor.svg` | currentColor, room inset 16 | 300 × 300 | Symbol below 32 px |
| `svg/bonded-wordmark-{ink,reversed}.svg` | single colour | 661.5 × 138.2 | Wordmark alone (≥60 px wide) |
| `svg/bonded-social-avatar.svg`, `png/social-avatar-1080.png` | Paper symbol on a Hearth field | 1080 × 1080 | Profile picture on Instagram, Facebook and TikTok |
| `png/lockup-horizontal-color-2000.png` | colour lockup | 2000 px wide | Where SVG is not accepted |
| `svg/bonded-motion-intro.svg` | animated | n/a | Reference for the intro motion |

The full set is in the product repo (`assets/brand/`). It also holds app icons, splash screens and favicons, which marketing does not need.

## 4. Colour (`identity.md` 45–60, `src/theme/brand.ts`)

| Name | Light | Dark | Use |
|---|---|---|---|
| Paper / Night | `#F5F2EA` | `#171B1D` | The ground. Warm, never pure white. |
| Ink / Night ink | `#222D33` | `#F1F2E8` | Wordmark and text |
| Hearth / Hearth light | `#B94529` | `#FF9F80` | The symbol, the app icon and moments of recognition |
| Cobalt | `#294EE3` | `#B3C3FF` | Buttons and links only. **Never on the mark.** |
| Sage | `#336247` | `#ABD7BB` | Available money and done states |

Supporting product tokens come from `design-tokens.json` lines 19 and 24:

| Token | Light | Dark |
|---|---|---|
| muted | `#646A6B` | `#B1B8B7` |
| surface | `#FFFEFA` | `#23292C` |
| line | `#DEDCD4` | `#3A4549` |
| soft | `#EBE8DF` | `#30393D` |
| clay wash | `#F6D8C6` | n/a |

Rules:
- **Hearth is never placed on Ink or Night.** Dark grounds use Hearth light, or the reversed files, which are Paper.
- **No state is carried by colour alone.** Every state also has a word or a shape.
- **Contrast is held at WCAG AA** (`npm run check:contrast` in the product repo). Ratios computed for marketing pairs:

  | Pair | Ratio |
  |---|---|
  | Ink on Paper | 12.59:1 |
  | Hearth on Paper | 4.76:1 |
  | Paper on Hearth | 4.76:1 |
  | Paper on muted `#646A6B` | 4.92:1 |
  | White on muted | 5.50:1 |
- **Gradients** in the product are opt-in surfaces only, never on the mark (`design-tokens.json` 29). Marketing graphics use flat colour.

## 5. Typography
- **Plus Jakarta Sans** at weights 400, 600 and 800 is the product typeface (`design-tokens.json` 5). The files are in `assets/fonts/` under the SIL Open Font License.
  - The app's display style is 800 weight with tight tracking: 37 pt with -1.65 tracking, about -0.045 em.
  - Labels are 600 with +1.5 tracking, in uppercase.
- The **wordmark is not a font**. Always use the path files.
- The identity defines no serif. Playfair Display and Poppins came only from the campaign's provisional style.
- On 9 Oct 2026 the owner chose Plus Jakarta Sans for campaign graphics. See `design/brand-reconciliation.md`.
- UNVERIFIED: any campaign typography guidance in the case study PDF.

## 6. Motion (`identity.md` 62–69)
- **Intro.** The circles glide together over 560 ms. The room opens at 420 ms and takes 480 ms, so 900 ms in all. It uses an ease-out that settles without overshoot: "springs, never bounces". It plays once.
- **Loading.** Quarter turns with a small settle. The room stays still while the circles take turns around it.
- **Reduced motion.** No intro; loading becomes a slow fade.
- **For video.** If the mark is animated at all, use only this intro, from `bonded-motion-intro.svg`. Never invent new logo motion.

## 7. Composition
- **The bond rule** for people (`identity.md` 87–106): equal circles, neighbours one radius apart, and a room between each pair. It shapes the avatar chain, the recognition moment and goal progress.
- **The pattern** (`BondPattern`) is used only on empty states, never behind the mark.
- **Restraint.** Warmth comes from paper, ink and one warm red, not from decoration.

## 8. Product screenshots
- Real screenshots carry the product's own Cobalt buttons and Sage money states. That is correct inside the app image.
- **Never recolour, retouch or re-letter a screenshot** to match campaign art. See `design/screenshots-manifest.md`.

## 9. Name
- The app name and system label is **"Bonded"**, with a capital B (`app.json`, `src/theme/brand.ts` 23). The planned store name is "Bonded - The Family App".
- Running text inside the app is lowercase "bonded", like the wordmark.
- Campaign copy uses "Bonded" and is locked.
- The trademark check is still pending (product repo `docs/launch-readiness/runbooks/legal-and-consent.md` §9).

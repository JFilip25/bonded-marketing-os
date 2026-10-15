# Campaign style to BONDED identity: approved reconciliation

**Decision:** "Full product identity". The owner chose it on 9 Oct 2026, in the interactive session that took over from ChatGPT (recorded in `decisions/log.md`, D-2026-10-09-1).

**Scope:** visual tokens and type only. **All campaign copy stays locked.** That covers headlines, subheadlines, captions, labels, scripts and CTAs. So do the layouts, the positions, the canvas sizes and the safe zones in `campaign/weeks-01-02.md`.

**What it overrides:** the campaign's provisional "Slide style > Palette" and "Type" sections, plus the type and colour words in "Raw video style" and "CTA and stories". The campaign itself anticipated this: "Swap in the Bonded brand colour if you have one."

The campaign file is not edited. This document is the override, and `design/designer-production-brief.md` points to it.

## Options considered

| Option | Summary | Outcome |
|---|---|---|
| 1. Brand colours, campaign type | Paper/Ink/Hearth with Playfair Display and Poppins | Not chosen |
| 2. Campaign palette as written | `#E8E6E2` / `#151515` / `#6E6E6E` / `#0F6B5C` with the official logo | Not chosen |
| **3. Full product identity** | Paper/Ink/Hearth with Plus Jakarta Sans and the official logo files | **Chosen** |
| 4. Side-by-side test | Build options 1 and 2 at the checkpoint | Not chosen |

## Tokens

| Campaign (provisional) | Approved replacement | Notes |
|---|---|---|
| Background `#E8E6E2` | **Paper `#F5F2EA`** | The product ground |
| Text `#151515` | **Ink `#222D33`** | 12.59:1 on Paper |
| Pills and small labels: `#6E6E6E` with white text | **Muted `#646A6B` pill with Paper `#F5F2EA` text** | 4.92:1 |
| Accent `#0F6B5C` (one word or one diagram element per slide) | **Hearth `#B94529`**, still at most one element per slide | 4.76:1 on Paper. Never on Ink, Night or dark footage; use Paper/white there. Hearth light `#FF9F80` only if a dark-ground accent is unavoidable. |
| Thin grey rule (Layout A) | Muted `#646A6B`, 2 px | |
| Diagram circles and arrows "in black" (Layout D) | Ink `#222D33`, 3 px strokes | Numbered circles stay single circles. **Never pair two overlapping circles into a shape that imitates the BONDED mark.** |
| Cobalt | **Not used** in campaign art | The identity reserves Cobalt for real buttons and links |
| Sage | **Not used** in campaign art | Product money/done semantics only |

## Type

All text uses Plus Jakarta Sans. The OFL files are in `assets/fonts/`, and it is also in Canva's font library. The wordmark is never typeset: use the path files in `assets/brand/svg/`.

| Campaign spec | Approved replacement | Notes |
|---|---|---|
| Headline setup word(s): Playfair Display Regular | **Jakarta 400** | |
| Headline payoff word(s): Playfair Black Italic, "stacked and slightly overlapping" | **Jakarta 800, upright**, tracking −0.04 em, line height about 0.98, stacked under the setup line | No italics: the identity has none. Tight leading replaces the overlap; glyphs must not collide. −0.04 em matches the app's display tracking (`design-tokens.json`: 37 pt / −1.65). |
| Headline sizes 120–190 px | Unchanged, including the per-post sizes in each brief (e.g. Day 0 cover 140/150 px) | See the fit notes below |
| Subheadline: Poppins Medium 44 px | **Jakarta 400, 44 px, Ink** | Mirrors the app: 800 titles over 400 supporting text |
| Small text: Poppins Medium 28 px | **Jakarta 400, 28 px**, Ink or muted | |
| Handle: 26 px | **Jakarta 600, 26 px, muted** | `@bondedspace` on Instagram and TikTok (D-2026-10-15-13). On photo slides it is Paper on the Ink band (messaging v2). |
| Labels ("01", age band): Poppins Medium | **Jakarta 600, 28 px**, muted, +0.08 em tracking | Mirrors the app's 600 labels with positive tracking |
| Pills ("VS", "Swipe", "Link in bio") | **Jakarta 600, 28 px**, Paper on muted | |
| Story "Idea": Playfair Black Italic 96 px centred at 860 px, one Poppins line below | **Jakarta 800 at 96 px**, centred at 860 px, plus one **Jakarta 400 44 px** line below | |
| Video headline: Poppins SemiBold 72 px, white, soft shadow, centred from 320 px | **Jakarta 600 at 72 px**, white `#FFFFFF`, soft shadow (black at 35%, 12 px blur, 2 px down) | Max line width 780 px, centred (keeps clear of the right 150 px). Never below 1570 px. |
| Video subheadlines: Poppins SemiBold 62 px | **Jakarta 600 at 62 px**, same treatment | |
| End card: "Bonded" in Playfair Regular 80 px at 860 px | **Official reversed horizontal lockup** (`bonded-lockup-horizontal-reversed.svg`, Paper), centred at 860 px, 440 px wide (about 74 px tall) | Never retype the name. 440 px clears the 80 px minimum. |
| End card: "Join the waitlist" in Playfair Black Italic 110 px, centred below | **Jakarta 800 at 110 px**, white, on two lines, "Join the" / "waitlist" (409 px and 397 px wide), centred below the lockup | On one line it is 826 px wide and would cross the right 150 px button zone, so the size is kept and the line breaks instead. The wording is unchanged. |

### Fit notes

Widths were measured with the actual Jakarta TTFs at 1080 px canvas width.

- Layout C allows "2 lines at most" in a 980 px text box. At 120 px with −0.04 em tracking, every Day 2 headline fits in two lines; the widest line is 974 px.
- Without the tracking, "Do it once, before the week starts." and "Check in at the end of the week." need three lines at 120 px.
- If Canva can't apply −0.04 em tracking, content headlines drop to **110 px**, which fits in two lines without tracking. That is 10 px below the campaign's 120 px floor, so it is flagged for approval at the checkpoint rather than applied silently.

## Logo usage in campaign art
- **Where the mark appears.** Only on the Day 11 end card (as above) and the profile avatar (`social-avatar-1080.png`).
- **Slides.** The campaign layouts carry the handle, not a logo, and that stays as specified. Adding a lockup to slides would be a new design element, so it is offered at the checkpoint as an option and not applied.
- **On Paper:** `bonded-lockup-horizontal-color.svg`. **On dark or footage:** `-reversed.svg`.
- Minimum sizes and one-room clear space apply (see `design/brand-identity.md` §2).

## Unchanged
- Every canvas size, safe zone and position.
- The A–E layout definitions and the Story types.
- The cutout-object image style. Soft contact shadows on household objects are an editorial device; the "no shadow" rule applies to the mark.
- The "Demo family" label on every app screen.
- No emoji, no hashtags on art, no added CTAs and no em dashes.

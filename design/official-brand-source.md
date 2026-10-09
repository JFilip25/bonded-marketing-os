# Official BONDED identity | source-of-truth reference

**Status:** VERIFIED from user's 9 Oct 2026 upload, and independently matched to the app repository's `docs/bonded/identity.md` and `assets/brand/`. The supplied brand PDFs/ZIP are **not yet stored in this marketing repository**; the source app repository already stores production SVGs and PNGs.

## Verified authoritative sources
- Product source: `JFilip25/ciccho-Claude`, current default branch `claude/family-responsibility-app-mvp-vchzt7`.
- Identity rules: https://github.com/JFilip25/ciccho-Claude/blob/claude/family-responsibility-app-mvp-vchzt7/docs/bonded/identity.md
- Original production vectors: https://github.com/JFilip25/ciccho-Claude/tree/claude/family-responsibility-app-mvp-vchzt7/assets/brand
- User-supplied: `BONDED-identity-case-study(1).pdf` (37 pages), `BONDED-design-philosophy.md`, `BONDED-assets.zip`. Upload/sync original PDFs and archives when Claude needs local bytes. Never substitute a reconstructed wordmark.

## Design concept
**Common Room:** equal circles; square void between them, always a real transparent hole. Do not fill that room, equalize it incorrectly, flip the diagonal, rotate/outline/stretch or put gradients, gloss or drop shadows on the logo.

## Official colour tokens
| Token | HEX | Usage |
|---|---|---|
| Paper | `#F5F2EA` | Warm light background |
| Ink | `#222D33` | Body text and light-ground wordmark |
| Hearth | `#B94529` | Brand symbol, recognition, restrained accents |
| Night | `#171B1D` | Dark background |
| Hearth Light | `#FF9F80` | Symbol on Night |
| Night Ink | `#F1F2E8` | Text on Night |
| Cobalt | `#294EE3` | Interface buttons/links only, **never the mark** |
| Sage | `#336247` | Product money/done-state semantics, not general marketing accent |

The custom lowercase BONDED wordmark is **path-based**; NEVER typeset or recreate it in Playfair/Poppins. Use `bonded-lockup-horizontal-color.svg`, `bonded-lockup-horizontal-reversed.svg`, `bonded-wordmark-ink.svg` and `bonded-social-avatar.svg` from the original asset directory. Minimum: symbol 16px; horizontal lockup 80px wide, stacked 64px, standalone wordmark 60px. One "room" clearspace.

The **editorial campaign typography** Playfair Display (headlines) + Poppins (body) can remain for non-logo text if approved. The mark itself always uses the official path asset.

## Conflict requiring design-system approval
The LOCKED campaign's provisional graphics mention background `#E8E6E2`, near-black `#151515`, deep green accent `#0F6B5C` and fallback text "Bonded" in Playfair.
The definitive identity instead uses **Paper `#F5F2EA`**, **Ink `#222D33`**, **Hearth `#B94529`**, and a custom-vector wordmark.

**Proposed reconciliation:** preserve the campaign's editorial layouts, headline copy, exact positional guidance and Playfair/Poppins content fonts, but use official Paper/Ink/Hearth and genuine vector lockup. This must be explicitly accepted at the FIRST Canva design-system checkpoint before full production. Do not silently apply a replacement palette or retype the logo.

Page references in 37-page identity PDF: pp 15–16 construction, pp 17–18 wordmark/lockups, pp 19–20 colour, pp 28–32 motion/patterns, pp 33–35 identity rules, p36 production filenames.

## Rules to validate
- Artwork: no generative logo or wordmark; no shadows/gloss on mark itself (soft contact shadows on campaign cutout household objects are a distinct editorial device).
- No official app store badges while product is not available.
- On dark grounds: use reversed SVG/room correction and Hearth Light, never ordinary Hearth on Ink/Night.
- The screenshot UI includes Cobalt buttons, which is correct **inside real app images**; do not recolour real screenshots to conform to a campaign palette.

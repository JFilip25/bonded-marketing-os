# BONDED prelaunch QA checklist

## Source and claims
- [ ] `campaign/weeks-01-02.md` matches the last approved amendment: SHA-256 `18d3160f194a0f835c9e929681b5b182a8d0c021535868cbdbc76a7a57a46214` (Amendment 1, 10 Oct 2026). The original locked file was `b140a8452e01595e04ac21a3e0cbfa80ca8856f19fca824a67f0b69f28fac5fe` (9 Oct 2026). Any other change needs owner approval and an entry in `campaign/CHANGELOG.md`.
- [ ] Every product claim in an asset is VERIFIED in `product/feature-claims.md`, or covered by an approved amendment
- [ ] On-creative text and captions match the locked source exactly (or approved amendments and localization)

## Brand (see `design/brand-identity.md`, `design/brand-reconciliation.md`)
- [ ] The logo comes only from `assets/brand/` files: never retyped, recoloured, outlined, rotated or shadowed, and the room is never filled
- [ ] Logo minimum sizes and one-room clear space are respected
- [ ] Colours are only Paper, Ink, Hearth, muted and white (for video). Hearth is never on Ink, Night or dark footage. Cobalt and Sage appear only inside app screenshots.
- [ ] All text is in Plus Jakarta Sans 400/600/800, with no italics, and the type mapping matches the reconciliation table
- [ ] No two-circle shapes that imitate the mark
- [ ] Contrast is at least 4.5:1 for small text

## Screens (see `design/screenshots-manifest.md`)
- [ ] Only real screenshots from the manifest: unaltered, cropped only, and each labelled "Demo family"
- [ ] Crops avoid the known bugs (P1–P3 in `ops/product-team-notes.md`)
- [ ] Consistent light or dark choice (D1) and currency choice (D2)
- [ ] Captured screens carry their capture commit and method in the manifest

## Formats
- [ ] Feed 1080×1440, with 180 px clear at top and bottom and 50 px at the sides
- [ ] Covers stay inside the centre 1080×1350
- [ ] Reels 1080×1920, with 250 px clear at the top, 350 px at the bottom and 150 px on the right
- [ ] Stories 1080×1920, with 250 px clear at top and bottom
- [ ] Text fits within its line limit (e.g. Layout C headlines on two lines at most). Overflow is flagged, never silently resized outside the approved range.
- [ ] Exports are sRGB PNG at full size. Video overlays are transparent PNGs, and the transparency has been checked.

## People and consent
- [ ] No faces and no AI children in static graphics. Real footage permissions are handled separately and stored outside this repo.
- [ ] Share-back Stories use only genuine replies, shared with permission
- [ ] No child data is collected for marketing

## Email and acquisition
- [ ] MailerLite sender domain verified (SPF/DKIM); double opt-in tested
- [ ] Early access, family tips and starter pack kept as separate consents. Resource delivery is not marketing consent.
- [ ] Website forms tested on mobile and desktop, with privacy notice, error states and UTM capture
- [ ] "Comment WAITLIST" really sends the link (ManyChat test, steps in `ops/manychat-waitlist.md`)

## Publishing safety
- [ ] Buffer channels verified. Every post is a draft or idea; nothing is scheduled or published without approval.
- [ ] No Routine can send, publish, schedule, activate or deploy
- [ ] Test-run links, service IDs and approvals are recorded in `ops/`

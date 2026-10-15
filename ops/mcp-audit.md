# MCP and service audit

**Checked:** 9 Oct 2026, interactive Claude Code session. Every call was **read-only**; nothing was created, sent or changed.

**Scope:** these are the connectors visible to *this* session. Claude Routines (cloud) get the connectors chosen when each Routine is created. Re-verify inside the first Routine run; never assume.

## Connection matrix

| Service | Connected | Account / scope seen | State found | Capabilities relevant to BONDED | Limits and risks |
|---|---|---|---|---|---|
| **GitHub** (MCP + git) | Yes | `JFilip25/bonded-marketing-os` and `JFilip25/ciccho-Claude`, both **private**, both pushable | Marketing repo `main` @ `bfdf2e5`. PR #1 open (draft, by ChatGPT). Product repo default @ `eecbc56`; newest `claude/bonded-family-ai` @ `81b164b`. | Branches, PRs, file reads, code search | Private repos: Canva can't import from raw GitHub URLs. The product repo is **read-only for marketing** (D-2026-10-09-5). |
| **Canva** | Yes | The user's Canva account | **0 brand kits. 0 designs matching "bonded".** | Create a design from a brief. `edit-design`: add pages at custom px size; add and position text; size, colour, bold, italic and alignment; insert SVG-path shapes; insert uploaded images; crop and position. `create-upload-url`: raw-byte upload of PNG, SVG or PDF. Export PNG, JPG, PDF or MP4 at width/height, with transparent background. Brand templates and autofill. AI image generation. Comments. | No **font family** or letter-spacing parameter is visible in `edit-design` (capability spike in Phase 3). No brand-kit creation through MCP. URL import needs a **public** HTTPS URL. |
| **MailerLite** | Yes, authenticated | Account `2698911`, environment `prod`, token valid to Oct 2027 | **0 groups. 0 embedded forms. 0 automations. 0 campaigns.** Only the 8 default fields. Subscriber total: 1. | Groups, fields, segments and forms (create, update, delete). Automations: create, step editing, triggers, `dry_run_automation`, `send_test_automation`. Campaigns: create, update, schedule. Webhooks. `validate_email_content`, `validate_subject_lines`. | No MCP tool to read **sender domains, sender identities or double opt-in settings**: check those in the MailerLite UI. `schedule_campaign` and automation enabling are **live actions** and need explicit approval. |
| **Buffer** | Yes, authenticated | Organisation "My organization", timezone **Europe/Podgorica** | **0 channels connected.** Plan limits: **3 channels, 10 scheduled posts**, 100 ideas, 3 tags, 0 extra members. | Channels, posts (create, edit, delete), ideas, post templates, aggregated metrics, GraphQL queries and mutations | No Instagram, Facebook or TikTok channel exists yet, so no drafts can be made. The 10 scheduled-post cap is below the 45 platform posts in weeks 1–2 (D8). Buffer does not do comment-to-DM. |
| **Vercel** | Yes (proxy credential) | Team "jfilip25's projects" | Project `bonded-family` → `bonded-family.vercel.app`: the app's **pair/join deep-link page** (noindex, "App Store / Google Play coming soon"). **No waitlist site.** | Projects, deployments, domains, env, logs | Never deploy production without approval. The link site lives in the app repo (`web/links/`), so leave it alone. |
| **Google Drive** | Yes | n/a | No BONDED files found. The identity case-study PDF is **not** there. | Search, read, create | n/a |
| **Supabase** (MCP) | Yes | Project `qcncnqwdokyrcxmjmrie`: the **production** app database | Not used | n/a | **Never use it for marketing.** Screens are captured on a local stack only. |
| **Expo** | Yes | n/a | Not used | Builds, store submission | Out of marketing scope |
| **Brevo** | Yes | n/a | Not used | n/a | The product uses Brevo only as the SMTP for login emails. MailerLite owns marketing email. Don't mix them. |
| **Gmail / Google Calendar** | Yes | n/a | Not used | n/a | Never send from marketing workflows |
| **ManyChat** | **No** | n/a | n/a | n/a | **Required** for "Comment WAITLIST" on Instagram (D7). Set it up in its own UI from `ops/manychat-waitlist.md`. |
| **HubSpot, Neon** | Need authorisation | n/a | n/a | n/a | Not needed |
| **Analytics** (GA4, Meta Insights, TikTok Analytics) | **No** connectors | n/a | n/a | n/a | Reporting is limited to Buffer metrics and MailerLite stats until analytics exists on the waitlist site |
| **Claude Routines** | Available (`create_trigger`) | n/a | No BONDED Routines created | Scheduled cloud sessions with chosen connectors | Created only after the manual workflows pass. **Draft-only** prompts. |

## What this means for the intended architecture

| Function | Intended tool | Ready? | Missing |
|---|---|---|---|
| Orchestration and planning | Claude Code + Routines | Partly | Routines not created (by design) |
| Design production | Canva | Partly | Brand kit (UI), font check (spike), approved templates |
| Social publishing | Buffer | **No** | Connected IG/FB/TikTok channels, plan limits |
| Comment WAITLIST → DM | ManyChat | **No** | Account, Meta connection, keyword flow, test |
| Email list, forms and automations | MailerLite | **No (empty)** | Groups, fields, form, sender domain and DKIM, welcome flow (inactive), test |
| Waitlist page | BONDED website | **No** | Repo, domain, privacy notice, form integration, UTM capture (D6) |
| Analytics | Website analytics + platform insights | **No** | Analytics on the site; read access to insights |

## Canva capability spike (Phase 3, step 1), run 9 Oct 2026

The test design is "ZZ TEST capability spike (safe to delete)", `DAHXi5aZVwo`. The Canva MCP has **no delete-design tool**, so remove it by hand in Canva.

| Capability | Result | Evidence or workaround |
|---|---|---|
| 1080×1440 page | **Yes.** The "Instagram Post (Portrait)" format is exactly 1080×1440. | `read-design` reports 1080×1440 |
| Custom page sizes (e.g. 1080×1920) | **Yes.** `add_page` takes width, height and background colour. | Page 2 of the test design |
| Plus Jakarta Sans | **No, not reliably.** `create-design` asked for "Plus Jakarta Sans" but gave mixed font refs across text boxes (`YAFdJs2qTWQ`, `YAFdJsjyMsM`, `YAD1aU3sLnI`, `YACgEan-tYE`…). A one-page specimen used a single ref (`YAFdJqX996o`), but a side-by-side render against the real Jakarta TTF shows **a different typeface**. `add_text` uses Canva's default font, and there is **no font-family parameter**. | Exact proofs are rendered locally with the real font files (`design/checkpoint-01/`). The Canva options for the owner are in `design/checkpoint-01/README.md`. |
| SemiBold (600) and letter spacing | **No** through MCP. Only normal and bold. Letter spacing can't be set; AI boxes come with about −0.03 em. | 600 becomes Regular or Bold, flagged. Headline fit is checked from the box heights reported. |
| Text shadow | **No** through MCP | Video text styles are rendered locally as transparent PNGs, to spec |
| Exact position, size, colour, alignment, line height | **Yes** (`position_element`, `resize_element`, `format_text`) | Positions verified with `read-design` |
| Official SVG upload (`create-upload-url`, raw bytes) | **Yes.** `bonded-lockup-horizontal-color.svg` became media `MAHXi5gTVgA` and renders correctly. | After resizing, `crop_media` is needed to fit the image box |
| Flat shapes in exact colours (SVG path) | **Yes** | AI page backgrounds are images and can contain ghost text, so a full-bleed Paper (`#F5F2EA`) rectangle is layered at the back |
| Opaque PNG export | **Yes.** 1080×1440 RGB, background measured as (245,242,234) = `#F5F2EA`. | Exported file checked with PIL |
| **Transparent PNG export** | **No: "Users on the Canva Free plan can not export PNGs with transparent background."** | Video overlays are rendered locally as transparent PNGs, or the owner upgrades to Canva Pro |
| PDF upload | It uploads as a file (`fileId`), **not an editable design** | n/a |
| Brand kit | None exists, and none can be created through MCP | The owner can create one in the Canva UI (a paid feature) |
| AI image generation (`generate-image`) | **Quota exhausted** after 4 images: "You have exceeded your credit quota." | 2 Day 2 objects were made (trainers `MAHXjI1iFJ4`, bin `MAHXjEcPcBw`). 3 are still placeholders: laundry basket, dishwasher basket, fridge list. |
| Background remover | **Paid plans only** | The objects are generated on a Paper-coloured background and blended to exact `#F5F2EA` locally |
| Test designs left in Canva (no delete tool) | `DAHXi5aZVwo` "ZZ TEST capability spike"; `DAHXjGv0ut0` "ZZ TEST mixed-font AI draft"; `DAHXjOXwQqg` "ZZ TEST font specimen, not Plus Jakarta Sans" | Safe for the owner to delete |
| Delete a design | **No tool** | Manual |

## Canva route A: Brand Kit preparation, 10 Oct 2026

**Decision:** Canva Pro with a Brand Kit (D-2026-10-10-2). On 10 Oct, `list-brand-kits` still returned no kits, so Pro and the Brand Kit are still to be set up by the owner.

**Official logo files pre-uploaded to the owner's Canva Uploads.** Byte-identical to `assets/brand/`; each was checked with `get-assets`.

| Media ID | File | Size |
|---|---|---|
| `MAHXlYAK_9s` | `bonded-lockup-horizontal-color.svg` | 830×140 |
| `MAHXlYxCQCQ` | `bonded-lockup-horizontal-reversed.svg` (Paper, for dark grounds) | 830×140 |
| `MAHXlWOLYfs` | `bonded-lockup-stacked-color.svg` | 662×421 |
| `MAHXlT8NI1w` | `bonded-symbol-hearth.svg` | 300×300 |
| `MAHXlSw4rTo` | `social-avatar-1080.png` | 1080×1080 |

**Owner checklist.** In Canva: Brand → Create new Brand Kit "BONDED".

| Section | Set up |
|---|---|
| Logos | Add the five uploads above from Uploads |
| Colours | Paper `#F5F2EA`, Ink `#222D33`, Hearth `#B94529`, Muted `#646A6B`, Night `#171B1D`, Hearth light `#FF9F80` |
| Fonts | Heading: Plus Jakarta Sans ExtraBold (800). Subheading: Plus Jakarta Sans SemiBold (600). Body: Plus Jakarta Sans Regular (400). |

**After that, Phase 2 starts by checking:**
- the kit is visible to `list-brand-kits`
- a transparent PNG export works on the existing test design
- AI credits are available
- whether a design generated with `brand_kit_id` gets the kit's fonts

The results go here.

## Phase 2 capability check, 10 Oct 2026 (after the owner's Canva Pro upgrade)

| Capability | Result | Evidence |
|---|---|---|
| Account | Same Canva user and team as before | `get-assets` owner IDs unchanged. The 9 Oct "ZZ TEST" designs are gone (deleted by the owner, as suggested). |
| Brand Kit visible to the connector | **No.** `list-brand-kits` still returns an empty list. | Canva's help answer: check whether the kit is a personal Brand Kit (private) or a team kit. It couldn't confirm how the Connect API chooses which kits to list. |
| `brand_kit_id` generation spike | **Not possible** while no kit is visible | n/a |
| AI image generation | **Works** | 23 objects generated (the 22 placeholders plus one extra) |
| Transparent PNG export | **Works.** A page with a colour background exports as RGBA, 99.97% transparent. A page whose background is an *image* keeps it. | Working design `DAHXlb7RTko` "ZZ WORKING object exports (safe to delete)", page 2 |
| Multi-page edits | `add_page` and `insert_fill` take several operations in one call, across pages | Same design, pages 3–24 |
| Fonts, weight 600, letter spacing, text shadow through MCP | Unchanged from the Free plan: **not available** | No font-family, letter-spacing or shadow parameter in `edit-design` |

**Brand kit zip.** The owner uploaded `BONDED-brand-kit.zip` (SHA-256 `8c568a42…a9fbde`). Its contents:
- the logos in colour, ink, paper, night, black and white. Every one has the same path geometry as the official files, recoloured.
- Plus Jakarta Sans TTFs
- colour tokens matching the identity, plus two support colours (Clay wash `#F6D8C6`, Sun `#F8D36B`)
- rules for a different slide system (1080×1350, 72 px headlines, a symbol on every slide, boxed video captions)

The owner chose to keep the G1 system and use the kit for logo files, colours and fonts only.

## Canva masters build, 10 Oct 2026

All 11 masters (89 pages) were built through the connector and filed in the folder `FAHXlnLC_sA` "BONDED · Weeks 1–2". The list, links and owner steps are in `design/production/canva/README.md`.

| Operation | Result |
|---|---|
| `create-design` (custom size), `add_page`, `update_title` | Works. Every page is 1080×1440 or 1080×1920, with its background colour set on the page. |
| `edit-design` with many operations across pages | Works. Up to 80 operations in one call, with the operations addressed by page ID. |
| `upload-asset` via `create-upload-url`, then `insert_fill` | Works. 32 media IDs (`design/production/canva/media.json`). |
| `insert_shape` with arcs and curves (circles, pills, rounded boxes, arrows, the padlock) | Works |
| `insert_shape` with a straight stroked path | **Doesn't render.** Built as thin filled bars instead. |
| `format_text`: size, colour, normal/bold, alignment, line height | Works |
| Font family, weight 600, letter spacing, text shadow | **Not available.** These are left to the owner's font step. |
| `read-design` design content with `page_indices` | Works. It returns the text element IDs for the format pass. |
| `copy-design` with page numbers | One page works. Repeating a page number fails ("design not found"). Not used for the masters. |
| Delete a design | No tool exists. The owner deletes `DAHXlb7RTko` and `DAHXlqQsPJk` by hand. |
| `list-folder-items`, `move-item-to-folder` | Work |

Nothing was exported, scheduled or published. Buffer and MailerLite were not used.

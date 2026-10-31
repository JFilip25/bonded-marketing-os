# Waitlist sign-up: bondedin.com and MailerLite

**Status, 17 Oct 2026:**
- **Done:** the domain, the sender, the MailerLite groups, fields and form, and the page, **live at https://go.bondedin.com** since 17 Oct (D-2026-10-17-8). The owner's ManyChat buttons point there.
- **Waiting on the owner:** the form's design and settings in MailerLite, then approval of the page.
- **Not done yet:** a real test sign-up. The form's submit address answers and allows the page to send (checked 17 Oct with an invalid email, which creates no subscriber).

The words are PROPOSED in `proposals/waitlist-page-copy.md`.

**How sign-up works (D-2026-10-17-5, -6):**
1. Someone comments or DMs WAITLIST.
2. ManyChat sends one DM with a "Join the waitlist" button (`ops/manychat-waitlist.md`).
3. The button opens **https://go.bondedin.com** (D-2026-10-17-8), our own page with the MailerLite form inside it. They type their email, and can tick "family tips". The page puts the link's `utm_*` values into hidden fields.
4. MailerLite sends a "confirm your email" message from `go@bondedin.com` (double opt-in).
5. They tap it and land on `https://go.bondedin.com/confirmed`. They're now **active** in `BONDED_EARLY_ACCESS`, which is a real sign-up.

The bio links and the Facebook replies open the same page.

## What exists

| What | Name | ID or address |
|---|---|---|
| MailerLite group | `BONDED_EARLY_ACCESS` | 201589629992830874 |
| MailerLite group | `BONDED_FAMILY_TIPS` | 201589773903594738 |
| MailerLite fields (text) | `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` | 1790776 to 1790779 |
| MailerLite embedded form | BONDED waitlist (bondedin.com), group `BONDED_EARLY_ACCESS`, double opt-in on | 201591973507761668 |
| Domain | bondedin.com: Namecheap DNS, Private Email (MX), MailerLite verification, SPF and DKIM records present | no website yet |
| Sender | `go@bondedin.com` (registered by the owner) | |
| Page source | `site/bondedin/` in this repository | |
| Vercel project | `bondedin-waitlist`, linked to this repository, root `site/bondedin`, only rebuilds when that folder changes | `prj_KpKkIXc9Q7FSonZPKkViGzJM0Tio` |
| Live address | **https://go.bondedin.com** (custom domain public; other Vercel addresses behind the login) | production `dpl_EyyHfaueAw6CqviByNJJkUcbDPmi` |
| Redirects | `bondedin.com` and `www.bondedin.com` → `go.bondedin.com` (308), added to the Vercel project on 17 Oct. They work once the owner adds the DNS records: A `@` 216.198.79.1 and 64.29.17.1, CNAME `www` f745141d17fb7fc0.vercel-dns-017.com | pending DNS |

Nothing has been sent from MailerLite or turned on there.

**Note on Vercel:**
- The project's first build became a production deployment. `bondedin-waitlist.vercel.app` was public for about 6 minutes (about 16:10 to 16:16 UTC, 17 Oct) before Vercel Authentication was set to cover every deployment.
- Merging this branch to `main` will make a production deploy of `site/bondedin` by itself.

## Owner steps

### 1. The form, in MailerLite (about 10 minutes)
Forms → Embedded forms → **BONDED waitlist (bondedin.com)**. MailerLite renames menus from time to time; look for the closest name.
- [ ] Choose the simplest template. Its look doesn't matter: the page draws its own form.
- [ ] **Fields:**
  - Email, required.
  - Interest group `BONDED_FAMILY_TIPS` as a checkbox, not ticked.
  - Four **hidden** fields: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`.
- [ ] **Double opt-in: on.**
  - The confirmation email is from `go@bondedin.com`, with section 3 of `proposals/waitlist-page-copy.md`.
  - The page after confirming (redirect URL) is `https://go.bondedin.com/confirmed`.
- [ ] **Save**, then open the form's embed screen, copy the **"HTML code"**, and paste it to Claude. It's public page code, not a secret. Claude matches the page to its submit address and field names.

### 2. Review the page
- [ ] Open https://bondedin-waitlist.vercel.app while logged in to Vercel. Check the words and the look on your phone.
- [ ] Give the privacy line "Bonded is run by [name, country]", and confirm `go@bondedin.com` as the contact.

### 3. Test (before going live)
With an owner-approved test address, sign up through the Vercel address with `?utm_source=instagram&utm_medium=dm&utm_campaign=bonded_prelaunch_2026&utm_content=dm_comment`. Then tell Claude, which checks in MailerLite:
- [ ] The address shows as **unconfirmed**, then **active** in `BONDED_EARLY_ACCESS` after the confirm click.
- [ ] The four `utm_*` fields filled in.
- [ ] Ticking the tips box also adds `BONDED_FAMILY_TIPS`, and not ticking it doesn't.
- [ ] The test address is never written into this repository.

### 4. Go live (done 17 Oct)
- [x] The owner pointed `go.bondedin.com` at Vercel (CNAME at Namecheap) and attached it to the project. The MX, TXT and DKIM records are untouched.
- [x] Claude deployed the page to production and made the custom domain public. https://go.bondedin.com and `/confirmed` answer 200 over HTTPS (D-2026-10-17-8).

### 5. Point everything at it

| Where | Link |
|---|---|
| ManyChat, comment WAITLIST (Automation 1) | `https://go.bondedin.com/?utm_source=instagram&utm_medium=dm&utm_campaign=bonded_prelaunch_2026&utm_content=dm_comment` |
| ManyChat, DM WAITLIST (Automation 2) | `https://go.bondedin.com/?utm_source=instagram&utm_medium=dm&utm_campaign=bonded_prelaunch_2026&utm_content=dm_keyword` |
| Facebook replies by hand (or Automation 3) | `https://go.bondedin.com/?utm_source=facebook&utm_medium=dm&utm_campaign=bonded_prelaunch_2026&utm_content=dm_comment` |
| Instagram bio | `https://go.bondedin.com/?utm_source=instagram&utm_medium=bio&utm_campaign=bonded_prelaunch_2026&utm_content=bio` |
| TikTok bio | `https://go.bondedin.com/?utm_source=tiktok&utm_medium=bio&utm_campaign=bonded_prelaunch_2026&utm_content=bio` |

These links only work once step 4 is done. Changing the bios is a public profile change, so it's your step. Then run the ManyChat test in `ops/manychat-waitlist.md` from a second Instagram account, and tick "Comment WAITLIST really sends the link" in `ops/qa-checklist.md` with the date and result.

## Later
- The welcome email (section 6 of the proposal), built inactive with the trigger "joins `BONDED_EARLY_ACCESS`". The owner turns it on (G4).

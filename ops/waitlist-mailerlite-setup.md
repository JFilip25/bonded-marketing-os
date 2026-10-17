# Waitlist sign-up: MailerLite setup checklist

**Status, 17 Oct 2026:** the MailerLite groups and fields exist (below). The domain, the sender, the page and the test are still to do. The page's words are PROPOSED in `proposals/waitlist-page-copy.md` and need approval first.

**How sign-up works (D-2026-10-17-5):**
1. Someone comments or DMs WAITLIST.
2. ManyChat sends one DM with a "Join the waitlist" button (`ops/manychat-waitlist.md`).
3. The button opens the MailerLite landing page. They type their email, and can tick "family tips".
4. MailerLite sends a "confirm your email" message (double opt-in).
5. They tap it. They're now **active** in `BONDED_EARLY_ACCESS`, which is a real sign-up.

The bio links and the Facebook replies open the same page.

## Already done (through the MailerLite connector, account 2698911)

| What | Name | ID |
|---|---|---|
| Group | `BONDED_EARLY_ACCESS` | 201589629992830874 |
| Group | `BONDED_FAMILY_TIPS` | 201589773903594738 |
| Field (text) | `utm_source` | 1790776 |
| Field (text) | `utm_medium` | 1790777 |
| Field (text) | `utm_campaign` | 1790778 |
| Field (text) | `utm_content` | 1790779 |

Nothing has been sent, published or turned on.

## Owner steps

The connector can't make landing pages, verify domains or set double opt-in, so these are done in MailerLite's own screens. MailerLite renames its menus from time to time. If a name below doesn't match, look for the closest one.

### 0. Right now: what does the ManyChat button open?
- [ ] Until the page exists, the DM promises a link it can't give. Either leave the automation **off**, or make sure it doesn't send a placeholder or broken link.

### 1. The domain
- [ ] Buy the domain (owner's purchase; the trademark check on "Bonded" is still open).
- [ ] Set up a way to **receive** mail on it, for example `hello@<domain>`. The registrar's free email forwarding to your own inbox is enough. MailerLite sends a check email to this address.

### 2. MailerLite: the domain and the sender
- [ ] **Account settings → Domains → Add domain.** MailerLite shows DNS records (usually DKIM and SPF, sometimes a return-path record). Add each one at the registrar's DNS page, exactly as shown, then press **Verify** in MailerLite. DNS can take up to a few hours.
- [ ] **Add the sender address** `hello@<domain>` (or the one you chose) and click the link in MailerLite's check email.
- [ ] **Company details:** MailerLite asks for a company or owner name and a **postal address**. The law puts it in every email's footer (CAN-SPAM in the US; similar rules in the UK and EU). Type it only in MailerLite, never in a chat or this repository.
- [ ] If MailerLite asks you to **finish an account review** before it sends, do it now. It can take up to a day.

### 3. The landing page
- [ ] **Sites → Landing pages → Create**, and pick the simplest one-column template.
- [ ] **Look:**
  - background Paper `#F5F2EA`, text Ink `#222D33`, the button in Ink with Paper text
  - Plus Jakarta Sans if MailerLite offers it, otherwise the closest plain sans
  - the official logo from `assets/brand/` (the colour lockup PNG), never retyped
  - no photos of children
- [ ] **Words:** paste sections 1, 2, 4 and 5 of `proposals/waitlist-page-copy.md` exactly, once approved. Fill in the two bracketed privacy items.
- [ ] **Form block:**
  - Email, required.
  - The tips checkbox as an **interest group**: `BONDED_FAMILY_TIPS`, not ticked by default.
  - Four **hidden** fields: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`.
  - New subscribers join `BONDED_EARLY_ACCESS`.
- [ ] **Double opt-in: on.** Edit the confirmation email to section 3 of the proposal, from the sender in step 2.
- [ ] **Thank-you message** (section 2) and **confirmed page** (section 4).
- [ ] **Publish** on MailerLite's free web address. A subdomain of the new domain, such as `join.<domain>`, can come later. Publishing makes the page public, so it's your step.

### 4. Point everything at the page
Replace `<page>` with the published address:

| Where | Link |
|---|---|
| ManyChat, comment WAITLIST (Automation 1) | `<page>?utm_source=instagram&utm_medium=dm&utm_campaign=bonded_prelaunch_2026&utm_content=dm_comment` |
| ManyChat, DM WAITLIST (Automation 2) | `<page>?utm_source=instagram&utm_medium=dm&utm_campaign=bonded_prelaunch_2026&utm_content=dm_keyword` |
| Facebook replies by hand (or Automation 3) | `<page>?utm_source=facebook&utm_medium=dm&utm_campaign=bonded_prelaunch_2026&utm_content=dm_comment` |
| Instagram bio | `<page>?utm_source=instagram&utm_medium=bio&utm_campaign=bonded_prelaunch_2026&utm_content=bio` |
| TikTok bio | `<page>?utm_source=tiktok&utm_medium=bio&utm_campaign=bonded_prelaunch_2026&utm_content=bio` |

Changing the bios is a public profile change, so it's your step.

### 5. Test before relying on it
Follow the five steps in `ops/manychat-waitlist.md` ("Test"), from a second Instagram account and with an owner-approved test address. Then tell Claude, which checks in MailerLite:
- [ ] The test address appears as **unconfirmed** before the confirm click, and **active** in `BONDED_EARLY_ACCESS` after it.
- [ ] Ticking the tips box also adds it to `BONDED_FAMILY_TIPS`. Not ticking it doesn't.
- [ ] Whether the four `utm_*` fields filled in from the link. If MailerLite doesn't fill hidden fields from the link, record that: sign-ups then count only by group, and per-link numbers wait for an own-site page (D6).
- [ ] The test address is never written into this repository.

Tick "Comment WAITLIST really sends the link" in `ops/qa-checklist.md` with the date and the result. Never record a test as passed without doing it.

## Later
- The welcome email (section 6 of the proposal), built inactive with the trigger "joins `BONDED_EARLY_ACCESS`". The owner turns it on (G4).
- Moving the page to the new domain or an own site (D6). The links above then change in ManyChat and the bios.

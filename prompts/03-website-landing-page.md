# 03 - BONDED waitlist page (preview only)

**State on 9 Oct 2026:** **no BONDED website repository or domain exists.**

- `bonded-family.vercel.app` (Vercel project `bonded-family`) is the app's pair/join deep-link page. It lives in the **app repo** (`web/links/`), is `noindex`, and **must not be modified** for marketing (D-2026-10-09-5).
- The website repo and domain are decision D6.

Once D6 is decided:
1. Read the campaign and `CLAUDE.md`.
2. Build on a feature branch of the approved website repo. Use the approved identity: Paper/Ink/Hearth, Plus Jakarta Sans and the official logo files from `assets/brand/`.
3. The page includes:
   - the positioning, "A family app for running the week together"
   - real screenshot slots from `assets/screens/`, labelled "Demo family"
   - an early-access email capture
   - a **separate, optional** family-tips consent
4. A Family Week Starter Pack request (if one ever exists) must not enrol anyone in marketing unless they opt in.
5. Connect to the approved MailerLite form or API **server-side**; never expose API keys.
6. Record UTM tags and the consent method, with no personal data in the URL.
7. Test with authorised test accounts and return the **preview** URL.

Never deploy production without the owner's approval.

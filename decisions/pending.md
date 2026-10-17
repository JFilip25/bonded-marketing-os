# Decisions still needed

Each entry gives the options and a recommendation. None is applied until the owner decides.

Resolved on 10 Oct 2026 and moved to `decisions/log.md`: D1 and D2 (D-2026-10-10-5), D3 (D-2026-10-10-4), D4 (D-2026-10-10-3), D5 (D-2026-10-10-6), D9 and G1 (D-2026-10-10-1), D11 (D-2026-10-10-2).

Resolved on 15 Oct 2026 and moved to `decisions/log.md`: D13 (D-2026-10-15-11), D14 and G2 (D-2026-10-15-9), D15 (D-2026-10-15-10). D12 is superseded: Amendment 3 replaced the three Day 4 and Day 10 caption lines it covered. D10 (D-2026-10-15-13: `@bondedspace`).

Changed on 17 Oct 2026: Instagram and Facebook are scheduled in Meta Business Suite (D-2026-10-17-1), so they no longer wait for D6, D7 or D8. The WAITLIST comments on both are answered by hand until D7 is live (D-2026-10-17-2). The sign-up page is a MailerLite landing page for now (D-2026-10-17-5), so D6 now only decides the later own site.

| ID | Decision | Options | Recommendation | Blocks |
|---|---|---|---|---|
| D6 | **Own website** for the waitlist, later. For now the page is on MailerLite (D-2026-10-17-5), and the owner is buying the domain. | (a) a new repo, e.g. `JFilip25/bonded-web`, deployed on Vercel, (b) add a waitlist page to the existing `bonded-family.vercel.app` link site (lives in the app repo, `web/links/`) | **(a) a new repo.** The app repo stays untouched (D-2026-10-09-5), and the link site is deliberately `noindex`. A domain is needed either way; the trademark check on "Bonded" is still pending. | Waitlist page, UTM, MailerLite form |
| D7 | **Comment-to-DM provider** for "Comment WAITLIST" | (a) ManyChat (named in the campaign), (b) another Meta-approved tool | **(a) ManyChat.** The owner reports it set up (17 Oct). Still to do: approve the words (`proposals/manychat-waitlist-copy.md`), put the MailerLite page link on its button (`ops/waitlist-mailerlite-setup.md`, step 4), and test it. | The WAITLIST replies: every Instagram caption (Days 0 to 14) and, since Amendment 4, every Facebook caption of Days 1 to 14 ends "Comment WAITLIST". Until this is live, the owner replies by hand. |
| D8 | **Buffer plan.** The current organisation allows 3 channels and 10 scheduled posts. | (a) stay on free and keep only drafts or ideas in Buffer, (b) upgrade before scheduling | Decide before scheduling TikTok in Buffer. Instagram and Facebook no longer need Buffer: they are scheduled in Meta Business Suite (D-2026-10-17-1). | TikTok scheduling |

async function _o(t, e) {
    const n = fo;
    if (void 0 === e) return !1;
    let r = new I();
    r[n(327)]({ translate: n(326) }),
        r.body({
            rawtext: [
                { translate: n(347), with: ["" + e[n(335)]] },
                { text: "\n" },
                { translate: n(279), with: ["" + e[n(344)].length] },
                { text: "\n" },
                { translate: n(367) },
                { text: "\n" },
                ...je[n(371)](e[n(336)]),
                { text: "\n" },
                { translate: n(329) },
                { text: "\n" },
                ...je.getTrustedRanksBody(e[n(280)]),
                { text: "\n" },
                { translate: n(317) },
                { text: "\n" },
                ...je[n(365)](e.permissions),
                { text: "\n" },
                { translate: "thm_rmt.form.claim.claimFlags" },
                { text: "\n" },
                ...je[n(339)](e.flags),
            ],
        }),
        r[n(373)]({ translate: "thm_rmt.form.claim.edit.viewSubClaims" }, Mn[n(350)]),
        r[n(373)]({ translate: n(290) }, Mn[n(316)]);
    const a = await r[n(337)](t);
    if (!a) return !1;
    if (a[n(300)]) return !1;
    if (void 0 === a.selection) return !1;
    if (1 === a[n(308)]) return !0;
    let s = !1;
    return 0 === a[n(308)] && (s = await yo(t, e[n(344)])), s && _o(t, e), !1;
}
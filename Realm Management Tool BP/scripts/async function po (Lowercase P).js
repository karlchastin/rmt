async function po(t, e, n, r) {
    const a = fo;
    let s = new I();
    s.title({ translate: a(281) }),
        s[a(310)]({
            rawtext: [
                { translate: "thm_rmt.form.claim.edit.subClaims.body" },
                { text: "\n\n" },
                { translate: a(307) },
                { text: "\n" },
                ...je.getSubGroupNamesBody(r[a(343)]),
            ],
        });
    const i = [];
    s[a(373)]({ translate: a(325) }, Mn[a(350)]),
        i[a(324)](a(293)),
        r[a(343)][a(353)] > 0 &&
            (s.button({ translate: "thm_rmt.form.claim.edit.subClaims.view" }, Mn[a(304)]),
            s[a(373)]({ translate: "thm_rmt.form.claim.edit.subClaims.add" }, Mn[a(306)]),
            s.button({ translate: "thm_rmt.form.claim.edit.subClaims.remove" }, Mn[a(303)]),
            s[a(373)]({ translate: a(319) }, Mn.CLAIM_NAME),
            s.button({ translate: "thm_rmt.form.claim.edit.subClaims.editTrusted" }, Mn[a(312)]),
            s[a(373)]({ translate: "thm_rmt.form.claim.button.editRankTrusted" }, Mn[a(348)]),
            s[a(373)]({ translate: "thm_rmt.form.claim.edit.subClaims.editPermissions" }, Mn.CLAIM_PERMISSIONS),
            s[a(373)]({ translate: a(314) }, Mn[a(286)]),
            s[a(373)]({ translate: a(292) }, Mn[a(364)]),
            i[a(324)](a(299), a(359), a(289), a(338), a(311), a(354), a(369), a(351), a(358))),
        s.button({ translate: a(290) }, Mn[a(316)]),
        i[a(324)](a(315));
    const o = await s[a(337)](t);
    if (!o) return !1;
    if (o.canceled) return !1;
    if (void 0 === o[a(308)]) return !1;
    const c = i[o.selection];
    if (c === a(315)) return !0;
    let m;
    if (r.subClaimGroupNames[a(353)] > 0 && c !== a(293)) {
        if (((m = await Io(t, r.subClaimGroupNames)), void 0 === m)) return !1;
        if ("BACK" === m) return po(t, e, n, r), !1;
    }
    const l = je[a(342)](e, n, m);
    let u = !1;
    switch (c) {
        case "create":
            const s = await $i(t, [
                {
                    type: Zi[a(309)],
                    label: { translate: a(288) },
                    placeholder: { translate: "thm_rmt.form.claim.input.subClaimName.placeholder" },
                },
            ]);
            if (void 0 === s) return !1;
            if (s[a(300)]) return !1;
            if (void 0 === s[a(298)]) return !1;
            const i = s[a(298)][0];
            if (r[a(343)][a(366)](i)) return $t[a(320)](t, { translate: "thm_rmt.message.claim.subClaim.already" }), !1;
            je.addSubClaimGroupName(e, n, i), $t[a(291)](t, { translate: a(334), with: ["" + i] });
            break;
        case "View":
            u = await _o(t, l);
            break;
        case "Add":
            const o = await ko(t, r[a(344)]);
            if (void 0 === o) return !1;
            if (o === a(316)) return po(t, e, n, r), !1;
            const c = o;
            if (je.isInSubclaim(e, n, c)) return $t.sendErrorMsg(t, { translate: a(328) }), !1;
            je[a(333)](e, n, m, c), $t[a(291)](t, { translate: a(368) });
            break;
        case a(289):
            const h = je.getSubClaimClaims(e, n, m),
                f = await ko(t, h);
            if (void 0 === f) return !1;
            if (f === a(316)) return po(t, e, n, r), !1;
            const d = f;
            if (!je[a(356)](e, n, d)) return $t[a(320)](t, { translate: a(346) }), !1;
            je[a(297)](e, n, m, d), $t[a(291)](t, { translate: a(341) });
            break;
        case a(338):
            const p = await $i(t, [
                {
                    type: Zi[a(309)],
                    label: { translate: "thm_rmt.form.claim.input.subClaimName" },
                    placeholder: { translate: a(295) },
                    defaultValue: m,
                },
            ]);
            if (void 0 === p) return !1;
            if (p.canceled) return !1;
            if (void 0 === p[a(298)]) return !1;
            const _ = p[a(298)][0];
            if (_ === m) return !1;
            if (r[a(343)].includes(_)) return $t[a(320)](t, { translate: a(332) }), !1;
            je[a(362)](e, n, m, _), $t[a(291)](t, { translate: a(355), with: ["" + _] });
            break;
        case a(311):
            u = await eo(t, e, n, r[a(336)], $[a(340)], m);
            break;
        case a(354):
            u = await uo(t, e, n, l[a(280)], $[a(340)], m);
            break;
        case a(369):
            const I = await so(t, l[a(360)]);
            if (void 0 === I) return !1;
            je[a(361)](e, n, m, I), $t[a(291)](t, { translate: a(284) });
            break;
        case a(351):
            const g = await co(t, l[a(323)]);
            if (void 0 === g) return !1;
            je[a(322)](e, n, m, g), $t[a(291)](t, { translate: a(283) });
            break;
        case a(358):
            (await qn.sendConfirmation(t, { translate: a(301), with: ["" + m] })) &&
                (je[a(345)](e, n, m), $t.sendSuccessMsg(t, { translate: a(278), with: ["" + m] }));
    }
    return u && po(t, e, n, r), !1;
}
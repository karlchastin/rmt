async function ko(t, e) {
    const n = wo;
    let r = new I();
    if (0 === e[n(511)]) return;
    r[n(490)]({ translate: n(536) }),
        r[n(449)]({ translate: "thm_rmt.form.claim.edit.pickClaimType.body", with: ["" + e[n(511)]] }),
        r[n(524)]({ translate: "thm_rmt.form.pickClaimType.button.select" }, Mn[n(432)]),
        r[n(524)]({ translate: n(482) }, Mn[n(487)]),
        r[n(524)]({ translate: "thm_rmt.form.pickClaimType.button.position" }, Mn[n(447)]),
        r[n(524)]({ translate: "thm_rmt.form.button.back" }, Mn[n(523)]);
    const a = await r[n(494)](t);
    if (void 0 !== a && !a[n(454)] && void 0 !== a.selection) {
        if (3 === a[n(460)]) return "BACK";
        if (0 === a[n(460)]) return await vo(t, e);
        if (1 === a[n(460)]) {
            const r = await $i(t, [
                {
                    type: Zi[n(426)],
                    label: { translate: "thm_rmt.form.claim.edit.pickClaimType.input.x" },
                    placeholder: "" + e[0].x,
                    defaultValue: "" + e[0].x,
                },
                { type: Zi[n(426)], label: { translate: n(462) }, placeholder: "" + e[0].y, defaultValue: "" + e[0].y },
            ]);
            if (void 0 === r) return;
            if (r[n(454)]) return;
            if (void 0 === r.formValues) return;
            const a = parseInt(r.formValues[0]),
                s = parseInt(r[n(525)][1]);
            if (isNaN(a) || isNaN(s)) {
                return (await qn.sendError(t, { translate: n(472), with: [r[n(525)][0] + ":" + r[n(525)][1]] }))
                    ? await ko(t, e)
                    : void 0;
            }
            if (-1 === e[n(508)]((t) => t.x === a && t.y === s)) {
                return (await qn.sendError(t, { translate: n(513), with: [r[n(525)][0] + ":" + r.formValues[1]] }))
                    ? await ko(t, e)
                    : void 0;
            }
            return { x: a, y: s };
        }
        if (2 === a[n(460)]) {
            const r = en[n(483)](t[n(451)]),
                a = e[n(473)]((t) => t.x === r.x && t.y === r.y);
            if (void 0 === a) {
                return (await qn.sendError(t, {
                    translate: "thm_rmt.form.claim.edit.pickClaimType.noClaimChunk",
                    with: [r.x + ":" + r.y],
                }))
                    ? await ko(t, e)
                    : void 0;
            }
            return a;
        }
    }
}
async function yo(t, e, n = 0) {
    const r = wo;
    let a = new I();
    if (
        (a[r(490)]({ translate: r(455), with: [n + 1 + "/" + Math[r(500)](e[r(511)] / 20)] }),
        a[r(449)]({
            rawtext: [
                { translate: r(532) },
                { text: "\n\n" },
                { translate: r(429), with: ["" + e[r(511)]] },
                { text: "\n" },
                ...je[r(431)](e)[r(497)](Math.min(20 * n, e[r(511)]), Math[r(510)](20 * (n + 1), e[r(511)])),
            ],
        }),
        0 === e[r(511)])
    )
        return !1;
    const s = [];
    !(20 * (n + 1) >= e.length) &&
        (a[r(524)]({ translate: "thm_rmt.form.button.next" }, Mn[r(441)]), s[r(489)](r(441))),
        n > 0 && (a[r(524)]({ translate: r(459) }, Mn[r(523)]), s[r(489)](r(448))),
        a[r(524)]({ translate: r(470) }, Mn[r(523)]),
        s[r(489)](r(523));
    const i = await a[r(494)](t);
    if (!i) return !1;
    if (i[r(454)]) return !1;
    if (void 0 === i.selection) return !1;
    const o = s[i[r(460)]];
    return o === r(523) || (o === r(441) ? await yo(t, e, n + 1) : o === r(448) && (await yo(t, e, n - 1)));
}
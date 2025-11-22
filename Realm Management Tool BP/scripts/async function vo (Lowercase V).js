async function vo(t, e, n = 0) {
    const r = wo;
    let a = new I();
    if (
        (a.title({ translate: r(515), with: [n + 1 + "/" + Math[r(500)](e.length / 10)] }),
        a[r(449)]({ translate: r(424) }),
        0 === e.length)
    )
        return;
    const s = [],
        i = [];
    for (const t of e[r(497)](10 * n, 10 * (n + 1)))
        a.button({ text: t.x + ":" + t.y }), s.push(t.x + ":" + t.y), i[r(489)](t);
    !(10 * (n + 1) >= e.length) && (a[r(524)]({ translate: r(484) }, Mn.NEXT), s[r(489)](r(441))),
        n > 0 && (a[r(524)]({ translate: r(459) }, Mn[r(523)]), s[r(489)](r(448))),
        a[r(524)]({ translate: r(470) }, Mn[r(523)]);
    const o = await a[r(494)](t);
    if (!o) return;
    if (o[r(454)]) return;
    if (void 0 === o.selection) return;
    const c = s[o[r(460)]];
    return "BACK" === c
        ? r(523)
        : "NEXT" === c
          ? await vo(t, e, n + 1)
          : c === r(448)
            ? await vo(t, e, n - 1)
            : i[o[r(460)]];
}
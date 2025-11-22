async function Vo(t) {
    const n = Go;
    let r = new I();
    const a = je[n(400)]("admin", T[n(451)]),
        s = je.getClaimData(n(459), T[n(419)]),
        i = je[n(400)](n(459), T[n(435)]),
        c = void 0 !== a && a[n(421)][n(428)] > 0,
        m = void 0 !== s && s[n(421)][n(428)] > 0,
        l = void 0 !== i && i[n(421)][n(428)] > 0,
        u = c || m || l;
    r.title({ translate: n(449) });
    const h = {
        rawtext: [
            { translate: n(439) },
            { text: "\n\n" },
            { translate: "thm_rmt.form.admin.main.body.players" },
            { text: "\n\n" },
            { translate: n(407) },
            { text: "\n\n" },
            { translate: n(431) },
            { text: "\n\n" },
            { translate: n(455) },
            { text: "\n\n" },
            { translate: "thm_rmt.form.admin.main.body.adminClaimFlag" },
            { text: "\n\n" },
        ],
    };
    u && h.rawtext[n(411)]({ translate: "thm_rmt.form.admin.main.body.adminClaims" }, { text: "\n\n" }),
        h[n(430)][n(411)](
            { translate: n(412) },
            { text: "\n\n" },
            { translate: n(457) },
            { text: "\n\n" },
            { translate: n(429) },
            { text: "\n\n" },
            { translate: n(425) },
            { text: "\n\n" }
        ),
        r.body(h);
    const f = [];
    r.button({ translate: n(433) }, Mn[n(437)]),
        r[n(404)]({ translate: n(427) }, Mn.MENU_SPAWN),
        r.button({ translate: n(420) }, Mn.MENU_WARPS),
        r[n(404)]({ translate: n(444) }, Mn[n(415)]),
        r[n(404)]({ translate: n(445) }, Mn.ADMIN_CLAIM),
        f.push("Manage Players", "Manage Spawn", n(414), n(456), n(418)),
        r[n(404)]({ translate: "thm_rmt.form.admin.main.button.manageWorld" }, Mn.WORLD),
        r[n(404)]({ translate: "thm_rmt.form.admin.main.button.manageRanks" }, Mn[n(458)]),
        r.button({ translate: n(406) }, Mn[n(416)]),
        r[n(404)]({ translate: n(436) }, Mn.EDIT),
        r.button({ translate: n(432) }, Mn.BACK),
        f[n(411)](n(426), n(440), n(405), n(423), "Back");
    let d = await r[n(409)](t);
    if (void 0 === d) return !0;
    if (d[n(408)]) return !1;
    if (void 0 === d[n(454)]) return !0;
    let p = !1;
    switch (f[d[n(454)]]) {
        case n(410):
            p = await Ao(t);
            break;
        case n(438):
            p = await (async function (t) {
                const n = xi;
                let r = new I();
                r.title({ translate: n(355) });
                const a = e[n(329)](),
                    s = pe[n(308)](),
                    i = pe.getFirstSpawn(),
                    o = "x:" + a.x + " z:" + a.z,
                    c =
                        "DefaultSpawn" == s[n(350)]
                            ? { translate: n(307) }
                            : { translate: n(339), with: [ue[n(325)](s.location)] },
                    m =
                        "DefaultSpawn" == i[n(350)]
                            ? { translate: n(335) }
                            : {
                                  translate: "thm_rmt.form.admin.manageSpawn.description.first",
                                  with: [ue.toString(i.location)],
                              };
                let l = {
                    rawtext: [
                        { translate: n(324) },
                        { text: "\n\n" },
                        { translate: n(345), with: [o] },
                        { text: "\n" },
                        { translate: "thm_rmt.form.admin.manageSpawn.description.default.info" },
                        { text: "\n\n" },
                        c,
                        { text: "\n" },
                        { translate: n(358) },
                        { text: "\n\n" },
                        m,
                        { text: "\n" },
                        { translate: n(328) },
                        { text: "\n\n" },
                        { translate: n(322) },
                    ],
                };
                r[n(346)](l);
                const u = [];
                r.button({ translate: n(326) }, Mn[n(348)]),
                    r[n(347)]({ translate: n(312) }, Mn[n(348)]),
                    r[n(347)]({ translate: "thm_rmt.form.admin.manageSpawn.button.first" }, Mn[n(348)]),
                    u[n(318)](n(349), n(311), n(305)),
                    s[n(350)] != n(352) &&
                        (r[n(347)]({ translate: "thm_rmt.form.admin.manageSpawn.button.remove.custom" }, Mn[n(304)]),
                        u[n(318)](n(317))),
                    i[n(350)] != n(352) && (r[n(347)]({ translate: n(309) }, Mn[n(304)]), u[n(318)](n(334))),
                    r[n(347)]({ translate: n(360) }, Mn[n(337)]),
                    u[n(318)](n(336));
                const h = await r[n(359)](t);
                if (null == h) return !0;
                if (h[n(340)]) return !1;
                if (null == h[n(331)]) return !1;
                switch (u[h[n(331)]]) {
                    case n(349):
                        e.setDefaultSpawnLocation(t[n(344)]), $t[n(313)](t, { translate: n(338) });
                        break;
                    case n(311):
                        pe.setSpawn(t, {
                            name: n(343),
                            location: t.location,
                            dimension: t[n(321)],
                            rotation: t.getRotation(),
                            viewDirection: t[n(316)](),
                        }),
                            $t.sendSuccessMsg(t, { translate: n(314) });
                        break;
                    case n(305):
                        pe[n(342)](t, {
                            name: n(353),
                            location: t.location,
                            dimension: t.dimension,
                            rotation: t[n(330)](),
                            viewDirection: t[n(316)](),
                        }),
                            $t[n(313)](t, { translate: "thm_rmt.form.admin.manageSpawn.success.first" });
                        break;
                    case n(317):
                        pe.deleteSpawn(),
                            $t[n(313)](t, { translate: "thm_rmt.form.admin.manageSpawn.success.remove.custom" });
                        break;
                    case "removeFirst":
                        pe[n(351)](), $t[n(313)](t, { translate: n(356) });
                        break;
                    case "back":
                        return !0;
                }
                return !1;
            })(t);
            break;
        case "Manage Warps":
            p = await Oi(t);
            break;
        case n(456):
            p = await Hi(t);
            break;
        case n(422):
            p = await bo(t, "admin");
            break;
        case n(418):
            !(function (t) {
                const e = Go,
                    n = new o(Dn[e(424)]);
                if (fn[e(413)](t, n)) return void $t[e(402)](t, { translate: e(448) });
                fn[e(450)](t, n), $t[e(401)](t, { translate: e(434) });
            })(t);
            break;
        case n(426):
            p = await (async function (t) {
                const n = ki,
                    r = new g();
                r[n(133)](n(125));
                for (const t in e[n(112)]) {
                    const a = t,
                        s = e.gameRules[a];
                    typeof s === n(128)
                        ? r[n(132)](t, s)
                        : typeof s === n(114) && r[n(117)](t, s[n(123)](), s[n(123)]());
                }
                const a = await r[n(126)](t);
                if (void 0 === a || a.canceled || void 0 === a[n(124)]) return !0;
                let s = 0,
                    i = 0;
                for (const t in e[n(112)]) {
                    const r = t,
                        o = e[n(112)][r],
                        c = a.formValues[s];
                    if (void 0 !== c && "" !== c) {
                        if (typeof o === n(128)) c !== o && ((e[n(112)][r] = c), i++);
                        else if (typeof o === n(114)) {
                            const t = c[n(119)](".") ? parseFloat(c) : parseInt(c, 10);
                            c !== o[n(123)]() && ((e[n(112)][r] = t), i++);
                        }
                        s++;
                    }
                }
                return (
                    i > 0
                        ? $t[n(122)](t, { translate: "thm_rmt.form.admin.gameRules.success", with: ["" + i] })
                        : $t.sendErrorMsg(t, { translate: n(131) }),
                    !1
                );
            })(t);
            break;
        case n(440):
            p = await qi(t);
            break;
        case n(405):
            p = await Po(t);
            break;
        case "Menu":
            p = await Fo(t);
            break;
        case n(453):
            return !0;
    }
    return !!p && (Vo(t), !1);
}
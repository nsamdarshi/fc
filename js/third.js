(self.webpackChunk = self.webpackChunk || []).push([["607"], {
    5487: function() {
        "use strict";
        window.tram = function(e) {
            function t(e, t) {
                return (new w.Bare).init(e, t)
            }
            function a(e) {
                var t = parseInt(e.slice(1), 16);
                return [t >> 16 & 255, t >> 8 & 255, 255 & t]
            }
            function n(e, t, a) {
                return "#" + (0x1000000 | e << 16 | t << 8 | a).toString(16).slice(1)
            }
            function i() {}
            function o(e, t, a) {
                if (void 0 !== t && (a = t),
                void 0 === e)
                    return a;
                var n = a;
                return q.test(e) || !$.test(e) ? n = parseInt(e, 10) : $.test(e) && (n = 1e3 * parseFloat(e)),
                0 > n && (n = 0),
                n == n ? n : a
            }
            function d(e) {
                H.debug && window && window.console.warn(e)
            }
            var r, c, l, s = function(e, t, a) {
                function n(e) {
                    return "object" == typeof e
                }
                function i(e) {
                    return "function" == typeof e
                }
                function o() {}
                return function d(r, c) {
                    function l() {
                        var e = new s;
                        return i(e.init) && e.init.apply(e, arguments),
                        e
                    }
                    function s() {}
                    c === a && (c = r,
                    r = Object),
                    l.Bare = s;
                    var u, f = o[e] = r[e], p = s[e] = l[e] = new o;
                    return p.constructor = l,
                    l.mixin = function(t) {
                        return s[e] = l[e] = d(l, t)[e],
                        l
                    }
                    ,
                    l.open = function(e) {
                        if (u = {},
                        i(e) ? u = e.call(l, p, f, l, r) : n(e) && (u = e),
                        n(u))
                            for (var a in u)
                                t.call(u, a) && (p[a] = u[a]);
                        return i(p.init) || (p.init = r),
                        l
                    }
                    ,
                    l.open(c)
                }
            }("prototype", {}.hasOwnProperty), u = {
                ease: ["ease", function(e, t, a, n) {
                    var i = (e /= n) * e
                      , o = i * e;
                    return t + a * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                }
                ],
                "ease-in": ["ease-in", function(e, t, a, n) {
                    var i = (e /= n) * e
                      , o = i * e;
                    return t + a * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }
                ],
                "ease-out": ["ease-out", function(e, t, a, n) {
                    var i = (e /= n) * e
                      , o = i * e;
                    return t + a * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                }
                ],
                "ease-in-out": ["ease-in-out", function(e, t, a, n) {
                    var i = (e /= n) * e
                      , o = i * e;
                    return t + a * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }
                ],
                linear: ["linear", function(e, t, a, n) {
                    return a * e / n + t
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, a, n) {
                    return a * (e /= n) * e + t
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, a, n) {
                    return -a * (e /= n) * (e - 2) + t
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e + t : -a / 2 * (--e * (e - 2) - 1) + t
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, a, n) {
                    return a * (e /= n) * e * e + t
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, a, n) {
                    return a * ((e = e / n - 1) * e * e + 1) + t
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e * e + t : a / 2 * ((e -= 2) * e * e + 2) + t
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, a, n) {
                    return a * (e /= n) * e * e * e + t
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, a, n) {
                    return -a * ((e = e / n - 1) * e * e * e - 1) + t
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e * e * e + t : -a / 2 * ((e -= 2) * e * e * e - 2) + t
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, a, n) {
                    return a * (e /= n) * e * e * e * e + t
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, a, n) {
                    return a * ((e = e / n - 1) * e * e * e * e + 1) + t
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e * e * e * e + t : a / 2 * ((e -= 2) * e * e * e * e + 2) + t
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, a, n) {
                    return -a * Math.cos(e / n * (Math.PI / 2)) + a + t
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, a, n) {
                    return a * Math.sin(e / n * (Math.PI / 2)) + t
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, a, n) {
                    return -a / 2 * (Math.cos(Math.PI * e / n) - 1) + t
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, a, n) {
                    return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, a, n) {
                    return e === n ? t + a : a * (-Math.pow(2, -10 * e / n) + 1) + t
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, a, n) {
                    return 0 === e ? t : e === n ? t + a : (e /= n / 2) < 1 ? a / 2 * Math.pow(2, 10 * (e - 1)) + t : a / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, a, n) {
                    return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, a, n) {
                    return a * Math.sqrt(1 - (e = e / n - 1) * e) + t
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, a, n) {
                    return (e /= n / 2) < 1 ? -a / 2 * (Math.sqrt(1 - e * e) - 1) + t : a / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, a, n, i) {
                    return void 0 === i && (i = 1.70158),
                    a * (e /= n) * e * ((i + 1) * e - i) + t
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, a, n, i) {
                    return void 0 === i && (i = 1.70158),
                    a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, a, n, i) {
                    return void 0 === i && (i = 1.70158),
                    (e /= n / 2) < 1 ? a / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : a / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                }
                ]
            }, f = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }, p = window, E = "bkwld-tram", g = /[\-\.0-9]/g, I = /[A-Z]/, T = "number", y = /^(rgb|#)/, b = /(em|cm|mm|in|pt|pc|px)$/, m = /(em|cm|mm|in|pt|pc|px|%)$/, O = /(deg|rad|turn)$/, _ = "unitless", R = /(all|none) 0s ease 0s/, v = /^(width|height)$/, S = document.createElement("a"), A = ["Webkit", "Moz", "O", "ms"], L = ["-webkit-", "-moz-", "-o-", "-ms-"], N = function(e) {
                if (e in S.style)
                    return {
                        dom: e,
                        css: e
                    };
                var t, a, n = "", i = e.split("-");
                for (t = 0; t < i.length; t++)
                    n += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                for (t = 0; t < A.length; t++)
                    if ((a = A[t] + n)in S.style)
                        return {
                            dom: a,
                            css: L[t] + e
                        }
            }, h = t.support = {
                bind: Function.prototype.bind,
                transform: N("transform"),
                transition: N("transition"),
                backface: N("backface-visibility"),
                timing: N("transition-timing-function")
            };
            if (h.transition) {
                var C = h.timing.dom;
                if (S.style[C] = u["ease-in-back"][0],
                !S.style[C])
                    for (var U in f)
                        u[U][0] = f[U]
            }
            var V = t.frame = (r = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame) && h.bind ? r.bind(p) : function(e) {
                p.setTimeout(e, 16)
            }
              , G = t.now = (l = (c = p.performance) && (c.now || c.webkitNow || c.msNow || c.mozNow)) && h.bind ? l.bind(c) : Date.now || function() {
                return +new Date
            }
              , M = s(function(t) {
                function a(e, t) {
                    var a = function(e) {
                        for (var t = -1, a = e ? e.length : 0, n = []; ++t < a; ) {
                            var i = e[t];
                            i && n.push(i)
                        }
                        return n
                    }(("" + e).split(" "))
                      , n = a[0];
                    t = t || {};
                    var i = Y[n];
                    if (!i)
                        return d("Unsupported property: " + n);
                    if (!t.weak || !this.props[n]) {
                        var o = i[0]
                          , r = this.props[n];
                        return r || (r = this.props[n] = new o.Bare),
                        r.init(this.$el, a, i, t),
                        r
                    }
                }
                function n(e, t, n) {
                    if (e) {
                        var d = typeof e;
                        if (t || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        "number" == d && t)
                            return this.timer = new X({
                                duration: e,
                                context: this,
                                complete: i
                            }),
                            void (this.active = !0);
                        if ("string" == d && t) {
                            switch (e) {
                            case "hide":
                                c.call(this);
                                break;
                            case "stop":
                                r.call(this);
                                break;
                            case "redraw":
                                l.call(this);
                                break;
                            default:
                                a.call(this, e, n && n[1])
                            }
                            return i.call(this)
                        }
                        if ("function" == d)
                            return void e.call(this, this);
                        if ("object" == d) {
                            var f = 0;
                            u.call(this, e, function(e, t) {
                                e.span > f && (f = e.span),
                                e.stop(),
                                e.animate(t)
                            }, function(e) {
                                "wait"in e && (f = o(e.wait, 0))
                            }),
                            s.call(this),
                            f > 0 && (this.timer = new X({
                                duration: f,
                                context: this
                            }),
                            this.active = !0,
                            t && (this.timer.complete = i));
                            var p = this
                              , E = !1
                              , g = {};
                            V(function() {
                                u.call(p, e, function(e) {
                                    e.active && (E = !0,
                                    g[e.name] = e.nextStyle)
                                }),
                                E && p.$el.css(g)
                            })
                        }
                    }
                }
                function i() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var e = this.queue.shift();
                        n.call(this, e.options, !0, e.args)
                    }
                }
                function r(e) {
                    var t;
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1,
                    "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props,
                    u.call(this, t, f),
                    s.call(this)
                }
                function c() {
                    r.call(this),
                    this.el.style.display = "none"
                }
                function l() {
                    this.el.offsetHeight
                }
                function s() {
                    var e, t, a = [];
                    for (e in this.upstream && a.push(this.upstream),
                    this.props)
                        (t = this.props[e]).active && a.push(t.string);
                    a = a.join(","),
                    this.style !== a && (this.style = a,
                    this.el.style[h.transition.dom] = a)
                }
                function u(e, t, n) {
                    var i, o, d, r, c = t !== f, l = {};
                    for (i in e)
                        d = e[i],
                        i in j ? (l.transform || (l.transform = {}),
                        l.transform[i] = d) : (I.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                            return "-" + e.toLowerCase()
                        })),
                        i in Y ? l[i] = d : (r || (r = {}),
                        r[i] = d));
                    for (i in l) {
                        if (d = l[i],
                        !(o = this.props[i])) {
                            if (!c)
                                continue;
                            o = a.call(this, i)
                        }
                        t.call(this, o, d)
                    }
                    n && r && n.call(this, r)
                }
                function f(e) {
                    e.stop()
                }
                function p(e, t) {
                    e.set(t)
                }
                function g(e) {
                    this.$el.css(e)
                }
                function T(e, a) {
                    t[e] = function() {
                        return this.children ? y.call(this, a, arguments) : (this.el && a.apply(this, arguments),
                        this)
                    }
                }
                function y(e, t) {
                    var a, n = this.children.length;
                    for (a = 0; n > a; a++)
                        e.apply(this.children[a], t);
                    return this
                }
                t.init = function(t) {
                    if (this.$el = e(t),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    H.keepInherited && !H.fallback) {
                        var a = Q(this.el, "transition");
                        a && !R.test(a) && (this.upstream = a)
                    }
                    h.backface && H.hideBackface && z(this.el, h.backface.css, "hidden")
                }
                ,
                T("add", a),
                T("start", n),
                T("wait", function(e) {
                    e = o(e, 0),
                    this.active ? this.queue.push({
                        options: e
                    }) : (this.timer = new X({
                        duration: e,
                        context: this,
                        complete: i
                    }),
                    this.active = !0)
                }),
                T("then", function(e) {
                    return this.active ? (this.queue.push({
                        options: e,
                        args: arguments
                    }),
                    void (this.timer.complete = i)) : d("No active transition timer. Use start() or wait() before then().")
                }),
                T("next", i),
                T("stop", r),
                T("set", function(e) {
                    r.call(this, e),
                    u.call(this, e, p, g)
                }),
                T("show", function(e) {
                    "string" != typeof e && (e = "block"),
                    this.el.style.display = e
                }),
                T("hide", c),
                T("redraw", l),
                T("destroy", function() {
                    r.call(this),
                    e.removeData(this.el, E),
                    this.$el = this.el = null
                })
            })
              , w = s(M, function(t) {
                function a(t, a) {
                    var n = e.data(t, E) || e.data(t, E, new M.Bare);
                    return n.el || n.init(t),
                    a ? n.start(a) : n
                }
                t.init = function(t, n) {
                    var i = e(t);
                    if (!i.length)
                        return this;
                    if (1 === i.length)
                        return a(i[0], n);
                    var o = [];
                    return i.each(function(e, t) {
                        o.push(a(t, n))
                    }),
                    this.children = o,
                    this
                }
            })
              , P = s(function(e) {
                function t() {
                    var e = this.get();
                    this.update("auto");
                    var t = this.get();
                    return this.update(e),
                    t
                }
                e.init = function(e, t, a, n) {
                    this.$el = e,
                    this.el = e[0];
                    var i, d, r, c = t[0];
                    a[2] && (c = a[2]),
                    W[c] && (c = W[c]),
                    this.name = c,
                    this.type = a[1],
                    this.duration = o(t[1], this.duration, 500),
                    this.ease = (i = t[2],
                    d = this.ease,
                    r = "ease",
                    void 0 !== d && (r = d),
                    i in u ? i : r),
                    this.delay = o(t[3], this.delay, 0),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = v.test(this.name),
                    this.unit = n.unit || this.unit || H.defaultUnit,
                    this.angle = n.angle || this.angle || H.defaultAngle,
                    H.fallback || n.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                }
                ,
                e.set = function(e) {
                    e = this.convert(e, this.type),
                    this.update(e),
                    this.redraw()
                }
                ,
                e.transition = function(e) {
                    this.active = !0,
                    e = this.convert(e, this.type),
                    this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()),
                    this.redraw()),
                    "auto" == e && (e = t.call(this))),
                    this.nextStyle = e
                }
                ,
                e.fallback = function(e) {
                    var a = this.el.style[this.name] || this.convert(this.get(), this.type);
                    e = this.convert(e, this.type),
                    this.auto && ("auto" == a && (a = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                    this.tween = new D({
                        from: a,
                        to: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                e.get = function() {
                    return Q(this.el, this.name)
                }
                ,
                e.update = function(e) {
                    z(this.el, this.name, e)
                }
                ,
                e.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    z(this.el, this.name, this.get()));
                    var e = this.tween;
                    e && e.context && e.destroy()
                }
                ,
                e.convert = function(e, t) {
                    if ("auto" == e && this.auto)
                        return e;
                    var a, i, o = "number" == typeof e, r = "string" == typeof e;
                    switch (t) {
                    case T:
                        if (o)
                            return e;
                        if (r && "" === e.replace(g, ""))
                            return +e;
                        i = "number(unitless)";
                        break;
                    case y:
                        if (r) {
                            if ("" === e && this.original)
                                return this.original;
                            if (t.test(e))
                                return "#" == e.charAt(0) && 7 == e.length ? e : ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? n(a[1], a[2], a[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                        }
                        i = "hex or rgb string";
                        break;
                    case b:
                        if (o)
                            return e + this.unit;
                        if (r && t.test(e))
                            return e;
                        i = "number(px) or string(unit)";
                        break;
                    case m:
                        if (o)
                            return e + this.unit;
                        if (r && t.test(e))
                            return e;
                        i = "number(px) or string(unit or %)";
                        break;
                    case O:
                        if (o)
                            return e + this.angle;
                        if (r && t.test(e))
                            return e;
                        i = "number(deg) or string(angle)";
                        break;
                    case _:
                        if (o || r && m.test(e))
                            return e;
                        i = "number(unitless) or string(unit or %)"
                    }
                    return d("Type warning: Expected: [" + i + "] Got: [" + typeof e + "] " + e),
                    e
                }
                ,
                e.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , x = s(P, function(e, t) {
                e.init = function() {
                    t.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), y))
                }
            })
              , k = s(P, function(e, t) {
                e.init = function() {
                    t.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                e.get = function() {
                    return this.$el[this.name]()
                }
                ,
                e.update = function(e) {
                    this.$el[this.name](e)
                }
            })
              , F = s(P, function(e, t) {
                function a(e, t) {
                    var a, n, i, o, d;
                    for (a in e)
                        i = (o = j[a])[0],
                        n = o[1] || a,
                        d = this.convert(e[a], i),
                        t.call(this, n, d, i)
                }
                e.init = function() {
                    t.init.apply(this, arguments),
                    this.current || (this.current = {},
                    j.perspective && H.perspective && (this.current.perspective = H.perspective,
                    z(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                e.set = function(e) {
                    a.call(this, e, function(e, t) {
                        this.current[e] = t
                    }),
                    z(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                e.transition = function(e) {
                    var t = this.values(e);
                    this.tween = new B({
                        current: this.current,
                        values: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var a, n = {};
                    for (a in this.current)
                        n[a] = a in t ? t[a] : this.current[a];
                    this.active = !0,
                    this.nextStyle = this.style(n)
                }
                ,
                e.fallback = function(e) {
                    var t = this.values(e);
                    this.tween = new B({
                        current: this.current,
                        values: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                e.update = function() {
                    z(this.el, this.name, this.style(this.current))
                }
                ,
                e.style = function(e) {
                    var t, a = "";
                    for (t in e)
                        a += t + "(" + e[t] + ") ";
                    return a
                }
                ,
                e.values = function(e) {
                    var t, n = {};
                    return a.call(this, e, function(e, a, i) {
                        n[e] = a,
                        void 0 === this.current[e] && (t = 0,
                        ~e.indexOf("scale") && (t = 1),
                        this.current[e] = this.convert(t, i))
                    }),
                    n
                }
            })
              , D = s(function(t) {
                function o() {
                    var e, t, a, n = c.length;
                    if (n)
                        for (V(o),
                        t = G(),
                        e = n; e--; )
                            (a = c[e]) && a.render(t)
                }
                var r = {
                    ease: u.ease[1],
                    from: 0,
                    to: 1
                };
                t.init = function(e) {
                    this.duration = e.duration || 0,
                    this.delay = e.delay || 0;
                    var t = e.ease || r.ease;
                    u[t] && (t = u[t][1]),
                    "function" != typeof t && (t = r.ease),
                    this.ease = t,
                    this.update = e.update || i,
                    this.complete = e.complete || i,
                    this.context = e.context || this,
                    this.name = e.name;
                    var a = e.from
                      , n = e.to;
                    void 0 === a && (a = r.from),
                    void 0 === n && (n = r.to),
                    this.unit = e.unit || "",
                    "number" == typeof a && "number" == typeof n ? (this.begin = a,
                    this.change = n - a) : this.format(n, a),
                    this.value = this.begin + this.unit,
                    this.start = G(),
                    !1 !== e.autoplay && this.play()
                }
                ,
                t.play = function() {
                    this.active || (this.start || (this.start = G()),
                    this.active = !0,
                    1 === c.push(this) && V(o))
                }
                ,
                t.stop = function() {
                    var t, a;
                    this.active && (this.active = !1,
                    (a = e.inArray(this, c)) >= 0 && (t = c.slice(a + 1),
                    c.length = a,
                    t.length && (c = c.concat(t))))
                }
                ,
                t.render = function(e) {
                    var t, a = e - this.start;
                    if (this.delay) {
                        if (a <= this.delay)
                            return;
                        a -= this.delay
                    }
                    if (a < this.duration) {
                        var i, o, d = this.ease(a, 0, 1, this.duration);
                        return t = this.startRGB ? (i = this.startRGB,
                        o = this.endRGB,
                        n(i[0] + d * (o[0] - i[0]), i[1] + d * (o[1] - i[1]), i[2] + d * (o[2] - i[2]))) : Math.round((this.begin + d * this.change) * l) / l,
                        this.value = t + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    t = this.endHex || this.begin + this.change,
                    this.value = t + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                t.format = function(e, t) {
                    if (t += "",
                    "#" == (e += "").charAt(0))
                        return this.startRGB = a(t),
                        this.endRGB = a(e),
                        this.endHex = e,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var n = t.replace(g, "");
                        n !== e.replace(g, "") && d("Units do not match [tween]: " + t + ", " + e),
                        this.unit = n
                    }
                    t = parseFloat(t),
                    e = parseFloat(e),
                    this.begin = this.value = t,
                    this.change = e - t
                }
                ,
                t.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = i
                }
                ;
                var c = []
                  , l = 1e3
            })
              , X = s(D, function(e) {
                e.init = function(e) {
                    this.duration = e.duration || 0,
                    this.complete = e.complete || i,
                    this.context = e.context,
                    this.play()
                }
                ,
                e.render = function(e) {
                    e - this.start < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , B = s(D, function(e, t) {
                e.init = function(e) {
                    var t, a;
                    for (t in this.context = e.context,
                    this.update = e.update,
                    this.tweens = [],
                    this.current = e.current,
                    e.values)
                        a = e.values[t],
                        this.current[t] !== a && this.tweens.push(new D({
                            name: t,
                            from: this.current[t],
                            to: a,
                            duration: e.duration,
                            delay: e.delay,
                            ease: e.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                e.render = function(e) {
                    var t, a, n = this.tweens.length, i = !1;
                    for (t = n; t--; )
                        (a = this.tweens[t]).context && (a.render(e),
                        this.current[a.name] = a.value,
                        i = !0);
                    return i ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                e.destroy = function() {
                    if (t.destroy.call(this),
                    this.tweens) {
                        var e;
                        for (e = this.tweens.length; e--; )
                            this.tweens[e].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , H = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !h.transition,
                agentTests: []
            };
            t.fallback = function(e) {
                if (!h.transition)
                    return H.fallback = !0;
                H.agentTests.push("(" + e + ")");
                var t = RegExp(H.agentTests.join("|"), "i");
                H.fallback = t.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(e) {
                return new D(e)
            }
            ,
            t.delay = function(e, t, a) {
                return new X({
                    complete: t,
                    duration: e,
                    context: a
                })
            }
            ,
            e.fn.tram = function(e) {
                return t.call(null, this, e)
            }
            ;
            var z = e.style
              , Q = e.css
              , W = {
                transform: h.transform && h.transform.css
            }
              , Y = {
                color: [x, y],
                background: [x, y, "background-color"],
                "outline-color": [x, y],
                "border-color": [x, y],
                "border-top-color": [x, y],
                "border-right-color": [x, y],
                "border-bottom-color": [x, y],
                "border-left-color": [x, y],
                "border-width": [P, b],
                "border-top-width": [P, b],
                "border-right-width": [P, b],
                "border-bottom-width": [P, b],
                "border-left-width": [P, b],
                "border-spacing": [P, b],
                "letter-spacing": [P, b],
                margin: [P, b],
                "margin-top": [P, b],
                "margin-right": [P, b],
                "margin-bottom": [P, b],
                "margin-left": [P, b],
                padding: [P, b],
                "padding-top": [P, b],
                "padding-right": [P, b],
                "padding-bottom": [P, b],
                "padding-left": [P, b],
                "outline-width": [P, b],
                opacity: [P, T],
                top: [P, m],
                right: [P, m],
                bottom: [P, m],
                left: [P, m],
                "font-size": [P, m],
                "text-indent": [P, m],
                "word-spacing": [P, m],
                width: [P, m],
                "min-width": [P, m],
                "max-width": [P, m],
                height: [P, m],
                "min-height": [P, m],
                "max-height": [P, m],
                "line-height": [P, _],
                "scroll-top": [k, T, "scrollTop"],
                "scroll-left": [k, T, "scrollLeft"]
            }
              , j = {};
            h.transform && (Y.transform = [F],
            j = {
                x: [m, "translateX"],
                y: [m, "translateY"],
                rotate: [O],
                rotateX: [O],
                rotateY: [O],
                scale: [T],
                scaleX: [T],
                scaleY: [T],
                skew: [O],
                skewX: [O],
                skewY: [O]
            }),
            h.transform && h.backface && (j.z = [m, "translateZ"],
            j.rotateZ = [O],
            j.scaleZ = [T],
            j.perspective = [b]);
            var q = /ms/
              , $ = /s|\./;
            return e.tram = t
        }(window.jQuery)
    },
    5756: function(e, t, a) {
        "use strict";
        var n, i, o, d, r, c, l, s, u, f, p, E, g, I, T, y, b, m, O, _, R = window.$, v = a(5487) && R.tram;
        (n = {}).VERSION = "1.6.0-Webflow",
        i = {},
        o = Array.prototype,
        d = Object.prototype,
        r = Function.prototype,
        o.push,
        c = o.slice,
        o.concat,
        d.toString,
        l = d.hasOwnProperty,
        s = o.forEach,
        u = o.map,
        o.reduce,
        o.reduceRight,
        f = o.filter,
        o.every,
        p = o.some,
        E = o.indexOf,
        o.lastIndexOf,
        g = Object.keys,
        r.bind,
        I = n.each = n.forEach = function(e, t, a) {
            if (null == e)
                return e;
            if (s && e.forEach === s)
                e.forEach(t, a);
            else if (e.length === +e.length) {
                for (var o = 0, d = e.length; o < d; o++)
                    if (t.call(a, e[o], o, e) === i)
                        return
            } else
                for (var r = n.keys(e), o = 0, d = r.length; o < d; o++)
                    if (t.call(a, e[r[o]], r[o], e) === i)
                        return;
            return e
        }
        ,
        n.map = n.collect = function(e, t, a) {
            var n = [];
            return null == e ? n : u && e.map === u ? e.map(t, a) : (I(e, function(e, i, o) {
                n.push(t.call(a, e, i, o))
            }),
            n)
        }
        ,
        n.find = n.detect = function(e, t, a) {
            var n;
            return T(e, function(e, i, o) {
                if (t.call(a, e, i, o))
                    return n = e,
                    !0
            }),
            n
        }
        ,
        n.filter = n.select = function(e, t, a) {
            var n = [];
            return null == e ? n : f && e.filter === f ? e.filter(t, a) : (I(e, function(e, i, o) {
                t.call(a, e, i, o) && n.push(e)
            }),
            n)
        }
        ,
        T = n.some = n.any = function(e, t, a) {
            t || (t = n.identity);
            var o = !1;
            return null == e ? o : p && e.some === p ? e.some(t, a) : (I(e, function(e, n, d) {
                if (o || (o = t.call(a, e, n, d)))
                    return i
            }),
            !!o)
        }
        ,
        n.contains = n.include = function(e, t) {
            return null != e && (E && e.indexOf === E ? -1 != e.indexOf(t) : T(e, function(e) {
                return e === t
            }))
        }
        ,
        n.delay = function(e, t) {
            var a = c.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, a)
            }, t)
        }
        ,
        n.defer = function(e) {
            return n.delay.apply(n, [e, 1].concat(c.call(arguments, 1)))
        }
        ,
        n.throttle = function(e) {
            var t, a, n;
            return function() {
                t || (t = !0,
                a = arguments,
                n = this,
                v.frame(function() {
                    t = !1,
                    e.apply(n, a)
                }))
            }
        }
        ,
        n.debounce = function(e, t, a) {
            var i, o, d, r, c, l = function() {
                var s = n.now() - r;
                s < t ? i = setTimeout(l, t - s) : (i = null,
                a || (c = e.apply(d, o),
                d = o = null))
            };
            return function() {
                d = this,
                o = arguments,
                r = n.now();
                var s = a && !i;
                return i || (i = setTimeout(l, t)),
                s && (c = e.apply(d, o),
                d = o = null),
                c
            }
        }
        ,
        n.defaults = function(e) {
            if (!n.isObject(e))
                return e;
            for (var t = 1, a = arguments.length; t < a; t++) {
                var i = arguments[t];
                for (var o in i)
                    void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }
        ,
        n.keys = function(e) {
            if (!n.isObject(e))
                return [];
            if (g)
                return g(e);
            var t = [];
            for (var a in e)
                n.has(e, a) && t.push(a);
            return t
        }
        ,
        n.has = function(e, t) {
            return l.call(e, t)
        }
        ,
        n.isObject = function(e) {
            return e === Object(e)
        }
        ,
        n.now = Date.now || function() {
            return new Date().getTime()
        }
        ,
        n.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        },
        y = /(.)^/,
        b = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        m = /\\|'|\r|\n|\u2028|\u2029/g,
        O = function(e) {
            return "\\" + b[e]
        }
        ,
        _ = /^\s*(\w|\$)+\s*$/,
        n.template = function(e, t, a) {
            !t && a && (t = a);
            var i, o = RegExp([((t = n.defaults({}, t, n.templateSettings)).escape || y).source, (t.interpolate || y).source, (t.evaluate || y).source].join("|") + "|$", "g"), d = 0, r = "__p+='";
            e.replace(o, function(t, a, n, i, o) {
                return r += e.slice(d, o).replace(m, O),
                d = o + t.length,
                a ? r += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'" : n ? r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (r += "';\n" + i + "\n__p+='"),
                t
            }),
            r += "';\n";
            var c = t.variable;
            if (c) {
                if (!_.test(c))
                    throw Error("variable is not a bare identifier: " + c)
            } else
                r = "with(obj||{}){\n" + r + "}\n",
                c = "obj";
            r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
            try {
                i = Function(t.variable || "obj", "_", r)
            } catch (e) {
                throw e.source = r,
                e
            }
            var l = function(e) {
                return i.call(this, e, n)
            };
            return l.source = "function(" + c + "){\n" + r + "}",
            l
        }
        ,
        e.exports = n
    },
    9461: function(e, t, a) {
        "use strict";
        var n = a(3949);
        n.define("brand", e.exports = function(e) {
            var t, a = {}, i = document, o = e("html"), d = e("body"), r = window.location, c = /PhantomJS/i.test(navigator.userAgent), l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
            function s() {
                var a = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
                e(t).attr("style", a ? "display: none !important;" : "")
            }
            function u() {
                var e = d.children(".w-webflow-badge")
                  , a = e.length && e.get(0) === t
                  , i = n.env("editor");
                if (a) {
                    i && e.remove();
                    return
                }
                e.length && e.remove(),
                i || d.append(t)
            }
            return a.ready = function() {
                var a, n, d, f = o.attr("data-wf-status"), p = o.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(p) && r.hostname !== p && (f = !0),
                f && !c && (t = t || (a = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                n = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                }),
                d = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"),
                a.append(n, d),
                a[0]),
                u(),
                setTimeout(u, 500),
                e(i).off(l, s).on(l, s))
            }
            ,
            a
        }
        )
    },
    322: function(e, t, a) {
        "use strict";
        var n = a(3949);
        n.define("edit", e.exports = function(e, t, a) {
            if (a = a || {},
            (n.env("test") || n.env("frame")) && !a.fixture && !function() {
                try {
                    return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                } catch (e) {
                    return !1
                }
            }())
                return {
                    exit: 1
                };
            var i, o = e(window), d = e(document.documentElement), r = document.location, c = "hashchange", l = a.load || function() {
                var t, a, n;
                i = !0,
                window.WebflowEditor = !0,
                o.off(c, u),
                t = function(t) {
                    var a;
                    e.ajax({
                        url: p("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: d.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: (a = t,
                        function(t) {
                            var n, i, o;
                            if (!t)
                                return void console.error("Could not load editor data");
                            t.thirdPartyCookiesSupported = a,
                            i = (n = t.scriptPath).indexOf("//") >= 0 ? n : p("https://editor-api.webflow.com" + n),
                            o = function() {
                                window.WebflowEditor(t)
                            }
                            ,
                            e.ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0
                            }).then(o, f)
                        }
                        )
                    })
                }
                ,
                (a = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html",
                a.style.display = "none",
                a.sandbox = "allow-scripts allow-same-origin",
                n = function(e) {
                    "WF_third_party_cookies_unsupported" === e.data ? (E(a, n),
                    t(!1)) : "WF_third_party_cookies_supported" === e.data && (E(a, n),
                    t(!0))
                }
                ,
                a.onerror = function() {
                    E(a, n),
                    t(!1)
                }
                ,
                window.addEventListener("message", n, !1),
                window.document.body.appendChild(a)
            }
            , s = !1;
            try {
                s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch (e) {}
            function u() {
                !i && /\?edit/.test(r.hash) && l()
            }
            function f(e, t, a) {
                throw console.error("Could not load editor script: " + t),
                a
            }
            function p(e) {
                return e.replace(/([^:])\/\//g, "$1/")
            }
            function E(e, t) {
                window.removeEventListener("message", t, !1),
                e.remove()
            }
            return s ? l() : r.search ? (/[?&](edit)(?:[=&?]|$)/.test(r.search) || /\?edit$/.test(r.href)) && l() : o.on(c, u).triggerHandler(c),
            {}
        }
        )
    },
    2338: function(e, t, a) {
        "use strict";
        a(3949).define("focus-visible", e.exports = function() {
            return {
                ready: function() {
                    if ("undefined" != typeof document)
                        try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            !function(e) {
                                var t = !0
                                  , a = !1
                                  , n = null
                                  , i = {
                                    text: !0,
                                    search: !0,
                                    url: !0,
                                    tel: !0,
                                    email: !0,
                                    password: !0,
                                    number: !0,
                                    date: !0,
                                    month: !0,
                                    week: !0,
                                    time: !0,
                                    datetime: !0,
                                    "datetime-local": !0
                                };
                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList"in e && "contains"in e.classList
                                }
                                function d(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }
                                function r() {
                                    t = !1
                                }
                                function c() {
                                    document.addEventListener("mousemove", l),
                                    document.addEventListener("mousedown", l),
                                    document.addEventListener("mouseup", l),
                                    document.addEventListener("pointermove", l),
                                    document.addEventListener("pointerdown", l),
                                    document.addEventListener("pointerup", l),
                                    document.addEventListener("touchmove", l),
                                    document.addEventListener("touchstart", l),
                                    document.addEventListener("touchend", l)
                                }
                                function l(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1,
                                    document.removeEventListener("mousemove", l),
                                    document.removeEventListener("mousedown", l),
                                    document.removeEventListener("mouseup", l),
                                    document.removeEventListener("pointermove", l),
                                    document.removeEventListener("pointerdown", l),
                                    document.removeEventListener("pointerup", l),
                                    document.removeEventListener("touchmove", l),
                                    document.removeEventListener("touchstart", l),
                                    document.removeEventListener("touchend", l))
                                }
                                document.addEventListener("keydown", function(a) {
                                    a.metaKey || a.altKey || a.ctrlKey || (o(e.activeElement) && d(e.activeElement),
                                    t = !0)
                                }, !0),
                                document.addEventListener("mousedown", r, !0),
                                document.addEventListener("pointerdown", r, !0),
                                document.addEventListener("touchstart", r, !0),
                                document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (a && (t = !0),
                                    c())
                                }, !0),
                                c(),
                                e.addEventListener("focus", function(e) {
                                    if (o(e.target)) {
                                        var a, n, r;
                                        (t || (n = (a = e.target).type,
                                        "INPUT" === (r = a.tagName) && i[n] && !a.readOnly || "TEXTAREA" === r && !a.readOnly || a.isContentEditable || 0)) && d(e.target)
                                    }
                                }, !0),
                                e.addEventListener("blur", function(e) {
                                    if (o(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        a = !0,
                                        window.clearTimeout(n),
                                        n = window.setTimeout(function() {
                                            a = !1
                                        }, 100),
                                        (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                }
            }
        }
        )
    },
    8334: function(e, t, a) {
        "use strict";
        var n = a(3949);
        n.define("focus", e.exports = function() {
            var e = []
              , t = !1;
            function a(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function i(a) {
                var n, i;
                i = (n = a.target).tagName,
                (/^a$/i.test(i) && null != n.href || /^(button|textarea)$/i.test(i) && !0 !== n.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(n.type) && !n.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(n.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === n.controls) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var n = e.pop();
                        n.target.dispatchEvent(new MouseEvent(n.type,n))
                    }
                }
                , 0))
            }
            return {
                ready: function() {
                    "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && n.env.safari && (document.addEventListener("mousedown", i, !0),
                    document.addEventListener("mouseup", a, !0),
                    document.addEventListener("click", a, !0))
                }
            }
        }
        )
    },
    7199: function(e) {
        "use strict";
        var t = window.jQuery
          , a = {}
          , n = []
          , i = ".w-ix"
          , o = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, n) {
                n.__wf_intro || (n.__wf_intro = !0,
                t(n).triggerHandler(a.types.INTRO))
            },
            outro: function(e, n) {
                n.__wf_intro && (n.__wf_intro = null,
                t(n).triggerHandler(a.types.OUTRO))
            }
        };
        a.triggers = {},
        a.types = {
            INTRO: "w-ix-intro" + i,
            OUTRO: "w-ix-outro" + i
        },
        a.init = function() {
            for (var e = n.length, i = 0; i < e; i++) {
                var d = n[i];
                d[0](0, d[1])
            }
            n = [],
            t.extend(a.triggers, o)
        }
        ,
        a.async = function() {
            for (var e in o) {
                var t = o[e];
                o.hasOwnProperty(e) && (a.triggers[e] = function(e, a) {
                    n.push([t, a])
                }
                )
            }
        }
        ,
        a.async(),
        e.exports = a
    },
    5134: function(e, t, a) {
        "use strict";
        var n = a(7199);
        function i(e, t) {
            var a = document.createEvent("CustomEvent");
            a.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(a)
        }
        var o = window.jQuery
          , d = {}
          , r = ".w-ix";
        d.triggers = {},
        d.types = {
            INTRO: "w-ix-intro" + r,
            OUTRO: "w-ix-outro" + r
        },
        o.extend(d.triggers, {
            reset: function(e, t) {
                n.triggers.reset(e, t)
            },
            intro: function(e, t) {
                n.triggers.intro(e, t),
                i(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                n.triggers.outro(e, t),
                i(t, "COMPONENT_INACTIVE")
            }
        }),
        e.exports = d
    },
    941: function(e, t, a) {
        "use strict";
        var n = a(3949)
          , i = a(6011);
        i.setEnv(n.env),
        n.define("ix2", e.exports = function() {
            return i
        }
        )
    },
    3949: function(e, t, a) {
        "use strict";
        var n, i, o = {}, d = {}, r = [], c = window.Webflow || [], l = window.jQuery, s = l(window), u = l(document), f = l.isFunction, p = o._ = a(5756), E = o.tram = a(5487) && l.tram, g = !1, I = !1;
        function T(e) {
            o.env() && (f(e.design) && s.on("__wf_design", e.design),
            f(e.preview) && s.on("__wf_preview", e.preview)),
            f(e.destroy) && s.on("__wf_destroy", e.destroy),
            e.ready && f(e.ready) && function(e) {
                if (g)
                    return e.ready();
                p.contains(r, e.ready) || r.push(e.ready)
            }(e)
        }
        function y(e) {
            var t;
            f(e.design) && s.off("__wf_design", e.design),
            f(e.preview) && s.off("__wf_preview", e.preview),
            f(e.destroy) && s.off("__wf_destroy", e.destroy),
            e.ready && f(e.ready) && (t = e,
            r = p.filter(r, function(e) {
                return e !== t.ready
            }))
        }
        E.config.hideBackface = !1,
        E.config.keepInherited = !0,
        o.define = function(e, t, a) {
            d[e] && y(d[e]);
            var n = d[e] = t(l, p, a) || {};
            return T(n),
            n
        }
        ,
        o.require = function(e) {
            return d[e]
        }
        ,
        o.push = function(e) {
            if (g) {
                f(e) && e();
                return
            }
            c.push(e)
        }
        ,
        o.env = function(e) {
            var t = window.__wf_design
              , a = void 0 !== t;
            return e ? "design" === e ? a && t : "preview" === e ? a && !t : "slug" === e ? a && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : a
        }
        ;
        var b = navigator.userAgent.toLowerCase()
          , m = o.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , O = o.env.chrome = /chrome/.test(b) && /Google/.test(navigator.vendor) && parseInt(b.match(/chrome\/(\d+)\./)[1], 10)
          , _ = o.env.ios = /(ipod|iphone|ipad)/.test(b);
        o.env.safari = /safari/.test(b) && !O && !_,
        m && u.on("touchstart mousedown", function(e) {
            n = e.target
        }),
        o.validClick = m ? function(e) {
            return e === n || l.contains(e, n)
        }
        : function() {
            return !0
        }
        ;
        var R = "resize.webflow orientationchange.webflow load.webflow"
          , v = "scroll.webflow " + R;
        function S(e, t) {
            var a = []
              , n = {};
            return n.up = p.throttle(function(e) {
                p.each(a, function(t) {
                    t(e)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(e) {
                "function" == typeof e && (p.contains(a, e) || a.push(e))
            }
            ,
            n.off = function(e) {
                if (!arguments.length) {
                    a = [];
                    return
                }
                a = p.filter(a, function(t) {
                    return t !== e
                })
            }
            ,
            n
        }
        function A(e) {
            f(e) && e()
        }
        function L() {
            i && (i.reject(),
            s.off("load", i.resolve)),
            i = new l.Deferred,
            s.on("load", i.resolve)
        }
        o.resize = S(s, R),
        o.scroll = S(s, v),
        o.redraw = S(),
        o.location = function(e) {
            window.location = e
        }
        ,
        o.env() && (o.location = function() {}
        ),
        o.ready = function() {
            g = !0,
            I ? (I = !1,
            p.each(d, T)) : p.each(r, A),
            p.each(c, A),
            o.resize.up()
        }
        ,
        o.load = function(e) {
            i.then(e)
        }
        ,
        o.destroy = function(e) {
            e = e || {},
            I = !0,
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (g = e.domready),
            p.each(d, y),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            r = [],
            c = [],
            "pending" === i.state() && L()
        }
        ,
        l(o.ready),
        L(),
        e.exports = window.Webflow = o
    },
    7624: function(e, t, a) {
        "use strict";
        var n = a(3949);
        n.define("links", e.exports = function(e, t) {
            var a, i, o, d = {}, r = e(window), c = n.env(), l = window.location, s = document.createElement("a"), u = "w--current", f = /index\.(html|php)$/, p = /\/$/;
            function E() {
                var e = r.scrollTop()
                  , a = r.height();
                t.each(i, function(t) {
                    if (!t.link.attr("hreflang")) {
                        var n = t.link
                          , i = t.sec
                          , o = i.offset().top
                          , d = i.outerHeight()
                          , r = .5 * a
                          , c = i.is(":visible") && o + d - r >= e && o + r <= e + a;
                        t.active !== c && (t.active = c,
                        g(n, u, c))
                    }
                })
            }
            function g(e, t, a) {
                var n = e.hasClass(t);
                (!a || !n) && (a || n) && (a ? e.addClass(t) : e.removeClass(t))
            }
            return d.ready = d.design = d.preview = function() {
                a = c && n.env("design"),
                o = n.env("slug") || l.pathname || "",
                n.scroll.off(E),
                i = [];
                for (var t = document.links, d = 0; d < t.length; ++d)
                    !function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var n = a && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (s.href = n,
                            !(n.indexOf(":") >= 0)) {
                                var d = e(t);
                                if (s.hash.length > 1 && s.host + s.pathname === l.host + l.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                        return;
                                    var r = e(s.hash);
                                    r.length && i.push({
                                        link: d,
                                        sec: r,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== n && "" !== n && g(d, u, s.href === l.href || n === o || f.test(n) && p.test(o))
                            }
                        }
                    }(t[d]);
                i.length && (n.scroll.on(E),
                E())
            }
            ,
            d
        }
        )
    },
    286: function(e, t, a) {
        "use strict";
        var n = a(3949);
        n.define("scroll", e.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , a = window.location
              , i = !function() {
                try {
                    return !!window.frameElement
                } catch (e) {
                    return !0
                }
            }() ? window.history : null
              , o = e(window)
              , d = e(document)
              , r = e(document.body)
              , c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                window.setTimeout(e, 15)
            }
              , l = n.env("editor") ? ".w-editor-body" : "body"
              , s = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])"
              , u = 'a[href="#"]'
              , f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")"
              , p = document.createElement("style");
            p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
            var E = /^#[a-zA-Z0-9][\w:.-]*$/;
            let g = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
            function I(e, t) {
                var a;
                switch (t) {
                case "add":
                    (a = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", a) : e.attr("tabindex", "-1");
                    break;
                case "remove":
                    (a = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", a),
                    e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                }
                e.toggleClass("wf-force-outline-none", "add" === t)
            }
            function T(t) {
                var d = t.currentTarget;
                if (!(n.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(d.className))) {
                    var l = E.test(d.hash) && d.host + d.pathname === a.host + a.pathname ? d.hash : "";
                    if ("" !== l) {
                        var u, f = e(l);
                        f.length && (t && (t.preventDefault(),
                        t.stopPropagation()),
                        u = l,
                        a.hash !== u && i && i.pushState && !(n.env.chrome && "file:" === a.protocol) && (i.state && i.state.hash) !== u && i.pushState({
                            hash: u
                        }, "", u),
                        window.setTimeout(function() {
                            !function(t, a) {
                                var n = o.scrollTop()
                                  , i = function(t) {
                                    var a = e(s)
                                      , n = "fixed" === a.css("position") ? a.outerHeight() : 0
                                      , i = t.offset().top - n;
                                    if ("mid" === t.data("scroll")) {
                                        var d = o.height() - n
                                          , r = t.outerHeight();
                                        r < d && (i -= Math.round((d - r) / 2))
                                    }
                                    return i
                                }(t);
                                if (n !== i) {
                                    var d = function(e, t, a) {
                                        if ("none" === document.body.getAttribute("data-wf-scroll-motion") || g.matches)
                                            return 0;
                                        var n = 1;
                                        return r.add(e).each(function(e, t) {
                                            var a = parseFloat(t.getAttribute("data-scroll-time"));
                                            !isNaN(a) && a >= 0 && (n = a)
                                        }),
                                        (472.143 * Math.log(Math.abs(t - a) + 125) - 2e3) * n
                                    }(t, n, i)
                                      , l = Date.now()
                                      , u = function() {
                                        var e, t, o, r, s, f = Date.now() - l;
                                        window.scroll(0, (e = n,
                                        t = i,
                                        (o = f) > (r = d) ? t : e + (t - e) * ((s = o / r) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))),
                                        f <= d ? c(u) : "function" == typeof a && a()
                                    };
                                    c(u)
                                }
                            }(f, function() {
                                I(f, "add"),
                                f.get(0).focus({
                                    preventScroll: !0
                                }),
                                I(f, "remove")
                            })
                        }, 300 * !t))
                    }
                }
            }
            return {
                ready: function() {
                    var {WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: a} = t;
                    d.on(a, f, T),
                    d.on(e, u, function(e) {
                        e.preventDefault()
                    }),
                    document.head.insertBefore(p, document.head.firstChild)
                }
            }
        }
        )
    },
    3695: function(e, t, a) {
        "use strict";
        a(3949).define("touch", e.exports = function(e) {
            var t = {}
              , a = window.getSelection;
            function n(t) {
                var n, i, o = !1, d = !1, r = Math.min(Math.round(.04 * window.innerWidth), 40);
                function c(e) {
                    var t = e.touches;
                    t && t.length > 1 || (o = !0,
                    t ? (d = !0,
                    n = t[0].clientX) : n = e.clientX,
                    i = n)
                }
                function l(t) {
                    if (o) {
                        if (d && "mousemove" === t.type) {
                            t.preventDefault(),
                            t.stopPropagation();
                            return
                        }
                        var n, c, l, s, f = t.touches, p = f ? f[0].clientX : t.clientX, E = p - i;
                        i = p,
                        Math.abs(E) > r && a && "" === String(a()) && (n = "swipe",
                        c = t,
                        l = {
                            direction: E > 0 ? "right" : "left"
                        },
                        s = e.Event(n, {
                            originalEvent: c
                        }),
                        e(c.target).trigger(s, l),
                        u())
                    }
                }
                function s(e) {
                    if (o && (o = !1,
                    d && "mouseup" === e.type)) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        d = !1;
                        return
                    }
                }
                function u() {
                    o = !1
                }
                t.addEventListener("touchstart", c, !1),
                t.addEventListener("touchmove", l, !1),
                t.addEventListener("touchend", s, !1),
                t.addEventListener("touchcancel", u, !1),
                t.addEventListener("mousedown", c, !1),
                t.addEventListener("mousemove", l, !1),
                t.addEventListener("mouseup", s, !1),
                t.addEventListener("mouseout", u, !1),
                this.destroy = function() {
                    t.removeEventListener("touchstart", c, !1),
                    t.removeEventListener("touchmove", l, !1),
                    t.removeEventListener("touchend", s, !1),
                    t.removeEventListener("touchcancel", u, !1),
                    t.removeEventListener("mousedown", c, !1),
                    t.removeEventListener("mousemove", l, !1),
                    t.removeEventListener("mouseup", s, !1),
                    t.removeEventListener("mouseout", u, !1),
                    t = null
                }
            }
            return e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(t) {
                return (t = "string" == typeof t ? e(t).get(0) : t) ? new n(t) : null
            }
            ,
            t.instance = t.init(document),
            t
        }
        )
    },
    9858: function(e, t, a) {
        "use strict";
        var n = a(3949)
          , i = a(5134);
        let o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , d = /^#[a-zA-Z0-9\-_]+$/;
        n.define("dropdown", e.exports = function(e, t) {
            var a, r, c = t.debounce, l = {}, s = n.env(), u = !1, f = n.env.touch, p = ".w-dropdown", E = "w--open", g = i.triggers, I = "focusout" + p, T = "keydown" + p, y = "mouseenter" + p, b = "mousemove" + p, m = "mouseleave" + p, O = (f ? "click" : "mouseup") + p, _ = "w-close" + p, R = "setting" + p, v = e(document);
            function S() {
                a = s && n.env("design"),
                (r = v.find(p)).each(A)
            }
            function A(t, i) {
                var r, l, u, f, g, b, m, S, A, V, G = e(i), M = e.data(i, p);
                M || (M = e.data(i, p, {
                    open: !1,
                    el: G,
                    config: {},
                    selectedIdx: -1
                })),
                M.toggle = M.el.children(".w-dropdown-toggle"),
                M.list = M.el.children(".w-dropdown-list"),
                M.links = M.list.find("a:not(.w-dropdown .w-dropdown a)"),
                M.complete = (r = M,
                function() {
                    r.list.removeClass(E),
                    r.toggle.removeClass(E),
                    r.manageZ && r.el.css("z-index", "")
                }
                ),
                M.mouseLeave = (l = M,
                function() {
                    l.hovering = !1,
                    l.links.is(":focus") || C(l)
                }
                ),
                M.mouseUpOutside = ((u = M).mouseUpOutside && v.off(O, u.mouseUpOutside),
                c(function(t) {
                    if (u.open) {
                        var a = e(t.target);
                        if (!a.closest(".w-dropdown-toggle").length) {
                            var i = -1 === e.inArray(u.el[0], a.parents(p))
                              , o = n.env("editor");
                            if (i) {
                                if (o) {
                                    var d = 1 === a.parents().length && 1 === a.parents("svg").length
                                      , r = a.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (d || r)
                                        return
                                }
                                C(u)
                            }
                        }
                    }
                })),
                M.mouseMoveOutside = (f = M,
                c(function(t) {
                    if (f.open) {
                        var a = e(t.target);
                        if (-1 === e.inArray(f.el[0], a.parents(p))) {
                            var n = a.parents(".w-editor-bem-EditorHoverControls").length
                              , i = a.parents(".w-editor-bem-RTToolbar").length
                              , o = e(".w-editor-bem-EditorOverlay")
                              , d = o.find(".w-editor-edit-outline").length || o.find(".w-editor-bem-RTToolbar").length;
                            if (n || i || d)
                                return;
                            f.hovering = !1,
                            C(f)
                        }
                    }
                })),
                L(M);
                var w = M.toggle.attr("id")
                  , P = M.list.attr("id");
                w || (w = "w-dropdown-toggle-" + t),
                P || (P = "w-dropdown-list-" + t),
                M.toggle.attr("id", w),
                M.toggle.attr("aria-controls", P),
                M.toggle.attr("aria-haspopup", "menu"),
                M.toggle.attr("aria-expanded", "false"),
                M.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                "BUTTON" !== M.toggle.prop("tagName") && (M.toggle.attr("role", "button"),
                M.toggle.attr("tabindex") || M.toggle.attr("tabindex", "0")),
                M.list.attr("id", P),
                M.list.attr("aria-labelledby", w),
                M.links.each(function(e, t) {
                    t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"),
                    d.test(t.hash) && t.addEventListener("click", C.bind(null, M))
                }),
                M.el.off(p),
                M.toggle.off(p),
                M.nav && M.nav.off(p);
                var x = N(M, !0);
                a && M.el.on(R, (g = M,
                function(e, t) {
                    t = t || {},
                    L(g),
                    !0 === t.open && h(g),
                    !1 === t.open && C(g, {
                        immediate: !0
                    })
                }
                )),
                a || (s && (M.hovering = !1,
                C(M)),
                M.config.hover && M.toggle.on(y, (b = M,
                function() {
                    b.hovering = !0,
                    h(b)
                }
                )),
                M.el.on(_, x),
                M.el.on(T, (m = M,
                function(e) {
                    if (!a && m.open)
                        switch (m.selectedIdx = m.links.index(document.activeElement),
                        e.keyCode) {
                        case o.HOME:
                            if (!m.open)
                                return;
                            return m.selectedIdx = 0,
                            U(m),
                            e.preventDefault();
                        case o.END:
                            if (!m.open)
                                return;
                            return m.selectedIdx = m.links.length - 1,
                            U(m),
                            e.preventDefault();
                        case o.ESCAPE:
                            return C(m),
                            m.toggle.focus(),
                            e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return m.selectedIdx = Math.min(m.links.length - 1, m.selectedIdx + 1),
                            U(m),
                            e.preventDefault();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return m.selectedIdx = Math.max(-1, m.selectedIdx - 1),
                            U(m),
                            e.preventDefault()
                        }
                }
                )),
                M.el.on(I, (S = M,
                c(function(e) {
                    var {relatedTarget: t, target: a} = e
                      , n = S.el[0];
                    return n.contains(t) || n.contains(a) || C(S),
                    e.stopPropagation()
                }))),
                M.toggle.on(O, x),
                M.toggle.on(T, (V = N(A = M, !0),
                function(e) {
                    if (!a) {
                        if (!A.open)
                            switch (e.keyCode) {
                            case o.ARROW_UP:
                            case o.ARROW_DOWN:
                                return e.stopPropagation()
                            }
                        switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                            return V(),
                            e.stopPropagation(),
                            e.preventDefault()
                        }
                    }
                }
                )),
                M.nav = M.el.closest(".w-nav"),
                M.nav.on(_, x))
            }
            function L(e) {
                var t = Number(e.el.css("z-index"));
                e.manageZ = 900 === t || 901 === t,
                e.config = {
                    hover: "true" === e.el.attr("data-hover") && !f,
                    delay: e.el.attr("data-delay")
                }
            }
            function N(e, t) {
                return c(function(a) {
                    if (e.open || a && "w-close" === a.type)
                        return C(e, {
                            forceClose: t
                        });
                    h(e)
                })
            }
            function h(t) {
                if (!t.open) {
                    i = t.el[0],
                    r.each(function(t, a) {
                        var n = e(a);
                        n.is(i) || n.has(i).length || n.triggerHandler(_)
                    }),
                    t.open = !0,
                    t.list.addClass(E),
                    t.toggle.addClass(E),
                    t.toggle.attr("aria-expanded", "true"),
                    g.intro(0, t.el[0]),
                    n.redraw.up(),
                    t.manageZ && t.el.css("z-index", 901);
                    var i, o = n.env("editor");
                    a || v.on(O, t.mouseUpOutside),
                    t.hovering && !o && t.el.on(m, t.mouseLeave),
                    t.hovering && o && v.on(b, t.mouseMoveOutside),
                    window.clearTimeout(t.delayId)
                }
            }
            function C(e, {immediate: t, forceClose: a}={}) {
                if (e.open && (!e.config.hover || !e.hovering || a)) {
                    e.toggle.attr("aria-expanded", "false"),
                    e.open = !1;
                    var n = e.config;
                    if (g.outro(0, e.el[0]),
                    v.off(O, e.mouseUpOutside),
                    v.off(b, e.mouseMoveOutside),
                    e.el.off(m, e.mouseLeave),
                    window.clearTimeout(e.delayId),
                    !n.delay || t)
                        return e.complete();
                    e.delayId = window.setTimeout(e.complete, n.delay)
                }
            }
            function U(e) {
                e.links[e.selectedIdx] && e.links[e.selectedIdx].focus()
            }
            return l.ready = S,
            l.design = function() {
                u && v.find(p).each(function(t, a) {
                    e(a).triggerHandler(_)
                }),
                u = !1,
                S()
            }
            ,
            l.preview = function() {
                u = !0,
                S()
            }
            ,
            l
        }
        )
    },
    6524: function(e, t) {
        "use strict";
        function a(e, t, a, n, i, o, d, r, c, l, s, u, f) {
            return function(p) {
                e(p);
                var E = p.form
                  , g = {
                    name: E.attr("data-name") || E.attr("name") || "Untitled Form",
                    pageId: E.attr("data-wf-page-id") || "",
                    elementId: E.attr("data-wf-element-id") || "",
                    domain: u("html").attr("data-wf-domain") || null,
                    source: t.href,
                    test: a.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(E.html()),
                    trackingCookies: n()
                };
                let I = E.attr("data-wf-flow");
                I && (g.wfFlow = I),
                i(p);
                var T = o(E, g.fields);
                return T ? d(T) : (g.fileUploads = r(E),
                c(p),
                l) ? void u.ajax({
                    url: f,
                    type: "POST",
                    data: g,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(e) {
                    e && 200 === e.code && (p.success = !0),
                    s(p)
                }).fail(function() {
                    s(p)
                }) : void s(p)
            }
        }
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        })
    },
    7527: function(e, t, a) {
        "use strict";
        var n = a(3949);
        let i = (e, t, a, n) => {
            let i = document.createElement("div");
            t.appendChild(i),
            turnstile.render(i, {
                sitekey: e,
                callback: function(e) {
                    a(e)
                },
                "error-callback": function() {
                    n()
                }
            })
        }
        ;
        n.define("forms", e.exports = function(e, t) {
            let o, d = "TURNSTILE_LOADED";
            var r, c, l, s, u, f = {}, p = e(document), E = window.location, g = window.XDomainRequest && !window.atob, I = ".w-form", T = /e(-)?mail/i, y = /^\S+@\S+$/, b = window.alert, m = n.env();
            let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
            var _ = /list-manage[1-9]?.com/i
              , R = t.debounce(function() {
                b("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            function v(t, o) {
                var r = e(o)
                  , l = e.data(o, I);
                l || (l = e.data(o, I, {
                    form: r
                })),
                S(l);
                var f = r.closest("div.w-form");
                l.done = f.find("> .w-form-done"),
                l.fail = f.find("> .w-form-fail"),
                l.fileUploads = f.find(".w-file-upload"),
                l.fileUploads.each(function(t) {
                    !function(t, a) {
                        if (a.fileUploads && a.fileUploads[t]) {
                            var n, i = e(a.fileUploads[t]), o = i.find("> .w-file-upload-default"), d = i.find("> .w-file-upload-uploading"), r = i.find("> .w-file-upload-success"), c = i.find("> .w-file-upload-error"), l = o.find(".w-file-upload-input"), s = o.find(".w-file-upload-label"), f = s.children(), p = c.find(".w-file-upload-error-msg"), E = r.find(".w-file-upload-file"), g = r.find(".w-file-remove-link"), I = E.find(".w-file-upload-file-name"), T = p.attr("data-w-size-error"), y = p.attr("data-w-type-error"), b = p.attr("data-w-generic-error");
                            if (m || s.on("click keydown", function(e) {
                                ("keydown" !== e.type || 13 === e.which || 32 === e.which) && (e.preventDefault(),
                                l.click())
                            }),
                            s.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                            g.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                            m)
                                l.on("click", function(e) {
                                    e.preventDefault()
                                }),
                                s.on("click", function(e) {
                                    e.preventDefault()
                                }),
                                f.on("click", function(e) {
                                    e.preventDefault()
                                });
                            else {
                                g.on("click keydown", function(e) {
                                    if ("keydown" === e.type) {
                                        if (13 !== e.which && 32 !== e.which)
                                            return;
                                        e.preventDefault()
                                    }
                                    l.removeAttr("data-value"),
                                    l.val(""),
                                    I.html(""),
                                    o.toggle(!0),
                                    r.toggle(!1),
                                    s.focus()
                                }),
                                l.on("change", function(i) {
                                    var r, l, s;
                                    (n = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1),
                                    c.toggle(!1),
                                    d.toggle(!0),
                                    d.focus(),
                                    I.text(n.name),
                                    L() || A(a),
                                    a.fileUploads[t].uploading = !0,
                                    r = n,
                                    l = R,
                                    s = new URLSearchParams({
                                        name: r.name,
                                        size: r.size
                                    }),
                                    e.ajax({
                                        type: "GET",
                                        url: `${u}?${s}`,
                                        crossDomain: !0
                                    }).done(function(e) {
                                        l(null, e)
                                    }).fail(function(e) {
                                        l(e)
                                    }))
                                });
                                var O = s.outerHeight();
                                l.height(O),
                                l.width(1)
                            }
                        }
                        function _(e) {
                            var n = e.responseJSON && e.responseJSON.msg
                              , i = b;
                            "string" == typeof n && 0 === n.indexOf("InvalidFileTypeError") ? i = y : "string" == typeof n && 0 === n.indexOf("MaxFileSizeError") && (i = T),
                            p.text(i),
                            l.removeAttr("data-value"),
                            l.val(""),
                            d.toggle(!1),
                            o.toggle(!0),
                            c.toggle(!0),
                            c.focus(),
                            a.fileUploads[t].uploading = !1,
                            L() || S(a)
                        }
                        function R(t, a) {
                            if (t)
                                return _(t);
                            var i = a.fileName
                              , o = a.postData
                              , d = a.fileId
                              , r = a.s3Url;
                            l.attr("data-value", d),
                            function(t, a, n, i, o) {
                                var d = new FormData;
                                for (var r in a)
                                    d.append(r, a[r]);
                                d.append("file", n, i),
                                e.ajax({
                                    type: "POST",
                                    url: t,
                                    data: d,
                                    processData: !1,
                                    contentType: !1
                                }).done(function() {
                                    o(null)
                                }).fail(function(e) {
                                    o(e)
                                })
                            }(r, o, n, i, v)
                        }
                        function v(e) {
                            if (e)
                                return _(e);
                            d.toggle(!1),
                            r.css("display", "inline-block"),
                            r.focus(),
                            a.fileUploads[t].uploading = !1,
                            L() || S(a)
                        }
                        function L() {
                            return (a.fileUploads && a.fileUploads.toArray() || []).some(function(e) {
                                return e.uploading
                            })
                        }
                    }(t, l)
                }),
                O && (function(e) {
                    let t = e.btn || e.form.find(':input[type="submit"]');
                    e.btn || (e.btn = t),
                    t.prop("disabled", !0),
                    t.addClass("w-form-loading")
                }(l),
                L(r, !0),
                p.on("undefined" != typeof turnstile ? "ready" : d, function() {
                    i(O, o, e => {
                        l.turnstileToken = e,
                        S(l),
                        L(r, !1)
                    }
                    , () => {
                        S(l),
                        l.btn && l.btn.prop("disabled", !0),
                        L(r, !1)
                    }
                    )
                }));
                var g = l.form.attr("aria-label") || l.form.attr("data-name") || "Form";
                l.done.attr("aria-label") || l.form.attr("aria-label", g),
                l.done.attr("tabindex", "-1"),
                l.done.attr("role", "region"),
                l.done.attr("aria-label") || l.done.attr("aria-label", g + " success"),
                l.fail.attr("tabindex", "-1"),
                l.fail.attr("role", "region"),
                l.fail.attr("aria-label") || l.fail.attr("aria-label", g + " failure");
                var T = l.action = r.attr("action");
                if (l.handler = null,
                l.redirect = r.attr("data-redirect"),
                _.test(T)) {
                    l.handler = V;
                    return
                }
                if (!T) {
                    if (c) {
                        l.handler = (0,
                        a(6524).default)(S, E, n, U, M, N, b, h, A, c, G, e, s);
                        return
                    }
                    R()
                }
            }
            function S(e) {
                var t = e.btn = e.form.find(':input[type="submit"]');
                e.wait = e.btn.attr("data-wait") || null,
                e.success = !1;
                let a = !!(O && !e.turnstileToken);
                t.prop("disabled", a),
                t.removeClass("w-form-loading"),
                e.label && t.val(e.label)
            }
            function A(e) {
                var t = e.btn
                  , a = e.wait;
                t.prop("disabled", !0),
                a && (e.label = t.val(),
                t.val(a))
            }
            function L(e, t) {
                let a = e.closest(".w-form");
                t ? a.addClass("w-form-loading") : a.removeClass("w-form-loading")
            }
            function N(t, a) {
                var n = null;
                return a = a || {},
                t.find(':input:not([type="submit"]):not([type="file"]):not([type="button"])').each(function(i, o) {
                    var d, r, c, l, s, u = e(o), f = u.attr("type"), p = u.attr("data-name") || u.attr("name") || "Field " + (i + 1);
                    p = encodeURIComponent(p);
                    var E = u.val();
                    if ("checkbox" === f)
                        E = u.is(":checked");
                    else if ("radio" === f) {
                        if (null === a[p] || "string" == typeof a[p])
                            return;
                        E = t.find('input[name="' + u.attr("name") + '"]:checked').val() || null
                    }
                    "string" == typeof E && (E = e.trim(E)),
                    a[p] = E,
                    n = n || (d = u,
                    r = f,
                    c = p,
                    l = E,
                    s = null,
                    "password" === r ? s = "Passwords cannot be submitted." : d.attr("required") ? l ? T.test(d.attr("type")) && !y.test(l) && (s = "Please enter a valid email address for: " + c) : s = "Please fill out the required field: " + c : "g-recaptcha-response" !== c || l || (s = "Please confirm you're not a robot."),
                    s)
                }),
                n
            }
            function h(t) {
                var a = {};
                return t.find(':input[type="file"]').each(function(t, n) {
                    var i = e(n)
                      , o = i.attr("data-name") || i.attr("name") || "File " + (t + 1)
                      , d = i.attr("data-value");
                    "string" == typeof d && (d = e.trim(d)),
                    a[o] = d
                }),
                a
            }
            f.ready = f.design = f.preview = function() {
                O && ((o = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js",
                document.head.appendChild(o),
                o.onload = () => {
                    p.trigger(d)
                }
                ),
                s = "https://webflow.com/api/v1/form/" + (c = e("html").attr("data-wf-site")),
                g && s.indexOf("https://webflow.com") >= 0 && (s = s.replace("https://webflow.com", "https://formdata.webflow.com")),
                u = `${s}/signFile`,
                (r = e(I + " form")).length && r.each(v),
                (!m || n.env("preview")) && !l && function() {
                    l = !0,
                    p.on("submit", I + " form", function(t) {
                        var a = e.data(this, I);
                        a.handler && (a.evt = t,
                        a.handler(a))
                    });
                    let t = ".w-checkbox-input"
                      , a = ".w-radio-input"
                      , n = "w--redirected-checked"
                      , i = "w--redirected-focus"
                      , o = "w--redirected-focus-visible"
                      , d = [["checkbox", t], ["radio", a]];
                    p.on("change", I + ' form input[type="checkbox"]:not(' + t + ")", a => {
                        e(a.target).siblings(t).toggleClass(n)
                    }
                    ),
                    p.on("change", I + ' form input[type="radio"]', i => {
                        e(`input[name="${i.target.name}"]:not(${t})`).map( (t, i) => e(i).siblings(a).removeClass(n));
                        let o = e(i.target);
                        o.hasClass("w-radio-input") || o.siblings(a).addClass(n)
                    }
                    ),
                    d.forEach( ([t,a]) => {
                        p.on("focus", I + ` form input[type="${t}"]:not(` + a + ")", t => {
                            e(t.target).siblings(a).addClass(i),
                            e(t.target).filter(":focus-visible, [data-wf-focus-visible]").siblings(a).addClass(o)
                        }
                        ),
                        p.on("blur", I + ` form input[type="${t}"]:not(` + a + ")", t => {
                            e(t.target).siblings(a).removeClass(`${i} ${o}`)
                        }
                        )
                    }
                    )
                }()
            }
            ;
            let C = {
                _mkto_trk: "marketo"
            };
            function U() {
                return document.cookie.split("; ").reduce(function(e, t) {
                    let a = t.split("=")
                      , n = a[0];
                    if (n in C) {
                        let t = C[n]
                          , i = a.slice(1).join("=");
                        e[t] = i
                    }
                    return e
                }, {})
            }
            function V(a) {
                S(a);
                var n, i = a.form, o = {};
                if (/^https/.test(E.href) && !/^https/.test(a.action))
                    return void i.attr("method", "post");
                M(a);
                var d = N(i, o);
                if (d)
                    return b(d);
                A(a),
                t.each(o, function(e, t) {
                    T.test(t) && (o.EMAIL = e),
                    /^((full[ _-]?)?name)$/i.test(t) && (n = e),
                    /^(first[ _-]?name)$/i.test(t) && (o.FNAME = e),
                    /^(last[ _-]?name)$/i.test(t) && (o.LNAME = e)
                }),
                n && !o.FNAME && (o.FNAME = (n = n.split(" "))[0],
                o.LNAME = o.LNAME || n[1]);
                var r = a.action.replace("/post?", "/post-json?") + "&c=?"
                  , c = r.indexOf("u=") + 2;
                c = r.substring(c, r.indexOf("&", c));
                var l = r.indexOf("id=") + 3;
                o["b_" + c + "_" + (l = r.substring(l, r.indexOf("&", l)))] = "",
                e.ajax({
                    url: r,
                    data: o,
                    dataType: "jsonp"
                }).done(function(e) {
                    a.success = "success" === e.result || /already/.test(e.msg),
                    a.success || console.info("MailChimp error: " + e.msg),
                    G(a)
                }).fail(function() {
                    G(a)
                })
            }
            function G(e) {
                var t = e.form
                  , a = e.redirect
                  , i = e.success;
                if (i && a)
                    return void n.location(a);
                e.done.toggle(i),
                e.fail.toggle(!i),
                i ? e.done.focus() : e.fail.focus(),
                t.toggle(!i),
                S(e)
            }
            function M(e) {
                e.evt && e.evt.preventDefault(),
                e.evt = null
            }
            return f
        }
        )
    },
    1655: function(e, t, a) {
        "use strict";
        var n = a(3949)
          , i = a(5134);
        let o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        n.define("navbar", e.exports = function(e, t) {
            var a, d, r, c, l = {}, s = e.tram, u = e(window), f = e(document), p = t.debounce, E = n.env(), g = ".w-nav", I = "w--open", T = "w--nav-dropdown-open", y = "w--nav-dropdown-toggle-open", b = "w--nav-dropdown-list-open", m = "w--nav-link-open", O = i.triggers, _ = e();
            function R() {
                n.resize.off(v)
            }
            function v() {
                d.each(M)
            }
            function S(a, n) {
                var i, d, l, s, p, E = e(n), I = e.data(n, g);
                I || (I = e.data(n, g, {
                    open: !1,
                    el: E,
                    config: {},
                    selectedIdx: -1
                })),
                I.menu = E.find(".w-nav-menu"),
                I.links = I.menu.find(".w-nav-link"),
                I.dropdowns = I.menu.find(".w-dropdown"),
                I.dropdownToggle = I.menu.find(".w-dropdown-toggle"),
                I.dropdownList = I.menu.find(".w-dropdown-list"),
                I.button = E.find(".w-nav-button"),
                I.container = E.find(".w-container"),
                I.overlayContainerId = "w-nav-overlay-" + a,
                I.outside = ((i = I).outside && f.off("click" + g, i.outside),
                function(t) {
                    var a = e(t.target);
                    c && a.closest(".w-editor-bem-EditorOverlay").length || G(i, a)
                }
                );
                var T = E.find(".w-nav-brand");
                T && "/" === T.attr("href") && null == T.attr("aria-label") && T.attr("aria-label", "home"),
                I.button.attr("style", "-webkit-user-select: text;"),
                null == I.button.attr("aria-label") && I.button.attr("aria-label", "menu"),
                I.button.attr("role", "button"),
                I.button.attr("tabindex", "0"),
                I.button.attr("aria-controls", I.overlayContainerId),
                I.button.attr("aria-haspopup", "menu"),
                I.button.attr("aria-expanded", "false"),
                I.el.off(g),
                I.button.off(g),
                I.menu.off(g),
                N(I),
                r ? (L(I),
                I.el.on("setting" + g, (d = I,
                function(e, a) {
                    a = a || {};
                    var n = u.width();
                    N(d),
                    !0 === a.open && k(d, !0),
                    !1 === a.open && D(d, !0),
                    d.open && t.defer(function() {
                        n !== u.width() && C(d)
                    })
                }
                ))) : ((l = I).overlay || (l.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(l.el),
                l.overlay.attr("id", l.overlayContainerId),
                l.parent = l.menu.parent(),
                D(l, !0)),
                I.button.on("click" + g, U(I)),
                I.menu.on("click" + g, "a", V(I)),
                I.button.on("keydown" + g, (s = I,
                function(e) {
                    switch (e.keyCode) {
                    case o.SPACE:
                    case o.ENTER:
                        return U(s)(),
                        e.preventDefault(),
                        e.stopPropagation();
                    case o.ESCAPE:
                        return D(s),
                        e.preventDefault(),
                        e.stopPropagation();
                    case o.ARROW_RIGHT:
                    case o.ARROW_DOWN:
                    case o.HOME:
                    case o.END:
                        if (!s.open)
                            return e.preventDefault(),
                            e.stopPropagation();
                        return e.keyCode === o.END ? s.selectedIdx = s.links.length - 1 : s.selectedIdx = 0,
                        h(s),
                        e.preventDefault(),
                        e.stopPropagation()
                    }
                }
                )),
                I.el.on("keydown" + g, (p = I,
                function(e) {
                    if (p.open)
                        switch (p.selectedIdx = p.links.index(document.activeElement),
                        e.keyCode) {
                        case o.HOME:
                        case o.END:
                            return e.keyCode === o.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0,
                            h(p),
                            e.preventDefault(),
                            e.stopPropagation();
                        case o.ESCAPE:
                            return D(p),
                            p.button.focus(),
                            e.preventDefault(),
                            e.stopPropagation();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return p.selectedIdx = Math.max(-1, p.selectedIdx - 1),
                            h(p),
                            e.preventDefault(),
                            e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1),
                            h(p),
                            e.preventDefault(),
                            e.stopPropagation()
                        }
                }
                ))),
                M(a, n)
            }
            function A(t, a) {
                var n = e.data(a, g);
                n && (L(n),
                e.removeData(a, g))
            }
            function L(e) {
                e.overlay && (D(e, !0),
                e.overlay.remove(),
                e.overlay = null)
            }
            function N(e) {
                var a = {}
                  , n = e.config || {}
                  , i = a.animation = e.el.attr("data-animation") || "default";
                a.animOver = /^over/.test(i),
                a.animDirect = /left$/.test(i) ? -1 : 1,
                n.animation !== i && e.open && t.defer(C, e),
                a.easing = e.el.attr("data-easing") || "ease",
                a.easing2 = e.el.attr("data-easing2") || "ease";
                var o = e.el.attr("data-duration");
                a.duration = null != o ? Number(o) : 400,
                a.docHeight = e.el.attr("data-doc-height"),
                e.config = a
            }
            function h(e) {
                if (e.links[e.selectedIdx]) {
                    var t = e.links[e.selectedIdx];
                    t.focus(),
                    V(t)
                }
            }
            function C(e) {
                e.open && (D(e, !0),
                k(e, !0))
            }
            function U(e) {
                return p(function() {
                    e.open ? D(e) : k(e)
                })
            }
            function V(t) {
                return function(a) {
                    var i = e(this).attr("href");
                    if (!n.validClick(a.currentTarget))
                        return void a.preventDefault();
                    i && 0 === i.indexOf("#") && t.open && D(t)
                }
            }
            l.ready = l.design = l.preview = function() {
                r = E && n.env("design"),
                c = n.env("editor"),
                a = e(document.body),
                (d = f.find(g)).length && (d.each(S),
                R(),
                n.resize.on(v))
            }
            ,
            l.destroy = function() {
                _ = e(),
                R(),
                d && d.length && d.each(A)
            }
            ;
            var G = p(function(e, t) {
                if (e.open) {
                    var a = t.closest(".w-nav-menu");
                    e.menu.is(a) || D(e)
                }
            });
            function M(t, a) {
                var n = e.data(a, g)
                  , i = n.collapsed = "none" !== n.button.css("display");
                if (!n.open || i || r || D(n, !0),
                n.container.length) {
                    var o, d = ("none" === (o = n.container.css(w)) && (o = ""),
                    function(t, a) {
                        (a = e(a)).css(w, ""),
                        "none" === a.css(w) && a.css(w, o)
                    }
                    );
                    n.links.each(d),
                    n.dropdowns.each(d)
                }
                n.open && F(n)
            }
            var w = "max-width";
            function P(e, t) {
                t.setAttribute("data-nav-menu-open", "")
            }
            function x(e, t) {
                t.removeAttribute("data-nav-menu-open")
            }
            function k(e, t) {
                if (!e.open) {
                    e.open = !0,
                    e.menu.each(P),
                    e.links.addClass(m),
                    e.dropdowns.addClass(T),
                    e.dropdownToggle.addClass(y),
                    e.dropdownList.addClass(b),
                    e.button.addClass(I);
                    var a = e.config;
                    ("none" === a.animation || !s.support.transform || a.duration <= 0) && (t = !0);
                    var i = F(e)
                      , o = e.menu.outerHeight(!0)
                      , d = e.menu.outerWidth(!0)
                      , c = e.el.height()
                      , l = e.el[0];
                    if (M(0, l),
                    O.intro(0, l),
                    n.redraw.up(),
                    r || f.on("click" + g, e.outside),
                    t)
                        return void p();
                    var u = "transform " + a.duration + "ms " + a.easing;
                    if (e.overlay && (_ = e.menu.prev(),
                    e.overlay.show().append(e.menu)),
                    a.animOver) {
                        s(e.menu).add(u).set({
                            x: a.animDirect * d,
                            height: i
                        }).start({
                            x: 0
                        }).then(p),
                        e.overlay && e.overlay.width(d);
                        return
                    }
                    s(e.menu).add(u).set({
                        y: -(c + o)
                    }).start({
                        y: 0
                    }).then(p)
                }
                function p() {
                    e.button.attr("aria-expanded", "true")
                }
            }
            function F(e) {
                var t = e.config
                  , n = t.docHeight ? f.height() : a.height();
                return t.animOver ? e.menu.height(n) : "fixed" !== e.el.css("position") && (n -= e.el.outerHeight(!0)),
                e.overlay && e.overlay.height(n),
                n
            }
            function D(e, t) {
                if (e.open) {
                    e.open = !1,
                    e.button.removeClass(I);
                    var a = e.config;
                    if (("none" === a.animation || !s.support.transform || a.duration <= 0) && (t = !0),
                    O.outro(0, e.el[0]),
                    f.off("click" + g, e.outside),
                    t) {
                        s(e.menu).stop(),
                        r();
                        return
                    }
                    var n = "transform " + a.duration + "ms " + a.easing2
                      , i = e.menu.outerHeight(!0)
                      , o = e.menu.outerWidth(!0)
                      , d = e.el.height();
                    if (a.animOver)
                        return void s(e.menu).add(n).start({
                            x: o * a.animDirect
                        }).then(r);
                    s(e.menu).add(n).start({
                        y: -(d + i)
                    }).then(r)
                }
                function r() {
                    e.menu.height(""),
                    s(e.menu).set({
                        x: 0,
                        y: 0
                    }),
                    e.menu.each(x),
                    e.links.removeClass(m),
                    e.dropdowns.removeClass(T),
                    e.dropdownToggle.removeClass(y),
                    e.dropdownList.removeClass(b),
                    e.overlay && e.overlay.children().length && (_.length ? e.menu.insertAfter(_) : e.menu.prependTo(e.parent),
                    e.overlay.attr("style", "").hide()),
                    e.el.triggerHandler("w-close"),
                    e.button.attr("aria-expanded", "false")
                }
            }
            return l
        }
        )
    },
    3946: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            actionListPlaybackChanged: function() {
                return Q
            },
            animationFrameChanged: function() {
                return F
            },
            clearRequested: function() {
                return w
            },
            elementStateChanged: function() {
                return z
            },
            eventListenerAdded: function() {
                return P
            },
            eventStateChanged: function() {
                return k
            },
            instanceAdded: function() {
                return X
            },
            instanceRemoved: function() {
                return H
            },
            instanceStarted: function() {
                return B
            },
            mediaQueriesDefined: function() {
                return Y
            },
            parameterChanged: function() {
                return D
            },
            playbackRequested: function() {
                return G
            },
            previewRequested: function() {
                return V
            },
            rawDataImported: function() {
                return N
            },
            sessionInitialized: function() {
                return h
            },
            sessionStarted: function() {
                return C
            },
            sessionStopped: function() {
                return U
            },
            stopRequested: function() {
                return M
            },
            testFrameRendered: function() {
                return x
            },
            viewportWidthChanged: function() {
                return W
            }
        };
        for (var i in n)
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
        let o = a(7087)
          , d = a(9468)
          , {IX2_RAW_DATA_IMPORTED: r, IX2_SESSION_INITIALIZED: c, IX2_SESSION_STARTED: l, IX2_SESSION_STOPPED: s, IX2_PREVIEW_REQUESTED: u, IX2_PLAYBACK_REQUESTED: f, IX2_STOP_REQUESTED: p, IX2_CLEAR_REQUESTED: E, IX2_EVENT_LISTENER_ADDED: g, IX2_TEST_FRAME_RENDERED: I, IX2_EVENT_STATE_CHANGED: T, IX2_ANIMATION_FRAME_CHANGED: y, IX2_PARAMETER_CHANGED: b, IX2_INSTANCE_ADDED: m, IX2_INSTANCE_STARTED: O, IX2_INSTANCE_REMOVED: _, IX2_ELEMENT_STATE_CHANGED: R, IX2_ACTION_LIST_PLAYBACK_CHANGED: v, IX2_VIEWPORT_WIDTH_CHANGED: S, IX2_MEDIA_QUERIES_DEFINED: A} = o.IX2EngineActionTypes
          , {reifyState: L} = d.IX2VanillaUtils
          , N = e => ({
            type: r,
            payload: {
                ...L(e)
            }
        })
          , h = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: c,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        })
          , C = () => ({
            type: l
        })
          , U = () => ({
            type: s
        })
          , V = ({rawData: e, defer: t}) => ({
            type: u,
            payload: {
                defer: t,
                rawData: e
            }
        })
          , G = ({actionTypeId: e=o.ActionTypeConsts.GENERAL_START_ACTION, actionListId: t, actionItemId: a, eventId: n, allowEvents: i, immediate: d, testManual: r, verbose: c, rawData: l}) => ({
            type: f,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: a,
                testManual: r,
                eventId: n,
                allowEvents: i,
                immediate: d,
                verbose: c,
                rawData: l
            }
        })
          , M = e => ({
            type: p,
            payload: {
                actionListId: e
            }
        })
          , w = () => ({
            type: E
        })
          , P = (e, t) => ({
            type: g,
            payload: {
                target: e,
                listenerParams: t
            }
        })
          , x = (e=1) => ({
            type: I,
            payload: {
                step: e
            }
        })
          , k = (e, t) => ({
            type: T,
            payload: {
                stateKey: e,
                newState: t
            }
        })
          , F = (e, t) => ({
            type: y,
            payload: {
                now: e,
                parameters: t
            }
        })
          , D = (e, t) => ({
            type: b,
            payload: {
                key: e,
                value: t
            }
        })
          , X = e => ({
            type: m,
            payload: {
                ...e
            }
        })
          , B = (e, t) => ({
            type: O,
            payload: {
                instanceId: e,
                time: t
            }
        })
          , H = e => ({
            type: _,
            payload: {
                instanceId: e
            }
        })
          , z = (e, t, a, n) => ({
            type: R,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: a,
                actionItem: n
            }
        })
          , Q = ({actionListId: e, isPlaying: t}) => ({
            type: v,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        })
          , W = ({width: e, mediaQueries: t}) => ({
            type: S,
            payload: {
                width: e,
                mediaQueries: t
            }
        })
          , Y = () => ({
            type: A
        })
    },
    6011: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, i = {
            actions: function() {
                return l
            },
            destroy: function() {
                return E
            },
            init: function() {
                return p
            },
            setEnv: function() {
                return f
            },
            store: function() {
                return u
            }
        };
        for (var o in i)
            Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
        let d = a(9516)
          , r = (n = a(7243)) && n.__esModule ? n : {
            default: n
        }
          , c = a(1970)
          , l = function(e, t) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var a = s(t);
            if (a && a.has(e))
                return a.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                }
            return n.default = e,
            a && a.set(e, n),
            n
        }(a(3946));
        function s(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , a = new WeakMap;
            return (s = function(e) {
                return e ? a : t
            }
            )(e)
        }
        let u = (0,
        d.createStore)(r.default);
        function f(e) {
            e() && (0,
            c.observeRequests)(u)
        }
        function p(e) {
            E(),
            (0,
            c.startEngine)({
                store: u,
                rawData: e,
                allowEvents: !0
            })
        }
        function E() {
            (0,
            c.stopEngine)(u)
        }
    },
    5012: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            elementContains: function() {
                return b
            },
            getChildElements: function() {
                return O
            },
            getClosestElement: function() {
                return R
            },
            getProperty: function() {
                return E
            },
            getQuerySelector: function() {
                return I
            },
            getRefType: function() {
                return v
            },
            getSiblingElements: function() {
                return _
            },
            getStyle: function() {
                return p
            },
            getValidDocument: function() {
                return T
            },
            isSiblingNode: function() {
                return m
            },
            matchSelector: function() {
                return g
            },
            queryDocument: function() {
                return y
            },
            setStyle: function() {
                return f
            }
        };
        for (var i in n)
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
        let o = a(9468)
          , d = a(7087)
          , {ELEMENT_MATCHES: r} = o.IX2BrowserSupport
          , {IX2_ID_DELIMITER: c, HTML_ELEMENT: l, PLAIN_OBJECT: s, WF_PAGE: u} = d.IX2EngineConstants;
        function f(e, t, a) {
            e.style[t] = a
        }
        function p(e, t) {
            return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
        }
        function E(e, t) {
            return e[t]
        }
        function g(e) {
            return t => t[r](e)
        }
        function I({id: e, selector: t}) {
            if (e) {
                let t = e;
                if (-1 !== e.indexOf(c)) {
                    let a = e.split(c)
                      , n = a[0];
                    if (t = a[1],
                    n !== document.documentElement.getAttribute(u))
                        return null
                }
                return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
            }
            return t
        }
        function T(e) {
            return null == e || e === document.documentElement.getAttribute(u) ? document : null
        }
        function y(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }
        function b(e, t) {
            return e.contains(t)
        }
        function m(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }
        function O(e) {
            let t = [];
            for (let a = 0, {length: n} = e || []; a < n; a++) {
                let {children: n} = e[a]
                  , {length: i} = n;
                if (i)
                    for (let e = 0; e < i; e++)
                        t.push(n[e])
            }
            return t
        }
        function _(e=[]) {
            let t = []
              , a = [];
            for (let n = 0, {length: i} = e; n < i; n++) {
                let {parentNode: i} = e[n];
                if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i))
                    continue;
                a.push(i);
                let o = i.firstElementChild;
                for (; null != o; )
                    -1 === e.indexOf(o) && t.push(o),
                    o = o.nextElementSibling
            }
            return t
        }
        let R = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let a = e;
            do {
                if (a[r] && a[r](t))
                    return a;
                a = a.parentNode
            } while (null != a);
            return null
        }
        ;
        function v(e) {
            return null != e && "object" == typeof e ? e instanceof Element ? l : s : null
        }
    },
    1970: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            observeRequests: function() {
                return Z
            },
            startActionGroup: function() {
                return eE
            },
            startEngine: function() {
                return en
            },
            stopActionGroup: function() {
                return ep
            },
            stopAllActionGroups: function() {
                return ef
            },
            stopEngine: function() {
                return ei
            }
        };
        for (var i in n)
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
        let o = y(a(9777))
          , d = y(a(4738))
          , r = y(a(4659))
          , c = y(a(3452))
          , l = y(a(6633))
          , s = y(a(3729))
          , u = y(a(2397))
          , f = y(a(5082))
          , p = a(7087)
          , E = a(9468)
          , g = a(3946)
          , I = function(e, t) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var a = b(t);
            if (a && a.has(e))
                return a.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                }
            return n.default = e,
            a && a.set(e, n),
            n
        }(a(5012))
          , T = y(a(8955));
        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function b(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , a = new WeakMap;
            return (b = function(e) {
                return e ? a : t
            }
            )(e)
        }
        let m = Object.keys(p.QuickEffectIds)
          , O = e => m.includes(e)
          , {COLON_DELIMITER: _, BOUNDARY_SELECTOR: R, HTML_ELEMENT: v, RENDER_GENERAL: S, W_MOD_IX: A} = p.IX2EngineConstants
          , {getAffectedElements: L, getElementId: N, getDestinationValues: h, observeStore: C, getInstanceId: U, renderHTMLElement: V, clearAllStyles: G, getMaxDurationItemIndex: M, getComputedStyle: w, getInstanceOrigin: P, reduceListToGroup: x, shouldNamespaceEventParameter: k, getNamespacedParameterId: F, shouldAllowMediaQuery: D, cleanupHTMLElement: X, clearObjectCache: B, stringifyTarget: H, mediaQueriesEqual: z, shallowEqual: Q} = E.IX2VanillaUtils
          , {isPluginType: W, createPluginInstance: Y, getPluginDuration: j} = E.IX2VanillaPlugins
          , q = navigator.userAgent
          , $ = q.match(/iPad/i) || q.match(/iPhone/);
        function Z(e) {
            C({
                store: e,
                select: ({ixRequest: e}) => e.preview,
                onChange: K
            }),
            C({
                store: e,
                select: ({ixRequest: e}) => e.playback,
                onChange: ee
            }),
            C({
                store: e,
                select: ({ixRequest: e}) => e.stop,
                onChange: et
            }),
            C({
                store: e,
                select: ({ixRequest: e}) => e.clear,
                onChange: ea
            })
        }
        function K({rawData: e, defer: t}, a) {
            let n = () => {
                en({
                    store: a,
                    rawData: e,
                    allowEvents: !0
                }),
                J()
            }
            ;
            t ? setTimeout(n, 0) : n()
        }
        function J() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }
        function ee(e, t) {
            let {actionTypeId: a, actionListId: n, actionItemId: i, eventId: o, allowEvents: d, immediate: r, testManual: c, verbose: l=!0} = e
              , {rawData: s} = e;
            if (n && i && s && r) {
                let e = s.actionLists[n];
                e && (s = x({
                    actionList: e,
                    actionItemId: i,
                    rawData: s
                }))
            }
            if (en({
                store: t,
                rawData: s,
                allowEvents: d,
                testManual: c
            }),
            n && a === p.ActionTypeConsts.GENERAL_START_ACTION || O(a)) {
                ep({
                    store: t,
                    actionListId: n
                }),
                eu({
                    store: t,
                    actionListId: n,
                    eventId: o
                });
                let e = eE({
                    store: t,
                    eventId: o,
                    actionListId: n,
                    immediate: r,
                    verbose: l
                });
                l && e && t.dispatch((0,
                g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !r
                }))
            }
        }
        function et({actionListId: e}, t) {
            e ? ep({
                store: t,
                actionListId: e
            }) : ef({
                store: t
            }),
            ei(t)
        }
        function ea(e, t) {
            ei(t),
            G({
                store: t,
                elementApi: I
            })
        }
        function en({store: e, rawData: t, allowEvents: a, testManual: n}) {
            let {ixSession: i} = e.getState();
            if (t && e.dispatch((0,
            g.rawDataImported)(t)),
            !i.active) {
                (e.dispatch((0,
                g.sessionInitialized)({
                    hasBoundaryNodes: !!document.querySelector(R),
                    reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                })),
                a) && (function(e) {
                    let {ixData: t} = e.getState()
                      , {eventTypeMap: a} = t;
                    er(e),
                    (0,
                    u.default)(a, (t, a) => {
                        let n = T.default[a];
                        if (!n)
                            return void console.warn(`IX2 event type not configured: ${a}`);
                        !function({logic: e, store: t, events: a}) {
                            !function(e) {
                                if (!$)
                                    return;
                                let t = {}
                                  , a = "";
                                for (let n in e) {
                                    let {eventTypeId: i, target: o} = e[n]
                                      , d = I.getQuerySelector(o);
                                    t[d] || (i === p.EventTypeConsts.MOUSE_CLICK || i === p.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[d] = !0,
                                    a += d + "{cursor: pointer;touch-action: manipulation;}")
                                }
                                if (a) {
                                    let e = document.createElement("style");
                                    e.textContent = a,
                                    document.body.appendChild(e)
                                }
                            }(a);
                            let {types: n, handler: i} = e
                              , {ixData: c} = t.getState()
                              , {actionLists: l} = c
                              , s = ec(a, es);
                            if (!(0,
                            r.default)(s))
                                return;
                            (0,
                            u.default)(s, (e, n) => {
                                let i = a[n]
                                  , {action: r, id: s, mediaQueries: u=c.mediaQueryKeys} = i
                                  , {actionListId: f} = r.config;
                                z(u, c.mediaQueryKeys) || t.dispatch((0,
                                g.mediaQueriesDefined)()),
                                r.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(i.config) ? i.config : [i.config]).forEach(a => {
                                    let {continuousParameterGroupId: n} = a
                                      , i = (0,
                                    d.default)(l, `${f}.continuousParameterGroups`, [])
                                      , r = (0,
                                    o.default)(i, ({id: e}) => e === n)
                                      , c = (a.smoothing || 0) / 100
                                      , u = (a.restingState || 0) / 100;
                                    r && e.forEach( (e, n) => {
                                        !function({store: e, eventStateKey: t, eventTarget: a, eventId: n, eventConfig: i, actionListId: o, parameterGroup: r, smoothing: c, restingValue: l}) {
                                            let {ixData: s, ixSession: u} = e.getState()
                                              , {events: f} = s
                                              , E = f[n]
                                              , {eventTypeId: g} = E
                                              , T = {}
                                              , y = {}
                                              , b = []
                                              , {continuousActionGroups: m} = r
                                              , {id: O} = r;
                                            k(g, i) && (O = F(t, O));
                                            let v = u.hasBoundaryNodes && a ? I.getClosestElement(a, R) : null;
                                            m.forEach(e => {
                                                let {keyframe: t, actionItems: n} = e;
                                                n.forEach(e => {
                                                    let {actionTypeId: n} = e
                                                      , {target: i} = e.config;
                                                    if (!i)
                                                        return;
                                                    let o = i.boundaryMode ? v : null
                                                      , d = H(i) + _ + n;
                                                    if (y[d] = function(e=[], t, a) {
                                                        let n, i = [...e];
                                                        return i.some( (e, a) => e.keyframe === t && (n = a,
                                                        !0)),
                                                        null == n && (n = i.length,
                                                        i.push({
                                                            keyframe: t,
                                                            actionItems: []
                                                        })),
                                                        i[n].actionItems.push(a),
                                                        i
                                                    }(y[d], t, e),
                                                    !T[d]) {
                                                        T[d] = !0;
                                                        let {config: t} = e;
                                                        L({
                                                            config: t,
                                                            event: E,
                                                            eventTarget: a,
                                                            elementRoot: o,
                                                            elementApi: I
                                                        }).forEach(e => {
                                                            b.push({
                                                                element: e,
                                                                key: d
                                                            })
                                                        }
                                                        )
                                                    }
                                                }
                                                )
                                            }
                                            ),
                                            b.forEach( ({element: t, key: a}) => {
                                                let i = y[a]
                                                  , r = (0,
                                                d.default)(i, "[0].actionItems[0]", {})
                                                  , {actionTypeId: s} = r
                                                  , u = (s === p.ActionTypeConsts.PLUGIN_RIVE ? 0 === (r.config?.target?.selectorGuids || []).length : W(s)) ? Y(s)?.(t, r) : null
                                                  , f = h({
                                                    element: t,
                                                    actionItem: r,
                                                    elementApi: I
                                                }, u);
                                                eg({
                                                    store: e,
                                                    element: t,
                                                    eventId: n,
                                                    actionListId: o,
                                                    actionItem: r,
                                                    destination: f,
                                                    continuous: !0,
                                                    parameterId: O,
                                                    actionGroups: i,
                                                    smoothing: c,
                                                    restingValue: l,
                                                    pluginInstance: u
                                                })
                                            }
                                            )
                                        }({
                                            store: t,
                                            eventStateKey: s + _ + n,
                                            eventTarget: e,
                                            eventId: s,
                                            eventConfig: a,
                                            actionListId: f,
                                            parameterGroup: r,
                                            smoothing: c,
                                            restingValue: u
                                        })
                                    }
                                    )
                                }
                                ),
                                (r.actionTypeId === p.ActionTypeConsts.GENERAL_START_ACTION || O(r.actionTypeId)) && eu({
                                    store: t,
                                    actionListId: f,
                                    eventId: s
                                })
                            }
                            );
                            let E = e => {
                                let {ixSession: n} = t.getState();
                                el(s, (o, d, r) => {
                                    let l = a[d]
                                      , s = n.eventState[r]
                                      , {action: u, mediaQueries: f=c.mediaQueryKeys} = l;
                                    if (!D(f, n.mediaQueryKey))
                                        return;
                                    let E = (a={}) => {
                                        let n = i({
                                            store: t,
                                            element: o,
                                            event: l,
                                            eventConfig: a,
                                            nativeEvent: e,
                                            eventStateKey: r
                                        }, s);
                                        Q(n, s) || t.dispatch((0,
                                        g.eventStateChanged)(r, n))
                                    }
                                    ;
                                    u.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(l.config) ? l.config : [l.config]).forEach(E) : E()
                                }
                                )
                            }
                              , T = (0,
                            f.default)(E, 12)
                              , y = ({target: e=document, types: a, throttle: n}) => {
                                a.split(" ").filter(Boolean).forEach(a => {
                                    let i = n ? T : E;
                                    e.addEventListener(a, i),
                                    t.dispatch((0,
                                    g.eventListenerAdded)(e, [a, i]))
                                }
                                )
                            }
                            ;
                            Array.isArray(n) ? n.forEach(y) : "string" == typeof n && y(e)
                        }({
                            logic: n,
                            store: e,
                            events: t
                        })
                    }
                    );
                    let {ixSession: n} = e.getState();
                    n.eventListeners.length && function(e) {
                        let t = () => {
                            er(e)
                        }
                        ;
                        ed.forEach(a => {
                            window.addEventListener(a, t),
                            e.dispatch((0,
                            g.eventListenerAdded)(window, [a, t]))
                        }
                        ),
                        t()
                    }(e)
                }(e),
                function() {
                    let {documentElement: e} = document;
                    -1 === e.className.indexOf(A) && (e.className += ` ${A}`)
                }(),
                e.getState().ixSession.hasDefinedMediaQueries && C({
                    store: e,
                    select: ({ixSession: e}) => e.mediaQueryKey,
                    onChange: () => {
                        ei(e),
                        G({
                            store: e,
                            elementApi: I
                        }),
                        en({
                            store: e,
                            allowEvents: !0
                        }),
                        J()
                    }
                }));
                e.dispatch((0,
                g.sessionStarted)()),
                function(e, t) {
                    let a = n => {
                        let {ixSession: i, ixParameters: o} = e.getState();
                        if (i.active)
                            if (e.dispatch((0,
                            g.animationFrameChanged)(n, o)),
                            t) {
                                let t = C({
                                    store: e,
                                    select: ({ixSession: e}) => e.tick,
                                    onChange: e => {
                                        a(e),
                                        t()
                                    }
                                })
                            } else
                                requestAnimationFrame(a)
                    }
                    ;
                    a(window.performance.now())
                }(e, n)
            }
        }
        function ei(e) {
            let {ixSession: t} = e.getState();
            if (t.active) {
                let {eventListeners: a} = t;
                a.forEach(eo),
                B(),
                e.dispatch((0,
                g.sessionStopped)())
            }
        }
        function eo({target: e, listenerParams: t}) {
            e.removeEventListener.apply(e, t)
        }
        let ed = ["resize", "orientationchange"];
        function er(e) {
            let {ixSession: t, ixData: a} = e.getState()
              , n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let {mediaQueries: t} = a;
                e.dispatch((0,
                g.viewportWidthChanged)({
                    width: n,
                    mediaQueries: t
                }))
            }
        }
        let ec = (e, t) => (0,
        c.default)((0,
        s.default)(e, t), l.default)
          , el = (e, t) => {
            (0,
            u.default)(e, (e, a) => {
                e.forEach( (e, n) => {
                    t(e, a, a + _ + n)
                }
                )
            }
            )
        }
          , es = e => L({
            config: {
                target: e.target,
                targets: e.targets
            },
            elementApi: I
        });
        function eu({store: e, actionListId: t, eventId: a}) {
            let {ixData: n, ixSession: i} = e.getState()
              , {actionLists: o, events: r} = n
              , c = r[a]
              , l = o[t];
            if (l && l.useFirstGroupAsInitialState) {
                let o = (0,
                d.default)(l, "actionItemGroups[0].actionItems", []);
                if (!D((0,
                d.default)(c, "mediaQueries", n.mediaQueryKeys), i.mediaQueryKey))
                    return;
                o.forEach(n => {
                    let {config: i, actionTypeId: o} = n
                      , d = L({
                        config: i?.target?.useEventTarget === !0 && i?.target?.objectId == null ? {
                            target: c.target,
                            targets: c.targets
                        } : i,
                        event: c,
                        elementApi: I
                    })
                      , r = W(o);
                    d.forEach(i => {
                        let d = r ? Y(o)?.(i, n) : null;
                        eg({
                            destination: h({
                                element: i,
                                actionItem: n,
                                elementApi: I
                            }, d),
                            immediate: !0,
                            store: e,
                            element: i,
                            eventId: a,
                            actionItem: n,
                            actionListId: t,
                            pluginInstance: d
                        })
                    }
                    )
                }
                )
            }
        }
        function ef({store: e}) {
            let {ixInstances: t} = e.getState();
            (0,
            u.default)(t, t => {
                if (!t.continuous) {
                    let {actionListId: a, verbose: n} = t;
                    eI(t, e),
                    n && e.dispatch((0,
                    g.actionListPlaybackChanged)({
                        actionListId: a,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function ep({store: e, eventId: t, eventTarget: a, eventStateKey: n, actionListId: i}) {
            let {ixInstances: o, ixSession: r} = e.getState()
              , c = r.hasBoundaryNodes && a ? I.getClosestElement(a, R) : null;
            (0,
            u.default)(o, a => {
                let o = (0,
                d.default)(a, "actionItem.config.target.boundaryMode")
                  , r = !n || a.eventStateKey === n;
                if (a.actionListId === i && a.eventId === t && r) {
                    if (c && o && !I.elementContains(c, a.element))
                        return;
                    eI(a, e),
                    a.verbose && e.dispatch((0,
                    g.actionListPlaybackChanged)({
                        actionListId: i,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function eE({store: e, eventId: t, eventTarget: a, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: r, verbose: c}) {
            let {ixData: l, ixSession: s} = e.getState()
              , {events: u} = l
              , f = u[t] || {}
              , {mediaQueries: p=l.mediaQueryKeys} = f
              , {actionItemGroups: E, useFirstGroupAsInitialState: g} = (0,
            d.default)(l, `actionLists.${i}`, {});
            if (!E || !E.length)
                return !1;
            o >= E.length && (0,
            d.default)(f, "config.loop") && (o = 0),
            0 === o && g && o++;
            let T = (0 === o || 1 === o && g) && O(f.action?.actionTypeId) ? f.config.delay : void 0
              , y = (0,
            d.default)(E, [o, "actionItems"], []);
            if (!y.length || !D(p, s.mediaQueryKey))
                return !1;
            let b = s.hasBoundaryNodes && a ? I.getClosestElement(a, R) : null
              , m = M(y)
              , _ = !1;
            return y.forEach( (d, l) => {
                let {config: s, actionTypeId: u} = d
                  , p = W(u)
                  , {target: E} = s;
                E && L({
                    config: s,
                    event: f,
                    eventTarget: a,
                    elementRoot: E.boundaryMode ? b : null,
                    elementApi: I
                }).forEach( (s, f) => {
                    let E = p ? Y(u)?.(s, d) : null
                      , g = p ? j(u)(s, d) : null;
                    _ = !0;
                    let y = w({
                        element: s,
                        actionItem: d
                    })
                      , b = h({
                        element: s,
                        actionItem: d,
                        elementApi: I
                    }, E);
                    eg({
                        store: e,
                        element: s,
                        actionItem: d,
                        eventId: t,
                        eventTarget: a,
                        eventStateKey: n,
                        actionListId: i,
                        groupIndex: o,
                        isCarrier: m === l && 0 === f,
                        computedStyle: y,
                        destination: b,
                        immediate: r,
                        verbose: c,
                        pluginInstance: E,
                        pluginDuration: g,
                        instanceDelay: T
                    })
                }
                )
            }
            ),
            _
        }
        function eg(e) {
            let t, {store: a, computedStyle: n, ...i} = e, {element: o, actionItem: d, immediate: r, pluginInstance: c, continuous: l, restingValue: s, eventId: u} = i, f = U(), {ixElements: E, ixSession: T, ixData: y} = a.getState(), b = N(E, o), {refState: m} = E[b] || {}, O = I.getRefType(o), _ = T.reducedMotion && p.ReducedMotionTypes[d.actionTypeId];
            if (_ && l)
                switch (y.events[u]?.eventTypeId) {
                case p.EventTypeConsts.MOUSE_MOVE:
                case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    t = s;
                    break;
                default:
                    t = .5
                }
            let R = P(o, m, n, d, I, c);
            if (a.dispatch((0,
            g.instanceAdded)({
                instanceId: f,
                elementId: b,
                origin: R,
                refType: O,
                skipMotion: _,
                skipToValue: t,
                ...i
            })),
            eT(document.body, "ix2-animation-started", f),
            r)
                return void function(e, t) {
                    let {ixParameters: a} = e.getState();
                    e.dispatch((0,
                    g.instanceStarted)(t, 0)),
                    e.dispatch((0,
                    g.animationFrameChanged)(performance.now(), a));
                    let {ixInstances: n} = e.getState();
                    ey(n[t], e)
                }(a, f);
            C({
                store: a,
                select: ({ixInstances: e}) => e[f],
                onChange: ey
            }),
            l || a.dispatch((0,
            g.instanceStarted)(f, T.tick))
        }
        function eI(e, t) {
            eT(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {elementId: a, actionItem: n} = e
              , {ixElements: i} = t.getState()
              , {ref: o, refType: d} = i[a] || {};
            d === v && X(o, n, I),
            t.dispatch((0,
            g.instanceRemoved)(e.id))
        }
        function eT(e, t, a) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, a),
            e.dispatchEvent(n)
        }
        function ey(e, t) {
            let {active: a, continuous: n, complete: i, elementId: o, actionItem: d, actionTypeId: r, renderType: c, current: l, groupIndex: s, eventId: u, eventTarget: f, eventStateKey: p, actionListId: E, isCarrier: T, styleProp: y, verbose: b, pluginInstance: m} = e
              , {ixData: O, ixSession: _} = t.getState()
              , {events: R} = O
              , {mediaQueries: A=O.mediaQueryKeys} = R && R[u] ? R[u] : {};
            if (D(A, _.mediaQueryKey) && (n || a || i)) {
                if (l || c === S && i) {
                    t.dispatch((0,
                    g.elementStateChanged)(o, r, l, d));
                    let {ixElements: e} = t.getState()
                      , {ref: a, refType: n, refState: i} = e[o] || {}
                      , s = i && i[r];
                    (n === v || W(r)) && V(a, i, s, u, d, y, I, c, m)
                }
                if (i) {
                    if (T) {
                        let e = eE({
                            store: t,
                            eventId: u,
                            eventTarget: f,
                            eventStateKey: p,
                            actionListId: E,
                            groupIndex: s + 1,
                            verbose: b
                        });
                        b && !e && t.dispatch((0,
                        g.actionListPlaybackChanged)({
                            actionListId: E,
                            isPlaying: !1
                        }))
                    }
                    eI(e, t)
                }
            }
        }
    },
    8955: function(e, t, a) {
        "use strict";
        let n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return ep
            }
        });
        let i = u(a(5801))
          , o = u(a(4738))
          , d = u(a(3789))
          , r = a(7087)
          , c = a(1970)
          , l = a(3946)
          , s = a(9468);
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        let {MOUSE_CLICK: f, MOUSE_SECOND_CLICK: p, MOUSE_DOWN: E, MOUSE_UP: g, MOUSE_OVER: I, MOUSE_OUT: T, DROPDOWN_CLOSE: y, DROPDOWN_OPEN: b, SLIDER_ACTIVE: m, SLIDER_INACTIVE: O, TAB_ACTIVE: _, TAB_INACTIVE: R, NAVBAR_CLOSE: v, NAVBAR_OPEN: S, MOUSE_MOVE: A, PAGE_SCROLL_DOWN: L, SCROLL_INTO_VIEW: N, SCROLL_OUT_OF_VIEW: h, PAGE_SCROLL_UP: C, SCROLLING_IN_VIEW: U, PAGE_FINISH: V, ECOMMERCE_CART_CLOSE: G, ECOMMERCE_CART_OPEN: M, PAGE_START: w, PAGE_SCROLL: P} = r.EventTypeConsts
          , x = "COMPONENT_ACTIVE"
          , k = "COMPONENT_INACTIVE"
          , {COLON_DELIMITER: F} = r.IX2EngineConstants
          , {getNamespacedParameterId: D} = s.IX2VanillaUtils
          , X = e => t => !!("object" == typeof t && e(t)) || t
          , B = X( ({element: e, nativeEvent: t}) => e === t.target)
          , H = X( ({element: e, nativeEvent: t}) => e.contains(t.target))
          , z = (0,
        i.default)([B, H])
          , Q = (e, t) => {
            if (t) {
                let {ixData: a} = e.getState()
                  , {events: n} = a
                  , i = n[t];
                if (i && !ee[i.eventTypeId])
                    return i
            }
            return null
        }
          , W = ({store: e, event: t}) => {
            let {action: a} = t
              , {autoStopEventId: n} = a.config;
            return !!Q(e, n)
        }
          , Y = ({store: e, event: t, element: a, eventStateKey: n}, i) => {
            let {action: d, id: r} = t
              , {actionListId: l, autoStopEventId: s} = d.config
              , u = Q(e, s);
            return u && (0,
            c.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: a,
                eventStateKey: s + F + n.split(F)[1],
                actionListId: (0,
                o.default)(u, "action.config.actionListId")
            }),
            (0,
            c.stopActionGroup)({
                store: e,
                eventId: r,
                eventTarget: a,
                eventStateKey: n,
                actionListId: l
            }),
            (0,
            c.startActionGroup)({
                store: e,
                eventId: r,
                eventTarget: a,
                eventStateKey: n,
                actionListId: l
            }),
            i
        }
          , j = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n
          , q = {
            handler: j(z, Y)
        }
          , $ = {
            ...q,
            types: [x, k].join(" ")
        }
          , Z = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }]
          , K = "mouseover mouseout"
          , J = {
            types: Z
        }
          , ee = {
            PAGE_START: w,
            PAGE_FINISH: V
        }
          , et = ( () => {
            let e = void 0 !== window.pageXOffset
              , t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                scrollTop: e ? window.pageYOffset : t.scrollTop,
                stiffScrollTop: (0,
                d.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                scrollWidth: t.scrollWidth,
                scrollHeight: t.scrollHeight,
                clientWidth: t.clientWidth,
                clientHeight: t.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )()
          , ea = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)
          , en = ({element: e, nativeEvent: t}) => {
            let {type: a, target: n, relatedTarget: i} = t
              , o = e.contains(n);
            if ("mouseover" === a && o)
                return !0;
            let d = e.contains(i);
            return "mouseout" === a && !!o && !!d
        }
          , ei = e => {
            let {element: t, event: {config: a}} = e
              , {clientWidth: n, clientHeight: i} = et()
              , o = a.scrollOffsetValue
              , d = "PX" === a.scrollOffsetUnit ? o : i * (o || 0) / 100;
            return ea(t.getBoundingClientRect(), {
                left: 0,
                top: d,
                right: n,
                bottom: i - d
            })
        }
          , eo = e => (t, a) => {
            let {type: n} = t.nativeEvent
              , i = -1 !== [x, k].indexOf(n) ? n === x : a.isActive
              , o = {
                ...a,
                isActive: i
            };
            return (!a || o.isActive !== a.isActive) && e(t, o) || o
        }
          , ed = e => (t, a) => {
            let n = {
                elementHovered: en(t)
            };
            return (a ? n.elementHovered !== a.elementHovered : n.elementHovered) && e(t, n) || n
        }
          , er = e => (t, a={}) => {
            let n, i, {stiffScrollTop: o, scrollHeight: d, innerHeight: r} = et(), {event: {config: c, eventTypeId: l}} = t, {scrollOffsetValue: s, scrollOffsetUnit: u} = c, f = d - r, p = Number((o / f).toFixed(2));
            if (a && a.percentTop === p)
                return a;
            let E = ("PX" === u ? s : r * (s || 0) / 100) / f
              , g = 0;
            a && (n = p > a.percentTop,
            g = (i = a.scrollingDown !== n) ? p : a.anchorTop);
            let I = l === L ? p >= g + E : p <= g - E
              , T = {
                ...a,
                percentTop: p,
                inBounds: I,
                anchorTop: g,
                scrollingDown: n
            };
            return a && I && (i || T.inBounds !== a.inBounds) && e(t, T) || T
        }
          , ec = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom
          , el = e => (t, a={
            clickCount: 0
        }) => {
            let n = {
                clickCount: a.clickCount % 2 + 1
            };
            return n.clickCount !== a.clickCount && e(t, n) || n
        }
          , es = (e=!0) => ({
            ...$,
            handler: j(e ? z : B, eo( (e, t) => t.isActive ? q.handler(e, t) : t))
        })
          , eu = (e=!0) => ({
            ...$,
            handler: j(e ? z : B, eo( (e, t) => t.isActive ? t : q.handler(e, t)))
        })
          , ef = {
            ...J,
            handler: (n = (e, t) => {
                let {elementVisible: a} = t
                  , {event: n, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: d} = o;
                return !d[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === N === a ? (Y(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            ,
            (e, t) => {
                let a = {
                    ...t,
                    elementVisible: ei(e)
                };
                return (t ? a.elementVisible !== t.elementVisible : a.elementVisible) && n(e, a) || a
            }
            )
        }
          , ep = {
            [m]: es(),
            [O]: eu(),
            [b]: es(),
            [y]: eu(),
            [S]: es(!1),
            [v]: eu(!1),
            [_]: es(),
            [R]: eu(),
            [M]: {
                types: "ecommerce-cart-open",
                handler: j(z, Y)
            },
            [G]: {
                types: "ecommerce-cart-close",
                handler: j(z, Y)
            },
            [f]: {
                types: "click",
                handler: j(z, el( (e, {clickCount: t}) => {
                    W(e) ? 1 === t && Y(e) : Y(e)
                }
                ))
            },
            [p]: {
                types: "click",
                handler: j(z, el( (e, {clickCount: t}) => {
                    2 === t && Y(e)
                }
                ))
            },
            [E]: {
                ...q,
                types: "mousedown"
            },
            [g]: {
                ...q,
                types: "mouseup"
            },
            [I]: {
                types: K,
                handler: j(z, ed( (e, t) => {
                    t.elementHovered && Y(e)
                }
                ))
            },
            [T]: {
                types: K,
                handler: j(z, ed( (e, t) => {
                    t.elementHovered || Y(e)
                }
                ))
            },
            [A]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: a, nativeEvent: n, eventStateKey: i}, o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: d, selectedAxis: c, continuousParameterGroupId: s, reverse: u, restingState: f=0} = a
                      , {clientX: p=o.clientX, clientY: E=o.clientY, pageX: g=o.pageX, pageY: I=o.pageY} = n
                      , T = "X_AXIS" === c
                      , y = "mouseout" === n.type
                      , b = f / 100
                      , m = s
                      , O = !1;
                    switch (d) {
                    case r.EventBasedOn.VIEWPORT:
                        b = T ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(E, window.innerHeight) / window.innerHeight;
                        break;
                    case r.EventBasedOn.PAGE:
                        {
                            let {scrollLeft: e, scrollTop: t, scrollWidth: a, scrollHeight: n} = et();
                            b = T ? Math.min(e + g, a) / a : Math.min(t + I, n) / n;
                            break
                        }
                    case r.EventBasedOn.ELEMENT:
                    default:
                        {
                            m = D(i, s);
                            let e = 0 === n.type.indexOf("mouse");
                            if (e && !0 !== z({
                                element: t,
                                nativeEvent: n
                            }))
                                break;
                            let a = t.getBoundingClientRect()
                              , {left: o, top: d, width: r, height: c} = a;
                            if (!e && !ec({
                                left: p,
                                top: E
                            }, a))
                                break;
                            O = !0,
                            b = T ? (p - o) / r : (E - d) / c
                        }
                    }
                    return y && (b > .95 || b < .05) && (b = Math.round(b)),
                    (d !== r.EventBasedOn.ELEMENT || O || O !== o.elementHovered) && (b = u ? 1 - b : b,
                    e.dispatch((0,
                    l.parameterChanged)(m, b))),
                    {
                        elementHovered: O,
                        clientX: p,
                        clientY: E,
                        pageX: g,
                        pageY: I
                    }
                }
            },
            [P]: {
                types: Z,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: a, reverse: n} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: d} = et()
                      , r = i / (o - d);
                    r = n ? 1 - r : r,
                    e.dispatch((0,
                    l.parameterChanged)(a, r))
                }
            },
            [U]: {
                types: Z,
                handler: ({element: e, store: t, eventConfig: a, eventStateKey: n}, i={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: o, scrollTop: d, scrollWidth: c, scrollHeight: s, clientHeight: u} = et()
                      , {basedOn: f, selectedAxis: p, continuousParameterGroupId: E, startsEntering: g, startsExiting: I, addEndOffset: T, addStartOffset: y, addOffsetValue: b=0, endOffsetValue: m=0} = a;
                    if (f === r.EventBasedOn.VIEWPORT) {
                        let e = "X_AXIS" === p ? o / c : d / s;
                        return e !== i.scrollPercent && t.dispatch((0,
                        l.parameterChanged)(E, e)),
                        {
                            scrollPercent: e
                        }
                    }
                    {
                        let a = D(n, E)
                          , o = e.getBoundingClientRect()
                          , d = (y ? b : 0) / 100
                          , r = (T ? m : 0) / 100;
                        d = g ? d : 1 - d,
                        r = I ? r : 1 - r;
                        let c = o.top + Math.min(o.height * d, u)
                          , f = Math.min(u + (o.top + o.height * r - c), s)
                          , p = Math.min(Math.max(0, u - c), f) / f;
                        return p !== i.scrollPercent && t.dispatch((0,
                        l.parameterChanged)(a, p)),
                        {
                            scrollPercent: p
                        }
                    }
                }
            },
            [N]: ef,
            [h]: ef,
            [L]: {
                ...J,
                handler: er( (e, t) => {
                    t.scrollingDown && Y(e)
                }
                )
            },
            [C]: {
                ...J,
                handler: er( (e, t) => {
                    t.scrollingDown || Y(e)
                }
                )
            },
            [V]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: j(B, (e, t) => {
                    let a = {
                        finished: "complete" === document.readyState
                    };
                    return a.finished && !(t && t.finshed) && Y(e),
                    a
                }
                )
            },
            [w]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: j(B, (e, t) => (t || Y(e),
                {
                    started: !0
                }))
            }
        }
    },
    4609: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixData", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let {IX2_RAW_DATA_IMPORTED: n} = a(7087).IX2EngineActionTypes
          , i = (e=Object.freeze({}), t) => t.type === n ? t.payload.ixData || Object.freeze({}) : e
    },
    7718: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixInstances", {
            enumerable: !0,
            get: function() {
                return O
            }
        });
        let n = a(7087)
          , i = a(9468)
          , o = a(1185)
          , {IX2_RAW_DATA_IMPORTED: d, IX2_SESSION_STOPPED: r, IX2_INSTANCE_ADDED: c, IX2_INSTANCE_STARTED: l, IX2_INSTANCE_REMOVED: s, IX2_ANIMATION_FRAME_CHANGED: u} = n.IX2EngineActionTypes
          , {optimizeFloat: f, applyEasing: p, createBezierEasing: E} = i.IX2EasingUtils
          , {RENDER_GENERAL: g} = n.IX2EngineConstants
          , {getItemConfigByKey: I, getRenderType: T, getStyleProp: y} = i.IX2VanillaUtils
          , b = (e, t) => {
            let a, n, i, d, {position: r, parameterId: c, actionGroups: l, destinationKeys: s, smoothing: u, restingValue: E, actionTypeId: g, customEasingFn: T, skipMotion: y, skipToValue: b} = e, {parameters: m} = t.payload, O = Math.max(1 - u, .01), _ = m[c];
            null == _ && (O = 1,
            _ = E);
            let R = f((Math.max(_, 0) || 0) - r)
              , v = y ? b : f(r + R * O)
              , S = 100 * v;
            if (v === r && e.current)
                return e;
            for (let e = 0, {length: t} = l; e < t; e++) {
                let {keyframe: t, actionItems: o} = l[e];
                if (0 === e && (a = o[0]),
                S >= t) {
                    a = o[0];
                    let r = l[e + 1]
                      , c = r && S !== t;
                    n = c ? r.actionItems[0] : null,
                    c && (i = t / 100,
                    d = (r.keyframe - t) / 100)
                }
            }
            let A = {};
            if (a && !n)
                for (let e = 0, {length: t} = s; e < t; e++) {
                    let t = s[e];
                    A[t] = I(g, t, a.config)
                }
            else if (a && n && void 0 !== i && void 0 !== d) {
                let e = (v - i) / d
                  , t = p(a.config.easing, e, T);
                for (let e = 0, {length: i} = s; e < i; e++) {
                    let i = s[e]
                      , o = I(g, i, a.config)
                      , d = (I(g, i, n.config) - o) * t + o;
                    A[i] = d
                }
            }
            return (0,
            o.merge)(e, {
                position: v,
                current: A
            })
        }
          , m = (e, t) => {
            let {active: a, origin: n, start: i, immediate: d, renderType: r, verbose: c, actionItem: l, destination: s, destinationKeys: u, pluginDuration: E, instanceDelay: I, customEasingFn: T, skipMotion: y} = e
              , b = l.config.easing
              , {duration: m, delay: O} = l.config;
            null != E && (m = E),
            O = null != I ? I : O,
            r === g ? m = 0 : (d || y) && (m = O = 0);
            let {now: _} = t.payload;
            if (a && n) {
                let t = _ - (i + O);
                if (c) {
                    let t = m + O
                      , a = f(Math.min(Math.max(0, (_ - i) / t), 1));
                    e = (0,
                    o.set)(e, "verboseTimeElapsed", t * a)
                }
                if (t < 0)
                    return e;
                let a = f(Math.min(Math.max(0, t / m), 1))
                  , d = p(b, a, T)
                  , r = {}
                  , l = null;
                return u.length && (l = u.reduce( (e, t) => {
                    let a = s[t]
                      , i = parseFloat(n[t]) || 0
                      , o = parseFloat(a) - i;
                    return e[t] = o * d + i,
                    e
                }
                , {})),
                r.current = l,
                r.position = a,
                1 === a && (r.active = !1,
                r.complete = !0),
                (0,
                o.merge)(e, r)
            }
            return e
        }
          , O = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case d:
                return t.payload.ixInstances || Object.freeze({});
            case r:
                return Object.freeze({});
            case c:
                {
                    let {instanceId: a, elementId: n, actionItem: i, eventId: d, eventTarget: r, eventStateKey: c, actionListId: l, groupIndex: s, isCarrier: u, origin: f, destination: p, immediate: g, verbose: I, continuous: b, parameterId: m, actionGroups: O, smoothing: _, restingValue: R, pluginInstance: v, pluginDuration: S, instanceDelay: A, skipMotion: L, skipToValue: N} = t.payload
                      , {actionTypeId: h} = i
                      , C = T(h)
                      , U = y(C, h)
                      , V = Object.keys(p).filter(e => null != p[e] && "string" != typeof p[e])
                      , {easing: G} = i.config;
                    return (0,
                    o.set)(e, a, {
                        id: a,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: f,
                        destination: p,
                        destinationKeys: V,
                        immediate: g,
                        verbose: I,
                        current: null,
                        actionItem: i,
                        actionTypeId: h,
                        eventId: d,
                        eventTarget: r,
                        eventStateKey: c,
                        actionListId: l,
                        groupIndex: s,
                        renderType: C,
                        isCarrier: u,
                        styleProp: U,
                        continuous: b,
                        parameterId: m,
                        actionGroups: O,
                        smoothing: _,
                        restingValue: R,
                        pluginInstance: v,
                        pluginDuration: S,
                        instanceDelay: A,
                        skipMotion: L,
                        skipToValue: N,
                        customEasingFn: Array.isArray(G) && 4 === G.length ? E(G) : void 0
                    })
                }
            case l:
                {
                    let {instanceId: a, time: n} = t.payload;
                    return (0,
                    o.mergeIn)(e, [a], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case s:
                {
                    let {instanceId: a} = t.payload;
                    if (!e[a])
                        return e;
                    let n = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let t = 0; t < o; t++) {
                        let o = i[t];
                        o !== a && (n[o] = e[o])
                    }
                    return n
                }
            case u:
                {
                    let a = e
                      , n = Object.keys(e)
                      , {length: i} = n;
                    for (let d = 0; d < i; d++) {
                        let i = n[d]
                          , r = e[i]
                          , c = r.continuous ? b : m;
                        a = (0,
                        o.set)(a, i, c(r, t))
                    }
                    return a
                }
            default:
                return e
            }
        }
    },
    1540: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixParameters", {
            enumerable: !0,
            get: function() {
                return d
            }
        });
        let {IX2_RAW_DATA_IMPORTED: n, IX2_SESSION_STOPPED: i, IX2_PARAMETER_CHANGED: o} = a(7087).IX2EngineActionTypes
          , d = (e={}, t) => {
            switch (t.type) {
            case n:
                return t.payload.ixParameters || {};
            case i:
                return {};
            case o:
                {
                    let {key: a, value: n} = t.payload;
                    return e[a] = n,
                    e
                }
            default:
                return e
            }
        }
    },
    7243: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let n = a(9516)
          , i = a(4609)
          , o = a(628)
          , d = a(5862)
          , r = a(9468)
          , c = a(7718)
          , l = a(1540)
          , {ixElements: s} = r.IX2ElementsReducer
          , u = (0,
        n.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: d.ixSession,
            ixElements: s,
            ixInstances: c.ixInstances,
            ixParameters: l.ixParameters
        })
    },
    628: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixRequest", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let n = a(7087)
          , i = a(1185)
          , {IX2_PREVIEW_REQUESTED: o, IX2_PLAYBACK_REQUESTED: d, IX2_STOP_REQUESTED: r, IX2_CLEAR_REQUESTED: c} = n.IX2EngineActionTypes
          , l = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }
          , s = Object.create(null, {
            [o]: {
                value: "preview"
            },
            [d]: {
                value: "playback"
            },
            [r]: {
                value: "stop"
            },
            [c]: {
                value: "clear"
            }
        })
          , u = (e=l, t) => {
            if (t.type in s) {
                let a = [s[t.type]];
                return (0,
                i.setIn)(e, [a], {
                    ...t.payload
                })
            }
            return e
        }
    },
    5862: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ixSession", {
            enumerable: !0,
            get: function() {
                return I
            }
        });
        let n = a(7087)
          , i = a(1185)
          , {IX2_SESSION_INITIALIZED: o, IX2_SESSION_STARTED: d, IX2_TEST_FRAME_RENDERED: r, IX2_SESSION_STOPPED: c, IX2_EVENT_LISTENER_ADDED: l, IX2_EVENT_STATE_CHANGED: s, IX2_ANIMATION_FRAME_CHANGED: u, IX2_ACTION_LIST_PLAYBACK_CHANGED: f, IX2_VIEWPORT_WIDTH_CHANGED: p, IX2_MEDIA_QUERIES_DEFINED: E} = n.IX2EngineActionTypes
          , g = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }
          , I = (e=g, t) => {
            switch (t.type) {
            case o:
                {
                    let {hasBoundaryNodes: a, reducedMotion: n} = t.payload;
                    return (0,
                    i.merge)(e, {
                        hasBoundaryNodes: a,
                        reducedMotion: n
                    })
                }
            case d:
                return (0,
                i.set)(e, "active", !0);
            case r:
                {
                    let {payload: {step: a=20}} = t;
                    return (0,
                    i.set)(e, "tick", e.tick + a)
                }
            case c:
                return g;
            case u:
                {
                    let {payload: {now: a}} = t;
                    return (0,
                    i.set)(e, "tick", a)
                }
            case l:
                {
                    let a = (0,
                    i.addLast)(e.eventListeners, t.payload);
                    return (0,
                    i.set)(e, "eventListeners", a)
                }
            case s:
                {
                    let {stateKey: a, newState: n} = t.payload;
                    return (0,
                    i.setIn)(e, ["eventState", a], n)
                }
            case f:
                {
                    let {actionListId: a, isPlaying: n} = t.payload;
                    return (0,
                    i.setIn)(e, ["playbackState", a], n)
                }
            case p:
                {
                    let {width: a, mediaQueries: n} = t.payload
                      , o = n.length
                      , d = null;
                    for (let e = 0; e < o; e++) {
                        let {key: t, min: i, max: o} = n[e];
                        if (a >= i && a <= o) {
                            d = t;
                            break
                        }
                    }
                    return (0,
                    i.merge)(e, {
                        viewportWidth: a,
                        mediaQueryKey: d
                    })
                }
            case E:
                return (0,
                i.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    },
    7377: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = {
            clearPlugin: function() {
                return s
            },
            createPluginInstance: function() {
                return c
            },
            getPluginConfig: function() {
                return i
            },
            getPluginDestination: function() {
                return r
            },
            getPluginDuration: function() {
                return o
            },
            getPluginOrigin: function() {
                return d
            },
            renderPlugin: function() {
                return l
            }
        };
        for (var n in a)
            Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
        let i = e => e.value
          , o = (e, t) => {
            if ("auto" !== t.config.duration)
                return null;
            let a = parseFloat(e.getAttribute("data-duration"));
            return a > 0 ? 1e3 * a : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
        }
          , d = e => e || {
            value: 0
        }
          , r = e => ({
            value: e.value
        })
          , c = e => {
            let t = window.Webflow.require("lottie");
            if (!t)
                return null;
            let a = t.createInstance(e);
            return a.stop(),
            a.setSubframe(!0),
            a
        }
          , l = (e, t, a) => {
            if (!e)
                return;
            let n = t[a.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
          , s = e => {
            let t = window.Webflow.require("lottie");
            t && t.createInstance(e).stop()
        }
    },
    2570: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = {
            clearPlugin: function() {
                return E
            },
            createPluginInstance: function() {
                return f
            },
            getPluginConfig: function() {
                return c
            },
            getPluginDestination: function() {
                return u
            },
            getPluginDuration: function() {
                return l
            },
            getPluginOrigin: function() {
                return s
            },
            renderPlugin: function() {
                return p
            }
        };
        for (var n in a)
            Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
        let i = "--wf-rive-fit"
          , o = "--wf-rive-alignment"
          , d = e => document.querySelector(`[data-w-id="${e}"]`)
          , r = () => window.Webflow.require("rive")
          , c = (e, t) => e.value.inputs[t]
          , l = () => null
          , s = (e, t) => {
            if (e)
                return e;
            let a = {}
              , {inputs: n={}} = t.config.value;
            for (let e in n)
                null == n[e] && (a[e] = 0);
            return a
        }
          , u = e => e.value.inputs ?? {}
          , f = (e, t) => {
            if ((t.config?.target?.selectorGuids || []).length > 0)
                return e;
            let a = t?.config?.target?.pluginElement;
            return a ? d(a) : null
        }
          , p = (e, {PLUGIN_RIVE: t}, a) => {
            let n = r();
            if (!n)
                return;
            let d = n.getInstance(e)
              , c = n.rive.StateMachineInputType
              , {name: l, inputs: s={}} = a.config.value || {};
            function u(e) {
                if (e.loaded)
                    a();
                else {
                    let t = () => {
                        a(),
                        e?.off("load", t)
                    }
                    ;
                    e?.on("load", t)
                }
                function a() {
                    let a = e.stateMachineInputs(l);
                    if (null != a) {
                        if (e.isPlaying || e.play(l, !1),
                        i in s || o in s) {
                            let t = e.layout
                              , a = s[i] ?? t.fit
                              , n = s[o] ?? t.alignment;
                            (a !== t.fit || n !== t.alignment) && (e.layout = t.copyWith({
                                fit: a,
                                alignment: n
                            }))
                        }
                        for (let e in s) {
                            if (e === i || e === o)
                                continue;
                            let n = a.find(t => t.name === e);
                            if (null != n)
                                switch (n.type) {
                                case c.Boolean:
                                    null != s[e] && (n.value = !!s[e]);
                                    break;
                                case c.Number:
                                    {
                                        let a = t[e];
                                        null != a && (n.value = a);
                                        break
                                    }
                                case c.Trigger:
                                    s[e] && n.fire()
                                }
                        }
                    }
                }
            }
            d?.rive ? u(d.rive) : n.setLoadHandler(e, u)
        }
          , E = (e, t) => null
    },
    2866: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = {
            clearPlugin: function() {
                return E
            },
            createPluginInstance: function() {
                return f
            },
            getPluginConfig: function() {
                return r
            },
            getPluginDestination: function() {
                return u
            },
            getPluginDuration: function() {
                return c
            },
            getPluginOrigin: function() {
                return s
            },
            renderPlugin: function() {
                return p
            }
        };
        for (var n in a)
            Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
        let i = e => document.querySelector(`[data-w-id="${e}"]`)
          , o = () => window.Webflow.require("spline")
          , d = (e, t) => e.filter(e => !t.includes(e))
          , r = (e, t) => e.value[t]
          , c = () => null
          , l = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , s = (e, t) => {
            let a = Object.keys(t.config.value);
            if (e) {
                let t = d(a, Object.keys(e));
                return t.length ? t.reduce( (e, t) => (e[t] = l[t],
                e), e) : e
            }
            return a.reduce( (e, t) => (e[t] = l[t],
            e), {})
        }
          , u = e => e.value
          , f = (e, t) => {
            let a = t?.config?.target?.pluginElement;
            return a ? i(a) : null
        }
          , p = (e, t, a) => {
            let n = o();
            if (!n)
                return;
            let i = n.getInstance(e)
              , d = a.config.target.objectId
              , r = e => {
                if (!e)
                    throw Error("Invalid spline app passed to renderSpline");
                let a = d && e.findObjectById(d);
                if (!a)
                    return;
                let {PLUGIN_SPLINE: n} = t;
                null != n.positionX && (a.position.x = n.positionX),
                null != n.positionY && (a.position.y = n.positionY),
                null != n.positionZ && (a.position.z = n.positionZ),
                null != n.rotationX && (a.rotation.x = n.rotationX),
                null != n.rotationY && (a.rotation.y = n.rotationY),
                null != n.rotationZ && (a.rotation.z = n.rotationZ),
                null != n.scaleX && (a.scale.x = n.scaleX),
                null != n.scaleY && (a.scale.y = n.scaleY),
                null != n.scaleZ && (a.scale.z = n.scaleZ)
            }
            ;
            i ? r(i.spline) : n.setLoadHandler(e, r)
        }
          , E = () => null
    },
    1407: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            clearPlugin: function() {
                return p
            },
            createPluginInstance: function() {
                return s
            },
            getPluginConfig: function() {
                return d
            },
            getPluginDestination: function() {
                return l
            },
            getPluginDuration: function() {
                return r
            },
            getPluginOrigin: function() {
                return c
            },
            renderPlugin: function() {
                return f
            }
        };
        for (var i in n)
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
        let o = a(380)
          , d = (e, t) => e.value[t]
          , r = () => null
          , c = (e, t) => {
            if (e)
                return e;
            let a = t.config.value
              , n = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(n);
            return null != a.size ? {
                size: parseInt(i, 10)
            } : "%" === a.unit || "-" === a.unit ? {
                size: parseFloat(i)
            } : null != a.red && null != a.green && null != a.blue ? (0,
            o.normalizeColor)(i) : void 0
        }
          , l = e => e.value
          , s = () => null
          , u = {
            color: {
                match: ({red: e, green: t, blue: a, alpha: n}) => [e, t, a, n].every(e => null != e),
                getValue: ({red: e, green: t, blue: a, alpha: n}) => `rgba(${e}, ${t}, ${a}, ${n})`
            },
            size: {
                match: ({size: e}) => null != e,
                getValue: ({size: e}, t) => "-" === t ? e : `${e}${t}`
            }
        }
          , f = (e, t, a) => {
            let {target: {objectId: n}, value: {unit: i}} = a.config
              , o = t.PLUGIN_VARIABLE
              , d = Object.values(u).find(e => e.match(o, i));
            d && document.documentElement.style.setProperty(n, d.getValue(o, i))
        }
          , p = (e, t) => {
            let a = t.config.target.objectId;
            document.documentElement.style.removeProperty(a)
        }
    },
    3690: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = a(7087)
          , i = l(a(7377))
          , o = l(a(2866))
          , d = l(a(2570))
          , r = l(a(1407));
        function c(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , a = new WeakMap;
            return (c = function(e) {
                return e ? a : t
            }
            )(e)
        }
        function l(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var a = c(t);
            if (a && a.has(e))
                return a.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                }
            return n.default = e,
            a && a.set(e, n),
            n
        }
        let s = new Map([[n.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...i
        }], [n.ActionTypeConsts.PLUGIN_SPLINE, {
            ...o
        }], [n.ActionTypeConsts.PLUGIN_RIVE, {
            ...d
        }], [n.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...r
        }]])
    },
    8023: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = {
            IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                return m
            },
            IX2_ANIMATION_FRAME_CHANGED: function() {
                return E
            },
            IX2_CLEAR_REQUESTED: function() {
                return u
            },
            IX2_ELEMENT_STATE_CHANGED: function() {
                return b
            },
            IX2_EVENT_LISTENER_ADDED: function() {
                return f
            },
            IX2_EVENT_STATE_CHANGED: function() {
                return p
            },
            IX2_INSTANCE_ADDED: function() {
                return I
            },
            IX2_INSTANCE_REMOVED: function() {
                return y
            },
            IX2_INSTANCE_STARTED: function() {
                return T
            },
            IX2_MEDIA_QUERIES_DEFINED: function() {
                return _
            },
            IX2_PARAMETER_CHANGED: function() {
                return g
            },
            IX2_PLAYBACK_REQUESTED: function() {
                return l
            },
            IX2_PREVIEW_REQUESTED: function() {
                return c
            },
            IX2_RAW_DATA_IMPORTED: function() {
                return i
            },
            IX2_SESSION_INITIALIZED: function() {
                return o
            },
            IX2_SESSION_STARTED: function() {
                return d
            },
            IX2_SESSION_STOPPED: function() {
                return r
            },
            IX2_STOP_REQUESTED: function() {
                return s
            },
            IX2_TEST_FRAME_RENDERED: function() {
                return R
            },
            IX2_VIEWPORT_WIDTH_CHANGED: function() {
                return O
            }
        };
        for (var n in a)
            Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
        let i = "IX2_RAW_DATA_IMPORTED"
          , o = "IX2_SESSION_INITIALIZED"
          , d = "IX2_SESSION_STARTED"
          , r = "IX2_SESSION_STOPPED"
          , c = "IX2_PREVIEW_REQUESTED"
          , l = "IX2_PLAYBACK_REQUESTED"
          , s = "IX2_STOP_REQUESTED"
          , u = "IX2_CLEAR_REQUESTED"
          , f = "IX2_EVENT_LISTENER_ADDED"
          , p = "IX2_EVENT_STATE_CHANGED"
          , E = "IX2_ANIMATION_FRAME_CHANGED"
          , g = "IX2_PARAMETER_CHANGED"
          , I = "IX2_INSTANCE_ADDED"
          , T = "IX2_INSTANCE_STARTED"
          , y = "IX2_INSTANCE_REMOVED"
          , b = "IX2_ELEMENT_STATE_CHANGED"
          , m = "IX2_ACTION_LIST_PLAYBACK_CHANGED"
          , O = "IX2_VIEWPORT_WIDTH_CHANGED"
          , _ = "IX2_MEDIA_QUERIES_DEFINED"
          , R = "IX2_TEST_FRAME_RENDERED"
    },
    2686: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = {
            ABSTRACT_NODE: function() {
                return et
            },
            AUTO: function() {
                return z
            },
            BACKGROUND: function() {
                return k
            },
            BACKGROUND_COLOR: function() {
                return x
            },
            BAR_DELIMITER: function() {
                return Y
            },
            BORDER_COLOR: function() {
                return F
            },
            BOUNDARY_SELECTOR: function() {
                return c
            },
            CHILDREN: function() {
                return j
            },
            COLON_DELIMITER: function() {
                return W
            },
            COLOR: function() {
                return D
            },
            COMMA_DELIMITER: function() {
                return Q
            },
            CONFIG_UNIT: function() {
                return I
            },
            CONFIG_VALUE: function() {
                return f
            },
            CONFIG_X_UNIT: function() {
                return p
            },
            CONFIG_X_VALUE: function() {
                return l
            },
            CONFIG_Y_UNIT: function() {
                return E
            },
            CONFIG_Y_VALUE: function() {
                return s
            },
            CONFIG_Z_UNIT: function() {
                return g
            },
            CONFIG_Z_VALUE: function() {
                return u
            },
            DISPLAY: function() {
                return X
            },
            FILTER: function() {
                return G
            },
            FLEX: function() {
                return B
            },
            FONT_VARIATION_SETTINGS: function() {
                return M
            },
            HEIGHT: function() {
                return P
            },
            HTML_ELEMENT: function() {
                return J
            },
            IMMEDIATE_CHILDREN: function() {
                return q
            },
            IX2_ID_DELIMITER: function() {
                return i
            },
            OPACITY: function() {
                return V
            },
            PARENT: function() {
                return Z
            },
            PLAIN_OBJECT: function() {
                return ee
            },
            PRESERVE_3D: function() {
                return K
            },
            RENDER_GENERAL: function() {
                return en
            },
            RENDER_PLUGIN: function() {
                return eo
            },
            RENDER_STYLE: function() {
                return ei
            },
            RENDER_TRANSFORM: function() {
                return ea
            },
            ROTATE_X: function() {
                return A
            },
            ROTATE_Y: function() {
                return L
            },
            ROTATE_Z: function() {
                return N
            },
            SCALE_3D: function() {
                return S
            },
            SCALE_X: function() {
                return _
            },
            SCALE_Y: function() {
                return R
            },
            SCALE_Z: function() {
                return v
            },
            SIBLINGS: function() {
                return $
            },
            SKEW: function() {
                return h
            },
            SKEW_X: function() {
                return C
            },
            SKEW_Y: function() {
                return U
            },
            TRANSFORM: function() {
                return T
            },
            TRANSLATE_3D: function() {
                return O
            },
            TRANSLATE_X: function() {
                return y
            },
            TRANSLATE_Y: function() {
                return b
            },
            TRANSLATE_Z: function() {
                return m
            },
            WF_PAGE: function() {
                return o
            },
            WIDTH: function() {
                return w
            },
            WILL_CHANGE: function() {
                return H
            },
            W_MOD_IX: function() {
                return r
            },
            W_MOD_JS: function() {
                return d
            }
        };
        for (var n in a)
            Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
        let i = "|"
          , o = "data-wf-page"
          , d = "w-mod-js"
          , r = "w-mod-ix"
          , c = ".w-dyn-item"
          , l = "xValue"
          , s = "yValue"
          , u = "zValue"
          , f = "value"
          , p = "xUnit"
          , E = "yUnit"
          , g = "zUnit"
          , I = "unit"
          , T = "transform"
          , y = "translateX"
          , b = "translateY"
          , m = "translateZ"
          , O = "translate3d"
          , _ = "scaleX"
          , R = "scaleY"
          , v = "scaleZ"
          , S = "scale3d"
          , A = "rotateX"
          , L = "rotateY"
          , N = "rotateZ"
          , h = "skew"
          , C = "skewX"
          , U = "skewY"
          , V = "opacity"
          , G = "filter"
          , M = "font-variation-settings"
          , w = "width"
          , P = "height"
          , x = "backgroundColor"
          , k = "background"
          , F = "borderColor"
          , D = "color"
          , X = "display"
          , B = "flex"
          , H = "willChange"
          , z = "AUTO"
          , Q = ","
          , W = ":"
          , Y = "|"
          , j = "CHILDREN"
          , q = "IMMEDIATE_CHILDREN"
          , $ = "SIBLINGS"
          , Z = "PARENT"
          , K = "preserve-3d"
          , J = "HTML_ELEMENT"
          , ee = "PLAIN_OBJECT"
          , et = "ABSTRACT_NODE"
          , ea = "RENDER_TRANSFORM"
          , en = "RENDER_GENERAL"
          , ei = "RENDER_STYLE"
          , eo = "RENDER_PLUGIN"
    },
    262: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = {
            ActionAppliesTo: function() {
                return o
            },
            ActionTypeConsts: function() {
                return i
            }
        };
        for (var n in a)
            Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
        let i = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }
          , o = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    },
    7087: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            ActionTypeConsts: function() {
                return d.ActionTypeConsts
            },
            IX2EngineActionTypes: function() {
                return r
            },
            IX2EngineConstants: function() {
                return c
            },
            QuickEffectIds: function() {
                return o.QuickEffectIds
            }
        };
        for (var i in n)
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
        let o = l(a(1833), t)
          , d = l(a(262), t);
        l(a(8704), t),
        l(a(3213), t);
        let r = u(a(8023))
          , c = u(a(2686));
        function l(e, t) {
            return Object.keys(e).forEach(function(a) {
                "default" === a || Object.prototype.hasOwnProperty.call(t, a) || Object.defineProperty(t, a, {
                    enumerable: !0,
                    get: function() {
                        return e[a]
                    }
                })
            }),
            e
        }
        function s(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , a = new WeakMap;
            return (s = function(e) {
                return e ? a : t
            }
            )(e)
        }
        function u(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var a = s(t);
            if (a && a.has(e))
                return a.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                }
            return n.default = e,
            a && a.set(e, n),
            n
        }
    },
    3213: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ReducedMotionTypes", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let {TRANSFORM_MOVE: n, TRANSFORM_SCALE: i, TRANSFORM_ROTATE: o, TRANSFORM_SKEW: d, STYLE_SIZE: r, STYLE_FILTER: c, STYLE_FONT_VARIATION: l} = a(262).ActionTypeConsts
          , s = {
            [n]: !0,
            [i]: !0,
            [o]: !0,
            [d]: !0,
            [r]: !0,
            [c]: !0,
            [l]: !0
        }
    },
    1833: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = {
            EventAppliesTo: function() {
                return o
            },
            EventBasedOn: function() {
                return d
            },
            EventContinuousMouseAxes: function() {
                return r
            },
            EventLimitAffectedElements: function() {
                return c
            },
            EventTypeConsts: function() {
                return i
            },
            QuickEffectDirectionConsts: function() {
                return s
            },
            QuickEffectIds: function() {
                return l
            }
        };
        for (var n in a)
            Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
        let i = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }
          , o = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }
          , d = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }
          , r = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }
          , c = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }
          , l = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }
          , s = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    },
    8704: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "InteractionTypeConsts", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let a = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    },
    380: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let a = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function n(e) {
            let t, n, i, o = 1, d = e.replace(/\s/g, "").toLowerCase(), r = ("string" == typeof a[d] ? a[d].toLowerCase() : null) || d;
            if (r.startsWith("#")) {
                let e = r.substring(1);
                3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16),
                n = parseInt(e[1] + e[1], 16),
                i = parseInt(e[2] + e[2], 16),
                4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16),
                n = parseInt(e.substring(2, 4), 16),
                i = parseInt(e.substring(4, 6), 16),
                8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
            } else if (r.startsWith("rgba")) {
                let e = r.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(e[0], 10),
                n = parseInt(e[1], 10),
                i = parseInt(e[2], 10),
                o = parseFloat(e[3])
            } else if (r.startsWith("rgb")) {
                let e = r.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(e[0], 10),
                n = parseInt(e[1], 10),
                i = parseInt(e[2], 10)
            } else if (r.startsWith("hsla")) {
                let e, a, d, c = r.match(/hsla\(([^)]+)\)/)[1].split(","), l = parseFloat(c[0]), s = parseFloat(c[1].replace("%", "")) / 100, u = parseFloat(c[2].replace("%", "")) / 100;
                o = parseFloat(c[3]);
                let f = (1 - Math.abs(2 * u - 1)) * s
                  , p = f * (1 - Math.abs(l / 60 % 2 - 1))
                  , E = u - f / 2;
                l >= 0 && l < 60 ? (e = f,
                a = p,
                d = 0) : l >= 60 && l < 120 ? (e = p,
                a = f,
                d = 0) : l >= 120 && l < 180 ? (e = 0,
                a = f,
                d = p) : l >= 180 && l < 240 ? (e = 0,
                a = p,
                d = f) : l >= 240 && l < 300 ? (e = p,
                a = 0,
                d = f) : (e = f,
                a = 0,
                d = p),
                t = Math.round((e + E) * 255),
                n = Math.round((a + E) * 255),
                i = Math.round((d + E) * 255)
            } else if (r.startsWith("hsl")) {
                let e, a, o, d = r.match(/hsl\(([^)]+)\)/)[1].split(","), c = parseFloat(d[0]), l = parseFloat(d[1].replace("%", "")) / 100, s = parseFloat(d[2].replace("%", "")) / 100, u = (1 - Math.abs(2 * s - 1)) * l, f = u * (1 - Math.abs(c / 60 % 2 - 1)), p = s - u / 2;
                c >= 0 && c < 60 ? (e = u,
                a = f,
                o = 0) : c >= 60 && c < 120 ? (e = f,
                a = u,
                o = 0) : c >= 120 && c < 180 ? (e = 0,
                a = u,
                o = f) : c >= 180 && c < 240 ? (e = 0,
                a = f,
                o = u) : c >= 240 && c < 300 ? (e = f,
                a = 0,
                o = u) : (e = u,
                a = 0,
                o = f),
                t = Math.round((e + p) * 255),
                n = Math.round((a + p) * 255),
                i = Math.round((o + p) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i))
                throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: n,
                blue: i,
                alpha: o
            }
        }
    },
    9468: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            IX2BrowserSupport: function() {
                return o
            },
            IX2EasingUtils: function() {
                return r
            },
            IX2Easings: function() {
                return d
            },
            IX2ElementsReducer: function() {
                return c
            },
            IX2VanillaPlugins: function() {
                return l
            },
            IX2VanillaUtils: function() {
                return s
            }
        };
        for (var i in n)
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
        let o = f(a(2662))
          , d = f(a(8686))
          , r = f(a(3767))
          , c = f(a(5861))
          , l = f(a(1799))
          , s = f(a(4124));
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , a = new WeakMap;
            return (u = function(e) {
                return e ? a : t
            }
            )(e)
        }
        function f(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var a = u(t);
            if (a && a.has(e))
                return a.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                }
            return n.default = e,
            a && a.set(e, n),
            n
        }
    },
    2662: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, i = {
            ELEMENT_MATCHES: function() {
                return l
            },
            FLEX_PREFIXED: function() {
                return s
            },
            IS_BROWSER_ENV: function() {
                return r
            },
            TRANSFORM_PREFIXED: function() {
                return u
            },
            TRANSFORM_STYLE_PREFIXED: function() {
                return p
            },
            withBrowser: function() {
                return c
            }
        };
        for (var o in i)
            Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
        let d = (n = a(9777)) && n.__esModule ? n : {
            default: n
        }
          , r = "undefined" != typeof window
          , c = (e, t) => r ? e() : t
          , l = c( () => (0,
        d.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype))
          , s = c( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
            try {
                let {length: a} = t;
                for (let n = 0; n < a; n++) {
                    let a = t[n];
                    if (e.style.display = a,
                    e.style.display === a)
                        return a
                }
                return ""
            } catch (e) {
                return ""
            }
        }
        , "flex")
          , u = c( () => {
            let e = document.createElement("i");
            if (null == e.style.transform) {
                let t = ["Webkit", "Moz", "ms"]
                  , {length: a} = t;
                for (let n = 0; n < a; n++) {
                    let a = t[n] + "Transform";
                    if (void 0 !== e.style[a])
                        return a
                }
            }
            return "transform"
        }
        , "transform")
          , f = u.split("transform")[0]
          , p = f ? f + "TransformStyle" : "transformStyle"
    },
    3767: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, i = {
            applyEasing: function() {
                return u
            },
            createBezierEasing: function() {
                return s
            },
            optimizeFloat: function() {
                return l
            }
        };
        for (var o in i)
            Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
        let d = function(e, t) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var a = c(t);
            if (a && a.has(e))
                return a.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                }
            return n.default = e,
            a && a.set(e, n),
            n
        }(a(8686))
          , r = (n = a(1361)) && n.__esModule ? n : {
            default: n
        };
        function c(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , a = new WeakMap;
            return (c = function(e) {
                return e ? a : t
            }
            )(e)
        }
        function l(e, t=5, a=10) {
            let n = Math.pow(a, t)
              , i = Number(Math.round(e * n) / n);
            return Math.abs(i) > 1e-4 ? i : 0
        }
        function s(e) {
            return (0,
            r.default)(...e)
        }
        function u(e, t, a) {
            return 0 === t ? 0 : 1 === t ? 1 : a ? l(t > 0 ? a(t) : t) : l(t > 0 && e && d[e] ? d[e](t) : t)
        }
    },
    8686: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, i = {
            bounce: function() {
                return B
            },
            bouncePast: function() {
                return H
            },
            ease: function() {
                return r
            },
            easeIn: function() {
                return c
            },
            easeInOut: function() {
                return s
            },
            easeOut: function() {
                return l
            },
            inBack: function() {
                return G
            },
            inCirc: function() {
                return h
            },
            inCubic: function() {
                return E
            },
            inElastic: function() {
                return P
            },
            inExpo: function() {
                return A
            },
            inOutBack: function() {
                return w
            },
            inOutCirc: function() {
                return U
            },
            inOutCubic: function() {
                return I
            },
            inOutElastic: function() {
                return k
            },
            inOutExpo: function() {
                return N
            },
            inOutQuad: function() {
                return p
            },
            inOutQuart: function() {
                return b
            },
            inOutQuint: function() {
                return _
            },
            inOutSine: function() {
                return S
            },
            inQuad: function() {
                return u
            },
            inQuart: function() {
                return T
            },
            inQuint: function() {
                return m
            },
            inSine: function() {
                return R
            },
            outBack: function() {
                return M
            },
            outBounce: function() {
                return V
            },
            outCirc: function() {
                return C
            },
            outCubic: function() {
                return g
            },
            outElastic: function() {
                return x
            },
            outExpo: function() {
                return L
            },
            outQuad: function() {
                return f
            },
            outQuart: function() {
                return y
            },
            outQuint: function() {
                return O
            },
            outSine: function() {
                return v
            },
            swingFrom: function() {
                return D
            },
            swingFromTo: function() {
                return F
            },
            swingTo: function() {
                return X
            }
        };
        for (var o in i)
            Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
        let d = (n = a(1361)) && n.__esModule ? n : {
            default: n
        }
          , r = (0,
        d.default)(.25, .1, .25, 1)
          , c = (0,
        d.default)(.42, 0, 1, 1)
          , l = (0,
        d.default)(0, 0, .58, 1)
          , s = (0,
        d.default)(.42, 0, .58, 1);
        function u(e) {
            return Math.pow(e, 2)
        }
        function f(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }
        function p(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }
        function E(e) {
            return Math.pow(e, 3)
        }
        function g(e) {
            return Math.pow(e - 1, 3) + 1
        }
        function I(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }
        function T(e) {
            return Math.pow(e, 4)
        }
        function y(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }
        function b(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }
        function m(e) {
            return Math.pow(e, 5)
        }
        function O(e) {
            return Math.pow(e - 1, 5) + 1
        }
        function _(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }
        function R(e) {
            return -Math.cos(Math.PI / 2 * e) + 1
        }
        function v(e) {
            return Math.sin(Math.PI / 2 * e)
        }
        function S(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        function A(e) {
            return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
        }
        function L(e) {
            return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
        }
        function N(e) {
            return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }
        function h(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }
        function C(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }
        function U(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        function V(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function G(e) {
            return e * e * (2.70158 * e - 1.70158)
        }
        function M(e) {
            return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
        }
        function w(e) {
            let t = 1.70158;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function P(e) {
            let t = 1.70158
              , a = 0
              , n = 1;
            return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3),
            n < 1 ? (n = 1,
            t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n),
            -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a)))
        }
        function x(e) {
            let t = 1.70158
              , a = 0
              , n = 1;
            return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3),
            n < 1 ? (n = 1,
            t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n),
            n * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / a) + 1)
        }
        function k(e) {
            let t = 1.70158
              , a = 0
              , n = 1;
            return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (a || (a = .3 * 1.5),
            n < 1 ? (n = 1,
            t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n),
            e < 1) ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a) * .5 + 1
        }
        function F(e) {
            let t = 1.70158;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function D(e) {
            return e * e * (2.70158 * e - 1.70158)
        }
        function X(e) {
            return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
        }
        function B(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function H(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    },
    1799: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            clearPlugin: function() {
                return g
            },
            createPluginInstance: function() {
                return p
            },
            getPluginConfig: function() {
                return l
            },
            getPluginDestination: function() {
                return f
            },
            getPluginDuration: function() {
                return u
            },
            getPluginOrigin: function() {
                return s
            },
            isPluginType: function() {
                return r
            },
            renderPlugin: function() {
                return E
            }
        };
        for (var i in n)
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
        let o = a(2662)
          , d = a(3690);
        function r(e) {
            return d.pluginMethodMap.has(e)
        }
        let c = e => t => {
            if (!o.IS_BROWSER_ENV)
                return () => null;
            let a = d.pluginMethodMap.get(t);
            if (!a)
                throw Error(`IX2 no plugin configured for: ${t}`);
            let n = a[e];
            if (!n)
                throw Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
          , l = c("getPluginConfig")
          , s = c("getPluginOrigin")
          , u = c("getPluginDuration")
          , f = c("getPluginDestination")
          , p = c("createPluginInstance")
          , E = c("renderPlugin")
          , g = c("clearPlugin")
    },
    4124: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            cleanupHTMLElement: function() {
                return eQ
            },
            clearAllStyles: function() {
                return eB
            },
            clearObjectCache: function() {
                return eu
            },
            getActionListProgress: function() {
                return eq
            },
            getAffectedElements: function() {
                return em
            },
            getComputedStyle: function() {
                return eO
            },
            getDestinationValues: function() {
                return eh
            },
            getElementId: function() {
                return eg
            },
            getInstanceId: function() {
                return ep
            },
            getInstanceOrigin: function() {
                return eS
            },
            getItemConfigByKey: function() {
                return eN
            },
            getMaxDurationItemIndex: function() {
                return ej
            },
            getNamespacedParameterId: function() {
                return eK
            },
            getRenderType: function() {
                return eC
            },
            getStyleProp: function() {
                return eU
            },
            mediaQueriesEqual: function() {
                return e0
            },
            observeStore: function() {
                return ey
            },
            reduceListToGroup: function() {
                return e$
            },
            reifyState: function() {
                return eI
            },
            renderHTMLElement: function() {
                return eV
            },
            shallowEqual: function() {
                return s.default
            },
            shouldAllowMediaQuery: function() {
                return eJ
            },
            shouldNamespaceEventParameter: function() {
                return eZ
            },
            stringifyTarget: function() {
                return e1
            }
        };
        for (var i in n)
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
        let o = g(a(4075))
          , d = g(a(1455))
          , r = g(a(5720))
          , c = a(1185)
          , l = a(7087)
          , s = g(a(7164))
          , u = a(3767)
          , f = a(380)
          , p = a(1799)
          , E = a(2662);
        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        let {BACKGROUND: I, TRANSFORM: T, TRANSLATE_3D: y, SCALE_3D: b, ROTATE_X: m, ROTATE_Y: O, ROTATE_Z: _, SKEW: R, PRESERVE_3D: v, FLEX: S, OPACITY: A, FILTER: L, FONT_VARIATION_SETTINGS: N, WIDTH: h, HEIGHT: C, BACKGROUND_COLOR: U, BORDER_COLOR: V, COLOR: G, CHILDREN: M, IMMEDIATE_CHILDREN: w, SIBLINGS: P, PARENT: x, DISPLAY: k, WILL_CHANGE: F, AUTO: D, COMMA_DELIMITER: X, COLON_DELIMITER: B, BAR_DELIMITER: H, RENDER_TRANSFORM: z, RENDER_GENERAL: Q, RENDER_STYLE: W, RENDER_PLUGIN: Y} = l.IX2EngineConstants
          , {TRANSFORM_MOVE: j, TRANSFORM_SCALE: q, TRANSFORM_ROTATE: $, TRANSFORM_SKEW: Z, STYLE_OPACITY: K, STYLE_FILTER: J, STYLE_FONT_VARIATION: ee, STYLE_SIZE: et, STYLE_BACKGROUND_COLOR: ea, STYLE_BORDER: en, STYLE_TEXT_COLOR: ei, GENERAL_DISPLAY: eo, OBJECT_VALUE: ed} = l.ActionTypeConsts
          , er = e => e.trim()
          , ec = Object.freeze({
            [ea]: U,
            [en]: V,
            [ei]: G
        })
          , el = Object.freeze({
            [E.TRANSFORM_PREFIXED]: T,
            [U]: I,
            [A]: A,
            [L]: L,
            [h]: h,
            [C]: C,
            [N]: N
        })
          , es = new Map;
        function eu() {
            es.clear()
        }
        let ef = 1;
        function ep() {
            return "i" + ef++
        }
        let eE = 1;
        function eg(e, t) {
            for (let a in e) {
                let n = e[a];
                if (n && n.ref === t)
                    return n.id
            }
            return "e" + eE++
        }
        function eI({events: e, actionLists: t, site: a}={}) {
            let n = (0,
            d.default)(e, (e, t) => {
                let {eventTypeId: a} = t;
                return e[a] || (e[a] = {}),
                e[a][t.id] = t,
                e
            }
            , {})
              , i = a && a.mediaQueries
              , o = [];
            return i ? o = i.map(e => e.key) : (i = [],
            console.warn("IX2 missing mediaQueries in site data")),
            {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: i,
                    mediaQueryKeys: o
                }
            }
        }
        let eT = (e, t) => e === t;
        function ey({store: e, select: t, onChange: a, comparator: n=eT}) {
            let {getState: i, subscribe: o} = e
              , d = o(function() {
                let o = t(i());
                if (null == o)
                    return void d();
                n(o, r) || a(r = o, e)
            })
              , r = t(i());
            return d
        }
        function eb(e) {
            let t = typeof e;
            if ("string" === t)
                return {
                    id: e
                };
            if (null != e && "object" === t) {
                let {id: t, objectId: a, selector: n, selectorGuids: i, appliesTo: o, useEventTarget: d} = e;
                return {
                    id: t,
                    objectId: a,
                    selector: n,
                    selectorGuids: i,
                    appliesTo: o,
                    useEventTarget: d
                }
            }
            return {}
        }
        function em({config: e, event: t, eventTarget: a, elementRoot: n, elementApi: i}) {
            let o, d, r;
            if (!i)
                throw Error("IX2 missing elementApi");
            let {targets: c} = e;
            if (Array.isArray(c) && c.length > 0)
                return c.reduce( (e, o) => e.concat(em({
                    config: {
                        target: o
                    },
                    event: t,
                    eventTarget: a,
                    elementRoot: n,
                    elementApi: i
                })), []);
            let {getValidDocument: s, getQuerySelector: u, queryDocument: f, getChildElements: p, getSiblingElements: g, matchSelector: I, elementContains: T, isSiblingNode: y} = i
              , {target: b} = e;
            if (!b)
                return [];
            let {id: m, objectId: O, selector: _, selectorGuids: R, appliesTo: v, useEventTarget: S} = eb(b);
            if (O)
                return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
            if (v === l.EventAppliesTo.PAGE) {
                let e = s(m);
                return e ? [e] : []
            }
            let A = (t?.action?.config?.affectedElements ?? {})[m || _] || {}
              , L = !!(A.id || A.selector)
              , N = t && u(eb(t.target));
            if (L ? (o = A.limitAffectedElements,
            d = N,
            r = u(A)) : d = r = u({
                id: m,
                selector: _,
                selectorGuids: R
            }),
            t && S) {
                let e = a && (r || !0 === S) ? [a] : f(N);
                if (r) {
                    if (S === x)
                        return f(r).filter(t => e.some(e => T(t, e)));
                    if (S === M)
                        return f(r).filter(t => e.some(e => T(e, t)));
                    if (S === P)
                        return f(r).filter(t => e.some(e => y(e, t)))
                }
                return e
            }
            return null == d || null == r ? [] : E.IS_BROWSER_ENV && n ? f(r).filter(e => n.contains(e)) : o === M ? f(d, r) : o === w ? p(f(d)).filter(I(r)) : o === P ? g(f(d)).filter(I(r)) : f(r)
        }
        function eO({element: e, actionItem: t}) {
            if (!E.IS_BROWSER_ENV)
                return {};
            let {actionTypeId: a} = t;
            switch (a) {
            case et:
            case ea:
            case en:
            case ei:
            case eo:
                return window.getComputedStyle(e);
            default:
                return {}
            }
        }
        let e_ = /px/
          , eR = (e, t) => t.reduce( (e, t) => (null == e[t.type] && (e[t.type] = eM[t.type]),
        e), e || {})
          , ev = (e, t) => t.reduce( (e, t) => (null == e[t.type] && (e[t.type] = ew[t.type] || t.defaultValue || 0),
        e), e || {});
        function eS(e, t={}, a={}, n, i) {
            let {getStyle: d} = i
              , {actionTypeId: r} = n;
            if ((0,
            p.isPluginType)(r))
                return (0,
                p.getPluginOrigin)(r)(t[r], n);
            switch (n.actionTypeId) {
            case j:
            case q:
            case $:
            case Z:
                return t[n.actionTypeId] || eG[n.actionTypeId];
            case J:
                return eR(t[n.actionTypeId], n.config.filters);
            case ee:
                return ev(t[n.actionTypeId], n.config.fontVariations);
            case K:
                return {
                    value: (0,
                    o.default)(parseFloat(d(e, A)), 1)
                };
            case et:
                {
                    let t, i = d(e, h), r = d(e, C);
                    return {
                        widthValue: n.config.widthUnit === D ? e_.test(i) ? parseFloat(i) : parseFloat(a.width) : (0,
                        o.default)(parseFloat(i), parseFloat(a.width)),
                        heightValue: n.config.heightUnit === D ? e_.test(r) ? parseFloat(r) : parseFloat(a.height) : (0,
                        o.default)(parseFloat(r), parseFloat(a.height))
                    }
                }
            case ea:
            case en:
            case ei:
                return function({element: e, actionTypeId: t, computedStyle: a, getStyle: n}) {
                    let i = ec[t]
                      , d = n(e, i)
                      , r = (function(e, t) {
                        let a = e.exec(t);
                        return a ? a[1] : ""
                    }
                    )(eF, ek.test(d) ? d : a[i]).split(X);
                    return {
                        rValue: (0,
                        o.default)(parseInt(r[0], 10), 255),
                        gValue: (0,
                        o.default)(parseInt(r[1], 10), 255),
                        bValue: (0,
                        o.default)(parseInt(r[2], 10), 255),
                        aValue: (0,
                        o.default)(parseFloat(r[3]), 1)
                    }
                }({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: a,
                    getStyle: d
                });
            case eo:
                return {
                    value: (0,
                    o.default)(d(e, k), a.display)
                };
            case ed:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
            }
        }
        let eA = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , eL = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , eN = (e, t, a) => {
            if ((0,
            p.isPluginType)(e))
                return (0,
                p.getPluginConfig)(e)(a, t);
            switch (e) {
            case J:
                {
                    let e = (0,
                    r.default)(a.filters, ({type: e}) => e === t);
                    return e ? e.value : 0
                }
            case ee:
                {
                    let e = (0,
                    r.default)(a.fontVariations, ({type: e}) => e === t);
                    return e ? e.value : 0
                }
            default:
                return a[t]
            }
        }
        ;
        function eh({element: e, actionItem: t, elementApi: a}) {
            if ((0,
            p.isPluginType)(t.actionTypeId))
                return (0,
                p.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
            case j:
            case q:
            case $:
            case Z:
                {
                    let {xValue: e, yValue: a, zValue: n} = t.config;
                    return {
                        xValue: e,
                        yValue: a,
                        zValue: n
                    }
                }
            case et:
                {
                    let {getStyle: n, setStyle: i, getProperty: o} = a
                      , {widthUnit: d, heightUnit: r} = t.config
                      , {widthValue: c, heightValue: l} = t.config;
                    if (!E.IS_BROWSER_ENV)
                        return {
                            widthValue: c,
                            heightValue: l
                        };
                    if (d === D) {
                        let t = n(e, h);
                        i(e, h, ""),
                        c = o(e, "offsetWidth"),
                        i(e, h, t)
                    }
                    if (r === D) {
                        let t = n(e, C);
                        i(e, C, ""),
                        l = o(e, "offsetHeight"),
                        i(e, C, t)
                    }
                    return {
                        widthValue: c,
                        heightValue: l
                    }
                }
            case ea:
            case en:
            case ei:
                {
                    let {rValue: n, gValue: i, bValue: o, aValue: d, globalSwatchId: r} = t.config;
                    if (r && r.startsWith("--")) {
                        let {getStyle: t} = a
                          , n = t(e, r)
                          , i = (0,
                        f.normalizeColor)(n);
                        return {
                            rValue: i.red,
                            gValue: i.green,
                            bValue: i.blue,
                            aValue: i.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: d
                    }
                }
            case J:
                return t.config.filters.reduce(eA, {});
            case ee:
                return t.config.fontVariations.reduce(eL, {});
            default:
                {
                    let {value: e} = t.config;
                    return {
                        value: e
                    }
                }
            }
        }
        function eC(e) {
            return /^TRANSFORM_/.test(e) ? z : /^STYLE_/.test(e) ? W : /^GENERAL_/.test(e) ? Q : /^PLUGIN_/.test(e) ? Y : void 0
        }
        function eU(e, t) {
            return e === W ? t.replace("STYLE_", "").toLowerCase() : null
        }
        function eV(e, t, a, n, i, o, r, c, l) {
            switch (c) {
            case z:
                var s = e
                  , u = t
                  , f = a
                  , g = i
                  , I = r;
                let T = ex.map(e => {
                    let t = eG[e]
                      , {xValue: a=t.xValue, yValue: n=t.yValue, zValue: i=t.zValue, xUnit: o="", yUnit: d="", zUnit: r=""} = u[e] || {};
                    switch (e) {
                    case j:
                        return `${y}(${a}${o}, ${n}${d}, ${i}${r})`;
                    case q:
                        return `${b}(${a}${o}, ${n}${d}, ${i}${r})`;
                    case $:
                        return `${m}(${a}${o}) ${O}(${n}${d}) ${_}(${i}${r})`;
                    case Z:
                        return `${R}(${a}${o}, ${n}${d})`;
                    default:
                        return ""
                    }
                }
                ).join(" ")
                  , {setStyle: A} = I;
                eD(s, E.TRANSFORM_PREFIXED, I),
                A(s, E.TRANSFORM_PREFIXED, T),
                function({actionTypeId: e}, {xValue: t, yValue: a, zValue: n}) {
                    return e === j && void 0 !== n || e === q && void 0 !== n || e === $ && (void 0 !== t || void 0 !== a)
                }(g, f) && A(s, E.TRANSFORM_STYLE_PREFIXED, v);
                return;
            case W:
                return function(e, t, a, n, i, o) {
                    let {setStyle: r} = o;
                    switch (n.actionTypeId) {
                    case et:
                        {
                            let {widthUnit: t="", heightUnit: i=""} = n.config
                              , {widthValue: d, heightValue: c} = a;
                            void 0 !== d && (t === D && (t = "px"),
                            eD(e, h, o),
                            r(e, h, d + t)),
                            void 0 !== c && (i === D && (i = "px"),
                            eD(e, C, o),
                            r(e, C, c + i));
                            break
                        }
                    case J:
                        var c = n.config;
                        let l = (0,
                        d.default)(a, (e, t, a) => `${e} ${a}(${t}${eP(a, c)})`, "")
                          , {setStyle: s} = o;
                        eD(e, L, o),
                        s(e, L, l);
                        break;
                    case ee:
                        n.config;
                        let u = (0,
                        d.default)(a, (e, t, a) => (e.push(`"${a}" ${t}`),
                        e), []).join(", ")
                          , {setStyle: f} = o;
                        eD(e, N, o),
                        f(e, N, u);
                        break;
                    case ea:
                    case en:
                    case ei:
                        {
                            let t = ec[n.actionTypeId]
                              , i = Math.round(a.rValue)
                              , d = Math.round(a.gValue)
                              , c = Math.round(a.bValue)
                              , l = a.aValue;
                            eD(e, t, o),
                            r(e, t, l >= 1 ? `rgb(${i},${d},${c})` : `rgba(${i},${d},${c},${l})`);
                            break
                        }
                    default:
                        {
                            let {unit: t=""} = n.config;
                            eD(e, i, o),
                            r(e, i, a.value + t)
                        }
                    }
                }(e, 0, a, i, o, r);
            case Q:
                var U = e
                  , V = i
                  , G = r;
                let {setStyle: M} = G;
                if (V.actionTypeId === eo) {
                    let {value: e} = V.config;
                    M(U, k, e === S && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
                }
                return;
            case Y:
                {
                    let {actionTypeId: e} = i;
                    if ((0,
                    p.isPluginType)(e))
                        return (0,
                        p.renderPlugin)(e)(l, t, i)
                }
            }
        }
        let eG = {
            [j]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [q]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [$]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Z]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }
          , eM = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        })
          , ew = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        })
          , eP = (e, t) => {
            let a = (0,
            r.default)(t.filters, ({type: t}) => t === e);
            if (a && a.unit)
                return a.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
          , ex = Object.keys(eG)
          , ek = /^rgb/
          , eF = RegExp("rgba?\\(([^)]+)\\)");
        function eD(e, t, a) {
            if (!E.IS_BROWSER_ENV)
                return;
            let n = el[t];
            if (!n)
                return;
            let {getStyle: i, setStyle: o} = a
              , d = i(e, F);
            if (!d)
                return void o(e, F, n);
            let r = d.split(X).map(er);
            -1 === r.indexOf(n) && o(e, F, r.concat(n).join(X))
        }
        function eX(e, t, a) {
            if (!E.IS_BROWSER_ENV)
                return;
            let n = el[t];
            if (!n)
                return;
            let {getStyle: i, setStyle: o} = a
              , d = i(e, F);
            d && -1 !== d.indexOf(n) && o(e, F, d.split(X).map(er).filter(e => e !== n).join(X))
        }
        function eB({store: e, elementApi: t}) {
            let {ixData: a} = e.getState()
              , {events: n={}, actionLists: i={}} = a;
            Object.keys(n).forEach(e => {
                let a = n[e]
                  , {config: o} = a.action
                  , {actionListId: d} = o
                  , r = i[d];
                r && eH({
                    actionList: r,
                    event: a,
                    elementApi: t
                })
            }
            ),
            Object.keys(i).forEach(e => {
                eH({
                    actionList: i[e],
                    elementApi: t
                })
            }
            )
        }
        function eH({actionList: e={}, event: t, elementApi: a}) {
            let {actionItemGroups: n, continuousParameterGroups: i} = e;
            n && n.forEach(e => {
                ez({
                    actionGroup: e,
                    event: t,
                    elementApi: a
                })
            }
            ),
            i && i.forEach(e => {
                let {continuousActionGroups: n} = e;
                n.forEach(e => {
                    ez({
                        actionGroup: e,
                        event: t,
                        elementApi: a
                    })
                }
                )
            }
            )
        }
        function ez({actionGroup: e, event: t, elementApi: a}) {
            let {actionItems: n} = e;
            n.forEach(e => {
                let n, {actionTypeId: i, config: o} = e;
                n = (0,
                p.isPluginType)(i) ? t => (0,
                p.clearPlugin)(i)(t, e) : eW({
                    effect: eY,
                    actionTypeId: i,
                    elementApi: a
                }),
                em({
                    config: o,
                    event: t,
                    elementApi: a
                }).forEach(n)
            }
            )
        }
        function eQ(e, t, a) {
            let {setStyle: n, getStyle: i} = a
              , {actionTypeId: o} = t;
            if (o === et) {
                let {config: a} = t;
                a.widthUnit === D && n(e, h, ""),
                a.heightUnit === D && n(e, C, "")
            }
            i(e, F) && eW({
                effect: eX,
                actionTypeId: o,
                elementApi: a
            })(e)
        }
        let eW = ({effect: e, actionTypeId: t, elementApi: a}) => n => {
            switch (t) {
            case j:
            case q:
            case $:
            case Z:
                e(n, E.TRANSFORM_PREFIXED, a);
                break;
            case J:
                e(n, L, a);
                break;
            case ee:
                e(n, N, a);
                break;
            case K:
                e(n, A, a);
                break;
            case et:
                e(n, h, a),
                e(n, C, a);
                break;
            case ea:
            case en:
            case ei:
                e(n, ec[t], a);
                break;
            case eo:
                e(n, k, a)
            }
        }
        ;
        function eY(e, t, a) {
            let {setStyle: n} = a;
            eX(e, t, a),
            n(e, t, ""),
            t === E.TRANSFORM_PREFIXED && n(e, E.TRANSFORM_STYLE_PREFIXED, "")
        }
        function ej(e) {
            let t = 0
              , a = 0;
            return e.forEach( (e, n) => {
                let {config: i} = e
                  , o = i.delay + i.duration;
                o >= t && (t = o,
                a = n)
            }
            ),
            a
        }
        function eq(e, t) {
            let {actionItemGroups: a, useFirstGroupAsInitialState: n} = e
              , {actionItem: i, verboseTimeElapsed: o=0} = t
              , d = 0
              , r = 0;
            return a.forEach( (e, t) => {
                if (n && 0 === t)
                    return;
                let {actionItems: a} = e
                  , c = a[ej(a)]
                  , {config: l, actionTypeId: s} = c;
                i.id === c.id && (r = d + o);
                let u = eC(s) === Q ? 0 : l.duration;
                d += l.delay + u
            }
            ),
            d > 0 ? (0,
            u.optimizeFloat)(r / d) : 0
        }
        function e$({actionList: e, actionItemId: t, rawData: a}) {
            let {actionItemGroups: n, continuousParameterGroups: i} = e
              , o = []
              , d = e => (o.push((0,
            c.mergeIn)(e, ["config"], {
                delay: 0,
                duration: 0
            })),
            e.id === t);
            return n && n.some( ({actionItems: e}) => e.some(d)),
            i && i.some(e => {
                let {continuousActionGroups: t} = e;
                return t.some( ({actionItems: e}) => e.some(d))
            }
            ),
            (0,
            c.setIn)(a, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: o
                    }]
                }
            })
        }
        function eZ(e, {basedOn: t}) {
            return e === l.EventTypeConsts.SCROLLING_IN_VIEW && (t === l.EventBasedOn.ELEMENT || null == t) || e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT
        }
        function eK(e, t) {
            return e + B + t
        }
        function eJ(e, t) {
            return null == t || -1 !== e.indexOf(t)
        }
        function e0(e, t) {
            return (0,
            s.default)(e && e.sort(), t && t.sort())
        }
        function e1(e) {
            if ("string" == typeof e)
                return e;
            if (e.pluginElement && e.objectId)
                return e.pluginElement + H + e.objectId;
            if (e.objectId)
                return e.objectId;
            let {id: t="", selector: a="", useEventTarget: n=""} = e;
            return t + H + a + H + n
        }
    },
    7164: function(e, t) {
        "use strict";
        function a(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = function(e, t) {
            if (a(e, t))
                return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                return !1;
            let n = Object.keys(e)
              , i = Object.keys(t);
            if (n.length !== i.length)
                return !1;
            for (let i = 0; i < n.length; i++)
                if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]]))
                    return !1;
            return !0
        }
    },
    5861: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            createElementState: function() {
                return R
            },
            ixElements: function() {
                return _
            },
            mergeActionState: function() {
                return v
            }
        };
        for (var i in n)
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
        let o = a(1185)
          , d = a(7087)
          , {HTML_ELEMENT: r, PLAIN_OBJECT: c, ABSTRACT_NODE: l, CONFIG_X_VALUE: s, CONFIG_Y_VALUE: u, CONFIG_Z_VALUE: f, CONFIG_VALUE: p, CONFIG_X_UNIT: E, CONFIG_Y_UNIT: g, CONFIG_Z_UNIT: I, CONFIG_UNIT: T} = d.IX2EngineConstants
          , {IX2_SESSION_STOPPED: y, IX2_INSTANCE_ADDED: b, IX2_ELEMENT_STATE_CHANGED: m} = d.IX2EngineActionTypes
          , O = {}
          , _ = (e=O, t={}) => {
            switch (t.type) {
            case y:
                return O;
            case b:
                {
                    let {elementId: a, element: n, origin: i, actionItem: d, refType: r} = t.payload
                      , {actionTypeId: c} = d
                      , l = e;
                    return (0,
                    o.getIn)(l, [a, n]) !== n && (l = R(l, n, r, a, d)),
                    v(l, a, c, i, d)
                }
            case m:
                {
                    let {elementId: a, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return v(e, a, n, i, o)
                }
            default:
                return e
            }
        }
        ;
        function R(e, t, a, n, i) {
            let d = a === c ? (0,
            o.getIn)(i, ["config", "target", "objectId"]) : null;
            return (0,
            o.mergeIn)(e, [n], {
                id: n,
                ref: t,
                refId: d,
                refType: a
            })
        }
        function v(e, t, a, n, i) {
            let d = function(e) {
                let {config: t} = e;
                return S.reduce( (e, a) => {
                    let n = a[0]
                      , i = a[1]
                      , o = t[n]
                      , d = t[i];
                    return null != o && null != d && (e[i] = d),
                    e
                }
                , {})
            }(i);
            return (0,
            o.mergeIn)(e, [t, "refState", a], n, d)
        }
        let S = [[s, E], [u, g], [f, I], [p, T]]
    },
    3721: function() {
        Webflow.require("ix2").init({
            events: {
                "e-2": {
                    id: "e-2",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "DROPDOWN_OPEN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-2",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-11"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "6aec4199-658d-1d42-3a9a-12d1e30d9f3f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "6aec4199-658d-1d42-3a9a-12d1e30d9f3f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960c56e7ab
                },
                "e-7": {
                    id: "e-7",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "DROPDOWN_OPEN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-4",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-12"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".faq_dropdown",
                        originalId: "67dbefab1e772b3d395e7330|0fb26e68-337d-faa2-453b-07e145a574b0",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".faq_dropdown",
                        originalId: "67dbefab1e772b3d395e7330|0fb26e68-337d-faa2-453b-07e145a574b0",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x195d4a290dc
                },
                "e-11": {
                    id: "e-11",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "DROPDOWN_CLOSE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-3",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-210"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "6aec4199-658d-1d42-3a9a-12d1e30d9f3f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "6aec4199-658d-1d42-3a9a-12d1e30d9f3f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1960c56e7ab
                },
                "e-12": {
                    id: "e-12",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "DROPDOWN_CLOSE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-5",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-7"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".faq_dropdown",
                        originalId: "67dbefab1e772b3d395e7330|0fb26e68-337d-faa2-453b-07e145a574b0",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".faq_dropdown",
                        originalId: "67dbefab1e772b3d395e7330|0fb26e68-337d-faa2-453b-07e145a574b0",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x195d4a290dc
                },
                "e-15": {
                    id: "e-15",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-16"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".heading_block",
                        originalId: "67f35087f2c378bfbd44b7f1|783a2096-5fa8-a8f7-a84e-c874dd8c982f",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".heading_block",
                        originalId: "67f35087f2c378bfbd44b7f1|783a2096-5fa8-a8f7-a84e-c874dd8c982f",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 5,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196850a197a
                },
                "e-25": {
                    id: "e-25",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-11",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-26"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".curve_text_image",
                        originalId: "67f35087f2c378bfbd44b7f1|4215d8f9-605a-d9e9-359b-b99e462a5c28",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".curve_text_image",
                        originalId: "67f35087f2c378bfbd44b7f1|4215d8f9-605a-d9e9-359b-b99e462a5c28",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !0,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196853227a0
                },
                "e-39": {
                    id: "e-39",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-40"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "95706b2b-f1d4-a124-cf3c-cc268bb3367f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "95706b2b-f1d4-a124-cf3c-cc268bb3367f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -20,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19685eb46c1
                },
                "e-46": {
                    id: "e-46",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-47"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503|e5ca6b04-1d89-e506-c067-3cb780984224",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503|e5ca6b04-1d89-e506-c067-3cb780984224",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196869ec226
                },
                "e-48": {
                    id: "e-48",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GROW_BIG_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "growBigIn",
                            autoStopEventId: "e-49"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503|1b37dd78-4266-db84-5f2c-983469fdabe6",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503|1b37dd78-4266-db84-5f2c-983469fdabe6",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: 600,
                        direction: null,
                        effectIn: !0
                    },
                    createdOn: 0x19686a22f45
                },
                "e-56": {
                    id: "e-56",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-20",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-57"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".team_card_svg_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|e4bbf712-58e8-7598-e17d-e8a1cce4f3fe",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".team_card_svg_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|e4bbf712-58e8-7598-e17d-e8a1cce4f3fe",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19686a95799
                },
                "e-57": {
                    id: "e-57",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_SECOND_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-21",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-56"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".team_card_svg_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|e4bbf712-58e8-7598-e17d-e8a1cce4f3fe",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".team_card_svg_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|e4bbf712-58e8-7598-e17d-e8a1cce4f3fe",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19686a9579a
                },
                "e-58": {
                    id: "e-58",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-18",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-336"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".team_card_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|c1bd8870-2718-f241-8cf2-d9a9c9564afd",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".team_card_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|c1bd8870-2718-f241-8cf2-d9a9c9564afd",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19686b1eb1c
                },
                "e-59": {
                    id: "e-59",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-19",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-335"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".team_card_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|c1bd8870-2718-f241-8cf2-d9a9c9564afd",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".team_card_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|c1bd8870-2718-f241-8cf2-d9a9c9564afd",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19686b1eb1d
                },
                "e-60": {
                    id: "e-60",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-61"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "6bf55019-e7ab-11db-301c-b9041d311cea",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "6bf55019-e7ab-11db-301c-b9041d311cea",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -30,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19695e53e19
                },
                "e-62": {
                    id: "e-62",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-23",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-63"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "2bde72a4-fed8-26da-2497-121d44d6d3a2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "2bde72a4-fed8-26da-2497-121d44d6d3a2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !0,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19695e5aa37
                },
                "e-64": {
                    id: "e-64",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-23",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-65"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "2bde72a4-fed8-26da-2497-121d44d6d3b9",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "2bde72a4-fed8-26da-2497-121d44d6d3b9",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !0,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19695f4ae10
                },
                "e-66": {
                    id: "e-66",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-67"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "093c53dd-30fb-e757-1758-bad17b62e8db",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "093c53dd-30fb-e757-1758-bad17b62e8db",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19695fae14b
                },
                "e-68": {
                    id: "e-68",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-24",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-69"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "07391727-7537-b5e9-5ff7-c85a51181cb1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "07391727-7537-b5e9-5ff7-c85a51181cb1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196960f9c6e
                },
                "e-70": {
                    id: "e-70",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_CLICK",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-25",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-71"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "07391727-7537-b5e9-5ff7-c85a51181cc8",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "07391727-7537-b5e9-5ff7-c85a51181cc8",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969617af4c
                },
                "e-78": {
                    id: "e-78",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-61",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-79"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".case_study_card_wrapper",
                        originalId: "680f79629dbf84a9c7ec6dca|c21900d5-5ab4-1adc-f9a6-2cca2ed2560a",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".case_study_card_wrapper",
                        originalId: "680f79629dbf84a9c7ec6dca|c21900d5-5ab4-1adc-f9a6-2cca2ed2560a",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696415651
                },
                "e-79": {
                    id: "e-79",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-62",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-78"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".case_study_card_wrapper",
                        originalId: "680f79629dbf84a9c7ec6dca|c21900d5-5ab4-1adc-f9a6-2cca2ed2560a",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".case_study_card_wrapper",
                        originalId: "680f79629dbf84a9c7ec6dca|c21900d5-5ab4-1adc-f9a6-2cca2ed2560a",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696415652
                },
                "e-80": {
                    id: "e-80",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-12",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680f79629dbf84a9c7ec6dca",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f79629dbf84a9c7ec6dca",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-12-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-12-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x196965a6b16
                },
                "e-81": {
                    id: "e-81",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-29",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-82"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680f79629dbf84a9c7ec6dca|7f07d235-df29-ed9c-2452-2476a9c25289",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f79629dbf84a9c7ec6dca|7f07d235-df29-ed9c-2452-2476a9c25289",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196966144b1
                },
                "e-82": {
                    id: "e-82",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-30",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-81"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680f79629dbf84a9c7ec6dca|7f07d235-df29-ed9c-2452-2476a9c25289",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f79629dbf84a9c7ec6dca|7f07d235-df29-ed9c-2452-2476a9c25289",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196966144b2
                },
                "e-83": {
                    id: "e-83",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-12",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680fc0f1b400704ba09da101",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc0f1b400704ba09da101",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-12-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-12-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x1969684dc70
                },
                "e-86": {
                    id: "e-86",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-87"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fc0f1b400704ba09da101|558911fb-f6fe-6493-ad25-698a25d7cbe1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc0f1b400704ba09da101|558911fb-f6fe-6493-ad25-698a25d7cbe1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969686bd2a
                },
                "e-90": {
                    id: "e-90",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-16",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-91"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "494a3b7a-6a5b-e09c-ddda-b44abd05bba5",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "494a3b7a-6a5b-e09c-ddda-b44abd05bba5",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 5,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969687d846
                },
                "e-92": {
                    id: "e-92",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-11",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-93"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fc7edd22b34f40ec83c9c|f48f0c0d-e266-e39c-56f2-04fa5bec4d0b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc7edd22b34f40ec83c9c|f48f0c0d-e266-e39c-56f2-04fa5bec4d0b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !0,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196968d7e8d
                },
                "e-94": {
                    id: "e-94",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-12",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680fc7edd22b34f40ec83c9c",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc7edd22b34f40ec83c9c",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-12-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-12-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x196968f9e74
                },
                "e-95": {
                    id: "e-95",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-31",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-96"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "491d780d-a003-11da-6f29-73b8ced7c707",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "491d780d-a003-11da-6f29-73b8ced7c707",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969691ca90
                },
                "e-96": {
                    id: "e-96",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-32",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-95"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "491d780d-a003-11da-6f29-73b8ced7c707",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "491d780d-a003-11da-6f29-73b8ced7c707",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969691ca91
                },
                "e-97": {
                    id: "e-97",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-29",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-98"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "491d780d-a003-11da-6f29-73b8ced7c708",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "491d780d-a003-11da-6f29-73b8ced7c708",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696930a7e
                },
                "e-98": {
                    id: "e-98",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-30",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-97"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "491d780d-a003-11da-6f29-73b8ced7c708",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "491d780d-a003-11da-6f29-73b8ced7c708",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696930a7f
                },
                "e-99": {
                    id: "e-99",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-100"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fc7edd22b34f40ec83c9c|9290fb36-7b4f-3b77-e495-0153393587ab",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc7edd22b34f40ec83c9c|9290fb36-7b4f-3b77-e495-0153393587ab",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969694034d
                },
                "e-101": {
                    id: "e-101",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-102"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "681053e98acafbe1be58522b|a44942f5-d16b-b3c7-81be-79646deae4e2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681053e98acafbe1be58522b|a44942f5-d16b-b3c7-81be-79646deae4e2",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969694bfa4
                },
                "e-103": {
                    id: "e-103",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-33",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-141"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "681053e98acafbe1be58522b|6225e078-0623-1135-bcf8-7d3818c599e8",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681053e98acafbe1be58522b|6225e078-0623-1135-bcf8-7d3818c599e8",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 5,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969695103b
                },
                "e-107": {
                    id: "e-107",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-108"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2|64020359-909a-c5ba-9643-ad106ee010d1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2|64020359-909a-c5ba-9643-ad106ee010d1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196969e24d4
                },
                "e-109": {
                    id: "e-109",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-110"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2|8c576f6c-80d4-a550-57f5-a98b6b1f3fb9",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2|8c576f6c-80d4-a550-57f5-a98b6b1f3fb9",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196969eb4e3
                },
                "e-111": {
                    id: "e-111",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-112"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2|716e444f-b28e-920e-296a-38a470d2f71b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2|716e444f-b28e-920e-296a-38a470d2f71b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196969ee744
                },
                "e-115": {
                    id: "e-115",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-11",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-116"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2|41cc223c-c29c-057e-07e4-05a49b802bfc",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2|41cc223c-c29c-057e-07e4-05a49b802bfc",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !0,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696a03beb
                },
                "e-117": {
                    id: "e-117",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-12",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-12-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-12-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19696a05884
                },
                "e-118": {
                    id: "e-118",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-119"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680f90da74abd0c0680df63b|642fd3f3-0bf3-db9b-b82c-f6b7b62f16e6",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f90da74abd0c0680df63b|642fd3f3-0bf3-db9b-b82c-f6b7b62f16e6",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696a1ee90
                },
                "e-120": {
                    id: "e-120",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-121"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680f90da74abd0c0680df63b|7f6d7e7b-233d-7629-5e5f-943e7bf08c14",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f90da74abd0c0680df63b|7f6d7e7b-233d-7629-5e5f-943e7bf08c14",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 5,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696a25f0d
                },
                "e-122": {
                    id: "e-122",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-123"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680f90da74abd0c0680df63b|70bfd732-0a3f-163e-ff68-708e6d402f47",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f90da74abd0c0680df63b|70bfd732-0a3f-163e-ff68-708e6d402f47",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696a281c0
                },
                "e-124": {
                    id: "e-124",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-125"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680f90da74abd0c0680df63b|034b94ab-2b21-d65e-cbb4-783eeba37d18",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f90da74abd0c0680df63b|034b94ab-2b21-d65e-cbb4-783eeba37d18",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696a29fa5
                },
                "e-126": {
                    id: "e-126",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-127"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680f90da74abd0c0680df63b|b2bb5b49-fb16-da5d-1a76-dedbc0285248",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f90da74abd0c0680df63b|b2bb5b49-fb16-da5d-1a76-dedbc0285248",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696a2d55d
                },
                "e-128": {
                    id: "e-128",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-129"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f3780db8c47423f80a19f9|0f19bd3d-a89a-09a1-f83c-418ad9cdcabf",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f3780db8c47423f80a19f9|0f19bd3d-a89a-09a1-f83c-418ad9cdcabf",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696a4285e
                },
                "e-132": {
                    id: "e-132",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-133"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680f79629dbf84a9c7ec6dca|ed2e5e53-8fbf-386f-4789-ed84cd12477b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f79629dbf84a9c7ec6dca|ed2e5e53-8fbf-386f-4789-ed84cd12477b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19696aabdce
                },
                "e-134": {
                    id: "e-134",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-135"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "6816672c8039935425744bb6|20ab7760-8069-fdf8-3aa0-1f96609b20c4",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "6816672c8039935425744bb6|20ab7760-8069-fdf8-3aa0-1f96609b20c4",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19697831312
                },
                "e-136": {
                    id: "e-136",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-137"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "681668f7d11930a2caa87502|4f820c37-ae32-86d4-d7e6-d8b1aa408d6b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681668f7d11930a2caa87502|4f820c37-ae32-86d4-d7e6-d8b1aa408d6b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196978a0f92
                },
                "e-138": {
                    id: "e-138",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-139"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "681669b3da9e7d282a584f31|e6ee0a8a-12ce-3615-1c9f-b15026e04edb",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681669b3da9e7d282a584f31|e6ee0a8a-12ce-3615-1c9f-b15026e04edb",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196978cf7c9
                },
                "e-142": {
                    id: "e-142",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-8",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-143"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "681053e98acafbe1be58522b|852a381c-c23a-d35b-ef94-db0f76057628",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681053e98acafbe1be58522b|852a381c-c23a-d35b-ef94-db0f76057628",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19699b5aa34
                },
                "e-143": {
                    id: "e-143",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-77",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-142"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "681053e98acafbe1be58522b|852a381c-c23a-d35b-ef94-db0f76057628",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681053e98acafbe1be58522b|852a381c-c23a-d35b-ef94-db0f76057628",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19699b5aa35
                },
                "e-144": {
                    id: "e-144",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "NAVBAR_OPEN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-34",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-145"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "07391727-7537-b5e9-5ff7-c85a51181c8f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "07391727-7537-b5e9-5ff7-c85a51181c8f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969a0618dd
                },
                "e-145": {
                    id: "e-145",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "NAVBAR_CLOSE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-35",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-144"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "07391727-7537-b5e9-5ff7-c85a51181c8f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "07391727-7537-b5e9-5ff7-c85a51181c8f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969a0618de
                },
                "e-146": {
                    id: "e-146",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-36",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-147"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fc7edd22b34f40ec83c9c|75dbbc0e-dde4-9ee4-18a7-3c5b4a6125b6",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc7edd22b34f40ec83c9c|75dbbc0e-dde4-9ee4-18a7-3c5b4a6125b6",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969e73b390
                },
                "e-152": {
                    id: "e-152",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-36",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-153"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680f79629dbf84a9c7ec6dca|d2eccfaa-20c9-ad61-07c3-a1bbb089d66f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f79629dbf84a9c7ec6dca|d2eccfaa-20c9-ad61-07c3-a1bbb089d66f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969e7a7206
                },
                "e-156": {
                    id: "e-156",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-16",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-157"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".team_card_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|c1bd8870-2718-f241-8cf2-d9a9c9564afd",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".team_card_wrapper",
                        originalId: "67f4a2f303a0a99b7405f503|c1bd8870-2718-f241-8cf2-d9a9c9564afd",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969e7c20d3
                },
                "e-160": {
                    id: "e-160",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-161"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680f90da74abd0c0680df63b|8204daa2-1dda-b11f-4892-afee8db27dcb",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f90da74abd0c0680df63b|8204daa2-1dda-b11f-4892-afee8db27dcb",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: 400,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1969e7eef13
                },
                "e-164": {
                    id: "e-164",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-16",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-165"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        selector: ".testimonial_card__wrapper",
                        originalId: "622c8a79-f83f-39ab-9bc2-820950afc86f",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".testimonial_card__wrapper",
                        originalId: "622c8a79-f83f-39ab-9bc2-820950afc86f",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969e9b427c
                },
                "e-166": {
                    id: "e-166",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-16",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-167"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        id: "9d49aa2b-8fc9-8299-e737-9e95849f3d5a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "9d49aa2b-8fc9-8299-e737-9e95849f3d5a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969e9b6c85
                },
                "e-168": {
                    id: "e-168",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-16",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-169"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        id: "6fa4b15e-999f-29e2-d6b1-3d15545a7e44",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "6fa4b15e-999f-29e2-d6b1-3d15545a7e44",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969e9b94d1
                },
                "e-170": {
                    id: "e-170",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-16",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-171"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        id: "a6d38d17-770b-081c-5995-4a77548397d1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "a6d38d17-770b-081c-5995-4a77548397d1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969e9bc0a1
                },
                "e-172": {
                    id: "e-172",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-16",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-173"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        id: "460adc0d-b74a-3329-6581-393d573f930e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "460adc0d-b74a-3329-6581-393d573f930e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969e9be346
                },
                "e-176": {
                    id: "e-176",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-16",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-177"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        selector: ".before_after_case_study_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|f0b4b762-02b8-57af-b9f3-4014c8e96680",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".before_after_case_study_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|f0b4b762-02b8-57af-b9f3-4014c8e96680",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1969f0bb0b3
                },
                "e-178": {
                    id: "e-178",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-13",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-416"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".service_card_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|9305485b-ff8b-4228-1698-ce4579cf5fa9",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".service_card_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|9305485b-ff8b-4228-1698-ce4579cf5fa9",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196c3fc492d
                },
                "e-179": {
                    id: "e-179",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-14",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-178"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".service_card_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|9305485b-ff8b-4228-1698-ce4579cf5fa9",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".service_card_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|9305485b-ff8b-4228-1698-ce4579cf5fa9",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196c3fc492d
                },
                "e-183": {
                    id: "e-183",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-40",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".features_wrapper",
                        originalId: "95706b2b-f1d4-a124-cf3c-cc268bb33685",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".features_wrapper",
                        originalId: "95706b2b-f1d4-a124-cf3c-cc268bb33685",
                        appliesTo: "CLASS"
                    }],
                    config: [{
                        continuousParameterGroupId: "a-40-p",
                        smoothing: 90,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x196c4442676
                },
                "e-197": {
                    id: "e-197",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-16",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-198"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        selector: ".features_wrapper",
                        originalId: "95706b2b-f1d4-a124-cf3c-cc268bb33685",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".features_wrapper",
                        originalId: "95706b2b-f1d4-a124-cf3c-cc268bb33685",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196c7d87fc0
                },
                "e-199": {
                    id: "e-199",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "SLIDE_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "slideInBottom",
                            autoStopEventId: "e-200"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503|57923523-3587-8547-5671-48cda53ebc0d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503|57923523-3587-8547-5671-48cda53ebc0d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 500,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x196e6c42fa1
                },
                "e-207": {
                    id: "e-207",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-208"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503|8544e638-fcae-a979-670f-84c87c597770",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503|8544e638-fcae-a979-670f-84c87c597770",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x196f7829081
                },
                "e-209": {
                    id: "e-209",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-43",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-210"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".animated_counter",
                        originalId: "67f4a2f303a0a99b7405f503|cca93ab1-a6c4-c869-fb63-9852911857f8",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".animated_counter",
                        originalId: "67f4a2f303a0a99b7405f503|cca93ab1-a6c4-c869-fb63-9852911857f8",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1939c12d2a0
                },
                "e-211": {
                    id: "e-211",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-44",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-212"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".counter_heading",
                        originalId: "67f4a2f303a0a99b7405f503|cca93ab1-a6c4-c869-fb63-985291185829",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".counter_heading",
                        originalId: "67f4a2f303a0a99b7405f503|cca93ab1-a6c4-c869-fb63-985291185829",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19468e5b105
                },
                "e-215": {
                    id: "e-215",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-45",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|29bba252-b970-d4e8-1ccb-dd4100522aea",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|29bba252-b970-d4e8-1ccb-dd4100522aea",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-45-p",
                        smoothing: 95,
                        startsEntering: !1,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x1970600dc31
                },
                "e-216": {
                    id: "e-216",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-6",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-217"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|9f3deefd-e38e-e428-73c1-6064bf330f1d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|9f3deefd-e38e-e428-73c1-6064bf330f1d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197066d8851
                },
                "e-218": {
                    id: "e-218",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-46",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|52fc17bb-aebb-0f5e-063e-3396af21bfc9",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|52fc17bb-aebb-0f5e-063e-3396af21bfc9",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-46-p",
                        smoothing: 90,
                        startsEntering: !0,
                        addStartOffset: !0,
                        addOffsetValue: 20,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x197066dcd05
                },
                "e-219": {
                    id: "e-219",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-47",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|741f9f9c-df19-2cf4-436c-fe5596db06a3",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|741f9f9c-df19-2cf4-436c-fe5596db06a3",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-47-p",
                        smoothing: 90,
                        startsEntering: !1,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x197067a7788
                },
                "e-220": {
                    id: "e-220",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "DROPDOWN_OPEN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-48",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-221"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".approach_dropdown_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|678faa9b-2630-95f4-8dc5-64dcce8c3305",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".approach_dropdown_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|678faa9b-2630-95f4-8dc5-64dcce8c3305",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197071ab081
                },
                "e-221": {
                    id: "e-221",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "DROPDOWN_CLOSE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-49",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-220"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".approach_dropdown_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|678faa9b-2630-95f4-8dc5-64dcce8c3305",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".approach_dropdown_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|678faa9b-2630-95f4-8dc5-64dcce8c3305",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197071ab083
                },
                "e-223": {
                    id: "e-223",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-51",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-224"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".approach_dropdown_block_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|8d219370-c80c-4bbe-703d-288ef66dafbe",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".approach_dropdown_block_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|8d219370-c80c-4bbe-703d-288ef66dafbe",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19707230da1
                },
                "e-224": {
                    id: "e-224",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-70",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-223"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".approach_dropdown_block_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|8d219370-c80c-4bbe-703d-288ef66dafbe",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".approach_dropdown_block_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|8d219370-c80c-4bbe-703d-288ef66dafbe",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19707230da3
                },
                "e-226": {
                    id: "e-226",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-54",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "2a1960e7-76b7-0488-3c89-8c73b831c80f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "2a1960e7-76b7-0488-3c89-8c73b831c80f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-54-p",
                        smoothing: 90,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x1970750af0c
                },
                "e-227": {
                    id: "e-227",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-53",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "04df1a9b-639b-d1ff-f1fb-ff30c9def34f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "04df1a9b-639b-d1ff-f1fb-ff30c9def34f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-53-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "ELEMENT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-53-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "ELEMENT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19707611cda
                },
                "e-228": {
                    id: "e-228",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-55",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "7e91c8a4-43dd-4ede-a989-2b5acd449b5c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "7e91c8a4-43dd-4ede-a989-2b5acd449b5c",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-55-p",
                        smoothing: 90,
                        startsEntering: !1,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x197077449d6
                },
                "e-229": {
                    id: "e-229",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-56",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503|abb7b171-12f5-e638-71ed-83b5f729cab1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503|abb7b171-12f5-e638-71ed-83b5f729cab1",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-56-p",
                        smoothing: 90,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x19707976133
                },
                "e-231": {
                    id: "e-231",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-58",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503|cabd0aef-22f3-e803-1579-e503adfcb177",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503|cabd0aef-22f3-e803-1579-e503adfcb177",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-58-p",
                        smoothing: 90,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x19707ca8038
                },
                "e-234": {
                    id: "e-234",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-50",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-50-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-50-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x1970b10aa2f
                },
                "e-235": {
                    id: "e-235",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-59",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".testimonial_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|55682f9e-0613-0010-8b53-654f7f8ea6af",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".testimonial_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|55682f9e-0613-0010-8b53-654f7f8ea6af",
                        appliesTo: "CLASS"
                    }],
                    config: [{
                        continuousParameterGroupId: "a-59-p",
                        smoothing: 90,
                        startsEntering: !0,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x1970bb3a28d
                },
                "e-236": {
                    id: "e-236",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-237"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".approach_dropdown_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|678faa9b-2630-95f4-8dc5-64dcce8c3305",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".approach_dropdown_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|678faa9b-2630-95f4-8dc5-64dcce8c3305",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 5,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1970c04313a
                },
                "e-242": {
                    id: "e-242",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-60",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-243"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".faq_dropdown_open",
                        originalId: "6aec4199-658d-1d42-3a9a-12d1e30d9f3f",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".faq_dropdown_open",
                        originalId: "6aec4199-658d-1d42-3a9a-12d1e30d9f3f",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1970c39f4ee
                },
                "e-244": {
                    id: "e-244",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-60",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-245"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".faq_dropdown",
                        originalId: "6aec4199-658d-1d42-3a9a-12d1e30d9f49",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".faq_dropdown",
                        originalId: "6aec4199-658d-1d42-3a9a-12d1e30d9f49",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1970c3bab2f
                },
                "e-246": {
                    id: "e-246",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-61",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-247"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".home_case_study_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|c78d5777-de50-0781-4e9f-7aec8f69b87e",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".home_case_study_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|c78d5777-de50-0781-4e9f-7aec8f69b87e",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19713301f06
                },
                "e-247": {
                    id: "e-247",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-62",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-246"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".home_case_study_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|c78d5777-de50-0781-4e9f-7aec8f69b87e",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".home_case_study_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|c78d5777-de50-0781-4e9f-7aec8f69b87e",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19713301f09
                },
                "e-248": {
                    id: "e-248",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "FLIP_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "flipInLeft",
                            autoStopEventId: "e-249"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|1dbd93b6-51b6-b6e2-a326-d3ef42892e36",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|1dbd93b6-51b6-b6e2-a326-d3ef42892e36",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 200,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x1971335db85
                },
                "e-250": {
                    id: "e-250",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "FLIP_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "flipInLeft",
                            autoStopEventId: "e-251"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|72f0ad77-601b-3732-c224-d38066c37969",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|72f0ad77-601b-3732-c224-d38066c37969",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 300,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x19713365f52
                },
                "e-252": {
                    id: "e-252",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "FLIP_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "flipInLeft",
                            autoStopEventId: "e-253"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|c78d5777-de50-0781-4e9f-7aec8f69b87a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|c78d5777-de50-0781-4e9f-7aec8f69b87a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 400,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x19713368ae1
                },
                "e-254": {
                    id: "e-254",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "FLIP_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "flipInLeft",
                            autoStopEventId: "e-255"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|c039dad0-c12b-766b-2279-f4250ff4eced",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|c039dad0-c12b-766b-2279-f4250ff4eced",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 500,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x1971336af65
                },
                "e-256": {
                    id: "e-256",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "FLIP_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "flipInLeft",
                            autoStopEventId: "e-257"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|eff99c34-2890-eff4-d8a0-0413687012c7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|eff99c34-2890-eff4-d8a0-0413687012c7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 600,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x1971336d60d
                },
                "e-258": {
                    id: "e-258",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "FLIP_EFFECT",
                        instant: !1,
                        config: {
                            actionListId: "flipInLeft",
                            autoStopEventId: "e-259"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|db00cc54-b4ee-73bd-ec90-2e1e50d49899",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|db00cc54-b4ee-73bd-ec90-2e1e50d49899",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: 200,
                        direction: "LEFT",
                        effectIn: !0
                    },
                    createdOn: 0x197133708ec
                },
                "e-260": {
                    id: "e-260",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715905312
                },
                "e-261": {
                    id: "e-261",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x1971591a956
                },
                "e-262": {
                    id: "e-262",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-65",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-263"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".page_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|c80a3479-2cd3-8383-a37f-90a4b322ba91",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".page_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|c80a3479-2cd3-8383-a37f-90a4b322ba91",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1971592ef24
                },
                "e-263": {
                    id: "e-263",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-66",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-262"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".page_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|c80a3479-2cd3-8383-a37f-90a4b322ba91",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".page_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|c80a3479-2cd3-8383-a37f-90a4b322ba91",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1971592ef27
                },
                "e-264": {
                    id: "e-264",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-67",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-265"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "056c7977-e6c8-4f3a-a94a-0b4d943438b0",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "056c7977-e6c8-4f3a-a94a-0b4d943438b0",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !0,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19715a42fca
                },
                "e-266": {
                    id: "e-266",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d23302
                },
                "e-267": {
                    id: "e-267",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d278f4
                },
                "e-268": {
                    id: "e-268",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680f79629dbf84a9c7ec6dca",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f79629dbf84a9c7ec6dca",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d4a18f
                },
                "e-269": {
                    id: "e-269",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680f79629dbf84a9c7ec6dca",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f79629dbf84a9c7ec6dca",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d4d598
                },
                "e-270": {
                    id: "e-270",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680fc0f1b400704ba09da101",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc0f1b400704ba09da101",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d5691e
                },
                "e-271": {
                    id: "e-271",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680fc0f1b400704ba09da101",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc0f1b400704ba09da101",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d5a667
                },
                "e-272": {
                    id: "e-272",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680fc7edd22b34f40ec83c9c",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc7edd22b34f40ec83c9c",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d6827f
                },
                "e-273": {
                    id: "e-273",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680fc7edd22b34f40ec83c9c",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc7edd22b34f40ec83c9c",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d6a45b
                },
                "e-274": {
                    id: "e-274",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "681053e98acafbe1be58522b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681053e98acafbe1be58522b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d6f556
                },
                "e-275": {
                    id: "e-275",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "681053e98acafbe1be58522b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681053e98acafbe1be58522b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d728f6
                },
                "e-276": {
                    id: "e-276",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "6816672c8039935425744bb6",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "6816672c8039935425744bb6",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d77abc
                },
                "e-277": {
                    id: "e-277",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "6816672c8039935425744bb6",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "6816672c8039935425744bb6",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d79e54
                },
                "e-278": {
                    id: "e-278",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "681668f7d11930a2caa87502",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681668f7d11930a2caa87502",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d7f7f8
                },
                "e-279": {
                    id: "e-279",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "681668f7d11930a2caa87502",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681668f7d11930a2caa87502",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d827c0
                },
                "e-280": {
                    id: "e-280",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "681669b3da9e7d282a584f31",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681669b3da9e7d282a584f31",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d884e0
                },
                "e-281": {
                    id: "e-281",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "681669b3da9e7d282a584f31",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681669b3da9e7d282a584f31",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d8adc1
                },
                "e-282": {
                    id: "e-282",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d909ec
                },
                "e-283": {
                    id: "e-283",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d931ce
                },
                "e-284": {
                    id: "e-284",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f3780db8c47423f80a19f9",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f3780db8c47423f80a19f9",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715d98c3a
                },
                "e-285": {
                    id: "e-285",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f3780db8c47423f80a19f9",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f3780db8c47423f80a19f9",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715d9b3cb
                },
                "e-286": {
                    id: "e-286",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680f90da74abd0c0680df63b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f90da74abd0c0680df63b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x19715db1abb
                },
                "e-287": {
                    id: "e-287",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "680f90da74abd0c0680df63b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680f90da74abd0c0680df63b",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x19715db4666
                },
                "e-289": {
                    id: "e-289",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-69",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-290"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".image_animation",
                        originalId: "67f35087f2c378bfbd44b7f1|8d4f3a06-ef82-c121-1582-bc9f6cb0d105",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".image_animation",
                        originalId: "67f35087f2c378bfbd44b7f1|8d4f3a06-ef82-c121-1582-bc9f6cb0d105",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1971629ad36
                },
                "e-293": {
                    id: "e-293",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-294"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2|7d61b799-441f-188a-6f65-505792103170",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2|7d61b799-441f-188a-6f65-505792103170",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1971639e799
                },
                "e-295": {
                    id: "e-295",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-296"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2|5e6bf038-1d7e-ac8b-4e4f-0c890bc86fd4",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2|5e6bf038-1d7e-ac8b-4e4f-0c890bc86fd4",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197163a1dfa
                },
                "e-297": {
                    id: "e-297",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-298"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".service_text_wrapper",
                        originalId: "67f3780db8c47423f80a19f9|848fb791-16cf-1765-8866-d1282b9249d8",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".service_text_wrapper",
                        originalId: "67f3780db8c47423f80a19f9|848fb791-16cf-1765-8866-d1282b9249d8",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197163c819d
                },
                "e-299": {
                    id: "e-299",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-300"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "7e91c8a4-43dd-4ede-a989-2b5acd449b5f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "7e91c8a4-43dd-4ede-a989-2b5acd449b5f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197163ea182
                },
                "e-301": {
                    id: "e-301",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-302"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        selector: ".testimonial_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|55682f9e-0613-0010-8b53-654f7f8ea6af",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".testimonial_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|55682f9e-0613-0010-8b53-654f7f8ea6af",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197163f3b96
                },
                "e-303": {
                    id: "e-303",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-8",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-304"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|80104355-bb7b-b6df-1306-7949b0c6ff27",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|80104355-bb7b-b6df-1306-7949b0c6ff27",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19716d65d61
                },
                "e-307": {
                    id: "e-307",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_SCROLL_UP",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-74",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-308"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19716e7a412
                },
                "e-308": {
                    id: "e-308",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_SCROLL_DOWN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-75",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-307"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19716e7a415
                },
                "e-309": {
                    id: "e-309",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-72",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-310"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".slider_animation_wrapper",
                        originalId: "2bde72a4-fed8-26da-2497-121d44d6d3a2",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".slider_animation_wrapper",
                        originalId: "2bde72a4-fed8-26da-2497-121d44d6d3a2",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19716f57cce
                },
                "e-310": {
                    id: "e-310",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-73",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-309"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".slider_animation_wrapper",
                        originalId: "2bde72a4-fed8-26da-2497-121d44d6d3a2",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".slider_animation_wrapper",
                        originalId: "2bde72a4-fed8-26da-2497-121d44d6d3a2",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19716f57cd0
                },
                "e-311": {
                    id: "e-311",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-418"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "681053e98acafbe1be58522b|729fa40d-912c-ec1f-03b3-a5cb8910f713",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681053e98acafbe1be58522b|729fa40d-912c-ec1f-03b3-a5cb8910f713",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 20,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1971b5c01bd
                },
                "e-313": {
                    id: "e-313",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-314"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fd2b60e2c91d32a2e41d2|91fb2a0a-6cd3-7bab-d7da-0a4146bd7f0f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fd2b60e2c91d32a2e41d2|91fb2a0a-6cd3-7bab-d7da-0a4146bd7f0f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1972613ad9b
                },
                "e-315": {
                    id: "e-315",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLLING_IN_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-76",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|48cf9122-9e1b-357a-7ade-04b3eabd72a0",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|48cf9122-9e1b-357a-7ade-04b3eabd72a0",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-76-p",
                        smoothing: 95,
                        startsEntering: !1,
                        addStartOffset: !1,
                        addOffsetValue: 50,
                        startsExiting: !1,
                        addEndOffset: !1,
                        endOffsetValue: 50
                    }],
                    createdOn: 0x1972762857d
                },
                "e-316": {
                    id: "e-316",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-317"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        selector: ".testimonial_card_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|d7ca5945-daa2-87f6-2941-e72a97768338",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".testimonial_card_wrapper",
                        originalId: "67f35087f2c378bfbd44b7f1|d7ca5945-daa2-87f6-2941-e72a97768338",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197276ff82c
                },
                "e-319": {
                    id: "e-319",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-320"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f4a2f303a0a99b7405f503|ce1a70e0-451d-1849-8dc6-41f419b82a98",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f4a2f303a0a99b7405f503|ce1a70e0-451d-1849-8dc6-41f419b82a98",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x19729f610a7
                },
                "e-321": {
                    id: "e-321",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-8",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-322"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "af632348-5078-4d47-688b-5b6978590d68",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "af632348-5078-4d47-688b-5b6978590d68",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1972a0484df
                },
                "e-322": {
                    id: "e-322",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-77",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-321"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "af632348-5078-4d47-688b-5b6978590d68",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "af632348-5078-4d47-688b-5b6978590d68",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1972a0484e2
                },
                "e-323": {
                    id: "e-323",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-72",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-324"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".circle_button",
                        originalId: "e1c9045f-a260-11a8-1a39-431455d800f6",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".circle_button",
                        originalId: "e1c9045f-a260-11a8-1a39-431455d800f6",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1972a08802b
                },
                "e-324": {
                    id: "e-324",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-73",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-323"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".circle_button",
                        originalId: "e1c9045f-a260-11a8-1a39-431455d800f6",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".circle_button",
                        originalId: "e1c9045f-a260-11a8-1a39-431455d800f6",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1972a08802d
                },
                "e-325": {
                    id: "e-325",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-72",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-434"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "af632348-5078-4d47-688b-5b6978590d68",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "af632348-5078-4d47-688b-5b6978590d68",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1972aefbae5
                },
                "e-326": {
                    id: "e-326",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-73",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-325"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "af632348-5078-4d47-688b-5b6978590d68",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "af632348-5078-4d47-688b-5b6978590d68",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1972aefbae9
                },
                "e-327": {
                    id: "e-327",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-78",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-328"
                        }
                    },
                    mediaQueries: ["medium", "small", "tiny"],
                    target: {
                        id: "9d773f24-e02d-1047-ffc9-b23bf95e572a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "9d773f24-e02d-1047-ffc9-b23bf95e572a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !0,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1972b07d72a
                },
                "e-331": {
                    id: "e-331",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-332"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "683fcd0835e38864059a3891|4f820c37-ae32-86d4-d7e6-d8b1aa408d6b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "683fcd0835e38864059a3891|4f820c37-ae32-86d4-d7e6-d8b1aa408d6b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973938eb8d
                },
                "e-333": {
                    id: "e-333",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "683fcd0835e38864059a3891",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "683fcd0835e38864059a3891",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x1973938eb8d
                },
                "e-334": {
                    id: "e-334",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "683fcd0835e38864059a3891",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "683fcd0835e38864059a3891",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x1973938eb8d
                },
                "e-339": {
                    id: "e-339",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-81",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-340"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fc0f1b400704ba09da101|1410eab8-dae9-eb88-5d02-11e0b93b9369",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc0f1b400704ba09da101|1410eab8-dae9-eb88-5d02-11e0b93b9369",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: 500,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1973a2b4d0b
                },
                "e-341": {
                    id: "e-341",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "DROPDOWN_OPEN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-79",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-342"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fc0f1b400704ba09da101|1410eab8-dae9-eb88-5d02-11e0b93b9369",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc0f1b400704ba09da101|1410eab8-dae9-eb88-5d02-11e0b93b9369",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a2b4d0b
                },
                "e-342": {
                    id: "e-342",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "DROPDOWN_CLOSE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-82",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-341"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "680fc0f1b400704ba09da101|1410eab8-dae9-eb88-5d02-11e0b93b9369",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "680fc0f1b400704ba09da101|1410eab8-dae9-eb88-5d02-11e0b93b9369",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a2b4d0b
                },
                "e-387": {
                    id: "e-387",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-12",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-12-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-12-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x1973a44a77c
                },
                "e-388": {
                    id: "e-388",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-29",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-389"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|7f07d235-df29-ed9c-2452-2476a9c25289",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|7f07d235-df29-ed9c-2452-2476a9c25289",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-389": {
                    id: "e-389",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-30",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-388"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|7f07d235-df29-ed9c-2452-2476a9c25289",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|7f07d235-df29-ed9c-2452-2476a9c25289",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-390": {
                    id: "e-390",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-7",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-391"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "68401193bfe01a35daadf88a|ed2e5e53-8fbf-386f-4789-ed84cd12477b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|ed2e5e53-8fbf-386f-4789-ed84cd12477b",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-392": {
                    id: "e-392",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-36",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-393"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "68401193bfe01a35daadf88a|d2eccfaa-20c9-ad61-07c3-a1bbb089d66f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|d2eccfaa-20c9-ad61-07c3-a1bbb089d66f",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-394": {
                    id: "e-394",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-63",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-63-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-63-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 90,
                        restingState: 50
                    }],
                    createdOn: 0x1973a44a77c
                },
                "e-395": {
                    id: "e-395",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_MOVE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                        config: {
                            actionListId: "a-64",
                            affectedElements: {},
                            duration: 0
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a",
                        appliesTo: "PAGE",
                        styleBlockIds: []
                    }],
                    config: [{
                        continuousParameterGroupId: "a-64-p",
                        selectedAxis: "X_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }, {
                        continuousParameterGroupId: "a-64-p-2",
                        selectedAxis: "Y_AXIS",
                        basedOn: "VIEWPORT",
                        reverse: !1,
                        smoothing: 95,
                        restingState: 50
                    }],
                    createdOn: 0x1973a44a77c
                },
                "e-396": {
                    id: "e-396",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-36",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-397"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "68401193bfe01a35daadf88a|e7a72054-60ea-1a0a-b0df-a07d55f5b07e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|e7a72054-60ea-1a0a-b0df-a07d55f5b07e",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-398": {
                    id: "e-398",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-29",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-399"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|e7a72054-60ea-1a0a-b0df-a07d55f5b080",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|e7a72054-60ea-1a0a-b0df-a07d55f5b080",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-399": {
                    id: "e-399",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-30",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-398"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|e7a72054-60ea-1a0a-b0df-a07d55f5b080",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|e7a72054-60ea-1a0a-b0df-a07d55f5b080",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-400": {
                    id: "e-400",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-36",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-401"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c981",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c981",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-402": {
                    id: "e-402",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-29",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-403"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c983",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c983",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-403": {
                    id: "e-403",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-30",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-402"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c983",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c983",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-404": {
                    id: "e-404",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-36",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-405"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c995",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c995",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-406": {
                    id: "e-406",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-29",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-407"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c997",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c997",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-407": {
                    id: "e-407",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-30",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-406"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c997",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|aa93927d-e8c2-e1ae-c9c8-d3ee9114c997",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-408": {
                    id: "e-408",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-36",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-409"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f780",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f780",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-410": {
                    id: "e-410",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-29",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-411"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f782",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f782",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-411": {
                    id: "e-411",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-30",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-410"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f782",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f782",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-412": {
                    id: "e-412",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-36",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-413"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f794",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f794",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: -10,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-414": {
                    id: "e-414",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-29",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-415"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f796",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f796",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-415": {
                    id: "e-415",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-30",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-414"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f796",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "68401193bfe01a35daadf88a|715d4f39-bd77-3224-8104-48b18a56f796",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a44a77c
                },
                "e-420": {
                    id: "e-420",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "DROPDOWN_OPEN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-87",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-421"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "d4b33891-ddc1-c494-3411-2c53604c0b4a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "d4b33891-ddc1-c494-3411-2c53604c0b4a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x194a674a1f3
                },
                "e-421": {
                    id: "e-421",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "DROPDOWN_CLOSE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-88",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-60"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "d4b33891-ddc1-c494-3411-2c53604c0b4a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "d4b33891-ddc1-c494-3411-2c53604c0b4a",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x194a674a1f3
                },
                "e-422": {
                    id: "e-422",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-89",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-423"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".case_study_card_wrapper",
                        originalId: "68401193bfe01a35daadf88a|c21900d5-5ab4-1adc-f9a6-2cca2ed2560a",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".case_study_card_wrapper",
                        originalId: "68401193bfe01a35daadf88a|c21900d5-5ab4-1adc-f9a6-2cca2ed2560a",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a68464b
                },
                "e-423": {
                    id: "e-423",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-90",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-422"
                        }
                    },
                    mediaQueries: ["main"],
                    target: {
                        selector: ".case_study_card_wrapper",
                        originalId: "68401193bfe01a35daadf88a|c21900d5-5ab4-1adc-f9a6-2cca2ed2560a",
                        appliesTo: "CLASS"
                    },
                    targets: [{
                        selector: ".case_study_card_wrapper",
                        originalId: "68401193bfe01a35daadf88a|c21900d5-5ab4-1adc-f9a6-2cca2ed2560a",
                        appliesTo: "CLASS"
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a68464e
                },
                "e-426": {
                    id: "e-426",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-72",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-427"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "681053e98acafbe1be58522b|852a381c-c23a-d35b-ef94-db0f76057628",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681053e98acafbe1be58522b|852a381c-c23a-d35b-ef94-db0f76057628",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a824008
                },
                "e-427": {
                    id: "e-427",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-73",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-426"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "681053e98acafbe1be58522b|852a381c-c23a-d35b-ef94-db0f76057628",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "681053e98acafbe1be58522b|852a381c-c23a-d35b-ef94-db0f76057628",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973a82400b
                },
                "e-428": {
                    id: "e-428",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "SCROLL_INTO_VIEW",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-81",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-429"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: 500,
                        direction: "BOTTOM",
                        effectIn: !0
                    },
                    createdOn: 0x1973aed958a
                },
                "e-430": {
                    id: "e-430",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "DROPDOWN_OPEN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-79",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-431"
                        }
                    },
                    mediaQueries: ["main", "medium", "small"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973aed958a
                },
                "e-431": {
                    id: "e-431",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "DROPDOWN_CLOSE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-82",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-430"
                        }
                    },
                    mediaQueries: ["main", "medium", "small"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973aed958a
                },
                "e-432": {
                    id: "e-432",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "DROPDOWN_OPEN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-91",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-433"
                        }
                    },
                    mediaQueries: ["tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973b0ea5de
                },
                "e-433": {
                    id: "e-433",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "DROPDOWN_CLOSE",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-92",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-432"
                        }
                    },
                    mediaQueries: ["tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|bbf1318e-90ca-b785-bafe-a5d796597f4d",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x1973b0ea5e1
                },
                "e-434": {
                    id: "e-434",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-93",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-435"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|8151fb2f-250c-9b6b-e9d1-8f15a65355e7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|8151fb2f-250c-9b6b-e9d1-8f15a65355e7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18dc115e75f
                },
                "e-435": {
                    id: "e-435",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-94",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-434"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|8151fb2f-250c-9b6b-e9d1-8f15a65355e7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|8151fb2f-250c-9b6b-e9d1-8f15a65355e7",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18dc115e75f
                },
                "e-436": {
                    id: "e-436",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OVER",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-93",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-437"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|4dd04cb2-e016-ced5-390e-487576ad67db",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|4dd04cb2-e016-ced5-390e-487576ad67db",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18dc115e75f
                },
                "e-437": {
                    id: "e-437",
                    name: "",
                    animationType: "preset",
                    eventTypeId: "MOUSE_OUT",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-94",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-436"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        id: "67f35087f2c378bfbd44b7f1|4dd04cb2-e016-ced5-390e-487576ad67db",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    },
                    targets: [{
                        id: "67f35087f2c378bfbd44b7f1|4dd04cb2-e016-ced5-390e-487576ad67db",
                        appliesTo: "ELEMENT",
                        styleBlockIds: []
                    }],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: null,
                        scrollOffsetUnit: null,
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x18dc115e75f
                },
                "e-438": {
                    id: "e-438",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_SCROLL_UP",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-95",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-439"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        appliesTo: "PAGE",
                        styleBlockIds: [],
                        id: "67f35087f2c378bfbd44b7f1"
                    },
                    targets: [],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197a1b48735
                },
                "e-439": {
                    id: "e-439",
                    name: "",
                    animationType: "custom",
                    eventTypeId: "PAGE_SCROLL_DOWN",
                    action: {
                        id: "",
                        actionTypeId: "GENERAL_START_ACTION",
                        config: {
                            delay: 0,
                            easing: "",
                            duration: 0,
                            actionListId: "a-96",
                            affectedElements: {},
                            playInReverse: !1,
                            autoStopEventId: "e-438"
                        }
                    },
                    mediaQueries: ["main", "medium", "small", "tiny"],
                    target: {
                        appliesTo: "PAGE",
                        styleBlockIds: [],
                        id: "67f35087f2c378bfbd44b7f1"
                    },
                    targets: [],
                    config: {
                        loop: !1,
                        playInReverse: !1,
                        scrollOffsetValue: 0,
                        scrollOffsetUnit: "%",
                        delay: null,
                        direction: null,
                        effectIn: null
                    },
                    createdOn: 0x197a1b48737
                }
            },
            actionLists: {
                "a-2": {
                    id: "a-2",
                    title: "Dropdown Open Initial",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-2-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".dropdown_contents.initital",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce16", "e4dbb894-927b-6b8e-bc9c-61da15a6ce2a"]
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-2-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".dropdown_contents.initital",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce16", "e4dbb894-927b-6b8e-bc9c-61da15a6ce2a"]
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }, {
                            id: "a-2-n-5",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_dropdown_title.default",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce15", "e672faf3-fe5c-0e33-86b3-b96a84d562b5"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-2-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_line.initial",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce11", "15593e09-7214-8ea7-ed73-488250cf8500"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x195d49db4fa
                },
                "a-4": {
                    id: "a-4",
                    title: "Dropdown Open",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-4-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".dropdown_contents",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce16"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-4-n-10",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".faq_dropdown_title.default",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce15", "e672faf3-fe5c-0e33-86b3-b96a84d562b5"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-4-n-8",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_dropdown_title",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce15"]
                                },
                                globalSwatchId: "--_neutral-color---50",
                                rValue: 230,
                                bValue: 230,
                                gValue: 230,
                                aValue: 1
                            }
                        }, {
                            id: "a-4-n-7",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".faq_line.initial",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce11", "15593e09-7214-8ea7-ed73-488250cf8500"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-4-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_line.rotate",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce11", "e4dbb894-927b-6b8e-bc9c-61da15a6ce29"]
                                },
                                zValue: -90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-4-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".dropdown_contents",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce16"]
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }, {
                            id: "a-4-n-11",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".faq_dropdown_title.default",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce15", "e672faf3-fe5c-0e33-86b3-b96a84d562b5"]
                                },
                                globalSwatchId: "--_neutral-color---50",
                                rValue: 230,
                                bValue: 230,
                                gValue: 230,
                                aValue: 1
                            }
                        }, {
                            id: "a-4-n-9",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_dropdown_title",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce15"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-4-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".faq_line.initial",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce11", "15593e09-7214-8ea7-ed73-488250cf8500"]
                                },
                                zValue: -90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-4-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    selector: ".dropdown_contents.initital",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce16", "e4dbb894-927b-6b8e-bc9c-61da15a6ce2a"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-4-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_line.rotate",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce11", "e4dbb894-927b-6b8e-bc9c-61da15a6ce29"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x195d49db4fa
                },
                "a-3": {
                    id: "a-3",
                    title: "Dropdown Close Initial",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-3-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".dropdown_contents.initital",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce16", "e4dbb894-927b-6b8e-bc9c-61da15a6ce2a"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-3-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_dropdown_title.default",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce15", "e672faf3-fe5c-0e33-86b3-b96a84d562b5"]
                                },
                                globalSwatchId: "--_neutral-color---50",
                                rValue: 230,
                                bValue: 230,
                                gValue: 230,
                                aValue: 1
                            }
                        }, {
                            id: "a-3-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_line.initial",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce11", "15593e09-7214-8ea7-ed73-488250cf8500"]
                                },
                                zValue: -90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x195d49db4fa
                },
                "a-5": {
                    id: "a-5",
                    title: "Dropdown Close",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-5-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".dropdown_contents",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce16"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-5-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_dropdown_title",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce15"]
                                },
                                globalSwatchId: "--_neutral-color---50",
                                rValue: 230,
                                bValue: 230,
                                gValue: 230,
                                aValue: 1
                            }
                        }, {
                            id: "a-5-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq_line.rotate",
                                    selectorGuids: ["e4dbb894-927b-6b8e-bc9c-61da15a6ce11", "e4dbb894-927b-6b8e-bc9c-61da15a6ce29"]
                                },
                                zValue: -90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x195d49db4fa
                },
                "a-7": {
                    id: "a-7",
                    title: "Slide In Form Bottom",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-7-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f35087f2c378bfbd44b7f1|783a2096-5fa8-a8f7-a84e-c874dd8c982f"
                                },
                                yValue: 50,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-7-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f35087f2c378bfbd44b7f1|783a2096-5fa8-a8f7-a84e-c874dd8c982f"
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-7-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 1e3,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f35087f2c378bfbd44b7f1|783a2096-5fa8-a8f7-a84e-c874dd8c982f"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-7-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 1e3,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f35087f2c378bfbd44b7f1|783a2096-5fa8-a8f7-a84e-c874dd8c982f"
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x196850a2e35
                },
                "a-11": {
                    id: "a-11",
                    title: "Circle Button Loop",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-11-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".curve_text_image",
                                    selectorGuids: ["def3cef3-d76f-581b-6e52-26d93589c184"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-11-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 7e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".curve_text_image",
                                    selectorGuids: ["def3cef3-d76f-581b-6e52-26d93589c184"]
                                },
                                zValue: 359,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x1968525da81
                },
                "a-20": {
                    id: "a-20",
                    title: "Team Card Plus Icon Tap In",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-20-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".team_social_media_block",
                                    selectorGuids: ["66e0ead7-26fa-45dd-1904-066f1b44d535"]
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-20-n-7",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_line",
                                    selectorGuids: ["c5baae06-40be-987a-6aae-64ffaed78f01"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-20-n-5",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f4a2f303a0a99b7405f503|e4bbf712-58e8-7598-e17d-e8a1cce4f3fe"
                                },
                                globalSwatchId: "--_neutral-color---400",
                                rValue: 51,
                                bValue: 51,
                                gValue: 51,
                                aValue: 1
                            }
                        }, {
                            id: "a-20-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_line.rotate",
                                    selectorGuids: ["c5baae06-40be-987a-6aae-64ffaed78f01", "f5da7709-8f02-c74c-3e3c-b5adf60b91e4"]
                                },
                                zValue: 90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-20-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1100,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".team_social_media_block",
                                    selectorGuids: ["66e0ead7-26fa-45dd-1904-066f1b44d535"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-20-n-8",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_line",
                                    selectorGuids: ["c5baae06-40be-987a-6aae-64ffaed78f01"]
                                },
                                globalSwatchId: "--neutral",
                                rValue: 0,
                                bValue: 0,
                                gValue: 0,
                                aValue: 1
                            }
                        }, {
                            id: "a-20-n-6",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f4a2f303a0a99b7405f503|e4bbf712-58e8-7598-e17d-e8a1cce4f3fe"
                                },
                                globalSwatchId: "--primary",
                                rValue: 190,
                                bValue: 250,
                                gValue: 161,
                                aValue: 1
                            }
                        }, {
                            id: "a-20-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1100,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_line.rotate",
                                    selectorGuids: ["c5baae06-40be-987a-6aae-64ffaed78f01", "f5da7709-8f02-c74c-3e3c-b5adf60b91e4"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19686a96321
                },
                "a-21": {
                    id: "a-21",
                    title: "Team Card Plus Icon Tap Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-21-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1100,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".team_social_media_block",
                                    selectorGuids: ["66e0ead7-26fa-45dd-1904-066f1b44d535"]
                                },
                                yValue: 110,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-21-n-6",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_line",
                                    selectorGuids: ["c5baae06-40be-987a-6aae-64ffaed78f01"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-21-n-5",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f4a2f303a0a99b7405f503|e4bbf712-58e8-7598-e17d-e8a1cce4f3fe"
                                },
                                globalSwatchId: "--_neutral-color---400",
                                rValue: 51,
                                bValue: 51,
                                gValue: 51,
                                aValue: 1
                            }
                        }, {
                            id: "a-21-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1100,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_line.rotate",
                                    selectorGuids: ["c5baae06-40be-987a-6aae-64ffaed78f01", "f5da7709-8f02-c74c-3e3c-b5adf60b91e4"]
                                },
                                zValue: 90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x19686a96321
                },
                "a-18": {
                    id: "a-18",
                    title: "Team Card Hover In",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-18-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_card_overlay",
                                    selectorGuids: ["977e9236-7586-ef9c-a497-7a676f0cc4a6"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-18-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_image",
                                    selectorGuids: ["92f7498f-723e-1b31-b0aa-c14511ad91bb"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-18-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 900,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_card_overlay",
                                    selectorGuids: ["977e9236-7586-ef9c-a497-7a676f0cc4a6"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-18-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_image",
                                    selectorGuids: ["92f7498f-723e-1b31-b0aa-c14511ad91bb"]
                                },
                                xValue: 1.15,
                                yValue: 1.15,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19686a6e56d
                },
                "a-19": {
                    id: "a-19",
                    title: "Team Card Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-19-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 900,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_card_overlay",
                                    selectorGuids: ["977e9236-7586-ef9c-a497-7a676f0cc4a6"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-19-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".team_image",
                                    selectorGuids: ["92f7498f-723e-1b31-b0aa-c14511ad91bb"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x19686a6e56d
                },
                "a-23": {
                    id: "a-23",
                    title: "Infinity Slider Animation",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-23-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".infinity_grid_infinity",
                                    selectorGuids: ["46c7b86b-48e5-b76e-a3ac-2822b2a0ccf2"]
                                },
                                xValue: -102,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-23-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 25e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".infinity_grid_infinity",
                                    selectorGuids: ["46c7b86b-48e5-b76e-a3ac-2822b2a0ccf2"]
                                },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-23-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".infinity_grid_infinity",
                                    selectorGuids: ["46c7b86b-48e5-b76e-a3ac-2822b2a0ccf2"]
                                },
                                xValue: -102,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19695e5ba9a
                },
                "a-24": {
                    id: "a-24",
                    title: "Nav Sidebar Show",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-24-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav_sidebar_block",
                                    selectorGuids: ["3367fb77-b44e-ac8f-602d-b4dc1413dd38"]
                                },
                                xValue: 110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-14",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav_blur_background",
                                    selectorGuids: ["6d26b323-248e-3d84-6c43-849f20fcc824"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-24-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".footer_social_media_wrapper",
                                    selectorGuids: ["8937ca29-516b-0660-08a2-daf3ad742900"]
                                },
                                yValue: 130,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav_sidebar_heading",
                                    selectorGuids: ["23cec227-83f5-4307-55bb-88656bd0abb8"]
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav_sidebar_contact_wrapper.one",
                                    selectorGuids: ["f51d144d-c4d2-0e40-fb49-467c159074e0", "85283d2d-2e84-a753-f5e1-fc5b1c97ec01"]
                                },
                                yValue: 130,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav_sidebar_contact_wrapper.two",
                                    selectorGuids: ["f51d144d-c4d2-0e40-fb49-467c159074e0", "bcd3c7fe-1a22-2b7b-fd60-1ca82b3112b5"]
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".nav_sidebar_contact_wrapper.three",
                                    selectorGuids: ["f51d144d-c4d2-0e40-fb49-467c159074e0", "16bd4b22-6544-98d0-ae84-6640963cd809"]
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-24-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 600,
                                target: {
                                    selector: ".nav_sidebar_block",
                                    selectorGuids: ["3367fb77-b44e-ac8f-602d-b4dc1413dd38"]
                                },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    selector: ".nav_blur_background",
                                    selectorGuids: ["6d26b323-248e-3d84-6c43-849f20fcc824"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-24-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 400,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".nav_sidebar_heading",
                                    selectorGuids: ["23cec227-83f5-4307-55bb-88656bd0abb8"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 600,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".nav_sidebar_contact_wrapper.one",
                                    selectorGuids: ["f51d144d-c4d2-0e40-fb49-467c159074e0", "85283d2d-2e84-a753-f5e1-fc5b1c97ec01"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 800,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".nav_sidebar_contact_wrapper.two",
                                    selectorGuids: ["f51d144d-c4d2-0e40-fb49-467c159074e0", "bcd3c7fe-1a22-2b7b-fd60-1ca82b3112b5"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 1e3,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".nav_sidebar_contact_wrapper.three",
                                    selectorGuids: ["f51d144d-c4d2-0e40-fb49-467c159074e0", "16bd4b22-6544-98d0-ae84-6640963cd809"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-24-n-13",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 1200,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".footer_social_media_wrapper",
                                    selectorGuids: ["8937ca29-516b-0660-08a2-daf3ad742900"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x196960fa9cf
                },
                "a-25": {
                    id: "a-25",
                    title: "Nav Sidebar Close",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-25-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".nav_sidebar_heading",
                                    selectorGuids: ["23cec227-83f5-4307-55bb-88656bd0abb8"]
                                },
                                yValue: 130,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-25-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 200,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".nav_sidebar_contact_wrapper.one",
                                    selectorGuids: ["f51d144d-c4d2-0e40-fb49-467c159074e0", "85283d2d-2e84-a753-f5e1-fc5b1c97ec01"]
                                },
                                yValue: 130,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-25-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 200,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".nav_sidebar_contact_wrapper.two",
                                    selectorGuids: ["f51d144d-c4d2-0e40-fb49-467c159074e0", "bcd3c7fe-1a22-2b7b-fd60-1ca82b3112b5"]
                                },
                                yValue: 130,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-25-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 200,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".nav_sidebar_contact_wrapper.three",
                                    selectorGuids: ["f51d144d-c4d2-0e40-fb49-467c159074e0", "16bd4b22-6544-98d0-ae84-6640963cd809"]
                                },
                                yValue: 130,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-25-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 200,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    selector: ".footer_social_media_wrapper",
                                    selectorGuids: ["8937ca29-516b-0660-08a2-daf3ad742900"]
                                },
                                yValue: 130,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-25-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 400,
                                easing: "outQuad",
                                duration: 600,
                                target: {
                                    selector: ".nav_sidebar_block",
                                    selectorGuids: ["3367fb77-b44e-ac8f-602d-b4dc1413dd38"]
                                },
                                xValue: 110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-25-n-13",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 400,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    selector: ".nav_blur_background",
                                    selectorGuids: ["6d26b323-248e-3d84-6c43-849f20fcc824"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x196960fa9cf
                },
                "a-61": {
                    id: "a-61",
                    title: "Home Case Study Hover In",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-61-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hover_image_state",
                                    selectorGuids: ["df9bf480-c834-3663-2b68-6701929ee714"]
                                },
                                heightValue: 0,
                                widthUnit: "AUTO",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-61-n-3",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_hover_image",
                                    selectorGuids: ["f5254741-fdcc-e068-bbe1-f66cf978b8df"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "deg",
                                zUnit: "DEG"
                            }
                        }, {
                            id: "a-61-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_hover_image",
                                    selectorGuids: ["f5254741-fdcc-e068-bbe1-f66cf978b8df"]
                                },
                                xValue: 1.2,
                                yValue: 1.2,
                                locked: !0
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-61-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hover_image_state",
                                    selectorGuids: ["df9bf480-c834-3663-2b68-6701929ee714"]
                                },
                                widthUnit: "AUTO",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }, {
                            id: "a-61-n-6",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_hover_image",
                                    selectorGuids: ["f5254741-fdcc-e068-bbe1-f66cf978b8df"]
                                },
                                yValue: 0,
                                xUnit: "DEG",
                                yUnit: "deg",
                                zUnit: "DEG"
                            }
                        }, {
                            id: "a-61-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_hover_image",
                                    selectorGuids: ["f5254741-fdcc-e068-bbe1-f66cf978b8df"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x197132709f1
                },
                "a-62": {
                    id: "a-62",
                    title: "Home Case Study Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-62-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hover_image_state",
                                    selectorGuids: ["df9bf480-c834-3663-2b68-6701929ee714"]
                                },
                                heightValue: 0,
                                widthUnit: "AUTO",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-62-n-5",
                            actionTypeId: "TRANSFORM_SKEW",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_hover_image",
                                    selectorGuids: ["f5254741-fdcc-e068-bbe1-f66cf978b8df"]
                                },
                                yValue: 5,
                                xUnit: "DEG",
                                yUnit: "deg",
                                zUnit: "DEG"
                            }
                        }, {
                            id: "a-62-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_hover_image",
                                    selectorGuids: ["f5254741-fdcc-e068-bbe1-f66cf978b8df"]
                                },
                                xValue: 1.2,
                                yValue: 1.2,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x197132709f1
                },
                "a-12": {
                    id: "a-12",
                    title: "Button Move",
                    continuousParameterGroups: [{
                        id: "a-12-p",
                        type: "MOUSE_X",
                        parameterLabel: "Mouse X",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-12-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_button",
                                        selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                    },
                                    xValue: -50,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-12-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_button",
                                        selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                    },
                                    xValue: 50,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }, {
                        id: "a-12-p-2",
                        type: "MOUSE_Y",
                        parameterLabel: "Mouse Y",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-12-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_button",
                                        selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                    },
                                    xValue: null,
                                    yValue: -50,
                                    xUnit: "vh",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-12-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_button",
                                        selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x19685353da5
                },
                "a-29": {
                    id: "a-29",
                    title: "Hover Button Show",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-29-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                xValue: .75,
                                yValue: .75,
                                locked: !0
                            }
                        }, {
                            id: "a-29-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor_border",
                                    selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-29-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor_dot",
                                    selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-29-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-29-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-29-n-9",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".cursor_border",
                                    selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-29-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".cursor_dot",
                                    selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-29-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1968536dbb0
                },
                "a-30": {
                    id: "a-30",
                    title: "Hover Button Hide",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-30-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                xValue: .75,
                                yValue: .75,
                                locked: !0
                            }
                        }, {
                            id: "a-30-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".cursor_border",
                                    selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-30-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 300,
                                target: {
                                    selector: ".cursor_dot",
                                    selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-30-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x1968536dbb0
                },
                "a-16": {
                    id: "a-16",
                    title: "Testimonial Animation",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-16-n-2",
                            actionTypeId: "STYLE_FILTER",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f35087f2c378bfbd44b7f1|783a2096-5fa8-a8f7-a84e-c874dd8c982f"
                                },
                                filters: [{
                                    type: "blur",
                                    filterId: "0053",
                                    value: 4,
                                    unit: "px"
                                }]
                            }
                        }, {
                            id: "a-16-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "494a3b7a-6a5b-e09c-ddda-b44abd05bba5"
                                },
                                xValue: .5,
                                yValue: .5,
                                locked: !0
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-16-n-4",
                            actionTypeId: "STYLE_FILTER",
                            config: {
                                delay: 0,
                                easing: "inQuad",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f35087f2c378bfbd44b7f1|783a2096-5fa8-a8f7-a84e-c874dd8c982f"
                                },
                                filters: [{
                                    type: "blur",
                                    filterId: "e0fa",
                                    value: 0,
                                    unit: "px"
                                }]
                            }
                        }, {
                            id: "a-16-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inQuad",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "494a3b7a-6a5b-e09c-ddda-b44abd05bba5"
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x196850a2e35
                },
                "a-31": {
                    id: "a-31",
                    title: "Blog Card Hover In",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-31-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog_card_image",
                                    selectorGuids: ["3abdc50c-0f9d-ffec-4795-6ad89f6f661c"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-31-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog_overlay",
                                    selectorGuids: ["14051a5c-b85b-c5da-c27f-d5ab19e01553"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-31-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog_overlay",
                                    selectorGuids: ["14051a5c-b85b-c5da-c27f-d5ab19e01553"]
                                },
                                widthValue: 0,
                                heightValue: 0,
                                widthUnit: "%",
                                heightUnit: "%",
                                locked: !1
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-31-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog_card_image",
                                    selectorGuids: ["3abdc50c-0f9d-ffec-4795-6ad89f6f661c"]
                                },
                                xValue: 1.15,
                                yValue: 1.15,
                                locked: !0
                            }
                        }, {
                            id: "a-31-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "easeIn",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog_overlay",
                                    selectorGuids: ["14051a5c-b85b-c5da-c27f-d5ab19e01553"]
                                },
                                widthValue: 100,
                                heightValue: 200,
                                widthUnit: "%",
                                heightUnit: "%",
                                locked: !1
                            }
                        }, {
                            id: "a-31-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "easeOut",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog_overlay",
                                    selectorGuids: ["14051a5c-b85b-c5da-c27f-d5ab19e01553"]
                                },
                                zValue: -90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1968536dbb0
                },
                "a-32": {
                    id: "a-32",
                    title: "Blog Card Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-32-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog_card_image",
                                    selectorGuids: ["3abdc50c-0f9d-ffec-4795-6ad89f6f661c"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-32-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "easeOut",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog_overlay",
                                    selectorGuids: ["14051a5c-b85b-c5da-c27f-d5ab19e01553"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-32-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "easeOut",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".blog_overlay",
                                    selectorGuids: ["14051a5c-b85b-c5da-c27f-d5ab19e01553"]
                                },
                                widthValue: 0,
                                heightValue: 0,
                                widthUnit: "%",
                                heightUnit: "%",
                                locked: !1
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x1968536dbb0
                },
                "a-33": {
                    id: "a-33",
                    title: "Contact Info Animation",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-33-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|594c72ec-14f4-1770-42d8-8f60719abc00"
                                },
                                yValue: 20,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-33-n-12",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|594c72ec-14f4-1770-42d8-8f60719abc00"
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-33-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|265999e3-7232-104b-072f-a261b482fd5f"
                                },
                                yValue: 20,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-33-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|9c0ac675-68ca-83a1-9c45-e852565469a3"
                                },
                                yValue: 20,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-33-n-13",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|265999e3-7232-104b-072f-a261b482fd5f"
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-33-n-14",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|9c0ac675-68ca-83a1-9c45-e852565469a3"
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-33-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|594c72ec-14f4-1770-42d8-8f60719abc00"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-33-n-15",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|594c72ec-14f4-1770-42d8-8f60719abc00"
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-33-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 300,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|265999e3-7232-104b-072f-a261b482fd5f"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-33-n-16",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 300,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|265999e3-7232-104b-072f-a261b482fd5f"
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-33-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 600,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|9c0ac675-68ca-83a1-9c45-e852565469a3"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-33-n-17",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 600,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    id: "681053e98acafbe1be58522b|9c0ac675-68ca-83a1-9c45-e852565469a3"
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19696951e3e
                },
                "a-8": {
                    id: "a-8",
                    title: "Button Hover In",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-8-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".button_text",
                                    selectorGuids: ["87fc492c-1de0-affb-67da-8e0f3ef092a4"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-8-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".button_icon",
                                    selectorGuids: ["abd2c69b-ea40-a540-0c21-bc7fd6b40af0"]
                                },
                                xValue: -110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-8-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".button_text",
                                    selectorGuids: ["87fc492c-1de0-affb-67da-8e0f3ef092a4"]
                                },
                                yValue: -100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-8-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".button_icon",
                                    selectorGuids: ["abd2c69b-ea40-a540-0c21-bc7fd6b40af0"]
                                },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x196851ae527
                },
                "a-77": {
                    id: "a-77",
                    title: "Button Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-77-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".button_text",
                                    selectorGuids: ["87fc492c-1de0-affb-67da-8e0f3ef092a4"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-77-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".button_icon",
                                    selectorGuids: ["abd2c69b-ea40-a540-0c21-bc7fd6b40af0"]
                                },
                                xValue: -100,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x196851ae527
                },
                "a-34": {
                    id: "a-34",
                    title: "Navbar Open",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-34-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 200,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".middle_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93dc"]
                                },
                                widthValue: 0,
                                widthUnit: "px",
                                heightUnit: "PX",
                                locked: !1
                            }
                        }, {
                            id: "a-34-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".bottom_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93dd"]
                                },
                                zValue: -45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-34-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".bottom_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93dd"]
                                },
                                yValue: -7,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-34-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".top_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93db"]
                                },
                                zValue: 45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-34-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".top_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93db"]
                                },
                                yValue: 7,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x1969a0623c5
                },
                "a-35": {
                    id: "a-35",
                    title: "Navbar Close",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-35-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".bottom_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93dd"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-35-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".bottom_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93dd"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-35-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".top_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93db"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-35-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".top_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93db"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-35-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 600,
                                easing: "inOutQuad",
                                duration: 200,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".middle_line",
                                    selectorGuids: ["186cbf38-b9be-f60d-7908-58c86f6d93dc"]
                                },
                                widthUnit: "AUTO",
                                heightUnit: "PX",
                                locked: !1
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x1969a0623c5
                },
                "a-36": {
                    id: "a-36",
                    title: "Card Animation",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-36-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "680fc7edd22b34f40ec83c9c|75dbbc0e-dde4-9ee4-18a7-3c5b4a6125b6"
                                },
                                yValue: 60,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-36-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "680fc7edd22b34f40ec83c9c|75dbbc0e-dde4-9ee4-18a7-3c5b4a6125b6"
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-36-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "680fc7edd22b34f40ec83c9c|75dbbc0e-dde4-9ee4-18a7-3c5b4a6125b6"
                                },
                                zValue: -30,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-36-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    useEventTarget: !0,
                                    id: "680fc7edd22b34f40ec83c9c|75dbbc0e-dde4-9ee4-18a7-3c5b4a6125b6"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-36-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    useEventTarget: !0,
                                    id: "680fc7edd22b34f40ec83c9c|75dbbc0e-dde4-9ee4-18a7-3c5b4a6125b6"
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-36-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 800,
                                target: {
                                    useEventTarget: !0,
                                    id: "680fc7edd22b34f40ec83c9c|75dbbc0e-dde4-9ee4-18a7-3c5b4a6125b6"
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1969e740522
                },
                "a-13": {
                    id: "a-13",
                    title: "Service Card Hover In",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-13-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                xValue: .75,
                                yValue: .75,
                                locked: !0
                            }
                        }, {
                            id: "a-13-n-17",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-13-n-15",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                yValue: 20,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-13-n-9",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "%",
                                locked: !1
                            }
                        }, {
                            id: "a-13-n-7",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-13-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-13-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-13-n-10",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {},
                                heightValue: 100,
                                widthUnit: "PX",
                                heightUnit: "%",
                                locked: !1
                            }
                        }, {
                            id: "a-13-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 800,
                                target: {},
                                xValue: 1.15,
                                yValue: 1.15,
                                locked: !0
                            }
                        }, {
                            id: "a-13-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-13-n-16",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 400,
                                easing: "ease",
                                duration: 800,
                                target: {},
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-13-n-18",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 400,
                                easing: "ease",
                                duration: 800,
                                target: {},
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1968536dbb0
                },
                "a-14": {
                    id: "a-14",
                    title: "Service Card Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-14-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                xValue: .75,
                                yValue: .75,
                                locked: !0
                            }
                        }, {
                            id: "a-14-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {},
                                yValue: 20,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-14-n-9",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {},
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-14-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {},
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "%",
                                locked: !1
                            }
                        }, {
                            id: "a-14-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".hover_button",
                                    selectorGuids: ["c1611d4e-8e23-a3f6-6a7f-a36ac778d90b"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-14-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 800,
                                target: {},
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x1968536dbb0
                },
                "a-40": {
                    id: "a-40",
                    title: "Feature Card Scroll",
                    continuousParameterGroups: [{
                        id: "a-40-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 20,
                            actionItems: [{
                                id: "a-40-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "95706b2b-f1d4-a124-cf3c-cc268bb33685"
                                    },
                                    xValue: 100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 50,
                            actionItems: [{
                                id: "a-40-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "95706b2b-f1d4-a124-cf3c-cc268bb33685"
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x196c4443b2b
                },
                "a-43": {
                    id: "a-43",
                    title: "Counter Animation On View",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-43-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".counter_number_wrapper",
                                    selectorGuids: ["da6f673d-85b7-ac83-f78b-1b41024f1eeb"]
                                },
                                yValue: -1e3,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-43-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".counter_number_wrapper_reverse",
                                    selectorGuids: ["da6f673d-85b7-ac83-f78b-1b41024f1eea"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-43-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: [.784, .325, .222, .98],
                                duration: 2e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".counter_number_wrapper",
                                    selectorGuids: ["da6f673d-85b7-ac83-f78b-1b41024f1eeb"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-43-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: [.784, .325, .222, .98],
                                duration: 2e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".counter_number_wrapper_reverse",
                                    selectorGuids: ["da6f673d-85b7-ac83-f78b-1b41024f1eea"]
                                },
                                yValue: -1e3,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1939c12dcc3
                },
                "a-44": {
                    id: "a-44",
                    title: "Slide In From Bottom Delayed",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-44-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "677e6d9be3e34d7fa6733c4c|63660aa6-d3db-b0ba-4057-c1ffe9634d9e"
                                },
                                xValue: null,
                                yValue: 100,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-44-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 300,
                                easing: "outQuad",
                                duration: 1e3,
                                target: {
                                    useEventTarget: !0,
                                    id: "677e6d9be3e34d7fa6733c4c|63660aa6-d3db-b0ba-4057-c1ffe9634d9e"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19468e3004c
                },
                "a-45": {
                    id: "a-45",
                    title: "Home Case Study Scroll",
                    continuousParameterGroups: [{
                        id: "a-45-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 15,
                            actionItems: [{
                                id: "a-45-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".frame",
                                        selectorGuids: ["3084c8dd-77d0-9646-fc21-9cea595a6e67"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 50,
                            actionItems: [{
                                id: "a-45-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".frame",
                                        selectorGuids: ["3084c8dd-77d0-9646-fc21-9cea595a6e67"]
                                    },
                                    xValue: -50,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x1970600f85b
                },
                "a-6": {
                    id: "a-6",
                    title: "Hero Animation",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-6-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hero_heading",
                                    selectorGuids: ["3fea21a4-279e-ad5e-aaa3-c5e471702ca0"]
                                },
                                yValue: 50,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-6-n-17",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hero_heading",
                                    selectorGuids: ["3fea21a4-279e-ad5e-aaa3-c5e471702ca0"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-6-n-13",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".hero_absolute_image_2_wrapper",
                                    selectorGuids: ["2e949bed-2dd1-9414-ad12-68cf9dd978b7"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-6-n-12",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".hero_absolute_image_3_wrapper",
                                    selectorGuids: ["fb995ee1-6fb4-18d0-eb57-fcd759b8128a"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-6-n-11",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".hero_absolute_image_1_wrapper",
                                    selectorGuids: ["b76e648c-68bc-23b1-fca6-df403d84d380"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-6-n-9",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".circle_button.hero",
                                    selectorGuids: ["f851f0ba-8029-c7ce-3a15-e248cc8880ff", "b4adb3ef-1265-32ca-479e-9ffb4f44a359"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-6-n-7",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hero_video",
                                    selectorGuids: ["15bfd761-45ee-c096-9300-6d63fbe33087"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-6-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hero_video",
                                    selectorGuids: ["15bfd761-45ee-c096-9300-6d63fbe33087"]
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-6-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 1e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hero_heading",
                                    selectorGuids: ["3fea21a4-279e-ad5e-aaa3-c5e471702ca0"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-6-n-18",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 1e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hero_heading",
                                    selectorGuids: ["3fea21a4-279e-ad5e-aaa3-c5e471702ca0"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-6-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 400,
                                easing: "outQuad",
                                duration: 900,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hero_video",
                                    selectorGuids: ["15bfd761-45ee-c096-9300-6d63fbe33087"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-6-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 400,
                                easing: "outQuad",
                                duration: 900,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hero_video",
                                    selectorGuids: ["15bfd761-45ee-c096-9300-6d63fbe33087"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-6-n-10",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 700,
                                easing: "inQuad",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".circle_button.hero",
                                    selectorGuids: ["f851f0ba-8029-c7ce-3a15-e248cc8880ff", "b4adb3ef-1265-32ca-479e-9ffb4f44a359"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-6-n-14",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 800,
                                easing: "outQuad",
                                duration: 600,
                                target: {
                                    selector: ".hero_absolute_image_1_wrapper",
                                    selectorGuids: ["b76e648c-68bc-23b1-fca6-df403d84d380"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-6-n-15",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 1e3,
                                easing: "outQuad",
                                duration: 600,
                                target: {
                                    selector: ".hero_absolute_image_2_wrapper",
                                    selectorGuids: ["2e949bed-2dd1-9414-ad12-68cf9dd978b7"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-6-n-16",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 1200,
                                easing: "outQuad",
                                duration: 600,
                                target: {
                                    selector: ".hero_absolute_image_3_wrapper",
                                    selectorGuids: ["fb995ee1-6fb4-18d0-eb57-fcd759b8128a"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19684ffe5c7
                },
                "a-46": {
                    id: "a-46",
                    title: "Hero Scroll Animation",
                    continuousParameterGroups: [{
                        id: "a-46-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-46-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_1_wrapper",
                                        selectorGuids: ["b76e648c-68bc-23b1-fca6-df403d84d380"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-46-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_1_wrapper",
                                        selectorGuids: ["b76e648c-68bc-23b1-fca6-df403d84d380"]
                                    },
                                    zValue: -23.06,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            keyframe: 10,
                            actionItems: [{
                                id: "a-46-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_3_wrapper",
                                        selectorGuids: ["fb995ee1-6fb4-18d0-eb57-fcd759b8128a"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-46-n-7",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_3_wrapper",
                                        selectorGuids: ["fb995ee1-6fb4-18d0-eb57-fcd759b8128a"]
                                    },
                                    zValue: 17.83,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            keyframe: 15,
                            actionItems: [{
                                id: "a-46-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_2_wrapper",
                                        selectorGuids: ["2e949bed-2dd1-9414-ad12-68cf9dd978b7"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-46-n-11",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_2_wrapper",
                                        selectorGuids: ["2e949bed-2dd1-9414-ad12-68cf9dd978b7"]
                                    },
                                    zValue: 4.39,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            keyframe: 30,
                            actionItems: [{
                                id: "a-46-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_1_wrapper",
                                        selectorGuids: ["b76e648c-68bc-23b1-fca6-df403d84d380"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            keyframe: 35,
                            actionItems: [{
                                id: "a-46-n-8",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_3_wrapper",
                                        selectorGuids: ["fb995ee1-6fb4-18d0-eb57-fcd759b8128a"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            keyframe: 49.9,
                            actionItems: [{
                                id: "a-46-n-17",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_1_wrapper",
                                        selectorGuids: ["b76e648c-68bc-23b1-fca6-df403d84d380"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            keyframe: 50,
                            actionItems: [{
                                id: "a-46-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_1_wrapper",
                                        selectorGuids: ["b76e648c-68bc-23b1-fca6-df403d84d380"]
                                    },
                                    xValue: 25,
                                    yValue: 17,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-46-n-18",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_1_wrapper",
                                        selectorGuids: ["b76e648c-68bc-23b1-fca6-df403d84d380"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            keyframe: 59.9,
                            actionItems: [{
                                id: "a-46-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_3_wrapper",
                                        selectorGuids: ["fb995ee1-6fb4-18d0-eb57-fcd759b8128a"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            keyframe: 60,
                            actionItems: [{
                                id: "a-46-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_3_wrapper",
                                        selectorGuids: ["fb995ee1-6fb4-18d0-eb57-fcd759b8128a"]
                                    },
                                    xValue: 16,
                                    yValue: 13,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-46-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_3_wrapper",
                                        selectorGuids: ["fb995ee1-6fb4-18d0-eb57-fcd759b8128a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            keyframe: 64.9,
                            actionItems: [{
                                id: "a-46-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_2_wrapper",
                                        selectorGuids: ["2e949bed-2dd1-9414-ad12-68cf9dd978b7"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            keyframe: 65,
                            actionItems: [{
                                id: "a-46-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_2_wrapper",
                                        selectorGuids: ["2e949bed-2dd1-9414-ad12-68cf9dd978b7"]
                                    },
                                    xValue: -19,
                                    yValue: 7,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-46-n-12",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_2_wrapper",
                                        selectorGuids: ["2e949bed-2dd1-9414-ad12-68cf9dd978b7"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-46-n-14",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero_absolute_image_2_wrapper",
                                        selectorGuids: ["2e949bed-2dd1-9414-ad12-68cf9dd978b7"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x197066df68f
                },
                "a-47": {
                    id: "a-47",
                    title: "Testimonial Scroll",
                    continuousParameterGroups: [{
                        id: "a-47-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-47-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".testimonial_absolute_image_wrapper",
                                        selectorGuids: ["00473e56-9ae1-4a95-eeed-bcad2e00f72e"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".testimonial_absolute_image_wrapper",
                                        selectorGuids: ["00473e56-9ae1-4a95-eeed-bcad2e00f72e"]
                                    },
                                    zValue: 8.86,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            keyframe: 75,
                            actionItems: [{
                                id: "a-47-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".testimonial_absolute_image_wrapper",
                                        selectorGuids: ["00473e56-9ae1-4a95-eeed-bcad2e00f72e"]
                                    },
                                    xValue: 102,
                                    yValue: 45,
                                    xUnit: "vw",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".testimonial_absolute_image_wrapper",
                                        selectorGuids: ["00473e56-9ae1-4a95-eeed-bcad2e00f72e"]
                                    },
                                    zValue: 8.86,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x197067adf1f
                },
                "a-48": {
                    id: "a-48",
                    title: "Approach Dropdown Open",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-48-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".approach_dropdown_list",
                                    selectorGuids: ["7680d6d4-9a0f-d3d0-6163-e2188ee12b60"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-48-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".close_icon",
                                    selectorGuids: ["d7d6e64d-1791-c0cb-2c90-dfb3308f2ce1"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-48-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".default_icon",
                                    selectorGuids: ["04338f02-01de-5885-21bd-e6c8869f1551"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-48-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".approach_dropdown_list",
                                    selectorGuids: ["7680d6d4-9a0f-d3d0-6163-e2188ee12b60"]
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }, {
                            id: "a-48-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".default_icon",
                                    selectorGuids: ["04338f02-01de-5885-21bd-e6c8869f1551"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-48-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".close_icon",
                                    selectorGuids: ["d7d6e64d-1791-c0cb-2c90-dfb3308f2ce1"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x197071ac847
                },
                "a-49": {
                    id: "a-49",
                    title: "Approach Dropdown Close",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-49-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".approach_dropdown_list",
                                    selectorGuids: ["7680d6d4-9a0f-d3d0-6163-e2188ee12b60"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-49-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".default_icon",
                                    selectorGuids: ["04338f02-01de-5885-21bd-e6c8869f1551"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }, {
                            id: "a-49-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".close_icon",
                                    selectorGuids: ["d7d6e64d-1791-c0cb-2c90-dfb3308f2ce1"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x197071ac847
                },
                "a-51": {
                    id: "a-51",
                    title: "Approach Image Show",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-51-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".approach_hover_image",
                                    selectorGuids: ["d58421eb-21b0-1d17-51c6-d7c1d49a01d6"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-51-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor_border",
                                    selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-51-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor_dot",
                                    selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-51-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".approach_hover_image",
                                    selectorGuids: ["d58421eb-21b0-1d17-51c6-d7c1d49a01d6"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-51-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".cursor_border",
                                    selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-51-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".cursor_dot",
                                    selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x197072321b0
                },
                "a-70": {
                    id: "a-70",
                    title: "Approach Image Hide",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-70-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".approach_hover_image",
                                    selectorGuids: ["d58421eb-21b0-1d17-51c6-d7c1d49a01d6"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }, {
                            id: "a-70-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".cursor_border",
                                    selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }, {
                            id: "a-70-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".cursor_dot",
                                    selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x197072321b0
                },
                "a-54": {
                    id: "a-54",
                    title: "Footer Images Reveal",
                    continuousParameterGroups: [{
                        id: "a-54-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-54-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_1",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "26971aca-79b2-3c33-8028-d85c4c06f131"]
                                    },
                                    xValue: null,
                                    yValue: 12,
                                    xUnit: "px",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_1",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "26971aca-79b2-3c33-8028-d85c4c06f131"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_2",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "09bacbfb-52fd-a9ff-6c42-c675c7e75d2f"]
                                    },
                                    xValue: null,
                                    yValue: 12,
                                    xUnit: "px",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_2",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "09bacbfb-52fd-a9ff-6c42-c675c7e75d2f"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_3",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "9f551919-8528-26ea-2f44-5d1d5da308e5"]
                                    },
                                    xValue: null,
                                    yValue: 12,
                                    xUnit: "px",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-10",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_3",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "9f551919-8528-26ea-2f44-5d1d5da308e5"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_4",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "ceb3876d-920c-bb74-50ca-b7d35c4b071b"]
                                    },
                                    xValue: null,
                                    yValue: 12,
                                    xUnit: "px",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-14",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_4",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "ceb3876d-920c-bb74-50ca-b7d35c4b071b"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_5",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "1f216a7d-5cba-11f7-d20a-ee4756765922"]
                                    },
                                    xValue: null,
                                    yValue: 12,
                                    xUnit: "px",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-18",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_5",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "1f216a7d-5cba-11f7-d20a-ee4756765922"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-21",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_6",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "5df8e3ed-a543-8236-0974-37b91968e847"]
                                    },
                                    xValue: null,
                                    yValue: 12,
                                    xUnit: "px",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-22",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_6",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "5df8e3ed-a543-8236-0974-37b91968e847"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            keyframe: 40,
                            actionItems: [{
                                id: "a-54-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_1",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "26971aca-79b2-3c33-8028-d85c4c06f131"]
                                    },
                                    yValue: 5.5,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_1",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "26971aca-79b2-3c33-8028-d85c4c06f131"]
                                    },
                                    zValue: -30,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_2",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "09bacbfb-52fd-a9ff-6c42-c675c7e75d2f"]
                                    },
                                    yValue: 6.8,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-8",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_2",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "09bacbfb-52fd-a9ff-6c42-c675c7e75d2f"]
                                    },
                                    zValue: -15,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_3",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "9f551919-8528-26ea-2f44-5d1d5da308e5"]
                                    },
                                    yValue: 6,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-12",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_3",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "9f551919-8528-26ea-2f44-5d1d5da308e5"]
                                    },
                                    zValue: 3,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_4",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "ceb3876d-920c-bb74-50ca-b7d35c4b071b"]
                                    },
                                    yValue: 5.5,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-16",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_4",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "ceb3876d-920c-bb74-50ca-b7d35c4b071b"]
                                    },
                                    zValue: 30,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-19",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_5",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "1f216a7d-5cba-11f7-d20a-ee4756765922"]
                                    },
                                    yValue: 5.5,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-20",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_5",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "1f216a7d-5cba-11f7-d20a-ee4756765922"]
                                    },
                                    zValue: 16,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-54-n-23",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_6",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "5df8e3ed-a543-8236-0974-37b91968e847"]
                                    },
                                    yValue: 7,
                                    xUnit: "PX",
                                    yUnit: "vw",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-24",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_image_wrapper.no_6",
                                        selectorGuids: ["a0e91a69-7208-be64-a062-668485796797", "5df8e3ed-a543-8236-0974-37b91968e847"]
                                    },
                                    zValue: -3,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x1970750d2e3
                },
                "a-53": {
                    id: "a-53",
                    title: "Footer Text Movement",
                    continuousParameterGroups: [{
                        id: "a-53-p",
                        type: "MOUSE_X",
                        parameterLabel: "Mouse X",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-53-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_text_wrapper",
                                        selectorGuids: ["457f503b-434a-43c0-0d60-b05bd8998431"]
                                    },
                                    xValue: -4.5,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-53-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_text_wrapper",
                                        selectorGuids: ["457f503b-434a-43c0-0d60-b05bd8998431"]
                                    },
                                    xValue: 2.5,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }, {
                        id: "a-53-p-2",
                        type: "MOUSE_Y",
                        parameterLabel: "Mouse Y",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-53-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_text_wrapper",
                                        selectorGuids: ["457f503b-434a-43c0-0d60-b05bd8998431"]
                                    },
                                    yValue: -20,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-53-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".footer_text_wrapper",
                                        selectorGuids: ["457f503b-434a-43c0-0d60-b05bd8998431"]
                                    },
                                    yValue: 20,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x197072bea22
                },
                "a-55": {
                    id: "a-55",
                    title: "Brand Scroll",
                    continuousParameterGroups: [{
                        id: "a-55-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 20,
                            actionItems: [{
                                id: "a-55-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".trusted_companies_linear_background",
                                        selectorGuids: ["e516ea3d-3949-b4bc-6a5f-fa957061fa82"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-55-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".trusted_companies_linear_background",
                                        selectorGuids: ["e516ea3d-3949-b4bc-6a5f-fa957061fa82"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            keyframe: 40,
                            actionItems: [{
                                id: "a-55-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".trusted_companies_linear_background",
                                        selectorGuids: ["e516ea3d-3949-b4bc-6a5f-fa957061fa82"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-55-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".trusted_companies_linear_background",
                                        selectorGuids: ["e516ea3d-3949-b4bc-6a5f-fa957061fa82"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-55-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".trusted_companies_heading_wrapper",
                                        selectorGuids: ["cae2b5d2-72ba-e319-5586-8df690fb0412"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            keyframe: 70,
                            actionItems: [{
                                id: "a-55-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".trusted_companies_heading_wrapper",
                                        selectorGuids: ["cae2b5d2-72ba-e319-5586-8df690fb0412"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x19707746a1d
                },
                "a-56": {
                    id: "a-56",
                    title: "Test Scroll",
                    continuousParameterGroups: [{
                        id: "a-56-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 10,
                            actionItems: [{
                                id: "a-56-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_overlay._1",
                                        selectorGuids: ["57ff470b-779a-172a-01a9-d843e47c6c77", "a3a9bec7-28bc-356e-106e-c320bf3e709c"]
                                    },
                                    widthValue: 100,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }, {
                            keyframe: 25,
                            actionItems: [{
                                id: "a-56-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_overlay._1",
                                        selectorGuids: ["57ff470b-779a-172a-01a9-d843e47c6c77", "a3a9bec7-28bc-356e-106e-c320bf3e709c"]
                                    },
                                    widthValue: 0,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }, {
                                id: "a-56-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_overlay._2",
                                        selectorGuids: ["57ff470b-779a-172a-01a9-d843e47c6c77", "b98b0af9-c0af-1410-c4f0-3f8a25fb2017"]
                                    },
                                    widthValue: 100,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }, {
                            keyframe: 40,
                            actionItems: [{
                                id: "a-56-n-4",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_overlay._2",
                                        selectorGuids: ["57ff470b-779a-172a-01a9-d843e47c6c77", "b98b0af9-c0af-1410-c4f0-3f8a25fb2017"]
                                    },
                                    widthValue: 0,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }, {
                                id: "a-56-n-5",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_overlay._3",
                                        selectorGuids: ["57ff470b-779a-172a-01a9-d843e47c6c77", "d1f84e15-2134-58a7-0553-183f737829b6"]
                                    },
                                    widthValue: 100,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }, {
                            keyframe: 55,
                            actionItems: [{
                                id: "a-56-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_overlay._3",
                                        selectorGuids: ["57ff470b-779a-172a-01a9-d843e47c6c77", "d1f84e15-2134-58a7-0553-183f737829b6"]
                                    },
                                    widthValue: 0,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-56-n-7",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_overlay._4",
                                        selectorGuids: ["57ff470b-779a-172a-01a9-d843e47c6c77", "728f7448-597f-ddb9-ce8c-464f06de5513"]
                                    },
                                    widthValue: 100,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }, {
                            keyframe: 70,
                            actionItems: [{
                                id: "a-56-n-8",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_overlay._4",
                                        selectorGuids: ["57ff470b-779a-172a-01a9-d843e47c6c77", "728f7448-597f-ddb9-ce8c-464f06de5513"]
                                    },
                                    widthValue: 0,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x1970797bb49
                },
                "a-58": {
                    id: "a-58",
                    title: "About Video Scroll",
                    continuousParameterGroups: [{
                        id: "a-58-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-58-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".about_video",
                                        selectorGuids: ["f1e0b4e3-0eda-a870-8043-6be201fe47eb"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }, {
                            keyframe: 60,
                            actionItems: [{
                                id: "a-58-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".about_video",
                                        selectorGuids: ["f1e0b4e3-0eda-a870-8043-6be201fe47eb"]
                                    },
                                    widthValue: 100,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "%",
                                    locked: !1
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x19707cb9a6c
                },
                "a-50": {
                    id: "a-50",
                    title: "Approach Image Move",
                    continuousParameterGroups: [{
                        id: "a-50-p",
                        type: "MOUSE_X",
                        parameterLabel: "Mouse X",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-50-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".approach_hover_image",
                                        selectorGuids: ["d58421eb-21b0-1d17-51c6-d7c1d49a01d6"]
                                    },
                                    xValue: -50,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-50-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".approach_hover_image",
                                        selectorGuids: ["d58421eb-21b0-1d17-51c6-d7c1d49a01d6"]
                                    },
                                    zValue: -5,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-50-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".approach_hover_image",
                                        selectorGuids: ["d58421eb-21b0-1d17-51c6-d7c1d49a01d6"]
                                    },
                                    xValue: 38,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-50-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".approach_hover_image",
                                        selectorGuids: ["d58421eb-21b0-1d17-51c6-d7c1d49a01d6"]
                                    },
                                    zValue: 5,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }]
                    }, {
                        id: "a-50-p-2",
                        type: "MOUSE_Y",
                        parameterLabel: "Mouse Y",
                        continuousActionGroups: []
                    }],
                    createdOn: 0x1970720c911
                },
                "a-59": {
                    id: "a-59",
                    title: "Testimonial Card Scroll",
                    continuousParameterGroups: [{
                        id: "a-59-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 15,
                            actionItems: [{
                                id: "a-59-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67f35087f2c378bfbd44b7f1|55682f9e-0613-0010-8b53-654f7f8ea6af"
                                    },
                                    xValue: 100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 50,
                            actionItems: [{
                                id: "a-59-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "67f35087f2c378bfbd44b7f1|55682f9e-0613-0010-8b53-654f7f8ea6af"
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x1970bb3c6dd
                },
                "a-60": {
                    id: "a-60",
                    title: "Fade in",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-60-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "6aec4199-658d-1d42-3a9a-12d1e30d9f3f"
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-60-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 700,
                                target: {
                                    useEventTarget: !0,
                                    id: "6aec4199-658d-1d42-3a9a-12d1e30d9f3f"
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1970c38bb87
                },
                "a-63": {
                    id: "a-63",
                    title: "Cursor Dot Movement",
                    continuousParameterGroups: [{
                        id: "a-63-p",
                        type: "MOUSE_X",
                        parameterLabel: "Mouse X",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-63-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                    },
                                    xValue: -50,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-63-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                    },
                                    xValue: 50,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }, {
                        id: "a-63-p-2",
                        type: "MOUSE_Y",
                        parameterLabel: "Mouse Y",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-63-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                    },
                                    yValue: -50,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-63-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x197159065fa
                },
                "a-64": {
                    id: "a-64",
                    title: "Cursor Border Movement",
                    continuousParameterGroups: [{
                        id: "a-64-p",
                        type: "MOUSE_X",
                        parameterLabel: "Mouse X",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-64-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_border",
                                        selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                    },
                                    xValue: -50,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-64-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_border",
                                        selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                    },
                                    xValue: 50,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }, {
                        id: "a-64-p-2",
                        type: "MOUSE_Y",
                        parameterLabel: "Mouse Y",
                        continuousActionGroups: [{
                            keyframe: 0,
                            actionItems: [{
                                id: "a-64-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_border",
                                        selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                    },
                                    yValue: -50,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 100,
                            actionItems: [{
                                id: "a-64-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_border",
                                        selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x197159065fa
                },
                "a-65": {
                    id: "a-65",
                    title: "Show Custom Cursor",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-65-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor_wrapper",
                                    selectorGuids: ["dba8d595-7a1d-d28e-c83c-7d065f005559"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-65-n-2",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".cursor_wrapper",
                                    selectorGuids: ["dba8d595-7a1d-d28e-c83c-7d065f005559"]
                                },
                                value: "flex"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-65-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".cursor_wrapper",
                                    selectorGuids: ["dba8d595-7a1d-d28e-c83c-7d065f005559"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19715930209
                },
                "a-66": {
                    id: "a-66",
                    title: "Hide Custom Cursor",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-66-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".cursor_wrapper",
                                    selectorGuids: ["dba8d595-7a1d-d28e-c83c-7d065f005559"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x19715930209
                },
                "a-67": {
                    id: "a-67",
                    title: "Site Line Animation",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-67-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".site_line",
                                    selectorGuids: ["884ff016-2917-1849-1903-128317d738f2"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "vh",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-67-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 1e4,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".site_line",
                                    selectorGuids: ["884ff016-2917-1849-1903-128317d738f2"]
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "vh",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-67-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".site_line",
                                    selectorGuids: ["884ff016-2917-1849-1903-128317d738f2"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "vh",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19715a43e17
                },
                "a-69": {
                    id: "a-69",
                    title: "Image Animation",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-69-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".bg_color_column",
                                    selectorGuids: ["92b25267-047e-f2f3-ba3f-209faf8202dc"]
                                },
                                widthValue: 100,
                                widthUnit: "%",
                                heightUnit: "PX",
                                locked: !1
                            }
                        }, {
                            id: "a-69-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".neutral_color_column",
                                    selectorGuids: ["46d2e825-3e68-75e0-9845-85a5e2e601bc"]
                                },
                                widthValue: 100,
                                widthUnit: "%",
                                heightUnit: "PX",
                                locked: !1
                            }
                        }, {
                            id: "a-69-n-3",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f35087f2c378bfbd44b7f1|8d4f3a06-ef82-c121-1582-bc9f6cb0d105"
                                },
                                value: "grid"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-69-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 500,
                                easing: "inOutExpo",
                                duration: 1e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".bg_color_column",
                                    selectorGuids: ["92b25267-047e-f2f3-ba3f-209faf8202dc"]
                                },
                                widthValue: 0,
                                widthUnit: "%",
                                heightUnit: "PX",
                                locked: !1
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-69-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inOutCirc",
                                duration: 1e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".neutral_color_column",
                                    selectorGuids: ["46d2e825-3e68-75e0-9845-85a5e2e601bc"]
                                },
                                widthValue: 0,
                                widthUnit: "%",
                                heightUnit: "PX",
                                locked: !1
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-69-n-6",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: !0,
                                    id: "67f35087f2c378bfbd44b7f1|8d4f3a06-ef82-c121-1582-bc9f6cb0d105"
                                },
                                value: "none"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1971629e98c
                },
                "a-74": {
                    id: "a-74",
                    title: "Banner Image Move Left",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-74-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".banner_images_block",
                                    selectorGuids: ["4a5736e7-11ee-6457-c092-477c17203ff9"]
                                },
                                xValue: 0,
                                xUnit: "vw",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-74-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 1e3,
                                target: {
                                    selector: ".banner_images_block",
                                    selectorGuids: ["4a5736e7-11ee-6457-c092-477c17203ff9"]
                                },
                                xValue: -5,
                                xUnit: "vw",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19716e815b5
                },
                "a-75": {
                    id: "a-75",
                    title: "Banner Image Move Right",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-75-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 1e3,
                                target: {
                                    selector: ".banner_images_block",
                                    selectorGuids: ["4a5736e7-11ee-6457-c092-477c17203ff9"]
                                },
                                xValue: 5,
                                xUnit: "vw",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x19716e815b5
                },
                "a-72": {
                    id: "a-72",
                    title: "Cursor Color Change",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-72-n",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor_dot",
                                    selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                },
                                globalSwatchId: "--primary",
                                rValue: 190,
                                bValue: 250,
                                gValue: 161,
                                aValue: 1
                            }
                        }, {
                            id: "a-72-n-2",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".cursor_border",
                                    selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                },
                                globalSwatchId: "--primary",
                                rValue: 190,
                                bValue: 250,
                                gValue: 161,
                                aValue: 1
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-72-n-3",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {
                                    selector: ".cursor_border",
                                    selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                },
                                globalSwatchId: "--neutral",
                                rValue: 0,
                                bValue: 0,
                                gValue: 0,
                                aValue: 1
                            }
                        }, {
                            id: "a-72-n-4",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {
                                    selector: ".cursor_dot",
                                    selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                },
                                globalSwatchId: "--neutral",
                                rValue: 0,
                                bValue: 0,
                                gValue: 0,
                                aValue: 1
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19716dbb4cd
                },
                "a-73": {
                    id: "a-73",
                    title: "Cursor Color Original",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-73-n-3",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {
                                    selector: ".cursor_border",
                                    selectorGuids: ["f85d51f4-cc71-09ba-f6d6-f11767625167"]
                                },
                                globalSwatchId: "--primary",
                                rValue: 190,
                                bValue: 250,
                                gValue: 161,
                                aValue: 1
                            }
                        }, {
                            id: "a-73-n-4",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {
                                    selector: ".cursor_dot",
                                    selectorGuids: ["28027ec2-af82-425a-f6c1-9693ba7914aa"]
                                },
                                globalSwatchId: "--primary",
                                rValue: 190,
                                bValue: 250,
                                gValue: 161,
                                aValue: 1
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x19716dbb4cd
                },
                "a-76": {
                    id: "a-76",
                    title: "Testimonial Card Scroll",
                    continuousParameterGroups: [{
                        id: "a-76-p",
                        type: "SCROLL_PROGRESS",
                        parameterLabel: "Scroll",
                        continuousActionGroups: [{
                            keyframe: 15,
                            actionItems: [{
                                id: "a-76-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".frame.testimonial",
                                        selectorGuids: ["3084c8dd-77d0-9646-fc21-9cea595a6e67", "baaaa7ce-dbb7-f7d5-363a-1a2182e64139"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            keyframe: 50,
                            actionItems: [{
                                id: "a-76-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".frame.testimonial",
                                        selectorGuids: ["3084c8dd-77d0-9646-fc21-9cea595a6e67", "baaaa7ce-dbb7-f7d5-363a-1a2182e64139"]
                                    },
                                    xValue: -64,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    }],
                    createdOn: 0x1970600f85b
                },
                "a-78": {
                    id: "a-78",
                    title: "Footer Text Move",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-78-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".footer_text",
                                    selectorGuids: ["8e2bca5e-809d-fdd0-4ef7-2159dc9fcd95"]
                                },
                                xValue: -106,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-78-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 1e4,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".footer_text",
                                    selectorGuids: ["8e2bca5e-809d-fdd0-4ef7-2159dc9fcd95"]
                                },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-78-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".footer_text",
                                    selectorGuids: ["8e2bca5e-809d-fdd0-4ef7-2159dc9fcd95"]
                                },
                                xValue: -106,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19695e5ba9a
                },
                "a-81": {
                    id: "a-81",
                    title: "Slide To Top (Delay 0 Sec)",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-81-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "680f6c48a8b3a4971edcacd0|9c4748e7-f543-c5ca-9092-11df4e5c2565"
                                },
                                yValue: 50,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-81-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: !0,
                                    id: "68188b2536fa6944f9010dba|12ca56b7-29a7-1e72-a04e-5e9d35cb23d4"
                                },
                                value: 0,
                                unit: ""
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-81-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 1e3,
                                target: {
                                    useEventTarget: !0,
                                    id: "680f6c48a8b3a4971edcacd0|9c4748e7-f543-c5ca-9092-11df4e5c2565"
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-81-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 1e3,
                                target: {
                                    useEventTarget: !0,
                                    id: "68188b2536fa6944f9010dba|12ca56b7-29a7-1e72-a04e-5e9d35cb23d4"
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x196a9fe5291
                },
                "a-79": {
                    id: "a-79",
                    title: "FAQ Show",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-79-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-answer-block",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4d"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-79-n-10",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-question-icon",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4b"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-79-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service_dropdown_image_wrapper",
                                    selectorGuids: ["835f6958-4fb5-f519-d937-dc33f58815be"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-79-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-answer-block",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4d"]
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }, {
                            id: "a-79-n-11",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-question-icon",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4b"]
                                },
                                zValue: 90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-79-n-9",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service_dropdown_image_wrapper",
                                    selectorGuids: ["835f6958-4fb5-f519-d937-dc33f58815be"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x190a4f0793d
                },
                "a-82": {
                    id: "a-82",
                    title: "FAQ Hide",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-82-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-answer-block",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4d"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-82-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-question-icon",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4b"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-82-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service_dropdown_image_wrapper",
                                    selectorGuids: ["835f6958-4fb5-f519-d937-dc33f58815be"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x190a4f0793d
                },
                "a-87": {
                    id: "a-87",
                    title: "Header Dropdown Open",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-87-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".header-dropdown-list",
                                    selectorGuids: ["cf763e44-ddd1-ffb1-3cdf-4622211d9e5d"]
                                },
                                value: "none"
                            }
                        }, {
                            id: "a-87-n-11",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav_dropdown_icon",
                                    selectorGuids: ["e9fe330b-f3e5-3c5c-86a5-c9ef1ddd1112"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-87-n-9",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav_link-_for_dropdown",
                                    selectorGuids: ["58d4788c-5090-732c-f452-8cede70ee008"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-87-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".header-dropdown-list",
                                    selectorGuids: ["cf763e44-ddd1-ffb1-3cdf-4622211d9e5d"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-87-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".header-dropdown-list",
                                    selectorGuids: ["cf763e44-ddd1-ffb1-3cdf-4622211d9e5d"]
                                },
                                yValue: 20,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-87-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav_dropdown_icon",
                                    selectorGuids: ["e9fe330b-f3e5-3c5c-86a5-c9ef1ddd1112"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-87-n-5",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "easeOut",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".header-dropdown-list",
                                    selectorGuids: ["cf763e44-ddd1-ffb1-3cdf-4622211d9e5d"]
                                },
                                value: "flex"
                            }
                        }, {
                            id: "a-87-n-12",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav_dropdown_icon",
                                    selectorGuids: ["e9fe330b-f3e5-3c5c-86a5-c9ef1ddd1112"]
                                },
                                globalSwatchId: "--primary",
                                rValue: 190,
                                bValue: 250,
                                gValue: 161,
                                aValue: 1
                            }
                        }, {
                            id: "a-87-n-10",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav_link-_for_dropdown",
                                    selectorGuids: ["58d4788c-5090-732c-f452-8cede70ee008"]
                                },
                                globalSwatchId: "--primary",
                                rValue: 190,
                                bValue: 250,
                                gValue: 161,
                                aValue: 1
                            }
                        }, {
                            id: "a-87-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "easeOut",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav_dropdown_icon",
                                    selectorGuids: ["e9fe330b-f3e5-3c5c-86a5-c9ef1ddd1112"]
                                },
                                zValue: 180,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-87-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "easeOut",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".header-dropdown-list",
                                    selectorGuids: ["cf763e44-ddd1-ffb1-3cdf-4622211d9e5d"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-87-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "easeOut",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".header-dropdown-list",
                                    selectorGuids: ["cf763e44-ddd1-ffb1-3cdf-4622211d9e5d"]
                                },
                                value: 1,
                                unit: ""
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x19417306d6c
                },
                "a-88": {
                    id: "a-88",
                    title: "Header Dropdown Close",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-88-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".header-dropdown-list",
                                    selectorGuids: ["cf763e44-ddd1-ffb1-3cdf-4622211d9e5d"]
                                },
                                value: 0,
                                unit: ""
                            }
                        }, {
                            id: "a-88-n-6",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav_link-_for_dropdown",
                                    selectorGuids: ["58d4788c-5090-732c-f452-8cede70ee008"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-88-n-5",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav_dropdown_icon",
                                    selectorGuids: ["e9fe330b-f3e5-3c5c-86a5-c9ef1ddd1112"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-88-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".header-dropdown-list",
                                    selectorGuids: ["cf763e44-ddd1-ffb1-3cdf-4622211d9e5d"]
                                },
                                yValue: 20,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-88-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "outExpo",
                                duration: 400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav_dropdown_icon",
                                    selectorGuids: ["e9fe330b-f3e5-3c5c-86a5-c9ef1ddd1112"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-88-n-4",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 200,
                                easing: "outExpo",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".header-dropdown-list",
                                    selectorGuids: ["cf763e44-ddd1-ffb1-3cdf-4622211d9e5d"]
                                },
                                value: "none"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x19417306d6c
                },
                "a-89": {
                    id: "a-89",
                    title: "Case Study Button Hover In",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-89-n-5",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_button_arrow",
                                    selectorGuids: ["8bc59c9f-d460-a5ee-f94c-d763dbc4e833"]
                                },
                                globalSwatchId: "--_neutral-color---100",
                                rValue: 176,
                                bValue: 176,
                                gValue: 176,
                                aValue: 1
                            }
                        }, {
                            id: "a-89-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_button_arrow",
                                    selectorGuids: ["8bc59c9f-d460-a5ee-f94c-d763dbc4e833"]
                                },
                                xValue: -100,
                                yValue: -100,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-89-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_button_text",
                                    selectorGuids: ["5a42e780-08e4-e63a-9dc4-ef5313a90c13"]
                                },
                                globalSwatchId: "--_neutral-color---100",
                                rValue: 176,
                                bValue: 176,
                                gValue: 176,
                                aValue: 1
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-89-n-6",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_button_arrow",
                                    selectorGuids: ["8bc59c9f-d460-a5ee-f94c-d763dbc4e833"]
                                },
                                globalSwatchId: "--primary",
                                rValue: 190,
                                bValue: 250,
                                gValue: 161,
                                aValue: 1
                            }
                        }, {
                            id: "a-89-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_button_arrow",
                                    selectorGuids: ["8bc59c9f-d460-a5ee-f94c-d763dbc4e833"]
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }, {
                            id: "a-89-n-4",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_button_text",
                                    selectorGuids: ["5a42e780-08e4-e63a-9dc4-ef5313a90c13"]
                                },
                                globalSwatchId: "--primary",
                                rValue: 190,
                                bValue: 250,
                                gValue: 161,
                                aValue: 1
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x1973a685992
                },
                "a-90": {
                    id: "a-90",
                    title: "Case Study Button Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-90-n-3",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_button_arrow",
                                    selectorGuids: ["8bc59c9f-d460-a5ee-f94c-d763dbc4e833"]
                                },
                                globalSwatchId: "--_neutral-color---100",
                                rValue: 176,
                                bValue: 176,
                                gValue: 176,
                                aValue: 1
                            }
                        }, {
                            id: "a-90-n-6",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_button_text",
                                    selectorGuids: ["5a42e780-08e4-e63a-9dc4-ef5313a90c13"]
                                },
                                globalSwatchId: "--_neutral-color---100",
                                rValue: 176,
                                bValue: 176,
                                gValue: 176,
                                aValue: 1
                            }
                        }, {
                            id: "a-90-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".case_studies_button_arrow",
                                    selectorGuids: ["8bc59c9f-d460-a5ee-f94c-d763dbc4e833"]
                                },
                                xValue: -100,
                                yValue: -100,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x1973a685992
                },
                "a-91": {
                    id: "a-91",
                    title: "FAQ Show(Mobile)",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-91-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-answer-block",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4d"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-91-n-7",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-question-title",
                                    selectorGuids: ["234c6385-f5ea-d0dd-9da0-ac731bd9b035"]
                                },
                                globalSwatchId: "--_neutral-color---100",
                                rValue: 176,
                                bValue: 176,
                                gValue: 176,
                                aValue: 1
                            }
                        }, {
                            id: "a-91-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-question-icon",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4b"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-91-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service_dropdown_image_wrapper",
                                    selectorGuids: ["835f6958-4fb5-f519-d937-dc33f58815be"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-91-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-answer-block",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4d"]
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: !1
                            }
                        }, {
                            id: "a-91-n-8",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-question-title",
                                    selectorGuids: ["234c6385-f5ea-d0dd-9da0-ac731bd9b035"]
                                },
                                globalSwatchId: "--white",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 1
                            }
                        }, {
                            id: "a-91-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-question-icon",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4b"]
                                },
                                zValue: 90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-91-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service_dropdown_image_wrapper",
                                    selectorGuids: ["835f6958-4fb5-f519-d937-dc33f58815be"]
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x190a4f0793d
                },
                "a-92": {
                    id: "a-92",
                    title: "FAQ Hide (Mobile)",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-92-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-answer-block",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4d"]
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: !1
                            }
                        }, {
                            id: "a-92-n-4",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 800,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-question-title",
                                    selectorGuids: ["234c6385-f5ea-d0dd-9da0-ac731bd9b035"]
                                },
                                globalSwatchId: "--_neutral-color---100",
                                rValue: 176,
                                bValue: 176,
                                gValue: 176,
                                aValue: 1
                            }
                        }, {
                            id: "a-92-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1e3,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".faq-question-icon",
                                    selectorGuids: ["3e919642-e055-e8fd-96ce-be6516649d4b"]
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "deg"
                            }
                        }, {
                            id: "a-92-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "inOutQuad",
                                duration: 1300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".service_dropdown_image_wrapper",
                                    selectorGuids: ["835f6958-4fb5-f519-d937-dc33f58815be"]
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: !0
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x190a4f0793d
                },
                "a-93": {
                    id: "a-93",
                    title: "Production View Button Hover In",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-93-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".production-button-arrow",
                                    selectorGuids: ["164e9a5d-9259-76a4-b421-a4369f0eb862"]
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-93-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".production-button-arrow",
                                    selectorGuids: ["164e9a5d-9259-76a4-b421-a4369f0eb862"]
                                },
                                xValue: 5,
                                yValue: -5,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !0,
                    createdOn: 0x18da64dc3b2
                },
                "a-94": {
                    id: "a-94",
                    title: "Production View Button Hover Out",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-94-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".production-button-arrow",
                                    selectorGuids: ["164e9a5d-9259-76a4-b421-a4369f0eb862"]
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    useFirstGroupAsInitialState: !1,
                    createdOn: 0x18da64dc3b2
                },
                "a-95": {
                    id: "a-95",
                    title: "Production Template Hide",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-95-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    selector: ".production-template-block",
                                    selectorGuids: ["164e9a5d-9259-76a4-b421-a4369f0eb868"]
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    createdOn: 0x197a1b4908a,
                    useFirstGroupAsInitialState: !1
                },
                "a-96": {
                    id: "a-96",
                    title: "Production Template Show",
                    actionItemGroups: [{
                        actionItems: [{
                            id: "a-96-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    selector: ".production-template-block",
                                    selectorGuids: ["164e9a5d-9259-76a4-b421-a4369f0eb868"]
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            id: "a-96-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuad",
                                duration: 500,
                                target: {
                                    selector: ".production-template-block",
                                    selectorGuids: ["164e9a5d-9259-76a4-b421-a4369f0eb868"]
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX"
                            }
                        }]
                    }],
                    createdOn: 0x197a1b4908a,
                    useFirstGroupAsInitialState: !0
                },
                growBigIn: {
                    id: "growBigIn",
                    useFirstGroupAsInitialState: !0,
                    actionItemGroups: [{
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 0
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 0,
                                yValue: 0
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 1,
                                yValue: 1
                            }
                        }, {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 1
                            }
                        }]
                    }]
                },
                slideInBottom: {
                    id: "slideInBottom",
                    useFirstGroupAsInitialState: !0,
                    actionItemGroups: [{
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 0
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 0,
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX"
                            }
                        }, {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 1
                            }
                        }]
                    }]
                },
                flipInLeft: {
                    id: "flipInLeft",
                    useFirstGroupAsInitialState: !0,
                    actionItemGroups: [{
                        actionItems: [{
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                duration: 0,
                                delay: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 0
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 0,
                                yValue: -90,
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        }]
                    }, {
                        actionItems: [{
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                xValue: 0,
                                yValue: 0,
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG"
                            }
                        }, {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1e3,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: !0
                                },
                                value: 1
                            }
                        }]
                    }]
                }
            },
            site: {
                mediaQueries: [{
                    key: "main",
                    min: 992,
                    max: 1e4
                }, {
                    key: "medium",
                    min: 768,
                    max: 991
                }, {
                    key: "small",
                    min: 480,
                    max: 767
                }, {
                    key: "tiny",
                    min: 0,
                    max: 479
                }]
            }
        })
    }
}]);

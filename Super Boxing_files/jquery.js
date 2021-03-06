//JQUERY
(function(b, c) {
    function d(j, b, n) {
        if (n === c && 1 === j.nodeType)
            if (n = "data-" + b.replace(sc, "-$1").toLowerCase(),
            n = j.getAttribute(n),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : tc.test(n) ? e.parseJSON(n) : n
                } catch (X) {}
                e.data(j, b, n)
            } else
                n = c;
        return n
    }
    function f(j) {
        for (var b in j)
            if (!("data" === b && e.isEmptyObject(j[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function g() {
        return !1
    }
    function p() {
        return !0
    }
    function x(j) {
        return !j || !j.parentNode || 11 === j.parentNode.nodeType
    }
    function t(j, b) {
        do
            j = j[b];
        while (j && 1 !== j.nodeType);return j
    }
    function y(j, b, n) {
        b = b || 0;
        if (e.isFunction(b))
            return e.grep(j, function(j, c) {
                return !!b.call(j, c, j) === n
            });
        if (b.nodeType)
            return e.grep(j, function(j) {
                return j === b === n
            });
        if ("string" == typeof b) {
            var c = e.grep(j, function(j) {
                return 1 === j.nodeType
            });
            if (uc.test(b))
                return e.filter(b, c, !n);
            b = e.filter(b, c)
        }
        return e.grep(j, function(j) {
            return 0 <= e.inArray(j, b) === n
        })
    }
    function A(j) {
        var b = wb.split("|");
        j = j.createDocumentFragment();
        if (j.createElement)
            for (; b.length; )
                j.createElement(b.pop());
        return j
    }
    function B(j, b) {
        if (1 === b.nodeType && e.hasData(j)) {
            var n, c, d;
            c = e._data(j);
            var r = e._data(b, c)
              , m = c.events;
            if (m)
                for (n in delete r.handle,
                r.events = {},
                m) {
                    c = 0;
                    for (d = m[n].length; c < d; c++)
                        e.event.add(b, n, m[n][c])
                }
            r.data && (r.data = e.extend({}, r.data))
        }
    }
    function l(j, b) {
        var n;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(),
        b.mergeAttributes && b.mergeAttributes(j),
        n = b.nodeName.toLowerCase(),
        "object" === n ? (b.parentNode && (b.outerHTML = j.outerHTML),
        e.support.html5Clone && j.innerHTML && !e.trim(b.innerHTML) && (b.innerHTML = j.innerHTML)) : "input" === n && xb.test(j.type) ? (b.defaultChecked = b.checked = j.checked,
        b.value !== j.value && (b.value = j.value)) : "option" === n ? b.selected = j.defaultSelected : "input" === n || "textarea" === n ? b.defaultValue = j.defaultValue : "script" === n && b.text !== j.text && (b.text = j.text),
        b.removeAttribute(e.expando))
    }
    function s(j) {
        return "undefined" != typeof j.getElementsByTagName ? j.getElementsByTagName("*") : "undefined" != typeof j.querySelectorAll ? j.querySelectorAll("*") : []
    }
    function u(j) {
        xb.test(j.type) && (j.defaultChecked = j.checked)
    }
    function z(j, b) {
        if (b in j)
            return b;
        for (var n = b.charAt(0).toUpperCase() + b.slice(1), c = b, e = yb.length; e--; )
            if (b = yb[e] + n,
            b in j)
                return b;
        return c
    }
    function L(j, b) {
        return j = b || j,
        "none" === e.css(j, "display") || !e.contains(j.ownerDocument, j)
    }
    function K(j, b) {
        for (var n, c, d = [], r = 0, m = j.length; r < m; r++)
            n = j[r],
            n.style && (d[r] = e._data(n, "olddisplay"),
            b ? (!d[r] && "none" === n.style.display && (n.style.display = ""),
            "" === n.style.display && L(n) && (d[r] = e._data(n, "olddisplay", I(n.nodeName)))) : (c = P(n, "display"),
            !d[r] && "none" !== c && e._data(n, "olddisplay", c)));
        for (r = 0; r < m; r++)
            if (n = j[r],
            n.style && (!b || "none" === n.style.display || "" === n.style.display))
                n.style.display = b ? d[r] || "" : "none";
        return j
    }
    function D(j, b, n) {
        return (j = vc.exec(b)) ? Math.max(0, j[1] - (n || 0)) + (j[2] || "px") : b
    }
    function Xa(j, b, n, c) {
        b = n === (c ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var d = 0; 4 > b; b += 2)
            "margin" === n && (d += e.css(j, n + ea[b], !0)),
            c ? ("content" === n && (d -= parseFloat(P(j, "padding" + ea[b])) || 0),
            "margin" !== n && (d -= parseFloat(P(j, "border" + ea[b] + "Width")) || 0)) : (d += parseFloat(P(j, "padding" + ea[b])) || 0,
            "padding" !== n && (d += parseFloat(P(j, "border" + ea[b] + "Width")) || 0));
        return d
    }
    function J(j, b, n) {
        var c = "width" === b ? j.offsetWidth : j.offsetHeight
          , d = !0
          , r = e.support.boxSizing && "border-box" === e.css(j, "boxSizing");
        if (0 >= c || null == c) {
            c = P(j, b);
            if (0 > c || null == c)
                c = j.style[b];
            if (ya.test(c))
                return c;
            d = r && (e.support.boxSizingReliable || c === j.style[b]);
            c = parseFloat(c) || 0
        }
        return c + Xa(j, b, n || (r ? "border" : "content"), d) + "px"
    }
    function I(j) {
        if (Ya[j])
            return Ya[j];
        var b = e("<" + j + ">").appendTo(C.body)
          , n = b.css("display");
        b.remove();
        if ("none" === n || "" === n) {
            la = C.body.appendChild(la || e.extend(C.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ma || !la.createElement)
                ma = (la.contentWindow || la.contentDocument).document,
                ma.write("<!doctype html><html><body>"),
                ma.close();
            b = ma.body.appendChild(ma.createElement(j));
            n = P(b, "display");
            C.body.removeChild(la)
        }
        return Ya[j] = n,
        n
    }
    function O(j, b, n, c) {
        var d;
        if (e.isArray(b))
            e.each(b, function(b, q) {
                n || wc.test(j) ? c(j, q) : O(j + "[" + ("object" == typeof q ? b : "") + "]", q, n, c)
            });
        else if (!n && "object" === e.type(b))
            for (d in b)
                O(j + "[" + d + "]", b[d], n, c);
        else
            c(j, b)
    }
    function za(j) {
        return function(b, n) {
            "string" != typeof b && (n = b,
            b = "*");
            var c, d, r = b.toLowerCase().split(fa), m = 0, l = r.length;
            if (e.isFunction(n))
                for (; m < l; m++)
                    c = r[m],
                    (d = /^\+/.test(c)) && (c = c.substr(1) || "*"),
                    c = j[c] = j[c] || [],
                    c[d ? "unshift" : "push"](n)
        }
    }
    function na(j, b, n, e, d, r) {
        d = d || b.dataTypes[0];
        r = r || {};
        r[d] = !0;
        var m;
        d = j[d];
        for (var l = 0, f = d ? d.length : 0, g = j === Za; l < f && (g || !m); l++)
            m = d[l](b, n, e),
            "string" == typeof m && (!g || r[m] ? m = c : (b.dataTypes.unshift(m),
            m = na(j, b, n, e, m, r)));
        return (g || !m) && !r["*"] && (m = na(j, b, n, e, "*", r)),
        m
    }
    function sa(j, b) {
        var n, X, d = e.ajaxSettings.flatOptions || {};
        for (n in b)
            b[n] !== c && ((d[n] ? j : X || (X = {}))[n] = b[n]);
        X && e.extend(!0, j, X)
    }
    function zb() {
        try {
            return new b.XMLHttpRequest
        } catch (j) {}
    }
    function Ab() {
        return setTimeout(function() {
            Aa = c
        }, 0),
        Aa = e.now()
    }
    function Bb(j, b, n) {
        var c, d = 0, r = Ba.length, m = e.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            for (var b = Aa || Ab(), b = Math.max(0, f.startTime + f.duration - b), q = 1 - (b / f.duration || 0), c = 0, n = f.tweens.length; c < n; c++)
                f.tweens[c].run(q);
            return m.notifyWith(j, [f, q, b]),
            1 > q && n ? b : (m.resolveWith(j, [f]),
            !1)
        }, f = m.promise({
            elem: j,
            props: e.extend({}, b),
            opts: e.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: b,
            originalOptions: n,
            startTime: Aa || Ab(),
            duration: n.duration,
            tweens: [],
            createTween: function(b, q) {
                var c = e.Tween(j, f.opts, b, q, f.opts.specialEasing[b] || f.opts.easing);
                return f.tweens.push(c),
                c
            },
            stop: function(b) {
                for (var q = 0, c = b ? f.tweens.length : 0; q < c; q++)
                    f.tweens[q].run(1);
                return b ? m.resolveWith(j, [f, b]) : m.rejectWith(j, [f, b]),
                this
            }
        });
        b = f.props;
        n = f.opts.specialEasing;
        var g, s, u, t;
        for (c in b)
            if (g = e.camelCase(c),
            s = n[g],
            u = b[c],
            e.isArray(u) && (s = u[1],
            u = b[c] = u[0]),
            c !== g && (b[g] = u,
            delete b[c]),
            (t = e.cssHooks[g]) && "expand"in t)
                for (c in u = t.expand(u),
                delete b[g],
                u)
                    c in b || (b[c] = u[c],
                    n[c] = s);
            else
                n[g] = s;
        for (; d < r; d++)
            if (c = Ba[d].call(f, j, b, f.opts))
                return c;
        var p = f;
        e.each(b, function(j, b) {
            for (var q = (ta[j] || []).concat(ta["*"]), c = 0, n = q.length; c < n && !q[c].call(p, j, b); c++)
                ;
        });
        return e.isFunction(f.opts.start) && f.opts.start.call(j, f),
        e.fx.timer(e.extend(l, {
            anim: f,
            queue: f.opts.queue,
            elem: j
        })),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function R(j, b, c, e, d) {
        return new R.prototype.init(j,b,c,e,d)
    }
    function Ca(j, b) {
        var c, e = {
            height: j
        }, d = 0;
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = ea[d],
            e["margin" + c] = e["padding" + c] = j;
        return b && (e.opacity = e.width = j),
        e
    }
    function Cb(j) {
        return e.isWindow(j) ? j : 9 === j.nodeType ? j.defaultView || j.parentWindow : !1
    }
    var Db, Da, C = b.document, yc = b.location, zc = b.navigator, Ac = b.jQuery, Bc = b.$, Eb = Array.prototype.push, Z = Array.prototype.slice, Fb = Array.prototype.indexOf, Cc = Object.prototype.toString, $a = Object.prototype.hasOwnProperty, ab = String.prototype.trim, e = function(j, b) {
        return new e.fn.init(j,b,Db)
    }, Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Dc = /\S/, fa = /\s+/, Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Gc = /^[\],:{}\s]*$/, Hc = /(?:^|:|,)(?:\s*\[)+/g, Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, Kc = /^-ms-/, Lc = /-([\da-z])/gi, Mc = function(j, b) {
        return (b + "").toUpperCase()
    }, Fa = function() {
        C.addEventListener ? (C.removeEventListener("DOMContentLoaded", Fa, !1),
        e.ready()) : "complete" === C.readyState && (C.detachEvent("onreadystatechange", Fa),
        e.ready())
    }, Hb = {};
    e.fn = e.prototype = {
        constructor: e,
        init: function(j, b, n) {
            var d, v;
            if (!j)
                return this;
            if (j.nodeType)
                return this.context = this[0] = j,
                this.length = 1,
                this;
            if ("string" == typeof j) {
                "<" === j.charAt(0) && ">" === j.charAt(j.length - 1) && 3 <= j.length ? d = [null, j, null] : d = Fc.exec(j);
                if (d && (d[1] || !b)) {
                    if (d[1])
                        return b = b instanceof e ? b[0] : b,
                        v = b && b.nodeType ? b.ownerDocument || b : C,
                        j = e.parseHTML(d[1], v, !0),
                        Gb.test(d[1]) && e.isPlainObject(b) && this.attr.call(j, b, !0),
                        e.merge(this, j);
                    if ((b = C.getElementById(d[2])) && b.parentNode) {
                        if (b.id !== d[2])
                            return n.find(j);
                        this.length = 1;
                        this[0] = b
                    }
                    return this.context = C,
                    this.selector = j,
                    this
                }
                return !b || b.jquery ? (b || n).find(j) : this.constructor(b).find(j)
            }
            return e.isFunction(j) ? n.ready(j) : (j.selector !== c && (this.selector = j.selector,
            this.context = j.context),
            e.makeArray(j, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Z.call(this)
        },
        get: function(j) {
            return null == j ? this.toArray() : 0 > j ? this[this.length + j] : this[j]
        },
        pushStack: function(j, b, c) {
            j = e.merge(this.constructor(), j);
            return j.prevObject = this,
            j.context = this.context,
            "find" === b ? j.selector = this.selector + (this.selector ? " " : "") + c : b && (j.selector = this.selector + "." + b + "(" + c + ")"),
            j
        },
        each: function(j, b) {
            return e.each(this, j, b)
        },
        ready: function(j) {
            return e.ready.promise().done(j),
            this
        },
        eq: function(j) {
            return j = +j,
            -1 === j ? this.slice(j) : this.slice(j, j + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
        },
        map: function(j) {
            return this.pushStack(e.map(this, function(b, c) {
                return j.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function() {
        var j, b, n, d, v, r, m = arguments[0] || {}, l = 1, f = arguments.length, g = !1;
        "boolean" == typeof m && (g = m,
        m = arguments[1] || {},
        l = 2);
        "object" != typeof m && !e.isFunction(m) && (m = {});
        for (f === l && (m = this,
        --l); l < f; l++)
            if (null != (j = arguments[l]))
                for (b in j)
                    n = m[b],
                    d = j[b],
                    m !== d && (g && d && (e.isPlainObject(d) || (v = e.isArray(d))) ? (v ? (v = !1,
                    r = n && e.isArray(n) ? n : []) : r = n && e.isPlainObject(n) ? n : {},
                    m[b] = e.extend(g, r, d)) : d !== c && (m[b] = d));
        return m
    }
    ;
    e.extend({
        noConflict: function(j) {
            return b.$ === e && (b.$ = Bc),
            j && b.jQuery === e && (b.jQuery = Ac),
            e
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(j) {
            j ? e.readyWait++ : e.ready(!0)
        },
        ready: function(j) {
            if (!(!0 === j ? --e.readyWait : e.isReady)) {
                if (!C.body)
                    return setTimeout(e.ready, 1);
                e.isReady = !0;
                !0 !== j && 0 < --e.readyWait || (Da.resolveWith(C, [e]),
                e.fn.trigger && e(C).trigger("ready").off("ready"))
            }
        },
        isFunction: function(j) {
            return "function" === e.type(j)
        },
        isArray: Array.isArray || function(j) {
            return "array" === e.type(j)
        }
        ,
        isWindow: function(j) {
            return null != j && j == j.window
        },
        isNumeric: function(j) {
            return !isNaN(parseFloat(j)) && isFinite(j)
        },
        type: function(j) {
            return null == j ? String(j) : Hb[Cc.call(j)] || "object"
        },
        isPlainObject: function(j) {
            if (!j || "object" !== e.type(j) || j.nodeType || e.isWindow(j))
                return !1;
            try {
                if (j.constructor && !$a.call(j, "constructor") && !$a.call(j.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (b) {
                return !1
            }
            for (var n in j)
                ;
            return n === c || $a.call(j, n)
        },
        isEmptyObject: function(j) {
            for (var b in j)
                return !1;
            return !0
        },
        error: function(j) {
            throw Error(j);
        },
        parseHTML: function(j, b, c) {
            var d;
            return !j || "string" != typeof j ? null : ("boolean" == typeof b && (c = b,
            b = 0),
            b = b || C,
            (d = Gb.exec(j)) ? [b.createElement(d[1])] : (d = e.buildFragment([j], b, c ? null : []),
            e.merge([], (d.cacheable ? e.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(j) {
            if (!j || "string" != typeof j)
                return null;
            j = e.trim(j);
            if (b.JSON && b.JSON.parse)
                return b.JSON.parse(j);
            if (Gc.test(j.replace(Ic, "@").replace(Jc, "]").replace(Hc, "")))
                return (new Function("return " + j))();
            e.error("Invalid JSON: " + j)
        },
        parseXML: function(j) {
            var q, n;
            if (!j || "string" != typeof j)
                return null;
            try {
                b.DOMParser ? (n = new DOMParser,
                q = n.parseFromString(j, "text/xml")) : (q = new ActiveXObject("Microsoft.XMLDOM"),
                q.async = "false",
                q.loadXML(j))
            } catch (d) {
                q = c
            }
            return (!q || !q.documentElement || q.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + j),
            q
        },
        noop: function() {},
        globalEval: function(j) {
            j && Dc.test(j) && (b.execScript || function(j) {
                b.eval.call(b, j)
            }
            )(j)
        },
        camelCase: function(j) {
            return j.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(j, b) {
            return j.nodeName && j.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(j, b, n) {
            var d, v = 0, r = j.length, m = r === c || e.isFunction(j);
            if (n)
                if (m)
                    for (d in j) {
                        if (!1 === b.apply(j[d], n))
                            break
                    }
                else
                    for (; v < r && !1 !== b.apply(j[v++], n); )
                        ;
            else if (m)
                for (d in j) {
                    if (!1 === b.call(j[d], d, j[d]))
                        break
                }
            else
                for (; v < r && !1 !== b.call(j[v], v, j[v++]); )
                    ;
            return j
        },
        trim: ab && !ab.call("\ufeff\u00a0") ? function(j) {
            return null == j ? "" : ab.call(j)
        }
        : function(j) {
            return null == j ? "" : (j + "").replace(Ec, "")
        }
        ,
        makeArray: function(j, b) {
            var c, d = b || [];
            return null != j && (c = e.type(j),
            null == j.length || "string" === c || "function" === c || "regexp" === c || e.isWindow(j) ? Eb.call(d, j) : e.merge(d, j)),
            d
        },
        inArray: function(j, b, c) {
            var e;
            if (b) {
                if (Fb)
                    return Fb.call(b, j, c);
                e = b.length;
                for (c = c ? 0 > c ? Math.max(0, e + c) : c : 0; c < e; c++)
                    if (c in b && b[c] === j)
                        return c
            }
            return -1
        },
        merge: function(j, b) {
            var n = b.length
              , e = j.length
              , d = 0;
            if ("number" == typeof n)
                for (; d < n; d++)
                    j[e++] = b[d];
            else
                for (; b[d] !== c; )
                    j[e++] = b[d++];
            return j.length = e,
            j
        },
        grep: function(j, b, c) {
            var e, d = [], r = 0, m = j.length;
            for (c = !!c; r < m; r++)
                e = !!b(j[r], r),
                c !== e && d.push(j[r]);
            return d
        },
        map: function(j, b, n) {
            var d, v, r = [], m = 0, l = j.length;
            if (j instanceof e || l !== c && "number" == typeof l && (0 < l && j[0] && j[l - 1] || 0 === l || e.isArray(j)))
                for (; m < l; m++)
                    d = b(j[m], m, n),
                    null != d && (r[r.length] = d);
            else
                for (v in j)
                    d = b(j[v], v, n),
                    null != d && (r[r.length] = d);
            return r.concat.apply([], r)
        },
        guid: 1,
        proxy: function(j, b) {
            var n, d, v;
            return "string" == typeof b && (n = j[b],
            b = j,
            j = n),
            e.isFunction(j) ? (d = Z.call(arguments, 2),
            v = function() {
                return j.apply(b, d.concat(Z.call(arguments)))
            }
            ,
            v.guid = j.guid = j.guid || e.guid++,
            v) : c
        },
        access: function(j, b, n, d, v, r, m) {
            var l, f = null == n, g = 0, s = j.length;
            if (n && "object" == typeof n) {
                for (g in n)
                    e.access(j, b, g, n[g], 1, r, d);
                v = 1
            } else if (d !== c) {
                l = m === c && e.isFunction(d);
                f && (l ? (l = b,
                b = function(b, j, q) {
                    return l.call(e(b), q)
                }
                ) : (b.call(j, d),
                b = null));
                if (b)
                    for (; g < s; g++)
                        b(j[g], n, l ? d.call(j[g], g, b(j[g], n)) : d, m);
                v = 1
            }
            return v ? j : f ? b.call(j) : s ? b(j[0], n) : r
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    e.ready.promise = function(j) {
        if (!Da)
            if (Da = e.Deferred(),
            "complete" === C.readyState)
                setTimeout(e.ready, 1);
            else if (C.addEventListener)
                C.addEventListener("DOMContentLoaded", Fa, !1),
                b.addEventListener("load", e.ready, !1);
            else {
                C.attachEvent("onreadystatechange", Fa);
                b.attachEvent("onload", e.ready);
                var q = !1;
                try {
                    q = null == b.frameElement && C.documentElement
                } catch (c) {}
                q && q.doScroll && function v() {
                    if (!e.isReady) {
                        try {
                            q.doScroll("left")
                        } catch (b) {
                            return setTimeout(v, 50)
                        }
                        e.ready()
                    }
                }()
            }
        return Da.promise(j)
    }
    ;
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, q) {
        Hb["[object " + q + "]"] = q.toLowerCase()
    });
    Db = e(C);
    var Ib = {};
    e.Callbacks = function(b) {
        var q;
        if ("string" == typeof b) {
            if (!(q = Ib[b])) {
                q = b;
                var n = Ib[q] = {};
                q = (e.each(q.split(fa), function(b, j) {
                    n[j] = !0
                }),
                n)
            }
        } else
            q = e.extend({}, b);
        b = q;
        var d, v, r, m, l, f, g = [], s = !b.once && [], u = function(q) {
            d = b.memory && q;
            v = !0;
            f = m || 0;
            m = 0;
            l = g.length;
            for (r = !0; g && f < l; f++)
                if (!1 === g[f].apply(q[0], q[1]) && b.stopOnFalse) {
                    d = !1;
                    break
                }
            r = !1;
            g && (s ? s.length && u(s.shift()) : d ? g = [] : t.disable())
        }, t = {
            add: function() {
                if (g) {
                    var q = g.length;
                    (function xc(q) {
                        e.each(q, function(q, c) {
                            var n = e.type(c);
                            "function" === n && (!b.unique || !t.has(c)) ? g.push(c) : c && c.length && "string" !== n && xc(c)
                        })
                    }
                    )(arguments);
                    r ? l = g.length : d && (m = q,
                    u(d))
                }
                return this
            },
            remove: function() {
                return g && e.each(arguments, function(b, j) {
                    for (var q; -1 < (q = e.inArray(j, g, q)); )
                        g.splice(q, 1),
                        r && (q <= l && l--,
                        q <= f && f--)
                }),
                this
            },
            has: function(b) {
                return -1 < e.inArray(b, g)
            },
            empty: function() {
                return g = [],
                this
            },
            disable: function() {
                return g = s = d = c,
                this
            },
            disabled: function() {
                return !g
            },
            lock: function() {
                return s = c,
                d || t.disable(),
                this
            },
            locked: function() {
                return !s
            },
            fireWith: function(b, j) {
                return j = j || [],
                j = [b, j.slice ? j.slice() : j],
                g && (!v || s) && (r ? s.push(j) : u(j)),
                this
            },
            fire: function() {
                return t.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!v
            }
        };
        return t
    }
    ;
    e.extend({
        Deferred: function(b) {
            var q = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return v.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var b = arguments;
                    return e.Deferred(function(j) {
                        e.each(q, function(q, c) {
                            var n = c[0]
                              , d = b[q];
                            v[c[1]](e.isFunction(d) ? function() {
                                var b = d.apply(this, arguments);
                                b && e.isFunction(b.promise) ? b.promise().done(j.resolve).fail(j.reject).progress(j.notify) : j[n + "With"](this === v ? j : this, [b])
                            }
                            : j[n])
                        });
                        b = null
                    }).promise()
                },
                promise: function(b) {
                    return null != b ? e.extend(b, d) : d
                }
            }
              , v = {};
            return d.pipe = d.then,
            e.each(q, function(b, j) {
                var e = j[2]
                  , l = j[3];
                d[j[1]] = e.add;
                l && e.add(function() {
                    c = l
                }, q[b ^ 1][2].disable, q[2][2].lock);
                v[j[0]] = e.fire;
                v[j[0] + "With"] = e.fireWith
            }),
            d.promise(v),
            b && b.call(v, v),
            v
        },
        when: function(b) {
            var q = 0, c = Z.call(arguments), d = c.length, v = 1 !== d || b && e.isFunction(b.promise) ? d : 0, r = 1 === v ? b : e.Deferred(), m = function(b, j, q) {
                return function(c) {
                    j[b] = this;
                    q[b] = 1 < arguments.length ? Z.call(arguments) : c;
                    q === l ? r.notifyWith(j, q) : --v || r.resolveWith(j, q)
                }
            }, l, f, g;
            if (1 < d) {
                l = Array(d);
                f = Array(d);
                for (g = Array(d); q < d; q++)
                    c[q] && e.isFunction(c[q].promise) ? c[q].promise().done(m(q, g, c)).fail(r.reject).progress(m(q, f, l)) : --v
            }
            return v || r.resolveWith(g, c),
            r.promise()
        }
    });
    var Nc = e, bb, N, Ga, ga, Ha, Ia, S, ha, Ja, cb, ua, Jb, H = C.createElement("div");
    H.setAttribute("className", "t");
    H.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = H.getElementsByTagName("*");
    ga = H.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length)
        bb = {};
    else {
        Ha = C.createElement("select");
        Ia = Ha.appendChild(C.createElement("option"));
        S = H.getElementsByTagName("input")[0];
        N = {
            leadingWhitespace: 3 === H.firstChild.nodeType,
            tbody: !H.getElementsByTagName("tbody").length,
            htmlSerialize: !!H.getElementsByTagName("link").length,
            style: /top/.test(ga.getAttribute("style")),
            hrefNormalized: "/a" === ga.getAttribute("href"),
            opacity: /^0.5/.test(ga.style.opacity),
            cssFloat: !!ga.style.cssFloat,
            checkOn: "on" === S.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== H.className,
            enctype: !!C.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === C.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        S.checked = !0;
        N.noCloneChecked = S.cloneNode(!0).checked;
        Ha.disabled = !0;
        N.optDisabled = !Ia.disabled;
        try {
            delete H.test
        } catch (Pd) {
            N.deleteExpando = !1
        }
        !H.addEventListener && H.attachEvent && H.fireEvent && (H.attachEvent("onclick", Jb = function() {
            N.noCloneEvent = !1
        }
        ),
        H.cloneNode(!0).fireEvent("onclick"),
        H.detachEvent("onclick", Jb));
        S = C.createElement("input");
        S.value = "t";
        S.setAttribute("type", "radio");
        N.radioValue = "t" === S.value;
        S.setAttribute("checked", "checked");
        S.setAttribute("name", "t");
        H.appendChild(S);
        ha = C.createDocumentFragment();
        ha.appendChild(H.lastChild);
        N.checkClone = ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        N.appendChecked = S.checked;
        ha.removeChild(S);
        ha.appendChild(H);
        if (H.attachEvent)
            for (cb in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                Ja = "on" + cb,
                (ua = Ja in H) || (H.setAttribute(Ja, "return;"),
                ua = "function" == typeof H[Ja]),
                N[cb + "Bubbles"] = ua;
        bb = (e(function() {
            var j, q, c, e, d = C.getElementsByTagName("body")[0];
            d && (j = C.createElement("div"),
            j.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            d.insertBefore(j, d.firstChild),
            q = C.createElement("div"),
            j.appendChild(q),
            q.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            c = q.getElementsByTagName("td"),
            c[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            ua = 0 === c[0].offsetHeight,
            c[0].style.display = "",
            c[1].style.display = "none",
            N.reliableHiddenOffsets = ua && 0 === c[0].offsetHeight,
            q.innerHTML = "",
            q.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            N.boxSizing = 4 === q.offsetWidth,
            N.doesNotIncludeMarginInBodyOffset = 1 !== d.offsetTop,
            b.getComputedStyle && (N.pixelPosition = "1%" !== (b.getComputedStyle(q, null) || {}).top,
            N.boxSizingReliable = "4px" === (b.getComputedStyle(q, null) || {
                width: "4px"
            }).width,
            e = C.createElement("div"),
            e.style.cssText = q.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
            e.style.marginRight = e.style.width = "0",
            q.style.width = "1px",
            q.appendChild(e),
            N.reliableMarginRight = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight)),
            "undefined" != typeof q.style.zoom && (q.innerHTML = "",
            q.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1",
            N.inlineBlockNeedsLayout = 3 === q.offsetWidth,
            q.style.display = "block",
            q.style.overflow = "visible",
            q.innerHTML = "<div></div>",
            q.firstChild.style.width = "5px",
            N.shrinkWrapBlocks = 3 !== q.offsetWidth,
            j.style.zoom = 1),
            d.removeChild(j))
        }),
        ha.removeChild(H),
        Ga = ga = Ha = Ia = S = ha = H = null,
        N)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , sc = /([A-Z])/g;
    e.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando],
            !!b && !f(b)
        },
        data: function(b, q, n, d) {
            if (e.acceptData(b)) {
                var v, r, m = e.expando, l = "string" == typeof q, f = b.nodeType, g = f ? e.cache : b, s = f ? b[m] : b[m] && m;
                if (s && g[s] && (d || g[s].data) || !(l && n === c)) {
                    s || (f ? b[m] = s = e.deletedIds.pop() || e.guid++ : s = m);
                    g[s] || (g[s] = {},
                    f || (g[s].toJSON = e.noop));
                    if ("object" == typeof q || "function" == typeof q)
                        d ? g[s] = e.extend(g[s], q) : g[s].data = e.extend(g[s].data, q);
                    return v = g[s],
                    d || (v.data || (v.data = {}),
                    v = v.data),
                    n !== c && (v[e.camelCase(q)] = n),
                    l ? (r = v[q],
                    null == r && (r = v[e.camelCase(q)])) : r = v,
                    r
                }
            }
        },
        removeData: function(b, q, c) {
            if (e.acceptData(b)) {
                var d, v, r, m = b.nodeType, l = m ? e.cache : b, g = m ? b[e.expando] : e.expando;
                if (l[g]) {
                    if (q && (d = c ? l[g] : l[g].data)) {
                        e.isArray(q) || (q in d ? q = [q] : (q = e.camelCase(q),
                        q in d ? q = [q] : q = q.split(" ")));
                        v = 0;
                        for (r = q.length; v < r; v++)
                            delete d[q[v]];
                        if (!(c ? f : e.isEmptyObject)(d))
                            return
                    }
                    if (c || !(delete l[g].data,
                    !f(l[g])))
                        m ? e.cleanData([b], !0) : e.support.deleteExpando || l != l.window ? delete l[g] : l[g] = null
                }
            }
        },
        _data: function(b, c, n) {
            return e.data(b, c, n, !0)
        },
        acceptData: function(b) {
            var c = b.nodeName && e.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    });
    e.fn.extend({
        data: function(b, q) {
            var n, X, v, r, m, l = this[0], f = 0, g = null;
            if (b === c) {
                if (this.length && (g = e.data(l),
                1 === l.nodeType && !e._data(l, "parsedAttrs"))) {
                    v = l.attributes;
                    for (m = v.length; f < m; f++)
                        r = v[f].name,
                        r.indexOf("data-") || (r = e.camelCase(r.substring(5)),
                        d(l, r, g[r]));
                    e._data(l, "parsedAttrs", !0)
                }
                return g
            }
            return "object" == typeof b ? this.each(function() {
                e.data(this, b)
            }) : (n = b.split(".", 2),
            n[1] = n[1] ? "." + n[1] : "",
            X = n[1] + "!",
            e.access(this, function(q) {
                if (q === c)
                    return g = this.triggerHandler("getData" + X, [n[0]]),
                    g === c && l && (g = e.data(l, b),
                    g = d(l, b, g)),
                    g === c && n[1] ? this.data(n[0]) : g;
                n[1] = q;
                this.each(function() {
                    var c = e(this);
                    c.triggerHandler("setData" + X, n);
                    e.data(this, b, q);
                    c.triggerHandler("changeData" + X, n)
                })
            }, null, q, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                e.removeData(this, b)
            })
        }
    });
    e.extend({
        queue: function(b, c, n) {
            var d;
            if (b)
                return c = (c || "fx") + "queue",
                d = e._data(b, c),
                n && (!d || e.isArray(n) ? d = e._data(b, c, e.makeArray(n)) : d.push(n)),
                d || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var n = e.queue(b, c)
              , d = n.length
              , v = n.shift()
              , r = e._queueHooks(b, c)
              , m = function() {
                e.dequeue(b, c)
            };
            "inprogress" === v && (v = n.shift(),
            d--);
            v && ("fx" === c && n.unshift("inprogress"),
            delete r.stop,
            v.call(b, m, r));
            !d && r && r.empty.fire()
        },
        _queueHooks: function(b, c) {
            var n = c + "queueHooks";
            return e._data(b, n) || e._data(b, n, {
                empty: e.Callbacks("once memory").add(function() {
                    e.removeData(b, c + "queue", !0);
                    e.removeData(b, n, !0)
                })
            })
        }
    });
    e.fn.extend({
        queue: function(b, q) {
            var n = 2;
            return "string" != typeof b && (q = b,
            b = "fx",
            n--),
            arguments.length < n ? e.queue(this[0], b) : q === c ? this : this.each(function() {
                var c = e.queue(this, b, q);
                e._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && e.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                e.dequeue(this, b)
            })
        },
        delay: function(b, c) {
            return b = e.fx ? e.fx.speeds[b] || b : b,
            c = c || "fx",
            this.queue(c, function(c, q) {
                var e = setTimeout(c, b);
                q.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, q) {
            var n, d = 1, v = e.Deferred(), r = this, m = this.length, l = function() {
                --d || v.resolveWith(r, [r])
            };
            "string" != typeof b && (q = b,
            b = c);
            for (b = b || "fx"; m--; )
                (n = e._data(r[m], b + "queueHooks")) && n.empty && (d++,
                n.empty.add(l));
            return l(),
            v.promise(q)
        }
    });
    var ba, Kb, Lb, Mb = /[\t\r\n]/g, Oc = /\r/g, Pc = /^(?:button|input)$/i, Qc = /^(?:button|input|object|select|textarea)$/i, Rc = /^a(?:rea|)$/i, Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Ob = e.support.getSetAttribute;
    e.fn.extend({
        attr: function(b, c) {
            return e.access(this, e.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                e.removeAttr(this, b)
            })
        },
        prop: function(b, c) {
            return e.access(this, e.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = e.propFix[b] || b,
            this.each(function() {
                try {
                    this[b] = c,
                    delete this[b]
                } catch (q) {}
            })
        },
        addClass: function(b) {
            var c, n, d, v, r, m, l;
            if (e.isFunction(b))
                return this.each(function(c) {
                    e(this).addClass(b.call(this, c, this.className))
                });
            if (b && "string" == typeof b) {
                c = b.split(fa);
                n = 0;
                for (d = this.length; n < d; n++)
                    if (v = this[n],
                    1 === v.nodeType)
                        if (!v.className && 1 === c.length)
                            v.className = b;
                        else {
                            r = " " + v.className + " ";
                            m = 0;
                            for (l = c.length; m < l; m++)
                                0 > r.indexOf(" " + c[m] + " ") && (r += c[m] + " ");
                            v.className = e.trim(r)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var q, n, d, v, r, m, l;
            if (e.isFunction(b))
                return this.each(function(c) {
                    e(this).removeClass(b.call(this, c, this.className))
                });
            if (b && "string" == typeof b || b === c) {
                q = (b || "").split(fa);
                m = 0;
                for (l = this.length; m < l; m++)
                    if (d = this[m],
                    1 === d.nodeType && d.className) {
                        n = (" " + d.className + " ").replace(Mb, " ");
                        v = 0;
                        for (r = q.length; v < r; v++)
                            for (; 0 <= n.indexOf(" " + q[v] + " "); )
                                n = n.replace(" " + q[v] + " ", " ");
                        d.className = b ? e.trim(n) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var n = typeof b
              , d = "boolean" == typeof c;
            return e.isFunction(b) ? this.each(function(n) {
                e(this).toggleClass(b.call(this, n, this.className, c), c)
            }) : this.each(function() {
                if ("string" === n)
                    for (var v, r = 0, m = e(this), l = c, f = b.split(fa); v = f[r++]; )
                        l = d ? l : !m.hasClass(v),
                        m[l ? "addClass" : "removeClass"](v);
                else if ("undefined" === n || "boolean" === n)
                    this.className && e._data(this, "__className__", this.className),
                    this.className = this.className || !1 === b ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, n = this.length; c < n; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Mb, " ").indexOf(b))
                    return !0;
            return !1
        },
        val: function(b) {
            var q, n, d, v = this[0];
            if (arguments.length)
                return d = e.isFunction(b),
                this.each(function(n) {
                    var m, v = e(this);
                    if (1 === this.nodeType && (d ? m = b.call(this, n, v.val()) : m = b,
                    null == m ? m = "" : "number" == typeof m ? m += "" : e.isArray(m) && (m = e.map(m, function(b) {
                        return null == b ? "" : b + ""
                    })),
                    q = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()],
                    !q || !("set"in q) || q.set(this, m, "value") === c))
                        this.value = m
                });
            if (v)
                return q = e.valHooks[v.type] || e.valHooks[v.nodeName.toLowerCase()],
                q && "get"in q && (n = q.get(v, "value")) !== c ? n : (n = v.value,
                "string" == typeof n ? n.replace(Oc, "") : null == n ? "" : n)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var c, n, d = b.selectedIndex, v = [], r = b.options, m = "select-one" === b.type;
                    if (0 > d)
                        return null;
                    b = m ? d : 0;
                    for (n = m ? d + 1 : r.length; b < n; b++)
                        if (c = r[b],
                        c.selected && (e.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !e.nodeName(c.parentNode, "optgroup"))) {
                            c = e(c).val();
                            if (m)
                                return c;
                            v.push(c)
                        }
                    return m && !v.length && r.length ? e(r[d]).val() : v
                },
                set: function(b, c) {
                    var n = e.makeArray(c);
                    return e(b).find("option").each(function() {
                        this.selected = 0 <= e.inArray(e(this).val(), n)
                    }),
                    n.length || (b.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {},
        attr: function(b, q, n, d) {
            var v, r, m = b.nodeType;
            if (b && !(3 === m || 8 === m || 2 === m)) {
                if (d && e.isFunction(e.fn[q]))
                    return e(b)[q](n);
                if ("undefined" == typeof b.getAttribute)
                    return e.prop(b, q, n);
                (d = 1 !== m || !e.isXMLDoc(b)) && (q = q.toLowerCase(),
                r = e.attrHooks[q] || (Nb.test(q) ? Kb : ba));
                if (n !== c) {
                    if (null === n) {
                        e.removeAttr(b, q);
                        return
                    }
                    return r && "set"in r && d && (v = r.set(b, n, q)) !== c ? v : (b.setAttribute(q, n + ""),
                    n)
                }
                return r && "get"in r && d && null !== (v = r.get(b, q)) ? v : (v = b.getAttribute(q),
                null === v ? c : v)
            }
        },
        removeAttr: function(b, c) {
            var n, d, v, r, m = 0;
            if (c && 1 === b.nodeType)
                for (d = c.split(fa); m < d.length; m++)
                    (v = d[m]) && (n = e.propFix[v] || v,
                    r = Nb.test(v),
                    r || e.attr(b, v, ""),
                    b.removeAttribute(Ob ? v : n),
                    r && n in b && (b[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Pc.test(b.nodeName) && b.parentNode)
                        e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === c && e.nodeName(b, "input")) {
                        var n = b.value;
                        return b.setAttribute("type", c),
                        n && (b.value = n),
                        c
                    }
                }
            },
            value: {
                get: function(b, c) {
                    return ba && e.nodeName(b, "button") ? ba.get(b, c) : c in b ? b.value : null
                },
                set: function(b, c, n) {
                    if (ba && e.nodeName(b, "button"))
                        return ba.set(b, c, n);
                    b.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, q, n) {
            var d, v, r, m = b.nodeType;
            if (b && !(3 === m || 8 === m || 2 === m))
                return r = 1 !== m || !e.isXMLDoc(b),
                r && (q = e.propFix[q] || q,
                v = e.propHooks[q]),
                n !== c ? v && "set"in v && (d = v.set(b, n, q)) !== c ? d : b[q] = n : v && "get"in v && null !== (d = v.get(b, q)) ? d : b[q]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var q = b.getAttributeNode("tabindex");
                    return q && q.specified ? parseInt(q.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function(b, q) {
            var n, d = e.prop(b, q);
            return !0 === d || "boolean" != typeof d && (n = b.getAttributeNode(q)) && !1 !== n.nodeValue ? q.toLowerCase() : c
        },
        set: function(b, c, n) {
            var d;
            return !1 === c ? e.removeAttr(b, n) : (d = e.propFix[n] || n,
            d in b && (b[d] = !0),
            b.setAttribute(n, n.toLowerCase())),
            n
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    },
    ba = e.valHooks.button = {
        get: function(b, q) {
            var n;
            return n = b.getAttributeNode(q),
            n && (Lb[q] ? "" !== n.value : n.specified) ? n.value : c
        },
        set: function(b, c, n) {
            var e = b.getAttributeNode(n);
            return e || (e = C.createAttribute(n),
            b.setAttributeNode(e)),
            e.value = c + ""
        }
    },
    e.each(["width", "height"], function(b, c) {
        e.attrHooks[c] = e.extend(e.attrHooks[c], {
            set: function(b, j) {
                if ("" === j)
                    return b.setAttribute(c, "auto"),
                    j
            }
        })
    }),
    e.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, c, n) {
            "" === c && (c = "false");
            ba.set(b, c, n)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(b, q) {
        e.attrHooks[q] = e.extend(e.attrHooks[q], {
            get: function(b) {
                b = b.getAttribute(q, 2);
                return null === b ? c : b
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function(b, c) {
                if (e.isArray(c))
                    return b.checked = 0 <= e.inArray(e(b).val(), c)
            }
        })
    });
    var db = /^(?:textarea|input|select)$/i
      , Pb = /^([^\.]*|)(?:\.(.+)|)$/
      , Sc = /(?:^|\s)hover(\.\S+|)\b/
      , Tc = /^key/
      , Uc = /^(?:mouse|contextmenu)|click/
      , Qb = /^(?:focusinfocus|focusoutblur)$/
      , Rb = function(b) {
        return e.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
    };
    e.event = {
        add: function(b, q, n, d, v) {
            var r, m, l, f, g, s, u, t, p;
            if (!(3 === b.nodeType || 8 === b.nodeType || !q || !n || !(r = e._data(b)))) {
                n.handler && (u = n,
                n = u.handler,
                v = u.selector);
                n.guid || (n.guid = e.guid++);
                (l = r.events) || (r.events = l = {});
                (m = r.handle) || (r.handle = m = function(b) {
                    return "undefined" != typeof e && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(m.elem, arguments) : c
                }
                ,
                m.elem = b);
                q = e.trim(Rb(q)).split(" ");
                for (r = 0; r < q.length; r++) {
                    f = Pb.exec(q[r]) || [];
                    g = f[1];
                    s = (f[2] || "").split(".").sort();
                    p = e.event.special[g] || {};
                    g = (v ? p.delegateType : p.bindType) || g;
                    p = e.event.special[g] || {};
                    f = e.extend({
                        type: g,
                        origType: f[1],
                        data: d,
                        handler: n,
                        guid: n.guid,
                        selector: v,
                        needsContext: v && e.expr.match.needsContext.test(v),
                        namespace: s.join(".")
                    }, u);
                    t = l[g];
                    if (!t && (t = l[g] = [],
                    t.delegateCount = 0,
                    !p.setup || !1 === p.setup.call(b, d, s, m)))
                        b.addEventListener ? b.addEventListener(g, m, !1) : b.attachEvent && b.attachEvent("on" + g, m);
                    p.add && (p.add.call(b, f),
                    f.handler.guid || (f.handler.guid = n.guid));
                    v ? t.splice(t.delegateCount++, 0, f) : t.push(f);
                    e.event.global[g] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, n, d, v) {
            var r, m, l, f, g, s, u, t, p, y, A = e.hasData(b) && e._data(b);
            if (A && (u = A.events)) {
                c = e.trim(Rb(c || "")).split(" ");
                for (r = 0; r < c.length; r++)
                    if (m = Pb.exec(c[r]) || [],
                    l = f = m[1],
                    m = m[2],
                    l) {
                        t = e.event.special[l] || {};
                        l = (d ? t.delegateType : t.bindType) || l;
                        p = u[l] || [];
                        g = p.length;
                        m = m ? RegExp("(^|\\.)" + m.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (s = 0; s < p.length; s++)
                            y = p[s],
                            (v || f === y.origType) && (!n || n.guid === y.guid) && (!m || m.test(y.namespace)) && (!d || d === y.selector || "**" === d && y.selector) && (p.splice(s--, 1),
                            y.selector && p.delegateCount--,
                            t.remove && t.remove.call(b, y));
                        0 === p.length && g !== p.length && ((!t.teardown || !1 === t.teardown.call(b, m, A.handle)) && e.removeEvent(b, l, A.handle),
                        delete u[l])
                    } else
                        for (l in u)
                            e.event.remove(b, l + c[r], n, d, !0);
                e.isEmptyObject(u) && (delete A.handle,
                e.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(j, q, n, d) {
            if (!n || 3 !== n.nodeType && 8 !== n.nodeType) {
                var v, r, m, l, f, g, s, u = j.type || j;
                l = [];
                if (!Qb.test(u + e.event.triggered) && (0 <= u.indexOf("!") && (u = u.slice(0, -1),
                v = !0),
                0 <= u.indexOf(".") && (l = u.split("."),
                u = l.shift(),
                l.sort()),
                n && !e.event.customEvent[u] || e.event.global[u]))
                    if (j = "object" == typeof j ? j[e.expando] ? j : new e.Event(u,j) : new e.Event(u),
                    j.type = u,
                    j.isTrigger = !0,
                    j.exclusive = v,
                    j.namespace = l.join("."),
                    j.namespace_re = j.namespace ? RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    l = 0 > u.indexOf(":") ? "on" + u : "",
                    n) {
                        if (j.result = c,
                        j.target || (j.target = n),
                        q = null != q ? e.makeArray(q) : [],
                        q.unshift(j),
                        f = e.event.special[u] || {},
                        !(f.trigger && !1 === f.trigger.apply(n, q))) {
                            s = [[n, f.bindType || u]];
                            if (!d && !f.noBubble && !e.isWindow(n)) {
                                r = f.delegateType || u;
                                v = Qb.test(r + u) ? n : n.parentNode;
                                for (m = n; v; v = v.parentNode)
                                    s.push([v, r]),
                                    m = v;
                                m === (n.ownerDocument || C) && s.push([m.defaultView || m.parentWindow || b, r])
                            }
                            for (r = 0; r < s.length && !j.isPropagationStopped(); r++)
                                v = s[r][0],
                                j.type = s[r][1],
                                (g = (e._data(v, "events") || {})[j.type] && e._data(v, "handle")) && g.apply(v, q),
                                (g = l && v[l]) && e.acceptData(v) && g.apply && !1 === g.apply(v, q) && j.preventDefault();
                            return j.type = u,
                            !d && !j.isDefaultPrevented() && (!f._default || !1 === f._default.apply(n.ownerDocument, q)) && ("click" !== u || !e.nodeName(n, "a")) && e.acceptData(n) && l && n[u] && ("focus" !== u && "blur" !== u || 0 !== j.target.offsetWidth) && !e.isWindow(n) && (m = n[l],
                            m && (n[l] = null),
                            e.event.triggered = u,
                            n[u](),
                            e.event.triggered = c,
                            m && (n[l] = m)),
                            j.result
                        }
                    } else
                        for (r in n = e.cache,
                        n)
                            n[r].events && n[r].events[u] && e.event.trigger(j, q, n[r].handle.elem, !0)
            }
        },
        dispatch: function(j) {
            j = e.event.fix(j || b.event);
            var q, n, d, v, l, m, f = (e._data(this, "events") || {})[j.type] || [], g = f.delegateCount, s = Z.call(arguments), u = !j.exclusive && !j.namespace, t = e.event.special[j.type] || {}, p = [];
            s[0] = j;
            j.delegateTarget = this;
            if (!(t.preDispatch && !1 === t.preDispatch.call(this, j))) {
                if (g && (!j.button || "click" !== j.type))
                    for (n = j.target; n != this; n = n.parentNode || this)
                        if (!0 !== n.disabled || "click" !== j.type) {
                            v = {};
                            l = [];
                            for (q = 0; q < g; q++)
                                d = f[q],
                                m = d.selector,
                                v[m] === c && (v[m] = d.needsContext ? 0 <= e(m, this).index(n) : e.find(m, this, null, [n]).length),
                                v[m] && l.push(d);
                            l.length && p.push({
                                elem: n,
                                matches: l
                            })
                        }
                f.length > g && p.push({
                    elem: this,
                    matches: f.slice(g)
                });
                for (q = 0; q < p.length && !j.isPropagationStopped(); q++) {
                    v = p[q];
                    j.currentTarget = v.elem;
                    for (n = 0; n < v.matches.length && !j.isImmediatePropagationStopped(); n++)
                        if (d = v.matches[n],
                        u || !j.namespace && !d.namespace || j.namespace_re && j.namespace_re.test(d.namespace))
                            j.data = d.data,
                            j.handleObj = d,
                            d = ((e.event.special[d.origType] || {}).handle || d.handler).apply(v.elem, s),
                            d !== c && (j.result = d,
                            !1 === d && (j.preventDefault(),
                            j.stopPropagation()))
                }
                return t.postDispatch && t.postDispatch.call(this, j),
                j.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode),
                b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, q) {
                var n, d, e, l = q.button, m = q.fromElement;
                return null == b.pageX && null != q.clientX && (n = b.target.ownerDocument || C,
                d = n.documentElement,
                e = n.body,
                b.pageX = q.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                b.pageY = q.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                !b.relatedTarget && m && (b.relatedTarget = m === b.target ? q.toElement : m),
                !b.which && l !== c && (b.which = l & 1 ? 1 : l & 2 ? 3 : l & 4 ? 2 : 0),
                b
            }
        },
        fix: function(b) {
            if (b[e.expando])
                return b;
            var c, n, d = b, l = e.event.fixHooks[b.type] || {}, r = l.props ? this.props.concat(l.props) : this.props;
            b = e.Event(d);
            for (c = r.length; c; )
                n = r[--c],
                b[n] = d[n];
            return b.target || (b.target = d.srcElement || C),
            3 === b.target.nodeType && (b.target = b.target.parentNode),
            b.metaKey = !!b.metaKey,
            l.filter ? l.filter(b, d) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, n) {
                    e.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, n, d) {
            b = e.extend(new e.Event, n, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? e.event.trigger(b, null, c) : e.event.dispatch.call(c, b);
            b.isDefaultPrevented() && n.preventDefault()
        }
    };
    e.event.handle = e.event.dispatch;
    e.removeEvent = C.removeEventListener ? function(b, c, n) {
        b.removeEventListener && b.removeEventListener(c, n, !1)
    }
    : function(b, c, n) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null),
        b.detachEvent(c, n))
    }
    ;
    e.Event = function(b, c) {
        if (this instanceof e.Event)
            b && b.type ? (this.originalEvent = b,
            this.type = b.type,
            this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? p : g) : this.type = b,
            c && e.extend(this, c),
            this.timeStamp = b && b.timeStamp || e.now(),
            this[e.expando] = !0;
        else
            return new e.Event(b,c)
    }
    ;
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = p;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = p;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(),
            b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = p;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        e.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var j, d = b.relatedTarget, l = b.handleObj;
                if (!d || d !== this && !e.contains(this, d))
                    b.type = l.origType,
                    j = l.handler.apply(this, arguments),
                    b.type = c;
                return j
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = e.nodeName(b, "input") || e.nodeName(b, "button") ? b.form : c) && !e._data(b, "_submit_attached") && (e.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }),
                e._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble,
            this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type)
                    e.event.add(this, "propertychange._change", function(b) {
                        "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                    }),
                    e.event.add(this, "click._change", function(b) {
                        this._just_changed && !b.isTrigger && (this._just_changed = !1);
                        e.event.simulate("change", this, b, !0)
                    });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                db.test(b.nodeName) && !e._data(b, "_change_attached") && (e.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && e.event.simulate("change", this.parentNode, b, !0)
                }),
                e._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type)
                return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return e.event.remove(this, "._change"),
            !db.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = 0
          , l = function(b) {
            e.event.simulate(c, b.target, e.event.fix(b), !0)
        };
        e.event.special[c] = {
            setup: function() {
                0 === d++ && C.addEventListener(b, l, !0)
            },
            teardown: function() {
                0 === --d && C.removeEventListener(b, l, !0)
            }
        }
    });
    e.fn.extend({
        on: function(b, q, d, l, v) {
            var r, m;
            if ("object" == typeof b) {
                "string" != typeof q && (d = d || q,
                q = c);
                for (m in b)
                    this.on(m, q, d, b[m], v);
                return this
            }
            null == d && null == l ? (l = q,
            d = q = c) : null == l && ("string" == typeof q ? (l = d,
            d = c) : (l = d,
            d = q,
            q = c));
            if (!1 === l)
                l = g;
            else if (!l)
                return this;
            return 1 === v && (r = l,
            l = function(b) {
                return e().off(b),
                r.apply(this, arguments)
            }
            ,
            l.guid = r.guid || (r.guid = e.guid++)),
            this.each(function() {
                e.event.add(this, b, l, d, q)
            })
        },
        one: function(b, c, d, e) {
            return this.on(b, c, d, e, 1)
        },
        off: function(b, d, n) {
            var l, v;
            if (b && b.preventDefault && b.handleObj)
                return l = b.handleObj,
                e(b.delegateTarget).off(l.namespace ? l.origType + "." + l.namespace : l.origType, l.selector, l.handler),
                this;
            if ("object" == typeof b) {
                for (v in b)
                    this.off(v, d, b[v]);
                return this
            }
            if (!1 === d || "function" == typeof d)
                n = d,
                d = c;
            return !1 === n && (n = g),
            this.each(function() {
                e.event.remove(this, b, n, d)
            })
        },
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        live: function(b, c, d) {
            return e(this.context).on(b, this.selector, c, d),
            this
        },
        die: function(b, c) {
            return e(this.context).off(b, this.selector || "**", c),
            this
        },
        delegate: function(b, c, d, e) {
            return this.on(c, b, d, e)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        },
        trigger: function(b, c) {
            return this.each(function() {
                e.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0])
                return e.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments
              , d = b.guid || e.guid++
              , l = 0
              , v = function(d) {
                var n = (e._data(this, "lastToggle" + b.guid) || 0) % l;
                return e._data(this, "lastToggle" + b.guid, n + 1),
                d.preventDefault(),
                c[n].apply(this, arguments) || !1
            };
            for (v.guid = d; l < c.length; )
                c[l++].guid = d;
            return this.click(v)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, c) {
        e.fn[c] = function(b, j) {
            return null == j && (j = b,
            b = null),
            0 < arguments.length ? this.on(c, null, b, j) : this.trigger(c)
        }
        ;
        Tc.test(c) && (e.event.fixHooks[c] = e.event.keyHooks);
        Uc.test(c) && (e.event.fixHooks[c] = e.event.mouseHooks)
    });
    var Vc = b, E = function(b, c, d, e) {
        d = d || [];
        c = c || V;
        var l, r, m, f, g = c.nodeType;
        if (!b || "string" != typeof b)
            return d;
        if (1 !== g && 9 !== g)
            return [];
        m = Ka(c);
        if (!m && !e && (l = Wc.exec(b)))
            if (f = l[1])
                if (9 === g) {
                    r = c.getElementById(f);
                    if (!r || !r.parentNode)
                        return d;
                    if (r.id === f)
                        return d.push(r),
                        d
                } else {
                    if (c.ownerDocument && (r = c.ownerDocument.getElementById(f)) && Sb(c, r) && r.id === f)
                        return d.push(r),
                        d
                }
            else {
                if (l[2])
                    return oa.apply(d, pa.call(c.getElementsByTagName(b), 0)),
                    d;
                if ((f = l[3]) && Tb && c.getElementsByClassName)
                    return oa.apply(d, pa.call(c.getElementsByClassName(f), 0)),
                    d
            }
        return eb(b.replace(La, "$1"), c, d, e, m)
    }, va = function(b) {
        return function(c) {
            return "input" === c.nodeName.toLowerCase() && c.type === b
        }
    }, Ub = function(b) {
        return function(c) {
            var d = c.nodeName.toLowerCase();
            return ("input" === d || "button" === d) && c.type === b
        }
    }, ia = function(b) {
        return W(function(c) {
            return c = +c,
            W(function(d, e) {
                for (var l, r = b([], d.length, c), m = r.length; m--; )
                    d[l = r[m]] && (d[l] = !(e[l] = d[l]))
            })
        })
    }, Ma = function(b, c, d) {
        if (b === c)
            return d;
        for (b = b.nextSibling; b; ) {
            if (b === c)
                return -1;
            b = b.nextSibling
        }
        return 1
    }, Oa = function(b, c) {
        var d, e, l, r, m, f, g;
        if (m = Vb[M][b])
            return c ? 0 : m.slice(0);
        m = b;
        f = [];
        for (g = F.preFilter; m; ) {
            if (!d || (e = Xc.exec(m)))
                e && (m = m.slice(e[0].length)),
                f.push(l = []);
            d = !1;
            if (e = Yc.exec(m))
                l.push(d = new Wb(e.shift())),
                m = m.slice(d.length),
                d.type = e[0].replace(La, " ");
            for (r in F.filter)
                (e = Na[r].exec(m)) && (!g[r] || (e = g[r](e, V, !0))) && (l.push(d = new Wb(e.shift())),
                m = m.slice(d.length),
                d.type = r,
                d.matches = e);
            if (!d)
                break
        }
        return c ? m.length : m ? E.error(b) : Vb(b, f).slice(0)
    }, gb = function(b, c, d) {
        var e = c.dir
          , l = d && "parentNode" === c.dir
          , r = Zc++;
        return c.first ? function(c, d, q) {
            for (; c = c[e]; )
                if (l || 1 === c.nodeType)
                    return b(c, d, q)
        }
        : function(c, d, q) {
            if (q)
                for (; c = c[e]; ) {
                    if ((l || 1 === c.nodeType) && b(c, d, q))
                        return c
                }
            else
                for (var n, f = wa + " " + r + " ", g = f + fb; c = c[e]; )
                    if (l || 1 === c.nodeType) {
                        if ((n = c[M]) === g)
                            return c.sizset;
                        if ("string" == typeof n && 0 === n.indexOf(f)) {
                            if (c.sizset)
                                return c
                        } else {
                            c[M] = g;
                            if (b(c, d, q))
                                return c.sizset = !0,
                                c;
                            c.sizset = !1
                        }
                    }
        }
    }, hb = function(b) {
        return 1 < b.length ? function(c, d, e) {
            for (var l = b.length; l--; )
                if (!b[l](c, d, e))
                    return !1;
            return !0
        }
        : b[0]
    }, Pa = function(b, c, d, e, l) {
        for (var r, m = [], f = 0, g = b.length, s = null != c; f < g; f++)
            if (r = b[f])
                if (!d || d(r, e, l))
                    m.push(r),
                    s && c.push(f);
        return m
    }, ib = function(b, c, d, e, l, r) {
        return e && !e[M] && (e = ib(e)),
        l && !l[M] && (l = ib(l, r)),
        W(function(m, r, f, g) {
            if (!m || !l) {
                var s, u, t = [], p = [], y = r.length;
                if (!(u = m)) {
                    u = c || "*";
                    var A = f.nodeType ? [f] : f
                      , z = [];
                    s = 0;
                    for (var B = A.length; s < B; s++)
                        E(u, A[s], z, m);
                    u = z
                }
                A = b && (m || !c) ? Pa(u, t, b, f, g) : u;
                z = d ? l || (m ? b : y || e) ? [] : r : A;
                d && d(A, z, f, g);
                if (e) {
                    u = Pa(z, p);
                    e(u, [], f, g);
                    for (f = u.length; f--; )
                        if (s = u[f])
                            z[p[f]] = !(A[p[f]] = s)
                }
                if (m)
                    for (f = b && z.length; f--; ) {
                        if (s = z[f])
                            m[t[f]] = !(r[t[f]] = s)
                    }
                else
                    z = Pa(z === r ? z.splice(y, z.length) : z),
                    l ? l(null, r, z, g) : oa.apply(r, z)
            }
        })
    }, jb = function(b) {
        var c, d, e, l = b.length, r = F.relative[b[0].type];
        d = r || F.relative[" "];
        for (var m = r ? 1 : 0, f = gb(function(b) {
            return b === c
        }, d, !0), g = gb(function(b) {
            return -1 < Xb.call(c, b)
        }, d, !0), s = [function(b, j, d) {
            return !r && (d || j !== Qa) || ((c = j).nodeType ? f(b, j, d) : g(b, j, d))
        }
        ]; m < l; m++)
            if (d = F.relative[b[m].type])
                s = [gb(hb(s), d)];
            else {
                d = F.filter[b[m].type].apply(null, b[m].matches);
                if (d[M]) {
                    for (e = ++m; e < l && !F.relative[b[e].type]; e++)
                        ;
                    return ib(1 < m && hb(s), 1 < m && b.slice(0, m - 1).join("").replace(La, "$1"), d, m < e && jb(b.slice(m, e)), e < l && jb(b = b.slice(e)), e < l && b.join(""))
                }
                s.push(d)
            }
        return hb(s)
    }, eb = function(b, c, d, e, l) {
        var r, m, f, g, s = Oa(b);
        if (!e && 1 === s.length) {
            m = s[0] = s[0].slice(0);
            if (2 < m.length && "ID" === (f = m[0]).type && 9 === c.nodeType && !l && F.relative[m[1].type]) {
                c = F.find.ID(f.matches[0].replace(ja, ""), c, l)[0];
                if (!c)
                    return d;
                b = b.slice(m.shift().length)
            }
            for (r = Na.POS.test(b) ? -1 : m.length - 1; 0 <= r; r--) {
                f = m[r];
                if (F.relative[g = f.type])
                    break;
                if (g = F.find[g])
                    if (e = g(f.matches[0].replace(ja, ""), kb.test(m[0].type) && c.parentNode || c, l)) {
                        m.splice(r, 1);
                        b = e.length && m.join("");
                        if (!b)
                            return oa.apply(d, pa.call(e, 0)),
                            d;
                        break
                    }
            }
        }
        return lb(b, s)(e, c, l, d, kb.test(b)),
        d
    }, Yb = function() {}, fb, mb, F, Ra, Ka, Sb, lb, nb, xa, Qa, Zb = !0, M = ("sizcache" + Math.random()).replace(".", ""), Wb = String, V = Vc.document, U = V.documentElement, wa = 0, Zc = 0, $c = [].pop, oa = [].push, pa = [].slice, Xb = [].indexOf || function(b) {
        for (var c = 0, d = this.length; c < d; c++)
            if (this[c] === b)
                return c;
        return -1
    }
    , W = function(b, c) {
        return b[M] = null == c || c,
        b
    }, ob = function() {
        var b = {}
          , c = [];
        return W(function(d, e) {
            return c.push(d) > F.cacheLength && delete b[c.shift()],
            b[d] = e
        }, b)
    }, $b = ob(), Vb = ob(), ac = ob(), bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)", La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/, ad = RegExp(pb), Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, kb = /[\x20\t\r\n\f]*[+~]/, bd = /h\d/i, cd = /input|select|textarea|button/i, ja = /\\(?!\\)/g, Na = {
        ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
        CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
        NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
        TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
        ATTR: RegExp("^" + bc),
        PSEUDO: RegExp("^" + pb),
        POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
        CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
        needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
    }, ca = function(b) {
        var c = V.createElement("div");
        try {
            return b(c)
        } catch (d) {
            return !1
        } finally {}
    }, dd = ca(function(b) {
        return b.appendChild(V.createComment("")),
        !b.getElementsByTagName("*").length
    }), ed = ca(function(b) {
        return b.innerHTML = "<a href='#'></a>",
        b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
    }), fd = ca(function(b) {
        b.innerHTML = "<select></select>";
        b = typeof b.lastChild.getAttribute("multiple");
        return "boolean" !== b && "string" !== b
    }), Tb = ca(function(b) {
        return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
        !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e",
        2 === b.getElementsByClassName("e").length)
    }), gd = ca(function(b) {
        b.id = M + 0;
        b.innerHTML = "<a name='" + M + "'></a><div name='" + M + "'></div>";
        U.insertBefore(b, U.firstChild);
        var c = V.getElementsByName && V.getElementsByName(M).length === 2 + V.getElementsByName(M + 0).length;
        return mb = !V.getElementById(M),
        U.removeChild(b),
        c
    });
    try {
        pa.call(U.childNodes, 0)[0].nodeType
    } catch (Qd) {
        pa = function(b) {
            for (var c, d = []; c = this[b]; b++)
                d.push(c);
            return d
        }
    }
    E.matches = function(b, c) {
        return E(b, null, null, c)
    }
    ;
    E.matchesSelector = function(b, c) {
        return 0 < E(c, null, null, [b]).length
    }
    ;
    Ra = E.getText = function(b) {
        var c, d = "", e = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent)
                    return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling)
                    d += Ra(b)
            } else {
                if (3 === c || 4 === c)
                    return b.nodeValue
            }
        else
            for (; c = b[e]; e++)
                d += Ra(c);
        return d
    }
    ;
    Ka = E.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    }
    ;
    Sb = E.contains = U.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b
          , e = c && c.parentNode;
        return b === e || !(!e || !(1 === e.nodeType && d.contains && d.contains(e)))
    }
    : U.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    }
    : function(b, c) {
        for (; c = c.parentNode; )
            if (c === b)
                return !0;
        return !1
    }
    ;
    E.attr = function(b, c) {
        var d, e = Ka(b);
        return e || (c = c.toLowerCase()),
        (d = F.attrHandle[c]) ? d(b) : e || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c),
        d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    }
    ;
    F = E.selectors = {
        cacheLength: 50,
        createPseudo: W,
        match: Na,
        attrHandle: ed ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: mb ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d)
                    return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            }
            : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d)
                    return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            }
            ,
            TAG: dd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName)
                    return c.getElementsByTagName(b)
            }
            : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var e, l = [], f = 0; e = d[f]; f++)
                        1 === e.nodeType && l.push(e);
                    return l
                }
                return d
            }
            ,
            NAME: gd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName)
                    return c.getElementsByName(name)
            }
            ,
            CLASS: Tb && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d)
                    return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ja, ""),
                b[3] = (b[4] || b[5] || "").replace(ja, ""),
                "~=" === b[2] && (b[3] = " " + b[3] + " "),
                b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(),
                "nth" === b[1] ? (b[2] || E.error(b[0]),
                b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])),
                b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && E.error(b[0]),
                b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Na.CHILD.test(b[0]))
                    return null;
                if (b[3])
                    b[2] = b[3];
                else if (c = b[4])
                    ad.test(c) && (d = Oa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d),
                    b[0] = b[0].slice(0, d)),
                    b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ? function(b) {
                return b = b.replace(ja, ""),
                function(c) {
                    return c.getAttribute("id") === b
                }
            }
            : function(b) {
                return b = b.replace(ja, ""),
                function(c) {
                    return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b
                }
            }
            ,
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                }
                : (b = b.replace(ja, "").toLowerCase(),
                function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                }
                )
            },
            CLASS: function(b) {
                var c = $b[M][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                function(b) {
                    return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                }
            },
            ATTR: function(b, c, d) {
                return function(e) {
                    e = E.attr(e, b);
                    return null == e ? "!=" === c : c ? (e += "",
                    "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.substr(e.length - d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, e) {
                return "nth" === b ? function(b) {
                    var c, j;
                    c = b.parentNode;
                    if (1 === d && 0 === e)
                        return !0;
                    if (c) {
                        j = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (j++,
                        b === c)); c = c.nextSibling)
                            ;
                    }
                    return j -= e,
                    j === d || 0 === j % d && 0 <= j / d
                }
                : function(c) {
                    var d = c;
                    switch (b) {
                    case "only":
                    case "first":
                        for (; d = d.previousSibling; )
                            if (1 === d.nodeType)
                                return !1;
                        if ("first" === b)
                            return !0;
                        d = c;
                    case "last":
                        for (; d = d.nextSibling; )
                            if (1 === d.nodeType)
                                return !1;
                        return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, e = F.pseudos[b] || F.setFilters[b.toLowerCase()] || E.error("unsupported pseudo: " + b);
                return e[M] ? e(c) : 1 < e.length ? (d = [b, b, "", c],
                F.setFilters.hasOwnProperty(b.toLowerCase()) ? W(function(b, j) {
                    for (var d, n = e(b, c), l = n.length; l--; )
                        d = Xb.call(b, n[l]),
                        b[d] = !(j[d] = n[l])
                }) : function(b) {
                    return e(b, 0, d)
                }
                ) : e
            }
        },
        pseudos: {
            not: W(function(b) {
                var c = []
                  , d = []
                  , e = lb(b.replace(La, "$1"));
                return e[M] ? W(function(b, c, j, d) {
                    d = e(b, null, d, []);
                    for (var n = b.length; n--; )
                        if (j = d[n])
                            b[n] = !(c[n] = j)
                }) : function(b, j, l) {
                    return c[0] = b,
                    e(c, null, l, d),
                    !d.pop()
                }
            }),
            has: W(function(b) {
                return function(c) {
                    return 0 < E(b, c).length
                }
            }),
            contains: W(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex,
                !0 === b.selected
            },
            parent: function(b) {
                return !F.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b; ) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c)
                        return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ia(function() {
                return [0]
            }),
            last: ia(function(b, c) {
                return [c - 1]
            }),
            eq: ia(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ia(function(b, c) {
                for (var d = 0; d < c; d += 2)
                    b.push(d);
                return b
            }),
            odd: ia(function(b, c) {
                for (var d = 1; d < c; d += 2)
                    b.push(d);
                return b
            }),
            lt: ia(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c; )
                    b.push(c);
                return b
            }),
            gt: ia(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c; )
                    b.push(d);
                return b
            })
        }
    };
    nb = U.compareDocumentPosition ? function(b, c) {
        return b === c ? (xa = !0,
        0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    }
    : function(b, c) {
        if (b === c)
            return xa = !0,
            0;
        if (b.sourceIndex && c.sourceIndex)
            return b.sourceIndex - c.sourceIndex;
        var d, e, l = [], f = [];
        d = b.parentNode;
        e = c.parentNode;
        var m = d;
        if (d === e)
            return Ma(b, c);
        if (!d)
            return -1;
        if (!e)
            return 1;
        for (; m; )
            l.unshift(m),
            m = m.parentNode;
        for (m = e; m; )
            f.unshift(m),
            m = m.parentNode;
        d = l.length;
        e = f.length;
        for (m = 0; m < d && m < e; m++)
            if (l[m] !== f[m])
                return Ma(l[m], f[m]);
        return m === d ? Ma(b, f[m], -1) : Ma(l[m], c, 1)
    }
    ;
    [0, 0].sort(nb);
    Zb = !xa;
    E.uniqueSort = function(b) {
        var c, d = 1;
        xa = Zb;
        b.sort(nb);
        if (xa)
            for (; c = b[d]; d++)
                c === b[d - 1] && b.splice(d--, 1);
        return b
    }
    ;
    E.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    }
    ;
    lb = E.compile = function(b, c) {
        var d, e = [], l = [], f = ac[M][b];
        if (!f) {
            c || (c = Oa(b));
            for (d = c.length; d--; )
                f = jb(c[d]),
                f[M] ? e.push(f) : l.push(f);
            var m = 0 < e.length
              , g = 0 < l.length
              , s = function(b, c, d, j, n) {
                var q, f, r = [], u = 0, t = "0", p = b && [], y = null != n, z = Qa, A = b || g && F.find.TAG("*", n && c.parentNode || c), B = wa += null == z ? 1 : Math.E;
                for (y && (Qa = c !== V && c,
                fb = s.el); null != (n = A[t]); t++) {
                    if (g && n) {
                        for (q = 0; f = l[q]; q++)
                            if (f(n, c, d)) {
                                j.push(n);
                                break
                            }
                        y && (wa = B,
                        fb = ++s.el)
                    }
                    m && ((n = !f && n) && u--,
                    b && p.push(n))
                }
                u += t;
                if (m && t !== u) {
                    for (q = 0; f = e[q]; q++)
                        f(p, r, c, d);
                    if (b) {
                        if (0 < u)
                            for (; t--; )
                                !p[t] && !r[t] && (r[t] = $c.call(j));
                        r = Pa(r)
                    }
                    oa.apply(j, r);
                    y && !b && 0 < r.length && 1 < u + e.length && E.uniqueSort(j)
                }
                return y && (wa = B,
                Qa = z),
                p
            };
            d = (s.el = 0,
            m ? W(s) : s);
            f = ac(b, d)
        }
        return f
    }
    ;
    if (V.querySelectorAll) {
        var cc, hd = eb, id = /'|\\/g, jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, Y = [":focus"], Sa = [":active", ":focus"], Ta = U.matchesSelector || U.mozMatchesSelector || U.webkitMatchesSelector || U.oMatchesSelector || U.msMatchesSelector;
        ca(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Y.push(":checked")
        });
        ca(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Y.push(":enabled", ":disabled")
        });
        Y = RegExp(Y.join("|"));
        eb = function(b, c, d, e, l) {
            if (!e && !l && (!Y || !Y.test(b))) {
                var f, m, g = !0, s = M;
                m = c;
                f = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    f = Oa(b);
                    (g = c.getAttribute("id")) ? s = g.replace(id, "\\$&") : c.setAttribute("id", s);
                    s = "[id='" + s + "'] ";
                    for (m = f.length; m--; )
                        f[m] = s + f[m].join("");
                    m = kb.test(b) && c.parentNode || c;
                    f = f.join(",")
                }
                if (f)
                    try {
                        return oa.apply(d, pa.call(m.querySelectorAll(f), 0)),
                        d
                    } catch (u) {} finally {
                        g || c.removeAttribute("id")
                    }
            }
            return hd(b, c, d, e, l)
        }
        ;
        Ta && (ca(function(b) {
            cc = Ta.call(b, "div");
            try {
                Ta.call(b, "[test!='']:sizzle"),
                Sa.push("!=", pb)
            } catch (c) {}
        }),
        Sa = RegExp(Sa.join("|")),
        E.matchesSelector = function(b, c) {
            c = c.replace(jd, "='$1']");
            if (!Ka(b) && !Sa.test(c) && (!Y || !Y.test(c)))
                try {
                    var d = Ta.call(b, c);
                    if (d || cc || b.document && 11 !== b.document.nodeType)
                        return d
                } catch (e) {}
            return 0 < E(c, null, null, [b]).length
        }
        )
    }
    F.pseudos.nth = F.pseudos.eq;
    F.filters = Yb.prototype = F.pseudos;
    F.setFilters = new Yb;
    E.attr = e.attr;
    e.find = E;
    e.expr = E.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique = E.uniqueSort;
    e.text = E.getText;
    e.isXMLDoc = E.isXML;
    e.contains = E.contains;
    var kd = /Until$/
      , ld = /^(?:parents|prev(?:Until|All))/
      , uc = /^.[^:#\[\.,]*$/
      , dc = e.expr.match.needsContext
      , md = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    e.fn.extend({
        find: function(b) {
            var c, d, l, f, g, m, s = this;
            if ("string" != typeof b)
                return e(b).filter(function() {
                    c = 0;
                    for (d = s.length; c < d; c++)
                        if (e.contains(s[c], this))
                            return !0
                });
            m = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (l = m.length,
                e.find(b, this[c], m),
                0 < c)
                    for (f = l; f < m.length; f++)
                        for (g = 0; g < l; g++)
                            if (m[g] === m[f]) {
                                m.splice(f--, 1);
                                break
                            }
            return m
        },
        has: function(b) {
            var c, d = e(b, this), l = d.length;
            return this.filter(function() {
                for (c = 0; c < l; c++)
                    if (e.contains(this, d[c]))
                        return !0
            })
        },
        not: function(b) {
            return this.pushStack(y(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(y(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= e(b, this.context).index(this[0]) : 0 < e.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, l = 0, f = this.length, g = [], m = dc.test(b) || "string" != typeof b ? e(b, c || this.context) : 0; l < f; l++)
                for (d = this[l]; d && d.ownerDocument && d !== c && 11 !== d.nodeType; ) {
                    if (m ? -1 < m.index(d) : e.find.matchesSelector(d, b)) {
                        g.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return g = 1 < g.length ? e.unique(g) : g,
            this.pushStack(g, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? e(b, c) : e.makeArray(b && b.nodeType ? [b] : b)
              , l = e.merge(this.get(), d);
            return this.pushStack(x(d[0]) || x(l[0]) ? l : e.unique(l))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    e.fn.andSelf = e.fn.addBack;
    e.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return e.dir(b, "parentNode", d)
        },
        next: function(b) {
            return t(b, "nextSibling")
        },
        prev: function(b) {
            return t(b, "previousSibling")
        },
        nextAll: function(b) {
            return e.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return e.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return e.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return e.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return e.sibling(b.firstChild)
        },
        contents: function(b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : e.merge([], b.childNodes)
        }
    }, function(b, c) {
        e.fn[b] = function(d, l) {
            var f = e.map(this, c, d);
            return kd.test(b) || (l = d),
            l && "string" == typeof l && (f = e.filter(l, f)),
            f = 1 < this.length && !md[b] ? e.unique(f) : f,
            1 < this.length && ld.test(b) && (f = f.reverse()),
            this.pushStack(f, b, Z.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"),
            1 === c.length ? e.find.matchesSelector(c[0], b) ? [c[0]] : [] : e.find.matches(b, c)
        },
        dir: function(b, d, n) {
            var l = [];
            for (b = b[d]; b && 9 !== b.nodeType && (n === c || 1 !== b.nodeType || !e(b).is(n)); )
                1 === b.nodeType && l.push(b),
                b = b[d];
            return l
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling)
                1 === b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , nd = / jQuery\d+="(?:null|\d+)"/g
      , qb = /^\s+/
      , ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , fc = /<([\w:]+)/
      , od = /<tbody/i
      , pd = /<|&#?\w+;/
      , qd = /<(?:script|style|link)/i
      , rd = /<(?:script|object|embed|option|style)/i
      , rb = RegExp("<(?:" + wb + ")[\\s/>]", "i")
      , xb = /^(?:checkbox|radio)$/
      , gc = /checked\s*(?:[^=]|=\s*.checked.)/i
      , sd = /\/(java|ecma)script/i
      , td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , T = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , hc = A(C)
      , sb = hc.appendChild(C.createElement("div"));
    T.optgroup = T.option;
    T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
    T.th = T.td;
    e.support.htmlSerialize || (T._default = [1, "X<div>", "</div>"]);
    e.fn.extend({
        text: function(b) {
            return e.access(this, function(b) {
                return b === c ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (e.isFunction(b))
                return this.each(function(c) {
                    e(this).wrapAll(b.call(this, c))
                });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType; )
                        b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return e.isFunction(b) ? this.each(function(c) {
                e(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = e(this)
                  , d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = e.isFunction(b);
            return this.each(function(d) {
                e(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!x(this[0]))
                return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this)
                });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(b, this), "before", this.selector)
            }
        },
        after: function() {
            if (!x(this[0]))
                return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this.nextSibling)
                });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, l = 0; null != (d = this[l]); l++)
                if (!b || e.filter(b, [d]).length)
                    !c && 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")),
                    e.cleanData([d])),
                    d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && e.cleanData(b.getElementsByTagName("*")); b.firstChild; )
                    b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b,
            c = null == c ? b : c,
            this.map(function() {
                return e.clone(this, b, c)
            })
        },
        html: function(b) {
            return e.access(this, function(b) {
                var d = this[0] || {}
                  , j = 0
                  , l = this.length;
                if (b === c)
                    return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (e.support.htmlSerialize || !rb.test(b)) && (e.support.leadingWhitespace || !qb.test(b)) && !T[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; j < l; j++)
                            d = this[j] || {},
                            1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")),
                            d.innerHTML = b);
                        d = 0
                    } catch (f) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return x(this[0]) ? this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this : e.isFunction(b) ? this.each(function(c) {
                var d = e(this)
                  , l = d.html();
                d.replaceWith(b.call(this, c, l))
            }) : ("string" != typeof b && (b = e(b).detach()),
            this.each(function() {
                var c = this.nextSibling
                  , d = this.parentNode;
                e(this).remove();
                c ? e(c).before(b) : e(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, n) {
            b = [].concat.apply([], b);
            var l, f, g, m = 0, s = b[0], u = [], t = this.length;
            if (!e.support.checkClone && 1 < t && "string" == typeof s && gc.test(s))
                return this.each(function() {
                    e(this).domManip(b, d, n)
                });
            if (e.isFunction(s))
                return this.each(function(l) {
                    var f = e(this);
                    b[0] = s.call(this, l, d ? f.html() : c);
                    f.domManip(b, d, n)
                });
            if (this[0]) {
                l = e.buildFragment(b, this, u);
                g = l.fragment;
                f = g.firstChild;
                1 === g.childNodes.length && (g = f);
                if (f) {
                    d = d && e.nodeName(f, "tr");
                    for (l = l.cacheable || t - 1; m < t; m++)
                        n.call(d && e.nodeName(this[m], "table") ? this[m].getElementsByTagName("tbody")[0] || this[m].appendChild(this[m].ownerDocument.createElement("tbody")) : this[m], m === l ? g : e.clone(g, !0, !0))
                }
                g = f = null;
                u.length && e.each(u, function(b, c) {
                    c.src ? e.ajax ? e.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : e.error("no ajax") : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    e.buildFragment = function(b, d, l) {
        var f, g, r, m = b[0];
        return d = d || C,
        d = !d.nodeType && d[0] || d,
        d = d.ownerDocument || d,
        1 === b.length && "string" == typeof m && 512 > m.length && d === C && "<" === m.charAt(0) && !rd.test(m) && (e.support.checkClone || !gc.test(m)) && (e.support.html5Clone || !rb.test(m)) && (g = !0,
        f = e.fragments[m],
        r = f !== c),
        f || (f = d.createDocumentFragment(),
        e.clean(b, d, f, l),
        g && (e.fragments[m] = r && f)),
        {
            fragment: f,
            cacheable: g
        }
    }
    ;
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        e.fn[b] = function(d) {
            var l, f = 0, g = [];
            d = e(d);
            var m = d.length;
            l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === m)
                return d[c](this[0]),
                this;
            for (; f < m; f++)
                l = (0 < f ? this.clone(!0) : this).get(),
                e(d[f])[c](l),
                g = g.concat(l);
            return this.pushStack(g, b, d.selector)
        }
    });
    e.extend({
        clone: function(b, c, d) {
            var f, g, r, m;
            e.support.html5Clone || e.isXMLDoc(b) || !rb.test("<" + b.nodeName + ">") ? m = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML,
            sb.removeChild(m = sb.firstChild));
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !e.isXMLDoc(b)) {
                l(b, m);
                f = s(b);
                g = s(m);
                for (r = 0; f[r]; ++r)
                    g[r] && l(f[r], g[r])
            }
            if (c && (B(b, m),
            d)) {
                f = s(b);
                g = s(m);
                for (r = 0; f[r]; ++r)
                    B(f[r], g[r])
            }
            return m
        },
        clean: function(b, c, d, l) {
            var f, g, m, s, t, p, y, z = c === C && hc, B = [];
            if (!c || "undefined" == typeof c.createDocumentFragment)
                c = C;
            for (f = 0; null != (m = b[f]); f++)
                if ("number" == typeof m && (m += ""),
                m) {
                    if ("string" == typeof m)
                        if (pd.test(m)) {
                            z = z || A(c);
                            p = c.createElement("div");
                            z.appendChild(p);
                            m = m.replace(ec, "<$1></$2>");
                            g = (fc.exec(m) || ["", ""])[1].toLowerCase();
                            s = T[g] || T._default;
                            t = s[0];
                            for (p.innerHTML = s[1] + m + s[2]; t--; )
                                p = p.lastChild;
                            if (!e.support.tbody) {
                                t = od.test(m);
                                s = "table" === g && !t ? p.firstChild && p.firstChild.childNodes : "<table>" === s[1] && !t ? p.childNodes : [];
                                for (g = s.length - 1; 0 <= g; --g)
                                    e.nodeName(s[g], "tbody") && !s[g].childNodes.length && s[g].parentNode.removeChild(s[g])
                            }
                            !e.support.leadingWhitespace && qb.test(m) && p.insertBefore(c.createTextNode(qb.exec(m)[0]), p.firstChild);
                            m = p.childNodes;
                            p.parentNode.removeChild(p)
                        } else
                            m = c.createTextNode(m);
                    m.nodeType ? B.push(m) : e.merge(B, m)
                }
            p && (m = p = z = null);
            if (!e.support.appendChecked)
                for (f = 0; null != (m = B[f]); f++)
                    e.nodeName(m, "input") ? u(m) : "undefined" != typeof m.getElementsByTagName && e.grep(m.getElementsByTagName("input"), u);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type))
                        return l ? l.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                }
                ;
                for (f = 0; null != (m = B[f]); f++)
                    if (!e.nodeName(m, "script") || !b(m))
                        d.appendChild(m),
                        "undefined" != typeof m.getElementsByTagName && (y = e.grep(e.merge([], m.getElementsByTagName("script")), b),
                        B.splice.apply(B, [f + 1, 0].concat(y)),
                        f += y.length)
            }
            return B
        },
        cleanData: function(b, c) {
            for (var d, l, f, g, m = 0, s = e.expando, u = e.cache, t = e.support.deleteExpando, p = e.event.special; null != (f = b[m]); m++)
                if (c || e.acceptData(f))
                    if (d = (l = f[s]) && u[l]) {
                        if (d.events)
                            for (g in d.events)
                                p[g] ? e.event.remove(f, g) : e.removeEvent(f, g, d.handle);
                        u[l] && (delete u[l],
                        t ? delete f[s] : f.removeAttribute ? f.removeAttribute(s) : f[s] = null,
                        e.deletedIds.push(l))
                    }
        }
    });
    var Ua, da;
    e.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    }
    ;
    Ua = e.uaMatch(zc.userAgent);
    da = {};
    Ua.browser && (da[Ua.browser] = !0,
    da.version = Ua.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    e.browser = da;
    e.sub = function() {
        function b(c, d) {
            return new b.fn.init(c,d)
        }
        e.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, l) {
            return l && l instanceof e && !(l instanceof b) && (l = b(l)),
            e.fn.init.call(this, d, l, c)
        }
        ;
        b.fn.init.prototype = b.fn;
        var c = b(C);
        return b
    }
    ;
    var P, la, ma, tb = /alpha\([^)]*\)/i, ud = /opacity=([^)]*)/, vd = /^(top|right|bottom|left)$/, wd = /^(none|table(?!-c[ea]).+)/, ic = /^margin/, vc = RegExp("^(" + Ea + ")(.*)$", "i"), ya = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"), xd = RegExp("^([-+])=(" + Ea + ")", "i"), Ya = {}, yd = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, jc = {
        letterSpacing: 0,
        fontWeight: 400
    }, ea = ["Top", "Right", "Bottom", "Left"], yb = ["Webkit", "O", "Moz", "ms"], zd = e.fn.toggle;
    e.fn.extend({
        css: function(b, d) {
            return e.access(this, function(b, d, j) {
                return j !== c ? e.style(b, d, j) : e.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return K(this, !0)
        },
        hide: function() {
            return K(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return e.isFunction(b) && e.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : L(this)) ? e(this).show() : e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = P(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, l, f) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g, s, m, u = e.camelCase(d), t = b.style;
                d = e.cssProps[u] || (e.cssProps[u] = z(t, u));
                m = e.cssHooks[d] || e.cssHooks[u];
                if (l === c)
                    return m && "get"in m && (g = m.get(b, !1, f)) !== c ? g : t[d];
                s = typeof l;
                "string" === s && (g = xd.exec(l)) && (l = (g[1] + 1) * g[2] + parseFloat(e.css(b, d)),
                s = "number");
                if (!(null == l || "number" === s && isNaN(l)))
                    if ("number" === s && !e.cssNumber[u] && (l += "px"),
                    !m || !("set"in m) || (l = m.set(b, l, f)) !== c)
                        try {
                            t[d] = l
                        } catch (p) {}
            }
        },
        css: function(b, d, l, f) {
            var g, s, m, u = e.camelCase(d);
            return d = e.cssProps[u] || (e.cssProps[u] = z(b.style, u)),
            m = e.cssHooks[d] || e.cssHooks[u],
            m && "get"in m && (g = m.get(b, !0, f)),
            g === c && (g = P(b, d)),
            "normal" === g && d in jc && (g = jc[d]),
            l || f !== c ? (s = parseFloat(g),
            l || e.isNumeric(s) ? s || 0 : g) : g
        },
        swap: function(b, c, d) {
            var e, l = {};
            for (e in c)
                l[e] = b.style[e],
                b.style[e] = c[e];
            d = d.call(b);
            for (e in c)
                b.style[e] = l[e];
            return d
        }
    });
    b.getComputedStyle ? P = function(c, d) {
        var l, f, g, s, m = b.getComputedStyle(c, null), u = c.style;
        return m && (l = m[d],
        "" === l && !e.contains(c.ownerDocument, c) && (l = e.style(c, d)),
        ya.test(l) && ic.test(d) && (f = u.width,
        g = u.minWidth,
        s = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = l,
        l = m.width,
        u.width = f,
        u.minWidth = g,
        u.maxWidth = s)),
        l
    }
    : C.documentElement.currentStyle && (P = function(b, c) {
        var d, e, l = b.currentStyle && b.currentStyle[c], f = b.style;
        return null == l && f && f[c] && (l = f[c]),
        ya.test(l) && !vd.test(c) && (d = f.left,
        e = b.runtimeStyle && b.runtimeStyle.left,
        e && (b.runtimeStyle.left = b.currentStyle.left),
        f.left = "fontSize" === c ? "1em" : l,
        l = f.pixelLeft + "px",
        f.left = d,
        e && (b.runtimeStyle.left = e)),
        "" === l ? "auto" : l
    }
    );
    e.each(["height", "width"], function(b, c) {
        e.cssHooks[c] = {
            get: function(b, d, j) {
                if (d)
                    return 0 === b.offsetWidth && wd.test(P(b, "display")) ? e.swap(b, yd, function() {
                        return J(b, c, j)
                    }) : J(b, c, j)
            },
            set: function(b, d, j) {
                return D(b, d, j ? Xa(b, c, j, e.support.boxSizing && "border-box" === e.css(b, "boxSizing")) : 0)
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style
              , l = b.currentStyle
              , f = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : ""
              , g = l && l.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === e.trim(g.replace(tb, "")) && d.removeAttribute && (d.removeAttribute("filter"),
            l && !l.filter)))
                d.filter = tb.test(g) ? g.replace(tb, f) : g + " " + f
        }
    });
    e(function() {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function(b, c) {
                return e.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c)
                        return P(b, "marginRight")
                })
            }
        });
        !e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function(b, c) {
            e.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var j = P(b, c);
                        return ya.test(j) ? e(b).position()[c] + "px" : j
                    }
                }
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !e.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || P(b, "display"))
    }
    ,
    e.expr.filters.visible = function(b) {
        return !e.expr.filters.hidden(b)
    }
    );
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        e.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d]
                  , l = {};
                for (d = 0; 4 > d; d++)
                    l[b + ea[d] + c] = e[d] || e[d - 2] || e[0];
                return l
            }
        };
        ic.test(b) || (e.cssHooks[b + c].set = D)
    });
    var Ad = /%20/g
      , wc = /\[\]$/
      , kc = /\r?\n/g
      , Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , Cd = /^(?:select|textarea)/i;
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = e(this).val();
                return null == d ? null : e.isArray(d) ? e.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    e.param = function(b, d) {
        var l, f = [], g = function(b, c) {
            c = e.isFunction(c) ? c() : null == c ? "" : c;
            f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
        };
        d === c && (d = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(b) || b.jquery && !e.isPlainObject(b))
            e.each(b, function() {
                g(this.name, this.value)
            });
        else
            for (l in b)
                O(l, b[l], d, g);
        return f.join("&").replace(Ad, "+")
    }
    ;
    var qa, ka, Dd = /#.*$/, Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Fd = /^(?:GET|HEAD)$/, Gd = /^\/\//, lc = /\?/, Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Id = /([?&])_=[^&]*/, mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nc = e.fn.load, Za = {}, oc = {}, pc = ["*/"] + ["*"];
    try {
        ka = yc.href
    } catch (Rd) {
        ka = C.createElement("a"),
        ka.href = "",
        ka = ka.href
    }
    qa = mc.exec(ka.toLowerCase()) || [];
    e.fn.load = function(b, d, l) {
        if ("string" != typeof b && nc)
            return nc.apply(this, arguments);
        if (!this.length)
            return this;
        var f, g, s, m = this, u = b.indexOf(" ");
        return 0 <= u && (f = b.slice(u, b.length),
        b = b.slice(0, u)),
        e.isFunction(d) ? (l = d,
        d = c) : d && "object" == typeof d && (g = "POST"),
        e.ajax({
            url: b,
            type: g,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                l && m.each(l, s || [b.responseText, c, b])
            }
        }).done(function(b) {
            s = arguments;
            m.html(f ? e("<div>").append(b.replace(Hd, "")).find(f) : b)
        }),
        this
    }
    ;
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        e.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    e.each(["get", "post"], function(b, d) {
        e[d] = function(b, j, l, f) {
            return e.isFunction(j) && (f = f || l,
            l = j,
            j = c),
            e.ajax({
                type: d,
                url: b,
                data: j,
                success: l,
                dataType: f
            })
        }
    });
    e.extend({
        getScript: function(b, d) {
            return e.get(b, c, d, "script")
        },
        getJSON: function(b, c, d) {
            return e.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? sa(b, e.ajaxSettings) : (c = b,
            b = e.ajaxSettings),
            sa(b, c),
            b
        },
        ajaxSettings: {
            url: ka,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: za(Za),
        ajaxTransport: za(oc),
        ajax: function(b, d) {
            function l(b, d, j, n) {
                var q, s, r, t, y, D = d;
                if (2 !== E) {
                    E = 2;
                    u && clearTimeout(u);
                    m = c;
                    g = n || "";
                    G.readyState = 0 < b ? 4 : 0;
                    if (j) {
                        t = z;
                        n = G;
                        var K, Q, aa, J, H = t.contents, F = t.dataTypes, O = t.responseFields;
                        for (Q in O)
                            Q in j && (n[O[Q]] = j[Q]);
                        for (; "*" === F[0]; )
                            F.shift(),
                            K === c && (K = t.mimeType || n.getResponseHeader("content-type"));
                        if (K)
                            for (Q in H)
                                if (H[Q] && H[Q].test(K)) {
                                    F.unshift(Q);
                                    break
                                }
                        if (F[0]in j)
                            aa = F[0];
                        else {
                            for (Q in j) {
                                if (!F[0] || t.converters[Q + " " + F[0]]) {
                                    aa = Q;
                                    break
                                }
                                J || (J = Q)
                            }
                            aa = aa || J
                        }
                        t = j = aa ? (aa !== F[0] && F.unshift(aa),
                        j[aa]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (z.ifModified && (y = G.getResponseHeader("Last-Modified"),
                        y && (e.lastModified[f] = y),
                        y = G.getResponseHeader("Etag"),
                        y && (e.etag[f] = y)),
                        304 === b)
                            D = "notmodified",
                            q = !0;
                        else {
                            var I;
                            a: {
                                q = z;
                                s = t;
                                var M, D = q.dataTypes.slice();
                                j = D[0];
                                K = {};
                                Q = 0;
                                q.dataFilter && (s = q.dataFilter(s, q.dataType));
                                if (D[1])
                                    for (I in q.converters)
                                        K[I.toLowerCase()] = q.converters[I];
                                for (; r = D[++Q]; )
                                    if ("*" !== r) {
                                        if ("*" !== j && j !== r) {
                                            I = K[j + " " + r] || K["* " + r];
                                            if (!I)
                                                for (M in K)
                                                    if (y = M.split(" "),
                                                    y[1] === r && (I = K[j + " " + y[0]] || K["* " + y[0]])) {
                                                        !0 === I ? I = K[M] : !0 !== K[M] && (r = y[0],
                                                        D.splice(Q--, 0, r));
                                                        break
                                                    }
                                            if (!0 !== I)
                                                if (I && q["throws"])
                                                    s = I(s);
                                                else
                                                    try {
                                                        s = I(s)
                                                    } catch (N) {
                                                        I = {
                                                            state: "parsererror",
                                                            error: I ? N : "No conversion from " + j + " to " + r
                                                        };
                                                        break a
                                                    }
                                        }
                                        j = r
                                    }
                                I = {
                                    state: "success",
                                    data: s
                                }
                            }
                            q = I;
                            D = q.state;
                            s = q.data;
                            r = q.error;
                            q = !r
                        }
                    else if (r = D,
                    !D || b)
                        D = "error",
                        0 > b && (b = 0);
                    G.status = b;
                    G.statusText = (d || D) + "";
                    q ? x.resolveWith(A, [s, D, G]) : x.rejectWith(A, [G, D, r]);
                    G.statusCode(C);
                    C = c;
                    p && B.trigger("ajax" + (q ? "Success" : "Error"), [G, z, q ? s : r]);
                    L.fireWith(A, [G, D]);
                    p && (B.trigger("ajaxComplete", [G, z]),
                    --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b,
            b = c);
            d = d || {};
            var f, g, s, m, u, t, p, y, z = e.ajaxSetup({}, d), A = z.context || z, B = A !== z && (A.nodeType || A instanceof e) ? e(A) : e.event, x = e.Deferred(), L = e.Callbacks("once memory"), C = z.statusCode || {}, D = {}, K = {}, E = 0, J = "canceled", G = {
                readyState: 0,
                setRequestHeader: function(b, c) {
                    if (!E) {
                        var d = b.toLowerCase();
                        b = K[d] = K[d] || b;
                        D[b] = c
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === E ? g : null
                },
                getResponseHeader: function(b) {
                    var d;
                    if (2 === E) {
                        if (!s)
                            for (s = {}; d = Ed.exec(g); )
                                s[d[1].toLowerCase()] = d[2];
                        d = s[b.toLowerCase()]
                    }
                    return d === c ? null : d
                },
                overrideMimeType: function(b) {
                    return E || (z.mimeType = b),
                    this
                },
                abort: function(b) {
                    return b = b || J,
                    m && m.abort(b),
                    l(0, b),
                    this
                }
            };
            x.promise(G);
            G.success = G.done;
            G.error = G.fail;
            G.complete = L.add;
            G.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > E)
                        for (c in b)
                            C[c] = [C[c], b[c]];
                    else
                        c = b[G.status],
                        G.always(c)
                }
                return this
            }
            ;
            z.url = ((b || z.url) + "").replace(Dd, "").replace(Gd, qa[1] + "//");
            z.dataTypes = e.trim(z.dataType || "*").toLowerCase().split(fa);
            null == z.crossDomain && (t = mc.exec(z.url.toLowerCase()) || !1,
            z.crossDomain = t && t.join(":") + (t[3] ? "" : "http:" === t[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "" : "http:" === qa[1] ? 80 : 443));
            z.data && z.processData && "string" != typeof z.data && (z.data = e.param(z.data, z.traditional));
            na(Za, z, d, G);
            if (2 === E)
                return G;
            p = z.global;
            z.type = z.type.toUpperCase();
            z.hasContent = !Fd.test(z.type);
            p && 0 === e.active++ && e.event.trigger("ajaxStart");
            if (!z.hasContent && (z.data && (z.url += (lc.test(z.url) ? "&" : "?") + z.data,
            delete z.data),
            f = z.url,
            !1 === z.cache)) {
                t = e.now();
                var H = z.url.replace(Id, "$1_=" + t);
                z.url = H + (H === z.url ? (lc.test(z.url) ? "&" : "?") + "_=" + t : "")
            }
            (z.data && z.hasContent && !1 !== z.contentType || d.contentType) && G.setRequestHeader("Content-Type", z.contentType);
            z.ifModified && (f = f || z.url,
            e.lastModified[f] && G.setRequestHeader("If-Modified-Since", e.lastModified[f]),
            e.etag[f] && G.setRequestHeader("If-None-Match", e.etag[f]));
            G.setRequestHeader("Accept", z.dataTypes[0] && z.accepts[z.dataTypes[0]] ? z.accepts[z.dataTypes[0]] + ("*" !== z.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : z.accepts["*"]);
            for (y in z.headers)
                G.setRequestHeader(y, z.headers[y]);
            if (!z.beforeSend || !1 !== z.beforeSend.call(A, G, z) && 2 !== E) {
                J = "abort";
                for (y in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    G[y](z[y]);
                if (m = na(oc, z, d, G)) {
                    G.readyState = 1;
                    p && B.trigger("ajaxSend", [G, z]);
                    z.async && 0 < z.timeout && (u = setTimeout(function() {
                        G.abort("timeout")
                    }, z.timeout));
                    try {
                        E = 1,
                        m.send(D, l)
                    } catch (F) {
                        if (2 > E)
                            l(-1, F);
                        else
                            throw F;
                    }
                } else
                    l(-1, "No Transport");
                return G
            }
            return G.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = []
      , Jd = /\?/
      , Va = /(=)\?(?=&|$)|\?\?/
      , Kd = e.now();
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || e.expando + "_" + Kd++;
            return this[b] = !0,
            b
        }
    });
    e.ajaxPrefilter("json jsonp", function(d, l, f) {
        var g, s, u, m = d.data, t = d.url, p = !1 !== d.jsonp, z = p && Va.test(t), y = p && !z && "string" == typeof m && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(m);
        if ("jsonp" === d.dataTypes[0] || z || y)
            return g = d.jsonpCallback = e.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback,
            s = b[g],
            z ? d.url = t.replace(Va, "$1" + g) : y ? d.data = m.replace(Va, "$1" + g) : p && (d.url += (Jd.test(t) ? "&" : "?") + d.jsonp + "=" + g),
            d.converters["script json"] = function() {
                return u || e.error(g + " was not called"),
                u[0]
            }
            ,
            d.dataTypes[0] = "json",
            b[g] = function() {
                u = arguments
            }
            ,
            f.always(function() {
                b[g] = s;
                d[g] && (d.jsonpCallback = l.jsonpCallback,
                qc.push(g));
                u && e.isFunction(s) && s(u[0]);
                u = s = c
            }),
            "script"
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return e.globalEval(b),
                b
            }
        }
    });
    e.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET",
        b.global = !1)
    });
    e.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, e = C.head || C.getElementsByTagName("head")[0] || C.documentElement;
            return {
                send: function(l, f) {
                    d = C.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, j) {
                        if (j || !d.readyState || /loaded|complete/.test(d.readyState))
                            d.onload = d.onreadystatechange = null,
                            e && d.parentNode && e.removeChild(d),
                            d = c,
                            j || f(200, "success")
                    }
                    ;
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ra, ub = b.ActiveXObject ? function() {
        for (var b in ra)
            ra[b](0, 1)
    }
    : !1, Ld = 0;
    e.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && zb()))
            a: {
                try {
                    c = new b.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (d) {}
                c = void 0
            }
        return c
    }
    : zb;
    var vb = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !!vb,
        cors: !!vb && "withCredentials"in vb
    });
    e.support.ajax && e.ajaxTransport(function(d) {
        if (!d.crossDomain || e.support.cors) {
            var l;
            return {
                send: function(f, g) {
                    var s, u, m = d.xhr();
                    d.username ? m.open(d.type, d.url, d.async, d.username, d.password) : m.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (u in d.xhrFields)
                            m[u] = d.xhrFields[u];
                    d.mimeType && m.overrideMimeType && m.overrideMimeType(d.mimeType);
                    !d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in f)
                            m.setRequestHeader(u, f[u])
                    } catch (t) {}
                    m.send(d.hasContent && d.data || null);
                    l = function(b, f) {
                        var n, u, r, t, p;
                        try {
                            if (l && (f || 4 === m.readyState))
                                if (l = c,
                                s && (m.onreadystatechange = e.noop,
                                ub && delete ra[s]),
                                f)
                                    4 !== m.readyState && m.abort();
                                else {
                                    n = m.status;
                                    r = m.getAllResponseHeaders();
                                    t = {};
                                    (p = m.responseXML) && p.documentElement && (t.xml = p);
                                    try {
                                        t.text = m.responseText
                                    } catch (z) {}
                                    try {
                                        u = m.statusText
                                    } catch (y) {
                                        u = ""
                                    }
                                    !n && d.isLocal && !d.crossDomain ? n = t.text ? 200 : 404 : 1223 === n && (n = 204)
                                }
                        } catch (A) {
                            f || g(-1, A)
                        }
                        t && g(n, u, t, r)
                    }
                    ;
                    d.async ? 4 === m.readyState ? setTimeout(l, 0) : (s = ++Ld,
                    ub && (ra || (ra = {},
                    e(b).unload(ub)),
                    ra[s] = l),
                    m.onreadystatechange = l) : l()
                },
                abort: function() {
                    l && l(0, 1)
                }
            }
        }
    });
    var Aa, Wa, Md = /^(?:toggle|show|hide)$/, Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"), Od = /queueHooks$/, Ba = [function(b, c, d) {
        var l, f, g, m, s, u, t = this, p = b.style, z = {}, y = [], A = b.nodeType && L(b);
        d.queue || (s = e._queueHooks(b, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        u = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || u()
        }
        ),
        s.unqueued++,
        t.always(function() {
            t.always(function() {
                s.unqueued--;
                e.queue(b, "fx").length || s.empty.fire()
            })
        }));
        1 === b.nodeType && ("height"in c || "width"in c) && (d.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === e.css(b, "display") && "none" === e.css(b, "float") && (!e.support.inlineBlockNeedsLayout || "inline" === I(b.nodeName) ? p.display = "inline-block" : p.zoom = 1));
        d.overflow && (p.overflow = "hidden",
        e.support.shrinkWrapBlocks || t.done(function() {
            p.overflow = d.overflow[0];
            p.overflowX = d.overflow[1];
            p.overflowY = d.overflow[2]
        }));
        for (l in c)
            f = c[l],
            Md.exec(f) && (delete c[l],
            f !== (A ? "hide" : "show") && y.push(l));
        if (f = y.length) {
            g = e._data(b, "fxshow") || e._data(b, "fxshow", {});
            A ? e(b).show() : t.done(function() {
                e(b).hide()
            });
            t.done(function() {
                var c;
                e.removeData(b, "fxshow", !0);
                for (c in z)
                    e.style(b, c, z[c])
            });
            for (l = 0; l < f; l++)
                c = y[l],
                m = t.createTween(c, A ? g[c] : 0),
                z[c] = g[c] || e.style(b, c),
                c in g || (g[c] = m.start,
                A && (m.end = m.start,
                m.start = "width" === c || "height" === c ? 1 : 0))
        }
    }
    ], ta = {
        "*": [function(b, c) {
            var d, l, f = this.createTween(b, c), g = Nd.exec(c), m = f.cur(), s = +m || 0, u = 1, t = 20;
            if (g) {
                d = +g[2];
                l = g[3] || (e.cssNumber[b] ? "" : "px");
                if ("px" !== l && s) {
                    s = e.css(f.elem, b, !0) || d || 1;
                    do
                        u = u || ".5",
                        s /= u,
                        e.style(f.elem, b, s + l);
                    while (u !== (u = f.cur() / m) && 1 !== u && --t)
                }
                f.unit = l;
                f.start = s;
                f.end = g[1] ? s + (g[1] + 1) * d : d
            }
            return f
        }
        ]
    };
    e.Animation = e.extend(Bb, {
        tweener: function(b, c) {
            e.isFunction(b) ? (c = b,
            b = ["*"]) : b = b.split(" ");
            for (var d, l = 0, f = b.length; l < f; l++)
                d = b[l],
                ta[d] = ta[d] || [],
                ta[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    e.Tween = R;
    R.prototype = {
        constructor: R,
        init: function(b, c, d, l, f, g) {
            this.elem = b;
            this.prop = d;
            this.easing = f || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = l;
            this.unit = g || (e.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = R.propHooks[this.prop];
            return b && b.get ? b.get(this) : R.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = R.propHooks[this.prop];
            return this.options.duration ? this.pos = c = e.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b,
            this.now = (this.end - this.start) * c + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            d && d.set ? d.set(this) : R.propHooks._default.set(this),
            this
        }
    };
    R.prototype.init.prototype = R.prototype;
    R.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = e.css(b.elem, b.prop, !1, ""),
                !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                e.fx.step[b.prop] ? e.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[e.cssProps[b.prop]] || e.cssHooks[b.prop]) ? e.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    e.each(["toggle", "show", "hide"], function(b, c) {
        var d = e.fn[c];
        e.fn[c] = function(l, f, g) {
            return null == l || "boolean" == typeof l || !b && e.isFunction(l) && e.isFunction(f) ? d.apply(this, arguments) : this.animate(Ca(c, !0), l, f, g)
        }
    });
    e.fn.extend({
        fadeTo: function(b, c, d, e) {
            return this.filter(L).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, e)
        },
        animate: function(b, c, d, l) {
            var f = e.isEmptyObject(b)
              , g = e.speed(c, d, l);
            c = function() {
                var c = Bb(this, e.extend({}, b), g);
                f && c.stop(!0)
            }
            ;
            return f || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function(b, d, l) {
            var f = function(b) {
                var c = b.stop;
                delete b.stop;
                c(l)
            };
            return "string" != typeof b && (l = d,
            d = b,
            b = c),
            d && !1 !== b && this.queue(b || "fx", []),
            this.each(function() {
                var c = !0
                  , d = null != b && b + "queueHooks"
                  , g = e.timers
                  , s = e._data(this);
                if (d)
                    s[d] && s[d].stop && f(s[d]);
                else
                    for (d in s)
                        s[d] && s[d].stop && Od.test(d) && f(s[d]);
                for (d = g.length; d--; )
                    g[d].elem === this && (null == b || g[d].queue === b) && (g[d].anim.stop(l),
                    c = !1,
                    g.splice(d, 1));
                (c || !l) && e.dequeue(this, b)
            })
        }
    });
    e.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        e.fn[b] = function(b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    e.speed = function(b, c, d) {
        var l = b && "object" == typeof b ? e.extend({}, b) : {
            complete: d || !d && c || e.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !e.isFunction(c) && c
        };
        l.duration = e.fx.off ? 0 : "number" == typeof l.duration ? l.duration : l.duration in e.fx.speeds ? e.fx.speeds[l.duration] : e.fx.speeds._default;
        if (null == l.queue || !0 === l.queue)
            l.queue = "fx";
        return l.old = l.complete,
        l.complete = function() {
            e.isFunction(l.old) && l.old.call(this);
            l.queue && e.dequeue(this, l.queue)
        }
        ,
        l
    }
    ;
    e.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    e.timers = [];
    e.fx = R.prototype.init;
    e.fx.tick = function() {
        for (var b, c = e.timers, d = 0; d < c.length; d++)
            b = c[d],
            !b() && c[d] === b && c.splice(d--, 1);
        c.length || e.fx.stop()
    }
    ;
    e.fx.timer = function(b) {
        b() && e.timers.push(b) && !Wa && (Wa = setInterval(e.fx.tick, e.fx.interval))
    }
    ;
    e.fx.interval = 13;
    e.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    }
    ;
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function(b) {
        return e.grep(e.timers, function(c) {
            return b === c.elem
        }).length
    }
    );
    var rc = /^(?:body|html)$/i;
    e.fn.offset = function(b) {
        if (arguments.length)
            return b === c ? this : this.each(function(c) {
                e.offset.setOffset(this, b, c)
            });
        var d, l, f, g, s, m, u, t = {
            top: 0,
            left: 0
        }, p = this[0], z = p && p.ownerDocument;
        if (z)
            return (l = z.body) === p ? e.offset.bodyOffset(p) : (d = z.documentElement,
            e.contains(d, p) ? ("undefined" != typeof p.getBoundingClientRect && (t = p.getBoundingClientRect()),
            f = Cb(z),
            g = d.clientTop || l.clientTop || 0,
            s = d.clientLeft || l.clientLeft || 0,
            m = f.pageYOffset || d.scrollTop,
            u = f.pageXOffset || d.scrollLeft,
            {
                top: t.top + m - g,
                left: t.left + u - s
            }) : t)
    }
    ;
    e.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop
              , d = b.offsetLeft;
            return e.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(e.css(b, "marginTop")) || 0,
            d += parseFloat(e.css(b, "marginLeft")) || 0),
            {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var l = e.css(b, "position");
            "static" === l && (b.style.position = "relative");
            var f = e(b), g = f.offset(), s = e.css(b, "top"), u = e.css(b, "left"), t = {}, p = {}, z, y;
            ("absolute" === l || "fixed" === l) && -1 < e.inArray("auto", [s, u]) ? (p = f.position(),
            z = p.top,
            y = p.left) : (z = parseFloat(s) || 0,
            y = parseFloat(u) || 0);
            e.isFunction(c) && (c = c.call(b, d, g));
            null != c.top && (t.top = c.top - g.top + z);
            null != c.left && (t.left = c.left - g.left + y);
            "using"in c ? c.using.call(b, t) : f.css(t)
        }
    };
    e.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0]
                  , c = this.offsetParent()
                  , d = this.offset()
                  , l = rc.test(c[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : c.offset();
                return d.top -= parseFloat(e.css(b, "marginTop")) || 0,
                d.left -= parseFloat(e.css(b, "marginLeft")) || 0,
                l.top += parseFloat(e.css(c[0], "borderTopWidth")) || 0,
                l.left += parseFloat(e.css(c[0], "borderLeftWidth")) || 0,
                {
                    top: d.top - l.top,
                    left: d.left - l.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || C.body; b && !rc.test(b.nodeName) && "static" === e.css(b, "position"); )
                    b = b.offsetParent;
                return b || C.body
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var l = /Y/.test(d);
        e.fn[b] = function(f) {
            return e.access(this, function(b, f, g) {
                var j = Cb(b);
                if (g === c)
                    return j ? d in j ? j[d] : j.document.documentElement[f] : b[f];
                j ? j.scrollTo(l ? e(j).scrollLeft() : g, l ? g : e(j).scrollTop()) : b[f] = g
            }, b, f, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        e.each({
            padding: "inner" + b,
            content: d,
            "": "outer" + b
        }, function(l, f) {
            e.fn[f] = function(f, g) {
                var s = arguments.length && (l || "boolean" != typeof f)
                  , u = l || (!0 === f || !0 === g ? "margin" : "border");
                return e.access(this, function(d, l, f) {
                    var g;
                    return e.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement,
                    Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : f === c ? e.css(d, l, f, u) : e.style(d, l, f, u)
                }, d, s ? f : c, s, null)
            }
        })
    });
    b.jQuery = b.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return e
    })
}
)(window);

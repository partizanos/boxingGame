(function(b) {
    Number.prototype.map = function(b, c, d, f) {
        return d + (f - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 * this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--; )
            this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1)
          , d = this
          , f = function() {}
          , g = function() {
            return d.apply(this instanceof f && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
        };
        f.prototype = this.prototype;
        g.prototype = new f;
        return g
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class)
                return b;
            if (b instanceof Array)
                for (var c = [], d = 0, f = b.length; d < f; d++)
                    c[d] = ig.copy(b[d]);
            else
                for (d in c = {},
                b)
                    c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var f = c[d];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class || null === f)
                    b[d] = f;
                else {
                    if (!b[d] || "object" != typeof b[d])
                        b[d] = f instanceof Array ? [] : {};
                    ig.merge(b[d], f)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b)
                return [];
            var c = [], d = [], f;
            for (f in b)
                c.push(f);
            c.sort();
            for (f = 0; f < c.length; f++)
                d.push(b[c[f]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var f = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + f] = b["moz" + f] = b["o" + f] = d : b["ms" + f] = b["moz" + f] = b["webkit" + f] = b["o" + f] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, f, g) {
            var p = ig.$new("canvas");
            p.width = b.width;
            p.height = b.height;
            var u = p.getContext("2d");
            ig.System.SCALE.CRISP(p, u);
            var z = ig.getVendorAttribute(u, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(u, "getImageDataHD");
            var x = b.width / z
              , K = b.height / z;
            p.width = Math.ceil(x);
            p.height = Math.ceil(K);
            u.drawImage(b, 0, 0, x, K);
            return 1 === z ? u.getImageData(c, d, f, g) : u.getImageDataHD(c, d, f, g)
        },
        module: function(b) {
            if (ig._current)
                throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body)
                throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache
              , f = ig.$new("script");
            f.type = "text/javascript";
            f.src = d;
            f.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            }
            ;
            f.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            }
            ;
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], f = !0, g = 0; g < d.requires.length; g++) {
                    var p = d.requires[g];
                    ig.modules[p] ? ig.modules[p].loaded || (f = !1) : (f = !1,
                    ig._loadScript(p, d.name))
                }
                f && d.body && (ig._loadQueue.splice(c, 1),
                d.loaded = !0,
                d.body(),
                b = !0,
                c--)
            }
            if (b)
                ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    f = [];
                    p = ig._loadQueue[c].requires;
                    for (g = 0; g < p.length; g++)
                        d = ig.modules[p[g]],
                        (!d || !d.loaded) && f.push(p[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + f.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body)
                    return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart"in b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(),
            ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            },
            ig._waitForOnload++,
            "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1),
            b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1
          , d = {};
        b.ig.setAnimation = function(f, g) {
            var p = c++;
            d[p] = !0;
            var x = function() {
                d[p] && (b.requestAnimationFrame(x, g),
                f())
            };
            b.requestAnimationFrame(x, g);
            return p
        }
        ;
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else
        b.ig.setAnimation = function(c) {
            return b.setInterval(c, 1E3 / 60)
        }
        ,
        b.ig.clearAnimation = function(c) {
            b.clearInterval(c)
        }
        ;
    var f = !1
      , g = /xyz/.test(function() {
        xyz
    }) ? /\bparent\b/ : /.*/
      , p = 0;
    b.ig.Class = function() {}
    var x = function(b) {
        var c = this.prototype, d = {}, f;
        for (f in b)
            "function" == typeof b[f] && "function" == typeof c[f] && g.test(b[f]) ? (d[f] = c[f],
            c[f] = function(b, c) {
                return function() {
                    var f = this.parent;
                    this.parent = d[b];
                    var g = c.apply(this, arguments);
                    this.parent = f;
                    return g
                }
            }(f, b[f])) : c[f] = b[f]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!f) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b)
                        return b
                }
                for (var c in this)
                    "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var A = this.prototype;
        f = !0;
        var B = new this;
        f = !1;
        for (var l in c)
            B[l] = "function" == typeof c[l] && "function" == typeof A[l] && g.test(c[l]) ? function(b, c) {
                return function() {
                    var d = this.parent;
                    this.parent = A[b];
                    var f = c.apply(this, arguments);
                    this.parent = d;
                    return f
                }
            }(l, c[l]) : c[l];
        d.prototype = B;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = x;
        d.classId = B.classId = ++p;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
}
)(window);
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, a) {
            e.exports = a.p + "static/media/Apple iPad Mini 2 16GB.39493b37.jfif";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/Apple iPad Mini 2 32GB.c3e65357.jfif";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/Canon T7i.46bdb0ef.jfif";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/Apple Watch Sport.1ee98623.jfif";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/Apple Watch Silver.3892acb7.jfif";
        },
        ,
        ,
        ,
        function (e, t, a) {
            e.exports = a(31);
        },
        ,
        ,
        ,
        ,
        ,
        function (e, t, a) {
        },
        ,
        function (e, t, a) {
        },
        ,
        function (e, t, a) {
        },
        ,
        function (e, t, a) {
        },
        ,
        function (e, t, a) {
        },
        ,
        function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                i = a.n(n),
                c = a(3),
                r = a.n(c),
                o = (a(21), a(13)),
                m = a(1),
                s = a(4),
                l = a(5),
                d = a(12),
                u = a(6),
                p = a(14),
                f = function (e) {
                    var t = e.activeTab,
                        a = e.onTabChange;
                    return i.a.createElement(
                        "nav",
                        {className: "App-nav"},
                        i.a.createElement(
                            "ul",
                            null,
                            i.a.createElement(
                                "li",
                                {className: "App-nav-item ".concat(0 === t && "selected")},
                                i.a.createElement(
                                    "a",
                                    {
                                        onClick: function () {
                                            return a(0);
                                        },
                                    },
                                    "Items"
                                )
                            ),
                            i.a.createElement(
                                "li",
                                {className: "App-nav-item ".concat(1 === t && "selected")},
                                i.a.createElement(
                                    "a",
                                    {
                                        onClick: function () {
                                            return a(1);
                                        },
                                    },
                                    "Cart"
                                )
                            )
                        )
                    );
                },
                v =
                    (a(23),
                        a(25),
                        function (e) {
                            var t = e.item,
                                a = e.children;
                            return i.a.createElement(
                                "div",
                                {className: "Item"},
                                i.a.createElement(
                                    "div",
                                    {className: "Item-left"},
                                    i.a.createElement("img", {
                                        src: t.image,
                                        alt: "image",
                                        className: "Item-image",
                                    }),
                                    i.a.createElement("div", {className: "Item-title"}, t.name),
                                    i.a.createElement(
                                        "div",
                                        {className: "Item-description"},
                                        t.description
                                    )
                                ),
                                i.a.createElement(
                                    "div",
                                    {className: "Item-right"},
                                    i.a.createElement(
                                        "div",
                                        {className: "Item-price"},
                                        "$",
                                        t.price
                                    ),
                                    a
                                )
                            );
                        });
            a(27);
            var h = function (e) {
                    var t = e.items,
                        a = e.onAddToCart;
                    return i.a.createElement(
                        "ul",
                        {className: "ItemPage-items"},
                        t.map(function (e) {
                            return i.a.createElement(
                                "li",
                                {key: e.id, className: "ItemPage-item"},
                                i.a.createElement(
                                    v,
                                    {item: e},
                                    i.a.createElement(
                                        "button",
                                        {
                                            className: "Item-addToCart",
                                            onClick: function () {
                                                return a(e);
                                            },
                                        },
                                        "Add to Cart"
                                    )
                                )
                            );
                        })
                    );
                },
                E = a(7),
                C = a.n(E),
                b = a(8),
                g = a.n(b),
                A = a(9),
                N = a.n(A),
                O = a(10),
                T = a.n(O),
                w = a(11),
                I = a.n(w),
                k = [
                    {
                        id: 0,
                        name: "Apple iPad Mini 2 16GB",
                        image: C.a,
                        description: "An iPad like no other. 16GB, WiFi, 4G.",
                        price: 229,
                    },
                    {
                        id: 1,
                        name: "Apple iPad Mini 2 32GB",
                        image: g.a,
                        description: "Even larger than the 16GB.",
                        price: 279,
                    },
                    {
                        id: 2,
                        name: "Canon T7i",
                        image: N.a,
                        description: "DSLR camera with lots of megapixels.",
                        price: 749.99,
                    },
                    {
                        id: 3,
                        name: "Apple Watch Sport",
                        image: T.a,
                        description: "A watch",
                        price: 249.99,
                    },
                    {
                        id: 4,
                        name: "Apple Watch Silver",
                        image: I.a,
                        description: "A more expensive watch",
                        price: 599.99,
                    },
                ];
            a(29);
            var j = function (e) {
                    var t = e.items,
                        a = e.onAddOne,
                        n = e.onRemoveOne;
                    return i.a.createElement(
                        "ul",
                        {className: "CartPage-items"},
                        t.map(function (e) {
                            return i.a.createElement(
                                "li",
                                {key: e.id, className: "CartPage-item"},
                                i.a.createElement(
                                    v,
                                    {item: e},
                                    i.a.createElement(
                                        "div",
                                        {className: "CartItem-controls"},
                                        i.a.createElement(
                                            "button",
                                            {
                                                className: "CartItem-removeOne",
                                                onClick: function () {
                                                    return n(e);
                                                },
                                            },
                                            "\u2013"
                                        ),
                                        i.a.createElement(
                                            "span",
                                            {className: "CartItem-count"},
                                            e.count
                                        ),
                                        i.a.createElement(
                                            "button",
                                            {
                                                className: "CartItem-addOne",
                                                onClick: function () {
                                                    return a(e);
                                                },
                                            },
                                            "+"
                                        )
                                    )
                                )
                            );
                        })
                    );
                },
                y = (function (e) {
                    function t() {
                        var e, a;
                        Object(s.a)(this, t);
                        for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++)
                            i[c] = arguments[c];
                        return (
                            ((a = Object(d.a)(
                                this,
                                (e = Object(u.a)(t)).call.apply(e, [this].concat(i))
                            )).state = {activeTab: 0, cart: []}),
                                (a.handleTabChange = function (e) {
                                    a.setState({activeTab: e});
                                }),
                                (a.handleAddToCart = function (e) {
                                    a.setState({
                                        cart: [].concat(Object(m.a)(a.state.cart), [e.id]),
                                    });
                                }),
                                (a.handleRemoveOne = function (e) {
                                    var t = a.state.cart.indexOf(e.id);
                                    a.setState({
                                        cart: [].concat(
                                            Object(m.a)(a.state.cart.slice(0, t)),
                                            Object(m.a)(a.state.cart.slice(t + 1))
                                        ),
                                    });
                                }),
                                a
                        );
                    }

                    return (
                        Object(p.a)(t, e),
                            Object(l.a)(t, [
                                {
                                    key: "renderContent",
                                    value: function () {
                                        switch (this.state.activeTab) {
                                            default:
                                            case 0:
                                                return i.a.createElement(h, {
                                                    items: k,
                                                    onAddToCart: this.handleAddToCart,
                                                });
                                            case 1:
                                                return this.renderCart();
                                        }
                                    },
                                },
                                {
                                    key: "renderCart",
                                    value: function () {
                                        var e = this.state.cart.reduce(function (e, t) {
                                                return (e[t] = e[t] || 0), e[t]++, e;
                                            }, {}),
                                            t = Object.keys(e).map(function (t) {
                                                var a = k.find(function (e) {
                                                    return e.id === parseInt(t, 10);
                                                });
                                                return Object(o.a)({}, a, {count: e[t]});
                                            });
                                        return i.a.createElement(j, {
                                            items: t,
                                            onAddOne: this.handleAddToCart,
                                            onRemoveOne: this.handleRemoveOne,
                                        });
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.state.activeTab;
                                        return i.a.createElement(
                                            "div",
                                            {className: "App"},
                                            i.a.createElement(f, {
                                                activeTab: e,
                                                onTabChange: this.handleTabChange,
                                            }),
                                            i.a.createElement(
                                                "div",
                                                null,
                                                this.state.cart.length,
                                                " items"
                                            ),
                                            i.a.createElement(
                                                "main",
                                                {className: "App-content"},
                                                this.renderContent()
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                    );
                })(i.a.Component);
            Boolean(
                "localhost" === window.location.hostname ||
                "[::1]" === window.location.hostname ||
                window.location.hostname.match(
                    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                )
            );
            r.a.render(i.a.createElement(y, null), document.getElementById("root")),
            "serviceWorker" in navigator &&
            navigator.serviceWorker.ready.then(function (e) {
                e.unregister();
            });
        },
    ],
    [[15, 2, 1]],
]);
//# sourceMappingURL=main.4668dcfb.chunk.js.map

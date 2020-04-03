(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        13: function(e, t, a) {
            e.exports = a(26)
        },
        18: function(e, t, a) {},
        21: function(e, t, a) {},
        26: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(0),
                n = a.n(s),
                i = a(5),
                r = a.n(i),
                c = (a(18), a(6)),
                l = a(7),
                o = a(11),
                u = a(8),
                m = a(12),
                d = a(1),
                h = a(9),
                f = function(e) {
                    if (e.status >= 200 && e.status < 300) return e;
                    var t = new Error("HTTP Error ".concat(e.statusText));
                    throw t.status = e.statusText, t.response = e, console.log(t), t
                },
                k = function(e) {
                    return e.json()
                },
                p = {
                    api_beatmaps_request: function(e, t) {
                        return fetch("https://kurikku.pw/storage/api/".concat(e), {
                            method: "get",
                            cache: "default"
                        }).then(f).then(k).then(t)
                    }
                },
                b = (a(21), a(10)),
                v = a.n(b),
                E = function(e) {
                    function t(e) {
                        var a;
                        return Object(c.a)(this, t), (a = Object(o.a)(this, Object(u.a)(t).call(this, e))).renderDummyData = function() {
                            var e = a.state.beatmaps.map(function(e, t) {
                                var s = e.ChildrenBeatmaps.map(function(e, t) {
                                    return n.a.createElement("div", {
                                        key: e.BeatmapID,
                                        className: "diff2"
                                    }, n.a.createElement("div", {
                                        className: "faa fal fa-extra-mode-" + a.getGameMode(e.Mode),
                                        style: {
                                            color: a.getDiffColor(e.DifficultyRating)
                                        }
                                    }))
                                });
                                return n.a.createElement("div", {
                                    className: "eight wide column",
                                    key: e.SetID
                                }, n.a.createElement("div", {
                                    className: "map"
                                }, n.a.createElement("div", {
                                    className: "map-header"
                                }, n.a.createElement("a", {
                                    href: "https://ussr.pl/b/" + e.ChildrenBeatmaps[e.ChildrenBeatmaps.length - 1].BeatmapID
                                }, n.a.createElement("img", {
                                    src: "https://assets.ppy.sh/beatmaps/" + e.ChildrenBeatmaps[0].ParentSetID + "/covers/card.jpg",
                                    alt: ""
                                }))), n.a.createElement("div", {
                                    className: "status"
                                }, a.getRankStatus(e.RankedStatus)), n.a.createElement("div", {
                                    className: "name"
                                }, e.Title.substring(0, 35)), n.a.createElement("div", {
                                    className: "artist"
                                }, e.Artist.substring(0, 35)), n.a.createElement("div", {
                                    className: "creator"
                                }, "by ", e.Creator), n.a.createElement("a", {
                                    title: "Download beatmap",
                                    href: "https://pisstau.be/d/" + e.ChildrenBeatmaps[e.ChildrenBeatmaps.length - 1].ParentSetID,
                                    className: "download"
                                }, n.a.createElement("i", {
                                    className: "download disk icon"
                                })), n.a.createElement("div", {
                                    id: "alldiff"
                                }, s)))
                            });
                            return n.a.createElement("div", {
                                className: "ui stackable two grid",
                                onScrollCapture: a.scrollListener
                            }, e, n.a.createElement(v.a, {
                                onBottom: a.scrollListener
                            }))
                        }, a.state = {
                            offset: 100,
                            count: 22,
                            query: "",
                            mode: 0,
                            loading: !0,
                            status: 1
                        }, a.renderDummyData.bind(Object(d.a)(Object(d.a)(a))), a.scrollListener = a.scrollListener.bind(Object(d.a)(Object(d.a)(a))), a.reCallApi = a.reCallApi.bind(Object(d.a)(Object(d.a)(a))), a.queryNew = a.queryNew.bind(Object(d.a)(Object(d.a)(a))), a
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            p.api_beatmaps_request("search?offset=" + this.state.offset + "&amount=" + this.state.count + "&mode=" + this.state.mode + "&status=" + this.state.status + "&query=" + this.state.query, function(t) {
                                e.setState({
                                    loading: !1,
                                    beatmaps: t
                                })
                            })
                        }
                    }, {
                        key: "reCallApi",
                        value: function() {
                            var e = this;
                            this.setState({
                                loading: !0
                            }), p.api_beatmaps_request("search?offset=" + this.state.offset + "&amount=" + this.state.count + "&mode=" + this.state.mode + "&status=" + this.state.status + "&query=" + this.state.query, function(t) {
                                e.setState({
                                    loading: !1,
                                    beatmaps: t
                                })
                            })
                        }
                    }, {
                        key: "getDiffColor",
                        value: function(e) {
                            return e <= 1.5 ? "#8AAE17" : e > 1.5 && e <= 2.25 ? "#9AD4DF" : e > 2.25 && e <= 3.75 ? "#DEB32A" : e > 3.75 && e <= 5.25 ? "#EB69A4" : e > 5.25 && e <= 6.75 ? "#7264B5" : "#050505"
                        }
                    }, {
                        key: "getRankStatus",
                        value: function(e) {
                            switch (e) {
                                case 0:
                                    return "PENDING";
                                case 1:
                                    return "RANKED";
                                case 3:
                                    return "APPROVED";
                                case 4:
                                    return "Loved";
                                default:
                                    return "UNKNOWN"
                            }
                        }
                    }, {
                        key: "getGameMode",
                        value: function(e) {
                            switch (e) {
                                case 0:
                                    return "osu";
                                case 1:
                                    return "taiko";
                                case 2:
                                    return "fruits";
                                case 3:
                                    return "mania";
                                default:
                                    return "osu"
                            }
                        }
                    }, {
                        key: "scrollListener",
                        value: function() {
                            var e = this;
                            this.setState({
                                offset: this.state.offset + 22
                            }), p.api_beatmaps_request("search?offset=" + this.state.offset + "&amount=" + this.state.count + "&mode=" + this.state.mode + "&status=" + this.state.status + "&query=" + this.state.query, function(t) {
                                for (var a = e.state.beatmaps, s = 0; s < t.length; s++) a.push(t[s]);
                                e.setState({
                                    beatmaps: a
                                })
                            })
                        }
                    }, {
                        key: "switchMode",
                        value: function(e) {
                            var t = this,
                                a = Number(e.target.dataset.modeosu);
                            this.setState({
                                mode: a,
                                offset: 0
                            }, function() {
                                t.reCallApi()
                            })
                        }
                    }, {
                        key: "switchRank",
                        value: function(e) {
                            var t = this,
                                a = Number(e.target.dataset.rankstatus);
                            this.setState({
                                status: a,
                                offset: 0
                            }, function() {
                                t.reCallApi()
                            })
                        }
                    }, {
                        key: "queryNew",
                        value: function(e) {
                            var t = this,
                                a = e.target.value;
                            this.setState({
                                query: a,
                                offset: 0
                            }, function() {
                                t.reCallApi()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return n.a.createElement("div", null, n.a.createElement("div", {
                                className: "ui segment"
                            }, n.a.createElement("div", {
                                className: "ui one column stackable center aligned page grid"
                            }, n.a.createElement("div", {
                                className: "column twelve wide"
                            }, n.a.createElement("center", null, n.a.createElement("h1", {
                                className: "header"
                            }, "Beatmaps")), n.a.createElement("br", null), n.a.createElement("div", {
                                class: "ui input",
                                style: {
                                    width: "100%"
                                }
                            }, n.a.createElement(h.DebounceInput, {
                                minLength: 0,
                                debounceTimeout: 350,
                                onChange: this.queryNew
                            })), n.a.createElement("div", {
                                className: "ui segment wow-links"
                            }, n.a.createElement("a", {
                                onClick: this.switchMode.bind(this),
                                "data-modeosu": "-1",
                                className: -1 === this.state.mode ? "clicked" : "",
                                href: "#"
                            }, "Any"), n.a.createElement("a", {
                                onClick: this.switchMode.bind(this),
                                "data-modeosu": "0",
                                className: 0 === this.state.mode ? "clicked" : "",
                                href: "#"
                            }, "osu!std"), n.a.createElement("a", {
                                onClick: this.switchMode.bind(this),
                                "data-modeosu": "1",
                                className: 1 === this.state.mode ? "clicked" : "",
                                href: "#"
                            }, "osu!taiko"), n.a.createElement("a", {
                                onClick: this.switchMode.bind(this),
                                "data-modeosu": "2",
                                className: 2 === this.state.mode ? "clicked" : "",
                                href: "#"
                            }, "osu!catch"), n.a.createElement("a", {
                                onClick: this.switchMode.bind(this),
                                "data-modeosu": "3",
                                className: 3 === this.state.mode ? "clicked" : "",
                                href: "#"
                            }, "osu!mania")), n.a.createElement("div", {
                                className: "ui segment wow-links"
                            }, n.a.createElement("a", {
                                onClick: this.switchRank.bind(this),
                                className: -3 === this.state.status ? "clicked" : "",
                                "data-rankstatus": "-3",
                                href: "#"
                            }, "Any"), n.a.createElement("a", {
                                onClick: this.switchRank.bind(this),
                                className: 1 === this.state.status ? "clicked" : "",
                                "data-rankstatus": "1",
                                href: "#"
                            }, "Ranked"), n.a.createElement("a", {
                                onClick: this.switchRank.bind(this),
                                className: 3 === this.state.status ? "clicked" : "",
                                "data-rankstatus": "3",
                                href: "#"
                            }, "Qualified"), n.a.createElement("a", {
                                onClick: this.switchRank.bind(this),
                                className: 4 === this.state.status ? "clicked" : "",
                                "data-rankstatus": "4",
                                href: "#"
                            }, "Loved"), n.a.createElement("a", {
                                onClick: this.switchRank.bind(this),
                                className: 5 === this.state.status ? "clicked" : "",
                                "data-rankstatus": "5",
                                href: "#"
                            }, this.state.loading ? n.a.createElement("div", {
                                className: "ui active dimmer"
                            }, n.a.createElement("div", {
                                className: "ui text loader"
                            }, "Loading")) : this.renderDummyData()))
                        }
                    }]), t
                }(s.Component);
            r.a.render(n.a.createElement(E, null), document.getElementById("react-app"))
        }
    },
    [
        [13, 2, 1]
    ]
]);
//# sourceMappingURL=main.faace68d.chunk.js.map

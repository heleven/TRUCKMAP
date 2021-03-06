(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-a0032646"],
  {
    3883: function(e) {
      e.exports = JSON.parse(
        '{"styleJson":[{"featureType":"water","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"land","elementType":"all","stylers":{"color":"#f3f3f3"}},{"featureType":"railway","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"highway","elementType":"all","stylers":{"color":"#fdfdfd"}},{"featureType":"highway","elementType":"labels","stylers":{"visibility":"off"}},{"featureType":"arterial","elementType":"geometry","stylers":{"color":"#fefefe"}},{"featureType":"arterial","elementType":"geometry.fill","stylers":{"color":"#fefefe"}},{"featureType":"poi","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"green","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"subway","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"manmade","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"local","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"arterial","elementType":"labels","stylers":{"visibility":"off"}},{"featureType":"boundary","elementType":"all","stylers":{"color":"#fefefe"}},{"featureType":"building","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"label","elementType":"labels.text.fill","stylers":{"color":"#999999"}}]}'
      );
    },
    "454f": function(e, t, r) {
      r("46a7");
      var n = r("584a").Object;
      e.exports = function(e, t, r) {
        return n.defineProperty(e, t, r);
      };
    },
    "456d": function(e, t, r) {
      var n = r("4bf8"),
        a = r("0d58");
      r("5eda")("keys", function() {
        return function(e) {
          return a(n(e));
        };
      });
    },
    "46a7": function(e, t, r) {
      var n = r("63b6");
      n(n.S + n.F * !r("8e60"), "Object", { defineProperty: r("d9f6").f });
    },
    "5eda": function(e, t, r) {
      var n = r("5ca1"),
        a = r("8378"),
        i = r("79e5");
      e.exports = function(e, t) {
        var r = (a.Object || {})[e] || Object[e],
          o = {};
        (o[e] = t(r)),
          n(
            n.S +
              n.F *
                i(function() {
                  r(1);
                }),
            "Object",
            o
          );
      };
    },
    "7f1f": function(e, t, r) {
      "use strict";
      r.r(t);
      var n = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            { attrs: { id: "truck_map" } },
            [
              r("div", { attrs: { id: "map" } }),
              r(
                "el-drawer",
                {
                  attrs: {
                    title: "详细数据",
                    visible: e.drawer,
                    "with-header": !1
                  },
                  on: {
                    "update:visible": function(t) {
                      e.drawer = t;
                    }
                  }
                },
                [
                  r("span", [e._v("详细数据")]),
                  r(
                    "el-table",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { data: e.tableData, height: "60%", stripe: "" }
                    },
                    [
                      r("el-table-column", {
                        attrs: { prop: "name1", label: "城市1", width: "180" }
                      }),
                      r("el-table-column", {
                        attrs: { prop: "name2", label: "城市2", width: "180" }
                      }),
                      r("el-table-column", {
                        attrs: { prop: "no", label: "车辆数" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        a = [],
        i = (r("8e6e"), r("ac6a"), r("456d"), r("7f7f"), r("c5f6"), r("bd86")),
        o = (r("313e"), r("28c6")),
        l = r("3883"),
        c = r("2f62");
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function(t) {
                Object(i["a"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var u = {
          name: "IndexMAP",
          data: function() {
            return {
              option: [],
              legend_select: "2019",
              time: { 2019: 0, 2020.1: 1, 2020.2: 2, 2020.3: 3 },
              time_select: 0,
              drawer: !1,
              tableData: [{ name1: " ", name2: " ", no: 0 }]
            };
          },
          mounted: function() {
            this.getAllData(), this.options();
          },
          computed: Object(c["c"])({
            truck: function(e) {
              return e.Total_DataBase;
            },
            region: function(e) {
              return e.regionData;
            },
            datas: function(e) {
              return e.mapData;
            }
          }),
          methods: f(
            f({}, Object(c["b"])(["getAllData", "setData"])),
            {},
            {
              switchTo: function(e) {
                1 == e
                  ? this.$router.push("/Map")
                  : this.$router.push("/BiIndex");
              },
              options: function() {
                var e = this,
                  t = o,
                  r = [];
                for (var n in t) r.push({ name: n, coord: t[n] });
                var a = [];
                a.push({
                  type: "effectScatter",
                  coordinateSystem: "bmap",
                  name: "pos",
                  zlevel: 2,
                  rippleEffect: { brushType: "stroke" },
                  symbolSize: function(e) {
                    return (
                      (e[2] = Number(e[2])),
                      e[2] >= 1.6
                        ? 50
                        : e[2] >= 1.4
                        ? 45
                        : e[2] >= 1.2
                        ? 35
                        : e[2] >= 1
                        ? 30
                        : 25
                    );
                  },
                  showEffectOn: "render",
                  itemStyle: { normal: { color: "#a6c84c", opacity: 0.05 } },
                  data: this.region[0].map(function(r, n) {
                    var a = "";
                    for (var i in r) a = i;
                    var o = r[a][e.time_select];
                    return {
                      name: a,
                      value: t[e.truck[e.time_select].ids[n]].concat([
                        String(o)
                      ]),
                      year: e.time_select
                    };
                  })
                }),
                  (this.option = {
                    baseOption: {
                      timeline: {
                        bottom: "5%",
                        axisType: "category",
                        autoPlay: !0,
                        playInterval: 5e3,
                        data: [
                          "2019",
                          "2020-01",
                          "2020-02",
                          "2020-03",
                          "2020-04"
                        ]
                      },
                      graphic: [
                        {
                          type: "group",
                          bounding: "raw",
                          left: 60,
                          top: 450,
                          z: 100,
                          onclick: function(t, r, n, a) {
                            console.log("debug"), e.switchTo(1);
                          },
                          children: [
                            {
                              type: "rect",
                              left: "center",
                              top: "center",
                              z: 100,
                              shape: { width: 114, height: 32, r: 3 },
                              style: {
                                fill: "#fff",
                                stroke: "#66b1ff",
                                lineWidth: 0.5
                              }
                            },
                            {
                              type: "text",
                              left: "center",
                              top: "center",
                              z: 100,
                              style: {
                                fill: "#606266",
                                lineWidth: 0.5,
                                text: "卡车数量统计"
                              }
                            }
                          ]
                        },
                        {
                          type: "group",
                          bounding: "raw",
                          left: 60,
                          top: 400,
                          z: 100,
                          children: [
                            {
                              type: "rect",
                              left: "center",
                              top: "center",
                              z: 100,
                              shape: { width: 114, height: 32, r: 3 },
                              style: {
                                fill: "#66b1ff",
                                stroke: "#66b1ff",
                                lineWidth: 0.5
                              }
                            },
                            {
                              type: "text",
                              left: "center",
                              top: "center",
                              z: 100,
                              style: {
                                fill: "#fff",
                                lineWidth: 0.5,
                                text: "一体化指标统计"
                              }
                            }
                          ]
                        },
                        {
                          type: "group",
                          bounding: "raw",
                          left: 60,
                          top: 350,
                          z: 100,
                          onclick: function(t, r, n, a) {
                            console.log("debug"), e.switchTo(2);
                          },
                          children: [
                            {
                              type: "rect",
                              left: "center",
                              top: "center",
                              z: 100,
                              shape: { width: 114, height: 32, r: 3 },
                              style: {
                                fill: "#fff",
                                stroke: "#66b1ff",
                                lineWidth: 0.5
                              }
                            },
                            {
                              type: "text",
                              left: "center",
                              top: "center",
                              z: 100,
                              style: {
                                fill: "#606266",
                                lineWidth: 0.5,
                                text: "城间一体化指标统计"
                              }
                            }
                          ]
                        }
                      ],
                      title: {
                        text: "长三角区域城市一体化指标统计图",
                        subtext: "浙江大学",
                        sublink: "https://www.zju.edu.cn",
                        left: "center",
                        top: 5,
                        itemGap: 0,
                        textStyle: {
                          color: "#000000",
                          stringnumber: "bold",
                          fontSize: 30
                        },
                        subtextStyle: { fontSize: 20 },
                        z: 200
                      },
                      bmap: {
                        center: [119.165995, 30.945765],
                        zoom: 9,
                        roam: !0,
                        mapStyle: l,
                        left: "6%",
                        top: 40,
                        bottom: "54%",
                        right: "14%"
                      },
                      tooltip: {
                        show: !0,
                        trigger: "item",
                        formatter: function(e) {
                          return "undefined" != typeof e.data.toname
                            ? e.name.concat(
                                "->" + e.data.toname + ": " + e.value
                              )
                            : "timeline" == e.componentType
                            ? "2019" == e.name
                              ? e.name.concat("月平均数据")
                              : e.name
                            : e.name.concat(":" + e.value[2]);
                        },
                        padding: [5, 10],
                        transitionDuration: 0.2
                      },
                      visualMap: {
                        min: 0.7,
                        max: 2,
                        splitNumber: 6,
                        left: "right",
                        color: ["#d94e5d", "#eac736", "#50a3ba"],
                        textStyle: { color: "#000000", fontSize: "auto" },
                        seriesIndex: 0
                      },
                      calculable: !0,
                      grid: { top: 80, bottom: 100 },
                      series: a
                    },
                    options: [
                      {
                        title: {
                          text: "2019 长三角区域城市一体化指标统计图",
                          subtext: "浙江大学"
                        },
                        series: [
                          {
                            data: this.region[0].map(function(r, n) {
                              var a = "";
                              for (var i in r) a = i;
                              var o = r[a][0];
                              return {
                                name: a,
                                value: t[e.truck[0].ids[n]].concat([o])
                              };
                            })
                          }
                        ]
                      },
                      {
                        title: {
                          text: "2020-1 长三角区域城市一体化指标统计图",
                          subtext: "浙江大学"
                        },
                        series: [
                          {
                            data: this.region[0].map(function(r, n) {
                              var a = "";
                              for (var i in r) a = i;
                              var o = r[a][1];
                              return {
                                name: a,
                                value: t[e.truck[0].ids[n]].concat([o])
                              };
                            })
                          }
                        ]
                      },
                      {
                        title: {
                          text: "2020-2 长三角区域城市一体化指标统计图",
                          subtext: "浙江大学"
                        },
                        series: [
                          {
                            data: this.region[0].map(function(r, n) {
                              var a = "";
                              for (var i in r) a = i;
                              var o = r[a][2];
                              return {
                                name: a,
                                value: t[e.truck[0].ids[n]].concat([o])
                              };
                            })
                          }
                        ]
                      },
                      {
                        title: {
                          text: "2020-3 长三角区域城市一体化指标统计图",
                          subtext: "浙江大学"
                        },
                        series: [
                          {
                            data: this.region[0].map(function(r, n) {
                              var a = "";
                              for (var i in r) a = i;
                              var o = r[a][3];
                              return {
                                name: a,
                                value: t[e.truck[0].ids[n]].concat([o])
                              };
                            })
                          }
                        ]
                      },
                      {
                        title: {
                          text: "2020-4 长三角区域城市一体化指标统计图",
                          subtext: "浙江大学"
                        },
                        series: [
                          {
                            data: this.region[0].map(function(r, n) {
                              var a = "";
                              for (var i in r) a = i;
                              var o = r[a][4];
                              return {
                                name: a,
                                value: t[e.truck[0].ids[n]].concat([o])
                              };
                            })
                          }
                        ]
                      }
                    ]
                  });
                var i,
                  c = this.$echarts.init(document.getElementById("map"));
                c.setOption(this.option);
                var s = c._model;
                s.eachComponent("bmap", function(e) {
                  null == i && (i = e.__bmap);
                }),
                  console.log("BMAP", i.getZoom()),
                  console.log("center:", i.getCenter());
              }
            }
          )
        },
        p = u,
        y = (r("f22e"), r("2877")),
        d = Object(y["a"])(p, n, a, !1, null, "80ca48fe", null);
      t["default"] = d.exports;
    },
    "7f7f": function(e, t, r) {
      var n = r("86cc").f,
        a = Function.prototype,
        i = /^\s*function ([^ (]*)/,
        o = "name";
      o in a ||
        (r("9e1e") &&
          n(a, o, {
            configurable: !0,
            get: function() {
              try {
                return ("" + this).match(i)[1];
              } catch (e) {
                return "";
              }
            }
          }));
    },
    "85f2": function(e, t, r) {
      e.exports = r("454f");
    },
    "8e6e": function(e, t, r) {
      var n = r("5ca1"),
        a = r("990b"),
        i = r("6821"),
        o = r("11e9"),
        l = r("f1ae");
      n(n.S, "Object", {
        getOwnPropertyDescriptors: function(e) {
          var t,
            r,
            n = i(e),
            c = o.f,
            s = a(n),
            f = {},
            u = 0;
          while (s.length > u)
            (r = c(n, (t = s[u++]))), void 0 !== r && l(f, t, r);
          return f;
        }
      });
    },
    "990b": function(e, t, r) {
      var n = r("9093"),
        a = r("2621"),
        i = r("cb7c"),
        o = r("7726").Reflect;
      e.exports =
        (o && o.ownKeys) ||
        function(e) {
          var t = n.f(i(e)),
            r = a.f;
          return r ? t.concat(r(e)) : t;
        };
    },
    ac6a: function(e, t, r) {
      for (
        var n = r("cadf"),
          a = r("0d58"),
          i = r("2aba"),
          o = r("7726"),
          l = r("32e9"),
          c = r("84f2"),
          s = r("2b4c"),
          f = s("iterator"),
          u = s("toStringTag"),
          p = c.Array,
          y = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
          },
          d = a(y),
          m = 0;
        m < d.length;
        m++
      ) {
        var b,
          h = d[m],
          v = y[h],
          g = o[h],
          T = g && g.prototype;
        if (T && (T[f] || l(T, f, p), T[u] || l(T, u, h), (c[h] = p), v))
          for (b in n) T[b] || i(T, b, n[b], !0);
      }
    },
    bd86: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      });
      var n = r("85f2"),
        a = r.n(n);
      function i(e, t, r) {
        return (
          t in e
            ? a()(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
    },
    f1ae: function(e, t, r) {
      "use strict";
      var n = r("86cc"),
        a = r("4630");
      e.exports = function(e, t, r) {
        t in e ? n.f(e, t, a(0, r)) : (e[t] = r);
      };
    },
    f22e: function(e, t, r) {
      "use strict";
      var n = r("f951"),
        a = r.n(n);
      a.a;
    },
    f951: function(e, t, r) {}
  }
]);
//# sourceMappingURL=chunk-a0032646.083e88e5.js.map

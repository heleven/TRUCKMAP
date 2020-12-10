(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-c4ee6ee2"],
  {
    "2f11": function(e, t, n) {
      "use strict";
      var r = n("82da"),
        i = n.n(r);
      i.a;
    },
    3640: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { attrs: { id: "truck_map" } },
            [
              n("div", { attrs: { id: "map" } }),
              n(
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
                  n("span", [e._v("详细数据")]),
                  n(
                    "el-table",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { data: e.tableData, height: "95%", stripe: "" }
                    },
                    [
                      n("el-table-column", {
                        attrs: { prop: "name1", label: "城市1", width: "180" }
                      }),
                      n("el-table-column", {
                        attrs: { prop: "name2", label: "城市2", width: "180" }
                      }),
                      n("el-table-column", {
                        attrs: { prop: "no", label: "物流一体化指标" }
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
        i = [],
        a = (n("8e6e"), n("ac6a"), n("456d"), n("7f7f"), n("c5f6"), n("bd86")),
        o = (n("313e"), n("28c6")),
        l = n("3883"),
        s = n("2f62");
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function(t) {
                Object(a["a"])(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var p = {
          name: "MAP",
          data: function() {
            return {
              option: [],
              switch1: !0,
              legend_select: "2018",
              time: { 2018: 0, 2020.1: 1, 2020.2: 2, 2020.3: 3 },
              time_select: 0,
              drawer: !1,
              categoryData: [
                "上海",
                "南京",
                "无锡",
                "常州",
                "苏州",
                "南通",
                "盐城",
                "扬州",
                "镇江",
                "泰州",
                "杭州",
                "宁波",
                "嘉兴",
                "湖州",
                "绍兴",
                "金华",
                "舟山",
                "台州",
                "合肥",
                "芜湖",
                "蚌埠",
                "马鞍",
                "铜陵",
                "安庆",
                "滁州",
                "池州",
                "宣城"
              ],
              tableData: [{ name1: " ", name2: " ", no: 0 }]
            };
          },
          mounted: function() {
            this.getAllData(), this.options();
          },
          computed: Object(s["c"])({
            truck: function(e) {
              return e.Total_DataBase;
            },
            datas: function(e) {
              return e.indexMap;
            },
            region: function(e) {
              return e.rateData;
            },
            totalIndex: function(e) {
              return e.totalIndex;
            }
          }),
          methods: f(
            f({}, Object(s["b"])(["getAllData", "setData"])),
            {},
            {
              switchTo: function(e) {
                1 == e ? this.$router.push("/Map") : this.$router.push("/");
              },
              refreshData: function() {},
              options: function() {
                var e = this,
                  t = o,
                  n = [];
                for (var r in t) n.push({ name: r, coord: t[r] });
                var i = [],
                  a = [],
                  s = [],
                  c = [],
                  f = [
                    "九月第一周",
                    "九月第二周",
                    "九月第三周",
                    "九月第四周",
                    "十月第一周",
                    "十月第二周",
                    "十月第三周",
                    "十月第四周",
                    "十一月第一周",
                    "十一月第二周"
                  ],
                  p = [
                    "上海",
                    "南京",
                    "无锡",
                    "常州",
                    "苏州",
                    "南通",
                    "盐城",
                    "扬州",
                    "镇江",
                    "泰州",
                    "杭州",
                    "宁波",
                    "嘉兴",
                    "湖州",
                    "绍兴",
                    "金华",
                    "舟山",
                    "台州",
                    "合肥",
                    "芜湖",
                    "蚌埠",
                    "马鞍",
                    "铜陵",
                    "安庆",
                    "滁州",
                    "池州",
                    "宣城"
                  ],
                  u = 0;
                for (var m in p) {
                  var d = this.region[0][u][p[m]][0];
                  i.push(d), u % 2 == 0 ? i.push(-d) : i.push(d), (u += 1);
                }
                u = 0;
                for (var m in p) a.push(this.region[0][u][p[m]][1]), (u += 1);
                console.log("Region data 2020_01:", a);
                u = 0;
                for (var m in p) s.push(this.region[0][u][p[m]][2]), (u += 1);
                u = 0;
                for (var m in p) c.push(this.region[0][u][p[m]][3]), (u += 1);
                var y = [];
                y.push(
                  {
                    name: "2018",
                    type: "lines",
                    map: "china",
                    coordinateSystem: "bmap",
                    zlevel: 1,
                    data: this.datas[0],
                    effect: {
                      show: !0,
                      period: 4,
                      trailLength: 0.2,
                      color: "#fff",
                      symbolSize: [5, 8]
                    },
                    lineStyle: { normal: { curveness: 0.3 } }
                  },
                  {
                    type: "effectScatter",
                    coordinateSystem: "bmap",
                    name: "pos",
                    zlevel: 2,
                    rippleEffect: { brushType: "stroke" },
                    symbolSize: function(e) {
                      return (e[2] = Number(e[2])), 40;
                    },
                    showEffectOn: "render",
                    itemStyle: { normal: { color: "#a6c84c", opacity: 0.05 } },
                    data: this.truck[this.time_select].rows.map(function(n, r) {
                      var i = 0;
                      for (var a in n) i += Number(n[a]);
                      return {
                        name: e.truck[e.time_select].ids[r],
                        value: t[e.truck[e.time_select].ids[r]].concat([
                          String(i)
                        ]),
                        year: e.time_select
                      };
                    })
                  }
                ),
                  (this.option = {
                    baseOption: {
                      timeline: {
                        bottom: "5%",
                        axisType: "category",
                        autoPlay: !0,
                        playInterval: 5e3,
                        data: f
                      },
                      animation: !0,
                      animationDuration: 1e3,
                      animationEasing: "cubicInOut",
                      animationDurationUpdate: 1e3,
                      animationEasingUpdate: "cubicInOut",
                      graphic: [
                        {
                          type: "group",
                          bounding: "raw",
                          left: 60,
                          top: 450,
                          z: 100,
                          onclick: function(t, n, r, i) {
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
                          onclick: function(t, n, r, i) {
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
                                text: "城间一体化指标统计"
                              }
                            }
                          ]
                        }
                      ],
                      title: [
                        {
                          text: "长三角区域卡车数量统计图",
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
                        }
                      ],
                      bmap: {
                        center: [119.165995, 30.945765],
                        zoom: 9,
                        roam: !0,
                        mapStyle: l,
                        height: 100,
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
                            : "timeline" == e.componentType && "2018" == e.name
                            ? e.name.concat("月平均数据")
                            : e.name;
                        },
                        padding: [5, 10],
                        transitionDuration: 0.2
                      },
                      visualMap: [
                        {
                          pieces: [
                            { min: 1.5 },
                            { min: 1.2, max: 1.5 },
                            { min: 1, max: 1.2 },
                            { min: 0.95, max: 1 },
                            { min: 0.9, max: 0.95 },
                            { min: 0.85, max: 0.9 },
                            { min: 0.8, max: 0.85 },
                            { min: 0.75, max: 0.8 },
                            { min: 0.7, max: 0.75 },
                            { min: 0.65, max: 0.7 },
                            { min: 0.6, max: 0.65 },
                            { min: 0.5, max: 0.6 },
                            { max: 0.5 }
                          ],
                          top: "top",
                          left: "left",
                          precision: 2,
                          color: [
                            "#ED2616",
                            "#F73F04",
                            "#F9660A",
                            "#FBA408",
                            "#BDE335",
                            "#EEF364",
                            "#ACF186",
                            "#519DBA",
                            "#18D9DB",
                            "#51BAB5",
                            "#256284",
                            "#7E098F",
                            "#BA51B8",
                            "#84257A"
                          ],
                          textStyle: { color: "#000000", fontSize: "auto" },
                          seriesIndex: 0
                        }
                      ],
                      calculable: !0,
                      series: y
                    },
                    options: []
                  });
                for (var b = 0; b < f.length; b++) {
                  var h =
                    "2020" + f[b] + " 长三角区域城市间物流一体化指标统计图";
                  this.option.options.push({
                    title: { text: h, subtext: "浙江大学" },
                    series: [
                      { data: this.datas[b] },
                      {
                        data: this.truck[0].rows.map(function(n, r) {
                          var i = 0;
                          for (var a in n) i += Number(n[a]);
                          return {
                            name: e.truck[0].ids[r],
                            value: t[e.truck[0].ids[r]].concat([String(i)]),
                            year: b
                          };
                        })
                      }
                    ]
                  });
                }
                for (b = 0; b < f.length; b++)
                  this.option.options[b].series[0].data = this.datas[b];
                var g,
                  v = this.$echarts.init(document.getElementById("map"));
                v.setOption(this.option);
                var T = v._model;
                T.eachComponent("bmap", function(e) {
                  null == g && (g = e.__bmap);
                }),
                  console.log("BMAP", g.getZoom()),
                  console.log("center:", g.getCenter()),
                  v.on("click", { seriesName: "pos" }, function(t) {
                    e.setData([e.time_select, String(t.name)]);
                    for (var n = 0; n < f.length; n++)
                      e.option.options[n].series[0].data = e.datas[n];
                    (e.option.baseOption.bmap.center = [
                      g.getCenter().lng,
                      g.getCenter().lat
                    ]),
                      (e.option.baseOption.bmap.zoom = g.getZoom()),
                      v.setOption(e.option);
                  }),
                  v.on("contextmenu", { seriesName: "pos" }, function(t) {
                    e.drawer = !0;
                    var n = t.data.year;
                    for (var r in e.totalIndex.ids)
                      if (e.totalIndex.ids[r] == String(t.name)) break;
                    var i = e.totalIndex.ids[r],
                      a = e.totalIndex[e.totalIndex.weeks[n]][r],
                      o = [],
                      l = "",
                      s = 0;
                    for (var c in a)
                      Number(a[c]) &&
                        ((l = c),
                        (s = a[c]),
                        o.push({ name1: i, name2: l, no: s.toFixed(6) }));
                    (e.tableData = o),
                      (e.option.baseOption.timeline.autoPlay = !1),
                      (e.option.baseOption.bmap.center = [
                        g.getCenter().lng,
                        g.getCenter().lat
                      ]),
                      (e.option.baseOption.bmap.zoom = g.getZoom()),
                      v.setOption(e.option);
                  });
              }
            }
          )
        },
        u = p,
        m = (n("2f11"), n("2877")),
        d = Object(m["a"])(u, r, i, !1, null, "3d5b86fc", null);
      t["default"] = d.exports;
    },
    3883: function(e) {
      e.exports = JSON.parse(
        '{"styleJson":[{"featureType":"water","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"land","elementType":"all","stylers":{"color":"#f3f3f3"}},{"featureType":"railway","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"highway","elementType":"all","stylers":{"color":"#fdfdfd"}},{"featureType":"highway","elementType":"labels","stylers":{"visibility":"off"}},{"featureType":"arterial","elementType":"geometry","stylers":{"color":"#fefefe"}},{"featureType":"arterial","elementType":"geometry.fill","stylers":{"color":"#fefefe"}},{"featureType":"poi","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"green","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"subway","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"manmade","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"local","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"arterial","elementType":"labels","stylers":{"visibility":"off"}},{"featureType":"boundary","elementType":"all","stylers":{"color":"#fefefe"}},{"featureType":"building","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"label","elementType":"labels.text.fill","stylers":{"color":"#999999"}}]}'
      );
    },
    "454f": function(e, t, n) {
      n("46a7");
      var r = n("584a").Object;
      e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n);
      };
    },
    "456d": function(e, t, n) {
      var r = n("4bf8"),
        i = n("0d58");
      n("5eda")("keys", function() {
        return function(e) {
          return i(r(e));
        };
      });
    },
    "46a7": function(e, t, n) {
      var r = n("63b6");
      r(r.S + r.F * !n("8e60"), "Object", { defineProperty: n("d9f6").f });
    },
    "5eda": function(e, t, n) {
      var r = n("5ca1"),
        i = n("8378"),
        a = n("79e5");
      e.exports = function(e, t) {
        var n = (i.Object || {})[e] || Object[e],
          o = {};
        (o[e] = t(n)),
          r(
            r.S +
              r.F *
                a(function() {
                  n(1);
                }),
            "Object",
            o
          );
      };
    },
    "7f7f": function(e, t, n) {
      var r = n("86cc").f,
        i = Function.prototype,
        a = /^\s*function ([^ (]*)/,
        o = "name";
      o in i ||
        (n("9e1e") &&
          r(i, o, {
            configurable: !0,
            get: function() {
              try {
                return ("" + this).match(a)[1];
              } catch (e) {
                return "";
              }
            }
          }));
    },
    "82da": function(e, t, n) {},
    "85f2": function(e, t, n) {
      e.exports = n("454f");
    },
    "8e6e": function(e, t, n) {
      var r = n("5ca1"),
        i = n("990b"),
        a = n("6821"),
        o = n("11e9"),
        l = n("f1ae");
      r(r.S, "Object", {
        getOwnPropertyDescriptors: function(e) {
          var t,
            n,
            r = a(e),
            s = o.f,
            c = i(r),
            f = {},
            p = 0;
          while (c.length > p)
            (n = s(r, (t = c[p++]))), void 0 !== n && l(f, t, n);
          return f;
        }
      });
    },
    "990b": function(e, t, n) {
      var r = n("9093"),
        i = n("2621"),
        a = n("cb7c"),
        o = n("7726").Reflect;
      e.exports =
        (o && o.ownKeys) ||
        function(e) {
          var t = r.f(a(e)),
            n = i.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    ac6a: function(e, t, n) {
      for (
        var r = n("cadf"),
          i = n("0d58"),
          a = n("2aba"),
          o = n("7726"),
          l = n("32e9"),
          s = n("84f2"),
          c = n("2b4c"),
          f = c("iterator"),
          p = c("toStringTag"),
          u = s.Array,
          m = {
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
          d = i(m),
          y = 0;
        y < d.length;
        y++
      ) {
        var b,
          h = d[y],
          g = m[h],
          v = o[h],
          T = v && v.prototype;
        if (T && (T[f] || l(T, f, u), T[p] || l(T, p, h), (s[h] = u), g))
          for (b in r) T[b] || a(T, b, r[b], !0);
      }
    },
    bd86: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var r = n("85f2"),
        i = n.n(r);
      function a(e, t, n) {
        return (
          t in e
            ? i()(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
    },
    f1ae: function(e, t, n) {
      "use strict";
      var r = n("86cc"),
        i = n("4630");
      e.exports = function(e, t, n) {
        t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
      };
    }
  }
]);
//# sourceMappingURL=chunk-c4ee6ee2.75732640.js.map

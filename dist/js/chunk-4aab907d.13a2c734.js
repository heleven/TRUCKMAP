(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-4aab907d"],
  {
    3883: function(e) {
      e.exports = JSON.parse(
        '{"styleJson":[{"featureType":"water","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"land","elementType":"all","stylers":{"color":"#f3f3f3"}},{"featureType":"railway","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"highway","elementType":"all","stylers":{"color":"#fdfdfd"}},{"featureType":"highway","elementType":"labels","stylers":{"visibility":"off"}},{"featureType":"arterial","elementType":"geometry","stylers":{"color":"#fefefe"}},{"featureType":"arterial","elementType":"geometry.fill","stylers":{"color":"#fefefe"}},{"featureType":"poi","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"green","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"subway","elementType":"all","stylers":{"visibility":"off"}},{"featureType":"manmade","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"local","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"arterial","elementType":"labels","stylers":{"visibility":"off"}},{"featureType":"boundary","elementType":"all","stylers":{"color":"#fefefe"}},{"featureType":"building","elementType":"all","stylers":{"color":"#d1d1d1"}},{"featureType":"label","elementType":"labels.text.fill","stylers":{"color":"#999999"}}]}'
      );
    },
    "454f": function(e, t, a) {
      a("46a7");
      var n = a("584a").Object;
      e.exports = function(e, t, a) {
        return n.defineProperty(e, t, a);
      };
    },
    "456d": function(e, t, a) {
      var n = a("4bf8"),
        i = a("0d58");
      a("5eda")("keys", function() {
        return function(e) {
          return i(n(e));
        };
      });
    },
    "46a7": function(e, t, a) {
      var n = a("63b6");
      n(n.S + n.F * !a("8e60"), "Object", { defineProperty: a("d9f6").f });
    },
    "5eda": function(e, t, a) {
      var n = a("5ca1"),
        i = a("8378"),
        r = a("79e5");
      e.exports = function(e, t) {
        var a = (i.Object || {})[e] || Object[e],
          o = {};
        (o[e] = t(a)),
          n(
            n.S +
              n.F *
                r(function() {
                  a(1);
                }),
            "Object",
            o
          );
      };
    },
    "7f7f": function(e, t, a) {
      var n = a("86cc").f,
        i = Function.prototype,
        r = /^\s*function ([^ (]*)/,
        o = "name";
      o in i ||
        (a("9e1e") &&
          n(i, o, {
            configurable: !0,
            get: function() {
              try {
                return ("" + this).match(r)[1];
              } catch (e) {
                return "";
              }
            }
          }));
    },
    8425: function(e, t, a) {
      "use strict";
      var n = a("eabe"),
        i = a.n(n);
      i.a;
    },
    "85f2": function(e, t, a) {
      e.exports = a("454f");
    },
    "8e6e": function(e, t, a) {
      var n = a("5ca1"),
        i = a("990b"),
        r = a("6821"),
        o = a("11e9"),
        s = a("f1ae");
      n(n.S, "Object", {
        getOwnPropertyDescriptors: function(e) {
          var t,
            a,
            n = r(e),
            l = o.f,
            c = i(n),
            p = {},
            u = 0;
          while (c.length > u)
            (a = l(n, (t = c[u++]))), void 0 !== a && s(p, t, a);
          return p;
        }
      });
    },
    "990b": function(e, t, a) {
      var n = a("9093"),
        i = a("2621"),
        r = a("cb7c"),
        o = a("7726").Reflect;
      e.exports =
        (o && o.ownKeys) ||
        function(e) {
          var t = n.f(r(e)),
            a = i.f;
          return a ? t.concat(a(e)) : t;
        };
    },
    ac6a: function(e, t, a) {
      for (
        var n = a("cadf"),
          i = a("0d58"),
          r = a("2aba"),
          o = a("7726"),
          s = a("32e9"),
          l = a("84f2"),
          c = a("2b4c"),
          p = c("iterator"),
          u = c("toStringTag"),
          f = l.Array,
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
          x = v && v.prototype;
        if (x && (x[p] || s(x, p, f), x[u] || s(x, u, h), (l[h] = f), g))
          for (b in n) x[b] || r(x, b, n[b], !0);
      }
    },
    bd86: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return r;
      });
      var n = a("85f2"),
        i = a.n(n);
      function r(e, t, a) {
        return (
          t in e
            ? i()(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
    },
    eabe: function(e, t, a) {},
    eec7: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { attrs: { id: "truck_map" } },
            [
              a("div", { attrs: { id: "map" } }),
              a(
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
                  a("span", [e._v("详细数据")]),
                  a(
                    "el-table",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { data: e.tableData, height: "95%", stripe: "" }
                    },
                    [
                      a("el-table-column", {
                        attrs: { prop: "name1", label: "城市1", width: "180" }
                      }),
                      a("el-table-column", {
                        attrs: { prop: "name2", label: "城市2", width: "180" }
                      }),
                      a("el-table-column", {
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
        i = [],
        r = (a("8e6e"), a("ac6a"), a("456d"), a("7f7f"), a("c5f6"), a("bd86")),
        o = (a("313e"), a("28c6")),
        s = a("3883"),
        l = a("2f62");
      function c(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(a), !0).forEach(function(t) {
                Object(r["a"])(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : c(Object(a)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var u = {
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
          computed: Object(l["c"])({
            truck: function(e) {
              return e.Total_DataBase;
            },
            datas: function(e) {
              return e.mapData;
            },
            region: function(e) {
              return e.rateData;
            }
          }),
          methods: p(
            p({}, Object(l["b"])(["getAllData", "setData"])),
            {},
            {
              switchTo: function(e) {
                1 == e ? this.$router.push("/") : this.$router.push("/BiIndex");
              },
              options: function() {
                var e = this,
                  t = o,
                  a = [];
                for (var n in t) a.push({ name: n, coord: t[n] });
                var i = [],
                  r = [],
                  l = [],
                  c = [],
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
                for (var f in p) {
                  var m = this.region[0][u][p[f]][0];
                  i.push(m), u % 2 == 0 ? i.push(-m) : i.push(m), (u += 1);
                }
                u = 0;
                for (var f in p) r.push(this.region[0][u][p[f]][1]), (u += 1);
                console.log("Region data 2020_01:", r);
                u = 0;
                for (var f in p) l.push(this.region[0][u][p[f]][2]), (u += 1);
                u = 0;
                for (var f in p) c.push(this.region[0][u][p[f]][3]), (u += 1);
                var d = [];
                d.push(
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
                      return (
                        (e[2] = Number(e[2])),
                        e[2] >= 1e4
                          ? e[2] / 5e3 + 20
                          : e[2] >= 500
                          ? e[2] / 5e3 + 15
                          : e[2] >= 100
                          ? e[2] / 5e3 + 10
                          : e[2] >= 10
                          ? 10
                          : 5
                      );
                    },
                    showEffectOn: "render",
                    itemStyle: { normal: { color: "#a6c84c", opacity: 0.05 } },
                    data: this.truck[this.time_select].rows.map(function(a, n) {
                      var i = 0;
                      for (var r in a) i += Number(a[r]);
                      return {
                        name: e.truck[e.time_select].ids[n],
                        value: t[e.truck[e.time_select].ids[n]].concat([
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
                        data: ["2018", "2020-01", "2020-02", "2020-03"]
                      },
                      animation: !0,
                      animationDuration: 1e3,
                      animationEasing: "cubicInOut",
                      animationDurationUpdate: 1e3,
                      animationEasingUpdate: "cubicInOut",
                      grid: {
                        right: "1%",
                        top: "15%",
                        bottom: "200px",
                        width: "130px"
                      },
                      xAxis: {
                        type: "value",
                        scale: !0,
                        splitNumber: 3,
                        position: "top",
                        boundaryGap: !1,
                        splitLine: { show: !1 },
                        axisLine: { show: !1 },
                        axisTick: { show: !1 },
                        axisLabel: { margin: 10, textStyle: { color: "#aaa" } }
                      },
                      yAxis: {
                        type: "category",
                        nameGap: 16,
                        axisLine: { show: !0, lineStyle: { color: "#000" } },
                        axisTick: { show: !1, lineStyle: { color: "#000" } },
                        axisLabel: {
                          interval: 0,
                          textStyle: { color: "#000" }
                        },
                        data: this.categoryData
                      },
                      graphic: [
                        {
                          type: "group",
                          bounding: "raw",
                          left: 60,
                          top: 450,
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
                          onclick: function(t, a, n, i) {
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
                          onclick: function(t, a, n, i) {
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
                        },
                        {
                          id: "statistic",
                          text: "环比增长统计表",
                          right: "10px",
                          top: "8%",
                          textStyle: { color: "#000000", fontSize: 20 }
                        }
                      ],
                      bmap: {
                        center: [119.165995, 30.945765],
                        zoom: 9,
                        roam: !0,
                        mapStyle: s,
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
                            : "timeline" == e.componentType
                            ? "2018" == e.name
                              ? e.name.concat("月平均数据")
                              : e.name
                            : e.name.concat(":" + e.value[2]);
                        },
                        padding: [5, 10],
                        transitionDuration: 0.2
                      },
                      visualMap: [
                        {
                          min: 0,
                          max: 25e4,
                          splitNumber: 5,
                          left: "right",
                          color: ["#d94e5d", "#eac736", "#50a3ba"],
                          textStyle: { color: "#000000", fontSize: "auto" },
                          seriesIndex: 1
                        },
                        {
                          pieces: [
                            { min: 2e4 },
                            { min: 15e3, max: 2e4 },
                            { min: 1e4, max: 15e3 },
                            { min: 5e3, max: 1e4 },
                            { min: 5e3, max: 8e3 },
                            { min: 3e3, max: 5e3 },
                            { min: 2e3, max: 3e3 },
                            { min: 1e3, max: 2e3 },
                            { min: 600, max: 1e3 },
                            { min: 400, max: 600 },
                            { min: 200, max: 400 },
                            { min: 100, max: 200 },
                            { max: 50 }
                          ],
                          top: "top",
                          left: "left",
                          color: [
                            "#9900FF",
                            "#FF0000",
                            "#FF3333",
                            "#990033",
                            "#CC3366",
                            "#990066",
                            "#993366",
                            "#999966",
                            "#CC9933",
                            "#9999FF",
                            "#339933",
                            "#33FF00",
                            "#CCCC66",
                            "#FFFF99"
                          ],
                          textStyle: { color: "#000000", fontSize: "auto" },
                          seriesIndex: 0
                        }
                      ],
                      calculable: !0,
                      series: d
                    },
                    options: [
                      {
                        title: {
                          text: "2018 长三角区域卡车数量统计图",
                          subtext: "浙江大学"
                        },
                        series: [
                          { data: this.datas[0] },
                          {
                            data: this.truck[0].rows.map(function(a, n) {
                              var i = 0;
                              for (var r in a) i += Number(a[r]);
                              return {
                                name: e.truck[0].ids[n],
                                value: t[e.truck[0].ids[n]].concat([String(i)]),
                                year: 0
                              };
                            })
                          },
                          {
                            min: -1,
                            max: 1,
                            zlevel: 1.5,
                            type: "bar",
                            symbol: "none",
                            itemStyle: { normal: { color: "#9999FF" } },
                            data: i
                          }
                        ]
                      },
                      {
                        title: {
                          text: "2020-1 长三角区域卡车数量统计图",
                          subtext: "浙江大学"
                        },
                        series: [
                          { data: this.datas[1] },
                          {
                            data: this.truck[1].rows.map(function(a, n) {
                              var i = 0;
                              for (var r in a) i += Number(a[r]);
                              return {
                                name: e.truck[1].ids[n],
                                value: t[e.truck[1].ids[n]].concat([String(i)]),
                                year: 1
                              };
                            })
                          },
                          {
                            min: -1,
                            max: 1,
                            zlevel: 1.5,
                            type: "bar",
                            symbol: "none",
                            itemStyle: { normal: { color: "#9999FF" } },
                            data: r
                          }
                        ]
                      },
                      {
                        title: {
                          text: "2020-2 长三角区域卡车数量统计图",
                          subtext: "浙江大学"
                        },
                        series: [
                          { data: this.datas[2] },
                          {
                            data: this.truck[2].rows.map(function(a, n) {
                              var i = 0;
                              for (var r in a) i += Number(a[r]);
                              return {
                                name: e.truck[2].ids[n],
                                value: t[e.truck[2].ids[n]].concat([String(i)]),
                                year: 2
                              };
                            })
                          },
                          {
                            zlevel: 1.5,
                            type: "bar",
                            symbol: "none",
                            itemStyle: { normal: { color: "#9999FF" } },
                            data: l
                          }
                        ]
                      },
                      {
                        title: {
                          text: "2020-3 长三角区域卡车数量统计图",
                          subtext: "浙江大学"
                        },
                        series: [
                          { data: this.datas[3] },
                          {
                            data: this.truck[3].rows.map(function(a, n) {
                              var i = 0;
                              for (var r in a) i += Number(a[r]);
                              return {
                                name: e.truck[3].ids[n],
                                value: t[e.truck[3].ids[n]].concat([String(i)]),
                                year: 3
                              };
                            })
                          },
                          {
                            zlevel: 1.5,
                            type: "bar",
                            symbol: "none",
                            itemStyle: { normal: { color: "#9999FF" } },
                            data: c
                          }
                        ]
                      }
                    ]
                  }),
                  (this.option.options[0].series[0].data = this.datas[0]),
                  (this.option.options[1].series[0].data = this.datas[1]),
                  (this.option.options[2].series[0].data = this.datas[2]),
                  (this.option.options[3].series[0].data = this.datas[3]);
                var y,
                  b = this.$echarts.init(document.getElementById("map"));
                b.setOption(this.option);
                var h = b._model;
                h.eachComponent("bmap", function(e) {
                  null == y && (y = e.__bmap);
                }),
                  console.log("BMAP", y.getZoom()),
                  console.log("center:", y.getCenter()),
                  b.on("click", { seriesName: "pos" }, function(t) {
                    e.setData([e.time_select, String(t.name)]),
                      (e.option.options[0].series[0].data = e.datas[0]),
                      (e.option.options[1].series[0].data = e.datas[1]),
                      (e.option.options[2].series[0].data = e.datas[2]),
                      (e.option.options[3].series[0].data = e.datas[3]),
                      (e.option.baseOption.bmap.center = [
                        y.getCenter().lng,
                        y.getCenter().lat
                      ]),
                      (e.option.baseOption.bmap.zoom = y.getZoom()),
                      b.setOption(e.option);
                  }),
                  b.on("contextmenu", { seriesName: "pos" }, function(t) {
                    console.log("name", t.data.year), (e.drawer = !0);
                    var a = t.data.year;
                    for (var n in e.truck[a].ids)
                      if (e.truck[a].ids[n] == String(t.name)) break;
                    var i = e.truck[a].ids[n],
                      r = e.truck[a].rows[n],
                      o = [],
                      s = "",
                      l = 0;
                    for (var c in r)
                      Number(r[c]) &&
                        ((s = c),
                        (l = r[c]),
                        o.push({ name1: i, name2: s, no: l }));
                    console.log("temp: ", o),
                      (e.tableData = o),
                      (e.option.baseOption.timeline.autoPlay = !1),
                      (e.option.baseOption.bmap.center = [
                        y.getCenter().lng,
                        y.getCenter().lat
                      ]),
                      (e.option.baseOption.bmap.zoom = y.getZoom()),
                      b.setOption(e.option);
                  });
              }
            }
          )
        },
        f = u,
        m = (a("8425"), a("2877")),
        d = Object(m["a"])(f, n, i, !1, null, "7cb9e505", null);
      t["default"] = d.exports;
    },
    f1ae: function(e, t, a) {
      "use strict";
      var n = a("86cc"),
        i = a("4630");
      e.exports = function(e, t, a) {
        t in e ? n.f(e, t, i(0, a)) : (e[t] = a);
      };
    }
  }
]);
//# sourceMappingURL=chunk-4aab907d.13a2c734.js.map

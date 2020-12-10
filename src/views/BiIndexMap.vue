<template>
  <div id="truck_map">
    <div id="map"></div>
    <!-- <el-switch
      v-model="switch1"
      active-text="按月付费"
      inactive-text="按年付费"
    >
    </el-switch> -->
    <el-drawer title="详细数据" :visible.sync="drawer" :with-header="false">
      <span>详细数据</span>
      <el-table :data="tableData" height="95%" stripe style="width: 100%">
        <el-table-column prop="name1" label="城市1" width="180">
        </el-table-column>
        <el-table-column prop="name2" label="城市2" width="180">
        </el-table-column>
        <el-table-column prop="no" label="物流一体化指标"> </el-table-column>
      </el-table>
    </el-drawer>
  </div>
</template>

<script>
import echarts from "echarts";
import geoCoordData from "../data/geoCoordData.json";
// 引入地图样式
import MapStyle from "../data/MapStyle.json";
// vuex管理数据

import { mapState, mapActions } from "vuex";
export default {
  name: "MAP",
  data() {
    return {
      option: [],
      switch1: true,
      legend_select: "2018",
      time: { "2018": 0, "2020.1": 1, "2020.2": 2, "2020.3": 3 },
      time_select: 0,
      drawer: false,
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
      tableData: [
        {
          name1: " ",
          name2: " ",
          no: 0
        }
      ]
    };
  },
  mounted() {
    this.getAllData();
    this.options();
  },
  computed: mapState({
    // // 箭头函数可使代码更简练
    // count: state => state.count,

    // // 传字符串参数 'count' 等同于 `state => state.count`
    // countAlias: 'count',

    // // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
    truck: state => state.Total_DataBase,
    // datas作为需要的双边指数数据
    datas: state => state.indexMap,
    region: state => state.rateData,
    totalIndex: state => state.totalIndex
  }),
  methods: {
    ...mapActions(["getAllData", "setData"]),
    //router
    switchTo(selection) {
      if (selection == 1) {
        this.$router.push("/Map");
      } else {
        this.$router.push("/");
      }
    },
    refreshData() {},
    options() {
      let geoCoorddata = geoCoordData;
      let citys = [];
      for (let prop in geoCoorddata) {
        citys.push({ name: prop, coord: geoCoorddata[prop] });
      }
      var region_list_2018 = [];
      let region_list_20201 = [];
      let region_list_20202 = [];
      let region_list_20203 = [];
      let date = [
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
        // {
        //   value: "2005-01-01",
        //   tooltip: {
        //     formatter: "{b} GDP达到一个高度"
        //   },
        //   symbol: "diamond",
        //   symbolSize: 16
        // },
      ];
      let region_index = [
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
      ];

      var i = 0;
      for (var index in region_index) {
        var sum = this.region[0][i][region_index[index]][0];
        region_list_2018.push(sum);
        if (i % 2 == 0) {
          region_list_2018.push(-sum);
        } else {
          region_list_2018.push(sum);
        }
        i = i + 1;
      }

      //console.log("Region data:",region_list_2018)

      var i = 0;
      for (var index in region_index) {
        region_list_20201.push(this.region[0][i][region_index[index]][1]);
        i = i + 1;
      }

      console.log("Region data 2020_01:", region_list_20201);

      var i = 0;
      for (var index in region_index) {
        region_list_20202.push(this.region[0][i][region_index[index]][2]);
        i = i + 1;
      }

      var i = 0;
      for (var index in region_index) {
        region_list_20203.push(this.region[0][i][region_index[index]][3]);
        i = i + 1;
      }

      let series = []; //在地图上显示的数据
      series.push(
        {
          //////////////////////////////////////////////////////////////////////LINES//////////////////////////////////////////////////////
          name: "2018",
          type: "lines",
          map: "china",
          coordinateSystem: "bmap",
          //所有图形的 zlevel 值。zlevel用于 Canvas 分层，
          // 不同zlevel值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的zlevel。
          // 需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面。
          zlevel: 1,
          // 线数据集。  从哪个城市to哪个城市
          data: this.datas[0],

          //线上面的动态特效
          effect: {
            show: true, //是否显示特效。
            period: 4, //特效动画的时间，单位为 s。
            trailLength: 0.2, //特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
            color: "#fff", //射线颜色
            symbolSize: [5, 8] //特效标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示高和宽，例如 [20, 10] 表示标记宽为20，高为10。
          },
          lineStyle: {
            //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式。
            normal: {
              curveness: 0.3 //边的曲度，支持从 0 到 1 的值，值越大曲度越大。
            }
          }
        },

        //////////////////////////////////////////////////////////////////////LINES//////////////////////////////////////////////////////
        {
          type: "effectScatter",
          coordinateSystem: "bmap",
          name: "pos",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke" //波纹的绘制方式，还有一种就是“fill(默认)”
          },
          // symbolSize:标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
          //散点的尺寸，当数据加载完成之后执行回调，通过返回值来设置大小
          symbolSize: val => {
            val[2] = Number(val[2]);
            return 40;
          },
          showEffectOn: "render", //配置何时显示特效。'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
          //图形样式。
          itemStyle: {
            normal: {
              color: "#a6c84c", //图形的颜色
              opacity: 0.05 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
            }
          },
          data: this.truck[this.time_select].rows.map((dataItem, index) => {
            //console.log("bug", geoCoorddata[dataItem[1].name].concat([dataItem[1].value]))
            //console.log("time_select:", this.time_select);
            var sum = 0;
            for (var val in dataItem) {
              sum += Number(dataItem[val]);
            }
            //console.log("sum: ", sum);
            return {
              name: this.truck[this.time_select].ids[index],
              //dataItem[1].name.concat(":" + [dataItem[1].value]),
              value: geoCoorddata[
                this.truck[this.time_select].ids[index]
              ].concat([String(sum)]),
              year: this.time_select
            };
          })
        }
      );
      this.option = {
        //timeline
        baseOption: {
          timeline: {
            bottom: "5%",
            axisType: "category",
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 5000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: date
            // [
            //   "九月第一周",
            //   "九月第二周",
            //   "九月第三周",
            //   "九月第四周",
            //   "十月第一周",
            //   "十月第二周",
            //   "十月第三周",
            //   "十月第四周",
            //   "十一月第一周",
            //   "十一月第二周"
            //   // {
            //   //   value: "2005-01-01",
            //   //   tooltip: {
            //   //     formatter: "{b} GDP达到一个高度"
            //   //   },
            //   //   symbol: "diamond",
            //   //   symbolSize: 16
            //   // },
            // ]
          },
          animation: true,
          animationDuration: 1000,
          animationEasing: "cubicInOut",
          animationDurationUpdate: 1000,
          animationEasingUpdate: "cubicInOut",
          //切换开关
          graphic: [
            {
              type: "group",
              bounding: "raw",
              left: 60,
              top: 450,
              z: 100,
              onclick: (e, a, b, c) => {
                console.log("debug");
                this.switchTo(1);
              },
              children: [
                {
                  type: "rect",
                  left: "center",
                  top: "center",
                  z: 100,
                  shape: {
                    width: 114,
                    height: 32,
                    r: 3
                  },
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
              onclick: (e, a, b, c) => {
                console.log("debug");
                this.switchTo(2);
              },
              children: [
                {
                  type: "rect",
                  left: "center",
                  top: "center",
                  z: 100,
                  shape: {
                    width: 114,
                    height: 32,
                    r: 3
                  },
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
                  shape: {
                    width: 114,
                    height: 32,
                    r: 3
                  },
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
          //设置标题文本
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
              subtextStyle: {
                fontSize: 20
              },
              //textAlign: "right",
              z: 200
            }
          ],
          bmap: {
            center: [119.165995, 30.945765],
            zoom: 9,
            roam: true,
            mapStyle: MapStyle,
            height: 100,
            left: "6%",
            top: 40,
            bottom: "54%",
            right: "14%"
          },

          tooltip: {
            show: true, //是否显示提示框组件，包括提示框浮层和 axisPointer。
            trigger: "item", //触发类型。
            //formatter: '{b}:{@name}', //提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
            formatter: params => {
              //console.log("value", params.data);
              if (typeof params.data.toname != "undefined") {
                return params.name.concat(
                  "->" + params.data.toname + ": " + params.value
                );
              } else if (params.componentType == "timeline") {
                if (params.name == "2018") {
                  return params.name.concat("月平均数据");
                } else {
                  return params.name;
                }
              } else {
                return params.name;
              }
            },
            padding: [5, 10],
            transitionDuration: 0.2
          },
          visualMap: [
            // {
            //   min: 0,
            //   max: 250000,
            //   splitNumber: 5,
            //   //top: "middle",
            //   left: "right",
            //   color: ["#d94e5d", "#eac736", "#50a3ba"],
            //   textStyle: {
            //     //color: "#d94e5d"
            //     color: "#000000",
            //     fontSize: "auto"
            //   },
            //   seriesIndex: 1
            // },
            {
              pieces: [
                { min: 1.5 }, // 不指定 max，表示 max 为无限大（Infinity）。
                { min: 1.2, max: 1.5 },
                { min: 1.0, max: 1.2},
                { min: 0.95, max: 1.0 },
                { min: 0.9, max: 0.95 },
                { min: 0.85, max: 0.9 },
                { min: 0.8, max: 0.85 },
                { min: 0.75, max: 0.8 },
                { min: 0.7, max: 0.75 },
                { min: 0.65, max: 0.7 },
                { min: 0.6, max: 0.65 },
                { min: 0.5, max: 0.6 },

                { max: 0.5 } // 不指定 min，表示 min 为无限大（-Infinity）。
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
              textStyle: {
                //color: "#d94e5d"
                color: "#000000",
                fontSize: "auto"
              },
              seriesIndex: 0
            }
          ],

          // legend: {
          //   orient: "vertical",
          //   top: "middle",
          //   left: "right",
          //   data: ["2018"],
          //   textStyle: {
          //     color: "#000000",
          //     fontSize: "auto"
          //   },
          //   selectedMode: "single"
          // },
          calculable: true,
          series: series
        },
        options: []
      };
      // 利用循环语句设定各个星期的地图信息
      for (var n = 0; n < date.length; n++) {
        var title_name = "2020" + date[n] + " 长三角区域城市间物流一体化指标统计图";
        this.option.options.push({
          title: {
            text: title_name,
            subtext: "浙江大学"
          },
          series: [
            // 记录每周对应的数据
            { data: this.datas[n] },
            {
              data: this.truck[0].rows.map((dataItem, index) => {
                var sum = 0;
                for (var val in dataItem) {
                  sum += Number(dataItem[val]);
                }
                // console.log("sum: ", sum);
                return {
                  name: this.truck[0].ids[index],
                  //dataItem[1].name.concat(":" + [dataItem[1].value]),
                  value: geoCoorddata[this.truck[0].ids[index]].concat([
                    String(sum)
                  ]),
                  year: n
                };
              })
            }
          ]
        });
      }
      for (var n = 0; n < date.length; n++) {
        this.option.options[n].series[0].data = this.datas[n];
      }
      // this.option.options[0].series[0].data = this.datas[0];
      // this.option.options[1].series[0].data = this.datas[1];
      // this.option.options[2].series[0].data = this.datas[2];
      // this.option.options[3].series[0].data = this.datas[3];
      let myChart = this.$echarts.init(document.getElementById("map"));

      myChart.setOption(this.option);
      var bdMap;
      var ecModel = myChart._model;
      ecModel.eachComponent("bmap", function(bmapModel) {
        if (bdMap == null) {
          bdMap = bmapModel.__bmap; //由echart实例获取百度地图的实例
        }
      });
      // bdMap.disableDoubleClickZoom();
      console.log("BMAP", bdMap.getZoom());
      console.log("center:", bdMap.getCenter());
      //console.log("Region data:",this.region[0][0]['上海'][0]

      //获取地图实例 配置地图

      //添加鼠标点击动作
      myChart.on("click", { seriesName: "pos" }, params => {
        //console.log("name", params.name);
        //调用action过滤数据
        this.setData([this.time_select, String(params.name)]);
        for (var n = 0; n < date.length; n++) {
          this.option.options[n].series[0].data = this.datas[n];
        }
        // this.option.options[0].series[0].data = this.datas[0];
        // this.option.options[1].series[0].data = this.datas[1];
        // this.option.options[2].series[0].data = this.datas[2];
        // this.option.options[3].series[0].data = this.datas[3];
        //this.option.series[this.time_select].data = this.datas;

        this.option.baseOption.bmap.center = [
          bdMap.getCenter().lng,
          bdMap.getCenter().lat
        ];
        this.option.baseOption.bmap.zoom = bdMap.getZoom();
        myChart.setOption(this.option);
      });

      //鼠标右键回调
      myChart.on("contextmenu", { seriesName: "pos" }, params => {
        this.drawer = true;
        //获取城市id
        let time_select = params.data.year;
        for (var i in this.totalIndex.ids) {
          //******************************** */
          if (this.totalIndex.ids[i] == String(params.name)) {
            //****************************** */
            break;
          }
        }
        //取出相关数据
        var start = this.totalIndex.ids[i]; //****************************** */
        //let row = state.dataBase.rows[i];
        let row = this.totalIndex[this.totalIndex.weeks[time_select]][i]; //****************************** */
        var temp = [];
        var dest = "";
        var value = 0;
        for (var cname in row) {
          if (Number(row[cname])) {
            dest = cname;
            value = row[cname];
            temp.push({
              name1: start,
              name2: dest,
              no: value.toFixed(6)
            });
          }
        }
        this.tableData = temp;

        // 调用百度地图api，记录当前地图信息
        // 关闭自动播放
        this.option.baseOption.timeline.autoPlay = false;
        this.option.baseOption.bmap.center = [
          bdMap.getCenter().lng,
          bdMap.getCenter().lat
        ];
        this.option.baseOption.bmap.zoom = bdMap.getZoom();
        myChart.setOption(this.option);
      });
    }
  }
};
</script>

<style lang="less" scoped>
#map {
  width: 100%;
  height: 100vh;
  .ec-extension-bmap {
    height: 50%;
  }
}
</style>

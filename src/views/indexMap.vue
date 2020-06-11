<template>
  <div id="truck_map">
    <div id="map"></div>
    <el-drawer title="详细数据" :visible.sync="drawer" :with-header="false">
      <span>详细数据</span>
      <el-table :data="tableData" height="60%" stripe style="width: 100%">
        <el-table-column prop="name1" label="城市1" width="180">
        </el-table-column>
        <el-table-column prop="name2" label="城市2" width="180">
        </el-table-column>
        <el-table-column prop="no" label="车辆数"> </el-table-column>
      </el-table>
    </el-drawer>
  </div>
</template>

<script>
import echarts from "echarts";
// 引入每个地址的坐标
import geoCoordData from "../data/geoCoordData.json";
//import truck from "../data/truck.json";
// 引入地图样式
import MapStyle from "../data/MapStyle.json";
// vuex管理数据

import { mapState, mapActions } from "vuex";
export default {
  name: "IndexMAP",
  data() {
    return {
      option: [],
      legend_select: "2018",
      time: { "2018": 0, "2020.1": 1, "2020.2": 2, "2020.3": 3 },
      time_select: 0,
      drawer: false,
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
    region: state => state.regionData,
    datas: state => state.mapData
  }),
  methods: {
    ...mapActions(["getAllData", "setData"]),
    options() {
      let geoCoorddata = geoCoordData;
      let citys = [];
      for (let prop in geoCoorddata) {
        citys.push({ name: prop, coord: geoCoorddata[prop] });
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
            console.log("val_2:",val[2]);
            if (val[2] >= 1.6) {
              return 20;
            } else if (val[2] >= 1.4) {
              return val[2] / 16;
            } else if (val[2] >= 1.2) {
              return val[2] / 14;
            } else if (val[2] >= 1.0) {
              return 10;
            } else {
              return 5;
            }
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
            console.log("time_select:", this.region[0][0]["上海"][0]);
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
            data: [
              "2018",
              "2020-01",
              "2020-02",
              "2020-03"
              // {
              //   value: "2005-01-01",
              //   tooltip: {
              //     formatter: "{b} GDP达到一个高度"
              //   },
              //   symbol: "diamond",
              //   symbolSize: 16
              // },
            ]
          },
          //设置标题文本
          title: {
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
          },
          bmap: {
            center: [118.765995, 30.945765],
            zoom: 9,
            roam: true,
            mapStyle: MapStyle,
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
              //console.log("value",params.data);
              if (typeof params.data.toname != "undefined") {
                return params.name.concat(
                  "->" + params.data.toname + ": " + params.value
                );
              } else {
                return params.name.concat(":" + params.value[2]);
              }
            },
            padding: [5, 10],
            transitionDuration: 0.2
          },
          // brush: {
          //   geoIndex: "all",
          //   brushLink: "all",
          //   inBrush: {
          //     opacity: 1,
          //     symbolSize: 14
          //   },
          //   outOfBrush: {
          //     color: "#000",
          //     opacity: 0.2
          //   },
          //   z: 10
          // },
          visualMap: {
            min: 0,
            max: 2500000,
            splitNumber: 5,
            //top: "middle",
            left: "right",
            color: ["#d94e5d", "#eac736", "#50a3ba"],
            textStyle: {
              //color: "#d94e5d"
              color: "#000000",
              fontSize: "auto"
            },
            seriesIndex: 1
          },

          // legend: {
          //   orient: "vertical",
          //   top: "bottom",
          //   left: "right",
          //   data: ["2018", "2020.1", "2020.2", "2020.3"],
          //   textStyle: {
          //     color: "#000000",
          //     fontSize: "auto"
          //   },
          //   selectedMode: "single"
          // },
          calculable: true,
          grid: {
            top: 80,
            bottom: 100
          },
          series: series
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
                // data: this.truck[0].rows.map((dataItem, index) => {
                //   // var sum = 0;
                //   // for (var val in dataItem) {
                //   //   sum += Number(dataItem[val]);
                //   // }
                //   var sum = 0;
                //   sum = this.region[0][0]["上海"][0];
                //   console.log("sum_2018: ", sum);
                //   return {
                //     name: this.truck[0].ids[index],
                //     //dataItem[1].name.concat(":" + [dataItem[1].value]),
                //     value: geoCoorddata[this.truck[0].ids[index]].concat([
                //       String(sum)
                //     ]),
                //     year: 0
                //   };
                // })

                data: this.region[0].map((dataItem,index) => {
                  return {
                    name: this.region[0][index][0],
                    value: geoCoorddata[this.truck[0].ids[index]].concat([
                       this.region[0][index][0]])

                  }
              
                })
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
                // data: this.truck[1].rows.map((dataItem, index) => {
                //   var sum = 0;
                //   for (var val in dataItem) {
                //     sum += Number(dataItem[val]);
                //   }
                //   //console.log("sum: ", sum);
                //   return {
                //     name: this.truck[1].ids[index],
                //     //dataItem[1].name.concat(":" + [dataItem[1].value]),
                //     value: geoCoorddata[this.truck[1].ids[index]].concat([
                //       String(sum)
                //     ]),
                //     year: 1
                //   };
                // })

                data: this.region[0].map((dataItem,index) => {
                  return {
                    name: this.region[0][index][1],
                    value: geoCoorddata[this.truck[0].ids[index]].concat([
                       this.region[0][index][1]])

                  }
                })


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
                // data: this.truck[2].rows.map((dataItem, index) => {
                //   var sum = 0;
                //   for (var val in dataItem) {
                //     sum += Number(dataItem[val]);
                //   }
                //   //console.log("sum: ", sum);
                //   return {
                //     name: this.truck[2].ids[index],
                //     //dataItem[1].name.concat(":" + [dataItem[1].value]),
                //     value: geoCoorddata[this.truck[2].ids[index]].concat([
                //       String(sum)
                //     ]),
                //     year: 2
                //   };
                // })
                data: this.region[0].map((dataItem,index) => {
                  return {
                    name: this.region[0][index][2],
                    value: geoCoorddata[this.truck[0].ids[index]].concat([
                       this.region[0][index][2]])

                  }
                })

                
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
                // data: this.truck[3].rows.map((dataItem, index) => {
                //   var sum = 0;
                //   for (var val in dataItem) {
                //     sum += Number(dataItem[val]);
                //   }
                //   //console.log("sum: ", sum);
                //   return {
                //     name: this.truck[3].ids[index],
                //     //dataItem[1].name.concat(":" + [dataItem[1].value]),
                //     value: geoCoorddata[this.truck[3].ids[index]].concat([
                //       String(sum)
                //     ]),
                //     year: 3
                //   };
                // })

                data: this.region[0].map((dataItem,index) => {
                  return {
                    name: this.region[0][index][3],
                    value: geoCoorddata[this.truck[0].ids[index]].concat([
                       this.region[0][index][3]])

                  }
                })
              }
            ]
          }
        ]
      };

      this.option.options[0].series[0].data = this.datas[0];
      this.option.options[1].series[0].data = this.datas[1];
      this.option.options[2].series[0].data = this.datas[2];
      this.option.options[3].series[0].data = this.datas[3];
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

      //获取地图实例 配置地图

      //添加鼠标点击动作
      // myChart.on("click", { seriesName: "pos" }, params => {
      //   console.log("name", params.name);
      //   //调用action过滤数据
      //   this.setData([this.time_select, String(params.name)]);
      //   this.option.options[0].series[0].data = this.datas[0];
      //   this.option.options[1].series[0].data = this.datas[1];
      //   this.option.options[2].series[0].data = this.datas[2];
      //   this.option.options[3].series[0].data = this.datas[3];
      //   //this.option.series[this.time_select].data = this.datas;

      //   this.option.baseOption.bmap.center = [
      //     bdMap.getCenter().lng,
      //     bdMap.getCenter().lat
      //   ];
      //   this.option.baseOption.bmap.zoom = bdMap.getZoom();
      //   myChart.setOption(this.option);
      // });

      // //切换时间
      // myChart.on("legendselectchanged", params => {
      //   this.legend_select = params.name;
      //   // console.log("time_select:",this.time);
      //   this.time_select = this.time[this.legend_select];
      //   this.option.baseOption.series[0].data = this.truck[
      //     this.time_select
      //   ].rows.map((dataItem, index) => {
      //     //console.log("bug", geoCoorddata[dataItem[1].name].concat([dataItem[1].value]))
      //     console.log("time_select:", this.time_select);
      //     var sum = 0;
      //     for (var val in dataItem) {
      //       sum += Number(dataItem[val]);
      //     }
      //     console.log("sum: ", sum);
      //     return {
      //       name: this.truck[this.time_select].ids[index],
      //       //dataItem[1].name.concat(":" + [dataItem[1].value]),
      //       value: geoCoorddata[this.truck[this.time_select].ids[index]].concat(
      //         [String(sum)]
      //       )
      //     };
      //   });
      //   this.option.baseOption.bmap.center = [
      //     bdMap.getCenter().lng,
      //     bdMap.getCenter().lat
      //   ];
      //   this.option.baseOption.bmap.zoom = bdMap.getZoom();
      //   myChart.setOption(this.option);
      // });

      //鼠标右键回调
      myChart.on("contextmenu", { seriesName: "pos" }, params => {
        console.log("name", params.data.year);
        this.drawer = true;
        //获取城市id
        var id = 0;
        let time_select = params.data.year;
        for (var i in this.truck[time_select].ids) {
          //******************************** */
          if (this.truck[time_select].ids[i] == String(params.name)) {
            //****************************** */
            break;
          }
          id++;
        }
        //取出相关数据
        var start = this.truck[time_select].ids[i]; //****************************** */
        //let row = state.dataBase.rows[i];
        let row = this.truck[time_select].rows[i]; //****************************** */
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
              no: value
            });
          }
        }
        console.log("temp: ", temp);
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
}
</style>

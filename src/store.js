import Vue from "vue";
import Vuex from "vuex";
import truck_01 from "./data/file_01.json";
import truck_02 from "./data/file_02.json";
import truck_03 from "./data/file_03.json";
import truck from "./data/file_2018.json";

import geoCoordData from "./data/geoCoordData.json";
import rate from "./data/sum.json";
import region from "./data/region.json";
import { Col } from "ant-design-vue";

import bi_index from "./data/region_index_paper260";

Vue.use(Vuex);

var datas = [];
let geoCoorddata = geoCoordData;

export default new Vuex.Store({
  state: {
    // out: 0, in: 1
    outOrIn: 0,
    mapData: [],
    totalMapData: [],
    dataBase: [],
    regionData: [],
    rateData: [],
    Total_DataBase: [], //****************************** */
    time: { "2018": 0, "2020.1": 1, "2020.2": 2, "2020.3": 3 }, //****************************** */
    Date: 2018,
    citySelected: new Array(27).fill(0),
    // 记录双边指数数据
    indexSelected: new Array(27).fill(0),
    totalIndex: [],
    indexMap: []
  },

  mutations: {
    dataFilter(state, cdata) {
      // let date = cdata[0];
      let city = cdata[1];
      // console.log("Total database", state.Total_DataBase);

      var id = 0;
      for (var i in state.Total_DataBase[0].ids) {
        //******************************** */
        if (state.Total_DataBase[0].ids[i] == city) {
          //****************************** */
          break;
        }
        id++;
      }
      if (id >= 27) {
        return;
      }
      //change state
      state.citySelected[id] = !state.citySelected[id];
      //每个时间段同步更新
      var total_temp = [];
      for (var date = 0; date < 4; date++) {
        //城市点
        var temp = [];
        for (var i in state.citySelected) {
          //console.log("State changed", i);
          if (!state.citySelected[i]) {
            continue;
          } else {
            //var start = state.dataBase.ids[i];
            var start = state.Total_DataBase[date].ids[i]; //****************************** */
            //let row = state.dataBase.rows[i];
            let row = state.Total_DataBase[date].rows[i]; //****************************** */

            var dest = "";
            var val = 0;
            var width = 1;
            var color = "#d94e5d";

            for (var cname in row) {
              if (Number(row[cname])) {
                dest = cname;
                val = row[cname];
                //console.log(val);
                if (Number(val) >= 20000) {
                  width = 14;
                  color = "#9900FF";
                } else if (Number(val) >= 15000) {
                  width = 13;
                  color = "#FF0000";
                } else if (Number(val) >= 10000) {
                  width = 12;
                  color = "#FF3333";
                } else if (Number(val) >= 8000) {
                  width = 11;
                  color = "#990033";
                } else if (Number(val) >= 5000) {
                  width = 10;
                  color = "#CC3366";
                } else if (Number(val) >= 3000) {
                  width = 9;
                  color = "990066";
                } else if (Number(val) >= 2000) {
                  width = 8;
                  color = "#993366";
                } else if (Number(val) >= 1000) {
                  width = 7;
                  color = "#999966";
                } else if (Number(val) >= 600) {
                  width = 6;
                  color = "#CC9933";
                } else if (Number(val) >= 400) {
                  width = 5;
                  color = "#9999FF";
                } else if (Number(val) >= 200) {
                  width = 4;
                  color = "#339933";
                } else if (Number(val) >= 100) {
                  width = 3;
                  color = "#33FF00";
                } else if (Number(val) >= 50) {
                  width = 2;
                  color = "#CCCC66";
                } else {
                  width = 1;
                  color = "#FFFF99";
                }

                temp.push({
                  name: start,
                  toname: dest,
                  coords: [geoCoorddata[start], geoCoorddata[dest]],
                  value: val,
                  symbol: "roundRect",
                  effect: {
                    show: true,
                    symbol: "image://https://s1.ax1x.com/2020/05/31/tlPuSe.png",
                    symbolSize: 20,
                    trailLength: 0.4
                  },

                  lineStyle: {
                    width: width,
                    color: color
                  }
                });
              }
            }
          }
        }
        total_temp.push(temp);
      }
      state.mapData = total_temp;
      // 设置时间 todo state.Date
      state.Date = date;
    },
    // 处理一体化指标数据
    indexFilter(state, cdata) {
      // let date = cdata[0];
      let city = cdata[1];
      // console.log("Total database", state.Total_DataBase);
      var id = 0;
      for (var i in state.Total_DataBase[0].ids) {
        //******************************** */
        if (state.Total_DataBase[0].ids[i] == city) {
          //****************************** */
          break;
        }
        id++;
      }
      if (id >= 27) {
        return;
      }
      //change state
      console.log("status", id);
      state.indexSelected[id] = !state.indexSelected[id];
      //每个时间段同步更新
      var total_temp = [];
      for (var date = 0; date < 10; date++) {
        //城市点
        var temp = [];
        for (var i in state.indexSelected) {
          if (!state.indexSelected[i]) {
            continue;
          } else {
            //var start = state.dataBase.ids[i];
            var start = state.totalIndex.ids[i]; //****************************** */
            //let row = state.dataBase.rows[i];
            let row = state.totalIndex[state.totalIndex.weeks[date]][i]; //****************************** */
            var dest = "";
            var val = 0;
            var width = 1;
            var color = "#d94e5d";

            for (var cname in row) {
              if (Number(row[cname])) {
                dest = cname;
                val = row[cname];
                if (Number(val) >= 1.5) {
                  width = 14;
                  color = "#ED2616";
                } else if (Number(val) >= 1.4) {
                  width = 13;
                  color = "#F73F04";
                } else if (Number(val) >= 1.3) {
                  width = 12;
                  color = "#F9660A";
                } else if (Number(val) >= 1.2) {
                  width = 11;
                  color = "#FBA408";
                } else if (Number(val) >= 1.1) {
                  width = 10;
                  color = "#BDE335";
                } else if (Number(val) >= 1.05) {
                  width = 9;
                  color = "#EEF364";
                } else if (Number(val) >= 1.0) {
                  width = 8;
                  color = "#ACF186";
                } else if (Number(val) >= 0.95) {
                  width = 7;
                  color = "#519DBA";
                } else if (Number(val) >= 0.9) {
                  width = 6;
                  color = "#18D9DB";
                } else if (Number(val) >= 0.8) {
                  width = 5;
                  color = "#51BAB5";
                } else if (Number(val) >= 0.7) {
                  width = 4;
                  color = "#256284";
                } else if (Number(val) >= 0.6) {
                  width = 3;
                  color = "#7E098F";
                } else if (Number(val) >= 0.5) {
                  width = 2;
                  color = "#BA51B8";
                } else {
                  width = 1;
                  color = "#84257A";
                }
                console.log("val", color);
                temp.push({
                  name: start,
                  toname: dest,
                  coords: [geoCoorddata[start], geoCoorddata[dest]],
                  value: val,
                  symbol: "roundRect",
                  effect: {
                    show: true,
                    symbol: "image://https://s1.ax1x.com/2020/05/31/tlPuSe.png",
                    symbolSize: 20,
                    trailLength: 0.4
                  },

                  lineStyle: {
                    width: width,
                    color: color
                  }
                });
              }
            }
          }
        }
        total_temp.push(temp);
      }
      state.indexMap = total_temp;
      // 设置时间 todo state.Date
      // state.Date = date;
    },
    setTableData(state, data) {
      //****************************** */

      state.dataBase = data[0];
      state.regionData.push(region);
      state.rateData.push(rate);
      state.Total_DataBase.push(data[0]); //*********************************************** */
      state.Total_DataBase.push(data[1]);
      state.Total_DataBase.push(data[2]);
      state.Total_DataBase.push(data[3]);
      state.totalIndex = data[4];
    }
  },
  actions: {
    getAllData({ commit }) {
      commit("setTableData", [truck, truck_01, truck_02, truck_03, bi_index]); //****************************** */
      commit("dataFilter", [0, 0]);
      commit("indexFilter", [0, 0]);
    },
    setData(context, [date, city]) {
      context.commit("dataFilter", [date, city]);
      context.commit("indexFilter", [date, city]);
    }
  }
});

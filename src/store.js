import Vue from "vue";
import Vuex from "vuex";
import truck_01 from "./data/file_01.json";
import truck_02 from "./data/file_02.json";
import truck_03 from "./data/file_03.json";
import truck from "./data/file_2018.json";
import geoCoordData from "./data/geoCoordData.json";
import region from "./data/region.json";
import { Col } from "ant-design-vue";

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
    Total_DataBase: [], //****************************** */
    time: { "2018": 0, "2020.1": 1, "2020.2": 2, "2020.3": 3 }, //****************************** */
    Date: 2018,
    citySelected: new Array(27).fill(0)
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
      //change state
      //console.log("status", state.citySelected);
      state.citySelected[id] = !state.citySelected[id];

      //每个时间段同步更新
      var total_temp = [];
      for (var date = 0; date < 4; date++) {
        //城市点
        var temp = [];
        for (var i in state.citySelected) {
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
                console.log(val);
                if (Number(val) >= 100000) {
                  width = 7;
                  color = "#9966FF";
                } else if (Number(val) >= 6000) {
                  width = 6;
                  color = "#CC99CC";
                } else if (Number(val) >= 4000) {
                  width = 5;
                  color = "#FF6666";
                } else if (Number(val) >= 3000) {
                  width = 4;
                  color = "#FF3300";
                } else if (Number(val) >= 2000) {
                  width = 3;
                  color = "#FF6600";
                } else if (Number(val) >= 600) {
                  width = 2;
                  color = "#FFCC00";
                } else {
                  width = 1;
                  color = "#99CC33";
                }

                temp.push({
                  name: start,
                  toname: dest,
                  coords: [geoCoorddata[start], geoCoorddata[dest]],
                  value: val,
                  symbol: "arrow",
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
    setTableData(state, data) {
      //****************************** */

      state.dataBase = data[0];
      state.regionData.push(region);
      state.Total_DataBase.push(data[0]); //*********************************************** */
      state.Total_DataBase.push(data[1]);
      state.Total_DataBase.push(data[2]);
      state.Total_DataBase.push(data[3]);
    }
  },
  actions: {
    getAllData({ commit }) {
      commit("setTableData", [truck, truck_01, truck_02, truck_03]); //****************************** */
      commit("dataFilter", [0, 0]);
    },
    setData(context, [date, city]) {
      context.commit("dataFilter", [date, city]);
    }
  }
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
// import Antd from 'ant-design-vue'
import "echarts/extension/bmap/bmap";
// import 'ant-design-vue/dist/antd.css'
import echarts from "echarts";
//import LkTimeline from 'lk-timeline'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//Vue.use(LkTimeline)
Vue.prototype.$echarts = echarts;

//import AmapVue from '@amap/amap-vue'

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
// Vue.use(Antd);

Vue.config.productionTip = true;
new Vue({
  router,
  el: "#app",
  store,
  render: h => h(App)
}).$mount("#app");

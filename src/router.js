import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "bmap",
      component: () => import("./views/indexMap.vue")
    },
    {
      path: "/Map",
      name: "bmap",
      component: () => import("./views/BMap.vue")
    },
    {
      path: "/BiIndex",
      name: "bmap",
      component: () => import("./views/BiIndexMap.vue")
    }
  ]
});

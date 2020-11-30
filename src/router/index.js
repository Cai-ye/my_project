import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/display",
    name: "diplay",
    component: () => import("../pages/Display.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

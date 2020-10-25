import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/auth/auth.vue"),
    children: [
      {
        path: "login",
        name: "auth-login",
        component: () => import("../views/auth/login.vue"),
      },
      {
        path: "register",
        name: "auth-register",
        component: () => import("../views/auth/register.vue")
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

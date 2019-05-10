import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About";
import Detail from "./views/Detail";

import NotFound from './views/errors/NotFound';

import delicacyCookie from './cookies/delicacy';

Vue.use(Router);


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound
    }
  ]
});

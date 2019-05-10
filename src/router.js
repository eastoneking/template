import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About";
import Detail from "./views/Detail";

import NotFound from './views/errors/NotFound';

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
            path: "/delicacy",
            name: "delicacy",
            component: About
        },{
            path: "/delicacy/:id",
            name: "delicacy-detail",
            component: Detail,
            props: true
        },
        {
            path: "*",
            name: "not-found",
            component: NotFound
        }
    ]
});

import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);
const router = new Router({
    base: "/",
    mode: "history",
    linkActiveClass: "active",
    routes: routes
});

export default router;

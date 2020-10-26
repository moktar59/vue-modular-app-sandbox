import Vue from "vue";
import Router from "vue-router";
import BlogRoutes from "./blogs/routes";
import UserRoutes from "./users/routes";

Vue.use(Router);

export default new Router({
  routes: [...BlogRoutes, ...UserRoutes]
});

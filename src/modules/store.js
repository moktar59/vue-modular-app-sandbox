import Vue from "vue";
import Vuex from "vuex";
import PostStore from "./blogs/store";
import UserStore from "./users/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PostStore,
    UserStore
  }
});

import Vue from "vue";
import App from "./App.vue";
import router from "./modules/routes";
import Store from "./modules/store";
import i18n from "./modules/i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  Store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ContextMenu from "./contextmenu";

Vue.config.productionTip = false;
Vue.use(ContextMenu);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

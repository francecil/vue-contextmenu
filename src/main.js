import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ContextMenu from "./contextmenu";
Vue.use(ContextMenu);
// import { ContextMenu } from "./contextmenu";
// Vue.component(ContextMenu.name, ContextMenu);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

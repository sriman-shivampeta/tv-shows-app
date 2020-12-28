import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/styles/_variables.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.directive("router-back", {
  bind(el) {
    el.addEventListener("click", e => {
      e.preventDefault();
      router.go(-1);
    });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

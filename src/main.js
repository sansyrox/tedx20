import Vue from "vue";
import VueAnime from "vue-animejs";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.use(Buefy);
Vue.use(VueAnime);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

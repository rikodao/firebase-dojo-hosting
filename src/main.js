import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import config from "./firebase-config";
import * as firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

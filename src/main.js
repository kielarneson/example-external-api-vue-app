import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var token = localStorage.getItem("github_access_token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "Token " + token;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

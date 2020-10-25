import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { store as AuthStore } from "./store/auth/store";

//#region axios

import axios from 'axios';

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};

//#endregion
//#region global vars

Vue.prototype.$axios = axios;
Vue.prototype.$auth  = AuthStore;

//#endregion
//#region register components

const registerComponents = (files: any, prefix: string) => {
  files.keys().map((key: string) => {
    const name = key.split('/').pop()?.toLowerCase().split('.').shift()
    console.log(`v${prefix}-${name}`)
    Vue.component(`v${prefix}-${name}`, files(key).default)
  });
}

registerComponents(require.context('./components/', true, /\.vue$/i), '')
registerComponents(require.context('./layouts/', true, /\.vue$/i), '-layout')
registerComponents(require.context('./svg/', true, /\.vue$/i), '-svg')

//#endregion

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

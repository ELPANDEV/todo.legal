import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store, { AuthStateTypes } from "./store";

//#region axios

import axios, { AxiosStatic } from 'axios';

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};

//#endregion
//#region global vars and types

Vue.prototype.$axios = axios;
Vue.prototype.$auth  = store.state.auth;

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic,
    $auth: AuthStateTypes
  }
}

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

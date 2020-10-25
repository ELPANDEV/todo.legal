import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface StateTypes {
  auth: AuthStateTypes
}

export interface AuthStateTypes {
  loggedIn: boolean
}

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: false
    }
  } as StateTypes,
  mutations: {},
  actions: {},
  modules: {}
});

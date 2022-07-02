import Vue from "vue";
import Vuex from "vuex";
import tabBer from "../store/tabBer.js";
import getters from "../store/getters.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    tabBer,
  },
  getters,
});

export default store;

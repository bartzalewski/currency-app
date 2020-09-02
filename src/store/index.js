import Vuex from 'vuex';
import Vue from 'vue';
import tiles from './modules/tiles';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tiles,
  },
});

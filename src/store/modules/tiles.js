import axios from 'axios';

const state = {
  tiles: [],
};

const getters = {
  allCurrency: (state) => state.tiles,
};

const actions = {
  async fetchTiles({ commit }) {
    const response = await axios.get(
      'http://api.nbp.pl/api/exchangerates/tables/a'
    );

    commit('setTiles', response.data[0].rates);
  },
};

const mutations = {
  setTiles: (state, tiles) => (state.tiles = tiles),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

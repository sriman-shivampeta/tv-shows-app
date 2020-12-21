import Vue from "vue";
import Vuex from "vuex";
import { getAllTvShows } from "@/service/httpClient";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    showsList: []
  },
  getters: {
    loading: state => state.loading,
    showsList: state => state.showsList
  },
  mutations: {
    CHANGE_LOADING_STATUS(state, message) {
      state.loading = message;
    },
    SAVE_SHOWLIST: (state, message) => {
      state.showsList = message;
      state.loading = false;
    }
  },
  actions: {
    async getAllTvShows({ commit }) {
      await getAllTvShows()
        .then(result => {
          commit("SAVE_SHOWLIST", result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});

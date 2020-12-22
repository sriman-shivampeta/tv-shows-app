import Vue from "vue";
import Vuex from "vuex";
import { getAllTvShows, getTvShowById } from "@/service/httpClient";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    showsList: [],
    showDetails: {}
  },
  getters: {
    loading: state => state.loading,
    showsList: state => state.showsList,
    showDetails: state => state.showDetails,
    getListsByGenre: state => genre => {
      return state.showsList
        .filter(show => {
          return show.genres.includes(genre);
        })
        .sort((showA, showB) => {
          var ratingA = showA.rating.average;
          var ratingB = showB.rating.average;
          return ratingB - ratingA;
        });
    }
  },
  mutations: {
    CHANGE_LOADING_STATUS(state, message) {
      state.loading = message;
    },
    SAVE_SHOWLIST: (state, message) => {
      state.showsList = message;
      state.loading = false;
    },
    SAVE_SHOW_DETAILS: (state, message) => {
      state.showDetails = message;
      state.loading = false;
    }
  },
  actions: {
    async getAllTvShows({ commit }) {
      commit("CHANGE_LOADING_STATUS", true);
      await getAllTvShows()
        .then(result => {
          commit("SAVE_SHOWLIST", result);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getTvShowById({ commit }, id) {
      commit("CHANGE_LOADING_STATUS", true);
      await getTvShowById(id)
        .then(result => {
          commit("SAVE_SHOW_DETAILS", result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});

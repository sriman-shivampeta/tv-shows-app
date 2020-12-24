import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import store from "../../../src/store/index";
import {
  getAllTvShows,
  getTvShowById,
  getTvShowsByName
} from "../../../src/service/httpClient";
import {
  allTvShowsResponse,
  showDetails,
  searchedShows
} from "../service/response_mock";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Store.spec.js", () => {
  describe("Checking Getters functions ... !", () => {
    test("Check loading method", () => {
      expect(store.getters.loading).toBe(true);
    });
    test("Check showsList method", () => {
      expect(store.getters.showsList).toStrictEqual([]);
    });
    test("Check showsList method", () => {
      expect(store.getters.showDetails).toStrictEqual({});
    });
    test("Check searchedShows method", () => {
      expect(store.getters.searchedShows).toStrictEqual([]);
    });
    test("Check getListsByGenre method", () => {
      store.commit("SAVE_SHOWLIST", allTvShowsResponse.data);
      expect(store.getters.getListsByGenre.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Checking Mutation functions ... !", () => {
    test("Check CHANGE_LOADING_STATUS method", () => {
      store.commit("CHANGE_LOADING_STATUS", true);
      expect(store.getters.loading).toBe(true);
    });
    test("Check SAVE_SHOWLIST method", () => {
      store.commit("SAVE_SHOWLIST", allTvShowsResponse.data);
      expect(store.getters.showsList).toBe(allTvShowsResponse.data);
    });
    test("Check SAVE_SHOW_DETAILS method", () => {
      store.commit("SAVE_SHOW_DETAILS", showDetails);
      expect(store.getters.showDetails).toBe(showDetails);
    });
    test("Check SAVE_SEARCHED_SHOWS method", () => {
      store.commit("SAVE_SEARCHED_SHOWS", searchedShows);
      expect(store.getters.searchedShows).toStrictEqual(searchedShows);
    });
  });

  describe("Checking Actions Success response call.", () => {
    store.dispatch("getAllTvShows");
    test("Check getAllTvShows Api Call.", async () => {
      const result = await getAllTvShows();
      store.commit("SAVE_SHOWLIST", result.slice(0, 2));
      expect(store.getters.showsList).toStrictEqual(allTvShowsResponse.data);
    });
    test("Check getTvShowById Api Call.", async () => {
      store.dispatch("getTvShowById");
      const result = await getTvShowById(204);
      store.commit("SAVE_SHOW_DETAILS", result);
      expect(store.getters.showDetails).toStrictEqual(showDetails);
    });
    test("Check getTvShowsByName Api Call.", async () => {
      store.dispatch("getTvShowsByName");
      const result = await getTvShowsByName("Person");
      store.commit("SAVE_SEARCHED_SHOWS", result.slice(0, 2));
      expect(store.getters.searchedShows.length).toBeGreaterThan(1);
    });
  });
});

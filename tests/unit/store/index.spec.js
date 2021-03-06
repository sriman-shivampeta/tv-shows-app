import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import store from "@/store/index";
import {
  getAllTvShows,
  getTvShowById,
  getTvShowsByName
} from "@/service/httpClient";
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
      expect(store.getters.loading).toBe(false);
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
    test("Check getShowsByGenre method", () => {
      store.commit("SAVE_SHOWLIST", allTvShowsResponse.data);
      expect(
        store.getters.getShowsByGenre("Popular").length
      ).toBeGreaterThanOrEqual(1);
      expect(
        store.getters.getShowsByGenre("Action").length
      ).toBeGreaterThanOrEqual(1);
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
      expect(store.getters.searchedShows.length).toBeGreaterThan(1);
    });
  });

  describe("Checking Actions Success response call.", () => {
    test("Check getAllTvShows Api Call.", async () => {
      store.dispatch("getAllTvShows");
      const result = await getAllTvShows();
      store.commit("SAVE_SHOWLIST", result.slice(0, 2));
      expect(store.getters.showsList).toStrictEqual(allTvShowsResponse.data);
    });
    test("Check getTvShowById Api Call.", async () => {
      const id = 204;
      store.dispatch("getTvShowById", id);
      const result = await getTvShowById(id);
      store.commit("SAVE_SHOW_DETAILS", result);
      expect(store.getters.showDetails).toStrictEqual(showDetails);
    });
    test("Check getTvShowsByName Api Call.", async () => {
      store.dispatch("getTvShowsByName");
      const result = await getTvShowsByName("Person");
      store.commit("SAVE_SEARCHED_SHOWS", result);
      expect(store.getters.searchedShows.length).toBeGreaterThanOrEqual(1);
    });
  });
});
